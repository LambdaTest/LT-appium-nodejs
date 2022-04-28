# LT-Appium-Javascript
Sample repo to run app automation on real device on LambdaTest.

## Step 1: Upload your Application
Upload your iOS application (.ipa file) or android application (.apk file) to the LambdaTest servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Here is an example cURL request to upload your app using our REST API:

```bash
curl -u "username:access_key" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/useraccount/Downloads/proverbial_android.apk"'
```

```bash
curl -u "username:access_key" '
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" '
-F "appFile=@"/Users/useraccount/Downloads/proverbial_android.apk""
```

## Step 2: Set Environment Variables
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the LambdaTest Automation Dashboard or through LambdaTest Profile. Set LambdaTest Username and Access Key in environment variables.

For Linux/macOS:
```bash
export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

For Windows:
```bash
set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

## Step 3: Execute your test case
Run the following command in the directory where your project has been saved to execute your build.

Android
```bash
node android.js
```

iOS 
```bash
node ios.js
```
