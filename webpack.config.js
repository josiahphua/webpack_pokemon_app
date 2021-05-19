const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path')
let mode = "development"
if(process.env.NODE_ENV == "production"){
    mode = "production"
}

module.exports = {
    //builds and creates main.css
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "dist/**/*")]
        })],
    //environment
    mode: mode,
    devtool: "source-map",
    //modules needed
    module:{
        //rules for handling files
        rules:[
            //mange Image imports
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource',
                exclude: /node_modules/,
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                exclude: /node_modules/,
            },
            {
                //s css or css
                test: /\.s?css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"]
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