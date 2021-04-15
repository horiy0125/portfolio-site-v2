<template>
  <ps-section class="o-psAboutCareer" en-heading="Career" jp-heading="経歴">
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
export default Vue.extend({
  components: { PsSection },
});
</script>

<style lang="scss" scoped>
$block: '.o-psAboutCareer';
#{$block} {
  display: inline-block;
}
</style>
