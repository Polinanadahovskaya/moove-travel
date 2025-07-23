import { _ as _export_sfc, b as __nuxt_component_0 } from "../server.mjs";
import { withAsyncContext, computed, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import PopupApplication from "./popupApplication-DSsuIdMR.js";
import { u as useArticlesStore } from "./articles-Cn_LJMoj.js";
import { u as usePagesStore } from "./pages-Bg7tze-Q.js";
import { storeToRefs } from "pinia";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { u as useAsyncData } from "./asyncData-DHRnzQXn.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "./tourOrder-OQGqTeWT.js";
import "axios";
import "imask";
import "./popupThankYou-BOY4JreD.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-03048262><div class="main-header_tittle" data-v-03048262><h1 class="main-tittle-header" data-v-03048262>${ssrInterpolate((_a = unref(mainPage)) == null ? void 0 : _a.title)}</h1></div><div class="tv-search-form" data-tv-moduleid="9971497" data-v-03048262></div><div class="main-search" data-v-03048262></div><div class="header-wave" data-v-03048262></div><div class="help-search" data-v-03048262><div data-v-03048262><h2 class="help-tittle" data-v-03048262>НУЖНА ПОМОЩЬ <br data-v-03048262> С ПОДБОРОМ ТУРА?</h2><div class="tittle-border" data-v-03048262></div></div><div style="${ssrRenderStyle({ "display": "flex", "gap": "55px" })}" data-v-03048262><div class="many-arrow" data-v-03048262><!--[-->`);
      ssrRenderList(3, (a) => {
        _push(`<div data-v-03048262><div class="hollow-arrow" data-v-03048262></div></div>`);
      });
      _push(`<!--]--></div><a href="#application" style="${ssrRenderStyle({ "text-decoration": "none" })}" data-v-03048262><div class="tittle-button" data-v-03048262>Оставить заявку</div></a></div></div><div class="help-about" data-v-03048262><div data-v-03048262><h2 class="about-tittle" data-v-03048262>О НАС</h2><div class="about-border" data-v-03048262></div></div><div class="about-block" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_d = (_c = (_b = unref(mainPage)) == null ? void 0 : _b.aboutUs) == null ? void 0 : _c.backgroundImage) == null ? void 0 : _d.url)}')` })}" data-v-03048262>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: (_f = (_e = unref(mainPage)) == null ? void 0 : _e.aboutUs) == null ? void 0 : _f.buttonLink,
        class: "link-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block-button" data-v-03048262${_scopeId}>Подробнее</div>`);
          } else {
            return [
              createVNode("div", { class: "block-button" }, "Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="numbers" data-v-03048262><!--[-->`);
      ssrRenderList(aboutArray.value, (arr) => {
        _push(`<div data-v-03048262><div class="block-tab" data-v-03048262><div class="tub-number" data-v-03048262>${ssrInterpolate(arr.number)}</div><div class="block-text" data-v-03048262>${ssrInterpolate(arr.text)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="priorities" data-v-03048262><div data-v-03048262><h2 class="about-tittle" data-v-03048262>ПРЕИМУЩЕСТВА</h2><div class="about-border" data-v-03048262></div></div><div data-v-03048262><div class="panel" data-v-03048262><div class="panel-column" data-v-03048262><!--[-->`);
      ssrRenderList((_g = unref(mainPage)) == null ? void 0 : _g.advantages.slice(0, 2), (arr) => {
        var _a2;
        _push(`<div data-v-03048262><div class="tab-panel" data-v-03048262><div class="tab" data-v-03048262><div class="mask" style="${ssrRenderStyle({ mask: `url('${_ctx.$getImageUrl((_a2 = arr == null ? void 0 : arr.image) == null ? void 0 : _a2.url)}')` })}" data-v-03048262></div></div><div class="tab-text" data-v-03048262><span class="bold" data-v-03048262>${ssrInterpolate(arr.title)}</span> — ${ssrInterpolate(arr.description)}</div></div></div>`);
      });
      _push(`<!--]--></div><div class="panel-column" data-v-03048262><!--[-->`);
      ssrRenderList((_h = unref(mainPage)) == null ? void 0 : _h.advantages.slice(2, 4), (arr) => {
        var _a2;
        _push(`<div data-v-03048262><div class="tab-panel" data-v-03048262><div class="tab" data-v-03048262><div class="mask" style="${ssrRenderStyle({ mask: `url('${_ctx.$getImageUrl((_a2 = arr == null ? void 0 : arr.image) == null ? void 0 : _a2.url)}')` })}" data-v-03048262></div></div><div class="tab-text" data-v-03048262><span class="bold" data-v-03048262>${ssrInterpolate(arr.title)}</span> — ${ssrInterpolate(arr.description)}</div></div></div>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03048262"]]);
export {
  index as default
};
//# sourceMappingURL=index-CSTo41Wj.js.map
