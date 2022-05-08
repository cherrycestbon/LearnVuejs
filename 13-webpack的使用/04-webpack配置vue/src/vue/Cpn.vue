<template>
  <div>
    <h2>我是Cpn组件的标题</h2>
    <p>我是Cpn组件的内容</p>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      name: 'Cpn组件的name'
    }
  }
}
</script>

<style scoped>

</style>