<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-section en-heading="Profile" jp-heading="プロフィール"></ps-section>
    <ps-section en-heading="Career" jp-heading="学歴・職歴"></ps-section>
    <ps-section en-heading="History" jp-heading="来歴"></ps-section>
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
      browsedPagePath: pagePaths.about,
    };
  },
});
</script>
