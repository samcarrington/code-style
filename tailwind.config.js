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
        influential: '#ff004c',
        confident: '#2b272b',
        dynamic: '#f3f3f3',
        hopeful: '#34ccd7',
        positive: '#feea34',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
