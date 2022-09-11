import { d as useNuxtApp, e as useState, f as useContentDisabled, g as useAsyncData, w as withContentBase, a as addPrerenderPath, j as jsonStringify, u as useCookie, c as useHead, b as _export_sfc, h as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, ref, onErrorCaptured, createElementBlock, h, computed, defineAsyncComponent, toRefs, useSlots, useSSRContext, mergeProps, Fragment } from 'vue';
import { hash } from 'ohash';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const fetchContentNavigation = (queryBuilder) => {
  let params = queryBuilder;
  if (typeof (params == null ? void 0 : params.params) === "function") {
    params = params.params();
  }
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}.json` : "/navigation");
  {
    addPrerenderPath(apiPath);
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
};
const _sfc_main$1 = {
  __name: "welcome",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Welcome to Nuxt 3!"
    },
    readDocs: {
      type: String,
      default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework."
    },
    followTwitter: {
      type: String,
      default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips."
    },
    starGitHub: {
      type: String,
      default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.title}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}p,h4,h5{margin:0}h4,h5{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base" }, _attrs))} data-v-516c8f7d><div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20" data-v-516c8f7d><div class="flex justify-between items-end col-span-3" data-v-516c8f7d><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener" class="nuxt-logo" data-v-516c8f7d><svg viewBox="0 0 221 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-40 text-black dark:text-white" data-v-516c8f7d><g clip-path="url(#a)" data-v-516c8f7d><path fill="currentColor" d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z" data-v-516c8f7d></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z" fill="#80EEC0" data-v-516c8f7d></path><path d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z" fill="#00DC82" data-v-516c8f7d></path></g><defs data-v-516c8f7d><clipPath id="a" data-v-516c8f7d><path fill="#fff" d="M0 0h221v65H0z" data-v-516c8f7d></path></clipPath></defs></svg></a><a${ssrRenderAttr("href", `https://github.com/nuxt/framework/releases/tag/${__props.version}`)} target="_blank" rel="noopener" class="flex justify-end pb-1 sm:pb-2" data-v-516c8f7d>${ssrInterpolate(__props.version)}</a><div class="spotlight-wrapper" data-v-516c8f7d><div class="fixed z-10 left-0 right-0 spotlight" data-v-516c8f7d></div></div></div><div class="col-span-3 rounded p-4 flex flex-col gradient-border" data-v-516c8f7d><div class="flex justify-between items-center mb-4" data-v-516c8f7d><h4 class="font-medium text-2xl" data-v-516c8f7d>Get Started</h4><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-516c8f7d><path d="M29.4284 31.095C26.9278 33.5955 23.5364 35.0003 20.0001 35.0003C16.4637 35.0003 13.0723 33.5955 10.5717 31.095C8.07118 28.5944 6.66638 25.203 6.66638 21.6667C6.66638 18.1304 8.07118 14.7389 10.5717 12.2383C10.5717 12.2383 11.6667 15 15.0001 16.6667C15.0001 13.3333 15.8334 8.33333 19.9767 5C23.3334 8.33333 26.8167 9.62833 29.4267 12.2383C30.667 13.475 31.6506 14.9446 32.321 16.5626C32.9915 18.1806 33.3355 19.9152 33.3334 21.6667C33.3357 23.418 32.9919 25.1525 32.3218 26.7705C31.6516 28.3886 30.6683 29.8582 29.4284 31.095V31.095Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-516c8f7d></path><path d="M16.465 26.8683C17.0456 27.4491 17.7604 27.878 18.5462 28.1169C19.3319 28.3559 20.1644 28.3976 20.9701 28.2385C21.7758 28.0793 22.5299 27.7241 23.1657 27.2043C23.8015 26.6845 24.2995 26.016 24.6157 25.2581C24.9318 24.5001 25.0564 23.6759 24.9784 22.8584C24.9004 22.0408 24.6222 21.2551 24.1684 20.5705C23.7146 19.886 23.0992 19.3238 22.3766 18.9336C21.6539 18.5434 20.8463 18.3373 20.025 18.3333L18.3333 23.3333H15C15 24.6133 15.4883 25.8933 16.465 26.8683Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-516c8f7d></path></svg></div><p class="mb-2" data-v-516c8f7d>Remove this welcome page by removing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-516c8f7d>&lt;NuxtWelcome /&gt;</a> tag or creating an <a href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-516c8f7d>app.vue</a> file.</p></div><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener" class="gradient-border cursor-pointer col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-516c8f7d><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-516c8f7d><path d="M20 10.4217C21.9467 9.12833 24.59 8.33333 27.5 8.33333C30.4117 8.33333 33.0533 9.12833 35 10.4217V32.0883C33.0533 30.795 30.4117 30 27.5 30C24.59 30 21.9467 30.795 20 32.0883M20 10.4217V32.0883V10.4217ZM20 10.4217C18.0533 9.12833 15.41 8.33333 12.5 8.33333C9.59 8.33333 6.94667 9.12833 5 10.4217V32.0883C6.94667 30.795 9.59 30 12.5 30C15.41 30 18.0533 30.795 20 32.0883V10.4217Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-516c8f7d></path><rect x="23.3334" y="13.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor" data-v-516c8f7d></rect><rect x="8.33337" y="13.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor" data-v-516c8f7d></rect><rect x="8.33337" y="18.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor" data-v-516c8f7d></rect><rect x="8.33337" y="23.3333" width="8.33333" height="1.66667" rx="0.833334" fill="currentColor" data-v-516c8f7d></rect><rect x="23.3334" y="18.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor" data-v-516c8f7d></rect><rect x="23.3334" y="23.3333" width="8.33334" height="1.66667" rx="0.833334" fill="currentColor" data-v-516c8f7d></rect></svg><h5 class="font-semibold text-xl mt-4" data-v-516c8f7d>Documentation</h5><p class="mt-2" data-v-516c8f7d>${ssrInterpolate(__props.readDocs)}</p></a><a href="https://github.com/nuxt/framework" target="_blank" rel="noopener" class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-516c8f7d><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-516c8f7d><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.33333C10.795 3.33333 3.33337 10.8067 3.33337 20.0283C3.33337 27.4033 8.10837 33.6617 14.7317 35.8683C15.565 36.0217 15.8684 35.5067 15.8684 35.0633C15.8684 34.6683 15.855 33.6167 15.8467 32.225C11.21 33.2333 10.2317 29.9867 10.2317 29.9867C9.47504 28.0567 8.38171 27.5433 8.38171 27.5433C6.86837 26.51 8.49671 26.53 8.49671 26.53C10.1684 26.6467 11.0484 28.25 11.0484 28.25C12.535 30.8 14.95 30.0633 15.8984 29.6367C16.0517 28.5583 16.4817 27.8233 16.9584 27.4067C13.2584 26.985 9.36671 25.5517 9.36671 19.155C9.36671 17.3333 10.0167 15.8417 11.0817 14.675C10.91 14.2533 10.3384 12.555 11.245 10.2583C11.245 10.2583 12.645 9.80833 15.8284 11.9683C17.188 11.5975 18.5908 11.4087 20 11.4067C21.4167 11.4133 22.8417 11.5983 24.1734 11.9683C27.355 9.80833 28.7517 10.2567 28.7517 10.2567C29.6617 12.555 29.0884 14.2533 28.9184 14.675C29.985 15.8417 30.6317 17.3333 30.6317 19.155C30.6317 25.5683 26.7334 26.98 23.0217 27.3933C23.62 27.9083 24.1517 28.9267 24.1517 30.485C24.1517 32.715 24.1317 34.5167 24.1317 35.0633C24.1317 35.51 24.4317 36.03 25.2784 35.8667C28.5972 34.7535 31.4823 32.6255 33.5258 29.7834C35.5694 26.9413 36.6681 23.5289 36.6667 20.0283C36.6667 10.8067 29.2034 3.33333 20 3.33333Z" fill="currentColor" data-v-516c8f7d></path></svg><h5 class="font-semibold text-xl mt-4" data-v-516c8f7d>GitHub</h5><p class="mt-2" data-v-516c8f7d>${ssrInterpolate(__props.starGitHub)}</p></a><a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener" class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-516c8f7d><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-516c8f7d><path d="M13.8167 33.7557C26.395 33.7557 33.275 23.334 33.275 14.2973C33.275 14.0007 33.275 13.7057 33.255 13.414C34.5937 12.4449 35.7489 11.245 36.6667 9.87066C35.4185 10.424 34.0943 10.7869 32.7384 10.9473C34.1661 10.0924 35.2346 8.74791 35.745 7.164C34.4029 7.96048 32.9345 8.52188 31.4034 8.824C30.3724 7.72694 29.0084 7.00039 27.5228 6.75684C26.0371 6.51329 24.5126 6.76633 23.1852 7.47678C21.8579 8.18723 20.8018 9.31545 20.1805 10.6868C19.5592 12.0581 19.4073 13.596 19.7484 15.0623C17.0294 14.9261 14.3694 14.2195 11.9411 12.9886C9.51285 11.7577 7.37059 10.0299 5.65337 7.91733C4.7789 9.42267 4.51102 11.2047 4.90427 12.9006C5.29751 14.5965 6.32232 16.0788 7.77004 17.0457C6.68214 17.0142 5.61776 16.7215 4.66671 16.1923V16.279C4.66736 17.8578 5.21403 19.3878 6.21404 20.6096C7.21404 21.8313 8.60582 22.6696 10.1534 22.9823C9.14639 23.2569 8.08986 23.2968 7.06504 23.099C7.50198 24.4581 8.35284 25.6467 9.49859 26.4984C10.6443 27.35 12.0277 27.8223 13.455 27.849C12.0369 28.9633 10.413 29.7871 8.67625 30.2732C6.93948 30.7594 5.12391 30.8984 3.33337 30.6823C6.46105 32.6896 10.1004 33.7542 13.8167 33.749" fill="currentColor" data-v-516c8f7d></path></svg><h5 class="font-semibold text-xl mt-4" data-v-516c8f7d>Twitter</h5><p class="mt-2" data-v-516c8f7d>${ssrInterpolate(__props.followTwitter)}</p></a></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const welcome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-516c8f7d"]]);
const welcome$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: welcome
}, Symbol.toStringTag, { value: "Module" }));
const nuxtErrorBoundary = defineComponent({
  emits: {
    error(_error) {
      return true;
    }
  },
  setup(_props, { slots, emit }) {
    const error = ref(null);
    useNuxtApp();
    onErrorCaptured((err) => {
    });
    return () => {
      var _a, _b;
      return error.value ? (_a = slots.error) == null ? void 0 : _a.call(slots, { error }) : (_b = slots.default) == null ? void 0 : _b.call(slots);
    };
  }
});
const nuxtErrorBoundary$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nuxtErrorBoundary
}, Symbol.toStringTag, { value: "Module" }));
const clientOnly = defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
function createClientOnly(component) {
  const { setup, render: _render, template: _template } = component;
  if (_render) {
    component.render = (ctx, ...args) => {
      var _a, _b;
      return ctx.mounted$ ? h(Fragment, null, [h(_render(ctx, ...args), (_a = ctx.$attrs) != null ? _a : ctx._.attrs)]) : h("div", (_b = ctx.$attrs) != null ? _b : ctx._.attrs);
    };
  } else if (_template) {
    component.template = `
      <template v-if="mounted$">${_template}</template>
      <template v-else><div></div></template>
    `;
  }
  return defineComponent({
    ...component,
    setup(props, ctx) {
      const mounted$ = ref(false);
      return Promise.resolve((setup == null ? void 0 : setup(props, ctx)) || {}).then((setupState) => {
        return typeof setupState !== "function" ? { ...setupState, mounted$ } : (...args) => {
          return mounted$.value ? h(Fragment, null, [h(setupState(...args), ctx.attrs)]) : h("div", ctx.attrs);
        };
      });
    }
  });
}
const clientOnly$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: clientOnly,
  createClientOnly
}, Symbol.toStringTag, { value: "Module" }));
const serverPlaceholder = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const serverPlaceholder$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: serverPlaceholder
}, Symbol.toStringTag, { value: "Module" }));
const nuxtLoadingIndicator = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    }
  },
  setup(props) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    });
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", indicator.start);
    nuxtApp.hook("page:finish", indicator.finish);
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: `${indicator.progress.value}%`,
        height: `${props.height}px`,
        opacity: indicator.isLoading.value ? 1 : 0,
        background: props.color,
        backgroundSize: `${100 / indicator.progress.value * 100}% auto`,
        transition: "width 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    });
  }
});
function useLoadingIndicator(opts) {
  const progress = ref(0);
  const isLoading = ref(false);
  computed(() => 1e4 / opts.duration);
  let _timer = null;
  let _throttle = null;
  function start() {
    clear();
    progress.value = 0;
    isLoading.value = true;
    if (opts.throttle)
      ;
  }
  function finish() {
    progress.value = 100;
    _hide();
  }
  function clear() {
    clearInterval(_timer);
    clearTimeout(_throttle);
    _timer = null;
    _throttle = null;
  }
  function _hide() {
    clear();
  }
  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  };
}
const nuxtLoadingIndicator$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nuxtLoadingIndicator
}, Symbol.toStringTag, { value: "Module" }));
defineAsyncComponent(() => import('./LayoutBackgroundDefault.3da530aa.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('../server.mjs').then((n) => n.o).then((c) => c.default || c));
defineAsyncComponent(() => import('./ContentList.7488b1ba.mjs').then((c) => c.default || c));
defineAsyncComponent(() => Promise.resolve().then(() => ContentNavigation).then((c) => c.default || c));
defineAsyncComponent(() => import('../server.mjs').then((n) => n.m).then((c) => c.default || c));
defineAsyncComponent(() => import('../server.mjs').then((n) => n.l).then((c) => c.default || c));
defineAsyncComponent(() => import('../server.mjs').then((n) => n.C).then((c) => c.default || c));
defineAsyncComponent(() => import('./ContentSlot.eabf40b1.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./DocumentDrivenEmpty.b1426f16.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./DocumentDrivenNotFound.b4d3af5a.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./Markdown.99cf3f91.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseA.299fc334.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseBlockquote.5a6b9faf.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseCode.d1d4a55b.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseCodeInline.f20334da.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseEm.a7b0b067.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseH1.591fb6bf.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseH2.2eed3f9b.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseH3.0183651a.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseH4.d2383709.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseH5.095276db.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseH6.07cc2bfb.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseHr.e0d5921b.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseImg.4debdb73.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseLi.9c8c689a.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseOl.d89c2ab7.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseP.42fdcbbc.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseStrong.04f17d61.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseTable.20081a8e.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseTbody.d6180afa.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseTd.6d251472.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseTh.869a991c.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseThead.dae475b5.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseTr.b25f93df.mjs').then((c) => c.default || c));
defineAsyncComponent(() => import('./ProseUl.a52b508e.mjs').then((c) => c.default || c));
defineAsyncComponent(() => Promise.resolve().then(() => welcome$1).then((c) => c.default || c));
defineAsyncComponent(() => import('../server.mjs').then((n) => n.p).then((c) => c.default || c));
defineAsyncComponent(() => Promise.resolve().then(() => nuxtErrorBoundary$1).then((c) => c.default || c));
defineAsyncComponent(() => Promise.resolve().then(() => clientOnly$1).then((c) => c.default || c));
defineAsyncComponent(() => Promise.resolve().then(() => serverPlaceholder$1).then((c) => c.default || c));
defineAsyncComponent(() => import('../server.mjs').then((n) => n.n).then((c) => c.default || c));
defineAsyncComponent(() => Promise.resolve().then(() => nuxtLoadingIndicator$1).then((c) => c.default || c));
const _sfc_main = defineComponent({
  name: "ContentNavigation",
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation", "$X9s2D0PBpW").value) {
      const { navigation: navigation2 } = useContentDisabled();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value),
      "$qwqtCbrR7R"
    );
    return { navigation };
  },
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0$1, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentNavigation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { _sfc_main as default };
//# sourceMappingURL=ContentNavigation.8530af84.mjs.map
