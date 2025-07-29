import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "teamTab"
}, {
  __name: "teamTab",
  __ssrInlineRender: true,
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    element: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-tab-root" }, _attrs))} data-v-98f0ee97><div class="team-body" data-v-98f0ee97><img${ssrRenderAttr("src", __props.imgUrl)}${ssrRenderAttr("alt", `\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 ${__props.element.fio}`)} class="team-round" data-v-98f0ee97><div class="team-name" data-v-98f0ee97>${ssrInterpolate(__props.element.fio)}</div><div class="name-first-text" data-v-98f0ee97>${ssrInterpolate(__props.element.position)}</div><div class="name-text" data-v-98f0ee97>${ssrInterpolate(__props.element.description)}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teamTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const teamTab = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98f0ee97"]]);

export { teamTab as default };
//# sourceMappingURL=teamTab-BQb-VdHI.mjs.map
