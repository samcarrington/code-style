<template lang="pug">
  footer.footer.bg-gray-800(role="contentinfo", aria-label="footer")
    .max-w-7x1.relative(class="mx-auto px-2 sm:px-6 lg:px-8")
      .container.mx-auto.flex.justify-between
        p.text-gray-300.py-3.text-sm
          a(href="mailto:hello@analogfolk.com") hello@analogfolk.com

        .text-gray-300.py-3.text-sm.flex
          .bg-green-500.rounded-sm.px-2.mx-2.text-gray-800 v{{ version }}
          div &copy; {{year}} AnalogFolk Ltd.

      div.right
</template>

<script>
export default {
  name: 'AfFooter',
  data() {
    return {
      version: process.env.app_version,
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped lang="scss">
@import '~assets/sass/base';
.footer {
  @apply fixed bottom-0 w-full;
  a {
    color: scale-color($brand-red, $lightness: 80%);

    &:hover {
      color: #f3f3f3;
    }
  }
}
</style>
