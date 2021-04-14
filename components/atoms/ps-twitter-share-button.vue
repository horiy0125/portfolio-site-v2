<template>
  <button class="a-psTwitterShareButton" @click="openTwitterShareWindow">
    <ps-icon class="a-psTwitterShareButton__icon">mdi-twitter</ps-icon>

    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import PsIcon from './ps-icon.vue';
export default Vue.extend({
  components: { PsIcon },

  methods: {
    openTwitterShareWindow(): void {
      window.open(
        'https://twitter.com/share?ref_src=twsrc%5Etfw',
        'Twitter',
        'width=720,height=480,noopener',
      );
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psTwitterShareButton';
#{$block} {
  padding: 4px;
  margin: 0 4px;
  &__icon {
    @include hover {
      color: $color-twitter;
    }
  }
}
</style>
