import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as useRoute } from './server.mjs';
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
  name: "popupBeforePay"
}, {
  __name: "popupBeforePay",
  __ssrInlineRender: true,
  props: {
    price: {
      required: true
    },
    currentGuide: {}
  },
  emits: ["close"],
  setup(__props) {
    const email = ref("");
    const emailError = ref("");
    const name = ref("");
    const nameError = ref("");
    const phone = ref("");
    const phoneError = ref("");
    ref(null);
    useRoute();
    const contactByPhone = ref(false);
    const contactByEmail = ref(false);
    const contactByWhatsApp = ref(false);
    const contactError = ref("");
    computed(() => contactByPhone.value || contactByWhatsApp.value);
    computed(() => contactByEmail.value);
    computed(() => contactByEmail.value && (contactByPhone.value || contactByWhatsApp.value));
    const notification = ref("");
    const notificationType = ref("");
    const formatPrice = (price) => {
      const roundedPrice = Math.round(price);
      return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    watch([contactByPhone, contactByEmail, contactByWhatsApp], () => {
      if (contactByPhone.value || contactByEmail.value || contactByWhatsApp.value) {
        contactError.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-comp" }, _attrs))} data-v-667d8136><div class="close-btn" data-v-667d8136>\xD7</div><div data-v-667d8136><div class="popup-width" data-v-667d8136><div class="popup-inputs" data-v-667d8136><div class="pop-in" data-v-667d8136><input class="${ssrRenderClass([{ "error": nameError.value }, "popup-input"])}" type="text" id="userName" name="userName" placeholder=" "${ssrRenderAttr("value", name.value)} data-v-667d8136><label class="popup-label" for="userName" data-v-667d8136>\u0418\u043C\u044F</label>`);
      if (nameError.value) {
        _push(`<div class="error-message" data-v-667d8136>${ssrInterpolate(nameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-667d8136><input class="${ssrRenderClass([{ "error": phoneError.value }, "popup-input"])}"${ssrRenderAttr("value", phone.value)} type="tel" id="userTel" name="userTel" placeholder=" " data-v-667d8136><label class="popup-label" for="userTel" data-v-667d8136>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 </label>`);
      if (phoneError.value) {
        _push(`<div class="error-message" data-v-667d8136>${ssrInterpolate(phoneError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-667d8136><input class="${ssrRenderClass([{ "error": emailError.value }, "popup-input"])}" type="email" id="emailId" name="emailId" placeholder=" "${ssrRenderAttr("value", email.value)} data-v-667d8136><label class="popup-label" for="emailId" data-v-667d8136>Email</label>`);
      if (emailError.value) {
        _push(`<div class="error-message" data-v-667d8136>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="popup-pay" data-v-667d8136><div class="prices" data-v-667d8136><div class="fix-price" data-v-667d8136>${ssrInterpolate(formatPrice(__props.price))} \u20BD</div></div><div class="button-pay" data-v-667d8136>\u041A\u0443\u043F\u0438\u0442\u044C</div></div>`);
      if (notification.value) {
        _push(`<div class="${ssrRenderClass(["popup-notification", notificationType.value])}" data-v-667d8136>${ssrInterpolate(notification.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupBeforePay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const popupBeforePay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-667d8136"]]);

export { popupBeforePay as default };
//# sourceMappingURL=popupBeforePay-D14IRMdU.mjs.map
