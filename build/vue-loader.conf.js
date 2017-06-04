var utils = require('./utils')
var config = require('../config')
var isProduction = false

if(process.env.NODE_ENV === 'web') {
    isProduction = config.web.productionSourceMap
}
if(process.env.NODE_ENV === 'production') {
    isProduction = config.build.productionSourceMap
}
if(!isProduction) {
    isProduction = config.dev.cssSourceMap
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction,
    extract: isProduction
  })
}
