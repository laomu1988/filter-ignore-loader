
const webpack = require('webpack');
const path = require('path');


const webpackConfig = {
    entry: {
        index: './test/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.*.js/,
            use: [
                {
                    loader: path.resolve(__dirname, '../index'),
                    options: {
                        test: ['ignore'],
                        template: 'console.log("ignore-template");'
                    }
                }
            ]
        }]
    }
};

module.exports = webpackConfig