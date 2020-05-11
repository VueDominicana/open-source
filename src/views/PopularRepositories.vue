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
import deburr from "lodash/deburr";
import sortBy from "lodash/sortBy";
import Repositories from "@/components/RepositoryCard";
import InputSearch from "@/components/InputSearch";

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

      // TODO: Improve the performance, I'm not happy with the current speed.
      // TODO Extract this to another file and make it modular.
      const matcher = new RegExp(deburr(this.searchTerm), "i");
      const filteredRepos = this.repositories.filter(repo => {
        return matcher.test(deburr(repo.name)) || matcher.test(deburr(repo.description));
      });

      return sortBy(filteredRepos, repo => -repo.stargazers).slice(0, 10);
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
