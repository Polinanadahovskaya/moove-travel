// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['./src/assets/css/main.css'],
  
  // Автоимпорт компонентов
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      // Глобальные компоненты (доступны везде)
      global: true,
    },
    // Можно добавить дополнительные папки для компонентов
    // {
    //   path: '~/components/ui',
    //   prefix: 'Ui'
    // },
    // {
    //   path: '~/components/forms',
    //   prefix: 'Form'
    // }
  ],
  
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  }
})
