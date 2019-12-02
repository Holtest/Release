"use strict";

const assert = require('assert');
const config = require("../util/config");
const params = config.testing;
const describeWithBrowser = require("../util/browser");

let browser;

describeWithBrowser(
  "Mantisbt",

  b => (browser = b),
  () => {

    it("Registration", async () => {
      await browser
        // go to registration page
        .click(params.registrationLabelSelector)
        .waitForExist(params.registrationTextSelector)
        .screenshot().then(res => {
          allure.createAttachment("Registration form", new Buffer.from(res.value, "base64"))            
        })
        // check current url
        .getUrl().then(url => {
          assert.equal(url, params.registrationUrl)
        })
        // try registration
        .click(params.registrationButtonSelector)
        // expect an error
        .waitForExist(params.capchaErrorTextSelector)
        .screenshot().then(res => {
          allure.createAttachment("Capcha error", new Buffer.from(res.value, "base64"))            
        })
        .back()
        // set user value random  
        .setValue(params.userSelector, config.makeRandomString(15))
        // set password value random  
        .setValue(params.emailSelector, config.makeRandomString(15)) 
        // try registration
        .click(params.registrationButtonSelector)
        .screenshot().then(res => {
          allure.createAttachment("Capcha error", new Buffer.from(res.value, "base64"))            
        })
      });

  });

