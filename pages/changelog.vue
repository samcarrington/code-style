<template lang="pug">
  div.html
    section.section
      .container.mx-auto
        article#html.content.is-medium
          nuxt-content {{ changelog }}
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    let changelog

    try {
      changelog = await $content('~~/CHANGELOG').fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      changelog,
    }
  },
  data() {
    return {
      title: 'Stylish AF - Change log',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="scss">
%change-title {
  font-family: 'TT Commons DemiBold', sans-serif;
  font-weight: 400;
}
h1 {
  @extend %change-title;
  font-size: 2.8em;
}

h2 {
  @extend %change-title;
  font-size: 1.6em;
}

h3 {
  @extend %change-title;
  font-size: 1.2em;
}
</style>
