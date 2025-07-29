import { _ as _export_sfc, d as useRoute, b as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { u as useTourOrderStore } from './tourOrder-BxPrspMm.mjs';
import popupThankYou from './popupThankYou-DzMOwELb.mjs';
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
import 'axios';

const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "popupApplication"
}, {
  __name: "popupApplication",
  __ssrInlineRender: true,
  setup(__props) {
    useTourOrderStore();
    const windowWidth = ref(
      1201
      // desktop по умолчанию для SSR
    );
    const isMobile = computed(() => windowWidth.value <= 576);
    const isTablet = computed(() => windowWidth.value > 576 && windowWidth.value <= 1200);
    const email = ref("");
    const emailError = ref("");
    const name = ref("");
    const nameError = ref("");
    const phone = ref("");
    const phoneError = ref("");
    ref(null);
    const route = useRoute();
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
    watch([contactByPhone, contactByEmail, contactByWhatsApp], () => {
      if (contactByPhone.value || contactByEmail.value || contactByWhatsApp.value) {
        contactError.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["popup-comp", { "popup-comp-background": unref(route).path === "/blog" }]
      }, _attrs))} data-v-31f657d7><div class="${ssrRenderClass([{ "background-yellow": unref(route).path === "/about", "index-popup": unref(route).path === "/", "blur-background": unref(route).path === "/blog", "blog-popup": unref(route).path === "/blog" }, "popup-body"])}" data-v-31f657d7>`);
      if (unref(route).path === "/") {
        _push(`<div class="popup-darken" data-v-31f657d7></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "left": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" }, "header-popup"])}" data-v-31f657d7>`);
      if (unref(route).path !== "/blog") {
        _push(`<div class="${ssrRenderClass([{ "text": unref(route).path === "/", "desp-none": unref(route).path === "/Travel-gids" && isMobile.value || unref(route).path === "/Travel-gids" && isTablet.value }, "popup-header"])}" data-v-31f657d7><span data-v-31f657d7>\u041E\u0421\u0422\u0410\u0412\u042C \u0417\u0410\u042F\u0412\u041A\u0423 </span>\u041D\u0410 \u041F\u041E\u0414\u0411\u041E\u0420 \u0422\u0423\u0420\u0410 <div class="${ssrRenderClass([{ "line-white": unref(route).path === "/" }, "popup-line"])}" data-v-31f657d7></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).path === "/blog") {
        _push(`<div class="popup-header header-blog" data-v-31f657d7><span data-v-31f657d7>\u041D\u0423\u0416\u041D\u0410 \u041F\u041E\u041C\u041E\u0429\u042C </span>\u0421 \u041F\u041E\u0414\u0411\u041E\u0420\u041E\u041C \u0422\u0423\u0420\u0410? <div class="popup-line" data-v-31f657d7></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids") {
        _push(`<div class="${ssrRenderClass([{ "color-red": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" }, "popup-header header-blog"])}" data-v-31f657d7> \u041F\u041E\u0414\u0411\u0415\u0420\u0415\u041C \u0422\u0423\u0420 \u0414\u041B\u042F \u0412\u0410\u0421 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="popup-inputs" data-v-31f657d7><div class="${ssrRenderClass([{ "mobile-border": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article") }, "pop-in"])}" data-v-31f657d7><input class="${ssrRenderClass([{ "error": nameError.value }, "popup-input"])}" type="text" id="userName" name="userName" placeholder=" "${ssrRenderAttr("value", name.value)} data-v-31f657d7><label class="popup-label" for="userName" data-v-31f657d7>\u0418\u043C\u044F</label>`);
      if (nameError.value) {
        _push(`<div class="error-message error-background" data-v-31f657d7>${ssrInterpolate(nameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "mobile-border": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article") }, "pop-in"])}" data-v-31f657d7><input class="${ssrRenderClass([{ "error": phoneError.value }, "popup-input"])}"${ssrRenderAttr("value", phone.value)} type="tel" id="userTel" name="userTel" placeholder=" " data-v-31f657d7><label class="popup-label" for="userTel" data-v-31f657d7>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 </label>`);
      if (phoneError.value) {
        _push(`<div class="error-message error-background" data-v-31f657d7>${ssrInterpolate(phoneError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "mobile-border": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article") }, "pop-in"])}" data-v-31f657d7><input class="${ssrRenderClass([{ "error": emailError.value }, "popup-input"])}" type="email" id="emailId" name="emailId" placeholder=" "${ssrRenderAttr("value", email.value)} data-v-31f657d7><label class="popup-label" for="emailId" data-v-31f657d7>Email</label>`);
      if (emailError.value) {
        _push(`<div class="error-message error-background" data-v-31f657d7>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass([{ "text": unref(route).path === "/", "text-white": unref(route).path === "/blog" && isMobile.value || unref(route).path === "/blog" && isTablet.value }, "popup-questions"])}" data-v-31f657d7> \u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u0432\u044F\u0437\u0438 </div><div class="popup-checkbox" data-v-31f657d7><div class="checkbox-element" data-v-31f657d7><input class="checkbox-input" type="checkbox" id="checkbox-phone" name="checkbox-phone"${ssrIncludeBooleanAttr(Array.isArray(contactByPhone.value) ? ssrLooseContain(contactByPhone.value, null) : contactByPhone.value) ? " checked" : ""} data-v-31f657d7><label for="checkbox-phone" data-v-31f657d7></label><div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog", "text-black": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article"), "text-white": unref(route).path === "/blog" && isMobile.value || unref(route).path === "/blog" && isTablet.value }, "checkbox-text"])}" data-v-31f657d7> \u0417\u0432\u043E\u043D\u043E\u043A \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 </div></div><div class="checkbox-element" data-v-31f657d7><input class="checkbox-input" type="checkbox" id="checkbox-email" name="checkbox-email"${ssrIncludeBooleanAttr(Array.isArray(contactByEmail.value) ? ssrLooseContain(contactByEmail.value, null) : contactByEmail.value) ? " checked" : ""} data-v-31f657d7><label for="checkbox-email" data-v-31f657d7></label><div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog", "text-black": isTablet.value && unref(route).path === "/Travel-gids" || isMobile.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article"), "text-white": unref(route).path === "/blog" && isTablet.value || unref(route).path === "/blog" && isMobile.value }, "checkbox-text"])}" data-v-31f657d7> \u041F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 </div></div><div class="checkbox-element" data-v-31f657d7><input class="checkbox-input" type="checkbox" id="checkbox-whats" name="checkbox-whats"${ssrIncludeBooleanAttr(Array.isArray(contactByWhatsApp.value) ? ssrLooseContain(contactByWhatsApp.value, null) : contactByWhatsApp.value) ? " checked" : ""} data-v-31f657d7><label for="checkbox-whats" data-v-31f657d7></label><div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog", "text-black": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article"), "text-white": unref(route).path === "/blog" && isMobile.value || unref(route).path === "/blog" && isTablet.value }, "checkbox-text"])}" data-v-31f657d7> \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 WhatsApp </div></div></div>`);
      if (contactError.value) {
        _push(`<div class="error-background" data-v-31f657d7><div class="error-message" data-v-31f657d7>${ssrInterpolate(contactError.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="popup-giv-button" data-v-31f657d7>`);
      if (isMobile.value || isTablet.value) {
        _push(`<div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path.startsWith("/article") || unref(route).path === "/Travel-gids", "text-white": unref(route).path === "/blog" }, "giv-lid"])}" data-v-31f657d7> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443\xBB \u0432\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 <br data-v-31f657d7> \u043D\u0430 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/loyarInformation",
          class: [{ "color-link-start": unref(route).path === "/", "color-link": unref(route).path === "/about" || unref(route).path.startsWith("/article") || unref(route).path === "/Travel-gids", "text-white": unref(route).path === "/blog" }, "giv-lid-href"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443<br data-v-31f657d7${_scopeId}> \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. `);
            } else {
              return [
                createTextVNode(" \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443"),
                createVNode("br"),
                createTextVNode(" \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "button-blog": unref(route).path === "/blog" }, "popup-button"])}" data-v-31f657d7>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 </div></div><div class="lid-container" data-v-31f657d7>`);
      if (!isMobile.value && !isTablet.value) {
        _push(`<div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog" }, "giv-lid"])}" data-v-31f657d7>\u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443\xBB <br data-v-31f657d7> \u0432\u044B \u0434\u0430\u0451\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/loyarInformation",
          class: [{ "color-link-start": unref(route).path === "/", "color-link": unref(route).path === "/about" || unref(route).path === "/blog" }, "giv-lid-href"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443<br data-v-31f657d7${_scopeId}> \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. `);
            } else {
              return [
                createTextVNode(" \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443"),
                createVNode("br"),
                createTextVNode(" \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (notification.value) {
        _push(`<div class="${ssrRenderClass(["popup-notification", notificationType.value])}" data-v-31f657d7>${ssrInterpolate(notification.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (showThankYouPopup.value) {
        _push(`<div class="modal-overlay" data-v-31f657d7>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popupApplication.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PopupApplication = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31f657d7"]]);

export { PopupApplication as default };
//# sourceMappingURL=popupApplication-DEi7na23.mjs.map
