const path = require('path')
const constants = require('./constants')

// 静态资源访问
const STATIC_DOMAIN = constants.APP_ENV === 'prod' ? '.': ' '


module.exports = {
    index: path.resolve(__dirname, `./../dist/${constants.APP_ENV}/index.html`),
    assetRoot: path.resolve(__dirname, `./../dist/${constants.APP_ENV}`),
    assetPublicPath: constants.APP_ENV === 'dev' ? '/': `${STATIC_DOMAIN}/`,
    assetsSubDirectory: 'static',
    // 正是环境接入sentry需要sourceMap
    sourceMap: constants.APP_ENV !== 'qa',
    extractCss: constants.APP_ENV !== 'dev',

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
}