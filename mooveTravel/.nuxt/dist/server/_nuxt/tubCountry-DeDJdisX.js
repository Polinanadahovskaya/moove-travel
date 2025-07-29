import { _ as _export_sfc, b as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tub-country-container" }, _attrs))} data-v-e8f0bae0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.id === "gid" ? `/country-guide/${__props.country?.link}` : `/country/${__props.country?.link}`,
        style: { "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="country-background" style="${ssrRenderStyle({ backgroundImage: `url('${_ctx.$getImageUrl(__props.country?.image?.url)}')` })}" role="img"${ssrRenderAttr("aria-label", __props.country?.name ? `Фотография страны ${__props.country.name}` : "Фотография страны")} data-v-e8f0bae0${_scopeId}><span class="visually-hidden" data-v-e8f0bae0${_scopeId}>Фотография страны ${ssrInterpolate(__props.country?.name)}</span><div class="country-text" data-v-e8f0bae0${_scopeId}>${ssrInterpolate(__props.country?.name)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "country-background",
                style: { backgroundImage: `url('${_ctx.$getImageUrl(__props.country?.image?.url)}')` },
                role: "img",
                "aria-label": __props.country?.name ? `Фотография страны ${__props.country.name}` : "Фотография страны"
              }, [
                createVNode("span", { class: "visually-hidden" }, "Фотография страны " + toDisplayString(__props.country?.name), 1),
                createVNode("div", { class: "country-text" }, toDisplayString(__props.country?.name), 1)
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
export {
  tubCountry as default
};
//# sourceMappingURL=tubCountry-DeDJdisX.js.map
