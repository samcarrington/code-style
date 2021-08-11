<template lang="pug">
  ul
    li(
      v-for="(page, index) in pages",
      :key="index" :page="page"
    )
      h4
        nuxt-link(:to="`/docs/${page.slug}`") {{page.title}}
      ul
        li(
          v-for="link of page.toc",
          key="link.id"
          :class="{'hidden': link.depth === 2}"
        )
          nuxt-link(:to="`/docs/${page.slug}#${link.id}`") {{link.text}}
</template>

<script>
export default {
  name: 'DocsContents',
  props: {
    pages: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
ul ul a::after {
  display: none;
}

ul ul a:hover {
  text-decoration: underline;
}
</style>
