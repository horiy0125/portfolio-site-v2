<template>
  <transition>
    <ps-mobile-menu
      v-if="showMenu"
      :browsed-page-path="browsedPagePath"
      @switch-menu-showing="$emit('switch-menu-showing')"
    />

    <header v-else class="o-psMobileHeader">
      <ps-top-link class="o-psMobileHeader__topLink" />
      <button
        class="o-psMobileHeader__button"
        @click="$emit('switch-menu-showing')"
      >
        <ps-icon class="o-psMobileHeader__menuIcon">mdi-menu</ps-icon>
      </button>
    </header>
  </transition>
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
.v-leave-active,
.v-enter-active {
  transition: opacity 0.36s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
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
