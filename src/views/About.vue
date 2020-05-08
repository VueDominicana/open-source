<template>
  <div class="about">
    <h5>About this website</h5>
    <p>
      <strong>Dominican Open Source</strong>
      is an initiative to gather all possible public data about projects in GitHub from developers of the
      <strong>Dominican Republic</strong>
      using the
      <strong> <a target="_blank" href="https://developer.github.com/v4/">GitHub GraphQL API</a>. </strong>
    </p>
    <p>
      The main purpose of this website is to show local efforts that
      <strong>Dominicans</strong>
      are contributing toward open source communities.
    </p>
    <p>
      <strong>VueDominicana</strong>
      is an initiative to replicate all the features that
      <a target="_blank" href="https://github.com/developersdo/opensource/">opensource</a> has, just for fun and at the
      same time to introduce more people to the open-source community. This is an excellent project for someone who
      wants to learn Vue.
    </p>
    <div class="row">
      <PopularLanguages :languages="languages" />
      <Statistics />
    </div>
  </div>
</template>

<script>
import Statistics from "@/components/Statistics";
import PopularLanguages from "@/components/PopularLanguages";

export default {
  name: "About",
  components: {
    PopularLanguages,
    Statistics
  },
  data() {
    return {
      // TODO: remove sample data
      languages: [
        {
          text: "css",
          score: 31.21
        },
        {
          text: "javascript",
          score: 39.11
        },
        {
          text: "html",
          score: 33.6
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  .row {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
}
</style>
