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
        />
        <ps-blog-share-buttons :to-share-data="toShareData" />
      </div>
    </header>

    <ps-blog-post-body :body="postDetail.body" />

    <footer class="o-psBlogPostDetail__footer"></footer>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsLink from '~/components/atoms/ps-link.vue';
import PsTime from '~/components/atoms/ps-time.vue';
import psBlogPostBody from '~/components/molecules/blog-components/ps-blog-post-body.vue';
import PsBlogShareButtons from '~/components/molecules/blog-components/ps-blog-share-buttons.vue';
import pagePaths from '~/config/page-paths';
import stringArrows from '~/constants/string-arrows';
import WebShareData from '~/types/web-share-data';
import BlogPostDetailViewModel from '~/view-models/types/blog-post-detail';
export default Vue.extend({
  components: { psBlogPostBody, PsImage, PsTime, PsLink, PsBlogShareButtons },
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
    transition: 0.4s all;
    &:hover {
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
  }
  &__footer {
    display: inline-block;
    width: 100%;
  }
}
</style>
