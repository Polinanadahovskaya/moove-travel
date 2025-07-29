import { withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import PopupApplication from './popupApplication-DEi7na23.mjs';
import teamTab from './teamTab-BQb-VdHI.mjs';
import { u as usePagesStore } from './pages-BW6208qI.mjs';
import { storeToRefs } from 'pinia';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import { u as useHead } from './v3-DwIDDKq-.mjs';
import { u as useAsyncData } from './asyncData-Bo-BqEjD.mjs';
import './tourOrder-BxPrspMm.mjs';
import 'axios';
import './popupThankYou-DzMOwELb.mjs';
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
      title: "\u041E \u043D\u0430\u0441 | Moov Travel",
      meta: [
        { name: "description", content: "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0435 Moov Travel, \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u0445." },
        { property: "og:title", content: "\u041E \u043D\u0430\u0441 | Moov Travel" },
        { property: "og:description", content: "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0435 Moov Travel, \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u0445." },
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-abf2d196><div data-v-abf2d196><div class="about-baner" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_c = (_b = (_a = unref(getAboutUsPage)) == null ? void 0 : _a.banner) == null ? void 0 : _b.backgroundImage) == null ? void 0 : _c.url)}')` })}" data-v-abf2d196><h1 style="${ssrRenderStyle({ "color": "#FFFFFF" })}" data-v-abf2d196>${ssrInterpolate((_d = unref(getAboutUsPage)) == null ? void 0 : _d.title)}</h1><div class="about-border" data-v-abf2d196></div><div class="about-points" data-v-abf2d196><!--[-->`);
      ssrRenderList(unref(aboutMoove), (arr) => {
        var _a2;
        _push(`<div data-v-abf2d196><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" data-v-abf2d196><div class="point-number" data-v-abf2d196>${ssrInterpolate(arr.id)}</div><div class="point-text" data-v-abf2d196>${(_a2 = arr.text) != null ? _a2 : ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="about-office" data-v-abf2d196><h2 class="about-tittle" data-v-abf2d196>\u041D\u0410\u0428 \u041E\u0424\u0418\u0421</h2><div class="about-border" data-v-abf2d196></div><div class="about-location" data-v-abf2d196><div class="contacts" data-v-abf2d196><div data-v-abf2d196><div class="location" data-v-abf2d196>${ssrInterpolate((_f = (_e = unref(getAboutUsPage)) == null ? void 0 : _e.office) == null ? void 0 : _f.title)}</div><div class="location-text" data-v-abf2d196>${ssrInterpolate((_h = (_g = unref(getAboutUsPage)) == null ? void 0 : _g.office) == null ? void 0 : _h.description)}</div></div><div class="contacts-phone" data-v-abf2d196><div class="location" data-v-abf2d196>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</div><div class="location-phone" data-v-abf2d196><div class="phone" data-v-abf2d196></div><div class="number" data-v-abf2d196>${ssrInterpolate((_j = (_i = unref(getAboutUsPage)) == null ? void 0 : _i.office) == null ? void 0 : _j.phone)}</div></div><div class="location-phone" data-v-abf2d196><div class="mail" data-v-abf2d196></div><div class="number" data-v-abf2d196>${ssrInterpolate((_l = (_k = unref(getAboutUsPage)) == null ? void 0 : _k.office) == null ? void 0 : _l.email)}</div></div></div></div><div class="map" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_n = (_m = unref(getAboutUsPage)) == null ? void 0 : _m.office) == null ? void 0 : _n.image.url)}')` })}" data-v-abf2d196></div></div></div><div class="team" data-v-abf2d196><div data-v-abf2d196><h2 class="about-tittle" data-v-abf2d196>\u041A\u041E\u041C\u0410\u041D\u0414\u0410</h2><div class="about-border" data-v-abf2d196></div></div><div class="blog-grid" data-v-abf2d196><!--[-->`);
      ssrRenderList((_o = unref(getAboutUsPage)) == null ? void 0 : _o.personal, (arr, index) => {
        var _a2;
        _push(`<div class="team-card" data-v-abf2d196>`);
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
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abf2d196"]]);

export { about as default };
//# sourceMappingURL=about-BEm43PlK.mjs.map
