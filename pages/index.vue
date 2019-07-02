<template lang="pug">
  section.section
    .container
      article#header.content.is-medium
        h1 Folk Style
      article#intro.content.is-medium(v-html="intro")
      article#toc.content.is-medium(v-html="toc")
      article#html.content.is-medium(v-html="mdhtml")
      article#pug.content.is-medium(v-html="mdpug")
      article#css.content.is-medium(v-html="mdcss")
      article#javascript.content.is-medium(v-html="mdjs")
      article#php.content.is-medium(v-html="php")
      article#dotnet.content.is-medium(v-html="dotnet")
</template>

<script>
import intro from './markdown/intro.md'
import toc from './markdown/toc.md'
import css from './markdown/css.md'
import html from './markdown/html.md'
import pug from './markdown/pug.md'
import js from './markdown/javascript.md'
import php from './markdown/php.md'
import dotnet from './markdown/dotnet.md'

export default {
  data() {
    return {
      title: 'Stylish AF - An Analogfolk coding style guide'
    }
  },
  computed: {
    intro() {
      return intro
    },
    toc() {
      return toc
    },
    mdhtml() {
      return html
    },
    mdpug() {
      return pug
    },
    mdcss() {
      return css
    },
    mdjs() {
      return js
    },
    php() {
      return php
    },
    dotnet() {
      return dotnet
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
