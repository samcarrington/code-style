<template lang="pug">.index</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $content, app, params, redirect }) {
    let pages
    if (!params.book) {
      return redirect('/')
    }
    try {
      const locale = ['en'].includes(app.i18n.locale)
        ? app.i18n.locale
        : app.i18n.defaultLocale
      await $content(locale, 'docs', { deep: true }).only([
        'slug',
        'title',
        'position',
      ])
    } catch (e) {}
    return {
      pages,
    }
  },
}
</script>

<style scoped></style>
