import{R as N,C as S,E as O,I as T,ak as A,al as k,z as U,U as z,am as M,s as L,an as H,M as F,ao as Q,N as I,ae as W,h as K}from"./defu.2e1dc047.js";import{c as C,_ as J}from"./entry.1cdeef3c.js";import"./nuxt-link.a015573c.js";import"./app.config.4ad24e0a.js";import{u as G}from"./cookie.b5e21640.js";import{c as V}from"./query.c3f7607a.js";import{w as P,s as Y}from"./utils.5716dfc0.js";const X=()=>null;function Z(...s){var h;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,t,e={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??X,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=N(),o=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],c=()=>o()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:S(o()??((h=e.default)==null?void 0:h.call(e))??null),pending:S(!c()),error:S(a.payload._errors[r]?C(a.payload._errors[r]):null)});const i={...a._asyncData[r]};i.refresh=i.execute=(u={})=>{if(a._asyncDataPromises[r]){if(u.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(u._initial&&c())return o();i.pending.value=!0;const y=new Promise((f,_)=>{try{f(t(a))}catch(m){_(m)}}).then(f=>{if(y.cancelled)return a._asyncDataPromises[r];e.transform&&(f=e.transform(f)),e.pick&&(f=ee(f,e.pick)),i.data.value=f,i.error.value=null}).catch(f=>{var _;if(y.cancelled)return a._asyncDataPromises[r];i.error.value=f,i.data.value=T(((_=e.default)==null?void 0:_.call(e))??null)}).finally(()=>{y.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=C(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=y,a._asyncDataPromises[r]};const l=()=>i.refresh({_initial:!0}),d=e.server!==!1&&a.payload.serverRendered;{const u=U();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const f=u._nuxtOnBeforeMountCbs;u&&(A(()=>{f.forEach(_=>{_()}),f.splice(0,f.length)}),k(()=>f.splice(0,f.length)))}d&&a.isHydrating&&c()?i.pending.value=!1:u&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?u._nuxtOnBeforeMountCbs.push(l):e.immediate&&l(),e.watch&&O(e.watch,()=>i.refresh());const y=a.hook("app:data:refresh",f=>{if(!f||f.includes(r))return i.refresh()});u&&k(y)}const p=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(p,i),p}function ee(s,n){const r={};for(const t of n)r[t]=s[t];return r}const te={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function re(s,n={}){n={...te,...n};const r=E(n);return r.dispatch(s),r.toString()}function E(s){const n=[];let r=[];const t=e=>{n.push(e)};return{toString(){return n.join("")},getContext(){return r},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(e),c=a.exec(o),i=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let l=null;if((l=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(r.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](e);else{if(s.ignoreUnknown)return t("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let d=Object.keys(e);s.unorderedObjects&&(d=d.sort()),s.respectType!==!1&&!D(e)&&d.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(d=d.filter(function(p){return!s.excludeKeys(p)})),t("object:"+d.length+":");for(const p of d)this.dispatch(p),t(":"),s.excludeValues||this.dispatch(e[p]),t(",")}},_array(e,a){if(a=typeof a<"u"?a:s.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const o=[],c=e.map(i=>{const l=E(s);return l.dispatch(i),o.push(l.getContext()),l.toString()});return r=[...r,...o],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),D(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=[...e];return this._array(a,s.unorderedSets!==!1)},_set(e){t("set:");const a=[...e];return this._array(a,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function D(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class w{constructor(n,r){n=this.words=n||[],this.sigBytes=r!==void 0?r:n.length*4}toString(n){return(n||ne).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const ne={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;n.push((t>>>4).toString(16),(t&15).toString(16))}return n.join("")}},se={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,a=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|a<<8|o;for(let i=0;i<4&&t*8+i*6<s.sigBytes*8;i++)r.push(n.charAt(c>>>6*(3-i)&63))}return r.join("")}},ae={parse(s){const n=s.length,r=[];for(let t=0;t<n;t++)r[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new w(r,n)}},ie={parse(s){return ae.parse(unescape(encodeURIComponent(s)))}};class oe{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new w,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=ie.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,e),this._data.sigBytes-=a}return new w(r,a)}}class ue extends oe{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const ce=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],le=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],g=[];class fe extends ue{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new w([...ce])}_doProcessBlock(n,r){const t=this._hash.words;let e=t[0],a=t[1],o=t[2],c=t[3],i=t[4],l=t[5],d=t[6],p=t[7];for(let h=0;h<64;h++){if(h<16)g[h]=n[r+h]|0;else{const b=g[h-15],$=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,v=g[h-2],q=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;g[h]=$+g[h-7]+q+g[h-16]}const u=i&l^~i&d,y=e&a^e&o^a&o,f=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),_=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),m=p+_+u+le[h]+g[h],B=f+y;p=d,d=l,l=i,i=c+m|0,c=o,o=a,a=e,e=m+B|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+i|0,t[5]=t[5]+l|0,t[6]=t[6]+d|0,t[7]=t[7]+p|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function he(s){return new fe().finalize(s).toString(se)}function x(s,n={}){const r=typeof s=="string"?s:re(s,n);return he(r).slice(0,10)}function R(s){return JSON.stringify(s,de)}function de(s,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const pe=s=>{let n=R(s);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},ye=()=>async s=>{const{content:n}=z().public,r=s.params(),t=n.experimental.stripQueryParameters?P(`/query/${`${x(r)}.${n.integrity}`}/${pe(r)}.json`):P(`/query/${x(r)}.${n.integrity}.json`);if(Y())return(await J(()=>import("./client-db.38a3027b.js"),["./client-db.38a3027b.js","./defu.2e1dc047.js","./cookie.b5e21640.js","./nuxt-link.a015573c.js","./app.config.4ad24e0a.js","./query.c3f7607a.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(s);const e=await $fetch(t,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:R(r),previewToken:G("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function j(s,...n){const{content:r}=z().public,t=V(ye(),typeof s!="string"?s:{});let e;typeof s=="string"&&(e=M(L(s,...n)));const a=t.params;return t.params=()=>{var c,i,l;const o=a();return e&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:H(e)}):o.where.push({_path:new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=o.sort)!=null&&c.length||(o.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((l=(i=o.where)==null?void 0:i.find(p=>p._locale))!=null&&l._locale||(o.where=o.where||[],o.where.push({_locale:r.defaultLocale}))),o},t}const _e=F({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(s){const{path:n,only:r,without:t,where:e,sort:a,limit:o,skip:c,locale:i,find:l}=Q(s),d=I(()=>{var u;return(u=n.value)==null?void 0:u.includes("/_")});O(()=>s,()=>h(),{deep:!0});const{data:p,refresh:h}=await Z(`content-query-${x(s)}`,()=>{let u;return n.value?u=j(n.value):u=j(),r.value&&(u=u.only(r.value)),t.value&&(u=u.without(t.value)),e.value&&(u=u.where(e.value)),a.value&&(u=u.sort(a.value)),o.value&&(u=u.limit(o.value)),c.value&&(u=u.skip(c.value)),i.value&&(u=u.where({_locale:i.value})),l.value==="one"?u.findOne():l.value==="surround"?n.value?u.findSurround(n.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),u.find()):u.find()});return{isPartial:d,data:p,refresh:h}},render(s){var _;const n=W(),{data:r,refresh:t,isPartial:e,path:a,only:o,without:c,where:i,sort:l,limit:d,skip:p,locale:h,find:u}=s,y={path:a,only:o,without:c,where:i,sort:l,limit:d,skip:p,locale:h,find:u};if(y.find==="one"){if(!r&&(n!=null&&n["not-found"]))return n["not-found"]({props:y,...this.$attrs});if(n!=null&&n.empty&&(r==null?void 0:r._type)==="markdown"&&!((_=r==null?void 0:r.body)!=null&&_.children.length))return n.empty({props:y,...this.$attrs})}else if((!r||!r.length)&&n!=null&&n["not-found"])return n["not-found"]({props:y,...this.$attrs});return n!=null&&n.default?n.default({data:r,refresh:t,isPartial:e,props:y,...this.$attrs}):((m,B)=>K("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:m,data:B},null,2)))("default",{data:r,props:y,isPartial:e})}}),xe=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"}));export{xe as C,_e as _,pe as e,x as h,R as j,j as q,Z as u};
