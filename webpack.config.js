const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outDir = path.resolve(__dirname, "public");

module.exports = {
    mode: "development",
    devtool: false,

    entry: "./src/index.tsx",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "tslint-loader",
                enforce: "pre"
            },
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    output: {
        filename: "bundle.js",
        path: outDir
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    devServer: {
        contentBase: outDir,
        compress: true,
        port: 8090,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};
