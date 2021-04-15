<template>
  <div class="m-psShareButtons">
    <ps-twitter-share-button />
    <ps-clipboard-copy-button
      :to-copy-url="toShareData.url"
      @succeeded-sharing="succeededSharing"
      @failed-sharing="failedSharing"
    />
    <ps-web-share-button
      :to-share-data="toShareData"
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
import Vue, { PropType } from 'vue';
import PsClipboardCopyButton from '../../atoms/buttons/ps-clipboard-copy-button.vue';
import PsSnackbar from '../../atoms/ps-snackbar.vue';
import PsTwitterShareButton from '../../atoms/buttons/ps-twitter-share-button.vue';
import PsWebShareButton from '../../atoms/buttons/ps-web-share-button.vue';
import shareMedia from '~/constants/share-media';
import snackbarTypes from '~/constants/snackbar-types';
import WebShareData from '~/types/web-share-data';
export default Vue.extend({
  components: {
    PsTwitterShareButton,
    PsClipboardCopyButton,
    PsWebShareButton,
    PsSnackbar,
  },

  props: {
    toShareData: {
      type: Object as PropType<WebShareData>,
      default: null,
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
      if (media === shareMedia.clipboard) {
        this.showSnackbar = true;
      }
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
