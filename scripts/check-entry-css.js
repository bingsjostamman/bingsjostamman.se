import fs from "fs";
import path from "path";

const entryCssPath = path.resolve("src/css/entry.css");

if (!fs.existsSync(entryCssPath)) {
  console.error(`❌ ${entryCssPath} does not exist`);
  process.exit(1);
}

const content = fs.readFileSync(entryCssPath, "utf-8");
const lines = content.split("\n");

console.log(`✅ ${entryCssPath} exists`);
console.log(`\n--- Entry CSS Content Preview ---\n`);

// Show first 20 lines for quick sanity check
lines.slice(0, 20).forEach((line) => console.log(line));

console.log(`\n... (${lines.length} total lines)`);

// Check that all @import files exist
const importRegex = /@import\s+["'](.+?)["'];/;
let missing = 0;

lines.forEach((line) => {
  const match = line.match(importRegex);
  if (match) {
    const importPath = path.resolve("src/css", match[1]);
    if (!fs.existsSync(importPath)) {
      console.warn(`⚠️ Missing CSS file: ${importPath}`);
      missing++;
    }
  }
});

if (missing === 0) {
  console.log(`✅ All imported CSS files exist`);
} else {
  console.warn(`⚠️ ${missing} missing CSS file(s) found`);
}
