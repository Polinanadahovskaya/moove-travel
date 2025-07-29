import { computed, withAsyncContext, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import gidCoutryTab from "./gidCoutryTab-C5U-zzwx.js";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-DwIDDKq-.js";
import { u as useAsyncData } from "./asyncData-Bo-BqEjD.js";
import { _ as _export_sfc, c as useRouter, d as useRoute } from "../server.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { u as useTravelGuidesStore } from "./travelGuides-CaLzxrd2.js";
import { u as useCountriesStore } from "./countries-CgtNnQuB.js";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
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
    useHead(() => ({
      title: country.value?.name ? `Гайды ${country.value.name} | Moov Travel` : `Гайды по ${link} | Moov Travel`,
      meta: [
        { name: "description", content: `Все гиды и полезные советы по направлению ${country.value?.name || link} от Moov Travel.` },
        { property: "og:title", content: country.value?.name ? `Гайды по ${country.value.name} | Moov Travel` : `Гайды по ${link} | Moov Travel` },
        { property: "og:description", content: `Все гиды и полезные советы по направлению ${country.value?.name || link} от Moov Travel.` },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://moov-travel.ru/country-guide/${link}` }
      ],
      link: [
        { rel: "canonical", href: `https://moov-travel.ru/country-guide/${link}` }
      ]
    }));
    [__temp, __restore] = withAsyncContext(() => useAsyncData("countryGuides", () => travelGuidesStore.fetchGuidesByCountrySlug(link))), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("country", () => countriesStore.fetchCountryByLink(link))), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-be820a19><div data-v-be820a19><div class="gid-header" data-v-be820a19><div class="gid_back" data-v-be820a19>← Назад</div><div class="gid_tittle" data-v-be820a19>${ssrInterpolate(country.value?.name || "Страна")}</div></div><div class="gid-tabs" data-v-be820a19>`);
      if (currentGuides.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(currentGuides.value.slice(0, 3), (guid) => {
          _push(`<div data-v-be820a19>`);
          _push(ssrRenderComponent(gidCoutryTab, { guid }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="no-guides-message" data-v-be820a19> Путеводителей по этой стране пока нет, но мы обязательно подготовим для вас полезные советы и интересные маршруты! </div>`);
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
export {
  _link_ as default
};
//# sourceMappingURL=_link_-CDsATkIO.js.map
