// https://jestjs.io/docs/en/configuration.html
module.exports = {
  verbose: true, // 显示所有的
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default"], // test results
  "roots": [
    "<rootDir>/lib"
  ],
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
  testMatch: ["<rootDir>/lib/**/__tests__/**/*.unit.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

  transform: {
    ".+\\.(js|jsx|ts|tsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',
    "^.+\\.css$": "<rootDir>/test/__mocks__/cssTransform.js", // 遇到css是调用csstransfrom 实际就是空文件 不测试
    // "^.+\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"
  },
  "testEnvironment": "enzyme",
  "testEnvironmentOptions": {
    "enzymeAdapter": "react16"
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js",'./node_modules/jest-enzyme/lib/index.js']
  // "setupFilesAfterEnv": ['./node_modules/jest-enzyme/lib/index.js'], // 测试环境搭建好后 执行文件中的内容 额外准备
};

