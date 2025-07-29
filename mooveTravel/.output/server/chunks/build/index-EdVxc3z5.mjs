import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import { withAsyncContext, computed, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import PopupApplication from './popupApplication-DEi7na23.mjs';
import { u as useArticlesStore } from './articles-b5rl9zuU.mjs';
import { u as usePagesStore } from './pages-BW6208qI.mjs';
import { storeToRefs } from 'pinia';
import { u as useAsyncData } from './asyncData-Bo-BqEjD.mjs';
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
import './tourOrder-BxPrspMm.mjs';
import 'axios';
import './popupThankYou-DzMOwELb.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const articlesStore = useArticlesStore();
    const pagesStore = usePagesStore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("mainPage", () => pagesStore.fetchMainPage())), await __temp, __restore();
    const { getArticles, loading, error } = storeToRefs(articlesStore);
    const { getMainPage: mainPage, loading: loadingPage, error: errorPage } = storeToRefs(pagesStore);
    const aboutArray = computed(() => {
      var _a;
      if (!((_a = mainPage.value) == null ? void 0 : _a.aboutUs)) return [];
      return [
        { number: mainPage.value.aboutUs.firstNumber, text: mainPage.value.aboutUs.firstText },
        { number: mainPage.value.aboutUs.secondNumber, text: mainPage.value.aboutUs.secondText },
        { number: mainPage.value.aboutUs.thirdNumber, text: mainPage.value.aboutUs.thirdText }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-43233922><div class="main-header_tittle" data-v-43233922><h1 class="main-tittle-header" data-v-43233922>${ssrInterpolate((_a = unref(mainPage)) == null ? void 0 : _a.title)}</h1></div><div class="tv-search-form" data-tv-moduleid="9971497" data-v-43233922></div><div class="main-search" data-v-43233922></div><div class="header-wave" data-v-43233922></div><div class="help-search" data-v-43233922><div data-v-43233922><h2 class="help-tittle" data-v-43233922>\u041D\u0423\u0416\u041D\u0410 \u041F\u041E\u041C\u041E\u0429\u042C <br data-v-43233922> \u0421 \u041F\u041E\u0414\u0411\u041E\u0420\u041E\u041C \u0422\u0423\u0420\u0410?</h2><div class="tittle-border" data-v-43233922></div></div><div style="${ssrRenderStyle({ "display": "flex", "gap": "55px" })}" data-v-43233922><div class="many-arrow" data-v-43233922><!--[-->`);
      ssrRenderList(3, (a) => {
        _push(`<div data-v-43233922><div class="hollow-arrow" data-v-43233922></div></div>`);
      });
      _push(`<!--]--></div><a href="#application" style="${ssrRenderStyle({ "text-decoration": "none" })}" data-v-43233922><div class="tittle-button" data-v-43233922>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</div></a></div></div><div class="help-about" data-v-43233922><div data-v-43233922><h2 class="about-tittle" data-v-43233922>\u041E \u041D\u0410\u0421</h2><div class="about-border" data-v-43233922></div></div><div class="about-block" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_d = (_c = (_b = unref(mainPage)) == null ? void 0 : _b.aboutUs) == null ? void 0 : _c.backgroundImage) == null ? void 0 : _d.url)}')` })}" data-v-43233922>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: (_f = (_e = unref(mainPage)) == null ? void 0 : _e.aboutUs) == null ? void 0 : _f.buttonLink,
        class: "link-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block-button" data-v-43233922${_scopeId}>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</div>`);
          } else {
            return [
              createVNode("div", { class: "block-button" }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="numbers" data-v-43233922><!--[-->`);
      ssrRenderList(aboutArray.value, (arr) => {
        _push(`<div data-v-43233922><div class="block-tab" data-v-43233922><div class="tub-number" data-v-43233922>${ssrInterpolate(arr.number)}</div><div class="block-text" data-v-43233922>${ssrInterpolate(arr.text)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="priorities" data-v-43233922><div data-v-43233922><h2 class="about-tittle" data-v-43233922>\u041F\u0420\u0415\u0418\u041C\u0423\u0429\u0415\u0421\u0422\u0412\u0410</h2><div class="about-border" data-v-43233922></div></div><div data-v-43233922><div class="panel" data-v-43233922><div class="panel-column" data-v-43233922><!--[-->`);
      ssrRenderList((_g = unref(mainPage)) == null ? void 0 : _g.advantages.slice(0, 2), (arr) => {
        var _a2;
        _push(`<div data-v-43233922><div class="tab-panel" data-v-43233922><div class="tab" data-v-43233922><div class="mask" style="${ssrRenderStyle({ mask: `url('${_ctx.$getImageUrl((_a2 = arr == null ? void 0 : arr.image) == null ? void 0 : _a2.url)}')` })}" data-v-43233922></div></div><div class="tab-text" data-v-43233922><span class="bold" data-v-43233922>${ssrInterpolate(arr.title)}</span> \u2014 ${ssrInterpolate(arr.description)}</div></div></div>`);
      });
      _push(`<!--]--></div><div class="panel-column" data-v-43233922><!--[-->`);
      ssrRenderList((_h = unref(mainPage)) == null ? void 0 : _h.advantages.slice(2, 4), (arr) => {
        var _a2;
        _push(`<div data-v-43233922><div class="tab-panel" data-v-43233922><div class="tab" data-v-43233922><div class="mask" style="${ssrRenderStyle({ mask: `url('${_ctx.$getImageUrl((_a2 = arr == null ? void 0 : arr.image) == null ? void 0 : _a2.url)}')` })}" data-v-43233922></div></div><div class="tab-text" data-v-43233922><span class="bold" data-v-43233922>${ssrInterpolate(arr.title)}</span> \u2014 ${ssrInterpolate(arr.description)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      _push(ssrRenderComponent(PopupApplication, { id: "application" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43233922"]]);

export { index as default };
//# sourceMappingURL=index-EdVxc3z5.mjs.map
