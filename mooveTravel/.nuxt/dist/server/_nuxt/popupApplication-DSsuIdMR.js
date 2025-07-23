import { _ as _export_sfc, d as useRoute, b as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { u as useTourOrderStore } from "./tourOrder-OQGqTeWT.js";
import "imask";
import popupThankYou from "./popupThankYou-BOY4JreD.js";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["popup-comp", { "popup-comp-background": unref(route).path === "/blog" }]
      }, _attrs))} data-v-41be774a><div class="${ssrRenderClass([{ "background-yellow": unref(route).path === "/about", "index-popup": unref(route).path === "/", "blur-background": unref(route).path === "/blog", "blog-popup": unref(route).path === "/blog" }, "popup-body"])}" data-v-41be774a>`);
      if (unref(route).path === "/") {
        _push(`<div class="popup-darken" data-v-41be774a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "left": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" }, "header-popup"])}" data-v-41be774a>`);
      if (unref(route).path !== "/blog") {
        _push(`<div class="${ssrRenderClass([{ "text": unref(route).path === "/", "desp-none": unref(route).path === "/Travel-gids" && isMobile.value || unref(route).path === "/Travel-gids" && isTablet.value }, "popup-header"])}" data-v-41be774a><span data-v-41be774a>ОСТАВЬ ЗАЯВКУ </span>НА ПОДБОР ТУРА <div class="${ssrRenderClass([{ "line-white": unref(route).path === "/" }, "popup-line"])}" data-v-41be774a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).path === "/blog") {
        _push(`<div class="popup-header header-blog" data-v-41be774a><span data-v-41be774a>НУЖНА ПОМОЩЬ </span>С ПОДБОРОМ ТУРА? <div class="popup-line" data-v-41be774a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids") {
        _push(`<div class="${ssrRenderClass([{ "color-red": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" }, "popup-header header-blog"])}" data-v-41be774a> ПОДБЕРЕМ ТУР ДЛЯ ВАС </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="popup-inputs" data-v-41be774a><div class="${ssrRenderClass([{ "mobile-border": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article") }, "pop-in"])}" data-v-41be774a><input class="${ssrRenderClass([{ "error": nameError.value }, "popup-input"])}" type="text" id="userName" name="userName" placeholder=" "${ssrRenderAttr("value", name.value)} data-v-41be774a><label class="popup-label" for="userName" data-v-41be774a>Имя</label>`);
      if (nameError.value) {
        _push(`<div class="error-message error-background" data-v-41be774a>${ssrInterpolate(nameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "mobile-border": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article") }, "pop-in"])}" data-v-41be774a><input class="${ssrRenderClass([{ "error": phoneError.value }, "popup-input"])}"${ssrRenderAttr("value", phone.value)} type="tel" id="userTel" name="userTel" placeholder=" " data-v-41be774a><label class="popup-label" for="userTel" data-v-41be774a>Номер телефона </label>`);
      if (phoneError.value) {
        _push(`<div class="error-message error-background" data-v-41be774a>${ssrInterpolate(phoneError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "mobile-border": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article") }, "pop-in"])}" data-v-41be774a><input class="${ssrRenderClass([{ "error": emailError.value }, "popup-input"])}" type="email" id="emailId" name="emailId" placeholder=" "${ssrRenderAttr("value", email.value)} data-v-41be774a><label class="popup-label" for="emailId" data-v-41be774a>Email</label>`);
      if (emailError.value) {
        _push(`<div class="error-message error-background" data-v-41be774a>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="${ssrRenderClass([{ "text": unref(route).path === "/", "text-white": unref(route).path === "/blog" && isMobile.value || unref(route).path === "/blog" && isTablet.value }, "popup-questions"])}" data-v-41be774a> Предпочтительный формат связи </div><div class="popup-checkbox" data-v-41be774a><div class="checkbox-element" data-v-41be774a><input class="checkbox-input" type="checkbox" id="checkbox-phone" name="checkbox-phone"${ssrIncludeBooleanAttr(Array.isArray(contactByPhone.value) ? ssrLooseContain(contactByPhone.value, null) : contactByPhone.value) ? " checked" : ""} data-v-41be774a><label for="checkbox-phone" data-v-41be774a></label><div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog", "text-black": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article"), "text-white": unref(route).path === "/blog" && isMobile.value || unref(route).path === "/blog" && isTablet.value }, "checkbox-text"])}" data-v-41be774a> Звонок по телефону </div></div><div class="checkbox-element" data-v-41be774a><input class="checkbox-input" type="checkbox" id="checkbox-email" name="checkbox-email"${ssrIncludeBooleanAttr(Array.isArray(contactByEmail.value) ? ssrLooseContain(contactByEmail.value, null) : contactByEmail.value) ? " checked" : ""} data-v-41be774a><label for="checkbox-email" data-v-41be774a></label><div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog", "text-black": isTablet.value && unref(route).path === "/Travel-gids" || isMobile.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article"), "text-white": unref(route).path === "/blog" && isTablet.value || unref(route).path === "/blog" && isMobile.value }, "checkbox-text"])}" data-v-41be774a> Письмо на электронную почту </div></div><div class="checkbox-element" data-v-41be774a><input class="checkbox-input" type="checkbox" id="checkbox-whats" name="checkbox-whats"${ssrIncludeBooleanAttr(Array.isArray(contactByWhatsApp.value) ? ssrLooseContain(contactByWhatsApp.value, null) : contactByWhatsApp.value) ? " checked" : ""} data-v-41be774a><label for="checkbox-whats" data-v-41be774a></label><div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog", "text-black": isMobile.value && unref(route).path === "/Travel-gids" || isTablet.value && unref(route).path === "/Travel-gids" || unref(route).path.startsWith("/article"), "text-white": unref(route).path === "/blog" && isMobile.value || unref(route).path === "/blog" && isTablet.value }, "checkbox-text"])}" data-v-41be774a> Сообщение в WhatsApp </div></div></div>`);
      if (contactError.value) {
        _push(`<div class="error-background" data-v-41be774a><div class="error-message" data-v-41be774a>${ssrInterpolate(contactError.value)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="popup-giv-button" data-v-41be774a>`);
      if (isMobile.value || isTablet.value) {
        _push(`<div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path.startsWith("/article") || unref(route).path === "/Travel-gids", "text-white": unref(route).path === "/blog" }, "giv-lid"])}" data-v-41be774a> Нажимая «Оставить заявку» вы даёте согласие <br data-v-41be774a> на `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/loyarInformation",
          class: [{ "color-link-start": unref(route).path === "/", "color-link": unref(route).path === "/about" || unref(route).path.startsWith("/article") || unref(route).path === "/Travel-gids", "text-white": unref(route).path === "/blog" }, "giv-lid-href"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` обработку<br data-v-41be774a${_scopeId}> персональных данных. `);
            } else {
              return [
                createTextVNode(" обработку"),
                createVNode("br"),
                createTextVNode(" персональных данных. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "button-blog": unref(route).path === "/blog" }, "popup-button"])}" data-v-41be774a>Оставить заявку </div></div><div class="lid-container" data-v-41be774a>`);
      if (!isMobile.value && !isTablet.value) {
        _push(`<div class="${ssrRenderClass([{ "color-black": unref(route).path === "/about" || unref(route).path === "/blog" }, "giv-lid"])}" data-v-41be774a>Нажимая «Оставить заявку» <br data-v-41be774a> вы даёте согласие на `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/loyarInformation",
          class: [{ "color-link-start": unref(route).path === "/", "color-link": unref(route).path === "/about" || unref(route).path === "/blog" }, "giv-lid-href"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` обработку<br data-v-41be774a${_scopeId}> персональных данных. `);
            } else {
              return [
                createTextVNode(" обработку"),
                createVNode("br"),
                createTextVNode(" персональных данных. ")
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
        _push(`<div class="${ssrRenderClass(["popup-notification", notificationType.value])}" data-v-41be774a>${ssrInterpolate(notification.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (showThankYouPopup.value) {
        _push(`<div class="modal-overlay" data-v-41be774a>`);
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
const PopupApplication = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41be774a"]]);
export {
  PopupApplication as default
};
//# sourceMappingURL=popupApplication-DSsuIdMR.js.map
