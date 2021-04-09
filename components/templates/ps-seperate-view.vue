<template>
  <div class="t-psSeperateView">
    <ps-side-navigation :browsed-page-path="browsedPagePath" />

    <div class="t-psSeperateView__contentsOuter">
      <main class="t-psSeperateView__contentsInner">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSideNavigation from '../organisms/ps-side-navigation.vue';
export default Vue.extend({
  components: {
    PsSideNavigation,
  },

  props: {
    browsedPagePath: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.t-psSeperateView';
#{$block} {
  display: inline-block;
  width: 100vw;
  &__contentsOuter {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 320px;
  }
  &__contentsInner {
    display: inline-block;
    width: 700px;
    padding: 128px 32px;
  }
}
</style>
