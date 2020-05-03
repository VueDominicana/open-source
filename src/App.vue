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
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
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
    //TODO remove sample
    this.$store.dispatch("App/setLoading", true);
    setTimeout(() => {
      this.$store.dispatch("App/setLoading", false);
    }, 5000);
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
