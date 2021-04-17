<template>
  <ps-section
    class="o-psNotFound"
    en-heading="404 Not found."
    jp-heading="ページが見つかりません。"
  >
    <footer class="o-psNotFound__footer">
      <ps-page-switcher :href="pagePaths.top" :direction="stringArrows.left">
        トップページに戻る
      </ps-page-switcher>
    </footer>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../ps-section.vue';
import PsPageSwitcher from '~/components/atoms/buttons/ps-page-switcher.vue';
import pagePaths from '~/config/page-paths';
import stringArrows from '~/constants/string-arrows';
export default Vue.extend({
  components: { PsSection, PsPageSwitcher },

  data() {
    return {
      pagePaths,
      stringArrows,
    };
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psNotFound';
#{$block} {
  &__footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
