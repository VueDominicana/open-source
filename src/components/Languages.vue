<template>
  <div>
    <a
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
      return this.languages.split(" ").map(language => {
        if (colors[language]) {
          const languageColor = colors[language] || "black";
          return {
            text: language,
            backgroundColor: languageColor,
            textColor: setContrast(hexToRgb(languageColor))
          };
        } else {
          return {
            text: language,
            backgroundColor: "#e4e4e4",
            textColor: "black"
          };
        }
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
