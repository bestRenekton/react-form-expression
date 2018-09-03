const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const DIST_PATH = path.resolve(__dirname, 'dist');



module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        component: ['./src/component/Expression/Expression.js']
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js',
        publicPath: "/dist/",
        libraryTarget: 'umd',
        library: 'expression'
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
});



