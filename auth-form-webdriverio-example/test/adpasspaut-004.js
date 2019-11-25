/** TODO
 * 1. When capcha is displayed the test failed.
 */

"use strict";

const config = require("../util/config");
const describeWithBrowser = require("../util/browser");
const params = config.testing;

let browser;

  describeWithBrowser(
    
    "Passport",
    b => (browser = b),
    () => {
        it("Show capcha when username&password is empty", async () => { 
          await browser
            .setValue(params.userSelector, config.makeRandomString(15))
            .setValue(params.passwordSelector, config.makeRandomString(15))  
            .waitForExist(params.submitButtonSelector)
            /*.click(params.submitButtonSelector)
            .waitForExist(params.errorWrongUserPassSelector)*/
            .screenshot().then(res => {
              allure.createAttachment("Error mes", new Buffer.from(res.value, "base64"))            
            });
        });
  });