var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
    test: /\.css$/,
    loaders: ['style', 'css'],
    include: APP_PATH
        }
      ]
  },
  plugin:[
   new HtmlwebpackPlugin({
     title: 'Kanban app'
   })
  ]
};
