<template>
  <ps-seperate-view
    :browsed-page-path="browsedPagePath"
    :browsed-page-meta-title="browsedPageMetaTitle"
  >
    <ps-page-header>
      {{ pageName }}
    </ps-page-header>
    <ps-dev-personal />
    <ps-divider />
    <ps-dev-atcoder />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsDivider from '~/components/atoms/ps-divider.vue';
import PsPageHeader from '~/components/atoms/ps-page-header.vue';
import PsDevAtcoder from '~/components/organisms/development-components/sections/ps-dev-atcoder.vue';
import PsDevPersonal from '~/components/organisms/development-components/sections/ps-dev-personal.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pageMetaTitles from '~/config/page-meta-titles';
import pageNames from '~/config/page-names';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsDevPersonal,
    PsDivider,
    PsDevAtcoder,
    PsPageHeader,
  },

  data() {
    return {
      browsedPagePath: pagePaths.development,
      browsedPageMetaTitle: pageMetaTitles.development,
      pageName: pageNames.development,
    };
  },
});
</script>
