module.exports = {
    //environment
    mode: "development",
    //modules needed
    module:{
        //rules for handling files
        rules:[
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