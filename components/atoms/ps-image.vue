<template>
  <img
    :class="fullWidth ? 'a-psImage a-psImage__fullWidth' : 'a-psImage'"
    :src="src"
    :alt="alt"
    decoding="async"
  />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '画像',
    },
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psImage';
#{$block} {
  &__fullWidth {
    width: 100%;
  }
}
</style>
