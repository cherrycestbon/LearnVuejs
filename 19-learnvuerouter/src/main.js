import Vue from 'vue'
import App from './App'
//如果导入的是一个目录，会自动去目录中找index文件，所有下面导入目录的末尾可以不跟/index
import router from  './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  //把router挂载到Vue实例中
  router,//简写：router: router
  render: h => h(App)
})
