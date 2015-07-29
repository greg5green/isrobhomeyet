var path = require('path');
var Webpack = require('webpack')

var isProduction = (function() {
  return process.argv.filter(function(arg) {
    return arg === '-p';
  });
})();
var plugins = [];

if (isProduction) {
  plugins.push(new Webpack.DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify('production') }
  }));
}

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
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  plugins: plugins
};
