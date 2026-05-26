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
const maxAttempts = 3;
const runtimeEnv = process.env.ELEVENTY_ENV || process.env.NODE_ENV || "development";
const isProdBuild = runtimeEnv === "production";

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

function shouldRetry(statusCode) {
  return statusCode === 429 || statusCode === 503;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPSIWithRetry(strategy) {
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await fetchPSI(strategy);
    } catch (err) {
      lastError = err;
      const retryable = shouldRetry(err.statusCode) || err.isQuotaExceeded;
      const isLastAttempt = attempt === maxAttempts;

      if (!retryable || isLastAttempt) {
        break;
      }

      const backoffMs = attempt * 1500;
      console.warn(
        `⚠ PSI temporary error for ${strategy} (HTTP ${err.statusCode}). Retrying in ${backoffMs}ms...`
      );
      await wait(backoffMs);
    }
  }

  throw lastError;
}

async function writePayload(payload) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(payload, null, 2));
}

// ----------------------------------------------------------------------
// Run all strategies
// ----------------------------------------------------------------------
async function run() {
  if (!isProdBuild) {
    console.log(
      `ℹ Skipping PSI fetch because runtime env is '${runtimeEnv}' (production only).`
    );
    return;
  }

  // In CI environments, use cached data if available to avoid quota limits and API issues
  if (process.env.CI) {
    const cachedExists = await hasCachedResult();
    if (cachedExists) {
      console.log(
        "ℹ Using cached PSI data in CI environment (to avoid quota limits)."
      );
      return;
    }
  }

  try {
    const results = {};

    for (const strategy of strategies) {
      results[strategy] = await fetchPSIWithRetry(strategy);
    }

    await writePayload(results);

    console.log("✔ PSI results saved to src/_data/psi.json");
  } catch (err) {
    const cachedResultExists = await hasCachedResult();

    if (err.isQuotaExceeded && cachedResultExists) {
      console.warn("⚠ PSI quota exceeded. Keeping previously cached PSI data.");
      console.warn(`ℹ Using existing ${outputPath}.`);
      return;
    }

    const failedPayload = {
      fetchedAt: new Date().toISOString(),
      targetUrl: URL,
      error: err.message,
      mobile: null,
      desktop: null,
    };

    await writePayload(failedPayload);

    console.warn("⚠ Failed to fetch PSI; wrote placeholder data instead.");
    console.warn(`ℹ Reason: ${err.message}`);
    if (!apiKey) {
      console.warn(
        "ℹ Set PSI_API_KEY in your environment or local .env files for more reliable production fetches."
      );
    }
  }
}

run();
