const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new HtmlWebpackPlugin({
      title: 'Recursos Webpack'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "./src"),
      }
    ]
  },
  optimization: {
    runtimeChunk: true
  }
}