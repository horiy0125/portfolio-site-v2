<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    404 Not found.
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/constants/page-paths';
export default Vue.extend({
  components: { PsSeperateView },

  data() {
    return {
      browsedPagePath: pagePaths.notFound,
    };
  },
});
</script>
