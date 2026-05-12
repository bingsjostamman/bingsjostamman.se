// main.js
import { initMenu } from "../_includes/components/menu/menu.js";

import { initModal } from "./controllers/modal.js";
import { initAccordion } from "./controllers/accordion.js";

// Import entry.css so Vite processes it
import "../css/entry.css";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modal]").forEach((el) => initModal(el));
  document
    .querySelectorAll("[data-accordion]")
    .forEach((el) => initAccordion(el));
  document.querySelectorAll("[data-menu]").forEach((el) => initMenu(el));
});
