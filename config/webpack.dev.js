const base = require('./webpack.base.js')
const {merge} = require('webpack-merge')

module.exports = merge(base, {
    mode: "development",
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 8888
      },
})