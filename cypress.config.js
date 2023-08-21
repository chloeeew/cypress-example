const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      // custom configuration file
      const file = config.env.configFile || 'store'
      const environmentFileName = `./cypress/config/cypress_${file}.json`
      const envConfig = require(environmentFileName)
      if(envConfig.baseUrl){
        config.baseUrl = envConfig.baseUrl
      }

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });
      
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },
    baseUrl: "https://automationteststore.com/",
    pageLoadTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 6000,
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    supportFile: false,
    omitFiltered: true,
    filterSpecs: true
  },
});
