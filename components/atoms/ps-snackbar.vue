<template>
  <v-snackbar v-model="snackbar" :top="top" :color="type">
    {{ message }}
    <template #action="{ attrs }">
      <button v-bind="attrs" @click="$emit('set-show-snackbar', false)">
        <ps-icon>mdi-close</ps-icon>
      </button>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
import PsIcon from './ps-icon.vue';
export default Vue.extend({
  components: { PsIcon },
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
