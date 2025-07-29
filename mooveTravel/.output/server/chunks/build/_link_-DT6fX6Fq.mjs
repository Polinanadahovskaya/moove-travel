import { _ as _export_sfc, a as useNuxtApp, c as useRouter, b as __nuxt_component_0$1 } from './server.mjs';
import { computed, withAsyncContext, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderStyle } from 'vue/server-renderer';
import PopupArticle from './popupArticle-PTeyDulG.mjs';
import PopupApplication from './popupApplication-DEi7na23.mjs';
import { u as useArticlesStore } from './articles-b5rl9zuU.mjs';
import { useRoute } from 'vue-router';
import { u as useHead } from './v3-DwIDDKq-.mjs';
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
import 'pinia';
import './popupThankYou-DzMOwELb.mjs';
import './tourOrder-BxPrspMm.mjs';
import 'axios';

const _sfc_main = {
  __name: "[link]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $getImageUrl } = useNuxtApp();
    const router = useRouter();
    function renderBlock(block) {
      var _a, _b, _c;
      if (block.type === "heading") {
        return h(
          `h${block.level}`,
          { class: "art_heading" },
          (_a = block.children) == null ? void 0 : _a.map((child) => child.text).join("")
        );
      }
      if (block.type === "paragraph") {
        return h(
          "p",
          { class: "art_paragraph" },
          (_b = block.children) == null ? void 0 : _b.map((child) => child.text).join("")
        );
      }
      if (block.type === "image") {
        return h(
          "div",
          { class: "art_image-block" },
          [
            h("img", {
              src: $getImageUrl(block.image.url),
              alt: block.image.alternativeText || ((_c = article.value) == null ? void 0 : _c.title) || "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A \u0441\u0442\u0430\u0442\u044C\u0435",
              class: "art_image"
            }),
            block.image.caption ? h("span", { class: "art_image-caption" }, block.image.caption) : null
          ]
        );
      }
      return null;
    }
    const route = useRoute();
    const link = route.params.link;
    const articlesStore = useArticlesStore();
    const article = computed(() => articlesStore.getArticlesLink);
    useHead(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      return {
        title: ((_a = article.value) == null ? void 0 : _a.title) ? `${article.value.title} | Moov Travel` : "\u0411\u043B\u043E\u0433 | Moov Travel",
        meta: [
          { name: "description", content: ((_b = article.value) == null ? void 0 : _b.description) || "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445 \u0432 \u0431\u043B\u043E\u0433\u0435 Moov Travel." },
          { property: "og:title", content: ((_c = article.value) == null ? void 0 : _c.title) ? `${article.value.title} | Moov Travel` : "\u0411\u043B\u043E\u0433 | Moov Travel" },
          { property: "og:description", content: ((_d = article.value) == null ? void 0 : _d.description) || "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445 \u0432 \u0431\u043B\u043E\u0433\u0435 Moov Travel." },
          { property: "og:image", content: $getImageUrl((_g = (_f = (_e = article.value) == null ? void 0 : _e.articlePhotos) == null ? void 0 : _f[0]) == null ? void 0 : _g.url) },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `https://moov-travel.ru/article/${link}` }
        ],
        link: [
          { rel: "canonical", href: `https://moov-travel.ru/article/${link}` }
        ]
      };
    });
    [__temp, __restore] = withAsyncContext(() => articlesStore.fetchArticleByLink(link)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-393689b6><div class="article_header" data-v-393689b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: ($event) => unref(router).back(),
        class: "article_back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 \u041D\u0430\u0437\u0430\u0434`);
          } else {
            return [
              createTextVNode("\u2190 \u041D\u0430\u0437\u0430\u0434")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="article_tittle" data-v-393689b6>${ssrInterpolate((_a = article.value) == null ? void 0 : _a.title)}</h1></div><div class="article_body" data-v-393689b6><div class="art-user" data-v-393689b6><div data-v-393689b6><div class="art_text" data-v-393689b6><!--[-->`);
      ssrRenderList((_b = article.value) == null ? void 0 : _b.content, (block, idx) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(renderBlock(block)), null, null), _parent);
      });
      _push(`<!--]--></div></div><div class="user" data-v-393689b6><div data-v-393689b6></div><div data-v-393689b6></div></div></div><div class="none-art" data-v-393689b6><div class="article_images" data-v-393689b6><!--[-->`);
      ssrRenderList((_d = (_c = article.value) == null ? void 0 : _c.articlePhotos) == null ? void 0 : _d.slice(0, 2), (img) => {
        _push(`<div data-v-393689b6><div class="article_image" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)(img.url)}')` })}" data-v-393689b6></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(unref(PopupArticle), { class: "none-art" }, null, _parent));
      _push(ssrRenderComponent(unref(PopupApplication), { class: "none-desk" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[link].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-393689b6"]]);

export { _link_ as default };
//# sourceMappingURL=_link_-DT6fX6Fq.mjs.map
