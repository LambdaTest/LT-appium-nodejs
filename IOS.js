var wd = require("wd")

username = (process.env.LT_USERNAME == undefined) ? "ankitagarwal"
            : process.env.LT_USERNAME

accesskey = (process.env.LT_ACCESS_KEY == undefined) ? 
            "39dQIDuAGGlnaQSlM3HcceVRy9ftXEk8auSNINALa5oZwWtjh6"
            : process.env.LT_ACCESS_KEY

caps = {
    
}

driver = wd.promiseRemote(`https://${username}:${accesskey}@beta-hub.lambdatest.com/wd/hub`)