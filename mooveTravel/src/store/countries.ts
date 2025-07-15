import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: [] as any[],
    loading: false as boolean,
    error: null as string | null,
    currentCountry: null as any | null,
  }),
  actions: {
    async fetchCountries() {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get('http://localhost:1337/api/countries?populate=image', {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.countries = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении стран'
      } finally {
        this.loading = false
      }
    },
    async fetchCountryByLink(link: string) {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get(`http://localhost:1337/api/countries?filters[link][$eq]=${link}&populate=image`, {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        // сохраняем первую найденную страну в currentCountry
        this.currentCountry = response.data.data[0] || null
        return this.currentCountry
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении страны'
        //this.currentCountry = null
        return null
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getCountries: (state) => state.countries,
    getCurrentCountry: (state) => state.currentCountry,
  },
}) 