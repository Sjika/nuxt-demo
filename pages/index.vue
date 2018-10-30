<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">nuxt-demo</h1>
      <h2 class="subtitle">My astonishing Nuxt.js project</h2>
      <div class="links">
        <el-rate v-model="rate" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        <nuxt-link to="/demo">demo</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  asyncData(context) {
    // called every time before loading the component
  },
  data() {
    return {
      rate: 0
    };
  },

  watch: {
    rate(v) {
      console.log("watch rate change", v);
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
