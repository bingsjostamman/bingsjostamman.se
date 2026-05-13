import chokidar from "chokidar";
import { exec } from "child_process";

// Watch patterns
const watchCss = ["src/css/**/*.css", "src/_includes/components/**/*.css"];
const ignoredCss = ["**/entry.css"];

const watchTemplates = ["src/_includes/**/*.njk", "src/**/*.njk"];

function run(cmd) {
  const p = exec(cmd);
  p.stdout.pipe(process.stdout);
  p.stderr.pipe(process.stderr);
}

// ----------------------
// When CSS changes → regenerate entry.css
// ----------------------
chokidar.watch(watchCss, { ignored: ignoredCss }).on("change", (file) => {
  console.log(`🔄 CSS changed: ${file}`);
  run("node scripts/generate-entry-css.js");
});

// ----------------------
// When templates change → rebuild used-component list
// ----------------------
chokidar.watch(watchTemplates).on("change", (file) => {
  console.log(`🔄 Template changed: ${file}`);
  run("node scripts/prebuild-stories.js");
});
