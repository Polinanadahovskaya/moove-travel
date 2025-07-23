import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "data:image/svg+xml,%3csvg%20width='443'%20height='759'%20viewBox='0%200%20443%20759'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M220%20985.5L143.026%20884.525C87.6682%20811.907%20103.094%20707.932%20177.15%20654.514L181.397%20651.451C254.733%20598.553%20268.499%20494.873%20211.508%20424.67V424.67C164.593%20366.88%20164.593%20284.12%20211.508%20226.33L316.5%2097'%20stroke='%23C75454'%20stroke-width='6'%20stroke-linecap='round'%20stroke-dasharray='20%2010'/%3e%3cpath%20d='M383.903%20108.576L391.955%2099.2155L372.417%2045.8619L393.199%2021.7014C393.199%2021.7014%20405.277%207.66004%20398.701%202.00395C392.121%20-3.65619%20380.043%2010.3852%20380.043%2010.3852L359.261%2034.5457L303.591%2023.208L295.539%2032.5689L343.157%2053.2676L328.716%2070.0564L310.248%2072.5021L302.197%2081.863L324.623%2088.1157L334.163%20109.359L342.215%2099.9982L341.872%2081.3726L356.313%2064.5838L383.903%20108.576Z'%20fill='%23C75454'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "popupThankYou"
}, {
  __name: "popupThankYou",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-thankyou" }, _attrs))} data-v-e161f1ac><div class="close-btn" data-v-e161f1ac>×</div><div class="plane-path" data-v-e161f1ac><img${ssrRenderAttr("src", _imports_0)} alt="plane" class="plane-img" data-v-e161f1ac></div><div class="thankyou-content" data-v-e161f1ac><div class="thankyou-title" data-v-e161f1ac>СПАСИБО!</div><div class="thankyou-line" data-v-e161f1ac></div><div class="thankyou-text" data-v-e161f1ac>Заявка отправлена.<br data-v-e161f1ac>В скором времени мы свяжемся с вами.</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupThankYou.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const popupThankYou = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e161f1ac"]]);
export {
  popupThankYou as default
};
//# sourceMappingURL=popupThankYou-BOY4JreD.js.map
