import { withAsyncContext, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import PopupApplication from "./popupApplication-DEi7na23.js";
import teamTab from "./teamTab-BQb-VdHI.js";
import { u as usePagesStore } from "./pages-BW6208qI.js";
import { storeToRefs } from "pinia";
import { _ as _export_sfc, a as useNuxtApp } from "../server.mjs";
import { u as useHead } from "./v3-DwIDDKq-.js";
import { u as useAsyncData } from "./asyncData-Bo-BqEjD.js";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "./tourOrder-BxPrspMm.js";
import "axios";
import "imask";
import "./popupThankYou-DzMOwELb.js";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "About"
}, {
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const pagesStore = usePagesStore();
    const { getAboutUsPage, loading, error } = storeToRefs(pagesStore);
    [__temp, __restore] = withAsyncContext(() => useAsyncData("aboutUsPage", () => pagesStore.fetchAboutUsPage())), await __temp, __restore();
    const aboutMoove = computed(() => {
      if (!getAboutUsPage.value?.banner) return [];
      return [
        { id: getAboutUsPage.value?.banner.firstNumber, text: getAboutUsPage.value?.banner.firstText },
        { id: getAboutUsPage.value?.banner.secondNumber, text: getAboutUsPage.value?.banner.secondText },
        { id: getAboutUsPage.value?.banner.thirdNumber, text: getAboutUsPage.value?.banner.thirdText }
      ];
    });
    const nuxtApp = useNuxtApp();
    const $getImageUrl = nuxtApp.$getImageUrl;
    useHead({
      title: "О нас | Moov Travel",
      meta: [
        { name: "description", content: "Узнайте больше о туристическом агентстве Moov Travel, нашей команде и ценностях." },
        { property: "og:title", content: "О нас | Moov Travel" },
        { property: "og:description", content: "Узнайте больше о туристическом агентстве Moov Travel, нашей команде и ценностях." },
        { property: "og:image", content: "/src/assets/images/logoMoov.svg" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://moov-travel.ru/about" }
      ],
      link: [
        { rel: "canonical", href: "https://moov-travel.ru/about" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-abf2d196><div data-v-abf2d196><div class="about-baner" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)(unref(getAboutUsPage)?.banner?.backgroundImage?.url)}')` })}" data-v-abf2d196><h1 style="${ssrRenderStyle({ "color": "#FFFFFF" })}" data-v-abf2d196>${ssrInterpolate(unref(getAboutUsPage)?.title)}</h1><div class="about-border" data-v-abf2d196></div><div class="about-points" data-v-abf2d196><!--[-->`);
      ssrRenderList(unref(aboutMoove), (arr) => {
        _push(`<div data-v-abf2d196><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-abf2d196><div class="point-number" data-v-abf2d196>${ssrInterpolate(arr.id)}</div><div class="point-text" data-v-abf2d196>${arr.text ?? ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="about-office" data-v-abf2d196><h2 class="about-tittle" data-v-abf2d196>НАШ ОФИС</h2><div class="about-border" data-v-abf2d196></div><div class="about-location" data-v-abf2d196><div class="contacts" data-v-abf2d196><div data-v-abf2d196><div class="location" data-v-abf2d196>${ssrInterpolate(unref(getAboutUsPage)?.office?.title)}</div><div class="location-text" data-v-abf2d196>${ssrInterpolate(unref(getAboutUsPage)?.office?.description)}</div></div><div class="contacts-phone" data-v-abf2d196><div class="location" data-v-abf2d196>Контакты</div><div class="location-phone" data-v-abf2d196><div class="phone" data-v-abf2d196></div><div class="number" data-v-abf2d196>${ssrInterpolate(unref(getAboutUsPage)?.office?.phone)}</div></div><div class="location-phone" data-v-abf2d196><div class="mail" data-v-abf2d196></div><div class="number" data-v-abf2d196>${ssrInterpolate(unref(getAboutUsPage)?.office?.email)}</div></div></div></div><div class="map" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)(unref(getAboutUsPage)?.office?.image.url)}')` })}" data-v-abf2d196></div></div></div><div class="team" data-v-abf2d196><div data-v-abf2d196><h2 class="about-tittle" data-v-abf2d196>КОМАНДА</h2><div class="about-border" data-v-abf2d196></div></div><div class="blog-grid" data-v-abf2d196><!--[-->`);
      ssrRenderList(unref(getAboutUsPage)?.personal, (arr, index) => {
        _push(`<div class="team-card" data-v-abf2d196>`);
        _push(ssrRenderComponent(teamTab, {
          imgUrl: unref($getImageUrl)(arr?.image?.url),
          element: arr
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(PopupApplication, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abf2d196"]]);
export {
  about as default
};
//# sourceMappingURL=about-BEm43PlK.js.map
