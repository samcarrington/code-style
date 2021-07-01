<template lang="pug">
  div(:class="this.post.slug")
    section.section.mt-8
      .container.mx-auto.max-w-4xl
        article.content(:id="post.slug")
          nuxt-content(:document="post")
</template>

<script>
export default {
  async asyncData({
    $content,
    $contributors,
    store,
    app,
    params,
    error,
    router,
  }) {
    const { slug } = params
    const path = `/${app.i18n.defaultLocale}`
    let post

    try {
      post = await $content(path, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      post,
    }
  },
  head() {
    return {
      title: this.post.title,
      titleTemplate: '%s - AnalogFolk Style Guide',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
      ],
    }
  },
  async mounted() {
    this.title = (await this.pageTitle) + ' - ' + this.subtitle
  },
}
</script>

<style lang="scss">
.section > .container {
  background-color: white;
  padding: 0 1em;
}

.nuxt-content-highlight pre {
  @apply rounded;
}
</style>
