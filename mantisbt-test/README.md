#mantisbt-test
Example with Mocha&Webdriver.io&Allure

## Setup

1. Install [node.js version 8+](https://nodejs.org/).
2. Install npm.

3. Install dependencies `npm install`.
4. Run selenium server `npx selenium-standalone start`.
4. Run tests via `npm test`.
5. Run `npm run report` to build `html` report from results and it will be
opened in your browser.

## Project structure

* **test/** – test files. Our setup uses [Mocha].
    * **admantiaut-001.js** – test successful authorization
    * **admantiaut-002.js** – test unsuccessful authorization
    * **admantireg-001** – test registration
    * **admantitsk-001.js** – test create & view task
* **util/** - additional helpers
    * **config.js** – configuration file where specified base options for tests
    * **browser.js** - browser provider for your tests
* **.env** - environment variables with personal data
* AUTH_USER = 
* AUTH_USER_PASSWORD = 
* AUTH_USER_NAME =
* TEST_HOST = 
* HOST = localhost
* REGISTRATION_URL = 
* AUTHORIZATION_URL = 
* AUTHORIZATION_PASSWORD_PAGE_URL = 
    
