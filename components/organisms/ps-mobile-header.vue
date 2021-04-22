<template>
  <ps-mobile-menu
    v-if="showMenu"
    :browsed-page-path="browsedPagePath"
    @switch-menu-showing="$emit('switch-menu-showing')"
  />

  <v-slide-y-transition v-else>
    <header :class="computedHeaderClass">
      <ps-top-link class="o-psMobileHeader__topLink" />
      <button
        class="o-psMobileHeader__button"
        @click="$emit('switch-menu-showing')"
      >
        <ps-icon class="o-psMobileHeader__menuIcon">mdi-menu</ps-icon>
      </button>
    </header>
  </v-slide-y-transition>
</template>

<script lang="ts">
import Vue from 'vue';
import PsIcon from '../atoms/ps-icon.vue';
import PsTopLink from '../atoms/ps-top-link.vue';
import PsMobileMenu from './ps-mobile-menu.vue';
import pagePaths from '~/config/page-paths';
export default Vue.extend({
  components: { PsTopLink, PsIcon, PsMobileMenu },

  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
    browsedPagePath: {
      type: String,
      required: true,
    },
  },

  computed: {
    computedHeaderClass(): string {
      if (this.browsedPagePath === pagePaths.notFound) {
        return 'o-psMobileHeader o-psMobileHeader__absolute';
      }
      return 'o-psMobileHeader';
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psMobileHeader';
#{$block} {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 16px 32px;
  border-bottom: 1px solid $color-border-gray;
  background: $color-white;
  @include mq_pc {
    display: none;
  }
  &__absolute {
    position: absolute;
  }
  &__topLink {
    padding: 0;
    border: none;
    display: inline-block;
    width: auto;
  }
  &__button {
    padding: 8px 0 8px 8px;
  }
}
</style>
