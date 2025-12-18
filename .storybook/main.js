import { mergeConfig } from "vite";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/html-vite", // or "@storybook/html-webpack5" if not using Vite
    options: {},
  },
  staticDirs: ["../public"], //👈 Configures the static asset folder in Storybook
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    // Optional: tweak Vite config to handle Eleventy-style includes
    return mergeConfig(config, {
      optimizeDeps: { include: [] },
    });
  },
};
