//1.使用CommonJS模块化规范
const {add,mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

//2.使用ES6模块化规范,这里from后文件可以不用加js,webpack会自动根据文件名找到文件
import {name,age,height} from "./js/info.js";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css');

//4.依赖less文件
require('./css/special.less');
document.writeln('<h2>春江潮水连海平，海上明月共潮生。</h2>')

//5.使用vue进行开发
import Vue from 'vue'

//把js文件换成vue文件
//import App from './vue/app.js'
import App from './vue/App.vue'

//真实开发中，app一般时不用的。省略const app =
const app = new Vue({
  /*当同时有el和template属性时，vue会把template的内容复制到index.html中，替换掉<div id="app"></div>*/
  /*所以以后不要再改index.html中的代码，而把要改的内容写到template属性中*/
  el: '#app',
  /*在components中注册一个组件，在template中使用这个注册的组件*/
  template: `<App/>`,
  components: {
    App
  }

})