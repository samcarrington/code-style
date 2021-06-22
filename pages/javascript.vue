<template lang="pug">
  div.javascript
    section.section
      .container
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
  computed: {
    javascript() {
      return javascript
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
