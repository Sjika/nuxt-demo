<template>
  <section class="container">
    <h1>this is demo-dir</h1>
    <div v-for="i in 4" :key="i">
      <nuxt-link :to="`/demo-dir/${i}`">demo-dir-type:{{i}}</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  asyncData({ $axios }) {
    // TODO $axios.get("") dirs
    return { dirs: [] };
  },
  data() {
    return {};
  },
  layout: "demo"
};
</script>