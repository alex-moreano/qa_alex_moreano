const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: true,
    reportFilename: 'index',
    html: true,
    json: true,
    reportDir: 'cypress/reports'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});