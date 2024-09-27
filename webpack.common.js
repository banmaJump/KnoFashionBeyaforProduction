const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');　favicon.ico使う時は外して。

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/static'),
    filename: 'js/bundle.[contenthash].js',
    publicPath: '/static/',  // ここを確認
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
      },
      {
        test: /\.ico$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[ext]', 
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: '../index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'src/assets/images', to: 'images' } // 追記
    //   ],
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

