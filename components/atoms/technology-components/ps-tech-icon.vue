<template>
  <div class="a-psTechIcon">
    <img
      v-if="iconSrc !== null"
      :class="computedIconClass"
      :src="iconSrc"
      :alt="technology.label"
      decoding="async"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Technology from '~/types/technology';

export default Vue.extend({
  props: {
    technology: {
      type: Object as () => Technology,
      default: null,
    },
  },

  computed: {
    computedIconClass(): string {
      if (this.technology === null) {
        return '';
      }
      const usePortraitStyleList = [
        'css',
        'raspi',
        'jupyter',
        'sidekiq',
        'svelte',
        'flutter',
        'firebase',
        'vuetify',
      ];
      const useLandscapeStyleList = [
        'flask',
        'django',
        'python',
        'revpi',
        'cuda',
        'pandas',
        'k3s',
        'docker',
        'mysql',
        'mui',
      ];

      if (usePortraitStyleList.includes(this.technology.name)) {
        return 'a-psTechIcon__portraitIcon';
      } else if (useLandscapeStyleList.includes(this.technology.name)) {
        return 'a-psTechIcon__landscapeIcon';
      } else {
        return 'a-psTechIcon__squareIcon';
      }
    },
    iconSrc(): ImageData | string | null {
      if (this.technology === null) {
        return null;
      }
      switch (this.technology.name) {
        case 'html':
          return require('@/assets/icons/HTML5_Logo.svg');
        case 'css':
          return require('@/assets/icons/css3.png');
        case 'nuxt':
          return require('@/assets/icons/nuxt-icon.png');
        case 'gatsby':
          return require('@/assets/icons/Gatsby_Monogram.png');
        case 'vue':
          return require('@/assets/icons/vuejs.png');
        case 'ts':
          return require('@/assets/icons/ts-logo-512.png');
        case 'js':
          return require('@/assets/icons/js-logo.png');
        case 'next':
          return require('@/assets/icons/next-js.svg');
        case 'react':
        case 'reactnative':
          return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';
        case 'ruby':
          return require('@/assets/icons/ruby.png');
        case 'golang':
          return require('@/assets/icons/Go-Logo_Aqua.svg');
        case 'django':
          return require('@/assets/icons/django-logo-negative.svg');
        case 'flask':
          return require('@/assets/icons/flask.png');
        case 'rails':
          return require('@/assets/icons/rails.png');
        case 'echo':
          return require('@/assets/icons/echo.png');
        case 'python':
          return require('@/assets/icons/python-logo-generic.svg');
        case 'c':
          return require('@/assets/icons/c.png');
        case 'raspi':
          return require('@/assets/icons/RPi-Logo-SCREEN.png');
        case 'revpi':
          return require('@/assets/icons/revpi-logo-300x150.png');
        case 'cam':
          return require('@/assets/icons/imaging_source_dfk-33gp1300-800x800.jpg');
        case 'plc':
          return require('@/assets/icons/plc.png');
        case 'tensorflow':
          return require('@/assets/icons/FullColorPrimary Icon.svg');
        case 'keras':
          return require('@/assets/icons/Keras_logo.svg');
        case 'colab':
          return require('@/assets/icons/colab_favicon_256px.png');
        case 'jupyter':
          return require('@/assets/icons/518px-Jupyter_logo.png');
        case 'cuda':
          return require('@/assets/icons/cuda.jpg');
        case 'numpy':
          return require('@/assets/icons/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png');
        case 'pandas':
          return require('@/assets/icons/pandas.png');
        case 'netlify':
          return require('@/assets/icons/netlify.svg');
        case 'vercel':
          return require('@/assets/icons/6R0-p1Vf_400x400.jpg');
        case 'heroku':
          return require('@/assets/icons/heroku-logo-solid-gradient.svg');
        case 'docker':
          return require('@/assets/icons/vertical-logo-monochromatic.png');
        case 'k8s':
          return require('@/assets/icons/kubernetes.svg');
        case 'k3s':
          return require('@/assets/icons/k3s-icon-color.svg');
        case 'ec2':
          return require('@/assets/icons/Arch_Amazon-EC2_48.svg');
        case 'haml':
          return require('@/assets/icons/free-haml-icon@2x.png');
        case 'jquery':
          return require('@/assets/icons/jquery.png');
        case 'svelte':
          return require('@/assets/icons/svelte-logo.svg');
        case 'mysql':
          return require('@/assets/icons/logo-mysql-170x115.png');
        case 'redis':
          return require('@/assets/icons/redis.png');
        case 'sidekiq':
          return require('@/assets/icons/sidekiq.svg');
        case 'graphql':
          return require('@/assets/icons/GraphQL_Logo.png');
        case 'git':
          return require('@/assets/icons/Git-Icon-1788C.png');
        case 'flutter':
          return require('@/assets/icons/logo_flutter_1080px_clr.svg');
        case 'firebase':
          return require('@/assets/icons/firebase.svg');
        case 'pytorch':
          return require('@/assets/icons/pytorch-logo.png');
        case 'circleci':
          return require('@/assets/icons/circleci.png');
        case 'chakraui':
          return require('@/assets/icons/chakra.png');
        case 'antdesign':
          return require('@/assets/icons/antdesign.png');
        case 'tailwind':
          return require('@/assets/icons/tailwind.png');
        case 'cssmodules':
          return require('@/assets/icons/cssmodules.png');
        case 'mui':
          return require('@/assets/icons/materialui.png');
        case 'styled':
          return require('@/assets/icons/styled-components.png');
        case 'vuetify':
          return require('@/assets/icons/vuetify-logo.png');
        default:
          return null;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psTechIcon';
#{$block} {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  &__squareIcon {
    width: 100%;
    height: 100%;
  }
  &__landscapeIcon {
    width: 100%;
  }
  &__portraitIcon {
    height: 100%;
  }
}
</style>
