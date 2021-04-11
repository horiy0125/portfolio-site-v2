<template>
  <div class="m-psShareButtons">
    <ps-twitter-share-button />
    <ps-clipboard-copy-button :to-copy-url="toShareUrl" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsClipboardCopyButton from '../atoms/ps-clipboard-copy-button.vue';
import PsTwitterShareButton from '../atoms/ps-twitter-share-button.vue';
export default Vue.extend({
  components: {
    PsTwitterShareButton,
    PsClipboardCopyButton,
  },

  props: {
    toShareUrl: {
      type: String,
      default: '',
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
