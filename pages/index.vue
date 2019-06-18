<template lang="pug">
  .container
    section#header
      h1 Folk Style
    section#intro(v-html="intro")
    section#toc(v-html="toc")
    section#html(v-html="mdhtml")
    section#pug(v-html="mdpug")
    section#css(v-html="mdcss")
    section#javascript(v-html="mdjs")
    section#php(v-html="php")
    section#dotnet(v-html="dotnet")
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

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 660px;
  background-color: white;
  padding: 0 1em;

  @media (max-width: 659px) {
    width: 100%;
    padding: 0 2em;
  }
}
</style>
