var name = 'xiaoming';
var age = 22;

function sum(num1,num2){
  return num1 + num2;
}

var flag = true;
if(flag){
  console.log(sum(10, 20));
}

//对象自变量的增强写法
module.exports = {
  flag,
  sum
}
//完整写法
module.exports = {
  flag:flag,
  sum:sum
}

