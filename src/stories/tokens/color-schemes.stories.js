/* global document, getComputedStyle */

import "../../css/01-settings/_config.css";
import "../../css/03-generic/_fonts.css";
import colorSchemesSource from "../../css/01-settings/_color-schemes.css?raw";
import themesSource from "../../css/05-themes/_themes.css?raw";

function parseDeclarations(block) {
  const declarations = [];
  const declarationRegex = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let match;

  while ((match = declarationRegex.exec(block)) !== null) {
    declarations.push({ name: match[1], value: match[2].trim() });
  }

  return declarations;
}

function parseSchemes(source) {
  const schemes = [];
  const schemeRegex = /@define-mixin\s+([a-z0-9-]+)\s*\{([\s\S]*?)\}/gi;
  let match;

  while ((match = schemeRegex.exec(source)) !== null) {
    schemes.push({
      name: match[1],
      declarations: parseDeclarations(match[2]),
    });
  }

  return schemes;
}

function parseShadeBindings(source) {
  const bindings = [];
  const bindingRegex = /:where\((\.[a-z0-9-]+)\)\s*\{\s*@mixin\s+([a-z0-9-]+);\s*\}/gi;
  let match;

  while ((match = bindingRegex.exec(source)) !== null) {
    bindings.push({
      shade: match[1].slice(1),
      scheme: match[2],
    });
  }

  return bindings;
}

function setSchemeVariables(element, declarations) {
  declarations.forEach(({ name, value }) => {
    element.style.setProperty(name, value);
  });
}

function createElement(tag, styleText = "") {
  const element = document.createElement(tag);
  element.style.cssText = styleText;
  return element;
}

function createText(tag, text, styleText = "") {
  const element = createElement(tag, styleText);
  element.textContent = text;
  return element;
}

function createLink(text) {
  const link = createElement(
    "a",
    "color: var(--color-font--link, var(--color-link)); text-decoration-color: currentcolor; text-underline-offset: 0.16em;"
  );
  link.href = "#";
  link.textContent = text;
  return link;
}

function createButton(label, variant) {
  const styles = {
    default:
      "background: var(--color-background--hover); color: var(--color-font--text); border: 1px solid var(--color-border--outline);",
    primary:
      "background: var(--color-primary); color: var(--color-font--primary); border: 1px solid var(--color-primary);",
    secondary:
      "background: var(--color-secondary); color: var(--color-font--secondary); border: 1px solid var(--color-secondary);",
    ghost:
      "background: transparent; color: var(--color-link); border: 1px solid var(--color-border--percieve);",
    naked:
      "background: transparent; color: var(--color-font--text); border: 1px dashed var(--color-border--decorate);",
    link:
      "background: transparent; color: var(--color-link); border: 0; padding-inline: 0; text-decoration: underline;",
  };

  return createText(
    "button",
    label,
    `padding: 0.75rem 1rem; border-radius: 999px; font: inherit; cursor: pointer; ${styles[variant]}`
  );
}

function createPreviewChip(label, variableName) {
  const chip = createElement(
    "span",
    "display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.65rem; border-radius: 999px; border: 1px solid var(--color-border--outline); background: var(--color-background); color: var(--color-font--text); font-size: 0.8rem;"
  );
  const swatch = createElement(
    "span",
    `width: 0.9rem; height: 0.9rem; border-radius: 999px; background: var(${variableName}); border: 1px solid rgb(0 0 0 / 0.12);`
  );
  const text = createText("span", label);
  chip.append(swatch, text);
  return chip;
}

function createIconBadge(background = false) {
  const wrapper = createElement(
    "span",
    `display: inline-flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 999px; color: ${background ? "var(--color-icon)" : "var(--color-link)"}; background: ${background ? "var(--color-icon-background)" : "transparent"}; border: 1px solid ${background ? "transparent" : "var(--color-border--outline)"};`
  );
  wrapper.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2 3 6v6c0 5 3.8 9.7 9 10 5.2-.3 9-5 9-10V6l-9-4Zm0 2.2 6.8 3v4.8c0 3.8-2.7 7.4-6.8 8-4.1-.6-6.8-4.2-6.8-8V7.2l6.8-3Zm-1.2 11.3 5.4-5.4-1.4-1.4-4 4-1.8-1.8-1.4 1.4 3.2 3.2Z"/>
    </svg>
  `;
  return wrapper;
}

function createInputShowcase() {
  const wrapper = createElement("div", "display: grid; gap: 0.45rem; max-width: 26rem;");
  const label = createText(
    "label",
    "Input control",
    "font-size: 0.95rem; font-weight: 700; color: var(--color-font--heading);"
  );
  label.htmlFor = "scheme-input";

  const input = createElement(
    "input",
    "padding: 0.8rem 0.95rem; border-radius: 0.8rem; border: 1px solid var(--color-border--percieve); background: var(--color-background); color: var(--color-font--text); box-shadow: 0 0 0 3px transparent;"
  );
  input.id = "scheme-input";
  input.type = "text";
  input.placeholder = "Type here";

  const hint = createText(
    "p",
    "Inputs should remain readable with both border and text contrast intact.",
    "margin: 0; font-size: 0.9rem; color: var(--color-font--diminish);"
  );

  wrapper.append(label, input, hint);
  return wrapper;
}

function renderSchemeShowcase(scheme) {
  const article = createElement(
    "article",
    "padding: 1.5rem; border-radius: 1.25rem; border: 1px solid var(--color-border--outline); background: var(--color-background); color: var(--color-font--text); box-shadow: 0 1.2rem 2.5rem -2rem var(--color-elevation-box-shadow--level-2); display: grid; gap: 1.25rem;"
  );
  setSchemeVariables(article, scheme.declarations);

  const heading = createElement("div", "display: grid; gap: 0.75rem;");
  const title = createText(
    "h2",
    scheme.name,
    "margin: 0; font-family: 'Playfair Display', 'Alegreya Sans', sans-serif; font-size: 2rem; line-height: 1.05; color: var(--color-font--display);"
  );
  const intro = createText(
    "p",
    "A scheme is the contrast-checked source of truth. This preview shows how its semantic variables affect headings, body text, links, surfaces, borders, controls, and actions.",
    "margin: 0; max-width: 68ch; font-size: 1rem; line-height: 1.6; color: var(--color-font--text);"
  );

  const chipRow = createElement("div", "display: flex; flex-wrap: wrap; gap: 0.65rem;");
  chipRow.append(
    createPreviewChip("Background", "--color-background"),
    createPreviewChip("Primary", "--color-primary"),
    createPreviewChip("Secondary", "--color-secondary"),
    createPreviewChip("Link", "--color-link")
  );
  heading.append(title, intro, chipRow);

  const textBlock = createElement("section", "display: grid; gap: 0.7rem;");
  const display = createText(
    "h3",
    "Display heading",
    "margin: 0; font-family: 'Playfair Display', 'Alegreya Sans', sans-serif; font-size: 1.65rem; line-height: 1.1; color: var(--color-font--display);"
  );
  const headline = createText(
    "h4",
    "A medium sized headline",
    "margin: 0; font-size: 1.2rem; line-height: 1.2; color: var(--color-font--heading);"
  );
  const paragraph = createElement(
    "p",
    "margin: 0; line-height: 1.7; max-width: 66ch; color: var(--color-font--text);"
  );
  paragraph.append(
    document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
    createLink("A semantic link"),
    document.createTextNode(" should remain visually distinct inside the scheme.")
  );
  const diminish = createText(
    "p",
    "And some diminished text, to come across as less important or less prominent.",
    "margin: 0; color: var(--color-font--diminish);"
  );
  const list = createElement("ul", "margin: 0; padding-inline-start: 1.25rem; line-height: 1.7;");
  ["List element", "Another supporting detail"].forEach((item) => {
    list.append(createText("li", item));
  });
  textBlock.append(display, headline, paragraph, diminish, list);

  const surfaces = createElement(
    "section",
    "display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1rem;"
  );
  const hoverCard = createElement(
    "div",
    "padding: 1rem; border-radius: 1rem; background: var(--color-background--hover); border: 1px solid var(--color-border--decorate); display: grid; gap: 0.35rem;"
  );
  hoverCard.append(
    createText("strong", "Hover background", "color: var(--color-font--heading);"),
    createText("p", "A differentiated but related surface.", "margin: 0; color: var(--color-font--diminish);")
  );
  const setCard = createElement(
    "div",
    "padding: 1rem; border-radius: 1rem; background: var(--color-background--set); border: 1px solid var(--color-border--decorate); display: grid; gap: 0.35rem;"
  );
  setCard.append(
    createText("strong", "Set background", "color: var(--color-font--heading);"),
    createText("p", "Useful for nested emphasis and grouped content.", "margin: 0; color: var(--color-font--diminish);")
  );
  surfaces.append(hoverCard, setCard);

  const buttonSection = createElement("section", "display: grid; gap: 0.75rem;");
  buttonSection.append(createText("h4", "Buttons", "margin: 0; color: var(--color-font--heading);"));
  const buttons = createElement("div", "display: flex; flex-wrap: wrap; gap: 0.75rem;");
  buttons.append(
    createButton("Button", "default"),
    createButton("Primary button", "primary"),
    createButton("Secondary button", "secondary"),
    createButton("Ghost button", "ghost"),
    createButton("Naked button", "naked"),
    createButton("Link button", "link")
  );
  buttonSection.append(buttons);

  const iconSection = createElement("section", "display: grid; gap: 0.75rem;");
  iconSection.append(createText("h4", "Icons", "margin: 0; color: var(--color-font--heading);"));
  const icons = createElement("div", "display: flex; gap: 0.75rem; align-items: center;");
  icons.append(createIconBadge(false), createIconBadge(true));
  iconSection.append(icons);

  const borderSection = createElement("section", "display: grid; gap: 0.8rem;");
  borderSection.append(createText("h4", "Borders and dividers", "margin: 0; color: var(--color-font--heading);"));
  [
    ["Percieve", "--color-border--percieve"],
    ["Outline", "--color-border--outline"],
    ["Decorate", "--color-border--decorate"],
  ].forEach(([label, variable]) => {
    const row = createElement("div", "display: grid; gap: 0.4rem;");
    const badge = createText(
      "span",
      label,
      `display: inline-block; width: fit-content; padding: 0.4rem 0.65rem; border-radius: 999px; border: 1px solid var(${variable}); color: var(--color-font--text);`
    );
    const divider = createElement("hr", `width: 100%; margin: 0; border: 0; border-top: 1px solid var(${variable});`);
    row.append(badge, divider);
    borderSection.append(row);
  });

  const controlsSection = createElement("section", "display: grid; gap: 0.75rem;");
  controlsSection.append(createText("h4", "Input controls", "margin: 0; color: var(--color-font--heading);"));
  controlsSection.append(createInputShowcase());

  article.append(
    heading,
    textBlock,
    surfaces,
    buttonSection,
    iconSection,
    borderSection,
    controlsSection
  );
  return article;
}

function renderBindingRow(binding) {
  return `
    <tr>
      <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #ece7e0;"><code>.${binding.shade}</code></td>
      <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #ece7e0;"><code>${binding.scheme}</code></td>
      <td style="padding: 0.75rem 0.85rem; border-bottom: 1px solid #ece7e0; color: #666;">Purposeful alias layer for applying a WCAG-checked scheme in context.</td>
    </tr>
  `;
}

function parseComputedColor(value) {
  const numbers = value.match(/\d*\.?\d+/g);
  if (!numbers || numbers.length < 3) return null;

  const [r, g, b, a] = numbers.map(Number);
  return {
    r,
    g,
    b,
    a: typeof a === "number" && !Number.isNaN(a) ? a : 1,
  };
}

function blendOverBackground(fg, bg) {
  if (!fg || !bg) return null;
  const alpha = fg.a ?? 1;
  return {
    r: fg.r * alpha + bg.r * (1 - alpha),
    g: fg.g * alpha + bg.g * (1 - alpha),
    b: fg.b * alpha + bg.b * (1 - alpha),
    a: 1,
  };
}

function channelToLinear(channel) {
  const s = channel / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function luminance(rgb) {
  return (
    0.2126 * channelToLinear(rgb.r) +
    0.7152 * channelToLinear(rgb.g) +
    0.0722 * channelToLinear(rgb.b)
  );
}

function contrastRatio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

function resolveColorExpression(scheme, expression, property = "color") {
  const host = createElement(
    "div",
    "position: fixed; inset: 0 auto auto -9999px; pointer-events: none;"
  );
  setSchemeVariables(host, scheme.declarations);

  const probe = createElement("div");
  probe.style[property] = expression;
  host.append(probe);
  document.body.append(host);

  const computed = getComputedStyle(probe)[property];
  host.remove();
  return parseComputedColor(computed);
}

function formatRatio(value) {
  return `${value.toFixed(2)}:1`;
}

function evaluateSchemeContrast(scheme) {
  const background = resolveColorExpression(scheme, "var(--color-background)", "backgroundColor");
  if (!background) return [];

  const checks = [
    {
      label: "Body text on background",
      fg: "var(--color-font--text)",
      bg: "var(--color-background)",
      min: 4.5,
      type: "wcag-aa",
    },
    {
      label: "Heading on background",
      fg: "var(--color-font--heading)",
      bg: "var(--color-background)",
      min: 3,
      type: "large-text",
    },
    {
      label: "Link on background",
      fg: "var(--color-font--link)",
      bg: "var(--color-background)",
      min: 4.5,
      type: "wcag-aa",
    },
    {
      label: "Primary button text",
      fg: "var(--color-font--primary)",
      bg: "var(--color-primary)",
      min: 4.5,
      type: "wcag-aa",
    },
    {
      label: "Secondary button text",
      fg: "var(--color-font--secondary)",
      bg: "var(--color-secondary)",
      min: 4.5,
      type: "wcag-aa",
    },
    {
      label: "Perceive border vs background",
      fg: "var(--color-border--percieve)",
      bg: "var(--color-background)",
      min: 3,
      type: "ui-boundary",
    },
    {
      label: "Outline border vs background",
      fg: "var(--color-border--outline)",
      bg: "var(--color-background)",
      min: 1.8,
      type: "ui-boundary",
    },
    {
      label: "Decorate border vs background",
      fg: "var(--color-border--decorate)",
      bg: "var(--color-background)",
      min: 1.2,
      type: "decorative",
    },
    {
      label: "Body text on hover surface",
      fg: "var(--color-font--text)",
      bg: "var(--color-background--hover)",
      min: 4.5,
      type: "wcag-aa",
    },
    {
      label: "Hover surface vs background",
      fg: "var(--color-background--hover)",
      bg: "var(--color-background)",
      min: 1.1,
      type: "surface-delta",
    },
  ];

  return checks.map((check) => {
    const fgRaw = resolveColorExpression(scheme, check.fg, "color");
    const bgRaw = resolveColorExpression(scheme, check.bg, "backgroundColor");
    const fg = blendOverBackground(fgRaw, bgRaw || background);
    const bg = blendOverBackground(bgRaw, background);
    const ratio = fg && bg ? contrastRatio(fg, bg) : 0;

    return {
      ...check,
      ratio,
      pass: ratio >= check.min,
    };
  });
}

function renderAuditRow(result) {
  return `
    <tr>
      <td style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;">${result.label}</td>
      <td style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;"><code>${formatRatio(result.ratio)}</code></td>
      <td style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;"><code>${result.min.toFixed(1)}:1</code></td>
      <td style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;"><code>${result.type}</code></td>
      <td style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0; font-weight: 700; color: ${result.pass ? "#1d6f3f" : "#982a2a"};">${result.pass ? "PASS" : "FAIL"}</td>
    </tr>
  `;
}

function getSchemeByName(name) {
  return schemes.find((scheme) => scheme.name === name);
}

function renderShadePurposeCard(binding, description) {
  const scheme = getSchemeByName(binding.scheme);
  const card = createElement(
    "article",
    "padding: 1.25rem; border-radius: 1rem; border: 1px solid var(--color-border--outline); background: var(--color-background); color: var(--color-font--text); display: grid; gap: 0.8rem; min-height: 16rem; box-shadow: 0 1rem 2rem -1.5rem var(--color-elevation-box-shadow--level-2);"
  );

  if (scheme) {
    setSchemeVariables(card, scheme.declarations);
  }

  const heading = createText(
    "h2",
    binding.shade,
    "margin: 0; font-size: 1.35rem; line-height: 1.1; color: var(--color-font--heading);"
  );
  const mappedTo = createElement(
    "p",
    "margin: 0; color: var(--color-font--diminish); font-size: 0.95rem;"
  );
  mappedTo.innerHTML = `Maps to <code>${binding.scheme}</code>`;
  const body = createText(
    "p",
    description,
    "margin: 0; line-height: 1.65; max-width: 34ch;"
  );

  const nested = createElement(
    "div",
    "margin-top: auto; padding: 1rem; border-radius: 0.9rem; background: var(--color-background--set); border: 1px solid var(--color-border--decorate); display: grid; gap: 0.4rem;"
  );
  nested.append(
    createText("strong", "Sample content", "color: var(--color-font--heading);"),
    createText("p", "Nested surfaces, borders and action colors inherit from the chosen scheme.", "margin: 0; color: var(--color-font--diminish);"),
    createButton("Action", "primary")
  );

  card.append(heading, mappedTo, body, nested);
  return card;
}

const schemes = parseSchemes(colorSchemesSource);
const shadeBindings = parseShadeBindings(themesSource);

export default {
  title: "Design System/Color Schemes",
};

export const SchemeShowcase = () => {
  const container = createElement(
    "div",
    "padding: 2rem; display: grid; gap: 1.5rem; font-family: 'Alegreya Sans', sans-serif; background: #f6f1eb;"
  );
  container.append(
    createText(
      "h1",
      "Color Schemes",
      "margin: 0; font-family: 'Playfair Display', 'Alegreya Sans', sans-serif; font-size: 2.4rem; line-height: 1.02;"
    ),
    createText(
      "p",
      "A full showcase makes sense for schemes, because schemes are the tested semantic source of truth. Shades are only purposeful aliases, so they do not need their own full visual duplicate of the same surface area.",
      "margin: 0; max-width: 74ch; color: #5f5750; line-height: 1.7;"
    )
  );

  schemes.forEach((scheme) => {
    container.append(renderSchemeShowcase(scheme));
  });

  return container;
};

export const ShadeBindings = () => {
  const container = createElement(
    "div",
    "padding: 2rem; font-family: 'Alegreya Sans', sans-serif; background: #f6f1eb;"
  );
  const intro = `
    <h1 style="margin-top: 0; font-family: 'Playfair Display', 'Alegreya Sans', sans-serif;">Shade bindings</h1>
    <p style="max-width: 74ch; color: #5f5750; line-height: 1.7;">
      This is the part that matters for dark mode and contextual theming: shades map a purposeful class to a scheme. That means you can keep the meaning of <code>t-shade-page</code> stable while repointing it to another contrast-checked scheme later.
    </p>
    <table style="width: 100%; border-collapse: collapse; background: white; border: 1px solid #ece7e0; border-radius: 1rem; overflow: hidden;">
      <thead>
        <tr style="text-align: left; background: #faf7f3;">
          <th style="padding: 0.85rem; border-bottom: 1px solid #ece7e0;">Shade</th>
          <th style="padding: 0.85rem; border-bottom: 1px solid #ece7e0;">Scheme</th>
          <th style="padding: 0.85rem; border-bottom: 1px solid #ece7e0;">Why it exists</th>
        </tr>
      </thead>
      <tbody>
        ${shadeBindings.map(renderBindingRow).join("")}
      </tbody>
    </table>
  `;
  container.innerHTML = intro;
  return container;
};

export const ShadePurposes = () => {
  const container = createElement(
    "div",
    "padding: 2rem; display: grid; gap: 1.25rem; font-family: 'Alegreya Sans', sans-serif; background: #f6f1eb;"
  );

  const intro = createElement("div", "display: grid; gap: 0.6rem;");
  intro.append(
    createText(
      "h1",
      "Shade purposes",
      "margin: 0; font-family: 'Playfair Display', 'Alegreya Sans', sans-serif;"
    ),
    createText(
      "p",
      "Shades are where semantic meaning becomes practical. You apply a purposeful class like page or highlight, and the underlying scheme can later change for dark mode without changing markup.",
      "margin: 0; max-width: 74ch; color: #5f5750; line-height: 1.7;"
    )
  );

  const grid = createElement(
    "div",
    "display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));"
  );

  const pageBinding = shadeBindings.find((binding) => binding.shade === "t-shade-page");
  const highlightBinding = shadeBindings.find((binding) => binding.shade === "t-shade-highlight");

  if (pageBinding) {
    grid.append(
      renderShadePurposeCard(
        pageBinding,
        "This is the base reading surface for the page or large layout regions. It should feel calm, stable, and broadly usable for long-form content."
      )
    );
  }

  if (highlightBinding) {
    grid.append(
      renderShadePurposeCard(
        highlightBinding,
        "This is a differentiated surface for featured cards, callouts, or grouped emphasis. It should separate itself from the page without breaking semantic contrast rules."
      )
    );
  }

  container.append(intro, grid);
  return container;
};

export const ContrastAudit = () => {
  const container = createElement(
    "div",
    "padding: 2rem; display: grid; gap: 1.2rem; font-family: 'Alegreya Sans', sans-serif; background: #f6f1eb;"
  );

  container.append(
    createText(
      "h1",
      "Contrast audit",
      "margin: 0; font-family: 'Playfair Display', 'Alegreya Sans', sans-serif;"
    ),
    createText(
      "p",
      "Audit ratios are calculated from resolved colors per scheme. Semi-transparent borders and hover fills are alpha-blended over scheme background before contrast is measured.",
      "margin: 0; max-width: 78ch; color: #5f5750; line-height: 1.7;"
    )
  );

  schemes.forEach((scheme) => {
    const results = evaluateSchemeContrast(scheme);
    const passCount = results.filter((result) => result.pass).length;
    const card = createElement(
      "section",
      "background: #fff; border: 1px solid #ece7e0; border-radius: 1rem; overflow: hidden;"
    );
    card.innerHTML = `
      <header style="padding: 0.9rem 1rem; border-bottom: 1px solid #ece7e0; display: flex; justify-content: space-between; align-items: baseline; gap: 0.75rem; background: #faf7f3;">
        <h2 style="margin: 0; font-size: 1.2rem;">${scheme.name}</h2>
        <strong style="font-size: 0.95rem; color: ${passCount === results.length ? "#1d6f3f" : "#982a2a"};">${passCount}/${results.length} pass</strong>
      </header>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="text-align: left; background: #fff;">
            <th style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;">Check</th>
            <th style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;">Ratio</th>
            <th style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;">Target</th>
            <th style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;">Type</th>
            <th style="padding: 0.62rem 0.75rem; border-bottom: 1px solid #ece7e0;">Result</th>
          </tr>
        </thead>
        <tbody>
          ${results.map(renderAuditRow).join("")}
        </tbody>
      </table>
    `;
    container.append(card);
  });

  return container;
};