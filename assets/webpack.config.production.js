const webpack = require('webpack');
const common = require('./webpack.config.common');
const assetVersion = require('../config/asset-version');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const fs = require('fs');

const buildRootPath = 'assets/' + assetVersion;

module.exports = {
    entry: [
        './js/main.jsx'
    ],
    output: {
        path: '../public',
        filename: buildRootPath + '/js/app.min.js'
    },
    resolve: common.resolve,
    plugins: [
        new CleanWebpackPlugin([buildRootPath], {
            root: path.join(__dirname, '/../public'),
            verbose: true,
        }),
        new ExtractTextPlugin(buildRootPath + "/css/app.min.css"),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
    ],
    module: {
        loaders: [
            common.jsLoader,
            common.jsxLoader,
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', "css?minimize!less?root=" + encodeURIComponent(path.resolve('./less'))),
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', "css?minimize"),
            }, {
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf|\.jpg|\.jpeg|\.png|\.gif/,
                loader: 'url?name=/' + buildRootPath + '/[path][name].[ext]&limit=1'
            }
        ]
    },
};
