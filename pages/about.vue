<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-about-profile />
    <ps-divider />
    <ps-about-career />
    <ps-divider />
    <ps-about-history />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsDivider from '~/components/atoms/ps-divider.vue';
import PsAboutCareer from '~/components/organisms/about-components/sections/ps-about-career.vue';
import PsAboutHistory from '~/components/organisms/about-components/sections/ps-about-history.vue';
import PsAboutProfile from '~/components/organisms/about-components/sections/ps-about-profile.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsAboutProfile,
    PsAboutCareer,
    PsDivider,
    PsAboutHistory,
  },

  data() {
    return {
      browsedPagePath: pagePaths.about,
    };
  },
});
</script>
