<template>
  <div class="fixed-action-btn direction-top">
    <a class="btn-floating btn-large red darken-2">
      <i class="large material-icons">more_vert</i>
    </a>
    <ul>
      <li>
        <a
          class="btn-floating red darken-2 tooltipped"
          target="_blank"
          data-position="left"
          data-tooltip="Report an issue"
          href="https://github.com/vuedominicana/open-source/issues/new"
        >
          <i class="material-icons">bug_report</i>
        </a>
      </li>
      <li>
        <a
          class="btn-floating red darken-2 tooltipped"
          target="_blank"
          data-position="left"
          data-tooltip="View project on GitHub"
          href="https://github.com/vuedominicana/open-source"
        >
          <i class="material-icons">code</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "FloatingActionButton",
  mounted() {
    M.AutoInit();
  }
};
</script>
