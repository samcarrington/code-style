<template lang="pug">
  .container
    section#changelog(v-html="changelog")
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

<style lang="scss"></style>
