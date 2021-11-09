const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('search hk50 test', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('search hk50 test', async function() {
        await driver.get("https://my.liteforex.com/ru")
        await driver.manage().window().setRect(1084, 697)
        await driver.findElement(By.id("js_header_demo_login")).click()
        //await driver.findElement(By.id("popup_login")).show()
        //await driver.findElement(By.name("loginform-login")).click()
        await driver.findElement(By.id("loginform-login")).sendKeys(" shkolar.neymeka@bk.ru")
        //await driver.findElement(By.id("loginform-password")).click()
        await driver.findElement(By.id("loginform-password")).sendKeys("V$#C8BZC6Nn*5jr")
        await driver.findElement(By.css(".btn_large:nth-child(1)")).click()
        await driver.findElement(By.name("search")).click()
        await driver.findElement(By.name("search")).sendKeys("hk")
        await driver.findElement(By.css(".item:nth-child(2) > .link")).click()
        {
            const element = await driver.findElement(By.linkText("Информация об инструменте"))
            await driver.actions({ bridge: true }).moveToElement(element).perform()
        }
        await driver.findElement(By.css(".page")).click()
        await driver.close()
    })
})
