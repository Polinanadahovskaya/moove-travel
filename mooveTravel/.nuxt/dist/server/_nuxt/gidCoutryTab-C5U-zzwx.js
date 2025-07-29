import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-82b6e687><div class="gid-country_tub" data-v-82b6e687><div class="gid-country_inf" data-v-82b6e687><div style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl(__props.guid?.images[0]?.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="gid-country_img mobile-none" data-v-82b6e687></div><div class="gid-country_art" data-v-82b6e687><div class="gid-header-mobile" data-v-82b6e687><div class="gid-country_tittle" data-v-82b6e687>${ssrInterpolate(__props.guid?.title)}</div><div class="gid-country_price desc-none" data-v-82b6e687><div class="old-price" data-v-82b6e687>${ssrInterpolate(formatPrice(1990))} ₽</div><div class="fix-price" data-v-82b6e687>${ssrInterpolate(formatPrice(__props.guid?.price))} ₽</div></div></div><div class="gid-country_text" data-v-82b6e687>${ssrInterpolate(__props.guid?.description)}</div></div><div style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl(__props.guid?.images[0]?.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" class="gid-country_img desc-none" data-v-82b6e687></div></div><div class="gid-country_price mobile-none" data-v-82b6e687><div class="old-price" data-v-82b6e687>${ssrInterpolate(formatPrice(__props.guid?.priceBase))} ₽</div><div class="fix-price" data-v-82b6e687>${ssrInterpolate(formatPrice(__props.guid?.price))} ₽</div></div></div></div>`);
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
//# sourceMappingURL=gidCoutryTab-C5U-zzwx.js.map
