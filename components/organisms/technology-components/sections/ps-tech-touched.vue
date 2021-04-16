<template>
  <ps-section
    class="o-psTechTouched"
    en-heading="Touched"
    jp-heading="触れたことのある技術"
  >
    <ps-tech-list
      tech-field="Frontend"
      :technologies="touchedFrontendTechnologies"
    />
    <ps-tech-list
      tech-field="Backend"
      :technologies="touchedBackendTechnologies"
    />
    <ps-tech-list
      tech-field="Other Languages"
      :technologies="touchedOtherTechnologies"
    />
    <ps-tech-list
      tech-field="Hardware"
      :technologies="touchedHardwareTechnologies"
    />
    <ps-tech-list
      tech-field="Infrastructure"
      :technologies="touchedInfrastructureTechnologies"
    />
    <ps-tech-list
      tech-field="Machine Learning"
      :technologies="touchedMLTechnologies"
    />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsTechList from '../ps-tech-list.vue';
import touchedFrontendTechnologies from '~/contents/technology-page/touched/frontend';
import touchedBackendTechnologies from '~/contents/technology-page/touched/backend';
import touchedOtherTechnologies from '~/contents/technology-page/touched/other';
import touchedHardwareTechnologies from '~/contents/technology-page/touched/hardware';
import touchedInfrastructureTechnologies from '~/contents/technology-page/touched/infrastructure';
import touchedMLTechnologies from '~/contents/technology-page/touched/ml';
export default Vue.extend({
  components: { PsSection, PsTechList },

  data() {
    return {
      touchedFrontendTechnologies,
      touchedBackendTechnologies,
      touchedOtherTechnologies,
      touchedHardwareTechnologies,
      touchedInfrastructureTechnologies,
      touchedMLTechnologies,
    };
  },
});
</script>
