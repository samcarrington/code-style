<template lang="pug">
  header.header
    nav.bg-gray-800(role="navigation", aria-label="main navigation")
      .max-w-7x1(class="mx-auto px-2 sm:px-6 lg:px-8")
        .relative.flex.items-center.justify-between.h-16
          .absolute(class="inset-y-0 left-0 flex.items-center sm:hidden")
            button(
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
              type="button",
              aria-controls="mobile-menu",
              aria-expanded="false"
            )
              span.sr-only Open main menu
              svg(
                class="block h-6 w-6",
                xmlns="http://www.w3.org/2000/svg",
                fill="none",
                viewBox="0 0 24 24",
                stroke="currentColor",
                aria-hidden="true"
              )
                path(
                  stroke-linecap="round",
                  stroke-linejoin="round",
                  stroke-width="2",
                  d="M4 6h16M4 12h16M4 18h16"
                )
              svg(
                class="hidden h-6 w-6",
                xmlns="http://www.w3.org/2000/svg",
                fill="none",
                viewBox="0 0 24 24",
                stroke="currentColor",
                aria-hidden="true"
              )
                path(
                  stroke-linecap="round",
                  stroke-linejoin="round",
                  stroke-width="2",
                  d="M6 18L18 6M6 6l12 12"
                )
          div(class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start")
            .flex.space-x-4
              nuxt-link.header__logo.navbar-item(to="/", title="Home", aria-label="return to homepage")
                af-logo
                span AnalogFolk
              nuxt-link(
                to="/html",
                active-class="bg-red-600 hover:bg-red-600 text-white",
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ) HTML
              nuxt-link(
                to="/javascript",
                active-class="bg-red-600 hover:bg-red-600 text-white",
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ) Javascript
              nuxt-link(
                to="/css",
                active-class="bg-red-600 hover:bg-red-600 text-white",
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ) CSS
              nuxt-link(
                to="/php",
                active-class="bg-red-600 hover:bg-red-600 text-white",
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ) PHP
              nuxt-link(
                to="/dotnet",
                active-class="bg-red-600 hover:bg-red-600 text-white",
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ) .NET
              nuxt-link(
                to="/pug",
                active-class="bg-red-600 hover:bg-red-600 text-white",
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              ) PUG
          div(class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0")
      div(class="sm:hidden", id="mobile-menu")
        .px-2.pt-2.pb-3.space-y-1
          nuxt-link(to="/html",
            active-class="bg-red-600 hover:bg-red-600 text-white",
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium") HTML
          nuxt-link(to="/javascript",
            active-class="bg-red-600 hover:bg-red-600 text-white",
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium") Javascript
          nuxt-link(to="/css",
            active-class="bg-red-600 hover:bg-red-600 text-white",
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium") CSS
          nuxt-link(to="/php",
            active-class="bg-red-600 hover:bg-red-600 text-white",
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium") PHP
          nuxt-link(to="/dotnet",
            active-class="bg-red-600 hover:bg-red-600 text-white",
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium") .NET
          nuxt-link(to="/pug",
            active-class="bg-red-600 hover:bg-red-600 text-white",
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium") PUG
</template>

<script>
import afLogo from '@/components/icons/af'

export default {
  name: 'Header',
  components: {
    afLogo,
  },
  data() {
    return {
      showNav: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.af-monogram-fill {
  @apply text-gray-300;
}

.header {
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
