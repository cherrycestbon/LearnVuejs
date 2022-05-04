//1.导入对象中定义的变量
import {flag,sum} from "./aaa.js";

if(flag){
  console.log('昨夜雨疏风骤');
  console.log(sum(20, 30));
}
//2.导入export直接定义的变量
import {num1,height} from "./aaa.js";

console.log(num1);
console.log(height);

//3.导入 export导出的function/类
import {mul,Person} from "./aaa.js";

console.log(mul(30, 50));
const p = new Person();
p.run();

//5.导入其他文件中export default导出的东西
//import addr from './aaa.js'

//console.log(addr);

//6.导入函数
import a from './aaa.js'
a('你好啊')//调用函数

//7.统一导入,会将导入的所有东西放到aaa对象中
//import * as aaa from './aaa'
//console.log(aaa.flag)