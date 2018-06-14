# webpack-demo
自己用的webpack整理

## 什么是Webpack
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

## 正式使用Webpack前的准备
使用npm init命令可以自动创建这个package.json文件
``` JavaScript
npm init
```

## 开始使用Webpack
**安装**
Webpack可以使用npm安装，在终端中转到该文件夹后执行下述指令就可以完成安装。
``` JavaScript
//全局安装
npm install -g webpack@3.10.0
//安装到你的项目目录
npm install --save-dev webpack@3.10.0

//ps:webpack -4.x以后需要全局安装 webpack-cli
npm install -g webpack-cli
```
*搭建webpack后需要安装的几个插件*
HtmlWebpackPlugin -- 这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值），主要是 在 html中自动添加带有hash值的 js，与带有hash值的 css，解决防止页面服务器更新后需要清理缓存的问题。

**安装**
``` JavaScript
npm install --save-dev html-webpack-plugin
```
于webpack.config.js中配置：
``` JavaScript
var  path = require('path');
var  webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html转换
module.exports={
        entry:{
        'src/Tdemo1/js/index':'./src/Tdemo1/js/index.js',
        },
        output: {
            filename: '[name].[chunkHash:5].js',
            path: path.resolve(__dirname,'./build'),
            publicPath: '../../'
        },
        plugins:[
            new HtmlWebpackPlugin({
                filename: 'src/Tdemo1/index.html',
                chunks: ['src/Tdemo1/js/index'],
                template: './src/Tdemo1/index.html',
            }),
        ]
        }
```

style-loader css-loader  -- 将*.css可引入js文件中
**安装**
``` JavaScript
npm install --save-dev style-loader css-loader 
```
 
ExtractTextWebpackPlugin -- 将*.css模块单独打包到css文件中，而不是打包到js文件中。
**安装**
``` JavaScript
npm install --save-dev extract-text-webpack-plugin
```
于webpack.config.js中配置：
``` JavaScript
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
//extract-text-webpack-plugin该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱
module.exports={
        module: {
            rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, ]
        },
        plugins:[
          new ExtractTextPlugin({
              filename: (getPath) => {
                  return getPath('[name].[contenthash:5].css').replace('js', 'css')
              }
          })
        ]
        }
```

CleanWebpackPlugin -- 清理生成的多余文件。
**安装**
``` JavaScript
npm i clean-webpack-plugin --save-dev
```
于webpack.config.js中配置：
``` JavaScript
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
        plugins:[
           new CleanWebpackPlugin(['build'])
        ]
        }
```

Babel -Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：
让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；
Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包）。
**安装**
``` JavaScript
npm install --save-dev babel-core babel-loader babel-preset-env
```
于webpack.config.js中配置：
``` JavaScript
module.exports={
module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                },
                exclude: /(node_modules|bower_components)/,
            }
        ]
    }
    }
```





