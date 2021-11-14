const { Builder, By, Key, until } = require('selenium-webdriver')
const Homepage = require('./Test/homepage')
    const Basepage = require('./pageobjects/basepage')


describe('index.js', function() {

    let driver
    let vars
    let login = "shkolar.neymeka@bk.ru"
    let password = "V$#C8BZC6Nn*5jr"
    let expectedValue = "HK50"
    let realvalue
    var baseurl = "https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F"

    beforeEach(async function() {
        var BasePage = new Basepage();
        var Homepage = new Homepage();
    })
    afterEach(async function() {
        await driver.quit();
        await driver.close()
    })
    it('search hk50 test', async function() {
        //var Homepage = new Homepage();
        //var Basepage = new Homepage();
        await Homepage.goToUrl(baseurl)
        Homepage.login(login,password)
        Homepage.findvalue(expectedValue)
        Homepage.checkvalue(expectedValue, realvalue)
        /*await driver.get("https://my.liteforex.com/ru?openPopup=%2Fru%2Flogin%2Fpopup%3FreturnUrl%3D%252Fru%252F")
        await driver.manage().window().setRect(1084, 697)
        await driver.sleep(3000);
        await driver.findElement(By.id("loginform-login")).sendKeys(login)
        await driver.findElement(By.id("loginform-password")).sendKeys(password)
        await driver.findElement(By.css(".btn_large:nth-child(1)")).click()
        await driver.sleep(3000);
        await driver.findElement(By.name("search")).click()
        await driver.findElement(By.name("search")).sendKeys(expectedValue)
        await driver.sleep(3000);

        await driver.findElement(By.css(".item:nth-child(2) > .link")).click()
        await driver.sleep(3000);

        realvalue = await driver.findElement(By.css(".page_header_part > .title > h2")).getText()
        assert.equal(expectedValue, realvalue);
        */
    })
})
