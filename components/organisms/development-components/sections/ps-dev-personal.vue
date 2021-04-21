<template>
  <ps-section en-heading="Personal" jp-heading="個人開発">
    <ps-dev-sub-section second-heading="LINEbot『なんでもQRくん』">
      <ps-album :album-images="linebotAlbumImages" />
    </ps-dev-sub-section>

    <ps-dev-sub-section second-heading="Portfolio Site (v2)">
      <ps-album
        :album-images="portfolioAlbumImages"
        :image-aspect="imageAspect.wide"
        :image-fitting="imageFitting.contain"
      />
    </ps-dev-sub-section>

    <ps-dev-sub-section second-heading="CA Tech Challenge Store">
      <ps-album
        :album-images="caAlbumImages"
        :image-aspect="imageAspect.wide"
        :image-fitting="imageFitting.contain"
      />
    </ps-dev-sub-section>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsAlbum from '../../ps-album.vue';
import PsDevSubSection from '../ps-dev-sub-section.vue';
import linebotAlbumImages from '~/contents/development-page/linebot-album-images';
import portfolioAlbumImages from '~/contents/development-page/portfolio-album-images';
import imageAspect from '~/constants/image-aspect';
import imageFitting from '~/constants/image-fitting';
import caAlbumImages from '~/contents/development-page/ca-album-images';
export default Vue.extend({
  components: {
    PsSection,
    PsAlbum,
    PsDevSubSection,
  },

  data() {
    return {
      imageAspect,
      imageFitting,
      linebotAlbumImages,
      portfolioAlbumImages,
      caAlbumImages,
    };
  },
});
</script>
