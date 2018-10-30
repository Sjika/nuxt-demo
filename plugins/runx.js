/**
 * 接口管理插件
 */
class Runx {
  /**
   * 构造函数
   * @param {*} context 
   */
  constructor({ $axios, env, isDev, params, query, store }) {
    this._axios = $axios;
    this._api = env.demo_api;
    this._store = store;
  }

  getData() {
    this._axios.get("data");
  }

  postData() {
    this._axios.post("data")
  }

  printContext() {
    console.log(this._store);
  }

}

/**
 * 将自定义插件同时注入 this & context 实例
 */
export default (context, inject) => {
  inject('runx', new Runx(context));
}