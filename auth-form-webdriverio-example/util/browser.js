/** TODO
 * 1. Save history.
 * 2. Add errors to report
 */

const webdriverio = require("webdriverio");
const config = require("./config");

// Helper function to provide browser object for our test cases. Usage
//
//  desribeWithBrowser(
//   'name'
//  )
//
try{
  module.exports = function describeWithBrowser(name, callback, body) {
    let browser;
    describe(name, async () => {
      // As we using beforeEach here, new browser will be received for every test case
      beforeEach(async () => {
        browser = webdriverio.remote(config.selenium);
        await browser
            .init()
            .url(config.site.baseUrl);
        callback(browser);
      });
      
      body();

      // Shut down browser
      afterEach(() => {
        return browser.end();
      });
    });
  };
}
// Show errors
catch (error) {
  console.error(error);
};

