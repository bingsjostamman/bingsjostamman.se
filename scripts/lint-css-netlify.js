import stylelint from "stylelint";

async function runStylelint() {
  console.log("🔍 Running Stylelint for Netlify production build...");

  const report = await stylelint.lint({
    files: ["src/css/**/*.css"],
    formatter: "string",
    configFile: "stylelint.config.cjs",
  });

  if (report.errored) {
    console.error("❌ Stylelint found errors:");
    console.error(report.output);
    process.exit(1); // fail the build
  } else {
    console.log("✅ CSS passed Stylelint checks.");
  }
}

runStylelint().catch((err) => {
  console.error("❌ Stylelint run failed:", err);
  process.exit(1);
});
