<template>
  <ps-link class="a-psSnsLink" :href="href">
    <img
      v-if="iconSrc !== null"
      class="a-psSnsLink__icon"
      :src="iconSrc"
      :alt="snsName === '' ? 'アイコン' : snsName"
    />
  </ps-link>
</template>

<script lang="ts">
import Vue from 'vue';
import PsLink from '../ps-link.vue';
export default Vue.extend({
  components: { PsLink },
  props: {
    snsName: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },

  computed: {
    iconSrc() {
      switch (this.snsName) {
        case 'AtCoder':
          return require('@/assets/icons/atcoder-icon.png');
        case 'Twitter':
          return require('@/assets/icons/twitter-icon.svg');
        case 'note':
          return require('@/assets/icons/note-icon.png');
        case 'GitHub':
          return require('@/assets/icons/github-icon.png');
        case 'Wantedly':
          return require('@/assets/icons/wantedly-icon.svg');
        case 'Qiita':
          return require('@/assets/icons/qiita-icon.png');
        default:
          return null;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psSnsLink';
#{$block} {
  &__icon {
    width: 28px;
    height: 28px;
    margin: 0 8px;
    @include hover {
      opacity: 0.8;
    }
  }
}
</style>
