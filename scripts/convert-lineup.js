/**
 * Convert lineup Excel file (e.g. lineup.xlsx) to JSON for Eleventy.
 * ---------------------------------------------------------------
 * Usage: node tools/convert-lineup.js lineup-2025.xlsx
 *
 * Creates: src/_data/lineup2025.json
 */

import fs from "fs-extra";
import path from "path";
import xlsx from "xlsx";

// ----------------------
// 1. Input + output
// ----------------------
const inputFile = process.argv[2];
if (!inputFile) {
  console.error("❌ Usage: node tools/convert-lineup.js <input.xlsx>");
  process.exit(1);
}

const workbook = xlsx.readFile(inputFile);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(sheet, { raw: true });

// ----------------------
// 2. Helpers
// ----------------------
function excelTimeToString(value) {
  if (typeof value !== "number") return value;
  const totalSeconds = Math.round(value * 24 * 60 * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

function hhmmToMinutes(hhmm) {
  if (!hhmm) return 0;
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

// ----------------------
// 3. Clean + normalize
// ----------------------
const cleaned = rows
  .filter((row) => row.name)
  .map((row) => {
    const starttime = excelTimeToString(row.starttime || "");
    const endtime = excelTimeToString(row.endtime || "");
    const startMinutes = hhmmToMinutes(starttime);
    const endMinutes = hhmmToMinutes(endtime);

    return {
      day: row.day || "",
      stage: row.stage || "",
      name: row.name.trim(),
      url: row.url || "",
      description: row.description || "",
      link: row.link || "",
      image: row.image || "",
      starttime,
      endtime,
      startMinutes,
      endMinutes,
    };
  });

// ----------------------
// 4. Determine year
// ----------------------
const match = inputFile.match(/(\d{4})/);
const year = match ? match[1] : "unknown";

// ----------------------
// 5. Write JSON
// ----------------------
const outputDir = path.resolve(`src/editions/${year}`);
await fs.ensureDir(outputDir);
const outputFile = path.join(outputDir, `lineup.json`);

await fs.writeJson(outputFile, cleaned, { spaces: 2 });

console.log(`✅ Exported ${cleaned.length} acts to ${outputFile}`);
