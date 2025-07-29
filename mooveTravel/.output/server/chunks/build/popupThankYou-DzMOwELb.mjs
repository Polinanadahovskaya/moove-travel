import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
import 'vue-router';
import 'pinia';

const _imports_0 = "data:image/svg+xml,%3csvg%20width='443'%20height='759'%20viewBox='0%200%20443%20759'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M220%20985.5L143.026%20884.525C87.6682%20811.907%20103.094%20707.932%20177.15%20654.514L181.397%20651.451C254.733%20598.553%20268.499%20494.873%20211.508%20424.67V424.67C164.593%20366.88%20164.593%20284.12%20211.508%20226.33L316.5%2097'%20stroke='%23C75454'%20stroke-width='6'%20stroke-linecap='round'%20stroke-dasharray='20%2010'/%3e%3cpath%20d='M383.903%20108.576L391.955%2099.2155L372.417%2045.8619L393.199%2021.7014C393.199%2021.7014%20405.277%207.66004%20398.701%202.00395C392.121%20-3.65619%20380.043%2010.3852%20380.043%2010.3852L359.261%2034.5457L303.591%2023.208L295.539%2032.5689L343.157%2053.2676L328.716%2070.0564L310.248%2072.5021L302.197%2081.863L324.623%2088.1157L334.163%20109.359L342.215%2099.9982L341.872%2081.3726L356.313%2064.5838L383.903%20108.576Z'%20fill='%23C75454'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "popupThankYou"
}, {
  __name: "popupThankYou",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-thankyou" }, _attrs))} data-v-f337c073><div class="close-btn" data-v-f337c073>\xD7</div><div class="plane-path" data-v-f337c073><img${ssrRenderAttr("src", _imports_0)} alt="plane" class="plane-img" data-v-f337c073></div><div class="thankyou-content" data-v-f337c073><div class="thankyou-title" data-v-f337c073>\u0421\u041F\u0410\u0421\u0418\u0411\u041E!</div><div class="thankyou-line" data-v-f337c073></div><div class="thankyou-text" data-v-f337c073>\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.<br data-v-f337c073>\u0412 \u0441\u043A\u043E\u0440\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438.</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupThankYou.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const popupThankYou = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f337c073"]]);

export { popupThankYou as default };
//# sourceMappingURL=popupThankYou-DzMOwELb.mjs.map
