<template>
  <div>
    <h3 class="center-align">
      Popular <span>{{ language }}</span> Repositories
    </h3>
    <p class="center">
      Showing <strong>{{ filteredLanguageRepositories.length.toLocaleString() }}</strong> repositories
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
    filteredLanguageRepositories() {
      if (this.language) {
        return this.repositories.filter(item => item.languages.includes(this.language));
      }

      return this.repositories;
    },
    filteredRepositories() {
      if (!this.searchTerm) {
        return this.filteredLanguageRepositories.slice(0, 10);
      }

      return sortBy(repoSearcher.findAll(this.searchTerm), repo => -repo.stargazers).slice(0, 10);
    },
    language() {
      return this.$route.params.language || null;
    }
  },
  watch: {
    repositories: {
      handler() {
        repoSearcher.setData(this.filteredLanguageRepositories);
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
h3 span {
  text-decoration: underline;
  font-size: 2.92rem;
  line-height: 110%;
  margin: 1.9466666667rem 0 1.168rem 0;
  font-style: inherit;
  font-weight: inherit;
}
</style>
