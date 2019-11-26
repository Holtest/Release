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

          it("Show error when capcha wrong", async () => { 
            await browser
               // Fill in our form fields with random text
              .setValue(params.userSelector, config.makeRandomString(15))
              .setValue(params.passwordSelector, config.makeRandomString(15))  
              .waitForExist(params.submitButtonSelector)
              .click(params.submitButtonSelector)
              .waitForExist(params.errorCapchaSelector)
              .screenshot().then(res => {
                allure.createAttachment("Error mes", new Buffer.from(res.value, "base64"))            
              });
            });

  });