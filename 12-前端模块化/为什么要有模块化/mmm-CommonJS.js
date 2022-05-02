
//直接解构对象（相当于在对象{}中同时定义变量flag和sum）
var {flag,sum} = require('./aaa-CommonJS.js')

//完整写法
var obj = require('./aaa-CommonJS.js');
var flag = obj.flag;
var sum = obj.sum;