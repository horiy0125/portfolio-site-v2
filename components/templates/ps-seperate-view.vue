<template>
  <v-app>
    <div class="t-psSeperateView">
      <ps-side-navigation
        class="t-psSeperateView__sideNav"
        :browsed-page-path="browsedPagePath"
      />
      <ps-mobile-header
        :show-menu="showMenu"
        :browsed-page-path="browsedPagePath"
        @switch-menu-showing="switchMenuShowing"
      />

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
import PsMobileHeader from '../organisms/ps-mobile-header.vue';
import PsSideNavigation from '../organisms/ps-side-navigation.vue';
export default Vue.extend({
  components: {
    PsSideNavigation,
    PsMobileHeader,
  },

  props: {
    browsedPagePath: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      showMenu: false,
    };
  },

  head() {
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    };
  },

  methods: {
    switchMenuShowing(): void {
      this.showMenu = !this.showMenu;
    },
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
  &__sideNav {
    @include mq_sp {
      display: none;
    }
    @include mq_tablet {
      display: none;
    }
  }
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
