import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "TagsList",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Tag list"
    },
    tagList: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap tagList" }, _attrs))} data-v-6bae5ecd><div class="tagList__stroke" data-v-6bae5ecd></div><h3 class="tagList__title" data-v-6bae5ecd>${ssrInterpolate(__props.title)}</h3><!--[-->`);
      ssrRenderList(__props.tagList, (tag) => {
        _push(`<li class="${ssrRenderClass([`tagList__tag--${tag.color}`, "tagList__tag"])}" data-v-6bae5ecd>${ssrInterpolate(tag.name)}</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/TagsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TagsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6bae5ecd"]]);

export { TagsList as default };
//# sourceMappingURL=TagsList.393ed386.mjs.map
