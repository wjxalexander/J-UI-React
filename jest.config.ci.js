// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config');

module.exports = Object.assign({},base,{
  collectCoverage:true,
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'lcov'],
  reporters: ['default','jest-junit'], // test results
  collectCoverageFrom: [
    "{lib,include}/**/*.{js,jsx,ts,tsx}",// all js.jsxtsxfiles  in lib
    "!**/node_modules/**",
      // "!{lib,include}/index.{tsx,jsx,ts,js}"
  ]
});