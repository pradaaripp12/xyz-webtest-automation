const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
module.exports = defineConfig({
  viewportWidth: 1078,
  viewportHeight: 660,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/BankingProject",
  },
  e2e: {
    setupNodeEvents(on) {
      let opts = browserify.defaultOptions;
      opts.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@tests' : './tests',
            '@helpers': './tests/helpers',
          },
        },
      ]);
      on("file:preprocessor", browserify(opts));
    },
    specPattern:'tests/scenarios/**/*.test.js'
  },
});
