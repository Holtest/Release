/** TODO
 * 1. Add switch tabs
 */

"use strict";

const config = require("../util/config");
const describeWithBrowser = require("../util/browser");
const assert = require('assert')
const params = config.testing;

let browser;

  describeWithBrowser(
 
    "Passport",
    
    b => (browser = b),
    () => {
    
        it("Form links: resetCreditans&registration", async () => { 
          await browser          
            .waitForExist(params.resetCreditansSelector)
            .click(params.resetCreditansSelector)
            .waitForExist(params.resetCreditansLabelSelector)
            .screenshot().then(res => {
              allure.createAttachment("Reset Creditans", new Buffer.from(res.value, "base64"))            
            })
            .getUrl().then(url => {
              assert.equal(url, params.resetCreditansUrl)
            })
            .back()
            .waitForExist(params.registrationSelector)
            .click(params.registrationSelector)
            .screenshot().then(res => {
              allure.createAttachment("Registration", new Buffer.from(res.value, "base64"))            
            })
            .getUrl().then(url => {
              assert.equal(url, params.registrationUrl)
            });

        });   

  
  }); 