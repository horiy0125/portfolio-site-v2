<template>
  <ps-not-found-template :meta-title="metaTitle">
    <ps-not-found />
  </ps-not-found-template>
</template>

<script lang="ts">
import Vue from 'vue';
import PsNotFound from '~/components/organisms/not-found-components/ps-not-found.vue';
import PsNotFoundTemplate from '~/components/templates/ps-not-found-template.vue';
import pageMetaTitles from '~/config/page-meta-titles';
export default Vue.extend({
  components: { PsNotFound, PsNotFoundTemplate },

  data() {
    return {
      metaTitle: pageMetaTitles.notFound,
    };
  },
});
</script>
