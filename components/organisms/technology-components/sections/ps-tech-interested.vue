<template>
  <ps-section en-heading="Interested" jp-heading="今後触ってみたい技術">
    <ps-tech-list :technologies="interestedTechnologies" />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsTechList from '../ps-tech-list.vue';
import interestedTechnologies from '~/contents/technology-page/interested';
export default Vue.extend({
  components: { PsSection, PsTechList },

  data() {
    return {
      interestedTechnologies,
    };
  },
});
</script>
