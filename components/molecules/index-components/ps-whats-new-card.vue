<template>
  <article class="m-psWhatsNewCard">
    <ps-time :string-time="publishedAt" />
    <h2>{{ title }}</h2>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import PsTime from '~/components/atoms/ps-time.vue';
export default Vue.extend({
  components: { PsTime },
  props: {
    title: {
      type: String,
      default: '',
    },
    publishedAt: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psWhatsNewCard';
#{$block} {
  display: inline-block;
  width: 100%;
}
</style>
