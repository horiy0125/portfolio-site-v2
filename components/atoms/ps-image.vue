<template>
  <img class="a-psImage" :src="src" :alt="alt" decoding="async" />
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
      default: '写真',
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psImage';
#{$block} {
  width: 100%;
}
</style>
