import fs from "fs";
import { resolve } from "path";
import { loadEnv } from "./scripts/env.js";

export default ({ mode }) => {
  // Determine production mode from Vite's mode
  const isProd = mode === "production";
  console.log("Vite config mode:", mode, { isProd });

  const env = loadEnv();

  return {
    publicDir: false, // Eleventy handles static files
    build: {
      outDir: "public/assets",
      emptyOutDir: true,
      sourcemap: !isProd,
      minify: isProd,
      rollupOptions: {
        input: {
          css: resolve("src/css/entry.css"),
          js: resolve("src/js/main.js"),
        },
        output: {
          entryFileNames: (chunk) =>
            chunk.name === "js" ? "js/main.js" : "js/[name].js",
          assetFileNames: (assetInfo) =>
            assetInfo.name && assetInfo.name.endsWith(".css")
              ? "css/styles.css"
              : "assets/[name][extname]",
        },
      },
    },
    define: {
      __BUILD_ENV__: JSON.stringify(env.name),
      __IS_PROD__: JSON.stringify(isProd),
    },
    css: {
      devSourcemap: true,
    },
    plugins: [
      {
        name: "log-bundled-files",
        generateBundle(options, bundle) {
          console.log("📦 Bundled files:");
          Object.keys(bundle).forEach((fileName) =>
            console.log(" -", fileName)
          );
        },
      },
      {
        name: "log-entry-css-imports",
        buildStart() {
          const entryPath = resolve("src/css/entry.css");
          if (!fs.existsSync(entryPath)) {
            console.warn(`⚠️ entry.css does not exist at ${entryPath}`);
            return;
          }

          const content = fs.readFileSync(entryPath, "utf-8");
          const importRegex = /@import\s+["'](.+?)["'];/g;
          let match;
          const imports = [];

          while ((match = importRegex.exec(content)) !== null) {
            imports.push(resolve("src/css", match[1]));
          }

          if (imports.length) {
            console.log(`📄 entry.css imports (${imports.length} files):`);
            imports.forEach((f) =>
              console.log(`  ${fs.existsSync(f) ? "✅" : "⚠️"} ${f}`)
            );
          } else {
            console.log("⚠️ No imports found in entry.css");
          }
        },
      },
    ],
  };
};
