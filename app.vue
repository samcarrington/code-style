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
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      titleTemplate: '%s | Code Style | Gwawr'
    })
  }
}
</script>

<style lang='postcss'>
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
