import { withAsyncContext, computed, ref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-DwIDDKq-.js";
import { u as useAsyncData } from "./asyncData-Bo-BqEjD.js";
import { _ as _export_sfc, c as useRouter } from "../server.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { u as usePagesStore } from "./pages-BW6208qI.js";
import "D:/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "axios";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "loyarInformation"
}, {
  __name: "loyarInformation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const pagesStore = usePagesStore();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("mainPage", () => pagesStore.fetchLoyarPage())), await __temp, __restore();
    const loyarPage = computed(() => pagesStore.getLoyarPage);
    ref(0);
    computed(() => {
      {
        return false;
      }
    });
    useHead({
      title: "Правовая информация | Moov Travel",
      meta: [
        { name: "description", content: "Правовая информация и документы туристического агентства Moov Travel." },
        { name: "robots", content: "noindex, nofollow" }
      ],
      link: [
        { rel: "canonical", href: "https://moov-travel.ru/loyarInformation" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-99c060a7><div class="back-country" data-v-99c060a7><div class="header-content" data-v-99c060a7><h1 data-v-99c060a7>${ssrInterpolate(loyarPage.value?.title)}</h1><button class="back-btn" data-v-99c060a7>← Назад</button></div></div><div class="info" data-v-99c060a7><div data-v-99c060a7><!--[-->`);
      ssrRenderList(loyarPage.value?.content, (block, idx) => {
        _push(`<div data-v-99c060a7>`);
        if (block?.type === "heading") {
          _push(`<h2 class="loyar-header" data-v-99c060a7>${ssrInterpolate(block?.children && block?.children[0] ? block?.children[0].text : "")} <br data-v-99c060a7><br data-v-99c060a7></h2>`);
        } else if (block.type === "paragraph") {
          _push(`<div class="loyar-info" data-v-99c060a7>${(block.children && block.children[0] ? block.children[0].text : "") ?? ""}</div>`);
        } else if (block.type === "list") {
          _push(`<ul class="loyar-info" data-v-99c060a7><!--[-->`);
          ssrRenderList(block.children, (item, i) => {
            _push(`<li data-v-99c060a7><!--[-->`);
            ssrRenderList(item.children, (child, j) => {
              _push(`<span data-v-99c060a7>${ssrInterpolate(child.text)}</span>`);
            });
            _push(`<!--]--></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loyarInformation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loyarInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-99c060a7"]]);
export {
  loyarInformation as default
};
//# sourceMappingURL=loyarInformation-BjUloKRj.js.map
