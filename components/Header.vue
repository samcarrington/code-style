<template lang="pug">
  header.header
    nav.navbar(role="navigation", aria-label="main navigation")
      .navbar-brand
        nuxt-link.header__logo.navbar-item(to="/", title="Home", aria-label="return to homepage")
          af-logo
          span AnalogFolk
        a.navbar-burger.burger(
          aria-label="menu",
          aria-expanded="false",
          data-target="navbarBasic",
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        )
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navbarBasic.navbar-menu(:class="{ 'is-active': showNav }")
        .navbar-start
          nuxt-link.navbar-item(to="/html") HTML
          nuxt-link.navbar-item(to="/pug") PUG
          nuxt-link.navbar-item(to="/css") CSS
          nuxt-link.navbar-item(to="/javascript") Javascript
          nuxt-link.navbar-item(to="/php") PHP
          nuxt-link.navbar-item(to="/dotnet") .NET
        .navbar-end
          a.navbar-item(href="https://analogfolk.com") AF.com

</template>

<script>
import afLogo from '@/components/icons/af'

export default {
  name: 'Header',
  components: {
    afLogo
  },
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 995;
  padding: 0 15px;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: #ffffff;

  &__logo {
    display: flex;
    width: 240px;

    svg {
      width: 150px;
    }

    span {
      display: none;
    }
  }

  &__toggler {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    &__button {
      display: flex;
      width: 25px;
      height: 20px;
      cursor: pointer;
    }
  }
}

.navbar {
  width: 100%;
}
</style>
