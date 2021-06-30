export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: process.env.NUXT_LOCALE,
      dir: ['fa', 'ar', 'he'].includes(process.env.NUXT_LOCALE) ? 'rtl' : 'ltr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
    bodyAttrs: {
      'data-version': process.env.npm_package_version || '',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '@/assets/css/tailwind.css', lang: 'css' },
    { src: '@/assets/sass/app.scss', lang: 'scss' },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms',
    '~/components/global',
    '~/components/icons',
    '~/components/molecules',
    '~/components/organisms',
    '~/components/templates',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-26457988-4',
      },
    ],
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  env: {
    app_version: process.env.npm_package_version,
  },
  /* nuxt content settings */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  /* nuxt i18n settings */
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        file: 'en-GB.js',
        name: 'English',
        domain: 'https://folk-style.analogfolk.com',
      },
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
    defaultLocale: 'en',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/',
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
