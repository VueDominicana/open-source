<template>
  <div class="row input-search">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input id="search" type="search" class="validate" @input="onChange" autocomplete="off" />
          <label for="search">{{ label }}</label>
        </div>
      </div>
    </form>
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
  methods: {
    onChange({ target: { value } }) {
      this.$emit("input", value.trim());
    }
  }
};
</script>

<style lang="scss" scoped>
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

    &.valid,
    &.invalid {
      border-bottom: 1px solid #039be5 !important;
      box-shadow: 0 1px 0 0 #039be5 !important;
    }
  }

  .prefix.active {
    color: #039be5 !important;
  }
}
</style>
