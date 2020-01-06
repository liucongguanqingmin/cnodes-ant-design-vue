<template>
  <a-layout id="components-layout-demo-fixed">
    <Header></Header>
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
          v-for="(route, i) in routes"
        >
          <router-link :to="`?tag=${route.path}`" @click.native="refresh">
            {{ route.breadcrumbName }}
          </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-breadcrumb v-else :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>主页</a-breadcrumb-item>
        <a-breadcrumb-item>{{ selectItem }}</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <Content v-bind:nav="nav ? nav : 'all'"></Content>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
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
import Footer from "@/layouts/Footer.vue";
import Content from "@/layouts/Content.vue";
import Header from "@/layouts/Header.vue";

export default {
  data() {
    return {
      routes: [
        { breadcrumbName: "全部", path: "all" },
        { breadcrumbName: "精华", path: "good" },
        { breadcrumbName: "分享", path: "share" },
        { breadcrumbName: "问答", path: "ask" },
        { breadcrumbName: "招聘", path: "job" },
        { breadcrumbName: "客户端测试", path: "dev" }
      ],
      selectItem: "首页",
      nav: this.$route.query["tag"]
    };
  },
  methods: {
    changeMenu(item) {
      this.selectItem = item;
    },
    refresh() {
      this.$router.go(0);
    }
  },
  components: {
    Header,
    Footer,
    Content
  }
};
</script>
