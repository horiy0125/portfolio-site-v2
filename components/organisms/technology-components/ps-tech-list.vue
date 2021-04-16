<template>
  <div v-if="techField !== '' && technologies !== []" class="o-psTechList">
    <ps-second-heading class="o-psTechList__heading" :use-en-font="true">
      {{ techField }}
    </ps-second-heading>
    <div class="o-psTechList__techListWrapper">
      <ps-tech-list-item
        v-for="(technology, index) in technologies"
        :key="index"
        :technology="technology"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsSecondHeading from '~/components/atoms/ps-second-heading.vue';
import PsTechListItem from '~/components/molecules/technology-components/ps-tech-list-item.vue';
import Technology from '~/types/technology';
export default Vue.extend({
  components: { PsSecondHeading, PsTechListItem },

  props: {
    techField: {
      type: String,
      default: '',
    },
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
  display: inline-block;
  width: 100%;
  padding: 16px 0;
  &__heading {
    font-weight: 400;
  }
  &__techListWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 32px 0;
  }
}
</style>
