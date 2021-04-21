<template>
  <v-app>
    <div class="t-psSeperateView">
      <ps-side-navigation
        :is-show-only-pc="true"
        :browsed-page-path="browsedPagePath"
      />
      <ps-mobile-header
        :show-menu="showMenu"
        :browsed-page-path="browsedPagePath"
        @switch-menu-showing="switchMenuShowing"
      />

      <div class="t-psSeperateView__contentsOuter">
        <main class="t-psSeperateView__contentsInner">
          <slot />
        </main>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import PsMobileHeader from '../organisms/ps-mobile-header.vue';
import PsSideNavigation from '../organisms/ps-side-navigation.vue';
import domain from '~/config/domain';
export default Vue.extend({
  components: {
    PsSideNavigation,
    PsMobileHeader,
  },

  props: {
    browsedPagePath: {
      type: String,
      required: true,
    },
    browsedPageMetaTitle: {
      type: String,
      default: '',
    },
    blogPostThumbnailUrl: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      showMenu: false,
    };
  },

  head() {
    const siteName = 'Portfolio of Kaito Horiuchi';
    const blogName = 'hori-blog';
    const pageUrl = `${domain}${this.browsedPagePath}`;
    const pageTitleForOgp =
      this.blogPostThumbnailUrl === null
        ? `${this.browsedPageMetaTitle}｜${siteName}`
        : `${this.browsedPageMetaTitle}｜${blogName}`;
    const description =
      this.blogPostThumbnailUrl === null
        ? '学生エンジニア 堀内 凱登 / Kaito Horiuchi (hori) のポートフォリオ・ブログです。'
        : `ブログ記事 『${this.browsedPageMetaTitle}』`;
    const ogpImageUrl =
      this.blogPostThumbnailUrl === null
        ? `${domain}/ogp.jpg`
        : this.blogPostThumbnailUrl;

    return {
      title: this.browsedPageMetaTitle,
      titleTemplate: `%s｜${siteName}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { name: 'og:title', content: pageTitleForOgp },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: pageUrl },
        { name: 'og:image', content: ogpImageUrl },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'og:site_name', content: siteName },
        { name: 'og:description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@horri1520' },
        { name: 'twitter:title', content: pageTitleForOgp },
        { name: 'twitter:url', content: pageUrl },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogpImageUrl },
      ],
    };
  },

  methods: {
    switchMenuShowing(): void {
      this.showMenu = !this.showMenu;
    },
  },
});
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  color: $color-default-black;
}
$block: '.t-psSeperateView';
#{$block} {
  display: inline-block;
  width: 100vw;
  &__contentsOuter {
    display: flex;
    justify-content: center;
    width: 100%;
    @include mq_pc {
      padding-left: 320px;
    }
  }
  &__contentsInner {
    display: inline-block;
    width: 100%;
    max-width: 700px;
    padding: 128px 32px;
  }
}
</style>
