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
}
.html /deep/ h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 8px 0;
}
.html /deep/ h2 {
  font-size: 20px;
  font-weight: 500;
  padding: 4px 0;
}
.html /deep/ p {
  font-weight: 300;
  line-height: 24px;
  padding: 16px 0;
}
.html /deep/ img {
  width: 100%;
}
.html /deep/ pre {
  padding: 16px;
  margin: 16px 0;
  background: #2c2a2a;
  line-height: 24px;
  color: #fff;
}
.html /deep/ code {
  font-family: 'Courier New', Courier, monospace;
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
  line-height: 28px;
}
</style>
