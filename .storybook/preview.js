/** @type { import('@storybook/html-vite').Preview } */

import "../src/css/entry.css";

const preview = {
  decorators: [
    (Story) => {
      const output = Story();

      if (typeof output === "string") {
        return `<div class="t-intent-page">${output}</div>`;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "t-intent-page";
      wrapper.appendChild(output);
      return wrapper;
    },
  ],
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
