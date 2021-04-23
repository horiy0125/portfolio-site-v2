<template>
  <ps-seperate-view
    :browsed-page-path="browsedPagePath"
    :browsed-page-meta-title="browsedPageMetaTitle"
  >
    <ps-page-header>
      {{ pageName }}
    </ps-page-header>
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
import PsPageHeader from '~/components/atoms/ps-page-header.vue';
import PsAboutCareer from '~/components/organisms/about-components/sections/ps-about-career.vue';
import PsAboutHistory from '~/components/organisms/about-components/sections/ps-about-history.vue';
import PsAboutProfile from '~/components/organisms/about-components/sections/ps-about-profile.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pageMetaTitles from '~/config/page-meta-titles';
import pageNames from '~/config/page-names';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsAboutProfile,
    PsAboutCareer,
    PsDivider,
    PsAboutHistory,
    PsPageHeader,
  },

  data() {
    return {
      browsedPagePath: pagePaths.about,
      browsedPageMetaTitle: pageMetaTitles.about,
      pageName: pageNames.about,
    };
  },
});
</script>
