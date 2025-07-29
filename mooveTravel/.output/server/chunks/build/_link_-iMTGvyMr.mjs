import { computed, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import TubArticle from './tubArticle-C6XeZAy9.mjs';
import { u as useArticlesStore } from './articles-b5rl9zuU.mjs';
import { u as useCountriesStore } from './countries-CgtNnQuB.mjs';
import { _ as _export_sfc, a as useNuxtApp, d as useRoute, c as useRouter } from './server.mjs';
import { u as useHead } from './v3-DwIDDKq-.mjs';
import 'pinia';
import 'axios';
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
import 'vue-router';

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
      var _a, _b;
      const rawUrl = (_b = (_a = country.value) == null ? void 0 : _a.backgroundImage) == null ? void 0 : _b.url;
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
    useHead(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        title: ((_a = country.value) == null ? void 0 : _a.name) ? `\u0422\u0443\u0440\u044B \u0432 ${country.value.name} | Moov Travel` : "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F | Moov Travel",
        meta: [
          { name: "description", content: ((_b = country.value) == null ? void 0 : _b.description) || `\u041B\u0443\u0447\u0448\u0438\u0435 \u0442\u0443\u0440\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E. \u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445 \u0441 Moov Travel.` },
          { property: "og:title", content: ((_c = country.value) == null ? void 0 : _c.name) ? `\u0422\u0443\u0440\u044B \u0432 ${country.value.name} | Moov Travel` : "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F | Moov Travel" },
          { property: "og:description", content: ((_d = country.value) == null ? void 0 : _d.description) || `\u041B\u0443\u0447\u0448\u0438\u0435 \u0442\u0443\u0440\u044B \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E. \u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445 \u0441 Moov Travel.` },
          { property: "og:image", content: $getImageUrl((_f = (_e = country.value) == null ? void 0 : _e.mainPhoto) == null ? void 0 : _f.url) },
          { property: "og:type", content: "website" },
          { property: "og:url", content: `https://moov-travel.ru/country/${countryLink.value}` }
        ],
        link: [
          { rel: "canonical", href: `https://moov-travel.ru/country/${countryLink.value}` }
        ]
      };
    });
    [__temp, __restore] = withAsyncContext(() => countriesStore.fetchCountryByLink(countryLink.value)), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => articlesStore.fetchArticlesByCountryLink(countryLink.value)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-80b645a2><div class="country-block" data-v-80b645a2><div class="back-country" data-v-80b645a2><div class="header-content" style="${ssrRenderStyle(headerContentStyle.value)}" data-v-80b645a2><h1 data-v-80b645a2>${ssrInterpolate(((_a = country.value) == null ? void 0 : _a.name) || "...")}</h1><button class="back-btn" data-v-80b645a2>\u2190 \u041D\u0430\u0437\u0430\u0434</button></div></div><!--[-->`);
      ssrRenderList(articles.value, (art) => {
        _push(`<div data-v-80b645a2>`);
        _push(ssrRenderComponent(TubArticle, { article: art }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!articles.value.length) {
        _push(`<div class="no-articles-message" data-v-80b645a2> \u041F\u043E\u0445\u043E\u0436\u0435, \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u044B \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u0442\u0430\u0442\u0435\u0439. \u041C\u044B \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u0442\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0438 \u0441\u043E\u0432\u0435\u0442\u0430\u043C\u0438 \u043F\u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u043C! </div>`);
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

export { _link_ as default };
//# sourceMappingURL=_link_-iMTGvyMr.mjs.map
