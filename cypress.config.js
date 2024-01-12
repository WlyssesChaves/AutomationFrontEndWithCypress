const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    experimentalRunAllSpecs: true,
    baseUrl: "https://sampleapp.tricentis.com/101/app.php",
    defaultCommandTimeout: 30000,
  },
};
