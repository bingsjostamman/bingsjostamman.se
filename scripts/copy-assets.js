import fs from "fs";
import path from "path";
import chokidar from "chokidar";

const sourceDir = path.resolve("src/assets");
const destinationDir = path.resolve("public/assets");
const isWatchMode = process.argv.includes("--watch");

function syncAssets() {
  if (!fs.existsSync(sourceDir)) {
    console.warn(`⚠️ Asset source directory does not exist: ${sourceDir}`);
    return;
  }

  // Keep Vite output (css/js/manifest) and only sync static assets on top.
  fs.mkdirSync(destinationDir, { recursive: true });
  fs.cpSync(sourceDir, destinationDir, { recursive: true });
  console.log(`📦 Synced assets → ${destinationDir}`);
}

syncAssets();

if (isWatchMode) {
  const watcher = chokidar.watch(sourceDir, {
    ignoreInitial: true,
  });

  let pending = false;

  const scheduleSync = () => {
    if (pending) return;
    pending = true;

    setTimeout(() => {
      pending = false;
      syncAssets();
    }, 100);
  };

  const removeDestinationPath = (changedPath) => {
    const relativePath = path.relative(sourceDir, changedPath);
    const destinationPath = path.join(destinationDir, relativePath);

    fs.rmSync(destinationPath, { recursive: true, force: true });
    console.log(`🗑️ Removed asset → ${destinationPath}`);
  };

  watcher.on("all", (eventName, changedPath) => {
    console.log(`🔄 Asset ${eventName}: ${changedPath}`);

    if (eventName === "unlink" || eventName === "unlinkDir") {
      removeDestinationPath(changedPath);
      return;
    }

    scheduleSync();
  });

  console.log(`👀 Watching assets in ${sourceDir}`);
}