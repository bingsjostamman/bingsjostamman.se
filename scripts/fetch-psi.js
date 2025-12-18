import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";

// ----------------------------------------------------------------------
// Environment loading
// ----------------------------------------------------------------------
// Netlify provides env vars directly → no .env file needed in production
// Local dev uses .env.development
//
// You can still use a plain ".env" if you want, but default is dev.
const isLocalDev = process.env.NODE_ENV !== "production";

// Load local env file (ignored in Netlify)
if (isLocalDev) {
  dotenv.config({
    path: ".env.development",
  });
  console.log("Loaded environment variables from .env.development");
}

// ----------------------------------------------------------------------
// Config
// ----------------------------------------------------------------------
const URL = "https://www.bingsjostamman.se/";
const apiKey = process.env.PSI_API_KEY;
const strategies = ["mobile", "desktop"];
const outputPath = path.join("src", "_data", "psi.json");

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
    throw new Error(
      `PSI fetch failed for ${strategy} — HTTP ${response.status}: ${text}`
    );
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
    console.error("❌ Failed to fetch PSI:", err.message);
    process.exit(1);
  }
}

run();
