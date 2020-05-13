<template>
  <div>
    <h3 class="center-align">Popular Developers</h3>
    <p class="center">
      Showing
      <strong>{{ filteredDevelopers.length.toLocaleString() }}</strong> developers
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
import sortBy from "lodash/sortBy";
import DeveloperCard from "@/components/DeveloperCard";
import InputSearch from "@/components/InputSearch";
import Searcher from "@/util/Searcher";

const developerSearcher = new Searcher().setField("name").setField("login");

export default {
  name: "PopularDevelopers",
  components: {
    DeveloperCard,
    InputSearch
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapState({
      developers: state => state.Developers.developers
    }),
    filteredDevelopers() {
      if (!this.searchTerm) {
        return this.developers.slice(0, 10);
      }

      return sortBy(developerSearcher.findAll(this.searchTerm), dev => -dev.followers).slice(0, 10);
    }
  },
  watch: {
    developers: {
      handler() {
        developerSearcher.setData(this.developers);
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
