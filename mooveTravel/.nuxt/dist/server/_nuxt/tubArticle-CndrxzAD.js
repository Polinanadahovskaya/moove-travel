import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, d as useRoute } from "../server.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/klona/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "marked";
import "ofetch";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/unctx/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/radix3/dist/index.mjs";
import "/Users/polinanadahovskaya/Desktop/moove-travel/mooveTravel/node_modules/ufo/dist/index.mjs";
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "contry-art": unref(route).path !== "/blog" }
      }, _attrs))} data-v-06a1c82d><div class="article-tab" data-v-06a1c82d><div class="article-information" data-v-06a1c82d><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "20px" })}" data-v-06a1c82d><div class="article-inf" data-v-06a1c82d><img${ssrRenderAttr("src", _ctx.$getImageUrl((_c = (_b = (_a = __props.article) == null ? void 0 : _a.user) == null ? void 0 : _b.photo) == null ? void 0 : _c.url))}${ssrRenderAttr("alt", `Фотография автора ${((_e = (_d = __props.article) == null ? void 0 : _d.user) == null ? void 0 : _e.fio) || "статьи"}`)} class="article-profile-img" data-v-06a1c82d><div class="tab-header" data-v-06a1c82d><div class="article-profile-name" data-v-06a1c82d>${ssrInterpolate((_g = (_f = __props.article) == null ? void 0 : _f.user) == null ? void 0 : _g.fio)}</div><div class="article-profile-date" data-v-06a1c82d>${ssrInterpolate(formatDate((_h = __props.article) == null ? void 0 : _h.createdAt))}</div></div></div><div class="article-text" data-v-06a1c82d>`);
      if ((_i = __props.article) == null ? void 0 : _i.title) {
        _push(`<h3 class="article-title" data-v-06a1c82d>${ssrInterpolate(__props.article.title)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="article-text" data-v-06a1c82d>${ssrInterpolate(__props.article.description)}</div></div></div><div class="article-filters" data-v-06a1c82d><!--[-->`);
      ssrRenderList((_j = __props.article) == null ? void 0 : _j.article_tags, (art) => {
        _push(`<div data-v-06a1c82d>`);
        if (unref(route).path === "/blog") {
          _push(`<div class="article-filter" data-v-06a1c82d>${ssrInterpolate(art == null ? void 0 : art.name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><img${ssrRenderAttr("src", _ctx.$getImageUrl((_l = (_k = __props.article) == null ? void 0 : _k.articlePhotos[0]) == null ? void 0 : _l.url))}${ssrRenderAttr("alt", (_m = __props.article) == null ? void 0 : _m.title)} class="article-img" data-v-06a1c82d></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tubArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TubArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06a1c82d"]]);
export {
  TubArticle as default
};
//# sourceMappingURL=tubArticle-CndrxzAD.js.map
