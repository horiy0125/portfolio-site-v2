<template>
  <p class="a-psParagraph">
    <slot />
  </p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
$block: '.a-psParagraph';
#{$block} {
  line-height: 1.8;
}
</style>
