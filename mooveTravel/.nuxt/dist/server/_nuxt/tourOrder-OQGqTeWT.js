import { defineStore } from "pinia";
import { u as useRuntimeConfig } from "../server.mjs";
import "vue";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import axios from "axios";
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
        this.error = e.message || "Неизвестная ошибка";
        throw e;
      } finally {
        this.loading = false;
      }
    }
  }
});
export {
  useTourOrderStore as u
};
//# sourceMappingURL=tourOrder-OQGqTeWT.js.map
