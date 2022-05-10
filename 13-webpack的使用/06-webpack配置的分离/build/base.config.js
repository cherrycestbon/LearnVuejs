//通过node语法获取绝对路径
//导入node的path包，怎样导入？在当前目录运行npm init去生成package.json文件
const path = require('path')
//使用版权插件，这个插件是webpack自带的，所以要导入
const webpack = require('webpack')
//使用Html-Webpack-Plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//压缩jis的插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

//通过CommonJS的方式，导出一个对象
module.exports = {
  entry: './src/main.js',
  /*出口一般要求是一个对象类型:路径+文件名称*/
  output: {
    /*path要求是绝对路径*/
    /*resolve函数用于对两个路径进行拼接*/
    /*__dirname是node上下文中自带的一个全局变量，它保存当前webpack.config.js所在的路径*/
    path: path.resolve(__dirname,'../dist'),
    filename: 'bundle.js',
    /*加上这个配置，以后任何涉及到url，打包之后都会在url的前面加上dist/*/
    /*如果index.html也打包到dist目录下时，就不在需要这个配置了*/
    //publicPath:'dist/'
  },
  module:{
    rules: [
      {
        /*正则表达式的作用是去匹配所有的css文件，匹配到之后去应用下面的css-loader*/
        test: /\.css$/i,
        /*css-loader只负责将css文件进行加载，不负责解析，不负责把css文件放到html中让它生效*/
        /*style-loader负责将css文件添加到dom中让它生效*/
        /*webpack在读取多个loader的时候，是从右向左读*/
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          /*将css文件应用到html的dom文件中*/
          {loader:"style-loader"},
          /*因为less文件最终会装缓存css文件，所以还需要css-loader加载css文件*/
          {loader:"css-loader"},
          /*加载less文件*/
          {loader:"less-loader"},
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          /*当加载的图片小于limit的时候，会将图片编译成base64的字符串形式，*/
          options:{
            /*webpack在帮助我们加载图片是，会先看图片的大小，如果小于limit,就会用url-loader加载图片，把图片编译为base64字符串*/
            /*如果图片大于limit,就会使用file-loader加载图片。file-loader不需要额外配置，只需要安装一下就可以了*/
            /*limit的默认值时8196，即8kb,如果不配做limit,默认就是8kb*/
            limit:13000,
            /*[name]表示文件名，这是固定语法。取源文件的名称*/
            /*如果不加[]，就把’name‘字符串当作文件名，这样所有图片都是这一个名字。只有加[name],才把’name‘当作变量*/
            /*如果写成img/name/,就会创建img文件夹下创建name文件夹*/
            name:'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        /*因为只打包src下的js文件，不需要打包node_modules目录下的文件，所以排除该目录*/
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve:{
    /*解决路径问题：*/
    /*别名*/
    /*在main.js中使用import Vue from 'vue'，默认使用vue/dis/vue.runtime.js*/
    /*配置了它之后，在main.js中使用import Vue from 'vue'，就会到这里看是否指定了文件*/
    alias: {
      /*vue/dist/vue.esm.js文件中有编译template的代码*/
      'vue$': 'vue/dist/vue.esm.js',
    },
    /*解决扩展名：App.vue中导入Cpn.vue时，可省略.vue*/
    /*在用import 组件名 from 'vue文件路径'时，若vue文件路径中省略.vue， 需要在此配置*/
    extensions:['.vue','.js','.css']
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归张若虚所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    //开发阶段不用，不方便调试
    //new UglifyjsWebpackPlugin()
  ],
  //此配置只在开发阶段使用，编译发布时不需要
  // devServer:{
  //   /*服务于dist目录*/
  //   contentBase:'./dist',
  //   /*是否需要实时监听*/
  //   inline: true,
  //   port: 8000
  // }
}