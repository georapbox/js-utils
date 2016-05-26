// Karma configuration
// Generated on Mon Sep 29 2014 14:09:05 GMT+0300 (GTB Daylight Time)

module.exports = function (config) {
    'use strict';

    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins: [
            'karma-htmlfile-reporter',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-ie-launcher'
        ],

        // list of files / patterns to load in the browser
        files: [
            'src/**/*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [
            'progress',
            'html'
        ],

        htmlReporter: {
            pageTitle: 'jsEssentials',
            subPageTitle: 'Unit Test Results',
            outputFile: 'tests-reporter/index.html'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'PhantomJS',
            'Firefox',
            'Chrome'
            // 'IE7',
            // 'IE8',
            // 'IE9',
            // 'IE10',
            // 'IE'
        ],

        customLaunchers: {
            IE10: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE10'
            },
            IE9: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE9'
            },
            IE8: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE8'
            },
            IE7: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE7'
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
