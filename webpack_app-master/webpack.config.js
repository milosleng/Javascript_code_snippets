const webpack = require('webpack');

const config = {
  entry: '/src/js/app.js',

  output: {
    path: __dirname,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.app.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
