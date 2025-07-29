import { _ as _export_sfc, a as useNuxtApp, c as useRouter, b as __nuxt_component_0 } from "../server.mjs";
import { computed, withAsyncContext, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, h, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import PopupArticle from "./popupArticle-PTeyDulG.js";
import PopupApplication from "./popupApplication-DEi7na23.js";
import { u as useArticlesStore } from "./articles-b5rl9zuU.js";
import { useRoute } from "vue-router";
import { u as useHead } from "./v3-DwIDDKq-.js";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
import "imask";
import "./popupThankYou-DzMOwELb.js";
import "./tourOrder-BxPrspMm.js";
import "axios";
import "D:/moove-travel/mooveTravel/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "[link]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $getImageUrl } = useNuxtApp();
    const router = useRouter();
    function renderBlock(block) {
      if (block.type === "heading") {
        return h(
          `h${block.level}`,
          { class: "art_heading" },
          block.children?.map((child) => child.text).join("")
        );
      }
      if (block.type === "paragraph") {
        return h(
          "p",
          { class: "art_paragraph" },
          block.children?.map((child) => child.text).join("")
        );
      }
      if (block.type === "image") {
        return h(
          "div",
          { class: "art_image-block" },
          [
            h("img", {
              src: $getImageUrl(block.image.url),
              alt: block.image.alternativeText || article.value?.title || "Изображение к статье",
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
    useHead(() => ({
      title: article.value?.title ? `${article.value.title} | Moov Travel` : "Блог | Moov Travel",
      meta: [
        { name: "description", content: article.value?.description || "Читайте интересные статьи о путешествиях в блоге Moov Travel." },
        { property: "og:title", content: article.value?.title ? `${article.value.title} | Moov Travel` : "Блог | Moov Travel" },
        { property: "og:description", content: article.value?.description || "Читайте интересные статьи о путешествиях в блоге Moov Travel." },
        { property: "og:image", content: $getImageUrl(article.value?.articlePhotos?.[0]?.url) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://moov-travel.ru/article/${link}` }
      ],
      link: [
        { rel: "canonical", href: `https://moov-travel.ru/article/${link}` }
      ]
    }));
    [__temp, __restore] = withAsyncContext(() => articlesStore.fetchArticleByLink(link)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-393689b6><div class="article_header" data-v-393689b6>`);
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
      _push(`<h1 class="article_tittle" data-v-393689b6>${ssrInterpolate(article.value?.title)}</h1></div><div class="article_body" data-v-393689b6><div class="art-user" data-v-393689b6><div data-v-393689b6><div class="art_text" data-v-393689b6><!--[-->`);
      ssrRenderList(article.value?.content, (block, idx) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(renderBlock(block)), null, null), _parent);
      });
      _push(`<!--]--></div></div><div class="user" data-v-393689b6><div data-v-393689b6></div><div data-v-393689b6></div></div></div><div class="none-art" data-v-393689b6><div class="article_images" data-v-393689b6><!--[-->`);
      ssrRenderList(article.value?.articlePhotos?.slice(0, 2), (img) => {
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
export {
  _link_ as default
};
//# sourceMappingURL=_link_-DT6fX6Fq.js.map
