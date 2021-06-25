<template lang="pug">
  div.javascript
    section.section
      .container.mx-auto
        article#html.content.is-medium(v-html="javascript")
</template>

<script>
import javascript from './markdown/javascript.md'

export default {
  data() {
    this.title = 'Stylish AF'
    this.subtitle = 'Javascript'
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
    javascript() {
      return javascript
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
