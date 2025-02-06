(()=>{"use strict";var e={392:()=>{try{self["workbox:core:7.0.0"]&&_()}catch(e){}},328:()=>{try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},128:()=>{try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},920:()=>{try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(392);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(328);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(920);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(128);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"c93cdef60442e27a1ef016413301a263","url":"404.html"},{"revision":"d860f46a4c4ad675fb8516d4a621338d","url":"api/v1/index.html"},{"revision":"d7603484fb91ca604c7f8d8e2235868f","url":"api/v2/index.html"},{"revision":"935993bad965b7ae50e425f9454ff858","url":"assets/css/styles.cd3edc03.css"},{"revision":"31eca792d20cb2374bbd98a0481b4263","url":"assets/js/0e384e19.c4a10a22.js"},{"revision":"0dbc68140d7b9523b6d151a520cda949","url":"assets/js/104.2a177819.js"},{"revision":"b78054e4fecded5dbf719485b54c6e3a","url":"assets/js/172.c3f151fc.js"},{"revision":"6599de1e6add2552948fbefa400c9685","url":"assets/js/17896441.bd594741.js"},{"revision":"15def27084d41a5c2b79221b3b8283e1","url":"assets/js/1df93b7f.0596718b.js"},{"revision":"5a0d4d498dd8c517bd1fa1327fcda715","url":"assets/js/224e1102.7030a1ee.js"},{"revision":"839a2a4d16ef27066ded846bebe3091f","url":"assets/js/3d746d80.a2bd59ff.js"},{"revision":"356d120dbb84292515af16a00330cb03","url":"assets/js/4cf3b794.9f1fa27c.js"},{"revision":"1cc1dacdbeee2cb656ae82938ab75dbb","url":"assets/js/5e95c892.0087e53e.js"},{"revision":"64916000a0246c7fb09fabf820dcff44","url":"assets/js/600.90e69f3f.js"},{"revision":"b8f0ce220b7171219c17ea9c66ea4a3c","url":"assets/js/624.a3725085.js"},{"revision":"eba6d8a93c292b4976255f5c0375ebb6","url":"assets/js/68.4c86d2fe.js"},{"revision":"954b6c8ace076121db37b85d8113ef8c","url":"assets/js/75207d84.472002f8.js"},{"revision":"58331426733078cad25c1f5260ab5e85","url":"assets/js/935f2afb.f2fa7a2d.js"},{"revision":"88617a7ee1d845056749656c5d54c78e","url":"assets/js/a7bd4aaa.e2f434cb.js"},{"revision":"bf023166cc90555e03310237c32b0ee3","url":"assets/js/a94703ab.a81e09f2.js"},{"revision":"26f6b16ab26a032198faacfad78f5127","url":"assets/js/b4b4fd7c.aa5ea569.js"},{"revision":"d4e85a541cbb219789acb11115db6131","url":"assets/js/ba5a679b.87311bc2.js"},{"revision":"eadd69505ccf403814d362e88df8f4b1","url":"assets/js/cc3468f0.3c76ecb1.js"},{"revision":"79c36307870580d6d89488f70e6c4679","url":"assets/js/cd14c842.369ac70c.js"},{"revision":"8907d768e1ef828e2376ee991c8223a6","url":"assets/js/dc6bdf15.72cbbeae.js"},{"revision":"da41a02379f1305843d8d530ec9ed499","url":"assets/js/deb8250a.87714ab8.js"},{"revision":"39e1a5ab0c1cb3094df8bdd6a117e8f6","url":"assets/js/f0ad3fbb.3905725b.js"},{"revision":"886989b30bb43bb337184cea177d53bc","url":"assets/js/main.e3f9e75a.js"},{"revision":"fcddae527dcbd08718999f2b21ba56b0","url":"assets/js/runtime~main.a00c3cad.js"},{"revision":"15461730d3504991400f7e403d1a68cc","url":"docs/authentication/index.html"},{"revision":"d3e31b8ffb91a3979fe6601357675cb9","url":"docs/filtering/index.html"},{"revision":"78a32a8dd1f65a658e840f188ded1844","url":"docs/intro/index.html"},{"revision":"60298b1a013db1fed7237e25638a13ba","url":"index.html"},{"revision":"e10625abd26594a3c86e81d4b5a04974","url":"manifest.json"},{"revision":"6941cf37ac8626b648dd06c828f0bd10","url":"swagger_test.json"},{"revision":"61830a4d5119d1d0ef4205f4095c32d7","url":"swagger.json"},{"revision":"a18e5c9afaaa9441f30d0fd1fe9ee7d9","url":"tyrael.swagger.json"},{"revision":"61ddb8cd690004202d73976e281260e6","url":"assets/images/granted-public-private-api-keys-v2-b5d94ac05936d239b879408f1e4649b8.png"},{"revision":"4bc035724952281c9a5645de9e647181","url":"assets/images/halftone-right-d2391af799164929fe261050ec8fe1ca.svg"},{"revision":"9dc2e30930ffd1d82894d2179367b77e","url":"assets/images/no-api-keys-v2-1dd52b6b29d6bbeee958a7120bad4605.png"},{"revision":"4b77abe3b5ed67d2b0b755d1b8db92d0","url":"assets/images/set-api-key-expiry-v2-2dab41f2bf2d0b7db676dc861aae2aa2.png"},{"revision":"e779bec27391c0ce48210efae60bf5af","url":"favicon/icon-192x192.png"},{"revision":"11917f353f300bb70cf5d2d5cec7b46d","url":"favicon/icon-256x256.png"},{"revision":"5459c3757111ee44799227a9951f5580","url":"favicon/icon-384x384.png"},{"revision":"3dcd2ce1611c0c4e52a17d697b7a652d","url":"favicon/icon-512x512.png"},{"revision":"61ddb8cd690004202d73976e281260e6","url":"img/authentication/granted-public-private-api-keys-v2.png"},{"revision":"4d8b963bcccb656d55f28cd01af6794d","url":"img/authentication/granted-public-private-api-keys.png"},{"revision":"9dc2e30930ffd1d82894d2179367b77e","url":"img/authentication/no-api-keys-v2.png"},{"revision":"865a5d316ed695b59dd3351a6f30a078","url":"img/authentication/no-api-keys.png"},{"revision":"4b77abe3b5ed67d2b0b755d1b8db92d0","url":"img/authentication/set-api-key-expiry-v2.png"},{"revision":"e42cf5a2049f77e518200679abd1a2b8","url":"img/authentication/set-api-key-expiry.png"},{"revision":"01652180a0a0ab06426ae68d4ca49199","url":"img/favicon.ico"},{"revision":"4bc035724952281c9a5645de9e647181","url":"img/halftone-right.svg"},{"revision":"0ff305892d72a3a433a8c321b716877c","url":"img/icon_api.svg"},{"revision":"95ff080a6f1ff82f5b46edb70fc1d69a","url":"img/icon_quick-start.svg"},{"revision":"7ad34a242b275bd68c19a88e268747dd","url":"img/infosum-banner.svg"},{"revision":"01652180a0a0ab06426ae68d4ca49199","url":"img/infosum.png"},{"revision":"e230e90d075626e2d21798e36a1660d6","url":"img/lines.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();