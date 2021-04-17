<template>
  <ps-link v-if="href !== ''" class="a-psPageSwitcher" :href="href">
    <ps-arrow :is-small="true" :direction="direction" />
    <span class="a-psPageSwitcher__label">
      <slot />
    </span>
  </ps-link>
</template>

<script lang="ts">
import Vue from 'vue';
import PsArrow from '../ps-arrow.vue';
import PsLink from '../ps-link.vue';
import stringArrows from '~/constants/string-arrows';
export default Vue.extend({
  components: { PsLink, PsArrow },

  props: {
    href: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      default: stringArrows.right,
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psPageSwitcher';
#{$block} {
  align-items: center;
  @include hover {
    letter-spacing: 1px;
  }
  &__label {
    padding: 4px 8px;
    color: $color-dark-blue;
  }
}
</style>
