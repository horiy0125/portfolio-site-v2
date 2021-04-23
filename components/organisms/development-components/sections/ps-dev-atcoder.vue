<template>
  <ps-section en-heading="AtCoder" jp-heading="競技プログラミング">
    <ps-album :album-images="atcoderAlbumImages" />
    <ps-paragraph>
      アルゴリズムとデータ構造について知識をつけたいと思い、AtCoderのコンテストにできる限り参加している。
      <br />
      初参加から1年ほど経ってようやく入茶することができ、とても嬉しかった。
      <br />
      がっつり精進しているわけではないので進歩は遅いが、これからも自分のペースで頑張っていきたい。
    </ps-paragraph>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsAlbum from '../../ps-album.vue';
import PsParagraph from '~/components/atoms/ps-paragraph.vue';
import atcoderAlbumImages from '~/contents/development-page/atcoder-album-images';
export default Vue.extend({
  components: { PsSection, PsParagraph, PsAlbum },

  data() {
    return {
      atcoderAlbumImages,
    };
  },
});
</script>
