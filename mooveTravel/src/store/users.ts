import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as any[],
    loading: false as boolean,
    error: null as string | null,
  }),
  actions: {
    async fetchUsers(force = false) {
      if (this.users.length && !force) return;
      this.loading = true
      this.error = null
      try {
        const config = useRuntimeConfig()
        const response = await axios.get(`${config.public.apiUrl}/api/users`, {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
          },
        })
        this.users = response.data
      } catch (e: any) {
        this.error = e.message || 'Ошибка при получении пользователей'
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    getUsers: (state) => state.users,
  },
}) 