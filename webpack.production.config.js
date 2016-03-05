var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    "entry": __dirname + "/src/main.js",
    "output" : {
        "path": __dirname + "/public",
        "filename": "bundle.js"
    },
    resolve : {
        extensions : ["", ".js", ".jsx", ".json"]
    },
    "module": {
        "loaders": [
            {
                "test": /\.json$/,
                "loader": "json"
            },
            {
                "test": /\.jsx?$/,
                "exclude": /node_modules/,
                "loader": "babel"
            },
            {
                "test": /\.css$/,
                "loader": ExtractTextPlugin.extract('style', 'css?modules!postcss')
            }
        ]
    },
    "postcss": [
        require("autoprefixer")
    ],
    "plugins": [
        new webpack.BannerPlugin("Copyright fitfab by miguel julio"),
        new HtmlWebpackPlugin({template: __dirname + "/src/index.tmpl.html"}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
}
