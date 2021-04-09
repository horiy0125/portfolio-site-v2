<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-section en-heading="Blog Posts" jp-heading="ブログ記事"></ps-section>
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '~/components/organisms/ps-section.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/constants/page-paths';
export default Vue.extend({
  components: { PsSeperateView, PsSection },

  data() {
    return {
      browsedPagePath: pagePaths.blog,
    };
  },
});
</script>
