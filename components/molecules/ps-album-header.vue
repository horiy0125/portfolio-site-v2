<template>
  <header v-if="albumImages !== []" class="m-psAlbumHeader">
    <nav class="m-psAlbumHeader__navigation">
      <ps-album-thumbnail
        v-for="(albumImage, index) in albumImages"
        :key="index"
        :album-image="albumImage"
        :album-image-index="index"
        :chosen-image-index="chosenImageIndex"
        @change-chosen-image="changeChosenImage"
      />
    </nav>
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsAlbumThumbnail from '../atoms/ps-album-thumbnail.vue';
import AlbumImage from '~/types/album-image';
export default Vue.extend({
  components: { PsAlbumThumbnail },

  props: {
    albumImages: {
      type: Array as PropType<AlbumImage[]>,
      default: [],
    },
    chosenImageIndex: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    changeChosenImage(index: number): void {
      this.$emit('change-chosen-image', index);
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psAlbumHeader';
#{$block} {
  display: inline-block;
  width: 100%;
  &__navigation {
    display: flex;
  }
}
</style>
