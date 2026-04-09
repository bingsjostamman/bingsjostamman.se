/* empty css    */
const qs = (sel, parent = document) => parent.querySelector(sel);
const qsa = (sel, parent = document) => [
  ...parent.querySelectorAll(sel)
];
function initMenu(root = document) {
  const link = qs("[data-menu-toggle]", root);
  const nav = qs("[data-menu-panel]", root);
  const backdrop = qs(".menu-backdrop", root);
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
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const animationDelay = reduceMotion ? 0 : 300;
  function openMenu() {
    previouslyFocused = document.activeElement;
    nav.hidden = false;
    backdrop.hidden = false;
    nav.dataset.open = "true";
    backdrop.dataset.open = "true";
    btn.setAttribute("aria-expanded", "true");
    links()[0];
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
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.dataset.open === "true") {
      closeMenu();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || nav.dataset.open !== "true") return;
    const currentLinks = links();
    if (currentLinks.length === 0) {
      e.preventDefault();
      btn.focus();
      return;
    }
    const first = currentLinks[0];
    const last = currentLinks[currentLinks.length - 1];
    const active = document.activeElement;
    if (!e.shiftKey && active === last) {
      e.preventDefault();
      btn.focus();
      return;
    }
    if (!e.shiftKey && active === btn) {
      e.preventDefault();
      first.focus();
      return;
    }
    if (e.shiftKey && active === first) {
      e.preventDefault();
      btn.focus();
      return;
    }
    if (e.shiftKey && active === btn) {
      e.preventDefault();
      last.focus();
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
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modal]").forEach((el) => initModal(el));
  document.querySelectorAll("[data-accordion]").forEach((el) => initAccordion(el));
  document.querySelectorAll("[data-menu]").forEach((el) => initMenu(el));
});
//# sourceMappingURL=main.js.map
