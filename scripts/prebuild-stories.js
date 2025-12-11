import fs from "fs";
import path from "path";
import nunjucks from "nunjucks";

const componentsDir = "src/_includes/components";
const prebuildDir = "prebuilt";
const usedComponentsFile = path.join(prebuildDir, "used-components.json");

// Ensure prebuild folder exists
if (!fs.existsSync(prebuildDir)) fs.mkdirSync(prebuildDir, { recursive: true });

const env = nunjucks.configure(componentsDir, { autoescape: true });

// Recursively get all component files
function getComponentFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getComponentFiles(fullPath));
    } else if (entry.name.endsWith(".njk")) {
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

    // --- SKIP macro-only image components ---
    if (componentName.startsWith("image")) {
      console.log(`⚠️ Skipping macro-only component: ${componentName}`);
      return;
    }

    // Load metadata (optional examples)
    const meta = getMetadata(componentDir) || {};
    const examples = meta.examples || { Default: {} };

    // Track used components
    usedComponents.add(componentName);

    // Prebuild HTML
    const componentPrebuildDir = path.join(prebuildDir, componentName);
    fs.mkdirSync(componentPrebuildDir, { recursive: true });

    for (const [exampleName, props] of Object.entries(examples)) {
      const mergedProps = { ...meta, ...props };
      const rendered = env.render(relPath, mergedProps);
      const outPath = path.join(componentPrebuildDir, `${exampleName}.html`);
      fs.writeFileSync(outPath, rendered);
    }

    // Detect CSS/JS files
    let importLines = "";
    const cssFile = path.join(componentDir, `${componentName}.css`);
    const jsFile = path.join(componentDir, `${componentName}.js`);
    if (fs.existsSync(cssFile))
      importLines += `import './${componentName}.css';\n`;
    if (fs.existsSync(jsFile))
      importLines += `import './${componentName}.js';\n`;

    // Generate Storybook story
    const storyFile = path.join(componentDir, `${componentName}.stories.js`);
    const {
      title = `Components/${componentName}`,
      description = "",
      status = "",
      tags = [],
    } = meta;

    const storyContent = `
${importLines}export default {
  title: ${JSON.stringify(title)},
  parameters: {
    docs: { description: { component: ${JSON.stringify(description)} } },
    status: ${JSON.stringify(status)},
  },
  tags: ${JSON.stringify(tags)},
};

${Object.entries(examples)
  .map(([name, props]) => {
    const mergedProps = { ...meta, ...props };
    const html = env.render(relPath, mergedProps).replace(/`/g, "\\`");
    return `export const ${name} = () => \`${html}\`;`;
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
