<template>
  <v-slide-y-transition>
    <div class="o-psMobileMenu">
      <button
        class="o-psMobileMenu__closeButton"
        @click="$emit('switch-menu-showing')"
      >
        <ps-icon>mdi-close</ps-icon>
      </button>
      <ps-side-navigation :browsed-page-path="browsedPagePath" />
    </div>
  </v-slide-y-transition>
</template>

<script lang="ts">
import Vue from 'vue';
import PsIcon from '../atoms/ps-icon.vue';
import PsSideNavigation from './ps-side-navigation.vue';
export default Vue.extend({
  components: { PsSideNavigation, PsIcon },

  props: {
    browsedPagePath: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psMobileMenu';
#{$block} {
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100vw;
  height: 100vh;
  background: $color-white;
  touch-action: none;
  &__closeButton {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 1;
    padding: 8px;
  }
}
</style>
