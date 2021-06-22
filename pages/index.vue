<template lang="pug">
  div.home
    section.hero.is-medium.is-bold.is-dark
      .hero-body
        .container
          h1.title.is-1(v-html="pageTitle")
          h2.subtitle(v-html="subtitle")
    section.section
      .container
        article#intro.content.is-medium(v-html="intro")
        article#toc.content.is-medium(v-html="toc")
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
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="scss">
.section > .container {
  background-color: white;
  padding: 0 1em;
}
</style>
