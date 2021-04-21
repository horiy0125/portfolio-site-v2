<template>
  <ps-section
    class="o-psTechTouched"
    en-heading="Touched"
    jp-heading="触ったことのある技術"
  >
    <ps-tech-list :technologies="touchedTechnologies" />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsTechList from '../ps-tech-list.vue';
import touchedTechnologies from '~/contents/technology-page/touched';
export default Vue.extend({
  components: { PsSection, PsTechList },

  data() {
    return {
      touchedTechnologies,
    };
  },
});
</script>
