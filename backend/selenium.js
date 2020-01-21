const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:8080')
    await driver.wait(
      until.elementTextContains(driver.findElement(By.id('mocha-finished')), 'done')
      , 10000)
    await driver.findElement(By.id('mocha-stats'))
    .then(el => el.getText())
    .then(t => console.log(t))
    .catch(e => console.log(e))
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } catch (e) {
    console.log(e)
  }finally {
    await driver.quit();
  }
})();
