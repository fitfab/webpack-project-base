var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    "devtool": "eval-source-map",
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
                "loader": "style!css?modules!postcss"
            }
        ]
    },
    "postcss": [
        require("autoprefixer")
    ],
    "plugins": [
        new webpack.BannerPlugin("Copyright fitfab by miguel julio"),
        new HtmlWebpackPlugin({template: __dirname + "/src/index.tmpl.html"}),
        new webpack.HotModuleReplacementPlugin()
    ],
    "devServer": {
        "contentBase": "./public",
        "colors": true,
        "historyApiFallback": true,
        "inline": true,
        "hot": true
    }
}
