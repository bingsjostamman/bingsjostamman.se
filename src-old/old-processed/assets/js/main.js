const qs = (sel, parent = document) => parent.querySelector(sel);
const qsa = (sel, parent = document) => [
  ...parent.querySelectorAll(sel)
];
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
function initMenu(root) {
  const btn = qs("[data-menu-toggle]", root);
  const nav = qs("[data-menu-panel]", root);
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    nav.hidden = expanded;
  });
  nav.hidden = true;
  btn.setAttribute("aria-expanded", "false");
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modal]").forEach((el) => initModal(el));
  document.querySelectorAll("[data-accordion]").forEach((el) => initAccordion(el));
  document.querySelectorAll("[data-menu]").forEach((el) => initMenu(el));
});
//# sourceMappingURL=main.js.map
