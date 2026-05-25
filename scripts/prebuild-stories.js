import fs from "fs";
import path from "path";
import nunjucks from "nunjucks";
import markdownIt from "markdown-it";

const componentsDir = "src/_includes/components";
const prebuildDir = "prebuilt";
const usedComponentsFile = path.join(prebuildDir, "used-components.json");

// Ensure prebuild folder exists
if (!fs.existsSync(prebuildDir)) fs.mkdirSync(prebuildDir, { recursive: true });

const env = nunjucks.configure([componentsDir, "src/_includes"], { autoescape: true });

// Register custom filters used in components
env.addFilter("split", (str, sep) => str.split(sep));
env.addFilter("map", (array, property) => {
  if (!Array.isArray(array)) return [];
  return array.map((item) => item[property]);
});
env.addFilter("min", (array) => {
  if (!Array.isArray(array) || array.length === 0) return 0;
  return Math.min(...array.filter((n) => typeof n === "number"));
});
env.addFilter("max", (array) => {
  if (!Array.isArray(array) || array.length === 0) return 0;
  return Math.max(...array.filter((n) => typeof n === "number"));
});
env.addFilter("math", (v1, operator, v2) => {
  v1 = Number(v1);
  v2 = Number(v2);
  switch (operator) {
    case "+":
      return v1 + v2;
    case "-":
      return v1 - v2;
    case "*":
      return v1 * v2;
    case "/":
      return v1 / v2;
    default:
      return v1;
  }
});
env.addFilter("padStart", (value, length = 2, char = "0") => {
  if (value === undefined || value === null) return "";
  return String(value).padStart(length, char);
});
env.addFilter("groupBy", (array, prop) => {
  if (!Array.isArray(array)) return [];
  const groups = {};
  array.forEach((item) => {
    const key = item[prop] || "unknown";
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return Object.keys(groups).map((key) => ({
    grouper: key,
    items: groups[key],
  }));
});
env.addFilter("markdown", (content) => {
  if (!content) return "";
  const md = markdownIt({ html: true });
  return md.render(content);
});
env.addFilter("safe", (str) => str);

// Recursively get all component files
function getComponentFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getComponentFiles(fullPath));
    } else if (entry.name.endsWith(".njk") && !entry.name.endsWith(".render.njk")) {
      files.push(fullPath);
    }
  }
  return files;
}

// Load metadata including examples
function getMetadata(componentDir) {
  const metaFile = path.join(componentDir, "component.meta.json");
  if (!fs.existsSync(metaFile)) return null;
  return JSON.parse(fs.readFileSync(metaFile, "utf-8"));
}

// Track which components are used
const usedComponents = new Set();

// Render and prebuild HTML + Storybook stories
function generateStories() {
  const componentFiles = getComponentFiles(componentsDir);

  componentFiles.forEach((file) => {
    const relPath = path.relative(componentsDir, file).replace(/\\/g, "/"); // normalize paths
    const componentName = path.basename(file, ".njk");
    const componentDir = path.dirname(file);

    // Load metadata (optional examples)
    const meta = getMetadata(componentDir) || {};

    // --- SKIP macro-only components without a render wrapper ---
    if (componentName.startsWith("image")) {
      console.log(`⚠️ Skipping macro-only component: ${componentName}`);
      return;
    }

    // For macro components, use .render.njk wrapper if available
    const renderWrapper = path.join(
      componentDir,
      `${componentName}.render.njk`
    );
    const isMacro = !!meta.macro;
    if (isMacro && !fs.existsSync(renderWrapper)) {
      console.log(
        `⚠️ Skipping macro component without render wrapper: ${componentName}`
      );
      return;
    }

    const renderPath = isMacro
      ? path.relative(componentsDir, renderWrapper).replace(/\\/g, "/")
      : relPath;

    const examples = meta.examples || { Default: {} };

    // Track used components
    usedComponents.add(componentName);

    // Prebuild HTML
    const componentPrebuildDir = path.join(prebuildDir, componentName);
    fs.mkdirSync(componentPrebuildDir, { recursive: true });

    for (const [exampleName, props] of Object.entries(examples)) {
      const mergedProps = { ...meta, ...props };
      const rendered = env.render(renderPath, mergedProps);
      const outPath = path.join(componentPrebuildDir, `${exampleName}.html`);
      fs.writeFileSync(outPath, rendered);
    }

    // Detect CSS/JS files
    let importLines = "";
    const cssFile = path.join(componentDir, `${componentName}.css`);
    const jsFile = path.join(componentDir, `${componentName}.js`);
    if (fs.existsSync(cssFile))
      importLines += `import './${componentName}.css';\n`;

    // If meta.init is set, import the named function; otherwise side-effect import
    const initFn = meta.init || null;
    if (fs.existsSync(jsFile)) {
      if (initFn) {
        importLines += `import { ${initFn} } from './${componentName}.js';\n`;
      } else {
        importLines += `import './${componentName}.js';\n`;
      }
    }

    // Generate Storybook story
    const storyFile = path.join(componentDir, `${componentName}.stories.js`);
    const {
      title = `Components/${componentName}`,
      description = "",
      status = "",
      tags = [],
    } = meta;

    // Build decorator that calls init function after render
    const decoratorBlock = initFn
      ? `\n  decorators: [\n    (storyFn) => {\n      const container = document.createElement('div');\n      container.innerHTML = storyFn();\n      ${initFn}(container);\n      return container;\n    },\n  ],`
      : "";

    const storyContent = `
${importLines}export default {
  title: ${JSON.stringify(title)},
  parameters: {
    docs: { description: { component: ${JSON.stringify(description)} } },
    status: ${JSON.stringify(status)},
  },${decoratorBlock}
  tags: ${JSON.stringify(tags)},
};

${Object.entries(examples)
  .map(([name, props]) => {
    const mergedProps = { ...meta, ...props };
    const html = env.render(renderPath, mergedProps).replace(/`/g, "\\`");
    const safeName = name.replace(/[^a-zA-Z0-9_$]/g, "_");
    return `export const ${safeName} = () => \`${html}\`;\n${safeName}.storyName = ${JSON.stringify(name)};`;
  })
  .join("\n")}
`;
    fs.writeFileSync(storyFile, storyContent.trim());

    console.log(
      `✅ Prebuilt ${componentName} (${Object.keys(examples).length} examples)`
    );
  });

  // Update used components JSON
  fs.writeFileSync(
    usedComponentsFile,
    JSON.stringify([...usedComponents], null, 2)
  );
  console.log(`✅ Updated used components → ${usedComponentsFile}`);
}

generateStories();
console.log("All stories generated successfully.");
