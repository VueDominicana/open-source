<template>
  <div>
    <span v-if="!languages.trim()">(no languages)</span>
    <router-link
      v-else
      class="chip"
      v-for="(language, index) in languagesWithColors"
      :key="index"
      :style="{ backgroundColor: language.backgroundColor, color: language.textColor }"
      :to="'/repositories/' + language.text"
    >
      {{ language.text }}
    </router-link>
  </div>
</template>

<script>
import colors from "@/util/colors.json";
import { hexToRgb, setContrast } from "@/util/colors";

export default {
  name: "Language",
  props: {
    languages: {
      type: String,
      required: true
    }
  },
  computed: {
    languagesWithColors() {
      return this.languages
        .trim()
        .split(" ")
        .map(language => {
          const backgroundColor = colors[language] || "#e4e4e4";
          const textColor = setContrast(hexToRgb(backgroundColor));
          return {
            text: language,
            backgroundColor,
            textColor
          };
        });
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  margin-right: 12px !important;
}
</style>
