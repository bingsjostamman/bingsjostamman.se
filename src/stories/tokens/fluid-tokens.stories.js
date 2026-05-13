export default { title: "Design System/Fluid Tokens" };
export const FluidTokens = () => {
  const container = document.createElement("div");
  container.style.padding = "2rem";
  container.style.background = "#f9f9f9";
  container.style.fontFamily = "sans-serif";
  container.innerHTML = `
<h2>Fluid Typography & Spacing</h2>

<div style="margin-bottom: 2rem">
  <h3>Font Sizes</h3>
  ${Array.from(
    { length: 10 },
    (_, i) => `
  <p style="font-size: var(--font-size-${i - 2})">--font-size-${i - 2}</p>
  `
  ).join("")}
</div>

<div style="margin-bottom: 2rem">
  <h3>Font Leading</h3>
  ${Array.from(
    { length: 9 },
    (_, i) => `
  <p style="line-height: var(--font-leading-${i + 2})">
    --font-leading-${i + 2}
  </p>
  `
  ).join("")}
</div>

<div>
  <h3>Spacing / Sizes</h3>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem">
    ${["quarter", "half", "full", "double", "quad", "octo"]
      .map(
        (name) => `
    <div
      style="
        width: var(--size-${name});
        background: #ccc;
        text-align: center;
        padding: 0.5rem;
      "
    >
      --size-${name}
    </div>
    `
      )
      .join("")}
  </div>
</div>
`;
  return container;
};
