import { createRequire } from "module";
const require = createRequire(import.meta.url);
const editions = require("./editions.json");
const current = editions.current;
const dates = require(`../editions/${current}/dates.json`);
export default dates;
