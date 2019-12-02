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

    it("Create & view task", async () => {
      const taskSummary = config.makeRandomString(15,params.passwordPattern);
      const taskDescription = config.makeRandomString(15,params.passwordPattern);
      await browser 
        // go to authorization page
        .click(params.authorizationButtonSelector)
        .waitForExist(params.authorizationLabelSelector)
        // set user value correct  
        .setValue(params.userSelector, params.user)
        // go to the password entry page
        .click(params.authorizationFormButtonSelector)
        .waitForExist(params.authorizationLabelSelector)
        // set password value correct  
        .setValue(params.passwordSelector,params.password)
        // go to password entry page
        .click(params.authorizationFormButtonSelector)
        // 
        .waitForExist(params.createTaskLinkSelector)
        // go to report creation page
        .click(params.createTaskLinkSelector)
        .waitForExist(params.createTaskLinkSelector)
        .click(params.selectTaskSelector)
        
        // select category
        .selectByIndex(params.taskCategorySelector,1)
        // fill summary
        .setValue(params.taskSummarySelector,taskSummary)
        // fill description
        .setValue(params.taskDescriptionSelector,taskDescription)
        // select scope
        .click(params.taskScopeSelector)
        .click(params.createTaskButtonSelector)
        
        // check created task
        .click(params.tasksListMenuSelector)
        .waitForExist(params.columnSummarySelector.concat("=",taskSummary))

        /*.getValue(params.taskSummaryValueSelector)
        .then(value => {
          expect(value).to.include(taskSummary)
        })
        .getValue(params.taskDescriptionValueSelector)
        .then(value => {
          expect(value).to.include(taskDescription)
        })*/

        
    });

  });