<template>
  <div v-if="technologies !== []" class="o-psTechList">
    <ps-tech-list-item
      v-for="(technology, index) in technologies"
      :key="index"
      :technology="technology"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsTechListItem from '~/components/molecules/technology-components/ps-tech-list-item.vue';
import Technology from '~/types/technology';
export default Vue.extend({
  components: { PsTechListItem },

  props: {
    technologies: {
      type: Array as PropType<Technology[]>,
      default: [],
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psTechList';
#{$block} {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
