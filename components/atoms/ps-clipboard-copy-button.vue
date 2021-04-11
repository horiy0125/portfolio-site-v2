<template>
  <button class="a-psClipboardCopyButton" @click="copyUrlToClipboard">
    <v-icon class="a-psClipboardCopyButton__icon"> mdi-content-copy </v-icon>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    toCopyUrl: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      baloonContent: '',
    };
  },

  methods: {
    async copyUrlToClipboard(): Promise<void> {
      await navigator.clipboard.writeText(this.toCopyUrl);
      // const result = copyStringToClipboard(this.toCopyUrl);
      // // if (result === true) {
      // //   this.baloonContent = 'クリップボードにURLをコピーしました！';
      // // } else {
      // //   this.baloonContent =
      // //     'URLのコピーに失敗しました。もう一度お試しください。';
      // // }
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
      color: $color-default-black;
    }
  }
}
</style>
