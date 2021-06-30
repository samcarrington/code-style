<template lang="pug">
  div.home
    home-hero(:title="intro.title", :subtitle="intro.description")

    section.section.mt-16
      .container.mx-auto.max-w-4xl
        article
          #intro.content.is-medium
            nuxt-content(:document="intro")
          #toc.content.is-medium
            h3 Table of Contents
            docs-contents(:pages="pages")
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    // const { slug } = params
    const path = `/${app.i18n.defaultLocale}/home`
    let intro, pages

    try {
      intro = await $content(path, 'intro').fetch()
      pages = await $content(`/${app.i18n.defaultLocale}`)
        .sortBy('position', 'asc')
        .fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      pages,
      intro,
    }
  },
  head() {
    const title = this.$i18n.t('homepage.title')
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
.section > .container {
  background-color: white;
  padding: 0 1em;
}
</style>
