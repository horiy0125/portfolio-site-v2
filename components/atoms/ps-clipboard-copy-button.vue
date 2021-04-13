<template>
  <button class="a-psClipboardCopyButton" @click="copyUrlToClipboard">
    <ps-icon class="a-psClipboardCopyButton__icon">mdi-content-copy</ps-icon>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import PsIcon from './ps-icon.vue';
import copyStringToClipboard from '~/utils/copy-string-to-clipboard';
import shareMedia from '~/constants/share-media';
export default Vue.extend({
  components: { PsIcon },
  props: {
    toCopyUrl: {
      type: String,
      default: '',
    },
  },

  methods: {
    async copyUrlToClipboard(): Promise<void> {
      const succeededCopy = await copyStringToClipboard(this.toCopyUrl);
      if (succeededCopy) {
        this.$emit('succeeded-sharing', shareMedia.clipboard);
      } else {
        this.$emit('failed-sharing', shareMedia.clipboard);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psClipboardCopyButton';
#{$block} {
  padding: 4px;
  margin: 0 4px;
  &__icon {
    transition: 0.4s all;
    &:hover {
      color: $color-default-green;
    }
  }
}
</style>
