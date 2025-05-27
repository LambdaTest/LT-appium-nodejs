const wd = require("wd");

/**
 * Username to be used for running the test.
 */
const username = process.env.LT_USERNAME || "username";

/**
 * The access key to be used for running test test.
 */
const accessKey = process.env.LT_ACCESS_KEY || "accessKey";

/**
 * Capabilities to be passed while running the test.
 */
const desiredCapabilities = {
  app: "lt://proverbial-android", // Enter the 'app_url' here.
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
    
    driver
      .init(desiredCapabilities)
      .then(function () {
        console.log("Driver initialized successfully");
        return driver.waitForElementById("color", DEFAULT_TIMEOUT);
      })
      .then(function (colorButton) {
        console.log("Found color button, clicking...");
        return colorButton.click();
      })
      .then(function () {
        console.log("Looking for Text element...");
        return driver.waitForElementById("Text", DEFAULT_TIMEOUT);
      })
      .then(function (text) {
        console.log("Found Text element, clicking...");
        text.click();
        return driver.waitForElementById("toast", DEFAULT_TIMEOUT);
      })
      .then(function (toast) {
        console.log("Found toast element, clicking...");
        toast.click();
        return driver.waitForElementById("notification", DEFAULT_TIMEOUT);
      })
      .then(function (notification) {
        console.log("Found notification element, clicking...");
        notification.click();
        return driver.waitForElementById("geoLocation", DEFAULT_TIMEOUT);
      })
      .then(function (geoLocation) {
        console.log("Found geoLocation element, clicking...");
        geoLocation.click();
        return driver.waitForElementById("buttonPage", DEFAULT_TIMEOUT);
      })
      .then(function (Home) {
        console.log("Found Home button, clicking...");
        Home.click();
        return driver.waitForElementById("speedTest", DEFAULT_TIMEOUT);
      })
      .then(function (speedTest) {
        console.log("Found speedTest element, clicking...");
        speedTest.click();
        return driver.waitForElementById("webview", DEFAULT_TIMEOUT);
      })
      .then(function (Browser) {
        console.log("Found Browser element, clicking...");
        return Browser.click();
      })
      .then(async function () {
        console.log("Waiting 5 seconds for webview to load...");
        await new Promise(resolve => setTimeout(resolve, 5000));
        return driver.waitForElementById("url", DEFAULT_TIMEOUT);
      })
      .then(function (url) {
        console.log("Found URL input field, typing LambdaTest URL...");
        url.type("https://www.lambdatest.com");
        return driver.waitForElementById("find", DEFAULT_TIMEOUT);
      })
      .then(function (find) {
        console.log("Found find button, clicking...");
        find.click();
        console.log("Test completed successfully");
        driver.quit();
      })
      .catch(function(error) {
        console.error("Error during test execution:", error);
        console.error("Error stack:", error.stack);
        driver.quit();
      });
  } catch (e) {
    console.error("Android Test Failed with error:", e);
    console.error("Error stack:", e.stack);
    driver.quit();
  }
}

runAndroidTest();
