<template>
  <div class='sm:py-10'>
    <Html lang='en'>
    <Head>
      <Meta property='og:image' content='/cover.jpg' />
      <Meta name='twitter:card' content='summary_large_image' />
    </Head>
    </Html>
    <Navbar />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script>
export default {
  setup() {
    let { show, toggleNav }  = useNavbar();
    useHead({
      titleTemplate: '%s | Code Style | Gwawr',
      script: [{
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-7C0V8P4P5D'
      }, {
          type: 'text/javascript',
          innerHTML: 'window.dataLayer = window.dataLayer || [];\n' +
            '  function gtag(){dataLayer.push(arguments);}\n' +
            '  gtag(\'js\', new Date());\n' +
            '\n' +
            '  gtag(\'config\', \'G-7C0V8P4P5D\');',
          tagPosition: 'bodyOpen'
      }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "http://fonts.gstatic.com",
          crossorigin: true
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bitter&display=swap"
        },
      ]
    })
  },

  watch: {
    $route(to, from) {
      let { show }  = useNavbar();
      show.value = false;
    }
  }
}
</script>

<style lang='postcss'>
body {
  @apply bg-gray-50 dark:bg-gray-900;

  .prose {
    pre {
      box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Bitter', serif;
    }
  }
}
</style>
