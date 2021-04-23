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
  display: inline-block;
  width: 100%;
  padding: 32px 0;
  @include mq_pc {
    display: none;
  }
  &__heading {
    font-family: $en-font;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    letter-spacing: 2px;
    @include font-size(2.8);
  }
}
</style>
