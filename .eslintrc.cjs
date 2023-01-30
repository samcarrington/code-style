module.exports = {
  root: true,
  plugins: ["vuejs-accessibility"],
  extends: ["@nuxt/eslint-config", "@nuxtjs/eslint-config-typescript", "plugin:vuejs-accessibility/recommended", "eslint-config-prettier"],
  rules: {
    "no-extra-semi": "off"
  },
  ignorePatterns: ["**/.nuxt/*", "**/dist/*"]
};
