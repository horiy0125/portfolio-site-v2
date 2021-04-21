<template>
  <ps-seperate-view
    :browsed-page-path="browsedPagePath"
    :browsed-page-meta-title="browsedPageMetaTitle"
  >
    <ps-not-found />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsNotFound from '~/components/organisms/not-found-components/ps-not-found.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pageMetaTitles from '~/config/page-meta-titles';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: { PsSeperateView, PsNotFound },

  data() {
    return {
      browsedPagePath: pagePaths.notFound,
      browsedPageMetaTitle: pageMetaTitles.notFound,
    };
  },
});
</script>
