var wd = require("wd")
var assert  = require("assert");
var asserter = wd.asserters;

username = (process.env.LT_USERNAME == undefined) ? "username" //Enter the username here
        : process.env.LT_USERNAME
accesskey = (process.env.LT_ACCESS_KEY == undefined) ? "access_key" //Enter the access_key here
        : process.env.LT_ACCESS_KEY

desired_capabilities = {
    'deviceName':'iPhone 12',
    'platformVersion':'14',
    'platformName':'iOS',
    'isRealMobile':true,
    'app':'lt://proverbial-ios', //Enter the app_url here
    'visual':true,
    'video': true,
    'build':'NodeJS Vanilla - iOS',
    'name': 'Sample Test - NodeJS'
}

driver = wd.promiseRemote(`https://${username}:${accesskey}@mobile-hub.lambdatest.com/wd/hub`)

async function iOStest(){

try {

driver.init(desired_capabilities)
.then(function(){
    return driver.waitForElementById('color',10000)
})
.then(function(color){
    return color.click();
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
    return geoLocation.click()
})
.then(async function(){
    return driver.waitForElementById('Back',10000)
})
.then(function(Back){
    Back.click()
    return driver.waitForElementById('speedTest',10000)
})
.then(async function(speedTest){
    speedTest.click()
    return driver.waitForElementById('Back',10000)
})
.then(function(back){
    back.click()
    return driver.waitForElementById('Browser',10000)
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
}
catch (e) {
    driver.quit()
}
}

iOStest();
