<template>
  <section class="o-psSection">
    <h1 class="o-psSection__headings">
      <div class="o-psSection__decoration" />
      <span class="o-psSection__enHeading">{{ enHeading }}</span>
      <span class="o-psSection__jpHeading">{{ jpHeading }}</span>
    </h1>
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    jpHeading: {
      type: String,
      default: '',
    },
    enHeading: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psSection';
#{$block} {
  display: inline-block;
  width: 100%;
  padding-bottom: 32px;
  margin: 24px 0;
  &__headings {
    display: inline-block;
    width: 100%;
    margin-bottom: 64px;
  }
  &__decoration {
    display: inline-block;
    width: 32px;
    height: 2px;
    background: $color-default-blue;
    margin: 0 16px 8px 0;
  }
  &__enHeading {
    font-weight: 400;
    font-family: $en-font;
    margin: 24px 0;
    @include font-size(2.4);
  }
  &__jpHeading {
    font-weight: 300;
    margin-left: 12px;
    @include font-size(2);
    @include mq_sp {
      margin-left: 54px;
    }
  }
}
</style>
