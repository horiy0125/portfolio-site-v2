<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-about-profile />
    <ps-about-career />
    <ps-section en-heading="History" jp-heading="来歴"></ps-section>
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsAboutCareer from '~/components/organisms/about-components/sections/ps-about-career.vue';
import PsAboutProfile from '~/components/organisms/about-components/sections/ps-about-profile.vue';
import PsSection from '~/components/organisms/ps-section.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: { PsSeperateView, PsSection, PsAboutProfile, PsAboutCareer },

  data() {
    return {
      browsedPagePath: pagePaths.about,
    };
  },
});
</script>
