// controllers/modal.js
import { qs } from "../helpers/dom.js";

export function initModal(root) {
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
    const inDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!inDialog) dialog.close?.();
  });
}
