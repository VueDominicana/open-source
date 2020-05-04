// vue-virtual-scroller needs this polyfill: https://github.com/Akryum/vue-virtual-scroller#installation
import "intersection-observer";

import Vue from "vue";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

import App from "@/App.vue";
import router from "@/router";
import "@/config";
import store from "./store/store";

Vue.use(VueVirtualScroller);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
