import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "D:/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, d as useRoute } from "../server.mjs";
import "D:/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "marked";
import "ofetch";
import "D:/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "D:/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "tubArticle"
}, {
  __name: "tubArticle",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const route = useRoute();
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "contry-art": unref(route).path !== "/blog" }
      }, _attrs))} data-v-81c2249e><div class="article-tab" data-v-81c2249e><div class="article-information" data-v-81c2249e><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "20px" })}" data-v-81c2249e><div class="article-inf" data-v-81c2249e><img${ssrRenderAttr("src", _ctx.$getImageUrl(__props.article?.user?.photo?.url))}${ssrRenderAttr("alt", `Фотография автора ${__props.article?.user?.fio || "статьи"}`)} class="article-profile-img" data-v-81c2249e><div class="tab-header" data-v-81c2249e><div class="article-profile-name" data-v-81c2249e>${ssrInterpolate(__props.article?.user?.fio)}</div><div class="article-profile-date" data-v-81c2249e>${ssrInterpolate(formatDate(__props.article?.createdAt))}</div></div></div><div class="article-text" data-v-81c2249e>`);
      if (__props.article?.title) {
        _push(`<h3 class="article-title" data-v-81c2249e>${ssrInterpolate(__props.article.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-text" data-v-81c2249e>${ssrInterpolate(__props.article.description)}</div></div></div><div class="article-filters" data-v-81c2249e><!--[-->`);
      ssrRenderList(__props.article?.article_tags, (art) => {
        _push(`<div data-v-81c2249e>`);
        if (unref(route).path === "/blog") {
          _push(`<div class="article-filter" data-v-81c2249e>${ssrInterpolate(art?.name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><img${ssrRenderAttr("src", _ctx.$getImageUrl(__props.article?.articlePhotos[0]?.url))}${ssrRenderAttr("alt", __props.article?.title)} class="article-img" data-v-81c2249e></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tubArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TubArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81c2249e"]]);
export {
  TubArticle as default
};
//# sourceMappingURL=tubArticle-C6XeZAy9.js.map
