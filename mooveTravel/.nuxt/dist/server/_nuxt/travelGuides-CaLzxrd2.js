import { defineStore } from "pinia";
import axios from "axios";
import { u as useRuntimeConfig } from "../server.mjs";
import "vue";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
const useTravelGuidesStore = defineStore("travelGuides", {
  state: () => ({
    guides: [],
    guide: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchGuideBySlug(slug) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get(
          `http://localhost:1337/api/travel-guides?filters[link][$eq]=${slug}&populate[country][populate]=*&populate[images][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`
            }
          }
        );
        this.guide = response.data.data[0] || null;
      } catch (e) {
        this.error = e.message || "Ошибка при получении гайда";
      } finally {
        this.loading = false;
      }
    },
    async fetchGuidesByCountrySlug(countrySlug) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get(
          `http://localhost:1337/api/travel-guides?filters[country][link][$eq]=${countrySlug}&populate[country][populate]=*&populate[images][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`
            }
          }
        );
        this.guides = response.data.data || [];
      } catch (e) {
        this.error = e.message || "Ошибка при получении списка гайдов";
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getGuides: (state) => state.guides,
    getGuide: (state) => state.guide
  }
});
export {
  useTravelGuidesStore as u
};
//# sourceMappingURL=travelGuides-CaLzxrd2.js.map
