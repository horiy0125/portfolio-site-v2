<template>
  <article class="m-psWhatsNewCard">
    <header class="m-psWhatsNewCard__header">
      <ps-time
        class="m-psWhatsNewCard__publishedAt"
        :string-time="publishedAt"
        :seperated-by-slash="false"
      />
      <span class="m-psWhatsNewCard__type">{{ type }}</span>
    </header>

    <main class="m-psWhatsNewCard__main">
      <ps-image
        v-if="thumbnailUrl !== null"
        class="m-psWhatsNewCard__thumbnail"
        :src="thumbnailUrl"
        alt="サムネイル"
        :full-width="false"
      />
      <h2 class="m-psWhatsNewCard__title">{{ title }}</h2>
    </main>

    <footer v-if="link !== null" class="m-psWhatsNewCard__footer">
      <ps-link class="m-psWhatsNewCard__link" :href="link">
        <ps-arrow class="m-psWhatsNewCard__linkArrow" :is-small="true" />
        {{ linkLabel }}
      </ps-link>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import PsArrow from '~/components/atoms/ps-arrow.vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsLink from '~/components/atoms/ps-link.vue';
import PsTime from '~/components/atoms/ps-time.vue';
export default Vue.extend({
  components: { PsTime, PsImage, PsLink, PsArrow },
  props: {
    title: {
      type: String,
      default: '',
    },
    publishedAt: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    thumbnailUrl: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },

  computed: {
    linkLabel(): string {
      return this.type === '記事更新' ? '記事を見る' : 'リンク先を開く';
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psWhatsNewCard';
#{$block} {
  display: inline-block;
  width: 100%;
  margin-bottom: 64px;
  padding: 32px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }
  &__publishedAt {
    font-family: $en-font;
    @include font-size(1.8);
  }
  &__type {
    font-weight: 300;
    border: 1px solid $color-border-black;
    padding: 4px 16px;
    border-radius: 28px;
  }
  &__main {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &__thumbnail {
    width: 192px;
    margin-right: 32px;
  }
  &__title {
    font-weight: 400;
    @include font-size(1.8);
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding-top: 16px;
  }
  &__link {
    color: $color-dark-blue;
    @include hover {
      letter-spacing: 1px;
    }
  }
  &__linkArrow {
    margin-right: 4px;
  }
}
</style>
