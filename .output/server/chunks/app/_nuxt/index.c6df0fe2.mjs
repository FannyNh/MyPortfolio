import { g as useAsyncData, q as queryContent, o as _sfc_main$2 } from '../server.mjs';
import { withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'scule';
import 'property-information';
import 'html-tags';
import 'ohash';
import 'cookie-es';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'fs';
import 'pathe';
import 'url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'slugify';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => queryContent("/projects").only(["head", "images", "id", "category", "heroimage", "_path"]).find(), "$olQ4jpDRvq")), __temp = await __temp, __restore(), __temp);
    console.log(projects);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCard = _sfc_main$2;
      if (!unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))}>`);
        if (unref(error)) {
          _push(`<div>${ssrInterpolate(unref(error))} reload the page</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap justify-center item-center home"><!--[-->`);
        ssrRenderList(unref(projects), (project) => {
          _push(ssrRenderComponent(_component_AppCard, {
            key: project.id,
            project
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.c6df0fe2.mjs.map
