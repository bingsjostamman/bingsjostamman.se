import { createRequire } from "module";

const require = createRequire(import.meta.url);
const lineup = require("./lineup.json");

export default {
  lineup,
};
