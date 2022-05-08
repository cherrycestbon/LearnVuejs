<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
/*.vue在webpack.config.js配置后，可省略*/
import Cpn from './Cpn.vue'
export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: '滟滟随波千万里，何处春江无月明。',
      name: '张若虚'
    }
  },
  methods: {
    btnClick(){

    }
  }
}
</script>

<style scoped>
  .title {
    color:yellowgreen;
  }
</style>