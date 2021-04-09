<template>
  <div>{{ fetchedPost }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import apiEndpoints from '~/config/api/api-endpoints';
import apiRequestHeaders from '~/config/api/api-request-headers';
import FetchPostApiResponse from '~/types/config/api/fetch-post';
export default Vue.extend({
  async asyncData({ $axios, params }) {
    const id = params.id;
    const url = `${apiEndpoints.posts}/${id}`;

    const res: FetchPostApiResponse = await $axios.$get(url, {
      headers: apiRequestHeaders,
    });

    return {
      fetchedPost: res,
    };
  },
});
</script>
