// controllers/accordion.js
import { qsa } from "../helpers/dom.js";

export function initAccordion(root) {
  //  console.log("JS initialized for sure, yeah!");
  const items = qsa("[data-accordion-item]", root);

  items.forEach((item) => {
    const header = item.querySelector("[data-accordion-header]");
    const panel = item.querySelector("[data-accordion-panel]");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      panel.hidden = isOpen;
    });

    // closed by default
    panel.hidden = true;
  });
}
