import { defineStore } from 'pinia';
import { u as useRuntimeConfig } from './server.mjs';
import axios from 'axios';

const useTourOrderStore = defineStore("tourOrder", {
  state: () => ({
    loading: false,
    error: null,
    order: null
  }),
  getters: {
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
    getOrder: (state) => state.order
  },
  actions: {
    async createTourOrder(payload) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const res = await axios.post(
          "http://localhost:1337/api/tour-orders/send",
          { data: payload },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${config.public.API_ORDER_TOKEN}`
            }
          }
        );
        this.order = res.data;
        return res.data;
      } catch (e) {
        this.error = e.message || "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430";
        throw e;
      } finally {
        this.loading = false;
      }
    }
  }
});

export { useTourOrderStore as u };
//# sourceMappingURL=tourOrder-BxPrspMm.mjs.map
