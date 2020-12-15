const path = require('path');

console.log(path.join(__dirname, 'src/images/'));

// Plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entryFileName = 'index.js';

const isProd = false;
const isDev = !isProd;
const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

module.exports = {
  entry: path.resolve(__dirname, 'src', entryFileName),
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true
    }),
    new MiniCssWebpackPlugin({
      filename: filename('css')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets', 'fonts'),
          to: path.resolve(__dirname, 'dist', 'fonts')
        },
        {
          from: path.resolve(__dirname, 'src', 'assets', 'icons'),
          to: path.resolve(__dirname, 'dist', 'icons')
        },
        {
          from: path.resolve(__dirname, 'src', 'assets', 'images'),
          to: path.resolve(__dirname, 'dist', 'images')
        },
        {
          from: path.resolve(__dirname, 'src', 'favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ],
  devServer: {
    port: 9090
  }
}
