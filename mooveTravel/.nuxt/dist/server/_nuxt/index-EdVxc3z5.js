import { _ as _export_sfc, b as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, computed, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import PopupApplication from "./popupApplication-DEi7na23.js";
import { u as useArticlesStore } from "./articles-b5rl9zuU.js";
import { u as usePagesStore } from "./pages-BW6208qI.js";
import { storeToRefs } from "pinia";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { u as useAsyncData } from "./asyncData-Bo-BqEjD.js";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "./tourOrder-BxPrspMm.js";
import "axios";
import "imask";
import "./popupThankYou-DzMOwELb.js";
import "D:/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
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
      if (!mainPage.value?.aboutUs) return [];
      return [
        { number: mainPage.value.aboutUs.firstNumber, text: mainPage.value.aboutUs.firstText },
        { number: mainPage.value.aboutUs.secondNumber, text: mainPage.value.aboutUs.secondText },
        { number: mainPage.value.aboutUs.thirdNumber, text: mainPage.value.aboutUs.thirdText }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-43233922><div class="main-header_tittle" data-v-43233922><h1 class="main-tittle-header" data-v-43233922>${ssrInterpolate(unref(mainPage)?.title)}</h1></div><div class="tv-search-form" data-tv-moduleid="9971497" data-v-43233922></div><div class="main-search" data-v-43233922></div><div class="header-wave" data-v-43233922></div><div class="help-search" data-v-43233922><div data-v-43233922><h2 class="help-tittle" data-v-43233922>НУЖНА ПОМОЩЬ <br data-v-43233922> С ПОДБОРОМ ТУРА?</h2><div class="tittle-border" data-v-43233922></div></div><div style="${ssrRenderStyle({ "display": "flex", "gap": "55px" })}" data-v-43233922><div class="many-arrow" data-v-43233922><!--[-->`);
      ssrRenderList(3, (a) => {
        _push(`<div data-v-43233922><div class="hollow-arrow" data-v-43233922></div></div>`);
      });
      _push(`<!--]--></div><a href="#application" style="${ssrRenderStyle({ "text-decoration": "none" })}" data-v-43233922><div class="tittle-button" data-v-43233922>Оставить заявку</div></a></div></div><div class="help-about" data-v-43233922><div data-v-43233922><h2 class="about-tittle" data-v-43233922>О НАС</h2><div class="about-border" data-v-43233922></div></div><div class="about-block" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl(unref(mainPage)?.aboutUs?.backgroundImage?.url)}')` })}" data-v-43233922>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(mainPage)?.aboutUs?.buttonLink,
        class: "link-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block-button" data-v-43233922${_scopeId}>Подробнее</div>`);
          } else {
            return [
              createVNode("div", { class: "block-button" }, "Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="numbers" data-v-43233922><!--[-->`);
      ssrRenderList(aboutArray.value, (arr) => {
        _push(`<div data-v-43233922><div class="block-tab" data-v-43233922><div class="tub-number" data-v-43233922>${ssrInterpolate(arr.number)}</div><div class="block-text" data-v-43233922>${ssrInterpolate(arr.text)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="priorities" data-v-43233922><div data-v-43233922><h2 class="about-tittle" data-v-43233922>ПРЕИМУЩЕСТВА</h2><div class="about-border" data-v-43233922></div></div><div data-v-43233922><div class="panel" data-v-43233922><div class="panel-column" data-v-43233922><!--[-->`);
      ssrRenderList(unref(mainPage)?.advantages.slice(0, 2), (arr) => {
        _push(`<div data-v-43233922><div class="tab-panel" data-v-43233922><div class="tab" data-v-43233922><div class="mask" style="${ssrRenderStyle({ mask: `url('${_ctx.$getImageUrl(arr?.image?.url)}')` })}" data-v-43233922></div></div><div class="tab-text" data-v-43233922><span class="bold" data-v-43233922>${ssrInterpolate(arr.title)}</span> — ${ssrInterpolate(arr.description)}</div></div></div>`);
      });
      _push(`<!--]--></div><div class="panel-column" data-v-43233922><!--[-->`);
      ssrRenderList(unref(mainPage)?.advantages.slice(2, 4), (arr) => {
        _push(`<div data-v-43233922><div class="tab-panel" data-v-43233922><div class="tab" data-v-43233922><div class="mask" style="${ssrRenderStyle({ mask: `url('${_ctx.$getImageUrl(arr?.image?.url)}')` })}" data-v-43233922></div></div><div class="tab-text" data-v-43233922><span class="bold" data-v-43233922>${ssrInterpolate(arr.title)}</span> — ${ssrInterpolate(arr.description)}</div></div></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-EdVxc3z5.js.map
