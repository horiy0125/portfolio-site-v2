<template>
  <div
    :class="isSmall ? 'a-psRightArrow a-psRightArrow__small' : 'a-psRightArrow'"
  >
    →
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psRightArrow';
#{$block} {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-left: auto;
  border-radius: 50%;
  line-height: 48px;
  text-align: center;
  color: $color-white;
  background: $color-dark-blue;
  &__small {
    width: 36px;
    height: 36px;
    line-height: 36px;
    @include font-size(1.4);
  }
}
</style>
