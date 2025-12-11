// src/_data/accessibility.js
import fs from "fs";

export default function () {
  const reportPath = "test/accessibility-report.json";
  if (fs.existsSync(reportPath)) {
    const data = JSON.parse(fs.readFileSync(reportPath, "utf8"));
    return data;
  }

  // fallback if no report yet (e.g., first build)
  return {
    summary: {
      totalPages: 0,
      totalViolations: 0,
      pagesWithIssues: 0,
      timestamp: null,
    },
    pages: [],
  };
}
