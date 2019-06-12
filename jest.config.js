// https://jestjs.io/docs/en/configuration.html
module.exports = {
  verbose: true, // 显示所有的
  clearMocks: false,
  collectCoverage: true,
  collectCoverageFrom: [
    "{lib,include}/**/*.{js,jsx,ts,tsx}",// all js.jsxtsxfiles  in lib
    "!**/node_modules/**"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  reporters: ["default"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  },
  moduleDirectories: ["node_modules", "include"],
  // A map from regular expressions to module names that allow to stub out resources, like images or styles with a single module.
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testMatch: [ "<rootDir>**/__tests__/**/*.unit.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
      '^.+\\.(ts|tsx)$': 'ts-jest',
    // "^.+\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"
  },

  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
};
