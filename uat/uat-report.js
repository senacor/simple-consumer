const report = require("multiple-cucumber-html-reporter");
const os = require("os");

report.generate({
  jsonDir: "../reports/cucumber-json",
  reportPath: "../reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "81",
    },
    device: "Local test machine",
    platform: {
      name: os.type(),
      version: os.release(),
    },
  },
});
