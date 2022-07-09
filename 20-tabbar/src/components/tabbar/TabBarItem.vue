<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--  这里加移除div，是为了防止slot被替换后，slot上的class也丢了。所以把class放到div上  -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    //传入点击的item的路径
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      //isActive: true
    }
  },
  computed: {
    //动态决定谁是活跃的
    isActive() {
      //$route对象：哪个路由处于活跃，就是哪个对象。
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      //所有组件中都有$router对象
      //如果跳转后可返回，用push。如果跳转后不可返回，用replace.
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /*高度一般49px*/
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  heigth: 24px;
  margin-top: 3px;
  /*去除图片下面默认的3px的空间*/
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
