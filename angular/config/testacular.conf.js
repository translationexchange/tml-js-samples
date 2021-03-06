module.exports = function(config){
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '../app',

    // list of files / patterns to load in the browser
    files: [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular/angular-mocks.js',
      {pattern: '**/*.js', watched: true, included: true, served: true},

      'js/app.js',
      'js/**/*.js',
      '../test/unit/**/*.js',

      // templates
      'js/directives/**/*.html'
    ],

    // list of files to exclude
    exclude: [

    ],

    preprocessors: {
      '**/*.html': 'html2js'
    },

    proxies: {

    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    // frameworks to use
    frameworks: ['jasmine'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
             'Chrome',
             'Firefox',
             'IE'
              ],

    plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
