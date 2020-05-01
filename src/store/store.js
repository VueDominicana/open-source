/**
 * Create all modules dynamically.
 */
import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== "production"
});
