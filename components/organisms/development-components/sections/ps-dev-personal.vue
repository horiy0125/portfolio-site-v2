<template>
  <ps-section en-heading="Personal" jp-heading="個人開発">
    <ps-dev-sub-section second-heading="LINEbot『なんでもQRくん』">
      <ps-album :album-images="linebotAlbumImages" />
      <ps-paragraph>
        送った文字をQRコードに変換してくれるLINEbot。
        <br />
        Flask(Python)で開発、LINE Messaging
        APIを用いてLINEと連携している。デプロイ先はHeroku。
        <br />
        画像3枚目のQRコードで友だち登録できるので是非。
      </ps-paragraph>
    </ps-dev-sub-section>

    <ps-dev-sub-section second-heading="Portfolio Site (v2)">
      <ps-album :album-images="portfolioAlbumImages" />
      <ps-paragraph>
        このポートフォリオサイト。Nuxt.js(TypeScript)で開発し、Vercelにデプロイしている。
        <br />
        v1→v2にリニューアルした際に、microCMSを導入してブログ記事やお知らせなどを管理できるようにした。
        <br />
        こちらの
        <strong>
          <ps-link href="/blog/posts/csuho40r7wt">ブログ記事</ps-link>
        </strong>
        も是非。
      </ps-paragraph>
    </ps-dev-sub-section>

    <ps-dev-sub-section second-heading="CA Tech Challenge Store">
      <ps-album
        :album-images="caAlbumImages"
        :image-aspect="imageAspect.wide"
      />
      <ps-paragraph>
        Webフロント向けの2days ハッカソン型式のインターンにて開発したECサイト。
        <br />
        Nuxt.js(TypeScript)で開発し、Vercelにデプロイしている。
        <br />
        用意されたAPIを使って2日間でECサイトを開発し、その完成度を競うインターンだった。チーム開発を意識した開発環境（linterや命名規則など）やUI/UX面を評価していただき、3位入賞となりとても嬉しかった。
      </ps-paragraph>
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
import PsParagraph from '~/components/atoms/ps-paragraph.vue';
import PsLink from '~/components/atoms/ps-link.vue';
export default Vue.extend({
  components: {
    PsSection,
    PsAlbum,
    PsDevSubSection,
    PsParagraph,
    PsLink,
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
