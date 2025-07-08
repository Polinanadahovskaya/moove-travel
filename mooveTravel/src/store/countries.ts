import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: [] as any[],
    loading: false as boolean,
    error: null as string | null,
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
  },
  getters: {
    getCountries: (state) => state.countries,
  },
}) 