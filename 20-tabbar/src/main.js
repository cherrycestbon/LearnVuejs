import Vue from 'vue'
import App from './App'
import router from './router'//不用写index,默认会导入index文件？？？

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//但是不提倡在main.js中引用css,这样显得比较乱。
//require('./assets/css/base.css')
