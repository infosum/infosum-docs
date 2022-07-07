(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"28b8b1856e6fca3948c6b8b3d5a0f160","url":"404.html"},{"revision":"82f55b736bc98b21f57f86c1a01c2a04","url":"api/index.html"},{"revision":"83930325978c443ceaa299ab179ef3b9","url":"assets/css/styles.f34afd1a.css"},{"revision":"ac219077d94cf52b9ae04f0bff911c95","url":"assets/js/01a85c17.9186ff42.js"},{"revision":"4c1733ad6ce6dc382437840a85fdd7ea","url":"assets/js/031cd6c4.bd6e3bd0.js"},{"revision":"e092f0073c9dbd4c9ec6634723375360","url":"assets/js/06c094d2.b694316d.js"},{"revision":"16123065ae6059dc5a0f18417ed49be7","url":"assets/js/0a2b248b.9cb45ccf.js"},{"revision":"c377aab0080f9388a246269a56338ea9","url":"assets/js/0e384e19.972038b3.js"},{"revision":"c700499067521a5b31e653d0ea9bb485","url":"assets/js/131.529b8eef.js"},{"revision":"34f7520b10b893bdac9a134e4feb2176","url":"assets/js/142.2d47cc4d.js"},{"revision":"f12dc0237ff700680356dba5cca6a7eb","url":"assets/js/17896441.686f00fc.js"},{"revision":"701de5d1160555d52e1af901399b8166","url":"assets/js/1be78505.563857df.js"},{"revision":"0fb84872d559c449e5ca3e5d0320ec5f","url":"assets/js/1cf37229.59ef44ef.js"},{"revision":"e9368e127185ace0eff2859f56110e7b","url":"assets/js/1df93b7f.92f672fd.js"},{"revision":"d2e333afa55d750303bac9d35ca415dc","url":"assets/js/1e8ffffe.1d486487.js"},{"revision":"ff533bf9163065b30f6a50e0bae0340e","url":"assets/js/230.f97e469d.js"},{"revision":"968838254cd95110beb9c3aa9ffde4a9","url":"assets/js/26dbebdc.98767bc2.js"},{"revision":"259674fe71e420c5309880b0480382f8","url":"assets/js/283.f7ab0f87.js"},{"revision":"9a0c5306724ce788bce47d2f7668e0ed","url":"assets/js/3ab16766.d7085d34.js"},{"revision":"a98a033944215e9eb0c854fc1835164c","url":"assets/js/414b77a9.ba19960a.js"},{"revision":"deef8fd78f99c22eb6c70c5915e5c4f2","url":"assets/js/44cec8cd.534e5107.js"},{"revision":"07c936ef15ca5b6ca0700c8d7f69c852","url":"assets/js/4e23c930.3ac3636f.js"},{"revision":"013986b92b266631a0b1c5bc602fade2","url":"assets/js/527.61f66659.js"},{"revision":"559801c7e1984532269dd02fc06b9d6f","url":"assets/js/54c82979.b1280386.js"},{"revision":"93d08b4c7673720513ba659f59f6cb01","url":"assets/js/625b1ed7.e923a6ba.js"},{"revision":"31ca286b74aa1b6a69502b29bee0e3a8","url":"assets/js/6875c492.4e367d1b.js"},{"revision":"89f90704289a8ca42249b3f9a7986fb8","url":"assets/js/7661071f.57df0337.js"},{"revision":"f5f547d74fe008b6a72e6414314fdfba","url":"assets/js/814f3328.5f8d8c6d.js"},{"revision":"653889648fbaa4220d8858ea312665d6","url":"assets/js/838d8878.c44573d0.js"},{"revision":"f779ce89f48e77a7c6cecbca8f0bab86","url":"assets/js/935f2afb.48a1f2de.js"},{"revision":"432ec95873ade818e6499c3b9aaf669a","url":"assets/js/972.bbd3fd9c.js"},{"revision":"2f8ca826f19101e069acb67396c94041","url":"assets/js/9de40055.8a630d4d.js"},{"revision":"487cdf1cfbaaf40e4eabccd2a30b61a7","url":"assets/js/9e4087bc.d8798987.js"},{"revision":"aad826c4e5dcf068e22c3286a9b331a7","url":"assets/js/a3fb953e.b1ab186f.js"},{"revision":"89aae826084957340eeac1e892553626","url":"assets/js/a6aa9e1f.ee7dff54.js"},{"revision":"2f106802d6fdec91fa8f13a5ef3d6698","url":"assets/js/af23092a.b628c384.js"},{"revision":"e16d4a7bb095fb77d513ec54cab27b9c","url":"assets/js/b53cb62d.f99ff8bc.js"},{"revision":"89c41cc642780804a456fee97f2472bb","url":"assets/js/b8de503b.082df7f3.js"},{"revision":"3295993a061f1962fad81df0352b1e88","url":"assets/js/ba5a679b.d64517cf.js"},{"revision":"2c1b840b827c392110c1ed216b46e2b8","url":"assets/js/ccc49370.e9e5b814.js"},{"revision":"70fcc16d27aacf59029e8c19c63df64a","url":"assets/js/cd14c842.22b80f85.js"},{"revision":"c4ee936f8a79a03de3d9729889939da6","url":"assets/js/d9f32620.b4d4b50b.js"},{"revision":"5c7758f737f31efb35c61933a88ce31e","url":"assets/js/e9674ec5.79da8c9f.js"},{"revision":"f665ad6b2502dbc4d8b91ebf87d94b8e","url":"assets/js/ef1f2a58.52c018d9.js"},{"revision":"f85fb6ecf2a9e89e06c6c02c8f392db4","url":"assets/js/f0ad3fbb.8719d32c.js"},{"revision":"c5c33bc47c9b36f984addce232549d6d","url":"assets/js/runtime~main.34cebc1a.js"},{"revision":"aeeb18a33ddf733d48bc80e3f0613116","url":"blog/archive/index.html"},{"revision":"f88acf240526081ccebf07a2edb3f764","url":"blog/index.html"},{"revision":"6af5a302c6fbdb5a8c8e46de2ad6e13c","url":"blog/tags/developer/index.html"},{"revision":"84452415318214618368c3dcdd246a19","url":"blog/tags/documentation/index.html"},{"revision":"9da9ec7dcbf3baf5ee6222f8b0f08854","url":"blog/tags/index.html"},{"revision":"bdc58944c23b6f16d4e428f8a7378fe9","url":"blog/tags/infosum/index.html"},{"revision":"bfe57e8a0aeef7906526c4aa91336ac3","url":"blog/tags/welcome/index.html"},{"revision":"134e2d15a648135df57a1e446ca65bd3","url":"blog/welcome/index.html"},{"revision":"497cb19108941eafacdac118b5d2899d","url":"docs/authentication/index.html"},{"revision":"a44318335f965f5eefb8c04ecc2c1a63","url":"docs/filevaults/index.html"},{"revision":"2e17bf67d2dbb85951b3fb2ddcc0e5e7","url":"docs/getting-started/index.html"},{"revision":"d55088225d300fbca72f440f642df7c8","url":"docs/getting-started/transforming-a-file/index.html"},{"revision":"759ff50bc9100ef5beeb49808d82ee3b","url":"docs/getting-started/uploading-a-file-to-a-filevault/index.html"},{"revision":"bd60390ed8b58d6d5776f09af40448fd","url":"docs/intro/index.html"},{"revision":"308d9eb2bf0e56d9476313fbbdc40821","url":"docs/transform/index.html"},{"revision":"c1cff00925d0b9982c597480f92d8cbd","url":"index.html"},{"revision":"e10625abd26594a3c86e81d4b5a04974","url":"manifest.json"},{"revision":"1c9a892f785bfacca62c196fb0ab1931","url":"assets/images/granted-public-private-api-keys-c9e7ac3f6947e893e71da1915270aa75.png"},{"revision":"2b11be1020e6c5205aa669eda42a84c2","url":"assets/images/no-api-keys-ca50847f5d4ad0ce7c1a3fad744d68cf.png"},{"revision":"afd5df96d4c46afb62a3eea628a93e19","url":"assets/images/set-api-key-expiry-0ee45962db20c6a99d8cce5f8071d0e3.png"},{"revision":"e779bec27391c0ce48210efae60bf5af","url":"favicon/icon-192x192.png"},{"revision":"11917f353f300bb70cf5d2d5cec7b46d","url":"favicon/icon-256x256.png"},{"revision":"5459c3757111ee44799227a9951f5580","url":"favicon/icon-384x384.png"},{"revision":"3dcd2ce1611c0c4e52a17d697b7a652d","url":"favicon/icon-512x512.png"},{"revision":"1c9a892f785bfacca62c196fb0ab1931","url":"img/authentication/granted-public-private-api-keys.png"},{"revision":"2b11be1020e6c5205aa669eda42a84c2","url":"img/authentication/no-api-keys.png"},{"revision":"afd5df96d4c46afb62a3eea628a93e19","url":"img/authentication/set-api-key-expiry.png"},{"revision":"01652180a0a0ab06426ae68d4ca49199","url":"img/favicon.ico"},{"revision":"01652180a0a0ab06426ae68d4ca49199","url":"img/infosum.png"},{"revision":"b36f76245c1bbbe8dfa26c28bd221875","url":"img/placeholder.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();