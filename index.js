const { Builder, By, Key, until } = require('selenium-webdriver')
    const Basepage = require('./pageobjects/basepage')
const assert = require("assert");


describe('index.js', function() {

    let driver
    let vars
    let login = "shkolar.neymeka@bk.ru"
    let password = "V$#C8BZC6Nn*5jr"
    let expectedValue = "HK50"
    let realvalue
    var baseurl = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F"

    beforeEach(async function() {
        this.timeout(300000)
    })
    afterEach(async function() {
        await driver.quit();
        await driver.close()
    })
    it('search hk50 test', async function(done) {
        Basepage:this.timeout(300000)
        setTimeout(done, 300000);
        await Basepage.goToUrl(baseurl)
        await Basepage.login(login,password)
        await Basepage.findValue(expectedValue)
        await Basepage.checkValue(expectedValue, realvalue)
    })
})
