<template>
  <div class="m-psSideLinks">
    <ps-side-link
      :is-active="browsedPagePath === pagePaths.blog"
      :page-path="pagePaths.blog"
    >
      Blog
    </ps-side-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSideLink from '../atoms/ps-side-link.vue';
import pagePaths from '~/constants/page-paths';
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
