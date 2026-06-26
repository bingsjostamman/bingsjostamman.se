import { createRequire } from "module";
import foodContent from "./food-content.js";

const require = createRequire(import.meta.url);
const prices = require("../_data/prices.json");

const pageContent = {
  ...foodContent,
  sections: foodContent.sections.map((section) => {
    if (section.id !== "practical-info") {
      return section;
    }

    return {
      ...section,
      price: {
        label: "Campingavgift",
        amount: prices.camping.amount,
        note: prices.camping.note,
      },
    };
  }),
};

export default {
  pageContent,
};