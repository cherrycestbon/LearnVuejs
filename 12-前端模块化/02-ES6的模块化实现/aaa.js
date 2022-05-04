var name = 'xiaoming';
var age = 18;
var flag = true;

function sum(num1,num2){
  return num1 + num2;
}

if(flag){
  debugger;
  console.log(sum(20, 30));
}

//1.导出方式一：
export {
  flag,sum
}
//2.导出方式二：
export var num1 = 1000;
export var height = 1.88
//3.导出函数和类
export function mul(num1,num2){
  return num1 * num2;
}
export class Person{
  run(){
    console.log('在奔跑');
  }
}
//5.export default:在开发中，一个文件只能有一个default
//const address = '北京市';
//export default address;

//6.export default导出函数
export default function(argument){
  console.log(argument);
}