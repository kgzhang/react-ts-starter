const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const constants = require('./constants');
const config = require('./config');

module.exports =
    constants.APP_ENV === 'dev'
      ? {}
      : {
        runtimeChunk: {
          name: 'manifest'
        },
        splitChunks: {
          cacheGroups: {
            default: false,
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'split-vendor',
              chunks: 'all'
            }
          }
        },
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: config.sourceMap
          }),
          new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
              reduceIdents: false,
              autoprefixer: false
            }
          })
        ]
      };
