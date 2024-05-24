import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_DxvcdLM_.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"},{"type":"inline","content":".pref{color:#19427d}.pref1{color:#8a8c90}.pref2{color:#778da9}.pref3{color:#4c4d4f}\n"}],"routeData":{"route":"/education/edu1","isIndex":false,"type":"page","pattern":"^\\/education\\/edu1\\/?$","segments":[[{"content":"education","dynamic":false,"spread":false}],[{"content":"edu1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/education/edu1.md","pathname":"/education/edu1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/posts/[slug]","isIndex":false,"type":"page","pattern":"^\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/posts/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/posts-1/post-1","isIndex":false,"type":"page","pattern":"^\\/posts-1\\/post-1\\/?$","segments":[[{"content":"posts-1","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-1/post-1.md","pathname":"/posts-1/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/posts-1/post-2","isIndex":false,"type":"page","pattern":"^\\/posts-1\\/post-2\\/?$","segments":[[{"content":"posts-1","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-1/post-2.md","pathname":"/posts-1/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/posts-1/post-3","isIndex":false,"type":"page","pattern":"^\\/posts-1\\/post-3\\/?$","segments":[[{"content":"posts-1","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-1/post-3.md","pathname":"/posts-1/post-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/posts-1/post-4","isIndex":false,"type":"page","pattern":"^\\/posts-1\\/post-4\\/?$","segments":[[{"content":"posts-1","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts-1/post-4.md","pathname":"/posts-1/post-4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"},{"type":"inline","content":".pref{color:#19427d}.pref1{color:#8a8c90}.pref2{color:#778da9}.pref3{color:#4c4d4f}\n"}],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"},{"type":"inline","content":".pagination[data-astro-cid-plu6zll4] a[data-astro-cid-plu6zll4]{display:inline-block;padding:10px}\n"}],"routeData":{"route":"/scholarship/[...page]","isIndex":false,"type":"page","pattern":"^\\/scholarship(?:\\/(.*?))?\\/?$","segments":[[{"content":"scholarship","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/scholarship/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"},{"type":"inline","content":".pagination[data-astro-cid-plu6zll4] a[data-astro-cid-plu6zll4]{display:inline-block;padding:10px}\n"}],"routeData":{"route":"/scholarship copy/[...page]","isIndex":false,"type":"page","pattern":"^\\/scholarship copy(?:\\/(.*?))?\\/?$","segments":[[{"content":"scholarship copy","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/scholarship copy/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B77aEIT-.css"},{"type":"inline","content":".pref{color:#19427d}.pref1{color:#8a8c90}.pref2{color:#778da9}.pref3{color:#4c4d4f}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/posts-1/post-1.md",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/posts-1/post-2.md",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/posts-1/post-3.md",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/posts-1/post-4.md",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Adebaicy/Desktop/despa/blog/src/pages/about.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_DN1fkzLC.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CFZdKg0n.mjs","/src/pages/posts-1/post-2.md":"chunks/pages/post-2_BQ9vx1-A.mjs","/src/pages/posts-1/post-3.md":"chunks/pages/post-3_CdaXluj7.mjs","/src/pages/posts-1/post-4.md":"chunks/pages/post-4_BQhegn0l.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_BKknZxfR.mjs","\u0000@astrojs-manifest":"manifest_Dab9FS7t.mjs","C:/Users/Adebaicy/Desktop/despa/blog/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D9d165LE.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_DqMNen7Z.mjs","\u0000@astro-page:src/pages/education/edu1@_@md":"chunks/edu1_DaK3Jhin.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug__CW5ZAPJ3.mjs","\u0000@astro-page:src/pages/posts-1/post-1@_@md":"chunks/post-1_CP3K79fD.mjs","\u0000@astro-page:src/pages/posts-1/post-2@_@md":"chunks/post-2_D8mkYL49.mjs","\u0000@astro-page:src/pages/posts-1/post-3@_@md":"chunks/post-3_Dd8j_zEO.mjs","\u0000@astro-page:src/pages/posts-1/post-4@_@md":"chunks/post-4_DczxMNIR.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_FE5h5k70.mjs","\u0000@astro-page:src/pages/scholarship/[...page]@_@astro":"chunks/_.._D98JxeSH.mjs","\u0000@astro-page:src/pages/scholarship copy/[...page]@_@astro":"chunks/_.._KZDHkYB6.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__DV9L7fYP.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_Cjw8k5vO.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DuthVpX5.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/blog/post1.md?astroContentCollectionEntry=true":"chunks/post1_BhBfAB28.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 2.md?astroContentCollectionEntry=true":"chunks/post1 copy 2_DM0OhyNv.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 3.md?astroContentCollectionEntry=true":"chunks/post1 copy 3_pBmdg9Ix.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 4.md?astroContentCollectionEntry=true":"chunks/post1 copy 4_DISUyNo6.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy.md?astroContentCollectionEntry=true":"chunks/post1 copy_COxXc3IG.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1.md?astroContentCollectionEntry=true":"chunks/post1_BU23a-OF.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/blog/post1.md?astroPropagatedAssets":"chunks/post1_BSn8imCO.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 2.md?astroPropagatedAssets":"chunks/post1 copy 2_BG1aKOda.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 3.md?astroPropagatedAssets":"chunks/post1 copy 3_zkw9L0R8.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 4.md?astroPropagatedAssets":"chunks/post1 copy 4_M3C9gCAa.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy.md?astroPropagatedAssets":"chunks/post1 copy_CXpP5AnR.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1.md?astroPropagatedAssets":"chunks/post1_B71u243J.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/blog/post1.md":"chunks/post1_DJSkc5_K.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 2.md":"chunks/post1 copy 2_GNkXCoM_.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 3.md":"chunks/post1 copy 3_DFho9FP4.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy 4.md":"chunks/post1 copy 4_BLq8y-nf.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1 copy.md":"chunks/post1 copy_DdrIkypf.mjs","C:/Users/Adebaicy/Desktop/despa/blog/src/content/posts/post1.md":"chunks/post1_Dk1gldgP.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.l0sNRNKZ.js","@astrojs/preact/client.js":"_astro/client.DOaEPbqw.js","C:/Users/Adebaicy/Desktop/despa/blog/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.DbMZ4PCB.js","@astrojs/react/client.js":"_astro/client.Df8ih4qs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/cry.CO3ICFCd.png","/_astro/health.C8R1F3cB.png","/_astro/job.ypGbDBl7.png","/_astro/test.izXjeHCd.png","/_astro/blog.B0oK39PI.png","/_astro/about.B77aEIT-.css","/favicon.svg","/_astro/client.B3Ao-Zuw.js","/_astro/client.Df8ih4qs.js","/_astro/client.DOaEPbqw.js","/_astro/signals.module.DbMZ4PCB.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
