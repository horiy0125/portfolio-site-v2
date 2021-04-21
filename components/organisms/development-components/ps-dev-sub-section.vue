<template>
  <section class="o-psDevSubSection">
    <ps-second-heading class="o-psDevSubSection__secondHeading">
      {{ secondHeading }}
    </ps-second-heading>
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import psSecondHeading from '~/components/atoms/ps-second-heading.vue';
export default Vue.extend({
  components: { psSecondHeading },
  props: {
    secondHeading: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psDevSubSection';
#{$block} {
  display: inline-block;
  width: 100%;
  &__secondHeading {
    font-weight: 300;
  }
}
</style>
