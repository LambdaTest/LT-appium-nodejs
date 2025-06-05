const { NavigationTracker } = require('appium-navigation-tracker');
const wd = require("wd");

/**
 * Username to be used for running the test.
 */
const username = process.env.LT_USERNAME;

/**
 * The access key to be used for running test test.
 */
const accessKey = process.env.LT_ACCESS_KEY;

/**
 * App ID to be used for running the test.
 */
const appId = process.env.LT_APP_ID;

/**
 * Capabilities to be passed while running the test.
 */
const desiredCapabilities = {
  app: appId,
  build: "NodeJS - Android",
  name: "Sample Test NodeJS",
  deviceName: "Galaxy S20",
  isRealMobile: true,
  appiumVersion: "1.22.3",
  platformName: "android",
  platformVersion: "11",
  video: true,
  visual: true,
};

const driver = wd.promiseRemote(
  `https://${username}:${accessKey}@mobile-hub.lambdatest.com/wd/hub`
);

const DEFAULT_TIMEOUT = 10000;

/**
 * Run an android test.
 */
async function runAndroidTest() {
  try {
    console.log("Starting Android test...");
    console.log("Initializing driver with capabilities:", JSON.stringify(desiredCapabilities, null, 2));
    
    // Initialize navigation tracker without API upload
    const navigationTracker = new NavigationTracker(driver, {
      enableApiUpload: false
    });
    
    driver
      .init(desiredCapabilities)
      .then(async function () {
        console.log("Driver initialized successfully");
        // Start tracking navigation
        await navigationTracker.trackNavigation();
        return driver.waitForElementById("color", DEFAULT_TIMEOUT);
      })
      .then(async function (colorButton) {
        console.log("Found color button, clicking...");
        await navigationTracker.beforeClick("color");
        await colorButton.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("Text", DEFAULT_TIMEOUT);
      })
      .then(async function (text) {
        console.log("Found Text element, clicking...");
        await navigationTracker.beforeClick("Text");
        await text.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("toast", DEFAULT_TIMEOUT);
      })
      .then(async function (toast) {
        console.log("Found toast element, clicking...");
        await navigationTracker.beforeClick("toast");
        await toast.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("notification", DEFAULT_TIMEOUT);
      })
      .then(async function (notification) {
        console.log("Found notification element, clicking...");
        await navigationTracker.beforeClick("notification");
        await notification.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("geoLocation", DEFAULT_TIMEOUT);
      })
      .then(async function (geoLocation) {
        console.log("Found geoLocation element, clicking...");
        await navigationTracker.beforeClick("geoLocation");
        await geoLocation.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("buttonPage", DEFAULT_TIMEOUT);
      })
      .then(async function (Home) {
        console.log("Found Home button, clicking...");
        await navigationTracker.beforeClick("Home");
        await Home.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("speedTest", DEFAULT_TIMEOUT);
      })
      .then(async function (speedTest) {
        console.log("Found speedTest element, clicking...");
        await navigationTracker.beforeClick("speedTest");
        await speedTest.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("webview", DEFAULT_TIMEOUT);
      })
      .then(async function (Browser) {
        console.log("Found Browser element, clicking...");
        await navigationTracker.beforeClick("Browser");
        await Browser.click();
        await navigationTracker.afterClick();
        return driver.waitForElementById("url", DEFAULT_TIMEOUT);
      })
      .then(async function () {
        console.log("Waiting 5 seconds for webview to load...");
        await new Promise(resolve => setTimeout(resolve, 5000));
        return driver.waitForElementById("url", DEFAULT_TIMEOUT);
      })
      .then(async function (url) {
        console.log("Found URL input field, typing LambdaTest URL...");
        await navigationTracker.recordUserAction("url");
        await url.type("https://www.lambdatest.com");
        return driver.waitForElementById("find", DEFAULT_TIMEOUT);
      })
      .then(async function (find) {
        console.log("Found find button, clicking...");
        await navigationTracker.beforeClick("find");
        await find.click();
        await navigationTracker.afterClick();
        console.log("Test completed successfully");
        // Save navigation results locally
        await navigationTracker.saveResults();
        driver.quit();
      })
      .catch(async function(error) {
        console.error("Error during test execution:", error);
        console.error("Error stack:", error.stack);
        // Save navigation results even if there's an error
        await navigationTracker.saveResults();
        driver.quit();
      });
  } catch (e) {
    console.error("Android Test Failed with error:", e);
    console.error("Error stack:", e.stack);
    driver.quit();
  }
}

runAndroidTest();
