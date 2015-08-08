const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;
const STYLE_LOADER = 'style-loader/useable';

//const CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize';

var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: './src/app.js',
    output: {
      path: './build/public',
      filename: 'app.js'
    },
    devtool: DEBUG ? 'source-map' : false,
    plugins: config.plugins.concat([
        new DefinePlugin(merge(GLOBALS, {'__SERVER__': false}))
      ].concat(DEBUG ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
      ])
    )
}