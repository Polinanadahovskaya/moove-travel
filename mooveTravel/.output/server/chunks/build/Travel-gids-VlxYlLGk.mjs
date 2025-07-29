import { ref, withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import bestVariant from './bestVariant-CwDrC-Gj.mjs';
import tubCountry from './tubCountry-DeDJdisX.mjs';
import PopupTravelGid from './popupTravelGid-DtucLwIg.mjs';
import PopupApplication from './popupApplication-DEi7na23.mjs';
import { storeToRefs } from 'pinia';
import { u as usePagesStore } from './pages-BW6208qI.mjs';
import { u as useCountriesStore } from './countries-CgtNnQuB.mjs';
import { u as useHead } from './v3-DwIDDKq-.mjs';
import { u as useAsyncData } from './asyncData-Bo-BqEjD.mjs';
import { _ as _export_sfc, c as useRouter } from './server.mjs';
import 'vue-router';
import './popupThankYou-DzMOwELb.mjs';
import './tourOrder-BxPrspMm.mjs';
import 'axios';
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

const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "Travel-Gids"
}, {
  __name: "Travel-gids",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const countriesStore = useCountriesStore();
    const pagesStore = usePagesStore();
    const { guidePage, loading, error } = storeToRefs(pagesStore);
    ref(false);
    ref(false);
    ref(9);
    [__temp, __restore] = withAsyncContext(() => useAsyncData("countries", () => countriesStore.fetchCountries())), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("guidePage", () => pagesStore.fetchGuidePage())), await __temp, __restore();
    const popularCountry = computed(() => countriesStore.getCountries);
    useHead({
      title: "Travel-\u0433\u0438\u0434\u044B | Moov Travel",
      meta: [
        { name: "description", content: "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 travel-\u0433\u0438\u0434\u044B \u043F\u043E \u0440\u0430\u0437\u043D\u044B\u043C \u0441\u0442\u0440\u0430\u043D\u0430\u043C \u043E\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B Moov Travel." },
        { property: "og:title", content: "Travel-\u0433\u0438\u0434\u044B | Moov Travel" },
        { property: "og:description", content: "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 travel-\u0433\u0438\u0434\u044B \u043F\u043E \u0440\u0430\u0437\u043D\u044B\u043C \u0441\u0442\u0440\u0430\u043D\u0430\u043C \u043E\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B Moov Travel." },
        { property: "og:image", content: "/src/assets/images/logoMoov.svg" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://moov-travel.ru/Travel-gids" }
      ],
      link: [
        { rel: "canonical", href: "https://moov-travel.ru/Travel-gids" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-028cb27c><div class="travel-body container" data-v-028cb27c><div class="travel-gid" data-v-028cb27c><h1 class="travel-tittle" data-v-028cb27c>TRAVEL-\u0413\u0418\u0414\u042B</h1><div class="travel-border" data-v-028cb27c></div></div><div class="travel-text" data-v-028cb27c>${ssrInterpolate((_a = unref(guidePage)) == null ? void 0 : _a.description)}</div><h2 class="travel-tittle travel-country" data-v-028cb27c>\u041B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F</h2><div class="travel-grid" data-v-028cb27c><!--[-->`);
      ssrRenderList((_b = unref(guidePage)) == null ? void 0 : _b.bestGuides, (arr) => {
        _push(`<div data-v-028cb27c>`);
        _push(ssrRenderComponent(bestVariant, {
          info: arr == null ? void 0 : arr.travel_guide
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><h2 class="travel-country" data-v-028cb27c>\u0421\u0442\u0440\u0430\u043D\u044B</h2><div class="travel-grid gid-trav" data-v-028cb27c><!--[-->`);
      ssrRenderList(popularCountry.value.slice(0, 9), (arr) => {
        _push(`<div data-v-028cb27c>`);
        _push(ssrRenderComponent(tubCountry, {
          country: arr,
          id: "gid"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(PopupTravelGid, { class: "none-art" }, null, _parent));
      _push(ssrRenderComponent(unref(PopupApplication), { class: "none-desk" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Travel-gids.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TravelGids = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-028cb27c"]]);

export { TravelGids as default };
//# sourceMappingURL=Travel-gids-VlxYlLGk.mjs.map
