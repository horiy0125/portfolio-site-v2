<template>
  <footer v-if="albumImageNumber !== null" class="m-psAlbumFooter">
    <nav class="m-psAlbumFooter__navigation">
      <button @click="onClickPreviousButton()">
        <ps-arrow
          :class="computedLeftArrowClass"
          :direction="stringArrows.left"
          :is-small="true"
        />
      </button>
      <button @click="onClickNextButton()">
        <ps-arrow
          :class="computedRightArrowClass"
          :direction="stringArrows.right"
          :is-small="true"
        />
      </button>
    </nav>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import PsArrow from '../atoms/ps-arrow.vue';
import stringArrows from '~/constants/string-arrows';
export default Vue.extend({
  components: { PsArrow },

  props: {
    chosenImageIndex: {
      type: Number,
      default: 0,
    },
    maximumIndex: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      stringArrows,
    };
  },

  computed: {
    computedRightArrowClass(): string {
      if (this.chosenImageIndex === this.maximumIndex) {
        return 'm-psAlbumFooter__disabledArrow';
      }
      return '';
    },
    computedLeftArrowClass(): string {
      if (this.chosenImageIndex === 0) {
        return 'm-psAlbumFooter__disabledArrow';
      }
      return '';
    },
  },

  methods: {
    onClickPreviousButton(): void {
      if (this.chosenImageIndex !== 0) {
        this.$emit('change-chosen-image', this.chosenImageIndex - 1);
      }
    },
    onClickNextButton(): void {
      if (this.chosenImageIndex !== this.maximumIndex) {
        this.$emit('change-chosen-image', this.chosenImageIndex + 1);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psAlbumFooter';
#{$block} {
  display: inline-block;
  width: 100%;
  padding: 0 32px;
  &__navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__disabledArrow {
    background: $color-disabled;
  }
}
</style>
