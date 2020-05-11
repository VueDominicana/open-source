<template>
  <div>
    <h3 class="center-align">Popular Repositories</h3>
    <p class="center">
      Showing <strong>{{ repositories.length.toLocaleString() }}</strong> repositories
      <span>sorted by stars.</span>
    </p>
    <InputSearch label="Filter repository by name or description..." v-model="searchTerm" />
    <Repositories v-for="repository in filteredRepositories" :repository="repository" :key="repository.id" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import sortBy from "lodash/sortBy";
import Repositories from "@/components/RepositoryCard";
import InputSearch from "@/components/InputSearch";
import Searcher from "@/util/Searcher";

const repoSearcher = new Searcher().setField("name").setField("description");

export default {
  name: "PopularRepositories",
  components: {
    Repositories,
    InputSearch
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapState({
      repositories: state => state.Repositories.repositories
    }),
    filteredRepositories() {
      if (!this.searchTerm) {
        return this.repositories.slice(0, 10);
      }

      return sortBy(repoSearcher.findAll(this.searchTerm), repo => -repo.stargazers).slice(0, 10);
    }
  },
  watch: {
    repositories: {
      handler() {
        repoSearcher.setData(this.repositories);
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
</style>
