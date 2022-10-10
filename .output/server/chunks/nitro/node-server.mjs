globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, useQuery, useCookie, getQuery, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import { promises } from 'fs';
import { dirname, resolve, extname } from 'pathe';
import { fileURLToPath } from 'url';
import defu from 'defu';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import { position } from 'unist-util-position';
import htmlTags from 'html-tags';
import slugify from 'slugify';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":false,"wsUrl":"","documentDriven":false}},"content":{"cacheVersion":2,"cacheIntegrity":"cN8Gkpfl2c","transformers":[],"base":"_content","watch":{"ws":{"port":4000,"showURL":false}},"sources":{},"ignores":["\\.","-"],"locales":[],"highlight":false,"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{"delimeter":",","json":true},"navigation":{"fields":[]},"documentDriven":false}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject$1(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject$1(obj[key])) {
      if (isObject$1(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"2c2-iQDXW4YTuZfgmmDVmrKeeZh+oNg\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"306-GGjvUhfEj+wyg5kuvM2kqMsBzzc\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:about.md"]: {
    import: () => import('../raw/about.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"3ac-8BZLWWlyy1Lkszw3HkqAbv/Q68k\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:index.md"]: {
    import: () => import('../raw/index.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"c1f-p5L8LkPfBB98nvg+Q6uBS8iMM+Q\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:adventory-website.md"]: {
    import: () => import('../raw/adventory-website.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1662-cpNzPYNcZxQ9N01VyHLM47bdhGU\"","mtime":"2022-10-10T13:58:47.788Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:motiondesign-fromfuture.md"]: {
    import: () => import('../raw/motiondesign-fromfuture.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"d39-viM3HV02OqGYAnzqeTKkAMwBSbQ\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:parionsport-website.md"]: {
    import: () => import('../raw/parionsport-website.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1384-CUaRCTFvSbKeQ3CiTZv7gPo0+vA\"","mtime":"2022-10-10T13:58:47.788Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:project-1.md"]: {
    import: () => import('../raw/project-1.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"181a-/KS9WZmBnlWc/c56fy1td7rmx7k\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:retouching-lydielende.md"]: {
    import: () => import('../raw/retouching-lydielende.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"d15-gRj66UyK36635hETxl0nCn5uhuI\"","mtime":"2022-10-10T13:58:47.788Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:retouching-sixth-june.md"]: {
    import: () => import('../raw/retouching-sixth-june.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1cb7-7/24p2+SgOkBy2iTOkh0QSKUENs\"","mtime":"2022-10-10T13:58:47.788Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:segundopiso-website.md"]: {
    import: () => import('../raw/segundopiso-website.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1cb0-VZEpxYWsQKkhqA3micXQs4rUCFY\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:sixth-june-website.md"]: {
    import: () => import('../raw/sixth-june-website.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1e7d-n+NDWN3JJ2bwsqsPpUvEXO0n6mk\"","mtime":"2022-10-10T13:58:47.787Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:projects:stellantis-website.md"]: {
    import: () => import('../raw/stellantis-website.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"1522-kbrj4ovDj7sOeqAWBhFhT1WOAdg\"","mtime":"2022-10-10T13:58:47.787Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.req.url?.startsWith("/__nuxt_error");
  let html = !isErrorPage ? await $fetch(withQuery("/__nuxt_error", errorObject)).catch(() => null) : null;
  if (!html) {
    const { template } = await import('../error-500.mjs');
    html = template(errorObject);
  }
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-FE6IYPlMVZwS3tIaoHmKMP4/OeA\"",
    "mtime": "2022-10-10T13:58:43.972Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/_nuxt/AppCard.96a9710d.js": {
    "type": "application/javascript",
    "etag": "\"254-k4jQ/Puslyld7ffZaa51qkhUG8M\"",
    "mtime": "2022-10-10T13:58:43.664Z",
    "size": 596,
    "path": "../public/_nuxt/AppCard.96a9710d.js"
  },
  "/_nuxt/AppLinks.73d69354.js": {
    "type": "application/javascript",
    "etag": "\"220-CMHD1kucKEdkn+Ri7WwBwrwaF/k\"",
    "mtime": "2022-10-10T13:58:43.663Z",
    "size": 544,
    "path": "../public/_nuxt/AppLinks.73d69354.js"
  },
  "/_nuxt/AppLogo.b65de89d.js": {
    "type": "application/javascript",
    "etag": "\"255-GRWgedthjpxUZBiIXYxeEzstDLc\"",
    "mtime": "2022-10-10T13:58:43.663Z",
    "size": 597,
    "path": "../public/_nuxt/AppLogo.b65de89d.js"
  },
  "/_nuxt/AppNavbar.537dd5c0.js": {
    "type": "application/javascript",
    "etag": "\"2a8-URjQXzglFYW5GHcWtfC/ShUS3FE\"",
    "mtime": "2022-10-10T13:58:43.663Z",
    "size": 680,
    "path": "../public/_nuxt/AppNavbar.537dd5c0.js"
  },
  "/_nuxt/AppSideBar.4cf87843.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"230-xMrSW3F1/mYq8ydKxxhErAmb2gM\"",
    "mtime": "2022-10-10T13:58:43.663Z",
    "size": 560,
    "path": "../public/_nuxt/AppSideBar.4cf87843.css"
  },
  "/_nuxt/AppSideBar.edff074f.js": {
    "type": "application/javascript",
    "etag": "\"46a-jigqP0MjKXAyGV470EJmAhqWVCk\"",
    "mtime": "2022-10-10T13:58:43.662Z",
    "size": 1130,
    "path": "../public/_nuxt/AppSideBar.edff074f.js"
  },
  "/_nuxt/AppSideBar.vue_vue_type_style_index_0_scoped_536778f7_lang.326c64d9.js": {
    "type": "application/javascript",
    "etag": "\"ac-1zYZFM8t0L71YjRym2rNmep6uTY\"",
    "mtime": "2022-10-10T13:58:43.662Z",
    "size": 172,
    "path": "../public/_nuxt/AppSideBar.vue_vue_type_style_index_0_scoped_536778f7_lang.326c64d9.js"
  },
  "/_nuxt/AppSocials.889f060d.js": {
    "type": "application/javascript",
    "etag": "\"721-jxniprYkm1W7KpqNgPJIHsCyo34\"",
    "mtime": "2022-10-10T13:58:43.662Z",
    "size": 1825,
    "path": "../public/_nuxt/AppSocials.889f060d.js"
  },
  "/_nuxt/BaseTransition.f7be1a8a.js": {
    "type": "application/javascript",
    "etag": "\"15d-gc36fi+T+b5DyTj5HwU4FidIFXs\"",
    "mtime": "2022-10-10T13:58:43.661Z",
    "size": 349,
    "path": "../public/_nuxt/BaseTransition.f7be1a8a.js"
  },
  "/_nuxt/BaseTransitionGroup.6cdee39e.js": {
    "type": "application/javascript",
    "etag": "\"158-SK4vEHkFoOS9S6fbzt3gZoBqo4A\"",
    "mtime": "2022-10-10T13:58:43.661Z",
    "size": 344,
    "path": "../public/_nuxt/BaseTransitionGroup.6cdee39e.js"
  },
  "/_nuxt/BlockText.508e13e0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61e-w1+xiSPXnKAQ+Z7zUMZwcxSwEMc\"",
    "mtime": "2022-10-10T13:58:43.661Z",
    "size": 1566,
    "path": "../public/_nuxt/BlockText.508e13e0.css"
  },
  "/_nuxt/BlockText.f65e6901.js": {
    "type": "application/javascript",
    "etag": "\"287-HAOi6vwsIkuf7aY1RoHrovwABZU\"",
    "mtime": "2022-10-10T13:58:43.660Z",
    "size": 647,
    "path": "../public/_nuxt/BlockText.f65e6901.js"
  },
  "/_nuxt/Card.51ac7d72.js": {
    "type": "application/javascript",
    "etag": "\"f7-ey6y3JbY3VnhCoHlQlyatugYK7Y\"",
    "mtime": "2022-10-10T13:58:43.660Z",
    "size": 247,
    "path": "../public/_nuxt/Card.51ac7d72.js"
  },
  "/_nuxt/ContentList.9fb31ee9.js": {
    "type": "application/javascript",
    "etag": "\"30d-cPq8mrcXSXXvO1rHPDkf25bwB+4\"",
    "mtime": "2022-10-10T13:58:43.660Z",
    "size": 781,
    "path": "../public/_nuxt/ContentList.9fb31ee9.js"
  },
  "/_nuxt/ContentNavigation.6be5aae5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"188a-aHgvVevN3u7Vs54z1W543Yip63c\"",
    "mtime": "2022-10-10T13:58:43.659Z",
    "size": 6282,
    "path": "../public/_nuxt/ContentNavigation.6be5aae5.css"
  },
  "/_nuxt/ContentNavigation.87461d50.js": {
    "type": "application/javascript",
    "etag": "\"3c08-duU2qmVgApKgKB5SUUDBJlyZ6sE\"",
    "mtime": "2022-10-10T13:58:43.659Z",
    "size": 15368,
    "path": "../public/_nuxt/ContentNavigation.87461d50.js"
  },
  "/_nuxt/ContentSlot.d58f07f6.js": {
    "type": "application/javascript",
    "etag": "\"3c2-02xBfsVXfF1eRcK+vvZsbhVWuDc\"",
    "mtime": "2022-10-10T13:58:43.659Z",
    "size": 962,
    "path": "../public/_nuxt/ContentSlot.d58f07f6.js"
  },
  "/_nuxt/Description.4dc43731.js": {
    "type": "application/javascript",
    "etag": "\"106-gyfBPF9FuL5i/yXTR+r49POmFlE\"",
    "mtime": "2022-10-10T13:58:43.658Z",
    "size": 262,
    "path": "../public/_nuxt/Description.4dc43731.js"
  },
  "/_nuxt/DocumentDrivenEmpty.71c0d1c9.js": {
    "type": "application/javascript",
    "etag": "\"120-Sc7PyJEWSz6+9b+AfWheWGTv5yg\"",
    "mtime": "2022-10-10T13:58:43.658Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.71c0d1c9.js"
  },
  "/_nuxt/DocumentDrivenNotFound.4f983fd2.js": {
    "type": "application/javascript",
    "etag": "\"9f-b3E1SFfF0XJMjvCQ1RL1o+g0mpw\"",
    "mtime": "2022-10-10T13:58:43.658Z",
    "size": 159,
    "path": "../public/_nuxt/DocumentDrivenNotFound.4f983fd2.js"
  },
  "/_nuxt/LayoutBackgroundDefault.96015cf8.js": {
    "type": "application/javascript",
    "etag": "\"20e-Qer0WkUQE3kjUHIW6pic84N6tr8\"",
    "mtime": "2022-10-10T13:58:43.657Z",
    "size": 526,
    "path": "../public/_nuxt/LayoutBackgroundDefault.96015cf8.js"
  },
  "/_nuxt/LayoutBackgroundDefault.9921faaf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"801-1d3vRL5sMXQvRIIx0N47WLoAqb4\"",
    "mtime": "2022-10-10T13:58:43.657Z",
    "size": 2049,
    "path": "../public/_nuxt/LayoutBackgroundDefault.9921faaf.css"
  },
  "/_nuxt/LayoutBackgroundProjects.c553fa53.js": {
    "type": "application/javascript",
    "etag": "\"4cd-BAqIGO7YuZh5jNf0Vp7su0+LjJY\"",
    "mtime": "2022-10-10T13:58:43.657Z",
    "size": 1229,
    "path": "../public/_nuxt/LayoutBackgroundProjects.c553fa53.js"
  },
  "/_nuxt/Markdown.bf300c7c.js": {
    "type": "application/javascript",
    "etag": "\"149-99on2CUMia893+OweXPhtI9XZ/8\"",
    "mtime": "2022-10-10T13:58:43.656Z",
    "size": 329,
    "path": "../public/_nuxt/Markdown.bf300c7c.js"
  },
  "/_nuxt/ProseA.a04e3d21.js": {
    "type": "application/javascript",
    "etag": "\"13d-ssQTKnkoiYFfDuBxbMpXhO56p5M\"",
    "mtime": "2022-10-10T13:58:43.656Z",
    "size": 317,
    "path": "../public/_nuxt/ProseA.a04e3d21.js"
  },
  "/_nuxt/ProseBlockquote.a08a8965.js": {
    "type": "application/javascript",
    "etag": "\"c2-9VRSLskcVwsODIKnlPR2Gk67XqI\"",
    "mtime": "2022-10-10T13:58:43.656Z",
    "size": 194,
    "path": "../public/_nuxt/ProseBlockquote.a08a8965.js"
  },
  "/_nuxt/ProseCode.2ec6942f.js": {
    "type": "application/javascript",
    "etag": "\"13a-xxLaBMKIMB+DUqObA32K7lvevCk\"",
    "mtime": "2022-10-10T13:58:43.655Z",
    "size": 314,
    "path": "../public/_nuxt/ProseCode.2ec6942f.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2022-10-10T13:58:43.655Z",
    "size": 46,
    "path": "../public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCodeInline.0a9eb345.js": {
    "type": "application/javascript",
    "etag": "\"bc-WY/zs74uWMiTi0z90/U6J2/wxMk\"",
    "mtime": "2022-10-10T13:58:43.655Z",
    "size": 188,
    "path": "../public/_nuxt/ProseCodeInline.0a9eb345.js"
  },
  "/_nuxt/ProseEm.bfbe681c.js": {
    "type": "application/javascript",
    "etag": "\"b5-WPolgCT8jUd3KCyPWBqYyyOR3nI\"",
    "mtime": "2022-10-10T13:58:43.654Z",
    "size": 181,
    "path": "../public/_nuxt/ProseEm.bfbe681c.js"
  },
  "/_nuxt/ProseH1.178fff50.js": {
    "type": "application/javascript",
    "etag": "\"b5-2LpKfgX8bvCKpc/QGB2I+ZpixNw\"",
    "mtime": "2022-10-10T13:58:43.654Z",
    "size": 181,
    "path": "../public/_nuxt/ProseH1.178fff50.js"
  },
  "/_nuxt/ProseH2.7ee0be05.js": {
    "type": "application/javascript",
    "etag": "\"106-4kJOtQzKymmlbbgYxHl50BzSLQI\"",
    "mtime": "2022-10-10T13:58:43.654Z",
    "size": 262,
    "path": "../public/_nuxt/ProseH2.7ee0be05.js"
  },
  "/_nuxt/ProseH3.fe893d43.js": {
    "type": "application/javascript",
    "etag": "\"106-9sIo2Mjl42iWmXYUNhotvF8TW1A\"",
    "mtime": "2022-10-10T13:58:43.653Z",
    "size": 262,
    "path": "../public/_nuxt/ProseH3.fe893d43.js"
  },
  "/_nuxt/ProseH4.69bb0533.js": {
    "type": "application/javascript",
    "etag": "\"106-BV+LdqYws8WaRlVZt/SmBdwN1Xs\"",
    "mtime": "2022-10-10T13:58:43.653Z",
    "size": 262,
    "path": "../public/_nuxt/ProseH4.69bb0533.js"
  },
  "/_nuxt/ProseH5.140bfad0.js": {
    "type": "application/javascript",
    "etag": "\"b5-2bfClPRFNlUTqdCUCOrWG4/Z5EU\"",
    "mtime": "2022-10-10T13:58:43.653Z",
    "size": 181,
    "path": "../public/_nuxt/ProseH5.140bfad0.js"
  },
  "/_nuxt/ProseH6.a52cfa67.js": {
    "type": "application/javascript",
    "etag": "\"b5-4t6l9UMVm9oUoUgzkWTqFKZ9Ghw\"",
    "mtime": "2022-10-10T13:58:43.653Z",
    "size": 181,
    "path": "../public/_nuxt/ProseH6.a52cfa67.js"
  },
  "/_nuxt/ProseHr.c1918073.js": {
    "type": "application/javascript",
    "etag": "\"96-EtiwA7pBpa7DoO2bkeIjGvSVDDU\"",
    "mtime": "2022-10-10T13:58:43.652Z",
    "size": 150,
    "path": "../public/_nuxt/ProseHr.c1918073.js"
  },
  "/_nuxt/ProseImg.bd0678cc.js": {
    "type": "application/javascript",
    "etag": "\"18a-lk5YVk/CZgT7rjlpz3t5N6MRwCQ\"",
    "mtime": "2022-10-10T13:58:43.652Z",
    "size": 394,
    "path": "../public/_nuxt/ProseImg.bd0678cc.js"
  },
  "/_nuxt/ProseLi.650cd88f.js": {
    "type": "application/javascript",
    "etag": "\"b5-dZBdFa/FWU/aR/KGklnYjJjdK8g\"",
    "mtime": "2022-10-10T13:58:43.652Z",
    "size": 181,
    "path": "../public/_nuxt/ProseLi.650cd88f.js"
  },
  "/_nuxt/ProseOl.d76fe3fa.js": {
    "type": "application/javascript",
    "etag": "\"ba-NV6E1+N6HTjcL+iuD3VteiWhig4\"",
    "mtime": "2022-10-10T13:58:43.651Z",
    "size": 186,
    "path": "../public/_nuxt/ProseOl.d76fe3fa.js"
  },
  "/_nuxt/ProseP.b8cb3919.js": {
    "type": "application/javascript",
    "etag": "\"b4-Ipx8iNB9yLFaOasuNb9BlvFrB+4\"",
    "mtime": "2022-10-10T13:58:43.651Z",
    "size": 180,
    "path": "../public/_nuxt/ProseP.b8cb3919.js"
  },
  "/_nuxt/ProseStrong.ead0ff38.js": {
    "type": "application/javascript",
    "etag": "\"b9-XRb9yZhurrPWL2K3Vv4+cwvunOw\"",
    "mtime": "2022-10-10T13:58:43.651Z",
    "size": 185,
    "path": "../public/_nuxt/ProseStrong.ead0ff38.js"
  },
  "/_nuxt/ProseTable.17ab5ab4.js": {
    "type": "application/javascript",
    "etag": "\"b8-Osd/TUbCGOfgmHOEg/ybXmlx5g4\"",
    "mtime": "2022-10-10T13:58:43.650Z",
    "size": 184,
    "path": "../public/_nuxt/ProseTable.17ab5ab4.js"
  },
  "/_nuxt/ProseTbody.6c061296.js": {
    "type": "application/javascript",
    "etag": "\"bd-CKeSeXwCyEexr8v8w13gy/n8iKY\"",
    "mtime": "2022-10-10T13:58:43.650Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.6c061296.js"
  },
  "/_nuxt/ProseTd.d5e8684e.js": {
    "type": "application/javascript",
    "etag": "\"b5-LiH+3UTPaHLK38D3cOccrxWYNn0\"",
    "mtime": "2022-10-10T13:58:43.650Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTd.d5e8684e.js"
  },
  "/_nuxt/ProseTh.9c26f4f0.js": {
    "type": "application/javascript",
    "etag": "\"b5-Izb+ZirOKeX6ruNSxfrcuuxkihQ\"",
    "mtime": "2022-10-10T13:58:43.650Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTh.9c26f4f0.js"
  },
  "/_nuxt/ProseThead.9a88694f.js": {
    "type": "application/javascript",
    "etag": "\"b8-vC8jMJhDBZaob6oMEPximqTGYBg\"",
    "mtime": "2022-10-10T13:58:43.649Z",
    "size": 184,
    "path": "../public/_nuxt/ProseThead.9a88694f.js"
  },
  "/_nuxt/ProseTr.66c7ecdc.js": {
    "type": "application/javascript",
    "etag": "\"b5-tjrtF/ALvwQ8tMx25zMTqk2K2WM\"",
    "mtime": "2022-10-10T13:58:43.649Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTr.66c7ecdc.js"
  },
  "/_nuxt/ProseUl.0ca0072f.js": {
    "type": "application/javascript",
    "etag": "\"b5-krC/yiX85+e68QJLtOUDz1ettuE\"",
    "mtime": "2022-10-10T13:58:43.649Z",
    "size": 181,
    "path": "../public/_nuxt/ProseUl.0ca0072f.js"
  },
  "/_nuxt/Slider.75bc0490.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"14b5-No5XbezSTGG2jdXTtrqReNeE7dA\"",
    "mtime": "2022-10-10T13:58:43.648Z",
    "size": 5301,
    "path": "../public/_nuxt/Slider.75bc0490.css"
  },
  "/_nuxt/Slider.d69ef77e.js": {
    "type": "application/javascript",
    "etag": "\"2b5-wMVAd8Hjps+GCaaHW0aFP+a3S8g\"",
    "mtime": "2022-10-10T13:58:43.648Z",
    "size": 693,
    "path": "../public/_nuxt/Slider.d69ef77e.js"
  },
  "/_nuxt/SliderVideo.e45f4a74.js": {
    "type": "application/javascript",
    "etag": "\"3ed-LjFmTu+ydxFYEItE0RpCezdV1vQ\"",
    "mtime": "2022-10-10T13:58:43.648Z",
    "size": 1005,
    "path": "../public/_nuxt/SliderVideo.e45f4a74.js"
  },
  "/_nuxt/SliderVideo.e4a9cfe7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ea-z2/FUN6GR2dGeyf60p+XStQoVPQ\"",
    "mtime": "2022-10-10T13:58:43.648Z",
    "size": 1258,
    "path": "../public/_nuxt/SliderVideo.e4a9cfe7.css"
  },
  "/_nuxt/SliderVideo.vue_vue_type_style_index_0_lang.a8c0620a.js": {
    "type": "application/javascript",
    "etag": "\"80b1-qPZlkptUk1SNeNw4BgU9oaBP/Tc\"",
    "mtime": "2022-10-10T13:58:43.647Z",
    "size": 32945,
    "path": "../public/_nuxt/SliderVideo.vue_vue_type_style_index_0_lang.a8c0620a.js"
  },
  "/_nuxt/TagsList.60080567.js": {
    "type": "application/javascript",
    "etag": "\"2b2-pu/Umib7KLsVtLGeSmpQrtEehg0\"",
    "mtime": "2022-10-10T13:58:43.647Z",
    "size": 690,
    "path": "../public/_nuxt/TagsList.60080567.js"
  },
  "/_nuxt/TagsList.86630e0d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"913-3lsEUNYFV1H1uohvsF8DGmLLZTs\"",
    "mtime": "2022-10-10T13:58:43.646Z",
    "size": 2323,
    "path": "../public/_nuxt/TagsList.86630e0d.css"
  },
  "/_nuxt/_...slug_.646916c2.js": {
    "type": "application/javascript",
    "etag": "\"211-36y7jQheXbb+XJnTITf2OvedU1w\"",
    "mtime": "2022-10-10T13:58:43.646Z",
    "size": 529,
    "path": "../public/_nuxt/_...slug_.646916c2.js"
  },
  "/_nuxt/_...slug_.7b010e02.js": {
    "type": "application/javascript",
    "etag": "\"bc-MEbMWGdAt6EUMSZnQ8bR1qiXJwA\"",
    "mtime": "2022-10-10T13:58:43.646Z",
    "size": 188,
    "path": "../public/_nuxt/_...slug_.7b010e02.js"
  },
  "/_nuxt/_...slug_.cc97b734.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"135-8MW9nsVsiVK8e1TNx6ky+d6J/FQ\"",
    "mtime": "2022-10-10T13:58:43.645Z",
    "size": 309,
    "path": "../public/_nuxt/_...slug_.cc97b734.css"
  },
  "/_nuxt/default.648310ad.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b-Csf9viN7VbM9lDs3lx25NY9WHpc\"",
    "mtime": "2022-10-10T13:58:43.645Z",
    "size": 43,
    "path": "../public/_nuxt/default.648310ad.css"
  },
  "/_nuxt/default.83d30460.js": {
    "type": "application/javascript",
    "etag": "\"449-60Hzq3vQ8Sh6FWPGbM8jN/YyvuU\"",
    "mtime": "2022-10-10T13:58:43.645Z",
    "size": 1097,
    "path": "../public/_nuxt/default.83d30460.js"
  },
  "/_nuxt/entry.592159f1.js": {
    "type": "application/javascript",
    "etag": "\"2b766-isAh/Tfdln+jYEspW8njuHkWPDs\"",
    "mtime": "2022-10-10T13:58:43.644Z",
    "size": 178022,
    "path": "../public/_nuxt/entry.592159f1.js"
  },
  "/_nuxt/entry.e0e500a5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c0b-CRpiDo9XMJqeVL0EHuKVJ1MAt3c\"",
    "mtime": "2022-10-10T13:58:43.644Z",
    "size": 15371,
    "path": "../public/_nuxt/entry.e0e500a5.css"
  },
  "/_nuxt/error-404.7729cee9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e34-qomFKLEnDzFbIPwCfuxqIb18mQU\"",
    "mtime": "2022-10-10T13:58:43.643Z",
    "size": 3636,
    "path": "../public/_nuxt/error-404.7729cee9.css"
  },
  "/_nuxt/error-404.bc83837a.js": {
    "type": "application/javascript",
    "etag": "\"8a4-YC374Kpa4TvATmYh89rAIAVZy+c\"",
    "mtime": "2022-10-10T13:58:43.643Z",
    "size": 2212,
    "path": "../public/_nuxt/error-404.bc83837a.js"
  },
  "/_nuxt/error-500.08851880.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a4-PsPGHWWrltFH34P9Q5DnkUTUhRE\"",
    "mtime": "2022-10-10T13:58:43.643Z",
    "size": 1956,
    "path": "../public/_nuxt/error-500.08851880.css"
  },
  "/_nuxt/error-500.34da0340.js": {
    "type": "application/javascript",
    "etag": "\"752-+R+eyJCRNit6/RFEBgSwawZAxIc\"",
    "mtime": "2022-10-10T13:58:43.643Z",
    "size": 1874,
    "path": "../public/_nuxt/error-500.34da0340.js"
  },
  "/_nuxt/error-component.eb9db31b.js": {
    "type": "application/javascript",
    "etag": "\"439-ZC3baXNmjFRPV9c3dFUMWX82pP8\"",
    "mtime": "2022-10-10T13:58:43.642Z",
    "size": 1081,
    "path": "../public/_nuxt/error-component.eb9db31b.js"
  },
  "/_nuxt/index.34eb5fab.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"135-OSQcF0uYMVDSJTi+N+c5HGrqE64\"",
    "mtime": "2022-10-10T13:58:43.642Z",
    "size": 309,
    "path": "../public/_nuxt/index.34eb5fab.css"
  },
  "/_nuxt/index.699bed15.js": {
    "type": "application/javascript",
    "etag": "\"2ef-ocITtCI4DIrExqXzn2RRWqDChps\"",
    "mtime": "2022-10-10T13:58:43.642Z",
    "size": 751,
    "path": "../public/_nuxt/index.699bed15.js"
  },
  "/_nuxt/index.a07066cf.js": {
    "type": "application/javascript",
    "etag": "\"b2c-WRz4o3++7I5CzrFwY0/DhCrxO0w\"",
    "mtime": "2022-10-10T13:58:43.641Z",
    "size": 2860,
    "path": "../public/_nuxt/index.a07066cf.js"
  },
  "/_nuxt/logo-thethird.a55e784b.png": {
    "type": "image/png",
    "etag": "\"3e24-/Yu/bWWLqYqnAnFNNQRxZeYlaAc\"",
    "mtime": "2022-10-10T13:58:43.641Z",
    "size": 15908,
    "path": "../public/_nuxt/logo-thethird.a55e784b.png"
  },
  "/_nuxt/photocv.860bd8df.jpeg": {
    "type": "image/jpeg",
    "etag": "\"883a-U3NtumLgGM0MEontZvOBXBcGX9U\"",
    "mtime": "2022-10-10T13:58:43.641Z",
    "size": 34874,
    "path": "../public/_nuxt/photocv.860bd8df.jpeg"
  },
  "/_nuxt/project.cbab95d4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d4-VpXjmoyjt2tbPFmmfMf0UftKDMM\"",
    "mtime": "2022-10-10T13:58:43.640Z",
    "size": 212,
    "path": "../public/_nuxt/project.cbab95d4.css"
  },
  "/_nuxt/project.cdfbf692.js": {
    "type": "application/javascript",
    "etag": "\"310-lf1VjauOrR7IAbf+tbr21Glzk10\"",
    "mtime": "2022-10-10T13:58:43.640Z",
    "size": 784,
    "path": "../public/_nuxt/project.cdfbf692.js"
  },
  "/_nuxt/vue-splide.esm.5c2f70ad.js": {
    "type": "application/javascript",
    "etag": "\"82ed-9Zp5O/kTs6MhRB7sCItJIFocRgo\"",
    "mtime": "2022-10-10T13:58:43.640Z",
    "size": 33517,
    "path": "../public/_nuxt/vue-splide.esm.5c2f70ad.js"
  },
  "/_nuxt/web-socket.f665f2af.js": {
    "type": "application/javascript",
    "etag": "\"329-t3P0n3eaKj6mcHvwJLHF05lINC8\"",
    "mtime": "2022-10-10T13:58:43.639Z",
    "size": 809,
    "path": "../public/_nuxt/web-socket.f665f2af.js"
  },
  "/_nuxt/welcome.99642d47.js": {
    "type": "application/javascript",
    "etag": "\"3157-qzcbaQUROTqyodrb/69ufSlF9uY\"",
    "mtime": "2022-10-10T13:58:43.639Z",
    "size": 12631,
    "path": "../public/_nuxt/welcome.99642d47.js"
  },
  "/images/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-9xCdb8BUkI+GwsZsvlUq1Kv88YI\"",
    "mtime": "2022-10-10T13:58:43.972Z",
    "size": 6148,
    "path": "../public/images/.DS_Store"
  },
  "/api/_content/cache": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"30-cVJEk2rbqs7eFi9dFAiS0TvNd0k\"",
    "mtime": "2022-10-10T13:58:47.776Z",
    "size": 48,
    "path": "../public/api/_content/cache"
  },
  "/images/projects/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3004-+77/7OYJkgJA4AY6M5U5ehdawjE\"",
    "mtime": "2022-10-10T13:58:43.971Z",
    "size": 12292,
    "path": "../public/images/projects/.DS_Store"
  },
  "/images/projects/Adventori/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-gLYlc2NeWMHYWJFJJd2P8VCU+WA\"",
    "mtime": "2022-10-10T13:58:43.971Z",
    "size": 6148,
    "path": "../public/images/projects/Adventori/.DS_Store"
  },
  "/images/projects/Adventori/slide.png": {
    "type": "image/png",
    "etag": "\"91fee-xsqucA6d1lYRRzpOJK7qQoobs+Y\"",
    "mtime": "2022-10-10T13:58:43.970Z",
    "size": 597998,
    "path": "../public/images/projects/Adventori/slide.png"
  },
  "/images/projects/Adventori/slide_2.png": {
    "type": "image/png",
    "etag": "\"75526-O2/kLlu3X2Vgg2ZHo4pHgcQjuig\"",
    "mtime": "2022-10-10T13:58:43.969Z",
    "size": 480550,
    "path": "../public/images/projects/Adventori/slide_2.png"
  },
  "/images/projects/Adventori/slide_3.png": {
    "type": "image/png",
    "etag": "\"fef52-lbPECAYvM4zUscmatvCTRoj3d8U\"",
    "mtime": "2022-10-10T13:58:43.967Z",
    "size": 1044306,
    "path": "../public/images/projects/Adventori/slide_3.png"
  },
  "/images/projects/Adventori/slide_4.png": {
    "type": "image/png",
    "etag": "\"55b68-qa7rnlOhTdkYMFs4WtUIhMW6O6Y\"",
    "mtime": "2022-10-10T13:58:43.965Z",
    "size": 351080,
    "path": "../public/images/projects/Adventori/slide_4.png"
  },
  "/images/projects/BIOMOTION-page-inscription/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-/3IxoQPzwgqyp4UFNgn2OkAcBJo\"",
    "mtime": "2022-10-10T13:58:43.963Z",
    "size": 6148,
    "path": "../public/images/projects/BIOMOTION-page-inscription/.DS_Store"
  },
  "/images/projects/BIOMOTION-page-inscription/maquette-tablette copie.jpg": {
    "type": "image/jpeg",
    "etag": "\"97a87-9rGNJ5hK0LSxmeg1OIg6KnLQzxs\"",
    "mtime": "2022-10-10T13:58:43.962Z",
    "size": 621191,
    "path": "../public/images/projects/BIOMOTION-page-inscription/maquette-tablette copie.jpg"
  },
  "/images/projects/BIOMOTION-page-inscription/page-inscription copie.jpg": {
    "type": "image/jpeg",
    "etag": "\"bea43-O6MrFeMNi5577k0jSXcP/bH4QNQ\"",
    "mtime": "2022-10-10T13:58:43.961Z",
    "size": 780867,
    "path": "../public/images/projects/BIOMOTION-page-inscription/page-inscription copie.jpg"
  },
  "/images/projects/BIOMOTION-page-inscription/page-inscription-mobile-fr copie.jpg": {
    "type": "image/jpeg",
    "etag": "\"44f5d-ZTPg7UhPLBYDzYED8mqz2D/C+KM\"",
    "mtime": "2022-10-10T13:58:43.959Z",
    "size": 282461,
    "path": "../public/images/projects/BIOMOTION-page-inscription/page-inscription-mobile-fr copie.jpg"
  },
  "/images/projects/BIOMOTION-page-inscription/plaquette-v1.2-inversé.pdf": {
    "type": "application/pdf",
    "etag": "\"4e7867-8zwAirQyGmCPff6rvxaGEgjMjR8\"",
    "mtime": "2022-10-10T13:58:43.958Z",
    "size": 5142631,
    "path": "../public/images/projects/BIOMOTION-page-inscription/plaquette-v1.2-inversé.pdf"
  },
  "/images/projects/FREELANCED/freelanced-logo-1-2.png": {
    "type": "image/png",
    "etag": "\"50f4-cDPm/jn0Az17l7NYZs1gZIaqyug\"",
    "mtime": "2022-10-10T13:58:43.948Z",
    "size": 20724,
    "path": "../public/images/projects/FREELANCED/freelanced-logo-1-2.png"
  },
  "/images/projects/FREELANCED/gif-freelanced-ebook.gif": {
    "type": "image/gif",
    "etag": "\"1090ba-HEe19oBk6ms3DPX9yU3OnVpHhlk\"",
    "mtime": "2022-10-10T13:58:43.947Z",
    "size": 1085626,
    "path": "../public/images/projects/FREELANCED/gif-freelanced-ebook.gif"
  },
  "/images/projects/FREELANCED/gif-freelanced-maquette.gif": {
    "type": "image/gif",
    "etag": "\"3041e-2XDtdytC//2rNPm8zIsekKHJXGs\"",
    "mtime": "2022-10-10T13:58:43.945Z",
    "size": 197662,
    "path": "../public/images/projects/FREELANCED/gif-freelanced-maquette.gif"
  },
  "/images/projects/MILPAU-FRENCHDAYS/maquette-hp-milpau-24-09-19.jpg": {
    "type": "image/jpeg",
    "etag": "\"10b8f1-k9r7YrQ15Lxm+bhIiD6iznefBnk\"",
    "mtime": "2022-10-10T13:58:43.943Z",
    "size": 1095921,
    "path": "../public/images/projects/MILPAU-FRENCHDAYS/maquette-hp-milpau-24-09-19.jpg"
  },
  "/images/projects/MOTION-FROMFUTURE/VID_128700512_170703_553.mp4": {
    "type": "video/mp4",
    "etag": "\"34e4a7-u9zecnSZ9BcVUMc6hgFvnA1Cw1I\"",
    "mtime": "2022-10-10T13:58:43.941Z",
    "size": 3466407,
    "path": "../public/images/projects/MOTION-FROMFUTURE/VID_128700512_170703_553.mp4"
  },
  "/images/projects/MOTION-FROMFUTURE/video1.mp4": {
    "type": "video/mp4",
    "etag": "\"a699af-JBOqHZYDiPg38Su1/KpyrOPhXp8\"",
    "mtime": "2022-10-10T13:58:43.934Z",
    "size": 10918319,
    "path": "../public/images/projects/MOTION-FROMFUTURE/video1.mp4"
  },
  "/images/projects/MOTION-FROMFUTURE/video3.mp4": {
    "type": "video/mp4",
    "etag": "\"592377-TREUhkPax0UH5GgL73eUThwt0Qg\"",
    "mtime": "2022-10-10T13:58:43.915Z",
    "size": 5841783,
    "path": "../public/images/projects/MOTION-FROMFUTURE/video3.mp4"
  },
  "/images/projects/MOTION-FROMFUTURE/vidéo2.mp4": {
    "type": "video/mp4",
    "etag": "\"9e3c85-UaZdqW+c7gHw9rffygUjg0M7k7g\"",
    "mtime": "2022-10-10T13:58:43.904Z",
    "size": 10370181,
    "path": "../public/images/projects/MOTION-FROMFUTURE/vidéo2.mp4"
  },
  "/images/projects/PARIONSPORTmockup/120x60-2.png": {
    "type": "image/png",
    "etag": "\"209e-kdABO8qpr1R69E6p7yF70ty7cNk\"",
    "mtime": "2022-10-10T13:58:43.885Z",
    "size": 8350,
    "path": "../public/images/projects/PARIONSPORTmockup/120x60-2.png"
  },
  "/images/projects/PARIONSPORTmockup/120x60.png": {
    "type": "image/png",
    "etag": "\"2091-Hm8nH0km9XvAHWec2w9JRHNgieA\"",
    "mtime": "2022-10-10T13:58:43.884Z",
    "size": 8337,
    "path": "../public/images/projects/PARIONSPORTmockup/120x60.png"
  },
  "/images/projects/PARIONSPORTmockup/120x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"e817-vCBvMVyL7mRy7Xgl1AmCBCJMnn8\"",
    "mtime": "2022-10-10T13:58:43.884Z",
    "size": 59415,
    "path": "../public/images/projects/PARIONSPORTmockup/120x600.jpg"
  },
  "/images/projects/PARIONSPORTmockup/160x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"12a4b-7dguSoQdkw3UIh8h1xRUWv4yPxc\"",
    "mtime": "2022-10-10T13:58:43.883Z",
    "size": 76363,
    "path": "../public/images/projects/PARIONSPORTmockup/160x600.jpg"
  },
  "/images/projects/PARIONSPORTmockup/300x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"b2cf-Xl2GFdvStW4hYsDoh40c8xfshJI\"",
    "mtime": "2022-10-10T13:58:43.883Z",
    "size": 45775,
    "path": "../public/images/projects/PARIONSPORTmockup/300x250.jpg"
  },
  "/images/projects/PARIONSPORTmockup/300x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a8e3-Tgs3Z8wRKa9aATQdJmgqwG9gLsg\"",
    "mtime": "2022-10-10T13:58:43.882Z",
    "size": 108771,
    "path": "../public/images/projects/PARIONSPORTmockup/300x600.jpg"
  },
  "/images/projects/PARIONSPORTmockup/320x480.jpg": {
    "type": "image/jpeg",
    "etag": "\"17266-bijE1UFzijuHqAF93FLAcUhCwmQ\"",
    "mtime": "2022-10-10T13:58:43.881Z",
    "size": 94822,
    "path": "../public/images/projects/PARIONSPORTmockup/320x480.jpg"
  },
  "/images/projects/PARIONSPORTmockup/640x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"1346a-2iEJNReWbprmtYjs1qyl1hcSSHY\"",
    "mtime": "2022-10-10T13:58:43.881Z",
    "size": 78954,
    "path": "../public/images/projects/PARIONSPORTmockup/640x960.jpg"
  },
  "/images/projects/ULYS/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-lzBVIndru+8xYpnWO8OgAv3ZEqE\"",
    "mtime": "2022-10-10T13:58:43.880Z",
    "size": 6148,
    "path": "../public/images/projects/ULYS/.DS_Store"
  },
  "/images/projects/ULYS/Capture d’écran 2022-10-09 à 20.26.18.png": {
    "type": "image/png",
    "etag": "\"34e1e-rvEYNANLWFzWZyhTIqVQSqWCBfo\"",
    "mtime": "2022-10-10T13:58:43.879Z",
    "size": 216606,
    "path": "../public/images/projects/ULYS/Capture d’écran 2022-10-09 à 20.26.18.png"
  },
  "/images/projects/ULYS/Capture d’écran 2022-10-09 à 20.26.27.png": {
    "type": "image/png",
    "etag": "\"31acf-cAfkuu//qFgdqpdC6D3qhqAwD9w\"",
    "mtime": "2022-10-10T13:58:43.878Z",
    "size": 203471,
    "path": "../public/images/projects/ULYS/Capture d’écran 2022-10-09 à 20.26.27.png"
  },
  "/images/projects/ULYS/component.png": {
    "type": "image/png",
    "etag": "\"3cf92-hpFo0/QXCNLajC6jws/trbfyaO8\"",
    "mtime": "2022-10-10T13:58:43.877Z",
    "size": 249746,
    "path": "../public/images/projects/ULYS/component.png"
  },
  "/images/projects/ULYS/prototype-amazon-ulys.pdf": {
    "type": "application/pdf",
    "etag": "\"17e82b-T7VUnfe4bbn3f3ZIK7dCvRJXlPM\"",
    "mtime": "2022-10-10T13:58:43.830Z",
    "size": 1566763,
    "path": "../public/images/projects/ULYS/prototype-amazon-ulys.pdf"
  },
  "/images/projects/airfrance-display/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2004-Gtqoy9uxFLWTaoXmZPkZ4nYEC2s\"",
    "mtime": "2022-10-10T13:58:43.827Z",
    "size": 8196,
    "path": "../public/images/projects/airfrance-display/.DS_Store"
  },
  "/images/projects/airfrance-display/AirFrance_desktop_walpaper_ejerskab_POL.JPG": {
    "type": "image/jpeg",
    "etag": "\"3b9de-YBVQmmJrvOLqqQe+261aq3a+LY8\"",
    "mtime": "2022-10-10T13:58:43.770Z",
    "size": 244190,
    "path": "../public/images/projects/airfrance-display/AirFrance_desktop_walpaper_ejerskab_POL.JPG"
  },
  "/images/projects/airfrance-display/SKIN_DEALS_V3.jpg": {
    "type": "image/jpeg",
    "etag": "\"45b42-sDwAJjYf4z79tPPocilUfuGJ8Ng\"",
    "mtime": "2022-10-10T13:58:43.769Z",
    "size": 285506,
    "path": "../public/images/projects/airfrance-display/SKIN_DEALS_V3.jpg"
  },
  "/images/projects/airfrance-display/habillement.jpg": {
    "type": "image/jpeg",
    "etag": "\"250b2-tht45882MZ0XTDIkzaQbPwU+4Cw\"",
    "mtime": "2022-10-10T13:58:43.763Z",
    "size": 151730,
    "path": "../public/images/projects/airfrance-display/habillement.jpg"
  },
  "/images/projects/lydielende/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-mdzJMliornXlu4joOtvaFaiXuSA\"",
    "mtime": "2022-10-10T13:58:43.762Z",
    "size": 6148,
    "path": "../public/images/projects/lydielende/.DS_Store"
  },
  "/images/projects/lydielende/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"215f5-R7Nm8qJlZ7fC+Owj16OEDQRf3gM\"",
    "mtime": "2022-10-10T13:58:43.761Z",
    "size": 136693,
    "path": "../public/images/projects/lydielende/1.jpg"
  },
  "/images/projects/lydielende/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"11587-yTPFgAW6U2MacyOW8fyHliHZLqg\"",
    "mtime": "2022-10-10T13:58:43.761Z",
    "size": 71047,
    "path": "../public/images/projects/lydielende/2.jpg"
  },
  "/images/projects/lydielende/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2023a-fhsQw6KT9X8g7+XoWPgU3xbHVT0\"",
    "mtime": "2022-10-10T13:58:43.760Z",
    "size": 131642,
    "path": "../public/images/projects/lydielende/3.jpg"
  },
  "/images/projects/lydielende/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"18bb5-3ojQSBDiF6bmvGlT9ra5wS+7xFc\"",
    "mtime": "2022-10-10T13:58:43.759Z",
    "size": 101301,
    "path": "../public/images/projects/lydielende/4.jpg"
  },
  "/images/projects/lydielende/hero.jpg": {
    "type": "image/jpeg",
    "etag": "\"2605-xzy0AedMs+P8OFlP7gEGTtEbDHk\"",
    "mtime": "2022-10-10T13:58:43.759Z",
    "size": 9733,
    "path": "../public/images/projects/lydielende/hero.jpg"
  },
  "/images/projects/project-1/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-jcPl1lMHBH1hDOpyibXGaYBhRms\"",
    "mtime": "2022-10-10T13:58:43.758Z",
    "size": 6148,
    "path": "../public/images/projects/project-1/.DS_Store"
  },
  "/images/projects/project-1/Sixthjune_2017_1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"22c08-N55vMF7XxyunRrxFndTMPkZ5/W0\"",
    "mtime": "2022-10-10T13:58:43.758Z",
    "size": 142344,
    "path": "../public/images/projects/project-1/Sixthjune_2017_1.jpeg"
  },
  "/images/projects/project-1/Sixthjune_2017_2.jpg": {
    "type": "image/jpeg",
    "etag": "\"61f2e-IfAv6SLCsInpYDprjgi+AZe4sF0\"",
    "mtime": "2022-10-10T13:58:43.757Z",
    "size": 401198,
    "path": "../public/images/projects/project-1/Sixthjune_2017_2.jpg"
  },
  "/images/projects/project-1/Sixthjune_2017_3.jpg": {
    "type": "image/jpeg",
    "etag": "\"44673-JjEsU619q0G5bpg3bV7Pwhw0sYg\"",
    "mtime": "2022-10-10T13:58:43.756Z",
    "size": 280179,
    "path": "../public/images/projects/project-1/Sixthjune_2017_3.jpg"
  },
  "/images/projects/project-1/hero.jpeg": {
    "type": "image/jpeg",
    "etag": "\"d971-q4wafCl0nknmQ7jJgpnRDc6mYkc\"",
    "mtime": "2022-10-10T13:58:43.755Z",
    "size": 55665,
    "path": "../public/images/projects/project-1/hero.jpeg"
  },
  "/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"17943-Q1cdnHafEptgKXbbKklSLWf+5uE\"",
    "mtime": "2022-10-10T13:58:43.755Z",
    "size": 96579,
    "path": "../public/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-2.jpg"
  },
  "/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b73f-UdHYBpXWXKLLMPzF8b9DNDn/WhU\"",
    "mtime": "2022-10-10T13:58:43.754Z",
    "size": 112447,
    "path": "../public/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-3.jpg"
  },
  "/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2172e-LomP7QKC/4Y9FFl04z1SPCPOwIg\"",
    "mtime": "2022-10-10T13:58:43.753Z",
    "size": 137006,
    "path": "../public/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-4.jpg"
  },
  "/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-6.jpg": {
    "type": "image/jpeg",
    "etag": "\"15357-6UB9Q4bNsNpessoJpNfmo0YPwvw\"",
    "mtime": "2022-10-10T13:58:43.753Z",
    "size": 86871,
    "path": "../public/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris-6.jpg"
  },
  "/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris.jpg": {
    "type": "image/jpeg",
    "etag": "\"20509-OULiuNr4Obyk2QkUndchsemU3/0\"",
    "mtime": "2022-10-10T13:58:43.752Z",
    "size": 132361,
    "path": "../public/images/projects/project-1/sixth-june-fw17-shooting-cameron-paris.jpg"
  },
  "/images/projects/project-1/sixth-june-fw17-sixthjune-FW17-riscorunner.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c563-kzLXzU3OwLjTp1xbpBPZC4/YQqY\"",
    "mtime": "2022-10-10T13:58:43.752Z",
    "size": 116067,
    "path": "../public/images/projects/project-1/sixth-june-fw17-sixthjune-FW17-riscorunner.jpg"
  },
  "/images/projects/segundopiso/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2004-BHmAeFkb3gR3fVcgVzcRBdLsTfk\"",
    "mtime": "2022-10-10T13:58:43.751Z",
    "size": 8196,
    "path": "../public/images/projects/segundopiso/.DS_Store"
  },
  "/images/projects/segundopiso/600x750-ebook.png": {
    "type": "image/png",
    "etag": "\"72eae-5D1WlcJpWvDVUzxEygRPz6MUSeM\"",
    "mtime": "2022-10-10T13:58:43.750Z",
    "size": 470702,
    "path": "../public/images/projects/segundopiso/600x750-ebook.png"
  },
  "/images/projects/segundopiso/600x750-packshot.gif": {
    "type": "image/gif",
    "etag": "\"bc525-5SH7XYaLvtNzX2C7y+NU/CsRc7E\"",
    "mtime": "2022-10-10T13:58:43.749Z",
    "size": 771365,
    "path": "../public/images/projects/segundopiso/600x750-packshot.gif"
  },
  "/images/projects/segundopiso/LOGO_BLACK.png": {
    "type": "image/png",
    "etag": "\"4141-oVT90DBw96yPp5b4umJ0yxr7ASg\"",
    "mtime": "2022-10-10T13:58:43.747Z",
    "size": 16705,
    "path": "../public/images/projects/segundopiso/LOGO_BLACK.png"
  },
  "/images/projects/segundopiso/freelanced-logo-1-2.png": {
    "type": "image/png",
    "etag": "\"50f4-cDPm/jn0Az17l7NYZs1gZIaqyug\"",
    "mtime": "2022-10-10T13:58:43.747Z",
    "size": 20724,
    "path": "../public/images/projects/segundopiso/freelanced-logo-1-2.png"
  },
  "/images/projects/segundopiso/hero.png": {
    "type": "image/png",
    "etag": "\"7cf24-Ew7zMIV4JG0ZUZFQgXAO+EELUQA\"",
    "mtime": "2022-10-10T13:58:43.746Z",
    "size": 511780,
    "path": "../public/images/projects/segundopiso/hero.png"
  },
  "/images/projects/segundopiso/homepage.png": {
    "type": "image/png",
    "etag": "\"7f668-TmNXfZpb1nTsWfeTHSEavpYvDZA\"",
    "mtime": "2022-10-10T13:58:43.745Z",
    "size": 521832,
    "path": "../public/images/projects/segundopiso/homepage.png"
  },
  "/images/projects/segundopiso/page-commande-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"33c52-FlbOYXP+9gStBmAs4dKNhzJ7Juk\"",
    "mtime": "2022-10-10T13:58:43.743Z",
    "size": 212050,
    "path": "../public/images/projects/segundopiso/page-commande-2.jpg"
  },
  "/images/projects/segundopiso/page-commande-3-bis.jpg": {
    "type": "image/jpeg",
    "etag": "\"441a5-1WHDWrUKVxwhpYmiPSX8buoGW3w\"",
    "mtime": "2022-10-10T13:58:43.742Z",
    "size": 278949,
    "path": "../public/images/projects/segundopiso/page-commande-3-bis.jpg"
  },
  "/images/projects/segundopiso/page-commande-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"33113-5SaYT3ouMnmeyNrn5fJtN7BVO1g\"",
    "mtime": "2022-10-10T13:58:43.741Z",
    "size": 209171,
    "path": "../public/images/projects/segundopiso/page-commande-3.jpg"
  },
  "/images/projects/segundopiso/page-commande-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"93bd8-krxSY+AP91XwNc4jrLxZHpDKrUI\"",
    "mtime": "2022-10-10T13:58:43.741Z",
    "size": 605144,
    "path": "../public/images/projects/segundopiso/page-commande-4.jpg"
  },
  "/images/projects/segundopiso/page-commande.jpg": {
    "type": "image/jpeg",
    "etag": "\"4ded4-1A5f8P6r/B9lsktuaiPRlxqRzLU\"",
    "mtime": "2022-10-10T13:58:43.739Z",
    "size": 319188,
    "path": "../public/images/projects/segundopiso/page-commande.jpg"
  },
  "/images/projects/segundopiso/page-designer-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"e4448-sDjg3eEG5bPHWtMALfg2u3NEYsM\"",
    "mtime": "2022-10-10T13:58:43.738Z",
    "size": 934984,
    "path": "../public/images/projects/segundopiso/page-designer-1.jpg"
  },
  "/images/projects/segundopiso/page-produit.jpg": {
    "type": "image/jpeg",
    "etag": "\"76621-EDnrr5l+DhEpKYyCQPVy6QbRjYM\"",
    "mtime": "2022-10-10T13:58:43.736Z",
    "size": 484897,
    "path": "../public/images/projects/segundopiso/page-produit.jpg"
  },
  "/images/projects/segundopiso/page-produits.jpg": {
    "type": "image/jpeg",
    "etag": "\"ff170-p+gsH9MGA72KiULHt0ROnSNQ32w\"",
    "mtime": "2022-10-10T13:58:43.735Z",
    "size": 1044848,
    "path": "../public/images/projects/segundopiso/page-produits.jpg"
  },
  "/images/projects/segundopiso/page-quick-preview.png": {
    "type": "image/png",
    "etag": "\"5a2c5-Hf9Q8KCR/fwe1ywcfl7MEqn9KYM\"",
    "mtime": "2022-10-10T13:58:43.733Z",
    "size": 369349,
    "path": "../public/images/projects/segundopiso/page-quick-preview.png"
  },
  "/images/projects/segundopiso/pop-up-preview-buy-1.png": {
    "type": "image/png",
    "etag": "\"25d43-uJJKkleuSk8odJI+2alwCv+/zc0\"",
    "mtime": "2022-10-10T13:58:43.732Z",
    "size": 154947,
    "path": "../public/images/projects/segundopiso/pop-up-preview-buy-1.png"
  },
  "/images/projects/segundopiso/quick-buy-1.png": {
    "type": "image/png",
    "etag": "\"198c1-u2Mmsi2I27KDMDPPsJmN3lJHKmA\"",
    "mtime": "2022-10-10T13:58:43.731Z",
    "size": 104641,
    "path": "../public/images/projects/segundopiso/quick-buy-1.png"
  },
  "/images/projects/segundopiso/quick-buy-2.png": {
    "type": "image/png",
    "etag": "\"19a81-HIHA+36K21e+1puZpw9AhDm0rqE\"",
    "mtime": "2022-10-10T13:58:43.730Z",
    "size": 105089,
    "path": "../public/images/projects/segundopiso/quick-buy-2.png"
  },
  "/images/projects/segundopiso/quick-buy-3.png": {
    "type": "image/png",
    "etag": "\"19801-7lBCvlO97dnvdGCLz1+XBK0PHf0\"",
    "mtime": "2022-10-10T13:58:43.730Z",
    "size": 104449,
    "path": "../public/images/projects/segundopiso/quick-buy-3.png"
  },
  "/images/projects/segundopiso/segundopiso-slide-designer.gif": {
    "type": "image/gif",
    "etag": "\"220c80-12H3e19c3xTeuFiE4Vhaw2sfk/A\"",
    "mtime": "2022-10-10T13:58:43.729Z",
    "size": 2231424,
    "path": "../public/images/projects/segundopiso/segundopiso-slide-designer.gif"
  },
  "/images/projects/segundopiso/segundopiso-slide-paiement.gif": {
    "type": "image/gif",
    "etag": "\"27062d-mYEmtui6VGA8XBKRgPjY3nGAYEk\"",
    "mtime": "2022-10-10T13:58:43.725Z",
    "size": 2557485,
    "path": "../public/images/projects/segundopiso/segundopiso-slide-paiement.gif"
  },
  "/images/projects/segundopiso/segundopiso-slide-produit.gif": {
    "type": "image/gif",
    "etag": "\"164168-itHZR+fZC2Sh4JzlCNntBmsWpmE\"",
    "mtime": "2022-10-10T13:58:43.720Z",
    "size": 1458536,
    "path": "../public/images/projects/segundopiso/segundopiso-slide-produit.gif"
  },
  "/images/projects/sixthjune-site/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-vG/3LzMj0MqheVJcLGdOfNMj9GE\"",
    "mtime": "2022-10-10T13:58:43.717Z",
    "size": 6148,
    "path": "../public/images/projects/sixthjune-site/.DS_Store"
  },
  "/images/projects/sixthjune-site/BKF-FB2.jpg": {
    "type": "image/jpeg",
    "etag": "\"ab4f1-pDGdQKWndedaTOg1bFQ+iUE1ltc\"",
    "mtime": "2022-10-10T13:58:43.716Z",
    "size": 701681,
    "path": "../public/images/projects/sixthjune-site/BKF-FB2.jpg"
  },
  "/images/projects/sixthjune-site/PROJET-1-SJ-1x1.jpg": {
    "type": "image/jpeg",
    "etag": "\"5f071-PiBr1+nqFkHefjgxE+iMEIrvjqI\"",
    "mtime": "2022-10-10T13:58:43.714Z",
    "size": 389233,
    "path": "../public/images/projects/sixthjune-site/PROJET-1-SJ-1x1.jpg"
  },
  "/images/projects/sixthjune-site/carteremerciment1.jpg": {
    "type": "image/jpeg",
    "etag": "\"29f815-tv6uR/iQq/Q6GyVEmP9lnyLX2cc\"",
    "mtime": "2022-10-10T13:58:43.712Z",
    "size": 2750485,
    "path": "../public/images/projects/sixthjune-site/carteremerciment1.jpg"
  },
  "/images/projects/sixthjune-site/gif-giftcard.gif": {
    "type": "image/gif",
    "etag": "\"1ebb32-etFCyHuiBFZWzAe5NNgCpidvYRA\"",
    "mtime": "2022-10-10T13:58:43.706Z",
    "size": 2014002,
    "path": "../public/images/projects/sixthjune-site/gif-giftcard.gif"
  },
  "/images/projects/sixthjune-site/hero.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b4b3-wjBrcF8ZqWC3uSNJ75vEoYbHUlg\"",
    "mtime": "2022-10-10T13:58:43.702Z",
    "size": 177331,
    "path": "../public/images/projects/sixthjune-site/hero.jpg"
  },
  "/images/projects/sixthjune-site/hero.png": {
    "type": "image/png",
    "etag": "\"2ce4-/yha7lG5jJgxnfkrmYQCLydjxnU\"",
    "mtime": "2022-10-10T13:58:43.701Z",
    "size": 11492,
    "path": "../public/images/projects/sixthjune-site/hero.png"
  },
  "/images/projects/sixthjune-site/slide_6.png": {
    "type": "image/png",
    "etag": "\"51c76-52HmQXLJ0SsmXGiXL6Ps7iddgVQ\"",
    "mtime": "2022-10-10T13:58:43.701Z",
    "size": 334966,
    "path": "../public/images/projects/sixthjune-site/slide_6.png"
  },
  "/images/projects/sixthjune-site/slide_7.png": {
    "type": "image/png",
    "etag": "\"451d5-93p3d5eOqCkMJiwlUxaTV7GMhKE\"",
    "mtime": "2022-10-10T13:58:43.700Z",
    "size": 283093,
    "path": "../public/images/projects/sixthjune-site/slide_7.png"
  },
  "/images/projects/sixthjune-site/slide_8.png": {
    "type": "image/png",
    "etag": "\"45a30-vPX4UIp9OTvbdZIfJPazRIktA/c\"",
    "mtime": "2022-10-10T13:58:43.699Z",
    "size": 285232,
    "path": "../public/images/projects/sixthjune-site/slide_8.png"
  },
  "/images/projects/sixthjune-site/solde_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"55c78-GW5EAeXOfXG1/l1TIHv3jHtHloQ\"",
    "mtime": "2022-10-10T13:58:43.697Z",
    "size": 351352,
    "path": "../public/images/projects/sixthjune-site/solde_1.jpg"
  },
  "/images/projects/sixthjune-site/solde_2.jpg": {
    "type": "image/jpeg",
    "etag": "\"53962-Zz9Jy5h7MNEBCNwZzJUqQ+wB3Oo\"",
    "mtime": "2022-10-10T13:58:43.696Z",
    "size": 342370,
    "path": "../public/images/projects/sixthjune-site/solde_2.jpg"
  },
  "/images/projects/sixthjune-site/solde_3.jpg": {
    "type": "image/jpeg",
    "etag": "\"61e10-fTGhllCBKt2AL4jcr68mIb0hJLY\"",
    "mtime": "2022-10-10T13:58:43.695Z",
    "size": 400912,
    "path": "../public/images/projects/sixthjune-site/solde_3.jpg"
  },
  "/images/projects/sixthjune-site/solde_4.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b4b3-wjBrcF8ZqWC3uSNJ75vEoYbHUlg\"",
    "mtime": "2022-10-10T13:58:43.694Z",
    "size": 177331,
    "path": "../public/images/projects/sixthjune-site/solde_4.jpg"
  },
  "/images/projects/stellantis/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-6+AvY7e51crAkeL75vaLTBihcV8\"",
    "mtime": "2022-10-10T13:58:43.693Z",
    "size": 6148,
    "path": "../public/images/projects/stellantis/.DS_Store"
  },
  "/images/projects/stellantis/MicrosoftTeams-image-46.jpeg": {
    "type": "image/jpeg",
    "etag": "\"46a4e-/HM/SqaWbRgEXC9wT9MdjFRx4J0\"",
    "mtime": "2022-10-10T13:58:43.692Z",
    "size": 289358,
    "path": "../public/images/projects/stellantis/MicrosoftTeams-image-46.jpeg"
  },
  "/images/projects/stellantis/hero.jpeg": {
    "type": "image/jpeg",
    "etag": "\"185dc-1Lwcrc590H09b45mNHCSUPJWBsY\"",
    "mtime": "2022-10-10T13:58:43.691Z",
    "size": 99804,
    "path": "../public/images/projects/stellantis/hero.jpeg"
  },
  "/images/projects/stellantis/slide_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"157649-+8XTFWOmWPxO+vNipPIOAPuY3no\"",
    "mtime": "2022-10-10T13:58:43.690Z",
    "size": 1406537,
    "path": "../public/images/projects/stellantis/slide_1.jpg"
  },
  "/images/projects/stellantis/slide_2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a9e73-yz/fCxcpiV2M7SKXYlN3SXvTv4Y\"",
    "mtime": "2022-10-10T13:58:43.688Z",
    "size": 1744499,
    "path": "../public/images/projects/stellantis/slide_2.jpg"
  },
  "/images/projects/stellantis/slide_3.jpg": {
    "type": "image/jpeg",
    "etag": "\"42654c-WuFhIljU6EVXNBPBKUCuKc0wihg\"",
    "mtime": "2022-10-10T13:58:43.684Z",
    "size": 4351308,
    "path": "../public/images/projects/stellantis/slide_3.jpg"
  },
  "/images/projects/stellantis/slide_4.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bcd9b-nNkSrBfzXE2OFjp+IMOBSXPhQlE\"",
    "mtime": "2022-10-10T13:58:43.676Z",
    "size": 3919259,
    "path": "../public/images/projects/stellantis/slide_4.jpg"
  },
  "/images/projects/stellantis/slide_5.jpg": {
    "type": "image/jpeg",
    "etag": "\"113bf2-+2uwD51g3kcttQFMXe3+X9J4Ffo\"",
    "mtime": "2022-10-10T13:58:43.669Z",
    "size": 1129458,
    "path": "../public/images/projects/stellantis/slide_5.jpg"
  },
  "/images/projects/stellantis/slide_6.jpg": {
    "type": "image/jpeg",
    "etag": "\"121b87-2bGkUp9FZSRDAUngx3ktHaZqDU4\"",
    "mtime": "2022-10-10T13:58:43.667Z",
    "size": 1186695,
    "path": "../public/images/projects/stellantis/slide_6.jpg"
  },
  "/images/projects/ULYS/html/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2004-VxBH7FI2iKUn/GehHba9g8mVppo\"",
    "mtime": "2022-10-10T13:58:43.876Z",
    "size": 8196,
    "path": "../public/images/projects/ULYS/html/.DS_Store"
  },
  "/images/projects/ULYS/html/300x150-cout-end-free.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f1f-7K53Tw5DCdqDG4Z/LhFKzroenSo\"",
    "mtime": "2022-10-10T13:58:43.875Z",
    "size": 20255,
    "path": "../public/images/projects/ULYS/html/300x150-cout-end-free.jpg"
  },
  "/images/projects/ULYS/html/300x150-cout-end.jpg": {
    "type": "image/jpeg",
    "etag": "\"232e-UGr4JEh5RMI7XTwBMfvebY1/+gM\"",
    "mtime": "2022-10-10T13:58:43.875Z",
    "size": 9006,
    "path": "../public/images/projects/ULYS/html/300x150-cout-end.jpg"
  },
  "/images/projects/ULYS/html/345x150-cout-bis.jpg": {
    "type": "image/jpeg",
    "etag": "\"204a-sjPPtFzRv9i5jehZDYrxt3B6mAQ\"",
    "mtime": "2022-10-10T13:58:43.874Z",
    "size": 8266,
    "path": "../public/images/projects/ULYS/html/345x150-cout-bis.jpg"
  },
  "/images/projects/ULYS/html/345x150-mobile-v2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c5c-HQZSmpaU9KBFtu7jKQIIn31j41I\"",
    "mtime": "2022-10-10T13:58:43.874Z",
    "size": 7260,
    "path": "../public/images/projects/ULYS/html/345x150-mobile-v2.jpg"
  },
  "/images/projects/ULYS/html/345x150-pays-v2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2fc9-JTixzBa8qcfwdF9wTVfyCmU7xys\"",
    "mtime": "2022-10-10T13:58:43.873Z",
    "size": 12233,
    "path": "../public/images/projects/ULYS/html/345x150-pays-v2.jpg"
  },
  "/images/projects/ULYS/html/345x150-savetime-v2.jpg": {
    "type": "image/jpeg",
    "etag": "\"351d-hP0ZbkXgBAgiVSixMxLff4A4fpU\"",
    "mtime": "2022-10-10T13:58:43.872Z",
    "size": 13597,
    "path": "../public/images/projects/ULYS/html/345x150-savetime-v2.jpg"
  },
  "/images/projects/ULYS/html/Compobadge+pack copie.jpg": {
    "type": "image/jpeg",
    "etag": "\"832fe-3bXl4UYxbxYCucOt88jrD1KeTUo\"",
    "mtime": "2022-10-10T13:58:43.871Z",
    "size": 537342,
    "path": "../public/images/projects/ULYS/html/Compobadge+pack copie.jpg"
  },
  "/images/projects/ULYS/html/Compobadge+pack.jpg": {
    "type": "image/jpeg",
    "etag": "\"83152-aSCMSM8JHtVajiSoUQ9sy6KjKkU\"",
    "mtime": "2022-10-10T13:58:43.870Z",
    "size": 536914,
    "path": "../public/images/projects/ULYS/html/Compobadge+pack.jpg"
  },
  "/images/projects/ULYS/html/achat-badge.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e2b1-YXTZ84PB+Yo/lGzm6cFNk5Rtg70\"",
    "mtime": "2022-10-10T13:58:43.868Z",
    "size": 123569,
    "path": "../public/images/projects/ULYS/html/achat-badge.jpg"
  },
  "/images/projects/ULYS/html/activation-badge-400x500.jpg": {
    "type": "image/jpeg",
    "etag": "\"f0e6-HIAI9L7IlyjXlW0J1Eqz+r0yLYo\"",
    "mtime": "2022-10-10T13:58:43.867Z",
    "size": 61670,
    "path": "../public/images/projects/ULYS/html/activation-badge-400x500.jpg"
  },
  "/images/projects/ULYS/html/create-client-account-400x500.jpg": {
    "type": "image/jpeg",
    "etag": "\"cbdc-WDAoANXSC7QqLqERneyMC3tbves\"",
    "mtime": "2022-10-10T13:58:43.866Z",
    "size": 52188,
    "path": "../public/images/projects/ULYS/html/create-client-account-400x500.jpg"
  },
  "/images/projects/ULYS/html/description-product.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"46b2-l2YrMCUC+JQZkllq7yYh011q8qw\"",
    "mtime": "2022-10-10T13:58:43.865Z",
    "size": 18098,
    "path": "../public/images/projects/ULYS/html/description-product.html"
  },
  "/images/projects/ULYS/html/header-vf.jpg": {
    "type": "image/jpeg",
    "etag": "\"3485a-Ek4aoYSiMk6fazJLlJtkcfCpYvA\"",
    "mtime": "2022-10-10T13:58:43.864Z",
    "size": 215130,
    "path": "../public/images/projects/ULYS/html/header-vf.jpg"
  },
  "/images/projects/ULYS/html/mise-en-place-400x500.jpg": {
    "type": "image/jpeg",
    "etag": "\"c543-c8fuYkZR2CbPidtlnBgywHphvgk\"",
    "mtime": "2022-10-10T13:58:43.833Z",
    "size": 50499,
    "path": "../public/images/projects/ULYS/html/mise-en-place-400x500.jpg"
  },
  "/images/projects/ULYS/html/telechargement-app-400x500-bis.jpg": {
    "type": "image/jpeg",
    "etag": "\"9dc0-MOKzr85MMnwWCRoQRa1iwXSPQ5I\"",
    "mtime": "2022-10-10T13:58:43.832Z",
    "size": 40384,
    "path": "../public/images/projects/ULYS/html/telechargement-app-400x500-bis.jpg"
  },
  "/images/projects/ULYS/html/timeline.png": {
    "type": "image/png",
    "etag": "\"44d0-AA/UHjunjuipredQiN13o5bGWFo\"",
    "mtime": "2022-10-10T13:58:43.832Z",
    "size": 17616,
    "path": "../public/images/projects/ULYS/html/timeline.png"
  },
  "/images/projects/airfrance-display/airfrance/slide_1_projets_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"ace87-wOH5pU0k2+rfS2YXTLTXcrUZBKw\"",
    "mtime": "2022-10-10T13:58:43.768Z",
    "size": 708231,
    "path": "../public/images/projects/airfrance-display/airfrance/slide_1_projets_1.jpg"
  },
  "/images/projects/airfrance-display/airfrance/slide_2_projets_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b3ae0-IgHGtI6npR6IZU699LVHfV4djn0\"",
    "mtime": "2022-10-10T13:58:43.766Z",
    "size": 735968,
    "path": "../public/images/projects/airfrance-display/airfrance/slide_2_projets_1.jpg"
  },
  "/images/projects/airfrance-display/airfrance/slide_3_projets_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"bd148-Gy+bn5PJBtQXKxw7r9PJYERNdoY\"",
    "mtime": "2022-10-10T13:58:43.765Z",
    "size": 774472,
    "path": "../public/images/projects/airfrance-display/airfrance/slide_3_projets_1.jpg"
  },
  "/images/projects/airfrance-display/AIRFRANCE-motiondesign/E-ACQUISITION_1200x1000.mp4": {
    "type": "video/mp4",
    "etag": "\"87b638-j46OIeaVMWE/iS2CLxqV2XvNBfU\"",
    "mtime": "2022-10-10T13:58:43.826Z",
    "size": 8894008,
    "path": "../public/images/projects/airfrance-display/AIRFRANCE-motiondesign/E-ACQUISITION_1200x1000.mp4"
  },
  "/images/projects/airfrance-display/AIRFRANCE-motiondesign/TEASER_OLL_CN.mp4": {
    "type": "video/mp4",
    "etag": "\"6584cf-1oICZbL7nFMlY2O7YdSfZrn0JqI\"",
    "mtime": "2022-10-10T13:58:43.811Z",
    "size": 6653135,
    "path": "../public/images/projects/airfrance-display/AIRFRANCE-motiondesign/TEASER_OLL_CN.mp4"
  },
  "/images/projects/airfrance-display/AIRFRANCE-motiondesign/TEST_PARIS_1080x1920.mp4": {
    "type": "video/mp4",
    "etag": "\"7745ab-nzzTsOUSCdGTbun2hUwwz6RoZuA\"",
    "mtime": "2022-10-10T13:58:43.800Z",
    "size": 7816619,
    "path": "../public/images/projects/airfrance-display/AIRFRANCE-motiondesign/TEST_PARIS_1080x1920.mp4"
  },
  "/images/projects/airfrance-display/AIRFRANCE-motiondesign/insta_soleil_v2.mp4": {
    "type": "video/mp4",
    "etag": "\"8dd77d-vicgIXFYcA/S9agRcc6hOZLvrPM\"",
    "mtime": "2022-10-10T13:58:43.786Z",
    "size": 9295741,
    "path": "../public/images/projects/airfrance-display/AIRFRANCE-motiondesign/insta_soleil_v2.mp4"
  },
  "/images/projects/airfrance-display/AIRFRANCE-motiondesign/maquette.jpg": {
    "type": "image/jpeg",
    "etag": "\"4b803-Y7ygYNxFGq7ixLixiIse2ODh+as\"",
    "mtime": "2022-10-10T13:58:43.771Z",
    "size": 309251,
    "path": "../public/images/projects/airfrance-display/AIRFRANCE-motiondesign/maquette.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, id + "/index.html" + encoding]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size) {
    event.res.setHeader("Content-Length", asset.size);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (query) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, query.params()) || $data, data);
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)] || {};
    return cur.transform(next, transformOptions);
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await serverQueryContent(event).find();
    contentIndex = data.reduce((acc, item) => {
      if (!acc[item._path]) {
        acc[item._path] = item._id;
      } else if (item._id.startsWith("content:")) {
        acc[item._path] = item._id;
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).map((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event, path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, path, ...pathParts) {
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    return createQuery(createServerQueryFetch(event, path));
  }
  return createQuery(createServerQueryFetch(event), path || {});
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  return query;
};

const _VlfqOY = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _3aEnDt = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch("/api/_content/navigation");
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _HhwoYc = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    _partial: false,
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_eDlzYJ = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_eDlzYJ, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid', handler: _VlfqOY, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _VlfqOY, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _3aEnDt, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _HhwoYc, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _HhwoYc, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_eDlzYJ, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
