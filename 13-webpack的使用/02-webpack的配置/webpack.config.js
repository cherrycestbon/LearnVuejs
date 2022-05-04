//通过node语法获取绝对路径
//导入node的path包，怎样导入？在当前目录运行npm init去生成package.json文件
const path = require('path')

//通过CommonJS的方式，导出一个对象
module.exports = {
  entry: './src/main.js',
  /*出口一般要求是一个对象类型:路径+文件名称*/
  output: {
    /*path要求是绝对路径*/
    /*resolve函数用于对两个路径进行拼接*/
    /*__dirname是node上下文中自带的一个全局变量，它保存当前webpack.config.js所在的路径*/
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  }
}