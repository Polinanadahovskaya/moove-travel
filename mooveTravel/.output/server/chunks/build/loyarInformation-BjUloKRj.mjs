import { withAsyncContext, computed, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHead } from './v3-DwIDDKq-.mjs';
import { u as useAsyncData } from './asyncData-Bo-BqEjD.mjs';
import { _ as _export_sfc, c as useRouter } from './server.mjs';
import { u as usePagesStore } from './pages-BW6208qI.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'pinia';
import 'axios';

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
      title: "\u041F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F | Moov Travel",
      meta: [
        { name: "description", content: "\u041F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0430 Moov Travel." },
        { name: "robots", content: "noindex, nofollow" }
      ],
      link: [
        { rel: "canonical", href: "https://moov-travel.ru/loyarInformation" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-99c060a7><div class="back-country" data-v-99c060a7><div class="header-content" data-v-99c060a7><h1 data-v-99c060a7>${ssrInterpolate((_a = loyarPage.value) == null ? void 0 : _a.title)}</h1><button class="back-btn" data-v-99c060a7>\u2190 \u041D\u0430\u0437\u0430\u0434</button></div></div><div class="info" data-v-99c060a7><div data-v-99c060a7><!--[-->`);
      ssrRenderList((_b = loyarPage.value) == null ? void 0 : _b.content, (block, idx) => {
        var _a2;
        _push(`<div data-v-99c060a7>`);
        if ((block == null ? void 0 : block.type) === "heading") {
          _push(`<h2 class="loyar-header" data-v-99c060a7>${ssrInterpolate((block == null ? void 0 : block.children) && (block == null ? void 0 : block.children[0]) ? block == null ? void 0 : block.children[0].text : "")} <br data-v-99c060a7><br data-v-99c060a7></h2>`);
        } else if (block.type === "paragraph") {
          _push(`<div class="loyar-info" data-v-99c060a7>${(_a2 = block.children && block.children[0] ? block.children[0].text : "") != null ? _a2 : ""}</div>`);
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

export { loyarInformation as default };
//# sourceMappingURL=loyarInformation-BjUloKRj.mjs.map
