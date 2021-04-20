<template>
  <br :class="computedClass" />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    isShowSp: {
      type: Boolean,
      default: false,
    },
    isShowTablet: {
      type: Boolean,
      default: false,
    },
    isShowPc: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedClass(): string {
      let computedClass = 'a-psResponsiveBreak';

      if (this.isShowSp) {
        computedClass += ' a-psResponsiveBreak__sp';
      }
      if (this.isShowTablet) {
        computedClass += ' a-psResponsiveBreak__tablet';
      }
      if (this.isShowPc) {
        computedClass += ' a-psResponsiveBreak__pc';
      }

      return computedClass;
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psResponsiveBreak';
#{$block} {
  display: none;
  &__sp {
    @include mq_sp {
      display: initial;
    }
  }
  &__tablet {
    @include mq_tablet {
      display: initial;
    }
  }
  &__pc {
    @include mq_pc {
      display: initial;
    }
  }
}
</style>
