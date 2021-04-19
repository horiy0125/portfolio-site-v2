<template>
  <ps-section en-heading="Portfolio Site" jp-heading="このポートフォリオサイト">
    <ps-album
      :album-images="portfolioAlbumImages"
      :image-aspect="imageAspect.wide"
      :image-fitting="imageFitting.contain"
    />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsAlbum from '../../ps-album.vue';
import PsSection from '../../ps-section.vue';
import imageAspect from '~/constants/image-aspect';
import imageFitting from '~/constants/image-fitting';
import portfolioAlbumImages from '~/contents/development-page/portfolio-album-images';
export default Vue.extend({
  components: { PsSection, PsAlbum },

  data() {
    return {
      portfolioAlbumImages,
      imageAspect,
      imageFitting,
    };
  },
});
</script>
