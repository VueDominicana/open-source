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
import { mapGetters } from "vuex";
import * as JsSearch from "js-search";
import sortBy from "lodash/sortBy";
import Repositories from "@/components/RepositoryCard";
import InputSearch from "@/components/InputSearch";
const searcher = new JsSearch.Search("position");
searcher.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
searcher.searchIndex = new JsSearch.UnorderedSearchIndex();
searcher.addIndex("name");
searcher.addIndex("description");

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
    ...mapGetters({
      repositories: "Repositories/repositories"
    }),
    filteredRepositories() {
      if (!this.searchTerm) {
        return this.repositories.slice(0, 10);
      }
      const results = searcher.search(this.searchTerm);
      return sortBy(results, repo => -repo.stargazers).slice(0, 10);
    }
  },
  watch: {
    repositories: {
      handler() {
        searcher.addDocuments(this.repositories);
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
