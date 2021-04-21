<template>
  <ps-section en-heading="Team" jp-heading="チーム開発">
    <ps-dev-sub-section></ps-dev-sub-section>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsDevSubSection from '../ps-dev-sub-section.vue';
export default Vue.extend({
  components: { PsSection, PsDevSubSection },
});
</script>
