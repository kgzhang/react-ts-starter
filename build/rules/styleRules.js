const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./../config');
const { resolve } = require('./../utils');
// const theme = require('./../../theme')

const sassLoader = {
  loader: 'sass-loader',
  options: {
    implementation: require('sass'),
    sassOptions: {
      includePaths: [require('bourbon').includePaths, resolve('src/styles')]
    }
  }
};

const lessLoader = {
  loader: 'less-loader'
  // options: {
  //     javascriptEnabled: true,
  //     modifyVars: theme
  // }
};

const typingsForCssModulesLoader = {
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    namedExport: true,
    camelCase: true,
    sass: true
  }
};

const cacheLoader = {
  loader: 'cache-loader',
  options: {
    // provide a cache directory where cache items should be stored
    cacheDirectory: resolve('.cache-loader')
  }
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};

module.exports = [
  {
    test: /\.css$/,
    include: [resolve('node_modules')],
    use: [
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      cacheLoader,
      postcssLoader
    ]
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    rules: [
      {
        use: [
          config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
          // typingsForCssModulesLoader,
          'css-loader',
          postcssLoader,
          sassLoader
        ]
      }
    ]
  },
  // {
  //     // for ant design
  //     test: /\.less$/,
  //     rules: [
  //         {
  //             use: [
  //                 config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
  //                 'css-loader',
  //                 'postcss-loader',
  //                 lessLoader
  //             ]
  //         }
  //     ]
  // }
];
