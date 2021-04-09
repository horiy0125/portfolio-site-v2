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
    isActive: {
      type: Boolean,
      default: false,
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
  border-left: 2px solid $color-white;
  margin: 6.4px 0;
  color: $color-default-black;
  @include font-size(2);
  &__isActive {
    border-left: 2px solid $color-default-blue;
  }
}
</style>
