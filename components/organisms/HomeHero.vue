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
  background: radial-gradient(
      ellipse at bottom left,
      rgba(9, 222, 228, 0.5),
      transparent 40%
    ),
    linear-gradient(135deg, #f9e450 3%, transparent 55%),
    linear-gradient(45deg, #09dee4 5%, transparent 65%),
    radial-gradient(circle at top, #ff004c, transparent 95%),
    linear-gradient(#000, #000);
}

.title {
  @apply text-4xl sm:text-5xl text-gray-100;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
}

.subtitle {
  @apply text-2xl sm:text-4xl text-gray-100;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
}
</style>
