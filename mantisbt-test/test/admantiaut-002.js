"use strict";

var expect = require("chai").expect;
const config = require("../util/config");
const params = config.testing;
const describeWithBrowser = require("../util/browser");

let browser;

describeWithBrowser(
  "Mantisbt",

  b => (browser = b),
  () => {

    it("Field validation", async () => {
      await browser 
        // go to the authorization page
        .click(params.authorizationButtonSelector)
        .waitForExist(params.authorizationLabelSelector)
        // check current url
        .getUrl().then(url => {
          expect(url).to.include(params.authorizationUrl)
        })
        // username must be empty
        .getValue(params.userSelector).then(url => {
          expect(url).to.equal("")
        })
        // go to the password entry page
        .click(params.authorizationFormButtonSelector)
        .screenshot().then(res => {
          allure.createAttachment("Authorization error", new Buffer.from(res.value, "base64"))            
        })
        // expect an error
        .waitForExist(params.authorizationUserCheckError)
        .back()
        .waitForExist(params.authorizationLabelSelector)
        // set user value random  
        .setValue(params.userSelector, config.makeRandomString(30,params.userInValidPattern))
        // go to the password entry page
        .click(params.authorizationFormButtonSelector)
        // username must be empty
        .getValue(params.userSelector).then(url => {
          expect(url).to.equal("")
        })
        .back()
        .waitForExist(params.authorizationLabelSelector)
        // set user value random
        .setValue(params.userSelector, config.makeRandomString(30,params.userValidPattern))
        // go to the password entry page
        .click(params.authorizationFormButtonSelector)
        .waitForExist(params.authorizationLabelSelector)
        // set password value random  
        .setValue(params.passwordSelector, config.makeRandomString(30,params.passwordPattern))
        // go to the password entry page
        .click(params.authorizationFormButtonSelector)
        // expect an error
        .waitForExist(params.authorizationUserCheckError)
    });

  });