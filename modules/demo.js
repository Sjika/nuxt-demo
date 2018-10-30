import path from 'path';
/**
 * 扩展nuxt模块
 * @param {*} moduleOptions 这是用户使用modules数组传递对象，我们可以使用它来定制它的行为
 */
export default async function demoIconModule(moduleOptions) {

  //modules中的context, 请参考 https://zh.nuxtjs.org/api/internals-module-container
  this;

  //可以使用此属性直接访问Nuxt选项。这是nuxt.config.js，其中包含所有默认选项，可用于模块之间的共享选项。
  this.options;

  //这是对当前Nuxt实例的引用。 请参考 https://zh.nuxtjs.org/api/internals-nuxt
  this.nuxt;

  this.addPlugin(path.resolve('/plugins/demo-icon.js'))

}