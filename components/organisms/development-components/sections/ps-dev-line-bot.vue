<template>
  <ps-section en-heading="LINE bot" jp-heading="『なんでもQRくん』">
    <ps-album :album-images="linebotAlbumImages" />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsAlbum from '../../ps-album.vue';
import PsSection from '../../ps-section.vue';
import linebotAlbumImages from '~/contents/development-page/linebot-album-images';
export default Vue.extend({
  components: { PsSection, PsAlbum },

  data() {
    return {
      linebotAlbumImages,
    };
  },
});
</script>
