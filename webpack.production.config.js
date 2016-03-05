var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    "entry": __dirname + "/src/main.js",
    "output" : {
        "path": __dirname + "/public",
        "filename": "bundle.js"
    },
    "module": {
        "loaders": [
            {
                "test": /\.json/,
                "loader": "json"
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "babel"
            },
            {
                "test": /\.css$/,
                "loader": "style!css?modules!postcss"
            }
        ]
    },
    "postcss": [
        require("autoprefixer")
    ],
    "plugins": [
        new webpack.BannerPlugin("Copyright fitfab by miguel julio"),
        new HtmlWebpackPlugin({template: __dirname + "/src/index.tmpl.html"})
    ]
}
