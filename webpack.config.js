const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //builds and creates main.css
    plugins: [new MiniCssExtractPlugin()],
    //environment
    mode: "development",
    devtool: "source-map",
    //modules needed
    module:{
        //rules for handling files
        rules:[
            {
                test: /\.s?css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader", "sass-loader"]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        //entry point when server starts
        //start in dist folder instead of root
       contentBase : "./dist",
        //hot reload enabled
        hot: true
    }
}