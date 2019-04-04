const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 80,
        hot: true
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'

        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
