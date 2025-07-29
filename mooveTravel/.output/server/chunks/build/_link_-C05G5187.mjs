import { _ as _export_sfc, a as useNuxtApp, b as __nuxt_component_0$1 } from './server.mjs';
import { computed, withAsyncContext, ref, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import popupBeforePay from './popupBeforePay-D14IRMdU.mjs';
import { useRoute } from 'vue-router';
import { u as useTravelGuidesStore } from './travelGuides-CaLzxrd2.mjs';
import { u as useHead } from './v3-DwIDDKq-.mjs';
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
import 'pinia';
import 'axios';

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
        title: ((_a = currentGuide.value) == null ? void 0 : _a.title) ? `${currentGuide.value.title} | Moov Travel` : "\u0413\u0430\u0439\u0434\u044B | Moov Travel",
        meta: [
          { name: "description", content: ((_b = currentGuide.value) == null ? void 0 : _b.description) || "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0433\u0430\u0439\u0434\u044B \u0434\u043B\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u043E\u0442 Moov Travel." },
          { property: "og:title", content: ((_c = currentGuide.value) == null ? void 0 : _c.title) ? `${currentGuide.value.title} | Moov Travel` : "\u0413\u0430\u0439\u0434\u044B | Moov Travel" },
          { property: "og:description", content: ((_d = currentGuide.value) == null ? void 0 : _d.description) || "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0433\u0430\u0439\u0434\u044B \u0434\u043B\u044F \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u043E\u0442 Moov Travel." },
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
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c4406f57><div data-v-c4406f57><div class="gid-header" data-v-c4406f57>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Travel-gids",
        class: "gid_back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 \u041D\u0430\u0437\u0430\u0434`);
          } else {
            return [
              createTextVNode("\u2190 \u041D\u0430\u0437\u0430\u0434")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="gid_tittle" data-v-c4406f57>${ssrInterpolate((_a = currentGuide.value) == null ? void 0 : _a.title)}</div></div><div class="gid-articles" data-v-c4406f57><div class="article-information" data-v-c4406f57><div class="article" data-v-c4406f57><div class="article-text" data-v-c4406f57>${ssrInterpolate((_b = currentGuide.value) == null ? void 0 : _b.description)}</div><div style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_d = (_c = currentGuide.value) == null ? void 0 : _c.images[0]) == null ? void 0 : _d.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="article-img desctop-none" data-v-c4406f57></div></div><div class="article-elements" data-v-c4406f57><div class="gid-country_price" data-v-c4406f57><div class="old-price" data-v-c4406f57>${ssrInterpolate(formatPrice((_e = currentGuide.value) == null ? void 0 : _e.priceBase))} \u20BD</div><div class="fix-price" data-v-c4406f57>${ssrInterpolate(formatPrice((_f = currentGuide.value) == null ? void 0 : _f.price))} \u20BD</div></div><div class="article-button" data-v-c4406f57>\u041A\u0443\u043F\u0438\u0442\u044C</div>`);
      if (showBeforePayPopup.value) {
        _push(`<div class="modal-overlay" data-v-c4406f57>`);
        _push(ssrRenderComponent(popupBeforePay, {
          onClose: ($event) => showBeforePayPopup.value = false,
          price: (_g = currentGuide.value) == null ? void 0 : _g.price,
          currentGuide: currentGuide.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)((_i = (_h = currentGuide.value) == null ? void 0 : _h.images[0]) == null ? void 0 : _i.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="article-img mobile-none" data-v-c4406f57></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/[link].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4406f57"]]);

export { _link_ as default };
//# sourceMappingURL=_link_-C05G5187.mjs.map
