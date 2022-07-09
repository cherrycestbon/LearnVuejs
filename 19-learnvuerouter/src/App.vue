<template>
  <div id="app">
    <!--vue-router中自动注册过的组件，它是全局组件，可以在任意位置使用。router-link最终会被渲染为a标签-->
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button" active-class="active">用户</router-link>
<!--    <router-link to="/profile" tag="button" active-class="active">档案</router-link>-->
<!--  为了让{}被当成一个对象，to前面需要加v-bind:  -->
    <router-link v-bind:to="{path: '/profile',query:{name:'why',age:18,height:1.88}}" tag="button" active-class="active">档案</router-link>
    <!--router-view相当于一个占位的东西-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  }
}
</script>

<style>
/*.router-link-active{
  color: red;
}*/
.active {
  color: red;
}
</style>
