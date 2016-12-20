var path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname,'app','main.ts'),
        pages: path.resolve(__dirname,'pages','index.ts')
    },
    output:{
        path: __dirname,
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
            }
        ]
    },
    target: 'electron'
};