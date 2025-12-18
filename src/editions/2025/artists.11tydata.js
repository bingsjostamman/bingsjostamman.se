import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);

// Get the folder name (edition year) dynamically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const year = path.basename(__dirname);

// Load the edition-specific data
const lineup = require("./lineup.json");
const dates = require("./dates.json");

export default {
  lineup,
  dates,
  year, // now available in your template
};
