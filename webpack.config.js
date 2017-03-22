var webpack = require('webpack')
var dir = require('path')

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client', './client/client.js'
    ],
    output: {
        path: dir.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
}
