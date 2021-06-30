<template lang="pug">
  section.hero
    .hero-body
      .container.mx-auto.max-w-4xl
        .py-16.px-4
          h1.title {{ title}}
          h2.subtitle {{ subtitle }}
</template>

<script>
export default {
  name: 'HomeHero',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.hero {
  @apply bg-gradient-to-r from-gray-700 via-blue-900 to-gray-900;
}

.title {
  @apply text-4xl sm:text-5xl text-gray-100;
}

.subtitle {
  @apply text-2xl sm:text-4xl text-gray-100;
}
</style>
