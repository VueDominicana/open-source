<template>
  <div>
    <p>Repositories</p>
    <SubNav :sections="sections" />
    <router-view />
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
