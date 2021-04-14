<template>
  <ps-link
    :href="pagePath"
    :class="isActive ? 'a-psSideLink a-psSideLink__isActive' : 'a-psSideLink'"
  >
    <slot />
  </ps-link>
</template>

<script lang="ts">
import Vue from 'vue';
import PsLink from './ps-link.vue';
export default Vue.extend({
  components: { PsLink },

  props: {
    pagePath: {
      type: String,
      required: true,
    },
    browsedPagePath: {
      type: String,
      required: true,
    },
  },

  computed: {
    isActive(): boolean {
      return this.browsedPagePath.includes(this.pagePath);
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psSideLink';
#{$block} {
  width: 100%;
  padding-left: 12px;
  text-transform: uppercase;
  font-family: $en-font;
  font-weight: 300;
  border-left: 2px solid $color-white;
  margin: 6.4px 0;
  color: $color-default-black;
  @include hover {
    color: $color-dark-blue;
  }
  @include font-size(2);
  &__isActive {
    border-left: 2px solid $color-default-blue;
  }
}
</style>
