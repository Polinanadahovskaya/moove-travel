import { _ as _export_sfc, d as useRoute, b as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "payment-callback",
  __ssrInlineRender: true,
  setup(__props) {
    const status = ref(null);
    useRoute();
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-callback" }, _attrs))} data-v-16b5d88a>`);
      if (status.value === "success") {
        _push(`<div class="callback-block success" data-v-16b5d88a><div class="icon success-icon" data-v-16b5d88a>\u2714\uFE0F</div><h2 data-v-16b5d88a>\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u0440\u043E\u0448\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!</h2><p data-v-16b5d88a>\u0412\u0430\u0448 \u0433\u0438\u0434 \u0431\u044B\u043B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u043C\u0438 email.</p><button class="callback-btn" data-v-16b5d88a>\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u0433\u0438\u0434\u0430</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "callback-btn",
          style: { "margin-top": "12px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E`);
            } else {
              return [
                createTextVNode("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (status.value === "fail") {
        _push(`<div class="callback-block fail" data-v-16b5d88a><div class="icon fail-icon" data-v-16b5d88a>\u274C</div><h2 data-v-16b5d88a>\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C \u0438\u043B\u0438 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430</h2><p data-v-16b5d88a>\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "callback-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E`);
            } else {
              return [
                createTextVNode("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="callback-block loading" data-v-16b5d88a><div class="icon loading-icon" data-v-16b5d88a>\u23F3</div><h2 data-v-16b5d88a>\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0441\u0442\u0430\u0442\u0443\u0441 \u043E\u043F\u043B\u0430\u0442\u044B...</h2></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment-callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paymentCallback = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16b5d88a"]]);

export { paymentCallback as default };
//# sourceMappingURL=payment-callback-CPjj91sq.mjs.map
