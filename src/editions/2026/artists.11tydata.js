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

// Group artists by ref (or name if no ref)
// Only generate artist pages if ANY slot has a longdescription
const groupedByRef = lineup.reduce((acc, act) => {
  if (act.page !== "artist") return acc;
  
  const key = act.ref || act.name;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(act);
  return acc;
}, {});

// Get unique artists where at least one entry has a longdescription
const artists = Object.values(groupedByRef)
  .filter((group) => group.some((act) => act.longdescription))
  .map((group) => {
    // Return the entry with longdescription, or first entry if none has it
    return group.find((act) => act.longdescription) || group[0];
  });

export default {
  lineup: artists,
  fullLineup: lineup,
  dates,
  year,
};
