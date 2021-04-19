<template>
  <div v-if="albumImages !== []" class="o-psAlbum">
    <ps-album-header
      :album-images="albumImages"
      :chosen-image-index="chosenImageIndex"
      @change-chosen-image="changeChosenImage"
    />

    <main class="o-psAlbum__main">
      <ps-image
        :class="computedImageClass"
        :src="albumImages[chosenImageIndex].src"
        :alt="albumImages[chosenImageIndex].alt"
        :full-width="true"
      />
    </main>

    <ps-album-footer
      :chosen-image-index="chosenImageIndex"
      :maximum-index="maximumIndex"
      :link-url="albumImages[chosenImageIndex].link"
      @change-chosen-image="changeChosenImage"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsImage from '../atoms/ps-image.vue';
import PsAlbumHeader from '../molecules/ps-album-header.vue';
import PsAlbumFooter from '../molecules/ps-album-footer.vue';
import AlbumImage from '~/types/album-image';
import imageAspect from '~/constants/image-aspect';
import imageFitting from '~/constants/image-fitting';
export default Vue.extend({
  components: { PsImage, PsAlbumHeader, PsAlbumFooter },

  props: {
    albumImages: {
      type: Array as PropType<AlbumImage[]>,
      default: [],
    },
    imageAspect: {
      type: String,
      default: imageAspect.standard,
    },
    imageFitting: {
      type: String,
      default: imageFitting.contain,
    },
  },

  data() {
    return {
      chosenImage: this.albumImages[0],
    };
  },

  computed: {
    computedImageClass(): string {
      let imageClass = 'o-psAlbum__image';

      switch (this.imageAspect) {
        case imageAspect.wide:
          imageClass += ' o-psAlbum__imageWide';
          break;
        case imageAspect.standard:
          imageClass += ' o-psAlbum__imageStandard';
          break;
        default:
          break;
      }

      switch (this.imageFitting) {
        case imageFitting.cover:
          imageClass += ' o-psAlbum__imageCover';
          break;
        case imageFitting.contain:
          imageClass += ' o-psAlbum__imageContain';
          break;
        default:
          break;
      }

      return imageClass;
    },
    chosenImageIndex(): number {
      return this.albumImages.indexOf(this.chosenImage);
    },
    maximumIndex(): number {
      return this.albumImages.length - 1;
    },
  },

  methods: {
    changeChosenImage(index: number): void {
      this.chosenImage = this.albumImages[index];
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psAlbum';
#{$block} {
  display: inline-block;
  width: 100%;
  &__main {
    display: inline-block;
    width: 100%;
  }
  &__image {
    width: 100%;
    border: 1px solid $color-border-gray;
    margin: 32px 0;
  }
  &__imageWide {
    height: calc(636px / 16 * 9);
  }
  &__imageStandard {
    height: calc(636px / 4 * 3);
  }
  &__imageContain {
    object-fit: contain;
  }
  &__imageCover {
    object-fit: cover;
  }
}
</style>
