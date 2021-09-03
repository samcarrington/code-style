module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        influential: 'var(--color-influential)',
        confident: 'var(--color-confident)',
        dynamic: 'var(--color-dynamic)',
        hopeful: 'var(--color-hopeful)',
        positive: 'var(--color-positive)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
