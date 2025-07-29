import { defineStore } from 'pinia';
import axios from 'axios';
import { u as useRuntimeConfig } from './server.mjs';

const useArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [],
    articleTags: [],
    loading: false,
    error: null,
    articlesLink: []
  }),
  actions: {
    async fetchArticles(force = false) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/articles?populate[article_tags]=*&populate[country][populate]=*&populate[articlePhotos][populate]=*&populate[user][populate]=*", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.articles = response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0442\u0435\u0439";
      } finally {
        this.loading = false;
      }
    },
    async fetchArticleByLink(link) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get(
          `http://localhost:1337/api/articles?filters[link][$eq]=${encodeURIComponent(link)}&populate[article_tags]=*&populate[country][populate]=*&populate[articlePhotos][populate]=*&populate[user][populate]=*&populeta[content]`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`
            }
          }
        );
        this.articlesLink = response.data.data[0];
        return response.data.data[0] || null;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u043F\u043E link";
        return null;
      } finally {
        this.loading = false;
      }
    },
    async fetchArticleTags(force = false) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/article-tags", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.articleTags = response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0442\u0435\u0433\u043E\u0432 \u0441\u0442\u0430\u0442\u0435\u0439";
      } finally {
        this.loading = false;
      }
    },
    async fetchArticlesByCountryLink(countryLink, force = false) {
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get(
          `http://localhost:1337/api/articles?filters[country][link][$eq]=${encodeURIComponent(countryLink)}&populate[article_tags]=*&populate[country][populate]=*&populate[articlePhotos][populate]=*&populate[user][populate]=*`,
          {
            headers: {
              Authorization: `Bearer ${config.public.apiToken}`
            }
          }
        );
        this.articles = response.data.data;
        return response.data.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0442\u0435\u0439 \u043F\u043E country.link";
        return [];
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getArticles: (state) => state.articles,
    getArticleTags: (state) => state.articleTags,
    getArticlesLink: (state) => state.articlesLink
  }
});

export { useArticlesStore as u };
//# sourceMappingURL=articles-b5rl9zuU.mjs.map
