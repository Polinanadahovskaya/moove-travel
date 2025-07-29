import { _ as _export_sfc, d as useRoute, b as __nuxt_component_0 } from "../server.mjs";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
const _sfc_main = {
  __name: "payment-callback",
  __ssrInlineRender: true,
  setup(__props) {
    const status = ref(null);
    useRoute();
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-callback" }, _attrs))} data-v-16b5d88a>`);
      if (status.value === "success") {
        _push(`<div class="callback-block success" data-v-16b5d88a><div class="icon success-icon" data-v-16b5d88a>✔️</div><h2 data-v-16b5d88a>Оплата прошла успешно!</h2><p data-v-16b5d88a>Ваш гид был отправлен на указанный вами email.</p><button class="callback-btn" data-v-16b5d88a>Скачать файл гида</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "callback-btn",
          style: { "margin-top": "12px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`На главную`);
            } else {
              return [
                createTextVNode("На главную")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (status.value === "fail") {
        _push(`<div class="callback-block fail" data-v-16b5d88a><div class="icon fail-icon" data-v-16b5d88a>❌</div><h2 data-v-16b5d88a>Оплата не удалась или отменена</h2><p data-v-16b5d88a>Проверьте данные и попробуйте снова.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "callback-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`На главную`);
            } else {
              return [
                createTextVNode("На главную")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="callback-block loading" data-v-16b5d88a><div class="icon loading-icon" data-v-16b5d88a>⏳</div><h2 data-v-16b5d88a>Проверяем статус оплаты...</h2></div>`);
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
export {
  paymentCallback as default
};
//# sourceMappingURL=payment-callback-CPjj91sq.js.map
