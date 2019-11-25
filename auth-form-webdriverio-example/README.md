#form-auth-test-webdriverio
Form authorization test example with Mocha&Webdriver.io&Allure

## Setup

1. Install [node.js version 8+](https://nodejs.org/). This project uses modern Javascript features, that will not work in older versions.
2. Install npm.

3. Install dependencies `npm install`.
4. Run selenium server `npx selenium-standalone start`.
4. Run tests via `npm test`.
5. Run `npm run report` to build `html` report from results and it will be
opened in your browser.

## Project structure

* **test/** – test files. Our setup uses [Mocha].
    * **adpasspaut-001.js** – test with screen diff
    * **adpasspaut-002.js** – test links
    * **adpasspaut-003.js** – test auth
    * **adpasspaut-004.js** – test err message
    * **adpasspaut-005.js** – test capcha err message capchs
* **util/** - additional helpers
    * **config.js** – configuration file where specified base options for tests
    * **browser.js** - browser provider for your tests
* **.env** - environment variables with personal data
    * AUTH_USER = 
    * AUTH_USER_PASSWORD = 
    * AUTH_USER_NAME = 
    * TEST_HOST = 
    * RESET_CREDINTAILS_URL = 
    * TERM_OF_SERVICE_URL = 
    * PRIVACY_POLICY_URL = 
    * REGISTRATION_URL = 
    * HOST = localhost
    
