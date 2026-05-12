import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);
const editions = require("./editions.json");
const current = editions.current;
const lineup = require(`../editions/${current}/lineup.json`);

export default lineup;
