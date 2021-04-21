<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-dev-personal />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsDevPersonal from '~/components/organisms/development-components/sections/ps-dev-personal.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsDevPersonal,
  },

  data() {
    return {
      browsedPagePath: pagePaths.development,
    };
  },
});
</script>
