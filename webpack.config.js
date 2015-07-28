var path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  }
};