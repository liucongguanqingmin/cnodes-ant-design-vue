import Vue from "vue";
import VueRouter from "vue-router";
import { Layout, Menu, Breadcrumb, Input } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(VueRouter);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Input);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
