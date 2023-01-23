// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/sitemap.xml'],
    },
  },
  runtimeConfig: {
    public: {
      appVersion: process.env.npm_package_version,
    },
  },
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle'],
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula',
      preload: ['py', 'css', 'scss', 'ts', 'json', 'js', 'jsx'],
    },
  },
});
