<template>
  <a is="nuxt-link" v-if="isNuxtLink" class="a-psLink" :to="href">
    <slot />
  </a>
  <a
    v-else
    class="a-psLink"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    href: {
      type: String,
      default: '',
    },
  },

  computed: {
    isNuxtLink(): boolean {
      if (this.href.includes('http')) {
        return false;
      }
      return true;
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psLink';
#{$block} {
  text-decoration: none;
  display: inline-block;
}
</style>
