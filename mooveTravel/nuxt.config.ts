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
      // Основные мета-теги
      title: 'Moov Travel - Туристическое агентство | Отпуск, после которого хочется ещё',
      meta: [
        // Базовые мета-теги
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // SEO мета-теги
        { name: 'description', content: 'Moov Travel - профессиональное туристическое агентство. Подбираем туры в Турцию, Египет, ОАЭ, Таиланд, Мальдивы и другие направления. Работаем без выходных, ведём клиентов до конца путешествия.' },
        { name: 'keywords', content: 'туристическое агентство, туры, отдых, путешествия, Турция, Египет, ОАЭ, Таиланд, Мальдивы, семейный отдых, бронирование туров' },
        { name: 'author', content: 'Moov Travel' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'ru' },
        
        // Open Graph мета-теги для социальных сетей
        { property: 'og:title', content: 'Moov Travel - Туристическое агентство' },
        { property: 'og:description', content: 'Профессиональное туристическое агентство. Подбираем туры как себе - с учётом всех ваших пожеланий и бюджета.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://moov-travel.ru' },
        { property: 'og:image', content: '/src/assets/images/logoMoov.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Moov Travel' },
        { property: 'og:locale', content: 'ru_RU' },
        
        // Twitter Card мета-теги
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Moov Travel - Туристическое агентство' },
        { name: 'twitter:description', content: 'Профессиональное туристическое агентство. Подбираем туры как себе - с учётом всех ваших пожеланий и бюджета.' },
        { name: 'twitter:image', content: '/src/assets/images/logoMoov.svg' },
        
        // Дополнительные SEO мета-теги
        { name: 'theme-color', content: '#C75454' },
        { name: 'msapplication-TileColor', content: '#C75454' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Moov Travel' },
        
        // Структурированные данные для поисковых систем
        { name: 'application-name', content: 'Moov Travel' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        
        // Географические мета-теги
        { name: 'geo.region', content: 'RU' },
        { name: 'geo.placename', content: 'Москва' },
        
        // Бизнес мета-теги
        { name: 'business:contact_data:street_address', content: 'Скоро откроемся!' },
        { name: 'business:contact_data:phone_number', content: '+7 903 173-77-88' },
        { name: 'business:contact_data:email', content: 'Sputnik@moov-travel.ru' },
      ],
      
      // Canonical URL
      link: [
        { rel: 'canonical', href: 'https://moov-travel.ru' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/src/assets/images/logoMoov.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/src/assets/images/logoMoov.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/src/assets/images/logoMoov.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      
      // JSON-LD структурированные данные
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Moov Travel",
            "description": "Профессиональное туристическое агентство. Подбираем туры в Турцию, Египет, ОАЭ, Таиланд, Мальдивы и другие направления.",
            "url": "https://moov-travel.ru",
            "logo": "https://moov-travel.ru/src/assets/images/logoMoov.svg",
            "image": "https://moov-travel.ru/src/assets/images/logoMoov.svg",
            "telephone": "+7 903 173-77-88",
            "email": "Sputnik@moov-travel.ru",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Москва",
              "addressCountry": "RU"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "areaServed": ["RU"],
            "serviceType": ["Туристические услуги", "Бронирование туров", "Организация путешествий"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Туристические направления",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Туры в Турцию"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Туры в Египет"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Туры в ОАЭ"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Туры в Таиланд"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Туры на Мальдивы"
                  }
                }
              ]
            }
          })
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiToken: process.env.API_TOKEN,
    },
  },
})
