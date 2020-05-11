<template>
  <div>
    <SubNav :sections="sections" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav";

export default {
  name: "Repositories",
  components: {
    SubNav
  },
  data() {
    return {
      sections: [
        {
          name: "PopularRepositories",
          label: "Popular"
        },
        {
          name: "NewRepositories",
          label: "New"
        }
      ]
    };
  }
};
</script>
