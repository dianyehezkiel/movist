const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: function() {
              return [
                require('autoprefixer'),
              ];
            },
          },
        },
      },
      {
        loader: 'sass-loader',
      },
      ],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    }),
    new Dotenv(),
  ],
};
