import { defineStore } from 'pinia'
import axios from 'axios'

export const usePagesStore = defineStore('pages', {
  state: () => ({
    mainPage: null as any,
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async fetchMainPage() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:1337/api/main-page', {
          headers: {
            Authorization: 'Bearer 6b68fc0db1043175f82b6cfab367af1a1466131692e77b4d79c5c0b6e7267d1390fab389d361d6eecb404df882a8322e6f6a7517f814f268e975210d91b75b5ef63500a16afd22548f57a70529d393092aa1bd6bf8d21e2ba9105c32175c63543be017c0d1c40711f4dd2e03e727599b0703c389a0699e3982ee938c35bcd5ac',
          },
        })
        this.mainPage = response.data.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении данных главной страницы'
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getMainPage: (state) => state.mainPage,
  },
}) 