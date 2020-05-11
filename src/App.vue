<template>
  <div>
    <loading :active="isLoading" :opacity="0.9">
      <div class="loading-content">
        <span>Loading...</span>
        <p>Please wait until we get all the data.</p>
      </div>
    </loading>
    <AppNav />
    <div class="container">
      <router-view />
    </div>
    <FloatingActionButton />
  </div>
</template>

<script>
import AppNav from "@/components/Nav";
import FloatingActionButton from "@/components/FloatingActionButton";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "App",
  components: {
    Loading,
    AppNav,
    FloatingActionButton
  },
  computed: {
    isLoading() {
      return this.$store.getters["App/isLoading"];
    }
  },
  async mounted() {
    await this.$store.dispatch("App/setLoading", true);

    await Promise.all([
      this.$store.dispatch("Developers/getDevelopers"),
      this.$store.dispatch("Repositories/getRepositories")
    ]);

    await this.$store.dispatch("App/setLoading", false);
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/global";

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.md-content {
  padding: 16px;
  height: 100%;
}
</style>
