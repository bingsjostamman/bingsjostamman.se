/* empty css       */
const qs = (sel, parent = document) => parent.querySelector(sel);
const qsa = (sel, parent = document) => [
  ...parent.querySelectorAll(sel)
];
function initMenu(root = document) {
  const link = qs("[data-menu-toggle]", root);
  const nav = qs("[data-menu-panel]", root);
  const backdrop = qs("[data-menu-backdrop]", root);
  const closeBtn = qs("[data-menu-close]", nav);
  if (!link || !nav || !backdrop) return;
  document.documentElement.setAttribute("data-js", "");
  const btn = document.createElement("button");
  btn.className = link.className || "";
  btn.innerHTML = link.innerHTML;
  btn.setAttribute("data-menu-toggle", "");
  link.replaceWith(btn);
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", nav.id);
  nav.hidden = true;
  backdrop.hidden = true;
  nav.dataset.open = "false";
  backdrop.dataset.open = "false";
  let previouslyFocused = null;
  const links = () => Array.from(nav.querySelectorAll("a[href]"));
  function isDesktop() {
    return window.matchMedia("(min-width: 1200px)").matches;
  }
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const animationDelay = reduceMotion ? 0 : 300;
  function openMenu() {
    previouslyFocused = document.activeElement;
    nav.hidden = false;
    backdrop.hidden = false;
    nav.dataset.open = "false";
    backdrop.dataset.open = "false";
    void nav.offsetHeight;
    requestAnimationFrame(() => {
      nav.dataset.open = "true";
      backdrop.dataset.open = "true";
      btn.setAttribute("aria-expanded", "true");
      if (!isDesktop() && closeBtn) {
        closeBtn.focus();
      }
    });
  }
  function closeMenu() {
    nav.dataset.open = "false";
    backdrop.dataset.open = "false";
    btn.setAttribute("aria-expanded", "false");
    setTimeout(() => {
      if (nav.dataset.open === "false") {
        nav.hidden = true;
        backdrop.hidden = true;
      }
    }, animationDelay);
    if (previouslyFocused && previouslyFocused.focus) {
      previouslyFocused.focus();
    }
  }
  btn.addEventListener("click", (e) => {
    const isOpen = nav.dataset.open === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.dataset.open === "true") {
      closeMenu();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || nav.dataset.open !== "true") return;
    const currentLinks = links();
    let focusables;
    if (isDesktop()) {
      focusables = [btn, ...currentLinks].filter(Boolean);
    } else {
      focusables = [closeBtn, ...currentLinks].filter(Boolean);
    }
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
      return;
    }
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
      return;
    }
    if (isDesktop() && !e.shiftKey && active === btn && currentLinks.length) {
      e.preventDefault();
      currentLinks[0].focus();
      return;
    }
    if (isDesktop() && e.shiftKey && active === btn && currentLinks.length) {
      e.preventDefault();
      currentLinks[currentLinks.length - 1].focus();
      return;
    }
  });
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("click", (e) => {
    if (nav.dataset.open !== "true") return;
    if (root.contains(e.target)) return;
    closeMenu();
  });
  nav.addEventListener("focusout", (e) => {
  });
}
function initModal(root) {
  const dialog = qs("dialog", root);
  const openBtn = qs("[data-modal-open]", root);
  const closeBtn = qs("[data-modal-close]", root) || qs("button", dialog);
  if (!dialog || !openBtn) return;
  openBtn.addEventListener("click", () => {
    dialog.showModal?.() ?? dialog.setAttribute("open", "");
  });
  closeBtn?.addEventListener("click", () => {
    dialog.close?.() ?? dialog.removeAttribute("open");
  });
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const inDialog = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inDialog) dialog.close?.();
  });
}
function initAccordion(root) {
  const items = qsa("[data-accordion-item]", root);
  items.forEach((item) => {
    const header = item.querySelector("[data-accordion-header]");
    const panel = item.querySelector("[data-accordion-panel]");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      panel.hidden = isOpen;
    });
    panel.hidden = true;
  });
}
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
  document.querySelectorAll("[data-accordion]").forEach((el) => initAccordion(el));
  document.querySelectorAll("[data-menu]").forEach((el) => initMenu(el));
  initClickTracking();
});
//# sourceMappingURL=main.js.map
