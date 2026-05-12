// scripts/test-accessibility.js
import puppeteer from "puppeteer";
import { globby } from "globby";
import path from "path";
import fs from "fs/promises";
import axeSource from "axe-core";

const SITE_DIR = path.resolve("_site");
const REPORT_PATH = path.resolve("test/accessibility-report.json");

(async () => {
  console.log("🔍 Starting accessibility audit...\n");

  const files = await globby(`${SITE_DIR}/**/*.html`);
  console.log(`Found ${files.length} pages to test.`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let totalViolations = 0;
  const report = [];

  for (const file of files) {
    const relPath = path.relative(SITE_DIR, file);
    const url = `file://${file}`;
    console.log(`\n🧪 Testing: ${relPath}`);

    await page.goto(url);
    await page.addScriptTag({ content: axeSource.source });

    const results = await page.evaluate(async () => {
      return await window.axe.run(document);
    });

    const pageReport = {
      path: relPath,
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        help: v.help,
        helpUrl: v.helpUrl,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          html: n.html,
          failureSummary: n.failureSummary,
        })),
      })),
    };

    report.push(pageReport);

    if (results.violations.length > 0) {
      totalViolations += results.violations.length;
      console.log(`❌ ${results.violations.length} issues found on ${relPath}`);
    } else {
      console.log(`✅ No issues on ${relPath}`);
    }
  }

  await browser.close();

  const summary = {
    timestamp: new Date().toISOString(),
    totalPages: files.length,
    totalViolations,
    pagesWithIssues: report.filter((r) => r.violations.length > 0).length,
  };

  const output = { summary, pages: report };

  await fs.writeFile(REPORT_PATH, JSON.stringify(output, null, 2));
  console.log(`\n📄 Report written to: ${REPORT_PATH}`);

  if (totalViolations > 0) {
    console.log(`❌ ${totalViolations} total issues found.`);
    process.exitCode = 1; // fail build
  } else {
    console.log(`✅ All pages passed accessibility checks!`);
  }
})();
