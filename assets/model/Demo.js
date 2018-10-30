import Basic from "./Basic";

/**
 * 继承 Basic（nuxt） 对象
 * 重写 vue 和 nuxt 的属性或函数
 */
export default Object.assign(Basic, {

  asyncData() {
    let _from = process.client ? "Client" : "Server";
    return { from: _from };
  },

  layout() {
    return "demo"
  },

  transition: "demo",

  mounted() {
    console.log("demo page mounted");
  }
});
