<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-section en-heading="Personal" jp-heading="個人開発"></ps-section>
    <ps-section en-heading="Others" jp-heading="その他"></ps-section>
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '~/components/organisms/ps-section.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: { PsSeperateView, PsSection },

  data() {
    return {
      browsedPagePath: pagePaths.development,
    };
  },
});
</script>
