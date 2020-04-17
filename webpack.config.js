const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets:["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
}