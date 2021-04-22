<template>
  <ps-section
    class="o-psNotFound"
    en-heading="404 Not found."
    jp-heading="ページが見つかりません。"
  >
    <ps-image
      class="o-psNotFound__randomHamster"
      :src="randomHamsterImageSrc"
      alt="404 Hamster"
    />
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
import PsImage from '~/components/atoms/ps-image.vue';
export default Vue.extend({
  components: { PsSection, PsPageSwitcher, PsImage },

  data() {
    return {
      pagePaths,
      stringArrows,
    };
  },

  computed: {
    randomHamsterImageSrc(): string {
      const randomNumber = Math.floor(Math.random() * 2);

      if (randomNumber === 1) {
        return '/images/hamsters/2014-09-10 18.45.22.jpg';
      } else {
        return '/images/hamsters/2014-09-05 18.47.34.jpg';
      }
    },
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
  &__randomHamster {
    width: 100%;
    max-height: 640px;
    padding-bottom: 32px;
    object-fit: cover;
  }
}
</style>
