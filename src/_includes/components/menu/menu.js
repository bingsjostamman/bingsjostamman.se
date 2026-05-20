// src/_includes/components/menu/menu.js
import { qs } from "../../../js/helpers/dom.js"; // update path as needed

/**
 * Enhances a static menu include:
 * - Converts <a[data-menu-toggle]> -> <button>
 * - Adds ARIA attributes
 * - Toggle open/close with animation via data-open
 * - Focus trap: tab cycles through links and the toggle button
 * - ESC closes, backdrop & click-outside close
 * - Progressive: no aria attributes left in static HTML
 */
export function initMenu(root = document) {
  const link = qs("[data-menu-toggle]", root);
  const nav = qs("[data-menu-panel]", root);
  const backdrop = qs("[data-menu-backdrop]", root);
  const closeBtn = qs("[data-menu-close]", nav);

  if (!link || !nav || !backdrop) return;

  // mark JS active for CSS
  document.documentElement.setAttribute("data-js", "");

  // Create a button and replace the fallback link
  const btn = document.createElement("button");
  btn.className = link.className || "";
  btn.innerHTML = link.innerHTML;
  btn.setAttribute("data-menu-toggle", "");
  link.replaceWith(btn);

  // ARIA + attributes
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", nav.id);
  // aria-haspopup optional for simple panel; harmless if present
  // btn.setAttribute("aria-haspopup", "true");

  // initial hidden state (JS controls visibility)
  nav.hidden = true;
  backdrop.hidden = true;
  nav.dataset.open = "false";
  backdrop.dataset.open = "false";

  let previouslyFocused = null;
  const links = () => Array.from(nav.querySelectorAll("a[href]")); // only links in the panel
  // Helper: is desktop (>=1200px)?
  function isDesktop() {
    return window.matchMedia("(min-width: 1200px)").matches;
  }

  // reduced motion check to decide hide timing
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const animationDelay = reduceMotion ? 0 : 300;

  function openMenu() {
    previouslyFocused = document.activeElement;

    nav.hidden = false;
    backdrop.hidden = false;

    // Ensure a measurable closed state before opening, otherwise some browsers skip the transition.
    nav.dataset.open = "false";
    backdrop.dataset.open = "false";
    void nav.offsetHeight;

    // Apply open state on next frame so transitions can run from closed styles.
    requestAnimationFrame(() => {
      nav.dataset.open = "true";
      backdrop.dataset.open = "true";
      btn.setAttribute("aria-expanded", "true");

      // On mobile: move focus to close button (toggle is covered by panel)
      // On desktop: keep focus on toggle button (it's not covered by dropdown)
      if (!isDesktop() && closeBtn) {
        closeBtn.focus();
      }
    });
  }

  function closeMenu() {
    nav.dataset.open = "false";
    backdrop.dataset.open = "false";
    btn.setAttribute("aria-expanded", "false");

    // wait for animation to finish before hiding fully
    setTimeout(() => {
      if (nav.dataset.open === "false") {
        nav.hidden = true;
        backdrop.hidden = true;
      }
    }, animationDelay);

    // restore focus to the element that opened the menu
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

  // Close button inside menu
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // ESC closes (listen on document so it works anywhere)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.dataset.open === "true") {
      closeMenu();
    }
  });

  // Focus trap behavior:
  // On desktop (>=1200px): trap toggle button and menu links (not close button, which is hidden)
  // On mobile (<1200px): trap close button and menu links (not toggle button)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || nav.dataset.open !== "true") return;

    const currentLinks = links();
    let focusables;
    if (isDesktop()) {
      // Desktop: toggle button + links
      focusables = [btn, ...currentLinks].filter(Boolean);
    } else {
      // Mobile: close button + links
      focusables = [closeBtn, ...currentLinks].filter(Boolean);
    }
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    // Forward tab
    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
      return;
    }
    // Backward tab
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
      return;
    }
    // On desktop, allow tabbing from btn to first link
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
    // Otherwise, let browser handle
  });

  // Backdrop click closes
  backdrop.addEventListener("click", closeMenu);

  // Click outside closes menu
  document.addEventListener("click", (e) => {
    if (nav.dataset.open !== "true") return;
    // if click target is within the root component, ignore (this includes btn)
    if (root.contains(e.target)) return;
    closeMenu();
  });

  // Optional: ensure focus remains inside when clicking into the panel (no-op but helpful)
  nav.addEventListener("focusout", (e) => {
    // no special handling here since we manage tab key behavior above
  });
}
