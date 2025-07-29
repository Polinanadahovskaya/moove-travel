import { computed, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import gidCoutryTab from './gidCoutryTab-C5U-zzwx.mjs';
import { u as useHead } from './v3-DwIDDKq-.mjs';
import { u as useAsyncData } from './asyncData-Bo-BqEjD.mjs';
import { _ as _export_sfc, c as useRouter, d as useRoute } from './server.mjs';
import { u as useTravelGuidesStore } from './travelGuides-CaLzxrd2.mjs';
import { u as useCountriesStore } from './countries-CgtNnQuB.mjs';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'axios';

const _sfc_main = {
  __name: "[link]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const route = useRoute();
    const travelGuidesStore = useTravelGuidesStore();
    const countriesStore = useCountriesStore();
    const link = route.params.link;
    const currentGuides = computed(() => travelGuidesStore.getGuides);
    const country = computed(() => countriesStore.getCurrentCountry);
    useHead(() => {
      var _a, _b, _c, _d;
      return {
        title: ((_a = country.value) == null ? void 0 : _a.name) ? `\u0413\u0430\u0439\u0434\u044B ${country.value.name} | Moov Travel` : `\u0413\u0430\u0439\u0434\u044B \u043F\u043E ${link} | Moov Travel`,
        meta: [
          { name: "description", content: `\u0412\u0441\u0435 \u0433\u0438\u0434\u044B \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E ${((_b = country.value) == null ? void 0 : _b.name) || link} \u043E\u0442 Moov Travel.` },
          { property: "og:title", content: ((_c = country.value) == null ? void 0 : _c.name) ? `\u0413\u0430\u0439\u0434\u044B \u043F\u043E ${country.value.name} | Moov Travel` : `\u0413\u0430\u0439\u0434\u044B \u043F\u043E ${link} | Moov Travel` },
          { property: "og:description", content: `\u0412\u0441\u0435 \u0433\u0438\u0434\u044B \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E ${((_d = country.value) == null ? void 0 : _d.name) || link} \u043E\u0442 Moov Travel.` },
          { property: "og:type", content: "website" },
          { property: "og:url", content: `https://moov-travel.ru/country-guide/${link}` }
        ],
        link: [
          { rel: "canonical", href: `https://moov-travel.ru/country-guide/${link}` }
        ]
      };
    });
    [__temp, __restore] = withAsyncContext(() => useAsyncData("countryGuides", () => travelGuidesStore.fetchGuidesByCountrySlug(link))), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("country", () => countriesStore.fetchCountryByLink(link))), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-be820a19><div data-v-be820a19><div class="gid-header" data-v-be820a19><div class="gid_back" data-v-be820a19>\u2190 \u041D\u0430\u0437\u0430\u0434</div><div class="gid_tittle" data-v-be820a19>${ssrInterpolate(((_a = country.value) == null ? void 0 : _a.name) || "\u0421\u0442\u0440\u0430\u043D\u0430")}</div></div><div class="gid-tabs" data-v-be820a19>`);
      if (currentGuides.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(currentGuides.value.slice(0, 3), (guid) => {
          _push(`<div data-v-be820a19>`);
          _push(ssrRenderComponent(gidCoutryTab, { guid }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="no-guides-message" data-v-be820a19> \u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043F\u043E \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442, \u043D\u043E \u043C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u044B! </div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/country-guide/[link].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be820a19"]]);

export { _link_ as default };
//# sourceMappingURL=_link_-CDsATkIO.mjs.map
