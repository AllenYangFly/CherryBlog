var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/components/Router.js",
    output: {
        path: __dirname +"/dist/",
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: `${__dirname}/src`,
                exclude: /bundle\.js$/
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.scss$/,
                loader: "style!css!sass!postcss-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Allen - 抹茶小屋',
            filename: __dirname+'/dist/index.html',
            hash: true,
            inject: true,
            template: __dirname+'/src/index.html'
        })
    ]
};


// entry     入口文件
// outout    出口文件
// resolve   定义解析模块路径，通常设置extensions,可以在导入模块的时候不用写后缀名
// plugins   定义需要使用的插件,
// module.loaders  定义文件加载器

