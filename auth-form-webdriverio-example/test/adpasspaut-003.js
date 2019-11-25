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

        it("Authorization (not checked 'Remember me')", async () => { 
          await browser
            .setValue(params.userSelector, params.user)
            .setValue(params.passwordSelector, params.password)  
            .click(params.submitButtonSelector)
            .waitForExist(params.userNameSelector)
            .screenshot().then(res => {
              allure.createAttachment("Lk", new Buffer.from(res.value, "base64"))            
            })
            .click(params.userNameSelector)
            .waitForExist(params.menuExitSelector)
            .screenshot().then(res => {
              allure.createAttachment("Menu", new Buffer.from(res.value, "base64"))            
            })
            .click(params.menuExitSelector);
          });
  
  });