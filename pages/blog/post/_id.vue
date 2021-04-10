<template>
  <ps-seperate-view :browsed-page-path="pagePath">
    <ps-blog-post-detail :post-detail="blogPostDetailViewData" />
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
import blogPostDetailViewModel from '~/view-models/blog-post-detail';
export default Vue.extend({
  components: { PsSeperateView, PsBlogPostDetail },
  async asyncData({ $axios, params }) {
    const id = params.id;
    const url = `${apiEndpoints.posts}/${id}`;

    const res: FetchPostApiResponse = await $axios.$get(url, {
      headers: apiRequestHeaders,
    });

    const blogPostDetailViewData = blogPostDetailViewModel(res);

    const pagePath = `${pagePaths.blogPost}/${id}`;

    return {
      pageUrl: domain + pagePath,
      pagePath,
      blogPostDetailViewData,
    };
  },
});
</script>
