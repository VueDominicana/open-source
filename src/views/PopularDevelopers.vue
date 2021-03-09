<template>
  <div>
    <h3 class="center-align">Popular Developers</h3>
    <p class="center">
      Showing
      <strong>{{ developers.length.toLocaleString() }}</strong> developers
      <span>sorted by followers.</span>
    </p>
    <InputSearch label="Filter developer by name or username..." v-model="searchTerm" />
    <div class="row flex">
      <DeveloperCard v-for="dev in filteredDevelopers" :developer="dev" :key="dev.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DeveloperCard from "@/components/DeveloperCard";
import InputSearch from "@/components/InputSearch";
import { useSearchDeveloper } from "@/composable/useSearchDeveloper";

export default {
  name: "PopularDevelopers",
  components: {
    DeveloperCard,
    InputSearch
  },
  data() {
    return {
      searchTerm: "",
      search: () => {}
    };
  },
  computed: {
    ...mapState({
      developers: state => state.Developers.developers
    }),
    filteredDevelopers() {
      return this.search(this.searchTerm);
    }
  },
  watch: {
    developers: {
      handler() {
        const { searchPopular } = useSearchDeveloper();
        this.search = searchPopular;
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-style: italic;
  font-weight: 600;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
