//压缩jis的插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

const webpackMerge = require('webpack-merge')

const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  plugins: [
    //开发阶段不用，不方便调试
    new UglifyjsWebpackPlugin()
  ],
})

//通过CommonJS的方式，导出一个对象
// module.exports = {
//   plugins: [
//     //开发阶段不用，不方便调试
//     new UglifyjsWebpackPlugin()
//   ],
// }