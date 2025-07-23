import { _ as _export_sfc, b as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "pinia";
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tub-country-container" }, _attrs))} data-v-ef3b6a22>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.id === "gid" ? `/country-guide/${(_a = __props.country) == null ? void 0 : _a.link}` : `/country/${(_b = __props.country) == null ? void 0 : _b.link}`,
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="country-background" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl((_b2 = (_a2 = __props.country) == null ? void 0 : _a2.image) == null ? void 0 : _b2.url)}')` })}" role="img"${ssrRenderAttr("aria-label", ((_c = __props.country) == null ? void 0 : _c.name) ? `Фотография страны ${__props.country.name}` : "Фотография страны")} data-v-ef3b6a22${_scopeId}><span class="visually-hidden" data-v-ef3b6a22${_scopeId}>Фотография страны ${ssrInterpolate((_d = __props.country) == null ? void 0 : _d.name)}</span><div class="country-text" data-v-ef3b6a22${_scopeId}>${ssrInterpolate((_e = __props.country) == null ? void 0 : _e.name)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "country-background",
                style: { backgroundImage: `url('${_ctx.$getImageUrl((_g = (_f = __props.country) == null ? void 0 : _f.image) == null ? void 0 : _g.url)}')` },
                role: "img",
                "aria-label": ((_h = __props.country) == null ? void 0 : _h.name) ? `Фотография страны ${__props.country.name}` : "Фотография страны"
              }, [
                createVNode("span", { class: "visually-hidden" }, "Фотография страны " + toDisplayString((_i = __props.country) == null ? void 0 : _i.name), 1),
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
const tubCountry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef3b6a22"]]);
export {
  tubCountry as default
};
//# sourceMappingURL=tubCountry-Cpjc6j-L.js.map
