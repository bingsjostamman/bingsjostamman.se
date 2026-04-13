import "../../css/03-generic/_fonts.css";

const fonts = [
  {
    family: "Alegreya",
    role: "Headings & display",
    weights: [
      { label: "Regular", value: 400 },
      { label: "Italic", value: 400, italic: true },
      { label: "Medium", value: 500 },
      { label: "Medium Italic", value: 500, italic: true },
      { label: "SemiBold", value: 600 },
      { label: "Bold", value: 700 },
      { label: "ExtraBold", value: 800 },
      { label: "Black", value: 900 },
    ],
  },
  {
    family: "Alegreya Sans",
    role: "Primary body font",
    weights: [
      { label: "Thin", value: 100 },
      { label: "Light", value: 300 },
      { label: "Regular", value: 400 },
      { label: "Medium", value: 500 },
      { label: "Bold", value: 700 },
      { label: "ExtraBold", value: 800 },
      { label: "Black", value: 900 },
    ],
  },
  {
    family: "Playfair Display",
    fontFamily: "'Playfair Display', 'Alegreya Sans'",
    role: "Decorative (& ampersand)",
    weights: [
      { label: "Regular", value: 400 },
      { label: "Italic", value: 400, italic: true },
      { label: "Medium", value: 500 },
      { label: "Medium Italic", value: 500, italic: true },
      { label: "SemiBold", value: 600 },
      { label: "SemiBold Italic", value: 600, italic: true },
      { label: "Bold", value: 700 },
      { label: "Bold Italic", value: 700, italic: true },
    ],
  },
];

const sampleText = "Bingsjöstämman – Folk music & dance since 1969";

function renderWeight(fontFamily, { label, value, italic }) {
  return `
    <div style="display: grid; grid-template-columns: 10rem 4rem 1fr; align-items: baseline; gap: 1rem; padding: 0.35rem 0;">
      <code style="font-size: 0.8rem; color: #666;">${label} (${value})</code>
      <span style="font-family: ${fontFamily}; font-weight: ${value}; font-style: ${italic ? "italic" : "normal"}; font-size: 1.25rem;">Aa</span>
      <span style="font-family: ${fontFamily}; font-weight: ${value}; font-style: ${italic ? "italic" : "normal"}; font-size: 1.25rem;">${sampleText}</span>
    </div>`;
}

function renderFont({ family, fontFamily, role, weights }) {
  const ff = fontFamily || `'${family}'`;
  return `
    <section style="margin-bottom: 3rem;">
      <div style="margin-bottom: 1rem;">
        <h3 style="margin: 0; font-family: ${ff}; font-size: 1.75rem;">${family}</h3>
        <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: #888;">${role}</p>
      </div>
      ${weights.map((w) => renderWeight(ff, w)).join("")}
    </section>`;
}

export default { title: "Design System/Fonts" };

export const FontSpecimen = () => {
  const container = document.createElement("div");
  container.style.cssText =
    "max-width: 60rem; padding: 2rem; font-family: sans-serif;";
  container.innerHTML = `
    <h2 style="margin-top: 0;">Font Specimen</h2>
    ${fonts.map(renderFont).join("")}

    <section style="margin-bottom: 3rem;">
      <h3 style="margin: 0 0 1rem;">The Playfair &amp;</h3>
      <p style="margin: 0; font-size: 0.85rem; color: #888; margin-bottom: 1rem;">
        Playfair Display is used exclusively for the ampersand character.
      </p>
      <div style="display: flex; gap: 2rem; align-items: baseline; flex-wrap: wrap;">
        ${[400, 500, 600, 700]
          .map(
            (w) => `
          <span style="font-family: 'Playfair Display'; font-weight: ${w}; font-size: 4rem; line-height: 1;">&amp;</span>
        `,
          )
          .join("")}
        ${[400, 500, 600, 700]
          .map(
            (w) => `
          <span style="font-family: 'Playfair Display'; font-weight: ${w}; font-style: italic; font-size: 4rem; line-height: 1;">&amp;</span>
        `,
          )
          .join("")}
      </div>
    </section>

    <section>
      <h3 style="margin: 0 0 1rem;">Size Scale</h3>
      <p style="margin: 0; font-size: 0.85rem; color: #888; margin-bottom: 1rem;">
        Alegreya at various type sizes.
      </p>
      ${[12, 14, 16, 18, 20, 24, 30, 36, 48, 64]
        .map(
          (size) => `
        <p style="font-family: 'Playfair Display','Alegreya'; font-size: ${size}px; margin: 0.5rem 0; line-height: 1.3;">
          <code style="font-family: monospace; font-size: 0.75rem; color: #999; display: inline-block; width: 4rem;">${size}px</code>
          BINGSJÖSTÄMMAN & folkmusik sedan 1969
        </p>
      `,
        )
        .join("")}
    </section>
  `;
  return container;
};
