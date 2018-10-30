import Basic from "./Basic";

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
