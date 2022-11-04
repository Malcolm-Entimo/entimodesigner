const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m9nsta",

  // The rest of the Cypress config options go here...
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
