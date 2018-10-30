# nuxt-demo

> My astonishing Nuxt.js project

> 建议安装 **VSCode** 扩展应用 **Vue docs**

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Create Nuxt-Project
`'-'` 后为选项或填入的内容
``` bash
npx create-nuxt-app <project name>
> Project name -
> Project description My majestic Nuxt.js project -
> Use a custom server framework - none
> Use a custom UI framework - element-ui
> Choose rendering mode - Universal
> Use axios module - yes
> Use eslint - yes
> Use prettier - yes
> Choose a package manager - npm
```

## Create Plugin

[/plugins](plugins) 目录下创建`*.js`文件
`nuxt.config.js` 中添加如下配置
  ```js
  plugins: ['@/plugins/*'],
  build: {
    vendor: ['@/plugins/runx'] //优化打包方案
  }
  ```
**重启服务后加载新增组件**

## Append Font-Awesome plugin
```bash
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/vue-fontawesome
```

创建 [/plugins/font-awesome.js](plugins) 文件
```js
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas); //添加 free-solid 全部图标集合

Vue.component('fa-icon', FontAwesomeIcon);
```


For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
