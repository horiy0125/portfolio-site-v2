<template>
  <ps-section
    class="o-psAboutProfile"
    en-heading="Profile"
    jp-heading="プロフィール"
  >
    <ps-image src="/images/childhood.jpg" alt="子供時代" />
    <ps-profile-header />

    <ul class="o-psAboutProfile__list">
      <li
        v-for="(listItem, index) in profileList"
        :key="index"
        class="o-psAboutProfile__listItem"
      >
        <h3 class="o-psAboutProfile__listItemKey">{{ listItem.key }}</h3>
        <p class="o-psAboutProfile__listItemValue">{{ listItem.value }}</p>
      </li>
    </ul>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsImage from '~/components/atoms/ps-image.vue';
import PsProfileHeader from '~/components/molecules/about-components/ps-profile-header.vue';
import profileList from '~/contents/about-page/profile-list';
export default Vue.extend({
  components: { PsImage, PsSection, PsProfileHeader },

  data() {
    return {
      profileList,
    };
  },
});
</script>

<style lang="scss" scoped>
$block: '.o-psAboutProfile';
#{$block} {
  &__list {
    @include mq_pc {
      padding: 16px 0 16px 40px;
    }
  }
  &__listItem {
    padding: 4px 0;
  }
  &__listItemKey {
    font-weight: 500;
    @include font-size(1.8);
  }
  &__listItemValue {
    font-weight: 400;
    padding: 8px 0;
  }
}
</style>
