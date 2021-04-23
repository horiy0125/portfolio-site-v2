<template>
  <ps-not-found-template v-if="invalidPostId">
    <ps-not-found />
  </ps-not-found-template>
  <ps-seperate-view
    v-else
    :browsed-page-path="pagePath"
    :browsed-page-meta-title="browsedPageMetaTitle"
    :blog-post-thumbnail-url="blogPostThumbnailUrl"
  >
    <ps-blog-post-detail
      :page-url="pageUrl"
      :post-detail="blogPostDetailViewData"
    />
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import PsBlogPostDetail from '~/components/organisms/blog-components/ps-blog-post-detail.vue';
import PsNotFound from '~/components/organisms/not-found-components/ps-not-found.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import apiEndpoints from '~/config/api/api-endpoints';
import apiRequestHeaders from '~/config/api/api-request-headers';
import domain from '~/config/domain';
import pagePaths from '~/config/page-paths';
import FetchPostApiResponse from '~/types/config/api/fetch-post';
import FetchPostsApiResponse from '~/types/config/api/fetch-posts';
import blogPostDetailViewModel from '~/view-models/blog-post-detail';
import PsNotFoundTemplate from '~/components/templates/ps-not-found-template.vue';
export default Vue.extend({
  components: {
    PsSeperateView,
    PsBlogPostDetail,
    PsNotFound,
    PsNotFoundTemplate,
  },

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

      const $ = cheerio.load(blogPostDetailViewData.body);
      $('pre code').each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text());
        $(elm).html(result.value);
        $(elm).addClass('hljs');
      });

      blogPostDetailViewData.body = $.html();

      const pagePath = `${pagePaths.blogPost}/${id}`;

      return {
        pageUrl: domain + pagePath,
        pagePath,
        browsedPageMetaTitle: blogPostDetailViewData.title,
        blogPostThumbnailUrl: blogPostDetailViewData.thumbnailUrl,
        blogPostDetailViewData,
        invalidPostId: false,
      };
    }
    return {
      invalidPostId: true,
    };
  },
});
</script>
