<template>
  <h2 :class="computedClass">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    useEnFont: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedClass(): string {
      if (this.useEnFont) {
        return 'a-psSecondHeading a-psSecondHeading__enFont';
      }
      return 'a-psSecondHeading';
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psSecondHeading';
#{$block} {
  &__enFont {
    font-family: $en-font;
    @include font-size(2.4);
  }
}
</style>
