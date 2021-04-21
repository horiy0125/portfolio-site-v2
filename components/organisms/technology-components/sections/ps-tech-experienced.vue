<template>
  <ps-section en-heading="Experienced" jp-heading="馴染みのある技術">
    <ps-tech-list :technologies="experiencedTechnologies" />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsTechList from '../ps-tech-list.vue';
import experiencedTechnologies from '~/contents/technology-page/experienced';
export default Vue.extend({
  components: { PsSection, PsTechList },

  data() {
    return {
      experiencedTechnologies,
    };
  },
});
</script>
