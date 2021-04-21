<template>
  <header class="a-psPageHeader">
    <h1 class="a-psPageHeader__heading">
      <slot />
    </h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
$block: '.a-psPageHeader';
#{$block} {
  font-family: $en-font;
  text-transform: uppercase;
  &__heading {
    font-weight: 400;
    @include font-size(2.4);
  }
}
</style>
