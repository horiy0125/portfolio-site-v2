<template>
  <v-app>
    <div class="t-psSeperateView">
      <ps-side-navigation :browsed-page-path="browsedPagePath" />

      <div class="t-psSeperateView__contentsOuter">
        <main class="t-psSeperateView__contentsInner">
          <slot />
        </main>
      </div>
    </div>
  </v-app>
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

  head() {
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  color: $color-default-black;
}
$block: '.t-psSeperateView';
#{$block} {
  display: inline-block;
  width: 100vw;
  &__contentsOuter {
    display: flex;
    justify-content: center;
    width: 100%;
    @include mq_pc {
      padding-left: 320px;
    }
  }
  &__contentsInner {
    display: inline-block;
    width: 100%;
    max-width: 700px;
    padding: 128px 32px;
  }
}
</style>
