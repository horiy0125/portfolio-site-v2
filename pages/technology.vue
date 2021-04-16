<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
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
import PsTechExperienced from '~/components/organisms/technology-components/sections/ps-tech-experienced.vue';
import PsTechInterested from '~/components/organisms/technology-components/sections/ps-tech-interested.vue';
import PsTechTouched from '~/components/organisms/technology-components/sections/ps-tech-touched.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsTechTouched,
    PsTechExperienced,
    PsTechInterested,
    PsDivider,
  },

  data() {
    return {
      browsedPagePath: pagePaths.technology,
    };
  },
});
</script>
