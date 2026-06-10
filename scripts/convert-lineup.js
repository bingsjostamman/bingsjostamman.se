/**
 * Convert lineup Excel file (e.g. lineup.xlsx) to JSON for Eleventy.
 * ---------------------------------------------------------------
 * Usage: node scripts/convert-lineup.js data/lineup-2025.xlsx
 *
 * Creates: src/_data/lineup2025.json
 */

import fs from "fs-extra";
import { type } from "os";
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

// Get header row explicitly to ensure we capture all columns
const rawData = xlsx.utils.sheet_to_json(sheet, { raw: true, defval: "" });

// Get all unique column names from header and data
const allHeaders = new Set();
if (sheet["!ref"]) {
  const range = xlsx.utils.decode_range(sheet["!ref"]);
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cellAddress = xlsx.utils.encode_cell({ r: 0, c: C });
    const cell = sheet[cellAddress];
    if (cell && cell.v) {
      allHeaders.add(cell.v);
    }
  }
}

// Merge with headers from actual data
rawData.forEach(row => {
  Object.keys(row).forEach(key => allHeaders.add(key));
});

// Re-read the sheet with all headers
const rows = rawData.map((row, idx) => {
  const fullRow = { ...row };
  allHeaders.forEach(header => {
    if (!(header in fullRow)) {
      fullRow[header] = "";
    }
  });
  return fullRow;
});

console.log("📋 Columns found:", Array.from(allHeaders).sort());

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

/**
 * Normalize a time string for display (mod 24).
 * "24:15" → "00:15", "25:00" → "01:00"
 * Use 24+ notation in the Excel for post-midnight times;
 * this keeps startMinutes/endMinutes correct for grid positioning
 * while showing proper clock times in templates.
 */
function normalizeDisplayTime(hhmm) {
  if (!hhmm) return "";
  const [h, m] = hhmm.split(":").map(Number);
  const normalizedH = h % 24;
  return `${normalizedH.toString().padStart(2, "0")}:${m
    .toString()
    .padStart(2, "0")}`;
}

function preserveZeroOrEmpty(value) {
  return value === 0 || value ? value : "";
}

// ----------------------
// 3. Clean + normalize
// ----------------------
const cleaned = rows
  .filter((row) => row.name)
  .map((row) => {
    const starttime = excelTimeToString(preserveZeroOrEmpty(row.starttime));
    const endtime = excelTimeToString(preserveZeroOrEmpty(row.endtime));
    const hasStarttime = !!(row.starttime || row.starttime === 0);
    const hasEndtime = !!(row.endtime || row.endtime === 0);
    const startMinutes = hhmmToMinutes(starttime);
    const endMinutes = hhmmToMinutes(endtime);

    return {
      day: row.day || "",
      stage: row.stage || "",
      type: row.type || "",
      placement: row.placement || "",
      page: row.page || "",
      name: row.name.trim(),
      ref: (row.ref !== undefined && row.ref !== null) ? String(row.ref) : "",
      description: row.description || "",
      link: row.link || "",
      longdescription: row.longdescription || "",
      longdescription2: row.longdescription2 || "",
      longdescription3: row.longdescription3 || "",
      somedescription: row.somedescription || "",
      eyebrow: row.eyebrow || "",
      image: row.image || "",
      starttime,
      endtime,
      hasStarttime,
      hasEndtime,
      startMinutes,
      endMinutes,
    };
  });

// ----------------------
// 3b. Fix post-midnight times
// ----------------------
// Festival days run past midnight. Excel can't store 24+ hour values,
// so 00:40 (Wednesday) could be early morning OR post-midnight continuation.
// Heuristic: if a day has acts starting at/after noon (>= 720 min), then
// any act before 06:00 (< 360 min) is a post-midnight continuation → add 24h.
const POST_MIDNIGHT_CUTOFF = 360; // 06:00
const EVENING_THRESHOLD = 720; // 12:00

const dayHasEvening = {};
for (const act of cleaned) {
  if (act.startMinutes >= EVENING_THRESHOLD) {
    dayHasEvening[act.day] = true;
  }
}

for (const act of cleaned) {
  if (!dayHasEvening[act.day]) continue;

  // Shift start time if it's in the post-midnight zone
  if (act.hasStarttime && act.startMinutes < POST_MIDNIGHT_CUTOFF) {
    act.startMinutes += 1440;
  }

  // Shift end time if it's in the post-midnight zone
  if (act.hasEndtime && act.endMinutes < POST_MIDNIGHT_CUTOFF) {
    act.endMinutes += 1440;
  }

  // Safeguard: if end still < start after shifting
  if (act.hasEndtime && act.hasStarttime && act.endMinutes < act.startMinutes) {
    act.endMinutes += 1440;
  }
}

// Clean up temporary flags
for (const act of cleaned) {
  delete act.hasStarttime;
  delete act.hasEndtime;
}

// Display times are always proper 24h clock (mod 24)
for (const act of cleaned) {
  act.starttime = normalizeDisplayTime(act.starttime);
  act.endtime = normalizeDisplayTime(act.endtime);
}

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
