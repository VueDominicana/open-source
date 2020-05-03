<template>
  <div>
    <loading :active="isLoading" />
    <AppNav />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/Nav";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "App",
  components: {
    Loading,
    AppNav
  },
  computed: {
    isLoading() {
      return this.$store.getters["App/isLoading"];
    }
  },
  mounted() {
    // TODO: Enable this when we start fetching data from the API
    // this.$store.dispatch("App/setLoading", true);
    // setTimeout(() => {
    //   this.$store.dispatch("App/setLoading", false);
    // }, 5000);
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/global";

.md-content {
  padding: 16px;
  height: 100%;
}
</style>
