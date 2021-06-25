<template lang="pug">
  div
    navbar
    nuxt
    af-footer
</template>

<script>
import Navbar from '~/components/Header.vue'
import AfFooter from '~/components/AfFooter.vue'

export default {
  components: {
    Navbar,
    AfFooter,
  },
  computed: {
    visible() {
      return true
    },
  },
  watch: {
    // $route: 'setStore'
  },
}
</script>

<style lang="scss">
@import '~assets/sass/base';
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 18px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: $off-white;
  color: #000000;
}

p {
  line-height: 1.2;
  padding-bottom: 1em;
}

.content a {
  color: inherit;
  text-decoration: none;
  position: relative;
  z-index: 0;
  display: inline-block;

  &:hover {
    &:after {
      top: 0%;
    }
  }

  &:after {
    content: '';
    z-index: -1;
    top: 17px;
    left: -0.2em;
    right: -0.2em;
    bottom: 0;
    position: absolute;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: rgba($brand-red, 0.3);
    border-radius: 5px;
  }
}

ul,
ol {
  li {
    list-style-type: disc;
    line-height: 1.2;
    p {
      padding-bottom: 0;
    }
  }
  padding-bottom: 1.2em;
}

pre {
  margin-bottom: 1em;
}

.container article {
  @apply pb-0.5 mb-16;
}
</style>
