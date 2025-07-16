// Пример использования стора travelGuides:
//
// import { useTravelGuidesStore } from '@/store/travelGuides'
// const travelGuidesStore = useTravelGuidesStore()
//
// Получить гайд по slug:
// await travelGuidesStore.fetchGuideBySlug('moscow')
// const guide = travelGuidesStore.getGuide
//
// Получить список гайдов по slug страны:
// await travelGuidesStore.fetchGuidesByCountrySlug('russia')
// const guides = travelGuidesStore.getGuides
//
// ... существующий код ...
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const useTravelGuidesStore = defineStore('travelGuides', {
  state: () => ({
    guides: [] as any[],
    guide: null as any | null,
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async fetchGuideBySlug(slug: string) {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get(`http://localhost:1337/api/travel-guide?filters[slug][$eq]=${slug}`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`,
            },
          }
        )
        this.guide = response.data.data[0] || null
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении гайда'
      } finally {
        this.loading = false
      }
    },
    async fetchGuidesByCountrySlug(countrySlug: string) {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get(`http://localhost:1337/api/travel-guide?filters[country][slug][$eq]=${countrySlug}`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`,
            },
          }
        )
        this.guides = response.data.data || []
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении списка гайдов'
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getGuides: (state) => state.guides,
    getGuide: (state) => state.guide,
  },
}) 