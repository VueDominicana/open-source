<template>
  <div>
    <router-link v-for="section in sections" :to="{ name: section.name }" :key="section.name">
      {{ section.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    sections: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
