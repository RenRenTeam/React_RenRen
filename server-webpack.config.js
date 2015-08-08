
const STYLE_LOADER = 'style-loader/useable';
//const CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize';

var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry : [
        "./src/app.js"
    ],
    output : {
        path:'build/public',
        filename : "app.js"
    },
    module : {
        loaders :[
            {
                test: /\.css$/,
                loader: 'style-loader/useable!css-loader?minimize!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader/useable!css-loader?minimize!postcss-loader!less-loader'
              },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
              },
              {
                test: /\.gif/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
              },
              {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
              },
              {
                test: /\.png/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
              },
        ]

    }
}