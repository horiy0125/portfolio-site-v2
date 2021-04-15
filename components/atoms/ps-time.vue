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
    seperatedBySlash: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    datetime(): Date | string {
      return stringToDatetime(this.stringTime);
    },
    localeDate(): string {
      const localeDate = getLocaleDate(this.stringTime);

      if (this.seperatedBySlash === false) {
        const regLocaleDate = localeDate.match(
          /([0-9]{4})(\/)([0-9]{1,2})(\/)([0-9]{1,2})/,
        );
        if (regLocaleDate) {
          if (regLocaleDate.length === 6) {
            return `${regLocaleDate[1]}.${regLocaleDate[3]}.${regLocaleDate[5]}`;
          }
        }
      }

      return localeDate;
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
