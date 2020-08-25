const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer:{
    contentBase: __dirname + '/src/public'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images',
            }
          },
        ],
      },
      {
        test: /\.(otf|ttf|woff(2))$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
              publicPath: 'fonts',
            }
          },
        ],
      },
      {
        test: /\.ico$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '',
              publicPath: '',
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/public/images', to: 'images' },
        { from: 'src/public/fonts', to: 'fonts' },
      ],
    }),
  ],
};
