const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "Test Environment": "Local",
        "Platform": process.platform,
        "Node Version": process.version,
        "Tools": "Cucumber + Playwright + TypeScript"
    }
};

reporter.generate(options);
