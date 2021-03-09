<template>
  <div>
    <h3 class="center-align">New Developers</h3>
    <p class="center">
      Showing
      <strong>{{ newDevelopers.length.toLocaleString() }}</strong> developers
      <span>that has joined in the last 30 days.</span>
    </p>
    <InputSearch label="Filter developer by name or username..." v-model="searchTerm" />
    <div class="row flex">
      <DeveloperCard v-for="dev in filteredDevelopers" :developer="dev" :key="dev.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DeveloperCard from "@/components/DeveloperCard";
import InputSearch from "@/components/InputSearch";
import { useSearchDeveloper } from "@/composable/useSearchDeveloper";

export default {
  name: "RecentlyJoinedDevelopers",
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
    ...mapGetters({
      newDevelopers: "Developers/newDevelopers"
    }),
    filteredDevelopers() {
      return this.search(this.searchTerm);
    }
  },
  watch: {
    newDevelopers: {
      handler() {
        const { searchNewDevelopers } = useSearchDeveloper();
        this.search = searchNewDevelopers;
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
