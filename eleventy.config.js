import fs from "fs";
import path from "path";
import { DateTime } from "luxon";
import dotenv from "dotenv";
import { loadEnv } from "./scripts/env.js";
import { createRequire } from "module";

dotenv.config();
console.log(
  "🔍 Eleventy environment:",
  process.env.ELEVENTY_ENV || "development"
);

export default async function (eleventyConfig) {
  const env = loadEnv();
  const isProd = env.isProd;
  const outputDir = "_site";

  const isServe =
    process.argv.includes("--serve") || process.argv.includes("--watch");

  // 🧹 Clean only on full builds
  if (!isServe) {
    eleventyConfig.on("beforeBuild", () => {
      if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, { recursive: true, force: true });
        console.log(`🧹 Cleaned ${outputDir}/ before build`);
      }
    });
  } else {
    console.log("⚙️ Running in serve/watch mode — skipping cleanup");
  }

  /* ----------------------------------------------------------------------
   * Global Data: Festival / Editions
   * -------------------------------------------------------------------- */

  const require = createRequire(import.meta.url);
  const editionsData = require("./src/_data/editions.json");
  const latestYear = editionsData.current;

  eleventyConfig.addGlobalData("festival", {
    currentYear: editionsData.current,
    allYears: editionsData.years,
  });

  // Optional collection
  eleventyConfig.addCollection("editionsList", () => editionsData.years);

  /* ----------------------------------------------------------------------
   * Filters
   * -------------------------------------------------------------------- */

  /* Slugify filter */
  eleventyConfig.addFilter("slugify", (str) => {
    return str
      .toLowerCase()
      .replace(/å/g, "a")
      .replace(/ä/g, "a")
      .replace(/ö/g, "o")
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "");
  });

  /* Date filter */
  eleventyConfig.addFilter("date", function (dateInput, format = "yyyy-MM-dd") {
    let dateObj;

    if (!dateInput || dateInput === "now") {
      dateObj = new Date();
    } else if (dateInput instanceof Date) {
      dateObj = dateInput;
    } else {
      dateObj = new Date(dateInput);
    }

    if (isNaN(dateObj)) dateObj = new Date();

    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  /* Trim trailing slash filter */
  eleventyConfig.addFilter("trimTrailingSlash", (url) => {
    if (typeof url !== "string") return url;
    return url.replace(/\/+$/, "");
  });

  /* Map filter */
  eleventyConfig.addNunjucksFilter("map", (array, property) => {
    if (!Array.isArray(array)) return [];
    return array.map((item) => item[property]);
  });

  /* Min filter */
  eleventyConfig.addNunjucksFilter("min", (array) => {
    if (!Array.isArray(array) || array.length === 0) return 0;
    return Math.min(...array.filter((n) => typeof n === "number"));
  });

  /* Max filter */
  eleventyConfig.addNunjucksFilter("max", (array) => {
    if (!Array.isArray(array) || array.length === 0) return 0;
    return Math.max(...array.filter((n) => typeof n === "number"));
  });

  /* Split filter */
  eleventyConfig.addNunjucksFilter("split", (str, sep) => str.split(sep));

  /* Math filter */
  eleventyConfig.addNunjucksFilter("math", (v1, operator, v2) => {
    v1 = Number(v1);
    v2 = Number(v2);
    switch (operator) {
      case "+":
        return v1 + v2;
      case "-":
        return v1 - v2;
      case "*":
        return v1 * v2;
      case "/":
        return v1 / v2;
      default:
        return v1;
    }
  });

  /* PadStart filter */
  eleventyConfig.addNunjucksFilter(
    "padStart",
    (value, length = 2, char = "0") => {
      if (value === undefined || value === null) return "";
      return String(value).padStart(length, char);
    }
  );

  /* GroupBy filter */
  eleventyConfig.addNunjucksFilter("groupBy", (array, prop) => {
    if (!Array.isArray(array)) return [];
    const groups = {};
    array.forEach((item) => {
      const key = item[prop] || "unknown";
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });
    return Object.keys(groups).map((key) => ({
      grouper: key,
      items: groups[key],
    }));
  });

  /* ----------------------------------------------------------------------
   * Shortcodes
   * -------------------------------------------------------------------- */

  /* Archive banner */
  eleventyConfig.addShortcode("archiveBanner", (page) => {
    if (page.data.year && page.data.year !== latestYear) {
      return `<div class="archive-banner">
      This is an archive from ${page.data.year}.
      <a href="/">View the current festival →</a>
    </div>`;
    }
    return "";
  });

  /* Price */
  eleventyConfig.addShortcode("price", function (label, type) {
    const { isArchive, prices } = this.ctx;

    // Show archived edition message
    if (isArchive == "true") {
      return `<p class="ticket-info">Detta är en arkiverad sida — aktuella biljettpriser visas inte.</p>`;
    }

    // Show top-level edition note if hidden
    if (prices.hidden) {
      const editionNote = prices.note
        ? `<br><small>${prices.note}</small>`
        : "";
      return `<p class="ticket-info">${label}: <em>Pris kommer snart</em>${editionNote}</p>`;
    }

    const priceObj = prices[type];
    if (!priceObj) {
      return `<p class="ticket-info">${label}: Pris saknas</p>`;
    }

    // Show "coming soon" if individual price is null or hidden
    if (priceObj.amount == null || priceObj.hidden) {
      const note = priceObj.note ? `<br><small>${priceObj.note}</small>` : "";
      return `<p class="ticket-info">${label}: <em>Pris kommer snart</em>${note}</p>`;
    }

    // Normal price display
    const note = priceObj.note ? `<br><small>${priceObj.note}</small>` : "";
    return `<p class="ticket-info">${label}: ${priceObj.amount} kr${note}</p>`;
  });

  /* ----------------------------------------------------------------------
   * Used Components JSON (for Vite)
   * -------------------------------------------------------------------- */
  const componentsDir = "src/_includes/components";
  const prebuildDir = "prebuilt";
  const usedComponentsFile = path.join(prebuildDir, "used-components.json");

  eleventyConfig.on("beforeBuild", () => {
    const usedComponents = new Set();

    function scanTemplates(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanTemplates(fullPath);
        } else if (/\.(njk|md|html)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, "utf-8");
          const regex = /\{%\s*include\s+["']components\/([^\/]+)\//g;
          let match;
          while ((match = regex.exec(content)) !== null) {
            usedComponents.add(match[1]);
          }
        }
      }
    }

    scanTemplates("src");

    if (!fs.existsSync(prebuildDir))
      fs.mkdirSync(prebuildDir, { recursive: true });
    fs.writeFileSync(
      usedComponentsFile,
      JSON.stringify([...usedComponents], null, 2)
    );
    console.log(
      `✅ Updated used components: ${[...usedComponents].join(", ")}`
    );
  });

  /* ----------------------------------------------------------------------
   * Watch & Passthrough Copy
   * -------------------------------------------------------------------- */

  // Vite handles JS/CSS inside src, Eleventy ignores those
  eleventyConfig.setUseGitIgnore(false);

  // Ignore asset source dirs
  eleventyConfig.ignores.add("src/js/**");
  eleventyConfig.ignores.add("src/css/**");
  eleventyConfig.watchIgnores.add("src/js/**");
  eleventyConfig.watchIgnores.add("src/css/**");

  // Watch only content + templates
  eleventyConfig.addWatchTarget("src/_includes/");
  eleventyConfig.addWatchTarget("src/content/");
  eleventyConfig.addWatchTarget("src/pages/");
  eleventyConfig.addWatchTarget("src/_data/");

  // Watch Vite output
  eleventyConfig.addPassthroughCopy({ "public/assets": "assets" });

  // Root folders
  const rootFolder = isProd ? "src/root-prod" : "src/root-dev";
  eleventyConfig.addPassthroughCopy({ [rootFolder]: "/" });

  /* ----------------------------------------------------------------------
   * Server / Watch config
   * -------------------------------------------------------------------- */
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: false,
    open: false,
    port: 8080,
  });

  /* ----------------------------------------------------------------------
   * Return standard Eleventy config
   * -------------------------------------------------------------------- */
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
