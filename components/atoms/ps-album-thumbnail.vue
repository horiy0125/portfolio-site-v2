<template>
  <button
    v-if="albumImage !== null"
    class="a-psAlbumThumbnail"
    @click="onClickThumbnail(albumImageIndex)"
  >
    <div :class="computedInnerClass">
      <ps-image
        :src="albumImage.src"
        :alt="albumImage.alt"
        class="a-psAlbumThumbnail__image"
        :full-width="false"
      />
    </div>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsImage from './ps-image.vue';
import AlbumImage from '~/types/album-image';
export default Vue.extend({
  components: { PsImage },
  props: {
    albumImage: {
      type: Object as PropType<AlbumImage>,
      default: null,
    },
    albumImageIndex: {
      type: Number,
      default: 0,
    },
    chosenImageIndex: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    computedInnerClass(): string {
      if (this.albumImageIndex === this.chosenImageIndex) {
        return 'a-psAlbumThumbnail__inner a-psAlbumThumbnail__chosenInner';
      }
      return 'a-psAlbumThumbnail__inner';
    },
  },

  methods: {
    onClickThumbnail(index: number): void {
      this.$emit('change-chosen-image', index);
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psAlbumThumbnail';
#{$block} {
  margin: 2px;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid $color-border-gray;
    border-radius: 4px;
    margin: 2px;
  }
  &__chosenInner {
    border: 3px solid $color-dark-blue;
  }
  &__image {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
}
</style>
