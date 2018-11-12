var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], // specifies what browser we want to use
    singleRun: true, // runs the test one time
    frameworks: ['mocha'], //what framework we wanna use
    files: ['app/tests/**/*.test.jsx'], //specifies what files we want to use
    preprocessors: { // specifiy which tests to run
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // these are preprocessors
    },
    reporters: ['mocha'], // let us clean up the output
    client: {
      mocha: {
        timeout: '5000' // sends details down to the original frameworks
      }
    },
    webpack: webpackConfig, // we use webpack config to create tests that use require and let us load in our modules we need
    webpackServer: {
      noInfo: true
    }
  });
};
