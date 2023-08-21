const { defineConfig } = require("cypress");
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin =
// require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin =
// require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
// const cypress = require('cypress');


async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  const file = config.env.configFile || 'store'
  const environmentFileName = `./cypress/config/cypress_${file}.json`
  const envConfig = require(environmentFileName)
  if(envConfig.baseUrl){
    config.baseUrl = envConfig.baseUrl
  }
	await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
	on('file:preprocessor', browserify.default(config));

	// Make sure to return the config object as it might have been modified by the plugin.
	return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://automationteststore.com/",
    pageLoadTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 15000,
    defaultCommandTimeout: 10000,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    specPattern: "**/*.feature",
    supportFile: false,
    omitFiltered: true,
    filterSpecs: true,
    retries: 3
  },
});
