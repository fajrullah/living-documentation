import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run storybook',
    port: 6006, // match Storybook's port
    reuseExistingServer: !process.env.CI,
  },
});
