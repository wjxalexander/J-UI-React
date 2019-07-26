const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = Object.assign({}, base, {
  mode: "production",
  entry: {

    example: "./example.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist/example"),

    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js'
  },
  //   外部库 打包时不包含react
  //   When importing a module whose path matches one of the following, just
  //   assume a corresponding global variable exists and use that instead.
  //   This is important because it allows us to avoid bundling all of our
  //   dependencies, which allows browsers to cache those libraries between builds
  plugins: [
    new HtmlWebpackPlugin({ title: "J-UI-React", template: "example.html",filename: "example.html" })
  ]
});
