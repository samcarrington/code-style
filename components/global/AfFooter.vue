<template lang="pug">
  footer.footer.bg-gray-800(role="contentinfo", aria-label="footer")
    .max-w-4xl.mx-auto.relative(class="px-2 sm:px-6 lg:px-8")
      .flex.justify-between
        p.text-gray-300.py-3.text-sm
          a.email(href="mailto:hello@analogfolk.com") hello@analogfolk.com
        .text-gray-300.py-3.text-sm.flex
          .mx-2
            span.text-gray-800
              a.bg-green-500.px-2.rounded-sm.text-gray-800(
                :href="`https://github.com/AnalogFolk/folk-style/releases/tag/v${version}`"
                class="hover:bg-gray-100 hover:text-gray-800 hover:rounded-sm"
                rel="nofollow noopener noreferrer"
                target="_blank"
              ) v{{ version }}
          div © {{year}} AnalogFolk
            | {{' '}}
            span(class="hidden sm:inline-block") Ltd.
          div.ml-4.h-5.w-5
            a(href="https://github.com/AnalogFolk/folk-style",
            rel="nofollow noopener noreferrer"
            target="_blank")
              icon-github
              .sr-only View this project on Github
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
  a.email {
    color: scale-color($brand-red, $lightness: 80%);

    &:hover {
      color: #f3f3f3;
    }
  }
}
</style>
