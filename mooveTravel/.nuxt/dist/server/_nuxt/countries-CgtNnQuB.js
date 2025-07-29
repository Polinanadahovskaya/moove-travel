import { defineStore } from "pinia";
import axios from "axios";
import { u as useRuntimeConfig } from "../server.mjs";
import "vue";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
const useCountriesStore = defineStore("countries", {
  state: () => ({
    countries: [],
    loading: false,
    error: null,
    currentCountry: null
  }),
  actions: {
    async fetchCountries(force = false) {
      if (this.countries.length && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/countries?populate=image", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.countries = response.data.data;
      } catch (e) {
        this.error = e.message || "Ошибка при получении стран";
      } finally {
        this.loading = false;
      }
    },
    async fetchCountryByLink(link, force = false) {
      if (this.currentCountry && this.currentCountry.link === link && !force) return this.currentCountry;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get(`http://localhost:1337/api/countries?filters[link][$eq]=${link}&populate=image&populate=backgroundImage`, {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.currentCountry = response.data.data[0] || null;
        return this.currentCountry;
      } catch (e) {
        this.error = e.message || "Ошибка при получении страны";
        return null;
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getCountries: (state) => state.countries,
    getCurrentCountry: (state) => state.currentCountry
  }
});
export {
  useCountriesStore as u
};
//# sourceMappingURL=countries-CgtNnQuB.js.map
