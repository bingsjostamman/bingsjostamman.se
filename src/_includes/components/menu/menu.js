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
  const backdrop = qs(".menu-backdrop", root);

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

  // reduced motion check to decide hide timing
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

    // Move focus to first link for natural Tab navigation
    const first = links()[0];
    //    if (first) first.focus();
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

  // ESC closes (listen on document so it works anywhere)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.dataset.open === "true") {
      closeMenu();
    }
  });

  // Focus trap behavior:
  // The trap includes the toggle button — Tab cycles: first link -> ... -> last link -> button -> first link.
  // Shift+Tab cycles backwards: button -> last link -> ... -> first link -> button.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || nav.dataset.open !== "true") return;

    const currentLinks = links();
    if (currentLinks.length === 0) {
      // If there are no links, trap focus between btn and btn (i.e., keep focusable on btn)
      e.preventDefault();
      btn.focus();
      return;
    }

    const first = currentLinks[0];
    const last = currentLinks[currentLinks.length - 1];
    const active = document.activeElement;

    // If focused on the last link and user TABs forward -> move to button
    if (!e.shiftKey && active === last) {
      e.preventDefault();
      btn.focus();
      return;
    }

    // If focused on the button and user TABs forward -> move to first link
    if (!e.shiftKey && active === btn) {
      e.preventDefault();
      first.focus();
      return;
    }

    // If focused on the first link and user SHIFT+TAB -> move to button
    if (e.shiftKey && active === first) {
      e.preventDefault();
      btn.focus();
      return;
    }

    // If focused on the button and user SHIFT+TAB -> move to last link
    if (e.shiftKey && active === btn) {
      e.preventDefault();
      last.focus();
      return;
    }

    // otherwise let the browser handle tabbing between links naturally
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
