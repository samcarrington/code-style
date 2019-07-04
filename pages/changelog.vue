<template lang="pug">
  div.html
    section.section
      .container
        article#html.content.is-medium(v-html="changelog")
</template>

<script>
import changelog from '../CHANGELOG.md'

export default {
  data() {
    return {
      title: 'Stylish AF - Change log'
    }
  },
  computed: {
    changelog() {
      return changelog
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss">
%change-title {
  font-family: 'TT Commons DemiBold', sans-serif;
  font-weight: 400;
}
h1 {
  @extend %change-title;
  font-size: 2.8em;
}

h2 {
  @extend %change-title;
  font-size: 1.6em;
}

h3 {
  @extend %change-title;
  font-size: 1.2em;
}
</style>
