<template>
  <time class="a-psTime" :datetime="typeof datetime === '' ? null : datetime">
    {{ localeDate }}
  </time>
</template>

<script lang="ts">
import Vue from 'vue';
import getLocaleDate from '~/utils/get-locale-date';
import stringToDatetime from '~/utils/string-to-datetime';
export default Vue.extend({
  props: {
    stringTime: {
      type: String,
      default: '',
    },
  },

  computed: {
    datetime(): Date | string {
      return stringToDatetime(this.stringTime);
    },
    localeDate(): string {
      return getLocaleDate(this.stringTime);
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.a-psTime';
#{$block} {
  display: inline-block;
}
</style>
