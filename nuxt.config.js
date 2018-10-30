const pkg = require('./package');
const open = require('open');

module.exports = {
  mode: 'universal',

  /**
   * Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#ce2535' },

  /**
   * Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/common.css'
  ],

  /**
   * Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/font-awesome' },
    '@/plugins/runx',
  ],

  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  proxy: {
    '/dev/': { target: 'dev-api-gateway.runxsports.com', pathRewrite: { '^/dev/': '' } }
  },

  router: {
    middleware: 'route'
  },

  /**
   * Build configuration
   */
  build: {
    /**
     * You can extend webpack config here
     * @param {*} config 
     * @param {*} context 
     */
    extend(config, context) { },
    vendor: ['axios', 'element-ui', '~plugins/runx', '~plugins/font-awesome']
  },

  env: {
    demo_contract: "123456789",
    demo_api: {
      login: "login",
      logout: "logout"
    }
  },

  // hooks: {
  //   listen(server, { host, port }) {
  //     open(`http://${host}:${port}`);
  //   }
  // }
}
