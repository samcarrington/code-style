<template>
  <div class='sm:py-10'>
    <Html lang='en'>
    <Head>
      <Meta property='og:image' content='/cover.jpg' />
      <Meta name='twitter:card' content='summary_large_image' />
    </Head>
    </Html>
    <Navbar />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      titleTemplate: '%s | Code Style | Gwawr',
      script: [{
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7C0V8P4P5D'
      }, {
          type: 'text/javascript',
          innerHTML: 'window.dataLayer = window.dataLayer || [];\n' +
            '  function gtag(){dataLayer.push(arguments);}\n' +
            '  gtag(\'js\', new Date());\n' +
            '\n' +
            '  gtag(\'config\', \'G-7C0V8P4P5D\');',
          tagPosition: 'bodyOpen'
      }]
    })
  }
}
</script>

<style lang='postcss'>
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
