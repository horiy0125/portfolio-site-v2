<template>
  <main class="m-psBlogPostBody">
    <div class="html" v-html="body" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    body: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
.m-psBlogPostBody {
  display: inline-block;
  width: 100%;
  font-family: 'Noto Sans JP', sans-serif;
}
.html /deep/ h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 32px 0 16px 0;
}
.html /deep/ h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 16px 0 8px 0;
}
.html /deep/ h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 16px 0 4px 0;
}
.html /deep/ p {
  font-weight: 400;
  line-height: 1.8;
  padding: 16px 0;
}
.html /deep/ img {
  width: 100%;
  margin: 16px 0;
}
.html /deep/ pre {
  padding: 16px;
  margin: 16px 0;
  background: #2c2a2a;
  line-height: 1.8;
  color: #fff;
}
.html /deep/ code {
  font-size: inherit;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.html /deep/ blockquote {
  background: rgb(221, 221, 221);
  padding: 16px;
  margin: 16px 0;
}
.html /deep/ ul {
  padding: 16px 0 16px 40px;
}
.html /deep/ li {
  line-height: 1.8;
}
</style>
