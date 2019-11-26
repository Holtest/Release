/** TODO
 * 1. Consider chat icon.
  * 
 */

"use strict";

const assert = require('assert');
const config = require("../util/config");
const params = config.testing;
const describeWithBrowser = require("../util/browser");
const fs = require('fs');
//package for compare images
var looksSame = require('looks-same');
const path = require('path');
//image to compare
const imagePath = (name) => path.join(params.imageTemplatePath, name);

let browser;

describeWithBrowser(
  "Passport",

  b => (browser = b),
  () => {

    it("Form view", async () => {

      const expImgSrc = await browser.screenshot();
      const actImgBuff = new Buffer.from(expImgSrc.value, params.encodingType);
      const expImg = fs.readFileSync(imagePath(params.templAutFormImageName));

      // create diff expect and actual screen
      await looksSame.createDiff({
        reference: expImg,
        current: actImgBuff
      }, (error, buffer) => {
        allure.createAttachment("diff.png", buffer);
        looksSame(expImg, actImgBuff, {strict: true}, (err, {equal}) => {
              //!!!allure does't catch an exception
              assert.equal(equal, true);
            });
      });
      //attach actual image to report
      await allure.createAttachment(params.templAutFormActualImageName, actImgBuff);
      //attach actual image to report
      await allure.createAttachment(params.templAutFormExpectedImageName, expImg);

    });


  });

