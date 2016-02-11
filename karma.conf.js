var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './public/assets/js/bundle.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './tests/**/*.js'],

    preprocessors: {
      './public/assets/js/bundle.js': ['webpack'],      
      './tests/**/*.spec.js': ['babel']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}