<template>
  <div class="col m12 l6">
    <div>
      <h4>Popular Languages</h4>
      <span v-if="!popularLanguages.length">No languages :'(</span>
      <div v-else v-for="(language, index) in popularLanguages" :key="index">
        <span class="grey-text text-darken-3 rank-position"># {{ index + 1 }}</span>
        <span class="language-text">{{ language.text }}</span>
        <strong class="grey-text text-darken-2">{{ language.score }} %</strong>
        <div class="progress blue lighten-4" style="height: 10px;">
          <div class="determinate blue darken-2" :style="{ width: `${language.score}%` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularLanguages",
  props: {
    languages: {
      type: Array,
      required: true
    }
  },
  computed: {
    popularLanguages() {
      return this.languages.length
        ? this.languages.slice().sort((languageA, languageB) => (languageA.score > languageB.score ? -1 : 1))
        : [];
    }
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
