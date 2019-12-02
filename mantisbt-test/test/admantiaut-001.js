"use strict";

var expect = require("chai").expect;
const params = require("../util/config").testing;
const describeWithBrowser = require("../util/browser");

let browser;

describeWithBrowser(
  "Mantisbt",

  b => (browser = b),
  () => {

    it("Autorization", async () => {
      await browser 
        // Login with params.user : params.password
          //go to the authorization page
          .click(params.authorizationButtonSelector)
          .waitForExist(params.authorizationLabelSelector)
          .screenshot().then(res => {
            allure.createAttachment("Authorization form", new Buffer.from(res.value, "base64"))            
          })
          // check current url
          .getUrl().then(url => {
            expect(url).to.include(params.authorizationUrl)
          })
          // set user value
          .setValue(params.userSelector, params.user)
          // go to the password entry page
          .click(params.authorizationFormButtonSelector)
          // check current url
          .getUrl().then(url => {
            expect(url).to.equal(params.authorizationPasswordPageUrl)
          })
          .waitForExist(params.passwordSelector)
          // set password value
          .setValue(params.passwordSelector, params.password)
          // go to the authorized page
          .click(params.authorizationFormButtonSelector)     
          .waitForExist(params.userNameSelector)
          .screenshot().then(res => {
            allure.createAttachment("Authorized user", new Buffer.from(res.value, "base64"))            
          })
          // go to the user menu dropdown
          .click(params.userInfoMenuSelector)
          .waitForExist(params.authorizationMenuExitSelector)   
          // logout
          .click(params.authorizationMenuExitSelector)
          .waitForExist(params.authorizationLabelSelector) 
    });

  });