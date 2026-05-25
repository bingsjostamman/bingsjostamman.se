import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

// ----------------------------------------------------------------------
// Environment loading
// ----------------------------------------------------------------------
// Load local env files when running outside CI/Netlify. Explicit shell env
// vars still take precedence since dotenv does not override by default.
function loadLocalEnvFiles() {
  const isHostedEnv = Boolean(process.env.CI || process.env.NETLIFY);
  if (isHostedEnv) return;

  const candidates = [
    ".env.local",
    ".env.production.local",
    ".env.production",
    ".env.development.local",
    ".env.development",
    ".env",
  ];

  const loadedFiles = [];

  for (const file of candidates) {
    if (!fsSync.existsSync(file)) continue;
    dotenv.config({ path: file });
    loadedFiles.push(file);
  }

  if (loadedFiles.length > 0) {
    console.log(`Loaded environment variables from: ${loadedFiles.join(", ")}`);
  }
}

loadLocalEnvFiles();

// ----------------------------------------------------------------------
// Config
// ----------------------------------------------------------------------
const URL = "https://www.bingsjostamman.se/";
const apiKey = process.env.PSI_API_KEY;
const strategies = ["mobile", "desktop"];
const outputPath = path.join("src", "_data", "psi.json");

function isQuotaExceeded(statusCode, text) {
  if (statusCode === 429) return true;
  return /quota exceeded|rate.?limit exceeded|resource_exhausted/i.test(text);
}

async function hasCachedResult() {
  try {
    await fs.access(outputPath);
    return true;
  } catch {
    return false;
  }
}

// Warn if missing
if (!apiKey) {
  console.warn(
    "⚠ Warning: PSI_API_KEY is missing. Fetching without authentication may hit quota limits."
  );
}

// ----------------------------------------------------------------------
// Fetch PSI for a given strategy
// ----------------------------------------------------------------------
async function fetchPSI(strategy) {
  const psiUrl =
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
    `?url=${encodeURIComponent(URL)}` +
    `&strategy=${strategy}` +
    (apiKey ? `&key=${apiKey}` : "");

  console.log(`→ Fetching PSI for ${strategy}...`);

  const response = await fetch(psiUrl);

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(
      `PSI fetch failed for ${strategy} - HTTP ${response.status}: ${text}`
    );
    error.statusCode = response.status;
    error.isQuotaExceeded = isQuotaExceeded(response.status, text);
    throw error;
  }

  return response.json();
}

// ----------------------------------------------------------------------
// Run all strategies
// ----------------------------------------------------------------------
async function run() {
  try {
    const results = {};

    for (const strategy of strategies) {
      results[strategy] = await fetchPSI(strategy);
    }

    // Ensure folder exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    await fs.writeFile(outputPath, JSON.stringify(results, null, 2));

    console.log("✔ PSI results saved to src/_data/psi.json");
  } catch (err) {
    const cachedResultExists = await hasCachedResult();

    if (err.isQuotaExceeded && cachedResultExists) {
      console.warn("⚠ PSI quota exceeded. Keeping previously cached PSI data.");
      console.warn(`ℹ Using existing ${outputPath}.`);
      return;
    }

    console.error("❌ Failed to fetch PSI:", err.message);
    if (!apiKey) {
      console.error(
        "ℹ Set PSI_API_KEY in your environment or .env.development and retry."
      );
    }
    process.exit(1);
  }
}

run();
