const path = require('path');

exports.resolve = {
    alias: {
        'assets': path.resolve('.'),
        'js': path.resolve('./js'),
        'lib': path.resolve('./js/lib'),
        'less': path.resolve('./less'),
        'vendor': path.resolve('./vendor'),
    },
    extensions: ['', '.js', '.jsx'],
};

exports.jsLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel?presets[]=es2015,presets[]=stage-2',
};

exports.jsxLoader = {
    test: /\.jsx$/,
    exclude: /node_modules/,
    loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2',
};
