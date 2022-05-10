const webpackMerge = require('webpack-merge')

const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  //此配置只在开发阶段使用，编译发布时不需要
  devServer: {
    /*服务于dist目录*/
    contentBase: './dist',
    /*是否需要实时监听*/
    inline: true,
    port: 8000
  }
})

//通过CommonJS的方式，导出一个对象
// module.exports = {
//   //此配置只在开发阶段使用，编译发布时不需要
//   devServer:{
//     /*服务于dist目录*/
//     contentBase:'./dist',
//     /*是否需要实时监听*/
//     inline: true,
//     port: 8000
//   }
// }