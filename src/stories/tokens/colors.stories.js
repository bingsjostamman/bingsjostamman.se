import "../../css/01-settings/_config.css";
import configCssSource from "../../css/01-settings/_config.css?raw";

function getOrderedVariableNames(prefixes, source) {
  const ordered = [];
  const seen = new Set();
  const variableRegex = /(--[a-z0-9-]+)\s*:/gi;
  let match;

  while ((match = variableRegex.exec(source)) !== null) {
    const name = match[1];
    if (!prefixes.some((prefix) => name.startsWith(prefix))) continue;
    if (seen.has(name)) continue;

    seen.add(name);
    ordered.push(name);
  }

  return ordered;
}

function getCssVariablesByPrefix(prefixes, orderedNames) {
  const style = getComputedStyle(document.documentElement);
  const grouped = Object.fromEntries(prefixes.map((prefix) => [prefix, []]));

  for (const name of orderedNames) {
    const matchedPrefix = prefixes.find((prefix) => name.startsWith(prefix));
    const value = style.getPropertyValue(name).trim();
    grouped[matchedPrefix].push({ name, value });
  }

  return grouped;
}

function sectionTitle(prefix) {
  if (prefix === "--token-color-") return "Token Colors";
  if (prefix === "--system-color-") return "System Colors";
  if (prefix === "--color-") return "Semantic Colors";
  return prefix;
}

function renderSwatch({ name, value }) {
  return `
    <article style="border: 1px solid #e7e7e7; border-radius: 10px; overflow: hidden; background: #fff;">
      <div style="height: 5rem; background: var(${name}); border-bottom: 1px solid #f0f0f0;"></div>
      <div style="padding: 0.75rem; display: grid; gap: 0.35rem;">
        <code style="font-size: 0.75rem; font-weight: 700;">${name}</code>
        <code style="font-size: 0.75rem; color: #555; word-break: break-word;">${value || "(empty)"}</code>
      </div>
    </article>
  `;
}

function renderSection(prefix, tokens) {
  if (tokens.length === 0) return "";

  return `
    <section style="margin: 0 0 2rem;">
      <h3 style="margin: 0 0 0.85rem;">${sectionTitle(prefix)} <span style="font-size: 0.85rem; color: #777; font-weight: 400;">(${tokens.length})</span></h3>
      <div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));">
        ${tokens.map(renderSwatch).join("")}
      </div>
    </section>
  `;
}

export default {
  title: "Design System/Colors",
};

export const ColorSwatches = () => {
  const prefixes = ["--token-color-", "--system-color-", "--color-"];
  const orderedNames = getOrderedVariableNames(prefixes, configCssSource);
  const groups = getCssVariablesByPrefix(prefixes, orderedNames);

  const container = document.createElement("div");
  container.style.padding = "2rem";
  container.style.fontFamily = "Alegreya Sans, sans-serif";
  container.innerHTML = `
    <h2 style="margin-top: 0;">Color Swatches</h2>
    <p style="margin: 0 0 1.25rem; color: #666; max-width: 70ch;">
      This view auto-discovers CSS variables from <code>:root</code>. Add new color tokens and they will appear here automatically.
    </p>
    ${prefixes.map((prefix) => renderSection(prefix, groups[prefix])).join("")}
  `;

  return container;
};