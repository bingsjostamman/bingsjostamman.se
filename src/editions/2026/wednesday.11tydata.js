import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const year = path.basename(__dirname);

const lineup = require("./lineup.json");
const dates = require("./dates.json");
const wednesdayContent = require("./wednesday-content.js").default;

export default {
  lineup,
  dates,
  year,
  copy: wednesdayContent,
};
