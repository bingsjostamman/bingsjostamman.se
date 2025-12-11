import "./menu.css";
import "./menu.js";

export default {
  title: "Components/Menu",
  parameters: {
    docs: {
      description: {
        component: `
# Menu Component

Main site navigation panel (Eleventy markup).

## Features

- No-JS fallback: toggle is an \`<a>\` linking to nav
- With JS: toggle becomes a \`<button>\` opening/closing panel
- Backdrop click closes menu
- Escape key closes menu
- Focus trapped inside menu (toggle + links)
- Keyboard accessible (tab through links)

## Eleventy Markup

\`\`\`html
<header data-menu class="menu">
  <a href="#main-nav" data-menu-toggle class="menu-toggle">
    ☰ <span class="visually-hidden">Meny</span>
  </a>
  <div class="menu-backdrop" aria-hidden="true"></div>
  <nav id="main-nav" data-menu-panel class="menu-panel">
    <a href="/">Hem</a>
    <a href="/start/">Start</a>
    <a href="/program/">Program</a>
    <a href="/biljetter/">Biljetter</a>
    <a href="/editions/2025/lineup/">Lineup</a>
    <a href="/past-editions/">Past editions</a>
  </nav>
</header>
\`\`\`

## Accessibility Notes

- Works without JavaScript
- Focus trapping ensures toggle + links remain navigable
- Escape key closes menu
- No arrow-key navigation (not a menu popup)
`,
      },
    },
    status: "ready",
  },
  tags: ["UI", "navigation", "interactive"],
};

// helper function to render menu HTML
const menuHtml = (isOpen = false) => `
<div data-menu class="menu${isOpen ? " menu-open" : ""}">
  <a href="#main-nav" data-menu-toggle class="menu-toggle">
    ☰ <span class="visually-hidden">Meny</span>
  </a>

  <div class="menu-backdrop" aria-hidden="true"></div>

  <nav id="main-nav" data-menu-panel class="menu-panel">
    <a href="/">Hem</a>
    <a href="/start/">Start</a>
    <a href="/program/">Program</a>
    <a href="/biljetter/">Biljetter</a>
    <a href="/editions/2025/lineup/">Lineup</a>
    <a href="/past-editions/">Past editions</a>
  </nav>
</div>
`;

// --- Stories ---

export const Default = () => menuHtml(false);
Default.storyName = "Default (closed)";

export const Open = () => menuHtml(true);
Open.storyName = "Open (JS-enabled)";

// menu.stories.js (add at the end)
export const CurrentPage = () => `
<div data-menu class="menu menu-open">
  <a href="#main-nav" data-menu-toggle class="menu-toggle">
    ☰ <span class="visually-hidden">Meny</span>
  </a>
  <div class="menu-backdrop" aria-hidden="true"></div>
  <nav id="main-nav" data-menu-panel class="menu-panel">
    <a href="/" class="">Hem</a>
    <a href="/start/" class="">Start</a>
    <a href="/program/" class="current">Program</a> <!-- current page highlighted -->
    <a href="/biljetter/" class="">Biljetter</a>
    <a href="/editions/2025/lineup/" class="">Lineup</a>
    <a href="/past-editions/" class="">Past editions</a>
  </nav>
</div>
`;
CurrentPage.storyName = "Current page highlight";
