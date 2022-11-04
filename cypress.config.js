const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cc4c5184-0efc-47b0-8098-d91050fe2c60",
  // The rest of the Cypress config options go here...
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
