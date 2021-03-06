// webpack-dev-server --inline --hot --history-api-fallback

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',

    entry: {
        //index: ['webpack-dev-server/client', 'webpack/hot/dev-server', './index']
        index: './index'
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },

    devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null,

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/i,
                loader: 'file?name=[path]/[name].[ext]?[hash]'
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'autoprefixer', 'less']
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
        //new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        modulesDirectories: ['frontend', 'node_modules'],
        extensions: ['', '.js', '.less']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js', '.less']
    },

    devServer: {
        host: 'localhost',
        port: 4444,
        contentBase: __dirname + '/public',
        hot: true,
        historyApiFallback: true
    }

    //watch: NODE_ENV === 'development',
    //
    //watchOptions: {
    //    aggregateTimeout: 100
    //},
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}