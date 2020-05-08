<template>
  <div>
    <SubNav :sections="sections" />
    <router-view>
      <InputSearch label="Filter repository by name or description..." />
    </router-view>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav";
import InputSearch from "@/components/InputSearch";

export default {
  name: "Repositories",
  components: {
    SubNav,
    InputSearch
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
