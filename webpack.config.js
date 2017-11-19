var path = require("path");
var CopyWebpackPlugin=require('copy-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.tsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devtool: "source-map",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
      },
    module: {
        loaders: [
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ],
        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt 
           { from: SRC_DIR+'/index.html', to: DIST_DIR+'/index.html' }
        ])
    ]
};

module.exports = config;