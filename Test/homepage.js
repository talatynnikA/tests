

const { Builder, By, Key, until } = require('selenium-webdriver')
let Basepage = require('../pageobjects/basepage');
let webdriver = require('selenium-webdriver');

class Homepage extends  Basepage{

    async login( login, password){
        await driver.manage().window().setRect(1084, 697)
        await driver.sleep(3000);
        await driver.findElement(By.id("loginform-login")).sendKeys(login)
        await driver.findElement(By.id("loginform-password")).sendKeys(password)
        await driver.findElement(By.css(".btn_large:nth-child(1)")).click()
        await driver.sleep(3000);

    }
    async findValue(expectedValue){
        await driver.findElement(By.name("search")).click()
        await driver.findElement(By.name("search")).sendKeys(expectedValue)
        await driver.sleep(3000);
        await driver.findElement(By.css(".item:nth-child(2) > .link")).click()
        await driver.sleep(3000);

    }
    async checkValue(expectedValue, realvalue){
        realvalue = await driver.findElement(By.css(".page_header_part > .title > h2")).getText()
        assert.equal(expectedValue, realvalue);

    }
}
module.exports = Homepage;
module.exports = Basepage;