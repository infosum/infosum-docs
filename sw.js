(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"c854d01bc5cfe3195d4d726b55296db2","url":"404.html"},{"revision":"e033cdeaca45e8a6168fba6d3c0fa415","url":"api/v1/index.html"},{"revision":"ffe32e1ae3eb5edab2ed44044704ecc2","url":"api/v2/index.html"},{"revision":"debeb1af07ea00ebb0213d595e481c90","url":"assets/css/styles.95a51525.css"},{"revision":"41a0a8a8a0fd00b491fbaa3d5c4d7cb6","url":"assets/js/01a85c17.8a3e3f8e.js"},{"revision":"56ade63829407e5b8956cbd0d447cfe1","url":"assets/js/031cd6c4.f4996e18.js"},{"revision":"c233c6b5788be92a42081aad3344984a","url":"assets/js/06c094d2.5779bb11.js"},{"revision":"6bedbf7c3d029c1236d79c162a6374cf","url":"assets/js/0e384e19.4ed65331.js"},{"revision":"ed70f6fc96182c35a1f2c42539c60289","url":"assets/js/131.d6eea86a.js"},{"revision":"5fd2b50498af75aedf64245b19c74ea9","url":"assets/js/17896441.61c43fef.js"},{"revision":"122ab30c4ccab76aaacbabd6b61418d7","url":"assets/js/1be78505.f435406c.js"},{"revision":"e8b6ede294abd217f8141ee911cc719c","url":"assets/js/1cf37229.0a1c5795.js"},{"revision":"7023466f10c78010c9344984d39c14a2","url":"assets/js/1df93b7f.b7c58138.js"},{"revision":"408d744e3e029caeee05599398988bf1","url":"assets/js/1e8ffffe.629fc642.js"},{"revision":"d66aa31c9b0ef44c7bdfabb66323af8e","url":"assets/js/230.2561da48.js"},{"revision":"69c88f049b560457af2a0fab33b3500c","url":"assets/js/26dbebdc.97876a60.js"},{"revision":"0abf57434659f9d258e6e9d9981c79bf","url":"assets/js/283.b4d9f0c3.js"},{"revision":"141e4c833d6076aa1622bf69f7ede78b","url":"assets/js/2c0aace0.264ce0f7.js"},{"revision":"b741210e2de3cdc33ee12c067001bff5","url":"assets/js/36.b0b2dc99.js"},{"revision":"6e7dd0de780a129f2b7f6178c5832486","url":"assets/js/3ab16766.2eec4fb9.js"},{"revision":"f52fbdbc11d1acd290d0bc9524d08044","url":"assets/js/414b77a9.5a49334c.js"},{"revision":"195122f49e91bb28861818e530d2fad2","url":"assets/js/44cec8cd.3c63933c.js"},{"revision":"6be652bed093e29ec8e71758ce30bfcf","url":"assets/js/48.7aaeb50d.js"},{"revision":"5969607d548a2651ca5510b0fdb53e4f","url":"assets/js/4e23c930.dbdf2e55.js"},{"revision":"ae4a99728bf721e8e6ab84c5a45a597c","url":"assets/js/527.6de45dc0.js"},{"revision":"286fb33e6a6ce22bbee031670f2bb0bd","url":"assets/js/54c82979.d82af33a.js"},{"revision":"c3455e779b851dc82ef2e3d739870ee1","url":"assets/js/6875c492.3600a334.js"},{"revision":"3c7dba498cae6777e76ffd77ac68e806","url":"assets/js/716d6e8b.c1d64baa.js"},{"revision":"a3a7fc29ec2a270a3c77e29203cd2195","url":"assets/js/7661071f.33fbe726.js"},{"revision":"f7f2e37323f6ccbcc1febdc2ffd416e6","url":"assets/js/814f3328.44ec3ac6.js"},{"revision":"4f43023c4083498f704538c4cefb314b","url":"assets/js/935f2afb.faee055d.js"},{"revision":"c7fb685fe09348a0ca0eb69ac0438b79","url":"assets/js/972.7dd7306f.js"},{"revision":"8ad8ce119da12744fc59223e26945550","url":"assets/js/975dba38.1050a3a4.js"},{"revision":"862f47f549b75204ff213058489e8a67","url":"assets/js/9de40055.a138dde1.js"},{"revision":"3a47f2e912afe0fb1d7362f88330984a","url":"assets/js/9e4087bc.449999be.js"},{"revision":"a2d3279e49fe84af1b16bd544699966b","url":"assets/js/a3fb953e.e26e613c.js"},{"revision":"f225d307bdbde8793dcf92adf0660d1c","url":"assets/js/a6aa9e1f.afde5bd1.js"},{"revision":"5674f7316ea7e76f1b2683381080944c","url":"assets/js/af23092a.3dcf806b.js"},{"revision":"7278a272ea13b8af28fcb3b4d382f205","url":"assets/js/b53cb62d.641bf312.js"},{"revision":"8f98aec620c30ce73a9a6eedb1ca6c45","url":"assets/js/b8de503b.941ed513.js"},{"revision":"ba96b076b698378615973188dae6e13c","url":"assets/js/ba5a679b.7581d9e7.js"},{"revision":"efcf6f25ecb3d704b17fcaed28daef74","url":"assets/js/bef04aef.04b43189.js"},{"revision":"a0ef8ebcd568da64669f07baef6d46e8","url":"assets/js/cc3468f0.e677ccc9.js"},{"revision":"0283b9797c7f274cd8bd4a814f0a8b45","url":"assets/js/ccc49370.c20fdd2a.js"},{"revision":"a1d91b271d1cda5b7399b5ef81c2bd21","url":"assets/js/cd14c842.99998130.js"},{"revision":"dff25d48b485d616a20c923c6a84b59d","url":"assets/js/d9f32620.52dd71a2.js"},{"revision":"d901c9d8cf822006e294c4885a43890c","url":"assets/js/e9674ec5.8ca2ac94.js"},{"revision":"282a3b125d27ad38a26dbd0c35759bd5","url":"assets/js/ef1f2a58.dc70c83e.js"},{"revision":"bc77bf58dc9fd3393f7aace833482374","url":"assets/js/f0ad3fbb.adbf6348.js"},{"revision":"1b3da418b303ec9ac6784f8312a43eca","url":"assets/js/fcd59481.450a14af.js"},{"revision":"f1d57cc40fff05f12d4e4de5f52f7368","url":"assets/js/runtime~main.d27567da.js"},{"revision":"f141f3306cddd18ba1027770f5640505","url":"blog/archive/index.html"},{"revision":"71502e167a0c80a29ab3db5525ed0dd0","url":"blog/index.html"},{"revision":"be0785cb06873fd0fc760ff96a872b5a","url":"blog/tags/developer/index.html"},{"revision":"b86edd01f9e2edb4f86d1bad82e1a7d7","url":"blog/tags/documentation/index.html"},{"revision":"44bfb896b6e1dfa743db769ab3dfb1de","url":"blog/tags/index.html"},{"revision":"f8e6de6a3de88d730466d09501b790d7","url":"blog/tags/infosum/index.html"},{"revision":"c4c59278dbf1114d4fb647290d4ffcbf","url":"blog/tags/welcome/index.html"},{"revision":"3e96f25747f4d8a87ffc887c092b07e2","url":"blog/welcome/index.html"},{"revision":"bb9904f53cff51fae501443b37499606","url":"docs/authentication/index.html"},{"revision":"f8cc90ae055a6df23fca1318290616e4","url":"docs/cloudvaults/index.html"},{"revision":"8bbeb8f58810b7847b43512ecac40877","url":"docs/getting-started/index.html"},{"revision":"f4a553b15db2f9553907687156e2731c","url":"docs/getting-started/transforming-a-file/index.html"},{"revision":"b7c7aff6f36d7959cf53ee91e2e38366","url":"docs/getting-started/uploading-a-file-from-aws-s3-to-a-cloudvault/index.html"},{"revision":"92f20790b1f7f3e482015e06ef022fca","url":"docs/intro/index.html"},{"revision":"244d2654948162fd6c3737260b246c0b","url":"docs/transform/index.html"},{"revision":"4e72629d8807a62c9c3e38e60138e529","url":"index.html"},{"revision":"e10625abd26594a3c86e81d4b5a04974","url":"manifest.json"},{"revision":"ff8d8a67faafc426aa2b6b0e78838f9f","url":"tyrael.swagger.json"},{"revision":"1c9a892f785bfacca62c196fb0ab1931","url":"assets/images/granted-public-private-api-keys-c9e7ac3f6947e893e71da1915270aa75.png"},{"revision":"192670a37561662c7eeb464c40046638","url":"assets/images/granted-public-private-api-keys-v2-c89ee11618acc91d97ceb62af59a30d0.png"},{"revision":"2b11be1020e6c5205aa669eda42a84c2","url":"assets/images/no-api-keys-ca50847f5d4ad0ce7c1a3fad744d68cf.png"},{"revision":"bdc8936d30eb10beb1a131e2722eff9d","url":"assets/images/no-api-keys-v2-f3d6d64d4598bf4ef71023c85e0396da.png"},{"revision":"afd5df96d4c46afb62a3eea628a93e19","url":"assets/images/set-api-key-expiry-0ee45962db20c6a99d8cce5f8071d0e3.png"},{"revision":"2c3abdc16baece63298213945664eb79","url":"assets/images/set-api-key-expiry-v2-79501b8b171d2da55f656d99c7f994f6.png"},{"revision":"e779bec27391c0ce48210efae60bf5af","url":"favicon/icon-192x192.png"},{"revision":"11917f353f300bb70cf5d2d5cec7b46d","url":"favicon/icon-256x256.png"},{"revision":"5459c3757111ee44799227a9951f5580","url":"favicon/icon-384x384.png"},{"revision":"3dcd2ce1611c0c4e52a17d697b7a652d","url":"favicon/icon-512x512.png"},{"revision":"192670a37561662c7eeb464c40046638","url":"img/authentication/granted-public-private-api-keys-v2.png"},{"revision":"1c9a892f785bfacca62c196fb0ab1931","url":"img/authentication/granted-public-private-api-keys.png"},{"revision":"bdc8936d30eb10beb1a131e2722eff9d","url":"img/authentication/no-api-keys-v2.png"},{"revision":"2b11be1020e6c5205aa669eda42a84c2","url":"img/authentication/no-api-keys.png"},{"revision":"2c3abdc16baece63298213945664eb79","url":"img/authentication/set-api-key-expiry-v2.png"},{"revision":"afd5df96d4c46afb62a3eea628a93e19","url":"img/authentication/set-api-key-expiry.png"},{"revision":"01652180a0a0ab06426ae68d4ca49199","url":"img/favicon.ico"},{"revision":"0ff305892d72a3a433a8c321b716877c","url":"img/icon_api.svg"},{"revision":"95ff080a6f1ff82f5b46edb70fc1d69a","url":"img/icon_quick-start.svg"},{"revision":"01652180a0a0ab06426ae68d4ca49199","url":"img/infosum.png"},{"revision":"b36f76245c1bbbe8dfa26c28bd221875","url":"img/placeholder.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();