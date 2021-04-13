<template>
  <button class="a-psWebShareButton" @click="callWebShareApi">
    <ps-icon class="a-psWebShareButton__icon">mdi-share-variant</ps-icon>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsIcon from './ps-icon.vue';
import WebShareData from '~/types/web-share-data';
import shareMedia from '~/constants/share-media';
export default Vue.extend({
  components: { PsIcon },

  props: {
    toShareData: {
      type: Object as PropType<WebShareData>,
      default: null,
    },
  },

  methods: {
    callWebShareApi(): void {
      if (this.toShareData === null) {
        this.$emit('failed-sharing', shareMedia.webShareApi);
      } else {
        navigator.share();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psWebShareButton';
#{$block} {
  padding: 4px;
  margin: 0 4px;
  &__icon {
    transition: 0.4s all;
    &:hover {
      color: $color-default-blue;
    }
  }
}
</style>
