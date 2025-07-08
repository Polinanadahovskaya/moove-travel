import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [] as any[],
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async fetchArticles() {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get('http://localhost:1337/api/articles', {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.articles = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении статей'
      } finally {
        this.loading = false
      }
    },
    async fetchArticleByLink(link: string) {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get(`http://localhost:1337/api/articles?filters[link][$eq]=${encodeURIComponent(link)}&populate[article_tags]=*&populate[country][populate]=*&populate[articlePhotos][populate]=*&populate[user][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`,
            },
          }
        )
        // Если статья найдена, возвращаем первую (или null)
        return response.data.data[0] || null
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении статьи по link'
        return null
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getArticles: (state) => state.articles,
  },
}) 