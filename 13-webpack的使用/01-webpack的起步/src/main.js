//使用CommonJS模块化规范
const {add,mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

//使用ES6模块化规范,这里from后文件可以不用加js,webpack会自动根据文件名找到文件
import {name,age,height} from "./info.js";

console.log(name);
console.log(age);
console.log(height);