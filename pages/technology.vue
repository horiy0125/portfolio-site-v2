<template>
  <ps-seperate-view
    :browsed-page-path="browsedPagePath"
    :browsed-page-meta-title="browsedPageMetaTitle"
  >
    <ps-page-header>
      {{ pageName }}
    </ps-page-header>
    <ps-tech-experienced />
    <ps-divider />
    <ps-tech-touched />
    <ps-divider />
    <ps-tech-interested />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsDivider from '~/components/atoms/ps-divider.vue';
import PsPageHeader from '~/components/atoms/ps-page-header.vue';
import PsTechExperienced from '~/components/organisms/technology-components/sections/ps-tech-experienced.vue';
import PsTechInterested from '~/components/organisms/technology-components/sections/ps-tech-interested.vue';
import PsTechTouched from '~/components/organisms/technology-components/sections/ps-tech-touched.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pageMetaTitles from '~/config/page-meta-titles';
import pageNames from '~/config/page-names';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsTechTouched,
    PsTechExperienced,
    PsTechInterested,
    PsDivider,
    PsPageHeader,
  },

  data() {
    return {
      browsedPagePath: pagePaths.technology,
      browsedPageMetaTitle: pageMetaTitles.technology,
      pageName: pageNames.technology,
    };
  },
});
</script>
