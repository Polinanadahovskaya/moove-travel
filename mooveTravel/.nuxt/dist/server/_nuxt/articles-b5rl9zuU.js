import { defineStore } from "pinia";
import axios from "axios";
import { u as useRuntimeConfig } from "../server.mjs";
import "vue";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
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
        this.error = e.message || "Ошибка при получении статей";
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
        this.error = e.message || "Ошибка при получении статьи по link";
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
        this.error = e.message || "Ошибка при получении тегов статей";
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
        this.error = e.message || "Ошибка при получении статей по country.link";
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
export {
  useArticlesStore as u
};
//# sourceMappingURL=articles-b5rl9zuU.js.map
