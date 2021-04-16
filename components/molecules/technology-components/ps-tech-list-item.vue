<template>
  <div v-if="technology !== null" class="m-psTechListItem">
    <ps-tech-icon class="m-psTechListItem__icon" :technology="technology" />
    <p class="m-psTechListItem__label">{{ technology.label }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsTechIcon from '~/components/atoms/technology-components/ps-tech-icon.vue';
import Technology from '~/types/technology';
export default Vue.extend({
  components: { PsTechIcon },

  props: {
    technology: {
      type: Object as PropType<Technology>,
      default: null,
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psTechListItem';
#{$block} {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  &__icon {
    margin-right: 12px;
  }
  &__label {
    display: inline-block;
    font-family: $en-font;
    font-weight: 300;
    margin: 0;
    @include font-size(2.4);
  }
}
</style>
