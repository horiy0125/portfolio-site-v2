<template>
  <button class="a-psClipboardCopyButton" @click="copyUrlToClipboard">
    <v-icon class="a-psClipboardCopyButton__icon"> mdi-content-copy </v-icon>
    <ps-snackbar
      :show="showSnackbar"
      :message="snackbarMessage"
      :type="snackbarType"
      @set-show-snackbar="setShowSnackbar"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSnackbar from './ps-snackbar.vue';
import copyStringToClipboard from '~/utils/copy-string-to-clipboard';
export default Vue.extend({
  components: { PsSnackbar },
  props: {
    toCopyUrl: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      snackbarMessage: '',
      showSnackbar: false,
      snackbarType: '',
    };
  },

  methods: {
    setShowSnackbar(showSnackbar: boolean): void {
      this.showSnackbar = showSnackbar;
    },
    async copyUrlToClipboard(): Promise<void> {
      const succeededCopy = await copyStringToClipboard(this.toCopyUrl);
      if (succeededCopy) {
        this.snackbarMessage = 'URLをクリップボードにコピーしました';
        this.snackbarType = 'success';
      } else {
        this.snackbarMessage =
          'URLのコピーに失敗しました。もう一度お試しください。';
        this.snackbarType = 'error';
      }
      this.setShowSnackbar(true);
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
