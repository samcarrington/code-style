<template lang="pug">
  footer.footer.has-text-light
    .container
      .level
        .level-left
          .level-item
            p.has-text-light
              a(href="mailto:hello@analogfolk.com") hello@analogfolk.com
        .level-right
          .level-item
            p.has-text-light v{{ version }} &copy; {{year}} AnalogFolk Ltd.

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
  a {
    color: scale-color($brand-red, $lightness: 80%);

    &:hover {
      color: #f3f3f3;
    }
  }
}
</style>
