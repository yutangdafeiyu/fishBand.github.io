const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomeView-B_rgftre.js","./AppLayout-DCNu5X3p.js","./three-core-a6RBWivb.js","./AppLayout-BETnAcZD.css","./gsap-CB87Sc6I.js","./marked-BOcXoNEU.js","./HomeView-zy1I1OFY.css","./ArticleView-jskXuyJs.js","./ArticleView-DllktBSa.css"])))=>i.map(i=>d[i]);
import{r as ge,m as he,e as fe,c as F,i as gn,a as Dn,t as Fe,b as ve,d as Z,h as qe,g as ze,o as Ue,f as be,n as xe,j as We,w as ye,u as un,s as Ge,k as $e,l as je,p as we,q as kn,v as Un,x as Ye,y as Wn,z as Gn,A as Je,T as Ke,B as Xe,C as Qe}from"./three-core-a6RBWivb.js";import{M as Ze}from"./marked-BOcXoNEU.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Re;const bn=n=>Re=n,Pe=Symbol();function En(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var dn;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(dn||(dn={}));function nt(){const n=fe(!0),e=n.run(()=>ge({}));let t=[],s=[];const o=he({install(r){bn(o),o._a=r,r.provide(Pe,o),r.config.globalProperties.$pinia=o,s.forEach(a=>t.push(a)),s=[]},use(r){return this._a?t.push(r):s.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return o}const ke=()=>{};function $n(n,e,t,s=ke){n.push(e);const o=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),s())};return!t&&ze()&&Ue(o),o}function en(n,...e){n.slice().forEach(t=>{t(...e)})}const et=n=>n(),Yn=Symbol(),Sn=Symbol();function Bn(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,s)=>n.set(s,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const s=e[t],o=n[t];En(o)&&En(s)&&n.hasOwnProperty(t)&&!gn(s)&&!Dn(s)?n[t]=Bn(o,s):n[t]=s}return n}const tt=Symbol();function st(n){return!En(n)||!n.hasOwnProperty(tt)}const{assign:K}=Object;function ot(n){return!!(gn(n)&&n.effect)}function rt(n,e,t,s){const{state:o,actions:r,getters:a}=e,m=t.state.value[n];let i;function u(){m||(t.state.value[n]=o?o():{});const g=We(t.state.value[n]);return K(g,r,Object.keys(a||{}).reduce((l,p)=>(l[p]=he(F(()=>{bn(t);const d=t._s.get(n);return a[p].call(d,d)})),l),{}))}return i=Se(n,u,e,t,s,!0),i}function Se(n,e,t={},s,o,r){let a;const m=K({actions:{}},t),i={deep:!0};let u,g,l=[],p=[],d;const b=s.state.value[n];!r&&!b&&(s.state.value[n]={});let y;function P(I){let k;u=g=!1,typeof I=="function"?(I(s.state.value[n]),k={type:dn.patchFunction,storeId:n,events:d}):(Bn(s.state.value[n],I),k={type:dn.patchObject,payload:I,storeId:n,events:d});const D=y=Symbol();xe().then(()=>{y===D&&(u=!0)}),g=!0,en(l,k,s.state.value[n])}const _=r?function(){const{state:k}=t,D=k?k():{};this.$patch(U=>{K(U,D)})}:ke;function j(){a.stop(),l=[],p=[],s._s.delete(n)}const S=(I,k="")=>{if(Yn in I)return I[Sn]=k,I;const D=function(){bn(s);const U=Array.from(arguments),$=[],W=[];function yn(V){$.push(V)}function an(V){W.push(V)}en(p,{args:U,name:D[Sn],store:N,after:yn,onError:an});let Y;try{Y=I.apply(this&&this.$id===n?this:N,U)}catch(V){throw en(W,V),V}return Y instanceof Promise?Y.then(V=>(en($,V),V)).catch(V=>(en(W,V),Promise.reject(V))):(en($,Y),Y)};return D[Yn]=!0,D[Sn]=k,D},M={_p:s,$id:n,$onAction:$n.bind(null,p),$patch:P,$reset:_,$subscribe(I,k={}){const D=$n(l,I,k.detached,()=>U()),U=a.run(()=>ye(()=>s.state.value[n],$=>{(k.flush==="sync"?g:u)&&I({storeId:n,type:dn.direct,events:d},$)},K({},i,k)));return D},$dispose:j},N=be(M);s._s.set(n,N);const L=(s._a&&s._a.runWithContext||et)(()=>s._e.run(()=>(a=fe()).run(()=>e({action:S}))));for(const I in L){const k=L[I];if(gn(k)&&!ot(k)||Dn(k))r||(b&&st(k)&&(gn(k)?k.value=b[I]:Bn(k,b[I])),s.state.value[n][I]=k);else if(typeof k=="function"){const D=S(k,I);L[I]=D,m.actions[I]=k}}return K(N,L),K(ve(N),L),Object.defineProperty(N,"$state",{get:()=>s.state.value[n],set:I=>{P(k=>{K(k,I)})}}),s._p.forEach(I=>{K(N,a.run(()=>I({store:N,app:s._a,pinia:s,options:m})))}),b&&r&&t.hydrate&&t.hydrate(N.$state,b),u=!0,g=!0,N}/*! #__NO_SIDE_EFFECTS__ */function po(n,e,t){let s,o;const r=typeof e=="function";typeof n=="string"?(s=n,o=r?t:e):(o=n,s=n.id);function a(m,i){const u=qe();return m=m||(u?Z(Pe,null):null),m&&bn(m),m=Re,m._s.has(s)||(r?Se(s,e,o,m):rt(s,o,m)),m._s.get(s)}return a.$id=s,a}function uo(n){{const e=ve(n),t={};for(const s in e){const o=e[s];o.effect?t[s]=F({get:()=>n[s],set(r){n[s]=r}}):(gn(o)||Dn(o))&&(t[s]=Fe(n,s))}return t}}const at="modulepreload",it=function(n,e){return new URL(n,e).href},Jn={},Kn=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let a=function(g){return Promise.all(g.map(l=>Promise.resolve(l).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const m=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=a(t.map(g=>{if(g=it(g,s),g in Jn)return;Jn[g]=!0;const l=g.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(!!s)for(let y=m.length-1;y>=0;y--){const P=m[y];if(P.href===g&&(!l||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${p}`))return;const b=document.createElement("link");if(b.rel=l?"stylesheet":at,l||(b.as="script"),b.crossOrigin="",b.href=g,u&&b.setAttribute("nonce",u),document.head.appendChild(b),l)return new Promise((y,P)=>{b.addEventListener("load",y),b.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${g}`)))})}))}function r(a){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=a,window.dispatchEvent(m),!m.defaultPrevented)throw a}return o.then(a=>{for(const m of a||[])m.status==="rejected"&&r(m.reason);return e().catch(r)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const tn=typeof document<"u";function Ae(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function lt(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ae(n.default)}const A=Object.assign;function An(n,e){const t={};for(const s in e){const o=e[s];t[s]=q(o)?o.map(n):n(o)}return t}const mn=()=>{},q=Array.isArray;function Xn(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}const Ie=/#/g,ct=/&/g,pt=/\//g,ut=/=/g,dt=/\?/g,_e=/\+/g,mt=/%5B/g,gt=/%5D/g,Ce=/%5E/g,ht=/%60/g,Ee=/%7B/g,ft=/%7C/g,Be=/%7D/g,vt=/%20/g;function On(n){return n==null?"":encodeURI(""+n).replace(ft,"|").replace(mt,"[").replace(gt,"]")}function bt(n){return On(n).replace(Ee,"{").replace(Be,"}").replace(Ce,"^")}function Tn(n){return On(n).replace(_e,"%2B").replace(vt,"+").replace(Ie,"%23").replace(ct,"%26").replace(ht,"`").replace(Ee,"{").replace(Be,"}").replace(Ce,"^")}function xt(n){return Tn(n).replace(ut,"%3D")}function yt(n){return On(n).replace(Ie,"%23").replace(dt,"%3F")}function jt(n){return yt(n).replace(pt,"%2F")}function hn(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const wt=/\/$/,Rt=n=>n.replace(wt,"");function In(n,e,t="/"){let s,o={},r="",a="";const m=e.indexOf("#");let i=e.indexOf("?");return i=m>=0&&i>m?-1:i,i>=0&&(s=e.slice(0,i),r=e.slice(i,m>0?m:e.length),o=n(r.slice(1))),m>=0&&(s=s||e.slice(0,m),a=e.slice(m,e.length)),s=At(s??e,t),{fullPath:s+r+a,path:s,query:o,hash:hn(a)}}function Pt(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qn(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function kt(n,e,t){const s=e.matched.length-1,o=t.matched.length-1;return s>-1&&s===o&&sn(e.matched[s],t.matched[o])&&Te(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function sn(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Te(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!St(n[t],e[t]))return!1;return!0}function St(n,e){return q(n)?Zn(n,e):q(e)?Zn(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Zn(n,e){return q(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function At(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=t.length-1,a,m;for(a=0;a<s.length;a++)if(m=s[a],m!==".")if(m==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(a).join("/")}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Nn=(function(n){return n.pop="pop",n.push="push",n})({}),_n=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function It(n){if(!n)if(tn){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Rt(n)}const _t=/^[^#]+#/;function Ct(n,e){return n.replace(_t,"#")+e}function Et(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const xn=()=>({left:window.scrollX,top:window.scrollY});function Bt(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;e=Et(o,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ne(n,e){return(history.state?history.state.position-e:-1)+n}const Ln=new Map;function Tt(n,e){Ln.set(n,e)}function Nt(n){const e=Ln.get(n);return Ln.delete(n),e}function Lt(n){return typeof n=="string"||n&&typeof n=="object"}function Ne(n){return typeof n=="string"||typeof n=="symbol"}let C=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Le=Symbol("");C.MATCHER_NOT_FOUND+"",C.NAVIGATION_GUARD_REDIRECT+"",C.NAVIGATION_ABORTED+"",C.NAVIGATION_CANCELLED+"",C.NAVIGATION_DUPLICATED+"";function on(n,e){return A(new Error,{type:n,[Le]:!0},e)}function G(n,e){return n instanceof Error&&Le in n&&(e==null||!!(n.type&e))}const Vt=["params","query","hash"];function Dt(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Vt)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function Ot(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<t.length;++s){const o=t[s].replace(_e," "),r=o.indexOf("="),a=hn(r<0?o:o.slice(0,r)),m=r<0?null:hn(o.slice(r+1));if(a in e){let i=e[a];q(i)||(i=e[a]=[i]),i.push(m)}else e[a]=m}return e}function ee(n){let e="";for(let t in n){const s=n[t];if(t=xt(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(q(s)?s.map(o=>o&&Tn(o)):[s&&Tn(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function Ht(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=q(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return e}const Mt=Symbol(""),te=Symbol(""),Hn=Symbol(""),Mn=Symbol(""),Vn=Symbol("");function pn(){let n=[];function e(s){return n.push(s),()=>{const o=n.indexOf(s);o>-1&&n.splice(o,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function X(n,e,t,s,o,r=a=>a()){const a=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((m,i)=>{const u=p=>{p===!1?i(on(C.NAVIGATION_ABORTED,{from:t,to:e})):p instanceof Error?i(p):Lt(p)?i(on(C.NAVIGATION_GUARD_REDIRECT,{from:e,to:p})):(a&&s.enterCallbacks[o]===a&&typeof p=="function"&&a.push(p),m())},g=r(()=>n.call(s&&s.instances[o],e,t,u));let l=Promise.resolve(g);n.length<3&&(l=l.then(u)),l.catch(p=>i(p))})}function Cn(n,e,t,s,o=r=>r()){const r=[];for(const a of n)for(const m in a.components){let i=a.components[m];if(!(e!=="beforeRouteEnter"&&!a.instances[m]))if(Ae(i)){const u=(i.__vccOpts||i)[e];u&&r.push(X(u,t,s,a,m,o))}else{let u=i();r.push(()=>u.then(g=>{if(!g)throw new Error(`Couldn't resolve component "${m}" at "${a.path}"`);const l=lt(g)?g.default:g;a.mods[m]=g,a.components[m]=l;const p=(l.__vccOpts||l)[e];return p&&X(p,t,s,a,m,o)()}))}}return r}function Ft(n,e){const t=[],s=[],o=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const m=e.matched[a];m&&(n.matched.find(u=>sn(u,m))?s.push(m):t.push(m));const i=n.matched[a];i&&(e.matched.find(u=>sn(u,i))||o.push(i))}return[t,s,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qt=()=>location.protocol+"//"+location.host;function Ve(n,e){const{pathname:t,search:s,hash:o}=e,r=n.indexOf("#");if(r>-1){let a=o.includes(n.slice(r))?n.slice(r).length:1,m=o.slice(a);return m[0]!=="/"&&(m="/"+m),Qn(m,"")}return Qn(t,n)+s+o}function zt(n,e,t,s){let o=[],r=[],a=null;const m=({state:p})=>{const d=Ve(n,location),b=t.value,y=e.value;let P=0;if(p){if(t.value=d,e.value=p,a&&a===b){a=null;return}P=y?p.position-y.position:0}else s(d);o.forEach(_=>{_(t.value,b,{delta:P,type:Nn.pop,direction:P?P>0?_n.forward:_n.back:_n.unknown})})};function i(){a=t.value}function u(p){o.push(p);const d=()=>{const b=o.indexOf(p);b>-1&&o.splice(b,1)};return r.push(d),d}function g(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(A({},p.state,{scroll:xn()}),"")}}function l(){for(const p of r)p();r=[],window.removeEventListener("popstate",m),window.removeEventListener("pagehide",g),document.removeEventListener("visibilitychange",g)}return window.addEventListener("popstate",m),window.addEventListener("pagehide",g),document.addEventListener("visibilitychange",g),{pauseListeners:i,listen:u,destroy:l}}function se(n,e,t,s=!1,o=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:o?xn():null}}function Ut(n){const{history:e,location:t}=window,s={value:Ve(n,t)},o={value:e.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(i,u,g){const l=n.indexOf("#"),p=l>-1?(t.host&&document.querySelector("base")?n:n.slice(l))+i:qt()+n+i;try{e[g?"replaceState":"pushState"](u,"",p),o.value=u}catch(d){console.error(d),t[g?"replace":"assign"](p)}}function a(i,u){r(i,A({},e.state,se(o.value.back,i,o.value.forward,!0),u,{position:o.value.position}),!0),s.value=i}function m(i,u){const g=A({},o.value,e.state,{forward:i,scroll:xn()});r(g.current,g,!0),r(i,A({},se(s.value,i,null),{position:g.position+1},u),!1),s.value=i}return{location:s,state:o,push:m,replace:a}}function Wt(n){n=It(n);const e=Ut(n),t=zt(n,e.state,e.location,e.replace);function s(r,a=!0){a||t.pauseListeners(),history.go(r)}const o=A({location:"",base:n,go:s,createHref:Ct.bind(null,n)},e,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function Gt(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Wt(n)}let Q=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var T=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(T||{});const $t={type:Q.Static,value:""},Yt=/[a-zA-Z0-9_]/;function Jt(n){if(!n)return[[]];if(n==="/")return[[$t]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${u}": ${d}`)}let t=T.Static,s=t;const o=[];let r;function a(){r&&o.push(r),r=[]}let m=0,i,u="",g="";function l(){u&&(t===T.Static?r.push({type:Q.Static,value:u}):t===T.Param||t===T.ParamRegExp||t===T.ParamRegExpEnd?(r.length>1&&(i==="*"||i==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Q.Param,value:u,regexp:g,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=i}for(;m<n.length;){if(i=n[m++],i==="\\"&&t!==T.ParamRegExp){s=t,t=T.EscapeNext;continue}switch(t){case T.Static:i==="/"?(u&&l(),a()):i===":"?(l(),t=T.Param):p();break;case T.EscapeNext:p(),t=s;break;case T.Param:i==="("?t=T.ParamRegExp:Yt.test(i)?p():(l(),t=T.Static,i!=="*"&&i!=="?"&&i!=="+"&&m--);break;case T.ParamRegExp:i===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+i:t=T.ParamRegExpEnd:g+=i;break;case T.ParamRegExpEnd:l(),t=T.Static,i!=="*"&&i!=="?"&&i!=="+"&&m--,g="";break;default:e("Unknown state");break}}return t===T.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),l(),a(),o}const oe="[^/]+?",Kt={sensitive:!1,strict:!1,start:!0,end:!0};var O=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(O||{});const Xt=/[.+*?^${}()[\]/\\]/g;function Qt(n,e){const t=A({},Kt,e),s=[];let o=t.start?"^":"";const r=[];for(const u of n){const g=u.length?[]:[O.Root];t.strict&&!u.length&&(o+="/");for(let l=0;l<u.length;l++){const p=u[l];let d=O.Segment+(t.sensitive?O.BonusCaseSensitive:0);if(p.type===Q.Static)l||(o+="/"),o+=p.value.replace(Xt,"\\$&"),d+=O.Static;else if(p.type===Q.Param){const{value:b,repeatable:y,optional:P,regexp:_}=p;r.push({name:b,repeatable:y,optional:P});const j=_||oe;if(j!==oe){d+=O.BonusCustomRegExp;try{`${j}`}catch(M){throw new Error(`Invalid custom RegExp for param "${b}" (${j}): `+M.message)}}let S=y?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;l||(S=P&&u.length<2?`(?:/${S})`:"/"+S),P&&(S+="?"),o+=S,d+=O.Dynamic,P&&(d+=O.BonusOptional),y&&(d+=O.BonusRepeatable),j===".*"&&(d+=O.BonusWildcard)}g.push(d)}s.push(g)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=O.BonusStrict}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,t.sensitive?"":"i");function m(u){const g=u.match(a),l={};if(!g)return null;for(let p=1;p<g.length;p++){const d=g[p]||"",b=r[p-1];l[b.name]=d&&b.repeatable?d.split("/"):d}return l}function i(u){let g="",l=!1;for(const p of n){(!l||!g.endsWith("/"))&&(g+="/"),l=!1;for(const d of p)if(d.type===Q.Static)g+=d.value;else if(d.type===Q.Param){const{value:b,repeatable:y,optional:P}=d,_=b in u?u[b]:"";if(q(_)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const j=q(_)?_.join("/"):_;if(!j)if(P)p.length<2&&(g.endsWith("/")?g=g.slice(0,-1):l=!0);else throw new Error(`Missing required param "${b}"`);g+=j}}return g||"/"}return{re:a,score:s,keys:r,parse:m,stringify:i}}function Zt(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===O.Static+O.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===O.Static+O.Segment?1:-1:0}function De(n,e){let t=0;const s=n.score,o=e.score;for(;t<s.length&&t<o.length;){const r=Zt(s[t],o[t]);if(r)return r;t++}if(Math.abs(o.length-s.length)===1){if(re(s))return 1;if(re(o))return-1}return o.length-s.length}function re(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const ns={strict:!1,end:!0,sensitive:!1};function es(n,e,t){const s=Qt(Jt(n.path),t),o=A(s,{record:n,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function ts(n,e){const t=[],s=new Map;e=Xn(ns,e);function o(l){return s.get(l)}function r(l,p,d){const b=!d,y=ie(l);y.aliasOf=d&&d.record;const P=Xn(e,l),_=[y];if("alias"in l){const M=typeof l.alias=="string"?[l.alias]:l.alias;for(const N of M)_.push(ie(A({},y,{components:d?d.record.components:y.components,path:N,aliasOf:d?d.record:y})))}let j,S;for(const M of _){const{path:N}=M;if(p&&N[0]!=="/"){const z=p.record.path,L=z[z.length-1]==="/"?"":"/";M.path=p.record.path+(N&&L+N)}if(j=es(M,p,P),d?d.alias.push(j):(S=S||j,S!==j&&S.alias.push(j),b&&l.name&&!le(j)&&a(l.name)),Oe(j)&&i(j),y.children){const z=y.children;for(let L=0;L<z.length;L++)r(z[L],j,d&&d.children[L])}d=d||j}return S?()=>{a(S)}:mn}function a(l){if(Ne(l)){const p=s.get(l);p&&(s.delete(l),t.splice(t.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=t.indexOf(l);p>-1&&(t.splice(p,1),l.record.name&&s.delete(l.record.name),l.children.forEach(a),l.alias.forEach(a))}}function m(){return t}function i(l){const p=rs(l,t);t.splice(p,0,l),l.record.name&&!le(l)&&s.set(l.record.name,l)}function u(l,p){let d,b={},y,P;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw on(C.MATCHER_NOT_FOUND,{location:l});P=d.record.name,b=A(ae(p.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),l.params&&ae(l.params,d.keys.map(S=>S.name))),y=d.stringify(b)}else if(l.path!=null)y=l.path,d=t.find(S=>S.re.test(y)),d&&(b=d.parse(y),P=d.record.name);else{if(d=p.name?s.get(p.name):t.find(S=>S.re.test(p.path)),!d)throw on(C.MATCHER_NOT_FOUND,{location:l,currentLocation:p});P=d.record.name,b=A({},p.params,l.params),y=d.stringify(b)}const _=[];let j=d;for(;j;)_.unshift(j.record),j=j.parent;return{name:P,path:y,params:b,matched:_,meta:os(_)}}n.forEach(l=>r(l));function g(){t.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:a,clearRoutes:g,getRoutes:m,getRecordMatcher:o}}function ae(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function ie(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ss(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ss(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function le(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function os(n){return n.reduce((e,t)=>A(e,t.meta),{})}function rs(n,e){let t=0,s=e.length;for(;t!==s;){const r=t+s>>1;De(n,e[r])<0?s=r:t=r+1}const o=as(n);return o&&(s=e.lastIndexOf(o,s-1)),s}function as(n){let e=n;for(;e=e.parent;)if(Oe(e)&&De(n,e)===0)return e}function Oe({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ce(n){const e=Z(Hn),t=Z(Mn),s=F(()=>{const i=un(n.to);return e.resolve(i)}),o=F(()=>{const{matched:i}=s.value,{length:u}=i,g=i[u-1],l=t.matched;if(!g||!l.length)return-1;const p=l.findIndex(sn.bind(null,g));if(p>-1)return p;const d=pe(i[u-2]);return u>1&&pe(g)===d&&l[l.length-1].path!==d?l.findIndex(sn.bind(null,i[u-2])):p}),r=F(()=>o.value>-1&&us(t.params,s.value.params)),a=F(()=>o.value>-1&&o.value===t.matched.length-1&&Te(t.params,s.value.params));function m(i={}){if(ps(i)){const u=e[un(n.replace)?"replace":"push"](un(n.to)).catch(mn);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:F(()=>s.value.href),isActive:r,isExactActive:a,navigate:m}}function is(n){return n.length===1?n[0]:n}const ls=je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ce,setup(n,{slots:e}){const t=be(ce(n)),{options:s}=Z(Hn),o=F(()=>({[ue(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ue(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&is(e.default(t));return n.custom?r:we("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},r)}}}),cs=ls;function ps(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function us(n,e){for(const t in e){const s=e[t],o=n[t];if(typeof s=="string"){if(s!==o)return!1}else if(!q(o)||o.length!==s.length||s.some((r,a)=>r.valueOf()!==o[a].valueOf()))return!1}return!0}function pe(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ue=(n,e,t)=>n??e??t,ds=je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Z(Vn),o=F(()=>n.route||s.value),r=Z(te,0),a=F(()=>{let u=un(r);const{matched:g}=o.value;let l;for(;(l=g[u])&&!l.components;)u++;return u}),m=F(()=>o.value.matched[a.value]);kn(te,F(()=>a.value+1)),kn(Mt,m),kn(Vn,o);const i=ge();return ye(()=>[i.value,m.value,n.name],([u,g,l],[p,d,b])=>{g&&(g.instances[l]=u,d&&d!==g&&u&&u===p&&(g.leaveGuards.size||(g.leaveGuards=d.leaveGuards),g.updateGuards.size||(g.updateGuards=d.updateGuards))),u&&g&&(!d||!sn(g,d)||!p)&&(g.enterCallbacks[l]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=o.value,g=n.name,l=m.value,p=l&&l.components[g];if(!p)return de(t.default,{Component:p,route:u});const d=l.props[g],b=d?d===!0?u.params:typeof d=="function"?d(u):d:null,P=we(p,A({},b,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[g]=null)},ref:i}));return de(t.default,{Component:P,route:u})||P}}});function de(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ms=ds;function gs(n){const e=ts(n.routes,n),t=n.parseQuery||Ot,s=n.stringifyQuery||ee,o=n.history,r=pn(),a=pn(),m=pn(),i=$e(J);let u=J;tn&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=An.bind(null,c=>""+c),l=An.bind(null,jt),p=An.bind(null,hn);function d(c,f){let h,v;return Ne(c)?(h=e.getRecordMatcher(c),v=f):v=c,e.addRoute(v,h)}function b(c){const f=e.getRecordMatcher(c);f&&e.removeRoute(f)}function y(){return e.getRoutes().map(c=>c.record)}function P(c){return!!e.getRecordMatcher(c)}function _(c,f){if(f=A({},f||i.value),typeof c=="string"){const x=In(t,c,f.path),B=e.resolve({path:x.path},f),cn=o.createHref(x.fullPath);return A(x,B,{params:p(B.params),hash:hn(x.hash),redirectedFrom:void 0,href:cn})}let h;if(c.path!=null)h=A({},c,{path:In(t,c.path,f.path).path});else{const x=A({},c.params);for(const B in x)x[B]==null&&delete x[B];h=A({},c,{params:l(x)}),f.params=l(f.params)}const v=e.resolve(h,f),R=c.hash||"";v.params=g(p(v.params));const E=Pt(s,A({},c,{hash:bt(R),path:v.path})),w=o.createHref(E);return A({fullPath:E,hash:R,query:s===ee?Ht(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function j(c){return typeof c=="string"?In(t,c,i.value.path):A({},c)}function S(c,f){if(u!==c)return on(C.NAVIGATION_CANCELLED,{from:f,to:c})}function M(c){return L(c)}function N(c){return M(A(j(c),{replace:!0}))}function z(c,f){const h=c.matched[c.matched.length-1];if(h&&h.redirect){const{redirect:v}=h;let R=typeof v=="function"?v(c,f):v;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=j(R):{path:R},R.params={}),A({query:c.query,hash:c.hash,params:R.path!=null?{}:c.params},R)}}function L(c,f){const h=u=_(c),v=i.value,R=c.state,E=c.force,w=c.replace===!0,x=z(h,v);if(x)return L(A(j(x),{state:typeof x=="object"?A({},R,x.state):R,force:E,replace:w}),f||h);const B=h;B.redirectedFrom=f;let cn;return!E&&kt(s,v,h)&&(cn=on(C.NAVIGATION_DUPLICATED,{to:B,from:v}),zn(v,v,!0,!1)),(cn?Promise.resolve(cn):D(B,v)).catch(H=>G(H)?G(H,C.NAVIGATION_GUARD_REDIRECT)?H:wn(H):jn(H,B,v)).then(H=>{if(H){if(G(H,C.NAVIGATION_GUARD_REDIRECT))return L(A({replace:w},j(H.to),{state:typeof H.to=="object"?A({},R,H.to.state):R,force:E}),f||B)}else H=$(B,v,!0,w,R);return U(B,v,H),H})}function I(c,f){const h=S(c,f);return h?Promise.reject(h):Promise.resolve()}function k(c){const f=fn.values().next().value;return f&&typeof f.runWithContext=="function"?f.runWithContext(c):c()}function D(c,f){let h;const[v,R,E]=Ft(c,f);h=Cn(v.reverse(),"beforeRouteLeave",c,f);for(const x of v)x.leaveGuards.forEach(B=>{h.push(X(B,c,f))});const w=I.bind(null,c,f);return h.push(w),nn(h).then(()=>{h=[];for(const x of r.list())h.push(X(x,c,f));return h.push(w),nn(h)}).then(()=>{h=Cn(R,"beforeRouteUpdate",c,f);for(const x of R)x.updateGuards.forEach(B=>{h.push(X(B,c,f))});return h.push(w),nn(h)}).then(()=>{h=[];for(const x of E)if(x.beforeEnter)if(q(x.beforeEnter))for(const B of x.beforeEnter)h.push(X(B,c,f));else h.push(X(x.beforeEnter,c,f));return h.push(w),nn(h)}).then(()=>(c.matched.forEach(x=>x.enterCallbacks={}),h=Cn(E,"beforeRouteEnter",c,f,k),h.push(w),nn(h))).then(()=>{h=[];for(const x of a.list())h.push(X(x,c,f));return h.push(w),nn(h)}).catch(x=>G(x,C.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function U(c,f,h){m.list().forEach(v=>k(()=>v(c,f,h)))}function $(c,f,h,v,R){const E=S(c,f);if(E)return E;const w=f===J,x=tn?history.state:{};h&&(v||w?o.replace(c.fullPath,A({scroll:w&&x&&x.scroll},R)):o.push(c.fullPath,R)),i.value=c,zn(c,f,h,w),wn()}let W;function yn(){W||(W=o.listen((c,f,h)=>{if(!ln.listening)return;const v=_(c),R=z(v,ln.currentRoute.value);if(R){L(A(R,{replace:!0,force:!0}),v).catch(mn);return}u=v;const E=i.value;tn&&Tt(ne(E.fullPath,h.delta),xn()),D(v,E).catch(w=>G(w,C.NAVIGATION_ABORTED|C.NAVIGATION_CANCELLED)?w:G(w,C.NAVIGATION_GUARD_REDIRECT)?(L(A(j(w.to),{force:!0}),v).then(x=>{G(x,C.NAVIGATION_ABORTED|C.NAVIGATION_DUPLICATED)&&!h.delta&&h.type===Nn.pop&&o.go(-1,!1)}).catch(mn),Promise.reject()):(h.delta&&o.go(-h.delta,!1),jn(w,v,E))).then(w=>{w=w||$(v,E,!1),w&&(h.delta&&!G(w,C.NAVIGATION_CANCELLED)?o.go(-h.delta,!1):h.type===Nn.pop&&G(w,C.NAVIGATION_ABORTED|C.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),U(v,E,w)}).catch(mn)}))}let an=pn(),Y=pn(),V;function jn(c,f,h){wn(c);const v=Y.list();return v.length?v.forEach(R=>R(c,f,h)):console.error(c),Promise.reject(c)}function Me(){return V&&i.value!==J?Promise.resolve():new Promise((c,f)=>{an.add([c,f])})}function wn(c){return V||(V=!c,yn(),an.list().forEach(([f,h])=>c?h(c):f()),an.reset()),c}function zn(c,f,h,v){const{scrollBehavior:R}=n;if(!tn||!R)return Promise.resolve();const E=!h&&Nt(ne(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return xe().then(()=>R(c,f,E)).then(w=>w&&Bt(w)).catch(w=>jn(w,c,f))}const Rn=c=>o.go(c);let Pn;const fn=new Set,ln={currentRoute:i,listening:!0,addRoute:d,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:y,resolve:_,options:n,push:M,replace:N,go:Rn,back:()=>Rn(-1),forward:()=>Rn(1),beforeEach:r.add,beforeResolve:a.add,afterEach:m.add,onError:Y.add,isReady:Me,install(c){c.component("RouterLink",cs),c.component("RouterView",ms),c.config.globalProperties.$router=ln,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>un(i)}),tn&&!Pn&&i.value===J&&(Pn=!0,M(o.location).catch(v=>{}));const f={};for(const v in J)Object.defineProperty(f,v,{get:()=>i.value[v],enumerable:!0});c.provide(Hn,ln),c.provide(Mn,Ge(f)),c.provide(Vn,i);const h=c.unmount;fn.add(c),c.unmount=function(){fn.delete(c),fn.size<1&&(u=J,W&&W(),W=null,i.value=J,Pn=!1,V=!1),h()}}};function nn(c){return c.reduce((f,h)=>f.then(()=>k(h)),Promise.resolve())}return ln}function hs(n){return Z(Mn)}const fs=[{path:"/",name:"home",component:()=>Kn(()=>import("./HomeView-B_rgftre.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),meta:{transition:"page"}},{path:"/article/:slug",name:"article",component:()=>Kn(()=>import("./ArticleView-jskXuyJs.js"),__vite__mapDeps([7,1,2,3,4,5,8]),import.meta.url),props:!0,meta:{transition:"page"}},{path:"/tag/:name?",name:"tag",redirect:n=>({path:"/",query:{section:"tags",tag:n.params.name}})}],He=gs({history:Gt(),routes:fs,scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,behavior:"smooth"}:{top:0,behavior:"smooth"})}}),vs={__name:"App",setup(n){return hs(),(e,t)=>{const s=Ye("router-view");return Wn(),Un(s,null,{default:Gn(({Component:o,route:r})=>[Je(Ke,{name:r.meta.transition||"page",mode:"out-in"},{default:Gn(()=>[(Wn(),Un(Xe(o),{key:r.path}))]),_:2},1032,["name"])]),_:1})}}},bs="fishblog-db",xs=1,rn="analytics";let vn=null;function Fn(){return new Promise((n,e)=>{if(vn){n(vn);return}const t=indexedDB.open(bs,xs);t.onupgradeneeded=()=>{const s=t.result;s.objectStoreNames.contains(rn)||s.createObjectStore(rn,{keyPath:"slug"})},t.onsuccess=()=>{vn=t.result,n(vn)},t.onerror=()=>e(t.error)})}async function ys(){await Fn()}async function mo(n){const e=await Fn();return new Promise((t,s)=>{const a=e.transaction(rn,"readonly").objectStore(rn).get(n);a.onsuccess=()=>t(a.result||null),a.onerror=()=>s(a.error)})}async function go(n){const e=await Fn();return new Promise((t,s)=>{const o=e.transaction(rn,"readwrite");o.objectStore(rn).put({slug:n.slug,viewCount:n.viewCount||0,likeCount:n.likeCount||0,liked:!!n.liked}),o.oncomplete=()=>t(),o.onerror=()=>s(o.error)})}const js=`---
title: ASP.NET（1.WebForms） 基本使用
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/download.5h31bl1cplk0.jpg
tags:
  - 后端
  - .NET
categories: 后端
abbrlink: b2829973
date: 2021-05-20 09:00:22
---

## 简介

ASP.NET 是微软公司推出的 基于 .NET Framework 的web开发平台，是一门强大的服务端技术，能够快速构建web应用程序，极大的提高了开发效率





## 创建项目

打开 Visual Studio，创建 ASP.NET Web应用程序，并选择创建空项目

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo1.r71kgb4iob4.jpg)



得到以下目录

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo2.rhrxve9pkc0.jpg)

右键项目，点击添加web窗体

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo3.3bbeqy9c7z80.jpg)

此时，就得到了我们的窗体对应的文件, index.aspx文件是我们的客户端页面文件，可以在里面编写html代码和chsarp代码来构建页面；index.aspx.cs 是服务端文件，可以在这里处理客户端的事件数据；index.aspx.designer.cs 是该窗体的配置文件，一般不对此文件进行修改。

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo4.binbntzcazk.jpg)



若启动时，遇到此报错信息，在项目根目录下的Web.config 中，删除httpRuntime 代码即可

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo15.58q15swx1zo0.jpg)



## 基本控件

#### 非空验证

在 index.aspx 文件中，打开左侧工具栏 ，搜索 RequiredFieldValidator 控件，并双击添加进页面

点击它，并在右下角属性面板中进行一些设置

ControlToValidate: 此非空验证控件与哪个控件进行绑定，值为被绑定控件的 ID值

ErrorMessage: 当非空验证绑定的控件值为空时，激活控件，并显示它的 ErrorMessage

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo6.2y2g79gsfhs0.jpg)

#### 验证是否一致

搜索 CompareValidator 并添加

使用 ControlToValidate属性 和 ControlToCompare属 性 绑定两个控件 值就为控件的ID

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo7.2adr2aoma5z4.jpg)

#### 正则表达式验证控件

搜索 RegularExpressionValidator 并添加

ControlToValidate: 需要验证控件的id值

ValidationExpression: 用于验证的正则表达式，可以使用自带的，也可以自定义

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo8.5jxftb2xu2w0.jpg)

#### 自定义验证控件

搜索并添加 CustomValidator

ControlToValidate: 需要验证控件的id值

点击事件，并双击 ServerValidate 生成函数处理验证内容

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo9.1b1auo9e7gdc.jpg)

\`\`\`csharp
protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args)
{
    //使用args.Value 接收待验证的值
    //使用args.IsValid 决定是否通过验证
    args.IsValid = args.Value.StartsWith("aaa");
}
\`\`\`



## 高级控件

#### 母版页与内容页

右键项目，添加 Web Forms 母版页

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo10.j6g1g6zjyc0.jpg)

 此时会生成  .Master 文件，其中的 ContentPlaceHolder 就是模板占位符，母窗体会自动寻找下属的子窗体，并将对应的 ContentPlaceHolder值的 子模板填入该位置

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo11.557pb0a56000.jpg)

 右键项目，添加子模板页

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo12.4ifp0cfz2pw0.jpg)

选择它的 母版页

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo13.1gozoyrmyib.jpg)

可以看到，子模版页的 ContentPlaceHolder 与 母版页 ContentPlaceHolder 相对应，子版页就可以插到母版页中

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo14.14883043hjng.jpg)

注意：在子版页中，只能在 \`\`\`<asp:Content>  </asp:Content>\`\`\` 标签中书写内容



#### 文件上传控件

搜索并添加 FileUpload，并在下方添加一个按钮，双击击该按钮进入点击事件，来处理上传的文件

\`\`\`csharp
 protected void Button1_Click(object sender, EventArgs e)
 {
     // 判断是否含有文件
     if (FileUpload1.HasFile)
     {
         // 获取文件名
         string fileName = FileUpload1.FileName;

         // 获取文件的后缀名  使用Path 对象 需要在顶部导入 using System.IO;
         string fileFix = Path.GetExtension(fileName).ToLower();

         if (fileFix == ".png" || fileFix == ".jpg")
         {
             // 将文件保存至 项目文件夹下的uploadpic 文件夹中
             this.FileUpload1.SaveAs(Server.MapPath(".\\\\uploadpic\\\\" + fileName));

             Response.Write("<script>alert('文件上传成功')<\/script>");
         }
         else
         {
             Response.Write("<script>alert('文件必须是图片类型')<\/script>");
         }

     }
     else
     {
         Response.Write("<script>alert('未选择文件')<\/script>");
     }
 }
\`\`\`



#### 文件下载

(待下载的文件必须是 zip 压缩包格式)

1.  使用a标签直接下载，其路径为服务端文件路径

\`\`\`html
<a href="downloadFile/demo.zip">
    点我下载
</a>
\`\`\`

2.  点击按钮，生成点击事件下载

   \`\`\`csharp
   protected void Button2_Click(object sender, EventArgs e)
   {
       // 固定格式
       Response.ContentType = "application/x-zip-compressed";
   
       Response.AddHeader("Content-Disposition", "attachment:filename=demo.zip");
   
       // 将虚拟路径转化成实际物理路径
       string fileName = Server.MapPath("~/demo.zip");
   
       // 将文件 回传给浏览器
       Response.TransmitFile(fileName);
   }
   \`\`\`





## 系统对象

#### page 对象

IsPostBack 判断是否回发 页面是否是第一次加载

\`\`\`csharp
protected void Page_Load(object sender, EventArgs e)
{
    // 页面第一次加载
    if (!IsPostBack)
    {

    }
}
\`\`\`



#### Respons 对象

\`\`\`csharp
protected void Page_Load(object sender, EventArgs e)
{
    // 页面第一次加载
    if (!IsPostBack)
    {
        //向客户端写入字符串
		Response.Write("<script>alert('未选择文件')<\/script>");
        
        // 页面重定向
        Response.Redirect("~/index.aspx");
    }
}
\`\`\`



#### Request 对象

\`\`\`html
<div>
    <!-- 使用get 方式传参 -->
    <a href="show.aspx?id=1">点击跳转</a>
</div>
\`\`\`

\`\`\`csharp
protected void Page_Load(object sender, EventArgs e)
{
    // 页面第一次加载
    if (!IsPostBack)
    {
        // 通过request 对象拿到参数
        string id = Request.QueryString["id"];
    }
}
\`\`\`









\`\`\`html
<form id="form1" action="index.aspx" method="post">
    <input type="text" name="userId">
    <input type="submit" value="提交">
</form>
\`\`\`

\`\`\`csharp
protected void Page_Load(object sender, EventArgs e)
{
    // 页面第一次加载
    if (!IsPostBack)
    {
        // 通过request 对象拿到参数,参数名为 input 的name值
        string id = Request.Form["userId"];
    }
}
\`\`\`







## 页面状态管理

#### cookie

\`\`\`csharp
protected void Button2_Click(object sender, EventArgs e)
{
    // 创建cookie 对象 ，第一个参数是 cookie名，第二个是它的值
    HttpCookie cookie = new HttpCookie("userName",this.TextBoxName.Text);
    
    //指定cookie 的生命周期 (这里是保存三天)
    cookie.Expires = DateTime.Now.AddDays(3);
    
    // 将对象放置浏览器
    Response.Cookies.Add(cookie)；
    
    
}
\`\`\`



在页面中 可以根据cookie值是否存在 而渲染不同的页面 其csharp代码 需用<% %>包起

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo16.23w3hb6j7mg0.jpg)



#### session 

\`\`\`csharp
protected void Button2_Click(object sender, EventArgs e)
{
    // 将值存入Session
    Session["userName"] = this.TextBoxName.Text;
    
    Response.Redirect("~/index.aspx");
    
}
\`\`\`

\`\`\`csharp
protected void Page_Load(object sender, EventArgs e)
{
    
    if (!string.IsNullOrEmpty(Session["userName"].ToString()))
    {
        Response.Write("当前用户为"+Session["userName"].ToString());
    }
}
\`\`\`





## 三层架构

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo17.6bcn0n8g1vw0.jpg)

controller 层作为与页面相连的一层，用于接收展示数据，再调用service层对数据进行封装处理，再由service层调用dao层，将数据入库

dao 层作为与数据库连接层，查询到数据后，将数据返回给service，service层将数据进行封装处理之后，返给controller，controller层将数据在页面上进行展示



1. 首先创建model 实体类，类中的字段就是数据库中的字段

   \`\`\`csharp
   public class ProductModel
   {
       int productId;
       string productName;
       decimal price;
       string detail;
   
       public int ProductId { get => productId; set => productId = value; }
       public string ProductName { get => productName; set => productName = value; }
       public decimal Price { get => price; set => price = value; }
       public string Detail { get => detail; set => detail = value; }
   
       public ProductModel(int productId, string productName, decimal price, string detail)
       {
           this.productId = productId;
           this.productName = productName;
           this.price = price;
           this.detail = detail;
       }
   
       public ProductModel()
       {
       }
   }
   \`\`\`

   

2. 创建dao 层 作为数据库连接层，我这里用的是 DBhlper

   \`\`\`csharp
   using System;
   using System.Collections.Generic;
   using System.Linq;
   using System.Text;
   using System.Threading.Tasks;
   using System.Data;
   using System.Data.SqlClient;
   
   namespace Dao
   {
       public static class DBhelper
       {
   
           public static SqlConnection getConn()
           {
               string sql = "server=.;uid=sa;pwd=123456;database=testDB";
               SqlConnection conn = new SqlConnection(sql);
               conn.Open();
               return conn;
           }
   
           public static int exquect(string sql)
           {
               return new SqlCommand(sql, getConn()).ExecuteNonQuery();
           }
   
           public static SqlDataReader getReader(string sql)
           {
               return new SqlCommand(sql, getConn()).ExecuteReader();
           }
   
           public static DataSet getSet(string sql)
           {
               DataSet ds = new DataSet();
               new SqlDataAdapter(sql, getConn()).Fill(ds);
               return ds;
           }
   
       }
   }
   
   \`\`\`

   

   

3.  创建数据逻辑层 service 用于处理数据的封装与逻辑，并将结果retrue出去

   \`\`\`csharp
   using System;
   using System.Collections.Generic;
   using System.Linq;
   using System.Text;
   using System.Threading.Tasks;
   using System.Data;
   using System.Data.SqlClient;
   using Dao;
   using Models;
   
   namespace Service
   {
       public static class ProductService
       {
           public static List<ProductModel> getAllProduct()
           {
               string sql = "select * from Product";
               SqlDataReader reader = DBhelper.getReader(sql);
               List<ProductModel> list = new List<ProductModel>();
               while (reader.Read())
               {
                   ProductModel product = new ProductModel();
                   product.ProductId = reader.GetInt32(0);
                   product.ProductName = reader.GetString(1);
                   product.Price = reader.GetDecimal(2);
                   product.Detail = reader.GetString(3);
                   list.Add(product);
               }
               return list;
           } 
           
           
       }
   } 
   \`\`\`

4.  创建 controller 层，作为页面交互层，并于service通信

   \`\`\`csharp
   using System;
   using System.Collections.Generic;
   using System.Linq;
   using System.Text;
   using System.Threading.Tasks;
   using Service;
   using Models;
   
   
   namespace Controller
   {
       public static class ProductController
       {
   
           public static List<ProductModel> getAllProduct()
           {
               return ProductService.getAllProduct();
           }
           
       }
   }
   \`\`\`

5.  在页面中，通过调用controller层，可以进行对数据进行操作 

   \`\`\`csharp
   using System;
   using System.Collections.Generic;
   using System.Linq;
   using System.Web;
   using System.Web.UI;
   using System.Web.UI.WebControls;
   using Controller;
   using Models;
   
   namespace Test
   {
       public partial class index : System.Web.UI.Page
       {
   
           public static List<ProductModel> showList;
   
           protected void getAllData()
           {
               showList = ProductController.getAllProduct();
               gridview1.DataSource = showList;
               gridview1.DataBind();
           }   
           
       }
   }
   \`\`\`

   



## 数据绑定

## DropDownList 控件

在三层架构中拿到数据

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo18.5e4p1hj8ma80.jpg)



对控件进行赋值

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo19.696y8v9u5cg0.jpg)



## DataList 控件

添加进界面后，点击右上角小箭头设置模板

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo20.3e8o1cgsjng0.jpg)



绑定数据

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo21.3sqmii9yxoe0.jpg)



通过表示符 从绑定的数据源里 获取对应属性的值

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo22.4pdednm220w0.jpg)



## Repeater 控件

从服务端获取数据 并绑定Repeater控件

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo23.6h5dsgs8wmo0.jpg)



使用Eval方法 从绑定的数据源中 获取对应的属性值 赋值 给控件属性

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo24.2q0h1q8ohs60.jpg)



## GridView 控件

1.  显示数据

    从服务端 获取数据并绑定

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo25.oghbhsnf8ds.jpg)

   

   点击控件右上角箭头进行设置

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo26.35ghzq3wf3s0.jpg)

2. 删除

   添加删除按钮

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo27.15um3ciacw2k.jpg)



生成删除事件

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo29.1fk5sjd7jov4.jpg)

执行删除操作

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo30.7d5lx2n6aes0.jpg)

3.  编辑

   控件设置方法照上

   生成编辑方法,进入编辑界面

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo31.iu8hw26p14w.jpg)

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo32..5aomppfznuk0.jpg)

进入编辑界面后 还需生成更新数据方法

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo33.57dl604a8nw0.jpg)

首先绑定 key值 值为数据源里的属性

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo34.3nid1fjb6pi0.jpg)

再执行对应操作

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo35.7gb1f1l0w180.jpg)

取消编辑则生成 RowCancelingEdit方法

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo36.2879xn8diao0.jpg)





4.  分页

   设置允许分页 与分页大小

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo37.4y4vm0eyb4s0.jpg)

生成页数切换的方法

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo38.254p8cgbko4g.jpg)

将当前所选择页数 更换为所显示的页数

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo39.5twxj1jdgmc0.jpg)`,ws=`---
title: JS进阶
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageInterviewsJS/demo4.3jisv2eifwg0.webp
tags:
  - 前端
  - javaScript
categories: 前端
abbrlink: f02a6f6d
date: 2021-09-08 14:11:15
img:
---

# 内存泄漏与溢出

**内存泄漏**

内存泄漏是指 程序中已经分配了某块内存，但是由于种种原因没有被释放掉，这块内存一直占用着空间。

造成内存泄漏的常见原因有 闭包，未释放的全局变量等。当内存泄漏过多，就会造成可以使用的内存空间越来越小，当到达某一程度，剩余内存空间无法满足程序运行需要时，则会造成内存溢出。

**内存溢出**

内存溢出是指 剩余内存空间无法满足程序运行需要，而造成的崩溃等现象。

# 进程与线程

**进程**

程序的一次运行，它会独自占用一块内存空间，且不同应用的进程之间不会互相影响。

例如 chrome程序 这里开启了多个进程 ,且它的内存空间与其他应用是相互独立的![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageJsAdavan/demo1.5qz2z4bqv4g0.jpg)

**线程**

线程是进程内的一个独立执行单元，用于运行某项任务，是CPU的最小的调度单位。

如果一个进程里面有多个线程，那么这个程序又被称为多线程程序，反之称为单线程程序。

一个进程中至少要有一个运行的线程，主线程，它是进程启动后自动创建的。且应用程序必须允许在某个进程的某个线程上。

一个进程中的数据可以供其中的多个线程直接共享 ，且多个线程之间的数据不能直接共享。

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageJsAdavan/demo2.3uw0nl1h4ze0.jpg)

**多进程与多线程**

多进程指一个程序可以创建多个进程，而多线程指一个进程内有多个线程

多线程的优缺点：

1. 能够有效提升CPU的利用率

- 创建多线程会制造更多开销
- 线程之前切换开销
- 死锁和状态同步问题

单线程的优缺点：

1. 顺序编程简单易懂，程序按顺序执行

- 效率低

# 对象

对象 (object) 是js中的一种数据类型，准确的来说是引用类型，引用类型相比于基本类型有几个特征：

1.  引用类型的值是保存在堆内存(Heap)中的
2. 引用类型的值是按引用访问的
3. 引用类型的值是可变的
4. 引用类型的比较是引用的比较

**内容：**

对象的内容是由一些存储在特定命名位置的值组成的，我们称之为 属性。属性一般并不存在对象容器内部，存储在容器内部的是这些属性的名称，他们就像指针一样，指向这些值真正的存储位置，又被成为引用

**访问内容：**

访问对象中的属性有两种语法

\`\`\`javascript
var myObj = {
    a: 2
};
myobj.a; //2
myobj["a"]; //2
\`\`\`

第一种 通过 对象.属性名，通常被称为 属性访问

第二种 通过 对象["属性名"], 通常被称为 键访问

它们主要的区别在于 

- . 操作符 要求属性名必须满足表示符的命名规范
- [] 操作符则可以接受任意的UTF-8/Unicode 字符串作为属性名

在对象中，属性名永远都是字符串，如果你使用非字符串类型的值作为属性名，那么它首先会被转成一个字符串，即使是数字也不例外。

\`\`\`javascript
var myObj = {};
myObj[true] = "fish";
myObj[1] = "fishband"
myObj[myObj] = "cool"

myObj["true"]; //"fish"
myObj["1"]; //"fishband"
myObj["myObj"]; //"cool"
\`\`\`

**可计算属性(es6)：**

既然说到属性名是字符串类型，那么相应的 属性名也可以进行一些字符串计算

\`\`\`javascript
var handsomePerson = "aMan"
var myObj = {
    [handsomePerson + "Name"]: "fish",
    [handsomePerson + "Age"]: 18
}

myObj["aManName"]; //fish
myObj["aManAge"]; //18
\`\`\`

**属性描述符：**

在es5之前，js语言本身并没有提供可以直接检测属性特殊的方法，比如判断属性是否只读，但从es5之后，所有的属性都具备了属性的描述符。在使用 Object.defineProperty() 方法定义或修改属性时，可以设置属性的描述符

\`\`\`javascript
var myObj = {}
Object.defineProperty(myObj, "a", {
    value: 2,
    writable: false, // 是否可以修改属性的值
    configurable: true, // 是否可以配置修改 属性描述符
    enumerable: false // 是否可以删除
})
myObj.a = 3;
myObj.a; //2
delete myObj.a;
myObj.a //2
\`\`\`

**不变性：**

有时我们会希望属性或对象是不可改变的，在es5中可以通过很多方式实现。重要的一点是：所有的方法创建的都是浅不变性，也就是说，它们只会影响目标对象和它的直接属性。如果目标对象引用了其他对象，其他对象的内容不受影响，仍然是可变的。

1.  结合 writable: false 和 configurable: false 可以创建一个真正的常量属性（不可修改，重定义或删除）

   \`\`\`javascript
   var myObj = {}
   Object.defineProperty(myObj, "MY_LOVE_NUMBER", {
       value: 10,
       writable: false,
       configurable: false
   });
   \`\`\`

2.  如果你想禁止一个对象添加新属性并保留已有的属性，可以使用 Object.preventExtensions(...)

   \`\`\`javascript
   var myObj = {
       a: 2
   };
   Object.preventExtensions( myObj )
   myObj.b = 3;
   myObj.b; //undefined
   \`\`\`

3. 密封，Object.seal(...) 会创建一个 密封的对象，这个方法实际上会在一个现有对象上调用Object.preventExtensions(...)，并把现所有属性标记位 configurable: false，<font color=red>密封之后不能添加新属性也不能重新配置或删除现有属性,但是可以修改</font> 

   \`\`\`javascript
   var myObj = {
       a: 2
   };
   Object.seal( myObj )
   \`\`\`

4. 冻结， Object.freeze(..) 会创建一个冻结对象，这个方法实际上会在一个现有对象上调用 Object.seal(...),并把所有 属性标记位 writable: false，<font color=red>冻结之后不能添加新属性也不能重新配置或删除现有属性,也不可以修改</font> 

   这个方法是你可以应用在对象上的级别最高的不可变性，它会禁止对于对象本身及其任意直接属性的修改，同时可以使用此方法 对对象进行 深度冻结，首先在对象上调用 Object.freeze(...),然后遍历它引用的所有对象并在这些对象上调用 Object.freeze(...)

   \`\`\`javascript
   var myObj = {
       a: 2
   };
   Object.freeze( myObj )
   \`\`\`



`,Rs=`---
title: 'Linux(1,下载安装，远程管理与文件传输)'
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo.3a6xvhwdpto0.jpg
tags: 
  - 操作系统
  - Linux
categories: 操作系统
abbrlink: a2ca349f
date: 2021-05-09 15:50:56
img:
---



# Linux 是什么

Linux是一个操作系统，区别于常见的windows，它的优势在于

1. 更轻便简洁 所有操作均通过命令行形式进行，相比于Windows的图形化，Linux对系统资源的占用小 
2. 源码开源 代码开源意味着所有人都可以进行维护，相对于Windows的封闭式，Linux每一行代码都是经过无数人严格检验的，并且有全球所有的Linux开发者和自由软件社区提供支持，这保证了Linux极高的稳定性和安全性
3. 有很好的网络支持利[文件系统](http://www.so.com/s?q=文件系统&ie=utf-8&src=internal_wenda_recommend_textn)支持，Linux从诞生之日起就与Internet密不可分，支持各种标准的Internet[网络协议](http://www.so.com/s?q=网络协议&ie=utf-8&src=internal_wenda_recommend_textn)，其著名的Http/tcpip 协议就于Linux密不可分。在Linux中一切皆为文件，对Linux的操作实际上就是对文件的操作
4. 将所有的操作权交给了用户，强大的指令可以使用户对Linux做任何事，对于开发来说，这极大的提高了开发效率
5. 基于Linux特殊的系统结构，对嵌入式应用极其友好

# 为什么学习Linux

1.  学习计算机底层原理
2. 更友好的服务/软件运行环境
3. ~~为了高薪就业（确信）~~

# 常用发行版本

Linux是开源软件，所有人都可以订制独一无二的Linux系统，所有使用Linux内核的系统都可以叫Linux系统，

所以市面上就涌现出了许许多多Linux发行版本 常见的有[RedHat（收费）](https://www.redhat.com/zh/technologies/linux-platforms/enterprise-linux)，[CentOS（常用）](https://wiki.centos.org/zh/Download)，[红旗Linux（国产）](https://www.chinaredflag.cn/product/newproduct?ulink=&tolink=redflag-web/DT10)等等



# 使用[VMware](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html) 安装Linux

VMware是一个虚拟机软件，它可以使你不需要分区或重新开机就可以在一台PC上使用多个操作系统，虚拟机系统和本机系统进行网络通信，且可以随时设定虚拟机的硬件环境

[下载](https://www.centos.org/download/)并使用VM创建虚拟机



启动虚拟机后，在显示VM按下 F2 进入Bios界面 设置通过光盘启动，如果不设置则会自动使用硬盘启动，但是由于刚创建的虚拟机是空的，计算机会找不到系统，所以需要设置光盘启动 



![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo1.7f859c7jc6o0.jpg)

切换至Boot选项卡，可以看到CD-ROM Drive 光盘启动在下面，选中它，然后使用 + 将它移到首选项



![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo2.1rah10xlc8sg.jpg)

修改完成后，选择不保存修改并退出即可，下次启动时，虚拟机会自动调整启动顺序，若修改后还是使用硬盘进入，则检查硬件设置界面是否有且只有一个Centos的光盘

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo3.6k319ab64rc0.jpg)







以我的 Centos8 为例，正确设置启动顺序后，就会进入 设置界面，选择第一项回车，vm就会加载系统

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo4.1mmzhit7683k.jpg)

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo5.1i1dalheroao.jpg)



等待加载完成，进入图形化设置界面

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo6.50trlll2az40.jpg)

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo8.6toxsxin6k00.jpg)

软件选择 服务器

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo7.jw1nva8bmkg.jpg)



安装完毕后就进入了系统界面，然后输入账号密码，注意：密码输进去之后不会显示出来，输完直接回车即可

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo9.5036j2pmwjk0.jpg)





# 远程登录管理工具

## 既然是远程登录管理，那就必须要用到网络相关配置

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo11.fniwzivif0w.jpg)

桥接模式：使用的是真实独立网卡，能跟一台真实的计算机一样，但是会占用ip地址，在某些场景会造成ip冲突，而NAT模式和Host模式不会

NAT模式：使用的是VMnet8网卡，仅跟主机进行通讯，由于共享一个私有网络，当主机能够访问互联网时，虚拟机也能访问

仅主机模式也叫Host模式：使用的是VNnet1 网卡，仅能跟主机进行通讯



下面试试 使用Host模式，使虚拟机跟主机通讯

查看主机的 VMnet1 网卡ip

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo12.2r0ev4o8cns0.jpg)

2.  在Linux中使用 \`ifconfig -a\`命令查看网卡信息，其中lo代表locaohost，另外一个就是Linux的网卡了

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo13.1saie1q63zds.jpg)

3. 使用 \`ifconfig 网卡名 主机网卡ip\`来修改Linux 的网卡ip

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo16.2dz19czvtwro.jpg)

4.  若在主机上能ping通 虚拟机的ip 则表示通讯成功了

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo17.6n2y94t2dsg0.jpg)



5. 若网卡ip配置正确可还是不能通讯时，可以检查虚拟机是否正确桥接到了主机的网卡

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo18.rmp6bt56ceo.jpg)

6. 注意：在Linux中所有内容都是文件,包括硬件也是映射成文件进行管理，使用命令行操作只是临时改变了ip地址，重启以后就会无效，若需要永久改变则需要修改配置文件

**若使用其他模式，切换成对应的网卡ip即可**



##  [下载](https://xshell.en.softonic.com/)并使用远程管理工具，这里使用的是 Xshell

新建一个会话连接至Linux

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo19.6yw0qp0uvdc0.jpg)

输入账号密码（这里使用root账号进行演示，在实际中切不可使用root账号登录，因为root账号权限极大，对我们的系统有极高的控制权）

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo20.6gma48o3utk0.jpg)

至此，就可以远程管理我们的Linux系统了

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo21.73mgmh8s3bg0.jpg)



# [下载](https://www.netsarang.com/zh/xftp/)并使用文件传输工具

与xshell 相同 建立会话即可使用文件传输

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo22.4lsb9scpyys0.jpg)

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo23.4aw89cw3yti0.jpg)`,Ps=`---
title: Linux（2，文件系统，开关机注销，用户管理）
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo.3a6xvhwdpto0.jpg
tags: 
  - 操作系统
  - Linux
abbrlink: f9c035e4
date: 2021-05-10 10:39:18
img:
categories: 操作系统
---



# 文件系统



## 分区

Linux 需要创建三个分区

1.  /boot：用于存储Linux系统的引导文件(200M即可)
2. swap（虚拟内存，没有挂载点）：当系统内存不够用时，可以暂时用swap分区代替系统内存
3. /（根分区）：主分区，使用剩余全部空间



## 目录结构

通常主要操作都在根目录（有且只有一个根目录）下，其子目录都是固定了且有它独特的作用，不能随意更改

使用命令行查看根目录下的所有子目录

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo2.7k9ilrf2l7w0.jpg)

我们来聊聊各个目录的作用：

1. / **etc**：存放着系统配置文件
2. **/boot**：启动Linux的核心文件
3. **/var**：日志文件
4. **/media**：插入的u盘，dvd等媒体会被挂载到此目录下
5. **/usr**：存放 用户安装的安装的文件和应用程序
6. **/mnt**：能够让用户临时挂载别的文件系统
7. **/usr/local**：用户的软件安装目录
8.  /bin：保存了常用的各种指令

9.  /sbin：存放的是超级管理员相关的指令

10.  /lost+found：一般是空的，当系统非法关机后，会在这里产生一些文件碎片

11.  /dev：管理设备，将硬件全部映射成文件形式，放在此目录下进行管理

12. /home：当产生新用户时，就会在此目录下创建一个对应的子目录

13.  /lib：动态库

14.  /opt：主要存放软件的安装包

15.  /root：超级管理员的用户主目录

16.  /selinux：安全子系统，当系统遭到破坏时，此目录就会被触发

17.  /tmp：存放临时文件或缓存



# 开关机注销

## 关机和重启

1.  \`shutdown -h -now\` ： 立即关机
2. \`shutdown -h 1\`： 一分钟后关机
3. \`shutdown -r now\`：立即重启
4. \`halt\`：关机
5. \`reboot\`：重启
6. \`sync\`：将内存的数据保存到磁盘，相当于保存在Linux上的操作，无论是重启还是关机，都要运行此命令

## 登录和注销

1. \`logout\`  /  \`exit\`： 注销登录



# 用户管理

Linux 中的用户需要放到 组 里面方便权限管理 ，root默认是放在组1，添加用户时若没有指定组，则会自动创建一个组，并在 /home/ 下创建对应的目录。

## 基本语法

1. \`useradd 用户名\` 添加用户 /   \`useradd -d 指定用户目录 用户名\` 创建一个目录，将用户添加至指定目录  /  \`useradd -g 用户组 用户名\` 将用户添加至指定用户组中（先创建组，再执行添加操作）
2. \`passwd 用户名\` 设置用户密码，其密码需要符合 长度大于8 有大小写字母和数字以及特殊字符中的三种

**使用创建的账号登录，系统会自动切换到改用户的home目录下，root因为是超级管理员，所以在根目录**

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo4.4upp6pcxx6y0.jpg)

3.  删除用户（需要切换到root用户） 
（1）不删除目录：\`userdel 用户名\`
（2）删除用户目录：\`userdel -r 用户名\`

4.  查询用户信息： \`id 用户名\`

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo8.1t6t1x1ivalc.jpg)

5.  切换用户： \`su - 用户名\`，当高权限用户切换到低权限用户不需要密码，反之需要，当想要切回原用户时 使用 \`exit\`即可

6.  用户组，方便了系统对多个有共性的用户进行统一管理：
(1)添加组： \`groupadd 组名\`
(2)删除组：\`gruopdel 组名\`
(3)更换组： \`usermod -g 用户组 用户名\`
(4)用户的配置文件，记录着用户的各种信息，存放在 /etc/passed，通过 \`vim /etc/passwd\`查看，在编辑模式下输入 : +q+回车 退出

      ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo9.b3oj169fk68.jpg)
(5)   口令配置文件，记录着用户密码及各种信息，存放在 /etc/shadow，通过 \`vim /etc/shadow\`查看

      ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo11.5g9ed5tuf240.jpg)
(6)组配置文件，记录着Linux包含的组的信息，存放在 /etc/group，通过 \`vim /etc/group\`查看

      ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo12.4pi4iw9maby0.jpg)











`,ks=`---
title: Linux（3，运行级别，文件目录，时间日期）
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo.3a6xvhwdpto0.jpg
tags:
  - 操作系统
  - Linux
categories: 操作系统
abbrlink: bd4c547b
date: 2021-05-13 14:51:49
img:
---



# 1.运行级别

0：关机

1：单用户

2：多用户状态没有网络服务

3：多用户状态有网络服务

4：系统为使用 保留给客户

5：图形界面

6：系统重启

常用的运行级别是 3和5 ，如果要修改默认的运行级别，需要修改 /etc/inittab 文件中，id:5:initdefault; 这一行的id

修改运行级别 可以使用： init [运行级别] 如 init 5

centos 7 版本 使用的命令是 ctrl+alt+F[运行级别]  如： ctrl+alt+F5



# 2.文件目录

## 1.  pwd : 显示当前工作目录的绝对路径

​## 2.  ls(-l) : 显示当前目录下的内容信息(以列表的形式显示)

​## 3.  cd: 切换当前工作目录，后面可以跟绝对路径和相对路径，绝对路径是以根目录开始，相对路径中，../ 作为回到上一级。若不带参数，则是直接到 root目录

## 4. mkdir : 创建目录，如在home下创建fish目录: \`mkdir /home/fish\`，若需要创建多级目录，加上 -p 即可  \`mkdir -p /home/fish/glod\`

## 5. rm : 删除文件  \`rm hello.txt\` 执行后会询问是否删除 , 如需强制删除 则使用 \`rm -f hello/txt\`即可
1.  rm -rf : 删除非空目录 \`rm -rf /home/fish\`
2.  rmdir : 删除空目录 \`rmdir /home/fish\`

## 6. touch : 创建空文件 \`touch hello.txt hello2.txt\`

## 7. cp : 拷贝文件到指定目录 \`cp hello.txt fish/\` 将当前目录下hello.txt 拷贝到 当前目录下fish 目录下(相对路径)

1.   cp -r : 拷贝整个目录到另一个目录  \`cp -r fish2/ fish3\` 将fish2 这个目录整个拷贝到fish3 中,如果目标目录下有相同文件，会提示是否覆盖， 使用 \`\\cp -r fish2/ fish3\` (cp前加个反斜杆) 可以指定全部覆盖

## 8.   mv : 移动文件与目录 或重命名

1.  重命名： \`mv hello.txt hi.txt\` 将hello.txt 重命名为 hi.txt
2.  移动：\`mv hello.txt fish/\` 将hello.txt 移动到fish目录下

## 9.  cat : 查看文件内容（只读）

1.  \`cat /etc.profile\` 查看文件内容
2.  \`cat -n /etc.profile\` 查看文件内容 带行号
3.  \`cat -n /etc/profile | more\` 分页显示文件内容，按空格翻页

## 10.  less : 分屏查看文件内容（与more类似，比more强大，应用于查看大文件）\`less /etc/profile\`

1.  pagedown 下一页
2.  pageup 上一页
3.  /字符 字符搜索 n往下查找 N往上查找
4.  q 退出

## 11.  \`>\` 和 \`>>\`指令

1.   \`ls -l > a.txt\` 将ls -l 显示的内容写入到 a.txt 文件中，如果有此文件则覆盖，没有则创建
2.  \`ls -l >> b.txt \` 将显示追加到文件中去
3.  \`cat a.txt > b.txt\` 将a.txt 覆盖到 b.txt
4.  \`echo 'hello' >> a.txt\`  往a.txt 中添加 hello (只有一个箭头则会全部覆盖)

## 12.  echo : 输入内容到控制台 相当于 console.log()

## 13.  head : 显示文件的开头部分内容  \`head -n 行数 a.txt\`  显示a.txt 前几行的内容，不加 -n 默认是十行

## 14.  tail : 显示文件末尾部分内容，用法同上，此外， \`tail -f 文件\` 可以<font color="#dd0000">实时</font>跟踪文件更新内容 ，ctrl+c 退出监控

## 15.  in : 软链接 （为目录或文件创建一个类似于快捷方式的链接）\`in -s /root linkToRoot\` 创建一个叫 linkToRook 的软链接 指向 /root 目录，cd进这个链接，就进入了 /root 目录

## 16.  history : 查看或执行历史指令

1.  \`history\` 显示所有的历史指令
2.  \`history 5\` 显示最近五条历史指令
3.  \`!200\` 执行 历史标号为二百的 指令

## 17.  find : 将满足条件的文件或目录显示在终端

1.  \`find /home -name hello.txt\` 在 /home目录下，通过name,来查找hello.txt 这个文件
2.  \`find /opt -user root\` 在 /opt 目录下，通过文件拥有者(这里是 root) 来查找 
3.  \`find / -size +20M\` 查找整个Linux 中，大于 20M的所有文件,+代表大于，-代表小于，=代表等于

## 18.  locate : 类似于模糊查询 ，用于快速定位文件或目录

1.  第一次使用之前需要先创建 locate数据库 \`updatedb\`
2.  \`locate 文件名\`

## 19.  grep : 过滤查找

1.  \`cat hello.txt | grep -ni fish\` 在 hello.txt 文件中，筛选 包含 fish 的内容, 并显示行号不区分大小写

## 20.  压缩 : 

1.   \`gzip hello.txt\` 将hello.txt 压缩（原文件不保存）

2.  \`gunzip hello.txt.gz\` 将刚刚压缩的文件 解压

  --------------------------------

3.  \`zip -r myzip.zip /home/*\` 将home目录下的所有文件打包成一个叫 myzip.zip 的压缩包(常用于项目发布)

4.  \`unzip -d /home/fish/ myzip.zip\` 将myzip.zip 解压，解压后文件放到 /home/fish/ 目录下

  ----------------------------------------------

5.  \`tar -zcvf ab.tar.gz a.txt b.txt\` 将a.txt于b.txt 一起打包，打包后生成一个 ab.tar.gz 压缩包

6.  \`tar -zcvf myhome.tar.gz /home/\` 将home目录下的所有文件打包

7.  \`tar -zxvf ab.tar.gz\` 将ab.tar.gz 解压到当前目录下

8.  \`tar -zxvf ab.tar.gz -C /home/fish2\` 将ab.tar.gz 解压到 /home/fish2 目录下(解压目录必须存在)





# 时间日期

1. 时间

   1.  \`date\` 显示当前日期时间
   2. \`date "+%Y"\` 显示当前年份
   3. \`date "+%Y %m %d"\` 显示当前年月日
   4. \`date "+%Y-%m-%d %H:%M:%S"\` 显示当前年月日
   5. \`date -s "2021-05-17 11:22:22"\` 设置时间

2. 日历

   1. 查看当前月日历 \`cal\`
   2. 查看某年日历 \`cal 2021\`

   `,Ss=`---
title: Linux-4(组管理，权限管理,任务调度)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo.3a6xvhwdpto0.jpg
tags:
  - 操作系统
  - Linux
categories: 操作系统
abbrlink: 9cfd587a
date: 2021-05-29 21:33:43
img:
---



# 组管理

在 Linux 中，每个用户必须属于一个组，不能独立于组外，文件有 所有者和所在组两个属性

比如有个文件是小明创建的，那么它的所有者就是小明，所在组默认是小明所在的组





在这里，创建两个用户，并分别指定两个组，fish对应grop1组，cat 对应grop2组，并使用cat账号登录

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo13.6ke29k09b9s0.jpg)

当用户 cat 创建文件后，那个文件的所有者就是cat，所在组也是cat 所在的组   查看文件所有者 \`ls -ahl\`

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo14.61nvoc8sr9s0.jpg)



若需要修改文件所有者为 fish 则需要切换到root账号，使用 \`chown fish a.txt\`命令修改，此时所有组还没改变

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo15.77ejeme3k2g0.jpg)



如需要修改该文件所在组为grop1，使用 \`chgrp grop1 a.txt\`命令

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo16.6q6phrmcjwc0.jpg)



若需要改变用户所在组，例如将 fish 改为 grop2 组 则使用 \`usermod -g grop2 fish\`，同时，还可以使用 \`usermod -d /home/dd/ fish\` 将fish用户登录的初始目录改为 /home/dd

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo17.5miza77lsn00.jpg)



# 权限管理

## rwx

文件详细信息![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo18.36zqkkx9d8k0.jpg)



1.  作用到文件时：
   1. r:代表可以读取查看
   2. w:代表可写，但是不能删除
   3. x:代表可以可执行
2.  作用到目录时：
   1. r:代表可以读取
   2. w:代表写，包括 创建+删除+重命名目录
   3. x:代表可执行，可以进入目录



## chmod

用于修改文件或目录权限



0:代表无权限

1:代表 -x ，拥有执行权限

2:代表 -w- ,拥有只写权限

3:代表 -wx,拥有写入和执行权限

4:代表 r--,拥有只读权限

5:代表 rx,拥有读取和执行权限

6:代表 rw- ,拥有读取和写入权限

7:代表 rwx,拥有读，写和执行权限



第一位数字代表用户的权限，第二位数字代表组的权限，第三位数字代表其他所有者的权限

例如 要让 所有者，所在组和其他所有者 都对 a.txt 拥有 读写权限，则使用 \`chomd 666 a.txt\`命令 



## chown

修改文件所有者 

\`chown fish a.txt\` 将 a.txt 文件的所有者 改为 fish

\`chown -R fish cat/\` 将cat 目录下的所有文件和目录，所有者改为 fish

\`chown fish:grop1 a.txt\` 将 a.txt文件的所有者改为 fish，并将它的所在组改为 grop1



## chgrp

修改文件所在组

\`chgrp grop1 a.txt\` 将a.txt文件的所在组 改为 grop1

\`chgrp -R grop1 cat/ \` 将cat 目录下的所有文件和目录，所在组改为 grop1



# 任务调度

## crond

定时任务，每隔一段时间自动执行某个任务

1.  \`cron -e\` 进入编辑界面，可以编写简单的任务，当保存退出后生效
2. 定时执行脚本文件：
   1. 编写脚本文件
   2. 给脚本文件一个可执行权限
   3. 执行 \`crontab -e\`，设置自动执行脚本



\`conrtab -r\` 终止任务调度

\`crontab -l\` 查看所有任务调度
\`service crond restart\` 重启任务调度`,As=`---
title: Linux-5(磁盘分区，网络配置，进程管理)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo.3a6xvhwdpto0.jpg
tags:
  - 操作系统
  - Linux
categories: 操作系统
abbrlink: e497ea9
date: 2021-05-30 14:40:16
description: 
---

# 磁盘分区

## 原理

linux 中，无论几个分区，所有文件有且只有一个根目录，每个分区都是组成文件系统的一部分

使用了 载入 的方式，将一个分区和一个目录联系起来

\`lsblk -f\` 查看系统分区和挂载状态，

这里可以看到，硬盘sda 下 有 sda1和sda2两个分区，其中sda1 挂载到 /boot上，sda2挂载到了 swap和根目录上

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo19.20bejwh4hlds.jpg)



## 为硬盘进行分区

1.  添加一块硬盘

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo20.5vgkac3xhv40.jpg)

2. 对硬盘进行分区 

   1. \`fdisk /dev/sdb\` 执行分区命令

   2. 随后执行 n 命令，添加一个新分区 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo21.1j9vi1n9m4ow.jpg)

   3. 选择 p 命令，创建主分区 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo22.6vxs089yewc0.jpg)

   4. 为分区进行编号 ,使用默认值即可![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo23.28r9icrfm13w.jpg)

   5. 随后，保存并退出 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo24.2nrc7mwinfk0.jpg)

   6. 此时，新加的磁盘已经分区好了 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo25.4mntksv6g8o0.jpg)

   7. 使用 mkfs 命令格式化分区 \`mkfs -t ext4 /dev/sdb1\`

   8. 此时，这个分区就可以用了 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo26.5wx8pc6h8nk0.jpg)

   9. 先创建一个目录，然后将分区挂载到该目录上

       \`mkdir /home/newdisk\`  \`mount /dev/sdb1 /home/newdisk\`

   10. 此时，挂载已经完成了，这种方式是临时挂载，当系统重启后，映射关系就无了，因此，我们还需要设置自动挂载，也就是当重启系统后仍然可以挂载上

   11.  执行 \`vim /etc/fstab\` 修改配置文件，将添加进的新硬盘挂载信息写入 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo27.1bny4u34f3hc.jpg)

   12. 修改完毕后，执行 \`mount -a\` 执行挂载

   13. 至此，新硬盘的挂载就全部完成了，重启之后可以生效 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo28.1bhxwnyea1y8.jpg)

   14. 若需要取消挂载 使用 \`umount /dev/sdb1\` 即可

## 查看磁盘情况

1.  查看整体磁盘使用情况 \`df -lh\`

2. 查询指定目录磁盘使用情况 \`du -h /home/\` -s指定目录占用大小汇总 -h带计量单位 -a含文件 --max-depth=1子目录深度

3. 统计home目录下，文件的个数 \`ls -l /home | grep "^-" | wc -l\` 

4. 统计home目录下，目录的个数 \`ls -l /home | grep "^d" | wc -l\` 

5. 统计home目录下，文件的个数(包括子文件夹) \`ls -lR /home | grep "^-" | wc -l\` 

6. 统计home目录下，目录的个数(包括子文件夹) \`ls -lR /home | grep "^d" | wc -l\` 

   

# 网络配置

Linux 每次启动后会自动获取ip，每次的ip都会不一样，不适用于服务器

我们需要直接修改配置文件来指定ip，并且可以连接到外网

以 centos8 为例 \`cd /etc/sysconfig/network-scripts\` 下 使用 ls 查看文件，其文件就是网络配置文件

修改它 其中

\`\`\`
# 修改 
BOOTPROTO=static #以静态方式获取ip
ONBOOT=yes #启用boot配置成yes

# 追加
IPADDR="192.168.174.140"   # 指定IP地址
GATEWAY="192.168.174.2"    # 网关地址
DNS1="192.168.174.2"       # DNS服务器（和网关保持一致）
\`\`\`

修改后，需要重启



# 进程管理

## 查看进程

在linux中 每个执行的程序都称为一个进程，每一个进程都分配一个id

每一个进程都对应一个父进程，父进程可以复制多个子进程

每个进程都可能以两种方式存在，前台和后台，通常使用后台方式执行，并常驻在系统中，直到关机

\`ps -a\`显示当前终端的所有进程信息

\`ps -u\`以用户格式显示进程信息

\`ps -x\`显示后台进程运行的参数,通常全部显示 \`ps -aux\`

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo30.3yb72ri5thg0.jpg)



当需要筛选某些特定进程时，可以使用 管道符  \`ps -aux | grep xxx\`

若需要显示父进程，可使用 \`ps -ef | more\` 其中的 PPID 就是父进程的id 0代表没有父进程



## 终止进程

使用 \`kill PID\` 通过进程id来终止进程

使用 \`killall 进程名 \` 终止掉所有归属于这个进程名的所有进程

使用 \`kill -9 PID\` 强制终止进程

## 监控进程

top 于 ps 命令相似，都是用来显示正在执行的进程，但top可以在执行一段时间后更新正在运行的进程

执行 \`top\` 得到以下信息 ，且每隔三秒刷新一次![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux-2/demo31.4qik2dio00m0.jpg)

在监控进程页面 输入 u 可以监控指定用户

输入 k 可以终止指定进程

\`top -d 5\` 指定刷新时间，这里是五秒刷新一次

\`netstat -anp | more\` 监控网络服务`,Is=`---
title: axios
author: FishBand
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageAxios/axios.6ghgfdqg6ec0.jpg'
tags:
  - 前端
  - 项目构建
  - 网络请求
categories: 前端
abbrlink: a09486d2
date: 2021-04-19 19:23:53
---

# 简介
熟练使用各种网络请求技术对前端工程师来说是一项必需的技能，现在各种网络请求工具层出不穷，从原生的HttpRequest到经历各种封装的库如 Ajax,SuperAgent,Fly 等等。今天我们来聊聊 Axios

# axios 是什么
axios 是一个基于promise 的http库，可以用在浏览器与nodejs中，是当今流行的一个框架

# axios 使用
### 下载依赖
初次使用需要下载axios依赖包
\`npm install axios\`
### 请求

##### get请求
1.   首先是无参请求

\`\`\`javascript
axios.get('后台接口api')
.then(response=>{
    consolg.log(response)
})
.catch(error=> {
    console.log(error);
});
\`\`\`
使用.then方法来接收响应体，使用.catch方法来处理异常

2.   有参请求
\`\`\`javascript
axios.get('后台接口api', {
    params: {
        id: 1,
        name:'大肥鱼'
    }
})
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
});
\`\`\`

##### post请求
post
\`\`\`javascript
axios.post('后台接口api', {
    id: 1,
    name: 'fish'
})
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
});
\`\`\`

##### 整合
个人喜欢且推荐参数全部整合起来，类似报文的方式发起请求
\`\`\`javascript
axios({
    url:'api',
    method:'post|get',
    headers:{键值对},
    data:{
        name:'fish'
    }
})
.then(response=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})
\`\`\`
发起请求后我们就可以在开发者调试工具上看到我们的请求参数![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageAxios/demo2.3f27g4z9j800.png)

### 并发
有时候我们需要同时发起多个不同的请求，这时我们就可以使用并发
\`\`\`javascript
axios.all([
    axios.post('后台api',"name:fish"),
    axios.get('后台api',{parms:{id:1}})
])
.then(
    axios.spread((res1,res2)=>{
        console.log(res1)
        console.log(res2)
    })
)
.catch(error=>{
    console.log(error)
})
\`\`\`


### 全局配置
在开发中，会经常遇到同一个页面多个地方请求同一个url，多次使用同一个url时我们可以将那个url提取出来，做一个全局配置
\`\`\`javascript
//设置默认请求方式
axios.default.method = 'GET'|'POST'
//提取路径
axios.default.baseURL = '后台api'
//设置默认参数
axios.default.params={id:1,name:'fish'}
//设定超时时间（超时未响应则停止,单位为毫秒）
axios.defaults.timeout = 5000

//配置全局路径后，就就可以不输入url直接输入资源路径即可，例如我这里资源路径为 test
axios.get('test')
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})
\`\`\`

### 配置实例
适用于配置多个请求
\`\`\`javascript
const req_1 = axios.create({
    baseURL:'后台api',
    timeout:5000
})

req_1({
    url:'test'
})
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})
\`\`\`

### 拦截器
适用于在请求发起前或响应时，进行相关操作，常用于强制登录，处理响应信息等等
\`\`\`javascript
//发起请求后被拦截器拦截，进行相应处理后放行之后，再发起请求
axios.interceptors.request.use(
    config=>{
        console.log('进入了拦截器')
        //进行相应操作
        retrun config //放行
    },
    err=>{
        //处理异常
    }
)
\`\`\`

\`\`\`javascript
//请求成功响应返回时，先被拦截器拦截，对响应数据进行处理后，放行
axios.interceptors.response.use(
    config=>{
        console.log('进入拦截器')

        //进行操作
         config.data.name = '张三'

        retrun config.data //放行
    },
    error=>{
        //处理异常
    }
)
\`\`\`
当定义了多个拦截器时 执行顺序是：
请求拦截器是谁在定义的最后，谁先拦截，相应拦截器则是谁先定义谁先拦截。

### 总结
axios 是一个强大的http库 依赖于原生的 ES6 Promise 
通常内置在vue中，能极大提高开发效率

`,_s=`---
title: '设计模式(1,工厂，抽象工厂，建造者)'
author: FishBand
abbrlink: b638acf0
date: 2021-06-06 14:57:08
img:
cover:
tags:
categories:
---

# 简介

## 设计模式是什么

设计模式是解决特定问题的一系列套路，主要是解决面向对象开发中的某些问题，它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。

是由 Gof创建，目前有23种设计模式，其每种设计模式都有它的 模式名称，对应解决的问题以及优缺点

## 学习设计模式的意义

1.  提高程序员的思维能力
2. 使程序标准化、工程化，提高开发效率
3. 提高代码可读性、可维护性、灵活性

# 23种设计汇总

## 创建型模式：

单例模式，工厂模式，抽象工厂模式，建造者模式，原型模式

## 结构型模式

适配器模式，桥接模式，装饰模式，组合模式，外观模式，享元模式，代理模式

## 行为型模式

模板方式模式，命令模式，迭代器模式，观察者模式，中介模式，备忘录模式，解释器模式，状态模式，策略模式，职责链模式，访问者模式

`,Cs=`---
title: CSS 动画与孟菲斯设计风格
author: FishBand
cover: >-
  \`\`
tags:
  - CSS
  - 设计
  - 动画
  - 前端
categories: 前端开发
abbrlink: css-memphis
date: 2024-06-01 14:20:00
img:
---

## 孟菲斯设计风格

孟菲斯（Memphis）是一种起源于 1980 年代意大利的设计风格，以大胆的几何形状、高饱和度色彩和反传统的排版著称。

### 核心特征

- **几何图形**：圆形、三角形、正方形、波浪线
- **高对比配色**：亮黄、品红、青色、橙色
- **图案纹理**：点阵、斜线、网格
- **弹性动画**：弹跳、回弹、呼吸效果

### CSS 实现关键帧动画

\`\`\`css
@keyframes memphis-bounce {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.08) rotate(-5deg); }
  75% { transform: scale(0.95) rotate(3deg); }
}

@keyframes pulse-breathing {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.95); }
}

.shape {
  animation: memphis-bounce 4s ease-in-out infinite;
}
\`\`\`

### 弹性缓动函数

\`\`\`css
/* 弹性缓动 — 让动画更有活力 */
.element {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
\`\`\`

### 配色方案

| 颜色 | 色值 | 用途 |
|------|------|------|
| 亮黄 | #FFE135 | 主强调色 |
| 品红 | #FF006E | CTA 按钮 |
| 青色 | #00F5FF | 辅助高亮 |
| 橙色 | #FF5400 | 警告/热点 |
| 紫罗兰 | #8338EC | 特殊标记 |

> 🎨 设计建议：在深色背景上使用孟菲斯色彩效果最佳，对比强烈且视觉冲击力强。
`,Es=`---
title: echarts图标常用配置
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEcharts/demo1.4w386cwc0dm0.jpg
tags:
  - 前端
  - Echarts
categories: 前端
abbrlink: cf4829cc
date: 2021-09-24 13:27:15
img:
---

**总结一下使用 echarts中常用的配置**

# 饼图

\`\`\`javascript
option = {
  tooltip: {
    trigger: 'item'
  },
   // 第2处 修改图例相关设置
  legend: {
    orient: 'vertical', //将图例 改为横向
    x: '80px', //微操图例位置
    y: '80px',
    left: 'left', //修改图例显示位置
    textStyle: {
      color: 'red' //修改图例文字样式
    }
  },
    // 第5处 修改饼图相关配置
  graphic: {
    type: 'text',
    left: 'center',
    top: '50%', // 将描述信息置于饼图中央
    style: { // 文字样式
      text: '养老护理员',
      textAlign: 'center',
      fill: 'red',
      fontSize: 20,
      fontWeight: 700
    }
  },
    // 第1处 修改标题相关配置
  title: {
    text: '服务人员从业年限',
    textStyle: { // 修改标题文字样式
      color: 'red'
    },
    left: '50%', //微操标题位置
    top: '4%'
  },
  series: [
    {
      type: 'pie',
        
        // 第3处 修改饼图的 粗细和中心圆半径
      radius: ['20%', '50%'],
        
        
        // 开启此配置，当鼠标悬浮饼图中时，将相关信息显示至饼图中央
      // label: {
      //   show: true,
      //   position: 'center',
      //  textStyle: {
      //    color: 'red'
      //  }
      // },
        
        // 开启此配置， 当鼠标悬浮饼图中时，着重显示相关信息
      // emphasis: {
      //   label: {
      //     show: true,
      //     fontSize: '40',
      //     fontWeight: 'bold'
      //   }
      // },
        
        // 第4处 是否显示线条
      labelLine: {
        show: true
      },
      data: [
        { value: 348, name: '1年以下' },
        { value: 132, name: '1-2年' },
        { value: 132, name: '2-3年' },
        { value: 100, name: '3-4年' },
        { value: 348, name: '4-5年' },
        { value: 700, name: '5年以上' }
      ]
    }
  ]
};
\`\`\`

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEcharts/demo2.6v3jsadycgc0.jpg)

# 折线图

\`\`\`javascript
option = {
  title: {
    text: 'xx学校招生情况',
    textStyle: {
      color: 'red',
      fontSize: 27
    } // 第一处 标题及字体样式
  },
  grid: {
    top: '30%' // 第二处 标题距离图标的距离
  },
  tooltip: {
    trigger: 'axis'  // 第五处 提示框样式
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show: true,
      textStyle: {
        color: 'red' // 第四处 字体样式 x轴同理
      }
    },
    name: '人数', 
    nameTextStyle: {
      color: 'red' // 第三处 y轴标注及字体样式 x轴同理
    }
  },
  xAxis: {
    type: 'category',
    name: '年份', 
    nameTextStyle: {
      color: 'red'
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'red'
      }
    },
    data: [
      '2010年',
      '2011年',
      '2012年',
      '2013年',
      '2014年',
      '2015年',
      '2016年',
      '2018年',
      '2019年',
      '2020年',
      '2021年',
    ]
  },
  
  series: [
    {
      data: [1150, 1160, 1166, 1170, 1180, 1483, 1585, 1990, 1999, 2200,2210],
      type: 'line'
    }
  ]
};


\`\`\`

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEcharts/demo5.3lnzwvg4uyq0.png)
`,Bs=`---
title: ES6高效开发
author: FishBand
cover:   'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEs6/demo_2.4l4ad3rpv3c0.jpg'
tags:
  - 前端
  - JS
categories: 前端
abbrlink: 782ddcae
date: 2021-04-21 20:31:22
---

# 简介

## es6是什么
es6 全称为 ECMAScript6.0 又称es2015,指2015年发布的版本
其中 ECMA 是一套标准  Script是实现 简单来说就是使用javascript来实现ECMA6.0
es6 又被称为ecma6.0 其实都是一样的

## 兼容性问题
在目前市面上还是有一些浏览器（IE）不支持es6语法，es5更能做好兼容性问题，所以在有些时候需要将es6转换为es5
通常会使用babel等工具来进行转换

# 新特性
es6推出的新特性主要是为了解决或优化es5中的各种缺陷

## 变量
在es5中的 var变量 存在的问题：
1.  可以重复声明
\`\`\`javascript
var a = 10;
var a = 5;
consloe.log(a)
//此时控制台会将5 打印出来
\`\`\`
2.  无法限制修改，不够严谨。在开发中，会有一些变量的值被固定死，无法被改变，例如圆周率 PI,而var则无法做到
\`\`\`javascript
  var pi = 3.1415926
  pi = 1000
  //这里的pi可以被修改
\`\`\`

3.  没有块级作用域，就是变量的作用域

\`\`\`javascript
for(var i =0;i<10;i++){
  consloe.log(i)
}
consloe.log(i)
//在循环中定义的变量i 在外部也可以被拿到并使用
\`\`\`



**const**常量

const定义的变量被称为常量，对常量赋值以后就不允许进行修改，其通常使用大写

\`\`\`javascript
const PI = 3.1415926
PI = 100
\`\`\`

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEs6/demo1.42jwwu9jjmw0.png)

​	

**let**局部变量

let定义的变量只能在当前作用域使用，在外部不可以访问

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEs6/demo2.5rvg0k1xw0g.png)

const变量同上，在某个作用域定义的变量只能在某个作用域生效 ，用{}包起来的都算一个作用域



## 箭头函数

箭头函数主要有两大作用：

1.  简化写法

\`\`\`javascript
//1.改造普通函数
    //es5 中定义函数
    function 函数名(){
        //执行
    }

    //es6 中的箭头函数
    let 函数名 = ()=>{
        //执行
    }
    // 相比普通函数写法，箭头函数做了一定简化，其过程是
    // 1.把function去掉
    // 2.在()后面加上 =>
    
//2.有且只有一个参数时，可以省略()
    function add(a){
        consloe.log(a)
    }

let add = a=>{
        consloe.log(a)
    }
    
//3.函数体中有且只有一句retrun语句时，可以省略retrun和{}
    function add(a,b){
        retrun a+b
    }

let add = (a,b)=>a+b
\`\`\`

   

2. 改变this指向

   

   在es5中 函数中的this 指示的是函数本身

\`\`\`javascript
function showName(){
    //在函数内定义了一个变量值为张三
    personName = '张三'
    
    //使用this指向函数本身，拿到函数内定义的变量，张三就会被打印出来
    console.log(this.personName)
}
\`\`\`

   

   在es6中，箭头函数没有自己的this，它的this是继承而来，所以当在箭头函数中使用this时，箭头函数中所使用的this就来自于函数作用域链

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEs6/demo3.6iwlhnlw4v80.png)

   在浏览器中就会打印出Window 对象



## 参数收集/展开

当要传递多个参数时，可以使用 ...args 的方式

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEs6/demo4.6f4f5xbg5y80.png)



## 解构赋值

可以在定义变量的时候进行赋值

其中：

1.  两边结构必须相同
2. 右边的值必须是一个合法的数据类型
3. 声明和赋值不能分开

\`\`\`javascript
let [json,arr,num,str] = [{name:'张三'},[1,2,3],15,'abcd']
console.log(json,arr,num,str)
\`\`\`



## 对象简写

\`\`\`javascript
let name = 'fish'
let age = 18
let hall = 180

//当对象里面的属性值，与已有变量名同名的话，可以直接赋值
var person = {
	name,
	age,
	hall
}
console.log(person)
//输出 { name: 'fish', age: 18, hall: 180 }
\`\`\`





## 数组

1.  filter过滤器

   对一个数组进行循环，当满足条件的时候，将值赋给新变量，如果不符合则去除

\`\`\`javascript
let arr = [10,11,12,13,14,15]

// 将数组遍历 赋值给item
let res = arr.filter(function(item){

    if(item %2 == 0){
        //return trun 表示将值留下 反之剔除
        return true
    }
    return false
})

console.log(res)

\`\`\`

\`\`\`javascript
//简写
let arr = [10,11,12,13,14,15]
let res = arr.filter(item=>item%2==0?true:false)
\`\`\`

2.  forEach 遍历

\`\`\`javascript
let arr = [1,2,3,4,5,]
arr.forEach((item,index)=>{
    //快速遍历数组的值跟索引
    console.log(item,index)
})
\`\`\`

3. map *将数组里的每一个元素都进行对应处理* 

\`\`\`javascript
var arr = [{name:'张三',age:15},{name:'李四',age:16},{name:'王五',age:17}]
var newarr =  arr.map(ele()=>{ 
    ele.age = ele.age+1;
    ele.check = true;//添加新字段
    return ele
})
console.log(newarr);
\`\`\`

## 字符串

1.  startsWith() 和endsWith()

\`\`\`javascript
var str = 'https://fishband.github.io'

//可以判断该字符串是否以 https开头，若符合，则返回true
console.log(str.startsWith('https'))


var str2 = 'demo.jpg'

//可以判断该字符串是否以 .jpg结尾，若符合，则返回true
console.log(str2.endsWith('.jpg'))
\`\`\`

   

2. 字符串拼接

\`\`\`javascript
let name = 'fish'
let age = 18

//使用 \` （反单引号） 和 \${}（占位符） 来进行字符串拼接，且支持换行操作
let str = \`the first variable is \${name},the second is \${age}\`

let str1 = \`
<div>
\${name}
<h1>\${age}</h1>
</div>
\`
\`\`\`

   

## 面向对象

1.  定义类

\`\`\`javascript
//定义类
class User{   
    name = 'fish'
	pwd = 123
    
    showName(){
        console.log(this.name)
    }
}
\`\`\`

2.  静态成员

\`\`\`javascript
//定义类
class User{
    name = 'fish'
	static rename = 'fishh'
}
let user = new User()
console.log(user.name)
console.log(User.name)
\`\`\`

3.  get 和 set

\`\`\`javascript
class User{
    get name(){
        console.log('读取name')
    }
    set name(newName){
        console.log(\`name 被赋值 \${newName}\`)
    }
}
\`\`\`



3. 继承

\`\`\`javascript
//定义类
class User{
    
    //定义构造器（构造函数）
    constructor(name,pwd){
        this.name = name
        this.pwd = pwd
    }
    
    showName(){
        console.log(this.name)
    }
}

class VipUser extends User{
    constructor(name,pwd,lev){
        super(name,pass) //执行父类的构造函数
        this.lev = lev //然后加上自己的东西
    }
    
    showLev(){
        console.log(this.lev)
    }
}
\`\`\`







## 模块化

es6之前的三种模块化规范：

1.  CommonJS  ==>  NodeJS、Browserify
2. AMD ==> requireJS
3. CMD ==> seaJS

**导出：**

 \`\`\`javascript
//1. 单独暴露
//通过exprot 导出
export let name = 'fish'
export let eat = name=>{
    console.log(\`\${name} is eatting\`)
}


//2. 同一暴露
export let name = 'fish'
export let eat = name=>{
    console.log(\`\${name} is eatting\`)
}
export {name,eat}


//3. 默认暴露
// 花括号中的所有数据都会暴露出去
export default {
    name:'fish',
    eat = name=>{
    	console.log(\`\${name} is eatting\`)
	}
}
 \`\`\`

**引入：**

\`\`\`javascript
//1. 通用
import * as m1 from 'fileUrl'

//2. 解构赋值形式
//可以通过as 别名 来避免重名和关键字
import {name as n1,eat} from "fileUrl" 

//3. 简便形式，只能针对默认暴露
import m3 from "fileUrl"

//4. 引入npm包
import $ from 'jquery'
\`\`\`







## Promise

在学习Promise之前我们需要先熟悉两个东西 异步和同步

**异步**：

发起请求后，响应回来需要一段时间，我们没必要等到数据回来才干其他的事，我们可以先执行别的操作，等到数据回来的时候再去执行对应的方法。这样的话用户体验就很好，如果服务器堵塞的时候用户端不会卡住。

但是：   使用异步操作，代码会非常混乱，如果嵌套多层可能会形成回调地狱

**同步**：

一次只能进行一次操作，代码从上至下运行，例如发起请求后会一直等服务端的响应，在此期间只能等待。

而同步对于异步的好处是 ：代码非常清晰易懂，易维护



**promise完美的融合了同步和异步的优点，它既有异步的高效性又有了同步的代码清晰，可以以同步的形式进行异步操作，是一种合适的解决方案**



\`\`\`javascript
//定义promise
let p = new Promise((resovle,reject)=>{
    //异步操作
    //参数中的 resovle和reject 就是promise的两种状态，成功和失败
    
    $.ajax({
        url:'url',
        dataType:'json',
        success(arr){
            resolve(arr)//如果成功 就使用resolve，并把拿到的数据传给resolve
        },
        error(err){
            reject(err)//如果失败，就使用reject，并把错误传给就使用reject
        }
    })
})

//当代码执行结束之后，就会回调then,其中有两个参数，第一个函数对应上面的resolve函数，第二个则对应reject函数。当上面代码执行成功，调了resolve方法，并把数据进去了，那么就可以在then中取到
p.then(arr=>{
    console.log('成功')
    console.log(arr)
},err=>{
    consele.log('失败')
    console.log(err)
})
\`\`\`

其实 promise 本质上更倾向于把异步操作封装成同步操作，当然它也有自己的一个简单的函数all() ，就是当我们想要同时发起多个请求时，我们就可以使用 Promise.all()

Promise.all() 只有当参数列表中的所有请求都成功时，才算成功，成功后一次性将数据全部返回 

\`\`\`javascript
Promise.all([
  //all方法的参数为 一个数组
  $.ajax({url:'url1'},{dataType:'json'}),
  $.ajax({url:'url2'},{dataType:'json'}),
  $.ajax({url:'url3'},{dataType:'json'})
])
//它的回调也是一个数组，对应参数中的数组
.then(([data1,data2,data3])=>{
  data1.forEach(item=>{
      console.log(item)
  })
},res=>{
  console.log(err)
})
\`\`\`



Promise 中还有一个 Promise.race()方法，它会同时请求参数列表中所有请求，哪一个先完成就使用哪一个，除非全部都失败了才会走error。使用场景不多，我们稍微了解一下

\`\`\`javascript
Promise.race([
  $.ajax({url:'url1'},{dataType:'json'}),
  $.ajax({url:'url2'},{dataType:'json'}),
  $.ajax({url:'url3'},{dataType:'json'}),
])
\`\`\`



## Generator

**yield**:

1.  Generator函数跟普通函数差别不大，区别是 Generator函数不是一次性全部执行完的，而是通过next()方法，每调用一次，函数就往下执行。

\`\`\`javascript
//定义Generator函数，在function和函数名之间加一个 * ，注意三者不要黏在一起即可
function * show(){
    console.log('a')
    yield	//当函数运行到yield语句时，就会停止
    console.log('b')
    yield
    console.log('c')
}

let show1 = show()//使用前需要接收一下Generator函数
show1.next()//每执行一次next方法，函数就会往下执行
show1.next()
show1.next()
\`\`\`



2. 传递参数

\`\`\`javascript
// 向外传递参数
function * show(){
    
    let name = 'fish'
    
    // 在函数内部获得的参数，可以通过yield 传递出去
    yield name
}

let show1 = show()
console.log(show1.next())
// 打印出 {value:'fish',done: false}
\`\`\`

   向内传递参数

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageEs6/demo5.72uedt9xxtc0.png)

   

## async/await

async与Generator都是一种函数的特别形式,但是它彻底的糅合了同步和异步

当运行到await 时，程序会“暂停”，其实内部会把函数根据await 切成若干个小函数一个一个执行，当异步完成后才往下执行，将异步操作封装成了同步

\`\`\`javascript
var url = 'url'
var dataType = 'json'

//声明了函数当中有异步操作
async functiong show(){
    
    try{
        
        //声明异步操作
        let data = await $.ajax({
            url,
            dataType
        });
    
    }catch(err){//使用assync时，要用catch来捕获错误 
        console.log(err)
    }
}


\`\`\`



`,Ts=`---
title: Express
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/createBlog/ex.ppyz1dvexr4.png
tags:
  - node
  - 后端
categories: 后端
abbrlink: 1875b830
date: 2021-06-03 09:07:06
img:
---

# 简介

express 是基于 nodeJs 的一个后台开发框架，它的特点在于 简洁，灵活，快速。提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。使用 Express 可以快速地搭建一个完整功能的网站。

# 构建工程

## 准备工作 

构建工程之前需要 全局下载 express \`npm i epxress -g\` 由于4.x版本把 generator 分离出来了，所以还要单独下载 generator \`npm i -g express-generator\`

下载完成后 查看环境 \`express --version\`，如果提示错误，则检查全局模块下载路径是否[配置到环境变量](https://www.fishband.top/posts/b3516ab8/)当中

## 搭建项目

切换到工作目录下，使用 \`express [项目名]\` 来初始化一个项目

初始化完成后，切换进项目根目录，使用 \`npm install \`下载依赖包

随后使用 \`npm start\` 即可运行

在 bin 目录下可以看到相关配置信息，例如端口是 3000 ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageExpress/demo1.idw2r52pls8.jpg)



在浏览器中 输入 http://localhost:3000 即可访问

# 目录结构

## bin

bin 目录下的 www文件中，存放着许多配置信息，这里为了简洁，直接删去bin目录，并将其中一些配置放置在app.js 中，这样运行项目 直接启动 app.js 即可

app.js ↓

\`\`\`javascript
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

// 导入路由文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建express 实例
var app = express();


// 改写
var http = require('http');
var server = http.createServer(app);

//静态资源
app.use(express.static(path.join(__dirname, 'public')));

//允许post请求
app.use(express.urlencoded({extended:true})) 
app.use(express.json())

// 允许cookie操作
app.use(cookieParser());

// 将路由文件挂载到实例
app.use('/', indexRouter);
app.use('/users', usersRouter);

server.listen('3000',()=>{
  console.log('正在运行')
  console.log('http://localhost:3000')
})
\`\`\`



## public

这个目录用于存放静态资源，如图片，脚本，样式，在app.js 中已经将此目录引用，所以可以直接通过地址调用此文件夹下的资源

如 http://localhost:3000/images/download.png



## routes

这是存放路由配置相关的目录，初始化后我们可以看到 index于users 两个文件

index 顾名思义就是入口文件，所有接口都需要在 Index 中导出，例如此处，我创建了controllers文件夹，并根据不同接口创建不同文件进行管理，并在 index 中使用

index ↓

\`\`\`javascript
var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')

/* GET home page. */
router.get('/', user.getUser);


module.exports = router;
\`\`\`

在 routes目录下，除index之外的文件 作为子路由，其中的接口前面必须加上自己的前缀

例如，在routes下有了 users文件，其中有一个 /login 接口，我需要访问 http://localhost:3000/users/login 

users ↓

\`\`\`javascript
var express = require('express');
var router = express.Router();
var User = require('../controllers/userController')


/* GET users listing. */
router.post('/sendCode',User.sendCode);

router.post('/login',User.codeToLogin)

module.exports = router;

\`\`\`



## util 

这个目录一般由开发者自己创建，用于存放工具类，我这里创建了一个用于连接mysql的工具类

\`\`\`javascript
const mysql = require('mysql')

module.exports = {

    // 数据库配置
    config:{
        host:'localhost',
        prot:'3306',
        user:'root',
        password:'123456',
        database:'test'
    },

    // 连接数据库,选用mysql连接池的方式
    // 连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)

        pool.getConnection((err,conn)=>{
            console.log('连接')
            if(err){
                console.log('连接失败')
                return
            }
            // 事件驱动回调
            conn.query(sql,sqlArr,callBack)

            // 释放连接
            conn.release()

        })
    }


}
\`\`\`





## controllers

这个目录一般由开发者自己创建，用于存放具体接口的实现，并暴露出去，在 routes/index 中引用

\`\`\`javascript
var dbConfig = require('../util/dbconfig')

// 获取用户
getUser = (req, res) => {
    let sql1 = 'select * from user'
    let sqlArr = []
    let callBack = (err, data) => {
        if (err) {
            console.log('连接失败')
        }
        else {
            res.send({
                'list': data
            })
        }
    }
    dbConfig.sqlConnect(sql1, sqlArr, callBack)
}

module.exports = {
    getUser,
}

\`\`\`

`,Ns=`---
title: Three.js 3D 粒子特效实战
author: FishBand
cover: >-
  \`https://threejs.org/files/logo.svg\`
tags:
  - Three.js
  - WebGL
  - 3D
  - 前端
categories: 前端开发
abbrlink: threejs-particles
date: 2024-05-20 18:45:00
img:
---

## 粒子系统基础

粒子系统是 3D 图形学中最常用且视觉效果最震撼的技术之一。在 Web 开发中，Three.js 让我们能够轻松实现复杂的粒子效果。

### 创建基本粒子场

\`\`\`javascript
import * as THREE from 'three'

const PARTICLE_COUNT = 2500

const geometry = new THREE.BufferGeometry()
const positions = new Float32Array(PARTICLE_COUNT * 3)
const colors = new Float32Array(PARTICLE_COUNT * 3)

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3
  positions[i3] = (Math.random() - 0.5) * 30
  positions[i3 + 1] = (Math.random() - 0.5) * 30
  positions[i3 + 2] = (Math.random() - 0.5) * 15

  const color = new THREE.Color()
  color.setHSL(Math.random(), 0.8, 0.6)
  colors[i3] = color.r
  colors[i3 + 1] = color.g
  colors[i3 + 2] = color.b
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

const material = new THREE.PointsMaterial({
  size: 0.04,
  vertexColors: true,
  transparent: true,
  opacity: 0.85,
  blending: THREE.AdditiveBlending,
  depthWrite: false
})

const particles = new THREE.Points(geometry, material)
scene.add(particles)
\`\`\`

### 鼠标交互效果

让粒子跟随鼠标移动产生引力扰动效果，可以大大增强交互体验：

\`\`\`javascript
const mousePos = { x: 0, y: 0 }

window.addEventListener('mousemove', (e) => {
  mousePos.x = (e.clientX / window.innerWidth) * 2 - 1
  mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1
})

function animateParticles() {
  const posAttr = geometry.attributes.position.array
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3
    const dx = mousePos.x * 5 - posAttr[i3]
    const dy = mousePos.y * 5 - posAttr[i3 + 1]
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < 3) {
      posAttr[i3] += dx / dist * ((3 - dist) / 3) * 0.05
      posAttr[i3 + 1] += dy / dist * ((3 - dist) / 3) * 0.05
    }
  }
  geometry.attributes.position.needsUpdate = true
}
\`\`\`

### 性能优化建议

- 使用 **BufferGeometry** 而非普通 Geometry
- 控制粒子数量，移动端适当减少
- 使用 **AdditiveBlending** 实现发光效果
- 避免每帧创建新对象

> ✨ 提示：结合 TresJS（Vue 3 的 Three.js 封装），可以在 Vue 组件中更优雅地使用 Three.js！
`,Ls=`---
title: Vue 3 Composition API 完全指南
author: FishBand
cover: >-
  \`https://cdn.jsdelivr.net/gh/vuejs/art/master/logo.png\`
tags:
  - Vue3
  - 前端
  - JavaScript
categories: 前端开发
abbrlink: vue3-guide
date: 2024-03-15 10:30:00
img:
---

## 为什么选择 Composition API？

Vue 3 的 Composition API 提供了更好的代码组织和逻辑复用能力。相比于 Options API，它让相关代码更集中，逻辑更清晰。

### 核心概念

\`\`\`vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('组件已挂载')
})
<\/script>

<template>
  <button @click="increment">
    Count is {{ count }}, doubled is {{ doubled }}
  </button>
</template>
\`\`\`

### ref vs reactive

- **ref**：适合基本类型值，通过 \`.value\` 访问
- **reactive**：适合对象类型，直接访问属性

> 🎯 最佳实践：对于简单值使用 \`ref\`，复杂对象使用 \`reactive\`。

### 组合式函数

Composition API 最强大的特性之一就是可以提取和复用状态逻辑：

\`\`\`javascript
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
\`\`\`
`,Vs=`---
title: 版本控制-Git
tags:
  - git
categories: 开发
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/git.2ig7xv4x68o0.jpg'
abbrlink: ac2a2177
date: 2021-04-18 16:27:16
---

## 简介

### git是什么
git 简单来说就是版本控制软件，当你对文件进行了多次修改或多个人同时修改时，它能帮你快速找回历史版本文件

### git和svn的区别
svn的特点是集中式，工程文件全部放在中央服务器的一个唯一库上，管理员对开发者的权限有掌控，每个人都只能拉取和开发属于自己的模块，且提交按照文件进行存储，有网络要求

git的特点是分布式，每个开发者都能把全部工程文件拉取下来，每一台开发者电脑都是一个完整的库，可以等开发全部完成后再全部推送至远程

git 相比svn的优势是：
1. 资源安全性，当某个开发者的文件资源损坏时，可以从别的地方再拉取一份
2. 提交不受网络限制，当工作完成后可以等有网络时再提交

git 相比svn的劣势是：
1. 数据安全性，每一个开发者都有一个完整的库，难以做到权限分配
2. 使用难度相对svn更难

## git 使用

### 首先第一步当然是[下载并安装git](https://git-scm.com/download/win)
打开下载好的安装程序 一路默认选项安装即可

当右键任意地方 出现这两个选项的时候，说明git就安装成功了
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo1_2.1yof9vllo0m8.png)


### 进行全局配置

打开git bash
 执行 \`git config --global user.name "username"\`
 及 \`git config --global user.email "useremail"\`
 配置用户名和邮箱（双引号里就是你自己github上面的账号，如果没有需要去注册一个）

### 本地操作
git大致可分为本地操作跟远程操作，首先来讲本地操作

#### 初始化工作区
右键打开git bash
输入 \`git init\` 会生成一个.git 文件 说明初始化成功
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo2.4ah9gqh2b1s0.png)

#### 提交到本地仓库

##### 添加到暂存区
在git bash中执行 \`git add .\`或者\`git add 需要添加的文件名\`

##### 添加到本地库
在git bash中执行 \`git commit -m "备注" .\` 把暂存区中的文件提交到本地库 至此文件就被成功的提交到了本地库

#### 查看及修改工作区状态

##### 查看工作区文件状态
执行\`git status\` 即可查看当前文件夹的文件状态

出现以下信息时，说明当前工作区处于master分支，且文件已全部被提交至本地库
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo3.5dgyrmcw6bo0.png)

##### 查看历史记录
执行\`git log\`可查看到所有的提交记录，及提交信息
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo4.4uc0h03w1t40.png)
但是这种显示方式显示的信息太多太臃肿，对阅读体验不友好，我们可以换一种显示方式

执行\`git reflog\` 查看
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo6.50av0lq4cig0.png)
这时我们就能清晰的看到我们想要的信息

#### 版本回退
当出现了不可修改的bug 或者需要找回本地库中被删除的文件时，可以进行版本回退，例如我想要回到 第一个版本的状态
 则执行 \`git reset --hard d316950\`

 --hard 参数 当本地库发生版本变动的时候 工作区和暂存区也会改变
--mixed参数 当本地库发生版本变动的时候 暂存区也会改变 但是工作区不会变化（不常用）
--soft参数 当本地库发生版本变动的时候 暂存区和工作区不会变化（不常用）

 后面那串数字就是历史版本对应的索引值

##### 分支操作
查看当前分支 \`git branch -v\`
创建分支 \`git branch 分支名\`
切换至指定分支 \`git checkout 分支名\`
当需要合并分支时，需要先切换到master主分支，随后执行 \`git merge 分支名\`

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo7.5msxapyvwa40.png)
如果有冲突时，需要手动解决冲突，然后提交

### 远程操作

#### 创建GitHub仓库并复制https地址
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo8.335767atws20.png)

#### 在本地为此仓库添加别名
执行 \`git remote add 别名 地址\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo9.bzvna9ynf1c.png)

#### 查看已添加的别名，确保别名成功添加进去
执行 \`git remote -v\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo10.68kzryye84s0.png)

#### 这时就可以将本地库推送至远程库了
执行 \`git push 别名 远程库分支名\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo11.4rddk2sidek0.png)

#### 克隆GitHub
当我们需要克隆大佬写的东西时 可执行
\`git clone https地址\`

### 免密操作
当我们往远程库推送时，会需要你输入账号密码，这样每次都输入就会很麻烦，我们可以生成ssh来一劳永逸
#### 执行 \`ssh-keygen -t rsa -C 你的GitHub邮箱\`
会在你的 c盘/用户/用户名/.ssh 文件夹下 生成 \`id_rsa\`和\`id_rsa.pub\`两个文件
#### 将生成的密钥信息添加至GitHub
在GitHub设置页中新添 ssh密钥
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo13.4jpkuafj5ce0.png)

将id_rsa.pub中的密钥复制进去即可
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageGit/demo14.5io58zsojs80.png)

## 完结
此时git使用就基本介绍完毕了，git的出现极大的提高了开发效率，也为代码回退提供了一种完美的解决方案，掌握git对我们今后的开发还是多人协作来说都是至关重要。

`,Ds=`---
title: 详解http
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/http.4qpg71r4yrk0.jpg
tags:
  - 计算机网络
categories: 网络
abbrlink: 256d780b
date: 2021-06-16 22:11:56
img:
---

# TCP/IP 基础

*在学习http之前，我们需要先了解一下TCP/IP 网络基础*
我们通常使用的网络（包括互联网）都是在TCP/IP协议族的基础上运行的，而http则属于它内部的一个子集

## TCP/IP 分层

TCP/IP 协议族按层次分，可以分为 应用层、传输层、网络层和数据链路层

1.  应用层：用于存放各类通用的应用服务，如 HTTP、FTP、DNS 与用户最接近的协议， 都属于应用层
2. 传输层： 提供处于网络连接中两台计算机之间的数据传输， 如 TCP 、UDP
3. 网络层：用于处理网络上流动的数据包，数据包是网络传输的最小数据单位，该层规定了该通过怎样的路径进行通信，如 IP协议
4. 链路层： 用于处理连接网络的硬件部分，包括控制操作系统、硬件的设备驱动、网卡光纤等物理硬件



## TCP/IP 通信传输

由上可得知，一次网络通信会大致通过上述四层，顺序是 应用层=>传输层=>网络层=>链路层，每往下走一层，都会加上该层所属的首部信息，到达底层的链路层后，链路层将信息发送至另一端，另一端拿到数据后，通过四层逐步往上走，每经过一层，就去掉该层所属层的首部信息，最后得到请求。

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/demo1.71hnr87y8q80.jpg)



## IP协议

IP协议位于网络层，几乎所有使用网络的系统都会用到IP协议，但是注意别IP协议和IP地址搞混。

IP协议的作用是把各种数据发送给对方，而要确保数据准确的发送到指定的目标，则需要满足各类条件，IP地址和MAC地址是两个重要的条件

IP地址指明了节点被分配的地址，MAC则是网卡所属的固定地址，即物理地址。IP地址可以和MAC地址进行配对，IP地址可能会变，MAC地址通常是不会改变的。



## TCP协议

TCP协议的作用是确保数据能够准确可靠的传给对方，TCP协议会将拿到的HTTP数据分割成报文段，按照需要将这些片段依次发给对方。

讲到TCP那就不得不讲到它的 三次握手四次挥手

### 三次握手与四次挥手

三次握手的本质就是确认通讯双方收发数据的能力，保证数据准确无误的送达目标处。能防止服务端开启一些无用的连接增加服务器开销，以及已经失效的连接请求突然又传到了服务端，从而产生错误

#### 使用三次握手建立连接

第一次握手：客户端向服务端发送 SYN数据包 请求建立连接，随后客户端进入 SYN_SENT状态

第二次握手：服务端收到SYN包，确认客户端的SYN包，同时自己也发送一个SYN包，即向客户端发送SYN+ACK包，随后服务端进入SYN_RECV 状态

第三次握手：客户端收到服务端的SYN+ACK包，向服务端发送确认包ACK，随后客户端和服务端就成功建立连接，三次握手结束

简单的来说，

客户端告诉服务端，我想请求连接

服务端确认客户端后，通知客户端，可以连接

客户端得到通知后，再告诉服务端，我要开始连接了

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/demo2.43xccrzw5zq0.jpg)



#### 使用四次挥手结束连接

四次挥手用于结束连接，当某一端想要结束连接时，则发送一个 FIN数据包，来进行四次挥手

第一次挥手： 客户端向服务端发送一个FIN包，随后进入了FIN_WAIT_1状态

第二次挥手：服务端收到了FIN包后，向客户端发送ACK确认包，需要等待服务端进行处理，随后客户端就进入了 FIN_WAIT_2状态

第三次挥手：服务端处理完成，准备关闭连接，则向客户端发送FIN包，服务端进入 LAST_ACK状态

第四次挥手： 客户端收到FIN包，向服务端发送ACK包，随后进入TIME_WAIT状态，客户端断开连接。服务端收到ACK包后，服务端断开连接。

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/demo3.4v9vunuzp4w0.jpg)

简单的来说：
客户端告诉服务端，我想要断开连接

服务端收到后，告诉客户端，请稍等

服务端准备完成后，告诉客户端，可以关闭了

客户端得到通知后，告诉服务端，关闭吧，随后进入等待模式，服务端得到客户端的通知则关闭，客户端等待一段时间后，若没有回复则客户端关闭

# HTTP请求

## 客户端

发起一次http请求，其中会包含 **请求方式** **请求地址** **附带参数** **请求头部** 等信息

### 请求方式（method）

http请求有多种方式，浏览器地址栏中访问地址，默认是使用get请求，除此之外，还有多种请求方式

| 方法        | 说明             |
| ----------- | ---------------- |
| get         | 获取资源         |
| post        | 传输实体主体     |
| put         | 传输文件         |
| head        | 获取报文首部     |
| delete      | 删除文件         |
| options     | 询问支持的方法   |
| trace       | 追踪路径         |
| connect     | 要求使用隧道代理 |
| link/unlink | 连接/断开连接    |

### 请求地址（url）

请求地址 即目标主机的ip地址

### ip地址 域名 DNS服务器 Hosts文件

ip地址即目标主机被分配到的地址，受网络环境影响，如无线网中，ip地址可能会经常发生变化

域名即把ip地址转换为一串字符串，相比于一串长长的数字用户更容易记住一串特定的字符串 ，如 www.baidu.com 就是一个域名，在cmd中 输入 \`ping www.baidu.com\`即可得到它的ip地址，在浏览器中输入ip地址与直接输入域名，效果都是一样的

DNS服务器，在浏览器中输入了 www.baidu.com 后，浏览器就通过DNS服务器将域名解析成ip地址，然后再使用 http请求这个地址

Hosts文件可以理解为本地的DNS服务器，在进行DNS请求之前，windows会先去hosts寻找是否有这个域名的解析映射且不需要网络，如果有则直接使用hosts中的ip，如果没有，则请求DNS服务器

### 附带参数（data）

这里的参数即http请求中携带的参数，如get请求，其参数会跟在url地址后，post使用form表单传参等等

### 请求头部（Headers）

请求头用于标识请求方，说明是谁或什么在发送请求、请求源于何处，或者客户端的喜好及能力。服务器可以根据请求头部给出的客户端信息，试着为客户端提供更好的响应。请求头种类众多，这里只列举几种最常见的请求头

| 协议头          | 作用                                                         | 示例                                                         |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Accept          | 可接受的响应内容类型                                         | \`*/*\` （接受所有类型）                                       |
| Accept-Encoding | 可接受的响应内容的编码方式。                                 | \`gzip,deflate\`(GNU zip编码和zlib编码)                        |
| Accept-Language | 可接受的响应内容语言列表。                                   | \`zh-CN,zh;q=0.9,en;q=0.8\`(可接受中文和英文以逗号间隔，q代表权重，值越大越优先) |
| Content-type    | 请求体的MIME类型 （用于POST和PUT请求中）                     | \`multipart/form-data\`表单文件上传时使用                      |
| Host            | 表示服务器的域名以及服务器所监听的端口号。如果所请求的端口是对应的服务的标准端口（80），<则端口号可以省略。 | \`192.168.xx.xxx:xxxx\`                                        |
| Origin          | 发起一个针对跨域资源共享的请求                               | \`http://localhost:8080\`                                      |
| User-Agent      | 浏览器的身份标识字符串                                       | \`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36\`  例如我这里使用的是谷歌浏览器 |

除此之外还可以自己定义一些请求头，用做特殊标识

## 服务端

### HTTP响应码

HTTP响应码用于表示HTTP请求的返回结果、标记服务器端的处理是否正常、通知出错等工作

类别：

1xx:接收的请求正在处理

2:xx:请求正常处理完成

3:xx:需要进行附加操作以完成请求

4xx:服务器无法处理请求

5xx:服务器处理请求出错

| 状态码                    | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| 200 OK                    | 请求在服务端被正常处理了                                     |
| 204 No Content            | 请求已成功处理，但是响应中不包含主体部分                     |
| 206 Partial Content       | 客户端请求指定范围的资源，且服务器成功执行了                 |
| 301 Moved Permanently     | 永久性重定向，表示请求的资源被分配到了新的url                |
| 302 Found                 | 临时性重定向，表示请求的资源被分配到了新的url，希望能够使用新的url访问 |
| 303 See Other             | 表示由于请求对应的资源存在另一个url，应使用get方法重定向获取资源 |
| 304 Not Modified          | 表示客户端发送附带参数时，服务端允许访问资源，但请求未满足条件 |
| 400 Bad Request           | 表示请求报文中出现语法错误                                   |
| 401 Unauthorized          | 发送的请求需要通过HTTP认证，若之前已进行过一次认证，则表示认证失败 |
| 403 Forbidden             | 请求资源的访问被服务器拒绝了                                 |
| 404 Not Found             | 服务器上无法找到请求的资源                                   |
| 500 Internal Server Error | 服务器内部错误                                               |
| 503 Service Unavailable   | 服务器处于超负载或正在进行停机维护，无法处理请求             |

# 与HTTP 协作的Web服务器

  ## 代理

**代理是什么：**

代理时一种具有转发功能的应用程序，它位于服务端和客户端之间，扮演一个“代理人”的角色

代理服务器的基本行为就是接收客户端发送的请求后转发给服务端，服务端返回的响应通过代理服务器后再传给客户端。在htt中，可以级联多个代理服务器，请求和响应的转发会经过数台类似锁链一样连接起来的代理服务器，转发时则需要附带Via首部字段以标记经过的主机信息

***为什么使用代理：**

使用代理的理由有：利用缓存技术减少网络带宽的流量，组织内部针对特定网站的访问控制，以获取访问日志等等

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/demo4.47jlzy3gj1a0.jpg)

### 缓存代理

代理转发响应时，缓存代理会预先将资源的副本保存在代理服务器上，当代理再次接收相同资源的请求时，就可以不从服务端那里获取资源，而是将之前缓存的资源返回

即使缓存服务器上由缓存，也不能保证每次都会返回相同资源的请求，这关系到时效性的问题

### 透明代理

转发请求或响应时，不对报文做任何加工的代理类型叫透明代理，反之，对报文内容进行加工的代理被称为非透明代理

## 网关

网关的工作机制类似于代理。而网关能使通信线路上的服务器提供非HTTP服务。

利用网关能提高通信的安全性，因为可以在客户端和网关服务器之间的通信路线上加密以保证连接的安全。 

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/demo5.449y2rvsj5a0.jpg)

## 隧道

隧道可按要求建立起一条于其他服务器的通信线路，届时由SSL等加密手段进行通信 ，其目的时保证客户端于服务端的安全通信。

隧道本身不会去解析HTTP请求，HTTP请求会原样中继给服务端

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/demo6.3b06nilr7v60.jpg)

# HTTPS

## HTTP的缺点

尽管http作为世界上最流行的网络通信协议，但它还是有许多不足

1.  通讯使用明文，内容可能被窃听：

   http本身不具备加密的功能，所以也无法对通讯整体进行加密，http的报文是使用明文发送的，这种方式可能会被抓包工具所捕获

2. 不验证通讯方的身份，可能会遭遇伪装

   在http中，不存在确认通信方的处理步骤，也就是说不论是谁发过来的请求都会返回响应，这会导致

   1.  无法确定发送至目标的web服务器是否是已伪装的web服务器
   2. 无法确定返回到的客户端是否是已伪装的客户端
   3. 无法确定正在通信的对方是否具备访问权限，因为某些服务器上保存这重要信息，只想发给特定用户通信的权限
   4. 无法判定请求来自何方，出自谁手
   5. 即使是无意义的请求也会接收，无法阻止海量请求下的DoS攻击

3. 无法证明报文的完整性：

   http无法证明通信报文的完整性，在请求或响应送出之后知道对方接收前的这段时间里，即使请求或响应遭到篡改也无法知晓

## HTTPS

**HTTP+加密+认证+完整性保护=HTTPS**

### 加密

通过SSL（Secure Socket Layer 安全套接层）或 TLC（Transport Layer Security安全传输层协议）,可以加密HTTP的通信内容。

通过这两个协议，可以在客户端于服务端搭建一条安全的通信线路，在此线路上使用HTTP协议进行通讯

### 认证

SSL使用了一种被称为证书的手段，用户访问服务端之前都会先检查服务端的证书；；；，用于确定通信方。证书由第三方机构颁发，用以证明服务器和客户端时实际存在的，且伪造证书从技术角度上来说是非常困难的一件事

### 完整性保护

通常使用MD5和SHA-1等散列值校验以及用来确认文件的数字签名方法来验证完整性。

提供文件下载服务的Web网站会提供相应的以PGP（Pretty Good Paivacy完美协议）创建的数字签名及MD5算法生成的散列值。PGP用来证明创建文字的数字签名。MD5是由单项函数生成的散列值。

无论哪一种方式，都需要用户本人亲自检查验证下载的文件是否就是服务器上的文件，浏览器无法自动帮用户检查，所以需要搭配加密，认证等方式

**HTTPS 简单来说就是 披着SSL协议的HTTP**

# Web 攻击技术

## 主动攻击与被动攻击

### 主动攻击

攻击者通过直接访问Web应用，把攻击代码传入的攻击方式，其中具有代表性的是 SQL注入和 OS命令注入

### 被动攻击

利用圈套执行攻击代码的攻击模式，被动攻击中，攻击者不直接对Web应用访问发起攻击

## 跨站脚本攻击

攻击者诱使用户触发已设置好的陷阱，当用户中招后，陷阱程序会使用用户的浏览器发送具有攻击性的代码至服务器，将用户当作跳板，以达到攻击的目的

## SQL注入攻击

通过运行非法的SQL而产生的攻击

例如在web表单中，输入 \`1 == 1\`或\`--\`等数据库特殊字符，以达到攻击服务端数据库的目的

## OS 命令注入攻击

通过Web应用执行非法的操作系统命令达到攻击的目的，只要在能调用 Shell 函数的地方都有被攻击的风险

## HTTP头部注入攻击

攻击者通过在响应头部字段内插入换行，添加任意头部或主体的一种攻击，属于被动攻击

## 目录遍历攻击

对本无意公开的文件目录，通过非法阶段其目录路径后，达成访问目的的一种攻击。因此服务器上的任意文件或目录都有可能被访问到

## 远程文件包含漏洞

当部分脚本内容需要从其他文件读入时，攻击者利用指定外部服务器的url充当依赖文件，让脚本读取之后，九颗运行任意脚本的一种攻击

## 会话劫持

攻击者通过某种手段拿到了用户的会话ID，并非法使用此会话ID位置成用户，达到攻击的目的

## 密码破解

## 穷举法

又称暴力破解，是指对所有可行的候选密码对目标的密码系统进行试错，以突破验证的一种攻击

例如，某个Web应用的验证密码是由 4位数字 组成，即 0000-9999 中必存在正确密码，尝试所有的密码，可通过通过认证

### 字典攻击

利用事先收集好的候选密码，如用户的生日，用户的身份证号等等，进行尝试，成功的成败取决于字典的内容

## 点击劫持

利用透明的按钮或链接做成陷阱，覆盖至Web页面上，诱使用户在不知情的情况下，点击那个链接访问内容的一种攻击手段

## DoS 攻击

发送大量的合法请求，其中参杂着非法请求，让服务器难以分辨何为正常请求。以让运行中的服务呈现停止状态，有时也叫服务停止攻击和拒绝服务攻击
`,Os=`---
title: JS常用工具库整理
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVite/download.2xvk2r3zj9k0.jpg
tags:
  - 前端
  - 项目构建
categories: 前端
abbrlink: 457d8d23
date: 2021-12-03 10:00:32
img:
---

**以下代码均使用 es6 的 export defaule 导出方法，可以根据实际需求自行转换**

## 动态加载 静态 js/css/style 资源

\`\`\`javascript
const loadRes = function (name, type, fn) {
  // 加载js || css || style
  let ref;
  if (type === "js") {
    // 外部js
    ref = document.createElement("script");
    ref.setAttribute("type", "text/javascript");
    ref.setAttribute("src", name);
  } else if (type === "css") {
    // 外部css
    ref = document.createElement("link");
    ref.setAttribute("rel", "stylesheet");
    ref.setAttribute("type", "text/css");
    ref.setAttribute("href", name);
  } else if (type === "style") {
    // style
    ref = document.createElement("style");
    ref.innerHTML = name;
  }
  if (typeof ref !== "undefined") {
    document.getElementsByTagName("head")[0].appendChild(ref);
    ref.onload = function () {
      // 加载完成执行
      typeof fn === "function" && fn();
    };
  }
};
export default {
  loadRes: loadRes,
};
\`\`\`

## 获取 url 参数

\`\`\`javascript
const getUrlParam = function (name) {
  let reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.href.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  }
  return undefined;
};
export default {
  getUrlParam: getUrlParam,
};
\`\`\`

## 基于 localStorage 本地存储

\`\`\`javascript
const store = {
  set: function (name, value, day) {
    // 设置
    let d = new Date();
    let time = 0;
    day = typeof day === "undefined" || !day ? 1 : day; // 时间,默认存储1天
    time = d.setHours(d.getHours() + 24 * day); // 毫秒
    localStorage.setItem(
      name,
      JSON.stringify({
        data: value,
        time: time,
      })
    );
  },
  get: function (name) {
    // 获取
    let data = localStorage.getItem(name);
    if (!data) {
      return null;
    }
    let obj = JSON.parse(data);
    if (new Date().getTime() > obj.time) {
      // 过期
      localStorage.removeItem(name);
      return null;
    } else {
      return obj.data;
    }
  },
  clear: function (name) {
    // 清空
    if (name) {
      // 删除键为name的缓存
      localStorage.removeItem(name);
    } else {
      // 清空全部
      localStorage.clear();
    }
  },
};
export default {
  store: store,
};
\`\`\`

## cookie 相关操作

\`\`\`javascript
const cookie = {
  set: function (name, value, day) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + (day || 30));
    document.cookie = name + "=" + value + ";expires=" + oDate + "; path=/;";
  },
  get: function (name) {
    let str = document.cookie;
    let arr = str.split("; ");
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr[i].split("=");
      if (newArr[0] === name) {
        return newArr[1];
      }
    }
  },
  del: function (name) {
    this.set(name, "", -1);
  },
};
export default {
  cookie: cookie,
};
\`\`\`

## 获取元素样式【支持内联】

\`\`\`javascript
const getRealStyle = function (obj, styleName) {
  var realStyle = null;
  if (obj.currentStyle) {
    realStyle = obj.currentStyle[styleName];
  } else if (window.getComputedStyle) {
    realStyle = window.getComputedStyle(obj, null)[styleName];
  }
  return realStyle;
};
export default {
  getRealStyle: getRealStyle,
};
\`\`\`

## 时间格式化

\`\`\`javascript
const formatDate = function (fmt, date) {
  //  【'yyyy-MM-dd hh:mm:ss',时间】
  if (typeof date !== "object") {
    date = !date ? new Date() : new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
export default {
  formatDate: formatDate,
};
\`\`\`

## ajax 请求封装

\`\`\`javascript
const ajax = function (conf) {
  // ajax操作
  let url = conf.url,
    data = conf.data,
    senData = [], // 封装后的数据
    async = conf.async !== undefined ? conf.async : true, // ture为异步请求
    type = conf.type || "get", // 默认请求方式get
    dataType = conf.dataType || "json",
    contenType = conf.contenType || "application/x-www-form-urlencoded",
    success = conf.success,
    error = conf.error,
    isForm = conf.isForm || false, // 是否formdata
    header = conf.header || {}, // 头部信息
    xhr = ""; // 创建ajax引擎对象
  if (data == null) {
    senData = "";
  } else if (typeof data === "object" && !isForm) {
    // 如果data是对象，转换为字符串
    for (var k in data) {
      senData.push(encodeURIComponent(k) + "=" + encodeURIComponent(data[k]));
    }
    senData = senData.join("&");
  } else {
    senData = data;
  }
  try {
    xhr = new ActiveXObject("microsoft.xmlhttp"); // IE内核系列浏览器
  } catch (e1) {
    try {
      xhr = new XMLHttpRequest(); // 非IE内核浏览器
    } catch (e2) {
      if (error != null) {
        error("不支持ajax请求");
      }
    }
  }
  xhr.open(type, type !== "get" ? url : url + "?" + senData, async);
  if (type !== "get" && !isForm) {
    xhr.setRequestHeader("content-type", contenType);
  }
  for (var h in header) {
    xhr.setRequestHeader(h, header[h]);
  }
  xhr.send(type !== "get" ? senData : null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        if (dataType === "json" && success != null) {
          let res = "";
          try {
            res = eval("(" + xhr.responseText + ")");
          } catch (e) {
            console.log(e);
          }
          success(res); // 将json字符串转换为js对象
        }
      } else {
        if (error != null) {
          error("通讯失败!" + xhr.status);
        }
      }
    }
  };
};
export default {
  ajax: ajax,
};
\`\`\`

## fetch 请求封装

\`\`\`javascript
const fetch = function (url, setting) {
  // fetch请求的封装
  let opts = {
    // 设置参数的初始值
    method: (setting.method || "GET").toUpperCase(), // 请求方式
    headers: setting.headers || {}, // 请求头设置
    credentials: setting.credentials || true, // 设置cookie是否一起发送
    body: setting.body || {},
    mode: setting.mode || "no-cors", // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || "follow", // follow, error, manual
    cache: setting.cache || "default", // 设置 cache 模式 (default, reload, no-cache)
  };
  let dataType = setting.dataType || "json"; // 解析方式
  let data = setting.data || ""; // 参数
  let paramsFormat = function (obj) {
    // 参数格式
    var str = "";
    for (var i in obj) {
      str += \`\${i}=\${obj[i]}&\`;
    }
    return str.split("").slice(0, -1).join("");
  };

  if (opts.method === "GET") {
    url = url + (data ? \`?\${paramsFormat(data)}\` : "");
  } else {
    setting.body = data || {};
  }
  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then(async (res) => {
        let data =
          dataType === "text"
            ? await res.text()
            : dataType === "blob"
            ? await res.blob()
            : await res.json();
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default {
  fetch: fetch,
};
\`\`\`

## axios 请求封装

\`\`\`javascript
import axios from "axios";
export default class Server {
  axios(method, url, data) {
    return new Promise((resolve, reject) => {
      const _option = {
        method,
        url,
        timeout: 1000 * 300,
        params: null,
        data: data,
        headers: {
          "content-type": "application/json",
        },
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        },
      };
      axios.request(_option).then(
        (res) => {
          if (res.data.code != 0) {
            console.error("connent error");
          }
          resolve(
            typeof res.data === "object" ? res.data : JSON.parse(res.data)
          );
        },
        (error) => {
          if (error.response) {
            reject(error.response.data);
          } else {
            reject(error);
          }
        },
        axios.interceptors.response.use((response) => {
          // response 拦截器
          return response;
        })
      );
    }).catch((res) => {
      return {
        msg: "connent error",
      };
    });
  }
}
\`\`\`

## 判断设备是 android 还是 ios 还是 web

\`\`\`javascript
const isDevice = function () {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    // ios
    return "iOS";
  }
  if (/(Android)/i.test(navigator.userAgent)) {
    return "Android";
  }
  return "Web";
};
export default {
  isDevice: isDevice,
};
\`\`\`

## 判断是否微信

\`\`\`javascript
const isWx = function () {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === "micromessenger") {
    return true;
  }
  return false;
};
export default {
  isWx: isWx,
};
\`\`\`

## 浏览器文本复制

\`\`\`javascript
const copyTxt = function (text, fn) {
  if (typeof document.execCommand !== "function") {
    console.log("复制失败，请长按复制");
    return;
  }
  var dom = document.createElement("textarea");
  dom.value = text;
  dom.setAttribute("style", "display: block;width: 1px;height: 1px;");
  document.body.appendChild(dom);
  dom.select();
  var result = document.execCommand("copy");
  document.body.removeChild(dom);
  if (result) {
    console.log("复制成功");
    typeof fn === "function" && fn();
    return;
  }
  if (typeof document.createRange !== "function") {
    console.log("复制失败，请长按复制");
    return;
  }
  var range = document.createRange();
  var div = document.createElement("div");
  div.innerHTML = text;
  div.setAttribute("style", "height: 1px;fontSize: 1px;overflow: hidden;");
  document.body.appendChild(div);
  range.selectNode(div);
  var selection = window.getSelection();
  console.log(selection);
  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
  selection.addRange(range);
  document.execCommand("copy");
  typeof fn === "function" && fn();
  console.log("复制成功");
};
export default {
  copyTxt: copyTxt,
};
\`\`\`

## 判断两个数组是否相等

\`\`\`javascript
const arrayEqual = function (arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
export default {
  arrayEqual: arrayEqual,
};
\`\`\`
`,Hs=`---
title: markdwon基本使用


tags: 
    - markdown
    - 博客
categories: 博客
cover: https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/markdwon.2qmmltieb940.jpg
abbrlink: '690e272'
date: 2021-04-18 11:32:48
---

## markdwon 简介
markdwon 作为当前编写文档的一种热门语言，对任何一位博主来说都是一种必备的技能，下面我们来简单聊聊它的基本使用

---


#### 标题
在markdown中 使用 # 来表示标题 比如#代表一级标题 ##代表二级标题 以此类推
\`\`\`markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo1.5wlivsv1ci80.png)

#### 字体
使用符号来代表文字的各种状态
\`\`\`markdown
**这是加粗的文字**
*这是倾斜的文字*\`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo2.fw3azysvtdk.png)

#### 分割线
分割线通常使用 三个- 即可

---

#### 插入图片
\`\`\`markdown
![图片详情](图片地址)
\`\`\`
例如\`![百度](http://lc-BA3hUEqE.cn-n1.lcfile.com/A1ybWwJiHMKW43j2DBjv7mu6fDgSmoEy/demo3.png)\`
![百度](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo3.8555pmvtcjw.png)
当鼠标悬浮图片时，就会出现百度字样

*括号内的地址可以为相对路径或绝对路径，个人推荐绝对路径，可以把图片资源放到[图床网站](https://withpinbox.com/explore/collection/332056)上，我的图片放到了 leancloud 网站上，如果感兴趣可以移步本站的相关文章*

#### 超链接
\`\`\`markdown
[超链接名](url)
\`\`\`
例如\`[百度](www.baidu.com)\`
[百度](http://www.baidu.com)

#### 列表
列表分为 无序列表和 有序列表和 嵌套列表

无序列表使用 - + * 任意一种即可
例如
\`\`\`markdown
- 列表内容
+ 列表内容
* 列表内容
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo4.28su82vs2yf4.png)

有序列表使用数字加点的方式
\`\`\`markdown
1. 列表内容
2. 列表内容
3. 列表内容
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo5.4wrn9bnx5u60.png)

嵌套列表在上下级之间敲三个空格
\`\`\`markdown
- 一级无序列表   
   - 二级无序列表
   - 二级无序列表
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo6.377bih6oqwo0.png)

\`\`\`markdown
1. 有序列表
   1.有序列表
   2.有序列表
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo7.6ipwg7x5oys0.png)


#### 表格
\`\`\`markdown
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
\`\`\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageMarkDwon/demo8.730lp7a4a6o0.png)


#### 代码块
单行代码使用 \`包起来即可(英文输入法下 键盘左上角的~键)
多行代码使用一对 \`\`\` 包起来

#### 还有一些高级用法 如数学公式，流程图，时序图等 将在后续补充`,Ms=`---\r
title: 详解HTTP协议\r
author: FishBand\r
cover: >-\r
  \`https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageHttp/http.4qpg71r4yrk0.jpg\`\r
tags:\r
  - 计算机网络\r
  - HTTP\r
  - 前端\r
categories: 网络\r
abbrlink: 256d780b\r
date: 2021-06-16 22:11:56\r
img:\r
---\r
\r
## HTTP 协议简介\r
\r
HTTP（HyperText Transfer Protocol）是互联网上应用最为广泛的一种网络协议。所有的 WWW 文件都必须遵守这个标准。\r
\r
### HTTP 工作原理\r
\r
HTTP 协议工作于客户端-服务端架构之上。浏览器作为 HTTP 客户端通过 URL 向 HTTP 服务端即 WEB 服务器发送所有请求。\r
\r
\`\`\`javascript\r
// HTTP 请求示例\r
const response = await fetch('https://api.example.com/data', {\r
  method: 'GET',\r
  headers: {\r
    'Content-Type': 'application/json'\r
  }\r
})\r
\r
const data = await response.json()\r
console.log(data)\r
\`\`\`\r
\r
### 常见状态码\r
\r
- **200 OK** — 请求成功\r
- **301 Moved Permanently** — 资源已永久重定向\r
- **400 Bad Request** — 请求语法错误\r
- **404 Not Found** — 资源不存在\r
- **500 Internal Server Error** — 服务器内部错误\r
\r
### HTTP vs HTTPS\r
\r
HTTPS 在 HTTP 的基础上加入了 SSL/TLS 协议，使得通信内容被加密传输，更加安全。\r
\r
> 💡 提示：现代 Web 开发中，建议始终使用 HTTPS 来保护用户数据安全。\r
`,Fs=`---
title: Nginx (1. 快速使用)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/createBlog/ng.1z9049p1kqbk.jpg
abbrlink: 2bb4c451
date: 2021-06-04 16:40:01
img:
tags:
  - 前端
  - 项目构建
categories:
---

# 简介

Nginx 是一款HTTP和反向代理服务器，它的内存占用少，能够支持高达五万个并发连接响应，其主要有三个功能，反向代理、负载均衡

## 反向代理

1.  正向代理，就相当于 VPN，当你想要访问一个服务器但是由于某种原因不能直接访问时，可以去访问一个代理服务器，再由那个代理服务器去访问。正向代理是代理客户端
2. 反向代理，当用户发起请求想要访问某台服务器时，这个请求会指向一台代理服务器，代理服务器再将访问分发给其他服务器。反向代理是代理服务端

## 负载均衡

当某一时刻用户访问量特别大时，服务器的压力就会非常大，此时就会用到负载均衡，来减轻服务器的压力，Nginx主的负载均衡策略有 轮询、加权轮询、iphash等

1.  轮询： 例如有三台服务器，第一次请求访问到服务器一，第二次访问到服务器二，第三次访问到服务器三，这样依次循环
2. 加权轮询：若是某台服务器性能更加强大，则该服务器就会处理更多的请求，反之更少
3. iphash： 根据用户的ip来永久指定某台服务器，这样这个用户的请求永远只达到这台服务器，可以解决session共享的问题

# [下载](https://nginx.org/en/download.html)安装

## 在windows下

将下载好的安装包解压后（解压目录不要有中文），打开conf目录下的nginx.con文件，可以看到监听的端口是80，随后，在根目录中双击或使用cmd运行 start nginx 启动(没有启动日志)，在浏览器访问 localhost 80端口即可

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNginx/demoN1.4ed6hnf65zc0.jpg)

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNginx/demoN2.6oepfp2ojs40.jpg)

## 在 Linux 下

使用xftp将文件传输至 centos，并解压，得到以下文件

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNginx/demoN3.12t6simygzs.jpg)

随后执行 \`./configure\` ，再执行 \`make\` 命令 和 \`make install \`

全部执行完之后 使用 \`whereis nginx\` 查看所在位置，并cd过去，执行它 sbin 目录下的 nginx 即可启动 \`./nginx\`



# 常用命令

\`\`\`
./nginx  启动
./nginx -s -stop  强制停止
./nginx -s quit 正常停止
./nginx -s reload 重新加载配置文件
ps aux|grep nginx 查看nginx 进程
\`\`\`

# 修改配置信息就行反向代理

\`\`\`nginx
## 全局配置
events {
    worker_connections  1024;
}


http {
    ## 主要配置
    
    ## 负载均衡配置
    upstream test{
        # 服务器资源 例如这里有两个资源 weight为权重，全部为一时则轮询，否则进行加权轮询
        server 127.0.0.1:9000 weight=1;
        server 127.0.0.1:8080 weight=1;
    }
    
    upstream testt{
        server 127.0.0.1:8080 weight=1;
    }
    
    ## 请求转发
    ## 每一个 server对象 就是监听一个端口 ，而server对象下的 location 就是该端口下的资源地址
    ## 这里的配置为 监听 http://localhost:80/ 
    server {
        listen       80;
        server_name  localhost;

        ## 每一个location 就是一个请求路径
        ## 例如这里 就是监听 http://localhost:80/ 
        ## 访问这个地址，就会根据这个配置信息就行加载
        location / {
            root   html;
            index  index.html index.htm;
            proxy_pass http://test
        }
        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        
    }
    
    ## 这里 监听 90 端口 下的 /a 地址
    ## http://localhost:90/a
    ## 访问此路径 就会转到上面的 testt 配置 也就是 http://127.0.0.1:8080
    server {
		listen       90;
		server_name  local2;
		location /a {
			root   html;
            index  index.html index.htm;
			proxy_pass http://testt;
		}
	}
    
    

}

\`\`\`

当使用\`nginx -s reload\`生效配置时，若出现*nginx: [error] CreateFile()*错误，则检查logs下是否有 nginx.pid 文件，若没有，则杀掉nginx进程，并重新启动（推荐使用 \`start nginx \`启动）
`,qs=`---
title: npm包管理器
description: npm
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/npm2.2k3huoyhu6m0.png'
tags:
  - 前端
  - nodeJs
  - npm
  - 项目构建
categories: 前端
abbrlink: b3516ab8
date: 2021-04-20 15:57:23
---

# 简介
随着前端模块化时代的到来，花样百出的第三方模块奔涌而出，相对应的就会出现包管理工具。在java中有maven，那么在前端就有npm

# [下载](https://nodejs.org/en/)安装
由于npm被集成在nodeJs里面，所以我们想要使用npm 就必须要安装nodejs

1.  运行nodeJs安装程序，一路选择默认配置安装即可，它会将nodeJs加入环境变量中，不需要我们操心


2.  安装完成之后我们可以使用 \`node -v\` \`npm -v\` 来查看当前nodeJs以及npm版本号
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/demo2.42fvkuv62is0.png)
如果此时版本号能被正常打印出来，就说明我们安装就到此完成了
如果提示 "node"不是内部或外部命令，也不是可运行的程序 或批处理文件，则需要重启电脑，若是重启之后依然提示错误，就需要到下一步，配置环境变量

## 配置环境变量
首先来到node安装目录下，在此处打开命令行窗口，执行 \`node -v\`
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/demo3.7f2qatnuce40.png)
如果版本号能够被正常打印出来，则说明nodejs只能在当前安装目录使用，不能在此路径之外使用，此时则需要配置全局环境变量

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/demo4.xx2g7yrazrk.png)如图所示，添加环境变量即可正常使用npm了

## 配置模块安装位置
既然是一个包管理工具，那么它最大的作用就是下载各种第三方模块，那么它下载的包在哪里呢

在Window7,8,10 中，当全局安装时，包的默认下载路径是 
\`C:\\Users\\[UsersName]\\AppData\\Roaming\\npm\\node_modules\`，如果它安装在C盘的话会造成我们的一些不方便，所以我们可以修改默认安装路径

使用 \`npm config set prefix "url"\`命令来设置默认全局安装路径，双引号中的url就是你想要安装的路径,全局安装的路径需要再配置到环境变量中

同时我们也可以通过 \`npm config set cache "url"\` 来设置缓存路径

设置完成之后就可以通过 \`npm root -g\` 来查看第三方模块全局安装的路径了

# 使用npm管理工程
当要创建一个中小型项目时，通常会在工程目录下使用 \`npm init\` ，这个命令就是初始化node工程的命令，运行完之后，会让你输入一些配置信息，如果没有特别配置，一路回车即可。

运行完之后，会在目录下生成一个 package.json 文件，这个文件主要是用来记录这个项目的详细信息的，它会将我们在项目开发中所要用到的包，以及项目的详细信息等记录在这个项目中。方便在以后的版本迭代和项目移植的时候会更加的方便。

在package.json中我们可以看到如下信息
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/demo5.rrmeslhwdvk.png)
如项目名称、项目描述、作者等等

当我们下载依赖后，会自动生成 node_models 文件夹，这就是npm存放模块的地方
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/demo7.1ca78ivt3fts.jpg)

同时也会在 package.json 中生成对应的第三方模块信息，我们也可以手动删除/修改三方包配置信息
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageNpm/demo8.51h05ekyhg80.png)

每当我们运行 \`npm install \`时，node会自动在当前目录下找到 package.json这个文件，然后根据文件中的配置信息下载或修改第三方库

至此，npm初始化工程就完成了

# npm 安装/卸载三方库
  1.  \`npm install xxx\` 也被简写成 \`npm i xxx\` 这是最常见的下载方式，它会把包安装到当前目录下的node_modelus中
  2. \`npm install xxx@1.x.x\` 可以精确安装到某个版本
  3.  \`npm install --save xxx\` 也被简写成 \`npm install -s xxx\` 这种方法会将下载的模块信息写入到 package.json 中的dependencies列表中
  4. \`npm install --save-dev xxx\` 也被简写成 \`npn install -D xxx\` 这种方法会将下载的模块信息写入到 package.json 中的devDependencies列表中
     **与第二种方法相比dependencies 是运行时的依赖，而devDependencies是开发时的依赖。也就是说，采用 --save-dev 安装的包我们发布后是用不到的，只有在开发时用到** 
  5. \`npm install -g xxx\` 会将模块安装到全局，也就是上文配置的全局路径下
  6.  使用 \`npm uninstall xxx\` 或 \`npm uninstall -g xxx\` 可卸载模块，如全部卸载则使用 \`npm uninstall -all\`

# cnpm 
当使用npm时，有时会遇到下载速度慢或者下载失败的问题，这是因为默认的仓库地址是国外地址，因为某些原因有时候会访问失败，换成国内的镜像即可
执行
\`npm install -g cnpm --registry=https:registry.npm.taobao.org\`
\`cnpm -v\`
至此，当npm下载模块出错时，可以尝试使用国内镜像的cnpm进行下载

# 完结
npm作为前端一个强大的包管理器，在某些方面，它甚至能与maven相提并论，用户不仅可以使用npm下载模块，也可以使用npm分享代码，掌握npm已经成了前端的标配`,zs=`---
title: 前端框架--React（1、基础语法）
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageReact/demo.11iudcxjtjk0.jpg
tags: 
  - 前端 
  - React
categories: 前端
abbrlink: 2d23d360
date: 2021-05-22 19:40:47
img:
---

# 什么是React

+ React 是一个用于构建用户界面的 JavaScript 库，能够帮助你操作DOM呈现页面效果

+ 使用了虚拟DOM和优秀的Diffing语法，减少了与真实DOM的交互

+ 具有组件化的特点，并且在React中组件通常以函数式组件或类式组件存在
+ 技术成熟，社区完善，配件齐全，适用于大型Web项目

# 安装方式

1. 通过在线[cdn](https://www.runoob.com/react/react-install.html) ,使用script标签导入

2. 通过安装cli脚手架

   \`npm i -g create-react-app\`  安装React脚手架工具

   \`create-react-app [projectName]\` 创建基本的React项目

   \`npm start\`

# 基本语法

### jsx 

在React中 使用了jsx来代替常规的JavaScript。JSX= Javascript+ xml, 就是Javascript和XML结合的一种格式，是 JavaScript 的语法扩展。它有些像jsp，也是将开发语言混在html当中。

jsx 语法规则： 

1. 定义虚拟DOM时，不要写引号

2. 标签中混入js表达式要用{}

3. 样式的类名指定不要用class 要用className

4. 内联样式，要用\`style={{key:value}}\`的形式去写

5. 只有一个根标签 且 标签必须闭合

6. 标签首字母 若小写开头 则转化为html中的同名元素 若大写开头 则被认定是组件

7. jsx 中的{}中只能写js表达式 如

   \`\`\`javascript
   1. a
   2. a+b
   3. demo(1)
   4. arr.map
   5. function name() {}
   \`\`\`

   

### state

\`\`\`react
import { Component } from 'react'

class App extends Component {
    // 在 constructor构造器中主要用于定义 状态，也就是常用的 state
    // state可以看作一个全局私有变量，除了设置了它的组件，其余组件都无法使用
	constructor() {
		super(...arguments)
		this.state = {
			text: 'this is a HomePageeeeee!!!!!',
		}
	}
}

export default App
\`\`\`

注意：

- 不要直接修改state，如果需要修改state中的值，则使用 setState方法

  \`\`\`rea
  this.state.text = 'hello' // ×
  this.setState({text:'hello'}) // √
  \`\`\`

- state的赋值更新可能是异步的，如果你需要依赖它的更新去进行一些操作的话，可以让 \`setState()\` 接收一个函数而不是一个对象

  \`\`\`react
  this.setState(function(state, props) {
    return {
      text: state.text + props.seb1
    };
  });
  \`\`\`

- state的更新会被合并 如果state包含多个属性，你可以使用 setState() 来单独更新它

  

# 页面渲染

React页面渲染的核心就是 **Render**函数，它会将return的元素渲染到页面上

### 函数式编程

\`\`\`react
import ...
// 这是一个简单的函数式组件渲染

// 创建函数式组件 当函数retrun html元素时，这个函数会被认为是一个 函数组件
// 组件的名字就是函数的名称（大写）在html中如果需要使用js，则使用 {}包括起来
function  demo() {
    let state = {text: ''this is a HomePageeeeee!!!!!}
    return <h2>我是{state.text}</h2>
}

export default demo
\`\`\`

### 类式编程

\`\`\`react
import ...

class App extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			text: 'this is a HomePageeeeee!!!!!',
		}
	}

	render() {
		let { text } = this.state
		return (
			<div className='App'>
				<header className='App-header'>
					<p>{text}</p>
				</header>
			</div>
		)
	}
}

export default App
\`\`\`

### props参数

组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

注意：无论是函数式组件还是类式组件，都不能修改props。

\`\`\`react
function  demo(props) {
    return <h2>我是{props.name}</h2>
}
\`\`\`

\`\`\`react
class Welcome extends React.Component {
  render() {
    return <h1>我是{this.props.name}</h1>;
  }
}
\`\`\`

### 循环渲染列表和条件渲染

\`\`\`react
import ...

class App extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			list: [{name: '张三'， age: 18}, {name: '李四'， age: 20}],
		}
	}
    
    changeText(){
        log('in')
    }

	render() {
		let { list } = this.state
		return (
			<div className='App'>
				<header className='App-header'>
                    {list.forEach(item=>{
                        (
                        	<p>{item.name}</p>
                        	<p>{item.age}</p>
                    		if(item.name == '张三'){
                            	<button onClick={changeText}></button>
                        	}
                        )
                    })}
					
				</header>
			</div>
		)
	}
}

export default App
\`\`\`



### 嵌套组件

\`\`\`react
import ...

function  demo(props) {
    return <h2>我是{props.name}</h2>
}

function  demo2() {
    <Demo name="topTab"></Demo>
    return <h2>我是{state.text}</h2>
}

export default demo
\`\`\`

# 事件处理

### 内置生命周期事件

React组件的生命周期分为三个状态

- Mounting（挂载）：已插入真实DOM  回调函数执行顺序:
  - constructor()  // 先初始化数据
  - render()  // 后初始化试图
  - componentDidMount() // 回调通知
- Updating（更新）：正在被重新渲染，当组件的props或state发生改变时：
  - render() // 重新渲染视图
  - componentDidUpdate() // 回调通知
- Unmounting(卸载)：已移出真实 DOM，卸载组件之前
  - componentWillUnmount()

### 自定义事件

#### 基础语法

\`\`\`react
import ...

class App extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			text: 'this is a HomePageeeeee!!!!!',
		}
	}
    
    changeText(){
        this.setState({text: "click me "})
    }

	render() {
		let { text } = this.state
		return (
			<div className='App'>
				<header className='App-header'>
					<p>{text}</p>
                    <button onClick={changeText}></button>
				</header>
			</div>
		)
	}
}

export default App
\`\`\`

#### 默认行为

在 React 中不能通过返回 \`false\` 的方式阻止默认行为。必须显式的使用 preventDefault。

\`\`\`react
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

#### this指向

由于ES6的Class内部特性，React组件内部的方法需要绑定this指向。

在整个Class类中，所有的this指向都是Class的实例，但是当回调函数被赋值后，其体内的this指向并不会继承原本this的指向，因为此刻触发该回调函数的并不是Class的实例。所以你需要手动绑定该this指向，否则它将会是undefinded。

解决方案：

1. 箭头函数

   \`\`\`react
   import ...
   
   class App extends Component {
   	constructor() {
   		super(...arguments)
   		this.state = {
   			text: 'this is a HomePageeeeee!!!!!',
   		}
   	}
       
       changeText(){
           log('this')
       }
   
   	render() {
   		let { text } = this.state
   		return (
   			<div className='App'>
   				<header className='App-header'>
   					<p>{text}</p>
                       <button onClick={()=>this.changeText}></button>
   				</header>
   			</div>
   		)
   	}
   }
   
   export default App
   \`\`\`

2. 使用bind()函数手动绑定this

   \`\`\`react
   import ...
   
   class App extends Component {
   	constructor() {
   		super(...arguments)
   		this.state = {
   			text: 'this is a HomePageeeeee!!!!!',
   		}
   	}
       
       changeText(){
           log('this')
       }
   
   	render() {
   		let { text } = this.state
   		return (
   			<div className='App'>
   				<header className='App-header'>
   					<p>{text}</p>
                       <button onClick={this.changeText.bind(this)}></button>
   				</header>
   			</div>
   		)
   	}
   }
   
   export default App
   \`\`\`

3. public class fields 语法，这种语法需要配置开启，使用\`Create React App\` 命令创建的项目默认开启

   \`\`\`react
   import ...
   
   class App extends Component {
   	constructor() {
   		super(...arguments)
   		this.state = {
   			text: 'this is a HomePageeeeee!!!!!',
   		}
   	}
       
       changeText = ()=> {
           log('this')
       }
   
   	render() {
   		let { text } = this.state
   		return (
   			<div className='App'>
   				<header className='App-header'>
   					<p>{text}</p>
                       <button onClick={this.changeText}></button>
   				</header>
   			</div>
   		)
   	}
   }
   
   export default App
   \`\`\`

#### 传递参数

\`\`\`react
import ...

class App extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			text: 'this is a HomePageeeeee!!!!!',
		}
	}
    
    changeText(str){
        log(str) // log 'hello'
    }

	render() {
		let { text } = this.state
		return (
			<div className='App'>
				<header className='App-header'>
					<p>{text}</p>
                    <button onClick={(e) => this.changeText('hello', e)}></button>
				</header>
			</div>
		)
	}
}

export default App
\`\`\`

\`\`\`react
import ...

class App extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			text: 'this is a HomePageeeeee!!!!!',
		}
	}
    
    changeText(str){
        log(str) // log 'hello'
    }

	render() {
		let { text } = this.state
		return (
			<div className='App'>
				<header className='App-header'>
					<p>{text}</p>
                    <button onClick={this.changeText.bind(this, 'hello')}></button>
				</header>
			</div>
		)
	}
}

export default App
\`\`\`





`,Us=`---
title: typescript基础-02(类与泛型)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageTs/demo1.3v20vrbkwkc0.jpeg
tags:
  - 前端
  - TypeScript
categories: 前端
abbrlink: 232ad360
img:
---

# 类

typescript 的类中添加了许多面向对象语言的特性

**类的定义**

\`\`\`typescript
class Dog {
    constructor(name: string) {
        this.name = name // 在ts中，类的属性必须初始化
    }
    name: string
    run() {}
}
\`\`\`

**类的继承**

\`\`\`typescript
// 使用 extends 修饰符进行继承
class Husky extends Dog {
    constructor(name: string, color: string) {
        // 在构造器中 必须包含super调用
        super(name)
        // 给子类的属性初始化 必须在super后面
        this.color = color
    }
    color: string
}

\`\`\`

**类的公有，私有以及受保护成员**

类中的成员默认是共有 public , 也可以使用私有 private, 私有成员只能在类的本身调用，不能被子类以及实例调用

protected受保护成员只能在 类或者子类中访问，不能在实例中访问

\`\`\`typescript
class Dog {
    // 当给构造函数添加private后，则说明这个类既不能被继承也不能被实例化
    private constructor(name: string) { 
        this.name = name
    }
    readonly age: number = 4 //只读成员，必须初始化
    private say() {} // 定义私有成员
    protected pro() {} // 定义受保护成员
}
\`\`\`

**类的静态成员**

静态成员只能通过类名调用可以被继承， 不能通过子类调用

\`\`\`typescript
class Dog {
    constructor(name: string) { 
        this.name = name
    }
    static food: string = 'milk' // 定义受静态成员
}
\`\`\`

**抽象类**

抽象类只能被继承，不能被实例化。

在抽象类中可以有具体的方法实现，这样方便子类调用

也可以没有具体的实现，这就构成一个抽象方法，在子类中必须实现

\`\`\`typescript
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void;
} 


class Dog extends Animal{
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    run() { }
    sleep() {
        console.log('dog sleep');
    }
}
\`\`\`

**多态**

\`\`\`typescript
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void;
}

class Dog extends Animal{
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    run() { }
    sleep() {
        console.log('dog sleep');
    }
}

class Cat extends Animal{
    sleep() {
        console.log('cat sleep');
    }
}

let cat = new Cat()
let dog = new Dog('wangwangwang')
let animals: Animal[] = [cat, dog]
animals.forEach(i => {
    i.sleep() //每一个对象都会执行不同的sleep方法
})
\`\`\`

**类的链式调用**

\`\`\`typescript
class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
class MyFLow extends WorkFlow {
    next() {
        return this
    }
}
// 调用子类的方法，返回子类的类型|再调用父类的方法，返回父类的类型|再调用子类的方法，返回子类的类型
new MyFLow().next().step1().next()
\`\`\`

**类实现接口**

接口可以规范类的成员，类实现接口时，必须实现接口中的所有成员

\`\`\`typescript
interface Human {
    name: string
    eat() : void
}
class MySelf implements Human{
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    age: number;
    name: string;
    eat() {
        console.log('i am eatting');
    }
}
\`\`\`

**接口继承接口**

\`\`\`typescript
interface Human {
    name: string
    eat() : void
}

interface Children extends Human{
    run(): void;
}

interface Boy extends Human, Children{ }
class Aboy implements Boy{
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() {
        console.log('aboy eatting');
    }
    run() {
        console.log('aboy running');
    }
}
\`\`\`

**接口继承类**

\`\`\`typescript
class Animal {
    eat() {
        console.log('eatting');
    }
}
interface Dog extends Animal{}
// 此时，Dog接口中包含 Animal类中的成员
\`\`\`

**类和接口之前的关系**

接口和接口之间可以继承，以实现接口的复用

类与类之间可以继承，以实现属性和方法的复用

接口可以通过类来实现，但是接口只能约束类的公有成员

接口也可以抽离出类的成员，抽离的时候会包括共有，私有和受保护成员

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageTs/demo1.lu91hamy8rk.jpg)

# 泛型

泛型可以保证 函数可以接受任意参数，且返回值类型与参数类型一致

**泛型函数的定义**

\`\`\`typescript
function log<T>(value: T): T {
    console.log(value);
    return value
}
log<string[]>(['a','b']) //声明泛型类型
log(['a','b']) // 使用类型推断 
\`\`\`

**泛型接口的定义**

\`\`\`typescript
function log<T>(value: T): T {
    console.log(value);
    return value
}
// 定义泛型接口，其默认为string类型
interface Log<T = string>{
    (value: T) : T
}
let myLog: Log = log
myLog('1')
\`\`\`

**泛型类的定义**

\`\`\`typescript
class Log<T> {
    show(value: T) {
        console.log(value);
        return value
    }
}
let log1 = new Log<string>()
log1.show('hahah')
\`\`\`

`,Ws=`---
title: typescript基础-03(类型检查机制与高级类型)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageTs/demo1.3v20vrbkwkc0.jpeg
tags:
  - 前端
  - TypeScript
categories: 前端
abbrlink: 80c5d641
img:
---

# 类型检查机制

## 类型推断

ts会根据表达式 右边的值 来推断 左边变量的类型

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageTs/demo2.78ynw2o9djk0.jpg)

当有多个不同类型的值时，ts会推断出一个兼容性强的通用类型

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageTs/demo3.62ekalhmdio0.jpg)



## 类型断言

当你完全确定值的类型时，ts提供一种方法，允许你推倒它的类型推断，就是类型断言

\`\`\`typescript
interface Foo{
    bar: number
}
let foo = {} as Foo
foo.bar = 1
\`\`\`

类型断言可以增加代码的灵活性，在改造一些旧代码时非常方便，但是使用类型断言要避免滥用，要对上下文环境有充足的预判，没有任何根据的类型断言会给代码带来安全隐患

## 类型兼容

当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y

X兼容Y : X(目标类型) = Y (源类型)

**接口兼容**

\`\`\`typescript
interface X {
    a: any,
    b: any
}
interface Y {
    a: any,
    b: any,
    c: any
}
let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
y = x //y接口要求要有三个属性，而x有两个，满足条件
\`\`\`

**函数兼容**

函数兼容要满足三个条件： 满足参数个数，满足参数类型，满足返回值类型 

\`\`\`typescript
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

//1. 参数个数
let handle1 = (a: number) => { }
hof(handle1)
let handle2 = (a: number,b: number,c: number) => { }
hof(handle2) // Handler需要两个参数，而这里给了三个，则不满足条件
// 可选参数
let a = {p1: number, p2: number} => {}
let b = {p1?: number, p2?: number} =>{}
let c = (...args: number[]) => {}
a = b
a = c // 固定参数可以兼容可选参数和剩余参数
b = c  b = a //错误  // 可选参数不兼容固定参数和剩余参数


//2. 参数类型
let handle3 = (a: string) => { }
hof(handle3)//参数类型不同，不能兼容

interface Ponit3D {
    x: number,
    y: number,
    z: number
}
interface Point2D {
    x: number,
    y: number
}
let p3d = (point: Ponit3D) => { }
let p2d = (point: Point2D) => { }
p3d = p2d  // 对象的兼容规则是 对象成员多的兼容成员个数少的  与接口兼容的规则相反
p2d = p3d  // 错误

//3. 返回值类型
let f = () => ({ name: 'Alice' })
let g = () => ({ name: 'Alice', location: 'Beijing' })
f = g
g = f  // 错误
\`\`\`

**枚举兼容**

 \`\`\`typescript
 enum Fruit { Apple, Banana }
 enum Color { Red, Blue }
 let fruit: Fruit.Apple = 3
 let no: number = Fruit.Apple
 let color: Color.Red = Fruit.Apple // 错误 // 枚举之前是不兼容的
 \`\`\`

**类兼容**

\`\`\`typescript
class A {
    constructor(p: number, q: number) { }
    id: number = 1
    private name: string = 'zhangsan'
}
class B {
    static s = 1
    constructor(p: number) { }
    id: number = 2
    private name: string = 'zhangsan' //当类中有私有成员，不构成兼容，只有子类能够兼容
}
let aa = new A(1, 2)
let bb = new B(1)
aa = bb // 静态成员和构造函数不参与比较，如果他们有相同的实例成员，他们的实例就可以兼容
bb = aa // 这里两个实例都具有相同的实例成员id
\`\`\`

**泛型兼容**

\`\`\`typescript
interface Empty<T>{
    value: T
}
let obj1: Empty<number> = {} //当接口中没有成员的时候可以兼容
let obj2: Empty<string> = {} //当接口中的类型参数 T 被接口成员使用了的时候，才会影响泛型的兼容性
obj1 = obj2

\`\`\`

**泛型函数**

\`\`\`typescript
let log1 = <T>(x: T): T => {
    console.log('x');
    return x
}
let log2 = <U>(y: U): U => {
    console.log('y');
    return y
}
log1 = log2 // 当两个泛型函数的定义相同，但是没有指定类型参数，他们之间是可以兼容的
\`\`\`

**结构之间兼容：成员少的兼容成员多的**

**函数之间兼容：参数多的兼容参数少的** 

## 类型保护

ts能够在特定的区块中保证变量属于某种确定的类型

可以在此区块中放心的引用此类型的属性，或调用此类型的方法

\`\`\`typescript
//1. 使用 instanceof
//2. 使用 in
//3. 使用 typeof
let a = String
if (a instanceof String) {
    a.charAt(0)
}
else if (a instanceof Number) {
    a.toFixed(2)
}

\`\`\`

`,Gs=`---
title: typescript基础-01(类型与接口)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageTs/demo1.3v20vrbkwkc0.jpeg
tags:
  - 前端
  - TypeScript
categories: 前端
abbrlink: 3f015abc
date: 2021-09-17 09:43:00
img:
---

# 简介

TypeScript一门是静态弱类型语言，准确的来说，TypeScript 是JavaScript的一个超集，可以把TypeScript文件编译成JavaScript文件，适用于任何JavaScript项目。

在JavaScript中有以下几个特点：

- 没有类型约束，一个变量可能初始化的时候是字符串，一会又变成数字
- 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。
- 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。
- 是 JavaScript 中的函数，可以赋值给变量，也可以当作参数或返回值

这些特点是一把双刃剑，使得语言本身灵活发展无所不能，又使得它代码质量参差不齐，维护成本高，运行时错误多。而TypeScript的出现，很大程度上弥补了JavaScript的缺点。

我们熟知的JavaScript是动态弱类型语言，而TypeScript是静态弱类型语言。那么这两种类型又有什么区别呢？

**动态类型：**

动态类型是指在程序在运行之后才会进行类型检查，而这种方式往往会导致运行错误。

\`\`\`typescript
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
\`\`\`

**静态类型：**

静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。能够在代码编写阶段就能够发现错误

\`\`\`typescript
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
\`\`\`

**强类型：**

对变量的类型有严格的限制，不允许改变变量类型，除非进行强制类型转换。

**弱类型：**

没有过多的约束，变量可以被赋予不同的数据类型。

# 数据类型

ts在js的数据类型基础上，新增了几种数据类型，分别是 void、any、never、元组、枚举和高级类型

## 基础类型

\`\`\`typescript
let str : string | boolean = 'hello world // 声明str变量 为string类型或者boolean类型
str = 10 //此时编辑器会提示错误 不能将类型“10”分配给类型“string | boolean”
\`\`\`

### 数组

\`\`\`typescript
let arr1 : number[] = [1,2,3]
let arr2 : Array<number> = [1,2,3] //数组的声明有两种，其中Array是ts内置的一个泛型接口
let arr3 : Array<number | string> = [1,2,3,'4'] // 使用 | 表达符插入多种类型
\`\`\`

### 元组

元组是一种特殊的数组 它限定了数组的类型于个数

\`\`\`typescript
let tuple : [string, number] = ['0', 1] //它规定了 第一个元素只能是string类型,第二个类型只能是number类型

tuple.push(2) //元组允许往其中插入新元素
console.log(tuple[2]) //但是添加的元素是不能访问的
\`\`\`

### 函数

\`\`\`typescript
let add = (x : number, y : number) => x + y //函数的参数需要声明类型
let add = (x : number, y : number) : number => x + y //也可以为函数返回值声明，通常是可以省略的

let compute : (x : number, y : number) => number //当函数定义的时候声明了类型
compute = (a, b) => a + b //实现的时候就不用声明了
\`\`\`

### 对象

\`\`\`typescript
let obj : {x: number, y: number} = {x:1, y:2} //对象声明时必须 定义它的属性的数据类型
obj.x = 3
\`\`\`

### symbol

\`\`\`typescript
let s1 : symbol = Symbol() // 可以显式的声明symbol类型
let s2  = Symbol() // 也可以直接创建一个 symbol
console.log(s1 === s2) //false
\`\`\`

### undefined, null

\`\`\`typescript
let un: undefined = undefined
let nu: null = null //当声明undefined和null以后，它就只能被赋值于它本身，

let num :number = 1
num = null
// 要想将其他类型的变量赋值为undefined和null，需要到 tsconfig.json中 将strictNullChecks配置项 设置为false
\`\`\`

### void

\`\`\`typescript
let noReturn = ()=>{} //表示没有任何返回值的类型
\`\`\`

### any

\`\`\`typescript
let s //当没有声明变量类型时默认就是any ，any可以代表任何类型 可以任意的赋值，any能完美兼容js
\`\`\`

### never

\`\`\`typescript
let error = ()=>{
    throw new Error('err')
} // never表示永远不会有返回值
\`\`\`

## 枚举类型

### 数字枚举

\`\`\`typescript
enum Role {
    Zero,
    One,
    Two = 4,
    Three
}
console.log(Role.Zero) //0
console.log(Role.Three) //5  数字枚举默认的是依次递增，可以以自己定义值
\`\`\`

### 字符串枚举

\`\`\`typescript
enum Message {
    Susscess = '成功了'
    Fail = '失败了'
}
\`\`\`

### 异构枚举

\`\`\`typescript
enum Role {
    Zero,
    Susscess = '成功了'
} // 将数字枚举 和字符串枚举混合
\`\`\`

### 枚举成员

\`\`\`typescript
enum E {
    // 枚举的成员有四种情况
    a, //没有初始值
    b = E.a, // 对已有枚举成员的引用
    c = 1 + 1, // 常量表达式
    // computed 需要被计算的枚举成员,他们的值不会在程序的编译阶段进行计算，而会保留到程序的执行阶段
    d = Math.random(),
    e = 'abc'.length
}
\`\`\`

### 常量枚举

\`\`\`typescript
const enum Mouth {
    Jan,
    Feb,
    Mar
} //使用const 定义的常量枚举，会在编译之后被移除。当只需要常量不需要枚举变量时，可以使用
\`\`\`

# 接口

## 对象类型接口

\`\`\`typescript
interface List {
    readonly id: number,// 只读属性 不允许修改
    name: string,
    age ? : number,//可选属性 可有可无
        
    // 其二就是定义一个字符串索引签名， 表示用任意的字符串索引List，可以得到任意的结果
    [x:string] : any
    
}//对象类型接口有点类似java中的实体类，可以事先定义若干字段
interface Result {
    data: List[] //然后就将他用数组包起
}

function render(res: Result) {
    res.data.forEach(val => {
        console.log(val.id, val.name);
    })// 定义一个函数，循环遍历其中的值 并打印
}

let result = {
    data: [
        { id: 1, name: 'fish', sex:'男' },
        {id:2, name:'张三'}
    ]
}

// 当传入的不是一个变量，而是一个字面量时，ts会进行类型检查，若想绕过类型检查可以使用类型断言的方式
// 就是告诉强制编辑器，它的类型
// 其一 可以在字面量前加上类型注解或者在末尾加上 as Result(推荐第二种)
render(<Result>{
    data: [
        { id: 1, name: 'fish', sex:'男' },
        {id:2, name:'张三'}
    ]
} 
 // as Result
)
\`\`\`



## 函数类型接口

\`\`\`typescript
// 函数类型的定义方式
//1. 使用一个变量定义函数类型
let add : (x: number, y: number) => number

//2. 使用接口定义
interface Add {
    // 参数类型       返回值
    (x: number, y: number) : number 
}

//3. 使用类型别名
type Add = (x: number, y: number) => number
let add : Add = (a, b) => a + b


\`\`\`

## 混合类型接口

在混合类型接口中，既可以定义函数，又可以像对象一样 拥有属性和方法

\`\`\`typescript
interface Lib {
    (): void;
    version: string;
	doSomething(): void;
}

//let lib: Lib = (() =>{}) as Lib;
//lib.version = '1.0'
//lib.doSomething = () => {}

// 如果想创建多个lib，则需要使用函数封装一下
function getLib() {
    let lib: Lib = (() =>{}) as Lib;
	lib.version = '1.0'
	lib.doSomething = () => {}
    return lib;
}
let lib1 = getLib();
lib1.doSomething();
let lib2 = getLib();
lib2(); 
\`\`\`

`,$s=`---
title: 打包工具-vite
author: FishBand
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVite/download.2xvk2r3zj9k0.jpg'
abbrlink: bc71ccc7
date: 2021-04-21 14:03:05
tags:
  - 前端
  - 项目构建
categories: 前端
description: 
---

# 下载安装

\`npm install -g create-vite-app\`

# vite 与 webpack 的区别

在以往 Vue使用的是vue-cli脚手架, React使用 create-react-app脚手架，虽然脚手架工具不同，但是内部的打包工具还是webpack。而Vite脚手架的底层打包工具是 [Rollup](https://rollupjs.org/guide/en/) 支持打包多页应用程序和工具库，所以Vite脚手架能够在多个框架中都能够使用。

**Vite 为什么比webpack快启动快？**

在webpack中，每次启动都会把整个程序进行打包，而且热部署的时候会把相关的依赖再打包

Vite 把项目分成了两个部分 依赖配置和源代码

- **依赖配置** 依赖部分不会经常变，所以Vite会提前把用到的依赖打包并保存到\`node_modules/.vite\`文件中，依赖的打包使用的是ESBuild工具，使用GO语言开发的所以速度要比JavaScript快得多。

  Vite 只有在 第一次启动/依赖变动/配置变动  才会重新打包依赖，打包完成之后通过http缓存到浏览器中

- **源代码** 直接运行在浏览器中，利用浏览器原生的ESM语法加载模块，当源代码发生变化时，模块热部署只会更新当前页面中的最少的代码

**缺点**

- HMR有时不会更新
- 有些错误提示不友好

# 使用vite 创建应用

**npm**

1. \`npm init vite@latest [项目名] -- --template [应用模板]\`

   其中 可供选择的模板有 \`vue\` \`vue-ts\` \`react\` \`react-ts\` \`preact\` \`preact-ts\` 等等

2. 全局安装vite \`npm install -g create-vite-app\`

   创建项目 \`create-vite-app [项目名]\`

   安装依赖 \`npm install\`

   运行 \`npm run dev\`

**yarn**

1.  安装专门用于构建react 的包\`yarn global add create-react-app\` 

   创建项目 \`create-react-app [项目名]\`

   安装依赖 \`yarn\`

   运行 \`yarn dev\` (如果是react项目则运行 \`yarn start\`)

2. 全局安装vite \`yarn global add create-vite-app\`

   创建项目 \`create-vite-app [项目名]\`

   安装依赖 \`yarn\`

   运行 \`yarn dev\` 

在package.json 中也可以修改各种运行指令
`,Ys=`---
title: 前端框架--Vue(2，计算属性，组件，插槽)
author: FishBand
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg'
tags:
  - 前端
  - Vue
categories: 前端
abbrlink: 7f178534
date: 2021-05-08 09:12:18
img:
---



# 计算属性

计算属性就是当其依赖属性的值发生变化时，这个属性的值会自动更新，与之相关的DOM部分也会同步自动更新。当有数据需要经过复杂逻辑计算时，可以使用计算属性



简单使用 getter语法糖

\`\`\`vue
<template>
  <div>
     <p>{{allPrice}}</p>
  </div>
</template>

<script>
  export default{
    name:'compute',
    data() {
      return{
        shops:[
          {name:'苹果',price:35},
          {name:'西瓜',price:15},
          {name:'香蕉',price:25},
          {name:'菠萝',price:45},
        ]
      }
    },
    computed:{
      //将计算逻辑以函数形式写在 computes中 在template中使用时不需要加(),直接当成属性使用即可
      allPrice(){
        let res = 0
        for(let shop of this.shops){
          res+=shop.price
        }
        return res
      }
    },
    methods:{

    }
  }
<\/script>

<style>
</style>
\`\`\`



完整使用 getter与setter, 计算属性一般是不使用set方法的，所以通常使用上面的getter语法糖形式

\`\`\`vue
<template>
  <div>
     <p>{{allPrice}}</p>
  </div> 
</template>

<script>
  export default{
    name:'compute',
    data() {
      return{
        shops:[
          {name:'苹果',price:35},
          {name:'西瓜',price:15},
          {name:'香蕉',price:25},
          {name:'菠萝',price:45},
        ]
      }
    },
    computed:{
      allPrice{
        setter(newValue){
          //set 方法是监视对应的属性值，当值发生变化时会自动回调set方法
       	  console.log(newValue)
        },
        getter(){
          let res = 0
          for(let shop of this.shops){
            res+=shop.price
          }
          return res
        }
      }
    },
    methods:{

    }
  }
<\/script>

<style>
</style>
\`\`\`



注意：methods与computed 都能够实现计算操作，但是computed的优势在于， computed有缓存，它会把计算好的值做了一层缓存，它会观察对应的值有没有变化，如果有变化则再去清空缓存并计算，这样就提升了程序运行的效率



# 组件

组件是Vue中的一个重要概念，在vue中，每一个界面都是以组件的形式存在的，而组件中还可以再包含组件



## 全局组件

如果网页中某一个部分在多个场景中经常使用，我们就可以将这个部分抽出来作为一个组件进行复用。

例如我们这里有两个页面，里面的内容分别对应网页的头部和底部。如果在多个界面都使用到了这两个部分，我们就可以把它注册成全局组件，这样就可以在所有界面都使用它

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue2/demov1.6eqqg88dkfw0.jpg)



1.  首先在main.js 中引入文件，\`import 变量名 from 文件位置\`

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue2/demov2.52o4qawidak0.jpg)

2.  随后使用 Vue的 compoonet 注册组件 ,第一个值 就是注册的全局组件的名字，我们可以在其他界面通过这个名字来调用这个组件，第二个值就是绑定对应的组件，通过上面的import 定义的名字进行绑定

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue2/demov3.4jo3o5hcr860.jpg)

3.  最后就可以在任意地方来调用这个组件了

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue2/demov4.1s40ftyydrc0.jpg)

## 父子组件通信

1.  父组件向子组件传值：

   以上面的header 为例，再创建一个组件 Header_child 作为它的子组件（注册组件的步骤省略）

   \`\`\`vue
   <template>
     <div>
       {{Smessage}}
     </div>
   </template>
   
   <script>
     name:'Header_child'
     export default{
       data() {
         return{
             Smessage:this.message
         }
       },
       // props 里的数据只做展示用，如需在页面上进行交互修改则需要绑定到data
       props:{ //在props 中声明父组件传进来的数据
         message:{ // 定义属性，父组件向子组件的message传值
           type: String, //声明传进来的数据类型
           default: 'ss' //声明默认值
         }
       },
     }
   <\/script>
   
   <style>
   </style>
   \`\`\`

   

   \`\`\`vue
   <template>
     <div>
       <HeaderC :message="saySomething"></HeaderC> <!-- 使用v-bind 指令，将data中的数据绑定给子组件的 message 属性-->
     </div>
   </template>
   
   <script>
   export default {
     name: "header",
     data() {
       return {
         saySomething: "Welcome to Your Vue.js App"
       };
     },
   };
   <\/script>
   
   <style>
   </style>
   \`\`\`

2.  子组件向父组件传值：

      第一种方式 由于父组件传值使用过v-bind 绑定的，之前学习过双向绑定，所以当子组件的数据发生变化时，父组件对应的值也会变化，所以在子组件中修改绑定的值，即可完成传参

      \`\`\`vue
      <template>
        <div>
            <input type="text" v-model="Cmessage" />
            <button @click="sayOther">确定</button>
        </div>
      </template>
      
      <script>
        name:'Header_child'
        export default{
          data() {
            return{
                Cmessage:''
            }
          },
          methods:{
            sayOther(){
                this.message = this.Cmessage
            }
          },
          props:{ //在props 中声明父组件传进来的数据
            message:{ // 定义属性，父组件向子组件的message传值
              type: String, //声明传进来的数据类型
              default: 'ss' //声明默认值
            }
          },
        }
      <\/script>
      
      <style>
      </style>
      \`\`\`

   第二种方式 事件侦听方式 传值

   \`\`\`vue
   <template>
     <div>
         接收到的数据：{{this.showMessage}}
         <input type="text" v-model="Cmessage" />
         <button @click="sayOther">确定</button>
     </div>
   </template>
   
   <script>
     name:'Header_child'
     export default{
       data() {
         return{
             showMessage:this.message
             Cmessage:''
         }
       },
       methods:{
         sayOther(){
             this.$emit("ChildchangeSay",this.Cmessage)// this.$emit是为了触发父组件的ChildchangeSay事件，Cmessage是子组件传递的数据
         }
       },
       props:{ 
         message:{ 
           type: String, 
           default: 'ss' 
         }
       },
     }
   <\/script>
   
   <style>
   </style>
   \`\`\`

   \`\`\`vue
   <template>
     <div>
       <HeaderC :message="saySomething" @ChildchangeSay="FatherGetSay"></HeaderC> 
     </div>
   </template>
   
   <script>
   export default {
     name: "header",
     data() {
       return {
         saySomething: "Welcome to Your Vue.js App"
       };
     },
       methods:{
           FatherGetSay(val){
               this.saySomething = val
           }
       }
   };
   <\/script>
   
   <style>
   </style>
   \`\`\`

3.  父组件访问子组件

\`\`\`vue
<template>
  <div>
       <Button @click="btnclick">点击调用子组件方法</Button> 
        <HeaderA ref="child"/> <!-- 3.设置ref属性 -->
  </div>
</template>

<script>
import HeaderA from '../Header_child.vue'  //1.导入子组件
    
export default {
  name: "header",
  components:{//2. 挂载至当前组件下
    HeaderA
  },
  data() {
    return {
      saySomething: "Welcome to Your Vue.js App"
    };
  },
  methods:{
      btnclick() {
        console.log(this.$refs.child)
      },
  }
};
<\/script>

<style>
</style>
\`\`\`

\`\`\`vue
<template>
  <div>我是子组件</div>
</template>
<script>
export default {
  name:"Header_child",
  methods: {
    sing() {
      console.log('我是子组件的方法');
    },
  },
};
<\/script>
\`\`\`

使用 this.$refs.属性名 即可访问子组件

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue2/demov5.5ncdzkup2kk.jpg)

4.  子组件访问父组件，与上面相同 使用 $parent 属性访问

\`\`\`vue
<template>
  <div>
    <h1>我是子组件</h1>
    <button @click="btnclick">点击调用父组件方法</button>
  </div>
</template>

<script>
  name:'Header_child'
  export default{
    data() {
      return{

      }
    },
    methods:{
      btnclick() {
        console.log(this.$parent)
      },
      sayHello(){
        console.log('abcd')
      },
    },
  }
<\/script>

<style>
</style>
\`\`\`



# 插槽

插槽类似于拼图，可以在一个较大的模板中，定义一个可活动区域插槽，当这个区域想要更换内容时，往里面插入不同的组件即可，

\`\`\`vue
<template>
  <slot name="left">左边</slot>
  <slot name="center">中间</slot>
  <slot name="right">右边</slot>
</template>
\`\`\`

 \`\`\`vue
<template>
  <div id="all">
      
  <com>
    <template>
      <span v-slot="left">啊啊</span>
      <span v-slot="cebter">zz</span>
      <span v-slot="right">啊啊</span>
	</template>
  </com>
      
  </div>
</template>

<script>

  import com from './test.vue'
  export default {
    name: "Header",
    components:{
      com
    }

<\/script>
 \`\`\`



当父组件想要改变插槽中的内容或数据时，可以通过属性传参

\`\`\`vue
<template>
  <slot :data="list"> //定义data 属性，并赋值list
    <span v-for="item in list">{{item}}</span>
  </slot>
</template>

<script>
  export default{
    name:'test',
    data() {
      return{
        list:['张三','李四','王五']
      }
    }
  }
<\/script>
\`\`\`

\`\`\`vue
<template>
  <div id="all">
  <com>
    <template slot-scope="slot">  <!-- 通过定义的 slot 来引用插槽对象，再通过插槽对象即可访问插槽中的数据  -->
      <button v-for="item in slot.data"></button>
    </template>
  </com>
  </div>
</template>

<script>
  import com from './test.vue'
  export default {
    name: "Header",
    components:{
      com
    }
  };
<\/script>
\`\`\`

`,Js=`---
title: 前端框架--Vue(3，vue-router 路由)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg
tags:
  - 前端
  - Vue
categories: 前端
abbrlink: b9f89be2
date: 2021-05-14 15:32:42
img:
---



# vue-router 路由

前端三大框架都有自己的路由 Angular的ngRouter React的ReactRouter Vue的vue-router

vue-router 是官方的路由插件，跟vue深度集成

主要用于配置组件和url映射关系的，俗称跳界面



# 安装

大家是否还记得，在初始化vueCli时，有一个选项是否选择安装vue-router，如果那时你选择安装，那么ok，vue已经自动帮你配置好了router相关文件

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo10.3bm8nytqjs20.jpg)



如果没有选择，则需要我们手动安装router

1.  使用npm下载\`npm install vue-router --save\`

2. 在src目录下 创建文件夹 router 并在下面创建 index.js 文件，配置路由相关信息

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue3/demo1.20yxqiona7a8.jpg)

3. 在router下的index.js 中进行配置

   \`\`\`javascript
   import Vue from 'vue' //导入vue
   import VueRouter from "vue-router"; //导入router
   
   import Home from "../components/Home"; //导入你需要配置router 的组件
   
   Vue.use(VueRouter)//通过vue.use 安装插件
   
   
   const router = new VueRouter({ //配置 router对象
     mode:'history',//加了这句后 地址栏就不会出现#号
     routes:[ //配置路由和组件之间的映射关系
       { // 每个组件的路由配置都以对象的形式存放在 routes数组中
         path: '/home', // 路径，浏览器访问 / 时，则访问Home组件
         name: 'Home', //定义name 属性，值就是上面 import 后面的 名字
         component: Home// 声明 映射的是哪个组件
       },
       {
         path:'/',
         redirect:'/home' //重定向，当地址栏为空时，则自动跳转到 /home
       }
     ]
   })
   
   export default router //将对象导出
   \`\`\`

4. 在 src下的 man.js 引用 router

   \`\`\`javascript
   import router from './router' //当导入的是一个目录时，会自动寻找该目录下的index文件
   Vue.use(router)
   new Vue({
     el: '#app',
     router, // 将导入的router 挂载到vue实例中
     render:h => h(App)
   })
   \`\`\`

# 基本使用

在 src下的 App.vue 中，使用router-link 来创建视图

\`\`\`vue
<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view> // 路由配置的组件将渲染到这里 相当于一个占位符
        </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>

<script>

export default {
  name: "App",
};
<\/script>
\`\`\`

之后，在组件中使用 router-link 标签 进行视图跳转

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue3/demo2.5fpb8uu6x440.jpg)



其他属性：

replace: 加上replace属性后，点击跳转到该视图后，就不可以使用浏览器的返回键

\`\`\`vue
<router-link to="/" replace>
    <a class="nav-link">主页</a>
</router-link>
\`\`\`



class属性 router-link-active: 当router-link 被点击以后 会被加上一个 class,值为router-link-active，可以根据这个class值来进行样式操作

\`\`\`css
<style scoped>
  .router-link-active{
    color: red;
  }
}
</style>
\`\`\`



默认是  router-link-active ，当需要指定class名时，可以通过

\`\`\`vue
<router-link to="/" active-class="myclass">
    <a class="nav-link">主页</a>
</router-link> 
\`\`\`



不使用router-link 进行页面视图跳转（通过代码方式）：

使用 this.$router.push()  / this.$router.replace()

\`\`\`vue
<template>
	<button @click="go">主页</button>
</template>
<script>
export default {
  name: "header",
  data() {
    return {};
  },
  methods:{
    go(){
      this.$router.push('/home')
      //this.$router.replace('/home')
    }
  }
};
<\/script>
\`\`\`



# 动态路由

 在实际开发中，url地址很可能会跟些其他的东西，比如：
http://localhost:8080/user/username

使用动态路由如下：



在router配置中，在地址后面加上 :参数名 即可接收参数

\`\`\`vue
{
    path:'/user/:id',
    component:user
},
\`\`\`



\`\`\`vue
<template>
  <div id="all">

   <router-link to="/"><el-button type="primary">返回首页</el-button></router-link>
   <router-link :to="/user/userid"><el-button type="primary">查看用户</el-button></router-link>  <!-- 使用v-bind,将data中的userid 赋值上去 在地址后面跟上想要传递的参数  -->
      
    </template>
  </com> -->
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return{
        userid:1
      }
    }
  };
<\/script>
\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
    <h1>我的id 是</h1>
  </div>
</template>

<script>
  export default{
    name:'user',
    data() {
      return{
        userid:''
      }
    },
    computed:{
      userId(){
        return this.$route.params.id
        // 使用 $route（不是$router） 对象获取参数，params后的属性就是配置文件中地址栏后自定义的参数名（id）
        // $router 是配置文件中new出来的整个对象
        // $route 是哪个路由处于活跃状态就会拿到哪个路由对象 
      }
    }
  }
<\/script>

\`\`\`



# 路由的懒加载

当打包构建应用时，js包会变得非常大，影响页面加载

懒加载又叫按需加载，指用到时再加载，只有当路由访问某个组件，才会加载那个组件对应的文件，这样能提高程序运行效率

\`\`\`javascript
import Vue from 'vue' 
import VueRouter from "vue-router"; 

//import user from "../components/user.vue"
const user = ()=> import('../components/user.vue')
//声明user常量，当需要导入时，则调用这个常量

Vue.use(VueRouter)

const router =  new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/user',
      component:user
    },
    {
      path:'*',//当输入的地址都不匹配上面的路由时 进这里
      component:NotFind
    },
    ]});
export default router
\`\`\`



# 路由嵌套/子路由

路由嵌套是指，在一个路由下嵌套多个子路由，如 /home 下还有 /home/user  /home/about 两个路由，这两个嵌套路由也会分别渲染两个组件

\`\`\`javascript
import Vue from 'vue' //导入vue
import VueRouter from "vue-router"; //导入router

import NotFind from "../components/NotFind";
import Home from "../components/Home";
import list from "../components/list";
import user from "../components/user.vue"

Vue.use(VueRouter)

const router =  new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/Home',
      component:Home,
      children:[ // 在配置对象中 添加 children 数组，数组里面的对象将作为它的子路由
        {
          path:'',
          redirect:'user' // 当视图跳转到 home 时，重定向到 子路由user
        }.
        {
          path:'user', // 子路由配置，路径不需要加 /
          component:user
        },
        {
          path:'list', // 子路由配置，路径不需要加 /
          component:list
        },
      ]
    },
    {
      path:'*',//当输入的地址都不匹配上面的路由时 进这里
      component:NotFind
    },
    ]});
export default router
\`\`\`

\`\`\`html
<template>
  <div id="wapper">
    <router-link to="/home/user">个人中心</router-link>
	<router-view></router-view>
    <!-- 仍然 使用router-link 进行路由跳转 --> 
    <!-- 再 为子路由添加 视图 router-view --> 
      
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
      }
    },
  }
<\/script>

<style scoped>
</style>

\`\`\`



# 路由参数传递

使用路由传递参数，需要用到 route 的 query 属性取值

\`\`\`vue
<template>
  <div id="wapper">
    <a @click="goUser">用户中心</a>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        userId:1
      }
    },
    computed:{
    },
    methods:{
      goUser(){
        this.$router.push({
          path:'/user',
          query:{
            id:this.userId
          }
        })
      }
    }
  }
<\/script>

<style scoped>
</style>

\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
    <h1>我是{{$route.query.id}}</h1>
  </div>
</template>

<script>
  export default{
    name:'user',
    data() {
      return{
      }
    },
  }
<\/script>

<style>
</style>

\`\`\`

# 导航守卫

在路由跳转过程中大致可以分为三个部分， 跳转前 跳转中 跳转后，每一个过程都提供了一个函数类似于生命周期 ，能够让你做一些其他的事

1. 全局前置守卫 使用了 router.beforeEach

   \`\`\`vue
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   
   import Mainn from '@/components/Main'
   import UserController from '@/components/account/UserController'
   import login from "@/components/account/Login"
   
   Vue.use(VueRouter)
   
   const router =  new VueRouter({
     mode: 'history',
     routes: [{
         path: '/',
         redirect: '/main'
       },
       {
         path: '/main',
         component: Mainn,
       },
       {
         path: '/user',
         component: UserController,
       },omponent: UploadCenter
       }
     ]
   })
   
   // 每次route 状态发生变化时，都会调用 这个方法
   router.beforeEach((to, from, next) => {
     //to:到哪里去   form：从哪里来  next：下一步
     //结尾必须调用 next()方法，不然路由不会执行跳转
     var token = sessionStorage.getItem('token')
     if (!token) {
       if (to.path === '/login' || to.path === '/') {
          next()
        } else {
          next({ path: '/login' })
        }
     } else {
        next()
       }
    })
   
   export default router
   
   \`\`\`

   

2.  为某个组件单独配置

\`\`\`javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

import Mainn from '@/components/Main'
import UserController from '@/components/account/UserController'

Vue.use(VueRouter)

const router =  new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Mainn,
      props: { //在props属性中定义 name
        name: 'fish'
      }
    },
    {
      path: '/user',
      component: UserController,
      beforeEnter: (to, from, next) => {// 路由跳转此界面  调用此方法
        console.log(from.matched[0].props.default.name)
        next()
      }
    },
           
  ]
})
export default router
\`\`\`

3.   也可以直接在组件中进行处理

\`\`\`vue
<template>
  <div id="wapper">
      <router-link to="user">点我</router-link>
  </div>
</template>
<script>

export default {
  name:'Main',
  data() {
    return{
      name:'fish'
    }
  },
  beforeRouteLeave(to,from,next) {
    let isGo = window.confirm("是否跳转到用户页")
    if(isGo){
      from.meta.name = this.name
      next()
	}  
    else next(false)
  }
};

<\/script>

\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
    
  </div>
</template>

<script>
  export default {
    name: 'UserController',
    data() {
      return {
      }
    },
    beforeRouteEnter(to,from,next) {
      console.log(\`进入了\${from.meta.name}的个人界面\`)
      next()
    },
    methods: {
    }
  }
<\/script>

<style>
</style>

\`\`\`

# vue-router-keep-alive

keep-alive 是 vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染

当视图跳转到其他组件时，当前组件就会被回收销毁，当跳转回这个组件时，这个组件又会被创建，当需要来回跳转时，频繁的创建销毁就会很消耗性能

\`\`\`vue
<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
          
          <!-- 将视图使用 keep-alive 包起来，里面的组件就会缓存下来，不会被销毁，就好比套上了一层保鲜膜 -->
          <!-- 使用 exclude属性可以指定排除哪些组件，相反只指定哪些组件使用include -->
        <keep-alive exclude="UserController,Setting">
          <router-view></router-view>
        </keep-alive>
          
          
        </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>

<script>

export default {
  name: "App",
};
<\/script>

<style>
</style>
\`\`\`

`,Ks=`---
title: 前端框架--Vue(4，Vuex 状态管理器)
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg
tags:
  - 前端
  - Vue
categories: 前端
abbrlink: d028f037
date: 2021-05-16 15:02:29
img:
---



# vuex 是什么

vuex 是vue集成的一个状态管理器，当多个组件都用到了同一个状态变量时，我们可以把那个状态变量交给vuex，这样，所有组件都可以直接从vuex 中获取对应的数据，免去了各个组件相互传参的繁琐过程，而且，vuex是响应式的，当里面的数据发生变化时，所有用到了这个数据的组件都会进行对应的更新



在父子组件中，状态传递通过父子组件传值即可，vuex主要用于各个兄弟组件或毫无关系的组件之间的状态管理。



# 安装与基本使用

1.  使用 \`npm install vuex --save\` 安装

2.  创建 store 文件夹，并建立index.js 文件 用于编写 vuex相关配置

   \`\`\`javascript
   import Vue from 'vue'
   import Vuex from 'vuex'
   
   // 1.安装插件
   Vue.use(Vuex)
   
   // 2.创建对象
   const store = new Vuex.Store({
     state:{ //用于定义状态
   	isLogin:false
     },
     mutations:{ // 用于更改状态
   
     },
     actions:{
   
     },
     getters:{
   
     },
     modules:{
   
     }
   })
   
   // 3.导出对象
   export default store
   
   \`\`\`

3.  在main.js 中导入，并挂载

   \`\`\`javascript
   import Vue from 'vue'
   import App from './App'
   import router from './router'
   import store from './store/index.js'
   
   
   Vue.config.productionTip = false
   
   new Vue({
     el: '#app',
     router,
     store,
     components: { App },
     template: '<App/>'
   })
   
   \`\`\`

4.  在组件中使用

   \`\`\`vue
   <template>
     <div id="wapper">
         <h2>当前的登录状态是 {{$store.state.isLogin}}</h2>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
       };
     },
   };
   <\/script>
   
   <style scoped >
   </style>
   
   \`\`\`

   

# 修改 vuex 中的状态

在配置文件中 配置 mutations 定义两个修改状态的方法

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    isLogin:false
  },
  mutations:{
    clearLoginState(state){
      state.isLogin = false
    },
    loginSuccess(state){
      state.isLogin = true
    }
  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
})

export default store

\`\`\`



在组件中 调用mutations 即可

\`\`\`vue
<template>
  <div id="wapper">
      <button @click="Sublogin">登录</button>
      <button @click="Cenllogin">取消</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    Sublogin(){
      //传入 mutations 中定义的方法
      this.$store.commit('loginSuccess')
    }，
    Cenllogin(){
      this.$store.commit('clearLoginState ')
    }
  }
};
<\/script>

<style scoped >
</style>

\`\`\`



# 使用浏览器插件 vue devtools 来跟踪 vuex状态修改

在实际开发中，有可能有很多个组件都会修改 vuex中的状态，这时我们就需要一个工具来追踪每一次的修改，以便修改 vuex后出现bug时，快速定位

1.  [下载](https://cdn1.zzzmh.cn/chrome/v2/crx/nhdogjmejiglipccpnnnanhbledajbpd/nhdogjmejiglipccpnnnanhbledajbpd.zip?download=nhdogjmejiglipccpnnnanhbledajbpd.zip)安装 vue devtools 插件，注意把插件中的  允许访问文件网址 选项打开

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue4/demo3.4efn3v2vlfy0.jpg)

2. 在 vue程序界面 打开控制台 可以使用该插件进行调试

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue4/demo5.ky5gp0ig0eo.jpg)

3.  可以追踪每一次状态的修改

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue4/demo6.4eizmkx9aty0.jpg)

# vuex 五个核心配置

## state

state 就是vuex 存放状态的地方，是vuex的核心

## getters

getters 类似于 计算属性，用于对state中的数据进行一些计算

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    isLogin: false,
    time: new Date().getMonth(),
  },
  mutations: {
    clearLoginState(state) {
      state.isLogin = false
    },
    loginSuccess(state) {
      state.isLogin = true
    }
  },
  actions: {

  },
  getters: {
    timeNow(state) {
        if(state.time+1<10) return '0' + (new Date().getMonth() + 1)
        else return state.time
    }
  },
  modules: {

  }
})

export default store

\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
      <button @click="Sub">获取时间</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    Sub(){
        console.log(\`现在是\${this.$store.getters.timeNow}月\`)
    }
  }
};
<\/script>

<style scoped >
</style>
\`\`\`



此外，各个getters 还可以作为参数相互传参

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    isLogin: false,
    time:  new Date().getMonth(),
  },
  mutations: {
    clearLoginState(state) {
      state.isLogin = false
    },
    loginSuccess(state) {
      state.isLogin = true
    }
  },
  actions: {

  },
  getters: {
    timeMon(state) {
      if(state.time+1<10) return '0' + (new Date().getMonth() + 1)+'月'
      else return state.time+'月'
    },
    timeYear(state,getters){
      let year = new Date().getFullYear()+'年'
      return year+getters.timeMon
    }
  },
  modules: {

  }
})

export default store

\`\`\`



同时，getters 里面还可以封装一个函数，供组件使用

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
      year:new Date().getFullYear()
  },
  mutations: {
  },
  actions: {

  },
  getters: {
    timeSeconds(state){
      return Syear => {

          if (Syear == state.year) return \`匹配成功\`

          return '当前年份不等于vuex中存储的年份'
      }
    }
  },
  modules: {

  }
})

export default store

\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
      <input v-model="type"></input>
      <button @click="Sub">提交</button>
	  <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
        type:'',
        message:''
    };
  },
  methods:{
    Sub(){
        this.message = this.$store.getters.timeSeconds(this.type)
    }
  }
};
<\/script>

<style scoped >
</style>
\`\`\`

## mutations

vuex状态更新的唯一方式：提交mutations

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
      date:'',
      msg:'',
  },
  mutations: {
      //第一种
      //updateYear(state,year){
      //    state.year = year
      //}
      
      //第二种
        updateYear(state,payload){
            state.year = payload.year
            state.msg = payload.msg
        }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})

export default store
\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
      <input v-model="year"></input>
      <button @click="Sub">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        year:'',
        message:'hello'
    };
  },
  methods:{
    Sub(){
        //第一种提交风格
        //第一个参数是mutations中定义的方法名 第二个参数，就是所传的指，又被称为 Payload
        //this.$store.commit('updateYear',this.year)
        
        this.$store.commit({
            type:'updateYear',//在mutations 一个方法可以分为两个部分，一个是事件类型（方法名）,一个是载荷（参数）
            year:this.year,
            msg:this.message
        })
    }
  }
};
<\/script>

<style scoped >
</style>
\`\`\`

## actions

mutations 中的操作只能是同步操作，如需要进行异步操作则需要用到actions

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
      msg:'hello ',
  },
  mutations: {
	changeMsg(state,Cmsg){
		state.msg = Cmsg
	}
  },
  actions: {
    changeMsgActions(context, payload) {
      setTimeout(() => {
        context.commit('changeMsg',payload.msgg)
      }, 1000)
    }
  },
  getters: {
  },
  modules: {
  }
})

export default store
\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
      <input v-model="year"></input>
      <button @click="Sub">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        year:'',
        message:'hello'
    };
  },
  methods:{
    Sub(){
        this.$store.dispatch({
          type:'changeMsgActions',
          msgg:'hello world'
        })
    }
  }
};
<\/script>

<style scoped >
</style>
\`\`\`

## modules

当程序规模较大的时候，store对象可能变得非常臃肿，此时就可以使用modules对stroe进行划分成模块(modules)，再对某个模块就行操作

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{
      name:'fish'
  },
  mutations:{
      updateName(state,payload){
          state.name = payload
      }
  },
  actions:{
      //在模块中 使用context 指的是自己模块中的内容
      updateName(context){
          setTimeOut(()=>{
              context.commit('updateName','awsl')
          },1000)
      }
  },
  getters:{
      fullName(state){
          return state.name + 'haha'
      },
      fullName2(state,getters){
          return getters.fullName+'ababa'
      },
      fullName3(state,getters,rootState){
          return getters.fullName+rootState.year
          // 在模块中 可以使用 rootState 来调用 store对象中的属性
          // rootState 为 根state 就是大对象 stroe 中的 state
      }
  }
}

const store = new Vuex.Store({
  state: {
    isLogin: false,
    year: '2021'
  },
  mutations: {
  },
  actions: {

  },
  getters: {
  },
  modules: {
    a:moduleA
  }
})

export default store

\`\`\`

\`\`\`vue
<template>
  <div id="wapper">
      <h2>i am {{name}}</h2>
      <input v-model="cName" type="text"></input>
      <button @click="Sub">getName</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:'',
        cName:''
    };
  },
  methods:{
    Sub(){
        this.$stroe.commit('updateName','zhangsan')
        // 普通提交
        //提交以后，首先会去stroe对象中寻找对应方法，如果没有，则去模块中找，各个mutations 中的方法不能重名
    },
    created(){
        this.name = this.$store.state.a.name
        // 定义的模块最终会被放到 store 对象中的 state中去
        // 通过 this.$store.state.a 即可拿到上面我们定义的模块,使用其中的属性，则直接点出属性名即可
        
       // this.name = this.$store.getters.fullname
        // this.name = this.$store.getters.fullname2
        // 使用 getters 也是通过普通方式调用即可
    }
  }
};
<\/script>

<style scoped >
</style>
\`\`\`

# vuex 目录结构

随着项目越来越大，如果把vuex的代码全部写在index.js一个文件当中，就很难就行管理，因此，我们可以对里面的内容拆分成多个文件

将五个核心配置，单独封装成五个模块

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue4/demo7.2ojegab1qbu0.jpg)

在index.js 中导入模块即可

\`\`\`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import state from './state.js'

import moduleA from './modules/moduleA.js'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store

\`\`\`



使用exprot default 来导出对象

\`\`\`javascript
export default {

    clearLoginState(state) {
      state.isLogin = false
    },
    loginSuccess(state) {
      state.isLogin = true
    },
    changeMsg(state, Cmsg) {
      state.msg = Cmsg
    }
}

\`\`\`

`,Xs=`---
title: 前端框架--Vue(1，基础语法)
author: FishBand
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg'
tags:  
  - 前端
  - Vue
categories: 前端
abbrlink: b5eabf0c
date: 2021-05-03 14:15:58
img:
---



# 什么是Vue

Vue 是一套用于构建用户界面的渐进式框架，也就是说你可以将vue作为应用的一部分嵌入其中，所以项目中既可以有vue也可以有其他的框架，以及关注度分离，使得vue只关注视图层。目前Vue与Angular，React一起并称为前端三大框架。在中国使用最广泛的就是Vue。

Vue 是美籍华人 尤雨溪 开发的，其中借鉴了React等其他框架的内容，但这并不妨碍它成为一个优秀的前端框架，由于作者是国人，所以其文档对国人相对更加友好，国内开发者能快速入门



# MVVM

MVVM全称为 Model View ViewModel

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo2.u1n5drnrgg0.jpg)

# Vue生命周期

生命周期是指vue实例从创建到销毁的过程，其中各个阶段都有对应的钩子函数,官方图示如下

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo3.7khamwcecwc0.jpg)

# Vue 安装方式

1. 通过在线cdn导入

   \`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\`

2. [下载源文件并导入](http://lc-Y09KTgt3.cn-n1.lcfile.com/VG3gNoF9dohX2tY1uncOImiLug4TvRV9/vue.js)

   代码结构如下

   \`\`\`html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   
       
   </head>
   <body>
       <div id="app">
           {{message}}
       </div>
       <!-- 在线引入 -->
       <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>
   
       <!-- 本地引入 -->
       <!-- <script src="../js/vue.js"><\/script> -->
       <script>
           const app = new Vue({
               el: '#app',//挂载点，表示将vue实例对象挂载在哪个元素上
               data: {
                   message:'hello '
               }
           })
           console.log(app)
       <\/script>
   </body>
   </html>
   \`\`\`

   

3. 通过npm包管理器 安装cli脚手架

   1. 安装脚手架之前请确保全局安装过webpack \`npm i webpack -g\`

   2.  通过npm下载 vue脚手架  \`npm install vue-cli -g\`

   3. 在项目根目录下初始化工程 \`vue init webpack [项目名]\`，具体操作如下

      ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo10.3bm8nytqjs20.jpg)
      
   4. 创建后项目目录结构如下
   
      ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo25.4hnmro265gy0.jpg)



​	

# 基础语法

*以下演示皆使用VueCli*

## Mustache 插值

使用一对大括号包起来 即可完成Mustache插值操作

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo4.19az1xy4nif4.jpg)



## 常用指令

1.  ###  v-once

   v-once指令只渲染第一次的数据，当渲染出来后，无论绑定的数据发生什么变化，页面上的值一直是第一次渲染的值

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo5.1p65vs1qu940.jpg)



2.  ### v-html

   使用v-html 命令，将数据转成html代码并渲染

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo6.30v6fm4onys0.jpg)



3.  ### v-pre

   v-pre 命令可以是标签里面的文本原封不动的渲染到页面上，不受data数据的影响

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo7.ba2xmw5h748.jpg)

4. ### v-on

   v-on 命令作为绑定事件监听器，标签中的各种事件如click,change都可以通过 v-on 指令来动态绑定

   \`\`\`html
   <template>
     <div id="wapper">
   
       <div>{{count}}</div>
   
       <!-- 完整写法 -->
       <button v-on:click="count++" >+</button>
   
       <!-- 语法糖简写 -->
       <button @click="addCount()">++</button>
   
       <!-- 传递参数,count就是data数据中的变量 -->
       <button @click="showNub(count)"></button>
         
       <div @click="divClick()">
        	<!-- .stop修饰符可以阻止冒泡 -->   
           <button @click.stop="btnClick()"></button>
       </div>
         
       <form action="fishband">
        	<!-- .prevent修饰符可以阻止默认行为 -->   
           <input type="submit" value="提交" @click.prevent="submitClick()">
       </form>
         
       <!-- @keyup 可以监听键帽，当松开键盘时触发，keydown则按下键盘触发，若要监听空格键，加		上.enter即可 -->
       <input type="text" @keyup="keyup()">
   
     </div>
   </template>
   
   <script>
     export default {
       name: "Home",
       data() {
         return{
           count:0
         }
       },
       methods:{
         addCount(){
           this.count++
         },
         showNub(nub){
           console.log(nub)
         }
       }
     }
   <\/script>
   
   <style scoped>
   </style>
   
   \`\`\`

   

5. ### v-bind

   1.  用于对标签的属性进行数据绑定 如href,src等属性，vue内置语法糖，可以简化为一个：

   \`\`\`html
   <template>
     <div id="wapper">
       
       <img v-bind:src="Imgurl">
       <a :href="link">点我看看</a>
       
     </div>
   </template>
   
   <script>
     export default {
       name: "Home",
       data() {
         return{
           className:'test1',
           Imgurl:'http://lc-Y09K/demo7.jpg,
           link: 'https://fishband.github.io'
         }
       },
     }
   <\/script>
   \`\`\`

   2.  用于动态绑定 class值，其后面的值可以跟一个对象，key为类名来自于数据绑定，value为boolean 为true时，则把key类名添加至class，为false则不添加，常用于样式切换

    \`\`\`html
    <template>
      <div id="wapper">
    
        <div :class="{bigFont: isBigFont , redFont: isRedFont}">try</div>
        <button @click="beRed()">点我变红</button>
        <button @click="beBig()">点我变大</button>
    
      </div>
    </template>
    
    <script>
      export default {
        name: "Home",
        data() {
          return{
            isBigFont:false,
            isRedFont:false
          }
        },
        methods:{
          beRed(){
            this.isRedFont = !this.isRedFont
          },
          beBig(){
            this.isBigFont = !this.isBigFont
          }
        }
      }
    <\/script>
    
    <style scoped>
    .bigFont{
      font-size: 100px;
    }
    .redFont{
      color: red;
    }
    </style>
    \`\`\`

   3. 动态绑定数组

    \`\`\`html
    <template>
      <div id="wapper">
    
        <div :class="classList">try</div>
      </div>
    </template>
    
    <script>
      export default {
        name: "Home",
        data() {
          return{
            classList:null
          }
        },
        methods:{
        },
        beforeMount(){
          this.classList = ["bigFont","redFont"]
        }
      }
    <\/script>
    
    <style scoped>
      .bigFont{
        font-size: 100px;
      }
      .redFont{
        color: red;
      }
    </style>
    
    \`\`\`

      
   
6.  ### v-for

    v-for指令可以用于遍历渲染数据

    \`\`\`html
     <template>
      <div id="wapper">
    
        <div v-for="item in imgList">
          <img :src="item" />
        </div>
          
        <div v-for="item,index in imgList" :key="index">
            <!--使用 v-for 的时候提供 key 属性，以获得性能提升 -->
          <img :src="item" />{{index}}
        </div>
          
        <div v-for="item,index in jsonList">
            name is {{item.name}},age is {{item.age}}
        </div>
          
      </div>
    </template>
    
    <script>
      export default {
        name: "Home",
        data() {
          return{
            imgList:['http://lc-Y0demo8.jpg','http://lc-Y0demo9.jpg','http://lc-Y0demo10.jpg'],
            jsonList:[{name:'fish',age:'18'},{name:'fish',age:'18'},{name:'fish',age:'18'}]
          }
        },
      }
    <\/script>
    
    <style scoped>
    </style>
    
    \`\`\`

7.  ### v-if 、v-else-if、v-else 

    条件指令可以根据后面跟的表达式或boolean值 在dom中是否渲染或销毁元素或组件

    \`\`\`html
    <template>
      <div id="wapper">
        <div v-if="isShow">show</div>
        <div v-if="1>0">show2</div>
        <button @click="changeShow()"></button>
      </div>
    </template>
    
    <script>
      export default {
        name: "Home",
        data() {
          return {
            isShow:true
          }
        },
        methods:{
          changeShow(){
            this.isShow = false
          }
        }
      }
    <\/script>
    
    <style scoped>
    </style>
    
    \`\`\`

8.  ### v-show

    v-show指令与v-if类似，不同的是当v-if不满足时，dom根本不渲染或彻底删除掉元素，而v-show不满足时，元素依然会渲染，只是加上了display:none 的样式，将元素隐藏了

    \`\`\`html
    <template>
      <div id="wapper">
        <div v-if="isShow">show</div>
        <div v-show="isShow">show By v-show</div>
        <button @click="changeShow()"></button>
      </div>
    </template>
    
    <script>
      export default {
        name: "Home",
        data() {
          return {
            isShow:true
          }
        },
        methods:{
          changeShow(){
            this.isShow = false
          }
        }
      }
    <\/script>
    
    <style scoped>
    </style>
    \`\`\`

9.  ### v-model

    v-model 实现了数据双向绑定，在元素中使用v-model，其绑定的值会自动赋给元素的value属性，同时，当元素的属性值发生改变时，其绑定的值也会动态随之改变。

    它本质上包含两个操作:

    v-bind 将数据绑定到元素或组件上

    v-on 当元素或组件发生变化时，将绑定的数据重新赋值

    \`\`\`html
    <template>
      <div id="wapper">
        <input type="text" v-model="message" />
        {{message}}
        <br>
    
        <input type="radio" v-model="sex" name="group1" id="man" value="男"/>男
        <input type="radio" v-model="sex" name="group1" id="women" value="女"/>女
        你选择的是：{{sex}}
        <br>
        <input type="checkbox" id="read" v-model="isRead" />同意协议
        你{{isRead?'同意了':'不同意'}}此协议
        <button :disabled="!isRead" value="">下一步</button>
        <br>
    
        <input type="checkbox" value="篮球" v-model="hobbies" />篮球
        <input type="checkbox" value="足球" v-model="hobbies" />足球
        <input type="checkbox" value="排球" v-model="hobbies" />排球
        <input type="checkbox" value="棒球" v-model="hobbies" />棒球
        你选择了{{hobbies.length==0?'无':hobbies}}
      </div>
    </template>
    
    <script>
      export default {
        name: "Home",
        data() {
          return {
            hobbies:[],
            isRead:false,
            sex:'男',
            message:'hello '
          }
        },
        methods:{
        }
      }
    <\/script>
    
    <style scoped>
    </style>
    
    \`\`\`

    `,Qs=`---
title: Vue3新特性
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg
tags:
  - 前端
  - Vue
categories: 前端
abbrlink: cf660fc3
date: 2021-08-12 14:59:43
img:
---

# vue2 更新到 vue3

首先卸载旧版本

\`npm uninstall vue-cli -g\`

然后安装新版本

\`npm install -g @vue/cli\`

# 项目创建方式

在vue3 中有 三种项目创建方式

1. 使用脚手架 [Vite](https://cn.vitejs.dev/guide/) 

   在以往 Vue使用的是vue-cli脚手架, React使用 create-react-app脚手架，虽然脚手架工具不同，但是内部的打包工具还是webpack。而Vite脚手架的底层打包工具是 [Rollup](https://rollupjs.org/guide/en/) 支持打包多页应用程序和工具库，所以Vite脚手架能够在多个框架中都能够使用。

   **Vite 为什么比webpack快启动快？**

   在webpack中，每次启动都会把整个程序进行打包，而且热部署的时候会把相关的依赖再打包

   Vite 把项目分成了两个部分 依赖配置和源代码

   - **依赖配置** 依赖部分不会经常变，所以Vite会提前把用到的依赖打包并保存到\`node_modules/.vite\`文件中，依赖的打包使用的是ESBuild工具，使用GO语言开发的所以速度要比JavaScript快得多。

     Vite 只有在 第一次启动/依赖变动/配置变动  才会重新打包依赖，打包完成之后通过http缓存到浏览器中

   - **源代码** 直接运行在浏览器中，利用浏览器原生的ESM语法加载模块，当源代码发生变化时，模块热部署只会更新当前页面中的最少的代码

   **缺点**

   - HMR有时不会更新
   - 有些错误提示不友好

   **使用Vite创建项目**

   \`npm init vite@latest [项目名] -- --template vue\`

2. 图形化创建

   \`vue ui\`

   vue3 中提供了一种图形化创建项目的的方式，运行命令之后， 就会启动一个本地服务，类似于控制台，所有的插件配置的修改都可以通过傻瓜式的方式

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue3.x/demo2.31h1czvux6m0.jpg)

   ![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue3.x/demo1.3ehfio71w5o0.jpg)

3. \`vue create [项目名]\`


# 新特性

## CompositionAPI

**Vue2.x**

vue2.x是使用的 Options API 也就是选项，在脚本中会定义 data,methods,computed等等属性，可以把他们看成一个一个的选项，然后使用这些选项进行开发。

当代码很少时，使用OptionsAPI开发会使代码结构很清晰。但是当代码量过多时，代码会变得非常臃肿，一个功能可能用到了多个选项属性，散落在各个地方，会使我们的代码变得难以阅读和维护。**而CompositionAPI就是为了解决这个问题**

**Vue3.x**

CompositionAPI 是基于函数组合的API 又叫组合式API，可以将一个功能中不同的代码放在一个函数中。还可以根据业务进行部分逻辑封装。为vue应用提供了更好的逻辑复用和代码组织 你

当然，vue2的mixin也可以实现，但是在mixin中，当多个mixin合在一起且其中有重名的变量时会发生错误，还有当代码量过多时会分不清哪一块逻辑属于哪一个mixin的问题。

### CompositionAPI的使用

#### setup函数

-  setup 是使用 CompositionAPI 的入口，关于CompositionAPI的代码都写在setup函数中
-  setup 又是一个生命周期钩子函数，它会在 beforeCreate 之前调用
-  在setup中，不能使用this
-  在setup中定义的数据或方法，若需要在模板中使用则都必须要return出去

**下面介绍一下Vue2 OptionsAPI 中 各个选项在 Vue3 中的实现**

+ data

  data在vue2中用于定义响应式的数据引用，在vue3中则使用ref函数

  \`\`\`javascript
  <template>
  	<div id="app">
  		<p>{{name}}</p>
  		<p>{{age}}</p>
  	</div>
  </template>
  
  <script>
  // 1. 导入ref 函数
  import { ref } from 'vue'
  
  export default {
  	setup() {
  		// 2. 使用ref函数定义数据，此时定义的name是一个响应式对象
  		const name = ref('fish')
  		const age = ref(18)
  		
  		// 3. 若需要在模板中使用name这个响应式对象，则需要把name 放在一个对象中并返回
  		return { name, age }
  	}
  }
  <\/script>
  \`\`\`

+ methods

  在vue3中定义方法，直接在setup函数中定义即可

  \`\`\`javascript
  <template>
  	<div id="app">
  		<p>{{name}}</p>
  		<p>
  		  {{age}}
  		  <!-- 绑定事件 -->
  		  <button @click="addAge">+</button>
  		</p>
  	</div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
  	setup() {
  		const name = ref('fish')
  		const age = ref(18)
  		
  		// 创建对应事件函数
  		function addAge(){
  			// age++;  此时的age是一个响应式对象，不是一个Number变量
  			// 若需要修改它，则修改他的value属性
  			age.value++
  		}
  		
  		// 将函数返回
  		return { name, age, addAge }
  	}
  }
  <\/script>
  
  \`\`\`

+ computed

  vue3中的计算属性需要将 computed方法导入，然后传入回调函数进行数据处理

  \`\`\`javascript
  <template>
  	<div id="app">
  		<p>{{name}}</p>
  		<p>
  		  <button @click="changeAge(-1)">-</button>
  		  {{age}}
  		  <button @click="changeAge(1)">+</button>
  		</p>
  		<p>出生年份 {{year}}</p>
  	</div>
  </template>
  
  <script>
  // 导入 computed计算属性
  import { ref, computed } from 'vue'
  
  export default {
  	setup() {
  		const name = ref('fish')
  		const age = ref(18)
  		
  		// 调用计算属性方法，并传入一个回调函数，进行数据处理
  		const year = computed(()=>{
  			return 2021 - age.value
  		})
  		function changeAge(value){
  			age.value += value
  		}
  		
  		// 将计算属性返回
  		return { name, age, changeAge, year }
  	}
  }
  <\/script>
  \`\`\`

-  watch

  \`\`\`javascript
  <template>
  	<div id="app">
  		<p>{{name}}</p>
  		<p>
  		  <button @click="changeAge(-1)">-</button>
  		  {{age}}
  		  <button @click="changeAge(1)">+</button>
  		</p>
  		<p>出生年份 {{year}}</p>
  	</div>
  </template>
  
  <script>
  // 导入 watch
  import { computed, reactive, toRefs, watch } from 'vue'
  
  export default {
  	setup() {
  		const data = reactive({
  			name: 'fish',
  			age: 18,
  		    year: computed(()=>{
  				return 2021 - data.age
  			})
  		});
  		
  		function changeAge(value){
  			data.age += value;
  		}
  		
  		// 在watch中有两个参数，第一个是箭头函数用于返回监听的对象。第二个也是一个箭头函数，当监听对象变化时进行的一些处理
  		watch(()=> data.age, (newAge, oldAge)=>{
  			console.log(newAge);
  			debugger
  		})
  		
  		return { ...toRefs(data), changeAge }
  	}
  }
  <\/script>
  \`\`\`

-  生命周期

   \`\`\`javascript
   <template>
   	<div id="app">
   	</div>
   </template>
   
   <script>
   // 导入 生命周期钩子
   // 在vue3中 可用的钩子如下
   //onBeforeMount
   //onMounted
   //onBeforeUpdate
   //onUpdated
   //onBeforeUnmount
   //onUnmounted
   //onActivated
   //onDeactivated
   //onErrorCaptured
   import { onMounted, onUpdated, onUnmounted } from 'vue'
   
   export default {
   	setup() {
       	onBeforeMount(() => {
        	 // ... 
       	})
       	onMounted(() => {
        	 // ... 
      		})
       	onBeforeUpdate(() => {
        	 // ... 
       	})
   	}
   }
   <\/script>
   \`\`\`

**响应式对象**

在上面的代码中可以看到，如果定义的数据或方法很多时，return语句就会很长。所以vue3提供了一个 reactive函数，可以定义一个响应式对象，然后把想要return的值都放在这个对象里面，使用了响应式对象，声明的时候就可以不使用ref

\`\`\`javascript
<template>
	<div id="app">
		<p>{{data.name}}</p>
		<p>
		  <button @click="changeAge(-1)">-</button>
		  {{data.age}}
		  <button @click="changeAge(1)">+</button>
		</p>
		<p>出生年份 {{data.year}}</p>
	</div>
</template>

<script>
// 导入 reactive
import { computed, reactive } from 'vue'

export default {
	setup() {
		const data = reactive({
			// 直接声明即可
			name: 'fish',
			age: 18,
		    year: computed(()=>{
				// 由于setup中没有this，所以访问属性时，需要使用data.属性名的方式访问
				return 2021 - data.age
			}),
			changeAge(value){
				data.age += value
			}
		})
		
		
		// 最终只要将data对象返回即可
		return { data }
	}
}
<\/script>
\`\`\`

当使用reactive时，需要在模板中使用 data.属性名 才可以取到值。我们可以使用 toRefs 函数

\`\`\`javascript
<template>
	<div id="app">
		<p>{{name}}</p>
		<p>
		  <button @click="changeAge(-1)">-</button>
		  {{age}}
		  <button @click="changeAge(1)">+</button>
		</p>
		<p>出生年份 {{year}}</p>
	</div>
</template>

<script>
// 导入 toRefs
import { computed, reactive, toRefs } from 'vue'

export default {
	setup() {
		const data = reactive({
			name: 'fish',
			age: 18,
		    year: computed(()=>{
				return 2021 - data.age
			})
		});
		
		function changeAge(value){
			data.age += value;
		}
		
		
		// 使用toRefs函数将 响应式对象data变成普通对象data，然后还需要将toRefs解构，将普通对象data中的属性一个个导出去
		return { ...toRefs(data), changeAge }
	}
}
<\/script>
\`\`\`

**setup 的参数**

- props 用于接受参数

  \`\`\`javascript
  <template>
  	<div id="app">
  		<p>{{name}}</p>
  		<p>
  		  <button @click="changeAge(-1)">-</button>
  		  {{age}}
  		  <button @click="changeAge(1)">+</button>
  		</p>
  		<p>出生年份 {{year}}</p>
  	</div>
  </template>
  
  <script>
  import { computed, reactive, toRefs, watch } from 'vue'
  
  export default {
  	props:{
  		title: String
  	},
  	// 定义props接收参数
  	
  	setup(props) {
  	// 然后传入setup中
  		const data = reactive({
  			name: 'fish',
  			age: 18,
  		    year: computed(()=>{
  				return 2021 - data.age
  			})
  		});
  		
  		function changeAge(value){
  			data.age += value;
  		}
  		watch(()=> data.age, (newAge, oldAge)=>{
  			console.log(newAge);
  			console.log(props.title);
  			// 随后即可取到props中的值
  		})
  		
  		return { ...toRefs(data), changeAge }
  	}
  }
  <\/script>
  \`\`\`

-  context

  之前说到在setup中没有this，但是某些功能确实需要this时，可以使用context

  \`\`\`javascript
  <template>
  	<div id="app">
  		<p>{{name}}</p>
  		<p>
  		  <button @click="changeAge(-1)">-</button>
  		  {{age}}
  		  <button @click="changeAge(1)">+</button>
  		</p>
  		<p>出生年份 {{year}}</p>
  	</div>
  </template>
  
  <script>
  import { computed, reactive, toRefs, watch } from 'vue'
  
  export default {
  	setup(context) {
  	// 传入context
  		const data = reactive({
  			name: 'fish',
  			age: 18,
  		    year: computed(()=>{
  				return 2021 - data.age
  			})
  		});
  		
  		function changeAge(value){
  			data.age += value;
  		}
  		watch(()=> data.age, (newAge, oldAge)=>{
  			console.log(newAge);
  			context.emit('age-changed', newAge)
  			// 向父组件暴露一个方法
  		})
  		
  		return { ...toRefs(data), changeAge }
  	}
  }
  <\/script>
  \`\`\`


**自定义指令**

\`\`\`javascript
//在 vue2 中，自定义指令是通过Vue的directive方法
<p v-highlight="'yellow'">以亮黄色高亮显示此文本</p>
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.background = binding.value
  }
})

// 在 vue3 中，由于有了app实例，所以直接在app上调用即可
<p v-highlight="'yellow'">以亮黄色高亮显示此文本</p>
const app = Vue.createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})
\`\`\`



# 变化较大的地方

- 移除了 filter 过滤器，转而使用 计算属性代替

- 移除了 $children ，如果需要访问子组件实例，建议使用 $refs

- 移除了 Vue.extend

- 在vue3 中可以有多个根节点

- Vue.prototype 替换成 config.globalProperties

  \`\`\`javascript
  // 之前 - Vue 2
  Vue.prototype.$http = () => {}
  
  // 之后 - Vue 3
  const app = createApp({})
  app.config.globalProperties.$http = () => {}
  \`\`\`

- dom 相关操作

  \`\`\`javascript
  import { nextTick } from 'vue'
  
  nextTick(() => {
    // 一些和 DOM 有关的东西
  })
  \`\`\`

-  注册组件

  \`\`\`javascript
  import ComA from './components/ComA.vue';
  import { createApp } from 'vue';
  const app = createApp(App);
  app.component('com-a', ComA);
  \`\`\`

  
`,Zs=`---
title: VueRouter4.x 新特性
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg
tags:
  - 前端
  - Vue
categories: 前端
abbrlink: f01a566e
img:
---

# 安装下载

\`npm install vue-router@4\`

# 全局配置

\`\`\`javascript
// --------------------  router.js ----------------
// 引入组件
const Home = () => import('./components/show.vue')

// 引入router
import { createRouter, createWebHistory } from "vue-router";
// 定义路由规则
const routes = [
  { path: '/', component: Home },
]

// 创建路由
const router = createRouter({
  // 内部提供了 history 模式的实现。
  history: createWebHistory(),
  routes, 
})
export {router}

// ------------------------- main.js ----------------
import { createApp } from "vue";
import App from "./App.vue";

import {router} from  './router.js'


// 挂载路由
createApp(App).use(router).mount("#app");

\`\`\`

# 自定义正则路由或 404 Not found 路由

\`\`\`javascript
const Home = () => import('./components/show.vue')

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: '/', component: Home },
]

export const routes = [
  // 匹配 /o/3549
  { path: '/o/:orderId' },
    
  // 匹配 /p/books
  { path: '/p/:productName' },
    
   // /:orderId -> 仅匹配orderId为数字的情况
  { path: '/:orderId(\\\\d+)' },
]

\`\`\`



\`\`\`javascript
const Home = () => import('./components/show.vue')
const NotFound = () => import('./components/NotFound.vue')

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: '/', component: Home },
	// 当所有路由都没匹配到时，进入此页面
  { path: '*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})eApp(App).use(router).mount("#app");

export {router}

\`\`\`

# 导航守卫

## 全局前置守卫

\`\`\`javascript
const Home = () => import('./components/show.vue')
const NotFound =  () =>import('./components/NotFound.vue')

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})


router.beforeEach((to, from, next) =>{
	// doSomething
    // return true
	// true为继续执行路由 false为中断此操作,里面也可以传入指定路由  也可以调用next来继续操作
    return {
      path: '/login',
    }
})
export {router}
\`\`\`

## 路由独享的守卫

你可以直接在路由配置上定义 beforeEnter守卫

\`\`\`javascript
const Home = () => import('./components/show.vue')
const NotFound = () => import('./components/NotFound.vue')

import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { 
      path: '/',
      component: Home,
      beforeEnter: (to, from) => {
      // doSomething
      return false
    },
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export {router}
\`\`\`

# 在 setup 中访问路由

## 当前路由

因为我们在setup里面没有访问 this，所以我们不能再直接访问  this.$router  或 this.$route 。作为替代，我们使用  userouter  函数：

\`\`\`javascript
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}
\`\`\`

## 导航守卫

虽然你仍然可以通过  setup 函数来使用组件内的导航守卫，但 Vue Router 将更新和离开守卫作为 组合式 API 函数公开：

\`\`\`javascript
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

export default {
  setup() {
    // 与 beforeRouteLeave 相同，无法访问 \`this\`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // 取消导航并停留在同一页面上
      if (!answer) return false
    })

    const userData = ref()

    // 与 beforeRouteLeave 相同，无法访问 \`this\`
    onBeforeRouteUpdate(async (to, from) => {
      //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
\`\`\`

# 滚动行为

当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置时，可以使用VueRouter内置的scrollBehavior方法实现

\`\`\`javascript
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 始终在元素 #main 上方滚动 10px
    return {
      // 也可以这么写
      // el: document.getElementById('main'),
      el: '#main',
      top: -10,
    }
  },
})
\`\`\`

# 检测导航故障

在实际开发中 会有少数情况出现 路由跳转失败或者路由跳转到当前页面

比如

- 用户当前尝试导航到当前
- 一个导航守卫通过调用 return false 中断了这次导航
- 一个导航守卫通过返回一个新的位置，重定向到其他地方 (例如，return '/login')
- 一个导航守卫抛出了error

此时我们需要判断路由是否导航到了预期的位置

\`\`\`javascript
//如果导航被阻止，导致用户停留在同一个页面上，由 router.push 返回的 Promise 的解析值将是 Navigation Failure。否则，它将是一个 falsy 值(通常是 undefined)。这样我们就可以区分我们导航是否离开了当前位置：
const navigationResult = await router.push('/home')

if (navigationResult) {
  // 导航被阻止
} else {
  // 导航成功 (包括重新导航的情况)
  this.isMenuOpen = false
}

// Navigation Failure 是带有一些额外属性的 Error 实例，这些属性为我们提供了足够的信息，让我们知道哪些导航被阻止了以及为什么被阻止了。

import { NavigationFailureType, isNavigationFailure } from 'vue-router'
// 试图离开未保存的编辑文本界面
const failure = await router.push('/articles/2')
if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
  // 给用户显示一个小通知
  showToast('You have unsaved changes, discard and leave anyway?')
}
\`\`\`

`,no=`---
title: VueX4.x 新特性
author: FishBand
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageVue1/demo.1vjhhyccuo3k.jpg
tags:
  - 前端
  - Vue
categories: 前端
abbrlink: 504135a5
img:
---

# 下载安装

\`npm install vuex@next --save\`

\`yarn add vuex@next --save\`

# 全局配置

\`\`\`javascript
// ------------- store.js ---------------------
import { createStore } from 'vuex'
const store = createStore({
	state () {
		return{
			count: 0
		}
	},
	mutations: {
		addCount ( state, num ){
			state.count += num
		}
	},
	getters: {
		getCount: state => \`the state's count is \${state.count}\`
	}
})
export {store}

// ---------------- main.js --------------
import { createApp } from "vue";
import App from "./App.vue";

import {router} from  './router.js'
import {store} from './store.js'

createApp(App).use(router).use(store).mount("#app");
\`\`\`

# 在组合式API中使用Vuex

\`\`\`javascript
<template>
	<div>{{showCount}}</div>
	<button @click="addCount">+</button>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore  } from 'vuex'
export default {
  setup() {
	const store = useStore()
	const myCount = reactive({
		showCount : store.getters.getCount
	})
	function addCount(){
		store.commit('addCount', 2)
		myCount.showCount = store.getters.getCount
	}
    return { 
		...toRefs(myCount),
		addCount
	};
  },
};
<\/script>
\`\`\`

`,eo=`---
title: 打包工具-webpack
author: FishBand
cover: 'https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageWebpack/demo.2efkrqauewsg.png'
abbrlink: bc71ccc7
date: 2021-04-21 14:03:05
tags:
  - 前端
  - 项目构建
categories: 前端
description: 
---

# 简介
webpack 是前端一款高效打包工具，它能把一个庞大的工程打包压缩，甚至体积能达到仅仅几kb，webpack是前端或不可缺的一环

# 环境搭建
既然是前端项目，那么就npm就必不可少
运行 \`npm install webpack-cli -g\` 来全局安装脚手架
随后使用 \`npm install webpack-cli -D\` 安装到工程下

在工程目录下创建 webpack.config.js （文件名固定） 来作为webpack的配置文件，所有有关webpack的配置都写在此文件中，其中的内容通过es5语法暴露出去

# 五个核心配置
webpack 五个核心配置是
1.  entry 入口文件
2.  output 输出
3.  module loader配置
4.  plugins 插件
5.  mode 打包模式
其结构如下
\`\`\`javascript
module.exports = {
    //入口起点
    entry:

    //输出
    output:{
        
    },
    module:{

    },
    plugins:[

    ],//插件配置
    mode:'development',
    //mode:'production'
}
\`\`\`
下面详细聊聊这五个配置

**entry**
入口文件，指示webpack 从哪个文件开始打包，这个入口文件所引用导入的文件都会参与打包
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageWebpack/demo2.58eifhvja3k0.png)

**output**
输出文件，指示webpack将打包好的文件输出到哪里
其中需要在顶部导入js的内置模块path
![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageWebpack/demo3.7860dlv0fpg0.png)

webpack 默认只能打包js/json资源，所以当我们想要打包其他资源是，则需要借助loader

 module
module主要作用是配置loader,而每一个loader都作为一个对象，存在rules数组中。 loader是webpack最重要的一环，只有配置了各种loader webpack才能打包各种各样的资源，其中各种loader通过npm 下载即可

1.  打包资源
    1.  打包css资源（需要下载css-loader,style-loader）
        \`\`\`javascript
        {
        //正则表达式 表示匹配哪些文件
        test:/\\.css$/,
        
            use:[//use为一个数组，将loader按从下至上顺序执行
        
                //创建一个style标签 将js中的样式添加到页面中生效
                'style-loader',
        
                //将css文件 以字符串的形式变成一个commjs模块加载到js
                'css-loader',
            ]
        }
        \`\`\`

    2.  打包less资源（需要下载style-loader,css-loader,less-loader）
        \`\`\`javascript
        {
            test:/\\.less$/,//每一种匹配规则 只适用与一种文件
        
            use:[
                //创建style标签 将js中的样式添加到页面中
                'style-loader',
        
                //将css文件 编译成commjs模块加载到js
                'css-loader',
        
                //将less文件编译成css文件
                'less-loader'
            ]
        },
        \`\`\`

    3.  将css单独打包成一个文件（单独下载mini-css-extract-plugin）

        首先new一个对象
        \`const MiniCssExtracetPlugin = requir('mini-css-extract-plugin')\`

        调用插件对象
        \`\`\`javascript
        new MiniCssExtracetPlugin({
            filename:'css/built.css'//对输出文件进行重命名
        })
        \`\`\`

        修改loader信息
        \`\`\`javascript
        {
            test:/\\.css/,
            use:[
                //'style-loader',//创建style标签，将样式放上去
                MiniCssExtracetPlugin.loader,//取代style-loader 提取js中的css为单独文件
                'css-loader'//将css文件整合到js中
            ]
        }
        \`\`\`
    
4.  打包img资源（1）（需要下载url-loader,file-loader）
    由于图片数量在实际开发中会很多，在打包过程中就会拖慢打包速度，所以我们需要使用 options来修改loader的一些参数
    
    \`\`\`javascript
    //当只使用了一个loader时，则可以不使用use数组
        loader:'url-loader',
        options:{
            limit:8 * 1024,
            //图片大小小于8kb（项目中较小的图片） 就会被base64编码方式处理
            //优点：减少请求数量 （减轻服务器压力）
            //缺点：图片体积会更大（请求速度更慢）
    
        name: '[hash:10].[ext]'
            //文件名取哈希值前十位加上文件原拓展名
        }
    },
    
    \`\`\`
    
5.  打包img资源（2）（需要下载html-loader）
    上面那种处理方式只能处理 html引用的css文件中引入的图片，不能处理html页面中引入的图片。解决方法是使用html-loader 
    但是 url-loader是使用es6model去解析，而html-loader是使用commjs去解析， 为了避免冲突我们需要关闭url-loader的es6Module 改用commjs解析（在option中加入esModule:false）
        \`\`\`javascript
        {
            //使用html-loader
            test:/\\.html$/,
            loader:'html-loader'
        }
        \`\`\`
    
    \`\`\`javascript
        options:{
                limit:8 * 1024,
                name: '[hash:10].[ext]'
    
            //在url-loader中关闭es6Module
                esModule:false
        }
    \`\`\`
    
6.  打包html资源（需要下载适用于html的plugin插件，\`html-webpack-plugin -D\`）
    
     在顶部引入
    \` const HtmlWbpackPlugin = requi('html-webpack-plugin');\`
    
    随后在plugins列表中new一个对象，其中的template属性，将作为结构模板。
    
    \`\`\`javascript
        plugins:[
            new HtmlWbpackPlugin({
                template:'./src/index.html'
            })
            
        ],
    \`\`\`
    
2.  兼容性处理
    1.  兼容css（需要下载postcss-loader,postcss-preset-env）
    随着css版本的更新迭代，相对于应的兼容性问题也层出不穷，webpack也提供了css兼容性的解决方案
    

        修改loader
\`\`\`javascript
{
    test:/\\.css/,
    use:[
        MiniCssExtracetPlugin.loader,
        'css-loader',

        //第一种 使用loader的默认配置 修改loader配置
        //帮postcss找到package.json中browserslist的配置，通过指定配置加载兼容性样式
        {
            loader:'postcss-loader',
            options:{
                ident:'postcss',
                plugins:()=>{
                    require('postcss-preset-env')
                }
            }
        }
    ]
}
\`\`\`
在package.json 中添加支持的browserlist
\`\`\`javascript
"browserslist": {
    "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        //兼容最近一个版本的谷歌火狐索菲亚浏览器
    ],
    "production": [
        ">0.2%",//兼容99.8%的浏览器
        "not dead",//不兼容已经死掉的浏览器
        "not op_mini all"//不兼容op_mini
    ]
},
\`\`\`

postcss 默认使用生产环境 如需使用开发环境则需要手动配置nodejs 中的临时环境变量,在webpack.config.js 顶部添加
\`process.env.NODE_ENV = 'development'\`


*如抛错 ValidationError: Invalid options object. PostCSS Loader has been initialized using an options object that does not match the API schema. 则说明 此插件版本不支持在webpack.config.js中进行配合  
需要在项目根目录下 创建 postcss.config.js 添加如下代码*

*\`module.exports = {
    plugins:[
        require('postcss-preset-env')()
    ]
}\`*

*然后在webpack.config.js 中删除post-loader的额外配置*
\`\`\`javascript
{
                loader:'postcss-loader',
                //options:{
                //    ident:'postcss',
                //    plugins:()=>{
                //        require//('postcss-preset-env')
                //    }
                //} 
            }
\`\`\`


​        
2.  兼容js(1)（需要下载babel-loader,@babel/core,@babel/preset-env）

\`\`\`javascript
{
    test: /\\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
        // 预设：指示babel 做怎样的兼容处理
        presets: [
            [
                '@babel/preset-env',
                {
                    //指定兼容性做到哪个版本的浏览器
                    targets: {
                        chrome: '60',
                        firefox: '50',
                        ie: '9',
                        safari: '10',
                        edge: '17'
                    }
                }
            ]
        ]
    }
}
\`\`\`
这种方法只能转换基本语法，promise等不能转换

如需要兼容所有js（需要下载@babel/polyfill）,在入口文件中引入
\`import '@babel/polyfill'\`,这种方法会将所有js兼容性都包括，所以打包后会非常大
3. 压缩处理
  1.  压缩js html
      在修改mode属性为 production生成模式 

        删除html中无用的内容
        \`\`\`javascript
        new HtmlWbpackPlugin({
            template:'./index.html',
            minify:{
                //移除空格
                collapseWhitespace:true,
      
                //移除注释
                removeComments:true
            }
        })
        \`\`\`
  2.  压缩css（需要下载optimize-css-assets-webpack-plugin插件），并在插件列表中使用
        \`\`\`javascript
        plugins:[
            new OptimizeCssAssetsWebpackPlugin()
        ],
        \`\`\`
# 性能调优

### HMR

HMR：hot module replacement 热模块替换
当某一个模块发生变化时 只会重新加载变化的模块 其他模块不会被加载

在webpack.config.js 结尾处添加

\`\`\`javascript
devServer:{
    contentBase:resolve(__dirname,'build'),
    compress:true,
    port:3000,
    open:true,
    hot: true
}
\`\`\`

js默认不能使用hmr，如需要，在入口文件添加监听即可

\`\`\`javascript
if(module.hot){
    module.hot.accept('./print.js',()=>{
        dosomething()
        //监听print.js 文件，如果发生变化，会执行回调函数
    })
}
\`\`\`

html默认不能使用hmr 而且会导致html文件不能热更新 
在入口文件 加上html文件即可（通常不需要hmr功能）


### source-map映射
在源代码和构建后代码之间形成映射，当构建后代码出错时，可以映射到源代码
在webpack.config.js 末端添加devtool属性即可属性值及功能如下
\`\`\`
开发环境下使用：eval-source-map(调试好) || eval-cheap-module-source-map(速度快)
生成环境下使用：source-map(调试好) || cheap-module-source-map(速度好) || 
nosources-source-map(隐藏全部代码)||hidden-source-map(隐藏源代码)
\`\`\`

### oneOfLoader
当使用oneOf后 当文件命中loader就会停止 不会接着继续判断 提高效率
将所有loader对象放入oneOf数组即可

    \`\`\`javascript
    module: {
            rules: [
                {
                    oneOf: [
                        {},
                        {},
                        {}
                    ]
                }
            ]
        },
    \`\`\`

### treeShaking
去除无用代码 减少打包体积
前提：es6module productionEnv 
问题：会把一些文件干掉 如css babel（直接引用，没有使用）

在packge.json 中 添加配置sideEffects 以排除相应文件
\`\`\`javascript
"sideEffects": [
    "*.css",
    "*.less"
]
\`\`\`

### codeSplit 
将打包后的文件拆分成多个文件 可以实现并行加载/按需加载

1.  多个入口 多个出口 每一个出口文件都对应一个入口文件

\`\`\`javascript
entry:{
    main:'./js/index.js',
    test:'./js/test.js'
},

output:{
    //    生成的构建后文件将根据入口文件进行命名
    filename:'js/[name].js',
    path:resolve(__dirname,'build')
},
\`\`\`

2.  添加 属性  将node_modules 中的文件 单独打包成一个chunk，如果是多入口 会将里面公用的modules 单独打包,在配置文件中添加配置

\`\`\`javascript
optimization:{
splitChunks:{
    chunks:'all'
}
},
\`\`\`


### lazyLoading
只有当需要模块的时候 才去加载，加载完成之后 再次调用会使用缓存

### pwa
渐进式网络开发应用程序(离线访问) （需要下载 workbox-webpack-plugin 并导入其GenerateSW方法）

在配置文件plugins中使用插件
\`\`\`
new GenerateSW({
    clientsClaim:true,
    skipWaiting:true
})
\`\`\`

随后在入口文件中 注册service-worker
\`\`\`javascript
//注册serciceworker
if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/service-worker.js')
        .then(()=>{
            console.log('serviceworkder 注册成功');
        })
        .catch(()=>{
            console.log('serviceworkder 注册成功');
        })
    })
}
\`\`\`



### externals  
忽略打包
如果有包通过标签引入了 可以设置不被打包
在配置文件中添加
\`\`\`javascript
//忽略包名 不被打包
    externals:{
        jquery:'jQuery'
    }
\`\`\`

# 完整通用版本

## 生产版
\`\`\`javascript
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },
      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
          先执行eslint 在执行babel
      */
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {version: 3},
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      },
      {
        test: /\\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
};
\`\`\`

## 开发版
\`\`\`javascript
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理css资源
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片资源
        test: /\\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中img资源
        test: /\\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
};

\`\`\``,to=`---
title: yarn包管理器
cover: >-
  https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageYarn/u=164609026,2967796161&fm=26&fmt=auto.6ohyexkoo600.webp
tags:
  - 前端
  - nodeJs
  - yarn
  - 项目构建
categories: 前端
abbrlink: 8208f433
description:
---

# 下载安装

**在安装之前请首先安装 [nodeJs](https://nodejs.org/en/)**

[下载msi文件安装](https://yarnpkg.com/latest.msi)

# npm 与 yarn 的区别

Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出的一个新的 JS 包管理工具 。

Yarn 是为了弥补 npm 的一些缺陷

- npm install 速度太慢
- 同一个项目，依赖版本无法保持一致性  \`"5.0.3"\` \`"~5.0.3"\` \`"^5.0.3"\` 分别代表不同的含义

Yarn 的优点

- **安装速度快**： npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。且 Yarn 具有离线模式，如果之前已经安装过一个软件包，用Yarn再次安装时直接从缓存中获取
- **安装版本统一**： 为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件且这个文件是默认创建的，而 npm 要通过 shrinkwrap 命令生成 npm-shrinkwrap.json 文件，只有当这个文件存在的时候，packages 版本信息才会被记录和更新。
- **输出简洁**：  默认情况下，结合了 emoji直观且直接地打印出必要的信息，也提供了一些命令供开发者查询额外的安装信息。
- **多注册来源处理：** 所有的依赖包，不管他被不同的库间接关联引用多少次，安装这个包时，只会从一个注册来源去装，要么是 npm 要么是 bower, 防止出现混乱不一致。



# npm 与 yarn 命令对比

| npm                            | yarn                       |
| ------------------------------ | -------------------------- |
| npm install                    | yarn                       |
| npm install react --save       | yarn add react             |
| npm uninstall react --save     | yarn remove react          |
| npm install react --save --dev | yarn add react --dev       |
| npm update --save              | yarn upgrade               |
| npm list -g --depth 0          | yarn global list           |
| npm install webpack -g         | yarn global add webpack    |
| npm uninstall webpack -g       | yarn global remove webpack |
| npm root -g                    | yarn global dir            |

# 修改Yarn的全局安装和缓存位置

\`yarn config  set global-folder "你的磁盘路径"\`

\`yarn config set cache-folder "你的磁盘路径"\`

`,so=new Ze,me=Object.assign({"/src/articles/ASP.NET.md":js,"/src/articles/JSadvanced.md":ws,"/src/articles/Linux-1.md":Rs,"/src/articles/Linux-2.md":Ps,"/src/articles/Linux-3.md":ks,"/src/articles/Linux-4.md":Ss,"/src/articles/Linux-5.md":As,"/src/articles/axios.md":Is,"/src/articles/design.md":_s,"/src/articles/design/CSS动画与孟菲斯设计风格.md":Cs,"/src/articles/echartsOptions.md":Es,"/src/articles/es6.md":Bs,"/src/articles/express.md":Ts,"/src/articles/frontend/Three.js-3D粒子特效实战.md":Ns,"/src/articles/frontend/Vue3-Composition-API完全指南.md":Ls,"/src/articles/git.md":Vs,"/src/articles/http.md":Ds,"/src/articles/jsUtools.md":Os,"/src/articles/markdwon.md":Hs,"/src/articles/network/详解HTTP协议.md":Ms,"/src/articles/nginx.md":Fs,"/src/articles/npm.md":qs,"/src/articles/react.md":zs,"/src/articles/typescript-02.md":Us,"/src/articles/typescript-03.md":Ws,"/src/articles/typescript.md":Gs,"/src/articles/vite.md":$s,"/src/articles/vue-2.md":Ys,"/src/articles/vue-3.md":Js,"/src/articles/vue-4.md":Ks,"/src/articles/vue.md":Xs,"/src/articles/vue3x01.md":Qs,"/src/articles/vue3x02.md":Zs,"/src/articles/vue3x03.md":no,"/src/articles/webpack.md":eo,"/src/articles/yarn.md":to});function oo(n){const e=n.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);if(!e)return{};const t=e[1].split(`
`),s={};let o=null,r=!1,a=!1,m="";for(const i of t){const u=i.trim();if(!u||u.startsWith("#")){a&&o&&(m+=(m?" ":"")+u);continue}const g=u.indexOf(":"),l=/^[a-zA-Z0-9_\-\u4e00-\u9fff]+\s*:/.test(u);if(g===-1||a&&o&&!l){o&&r&&Array.isArray(s[o])?s[o].push(u.replace(/^-\s*/,"").replace(/^`|`$/g,"").trim()):a&&o&&(m+=(m?" ":"")+u.replace(/^`|`$/g,"").trim());continue}const p=u.slice(0,g).trim();let d=u.slice(g+1).trim().replace(/^['"`]|['"`]$/g,"");if(d===">-"||d===">"||d==="|"){o=p,a=!0,r=!1,m="";continue}if(p!==o&&(a&&o&&m&&(s[o]=m.trim(),a=!1,m=""),r&&o&&(r=!1),o=p),d===""||d===">-"||d===">"||d==="|"){if(d===">-"||d===">"||d==="|"){a=!0,r=!1,m="";continue}s[p]=[],r=!0,a=!1;continue}s[p]=d}return a&&o&&m&&(s[o]=m.trim()),s.tags&&typeof s.tags=="string"&&(s.tags=s.tags.split(",").map(i=>i.trim()).filter(Boolean)),s}function ro(n,e=120){const t=n.replace(/[#*`\[\]()!>|-]/g," ").replace(/\s+/g," ").trim();return t.length>e?t.slice(0,e)+"...":t}async function ao(){const n=[];console.log("[md-loader] Found articles:",Object.keys(me).length);for(const[e,t]of Object.entries(me))try{const s=oo(t),o=t.replace(/^---[\s\S]*?---\s*\n/,""),r=so.parse(o),a=e.replace("/src/articles/","").replace(/\.md$/,"");console.log(`[md-loader] ✓ ${a}: ${s.title}`),n.push({slug:a,title:s.title||"Untitled",author:s.author||"FishBand",cover:typeof s.cover=="string"?s.cover.replace(/^`|`$/g,"").trim():"",tags:Array.isArray(s.tags)?s.tags:[],category:s.categories||s.category||"",date:s.date||new Date().toISOString(),abbrlink:s.abbrlink||"",duration:io(o),description:ro(o),content:r,rawBody:o})}catch(s){console.error(`[md-loader] ✗ ERROR parsing ${e}:`,s.message)}return console.log(`[md-loader] Total loaded: ${n.length}`),n.sort((e,t)=>new Date(t.date)-new Date(e.date))}function io(n){const e=(n.match(/[\u4e00-\u9fa5]/g)||[]).length,t=n.replace(/[\u4e00-\u9fa5]/g,"").split(/\s+/).filter(Boolean).length,s=Math.ceil(e*.3+t/200);return s<1?"1 min":`${s} min`}const qn=Qe(vs);qn.use(nt());qn.use(He);He.isReady().then(async()=>{try{await ao(),await ys()}catch(n){console.warn("Init:",n.message)}qn.mount("#app")});export{go as a,po as d,mo as g,ao as l,uo as s,hs as u};
