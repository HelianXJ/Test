var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
    __DEV__: false
});

module.exports = {
    entry: [
        './js/main.jsx'
    ],
    output: {
        path: '../public/',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'assets': path.resolve('.')
        },
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }, {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-2'],
                //loader: 'babel-loader',
                exclude: /node_modules/,
                //query: {
                //    presets: ['es2015', 'react']
                //}
            }, {
                test: /\.less$/, loader: "style-loader!css-loader!less-loader"
            //    test: /\.less$/, loader:ExtractTextPlugin.extract("style-loader","css-loader", "less-loader")
            }, {
                test: /\.css$/, loader: "style-loader!css-loader",
            }, {
                test  : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader: 'url?name=[path]/[name].[ext]&limit=1'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        definePlugin
    ],
};