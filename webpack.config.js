'use strict';

const path = require('path');

const entryPath = path.resolve(__dirname, './src/index.js');
const outputPath = path.resolve(__dirname, './dist');
const outputLibrary = path.resolve(__dirname, 'rdb-academy-moment');

module.exports = {
    entry: entryPath,
    output: {
        path: outputPath,
        filename: 'index.js',
        library: outputLibrary,
        libraryTarget: 'umd'
    },
    externals: [
        {
            'react': {
                root: 'react',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'moment': {
                root: 'moment',
                commonjs2: 'moment',
                commonjs: 'moment',
                amd: 'moment'
            },
            'moment-timezone': {
                root: 'moment-timezone',
                commonjs2: 'moment-timezone',
                commonjs: 'moment-timezone',
                amd: 'moment-timezone'
            }
        }
    ],
    module: {
        loaders: [
          {
            include: /\.json$/,
            loader: require.resolve('json-loader'),
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: require.resolve('babel-loader'),
            query: {
              presets: [
                'babel-preset-es2015',
                'babel-preset-stage-2',
                'babel-preset-react'
              ].map(require.resolve)
            }
          }
        ]
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx']
    }
};
