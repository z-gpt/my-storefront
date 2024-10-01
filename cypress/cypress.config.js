const { defineConfig } = require('cypress')


module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  screenshotsFolder: 'screenshots',
  downloadsFolder: 'downloads',
  fixturesFolder: 'src/fixtures',
  video: false,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  viewportHeight: 900,
  viewportWidth: 1440,
  scrollBehavior: 'nearest',
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
  },
  e2e: {
    baseUrl: 'https://test-cypress--aem-boilerplate-commerce--hlxsites.aem.page/',
    supportFile: 'src/support/index.js',
    specPattern: 'src/tests/**/*.spec.js',
  },
  env: {
    graphqlEndPoint: 'https://mcstaging.aemshop.net/graphql',
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
