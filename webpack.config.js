var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: ['webpack/hot/dev-server',__dirname + '/src/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname + '/src'
            },{
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    //webpack-dev-server配置
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
    }
}