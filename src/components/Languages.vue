<template>
  <div>
    <span v-if="!languages.trim()">(no languages)</span>
    <a
      v-else
      href="#"
      class="chip"
      v-for="(language, index) in languagesWithColors"
      :key="index"
      :style="{ backgroundColor: language.backgroundColor, color: language.textColor }"
    >
      {{ language.text }}
    </a>
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
          const textColor = colors[language] ? setContrast(hexToRgb(backgroundColor)) : "black";
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
  &:hover {
    text-decoration: underline;
  }
}
</style>
