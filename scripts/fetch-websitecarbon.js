import fs from "node:fs/promises";
import path from "node:path";

const defaultUrl = "https://www.bingsjostamman.se/";
const configuredUrl = process.env.WEBSITE_CARBON_TARGET_URL || process.env.SITE_URL || defaultUrl;
const outputPath = path.join("src", "_data", "websitecarbon.json");
const endpoint = "https://api.websitecarbon.com/b";
const maxAttempts = 3;
const runtimeEnv = process.env.ELEVENTY_ENV || process.env.NODE_ENV || "development";
const isProdBuild = runtimeEnv === "production";

function getTargetUrl(raw) {
  let url;

  try {
    url = new URL(raw);
  } catch {
    console.warn(
      `⚠ Invalid WEBSITE_CARBON_TARGET_URL/SITE_URL: ${raw}. Falling back to ${defaultUrl}`,
    );
    return defaultUrl;
  }

  if (!/^https?:$/.test(url.protocol)) {
    console.warn(`⚠ Unsupported protocol ${url.protocol}. Falling back to ${defaultUrl}`);
    return defaultUrl;
  }

  // Website Carbon evaluates public pages. Avoid local URLs during dev builds.
  if (/^(localhost|127\.0\.0\.1)$/i.test(url.hostname)) {
    console.warn(`⚠ Local URL ${raw} is not publicly testable. Falling back to ${defaultUrl}`);
    return defaultUrl;
  }

  return url.toString();
}

async function hasCachedResult() {
  try {
    await fs.access(outputPath);
    return true;
  } catch {
    return false;
  }
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

async function fetchWebsiteCarbon(targetUrl) {
  const url = `${endpoint}?url=${encodeURIComponent(targetUrl)}`;
  console.log(`→ Fetching Website Carbon for ${targetUrl}...`);

  const headers = {
    Accept: "application/json",
    // Use a legitimate browser User-Agent to avoid Cloudflare bot detection
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
  };

  if (process.env.CI) {
    console.debug(`[DEBUG] Request URL: ${url}`);
    console.debug(`[DEBUG] Request headers:`, headers);
  }

  const response = await fetch(url, { headers });

  if (process.env.CI) {
    console.debug(`[DEBUG] Response status: ${response.status}`);
    console.debug(`[DEBUG] Response headers:`, Object.fromEntries(response.headers.entries()));
  }

  if (!response.ok) {
    const text = await response.text();
    const contentType = response.headers.get("content-type");
    
    // Check if this is a Cloudflare challenge page
    const isCloudflareChallenge = text.includes("Just a moment") || text.includes("Checking your browser");
    
    if (isCloudflareChallenge) {
      console.warn("⚠ Website Carbon is behind Cloudflare protection; request was blocked.");
      if (process.env.CI) {
        console.debug("[DEBUG] Response snippet:", text.substring(0, 200));
      }
    }
    
    const error = new Error(
      `Website Carbon fetch failed - HTTP ${response.status}${isCloudflareChallenge ? " (Cloudflare challenge)" : ""}`,
    );
    error.statusCode = response.status;
    error.isCloudflareChallenge = isCloudflareChallenge;
    throw error;
  }

  return response.json();
}

function shouldRetry(error) {
  // Don't retry Cloudflare challenges — they won't change on retry
  if (error.isCloudflareChallenge) {
    return false;
  }
  // Only retry specific transient errors
  return error.statusCode === 429 || error.statusCode === 503;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(targetUrl) {
  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await fetchWebsiteCarbon(targetUrl);
    } catch (err) {
      lastError = err;
      const retryable = shouldRetry(err);
      const isLastAttempt = attempt === maxAttempts;

      if (!retryable || isLastAttempt) {
        break;
      }

      const backoffMs = attempt * 1500;
      console.warn(
        `⚠ Website Carbon temporary error (HTTP ${err.statusCode}). Retrying in ${backoffMs}ms...`,
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

async function run() {
  if (!isProdBuild) {
    console.log(
      `ℹ Skipping Website Carbon fetch because runtime env is '${runtimeEnv}' (production only).`,
    );
    return;
  }

  // In CI environments, use cached data if available to avoid Cloudflare bot detection
  if (process.env.CI) {
    const cachedExists = await hasCachedResult();
    if (cachedExists) {
      console.log(
        "ℹ Using cached Website Carbon data in CI environment (to avoid Cloudflare protection).",
      );
      return;
    }
  }

  const targetUrl = getTargetUrl(configuredUrl);

  try {
    const result = await fetchWithRetry(targetUrl);

    const payload = {
      source: "websitecarbon",
      fetchedAt: new Date().toISOString(),
      targetUrl,
      co2PerPageView: toNumber(result.c),
      cleanerThanPercent: toNumber(result.p),
      raw: result,
    };

    await writePayload(payload);

    console.log("✔ Website Carbon results saved to src/_data/websitecarbon.json");
  } catch (err) {
    const cachedResultExists = await hasCachedResult();

    if (cachedResultExists) {
      console.warn("⚠ Failed to fetch Website Carbon. Keeping previously cached data.");
      console.warn(`ℹ Using existing ${outputPath}.`);
      return;
    }

    const failedPayload = {
      source: "websitecarbon",
      fetchedAt: new Date().toISOString(),
      targetUrl,
      co2PerPageView: null,
      cleanerThanPercent: null,
      error: err.message,
      raw: null,
    };

    await writePayload(failedPayload);

    console.warn("⚠ Failed to fetch Website Carbon; wrote placeholder data instead.");
    console.warn(`ℹ Reason: ${err.message}`);
  }
}

run();
