import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_D3z7NaBN.mjs';
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
    const path = toPath(params);
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

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.iW2Pm_uT.css"}],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.iW2Pm_uT.css"}],"routeData":{"route":"/service-detail/ac-repair","isIndex":false,"type":"page","pattern":"^\\/service-detail\\/ac-repair\\/?$","segments":[[{"content":"service-detail","dynamic":false,"spread":false}],[{"content":"ac-repair","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service-detail/ac-repair.astro","pathname":"/service-detail/ac-repair","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.iW2Pm_uT.css"}],"routeData":{"route":"/service-detail/refrigerator-repair","isIndex":false,"type":"page","pattern":"^\\/service-detail\\/refrigerator-repair\\/?$","segments":[[{"content":"service-detail","dynamic":false,"spread":false}],[{"content":"refrigerator-repair","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service-detail/refrigerator-repair.astro","pathname":"/service-detail/refrigerator-repair","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.iW2Pm_uT.css"}],"routeData":{"route":"/service-detail/washing-machine-repair","isIndex":false,"type":"page","pattern":"^\\/service-detail\\/washing-machine-repair\\/?$","segments":[[{"content":"service-detail","dynamic":false,"spread":false}],[{"content":"washing-machine-repair","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service-detail/washing-machine-repair.astro","pathname":"/service-detail/washing-machine-repair","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.iW2Pm_uT.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.iW2Pm_uT.css"},{"type":"inline","content":"@font-face{font-family:revicons;fallback:fallback;src:url(/_astro/revicons.DbTteTvA.woff) format(\"woff\"),url(/_astro/revicons.CBqxZnew.ttf) format(\"ttf\"),url(/_astro/revicons.BNIKeAUC.eot) format(\"ttf\")}.react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:#00000080;min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:#000c}.react-multiple-carousel__arrow:before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow:disabled{cursor:default;background:#00000080}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left:before{content:\"\"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right:before{content:\"\"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:gray;padding:0;margin:0 6px 0 0;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active,.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0!important}.react-multi-carousel-track{overflow:visible!important}}[dir=rtl].react-multi-carousel-list{direction:rtl}.rtl.react-multiple-carousel__arrow--right{right:auto;left:calc(4% + 1px)}.rtl.react-multiple-carousel__arrow--right:before{content:\"\"}.rtl.react-multiple-carousel__arrow--left{left:auto;right:calc(4% + 1px)}.rtl.react-multiple-carousel__arrow--left:before{content:\"\"}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Personal/QuickRepairTx/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["D:/Personal/QuickRepairTx/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Personal/QuickRepairTx/src/pages/service-detail/ac-repair.astro",{"propagation":"none","containsHead":true}],["D:/Personal/QuickRepairTx/src/pages/service-detail/refrigerator-repair.astro",{"propagation":"none","containsHead":true}],["D:/Personal/QuickRepairTx/src/pages/service-detail/washing-machine-repair.astro",{"propagation":"none","containsHead":true}],["D:/Personal/QuickRepairTx/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DG41soDh.mjs","/src/pages/service-detail/refrigerator-repair.astro":"chunks/pages/refrigerator-repair_Cv-OZoWc.mjs","/src/pages/services.astro":"chunks/pages/services_BJoE1sFc.mjs","/src/pages/service-detail/washing-machine-repair.astro":"chunks/pages/washing-machine-repair_C64Af32b.mjs","\u0000@astrojs-manifest":"manifest_B8LpJwEr.mjs","D:/Personal/QuickRepairTx/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_HuoGtRn_.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"chunks/about-us_CJQFfzLV.mjs","\u0000@astro-page:src/pages/service-detail/ac-repair@_@astro":"chunks/ac-repair_B0vhrU1X.mjs","\u0000@astro-page:src/pages/service-detail/refrigerator-repair@_@astro":"chunks/refrigerator-repair_DQa2LlKa.mjs","\u0000@astro-page:src/pages/service-detail/washing-machine-repair@_@astro":"chunks/washing-machine-repair_BCx_IzqB.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_sMz5RvjM.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BkB07mSZ.mjs","@astrojs/react/client.js":"_astro/client.CBa9mQv-.js","D:/Personal/QuickRepairTx/src/components/Header/Header.tsx":"_astro/Header.CYPLq4bf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/girlone.CabW2mET.jpg","/_astro/washing2.C8C6jnxT.jpg","/_astro/refrigerator.0kMBloKs.jpg","/_astro/washing.BBFzGWXf.jpg","/_astro/david.nKqDZXE4.jpg","/_astro/ken.9h5Q5VmT.jpg","/_astro/jordan.L1T15dFj.jpg","/_astro/airconditioning.BoDrEvVx.jpg","/_astro/repairone.CaMXAQyw.jpg","/_astro/repairthree.BKF78zga.jpg","/_astro/girlthree.b7IDDhAW.jpg","/_astro/repairtwo._31p87kA.jpg","/_astro/diagnosis.C-CGFC0r.png","/_astro/snap.BtY6nTkX.png","/_astro/revicons.DbTteTvA.woff","/_astro/qualityAssurance.CvM81Kxa.png","/_astro/repair.BgZsTqHw.png","/_astro/boyone.YOfeo6IN.jpg","/_astro/airconditioning2.ClUJaKCZ.jpg","/_astro/technician.Dq1Ati2Z.png","/_astro/customer.CkXdFAIG.png","/_astro/washingmachine.BDYevnUO.jpg","/_astro/promptservice.DoR85dKn.png","/_astro/freeservice.CmUNkxcy.png","/_astro/revicons.CBqxZnew.ttf","/_astro/white-logo.C5abmSUl.png","/_astro/revicons.BNIKeAUC.eot","/_astro/about-us.iW2Pm_uT.css","/favicon.svg","/_astro/about-us.ma7US3Nz.css","/_astro/client.CBa9mQv-.js","/_astro/Header.CYPLq4bf.js","/_astro/index.Dn3mYdQD.js","/images/aboutus/hello.doc","/images/aboutus/repairone.jpg","/images/aboutus/repairthree.jpg","/images/aboutus/repairtwo.jpg","/images/banner/teamBanner.jpg","/images/herosection/washingmachine.jpg","/images/logo/white-logo.png","/images/random/snap.png","/images/services/airconditioning.jpg","/images/services/airconditioning2.jpg","/images/services/customer.png","/images/services/freeservice.png","/images/services/promptservice.png","/images/services/refrigerator.jpg","/images/services/technician.png","/images/services/washing.jpg","/images/services/washing2.jpg","/images/services/washingmachine.jpg","/images/teams/david.jpg","/images/teams/holden.jpg","/images/teams/jordan.jpg","/images/teams/ken.jpg","/images/testimonial/boyone.jpg","/images/testimonial/girlone.jpg","/images/testimonial/girlthree.jpg","/images/workingProcess/diagnosis.png","/images/workingProcess/inquiry.png","/images/workingProcess/qualityAssurance.png","/images/workingProcess/repair.png"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
