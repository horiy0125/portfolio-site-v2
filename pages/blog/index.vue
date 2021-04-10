<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-section en-heading="Blog Posts" jp-heading="ブログ記事">
      <ps-blog-post-cards :posts="blogPostCardViewData" />
    </ps-section>
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsBlogPostCards from '~/components/organisms/blog-component/ps-blog-post-cards.vue';
import PsSection from '~/components/organisms/ps-section.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import apiEndpoints from '~/config/api/api-endpoints';
import apiRequestHeaders from '~/config/api/api-request-headers';
import pagePaths from '~/constants/page-paths';
import FetchPostsApiResponse from '~/types/config/api/fetch-posts';
import FetchQiitaPostsApiResponse from '~/types/config/api/fetch-qiita-posts';
import blogPostCardViewModel from '~/view-models/blog-post-card';
import BlogPostCardViewModel from '~/view-models/types/blog-post-card';
import newestSortPosts from '~/view-models/utils/newest-sort-posts';
export default Vue.extend({
  components: { PsSeperateView, PsSection, PsBlogPostCards },

  async asyncData({ $axios }) {
    const postsRes: FetchPostsApiResponse = await $axios.$get(
      apiEndpoints.posts,
      {
        headers: apiRequestHeaders,
      },
    );

    const qiitaPostsRes: FetchQiitaPostsApiResponse = await $axios.$get(
      apiEndpoints.qiita_posts,
      {
        headers: apiRequestHeaders,
      },
    );

    const blogPostCardViewData: BlogPostCardViewModel[] = blogPostCardViewModel(
      postsRes.contents,
      qiitaPostsRes.contents,
    );

    blogPostCardViewData.sort((a, b) => newestSortPosts(a, b));

    return {
      blogPostCardViewData,
    };
  },

  data() {
    return {
      browsedPagePath: pagePaths.blog,
    };
  },
});
</script>
