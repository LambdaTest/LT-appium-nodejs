var wd = require("wd")
var assert  = require("assert");
const text = require("body-parser/lib/types/text");
var asserter = wd.asserters;

username = (process.env.LT_USERNAME == undefined) ? "ankitagarwal" 
        : process.env.LT_USERNAME
accesskey = (process.env.LT_ACCESS_KEY == undefined) ? 
        "39dQIDuAGGlnaQSlM3HcceVRy9ftXEk8auSNINALa5oZwWtjh6" : process.env.LT_ACCESS_KEY

caps = {
    'deviceName':'Galaxy S20',
    'platformVersion':'11',
    'platformName':'android',
    'isRealMobile':true,
    'app':'lt://APP100201841649245552835614',
    'visual':true,
    'video': true
}

driver = wd.promiseRemote(`https://${username}:${accesskey}@beta-hub.lambdatest.com/wd/hub`)

driver.init(caps)
.then(function(){
    return driver.waitForElementById('color',10000)
})
.then(function(colorButton){
    return colorButton.click();
})
.then(function(){
    return driver.waitForElementById('Text',10000)
})
.then(function(text){
    text.click()
    return driver.waitForElementById('toast',10000)
})
.then(function(toast){
    toast.click()
    return driver.waitForElementById('notification',10000)
})
.then(function(notification){
    notification.click()
    return driver.waitForElementById('geoLocation',10000)
})
.then(function(geoLocation){
    geoLocation.click()
    return driver.waitForElementById('buttonPage',10000)
})
.then(function(Home){
    Home.click()
    return driver.waitForElementById('speedTest',10000)
})
.then(function(speedTest){
    speedTest.click()
    return driver.waitForElementById('webview',10000)
})
.then(function(Browser){
    Browser.click()
    return driver.waitForElementById('url',10000)
})
.then(function(url){
    url.type("https://www.lambdatest.com")
    return driver.waitForElementById('find',10000)
})
.then(function(find){
    find.click()
    driver.quit()
})