import { _ as _export_sfc, d as useRoute, b as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, watch, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "imask";
import popupThankYou from "./popupThankYou-DzMOwELb.js";
import { u as useTourOrderStore } from "./tourOrder-BxPrspMm.js";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "popupTravelGid"
}, {
  __name: "popupArticle",
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "popup-comp" }, _attrs))} data-v-37c9e1ab><div class="popup-article_body" data-v-37c9e1ab><div class="text-line" data-v-37c9e1ab><div class="popup-header" data-v-37c9e1ab>ОСТАВИТЬ ЗАЯВКУ <br data-v-37c9e1ab> НА ПОДБОР ТУРА</div><div class="popup-line" style="${ssrRenderStyle({ "width": "294px" })}" data-v-37c9e1ab></div></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "gap": "62px", "width": "72%" })}" data-v-37c9e1ab><div class="popup-width" data-v-37c9e1ab><div class="popup-inputs" data-v-37c9e1ab><div class="pop-in" data-v-37c9e1ab><input class="${ssrRenderClass([{ "error": nameError.value }, "popup-input"])}" type="text" id="userName" name="userName" placeholder=" "${ssrRenderAttr("value", name.value)} data-v-37c9e1ab><label class="popup-label" for="userName" data-v-37c9e1ab>Имя</label>`);
      if (nameError.value) {
        _push(`<div class="error-message" data-v-37c9e1ab>${ssrInterpolate(nameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-37c9e1ab><input class="${ssrRenderClass([{ "error": phoneError.value }, "popup-input"])}"${ssrRenderAttr("value", phone.value)} type="tel" id="userTel" name="userTel" placeholder=" " data-v-37c9e1ab><label class="popup-label" for="userTel" data-v-37c9e1ab>Номер телефона </label>`);
      if (phoneError.value) {
        _push(`<div class="error-message" data-v-37c9e1ab>${ssrInterpolate(phoneError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pop-in" data-v-37c9e1ab><input class="${ssrRenderClass([{ "error": emailError.value }, "popup-input"])}" type="email" id="emailId" name="emailId" placeholder=" "${ssrRenderAttr("value", email.value)} data-v-37c9e1ab><label class="popup-label" for="emailId" data-v-37c9e1ab>Email</label>`);
      if (emailError.value) {
        _push(`<div class="error-message" data-v-37c9e1ab>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="popup-button" data-v-37c9e1ab>Отправить</div></div></div><div data-v-37c9e1ab><div class="popup-questions" data-v-37c9e1ab>Предпочтительный <br data-v-37c9e1ab> формат связи</div><div class="popup-checkbox" style="${ssrRenderStyle({ "flex-direction": "column" })}" data-v-37c9e1ab><div class="checkbox-element" data-v-37c9e1ab><input class="checkbox-input" type="checkbox" id="checkbox-phone" name="checkbox-phone"${ssrIncludeBooleanAttr(Array.isArray(contactByPhone.value) ? ssrLooseContain(contactByPhone.value, null) : contactByPhone.value) ? " checked" : ""} data-v-37c9e1ab><label for="checkbox-phone" data-v-37c9e1ab></label><div class="checkbox-text" data-v-37c9e1ab>Звонок по телефону</div></div><div class="checkbox-element" data-v-37c9e1ab><input class="checkbox-input" type="checkbox" id="checkbox-email" name="checkbox-email"${ssrIncludeBooleanAttr(Array.isArray(contactByEmail.value) ? ssrLooseContain(contactByEmail.value, null) : contactByEmail.value) ? " checked" : ""} data-v-37c9e1ab><label for="checkbox-email" data-v-37c9e1ab></label><div class="checkbox-text" data-v-37c9e1ab>Письмо на электронную почту</div></div><div class="checkbox-element" data-v-37c9e1ab><input class="checkbox-input" type="checkbox" id="checkbox-whats" name="checkbox-whats"${ssrIncludeBooleanAttr(Array.isArray(contactByWhatsApp.value) ? ssrLooseContain(contactByWhatsApp.value, null) : contactByWhatsApp.value) ? " checked" : ""} data-v-37c9e1ab><label for="checkbox-whats" data-v-37c9e1ab></label><div class="checkbox-text" data-v-37c9e1ab>Сообщение в WhatsApp</div></div></div>`);
      if (contactError.value) {
        _push(`<div class="error-message" data-v-37c9e1ab>${ssrInterpolate(contactError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="link-text" data-v-37c9e1ab>Нажимая «Оставить заявку» вы даёте согласие <br data-v-37c9e1ab> на `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/loyarInformation",
        class: "popup-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` обработку персональных данных.`);
          } else {
            return [
              createTextVNode(" обработку персональных данных.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      if (notification.value) {
        _push(`<div class="${ssrRenderClass(["popup-notification", notificationType.value])}" data-v-37c9e1ab>${ssrInterpolate(notification.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (showThankYouPopup.value) {
        _push(`<div class="modal-overlay" data-v-37c9e1ab>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PopupArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37c9e1ab"]]);
export {
  PopupArticle as default
};
//# sourceMappingURL=popupArticle-PTeyDulG.js.map
