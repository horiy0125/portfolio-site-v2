<template>
  <div class="m-psProfileHeader">
    <h2 class="m-psProfileHeader__name">
      堀内 凱登
      <span class="m-psProfileHeader__enName"> / Kaito Horiuchi </span>
    </h2>
    <div class="m-psProfileHeader__accountLinks">
      <ps-sns-link
        v-for="(sns, index) in snsAccounts"
        :key="index"
        :sns-name="sns.name"
        :href="sns.url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PsSnsLink from '~/components/atoms/buttons/ps-sns-link.vue';
import snsAccounts from '~/contents/about-page/sns';
export default Vue.extend({
  components: { PsSnsLink },
  data() {
    return {
      snsAccounts,
    };
  },
});
</script>

<style lang="scss" scoped>
$block: '.m-psProfileHeader';
#{$block} {
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @include mq_sp {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__name {
    font-weight: 300;
    @include mq_pc {
      @include font-size(2.8);
    }
    @include font-size(2.4);
  }
  &__enName {
    font-family: $en-font;
    margin-left: 8px;
    @include font-size(2);
    @include mq_pc {
      @include font-size(2.4);
    }
  }
  &__accountLinks {
    display: flex;
    @include mq_sp {
      padding-top: 16px;
    }
  }
}
</style>
