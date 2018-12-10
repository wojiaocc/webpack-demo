var  path = require('path');
var  webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html转换
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//extract-text-webpack-plugin该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除生成出的样式与JS

module.exports={
        entry:{
         //app
        'app/js/index':'./app/js/index.js',
        'app/js/index2':'./app/js/index2.js',
        //  //back
         'back/js/index':'./back/js/index.js'
        },

        module: {

            rules: [
                {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", 
                    use: "css-loader"
                })
                },
                //es6
                {
                    test:/\.js$/, //匹配.js文件
                    //排除也就是不转换node_modules下面的.js文件
                    exclude: /(node_modules|bower_components)/,
                    //加载器  webpack2需要loader写完整 不能写babel 要写 bable-loader
                    use:[{loader:"babel-loader"}]
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
                },
                {
            　　　　test: /\.html$/,
            　　　　loader: 'html-withimg-loader'
                }
            ]
        },

        output: {
            filename: '[name].[chunkHash:5].js',
            path: path.resolve(__dirname,'./build'),
            publicPath: '../../'
        },
        plugins:[

            new CleanWebpackPlugin(['build']),

            new HtmlWebpackPlugin({
                filename: 'app/page/index.html',
                chunks: ['app/js/index'],
                template: './app/index.html',
            }),
            
            new HtmlWebpackPlugin({
                filename: 'app/page/index2.html',
                chunks: ['app/js/index2'],
                template: './app/index2.html',
            }),

            new HtmlWebpackPlugin({
                filename: 'back/page/index.html',
                chunks: ['back/js/index'],
                template: './back/index.html',
            }),

            new ExtractTextPlugin({
                filename: (getPath)=>{
                    return getPath('[name].[contenthash:5].css').replace('js','css')
                }
            })


        ]

}