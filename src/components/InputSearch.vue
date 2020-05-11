<template>
  <div class="row input-search">
    <div class="input-field col s12">
      <i class="material-icons prefix">search</i>
      <input id="search" type="search" v-model="searchTerm" autocomplete="off" />
      <label for="search">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  activated() {
    this.searchTerm = "";
    // We are using keep-alive, and when we leave the screen while the input is focused all
    // the states are preserved, so we need to restore the input to its initial state.
    this.$nextTick(() => {
      M.updateTextFields();
    });
  },
  watch: {
    searchTerm(newVal) {
      this.$emit("input", newVal.trim());
    }
  }
};
</script>

<style lang="scss" scoped>
.input-search {
  margin-bottom: 0 !important;
  .input-field {
    label {
      color: #039be5 !important;
    }

    input {
      &:focus {
        + label {
          color: #039be5 !important;
        }

        border-bottom: 1px solid #039be5 !important;
        box-shadow: 0 1px 0 0 #039be5 !important;
      }
    }

    .prefix.active {
      color: #039be5 !important;
    }
  }
}
</style>
