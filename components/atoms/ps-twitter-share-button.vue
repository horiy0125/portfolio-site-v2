<template>
  <button class="a-psTwitterShareButton">
    <v-icon class="a-psTwitterShareButton__icon"> mdi-twitter </v-icon>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
$block: '.a-psTwitterShareButton';
#{$block} {
  padding: 4px;
  margin: 0 4px;
  &__icon {
    transition: 0.4s all;
    &:hover {
      color: $color-twitter;
    }
  }
}
</style>
