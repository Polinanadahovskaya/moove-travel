import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const usePagesStore = defineStore('pages', {
  state: () => ({
    mainPage: null as any,
    loading: false as boolean,
    error: null as string | null,
    aboutUsPage: null as any,
    blogPage: null as any,
    guidePage: null as any, // добавлено для guide-page
  }),
  actions: {
    async fetchMainPage(force = false) {
      if (this.mainPage && !force) return;
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get('http://localhost:1337/api/main-page?populate[aboutUs][populate]=backgroundImage&populate[advantages][populate]=image', {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.mainPage = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении данных главной страницы'
      } finally {
        this.loading = false
      }
    },
    async fetchAboutUsPage(force = false) {
      if (this.aboutUsPage && !force) return;
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get('http://localhost:1337/api/about-us-page?populate[banner][populate]=backgroundImage&populate[office][populate]=image&populate[personal][populate]=image', {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.aboutUsPage = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении данных страницы "О нас"'
      } finally {
        this.loading = false
      }
    },
    async fetchBlogPage(force = false) {
      if (this.blogPage && !force) return;
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get('http://localhost:1337/api/blog?populate=*', {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.blogPage = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении данных страницы блога'
      } finally {
        this.loading = false
      }
    },
    async fetchGuidePage(force = false) {
      if (this.guidePage && !force) return;
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get('http://localhost:1337/api/guide-page', {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.guidePage = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении данных страницы гайда'
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getMainPage: (state) => state.mainPage,
    getAboutUsPage: (state) => state.aboutUsPage,
    getBlogPage: (state) => state.blogPage,
    getGuidePage: (state) => state.guidePage, // добавлен геттер для guide-page
  },
}) 