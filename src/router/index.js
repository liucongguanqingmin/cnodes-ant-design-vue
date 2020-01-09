import Vue from "vue";
import VueRouter from "vue-router";
import { Layout, Menu, Breadcrumb, Input, Spin, Divider } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import Home from "../views/Home";

Vue.use(VueRouter);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Input);
Vue.use(Spin);
Vue.use(Divider);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      {
        path: "/home",
        components: { Home }
      }
    ]
  },
  {
    path: "/topic/:id",
    name: "topic",
    component: () => import(/* webpackChunkName: "layout" */ "../layouts/Topic")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
