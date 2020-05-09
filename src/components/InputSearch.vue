<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input id="search" type="text" class="validate" />
          <label for="search"> {{ label }} </label>
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
  }
};
</script>

<style lang="scss" scoped>
/* label color */
.input-field label {
  color: #039be5 !important;
}
/* label focus color */
.input-field input[type="text"]:focus + label {
  color: #039be5 !important;
}
/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid #039be5 !important;
  box-shadow: 0 1px 0 0 #039be5 !important;
}
/* valid color */
.input-field input[type="text"].valid {
  border-bottom: 1px solid #039be5 !important;
  box-shadow: 0 1px 0 0 #039be5 !important;
}
/* invalid color */
.input-field input[type="text"].invalid {
  border-bottom: 1px solid #039be5 !important;
  box-shadow: 0 1px 0 0 #039be5 !important;
}
/* icon prefix focus color */
.input-field .prefix.active {
  color: #039be5 !important;
}
</style>
