import { defineStore } from 'pinia';
import axios from 'axios';
import { u as useRuntimeConfig } from './server.mjs';

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
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u043D";
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
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u044B";
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

export { useCountriesStore as u };
//# sourceMappingURL=countries-CgtNnQuB.mjs.map
