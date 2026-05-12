import dotenv from "dotenv";
import fs from "fs";

export function loadEnv() {
  const eleventyEnv = process.env.ELEVENTY_ENV || "development";
  const envFile = `.env.${eleventyEnv}`;

  if (fs.existsSync(envFile)) {
    dotenv.config({ path: envFile });
    console.log(`✅ Loaded environment from ${envFile}`);
  } else {
    dotenv.config();
    console.log(`⚠️ No specific env file found, using default .env (if any)`);
  }

  const isProd = eleventyEnv === "production";

  return {
    name: eleventyEnv,
    isProd,
    debugCss: process.env.DEBUG_CSS || null,
    siteUrl: process.env.SITE_URL || "http://localhost:8080",
  };
}
