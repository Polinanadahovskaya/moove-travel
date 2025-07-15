import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'

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
        const res = await fetch('http://localhost:1337/api/tour-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.public.API_ORDER_TOKEN}`,
          },
          body: JSON.stringify({ data: payload }),
        })
        if (!res.ok) throw new Error('Ошибка при создании заказа')
        const data = await res.json()
        this.order = data
        return data
      } catch (e: any) {
        this.error = e.message || 'Неизвестная ошибка'
        throw e
      } finally {
        this.loading = false
      }
    },
  },
}) 