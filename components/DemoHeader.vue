<template>
  <el-card shadow="hover">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(path, index) in $store.path"
        :key="index"
        :to="path.link"
      >{{path.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
</template>

<script>
export default {
  data() {
    return { crumbs: [] };
  },

  fetch({ route }) {
    // console.log("header route", route);
  },

  mounted() {}
};
</script>


.<style>
.el-card {
  border-radius: 0;
}
</style>
