import PopupApplication from "./popupApplication-DSsuIdMR.js";
import { ref, computed, withAsyncContext, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import tubCountry from "./tubCountry-Cpjc6j-L.js";
import { u as useCountriesStore } from "./countries-BbO1tK4T.js";
import { u as usePagesStore } from "./pages-Bg7tze-Q.js";
import { u as useArticlesStore } from "./articles-Cn_LJMoj.js";
import { defineStore } from "pinia";
import axios from "axios";
import { u as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { useRouter } from "vue-router";
import TubArticle from "./tubArticle-CndrxzAD.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-jeJGgwfC.js";
import { u as useAsyncData } from "./asyncData-DHRnzQXn.js";
import "./tourOrder-OQGqTeWT.js";
import "imask";
import "./popupThankYou-BOY4JreD.js";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "marked";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
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
        this.error = e.message || "Ошибка при получении пользователей";
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
      title: "Блог о путешествиях | Moov Travel",
      meta: [
        { name: "description", content: "Читайте интересные статьи, советы и новости из мира путешествий в нашем блоге." },
        { property: "og:title", content: "Блог о путешествиях | Moov Travel" },
        { property: "og:description", content: "Читайте интересные статьи, советы и новости из мира путешествий в нашем блоге." },
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-page" }, _attrs))} data-v-96a85315><div class="blog-tittle-header" data-v-96a85315><h1 class="blog-tittle" data-v-96a85315>Блог</h1><div class="blog-border" data-v-96a85315></div></div><div class="blog-text" data-v-96a85315>${ssrInterpolate((_a = blogData.value) == null ? void 0 : _a.description)}</div><div class="blog-grid" data-v-96a85315><!--[-->`);
      ssrRenderList(popularCountry.value, (arr) => {
        _push(`<div class="blog-item" data-v-96a85315>`);
        _push(ssrRenderComponent(tubCountry, { country: arr }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="blog-border line" data-v-96a85315></div><div class="all-article" data-v-96a85315><h2 class="article-tittle" data-v-96a85315>Все статьи</h2><div class="tab-art" data-v-96a85315><div class="article-tab-first" data-v-96a85315>`);
      if (!isMobile.value) {
        _push(`<div class="article-search" data-v-96a85315><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Поиск" class="search-input" data-v-96a85315></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-article" data-v-96a85315>`);
      if (filteredArticles.value.slice(0, 3).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(filteredArticles.value.slice(0, 3), (art, idx) => {
          _push(`<div data-v-96a85315>`);
          _push(ssrRenderComponent(TubArticle, { article: art }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="no-articles-message" data-v-96a85315> Статей по данным фильтрам пока нет, но мы усердно трудимся над их написанием. </div>`);
      }
      _push(`</div></div><div class="article-filter-body" data-v-96a85315>`);
      if (isMobile.value) {
        _push(`<div class="article-search" data-v-96a85315><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Поиск" class="search-input" data-v-96a85315></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-filter" data-v-96a85315><div class="filter-section" data-v-96a85315><div class="filter-name" data-v-96a85315>По странам</div><div class="filter-list" data-v-96a85315><!--[-->`);
      ssrRenderList(typeCountry.value, (filter) => {
        _push(`<div class="${ssrRenderClass([{ selected: selectedCountry.value.includes(filter) }, "filter-element"])}" data-v-96a85315>${ssrInterpolate(filter)}</div>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-96a85315><div class="filter-name" data-v-96a85315>По типам отдыха</div><div class="filter-list" data-v-96a85315><!--[-->`);
      ssrRenderList(typeFilters.value, (filter) => {
        _push(`<div class="${ssrRenderClass([{ selected: selectedType.value.includes(filter) }, "filter-element"])}" data-v-96a85315>${ssrInterpolate(filter)}</div>`);
      });
      _push(`<!--]--></div></div><div class="filter-section" data-v-96a85315><div class="filter-name" data-v-96a85315>Автор</div><div class="filter-list" data-v-96a85315><!--[-->`);
      ssrRenderList(typeAuthors.value, (filter) => {
        _push(`<div class="${ssrRenderClass([{ selected: selectedAuthor.value.includes(filter) }, "filter-element"])}" data-v-96a85315>${ssrInterpolate(filter)}</div>`);
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
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-96a85315"]]);
export {
  blog as default
};
//# sourceMappingURL=blog-BEOmdVYf.js.map
