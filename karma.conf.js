/*eslint-env node */

process.env.CHROME_BIN = require('puppeteer').executablePath();

// Karma configuration
// Generated on Tue Mar 21 2017 16:40:41 GMT+0700 (Altai Standard Time)
module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['jasmine'],
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: ["dist/test.bundle.js"],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "dist/test.bundle.js": ["sourcemap"]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    autoWatchBatchDelay: 500,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["ChromeHeadless"],

    // phantomjsLauncher: {
    //   // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
    //   exitOnResourceError: true
    // },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
