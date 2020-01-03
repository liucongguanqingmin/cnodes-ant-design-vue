<template>
  <a-layout id="components-layout-demo-fixed">
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
          v-for="(item, i) in menuList"
          @click="changeMenu(item)"
          >{{ item }}</a-menu-item
        >
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb
        separator=" "
        v-if="selectItem == '首页'"
        :style="{ margin: '16px 0' }"
      >
        <a-breadcrumb-item
          :style="{
            'background-color': '#80bd01',
            color: '#fff',
            'border-radius': '3px',
            padding: '3px 4px',
            margin: '10px 10px'
          }"
          :key="i"
          v-for="(sub, i) in subList"
          >{{ sub }}</a-breadcrumb-item
        >
      </a-breadcrumb>
      <a-breadcrumb v-else :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>主页</a-breadcrumb-item>
        <a-breadcrumb-item>{{ selectItem }}</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
</template>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
  background-image: url("//static2.cnodejs.org/public/images/cnodejs_light.svg");
}
</style>

<script>
import Footer from "@/layouts/footer.vue";
export default {
  data() {
    return {
      menuList: ["首页", "新手入门", "API", "关于", "注册", "登录"],
      subList: ["全部", "精华", "分享", "问答", "招聘", "客户端测试"],
      selectItem: "首页"
    };
  },
  methods: {
    changeMenu(item) {
      this.selectItem = item;
    }
  },
  components: {
    Footer
  }
};
</script>
