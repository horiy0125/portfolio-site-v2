<template>
  <button
    v-if="albumImage !== null"
    :class="computedButtonClass"
    @click="onClickThumbnail(albumImageIndex)"
  >
    <ps-image
      :src="albumImage.src"
      :alt="albumImage.alt"
      class="a-psAlbumThumbnail__image"
      :full-width="false"
    />
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
    computedButtonClass(): string {
      if (this.albumImageIndex === this.chosenImageIndex) {
        return 'a-psAlbumThumbnail a-psAlbumThumbnail__chosen';
      }
      return 'a-psAlbumThumbnail';
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid $color-border-gray;
  border-radius: 4px;
  margin: 4px;
  &__chosen {
    border: 3px solid $color-dark-blue;
  }
  &__image {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
}
</style>
