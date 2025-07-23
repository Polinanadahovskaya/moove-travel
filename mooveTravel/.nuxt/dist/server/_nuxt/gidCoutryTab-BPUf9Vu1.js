import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "gidCoutryTab"
}, {
  __name: "gidCoutryTab",
  __ssrInlineRender: true,
  props: {
    guid: {
      required: false
    }
  },
  setup(__props) {
    useRouter();
    const formatPrice = (price) => {
      const roundedPrice = Math.round(price);
      return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-82b6e687><div class="gid-country_tub" data-v-82b6e687><div class="gid-country_inf" data-v-82b6e687><div style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_b = (_a = __props.guid) == null ? void 0 : _a.images[0]) == null ? void 0 : _b.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="gid-country_img mobile-none" data-v-82b6e687></div><div class="gid-country_art" data-v-82b6e687><div class="gid-header-mobile" data-v-82b6e687><div class="gid-country_tittle" data-v-82b6e687>${ssrInterpolate((_c = __props.guid) == null ? void 0 : _c.title)}</div><div class="gid-country_price desc-none" data-v-82b6e687><div class="old-price" data-v-82b6e687>${ssrInterpolate(formatPrice(1990))} ₽</div><div class="fix-price" data-v-82b6e687>${ssrInterpolate(formatPrice((_d = __props.guid) == null ? void 0 : _d.price))} ₽</div></div></div><div class="gid-country_text" data-v-82b6e687>${ssrInterpolate((_e = __props.guid) == null ? void 0 : _e.description)}</div></div><div style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_g = (_f = __props.guid) == null ? void 0 : _f.images[0]) == null ? void 0 : _g.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="gid-country_img desc-none" data-v-82b6e687></div></div><div class="gid-country_price mobile-none" data-v-82b6e687><div class="old-price" data-v-82b6e687>${ssrInterpolate(formatPrice((_h = __props.guid) == null ? void 0 : _h.priceBase))} ₽</div><div class="fix-price" data-v-82b6e687>${ssrInterpolate(formatPrice((_i = __props.guid) == null ? void 0 : _i.price))} ₽</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gidCoutryTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gidCoutryTab = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82b6e687"]]);
export {
  gidCoutryTab as default
};
//# sourceMappingURL=gidCoutryTab-BPUf9Vu1.js.map
