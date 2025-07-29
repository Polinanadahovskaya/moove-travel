import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b06ee05d><div class="variant-body" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_b = (_a = __props.info) == null ? void 0 : _a.images[0]) == null ? void 0 : _b.url)}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" })}" data-v-b06ee05d><div class="variant-content" data-v-b06ee05d><div data-v-b06ee05d><div class="variant-tittle" data-v-b06ee05d>${ssrInterpolate((_c = __props.info) == null ? void 0 : _c.title)}</div><div class="variant-text" data-v-b06ee05d>${ssrInterpolate((_d = __props.info) == null ? void 0 : _d.description)}</div></div><div style="${ssrRenderStyle({ "text-decoration": "none", "color": "#1E1E1E" })}" data-v-b06ee05d><div class="variant-price" data-v-b06ee05d>${ssrInterpolate(formatPrice(__props.info.price))} \u20BD</div><div class="variant-button" data-v-b06ee05d>\u041A\u0443\u043F\u0438\u0442\u044C</div></div></div></div></div>`);
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

export { bestVariant as default };
//# sourceMappingURL=bestVariant-CwDrC-Gj.mjs.map
