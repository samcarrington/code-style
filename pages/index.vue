<template lang="pug">
  div.home
    section.hero.bg-gray-500.mb-16
      .hero-body
        .container.mx-auto
          .py-16
            h1.title.text-gray-100 {{ pageTitle }}
            h2.subtitle.text-gray-100 {{ subtitle }}
    section.section
      .container.mx-auto
        article
          #intro.content.is-medium(v-html="intro")
          #toc.content.is-medium(v-html="toc")
</template>

<script>
import intro from './markdown/intro.md'
import toc from './markdown/toc.md'

export default {
  data() {
    this.title = 'Stylish AF'
    this.subtitle = 'An Analogfolk coding style guide'
    return {
      pageTitle: this.title,
      subtitle: this.subtitle,
      title: [this.title, this.subtitle].join(' - '),
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    intro() {
      return intro
    },
    toc() {
      return toc
    },
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

.title {
  @apply text-4xl sm:text-5xl;
}

.subtitle {
  @apply text-2xl sm:text-4xl;
}
</style>
