import { createRequire } from "module";
import directionsContent from "./directions-content.js";

const require = createRequire(import.meta.url);
const prices = require("../_data/prices.json");

const pageContent = {
  ...directionsContent,
  sections: directionsContent.sections.map((section) => {
    if (section.id !== "practical-info") {
      return section;
    }

    return {
      ...section
    };
  }),
};

export default {
  pageContent,
};