const { resolve } = require('./../utils');
const constants = require('./../constants');
const { cacheLoader } = require('./loaders');

module.exports = [
  {
    test: /\.(j|t)sx?$/,
    include: [resolve('src')],
    use: [
      cacheLoader,
      {
        loader: 'thread-loader',
        options: constants.APP_ENV === 'dev' ? { poolTimeout: Infinity } : {}
      },
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
            ],
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
          plugins: [
            // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            '@babel/plugin-syntax-dynamic-import',
            'react-hot-loader/babel'
          ]
        }
      }
    ],
    exclude: /node_modules/
  }
];
