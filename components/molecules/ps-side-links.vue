<template>
  <div class="m-psSideLinks">
    <ps-side-link
      :browsed-page-path="browsedPagePath"
      :page-path="pagePaths.about"
    >
      {{ pageNames.about }}
    </ps-side-link>
    <ps-side-link
      :browsed-page-path="browsedPagePath"
      :page-path="pagePaths.development"
    >
      {{ pageNames.development }}
    </ps-side-link>
    <ps-side-link
      :browsed-page-path="browsedPagePath"
      :page-path="pagePaths.technology"
    >
      {{ pageNames.technology }}
    </ps-side-link>
    <ps-side-link
      :browsed-page-path="browsedPagePath"
      :page-path="pagePaths.blog"
    >
      {{ pageNames.blog }}
    </ps-side-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSideLink from '../atoms/ps-side-link.vue';
import pagePaths from '~/config/page-paths';
import pageNames from '~/config/page-names';
export default Vue.extend({
  components: { PsSideLink },
  props: {
    browsedPagePath: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      pagePaths,
      pageNames,
    };
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psSideLinks';
#{$block} {
  display: inline-block;
  width: 100%;
  margin-top: 48px;
}
</style>
