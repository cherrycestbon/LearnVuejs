;(function(){
  /*这里无法再之间复用(aaa.js)中定义的变量了*/
  /*但是可以通过全局的模块对象拿到*/
  if(moduleA.flag){
    console.log('昨夜雨疏风骤');
  }
  /*也无法使用sum函数了*/
  /*但是可以通过全局模块对象调用*/
  console.log(moduleA.sum(40, 50));
})()