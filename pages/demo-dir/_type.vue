<template>
  <section class="container">
    <h2>this is dir {{type}}</h2>
    <nuxt-link :to="from.path" v-if="from">{{from.name}}</nuxt-link>
  </section>
</template>

<script>
export default {
  asyncData({ from, params: { type } }) {
    return { type, from };
  },
  layout: "demo"
};
</script>