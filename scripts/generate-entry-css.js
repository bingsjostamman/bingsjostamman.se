import fs from "fs";
import path from "path";
import stylelint from "stylelint";

const componentsDir = "src/_includes/components";
const layers = [
  "01-settings",
  "02-tools",
  "03-generic",
  "04-elements",
  "05-objects",
  "06-components",
  "07-utilities",
];
const prebuildDir = "prebuilt";
const entryPath = path.resolve("src/css/entry.css");

// ----------------------
// Helpers
// ----------------------
function getGlobalCssFiles() {
  const files = [];
  for (const layer of layers) {
    const layerDir = path.resolve("src/css", layer);
    if (!fs.existsSync(layerDir)) continue;
    const layerFiles = fs
      .readdirSync(layerDir)
      .filter((f) => f.endsWith(".css"))
      .map((f) => path.resolve(layerDir, f));
    files.push(...layerFiles);
  }
  return files;
}

function getUsedComponents() {
  const file = path.resolve(prebuildDir, "used-components.json");
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function getUsedComponentCss() {
  const used = getUsedComponents();
  const cssFiles = [];
  used.forEach((name) => {
    const cssPath = path.resolve(componentsDir, name, `${name}.css`);
    if (fs.existsSync(cssPath)) {
      cssFiles.push(cssPath);
    } else {
      console.warn(`⚠️ Component CSS missing: ${cssPath}`);
    }
  });
  return cssFiles;
}

// ----------------------
// Convert absolute → relative to entry.css
// ----------------------
function toRelative(file) {
  return "./" + path.relative(path.dirname(entryPath), file);
}

// ----------------------
// Generate entry.css
// ----------------------
const globalCss = getGlobalCssFiles();
const componentCss = getUsedComponentCss();
const allCssFiles = [...globalCss, ...componentCss];

const imports = allCssFiles.map((f) => `@import "${toRelative(f)}";`);

fs.writeFileSync(entryPath, imports.join("\n"));

console.log(
  `✅ entry.css generated with ${globalCss.length} global + ${componentCss.length} component CSS imports`
);

// ----------------------
// Stylelint auto-fix
// ----------------------
// if (process.env.DEBUG_CSS === "true") {
//   (async () => {
//     try {
//       const report = await stylelint.lint({
//         files: allCssFiles,
//         fix: true,
//         configFile: "stylelint.config.cjs",
//       });
//       await Promise.all(
//         report.results.map(
//           (r) => r.output && fs.promises.writeFile(r.source, r.output)
//         )
//       );
//       console.log("✅ CSS linted and auto-fixed");
//     } catch (err) {
//       console.error("❌ Stylelint failed:", err);
//     }
//   })();
// }
