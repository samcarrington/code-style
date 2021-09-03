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
@debug 'var(--color-hopeful)';

.hero {
  background: radial-gradient(
      ellipse at bottom left,
      var(--color-hopeful-transparent),
      transparent 40%
    ),
    linear-gradient(135deg, var(--color-positive) 3%, transparent 55%),
    linear-gradient(45deg, var(--color-hopeful) 5%, transparent 65%),
    radial-gradient(circle at top, var(--color-influential), transparent 95%),
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
