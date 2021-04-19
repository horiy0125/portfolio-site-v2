<template>
  <ps-section
    en-heading="CA Tech Challenge Store"
    jp-heading="2daysハッカソンでの開発"
  >
    <ps-album
      :album-images="caAlbumImages"
      :image-aspect="imageAspect.wide"
      :image-fitting="imageFitting.contain"
    />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsAlbum from '../../ps-album.vue';
import PsSection from '../../ps-section.vue';
import caAlbumImages from '~/contents/development-page/ca-album-images';
import imageAspect from '~/constants/image-aspect';
import imageFitting from '~/constants/image-fitting';
export default Vue.extend({
  components: { PsSection, PsAlbum },

  data() {
    return {
      caAlbumImages,
      imageAspect,
      imageFitting,
    };
  },
});
</script>
