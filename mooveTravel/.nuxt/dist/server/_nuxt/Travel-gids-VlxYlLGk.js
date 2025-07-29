import { ref, withAsyncContext, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import bestVariant from "./bestVariant-CwDrC-Gj.js";
import tubCountry from "./tubCountry-DeDJdisX.js";
import PopupTravelGid from "./popupTravelGid-DtucLwIg.js";
import PopupApplication from "./popupApplication-DEi7na23.js";
import { storeToRefs } from "pinia";
import { u as usePagesStore } from "./pages-BW6208qI.js";
import { u as useCountriesStore } from "./countries-CgtNnQuB.js";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-DwIDDKq-.js";
import { u as useAsyncData } from "./asyncData-Bo-BqEjD.js";
import { _ as _export_sfc, c as useRouter } from "../server.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "vue-router";
import "imask";
import "./popupThankYou-DzMOwELb.js";
import "./tourOrder-BxPrspMm.js";
import "axios";
import "D:/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
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
      title: "Travel-гиды | Moov Travel",
      meta: [
        { name: "description", content: "Полезные travel-гиды по разным странам от команды Moov Travel." },
        { property: "og:title", content: "Travel-гиды | Moov Travel" },
        { property: "og:description", content: "Полезные travel-гиды по разным странам от команды Moov Travel." },
        { property: "og:image", content: "/src/assets/images/logoMoov.svg" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://moov-travel.ru/Travel-gids" }
      ],
      link: [
        { rel: "canonical", href: "https://moov-travel.ru/Travel-gids" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-028cb27c><div class="travel-body container" data-v-028cb27c><div class="travel-gid" data-v-028cb27c><h1 class="travel-tittle" data-v-028cb27c>TRAVEL-ГИДЫ</h1><div class="travel-border" data-v-028cb27c></div></div><div class="travel-text" data-v-028cb27c>${ssrInterpolate(unref(guidePage)?.description)}</div><h2 class="travel-tittle travel-country" data-v-028cb27c>Лучшие предложения</h2><div class="travel-grid" data-v-028cb27c><!--[-->`);
      ssrRenderList(unref(guidePage)?.bestGuides, (arr) => {
        _push(`<div data-v-028cb27c>`);
        _push(ssrRenderComponent(bestVariant, {
          info: arr?.travel_guide
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><h2 class="travel-country" data-v-028cb27c>Страны</h2><div class="travel-grid gid-trav" data-v-028cb27c><!--[-->`);
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
export {
  TravelGids as default
};
//# sourceMappingURL=Travel-gids-VlxYlLGk.js.map
