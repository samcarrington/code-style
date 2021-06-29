<template lang="pug">
  div.home
    section.hero.bg-gray-500.mb-16
      .hero-body
        .container.mx-auto
          .py-16
            h1.title.text-gray-100 {{ intro.title}}
            h2.subtitle.text-gray-100 {{ intro.description }}
    section.section
      .container.mx-auto
        article
          #intro.content.is-medium
            nuxt-content(:document="intro")
          #toc.content.is-medium
            nuxt-content(:document="toc")
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    // const { slug } = params
    const path = `/${app.i18n.defaultLocale}/home`
    let intro, toc

    try {
      intro = await $content(path, 'intro').fetch()
      toc = await $content(path, 'toc').fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      toc,
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

<style lang="scss">
.section > .container {
  background-color: white;
  padding: 0 1em;
}

.title {
  @apply text-4xl sm:text-5xl;
}

.subtitle {
  @apply text-2xl sm:text-4xl;
}
</style>
