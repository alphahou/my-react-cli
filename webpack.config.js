const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [{
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules']
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.css']
    }
}