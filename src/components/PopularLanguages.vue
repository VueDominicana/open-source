<template>
  <div class="col m12 l6">
    <div>
      <h4>Popular Languages</h4>
      <span v-if="!popularLanguages.length">No languages :'(</span>
      <div v-else v-for="(language, index) in popularLanguages" :key="index">
        <span class="grey-text text-darken-3 rank-position"># {{ index + 1 }}</span>
        <span class="language-text">{{ language.name }}</span>
        <strong class="grey-text text-darken-2">{{ language.percentage }} %</strong>
        <div class="progress blue lighten-4" style="height: 10px;">
          <div class="determinate blue darken-2" :style="{ width: `${language.percentage}%` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PopularLanguages",
  computed: {
    ...mapGetters({
      popularLanguages: "About/mostPopularLanguage"
    })
  }
};
</script>

<style lang="scss" scoped>
.rank-position {
  width: 40px;
  display: inline-block;
  font-size: 18px;
}

.language-text {
  font-size: 22px;
  margin-right: 10px;
}
</style>
