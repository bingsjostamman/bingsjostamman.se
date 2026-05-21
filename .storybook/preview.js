/** @type { import('@storybook/html-vite').Preview } */

import "../src/css/entry.css";

const preview = {
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
