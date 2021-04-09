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
          <header class="m-psBlogPostCard__cardHeader">
            <ps-time
              class="m-psBlogPostCard__publishedAt"
              :string-time="publishedAt"
            />
            <span class="m-psBlogPostCard__category">{{ category }}</span>
          </header>
          <h1 class="m-psBlogPostCard__title">{{ title }}</h1>
          <div class="m-psBlogPostCard__decorationWrapper">
            <div class="m-psBlogPostCard__decoration">→</div>
          </div>
        </div>
      </article>
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsLink from '~/components/atoms/ps-link.vue';
import PsTime from '~/components/atoms/ps-time.vue';
export default Vue.extend({
  components: { PsImage, PsLink, PsTime },
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
    publishedAt: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
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
    color: $color-default-black;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
    transition: 0.4s all;
    &:hover {
      opacity: 0.92;
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
  &__cardHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__publishedAt {
    font-weight: 400;
  }
  &__category {
    font-weight: 400;
    border: 1px solid $color-border-black;
    padding: 4px 16px;
    border-radius: 28px;
  }
  &__title {
    font-weight: 600;
    margin: 16px 0;
    @include font-size(2.4);
  }
  &__decorationWrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  &__decoration {
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-left: auto;
    border-radius: 50%;
    line-height: 48px;
    text-align: center;
    color: $color-white;
    background: $color-dark-blue;
  }
}
</style>
