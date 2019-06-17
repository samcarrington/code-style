<template lang="pug">
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 700;
  padding-top: 0.4em;
  padding-bottom: 0.3em;
}

h1 {
  font-size: 36px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 18px;
}

p {
  line-height: 1.2;
  padding-bottom: 1em;
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
  border-bottom: 1px solid gray;
  padding: 1em 0 1.2em;
}
</style>
