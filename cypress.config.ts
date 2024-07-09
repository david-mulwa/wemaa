import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // replace with your app's base URL
    pageLoadTimeout: 120000, // 2 minutes timeout
  },
});
