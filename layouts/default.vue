<template lang="pug">
  <div>
    <nuxt />
  </div>
</template>

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

a {
  color: scale-color($brand-red, $lightness: -50%);
  text-decoration: underline;

  &:hover {
    color: $brand-red;
    text-decoration: underline;
  }
}

ol {
  padding-left: 1.2em;
}

ul {
  padding-left: 1.2em;

  li {
    list-style-type: disc;
    p {
      padding-bottom: 0;
    }
  }
  padding-bottom: 1.2em;
}

pre {
  margin-bottom: 1em;
}

section section {
  border-bottom: 1px solid scale-color($off-white, $lightness: -20%);
  padding: 1em 0 1.2em;
}
</style>
