const { Builder, By, Key, until } = require('selenium-webdriver')
var webdriver = require('selenium-webdriver')
const assert = require('assert')

driver =  new Builder().forBrowser('firefox').build()
vars = {}
//this.timeout(300000)

class Basepage{
    constructor() {
    global.driver = driver;
        let vars
        let login = "shkolar.neymeka@bk.ru"
        let password = "V$#C8BZC6Nn*5jr"
        let expectedValue = "HK50"
        let realvalue
        const baseurl = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F";
    }
    async goToUrl(baseurl){
        await driver.get(baseurl)
    }
}

module.exports = Basepage;