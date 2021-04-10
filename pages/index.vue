<template>
  <ps-seperate-view :browsed-page-path="browsedPagePath">
    <ps-section en-heading="What's new" jp-heading="新着情報">
      <ps-whats-new :whats-new="whatsNewViewData" />
    </ps-section>
  </ps-seperate-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PsWhatsNew from '~/components/organisms/index-components/ps-whats-new.vue';
import PsSection from '~/components/organisms/ps-section.vue';
import PsSeperateView from '~/components/templates/ps-seperate-view.vue';
import apiEndpoints from '~/config/api/api-endpoints';
import apiRequestHeaders from '~/config/api/api-request-headers';
import pagePaths from '~/config/page-paths';
import FetchInfoNoticeApiResponse from '~/types/config/api/fetch-info-notice';
import FetchPostsApiResponse from '~/types/config/api/fetch-posts';
import FetchQiitaPostsApiResponse from '~/types/config/api/fetch-qiita-posts';
import WhatsNewViewModel from '~/view-models/types/whats-new';
import newestSortPosts from '~/view-models/utils/newest-sort-posts';
import whatsNewViewModel from '~/view-models/whats-new';
export default Vue.extend({
  components: { PsSeperateView, PsSection, PsWhatsNew },

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

    const infoNoticeRes: FetchInfoNoticeApiResponse = await $axios.$get(
      apiEndpoints.info_notice,
      {
        headers: apiRequestHeaders,
      },
    );

    const whatsNewViewData: WhatsNewViewModel[] = whatsNewViewModel(
      postsRes.contents,
      qiitaPostsRes.contents,
      infoNoticeRes.contents,
    );

    whatsNewViewData.sort((a, b) => newestSortPosts(a, b));

    return {
      whatsNewViewData:
        whatsNewViewData.length > 3
          ? whatsNewViewData.slice(0, 3)
          : whatsNewViewData,
    };
  },

  data() {
    return {
      browsedPagePath: pagePaths.top,
    };
  },
});
</script>
