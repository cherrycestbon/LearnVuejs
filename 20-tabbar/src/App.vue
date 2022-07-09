<template>
  <div id="app">
    <!--  3.使用：这个标签时组件的id？  -->
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
//1.导入
import MainTabBar from "./components/MainTabBar";
export default {
  name: 'App',
  //2.注册
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
