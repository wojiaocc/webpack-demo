# webpack-demo
自己用的webpack整理

## 什么是Webpack
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

## 开始使用Webpack
**安装**
Webpack可以使用npm安装，在终端中转到该文件夹后执行下述指令就可以完成安装。
``` JavaScript
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
```
## 正式使用Webpack前的准备
使用npm init命令可以自动创建这个package.json文件
``` JavaScript
npm init
```
