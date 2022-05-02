/*匿名闭包*/
;
var moduleB = (function(){
  var obj = {}
  var name = 'xiaohong';
  var flag = false;

  console.log(name);
  obj.flag = flag;
  return obj;
})()
