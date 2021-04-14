<template>
  <v-snackbar v-model="snackbar" :top="top" :color="type">
    {{ message }}
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    message: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'undefined',
    },
  },

  computed: {
    snackbar: {
      get(): boolean {
        return this.show;
      },
      set(showSnackbar: boolean): void {
        this.$emit('set-show-snackbar', showSnackbar);
      },
    },
  },
});
</script>
