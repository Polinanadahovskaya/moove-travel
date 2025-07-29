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
  name: "bestVariant"
}, {
  __name: "bestVariant",
  __ssrInlineRender: true,
  props: {
    info: {
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b06ee05d><div class="variant-body" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl(__props.info?.images[0]?.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" data-v-b06ee05d><div class="variant-content" data-v-b06ee05d><div data-v-b06ee05d><div class="variant-tittle" data-v-b06ee05d>${ssrInterpolate(__props.info?.title)}</div><div class="variant-text" data-v-b06ee05d>${ssrInterpolate(__props.info?.description)}</div></div><div style="${ssrRenderStyle({ "text-decoration": "none", "color": "#1E1E1E" })}" data-v-b06ee05d><div class="variant-price" data-v-b06ee05d>${ssrInterpolate(formatPrice(__props.info.price))} ₽</div><div class="variant-button" data-v-b06ee05d>Купить</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bestVariant.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bestVariant = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b06ee05d"]]);
export {
  bestVariant as default
};
//# sourceMappingURL=bestVariant-CwDrC-Gj.js.map
