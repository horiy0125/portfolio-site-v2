<template>
  <div class="t-psNotFoundTemplate">
    <div class="t-psNotFoundTemplate__contentsWrapper">
      <main class="t-psNotFoundTemplate__contents">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import pageMetaTitles from '~/config/page-meta-titles';
export default Vue.extend({
  head() {
    const siteName = 'Portfolio of Kaito Horiuchi';
    const metaTitle = pageMetaTitles.notFound;

    return {
      title: metaTitle,
      titleTemplate: `%s｜${siteName}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
$block: '.t-psNotFoundTemplate';
#{$block} {
  display: inline-block;
  width: 100vw;
  &__contentsWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &__contents {
    display: inline-block;
    width: 100%;
    max-width: 800px;
    padding: 64px 32px 32px 32px;
  }
}
</style>
