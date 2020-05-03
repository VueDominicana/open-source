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

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  a {
    margin: 40px;
    font-size: 20px;
    color: black;
  }
  .router-link-active {
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
