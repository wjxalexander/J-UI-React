const base = require("./webpack.config");

module.exports = Object.assign({}, base, {
  mode: "production",

  //   外部库 打包时不包含react
  //   When importing a module whose path matches one of the following, just
  //   assume a corresponding global variable exists and use that instead.
  //   This is important because it allows us to avoid bundling all of our
  //   dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: {
      // 针对历史上各种打包工具 引入react时react怎么写的
      commonjs: "react", // var react = require("react")
      commonjs2: "react",
      amd: "react",
      // 针对 <script src="xxxx/react.min.js/> window.React"
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM"
    }
  }
});
