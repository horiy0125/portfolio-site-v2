<template>
  <footer v-if="maximumIndex !== null" class="m-psAlbumFooter">
    <nav class="m-psAlbumFooter__navigation">
      <button class="m-psAlbumFooter__button" @click="onClickPreviousButton()">
        <ps-arrow
          :class="computedLeftArrowClass"
          :direction="stringArrows.left"
          :is-small="true"
        />
      </button>
      <ps-link
        v-if="linkUrl !== null"
        class="m-psAlbumFooter__link"
        :href="linkUrl"
      >
        リンクを開く
        <ps-icon class="m-psAlbumFooter__linkIcon"> mdi-open-in-new </ps-icon>
      </ps-link>
      <button class="m-psAlbumFooter__button" @click="onClickNextButton()">
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
import PsLink from '../atoms/ps-link.vue';
import PsIcon from '../atoms/ps-icon.vue';
import stringArrows from '~/constants/string-arrows';
export default Vue.extend({
  components: { PsArrow, PsLink, PsIcon },

  props: {
    chosenImageIndex: {
      type: Number,
      default: 0,
    },
    maximumIndex: {
      type: Number,
      default: null,
    },
    linkUrl: {
      type: String,
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
  padding: 0 64px;
  &__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &__link {
    line-height: 2;
    color: $color-dark-blue;
  }
  &__linkIcon {
    color: $color-dark-blue;
  }
  &__button {
    padding: 2px;
  }
  &__imageIndex {
    @include font-size(1.6);
  }
  &__disabledArrow {
    background: $color-disabled;
  }
}
</style>
