const path = require('path');
const common = require('./webpack.config.common');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:9090',
        'webpack/hot/only-dev-server',
        './js/main.jsx'
    ],
    output: {
        path: '../public/',
        publicPath: 'http://127.0.0.1:9090/',
        filename: 'bundle.js'
    },
    resolve: common.resolve,
    module: {
        loaders: [
            common.jsLoader,
            common.jsxLoader,
            {
                test: /\.less$/,
                loader: "style!css!less?root=" + encodeURIComponent(path.resolve('./less'))
            }, {
                test: /\.css$/,
                loader: "style!css",
            }, {
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf|\.jpg|\.jpeg|\.png|\.gif/,
                loader: 'url?name=[path][name].[ext]'
            }
        ]
    },
};
