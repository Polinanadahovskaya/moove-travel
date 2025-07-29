import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import 'pinia';

const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "tubCountry"
}, {
  __name: "tubCountry",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: false
    },
    country: {
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tub-country-container" }, _attrs))} data-v-e8f0bae0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.id === "gid" ? `/country-guide/${(_a = __props.country) == null ? void 0 : _a.link}` : `/country/${(_b = __props.country) == null ? void 0 : _b.link}`,
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="country-background" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_b2 = (_a2 = __props.country) == null ? void 0 : _a2.image) == null ? void 0 : _b2.url)}')` })}" role="img"${ssrRenderAttr("aria-label", ((_c = __props.country) == null ? void 0 : _c.name) ? `\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u044B ${__props.country.name}` : "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u044B")} data-v-e8f0bae0${_scopeId}><span class="visually-hidden" data-v-e8f0bae0${_scopeId}>\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u044B ${ssrInterpolate((_d = __props.country) == null ? void 0 : _d.name)}</span><div class="country-text" data-v-e8f0bae0${_scopeId}>${ssrInterpolate((_e = __props.country) == null ? void 0 : _e.name)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "country-background",
                style: { backgroundImage: `url('${_ctx.$getImageUrl((_g = (_f = __props.country) == null ? void 0 : _f.image) == null ? void 0 : _g.url)}')` },
                role: "img",
                "aria-label": ((_h = __props.country) == null ? void 0 : _h.name) ? `\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u044B ${__props.country.name}` : "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u044B"
              }, [
                createVNode("span", { class: "visually-hidden" }, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u044B " + toDisplayString((_i = __props.country) == null ? void 0 : _i.name), 1),
                createVNode("div", { class: "country-text" }, toDisplayString((_j = __props.country) == null ? void 0 : _j.name), 1)
              ], 12, ["aria-label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tubCountry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tubCountry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8f0bae0"]]);

export { tubCountry as default };
//# sourceMappingURL=tubCountry-DeDJdisX.mjs.map
