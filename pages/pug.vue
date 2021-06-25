<template lang="pug">
  div.pug
    section.section
      .container.mx-auto
        article#html.content.is-medium(v-html="pug")
</template>

<script>
import pug from './markdown/pug.md'

export default {
  data() {
    this.title = 'Stylish AF'
    this.subtitle = 'Pug'
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
    pug() {
      return pug
    },
  },
  async mounted() {
    this.title = (await this.pageTitle) + ' - ' + this.subtitle
  },
}
</script>

<style>
.section > .container {
  background-color: white;
  padding: 0 1em;
}
</style>
