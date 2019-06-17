<template lang="pug">
  .container
    section#header
      h1.title Folk Style
    section#intro(v-html="intro")
    section#toc(v-html="toc")
    section#html(v-html="mdhtml")
    section#pug(v-html="mdpug")
    section#css(v-html="mdcss")
    section#javascript(v-html="mdjs")
    section#php(v-html="php")
</template>

<script>
import intro from './markdown/intro.md'
import toc from './markdown/toc.md'
import css from './markdown/css.md'
import html from './markdown/html.md'
import pug from './markdown/pug.md'
import js from './markdown/javascript.md'
import php from './markdown/php.md'

export default {
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
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 900px;

  @media (max-width: 899px) {
    width: 100%;
    padding: 0 2em;
  }
}
</style>
