import fs from "fs";
import { resolve } from "path";
import { loadEnv } from "./scripts/env.js";

export default ({ mode }) => {
  // Determine production mode from Vite's mode
  const isProd = mode === "production";
  const isWatch = process.argv.includes("--watch");
  console.log("Vite config mode:", mode, { isProd });

  const env = loadEnv();

  return {
    publicDir: false, // Eleventy handles static files
    build: {
      outDir: "public/assets",
      emptyOutDir: isProd && !isWatch,
      manifest: isProd ? "manifest.json" : false,
      sourcemap: !isProd,
      minify: isProd,
      rollupOptions: {
        input: {
          styles: resolve("src/css/entry.css"),
          main: resolve("src/js/main.js"),
        },
        output: {
          entryFileNames: isProd ? "js/[name]-[hash].js" : "js/[name].js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return isProd
                ? "css/[name]-[hash][extname]"
                : "css/[name][extname]";
            }

            return isProd
              ? "assets/[name]-[hash][extname]"
              : "assets/[name][extname]";
          },
        },
      },
    },
    define: {
      __BUILD_ENV__: JSON.stringify(env.name),
      __IS_PROD__: JSON.stringify(isProd),
    },
    css: {
      devSourcemap: true,
      postcss: "./postcss.config.js",
    },
    plugins: [
      {
        name: "log-bundled-files",
        generateBundle(options, bundle) {
          console.log("📦 Bundled files:");
          Object.keys(bundle).forEach((fileName) =>
            console.log(" -", fileName),
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
              console.log(`  ${fs.existsSync(f) ? "✅" : "⚠️"} ${f}`),
            );
          } else {
            console.log("⚠️ No imports found in entry.css");
          }
        },
      },
      {
        name: "copy-fonts",
        closeBundle() {
          const src = resolve("src/assets/fonts");
          const dest = resolve("public/assets/fonts");
          if (fs.existsSync(src)) {
            fs.cpSync(src, dest, { recursive: true });
          }
        },
      },
    ],
  };
};
