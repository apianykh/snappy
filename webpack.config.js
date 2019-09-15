'use strict';
const path = require('path');
const BASE_DIR = path.resolve( __dirname);

var config = {
    context: path.resolve(BASE_DIR, 'client'),
    entry: {
        app: [
            './app.js'
        ]
    },
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(BASE_DIR, 'public/js'),
        filename: 'app.bundle.js',
        publicPath: '/js/',
    },
    plugins: [
        
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env', 
                        '@babel/preset-react'
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(BASE_DIR, 'client'),
        }
    },
};

if (process.env.NODE_ENV === 'development') {
    config.devtool = 'inline-source-map';
}

module.exports = config;