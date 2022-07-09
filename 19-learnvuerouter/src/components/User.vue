<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户的相关信息</p>
  <h2>{{userId}}</h2>
  <!-- 也可以直接使用 -->
  <h2>{{$route.params.userId}}</h2>
</div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //$route：当前那个路由处于活跃状态，拿到的就是那个路由。
      //$router: 在index.js中const router = new VueRouter({...})中的大的router对象.
      //这个userId是在index.js中的User组件的映射关系的path中定义的
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
