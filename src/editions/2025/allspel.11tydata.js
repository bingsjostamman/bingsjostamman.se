import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";
import allspelContent from "./allspel-content.js";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const year = path.basename(__dirname);

const tunes = require("./allspel-tunes.json");

export default {
  tunes,
  copy: allspelContent,
  year,
};