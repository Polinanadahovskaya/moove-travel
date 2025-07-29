import { defineStore } from 'pinia';
import axios from 'axios';
import { u as useRuntimeConfig } from './server.mjs';

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
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0433\u0430\u0439\u0434\u0430";
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
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u0433\u0430\u0439\u0434\u043E\u0432";
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

export { useTravelGuidesStore as u };
//# sourceMappingURL=travelGuides-CaLzxrd2.mjs.map
