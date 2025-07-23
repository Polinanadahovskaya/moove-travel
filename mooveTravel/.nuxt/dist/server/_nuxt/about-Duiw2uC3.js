import { withAsyncContext, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import PopupApplication from "./popupApplication-DSsuIdMR.js";
import teamTab from "./teamTab-DvFqPs0l.js";
import { u as usePagesStore } from "./pages-Bg7tze-Q.js";
import { storeToRefs } from "pinia";
import { _ as _export_sfc, a as useNuxtApp } from "../server.mjs";
import { u as useHead } from "./v3-jeJGgwfC.js";
import { u as useAsyncData } from "./asyncData-DHRnzQXn.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "./tourOrder-OQGqTeWT.js";
import "axios";
import "imask";
import "./popupThankYou-BOY4JreD.js";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
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
      var _a, _b, _c, _d, _e, _f, _g;
      if (!((_a = getAboutUsPage.value) == null ? void 0 : _a.banner)) return [];
      return [
        { id: (_b = getAboutUsPage.value) == null ? void 0 : _b.banner.firstNumber, text: (_c = getAboutUsPage.value) == null ? void 0 : _c.banner.firstText },
        { id: (_d = getAboutUsPage.value) == null ? void 0 : _d.banner.secondNumber, text: (_e = getAboutUsPage.value) == null ? void 0 : _e.banner.secondText },
        { id: (_f = getAboutUsPage.value) == null ? void 0 : _f.banner.thirdNumber, text: (_g = getAboutUsPage.value) == null ? void 0 : _g.banner.thirdText }
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2aca716c><div data-v-2aca716c><div class="about-baner" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_c = (_b = (_a = unref(getAboutUsPage)) == null ? void 0 : _a.banner) == null ? void 0 : _b.backgroundImage) == null ? void 0 : _c.url)}')` })}" data-v-2aca716c><h1 style="${ssrRenderStyle({ "color": "#FFFFFF" })}" data-v-2aca716c>${ssrInterpolate((_d = unref(getAboutUsPage)) == null ? void 0 : _d.title)}</h1><div class="about-border" data-v-2aca716c></div><div class="about-points" data-v-2aca716c><!--[-->`);
      ssrRenderList(unref(aboutMoove), (arr) => {
        _push(`<div data-v-2aca716c><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-2aca716c><div class="point-number" data-v-2aca716c>${ssrInterpolate(arr.id)}</div><div class="point-text" data-v-2aca716c>${arr.text ?? ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="about-office" data-v-2aca716c><h2 class="about-tittle" data-v-2aca716c>НАШ ОФИС</h2><div class="about-border" data-v-2aca716c></div><div class="about-location" data-v-2aca716c><div class="contacts" data-v-2aca716c><div data-v-2aca716c><div class="location" data-v-2aca716c>${ssrInterpolate((_f = (_e = unref(getAboutUsPage)) == null ? void 0 : _e.office) == null ? void 0 : _f.title)}</div><div class="location-text" data-v-2aca716c>${ssrInterpolate((_h = (_g = unref(getAboutUsPage)) == null ? void 0 : _g.office) == null ? void 0 : _h.description)}</div></div><div class="contacts-phone" data-v-2aca716c><div class="location" data-v-2aca716c>Контакты</div><div class="location-phone" data-v-2aca716c><div class="phone" data-v-2aca716c></div><div class="number" data-v-2aca716c>${ssrInterpolate((_j = (_i = unref(getAboutUsPage)) == null ? void 0 : _i.office) == null ? void 0 : _j.phone)}</div></div><div class="location-phone" data-v-2aca716c><div class="mail" data-v-2aca716c></div><div class="number" data-v-2aca716c>${ssrInterpolate((_l = (_k = unref(getAboutUsPage)) == null ? void 0 : _k.office) == null ? void 0 : _l.email)}</div></div></div></div><div class="map" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_n = (_m = unref(getAboutUsPage)) == null ? void 0 : _m.office) == null ? void 0 : _n.image.url)}')` })}" data-v-2aca716c></div></div></div><div class="team" data-v-2aca716c><div data-v-2aca716c><h2 class="about-tittle" data-v-2aca716c>КОМАНДА</h2><div class="about-border" data-v-2aca716c></div></div><div class="blog-grid" data-v-2aca716c><!--[-->`);
      ssrRenderList((_o = unref(getAboutUsPage)) == null ? void 0 : _o.personal, (arr, index) => {
        var _a2;
        _push(`<div class="team-card" data-v-2aca716c>`);
        _push(ssrRenderComponent(teamTab, {
          imgUrl: unref($getImageUrl)((_a2 = arr == null ? void 0 : arr.image) == null ? void 0 : _a2.url),
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
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2aca716c"]]);
export {
  about as default
};
//# sourceMappingURL=about-Duiw2uC3.js.map
