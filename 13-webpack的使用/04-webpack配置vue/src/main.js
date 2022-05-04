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
const app = new Vue({
  el: '#app',
  data: {
    message: '滟滟随波千万里，何处春江无月明。'
  }
})