<template lang="pug">
  div.pug
    section.section
      .container
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
      title: [this.title, this.subtitle].join(' - ')
    }
  },
  computed: {
    pug() {
      return pug
    }
  },
  async mounted() {
    this.title = (await this.pageTitle) + ' - ' + this.subtitle
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss">
.section > .container {
  background-color: white;
  padding: 0 1em;
}
</style>
