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

// Only generate artist pages for entries with page == "artist"
// and that have a long description to warrant a dedicated page
const artists = lineup.filter(
  (act) => act.page === "artist" && act.longdescription
);

export default {
  lineup: artists,
  fullLineup: lineup,
  dates,
  year,
};
