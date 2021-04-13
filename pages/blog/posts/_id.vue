<template>
  <ps-seperate-view :browsed-page-path="pagePath">
    <div v-if="invalidPostId">404 Not found.</div>
    <ps-blog-post-detail
      v-else
      :page-url="pageUrl"
      :post-detail="blogPostDetailViewData"
    />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsBlogPostDetail from '~/components/organisms/blog-components/ps-blog-post-detail.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import apiEndpoints from '~/config/api/api-endpoints';
import apiRequestHeaders from '~/config/api/api-request-headers';
import domain from '~/config/domain';
import pagePaths from '~/config/page-paths';
import FetchPostApiResponse from '~/types/config/api/fetch-post';
import FetchPostsApiResponse from '~/types/config/api/fetch-posts';
import blogPostDetailViewModel from '~/view-models/blog-post-detail';
export default Vue.extend({
  components: { PsSeperateView, PsBlogPostDetail },

  async asyncData({ $axios, params }) {
    const postsRes: FetchPostsApiResponse = await $axios.$get(
      apiEndpoints.posts,
      {
        headers: apiRequestHeaders,
      },
    );

    const validPostIds: string[] = [];

    postsRes.contents.forEach(post => {
      validPostIds.push(post.id);
    });

    const id = params.id;

    if (validPostIds.includes(id)) {
      const postRes: FetchPostApiResponse = await $axios.$get(
        `${apiEndpoints.posts}/${id}`,
        {
          headers: apiRequestHeaders,
        },
      );

      const blogPostDetailViewData = blogPostDetailViewModel(postRes);

      const pagePath = `${pagePaths.blogPost}/${id}`;

      return {
        pageUrl: domain + pagePath,
        pagePath,
        blogPostDetailViewData,
        invalidPostId: false,
      };
    }
    return {
      invalidPostId: true,
      pagePath: pagePaths.notFound,
    };
  },
});
</script>
