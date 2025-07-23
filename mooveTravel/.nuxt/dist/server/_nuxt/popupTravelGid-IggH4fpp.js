import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, d as useRoute } from "../server.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "imask";
import popupThankYou from "./popupThankYou-BOY4JreD.js";
import { u as useTourOrderStore } from "./tourOrder-OQGqTeWT.js";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "popupTravelGid"
}, {
  __name: "popupTravelGid",
  __ssrInlineRender: true,
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
    const showThankYouPopup = ref(false);
    useTourOrderStore();
    watch([contactByPhone, contactByEmail, contactByWhatsApp], () => {
      if (contactByPhone.value || contactByEmail.value || contactByWhatsApp.value) {
        contactError.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-comp" }, _attrs))} data-v-470469c1><div style="${ssrRenderStyle({ "z-index": "10", "position": "relative" })}" data-v-470469c1><div class="popup-header" style="${ssrRenderStyle({ "color": "#1E1E1E", "text-align": "justify" })}" data-v-470469c1>ПОДБЕРЕМ ТУР ДЛЯ ВАС</div><div class="popup-line" style="${ssrRenderStyle({ "width": "294px" })}" data-v-470469c1></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between" })}" data-v-470469c1><div class="popup-width" data-v-470469c1><div class="popup-inputs" data-v-470469c1><div class="pop-in" data-v-470469c1><input class="${ssrRenderClass([{ "error": nameError.value }, "popup-input"])}" type="text" id="userName" name="userName" placeholder=" "${ssrRenderAttr("value", name.value)} data-v-470469c1><label class="popup-label" for="userName" data-v-470469c1>Имя</label>`);
      if (nameError.value) {
        _push(`<div class="error-message" data-v-470469c1>${ssrInterpolate(nameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-470469c1><input class="${ssrRenderClass([{ "error": phoneError.value }, "popup-input"])}"${ssrRenderAttr("value", phone.value)} type="tel" id="userTel" name="userTel" placeholder=" " data-v-470469c1><label class="popup-label" for="userTel" data-v-470469c1>Номер телефона </label>`);
      if (phoneError.value) {
        _push(`<div class="error-message" data-v-470469c1>${ssrInterpolate(phoneError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-470469c1><input class="${ssrRenderClass([{ "error": emailError.value }, "popup-input"])}" type="email" id="emailId" name="emailId" placeholder=" "${ssrRenderAttr("value", email.value)} data-v-470469c1><label class="popup-label" for="emailId" data-v-470469c1>Email</label>`);
      if (emailError.value) {
        _push(`<div class="error-message" data-v-470469c1>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div data-v-470469c1><div class="popup-questions" style="${ssrRenderStyle({ "font-size": "24px" })}" data-v-470469c1>Предпочтительный формат связи</div><div class="popup-checkbox" style="${ssrRenderStyle({ "flex-direction": "column" })}" data-v-470469c1><div class="checkbox-element" data-v-470469c1><input class="checkbox-input" type="checkbox" id="checkbox-phone" name="checkbox-phone"${ssrIncludeBooleanAttr(Array.isArray(contactByPhone.value) ? ssrLooseContain(contactByPhone.value, null) : contactByPhone.value) ? " checked" : ""} data-v-470469c1><label for="checkbox-phone" data-v-470469c1></label><div class="checkbox-text" data-v-470469c1>Звонок по телефону</div></div><div class="checkbox-element" data-v-470469c1><input class="checkbox-input" type="checkbox" id="checkbox-email" name="checkbox-email"${ssrIncludeBooleanAttr(Array.isArray(contactByEmail.value) ? ssrLooseContain(contactByEmail.value, null) : contactByEmail.value) ? " checked" : ""} data-v-470469c1><label for="checkbox-email" data-v-470469c1></label><div class="checkbox-text" data-v-470469c1>Письмо на электронную почту</div></div><div class="checkbox-element" data-v-470469c1><input class="checkbox-input" type="checkbox" id="checkbox-whats" name="checkbox-whats"${ssrIncludeBooleanAttr(Array.isArray(contactByWhatsApp.value) ? ssrLooseContain(contactByWhatsApp.value, null) : contactByWhatsApp.value) ? " checked" : ""} data-v-470469c1><label for="checkbox-whats" data-v-470469c1></label><div class="checkbox-text" data-v-470469c1>Сообщение в WhatsApp</div></div></div>`);
      if (contactError.value) {
        _push(`<div class="error-message" data-v-470469c1>${ssrInterpolate(contactError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="popup-button" data-v-470469c1>Оставить заявку</div><div class="link-text" data-v-470469c1>Нажимая «Оставить заявку» вы даёте согласие <br data-v-470469c1> на <a class="popup-link" data-v-470469c1> обработку персональных данных.</a></div></div></div></div>`);
      if (notification.value) {
        _push(`<div class="${ssrRenderClass(["popup-notification", notificationType.value])}" data-v-470469c1>${ssrInterpolate(notification.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (showThankYouPopup.value) {
        _push(`<div class="modal-overlay" data-v-470469c1>`);
        _push(ssrRenderComponent(popupThankYou, {
          onClose: ($event) => showThankYouPopup.value = false
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupTravelGid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PopupTravelGid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-470469c1"]]);
export {
  PopupTravelGid as default
};
//# sourceMappingURL=popupTravelGid-IggH4fpp.js.map
