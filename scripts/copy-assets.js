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

  fs.mkdirSync(path.dirname(destinationDir), { recursive: true });
  fs.rmSync(destinationDir, { recursive: true, force: true });
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

  watcher.on("all", (eventName, changedPath) => {
    console.log(`🔄 Asset ${eventName}: ${changedPath}`);
    scheduleSync();
  });

  console.log(`👀 Watching assets in ${sourceDir}`);
}