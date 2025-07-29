import { computed, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import TubArticle from "./tubArticle-C6XeZAy9.js";
import { u as useArticlesStore } from "./articles-b5rl9zuU.js";
import { u as useCountriesStore } from "./countries-CgtNnQuB.js";
import { _ as _export_sfc, a as useNuxtApp, d as useRoute, c as useRouter } from "../server.mjs";
import { u as useHead } from "./v3-DwIDDKq-.js";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "marked";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
import "D:/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
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
    const headerContentStyle = computed(() => {
      const rawUrl = country.value?.backgroundImage?.url;
      if (rawUrl) {
        const imageUrl = $getImageUrl(rawUrl);
        return {
          backgroundImage: `url('${imageUrl}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        };
      } else {
        return {
          background: "#FFB651"
        };
      }
    });
    useHead(() => ({
      title: country.value?.name ? `Туры в ${country.value.name} | Moov Travel` : "Направления | Moov Travel",
      meta: [
        { name: "description", content: country.value?.description || `Лучшие туры и предложения по направлению. Узнайте больше о путешествиях с Moov Travel.` },
        { property: "og:title", content: country.value?.name ? `Туры в ${country.value.name} | Moov Travel` : "Направления | Moov Travel" },
        { property: "og:description", content: country.value?.description || `Лучшие туры и предложения по направлению. Узнайте больше о путешествиях с Moov Travel.` },
        { property: "og:image", content: $getImageUrl(country.value?.mainPhoto?.url) },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://moov-travel.ru/country/${countryLink.value}` }
      ],
      link: [
        { rel: "canonical", href: `https://moov-travel.ru/country/${countryLink.value}` }
      ]
    }));
    [__temp, __restore] = withAsyncContext(() => countriesStore.fetchCountryByLink(countryLink.value)), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => articlesStore.fetchArticlesByCountryLink(countryLink.value)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-80b645a2><div class="country-block" data-v-80b645a2><div class="back-country" data-v-80b645a2><div class="header-content" style="${ssrRenderStyle(headerContentStyle.value)}" data-v-80b645a2><h1 data-v-80b645a2>${ssrInterpolate(country.value?.name || "...")}</h1><button class="back-btn" data-v-80b645a2>← Назад</button></div></div><!--[-->`);
      ssrRenderList(articles.value, (art) => {
        _push(`<div data-v-80b645a2>`);
        _push(ssrRenderComponent(TubArticle, { article: art }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!articles.value.length) {
        _push(`<div class="no-articles-message" data-v-80b645a2> Похоже, для этой страны пока нет статей. Мы уже работаем над тем, чтобы поделиться с вами интересной информацией и советами по путешествиям! </div>`);
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
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80b645a2"]]);
export {
  _link_ as default
};
//# sourceMappingURL=_link_-iMTGvyMr.js.map
