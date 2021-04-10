<template>
  <div class="o-psWhatsNew">
    <ps-whats-new-card
      v-for="wn in whatsNew"
      :key="wn.id"
      :published-at="wn.publishedAt"
      :title="wn.title"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import PsWhatsNewCard from '~/components/molecules/index-components/ps-whats-new-card.vue';
import WhatsNewViewModel from '~/view-models/types/whats-new';
export default Vue.extend({
  components: { PsWhatsNewCard },
  props: {
    whatsNew: {
      type: Array as PropType<WhatsNewViewModel[]>,
      default: [],
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psWhatsNew';
#{$block} {
  display: inline-block;
  width: 100%;
}
</style>
