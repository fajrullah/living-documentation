import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@chromatic-com/storybook",
    {
      name: "@storybook/addon-docs",
      options: { autodocs: "tag" },
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    { from: '../public', to: 'public' },
    { from: '../public/mockServiceWorker.js', to: 'mockServiceWorker.js' },
    { from: '../assets/fonts', to: 'assets/fonts' }, // Local fonts
  ]
};
export default config;