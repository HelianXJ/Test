var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

describe('basic test', function () {
    it('search title', function (done) {
        driver.get("http://www.baidu.com");
        driver.findElement(webdriver.By.name("wd")).sendKeys("webdriver");
        driver.findElement(webdriver.By.id("su")).click().then(function () {
            driver.getTitle().then(function (title) {
                expect(title).toBe('webdriver_百度搜索');
                done();
            });
        });
    });
});
