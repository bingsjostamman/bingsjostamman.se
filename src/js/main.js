// main.js
import { initMenu } from "../_includes/components/menu/menu.js";

import { initModal } from "./controllers/modal.js";
import { initAccordion } from "./controllers/accordion.js";

// Import entry.css so Vite processes it
import "../css/entry.css";

function trackPlausibleEvent(eventName, props = {}) {
  if (typeof window === "undefined" || typeof window.plausible !== "function") {
    return;
  }

  if (Object.keys(props).length > 0) {
    window.plausible(eventName, { props });
    return;
  }

  window.plausible(eventName);
}

function initClickTracking() {
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented) return;

    const link = event.target.closest("a[data-track-event]");
    if (!link) return;

    const eventName = link.dataset.trackEvent;
    if (!eventName) return;

    const props = {};
    if (link.dataset.trackLabel) props.label = link.dataset.trackLabel;
    if (link.dataset.trackContext) props.context = link.dataset.trackContext;

    const href = link.getAttribute("href");
    if (href) props.href = href;

    trackPlausibleEvent(eventName, props);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modal]").forEach((el) => initModal(el));
  document
    .querySelectorAll("[data-accordion]")
    .forEach((el) => initAccordion(el));
  document.querySelectorAll("[data-menu]").forEach((el) => initMenu(el));
  initClickTracking();
});
