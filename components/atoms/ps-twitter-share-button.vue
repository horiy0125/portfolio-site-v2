<template>
  <button class="a-psTwitterShareButton">
    <ps-icon class="a-psTwitterShareButton__icon">mdi-twitter</ps-icon>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import PsIcon from './ps-icon.vue';
export default Vue.extend({
  components: { PsIcon },
});
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
