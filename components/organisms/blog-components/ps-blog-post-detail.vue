<template>
  <article class="o-psBlogPostDetail">
    <header class="o-psBlogPostDetail__header">
      <p>ブログ記事 >> {{ postDetail.categoryName }}</p>
      <ps-image
        v-if="postDetail.thumbnailUrl !== null"
        :src="postDetail.thumbnailUrl"
      />
      <h1 class="o-psBlogPostDetail__title">
        {{ postDetail.title }}
      </h1>
      <ps-time :string-time="postDetail.publishedAt" />
    </header>
    <ps-blog-post-body :body="postDetail.body" />
    <footer class="o-psBlogPostDetail__footer"></footer>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsTime from '~/components/atoms/ps-time.vue';
import psBlogPostBody from '~/components/molecules/blog-components/ps-blog-post-body.vue';
import BlogPostDetailViewModel from '~/view-models/types/blog-post-detail';
export default Vue.extend({
  components: { psBlogPostBody, PsImage, PsTime },
  props: {
    postDetail: {
      type: Object as PropType<BlogPostDetailViewModel>,
      required: true,
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
  &__footer {
    display: inline-block;
    width: 100%;
  }
}
</style>
