const MiniCssEctractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new MiniCssEctractPlugin(),
    ],
    devServer: {
        static: './dist',
        port: 5555,
    },
    stats: {
        children: false,
       },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssEctractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                }
            ]
            }
        ]
    },
    optimization: {
        minimize: false
    }
}