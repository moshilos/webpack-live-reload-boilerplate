/**
 * Created by moshi on 1/22/2016.
 */
module.exports = {
    entry: "./src/main.js",
    output: {
        path: './build/js',
        publicPath: '/js/',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    'html-minify-loader': {
        empty: true,        // KEEP empty attributes
        cdata: true,        // KEEP CDATA from scripts
        comments: true     // KEEP comments
    }
};
console.log(module.exports);