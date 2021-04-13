<template>
  <div class="m-psShareButtons">
    <ps-twitter-share-button />
    <ps-clipboard-copy-button
      :to-copy-url="toShareUrl"
      @succeeded-sharing="succeededSharing"
      @failed-sharing="failedSharing"
    />
    <ps-web-share-button
      @succeeded-sharing="succeededSharing"
      @failed-sharing="failedSharing"
    />
    <ps-snackbar
      :show="showSnackbar"
      :message="snackbarMessage"
      :type="snackbarType"
      @set-show-snackbar="setShowSnackbar"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsClipboardCopyButton from '../atoms/ps-clipboard-copy-button.vue';
import PsSnackbar from '../atoms/ps-snackbar.vue';
import PsTwitterShareButton from '../atoms/ps-twitter-share-button.vue';
import PsWebShareButton from '../atoms/ps-web-share-button.vue';
import shareMedia from '~/constants/share-media';
import snackbarTypes from '~/constants/snackbar-types';
export default Vue.extend({
  components: {
    PsTwitterShareButton,
    PsClipboardCopyButton,
    PsWebShareButton,
    PsSnackbar,
  },

  props: {
    toShareUrl: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      showSnackbar: false,
      snackbarMessage: '',
      snackbarType: snackbarTypes.undefined,
    };
  },

  methods: {
    setShowSnackbar(showSnackbar: boolean): void {
      this.showSnackbar = showSnackbar;
    },
    succeededSharing(media: string): void {
      switch (media) {
        case shareMedia.clipboard:
          this.snackbarMessage = 'URLをクリップボードにコピーしました';
          break;
        default:
          break;
      }
      this.snackbarType = snackbarTypes.success;
      this.showSnackbar = true;
    },
    failedSharing(media: string): void {
      switch (media) {
        case shareMedia.clipboard:
          this.snackbarMessage =
            'URLのコピーに失敗しました。もう一度お試しください。';
          break;
        case shareMedia.webShareApi:
          this.snackbarMessage = '共有に失敗しました。もう一度お試しください。';
          break;
        default:
          break;
      }
      this.snackbarType = snackbarTypes.error;
      this.showSnackbar = true;
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psShareButtons';
#{$block} {
  display: inline-block;
}
</style>
