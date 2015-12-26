var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './src/boot.ts',
        'vendor': './src/vendor.ts'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};