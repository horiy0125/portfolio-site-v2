<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-tech-touched />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsTechTouched from '~/components/organisms/technology-components/sections/ps-tech-touched.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: { PsSeperateView, PsTechTouched },

  data() {
    return {
      browsedPagePath: pagePaths.technology,
    };
  },
});
</script>
