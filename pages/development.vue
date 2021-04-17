<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-dev-line-bot />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsDevLineBot from '~/components/organisms/development-components/sections/ps-dev-line-bot.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: { PsSeperateView, PsDevLineBot },

  data() {
    return {
      browsedPagePath: pagePaths.development,
    };
  },
});
</script>
