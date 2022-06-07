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
  app: "lt://", // Enter the 'app_url' here.
  deviceName: "Galaxy S20",
  isRealMobile: true,
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
    driver
      .init(desiredCapabilities)
      .then(function () {
        return driver.waitForElementById("color", DEFAULT_TIMEOUT);
      })
      .then(function (colorButton) {
        return colorButton.click();
      })
      .then(function () {
        return driver.waitForElementById("Text", DEFAULT_TIMEOUT);
      })
      .then(function (text) {
        text.click();
        return driver.waitForElementById("toast", DEFAULT_TIMEOUT);
      })
      .then(function (toast) {
        toast.click();
        return driver.waitForElementById("notification", DEFAULT_TIMEOUT);
      })
      .then(function (notification) {
        notification.click();
        return driver.waitForElementById("geoLocation", DEFAULT_TIMEOUT);
      })
      .then(function (geoLocation) {
        geoLocation.click();
        return driver.waitForElementById("buttonPage", DEFAULT_TIMEOUT);
      })
      .then(function (Home) {
        Home.click();
        return driver.waitForElementById("speedTest", DEFAULT_TIMEOUT);
      })
      .then(function (speedTest) {
        speedTest.click();
        return driver.waitForElementById("webview", DEFAULT_TIMEOUT);
      })
      .then(function (Browser) {
        Browser.click();
        return driver.waitForElementById("url", DEFAULT_TIMEOUT);
      })
      .then(function (url) {
        url.type("https://www.lambdatest.com");
        return driver.waitForElementById("find", DEFAULT_TIMEOUT);
      })
      .then(function (find) {
        find.click();
        driver.quit();
      });
  } catch (e) {
    driver.quit();
  }
}

runAndroidTest();
