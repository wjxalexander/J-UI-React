const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // program entry
  entry: {
    index: "./lib/index.tsx"
  },
  output: {
    filename: "index.js",
    /* __dirname: current folder
     *path: __dirname + "/dist" 不能使用的原因是
     *多操作系统对路径的定义是不同的windows为\Mac为/
     *所以使用path模块
     */
    path: path.resolve(__dirname, "dist/lib"),
    /* To make your library available for consumption,
     add the library property inside output:*/
    library: "J-UI-React",
    /*To make the library compatible with other environments, 
    add libraryTarget property to the config. 
    This will add the different options about how the library can be exposed.
    umd: 历史问题包管理系统 requirejs amd：browser环境
    异步模块定义 commonjs ...
    nodejs: module.export 就是webpack 写法
    umd：if define use define else use module else script
    */
    libraryTarget: "umd"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // regex to find tsx file All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  /*The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
   This is especially useful for webpack bundles that include a hash in the filename which 
   changes every compilation. You can either let the plugin generate an HTML file for you, 
   supply your own template using lodash templates, or use your own loader.
   https://github.com/jantimon/html-webpack-plugin#options
   简单来说就是帮你在index.html中自动加入<script src="index.js"></script>
   */
  plugins: [
    new HtmlWebpackPlugin({ title: "J-UI-React", template: "index.html" })
  ]
};
