<template>
  <section class="layout-demo">
    <demo-header></demo-header>
    <div class="content">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#333"
        text-color="#fff"
        active-text-color="#f90"
        :default-active="currentRoute"
        :collapse="collapse"
        router
      >
        <el-menu-item v-for="(m, i) in menus" :key="i" :index="m.path">
          <fa-icon icon="link" width="14"></fa-icon>
          <span slot="title">{{m.name}}</span>
        </el-menu-item>
      </el-menu>
      <nuxt/>
    </div>
    <footer>demo footer</footer>
  </section>
</template>

<script>
import DemoHeader from "@/components/DemoHeader.vue";
export default {
  components: {
    DemoHeader
  },
  data() {
    return {
      collapse: false,
      currentRoute: "",
      menus: this.$router.options.routes
    };
  },
  mounted() {
    this.currentRoute = this.$route.path;
  }
};
</script>

<style scoped>
.layout-demo {
  display: flex;
  flex-flow: column;
  height: 100vh;
  justify-content: space-between;
}

.content {
  display: flex;
  flex: 1;
}

.el-menu-item > a.to {
  display: block;
}
</style>
