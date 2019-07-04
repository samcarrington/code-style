<template lang="pug">
  div.pug
    section.section
      .container
        article#html.content.is-medium(v-html="php")
</template>

<script>
import php from './markdown/php.md'

export default {
  data() {
    this.title = 'Stylish AF'
    this.subtitle = 'PHP'
    return {
      pageTitle: this.title,
      subtitle: this.subtitle,
      title: [this.title, this.subtitle].join(' - ')
    }
  },
  computed: {
    php() {
      return php
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
