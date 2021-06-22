<template lang="pug">
  div.css
    section.section
      .container
        article#html.content.is-medium(v-html="css")
</template>

<script>
import css from './markdown/css.md'

export default {
  data() {
    this.title = 'Stylish AF'
    this.subtitle = 'CSS'
    return {
      pageTitle: this.title,
      subtitle: this.subtitle,
      title: [this.title, this.subtitle].join(' - '),
    }
  },
  computed: {
    css() {
      return css
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
