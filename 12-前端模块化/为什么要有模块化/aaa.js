//1.这里是按照自己思路实现的模块化，另外一种是是aaa-CommonJS.js文件中CommonJS模块化的写法。
/*匿名闭包*/
var moduleA = (function(){
  //导出的对象
  //es5本身没有模块化。es6本身自带模块化。
  var obj = {}

  var name = 'xiaoming';
  var age = 22;

  function sum(num1,num2){
    return num1 + num2;
  }

  var flag = true;
  if(flag){
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  obj.sum = sum;
  return obj;
})()
