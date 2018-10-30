export default {

  // context 全局上下文数据对象 - 参考：https://zh.nuxtjs.org/api/context

  /** 
   * 页面每次加载之前被调用
   * 所以在函数内没有 this 实例
   * Api：https://zh.nuxtjs.org/api/
   * @param {*} context
   * @returns {*} 返回实例捆绑的数据对象，相当于 data 属性返回值
   */
  asyncData(context) {
    return {};
  },

  /**
   * 页面每次加载之前被调用 同 asyncData 没有返回值
   * Api：https://zh.nuxtjs.org/api/pages-fetch
   * @param {*} context
   */
  fetch(context) { },

  /**
   * 设置当前页面的头部标签
   * Api：https://zh.nuxtjs.org/api/pages-head
   * @returns {*} 返回 head 标签内容
   */
  head() {
    return {};
  },

  /**
   * 指定当前页面使用的布局样式
   * @param {*} context 
   * @return {String} /layouts 目录下对应文件名 默认为 default
   */
  layout(context) {
    return "default";
  },

  /**
   * 当前页面使用的中间件
   * Api：https://zh.nuxtjs.org/guide/routing/#%E4%B8%AD%E9%97%B4%E4%BB%B6
   */
  middleware: "",

  /**
   * 控制页面渲染前是否滚动至页面顶部
   * Api：https://zh.nuxtjs.org/api/configuration-router/#scrollBehavior
   */
  scrollToTop: false,

  /**
   * 页面过渡效果
   * Api：https://zh.nuxtjs.org/api/pages-transition
   * @param {*} to 目标页面
   * @param {*} from 跳转页面
   * @returns {String} 过渡名称
   */
  transition(to, from) {
    return "";
  },

  /**
   * 配置一个校验方法
   * @param {*} context 
   * @returns {Boolean} 
   */
  validate(context) {
    // return new Promise((resolve) => setTimeout(() => resolve()))
    return true;
  }

}
