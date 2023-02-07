export default defineNuxtConfig({
  runtimeConfig: {
    pages: true,
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@nuxtjs/i18n',
    // 'nuxt-windicss',
    '@nuxt/content'
  ],
  // windicss: {
  //   analyze: true
  // },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  }
})
