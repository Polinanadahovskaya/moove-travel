import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, d as useRoute } from "../server.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "imask";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-comp" }, _attrs))} data-v-23a2e5a6><div class="close-btn" data-v-23a2e5a6>×</div><div data-v-23a2e5a6><div class="popup-width" data-v-23a2e5a6><div class="popup-inputs" data-v-23a2e5a6><div class="pop-in" data-v-23a2e5a6><input class="${ssrRenderClass([{ "error": nameError.value }, "popup-input"])}" type="text" id="userName" name="userName" placeholder=" "${ssrRenderAttr("value", name.value)} data-v-23a2e5a6><label class="popup-label" for="userName" data-v-23a2e5a6>Имя</label>`);
      if (nameError.value) {
        _push(`<div class="error-message" data-v-23a2e5a6>${ssrInterpolate(nameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-23a2e5a6><input class="${ssrRenderClass([{ "error": phoneError.value }, "popup-input"])}"${ssrRenderAttr("value", phone.value)} type="tel" id="userTel" name="userTel" placeholder=" " data-v-23a2e5a6><label class="popup-label" for="userTel" data-v-23a2e5a6>Номер телефона </label>`);
      if (phoneError.value) {
        _push(`<div class="error-message" data-v-23a2e5a6>${ssrInterpolate(phoneError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-23a2e5a6><input class="${ssrRenderClass([{ "error": emailError.value }, "popup-input"])}" type="email" id="emailId" name="emailId" placeholder=" "${ssrRenderAttr("value", email.value)} data-v-23a2e5a6><label class="popup-label" for="emailId" data-v-23a2e5a6>Email</label>`);
      if (emailError.value) {
        _push(`<div class="error-message" data-v-23a2e5a6>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="popup-pay" data-v-23a2e5a6><div class="prices" data-v-23a2e5a6><div class="fix-price" data-v-23a2e5a6>${ssrInterpolate(formatPrice(__props.price))} ₽</div></div><div class="button-pay" data-v-23a2e5a6>Купить</div></div>`);
      if (notification.value) {
        _push(`<div class="${ssrRenderClass(["popup-notification", notificationType.value])}" data-v-23a2e5a6>${ssrInterpolate(notification.value)}</div>`);
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
const popupBeforePay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23a2e5a6"]]);
export {
  popupBeforePay as default
};
//# sourceMappingURL=popupBeforePay-Deth0pio.js.map
