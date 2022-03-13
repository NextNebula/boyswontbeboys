export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'BOYS WON\'T BE BOYS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: "BOYS WON'T BE BOYS van Rikkert van Huisstede is een maatschappelijke beweging en theatervoorstelling die een diverse groep jongens en mannen samenbrengt. Een collage van dansers, zangers, rappers, dichters en theatermakers laat zien dat het stoer is om je (als man) kwetsbaar op te stellen. Ze vertellen hun persoonlijke verhaal en vinden elkaar in het doorbreken van stereotypen." },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap' },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/61d047e87c.js', crossorigin: 'anonymous',
      },
    ],
  },
  modules: [
    '@nuxtjs/axios',
    '@aceforth/nuxt-optimized-images',
    ['@nuxtjs/google-analytics', {
      id: 'UA-141894659-1'
    }]

  ],
  optimizedImages: {
    optimizeImages: false //only inline images, do not optimize
  }
}
