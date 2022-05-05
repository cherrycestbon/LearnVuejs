<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: '滟滟随波千万里，何处春江无月明。'
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