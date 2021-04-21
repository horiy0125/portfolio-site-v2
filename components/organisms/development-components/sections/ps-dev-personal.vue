<template>
  <ps-section
    class="o-psDevPersonal"
    en-heading="Personal"
    jp-heading="個人で開発したもの"
  >
    <section class="o-psDevPersonal__subSection">
      <ps-second-heading class="o-psDevPersonal__secondHeading">
        LINEbot
        <ps-responsive-break :is-show-sp="true" />
        『なんでもQRくん』
      </ps-second-heading>

      <ps-album :album-images="linebotAlbumImages" />
    </section>

    <section class="o-psDevPersonal__subSection">
      <ps-second-heading class="o-psDevPersonal__secondHeading">
        Portfolio Site (v2)
      </ps-second-heading>

      <ps-album
        :album-images="portfolioAlbumImages"
        :image-aspect="imageAspect.wide"
        :image-fitting="imageFitting.contain"
      />
    </section>

    <section class="o-psDevPersonal__subSection">
      <ps-second-heading class="o-psDevPersonal__secondHeading">
        CA Tech Challenge Store
      </ps-second-heading>

      <ps-album
        :album-images="caAlbumImages"
        :image-aspect="imageAspect.wide"
        :image-fitting="imageFitting.contain"
      />
    </section>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsAlbum from '../../ps-album.vue';
import PsSecondHeading from '~/components/atoms/ps-second-heading.vue';
import linebotAlbumImages from '~/contents/development-page/linebot-album-images';
import portfolioAlbumImages from '~/contents/development-page/portfolio-album-images';
import imageAspect from '~/constants/image-aspect';
import imageFitting from '~/constants/image-fitting';
import caAlbumImages from '~/contents/development-page/ca-album-images';
import PsResponsiveBreak from '~/components/atoms/ps-responsive-break.vue';
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum, PsResponsiveBreak },

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

<style lang="scss" scoped>
$block: '.o-psDevPersonal';
#{$block} {
  &__subSection {
    display: inline-block;
    width: 100%;
  }
  &__secondHeading {
    font-weight: 300;
  }
}
</style>
