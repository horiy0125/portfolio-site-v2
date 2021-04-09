<template>
  <div class="m-psBlogPostCard">
    <ps-link :href="path" class="m-psBlogPostCard__outer">
      <article class="m-psBlogPostCard__inner">
        <ps-image
          v-if="thumbnail !== null"
          class="m-psBlogPostCard__thumbnail"
          :src="thumbnail"
        />
        <div class="m-psBlogPostCard__information">
          <h1 class="m-psBlogPostCard__title">{{ title }}</h1>
        </div>
      </article>
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsLink from '~/components/atoms/ps-link.vue';
export default Vue.extend({
  components: { PsImage, PsLink },
  props: {
    title: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: null,
    },
    path: {
      type: String,
      default: '/',
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psBlogPostCard';
#{$block} {
  display: inline-block;
  width: 100%;
  padding: 0 32px 64px 32px;
  &__outer {
    width: 100%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
    transition: 0.4s all;
    &:hover {
      opacity: 0.8;
      box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.25);
    }
  }
  &__inner {
    width: 100%;
  }
  &__thumbnail {
    height: calc(572px / 1200 * 630);
    object-fit: cover;
  }
  &__information {
    display: inline-block;
    width: 100%;
    padding: 32px;
  }
  &__title {
    color: $color-default-black;
    font-weight: 600;
    @include font-size(2.4);
  }
}
</style>
