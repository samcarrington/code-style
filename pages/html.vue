<template lang="pug">
  div.html
    section.section
      .container.mx-auto
        article#html.content.is-medium(v-html="mdhtml")
</template>

<script>
import html from './markdown/html.md'

export default {
  data() {
    this.title = 'Stylish AF'
    this.subtitle = 'HTML'
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
    mdhtml() {
      return html
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
</style>
