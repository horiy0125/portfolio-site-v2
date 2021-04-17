<template>
  <article class="o-psBlogPostDetail">
    <header class="o-psBlogPostDetail__header">
      <div class="o-psBlogPostDetail__pageStepper">
        <ps-link class="o-psBlogPostDetail__blogLink" :href="pagePaths.blog">
          ブログ記事
        </ps-link>
        <span class="o-psBlogPostDetail__stepperDivider">
          {{ stringArrows.right }}
        </span>
        <span class="o-psBlogPostDetail__categoryName">
          {{ postDetail.categoryName }}
        </span>
      </div>
      <ps-image
        v-if="postDetail.thumbnailUrl !== null"
        :src="postDetail.thumbnailUrl"
        alt="サムネイル"
      />
      <h1 class="o-psBlogPostDetail__title">
        {{ postDetail.title }}
      </h1>
      <div class="o-psBlogPostDetail__subHeader">
        <ps-time
          class="o-psBlogPostDetail__publishedAt"
          :string-time="postDetail.publishedAt"
          :seperated-by-slash="false"
        />
        <ps-blog-share-buttons :to-share-data="toShareData" />
      </div>
    </header>

    <ps-blog-post-body :body="postDetail.body" />

    <ps-divider />

    <footer class="o-psBlogPostDetail__footer">
      <ps-page-switcher :href="pagePaths.blog" :direction="stringArrows.left">
        ブログ記事一覧に戻る
      </ps-page-switcher>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsPageSwitcher from '~/components/atoms/buttons/ps-page-switcher.vue';
import PsDivider from '~/components/atoms/ps-divider.vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsLink from '~/components/atoms/ps-link.vue';
import PsTime from '~/components/atoms/ps-time.vue';
import PsBlogPostBody from '~/components/molecules/blog-components/ps-blog-post-body.vue';
import PsBlogShareButtons from '~/components/molecules/blog-components/ps-blog-share-buttons.vue';
import pageNames from '~/config/page-names';
import pagePaths from '~/config/page-paths';
import stringArrows from '~/constants/string-arrows';
import WebShareData from '~/types/web-share-data';
import BlogPostDetailViewModel from '~/view-models/types/blog-post-detail';
export default Vue.extend({
  components: {
    PsBlogPostBody,
    PsImage,
    PsTime,
    PsLink,
    PsBlogShareButtons,
    PsDivider,
    PsPageSwitcher,
  },
  props: {
    postDetail: {
      type: Object as PropType<BlogPostDetailViewModel>,
      required: true,
    },
    pageUrl: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      pagePaths,
      stringArrows,
      pageNames,
    };
  },

  computed: {
    toShareData(): WebShareData {
      const webShareData: WebShareData = {
        url: this.pageUrl,
        title: 'hori-blog',
        text: `${this.postDetail.title}｜hori-blog`,
      };

      return webShareData;
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psBlogPostDetail';
#{$block} {
  display: inline-block;
  width: 100%;
  &__header {
    display: inline-block;
    width: 100%;
  }
  &__pageStepper {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 0 16px 16px;
  }
  &__blogLink {
    color: $color-default-black;
    @include hover {
      color: $color-default-blue;
    }
  }
  &__stepperDivider {
    padding: 0 12px;
  }
  &__categoryName {
    font-weight: 300;
    border: 1px solid $color-border-black;
    padding: 4px 16px;
    border-radius: 28px;
  }
  &__title {
    font-weight: 700;
    padding: 24px 0;
  }
  &__subHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }
  &__publishedAt {
    display: inline-block;
    font-family: $en-font;
    padding-top: 2px;
    @include font-size(1.8);
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 32px 0;
  }
}
</style>
