import { defineStore } from 'pinia';
import axios from 'axios';
import { u as useRuntimeConfig } from './server.mjs';

const usePagesStore = defineStore("pages", {
  state: () => ({
    mainPage: null,
    loading: false,
    error: null,
    aboutUsPage: null,
    blogPage: null,
    guidePage: null,
    // добавлено для guide-page
    loyarPage: null
  }),
  actions: {
    async fetchMainPage(force = false) {
      if (this.mainPage && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/main-page?populate[aboutUs][populate]=backgroundImage&populate[advantages][populate]=image", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.mainPage = response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B";
      } finally {
        this.loading = false;
      }
    },
    async fetchAboutUsPage(force = false) {
      if (this.aboutUsPage && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/about-us-page?populate[banner][populate]=backgroundImage&populate[office][populate]=image&populate[personal][populate]=image", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.aboutUsPage = response.data.data;
      } catch (e) {
        this.error = e.message || '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B "\u041E \u043D\u0430\u0441"';
      } finally {
        this.loading = false;
      }
    },
    async fetchBlogPage(force = false) {
      if (this.blogPage && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/blog?populate=*", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.blogPage = response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0431\u043B\u043E\u0433\u0430";
      } finally {
        this.loading = false;
      }
    },
    async fetchGuidePage(force = false) {
      if (this.guidePage && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/guide-page", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.guidePage = response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0433\u0430\u0439\u0434\u0430";
      } finally {
        this.loading = false;
      }
    },
    async fetchLoyarPage(force = false) {
      if (this.loyarPage && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/loyar-information?populate=*", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.loyarPage = response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u041F\u0440\u0430\u0432\u043E\u0432\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432";
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getMainPage: (state) => state.mainPage,
    getAboutUsPage: (state) => state.aboutUsPage,
    getBlogPage: (state) => state.blogPage,
    getGuidePage: (state) => state.guidePage,
    // добавлен геттер для guide-page
    getLoyarPage: (state) => state.loyarPage
  }
});

export { usePagesStore as u };
//# sourceMappingURL=pages-BW6208qI.mjs.map
