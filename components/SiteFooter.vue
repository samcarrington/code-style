<template lang="pug">
footer.footer.max-w-2xl.px-4.py-5.m-auto.flex.justify-between(role="contentinfo", aria-label="footer", class="sm:px-8")
  div.text-sm.text-gray-500 &copy; Sam Carrington {{ year }}
  div.text-sm.text-gray-500.flex
    .mx-2
      span.text-gray-500
        a.bg-green-500.px-2.rounded-sm.text-gray-800(
          :href="`https://github.com/samcarrington/code-style/releases/tag/v${config.public.appVersion}`"
          class="hover:bg-gray-100 hover:text-gray-800 hover:rounded-sm"
          rel="nofollow noopener noreferrer"
          target="_blank") v{{ config.public.appVersion }}

    .ml-4.h-5.w-5
      a(href="https://github.com/samcarrington/code-style",
        rel="nofollow noopener noreferrer"
        target="_blank")
        icon-github
        .sr-only View this project on Github

</template>

<script setup>
  const config = useRuntimeConfig();
</script>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
}
</script>

<style scoped>

</style>
