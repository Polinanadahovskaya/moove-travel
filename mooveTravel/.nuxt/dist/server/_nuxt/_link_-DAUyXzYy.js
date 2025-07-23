import { _ as _export_sfc, a as useNuxtApp, b as __nuxt_component_0 } from "../server.mjs";
import { computed, withAsyncContext, ref, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import popupBeforePay from "./popupBeforePay-Deth0pio.js";
import { useRoute } from "vue-router";
import { u as useTravelGuidesStore } from "./travelGuides-DEcQx_JM.js";
import { u as useHead } from "./v3-jeJGgwfC.js";
import { u as useAsyncData } from "./asyncData-DHRnzQXn.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "imask";
import "axios";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = {
  __name: "[link]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $getImageUrl } = useNuxtApp();
    const route = useRoute();
    const link = route.params.link;
    const travelGuidesStore = useTravelGuidesStore();
    const formatPrice = (price) => {
      const roundedPrice = Math.round(price);
      return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    const currentGuide = computed(() => travelGuidesStore.getGuide);
    useHead(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      return {
        title: ((_a = currentGuide.value) == null ? void 0 : _a.title) ? `${currentGuide.value.title} | Moov Travel` : "Гайды | Moov Travel",
        meta: [
          { name: "description", content: ((_b = currentGuide.value) == null ? void 0 : _b.description) || "Подробные и полезные гайды для путешественников от Moov Travel." },
          { property: "og:title", content: ((_c = currentGuide.value) == null ? void 0 : _c.title) ? `${currentGuide.value.title} | Moov Travel` : "Гайды | Moov Travel" },
          { property: "og:description", content: ((_d = currentGuide.value) == null ? void 0 : _d.description) || "Подробные и полезные гайды для путешественников от Moov Travel." },
          { property: "og:image", content: $getImageUrl((_g = (_f = (_e = currentGuide.value) == null ? void 0 : _e.images) == null ? void 0 : _f[0]) == null ? void 0 : _g.url) },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `https://moov-travel.ru/guide/${link}` }
        ],
        link: [
          { rel: "canonical", href: `https://moov-travel.ru/guide/${link}` }
        ]
      };
    });
    [__temp, __restore] = withAsyncContext(() => useAsyncData("guide", () => travelGuidesStore.fetchGuideBySlug(link))), await __temp, __restore();
    const showBeforePayPopup = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c7b407fe><div data-v-c7b407fe><div class="gid-header" data-v-c7b407fe>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Travel-gids",
        class: "gid_back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Назад`);
          } else {
            return [
              createTextVNode("← Назад")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="gid_tittle" data-v-c7b407fe>${ssrInterpolate((_a = currentGuide.value) == null ? void 0 : _a.title)}</div></div><div class="gid-articles" data-v-c7b407fe><div class="article-information" data-v-c7b407fe><div class="article" data-v-c7b407fe><div class="article-text" data-v-c7b407fe>${ssrInterpolate((_b = currentGuide.value) == null ? void 0 : _b.description)}</div><div style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_d = (_c = currentGuide.value) == null ? void 0 : _c.images[0]) == null ? void 0 : _d.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="article-img desctop-none" data-v-c7b407fe></div></div><div class="article-elements" data-v-c7b407fe><div class="gid-country_price" data-v-c7b407fe><div class="old-price" data-v-c7b407fe>${ssrInterpolate(formatPrice((_e = currentGuide.value) == null ? void 0 : _e.priceBase))} ₽</div><div class="fix-price" data-v-c7b407fe>${ssrInterpolate(formatPrice((_f = currentGuide.value) == null ? void 0 : _f.price))} ₽</div></div><div class="article-button" data-v-c7b407fe>Купить</div>`);
      if (showBeforePayPopup.value) {
        _push(`<div class="modal-overlay" data-v-c7b407fe>`);
        _push(ssrRenderComponent(popupBeforePay, {
          onClose: ($event) => showBeforePayPopup.value = false,
          price: (_g = currentGuide.value) == null ? void 0 : _g.price,
          currentGuide: currentGuide.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_i = (_h = currentGuide.value) == null ? void 0 : _h.images[0]) == null ? void 0 : _i.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="article-img mobile-none" data-v-c7b407fe></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/[link].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c7b407fe"]]);
export {
  _link_ as default
};
//# sourceMappingURL=_link_-DAUyXzYy.js.map
