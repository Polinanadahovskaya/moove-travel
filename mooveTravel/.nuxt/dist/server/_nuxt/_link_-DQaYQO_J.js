import { _ as _export_sfc, a as useNuxtApp, c as useRouter, b as __nuxt_component_0 } from "../server.mjs";
import { computed, withAsyncContext, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, h, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import PopupArticle from "./popupArticle-C_pyHrhv.js";
import PopupApplication from "./popupApplication-DSsuIdMR.js";
import { u as useArticlesStore } from "./articles-Cn_LJMoj.js";
import { useRoute } from "vue-router";
import { u as useHead } from "./v3-jeJGgwfC.js";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "imask";
import "./popupThankYou-BOY4JreD.js";
import "./tourOrder-OQGqTeWT.js";
import "axios";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
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
              alt: block.image.alternativeText || ((_c = article.value) == null ? void 0 : _c.title) || "Изображение к статье",
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
        title: ((_a = article.value) == null ? void 0 : _a.title) ? `${article.value.title} | Moov Travel` : "Блог | Moov Travel",
        meta: [
          { name: "description", content: ((_b = article.value) == null ? void 0 : _b.description) || "Читайте интересные статьи о путешествиях в блоге Moov Travel." },
          { property: "og:title", content: ((_c = article.value) == null ? void 0 : _c.title) ? `${article.value.title} | Moov Travel` : "Блог | Moov Travel" },
          { property: "og:description", content: ((_d = article.value) == null ? void 0 : _d.description) || "Читайте интересные статьи о путешествиях в блоге Moov Travel." },
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0c1a2903><div class="article_header" data-v-0c1a2903>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: ($event) => unref(router).back(),
        class: "article_back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Назад`);
          } else {
            return [
              createTextVNode("← Назад")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="article_tittle" data-v-0c1a2903>${ssrInterpolate((_a = article.value) == null ? void 0 : _a.title)}</h1></div><div class="article_body" data-v-0c1a2903><div class="art-user" data-v-0c1a2903><div data-v-0c1a2903><div class="art_text" data-v-0c1a2903><!--[-->`);
      ssrRenderList((_b = article.value) == null ? void 0 : _b.content, (block, idx) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(renderBlock(block)), null, null), _parent);
      });
      _push(`<!--]--></div></div><div class="user" data-v-0c1a2903><div data-v-0c1a2903></div><div data-v-0c1a2903></div></div></div><div class="none-art" data-v-0c1a2903><div class="article_images" data-v-0c1a2903><!--[-->`);
      ssrRenderList((_d = (_c = article.value) == null ? void 0 : _c.articlePhotos) == null ? void 0 : _d.slice(0, 2), (img) => {
        _push(`<div data-v-0c1a2903><div class="article_image" style="${ssrRenderStyle({ backgroundImage: `url('${unref($getImageUrl)(img.url)}')` })}" data-v-0c1a2903></div></div>`);
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
const _link_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c1a2903"]]);
export {
  _link_ as default
};
//# sourceMappingURL=_link_-DQaYQO_J.js.map
