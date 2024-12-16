const { config } = require("./protractor.conf.js");

exports.config = {
    ...config,
    chromeDriver: process.env.CHROMEDRIVER_BIN,
    capabilities: {
        ...config.capabilities,
        chromeOptions: {
            ...config.capabilities.chromeOptions,
            binary: process.env.CHROME_BIN,
            // See /integration/README.md#browser-tests for more info on these args
            args: [
                "--no-sandbox",
                "--headless",
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--hide-scrollbars",
                "--mute-audio",
            ],
        },
    },
};
