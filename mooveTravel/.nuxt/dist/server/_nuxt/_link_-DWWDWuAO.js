import { computed, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import TubArticle from "./tubArticle-CndrxzAD.js";
import { u as useArticlesStore } from "./articles-Cn_LJMoj.js";
import { u as useCountriesStore } from "./countries-BbO1tK4T.js";
import { _ as _export_sfc, a as useNuxtApp, d as useRoute, c as useRouter } from "../server.mjs";
import { u as useHead } from "./v3-jeJGgwfC.js";
import { u as useAsyncData } from "./asyncData-DHRnzQXn.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "marked";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = {
  __name: "[link]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $getImageUrl } = useNuxtApp();
    const articlesStore = useArticlesStore();
    const countriesStore = useCountriesStore();
    const route = useRoute();
    useRouter();
    const countryLink = computed(() => route.params.link);
    const articles = computed(() => articlesStore.getArticles);
    const country = computed(() => countriesStore.getCurrentCountry);
    useHead(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        title: ((_a = country.value) == null ? void 0 : _a.name) ? `Туры в ${country.value.name} | Moov Travel` : "Направления | Moov Travel",
        meta: [
          { name: "description", content: ((_b = country.value) == null ? void 0 : _b.description) || `Лучшие туры и предложения по направлению. Узнайте больше о путешествиях с Moov Travel.` },
          { property: "og:title", content: ((_c = country.value) == null ? void 0 : _c.name) ? `Туры в ${country.value.name} | Moov Travel` : "Направления | Moov Travel" },
          { property: "og:description", content: ((_d = country.value) == null ? void 0 : _d.description) || `Лучшие туры и предложения по направлению. Узнайте больше о путешествиях с Moov Travel.` },
          { property: "og:image", content: $getImageUrl((_f = (_e = country.value) == null ? void 0 : _e.mainPhoto) == null ? void 0 : _f.url) },
          { property: "og:type", content: "website" },
          { property: "og:url", content: `https://moov-travel.ru/country/${countryLink.value}` }
        ],
        link: [
          { rel: "canonical", href: `https://moov-travel.ru/country/${countryLink.value}` }
        ]
      };
    });
    [__temp, __restore] = withAsyncContext(() => useAsyncData("country", () => countriesStore.fetchCountryByLink(countryLink.value))), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("countryArticles", () => articlesStore.fetchArticlesByCountryLink(countryLink.value))), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-949783d3><div class="country-block" data-v-949783d3><div class="back-country" data-v-949783d3><div class="header-content" data-v-949783d3><h1 data-v-949783d3>${ssrInterpolate(((_a = country.value) == null ? void 0 : _a.name) || "...")}</h1><button class="back-btn" data-v-949783d3>← Назад</button></div></div><!--[-->`);
      ssrRenderList(articles.value, (art) => {
        _push(`<div data-v-949783d3>`);
        _push(ssrRenderComponent(TubArticle, { article: art }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!articles.value.length) {
        _push(`<div class="no-articles-message" data-v-949783d3> Похоже, для этой страны пока нет статей. Мы уже работаем над тем, чтобы поделиться с вами интересной информацией и советами по путешествиям! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/country/[link].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-949783d3"]]);
export {
  _link_ as default
};
//# sourceMappingURL=_link_-DWWDWuAO.js.map
