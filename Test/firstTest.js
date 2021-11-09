const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
   //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();
    //navigate to our app
    await driver.get("https://pastebin.com/")
    //add a todo

    //close the browser
}
example()