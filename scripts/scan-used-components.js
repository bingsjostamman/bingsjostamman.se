import fs from "fs";
import path from "path";

const srcDir = "src";
const componentsDir = path.join(srcDir, "_includes/components");
const prebuildDir = "prebuilt";

function getAllTemplates(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...getAllTemplates(full));
    else if (/\.(njk|md|html)$/.test(e.name)) files.push(full);
  }
  return files;
}

function detectUsedComponents() {
  const templates = getAllTemplates(srcDir);
  const used = new Set();

  const includeRegex = /include ["']components\/([\w-]+)\/\1\.njk["']/g;

  templates.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    let match;
    while ((match = includeRegex.exec(content))) {
      used.add(match[1]);
    }
  });

  fs.mkdirSync(prebuildDir, { recursive: true });
  const usedComponentsFile = path.join(prebuildDir, "used-components.json");
  fs.writeFileSync(usedComponentsFile, JSON.stringify([...used], null, 2));
  console.log("✅ used-components.json updated:", [...used]);
}

detectUsedComponents();
