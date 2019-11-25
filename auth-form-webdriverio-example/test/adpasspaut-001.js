/** TODO
 * 1. Consider chat icon.
 * 2. To move the path in settings.
 * 
 */

"use strict";

const { expect } = require("chai");
const config = require("../util/config");
const describeWithBrowser = require("../util/browser");
const fs = require('fs');
var looksSame = require('looks-same');
const path = require('path');
//image to compare
const imagePath = (name) => path.join('./img_pat', name);

let browser;

describeWithBrowser(
   "Passport",
  
  b => (browser = b),
  () => {
    
    // Whenever we will call this function, it will be displayed in the report
    const screenshot = allure.createStep("saveScreenshot", async name => {
      const res = await browser.screenshot();
      // Webdriver.io produces values as base64-encoded string. Allure expects either plain text
      // string or Buffer. So, we are decoding our value, using constructor of built-in Buffer object
      allure.createAttachment(name, new Buffer.from(res.value, "base64"));
    });
      
    it("Form view", async () => {

        const res = await browser.screenshot();
        const actImgBuff = new Buffer.from(res.value, "base64");
        const expImg = fs.readFileSync(imagePath('aut_m.png'));

        await looksSame.createDiff({
            reference: expImg,
            current: actImgBuff
          }, (error, buffer) => {
            allure.createAttachment("diff.png", buffer);
            looksSame(expImg, actImgBuff, {strict: true}, (err, {equal}) => {
                    expect(equal).to.equal(true);
                });
          });
        await allure.createAttachment("actual.png", actImgBuff);
        await allure.createAttachment("expected.png", expImg);  
     
    });


  });

