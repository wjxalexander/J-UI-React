const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require('./webpack.config')

module.exports = Object.assign({}, base,{
    mode: "development",  
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
  })
