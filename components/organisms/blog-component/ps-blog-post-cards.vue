<template>
  <div class="o-psBlogPostCards">
    <ps-blog-post-card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :thumbnail="post.thumbnailUrl"
      :path="post.path"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsBlogPostCard from '~/components/molecules/blog-component/ps-blog-post-card.vue';
import BlogPostCardViewModel from '~/view-models/types/blog-post-card';
export default Vue.extend({
  components: { PsBlogPostCard },

  props: {
    posts: {
      type: Array as PropType<BlogPostCardViewModel[]>,
      default: [],
    },
  },
});
</script>
