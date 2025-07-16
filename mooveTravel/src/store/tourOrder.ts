import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'
import axios from 'axios'

export const useTourOrderStore = defineStore('tourOrder', {
  state: () => ({
    loading: false,
    error: null as string | null,
    order: null as any,
  }),
  getters: {
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
    getOrder: (state) => state.order,
  },
  actions: {
    async createTourOrder(payload: any) {
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const res = await axios.post('http://localhost:1337/api/tour-orders/send',
          { data: payload },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${config.public.API_ORDER_TOKEN}`,
            },
          }
        )
        this.order = res.data
        return res.data
      } catch (e: any) {
        this.error = e.message || 'Неизвестная ошибка'
        throw e
      } finally {
        this.loading = false
      }
    },
  },
}) 