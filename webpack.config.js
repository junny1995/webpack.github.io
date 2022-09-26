const path = require("path")
const HtmlwebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry : "./scr/index.js",
  output : {
    filename : "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png$/,
        use: ["file-loader"],
      }
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: "./index.html",
  }),
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),
],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    port: 5555,
  },
};