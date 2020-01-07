<template>
  <div id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          :key="i"
          v-for="(item, i) in menu"
          @click="changeMenu(item)"
          >{{ item }}</a-menu-item
        >
      </a-menu>
    </a-layout-header>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
  background-image: url("//static2.cnodejs.org/public/images/cnodejs_light.svg");
}
</style>

<script>
export default {
  data() {
    return {
      menu: ["首页", "新手入门", "API", "关于", "注册", "登录"]
    };
  }
};
</script>
