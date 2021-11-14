const { Builder, By, Key, until } = require('selenium-webdriver')
var webdriver = require('selenium-webdriver')
const assert = require('assert')

driver =  new Builder().forBrowser('firefox').build()
vars = {}


class Basepage{

    login
    password
    expectedValue
    realvalue
    baseurl
    timeout
    static constructor() {
    global.driver = driver;
        let timeout = this.timeout(300000)
        let vars
        let login = "shkolar.neymeka@bk.ru"
        let password = "V$#C8BZC6Nn*5jr"
        let expectedValue = "HK50"
        let realvalue
        const baseurl = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F";
    }
    static async goToUrl(baseurl){
        await driver.get(baseurl)
    }
    static async login( login, password,timeout,done){
            await driver.findElement(By.id("loginform-login")).sendKeys(login)
            await driver.findElement(By.id("loginform-password")).sendKeys(password)
            await driver.findElement(By.css(".btn_large:nth-child(1)")).click()
            await driver.sleep(3000);

    }
    static async findValue(expectedValue,timeout){
        await driver.findElement(By.name("search")).click()
        await driver.findElement(By.name("search")).sendKeys(expectedValue)
        await driver.sleep(3000);
        await driver.findElement(By.css(".item:nth-child(2) > .link")).click()
        await driver.sleep(3000);

    }
    static async checkValue(expectedValue, realvalue, timeout){
        realvalue = await driver.findElement(By.css(".page_header_part > .title > h2")).getText()
        assert.equal(expectedValue, realvalue);


    }

}

module.exports = Basepage;