<template>
  <ps-section
    class="o-psAboutCareer"
    en-heading="Career"
    jp-heading="大学・インターンシップ"
  >
    <ps-second-heading class="o-psAboutCareer__year" :use-en-font="true">
      2019.4
    </ps-second-heading>
    <p class="o-psAboutCareer__event">九州大学 経済学部 経済工学科 入学</p>

    <ps-second-heading class="o-psAboutCareer__year" :use-en-font="true">
      2019.10 - 2020.10
    </ps-second-heading>
    <p class="o-psAboutCareer__event">
      株式会社クアンド エンジニア
      <ps-responsive-break :is-show-sp="true" />
      （インターン）
    </p>

    <ps-second-heading class="o-psAboutCareer__year" :use-en-font="true">
      2020.11 - 2021.1
    </ps-second-heading>
    <p class="o-psAboutCareer__event">
      株式会社Regnio エンジニア
      <ps-responsive-break :is-show-sp="true" />
      （インターン）
    </p>

    <ps-second-heading class="o-psAboutCareer__year" :use-en-font="true">
      2021.2 -
    </ps-second-heading>
    <p class="o-psAboutCareer__event">
      note株式会社 カイゼンチーム
      <ps-responsive-break :is-show-sp="true" />
      エンジニア（インターン）
    </p>

    <ps-second-heading class="o-psAboutCareer__year" :use-en-font="true">
      2021.3.27 - 2021.3.28
    </ps-second-heading>
    <p class="o-psAboutCareer__event">
      株式会社サイバーエージェント
      <ps-responsive-break :is-show-sp="true" />
      フロントエンドエンジニア
      <br />
      （2daysハッカソンインターン）
    </p>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSection from '../../ps-section.vue';
import PsSecondHeading from '~/components/atoms/ps-second-heading.vue';
import PsResponsiveBreak from '~/components/atoms/ps-responsive-break.vue';
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsResponsiveBreak },
});
</script>

<style lang="scss" scoped>
$block: '.o-psAboutCareer';
#{$block} {
  display: inline-block;
  &__year {
    font-weight: 500;
    line-height: 2;
    padding: 8px 0;
    @include font-size(2.4);
  }
  &__event {
    font-weight: 400;
    line-height: 1.8;
    padding-left: 12px;
  }
}
</style>
