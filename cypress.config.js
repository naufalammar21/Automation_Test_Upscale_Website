
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}
module.exports = defineConfig({
video: false,
defaultCommandTimeout: 50000,
pageLoadTimeout: 1000000, e2e: {
specPattern: "**/**/*.feature",
supportFile: false,
chromeWebSecurity:false,
viewportWidth: 1280,
viewportHeight: 720,
// supportFile: 'cypress/support/component.js',
setupNodeEvents,
},
});


// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
