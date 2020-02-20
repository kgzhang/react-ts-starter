const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const constants = require('./constants');
const config = require('./config');
const { assetsPath } = require('./utils');
const env = require('./env.json');

const oriEnv = env[constants.APP_ENV];

Object.assign(oriEnv, {
  APP_ENV: constants.APP_ENV
});

// 将webpack下的变量放到process.env

const defineEnv = {};
for (const key in oriEnv) {
  defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key]);
}


const basePlugin = [
  new webpack.DefinePlugin(defineEnv),
  // new MomentLocalesPlugin({
  //     localesToKeep: ['es-us', 'zh-cn']
  // }),
  new FriendlyErrorsWebpackPlugin()
];

const devPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'build/tpl/index.html',
    inject: true
  }),
  new CaseSensitivePathsPlugin({
    compilationSuccessInfo: {
      messages: ['You application is running here http://localhost:3000'],
      notes: ['Some additionnal notes to be displayed upon successful compilation']
    },
    onErrors(severity, errors) {
      // You can listen to errors transformed and prioritized by the plugin
      // severity can be 'error' or 'warning'
    },
    // should the console be cleared between each compilation?
    // default is true
    clearConsole: true,
        
    // add formatters and transformers (see below)
    additionalFormatters: [],
    additionalTransformers: []
  }),
  // new DashboardPlugin()
];

const prodPlugins = [
  new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
  new HtmlWebpackPlugin({
    filename: config.index,
    template: 'build/tpl/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: assetsPath('css/[name].[hash].css'),
    chunkFilename: assetsPath('css/[name].[id].[hash].css')
  })
];

if (config.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  prodPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = basePlugin.concat(constants.APP_ENV === 'dev' ? devPlugins : prodPlugins);