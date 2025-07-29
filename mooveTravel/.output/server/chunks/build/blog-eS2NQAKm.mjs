import PopupApplication from './popupApplication-DEi7na23.mjs';
import { ref, computed, withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import tubCountry from './tubCountry-DeDJdisX.mjs';
import { u as useCountriesStore } from './countries-CgtNnQuB.mjs';
import { u as usePagesStore } from './pages-BW6208qI.mjs';
import { u as useArticlesStore } from './articles-b5rl9zuU.mjs';
import { defineStore } from 'pinia';
import axios from 'axios';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { useRouter } from 'vue-router';
import TubArticle from './tubArticle-C6XeZAy9.mjs';
import { u as useHead } from './v3-DwIDDKq-.mjs';
import { u as useAsyncData } from './asyncData-Bo-BqEjD.mjs';
import './tourOrder-BxPrspMm.mjs';
import './popupThankYou-DzMOwELb.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchUsers(force = false) {
      if (this.users.length && !force) return;
      this.loading = true;
      this.error = null;
      try {
        const config = useRuntimeConfig();
        const response = await axios.get("http://localhost:1337/api/users", {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`
          }
        });
        this.users = response.data;
      } catch (e) {
        this.error = e.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439";
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    getUsers: (state) => state.users
  }
});
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const countriesStore = useCountriesStore();
    const pagesStore = usePagesStore();
    const articlesStore = useArticlesStore();
    const usersStore = useUsersStore();
    useRouter();
    const searchQuery = ref("");
    const articles = computed(() => articlesStore.getArticles);
    const typeCountry = computed(() => {
      var _a;
      return (_a = articlesStore.getArticles) == null ? void 0 : _a.map((tag) => {
        var _a2;
        return ((_a2 = tag == null ? void 0 : tag.country) == null ? void 0 : _a2.name) || "";
      });
    });
    const typeAuthors = computed(() => {
      var _a;
      return (_a = articlesStore.getArticles) == null ? void 0 : _a.map((tag) => {
        var _a2;
        return ((_a2 = tag == null ? void 0 : tag.user) == null ? void 0 : _a2.fio) || "";
      });
    });
    const typeFilters = computed(() => articlesStore.getArticleTags.map((tag) => (tag == null ? void 0 : tag.name) || ""));
    const popularCountry = computed(() => countriesStore.getCountries);
    const selectedCountry = ref([]);
    const selectedType = ref([]);
    const selectedAuthor = ref([]);
    const filteredArticles = computed(() => {
      return articles.value.filter((art) => {
        var _a;
        let match = true;
        if (searchQuery.value.trim()) {
          const title = ((_a = art.title) == null ? void 0 : _a.toLowerCase()) || "";
          const query = searchQuery.value.toLowerCase();
          if (!title.includes(query)) {
            match = false;
          }
        }
        if (selectedCountry.value.length && !selectedCountry.value.includes(art.country.name)) match = false;
        if (selectedType.value.length && !(art.article_tags || []).some((tag) => selectedType.value.includes(tag == null ? void 0 : tag.name))) match = false;
        if (selectedAuthor.value.length && !selectedAuthor.value.includes(art.user.fio)) match = false;
        return match;
      });
    });
    ref(0);
    const isMobile = computed(() => {
      {
        return false;
      }
    });
    const blogData = computed(() => pagesStore.getBlogPage);
    [__temp, __restore] = withAsyncContext(() => useAsyncData("blogPage", () => pagesStore.fetchBlogPage())), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("countries", () => countriesStore.fetchCountries())), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("articles", () => articlesStore.fetchArticles())), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("articleTags", () => articlesStore.fetchArticleTags())), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("users", () => usersStore.fetchUsers())), await __temp, __restore();
    useHead({
      title: "\u0411\u043B\u043E\u0433 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445 | Moov Travel",
      meta: [
        { name: "description", content: "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438\u0437 \u043C\u0438\u0440\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0432 \u043D\u0430\u0448\u0435\u043C \u0431\u043B\u043E\u0433\u0435." },
        { property: "og:title", content: "\u0411\u043B\u043E\u0433 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445 | Moov Travel" },
        { property: "og:description", content: "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438\u0437 \u043C\u0438\u0440\u0430 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0439 \u0432 \u043D\u0430\u0448\u0435\u043C \u0431\u043B\u043E\u0433\u0435." },
        { property: "og:image", content: "/src/assets/images/logoMoov.svg" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://moov-travel.ru/blog" }
      ],
      link: [
        { rel: "canonical", href: "https://moov-travel.ru/blog" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_popup_application = PopupApplication;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-page" }, _attrs))} data-v-d5bb4273><div class="blog-tittle-header" data-v-d5bb4273><h1 class="blog-tittle" data-v-d5bb4273>\u0411\u043B\u043E\u0433</h1><div class="blog-border" data-v-d5bb4273></div></div><div class="blog-text" data-v-d5bb4273>${ssrInterpolate((_a = blogData.value) == null ? void 0 : _a.description)}</div><div class="blog-grid" data-v-d5bb4273><!--[-->`);
      ssrRenderList(popularCountry.value, (arr) => {
        _push(`<div class="blog-item" data-v-d5bb4273>`);
        _push(ssrRenderComponent(tubCountry, { country: arr }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="blog-border line" data-v-d5bb4273></div><div class="all-article" data-v-d5bb4273><h2 class="article-tittle" data-v-d5bb4273>\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438</h2><div class="tab-art" data-v-d5bb4273><div class="article-tab-first" data-v-d5bb4273>`);
      if (!isMobile.value) {
        _push(`<div class="article-search" data-v-d5bb4273><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="\u041F\u043E\u0438\u0441\u043A" class="search-input" data-v-d5bb4273></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-article" data-v-d5bb4273>`);
      if (filteredArticles.value.slice(0, 3).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(filteredArticles.value.slice(0, 3), (art, idx) => {
          _push(`<div data-v-d5bb4273>`);
          _push(ssrRenderComponent(TubArticle, { article: art }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="no-articles-message" data-v-d5bb4273> \u0421\u0442\u0430\u0442\u0435\u0439 \u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u043C \u043F\u043E\u043A\u0430 \u043D\u0435\u0442, \u043D\u043E \u043C\u044B \u0443\u0441\u0435\u0440\u0434\u043D\u043E \u0442\u0440\u0443\u0434\u0438\u043C\u0441\u044F \u043D\u0430\u0434 \u0438\u0445 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C. </div>`);
      }
      _push(`</div></div><div class="article-filter-body" data-v-d5bb4273>`);
      if (isMobile.value) {
        _push(`<div class="article-search" data-v-d5bb4273><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="\u041F\u043E\u0438\u0441\u043A" class="search-input" data-v-d5bb4273></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-filter" data-v-d5bb4273><div class="filter-section" data-v-d5bb4273><div class="filter-name" data-v-d5bb4273>\u041F\u043E \u0441\u0442\u0440\u0430\u043D\u0430\u043C</div><div class="filter-list" data-v-d5bb4273><!--[-->`);
      ssrRenderList(typeCountry.value, (filter) => {
        _push(`<div class="${ssrRenderClass([{ selected: selectedCountry.value.includes(filter) }, "filter-element"])}" data-v-d5bb4273>${ssrInterpolate(filter)}</div>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-d5bb4273><div class="filter-name" data-v-d5bb4273>\u041F\u043E \u0442\u0438\u043F\u0430\u043C \u043E\u0442\u0434\u044B\u0445\u0430</div><div class="filter-list" data-v-d5bb4273><!--[-->`);
      ssrRenderList(typeFilters.value, (filter) => {
        _push(`<div class="${ssrRenderClass([{ selected: selectedType.value.includes(filter) }, "filter-element"])}" data-v-d5bb4273>${ssrInterpolate(filter)}</div>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-d5bb4273><div class="filter-name" data-v-d5bb4273>\u0410\u0432\u0442\u043E\u0440</div><div class="filter-list" data-v-d5bb4273><!--[-->`);
      ssrRenderList(typeAuthors.value, (filter) => {
        _push(`<div class="${ssrRenderClass([{ selected: selectedAuthor.value.includes(filter) }, "filter-element"])}" data-v-d5bb4273>${ssrInterpolate(filter)}</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_popup_application, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5bb4273"]]);

export { blog as default };
//# sourceMappingURL=blog-eS2NQAKm.mjs.map
