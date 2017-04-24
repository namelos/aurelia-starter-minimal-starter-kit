const path = require('path');
const webpack = require('webpack');
const { AureliaPlugin } = require('aurelia-webpack-plugin')

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  entry: {
    app: ['aurelia-bootstrapper']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.html$/i, loader: 'html-loader' },
    ]
  },
  plugins: [
    new AureliaPlugin({
      aureliaApp: 'main'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  }
};