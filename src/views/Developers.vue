<template>
  <div>
    <SubNav :sections="sections" />
    <router-view />
  </div>
</template>

<script>
import SubNav from "@/components/SubNav";
export default {
  name: "Deveopers",
  components: {
    SubNav
  },
  data() {
    return {
      sections: [
        {
          name: "PopularDevelopers",
          label: "Popular"
        },
        {
          name: "RecentlyJoinedDevelopers",
          label: "Recently joined"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
