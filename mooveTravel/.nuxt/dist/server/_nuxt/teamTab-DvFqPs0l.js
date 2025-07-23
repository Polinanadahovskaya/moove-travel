import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  name: "teamTab"
}, {
  __name: "teamTab",
  __ssrInlineRender: true,
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    element: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-tab-root" }, _attrs))} data-v-ac0b9831><div class="team-body" data-v-ac0b9831><img${ssrRenderAttr("src", __props.imgUrl)}${ssrRenderAttr("alt", `Фотография сотрудника ${__props.element.fio}`)} class="team-round" data-v-ac0b9831><div class="team-name" data-v-ac0b9831>${ssrInterpolate(__props.element.fio)}</div><div class="name-first-text" data-v-ac0b9831>${ssrInterpolate(__props.element.position)}</div><div class="name-text" data-v-ac0b9831>${ssrInterpolate(__props.element.description)}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teamTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamTab = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac0b9831"]]);
export {
  teamTab as default
};
//# sourceMappingURL=teamTab-DvFqPs0l.js.map
