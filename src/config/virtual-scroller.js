// vue-virtual-scroller needs this polyfill: https://github.com/Akryum/vue-virtual-scroller#installation
import "intersection-observer";

import Vue from "vue";
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

Vue.use(VueVirtualScroller);
