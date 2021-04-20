<template>
  <ps-mobile-menu
    v-if="showMenu"
    :browsed-page-path="browsedPagePath"
    @switch-menu-showing="$emit('switch-menu-showing')"
  />

  <v-slide-y-transition v-else>
    <header class="o-psMobileHeader">
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
});
</script>

<style lang="scss" scoped>
$block: '.o-psMobileHeader';
#{$block} {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 16px 32px;
  border-bottom: 1px solid $color-border-gray;
  background: $color-white;
  &__topLink {
    padding: 0;
    border: none;
  }
  &__button {
    padding: 8px 0 8px 8px;
  }
}
</style>
