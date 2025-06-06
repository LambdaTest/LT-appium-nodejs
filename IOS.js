var wd = require("wd")
var assert = require("assert");
var asserter = wd.asserters;

username = (process.env.LT_USERNAME == undefined) ? "username" //Enter the username here
    : process.env.LT_USERNAME
accesskey = (process.env.LT_ACCESS_KEY == undefined) ? "access_key" //Enter the access_key here
    : process.env.LT_ACCESS_KEY

desired_capabilities = {
    'deviceName': 'iPhone 12',
    'platformVersion': '14',
    'platformName': 'iOS',
    'isRealMobile': true,
    'appiumVersion': "1.22.3",
    'app': 'lt://proverbial-ios', //Enter the app_url here
    'visual': true,
    'video': true,
    'build': 'NodeJS Vanilla - iOS',
    'name': 'Sample Test - NodeJS'
}

driver = wd.promiseRemote(`https://${username}:${accesskey}@mobile-hub.lambdatest.com/wd/hub`)

async function iOStest() {
    try {
        console.log("Starting iOS test...");
        console.log("Initializing driver with capabilities:", JSON.stringify(desired_capabilities, null, 2));

        driver.init(desired_capabilities)
            .then(function () {
                console.log("Driver initialized successfully");
                return driver.waitForElementById('color', 10000)
            })
            .then(function (color) {
                console.log("Found color button, clicking...");
                return color.click();
            })
            .then(function () {
                console.log("Looking for Text element...");
                return driver.waitForElementById('Text', 10000)
            })
            .then(function (text) {
                console.log("Found Text element, clicking...");
                text.click()
                return driver.waitForElementById('toast', 10000)
            })
            .then(function (toast) {
                console.log("Found toast element, clicking...");
                toast.click()
                return driver.waitForElementById('notification', 10000)
            })
            .then(function (notification) {
                console.log("Found notification element, clicking...");
                notification.click()
                return driver.waitForElementById('geoLocation', 10000)
            })
            .then(function (geoLocation) {
                console.log("Found geoLocation element, clicking...");
                return geoLocation.click()
            })
            .then(async function () {
                console.log("Waiting 10 seconds after geolocation click...");
                await new Promise(resolve => setTimeout(resolve, 10000));
                console.log("Looking for Back button...");
                return driver.waitForElementById('Back', 10000)
            })
            .then(function (Back) {
                console.log("Found Back button, clicking...");
                Back.click()
                return driver.waitForElementById('speedTest', 10000)
            })
            .then(async function (speedTest) {
                console.log("Found speedTest element, clicking...");
                speedTest.click()
                return driver.waitForElementById('Back', 10000)
            })
            .then(function (back) {
                console.log("Found Back button, clicking...");
                back.click()
                return driver.waitForElementById('Browser', 10000)
            })
            .then(function (Browser) {
                console.log("Found Browser element, clicking...");
                Browser.click()
                return driver.waitForElementById('url', 10000)
            })
            .then(function (url) {
                console.log("Found url element, typing LambdaTest URL...");
                url.type("https://www.lambdatest.com")
                return driver.waitForElementById('find', 10000)
            })
            .then(function (find) {
                console.log("Found find element, clicking...");
                find.click()
                console.log("Test completed successfully");
                driver.quit()
            })
            .catch(function(error) {
                console.error("Error during test execution:", error);
                console.error("Error stack:", error.stack);
                driver.quit();
            });
    }
    catch (e) {
        console.error("iOS Test Failed with error:", e);
        console.error("Error stack:", e.stack);
        driver.quit()
    }
}

iOStest();
