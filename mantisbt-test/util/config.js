
const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

//const textSelector = "=";
const texBegintSelector = "*=";
//const idSelector = "#";
//const classSelector = ".";

const testHost = process.env.TEST_HOST;
const password = process.env.AUTH_USER_PASSWORD;
const user = process.env.AUTH_USER;
//const imgPatPath = process.env.IMG_PAT_PATH;
const host = process.env.HOST;

const userSelector = "#username";
const emailSelector = "#email-field";
const passwordSelector = "#password";
const userNameSelector =  texBegintSelector.concat(process.env.AUTH_USER_NAME);

const registrationLabelSelector = "a*=Зарегистрировать";//"a=Зарегистрировать новую учётную запись";
const registrationTextSelector ="h4=Регистрация";
const registrationUrl = process.env.REGISTRATION_URL;
const registrationButtonSelector = "[value='Зарегистрироваться']";
const capchaErrorTextSelector = "p=Хэш-код подтверждения не совпадает. Пожалуйста, повторите попытку.";
const authorizationButtonSelector = "a=Вход";
const authorizationMenuExitSelector = "a=Выход";
const authorizationLabelSelector = "h4=Вход";
const authorizationUrl = process.env.AUTHORIZATION_URL;
const authorizationFormButtonSelector = "[value='Войти']";
const authorizationPasswordPageUrl = process.env.AUTHORIZATION_PASSWORD_PAGE_URL;
const userNameTitleSelector = (".user-info=").concat(process.env.AUTH_USER_NAME);
const userInfoMenuSelector = ".user-info";
const authorizationUserCheckError = "p=Возможно, ваша учётная запись заблокирована, или введённое регистрационное имя/пароль неправильны.";

const userValidPattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_+.";
const userInValidPattern = "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя*!@#$&^\/%|='()`";

const passwordPattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_+.АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя*!@#$&^\/%|='()`";

const createTaskLinkSelector = "a=Создать задачу";
const createTaskButtonSelector = "[value='Создать задачу']";
const selectTaskSelector  = "[value='Выбрать проект']";
const selectTaskLabelSelector = "h4=Выбор проекта";
const taskDataLabelSelector = "h4=Введите данные задачи";
const taskCategorySelector = "#category_id"
const taskSummarySelector = "#summary";
const taskDescriptionSelector = "#description";
const taskScopeSelector = "span=приватная";
const showTaskInfoLabel = "h4.widget-title.lighter";
const taskSummaryValueSelector = "td.bug-summary";
const taskDescriptionValueSelector = "td.bug-description p";
const tasksListMenuSelector = ".menu-text=Список задач";
const columnSummarySelector = ".column-summary";




// An abstraction on top of our host. Instead of crafting urls directly every time,
// we can call this convenient class:
//
//  "site: "new TestSite('http://github.com');
//
class TestSite {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}

module.exports = {
  // page url builder for our test site
  site: new TestSite(testHost),
  // configuration object for Selenium
  selenium: {
    host: host,
    capabilities:
      { 
        browserName: "firefox" 
      }
  },
  // test params
  testing: {   
    //"imgPatPath" : imgPatPath,
    "user" : user,
    "password" : password,
    "userSelector" : userSelector,
    "userNameSelector" : userNameSelector,
    "emailSelector" : emailSelector,
    "registrationLabelSelector": registrationLabelSelector,
    "registrationTextSelector" : registrationTextSelector,
    "registrationUrl" : registrationUrl,
    "registrationButtonSelector" : registrationButtonSelector,
    "capchaErrorTextSelector" : capchaErrorTextSelector,
    "authorizationButtonSelector" : authorizationButtonSelector,
    "authorizationLabelSelector" : authorizationLabelSelector,
    "authorizationUrl" : authorizationUrl, 
    "authorizationFormButtonSelector" : authorizationFormButtonSelector,
    "authorizationPasswordPageUrl" : authorizationPasswordPageUrl,
    "authorizationMenuExitSelector" : authorizationMenuExitSelector,
    "userNameTitleSelector" : userNameTitleSelector,
    "passwordSelector" : passwordSelector,
    "userInfoMenuSelector": userInfoMenuSelector,
    "authorizationUserCheckError" : authorizationUserCheckError,
    "userValidPattern" : userValidPattern,
    "userInValidPattern" : userInValidPattern,
    "passwordPattern" : passwordPattern,
    "createTaskLinkSelector" : createTaskLinkSelector,
    "selectTaskSelector" : selectTaskSelector,
    "selectTaskLabelSelector" : selectTaskLabelSelector,
    "taskDataLabelSelector" : taskDataLabelSelector,
    "taskSummarySelector" : taskSummarySelector,
    "taskDescriptionSelector" : taskDescriptionSelector,
    "taskScopeSelector" : taskScopeSelector,
    "taskCategorySelector" : taskCategorySelector,
    "createTaskButtonSelector" : createTaskButtonSelector,
    "showTaskInfoLabel" : showTaskInfoLabel,
    "taskSummaryValueSelector" : taskSummaryValueSelector,
    "taskDescriptionValueSelector" : taskDescriptionValueSelector,
    "tasksListMenuSelector" : tasksListMenuSelector,
    "columnSummarySelector" : columnSummarySelector
    
  },
  // generates a random string of the specified length
  makeRandomString :  (length, pattern) => {
    var result           = '';
    var characters       = pattern; 
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
};
