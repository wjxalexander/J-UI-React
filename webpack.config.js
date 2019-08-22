const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode: "development",
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
    异步模块定义 commonjs  module.export...
    nodejs: commonjs： module.export 就是webpack 写法
    umd：if define use define else use module else script
    */
    libraryTarget: "umd"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  /*These options change how modules are resolved. */
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, 'lib'),
      "SvgRepo": path.resolve(__dirname, 'IconRepository')
    }

  },
  plugins: [
    ///...
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      // regex to find tsx file All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },

      // 使用顺序：一个loader做一件事情，从右往左：sass-loader(将SCSS文件翻译成css)->css-loader将转译后的文件变成对象字符串->STYLE-LOADER这个对象变成<style>标签

      {
        test:  /\.(example|demo).(s([ac])ss)$/,
        loader: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader:  'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true,
              sourceMap: devMode
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.example.(s([ac])ss)$/,
        loader: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader:  'css-loader',
            options: {
              // modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: devMode
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: devMode
            }
          }
        ]
      },
// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
  // 外部库 打包时不包含react

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals:{
  //   react:{
  //     // 针对历史上各种打包工具 引入react时react怎么写的
  //     commonjs: 'react',// var react = require("react")
  //     commonjs2: 'react',
  //     amd: 'react',
  //     // 针对 <script src="xxxx/react.min.js/> window.React"
  //     root: "React"
  //   },
  //   'react-dom':{
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: "ReactDOM"
  //   }
  // },

  /*The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
   This is especially useful for webpack bundles that include a hash in the filename which
   changes every compilation. You can either let the plugin generate an HTML file for you,
   supply your own template using lodash templates, or use your own loader.
   https://github.com/jantimon/html-webpack-plugin#options
   简单来说就是帮你在index.html中自动加入<script src="index.js"></script>
   */
  // plugins: [
  //   new HtmlWebpackPlugin({ title: "J-UI-React", template: "index.html" })
  // ]
};
