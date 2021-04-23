<template>
  <ps-not-found-template>
    <ps-not-found />
  </ps-not-found-template>
</template>

<script lang="ts">
import Vue from 'vue';
import PsNotFound from '~/components/organisms/not-found-components/ps-not-found.vue';
import PsNotFoundTemplate from '~/components/templates/ps-not-found-template.vue';
export default Vue.extend({
  components: { PsNotFound, PsNotFoundTemplate },
});
</script>
