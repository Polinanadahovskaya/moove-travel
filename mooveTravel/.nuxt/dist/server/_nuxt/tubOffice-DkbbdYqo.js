import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "TubOffice"
}, {
  __name: "tubOffice",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ea6834c4><div class="tab-office" data-v-ea6834c4><div class="tab-text" data-v-ea6834c4>Дополнительный текст в несколько строчек</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tubOffice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tubOffice = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea6834c4"]]);
export {
  tubOffice as default
};
//# sourceMappingURL=tubOffice-DkbbdYqo.js.map
