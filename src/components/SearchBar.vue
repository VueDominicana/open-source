<template>
  <div>
    <div class="input-field">
      <input
        id="search"
        v-model="search"
        class="validate"
        placeholder="Filter repositories by name or author..."
        type="search"
        style="border-bottom-color: rgb(33, 150, 243); box-shadow: rgb(33, 150, 243) 0px 1px 0px 0px;"
      />
      <label class="label-icon" for="search">
        <i class="material-icons">search</i>
      </label>
    </div>

    <div>
      <p v-for="current in repositories" :key="current.id">
        {{ current }}
      </p>
    </div>
  </div>
</template>

<script>
import * as JsSearch from "js-search";
import repos from "./repos.json";

export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
      searcher: new JsSearch.Search("id")
    };
  },
  mounted() {
    M.updateTextFields();
    this.searcher.addIndex("name");
    this.searcher.addIndex("description");
    this.searcher.addDocuments(repos);
  },
  computed: {
    repositories() {
      return this.searcher.search(this.search).slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  // position: relative;
  // border-bottom-color: rgb(33, 150, 243) !important;
  // box-shadow: rgb(33, 150, 243) 0px 1px 0px 0px !important;
  input {
    color: inherit;
    font: inherit;
    -webkit-appearance: textfield;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    font-size: 1rem;
    margin: 0 0 20px 0;
    padding: 0;
    box-sizing: content-box;
    transition: all 0.3s;
    display: block;
    line-height: inherit;
    padding-left: 4rem;
    width: calc(100% - 4rem);
    border-bottom-color: rgb(33, 150, 243);
    box-shadow: rgb(33, 150, 243) 0px 1px 0px 0px;
  }

  label {
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    box-sizing: inherit;
    color: #9e9e9e;
    position: absolute;
    top: 0.8rem;
    font-size: 1rem;
    cursor: text;
    transition: 0.2s ease-out;
    text-align: initial;
    left: 1rem;
    width: 100%;
    pointer-events: none;
  }

  // i {
  //   position: absolute;
  //   top: 10px;
  // }
}
</style>
