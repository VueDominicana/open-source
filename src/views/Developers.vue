<template>
  <div>
    <SubNav :sections="sections" />
    <keep-alive>
      <router-view>
        <InputSearch label="Filter developer by name or username..." />
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav";
import InputSearch from "@/components/InputSearch";

export default {
  name: "Deveopers",
  components: {
    SubNav,
    InputSearch
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
