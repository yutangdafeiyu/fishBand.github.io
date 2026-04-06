const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-BPQ7tSV3.js","assets/index-BN9Wulw7.js","assets/index-BETnAcZD.css","assets/HomeView-zy1I1OFY.css","assets/ArticleView-B2BbMoAE.js","assets/ArticleView-DllktBSa.css"])))=>i.map(i=>d[i]);
var pl=Object.defineProperty;var dl=(n,e,t)=>e in n?pl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var cn=(n,e,t)=>dl(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hr(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dn={},Je=[],qn=()=>{},di=()=>!1,ls=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),cs=n=>n.startsWith("onUpdate:"),xn=Object.assign,gr=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},fl=Object.prototype.hasOwnProperty,sn=(n,e)=>fl.call(n,e),z=Array.isArray,Ze=n=>Nt(n)==="[object Map]",fi=n=>Nt(n)==="[object Set]",no=n=>Nt(n)==="[object Date]",G=n=>typeof n=="function",hn=n=>typeof n=="string",Hn=n=>typeof n=="symbol",nn=n=>n!==null&&typeof n=="object",hi=n=>(nn(n)||G(n))&&G(n.then)&&G(n.catch),gi=Object.prototype.toString,Nt=n=>gi.call(n),hl=n=>Nt(n).slice(8,-1),mi=n=>Nt(n)==="[object Object]",us=n=>hn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ht=hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},gl=/-\w/g,Bn=ps(n=>n.replace(gl,e=>e.slice(1).toUpperCase())),ml=/\B([A-Z])/g,Te=ps(n=>n.replace(ml,"-$1").toLowerCase()),ds=ps(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ss=ps(n=>n?`on${ds(n)}`:""),oe=(n,e)=>!Object.is(n,e),Ps=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},bi=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},bl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},vl=n=>{const e=hn(n)?Number(n):NaN;return isNaN(e)?n:e};let eo;const fs=()=>eo||(eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(n){if(z(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=hn(s)?jl(s):mr(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(hn(n)||nn(n))return n}const xl=/;(?![^(]*\))/g,yl=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function jl(n){const e={};return n.replace(wl,"").split(xl).forEach(t=>{if(t){const s=t.split(yl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function br(n){let e="";if(hn(n))e=n;else if(z(n))for(let t=0;t<n.length;t++){const s=br(n[t]);s&&(e+=s+" ")}else if(nn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_l=hr(kl);function vi(n){return!!n||n===""}function Rl(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=vr(n[s],e[s]);return t}function vr(n,e){if(n===e)return!0;let t=no(n),s=no(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=Hn(n),s=Hn(e),t||s)return n===e;if(t=z(n),s=z(e),t||s)return t&&s?Rl(n,e):!1;if(t=nn(n),s=nn(e),t||s){if(!t||!s)return!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const i in n){const a=n.hasOwnProperty(i),l=e.hasOwnProperty(i);if(a&&!l||!a&&l||!vr(n[i],e[i]))return!1}}return String(n)===String(e)}const xi=n=>!!(n&&n.__v_isRef===!0),Sl=n=>hn(n)?n:n==null?"":z(n)||nn(n)&&(n.toString===gi||!G(n.toString))?xi(n)?Sl(n.value):JSON.stringify(n,yi,2):String(n),yi=(n,e)=>xi(e)?yi(n,e.value):Ze(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],o)=>(t[As(s,o)+" =>"]=r,t),{})}:fi(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>As(t))}:Hn(e)?As(e):nn(e)&&!z(e)&&!mi(e)?String(e):e,As=(n,e="")=>{var t;return Hn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function Pl(n){return n==null?"initial":typeof n=="string"?n===""?" ":n:String(n)}/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wn;class wi{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=wn;try{return wn=this,e()}finally{wn=t}}}on(){++this._on===1&&(this.prevScope=wn,wn=this)}off(){this._on>0&&--this._on===0&&(wn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ji(n){return new wi(n)}function ki(){return wn}function Al(n,e=!1){wn&&wn.cleanups.push(n)}let pn;const Ts=new WeakSet;class _i{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wn&&wn.active&&wn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Si(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,to(this),Pi(this);const e=pn,t=zn;pn=this,zn=!0;try{return this.fn()}finally{Ai(this),pn=e,zn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wr(e);this.deps=this.depsTail=void 0,to(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zs(this)&&this.run()}get dirty(){return zs(this)}}let Ri=0,gt,mt;function Si(n,e=!1){if(n.flags|=8,e){n.next=mt,mt=n;return}n.next=gt,gt=n}function xr(){Ri++}function yr(){if(--Ri>0)return;if(mt){let e=mt;for(mt=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;gt;){let e=gt;for(gt=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Pi(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ai(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),wr(s),Tl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function zs(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ti(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ti(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kt)||(n.globalVersion=kt,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!zs(n))))return;n.flags|=2;const e=n.dep,t=pn,s=zn;pn=n,zn=!0;try{Pi(n);const r=n.fn(n._value);(e.version===0||oe(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{pn=t,zn=s,Ai(n),n.flags&=-3}}function wr(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)wr(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Tl(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let zn=!0;const Ci=[];function me(){Ci.push(zn),zn=!1}function be(){const n=Ci.pop();zn=n===void 0?!0:n}function to(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=pn;pn=void 0;try{e()}finally{pn=t}}}let kt=0;class Cl{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pn||!zn||pn===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pn)t=this.activeLink=new Cl(pn,this),pn.deps?(t.prevDep=pn.depsTail,pn.depsTail.nextDep=t,pn.depsTail=t):pn.deps=pn.depsTail=t,Ii(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=pn.depsTail,t.nextDep=void 0,pn.depsTail.nextDep=t,pn.depsTail=t,pn.deps===t&&(pn.deps=s)}return t}trigger(e){this.version++,kt++,this.notify(e)}notify(e){xr();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{yr()}}}function Ii(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ii(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Jt=new WeakMap,He=Symbol(""),Us=Symbol(""),_t=Symbol("");function jn(n,e,t){if(zn&&pn){let s=Jt.get(n);s||Jt.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new jr),r.map=s,r.key=t),r.track()}}function fe(n,e,t,s,r,o){const i=Jt.get(n);if(!i){kt++;return}const a=l=>{l&&l.trigger()};if(xr(),e==="clear")i.forEach(a);else{const l=z(n),c=l&&us(t);if(l&&t==="length"){const u=Number(s);i.forEach((p,d)=>{(d==="length"||d===_t||!Hn(d)&&d>=u)&&a(p)})}else switch((t!==void 0||i.has(void 0))&&a(i.get(t)),c&&a(i.get(_t)),e){case"add":l?c&&a(i.get("length")):(a(i.get(He)),Ze(n)&&a(i.get(Us)));break;case"delete":l||(a(i.get(He)),Ze(n)&&a(i.get(Us)));break;case"set":Ze(n)&&a(i.get(He));break}}yr()}function Il(n,e){const t=Jt.get(n);return t&&t.get(e)}function We(n){const e=Q(n);return e===n?e:(jn(e,"iterate",_t),Vn(n)?e:e.map(Wn))}function hs(n){return jn(n=Q(n),"iterate",_t),n}function se(n,e){return ve(n)?et(ie(n)?Wn(e):e):Wn(e)}const El={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,n=>se(this,n))},concat(...n){return We(this).concat(...n.map(e=>z(e)?We(e):e))},entries(){return Cs(this,"entries",n=>(n[1]=se(this,n[1]),n))},every(n,e){return le(this,"every",n,e,void 0,arguments)},filter(n,e){return le(this,"filter",n,e,t=>t.map(s=>se(this,s)),arguments)},find(n,e){return le(this,"find",n,e,t=>se(this,t),arguments)},findIndex(n,e){return le(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return le(this,"findLast",n,e,t=>se(this,t),arguments)},findLastIndex(n,e){return le(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return le(this,"forEach",n,e,void 0,arguments)},includes(...n){return Is(this,"includes",n)},indexOf(...n){return Is(this,"indexOf",n)},join(n){return We(this).join(n)},lastIndexOf(...n){return Is(this,"lastIndexOf",n)},map(n,e){return le(this,"map",n,e,void 0,arguments)},pop(){return it(this,"pop")},push(...n){return it(this,"push",n)},reduce(n,...e){return so(this,"reduce",n,e)},reduceRight(n,...e){return so(this,"reduceRight",n,e)},shift(){return it(this,"shift")},some(n,e){return le(this,"some",n,e,void 0,arguments)},splice(...n){return it(this,"splice",n)},toReversed(){return We(this).toReversed()},toSorted(n){return We(this).toSorted(n)},toSpliced(...n){return We(this).toSpliced(...n)},unshift(...n){return it(this,"unshift",n)},values(){return Cs(this,"values",n=>se(this,n))}};function Cs(n,e,t){const s=hs(n),r=s[e]();return s!==n&&!Vn(n)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=t(o.value)),o}),r}const Bl=Array.prototype;function le(n,e,t,s,r,o){const i=hs(n),a=i!==n&&!Vn(n),l=i[e];if(l!==Bl[e]){const p=l.apply(n,o);return a?Wn(p):p}let c=t;i!==n&&(a?c=function(p,d){return t.call(this,se(n,p),d,n)}:t.length>2&&(c=function(p,d){return t.call(this,p,d,n)}));const u=l.call(i,c,s);return a&&r?r(u):u}function so(n,e,t,s){const r=hs(n),o=r!==n&&!Vn(n);let i=t,a=!1;r!==n&&(o?(a=s.length===0,i=function(c,u,p){return a&&(a=!1,c=se(n,c)),t.call(this,c,se(n,u),p,n)}):t.length>3&&(i=function(c,u,p){return t.call(this,c,u,p,n)}));const l=r[e](i,...s);return a?se(n,l):l}function Is(n,e,t){const s=Q(n);jn(s,"iterate",_t);const r=s[e](...t);return(r===-1||r===!1)&&gs(t[0])?(t[0]=Q(t[0]),s[e](...t)):r}function it(n,e,t=[]){me(),xr();const s=Q(n)[e].apply(n,t);return yr(),be(),s}const Nl=hr("__proto__,__v_isRef,__isVue"),Ei=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Hn));function Ll(n){Hn(n)||(n=String(n));const e=Q(this);return jn(e,"has",n),e.hasOwnProperty(n)}class Bi{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(r?o?Ul:Di:o?Oi:Li).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=z(e);if(!r){let l;if(i&&(l=El[t]))return l;if(t==="hasOwnProperty")return Ll}const a=Reflect.get(e,t,fn(e)?e:s);if((Hn(t)?Ei.has(t):Nl(t))||(r||jn(e,"get",t),o))return a;if(fn(a)){const l=i&&us(t)?a:a.value;return r&&nn(l)?Gs(l):l}return nn(a)?r?Gs(a):Lt(a):a}}class Ni extends Bi{constructor(e=!1){super(!1,e)}set(e,t,s,r){let o=e[t];const i=z(e)&&us(t);if(!this._isShallow){const c=ve(o);if(!Vn(s)&&!ve(s)&&(o=Q(o),s=Q(s)),!i&&fn(o)&&!fn(s))return c||(o.value=s),!0}const a=i?Number(t)<e.length:sn(e,t),l=Reflect.set(e,t,s,fn(e)?e:r);return e===Q(r)&&(a?oe(s,o)&&fe(e,"set",t,s):fe(e,"add",t,s)),l}deleteProperty(e,t){const s=sn(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&fe(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!Hn(t)||!Ei.has(t))&&jn(e,"has",t),s}ownKeys(e){return jn(e,"iterate",z(e)?"length":He),Reflect.ownKeys(e)}}class Ol extends Bi{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Dl=new Ni,Ml=new Ol,Vl=new Ni(!0);const Ws=n=>n,Vt=n=>Reflect.getPrototypeOf(n);function Hl(n,e,t){return function(...s){const r=this.__v_raw,o=Q(r),i=Ze(o),a=n==="entries"||n===Symbol.iterator&&i,l=n==="keys"&&i,c=r[n](...s),u=t?Ws:e?et:Wn;return!e&&jn(o,"iterate",l?Us:He),xn(Object.create(c),{next(){const{value:p,done:d}=c.next();return d?{value:p,done:d}:{value:a?[u(p[0]),u(p[1])]:u(p),done:d}}})}}function Ht(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Fl(n,e){const t={get(r){const o=this.__v_raw,i=Q(o),a=Q(r);n||(oe(r,a)&&jn(i,"get",r),jn(i,"get",a));const{has:l}=Vt(i),c=e?Ws:n?et:Wn;if(l.call(i,r))return c(o.get(r));if(l.call(i,a))return c(o.get(a));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!n&&jn(Q(r),"iterate",He),r.size},has(r){const o=this.__v_raw,i=Q(o),a=Q(r);return n||(oe(r,a)&&jn(i,"has",r),jn(i,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const i=this,a=i.__v_raw,l=Q(a),c=e?Ws:n?et:Wn;return!n&&jn(l,"iterate",He),a.forEach((u,p)=>r.call(o,c(u),c(p),i))}};return xn(t,n?{add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear")}:{add(r){const o=Q(this),i=Vt(o),a=Q(r),l=!e&&!Vn(r)&&!ve(r)?a:r;return i.has.call(o,l)||oe(r,l)&&i.has.call(o,r)||oe(a,l)&&i.has.call(o,a)||(o.add(l),fe(o,"add",l,l)),this},set(r,o){!e&&!Vn(o)&&!ve(o)&&(o=Q(o));const i=Q(this),{has:a,get:l}=Vt(i);let c=a.call(i,r);c||(r=Q(r),c=a.call(i,r));const u=l.call(i,r);return i.set(r,o),c?oe(o,u)&&fe(i,"set",r,o):fe(i,"add",r,o),this},delete(r){const o=Q(this),{has:i,get:a}=Vt(o);let l=i.call(o,r);l||(r=Q(r),l=i.call(o,r)),a&&a.call(o,r);const c=o.delete(r);return l&&fe(o,"delete",r,void 0),c},clear(){const r=Q(this),o=r.size!==0,i=r.clear();return o&&fe(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hl(r,n,e)}),t}function kr(n,e){const t=Fl(n,e);return(s,r,o)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(sn(t,r)&&r in s?t:s,r,o)}const $l={get:kr(!1,!1)},ql={get:kr(!1,!0)},zl={get:kr(!0,!1)};const Li=new WeakMap,Oi=new WeakMap,Di=new WeakMap,Ul=new WeakMap;function Wl(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(n){return n.__v_skip||!Object.isExtensible(n)?0:Wl(hl(n))}function Lt(n){return ve(n)?n:_r(n,!1,Dl,$l,Li)}function Mi(n){return _r(n,!1,Vl,ql,Oi)}function Gs(n){return _r(n,!0,Ml,zl,Di)}function _r(n,e,t,s,r){if(!nn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=Gl(n);if(o===0)return n;const i=r.get(n);if(i)return i;const a=new Proxy(n,o===2?s:t);return r.set(n,a),a}function ie(n){return ve(n)?ie(n.__v_raw):!!(n&&n.__v_isReactive)}function ve(n){return!!(n&&n.__v_isReadonly)}function Vn(n){return!!(n&&n.__v_isShallow)}function gs(n){return n?!!n.__v_raw:!1}function Q(n){const e=n&&n.__v_raw;return e?Q(e):n}function Rr(n){return!sn(n,"__v_skip")&&Object.isExtensible(n)&&bi(n,"__v_skip",!0),n}const Wn=n=>nn(n)?Lt(n):n,et=n=>nn(n)?Gs(n):n;function fn(n){return n?n.__v_isRef===!0:!1}function Sr(n){return Vi(n,!1)}function Kl(n){return Vi(n,!0)}function Vi(n,e){return fn(n)?n:new Yl(n,e)}class Yl{constructor(e,t){this.dep=new jr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Q(e),this._value=t?e:Wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Vn(e)||ve(e);e=s?e:Q(e),oe(e,t)&&(this._rawValue=e,this._value=s?e:Wn(e),this.dep.trigger())}}function Pe(n){return fn(n)?n.value:n}function Vf(n){return G(n)?n():Pe(n)}const Jl={get:(n,e,t)=>e==="__v_raw"?n:Pe(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return fn(r)&&!fn(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function Hi(n){return ie(n)?n:new Proxy(n,Jl)}function Zl(n){const e=z(n)?new Array(n.length):{};for(const t in n)e[t]=Fi(n,t);return e}class Ql{constructor(e,t,s){this._object=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._key=Hn(t)?t:String(t),this._raw=Q(e);let r=!0,o=e;if(!z(e)||Hn(this._key)||!us(this._key))do r=!gs(o)||Vn(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Pe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&fn(this._raw[this._key])){const t=this._object[this._key];if(fn(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Il(this._raw,this._key)}}class Xl{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function nc(n,e,t){return fn(n)?n:G(n)?new Xl(n):nn(n)&&arguments.length>1?Fi(n,e,t):Sr(n)}function Fi(n,e,t){return new Ql(n,e,t)}class ec{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pn!==this)return Si(this,!0),!0}get value(){const e=this.dep.track();return Ti(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tc(n,e,t=!1){let s,r;return G(n)?s=n:(s=n.get,r=n.set),new ec(s,r,t)}const Ft={},Zt=new WeakMap;let Oe;function sc(n,e=!1,t=Oe){if(t){let s=Zt.get(t);s||Zt.set(t,s=[]),s.push(n)}}function rc(n,e,t=dn){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:a,call:l}=t,c=C=>r?C:Vn(C)||r===!1||r===0?Se(C,1):Se(C);let u,p,d,g,b=!1,w=!1;if(fn(n)?(p=()=>n.value,b=Vn(n)):ie(n)?(p=()=>c(n),b=!0):z(n)?(w=!0,b=n.some(C=>ie(C)||Vn(C)),p=()=>n.map(C=>{if(fn(C))return C.value;if(ie(C))return c(C);if(G(C))return l?l(C,2):C()})):G(n)?e?p=l?()=>l(n,2):n:p=()=>{if(d){me();try{d()}finally{be()}}const C=Oe;Oe=u;try{return l?l(n,3,[g]):n(g)}finally{Oe=C}}:p=qn,e&&r){const C=p,$=r===!0?1/0:r;p=()=>Se(C(),$)}const B=ki(),L=()=>{u.stop(),B&&B.active&&gr(B.effects,u)};if(o&&e){const C=e;e=(...$)=>{C(...$),L()}}let _=w?new Array(n.length).fill(Ft):Ft;const N=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(e){const $=u.run();if(r||b||(w?$.some((D,V)=>oe(D,_[V])):oe($,_))){d&&d();const D=Oe;Oe=u;try{const V=[$,_===Ft?void 0:w&&_[0]===Ft?[]:_,g];_=$,l?l(e,3,V):e(...V)}finally{Oe=D}}}else u.run()};return a&&a(N),u=new _i(p),u.scheduler=i?()=>i(N,!1):N,g=C=>sc(C,!1,u),d=u.onStop=()=>{const C=Zt.get(u);if(C){if(l)l(C,4);else for(const $ of C)$();Zt.delete(u)}},e?s?N(!0):_=u.run():i?i(N.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function Se(n,e=1/0,t){if(e<=0||!nn(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,fn(n))Se(n.value,e,t);else if(z(n))for(let s=0;s<n.length;s++)Se(n[s],e,t);else if(fi(n)||Ze(n))n.forEach(s=>{Se(s,e,t)});else if(mi(n)){for(const s in n)Se(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Se(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ot(n,e,t,s){try{return s?n(...s):n()}catch(r){ms(r,e,t)}}function Gn(n,e,t,s){if(G(n)){const r=Ot(n,e,t,s);return r&&hi(r)&&r.catch(o=>{ms(o,e,t)}),r}if(z(n)){const r=[];for(let o=0;o<n.length;o++)r.push(Gn(n[o],e,t,s));return r}}function ms(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=e&&e.appContext.config||dn;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](n,l,c)===!1)return}a=a.parent}if(o){me(),Ot(o,null,10,[n,l,c]),be();return}}oc(n,t,r,s,i)}function oc(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Tn=[];let ee=-1;const Qe=[];let _e=null,Ke=0;const $i=Promise.resolve();let Qt=null;function Pr(n){const e=Qt||$i;return n?e.then(this?n.bind(this):n):e}function ic(n){let e=ee+1,t=Tn.length;for(;e<t;){const s=e+t>>>1,r=Tn[s],o=Rt(r);o<n||o===n&&r.flags&2?e=s+1:t=s}return e}function Ar(n){if(!(n.flags&1)){const e=Rt(n),t=Tn[Tn.length-1];!t||!(n.flags&2)&&e>=Rt(t)?Tn.push(n):Tn.splice(ic(e),0,n),n.flags|=1,qi()}}function qi(){Qt||(Qt=$i.then(Wi))}function zi(n){z(n)?Qe.push(...n):_e&&n.id===-1?_e.splice(Ke+1,0,n):n.flags&1||(Qe.push(n),n.flags|=1),qi()}function ro(n,e,t=ee+1){for(;t<Tn.length;t++){const s=Tn[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Tn.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ui(n){if(Qe.length){const e=[...new Set(Qe)].sort((t,s)=>Rt(t)-Rt(s));if(Qe.length=0,_e){_e.push(...e);return}for(_e=e,Ke=0;Ke<_e.length;Ke++){const t=_e[Ke];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_e=null,Ke=0}}const Rt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wi(n){try{for(ee=0;ee<Tn.length;ee++){const e=Tn[ee];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ot(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ee<Tn.length;ee++){const e=Tn[ee];e&&(e.flags&=-2)}ee=-1,Tn.length=0,Ui(),Qt=null,(Tn.length||Qe.length)&&Wi()}}let Cn=null,Gi=null;function Xt(n){const e=Cn;return Cn=n,Gi=n&&n.type.__scopeId||null,e}function Ks(n,e=Cn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&ts(-1);const o=Xt(e);let i;try{i=n(...r)}finally{Xt(o),s._d&&ts(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Ie(n,e,t,s){const r=n.dirs,o=e&&e.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let l=a.dir[s];l&&(me(),Gn(l,t,8,[n.el,a,n,e]),be())}}function Ut(n,e){if(_n){let t=_n.provides;const s=_n.parent&&_n.parent.provides;s===t&&(t=_n.provides=Object.create(s)),t[n]=e}}function Un(n,e,t=!1){const s=ws();if(s||Fe){let r=Fe?Fe._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&G(e)?e.call(s&&s.proxy):e}}function ac(){return!!(ws()||Fe)}const lc=Symbol.for("v-scx"),cc=()=>Un(lc);function Xe(n,e,t){return Ki(n,e,t)}function Ki(n,e,t=dn){const{immediate:s,deep:r,flush:o,once:i}=t,a=xn({},t),l=e&&s||!e&&o!=="post";let c;if(It){if(o==="sync"){const g=cc();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=qn,g.resume=qn,g.pause=qn,g}}const u=_n;a.call=(g,b,w)=>Gn(g,u,b,w);let p=!1;o==="post"?a.scheduler=g=>{Pn(g,u&&u.suspense)}:o!=="sync"&&(p=!0,a.scheduler=(g,b)=>{b?g():Ar(g)}),a.augmentJob=g=>{e&&(g.flags|=4),p&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=rc(n,e,a);return It&&(c?c.push(d):l&&d()),d}function uc(n,e,t){const s=this.proxy,r=hn(n)?n.includes(".")?Yi(s,n):()=>s[n]:n.bind(s,s);let o;G(e)?o=e:(o=e.handler,t=e);const i=Dt(this),a=Ki(r,o.bind(s),t);return i(),a}function Yi(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const Ee=new WeakMap,Ji=Symbol("_vte"),Zi=n=>n.__isTeleport,De=n=>n&&(n.disabled||n.disabled===""),pc=n=>n&&(n.defer||n.defer===""),oo=n=>typeof SVGElement<"u"&&n instanceof SVGElement,io=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Ys=(n,e)=>{const t=n&&n.to;return hn(t)?e?e(t):null:t},dc={name:"Teleport",__isTeleport:!0,process(n,e,t,s,r,o,i,a,l,c){const{mc:u,pc:p,pbc:d,o:{insert:g,querySelector:b,createText:w,createComment:B}}=c,L=De(e.props);let{dynamicChildren:_}=e;const N=(D,V,M)=>{D.shapeFlag&16&&u(D.children,V,M,r,o,i,a,l)},C=(D=e)=>{const V=De(D.props),M=D.target=Ys(D.props,b),P=Js(M,D,w,g);M&&(i!=="svg"&&oo(M)?i="svg":i!=="mathml"&&io(M)&&(i="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(M),V||(N(D,M,P),dt(D,!1)))},$=D=>{const V=()=>{Ee.get(D)===V&&(Ee.delete(D),De(D.props)&&(N(D,t,D.anchor),dt(D,!0)),C(D))};Ee.set(D,V),Pn(V,o)};if(n==null){const D=e.el=w(""),V=e.anchor=w("");if(g(D,t,s),g(V,t,s),pc(e.props)||o&&o.pendingBranch){$(e);return}L&&(N(e,t,V),dt(e,!0)),C()}else{e.el=n.el;const D=e.anchor=n.anchor,V=Ee.get(n);if(V){V.flags|=8,Ee.delete(n),$(e);return}e.targetStart=n.targetStart;const M=e.target=n.target,P=e.targetAnchor=n.targetAnchor,U=De(n.props),J=U?t:M,T=U?D:P;if(i==="svg"||oo(M)?i="svg":(i==="mathml"||io(M))&&(i="mathml"),_?(d(n.dynamicChildren,_,J,r,o,i,a),Br(n,e,!0)):l||p(n,e,J,T,r,o,i,a,!1),L)U?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):$t(e,t,D,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const Y=e.target=Ys(e.props,b);Y&&$t(e,Y,null,c,0)}else U&&$t(e,M,P,c,1);dt(e,L)}},remove(n,e,t,{um:s,o:{remove:r}},o){const{shapeFlag:i,children:a,anchor:l,targetStart:c,targetAnchor:u,target:p,props:d}=n;let g=o||!De(d);const b=Ee.get(n);if(b&&(b.flags|=8,Ee.delete(n),g=!1),p&&(r(c),r(u)),o&&r(l),i&16)for(let w=0;w<a.length;w++){const B=a[w];s(B,e,t,g,!!B.dynamicChildren)}},move:$t,hydrate:fc};function $t(n,e,t,{o:{insert:s},m:r},o=2){o===0&&s(n.targetAnchor,e,t);const{el:i,anchor:a,shapeFlag:l,children:c,props:u}=n,p=o===2;if(p&&s(i,e,t),(!p||De(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,t,2);p&&s(a,e,t)}function fc(n,e,t,s,r,o,{o:{nextSibling:i,parentNode:a,querySelector:l,insert:c,createText:u}},p){function d(B,L){let _=L;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,B._lpa=e.targetAnchor&&i(e.targetAnchor);break}}_=i(_)}}function g(B,L){L.anchor=p(i(B),L,a(B),t,s,r,o)}const b=e.target=Ys(e.props,l),w=De(e.props);if(b){const B=b._lpa||b.firstChild;e.shapeFlag&16&&(w?(g(n,e),d(b,B),e.targetAnchor||Js(b,e,u,c,a(n)===b?n:null)):(e.anchor=i(n),d(b,B),e.targetAnchor||Js(b,e,u,c),p(B&&i(B),e,b,t,s,r,o))),dt(e,w)}else w&&e.shapeFlag&16&&(g(n,e),e.targetStart=n,e.targetAnchor=i(n));return e.anchor&&i(e.anchor)}const Hf=dc;function dt(n,e){const t=n.ctx;if(t&&t.ut){let s,r;for(e?(s=n.el,r=n.anchor):(s=n.targetStart,r=n.targetAnchor);s&&s!==r;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}function Js(n,e,t,s,r=null){const o=e.targetStart=t(""),i=e.targetAnchor=t("");return o[Ji]=i,n&&(s(o,n,r),s(i,n,r)),i}const te=Symbol("_leaveCb"),at=Symbol("_enterCb");function hc(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tr(()=>{n.isMounted=!0}),aa(()=>{n.isUnmounting=!0}),n}const $n=[Function,Array],Qi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},Xi=n=>{const e=n.subTree;return e.component?Xi(e.component):e},gc={name:"BaseTransition",props:Qi,setup(n,{slots:e}){const t=ws(),s=hc();return()=>{const r=e.default&&ta(e.default(),!0);if(!r||!r.length)return;const o=na(r),i=Q(n),{mode:a}=i;if(s.isLeaving)return Es(o);const l=ao(o);if(!l)return Es(o);let c=Zs(l,i,s,t,p=>c=p);l.type!==kn&&St(l,c);let u=t.subTree&&ao(t.subTree);if(u&&u.type!==kn&&!Me(u,l)&&Xi(t).type!==kn){let p=Zs(u,i,s,t);if(St(u,p),a==="out-in"&&l.type!==kn)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},Es(o);a==="in-out"&&l.type!==kn?p.delayLeave=(d,g,b)=>{const w=ea(s,u);w[String(u.key)]=u,d[te]=()=>{g(),d[te]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function na(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==kn){e=t;break}}return e}const mc=gc;function ea(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function Zs(n,e,t,s,r){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:g,onAfterLeave:b,onLeaveCancelled:w,onBeforeAppear:B,onAppear:L,onAfterAppear:_,onAppearCancelled:N}=e,C=String(n.key),$=ea(t,n),D=(P,U)=>{P&&Gn(P,s,9,U)},V=(P,U)=>{const J=U[1];D(P,U),z(P)?P.every(T=>T.length<=1)&&J():P.length<=1&&J()},M={mode:i,persisted:a,beforeEnter(P){let U=l;if(!t.isMounted)if(o)U=B||l;else return;P[te]&&P[te](!0);const J=$[C];J&&Me(n,J)&&J.el[te]&&J.el[te](),D(U,[P])},enter(P){if($[C]===n)return;let U=c,J=u,T=p;if(!t.isMounted)if(o)U=L||c,J=_||u,T=N||p;else return;let Y=!1;P[at]=Rn=>{Y||(Y=!0,Rn?D(T,[P]):D(J,[P]),M.delayedLeave&&M.delayedLeave(),P[at]=void 0)};const mn=P[at].bind(null,!1);U?V(U,[P,mn]):mn()},leave(P,U){const J=String(n.key);if(P[at]&&P[at](!0),t.isUnmounting)return U();D(d,[P]);let T=!1;P[te]=mn=>{T||(T=!0,U(),mn?D(w,[P]):D(b,[P]),P[te]=void 0,$[J]===n&&delete $[J])};const Y=P[te].bind(null,!1);$[J]=n,g?V(g,[P,Y]):Y()},clone(P){const U=Zs(P,e,t,s,r);return r&&r(U),U}};return M}function Es(n){if(bs(n))return n=Ae(n),n.children=null,n}function ao(n){if(!bs(n))return Zi(n.type)&&n.children?na(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&G(t.default))return t.default()}}function St(n,e){n.shapeFlag&6&&n.component?(n.transition=e,St(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ta(n,e=!1,t){let s=[],r=0;for(let o=0;o<n.length;o++){let i=n[o];const a=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===Ln?(i.patchFlag&128&&r++,s=s.concat(ta(i.children,e,a))):(e||i.type!==kn)&&s.push(a!=null?Ae(i,{key:a}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function sa(n,e){return G(n)?xn({name:n.name},e,{setup:n}):n}function ra(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function lo(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ns=new WeakMap;function bt(n,e,t,s,r=!1){if(z(n)){n.forEach((w,B)=>bt(w,e&&(z(e)?e[B]:e),t,s,r));return}if(nt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bt(n,e,t,s.component.subTree);return}const o=s.shapeFlag&4?Lr(s.component):s.el,i=r?null:o,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dn?a.refs={}:a.refs,p=a.setupState,d=Q(p),g=p===dn?di:w=>lo(u,w)?!1:sn(d,w),b=(w,B)=>!(B&&lo(u,B));if(c!=null&&c!==l){if(co(e),hn(c))u[c]=null,g(c)&&(p[c]=null);else if(fn(c)){const w=e;b(c,w.k)&&(c.value=null),w.k&&(u[w.k]=null)}}if(G(l))Ot(l,a,12,[i,u]);else{const w=hn(l),B=fn(l);if(w||B){const L=()=>{if(n.f){const _=w?g(l)?p[l]:u[l]:b()||!n.k?l.value:u[n.k];if(r)z(_)&&gr(_,o);else if(z(_))_.includes(o)||_.push(o);else if(w)u[l]=[o],g(l)&&(p[l]=u[l]);else{const N=[o];b(l,n.k)&&(l.value=N),n.k&&(u[n.k]=N)}}else w?(u[l]=i,g(l)&&(p[l]=i)):B&&(b(l,n.k)&&(l.value=i),n.k&&(u[n.k]=i))};if(i){const _=()=>{L(),ns.delete(n)};_.id=-1,ns.set(n,_),Pn(_,t)}else co(n),L()}}}function co(n){const e=ns.get(n);e&&(e.flags|=8,ns.delete(n))}fs().requestIdleCallback;fs().cancelIdleCallback;const nt=n=>!!n.type.__asyncLoader,bs=n=>n.type.__isKeepAlive;function bc(n,e){oa(n,"a",e)}function vc(n,e){oa(n,"da",e)}function oa(n,e,t=_n){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(vs(e,s,t),t){let r=t.parent;for(;r&&r.parent;)bs(r.parent.vnode)&&xc(s,e,t,r),r=r.parent}}function xc(n,e,t,s){const r=vs(e,n,s,!0);Cr(()=>{gr(s[e],r)},t)}function vs(n,e,t=_n,s=!1){if(t){const r=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...i)=>{me();const a=Dt(t),l=Gn(e,t,n,i);return a(),be(),l});return s?r.unshift(o):r.push(o),o}}const xe=n=>(e,t=_n)=>{(!It||n==="sp")&&vs(n,(...s)=>e(...s),t)},yc=xe("bm"),Tr=xe("m"),ia=xe("bu"),wc=xe("u"),aa=xe("bum"),Cr=xe("um"),jc=xe("sp"),kc=xe("rtg"),_c=xe("rtc");function Rc(n,e=_n){vs("ec",n,e)}const la="components";function Sc(n,e){return ua(la,n,!0,e)||n}const ca=Symbol.for("v-ndc");function Pc(n){return hn(n)?ua(la,n,!1)||n:n||ca}function ua(n,e,t=!0,s=!1){const r=Cn||_n;if(r){const o=r.type;{const a=du(o,!1);if(a&&(a===e||a===Bn(e)||a===ds(Bn(e))))return o}const i=uo(r[n]||o[n],e)||uo(r.appContext[n],e);return!i&&s?o:i}}function uo(n,e){return n&&(n[e]||n[Bn(e)]||n[ds(Bn(e))])}function Ff(n,e,t,s){let r;const o=t,i=z(n);if(i||hn(n)){const a=i&&ie(n);let l=!1,c=!1;a&&(l=!Vn(n),c=ve(n),n=hs(n)),r=new Array(n.length);for(let u=0,p=n.length;u<p;u++)r[u]=e(l?c?et(Wn(n[u])):Wn(n[u]):n[u],u,void 0,o)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,o)}else if(nn(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,o)}}else r=[];return r}function $f(n,e,t={},s,r){if(Cn.ce||Cn.parent&&nt(Cn.parent)&&Cn.parent.ce){const c=Object.keys(t).length>0;return Pt(),Tt(Ln,null,[In("slot",t,s&&s())],c?-2:64)}let o=n[e];o&&o._c&&(o._d=!1),Pt();const i=o&&pa(o(t)),a=t.key||i&&i.key,l=Tt(Ln,{key:(a&&!Hn(a)?a:`_${e}`)+(!i&&s?"_fb":"")},i||(s?s():[]),i&&n._===1?64:-2);return o&&o._c&&(o._d=!0),l}function pa(n){return n.some(e=>Ct(e)?!(e.type===kn||e.type===Ln&&!pa(e.children)):!0)?n:null}const Qs=n=>n?Ia(n)?Lr(n):Qs(n.parent):null,vt=xn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qs(n.parent),$root:n=>Qs(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fa(n),$forceUpdate:n=>n.f||(n.f=()=>{Ar(n.update)}),$nextTick:n=>n.n||(n.n=Pr.bind(n.proxy)),$watch:n=>uc.bind(n)}),Bs=(n,e)=>n!==dn&&!n.__isScriptSetup&&sn(n,e),Ac={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:o,accessCache:i,type:a,appContext:l}=n;if(e[0]!=="$"){const d=i[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return o[e]}else{if(Bs(s,e))return i[e]=1,s[e];if(r!==dn&&sn(r,e))return i[e]=2,r[e];if(sn(o,e))return i[e]=3,o[e];if(t!==dn&&sn(t,e))return i[e]=4,t[e];Xs&&(i[e]=0)}}const c=vt[e];let u,p;if(c)return e==="$attrs"&&jn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==dn&&sn(t,e))return i[e]=4,t[e];if(p=l.config.globalProperties,sn(p,e))return p[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:o}=n;return Bs(r,e)?(r[e]=t,!0):s!==dn&&sn(s,e)?(s[e]=t,!0):sn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,props:o,type:i}},a){let l;return!!(t[a]||n!==dn&&a[0]!=="$"&&sn(n,a)||Bs(e,a)||sn(o,a)||sn(s,a)||sn(vt,a)||sn(r.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:sn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function po(n){return z(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Xs=!0;function Tc(n){const e=fa(n),t=n.proxy,s=n.ctx;Xs=!1,e.beforeCreate&&fo(e.beforeCreate,n,"bc");const{data:r,computed:o,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:p,mounted:d,beforeUpdate:g,updated:b,activated:w,deactivated:B,beforeDestroy:L,beforeUnmount:_,destroyed:N,unmounted:C,render:$,renderTracked:D,renderTriggered:V,errorCaptured:M,serverPrefetch:P,expose:U,inheritAttrs:J,components:T,directives:Y,filters:mn}=e;if(c&&Cc(c,s,null),i)for(const K in i){const en=i[K];G(en)&&(s[K]=en.bind(t))}if(r){const K=r.call(t,t);nn(K)&&(n.data=Lt(K))}if(Xs=!0,o)for(const K in o){const en=o[K],ae=G(en)?en.bind(t,t):G(en.get)?en.get.bind(t,t):qn,ye=!G(en)&&G(en.set)?en.set.bind(t):qn,Yn=Dn({get:ae,set:ye});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Yn.value,set:Nn=>Yn.value=Nn})}if(a)for(const K in a)da(a[K],s,t,K);if(l){const K=G(l)?l.call(t):l;Reflect.ownKeys(K).forEach(en=>{Ut(en,K[en])})}u&&fo(u,n,"c");function an(K,en){z(en)?en.forEach(ae=>K(ae.bind(t))):en&&K(en.bind(t))}if(an(yc,p),an(Tr,d),an(ia,g),an(wc,b),an(bc,w),an(vc,B),an(Rc,M),an(_c,D),an(kc,V),an(aa,_),an(Cr,C),an(jc,P),z(U))if(U.length){const K=n.exposed||(n.exposed={});U.forEach(en=>{Object.defineProperty(K,en,{get:()=>t[en],set:ae=>t[en]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});$&&n.render===qn&&(n.render=$),J!=null&&(n.inheritAttrs=J),T&&(n.components=T),Y&&(n.directives=Y),P&&ra(n)}function Cc(n,e,t=qn){z(n)&&(n=nr(n));for(const s in n){const r=n[s];let o;nn(r)?"default"in r?o=Un(r.from||s,r.default,!0):o=Un(r.from||s):o=Un(r),fn(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):e[s]=o}}function fo(n,e,t){Gn(z(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function da(n,e,t,s){let r=s.includes(".")?Yi(t,s):()=>t[s];if(hn(n)){const o=e[n];G(o)&&Xe(r,o)}else if(G(n))Xe(r,n.bind(t));else if(nn(n))if(z(n))n.forEach(o=>da(o,e,t,s));else{const o=G(n.handler)?n.handler.bind(t):e[n.handler];G(o)&&Xe(r,o,n)}}function fa(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=n.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!t&&!s?l=e:(l={},r.length&&r.forEach(c=>es(l,c,i,!0)),es(l,e,i)),nn(e)&&o.set(e,l),l}function es(n,e,t,s=!1){const{mixins:r,extends:o}=e;o&&es(n,o,t,!0),r&&r.forEach(i=>es(n,i,t,!0));for(const i in e)if(!(s&&i==="expose")){const a=Ic[i]||t&&t[i];n[i]=a?a(n[i],e[i]):e[i]}return n}const Ic={data:ho,props:go,emits:go,methods:ft,computed:ft,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:ft,directives:ft,watch:Bc,provide:ho,inject:Ec};function ho(n,e){return e?n?function(){return xn(G(n)?n.call(this,this):n,G(e)?e.call(this,this):e)}:e:n}function Ec(n,e){return ft(nr(n),nr(e))}function nr(n){if(z(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Sn(n,e){return n?[...new Set([].concat(n,e))]:e}function ft(n,e){return n?xn(Object.create(null),n,e):e}function go(n,e){return n?z(n)&&z(e)?[...new Set([...n,...e])]:xn(Object.create(null),po(n),po(e??{})):e}function Bc(n,e){if(!n)return e;if(!e)return n;const t=xn(Object.create(null),n);for(const s in e)t[s]=Sn(n[s],e[s]);return t}function ha(){return{app:null,config:{isNativeTag:di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nc=0;function Lc(n,e){return function(s,r=null){G(s)||(s=xn({},s)),r!=null&&!nn(r)&&(r=null);const o=ha(),i=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Nc++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:hu,get config(){return o.config},set config(u){},use(u,...p){return i.has(u)||(u&&G(u.install)?(i.add(u),u.install(c,...p)):G(u)&&(i.add(u),u(c,...p))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,p){return p?(o.components[u]=p,c):o.components[u]},directive(u,p){return p?(o.directives[u]=p,c):o.directives[u]},mount(u,p,d){if(!l){const g=c._ceVNode||In(s,r);return g.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),n(g,u,d),l=!0,c._container=u,u.__vue_app__=c,Lr(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Gn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,p){return o.provides[u]=p,c},runWithContext(u){const p=Fe;Fe=c;try{return u()}finally{Fe=p}}};return c}}let Fe=null;const Oc=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Bn(e)}Modifiers`]||n[`${Te(e)}Modifiers`];function Dc(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||dn;let r=t;const o=e.startsWith("update:"),i=o&&Oc(s,e.slice(7));i&&(i.trim&&(r=t.map(u=>hn(u)?u.trim():u)),i.number&&(r=t.map(bl)));let a,l=s[a=Ss(e)]||s[a=Ss(Bn(e))];!l&&o&&(l=s[a=Ss(Te(e))]),l&&Gn(l,n,6,r);const c=s[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Gn(c,n,6,r)}}const Mc=new WeakMap;function ga(n,e,t=!1){const s=t?Mc:e.emitsCache,r=s.get(n);if(r!==void 0)return r;const o=n.emits;let i={},a=!1;if(!G(n)){const l=c=>{const u=ga(c,e,!0);u&&(a=!0,xn(i,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!a?(nn(n)&&s.set(n,null),null):(z(o)?o.forEach(l=>i[l]=null):xn(i,o),nn(n)&&s.set(n,i),i)}function xs(n,e){return!n||!ls(e)?!1:(e=e.slice(2).replace(/Once$/,""),sn(n,e[0].toLowerCase()+e.slice(1))||sn(n,Te(e))||sn(n,e))}function mo(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:a,emit:l,render:c,renderCache:u,props:p,data:d,setupState:g,ctx:b,inheritAttrs:w}=n,B=Xt(n);let L,_;try{if(t.shapeFlag&4){const C=r||s,$=C;L=re(c.call($,C,u,p,g,d,b)),_=a}else{const C=e;L=re(C.length>1?C(p,{attrs:a,slots:i,emit:l}):C(p,null)),_=e.props?a:Vc(a)}}catch(C){xt.length=0,ms(C,n,1),L=In(kn)}let N=L;if(_&&w!==!1){const C=Object.keys(_),{shapeFlag:$}=N;C.length&&$&7&&(o&&C.some(cs)&&(_=Hc(_,o)),N=Ae(N,_,!1,!0))}return t.dirs&&(N=Ae(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&St(N,t.transition),L=N,Xt(B),L}const Vc=n=>{let e;for(const t in n)(t==="class"||t==="style"||ls(t))&&((e||(e={}))[t]=n[t]);return e},Hc=(n,e)=>{const t={};for(const s in n)(!cs(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function Fc(n,e,t){const{props:s,children:r,component:o}=n,{props:i,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?bo(s,i,c):!!i;if(l&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const d=u[p];if(ma(i,s,d)&&!xs(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?bo(s,i,c):!0:!!i;return!1}function bo(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(ma(e,n,o)&&!xs(t,o))return!0}return!1}function ma(n,e,t){const s=n[t],r=e[t];return t==="style"&&nn(s)&&nn(r)?!vr(s,r):s!==r}function $c({vnode:n,parent:e,suspense:t},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=s,n=r),r===n)(n=e.vnode).el=s,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=s)}const ba={},va=()=>Object.create(ba),xa=n=>Object.getPrototypeOf(n)===ba;function qc(n,e,t,s=!1){const r={},o=va();n.propsDefaults=Object.create(null),ya(n,e,r,o);for(const i in n.propsOptions[0])i in r||(r[i]=void 0);t?n.props=s?r:Mi(r):n.type.props?n.props=r:n.props=o,n.attrs=o}function zc(n,e,t,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=n,a=Q(r),[l]=n.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let p=0;p<u.length;p++){let d=u[p];if(xs(n.emitsOptions,d))continue;const g=e[d];if(l)if(sn(o,d))g!==o[d]&&(o[d]=g,c=!0);else{const b=Bn(d);r[b]=er(l,a,b,g,n,!1)}else g!==o[d]&&(o[d]=g,c=!0)}}}else{ya(n,e,r,o)&&(c=!0);let u;for(const p in a)(!e||!sn(e,p)&&((u=Te(p))===p||!sn(e,u)))&&(l?t&&(t[p]!==void 0||t[u]!==void 0)&&(r[p]=er(l,a,p,void 0,n,!0)):delete r[p]);if(o!==a)for(const p in o)(!e||!sn(e,p))&&(delete o[p],c=!0)}c&&fe(n.attrs,"set","")}function ya(n,e,t,s){const[r,o]=n.propsOptions;let i=!1,a;if(e)for(let l in e){if(ht(l))continue;const c=e[l];let u;r&&sn(r,u=Bn(l))?!o||!o.includes(u)?t[u]=c:(a||(a={}))[u]=c:xs(n.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,i=!0)}if(o){const l=Q(t),c=a||dn;for(let u=0;u<o.length;u++){const p=o[u];t[p]=er(r,l,p,c[p],n,!sn(c,p))}}return i}function er(n,e,t,s,r,o){const i=n[t];if(i!=null){const a=sn(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&G(l)){const{propsDefaults:c}=r;if(t in c)s=c[t];else{const u=Dt(r);s=c[t]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(t,s)}i[0]&&(o&&!a?s=!1:i[1]&&(s===""||s===Te(t))&&(s=!0))}return s}const Uc=new WeakMap;function wa(n,e,t=!1){const s=t?Uc:e.propsCache,r=s.get(n);if(r)return r;const o=n.props,i={},a=[];let l=!1;if(!G(n)){const u=p=>{l=!0;const[d,g]=wa(p,e,!0);xn(i,d),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!l)return nn(n)&&s.set(n,Je),Je;if(z(o))for(let u=0;u<o.length;u++){const p=Bn(o[u]);vo(p)&&(i[p]=dn)}else if(o)for(const u in o){const p=Bn(u);if(vo(p)){const d=o[u],g=i[p]=z(d)||G(d)?{type:d}:xn({},d),b=g.type;let w=!1,B=!0;if(z(b))for(let L=0;L<b.length;++L){const _=b[L],N=G(_)&&_.name;if(N==="Boolean"){w=!0;break}else N==="String"&&(B=!1)}else w=G(b)&&b.name==="Boolean";g[0]=w,g[1]=B,(w||sn(g,"default"))&&a.push(p)}}const c=[i,a];return nn(n)&&s.set(n,c),c}function vo(n){return n[0]!=="$"&&!ht(n)}const Ir=n=>n==="_"||n==="_ctx"||n==="$stable",Er=n=>z(n)?n.map(re):[re(n)],Wc=(n,e,t)=>{if(e._n)return e;const s=Ks((...r)=>Er(e(...r)),t);return s._c=!1,s},ja=(n,e,t)=>{const s=n._ctx;for(const r in n){if(Ir(r))continue;const o=n[r];if(G(o))e[r]=Wc(r,o,s);else if(o!=null){const i=Er(o);e[r]=()=>i}}},ka=(n,e)=>{const t=Er(e);n.slots.default=()=>t},_a=(n,e,t)=>{for(const s in e)(t||!Ir(s))&&(n[s]=e[s])},Gc=(n,e,t)=>{const s=n.slots=va();if(n.vnode.shapeFlag&32){const r=e._;r?(_a(s,e,t),t&&bi(s,"_",r,!0)):ja(e,s)}else e&&ka(n,e)},Kc=(n,e,t)=>{const{vnode:s,slots:r}=n;let o=!0,i=dn;if(s.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:_a(r,e,t):(o=!e.$stable,ja(e,r)),i=e}else e&&(ka(n,e),i={default:1});if(o)for(const a in r)!Ir(a)&&i[a]==null&&delete r[a]},Pn=Xc;function Yc(n){return Jc(n)}function Jc(n,e){const t=fs();t.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:p,nextSibling:d,setScopeId:g=qn,insertStaticContent:b}=n,w=(f,h,m,v=null,j=null,x=null,A=void 0,S=null,R=!!h.dynamicChildren)=>{if(f===h)return;f&&!Me(f,h)&&(v=y(f),Nn(f,j,x,!0),f=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:k,ref:q,shapeFlag:E}=h;switch(k){case ys:B(f,h,m,v);break;case kn:L(f,h,m,v);break;case Wt:f==null&&_(h,m,v,A);break;case Ln:T(f,h,m,v,j,x,A,S,R);break;default:E&1?$(f,h,m,v,j,x,A,S,R):E&6?Y(f,h,m,v,j,x,A,S,R):(E&64||E&128)&&k.process(f,h,m,v,j,x,A,S,R,H)}q!=null&&j?bt(q,f&&f.ref,x,h||f,!h):q==null&&f&&f.ref!=null&&bt(f.ref,null,x,f,!0)},B=(f,h,m,v)=>{if(f==null)s(h.el=a(h.children),m,v);else{const j=h.el=f.el;h.children!==f.children&&c(j,h.children)}},L=(f,h,m,v)=>{f==null?s(h.el=l(h.children||""),m,v):h.el=f.el},_=(f,h,m,v)=>{[f.el,f.anchor]=b(f.children,h,m,v,f.el,f.anchor)},N=({el:f,anchor:h},m,v)=>{let j;for(;f&&f!==h;)j=d(f),s(f,m,v),f=j;s(h,m,v)},C=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=d(f),r(f),f=m;r(h)},$=(f,h,m,v,j,x,A,S,R)=>{if(h.type==="svg"?A="svg":h.type==="math"&&(A="mathml"),f==null)D(h,m,v,j,x,A,S,R);else{const k=f.el&&f.el._isVueCE?f.el:null;try{k&&k._beginPatch(),P(f,h,j,x,A,S,R)}finally{k&&k._endPatch()}}},D=(f,h,m,v,j,x,A,S)=>{let R,k;const{props:q,shapeFlag:E,transition:F,dirs:W}=f;if(R=f.el=i(f.type,x,q&&q.is,q),E&8?u(R,f.children):E&16&&M(f.children,R,null,v,j,Ns(f,x),A,S),W&&Ie(f,null,v,"created"),V(R,f,f.scopeId,A,v),q){for(const ln in q)ln!=="value"&&!ht(ln)&&o(R,ln,null,q[ln],x,v);"value"in q&&o(R,"value",null,q.value,x),(k=q.onVnodeBeforeMount)&&Xn(k,v,f)}W&&Ie(f,null,v,"beforeMount");const X=Zc(j,F);X&&F.beforeEnter(R),s(R,h,m),((k=q&&q.onVnodeMounted)||X||W)&&Pn(()=>{try{k&&Xn(k,v,f),X&&F.enter(R),W&&Ie(f,null,v,"mounted")}finally{}},j)},V=(f,h,m,v,j)=>{if(m&&g(f,m),v)for(let x=0;x<v.length;x++)g(f,v[x]);if(j){let x=j.subTree;if(h===x||Pa(x.type)&&(x.ssContent===h||x.ssFallback===h)){const A=j.vnode;V(f,A,A.scopeId,A.slotScopeIds,j.parent)}}},M=(f,h,m,v,j,x,A,S,R=0)=>{for(let k=R;k<f.length;k++){const q=f[k]=S?de(f[k]):re(f[k]);w(null,q,h,m,v,j,x,A,S)}},P=(f,h,m,v,j,x,A)=>{const S=h.el=f.el;let{patchFlag:R,dynamicChildren:k,dirs:q}=h;R|=f.patchFlag&16;const E=f.props||dn,F=h.props||dn;let W;if(m&&Be(m,!1),(W=F.onVnodeBeforeUpdate)&&Xn(W,m,h,f),q&&Ie(h,f,m,"beforeUpdate"),m&&Be(m,!0),(E.innerHTML&&F.innerHTML==null||E.textContent&&F.textContent==null)&&u(S,""),k?U(f.dynamicChildren,k,S,m,v,Ns(h,j),x):A||en(f,h,S,null,m,v,Ns(h,j),x,!1),R>0){if(R&16)J(S,E,F,m,j);else if(R&2&&E.class!==F.class&&o(S,"class",null,F.class,j),R&4&&o(S,"style",E.style,F.style,j),R&8){const X=h.dynamicProps;for(let ln=0;ln<X.length;ln++){const un=X[ln],bn=E[un],yn=F[un];(yn!==bn||un==="value")&&o(S,un,bn,yn,j,m)}}R&1&&f.children!==h.children&&u(S,h.children)}else!A&&k==null&&J(S,E,F,m,j);((W=F.onVnodeUpdated)||q)&&Pn(()=>{W&&Xn(W,m,h,f),q&&Ie(h,f,m,"updated")},v)},U=(f,h,m,v,j,x,A)=>{for(let S=0;S<h.length;S++){const R=f[S],k=h[S],q=R.el&&(R.type===Ln||!Me(R,k)||R.shapeFlag&198)?p(R.el):m;w(R,k,q,null,v,j,x,A,!0)}},J=(f,h,m,v,j)=>{if(h!==m){if(h!==dn)for(const x in h)!ht(x)&&!(x in m)&&o(f,x,h[x],null,j,v);for(const x in m){if(ht(x))continue;const A=m[x],S=h[x];A!==S&&x!=="value"&&o(f,x,S,A,j,v)}"value"in m&&o(f,"value",h.value,m.value,j)}},T=(f,h,m,v,j,x,A,S,R)=>{const k=h.el=f?f.el:a(""),q=h.anchor=f?f.anchor:a("");let{patchFlag:E,dynamicChildren:F,slotScopeIds:W}=h;W&&(S=S?S.concat(W):W),f==null?(s(k,m,v),s(q,m,v),M(h.children||[],m,q,j,x,A,S,R)):E>0&&E&64&&F&&f.dynamicChildren&&f.dynamicChildren.length===F.length?(U(f.dynamicChildren,F,m,j,x,A,S),(h.key!=null||j&&h===j.subTree)&&Br(f,h,!0)):en(f,h,m,q,j,x,A,S,R)},Y=(f,h,m,v,j,x,A,S,R)=>{h.slotScopeIds=S,f==null?h.shapeFlag&512?j.ctx.activate(h,m,v,A,R):mn(h,m,v,j,x,A,R):Rn(f,h,R)},mn=(f,h,m,v,j,x,A)=>{const S=f.component=au(f,v,j);if(bs(f)&&(S.ctx.renderer=H),lu(S,!1,A),S.asyncDep){if(j&&j.registerDep(S,an,A),!f.el){const R=S.subTree=In(kn);L(null,R,h,m),f.placeholder=R.el}}else an(S,f,h,m,j,x,A)},Rn=(f,h,m)=>{const v=h.component=f.component;if(Fc(f,h,m))if(v.asyncDep&&!v.asyncResolved){K(v,h,m);return}else v.next=h,v.update();else h.el=f.el,v.vnode=h},an=(f,h,m,v,j,x,A)=>{const S=()=>{if(f.isMounted){let{next:E,bu:F,u:W,parent:X,vnode:ln}=f;{const Zn=Ra(f);if(Zn){E&&(E.el=ln.el,K(f,E,A)),Zn.asyncDep.then(()=>{Pn(()=>{f.isUnmounted||k()},j)});return}}let un=E,bn;Be(f,!1),E?(E.el=ln.el,K(f,E,A)):E=ln,F&&Ps(F),(bn=E.props&&E.props.onVnodeBeforeUpdate)&&Xn(bn,X,E,ln),Be(f,!0);const yn=mo(f),Jn=f.subTree;f.subTree=yn,w(Jn,yn,p(Jn.el),y(Jn),f,j,x),E.el=yn.el,un===null&&$c(f,yn.el),W&&Pn(W,j),(bn=E.props&&E.props.onVnodeUpdated)&&Pn(()=>Xn(bn,X,E,ln),j)}else{let E;const{el:F,props:W}=h,{bm:X,m:ln,parent:un,root:bn,type:yn}=f,Jn=nt(h);Be(f,!1),X&&Ps(X),!Jn&&(E=W&&W.onVnodeBeforeMount)&&Xn(E,un,h),Be(f,!0);{bn.ce&&bn.ce._hasShadowRoot()&&bn.ce._injectChildStyle(yn,f.parent?f.parent.type:void 0);const Zn=f.subTree=mo(f);w(null,Zn,m,v,f,j,x),h.el=Zn.el}if(ln&&Pn(ln,j),!Jn&&(E=W&&W.onVnodeMounted)){const Zn=h;Pn(()=>Xn(E,un,Zn),j)}(h.shapeFlag&256||un&&nt(un.vnode)&&un.vnode.shapeFlag&256)&&f.a&&Pn(f.a,j),f.isMounted=!0,h=m=v=null}};f.scope.on();const R=f.effect=new _i(S);f.scope.off();const k=f.update=R.run.bind(R),q=f.job=R.runIfDirty.bind(R);q.i=f,q.id=f.uid,R.scheduler=()=>Ar(q),Be(f,!0),k()},K=(f,h,m)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,zc(f,h.props,v,m),Kc(f,h.children,m),me(),ro(f),be()},en=(f,h,m,v,j,x,A,S,R=!1)=>{const k=f&&f.children,q=f?f.shapeFlag:0,E=h.children,{patchFlag:F,shapeFlag:W}=h;if(F>0){if(F&128){ye(k,E,m,v,j,x,A,S,R);return}else if(F&256){ae(k,E,m,v,j,x,A,S,R);return}}W&8?(q&16&&Fn(k,j,x),E!==k&&u(m,E)):q&16?W&16?ye(k,E,m,v,j,x,A,S,R):Fn(k,j,x,!0):(q&8&&u(m,""),W&16&&M(E,m,v,j,x,A,S,R))},ae=(f,h,m,v,j,x,A,S,R)=>{f=f||Je,h=h||Je;const k=f.length,q=h.length,E=Math.min(k,q);let F;for(F=0;F<E;F++){const W=h[F]=R?de(h[F]):re(h[F]);w(f[F],W,m,null,j,x,A,S,R)}k>q?Fn(f,j,x,!0,!1,E):M(h,m,v,j,x,A,S,R,E)},ye=(f,h,m,v,j,x,A,S,R)=>{let k=0;const q=h.length;let E=f.length-1,F=q-1;for(;k<=E&&k<=F;){const W=f[k],X=h[k]=R?de(h[k]):re(h[k]);if(Me(W,X))w(W,X,m,null,j,x,A,S,R);else break;k++}for(;k<=E&&k<=F;){const W=f[E],X=h[F]=R?de(h[F]):re(h[F]);if(Me(W,X))w(W,X,m,null,j,x,A,S,R);else break;E--,F--}if(k>E){if(k<=F){const W=F+1,X=W<q?h[W].el:v;for(;k<=F;)w(null,h[k]=R?de(h[k]):re(h[k]),m,X,j,x,A,S,R),k++}}else if(k>F)for(;k<=E;)Nn(f[k],j,x,!0),k++;else{const W=k,X=k,ln=new Map;for(k=X;k<=F;k++){const On=h[k]=R?de(h[k]):re(h[k]);On.key!=null&&ln.set(On.key,k)}let un,bn=0;const yn=F-X+1;let Jn=!1,Zn=0;const ot=new Array(yn);for(k=0;k<yn;k++)ot[k]=0;for(k=W;k<=E;k++){const On=f[k];if(bn>=yn){Nn(On,j,x,!0);continue}let Qn;if(On.key!=null)Qn=ln.get(On.key);else for(un=X;un<=F;un++)if(ot[un-X]===0&&Me(On,h[un])){Qn=un;break}Qn===void 0?Nn(On,j,x,!0):(ot[Qn-X]=k+1,Qn>=Zn?Zn=Qn:Jn=!0,w(On,h[Qn],m,null,j,x,A,S,R),bn++)}const Zr=Jn?Qc(ot):Je;for(un=Zr.length-1,k=yn-1;k>=0;k--){const On=X+k,Qn=h[On],Qr=h[On+1],Xr=On+1<q?Qr.el||Sa(Qr):v;ot[k]===0?w(null,Qn,m,Xr,j,x,A,S,R):Jn&&(un<0||k!==Zr[un]?Yn(Qn,m,Xr,2):un--)}}},Yn=(f,h,m,v,j=null)=>{const{el:x,type:A,transition:S,children:R,shapeFlag:k}=f;if(k&6){Yn(f.component.subTree,h,m,v);return}if(k&128){f.suspense.move(h,m,v);return}if(k&64){A.move(f,h,m,H);return}if(A===Ln){s(x,h,m);for(let E=0;E<R.length;E++)Yn(R[E],h,m,v);s(f.anchor,h,m);return}if(A===Wt){N(f,h,m);return}if(v!==2&&k&1&&S)if(v===0)S.beforeEnter(x),s(x,h,m),Pn(()=>S.enter(x),j);else{const{leave:E,delayLeave:F,afterLeave:W}=S,X=()=>{f.ctx.isUnmounted?r(x):s(x,h,m)},ln=()=>{x._isLeaving&&x[te](!0),E(x,()=>{X(),W&&W()})};F?F(x,X,ln):ln()}else s(x,h,m)},Nn=(f,h,m,v=!1,j=!1)=>{const{type:x,props:A,ref:S,children:R,dynamicChildren:k,shapeFlag:q,patchFlag:E,dirs:F,cacheIndex:W,memo:X}=f;if(E===-2&&(j=!1),S!=null&&(me(),bt(S,null,m,f,!0),be()),W!=null&&(h.renderCache[W]=void 0),q&256){h.ctx.deactivate(f);return}const ln=q&1&&F,un=!nt(f);let bn;if(un&&(bn=A&&A.onVnodeBeforeUnmount)&&Xn(bn,h,f),q&6)Ce(f.component,m,v);else{if(q&128){f.suspense.unmount(m,v);return}ln&&Ie(f,null,h,"beforeUnmount"),q&64?f.type.remove(f,h,m,H,v):k&&!k.hasOnce&&(x!==Ln||E>0&&E&64)?Fn(k,h,m,!1,!0):(x===Ln&&E&384||!j&&q&16)&&Fn(R,h,m),v&&ze(f)}const yn=X!=null&&W==null;(un&&(bn=A&&A.onVnodeUnmounted)||ln||yn)&&Pn(()=>{bn&&Xn(bn,h,f),ln&&Ie(f,null,h,"unmounted"),yn&&(f.el=null)},m)},ze=f=>{const{type:h,el:m,anchor:v,transition:j}=f;if(h===Ln){Ue(m,v);return}if(h===Wt){C(f);return}const x=()=>{r(m),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(f.shapeFlag&1&&j&&!j.persisted){const{leave:A,delayLeave:S}=j,R=()=>A(m,x);S?S(f.el,x,R):R()}else x()},Ue=(f,h)=>{let m;for(;f!==h;)m=d(f),r(f),f=m;r(h)},Ce=(f,h,m)=>{const{bum:v,scope:j,job:x,subTree:A,um:S,m:R,a:k}=f;xo(R),xo(k),v&&Ps(v),j.stop(),x&&(x.flags|=8,Nn(A,f,h,m)),S&&Pn(S,h),Pn(()=>{f.isUnmounted=!0},h)},Fn=(f,h,m,v=!1,j=!1,x=0)=>{for(let A=x;A<f.length;A++)Nn(f[A],h,m,v,j)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=d(f.anchor||f.el),m=h&&h[Ji];return m?d(m):h};let O=!1;const I=(f,h,m)=>{let v;f==null?h._vnode&&(Nn(h._vnode,null,null,!0),v=h._vnode.component):w(h._vnode||null,f,h,null,null,null,m),h._vnode=f,O||(O=!0,ro(v),Ui(),O=!1)},H={p:w,um:Nn,m:Yn,r:ze,mt:mn,mc:M,pc:en,pbc:U,n:y,o:n};return{render:I,hydrate:void 0,createApp:Lc(I)}}function Ns({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Be({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zc(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Br(n,e,t=!1){const s=n.children,r=e.children;if(z(s)&&z(r))for(let o=0;o<s.length;o++){const i=s[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=de(r[o]),a.el=i.el),!t&&a.patchFlag!==-2&&Br(i,a)),a.type===ys&&(a.patchFlag===-1&&(a=r[o]=de(a)),a.el=i.el),a.type===kn&&!a.el&&(a.el=i.el)}}function Qc(n){const e=n.slice(),t=[0];let s,r,o,i,a;const l=n.length;for(s=0;s<l;s++){const c=n[s];if(c!==0){if(r=t[t.length-1],n[r]<c){e[s]=r,t.push(s);continue}for(o=0,i=t.length-1;o<i;)a=o+i>>1,n[t[a]]<c?o=a+1:i=a;c<n[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=e[i];return t}function Ra(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ra(e)}function xo(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Sa(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Sa(e.subTree):null}const Pa=n=>n.__isSuspense;function Xc(n,e){e&&e.pendingBranch?z(n)?e.effects.push(...n):e.effects.push(n):zi(n)}const Ln=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Wt=Symbol.for("v-stc"),xt=[];let Mn=null;function Pt(n=!1){xt.push(Mn=n?null:[])}function nu(){xt.pop(),Mn=xt[xt.length-1]||null}let At=1;function ts(n,e=!1){At+=n,n<0&&Mn&&e&&(Mn.hasOnce=!0)}function Aa(n){return n.dynamicChildren=At>0?Mn||Je:null,nu(),At>0&&Mn&&Mn.push(n),n}function qf(n,e,t,s,r,o){return Aa(Ca(n,e,t,s,r,o,!0))}function Tt(n,e,t,s,r){return Aa(In(n,e,t,s,r,!0))}function Ct(n){return n?n.__v_isVNode===!0:!1}function Me(n,e){return n.type===e.type&&n.key===e.key}const Ta=({key:n})=>n??null,Gt=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?hn(n)||fn(n)||G(n)?{i:Cn,r:n,k:e,f:!!t}:n:null);function Ca(n,e=null,t=null,s=0,r=null,o=n===Ln?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ta(e),ref:e&&Gt(e),scopeId:Gi,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Cn};return a?(Nr(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=hn(t)?8:16),At>0&&!i&&Mn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Mn.push(l),l}const In=eu;function eu(n,e=null,t=null,s=0,r=null,o=!1){if((!n||n===ca)&&(n=kn),Ct(n)){const a=Ae(n,e,!0);return t&&Nr(a,t),At>0&&!o&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(n)]=a:Mn.push(a)),a.patchFlag=-2,a}if(fu(n)&&(n=n.__vccOpts),e){e=tu(e);let{class:a,style:l}=e;a&&!hn(a)&&(e.class=br(a)),nn(l)&&(gs(l)&&!z(l)&&(l=xn({},l)),e.style=mr(l))}const i=hn(n)?1:Pa(n)?128:Zi(n)?64:nn(n)?4:G(n)?2:0;return Ca(n,e,t,s,r,i,o,!0)}function tu(n){return n?gs(n)||xa(n)?xn({},n):n:null}function Ae(n,e,t=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:a,transition:l}=n,c=e?ru(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ta(c),ref:e&&e.ref?t&&o?z(o)?o.concat(Gt(e)):[o,Gt(e)]:Gt(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ln?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ae(n.ssContent),ssFallback:n.ssFallback&&Ae(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&s&&St(u,l.clone(u)),u}function su(n=" ",e=0){return In(ys,null,n,e)}function zf(n="",e=!1){return e?(Pt(),Tt(kn,null,n)):In(kn,null,n)}function re(n){return n==null||typeof n=="boolean"?In(kn):z(n)?In(Ln,null,n.slice()):Ct(n)?de(n):In(ys,null,String(n))}function de(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ae(n)}function Nr(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(z(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Nr(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!xa(e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Cn},t=32):(e=String(e),s&64?(t=16,e=[su(e)]):t=8);n.children=e,n.shapeFlag|=t}function ru(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=br([e.class,s.class]));else if(r==="style")e.style=mr([e.style,s.style]);else if(ls(r)){const o=e[r],i=s[r];i&&o!==i&&!(z(o)&&o.includes(i))?e[r]=o?[].concat(o,i):i:i==null&&o==null&&!cs(r)&&(e[r]=i)}else r!==""&&(e[r]=s[r])}return e}function Xn(n,e,t,s=null){Gn(n,e,7,[t,s])}const ou=ha();let iu=0;function au(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||ou,o={uid:iu++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wa(s,r),emitsOptions:ga(s,r),emit:null,emitted:null,propsDefaults:dn,inheritAttrs:s.inheritAttrs,ctx:dn,data:dn,props:dn,attrs:dn,slots:dn,refs:dn,setupState:dn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Dc.bind(null,o),n.ce&&n.ce(o),o}let _n=null;const ws=()=>_n||Cn;let ss,tr;{const n=fs(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};ss=e("__VUE_INSTANCE_SETTERS__",t=>_n=t),tr=e("__VUE_SSR_SETTERS__",t=>It=t)}const Dt=n=>{const e=_n;return ss(n),n.scope.on(),()=>{n.scope.off(),ss(e)}},yo=()=>{_n&&_n.scope.off(),ss(null)};function Ia(n){return n.vnode.shapeFlag&4}let It=!1;function lu(n,e=!1,t=!1){e&&tr(e);const{props:s,children:r}=n.vnode,o=Ia(n);qc(n,s,o,e),Gc(n,r,t||e);const i=o?cu(n,e):void 0;return e&&tr(!1),i}function cu(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ac);const{setup:s}=t;if(s){me();const r=n.setupContext=s.length>1?pu(n):null,o=Dt(n),i=Ot(s,n,0,[n.props,r]),a=hi(i);if(be(),o(),(a||n.sp)&&!nt(n)&&ra(n),a){if(i.then(yo,yo),e)return i.then(l=>{wo(n,l)}).catch(l=>{ms(l,n,0)});n.asyncDep=i}else wo(n,i)}else Ea(n)}function wo(n,e,t){G(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nn(e)&&(n.setupState=Hi(e)),Ea(n)}function Ea(n,e,t){const s=n.type;n.render||(n.render=s.render||qn);{const r=Dt(n);me();try{Tc(n)}finally{be(),r()}}}const uu={get(n,e){return jn(n,"get",""),n[e]}};function pu(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,uu),slots:n.slots,emit:n.emit,expose:e}}function Lr(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hi(Rr(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vt)return vt[t](n)},has(e,t){return t in e||t in vt}})):n.proxy}function du(n,e=!0){return G(n)?n.displayName||n.name:n.name||e&&n.__name}function fu(n){return G(n)&&"__vccOpts"in n}const Dn=(n,e)=>tc(n,e,It);function Or(n,e,t){try{ts(-1);const s=arguments.length;return s===2?nn(e)&&!z(e)?Ct(e)?In(n,null,[e]):In(n,e):In(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Ct(t)&&(t=[t]),In(n,e,t))}finally{ts(1)}}const hu="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sr;const jo=typeof window<"u"&&window.trustedTypes;if(jo)try{sr=jo.createPolicy("vue",{createHTML:n=>n})}catch{}const Ba=sr?n=>sr.createHTML(n):n=>n,gu="http://www.w3.org/2000/svg",mu="http://www.w3.org/1998/Math/MathML",pe=typeof document<"u"?document:null,ko=pe&&pe.createElement("template"),bu={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?pe.createElementNS(gu,n):e==="mathml"?pe.createElementNS(mu,n):t?pe.createElement(n,{is:t}):pe.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>pe.createTextNode(n),createComment:n=>pe.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pe.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,o){const i=t?t.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===o||!(r=r.nextSibling)););else{ko.innerHTML=Ba(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=ko.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[i?i.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},we="transition",lt="animation",Et=Symbol("_vtc"),Na={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vu=xn({},Qi,Na),xu=n=>(n.displayName="Transition",n.props=vu,n),yu=xu((n,{slots:e})=>Or(mc,wu(n),e)),Ne=(n,e=[])=>{z(n)?n.forEach(t=>t(...e)):n&&n(...e)},_o=n=>n?z(n)?n.some(e=>e.length>1):n.length>1:!1;function wu(n){const e={};for(const T in n)T in Na||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:s,duration:r,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=i,appearToClass:u=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,b=ju(r),w=b&&b[0],B=b&&b[1],{onBeforeEnter:L,onEnter:_,onEnterCancelled:N,onLeave:C,onLeaveCancelled:$,onBeforeAppear:D=L,onAppear:V=_,onAppearCancelled:M=N}=e,P=(T,Y,mn,Rn)=>{T._enterCancelled=Rn,Le(T,Y?u:a),Le(T,Y?c:i),mn&&mn()},U=(T,Y)=>{T._isLeaving=!1,Le(T,p),Le(T,g),Le(T,d),Y&&Y()},J=T=>(Y,mn)=>{const Rn=T?V:_,an=()=>P(Y,T,mn);Ne(Rn,[Y,an]),Ro(()=>{Le(Y,T?l:o),ce(Y,T?u:a),_o(Rn)||So(Y,s,w,an)})};return xn(e,{onBeforeEnter(T){Ne(L,[T]),ce(T,o),ce(T,i)},onBeforeAppear(T){Ne(D,[T]),ce(T,l),ce(T,c)},onEnter:J(!1),onAppear:J(!0),onLeave(T,Y){T._isLeaving=!0;const mn=()=>U(T,Y);ce(T,p),T._enterCancelled?(ce(T,d),To(T)):(To(T),ce(T,d)),Ro(()=>{T._isLeaving&&(Le(T,p),ce(T,g),_o(C)||So(T,s,B,mn))}),Ne(C,[T,mn])},onEnterCancelled(T){P(T,!1,void 0,!0),Ne(N,[T])},onAppearCancelled(T){P(T,!0,void 0,!0),Ne(M,[T])},onLeaveCancelled(T){U(T),Ne($,[T])}})}function ju(n){if(n==null)return null;if(nn(n))return[Ls(n.enter),Ls(n.leave)];{const e=Ls(n);return[e,e]}}function Ls(n){return vl(n)}function ce(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Et]||(n[Et]=new Set)).add(e)}function Le(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[Et];t&&(t.delete(e),t.size||(n[Et]=void 0))}function Ro(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ku=0;function So(n,e,t,s){const r=n._endId=++ku,o=()=>{r===n._endId&&s()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:a,propCount:l}=_u(n,e);if(!i)return s();const c=i+"end";let u=0;const p=()=>{n.removeEventListener(c,d),o()},d=g=>{g.target===n&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),n.addEventListener(c,d)}function _u(n,e){const t=window.getComputedStyle(n),s=b=>(t[b]||"").split(", "),r=s(`${we}Delay`),o=s(`${we}Duration`),i=Po(r,o),a=s(`${lt}Delay`),l=s(`${lt}Duration`),c=Po(a,l);let u=null,p=0,d=0;e===we?i>0&&(u=we,p=i,d=o.length):e===lt?c>0&&(u=lt,p=c,d=l.length):(p=Math.max(i,c),u=p>0?i>c?we:lt:null,d=u?u===we?o.length:l.length:0);const g=u===we&&/\b(?:transform|all)(?:,|$)/.test(s(`${we}Property`).toString());return{type:u,timeout:p,propCount:d,hasTransform:g}}function Po(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>Ao(t)+Ao(n[s])))}function Ao(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function To(n){return(n?n.ownerDocument:document).body.offsetHeight}function Ru(n,e,t){const s=n[Et];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Co=Symbol("_vod"),Su=Symbol("_vsh"),La=Symbol("");function Uf(n){const e=ws();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(o=>rs(o,r))},s=()=>{const r=n(e.proxy);e.ce?rs(e.ce,r):rr(e.subTree,r),t(r)};ia(()=>{zi(s)}),Tr(()=>{Xe(s,qn,{flush:"post"});const r=new MutationObserver(s);r.observe(e.subTree.el.parentNode,{childList:!0}),Cr(()=>r.disconnect())})}function rr(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{rr(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)rs(n.el,e);else if(n.type===Ln)n.children.forEach(t=>rr(t,e));else if(n.type===Wt){let{el:t,anchor:s}=n;for(;t&&(rs(t,e),t!==s);)t=t.nextSibling}}function rs(n,e){if(n.nodeType===1){const t=n.style;let s="";for(const r in e){const o=Pl(e[r]);t.setProperty(`--${r}`,o),s+=`--${r}: ${o};`}t[La]=s}}const Pu=/(?:^|;)\s*display\s*:/;function Au(n,e,t){const s=n.style,r=hn(t);let o=!1;if(t&&!r){if(e)if(hn(e))for(const i of e.split(";")){const a=i.slice(0,i.indexOf(":")).trim();t[a]==null&&Kt(s,a,"")}else for(const i in e)t[i]==null&&Kt(s,i,"");for(const i in t)i==="display"&&(o=!0),Kt(s,i,t[i])}else if(r){if(e!==t){const i=s[La];i&&(t+=";"+i),s.cssText=t,o=Pu.test(t)}}else e&&n.removeAttribute("style");Co in n&&(n[Co]=o?s.display:"",n[Su]&&(s.display="none"))}const Io=/\s*!important$/;function Kt(n,e,t){if(z(t))t.forEach(s=>Kt(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=Tu(n,e);Io.test(t)?n.setProperty(Te(s),t.replace(Io,""),"important"):n[s]=t}}const Eo=["Webkit","Moz","ms"],Os={};function Tu(n,e){const t=Os[e];if(t)return t;let s=Bn(e);if(s!=="filter"&&s in n)return Os[e]=s;s=ds(s);for(let r=0;r<Eo.length;r++){const o=Eo[r]+s;if(o in n)return Os[e]=o}return e}const Bo="http://www.w3.org/1999/xlink";function No(n,e,t,s,r,o=_l(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bo,e.slice(6,e.length)):n.setAttributeNS(Bo,e,t):t==null||o&&!vi(t)?n.removeAttribute(e):n.setAttribute(e,o?"":Hn(t)?String(t):t)}function Lo(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ba(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=vi(t):t==null&&a==="string"?(t="",i=!0):a==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(r||e)}function Cu(n,e,t,s){n.addEventListener(e,t,s)}function Iu(n,e,t,s){n.removeEventListener(e,t,s)}const Oo=Symbol("_vei");function Eu(n,e,t,s,r=null){const o=n[Oo]||(n[Oo]={}),i=o[e];if(s&&i)i.value=s;else{const[a,l]=Bu(e);if(s){const c=o[e]=Ou(s,r);Cu(n,a,c,l)}else i&&(Iu(n,a,i,l),o[e]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function Bu(n){let e;if(Do.test(n)){e={};let s;for(;s=n.match(Do);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Te(n.slice(2)),e]}let Ds=0;const Nu=Promise.resolve(),Lu=()=>Ds||(Nu.then(()=>Ds=0),Ds=Date.now());function Ou(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Gn(Du(s,t.value),e,5,[s])};return t.value=n,t.attached=Lu(),t}function Du(n,e){if(z(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Mo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Mu=(n,e,t,s,r,o)=>{const i=r==="svg";e==="class"?Ru(n,s,i):e==="style"?Au(n,t,s):ls(e)?cs(e)||Eu(n,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vu(n,e,s,i))?(Lo(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&No(n,e,s,i,o,e!=="value")):n._isVueCE&&(Hu(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!hn(s)))?Lo(n,Bn(e),s,o,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),No(n,e,s,i))};function Vu(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mo(e)&&G(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mo(e)&&hn(t)?!1:e in n}function Hu(n,e){const t=n._def.props;if(!t)return!1;const s=Bn(e);return Array.isArray(t)?t.some(r=>Bn(r)===s):Object.keys(t).some(r=>Bn(r)===s)}const Fu=["ctrl","shift","alt","meta"],$u={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Fu.some(t=>n[`${t}Key`]&&!e.includes(t))},Wf=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=((r,...o)=>{for(let i=0;i<e.length;i++){const a=$u[e[i]];if(a&&a(r,e))return}return n(r,...o)}))},qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=(r=>{if(!("key"in r))return;const o=Te(r.key);if(e.some(i=>i===o||qu[i]===o))return n(r)}))},zu=xn({patchProp:Mu},bu);let Vo;function Uu(){return Vo||(Vo=Yc(zu))}const Wu=((...n)=>{const e=Uu().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=Ku(s);if(!r)return;const o=e._component;!G(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=t(r,!1,Gu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e});function Gu(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ku(n){return hn(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Oa;const js=n=>Oa=n,Da=Symbol();function or(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var yt;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(yt||(yt={}));function Yu(){const n=ji(!0),e=n.run(()=>Sr({}));let t=[],s=[];const r=Rr({install(o){js(r),r._a=o,o.provide(Da,r),o.config.globalProperties.$pinia=r,s.forEach(i=>t.push(i)),s=[]},use(o){return this._a?t.push(o):s.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Ma=()=>{};function Ho(n,e,t,s=Ma){n.push(e);const r=()=>{const o=n.indexOf(e);o>-1&&(n.splice(o,1),s())};return!t&&ki()&&Al(r),r}function Ge(n,...e){n.slice().forEach(t=>{t(...e)})}const Ju=n=>n(),Fo=Symbol(),Ms=Symbol();function ir(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,s)=>n.set(s,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const s=e[t],r=n[t];or(r)&&or(s)&&n.hasOwnProperty(t)&&!fn(s)&&!ie(s)?n[t]=ir(r,s):n[t]=s}return n}const Zu=Symbol();function Qu(n){return!or(n)||!n.hasOwnProperty(Zu)}const{assign:ke}=Object;function Xu(n){return!!(fn(n)&&n.effect)}function np(n,e,t,s){const{state:r,actions:o,getters:i}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=Zl(t.state.value[n]);return ke(u,o,Object.keys(i||{}).reduce((p,d)=>(p[d]=Rr(Dn(()=>{js(t);const g=t._s.get(n);return i[d].call(g,g)})),p),{}))}return l=Va(n,c,e,t,s,!0),l}function Va(n,e,t={},s,r,o){let i;const a=ke({actions:{}},t),l={deep:!0};let c,u,p=[],d=[],g;const b=s.state.value[n];!o&&!b&&(s.state.value[n]={});let w;function B(M){let P;c=u=!1,typeof M=="function"?(M(s.state.value[n]),P={type:yt.patchFunction,storeId:n,events:g}):(ir(s.state.value[n],M),P={type:yt.patchObject,payload:M,storeId:n,events:g});const U=w=Symbol();Pr().then(()=>{w===U&&(c=!0)}),u=!0,Ge(p,P,s.state.value[n])}const L=o?function(){const{state:P}=t,U=P?P():{};this.$patch(J=>{ke(J,U)})}:Ma;function _(){i.stop(),p=[],d=[],s._s.delete(n)}const N=(M,P="")=>{if(Fo in M)return M[Ms]=P,M;const U=function(){js(s);const J=Array.from(arguments),T=[],Y=[];function mn(K){T.push(K)}function Rn(K){Y.push(K)}Ge(d,{args:J,name:U[Ms],store:$,after:mn,onError:Rn});let an;try{an=M.apply(this&&this.$id===n?this:$,J)}catch(K){throw Ge(Y,K),K}return an instanceof Promise?an.then(K=>(Ge(T,K),K)).catch(K=>(Ge(Y,K),Promise.reject(K))):(Ge(T,an),an)};return U[Fo]=!0,U[Ms]=P,U},C={_p:s,$id:n,$onAction:Ho.bind(null,d),$patch:B,$reset:L,$subscribe(M,P={}){const U=Ho(p,M,P.detached,()=>J()),J=i.run(()=>Xe(()=>s.state.value[n],T=>{(P.flush==="sync"?u:c)&&M({storeId:n,type:yt.direct,events:g},T)},ke({},l,P)));return U},$dispose:_},$=Lt(C);s._s.set(n,$);const V=(s._a&&s._a.runWithContext||Ju)(()=>s._e.run(()=>(i=ji()).run(()=>e({action:N}))));for(const M in V){const P=V[M];if(fn(P)&&!Xu(P)||ie(P))o||(b&&Qu(P)&&(fn(P)?P.value=b[M]:ir(P,b[M])),s.state.value[n][M]=P);else if(typeof P=="function"){const U=N(P,M);V[M]=U,a.actions[M]=P}}return ke($,V),ke(Q($),V),Object.defineProperty($,"$state",{get:()=>s.state.value[n],set:M=>{B(P=>{ke(P,M)})}}),s._p.forEach(M=>{ke($,i.run(()=>M({store:$,app:s._a,pinia:s,options:a})))}),b&&o&&t.hydrate&&t.hydrate($.$state,b),c=!0,u=!0,$}/*! #__NO_SIDE_EFFECTS__ */function Kf(n,e,t){let s,r;const o=typeof e=="function";typeof n=="string"?(s=n,r=o?t:e):(r=n,s=n.id);function i(a,l){const c=ac();return a=a||(c?Un(Da,null):null),a&&js(a),a=Oa,a._s.has(s)||(o?Va(s,e,r,a):np(s,r,a)),a._s.get(s)}return i.$id=s,i}function Yf(n){{const e=Q(n),t={};for(const s in e){const r=e[s];r.effect?t[s]=Dn({get:()=>n[s],set(o){n[s]=o}}):(fn(r)||ie(r))&&(t[s]=nc(n,s))}return t}}const ep="modulepreload",tp=function(n){return"/"+n},$o={},qo=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let i=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=i(t.map(c=>{if(c=tp(c),c in $o)return;$o[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ep,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((g,b)=>{d.addEventListener("load",g),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ye=typeof document<"u";function Ha(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function sp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ha(n.default)}const tn=Object.assign;function Vs(n,e){const t={};for(const s in e){const r=e[s];t[s]=Kn(r)?r.map(n):n(r)}return t}const wt=()=>{},Kn=Array.isArray;function zo(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}const Fa=/#/g,rp=/&/g,op=/\//g,ip=/=/g,ap=/\?/g,$a=/\+/g,lp=/%5B/g,cp=/%5D/g,qa=/%5E/g,up=/%60/g,za=/%7B/g,pp=/%7C/g,Ua=/%7D/g,dp=/%20/g;function Dr(n){return n==null?"":encodeURI(""+n).replace(pp,"|").replace(lp,"[").replace(cp,"]")}function fp(n){return Dr(n).replace(za,"{").replace(Ua,"}").replace(qa,"^")}function ar(n){return Dr(n).replace($a,"%2B").replace(dp,"+").replace(Fa,"%23").replace(rp,"%26").replace(up,"`").replace(za,"{").replace(Ua,"}").replace(qa,"^")}function hp(n){return ar(n).replace(ip,"%3D")}function gp(n){return Dr(n).replace(Fa,"%23").replace(ap,"%3F")}function mp(n){return gp(n).replace(op,"%2F")}function Bt(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const bp=/\/$/,vp=n=>n.replace(bp,"");function Hs(n,e,t="/"){let s,r={},o="",i="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(s=e.slice(0,l),o=e.slice(l,a>0?a:e.length),r=n(o.slice(1))),a>=0&&(s=s||e.slice(0,a),i=e.slice(a,e.length)),s=jp(s??e,t),{fullPath:s+o+i,path:s,query:r,hash:Bt(i)}}function xp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Uo(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function yp(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&tt(e.matched[s],t.matched[r])&&Wa(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function tt(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Wa(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!wp(n[t],e[t]))return!1;return!0}function wp(n,e){return Kn(n)?Wo(n,e):Kn(e)?Wo(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Wo(n,e){return Kn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function jp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=t.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const je={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lr=(function(n){return n.pop="pop",n.push="push",n})({}),Fs=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function kp(n){if(!n)if(Ye){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),vp(n)}const _p=/^[^#]+#/;function Rp(n,e){return n.replace(_p,"#")+e}function Sp(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const ks=()=>({left:window.scrollX,top:window.scrollY});function Pp(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Sp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Go(n,e){return(history.state?history.state.position-e:-1)+n}const cr=new Map;function Ap(n,e){cr.set(n,e)}function Tp(n){const e=cr.get(n);return cr.delete(n),e}function Cp(n){return typeof n=="string"||n&&typeof n=="object"}function Ga(n){return typeof n=="string"||typeof n=="symbol"}let gn=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Ka=Symbol("");gn.MATCHER_NOT_FOUND+"",gn.NAVIGATION_GUARD_REDIRECT+"",gn.NAVIGATION_ABORTED+"",gn.NAVIGATION_CANCELLED+"",gn.NAVIGATION_DUPLICATED+"";function st(n,e){return tn(new Error,{type:n,[Ka]:!0},e)}function ue(n,e){return n instanceof Error&&Ka in n&&(e==null||!!(n.type&e))}const Ip=["params","query","hash"];function Ep(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Ip)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function Bp(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<t.length;++s){const r=t[s].replace($a," "),o=r.indexOf("="),i=Bt(o<0?r:r.slice(0,o)),a=o<0?null:Bt(r.slice(o+1));if(i in e){let l=e[i];Kn(l)||(l=e[i]=[l]),l.push(a)}else e[i]=a}return e}function Ko(n){let e="";for(let t in n){const s=n[t];if(t=hp(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Kn(s)?s.map(r=>r&&ar(r)):[s&&ar(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Np(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Kn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Lp=Symbol(""),Yo=Symbol(""),Mr=Symbol(""),Vr=Symbol(""),ur=Symbol("");function ct(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Re(n,e,t,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(st(gn.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):Cp(d)?l(st(gn.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),a())},u=o(()=>n.call(s&&s.instances[r],e,t,c));let p=Promise.resolve(u);n.length<3&&(p=p.then(c)),p.catch(d=>l(d))})}function $s(n,e,t,s,r=o=>o()){const o=[];for(const i of n)for(const a in i.components){let l=i.components[a];if(!(e!=="beforeRouteEnter"&&!i.instances[a]))if(Ha(l)){const c=(l.__vccOpts||l)[e];c&&o.push(Re(c,t,s,i,a,r))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const p=sp(u)?u.default:u;i.mods[a]=u,i.components[a]=p;const d=(p.__vccOpts||p)[e];return d&&Re(d,t,s,i,a,r)()}))}}return o}function Op(n,e){const t=[],s=[],r=[],o=Math.max(e.matched.length,n.matched.length);for(let i=0;i<o;i++){const a=e.matched[i];a&&(n.matched.find(c=>tt(c,a))?s.push(a):t.push(a));const l=n.matched[i];l&&(e.matched.find(c=>tt(c,l))||r.push(l))}return[t,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Dp=()=>location.protocol+"//"+location.host;function Ya(n,e){const{pathname:t,search:s,hash:r}=e,o=n.indexOf("#");if(o>-1){let i=r.includes(n.slice(o))?n.slice(o).length:1,a=r.slice(i);return a[0]!=="/"&&(a="/"+a),Uo(a,"")}return Uo(t,n)+s+r}function Mp(n,e,t,s){let r=[],o=[],i=null;const a=({state:d})=>{const g=Ya(n,location),b=t.value,w=e.value;let B=0;if(d){if(t.value=g,e.value=d,i&&i===b){i=null;return}B=w?d.position-w.position:0}else s(g);r.forEach(L=>{L(t.value,b,{delta:B,type:lr.pop,direction:B?B>0?Fs.forward:Fs.back:Fs.unknown})})};function l(){i=t.value}function c(d){r.push(d);const g=()=>{const b=r.indexOf(d);b>-1&&r.splice(b,1)};return o.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(tn({},d.state,{scroll:ks()}),"")}}function p(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:p}}function Jo(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?ks():null}}function Vp(n){const{history:e,location:t}=window,s={value:Ya(n,t)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const p=n.indexOf("#"),d=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+l:Dp()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(g){console.error(g),t[u?"replace":"assign"](d)}}function i(l,c){o(l,tn({},e.state,Jo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),s.value=l}function a(l,c){const u=tn({},r.value,e.state,{forward:l,scroll:ks()});o(u.current,u,!0),o(l,tn({},Jo(s.value,l,null),{position:u.position+1},c),!1),s.value=l}return{location:s,state:r,push:a,replace:i}}function Hp(n){n=kp(n);const e=Vp(n),t=Mp(n,e.state,e.location,e.replace);function s(o,i=!0){i||t.pauseListeners(),history.go(o)}const r=tn({location:"",base:n,go:s,createHref:Rp.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Ve=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var vn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(vn||{});const Fp={type:Ve.Static,value:""},$p=/[a-zA-Z0-9_]/;function qp(n){if(!n)return[[]];if(n==="/")return[[Fp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${c}": ${g}`)}let t=vn.Static,s=t;const r=[];let o;function i(){o&&r.push(o),o=[]}let a=0,l,c="",u="";function p(){c&&(t===vn.Static?o.push({type:Ve.Static,value:c}):t===vn.Param||t===vn.ParamRegExp||t===vn.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Ve.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==vn.ParamRegExp){s=t,t=vn.EscapeNext;continue}switch(t){case vn.Static:l==="/"?(c&&p(),i()):l===":"?(p(),t=vn.Param):d();break;case vn.EscapeNext:d(),t=s;break;case vn.Param:l==="("?t=vn.ParamRegExp:$p.test(l)?d():(p(),t=vn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case vn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=vn.ParamRegExpEnd:u+=l;break;case vn.ParamRegExpEnd:p(),t=vn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===vn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),p(),i(),r}const Zo="[^/]+?",zp={sensitive:!1,strict:!1,start:!0,end:!0};var An=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(An||{});const Up=/[.+*?^${}()[\]/\\]/g;function Wp(n,e){const t=tn({},zp,e),s=[];let r=t.start?"^":"";const o=[];for(const c of n){const u=c.length?[]:[An.Root];t.strict&&!c.length&&(r+="/");for(let p=0;p<c.length;p++){const d=c[p];let g=An.Segment+(t.sensitive?An.BonusCaseSensitive:0);if(d.type===Ve.Static)p||(r+="/"),r+=d.value.replace(Up,"\\$&"),g+=An.Static;else if(d.type===Ve.Param){const{value:b,repeatable:w,optional:B,regexp:L}=d;o.push({name:b,repeatable:w,optional:B});const _=L||Zo;if(_!==Zo){g+=An.BonusCustomRegExp;try{`${_}`}catch(C){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+C.message)}}let N=w?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;p||(N=B&&c.length<2?`(?:/${N})`:"/"+N),B&&(N+="?"),r+=N,g+=An.Dynamic,B&&(g+=An.BonusOptional),w&&(g+=An.BonusRepeatable),_===".*"&&(g+=An.BonusWildcard)}u.push(g)}s.push(u)}if(t.strict&&t.end){const c=s.length-1;s[c][s[c].length-1]+=An.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(i),p={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",b=o[d-1];p[b.name]=g&&b.repeatable?g.split("/"):g}return p}function l(c){let u="",p=!1;for(const d of n){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const g of d)if(g.type===Ve.Static)u+=g.value;else if(g.type===Ve.Param){const{value:b,repeatable:w,optional:B}=g,L=b in c?c[b]:"";if(Kn(L)&&!w)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Kn(L)?L.join("/"):L;if(!_)if(B)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);u+=_}}return u||"/"}return{re:i,score:s,keys:o,parse:a,stringify:l}}function Gp(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===An.Static+An.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===An.Static+An.Segment?1:-1:0}function Ja(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const o=Gp(s[t],r[t]);if(o)return o;t++}if(Math.abs(r.length-s.length)===1){if(Qo(s))return 1;if(Qo(r))return-1}return r.length-s.length}function Qo(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Kp={strict:!1,end:!0,sensitive:!1};function Yp(n,e,t){const s=Wp(qp(n.path),t),r=tn(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Jp(n,e){const t=[],s=new Map;e=zo(Kp,e);function r(p){return s.get(p)}function o(p,d,g){const b=!g,w=ni(p);w.aliasOf=g&&g.record;const B=zo(e,p),L=[w];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const $ of C)L.push(ni(tn({},w,{components:g?g.record.components:w.components,path:$,aliasOf:g?g.record:w})))}let _,N;for(const C of L){const{path:$}=C;if(d&&$[0]!=="/"){const D=d.record.path,V=D[D.length-1]==="/"?"":"/";C.path=d.record.path+($&&V+$)}if(_=Yp(C,d,B),g?g.alias.push(_):(N=N||_,N!==_&&N.alias.push(_),b&&p.name&&!ei(_)&&i(p.name)),Za(_)&&l(_),w.children){const D=w.children;for(let V=0;V<D.length;V++)o(D[V],_,g&&g.children[V])}g=g||_}return N?()=>{i(N)}:wt}function i(p){if(Ga(p)){const d=s.get(p);d&&(s.delete(p),t.splice(t.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=t.indexOf(p);d>-1&&(t.splice(d,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function a(){return t}function l(p){const d=Xp(p,t);t.splice(d,0,p),p.record.name&&!ei(p)&&s.set(p.record.name,p)}function c(p,d){let g,b={},w,B;if("name"in p&&p.name){if(g=s.get(p.name),!g)throw st(gn.MATCHER_NOT_FOUND,{location:p});B=g.record.name,b=tn(Xo(d.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),p.params&&Xo(p.params,g.keys.map(N=>N.name))),w=g.stringify(b)}else if(p.path!=null)w=p.path,g=t.find(N=>N.re.test(w)),g&&(b=g.parse(w),B=g.record.name);else{if(g=d.name?s.get(d.name):t.find(N=>N.re.test(d.path)),!g)throw st(gn.MATCHER_NOT_FOUND,{location:p,currentLocation:d});B=g.record.name,b=tn({},d.params,p.params),w=g.stringify(b)}const L=[];let _=g;for(;_;)L.unshift(_.record),_=_.parent;return{name:B,path:w,params:b,matched:L,meta:Qp(L)}}n.forEach(p=>o(p));function u(){t.length=0,s.clear()}return{addRoute:o,resolve:c,removeRoute:i,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Xo(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function ni(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Zp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Zp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function ei(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Qp(n){return n.reduce((e,t)=>tn(e,t.meta),{})}function Xp(n,e){let t=0,s=e.length;for(;t!==s;){const o=t+s>>1;Ja(n,e[o])<0?s=o:t=o+1}const r=nd(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function nd(n){let e=n;for(;e=e.parent;)if(Za(e)&&Ja(n,e)===0)return e}function Za({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ti(n){const e=Un(Mr),t=Un(Vr),s=Dn(()=>{const l=Pe(n.to);return e.resolve(l)}),r=Dn(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],p=t.matched;if(!u||!p.length)return-1;const d=p.findIndex(tt.bind(null,u));if(d>-1)return d;const g=si(l[c-2]);return c>1&&si(u)===g&&p[p.length-1].path!==g?p.findIndex(tt.bind(null,l[c-2])):d}),o=Dn(()=>r.value>-1&&od(t.params,s.value.params)),i=Dn(()=>r.value>-1&&r.value===t.matched.length-1&&Wa(t.params,s.value.params));function a(l={}){if(rd(l)){const c=e[Pe(n.replace)?"replace":"push"](Pe(n.to)).catch(wt);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:Dn(()=>s.value.href),isActive:o,isExactActive:i,navigate:a}}function ed(n){return n.length===1?n[0]:n}const td=sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ti,setup(n,{slots:e}){const t=Lt(ti(n)),{options:s}=Un(Mr),r=Dn(()=>({[ri(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ri(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&ed(e.default(t));return n.custom?o:Or("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},o)}}}),sd=td;function rd(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function od(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Kn(r)||r.length!==s.length||s.some((o,i)=>o.valueOf()!==r[i].valueOf()))return!1}return!0}function si(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ri=(n,e,t)=>n??e??t,id=sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Un(ur),r=Dn(()=>n.route||s.value),o=Un(Yo,0),i=Dn(()=>{let c=Pe(o);const{matched:u}=r.value;let p;for(;(p=u[c])&&!p.components;)c++;return c}),a=Dn(()=>r.value.matched[i.value]);Ut(Yo,Dn(()=>i.value+1)),Ut(Lp,a),Ut(ur,r);const l=Sr();return Xe(()=>[l.value,a.value,n.name],([c,u,p],[d,g,b])=>{u&&(u.instances[p]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!tt(u,g)||!d)&&(u.enterCallbacks[p]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,p=a.value,d=p&&p.components[u];if(!d)return oi(t.default,{Component:d,route:c});const g=p.props[u],b=g?g===!0?c.params:typeof g=="function"?g(c):g:null,B=Or(d,tn({},b,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[u]=null)},ref:l}));return oi(t.default,{Component:B,route:c})||B}}});function oi(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ad=id;function ld(n){const e=Jp(n.routes,n),t=n.parseQuery||Bp,s=n.stringifyQuery||Ko,r=n.history,o=ct(),i=ct(),a=ct(),l=Kl(je);let c=je;Ye&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vs.bind(null,y=>""+y),p=Vs.bind(null,mp),d=Vs.bind(null,Bt);function g(y,O){let I,H;return Ga(y)?(I=e.getRecordMatcher(y),H=O):H=y,e.addRoute(H,I)}function b(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function w(){return e.getRoutes().map(y=>y.record)}function B(y){return!!e.getRecordMatcher(y)}function L(y,O){if(O=tn({},O||l.value),typeof y=="string"){const m=Hs(t,y,O.path),v=e.resolve({path:m.path},O),j=r.createHref(m.fullPath);return tn(m,v,{params:d(v.params),hash:Bt(m.hash),redirectedFrom:void 0,href:j})}let I;if(y.path!=null)I=tn({},y,{path:Hs(t,y.path,O.path).path});else{const m=tn({},y.params);for(const v in m)m[v]==null&&delete m[v];I=tn({},y,{params:p(m)}),O.params=p(O.params)}const H=e.resolve(I,O),Z=y.hash||"";H.params=u(d(H.params));const f=xp(s,tn({},y,{hash:fp(Z),path:H.path})),h=r.createHref(f);return tn({fullPath:f,hash:Z,query:s===Ko?Np(y.query):y.query||{}},H,{redirectedFrom:void 0,href:h})}function _(y){return typeof y=="string"?Hs(t,y,l.value.path):tn({},y)}function N(y,O){if(c!==y)return st(gn.NAVIGATION_CANCELLED,{from:O,to:y})}function C(y){return V(y)}function $(y){return C(tn(_(y),{replace:!0}))}function D(y,O){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:H}=I;let Z=typeof H=="function"?H(y,O):H;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=_(Z):{path:Z},Z.params={}),tn({query:y.query,hash:y.hash,params:Z.path!=null?{}:y.params},Z)}}function V(y,O){const I=c=L(y),H=l.value,Z=y.state,f=y.force,h=y.replace===!0,m=D(I,H);if(m)return V(tn(_(m),{state:typeof m=="object"?tn({},Z,m.state):Z,force:f,replace:h}),O||I);const v=I;v.redirectedFrom=O;let j;return!f&&yp(s,H,I)&&(j=st(gn.NAVIGATION_DUPLICATED,{to:v,from:H}),Yn(H,H,!0,!1)),(j?Promise.resolve(j):U(v,H)).catch(x=>ue(x)?ue(x,gn.NAVIGATION_GUARD_REDIRECT)?x:ye(x):en(x,v,H)).then(x=>{if(x){if(ue(x,gn.NAVIGATION_GUARD_REDIRECT))return V(tn({replace:h},_(x.to),{state:typeof x.to=="object"?tn({},Z,x.to.state):Z,force:f}),O||v)}else x=T(v,H,!0,h,Z);return J(v,H,x),x})}function M(y,O){const I=N(y,O);return I?Promise.reject(I):Promise.resolve()}function P(y){const O=Ue.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function U(y,O){let I;const[H,Z,f]=Op(y,O);I=$s(H.reverse(),"beforeRouteLeave",y,O);for(const m of H)m.leaveGuards.forEach(v=>{I.push(Re(v,y,O))});const h=M.bind(null,y,O);return I.push(h),Fn(I).then(()=>{I=[];for(const m of o.list())I.push(Re(m,y,O));return I.push(h),Fn(I)}).then(()=>{I=$s(Z,"beforeRouteUpdate",y,O);for(const m of Z)m.updateGuards.forEach(v=>{I.push(Re(v,y,O))});return I.push(h),Fn(I)}).then(()=>{I=[];for(const m of f)if(m.beforeEnter)if(Kn(m.beforeEnter))for(const v of m.beforeEnter)I.push(Re(v,y,O));else I.push(Re(m.beforeEnter,y,O));return I.push(h),Fn(I)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),I=$s(f,"beforeRouteEnter",y,O,P),I.push(h),Fn(I))).then(()=>{I=[];for(const m of i.list())I.push(Re(m,y,O));return I.push(h),Fn(I)}).catch(m=>ue(m,gn.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function J(y,O,I){a.list().forEach(H=>P(()=>H(y,O,I)))}function T(y,O,I,H,Z){const f=N(y,O);if(f)return f;const h=O===je,m=Ye?history.state:{};I&&(H||h?r.replace(y.fullPath,tn({scroll:h&&m&&m.scroll},Z)):r.push(y.fullPath,Z)),l.value=y,Yn(y,O,I,h),ye()}let Y;function mn(){Y||(Y=r.listen((y,O,I)=>{if(!Ce.listening)return;const H=L(y),Z=D(H,Ce.currentRoute.value);if(Z){V(tn(Z,{replace:!0,force:!0}),H).catch(wt);return}c=H;const f=l.value;Ye&&Ap(Go(f.fullPath,I.delta),ks()),U(H,f).catch(h=>ue(h,gn.NAVIGATION_ABORTED|gn.NAVIGATION_CANCELLED)?h:ue(h,gn.NAVIGATION_GUARD_REDIRECT)?(V(tn(_(h.to),{force:!0}),H).then(m=>{ue(m,gn.NAVIGATION_ABORTED|gn.NAVIGATION_DUPLICATED)&&!I.delta&&I.type===lr.pop&&r.go(-1,!1)}).catch(wt),Promise.reject()):(I.delta&&r.go(-I.delta,!1),en(h,H,f))).then(h=>{h=h||T(H,f,!1),h&&(I.delta&&!ue(h,gn.NAVIGATION_CANCELLED)?r.go(-I.delta,!1):I.type===lr.pop&&ue(h,gn.NAVIGATION_ABORTED|gn.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),J(H,f,h)}).catch(wt)}))}let Rn=ct(),an=ct(),K;function en(y,O,I){ye(y);const H=an.list();return H.length?H.forEach(Z=>Z(y,O,I)):console.error(y),Promise.reject(y)}function ae(){return K&&l.value!==je?Promise.resolve():new Promise((y,O)=>{Rn.add([y,O])})}function ye(y){return K||(K=!y,mn(),Rn.list().forEach(([O,I])=>y?I(y):O()),Rn.reset()),y}function Yn(y,O,I,H){const{scrollBehavior:Z}=n;if(!Ye||!Z)return Promise.resolve();const f=!I&&Tp(Go(y.fullPath,0))||(H||!I)&&history.state&&history.state.scroll||null;return Pr().then(()=>Z(y,O,f)).then(h=>h&&Pp(h)).catch(h=>en(h,y,O))}const Nn=y=>r.go(y);let ze;const Ue=new Set,Ce={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:B,getRoutes:w,resolve:L,options:n,push:C,replace:$,go:Nn,back:()=>Nn(-1),forward:()=>Nn(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:an.add,isReady:ae,install(y){y.component("RouterLink",sd),y.component("RouterView",ad),y.config.globalProperties.$router=Ce,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(l)}),Ye&&!ze&&l.value===je&&(ze=!0,C(r.location).catch(H=>{}));const O={};for(const H in je)Object.defineProperty(O,H,{get:()=>l.value[H],enumerable:!0});y.provide(Mr,Ce),y.provide(Vr,Mi(O)),y.provide(ur,l);const I=y.unmount;Ue.add(y),y.unmount=function(){Ue.delete(y),Ue.size<1&&(c=je,Y&&Y(),Y=null,l.value=je,ze=!1,K=!1),I()}}};function Fn(y){return y.reduce((O,I)=>O.then(()=>P(I)),Promise.resolve())}return Ce}function cd(n){return Un(Vr)}const ud=[{path:"/",name:"home",component:()=>qo(()=>import("./HomeView-BPQ7tSV3.js"),__vite__mapDeps([0,1,2,3])),meta:{transition:"page"}},{path:"/article/:slug",name:"article",component:()=>qo(()=>import("./ArticleView-B2BbMoAE.js"),__vite__mapDeps([4,1,2,5])),props:!0,meta:{transition:"page"}},{path:"/tag/:name?",name:"tag",redirect:n=>({path:"/",query:{section:"tags",tag:n.params.name}})}],Qa=ld({history:Hp(),routes:ud,scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,behavior:"smooth"}:{top:0,behavior:"smooth"})}}),pd={__name:"App",setup(n){return cd(),(e,t)=>{const s=Sc("router-view");return Pt(),Tt(s,null,{default:Ks(({Component:r,route:o})=>[In(yu,{name:o.meta.transition||"page",mode:"out-in"},{default:Ks(()=>[(Pt(),Tt(Pc(r),{key:o.path}))]),_:2},1032,["name"])]),_:1})}}},dd="fishblog-db",fd=1,rt="analytics";let qt=null;function Hr(){return new Promise((n,e)=>{if(qt){n(qt);return}const t=indexedDB.open(dd,fd);t.onupgradeneeded=()=>{const s=t.result;s.objectStoreNames.contains(rt)||s.createObjectStore(rt,{keyPath:"slug"})},t.onsuccess=()=>{qt=t.result,n(qt)},t.onerror=()=>e(t.error)})}async function hd(){await Hr()}async function Jf(n){const e=await Hr();return new Promise((t,s)=>{const i=e.transaction(rt,"readonly").objectStore(rt).get(n);i.onsuccess=()=>t(i.result||null),i.onerror=()=>s(i.error)})}async function Zf(n){const e=await Hr();return new Promise((t,s)=>{const r=e.transaction(rt,"readwrite");r.objectStore(rt).put({slug:n.slug,viewCount:n.viewCount||0,likeCount:n.likeCount||0,liked:!!n.liked}),r.oncomplete=()=>t(),r.onerror=()=>s(r.error)})}const gd=`---
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

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageDocNet/demo39.5twxj1jdgmc0.jpg)`,md=`---
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



`,bd=`---
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

![](https://cdn.jsdelivr.net/gh/fishBand/blogImgRep@master/blogPageLinux/demo23.4aw89cw3yti0.jpg)`,vd=`---
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











`,xd=`---
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

   `,yd=`---
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
\`service crond restart\` 重启任务调度`,wd=`---
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

\`netstat -anp | more\` 监控网络服务`,jd=`---
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

`,kd=`---
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

`,_d=`---
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
`,Rd=`---
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
`,Sd=`---
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



`,Pd=`---
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

`,Ad=`---
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
`,Td=`---
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
`,Cd=`---
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

`,Id=`---
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
`,Ed=`---
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
`,Bd=`---
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

#### 还有一些高级用法 如数学公式，流程图，时序图等 将在后续补充`,Nd=`---\r
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
`,Ld=`---
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
`,Od=`---
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
npm作为前端一个强大的包管理器，在某些方面，它甚至能与maven相提并论，用户不仅可以使用npm下载模块，也可以使用npm分享代码，掌握npm已经成了前端的标配`,Dd=`---
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





`,Md=`---
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

`,Vd=`---
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

`,Hd=`---
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

`,Fd=`---
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
`,$d=`---
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

`,qd=`---
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

`,zd=`---
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

`,Ud=`---
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

    `,Wd=`---
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

  
`,Gd=`---
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

`,Kd=`---
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

`,Yd=`---
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

\`\`\``,Jd=`---
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

`;function Fr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var qe=Fr();function Xa(n){qe=n}var jt={exec:()=>null};function rn(n,e=""){let t=typeof n=="string"?n:n.source;const s={replace:(r,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(En.caret,"$1"),t=t.replace(r,i),s},getRegex:()=>new RegExp(t,e)};return s}var En={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},Zd=/^(?:[ \t]*(?:\n|$))+/,Qd=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Xd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Mt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,$r=/(?:[*+-]|\d{1,9}[.)])/,nl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,el=rn(nl).replace(/bull/g,$r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ef=rn(nl).replace(/bull/g,$r).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,tf=/^[^\n]+/,zr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sf=rn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",zr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),rf=rn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,$r).getRegex(),_s="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ur=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,of=rn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ur).replace("tag",_s).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tl=rn(qr).replace("hr",Mt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_s).getRegex(),af=rn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tl).getRegex(),Wr={blockquote:af,code:Qd,def:sf,fences:Xd,heading:nf,hr:Mt,html:of,lheading:el,list:rf,newline:Zd,paragraph:tl,table:jt,text:tf},ii=rn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Mt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_s).getRegex(),lf={...Wr,lheading:ef,table:ii,paragraph:rn(qr).replace("hr",Mt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ii).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_s).getRegex()},cf={...Wr,html:rn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ur).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:rn(qr).replace("hr",Mt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",el).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},uf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,sl=/^( {2,}|\\)\n(?!\s*$)/,df=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rs=/[\p{P}\p{S}]/u,Gr=/[\s\p{P}\p{S}]/u,rl=/[^\s\p{P}\p{S}]/u,ff=rn(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Gr).getRegex(),ol=/(?!~)[\p{P}\p{S}]/u,hf=/(?!~)[\s\p{P}\p{S}]/u,gf=/(?:[^\s\p{P}\p{S}]|~)/u,mf=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,il=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,bf=rn(il,"u").replace(/punct/g,Rs).getRegex(),vf=rn(il,"u").replace(/punct/g,ol).getRegex(),al="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",xf=rn(al,"gu").replace(/notPunctSpace/g,rl).replace(/punctSpace/g,Gr).replace(/punct/g,Rs).getRegex(),yf=rn(al,"gu").replace(/notPunctSpace/g,gf).replace(/punctSpace/g,hf).replace(/punct/g,ol).getRegex(),wf=rn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,rl).replace(/punctSpace/g,Gr).replace(/punct/g,Rs).getRegex(),jf=rn(/\\(punct)/,"gu").replace(/punct/g,Rs).getRegex(),kf=rn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_f=rn(Ur).replace("(?:-->|$)","-->").getRegex(),Rf=rn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_f).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),os=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Sf=rn(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",os).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ll=rn(/^!?\[(label)\]\[(ref)\]/).replace("label",os).replace("ref",zr).getRegex(),cl=rn(/^!?\[(ref)\](?:\[\])?/).replace("ref",zr).getRegex(),Pf=rn("reflink|nolink(?!\\()","g").replace("reflink",ll).replace("nolink",cl).getRegex(),Kr={_backpedal:jt,anyPunctuation:jf,autolink:kf,blockSkip:mf,br:sl,code:pf,del:jt,emStrongLDelim:bf,emStrongRDelimAst:xf,emStrongRDelimUnd:wf,escape:uf,link:Sf,nolink:cl,punctuation:ff,reflink:ll,reflinkSearch:Pf,tag:Rf,text:df,url:jt},Af={...Kr,link:rn(/^!?\[(label)\]\((.*?)\)/).replace("label",os).getRegex(),reflink:rn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",os).getRegex()},pr={...Kr,emStrongRDelimAst:yf,emStrongLDelim:vf,url:rn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Tf={...pr,br:rn(sl).replace("{2,}","*").getRegex(),text:rn(pr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},zt={normal:Wr,gfm:lf,pedantic:cf},ut={normal:Kr,gfm:pr,breaks:Tf,pedantic:Af},Cf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ai=n=>Cf[n];function ne(n,e){if(e){if(En.escapeTest.test(n))return n.replace(En.escapeReplace,ai)}else if(En.escapeTestNoEncode.test(n))return n.replace(En.escapeReplaceNoEncode,ai);return n}function li(n){try{n=encodeURI(n).replace(En.percentDecode,"%")}catch{return null}return n}function ci(n,e){var o;const t=n.replace(En.findPipe,(i,a,l)=>{let c=!1,u=a;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),s=t.split(En.splitPipe);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!((o=s.at(-1))!=null&&o.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(En.slashPipe,"|");return s}function pt(n,e,t){const s=n.length;if(s===0)return"";let r=0;for(;r<s&&n.charAt(s-r-1)===e;)r++;return n.slice(0,s-r)}function If(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])t++;else if(n[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function ui(n,e,t,s,r){const o=e.href,i=e.title||null,a=n[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;const l={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:o,title:i,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}function Ef(n,e,t){const s=n.match(t.other.indentCodeCompensation);if(s===null)return e;const r=s[1];return e.split(`
`).map(o=>{const i=o.match(t.other.beginningSpace);if(i===null)return o;const[a]=i;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}var is=class{constructor(n){cn(this,"options");cn(this,"rules");cn(this,"lexer");this.options=n||qe}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:pt(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],s=Ef(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const s=pt(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:pt(e[0],`
`)}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=pt(e[0],`
`).split(`
`),s="",r="";const o=[];for(;t.length>0;){let i=!1;const a=[];let l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))a.push(t[l]),i=!0;else if(!i)a.push(t[l]);else break;t=t.slice(l);const c=a.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${c}`:c,r=r?`${r}
${u}`:u;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=p,t.length===0)break;const d=o.at(-1);if((d==null?void 0:d.type)==="code")break;if((d==null?void 0:d.type)==="blockquote"){const g=d,b=g.raw+`
`+t.join(`
`),w=this.blockquote(b);o[o.length-1]=w,s=s.substring(0,s.length-g.raw.length)+w.raw,r=r.substring(0,r.length-g.text.length)+w.text;break}else if((d==null?void 0:d.type)==="list"){const g=d,b=g.raw+`
`+t.join(`
`),w=this.list(b);o[o.length-1]=w,s=s.substring(0,s.length-d.raw.length)+w.raw,r=r.substring(0,r.length-g.raw.length)+w.raw,t=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const s=t.length>1,r={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");const o=this.rules.other.listItemRegex(t);let i=!1;for(;n;){let l=!1,c="",u="";if(!(e=o.exec(n))||this.rules.block.hr.test(n))break;c=e[0],n=n.substring(c.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,L=>" ".repeat(3*L.length)),d=n.split(`
`,1)[0],g=!p.trim(),b=0;if(this.options.pedantic?(b=2,u=p.trimStart()):g?b=e[1].length+1:(b=e[2].search(this.rules.other.nonSpaceChar),b=b>4?1:b,u=p.slice(b),b+=e[1].length),g&&this.rules.other.blankLine.test(d)&&(c+=d+`
`,n=n.substring(d.length+1),l=!0),!l){const L=this.rules.other.nextBulletRegex(b),_=this.rules.other.hrRegex(b),N=this.rules.other.fencesBeginRegex(b),C=this.rules.other.headingBeginRegex(b),$=this.rules.other.htmlBeginRegex(b);for(;n;){const D=n.split(`
`,1)[0];let V;if(d=D,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),V=d):V=d.replace(this.rules.other.tabCharGlobal,"    "),N.test(d)||C.test(d)||$.test(d)||L.test(d)||_.test(d))break;if(V.search(this.rules.other.nonSpaceChar)>=b||!d.trim())u+=`
`+V.slice(b);else{if(g||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||N.test(p)||C.test(p)||_.test(p))break;u+=`
`+d}!g&&!d.trim()&&(g=!0),c+=D+`
`,n=n.substring(D.length+1),p=V.slice(b)}}r.loose||(i?r.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(i=!0));let w=null,B;this.options.gfm&&(w=this.rules.other.listIsTask.exec(u),w&&(B=w[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:c,task:!!w,checked:B,loose:!1,text:u,tokens:[]}),r.raw+=c}const a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l=0;l<r.items.length;l++)if(this.lexer.state.top=!1,r.items[l].tokens=this.lexer.blockTokens(r.items[l].text,[]),!r.loose){const c=r.items[l].tokens.filter(p=>p.type==="space"),u=c.length>0&&c.some(p=>this.rules.other.anyLine.test(p.raw));r.loose=u}if(r.loose)for(let l=0;l<r.items.length;l++)r.items[l].loose=!0;return r}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:r}}}table(n){var i;const e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=ci(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(i=e[3])!=null&&i.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(const a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<t.length;a++)o.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:o.align[a]});for(const a of r)o.rows.push(ci(a,o.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[c]})));return o}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const o=pt(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{const o=If(e[2],"()");if(o===-2)return;if(o>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),ui(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){const o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return ui(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const o=[...s[0]].length-1;let i,a,l=o,c=0;const u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*n.length+o);(s=u.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(a=[...i].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&o%3&&!((o+a)%3)){c+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);const p=[...s[0]][0].length,d=n.slice(0,o+s.index+p+a);if(Math.min(o,a)%2){const b=d.slice(1,-1);return{type:"em",raw:d,text:b,tokens:this.lexer.inlineTokens(b)}}const g=d.slice(2,-2);return{type:"strong",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let s,r;if(e[2]==="@")s=e[0],r="mailto:"+s;else{let o;do o=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(o!==e[0]);s=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},he=class dr{constructor(e){cn(this,"tokens");cn(this,"options");cn(this,"state");cn(this,"tokenizer");cn(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||qe,this.options.tokenizer=this.options.tokenizer||new is,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:En,block:zt.normal,inline:ut.normal};this.options.pedantic?(t.block=zt.pedantic,t.inline=ut.pedantic):this.options.gfm&&(t.block=zt.gfm,this.options.breaks?t.inline=ut.breaks:t.inline=ut.gfm),this.tokenizer.rules=t}static get rules(){return{block:zt,inline:ut}}static lex(e,t){return new dr(t).lex(e)}static lexInline(e,t){return new dr(t).inlineTokens(e)}lex(e){e=e.replace(En.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){var r,o,i;for(this.options.pedantic&&(e=e.replace(En.tabCharGlobal,"    ").replace(En.spaceLine,""));e;){let a;if((o=(r=this.options.extensions)==null?void 0:r.block)!=null&&o.some(c=>(a=c.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const c=t.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let l=e;if((i=this.options.extensions)!=null&&i.startBlock){let c=1/0;const u=e.slice(1);let p;this.options.extensions.startBlock.forEach(d=>{p=d.call({lexer:this},u),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const c=t.at(-1);s&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a),s=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const c=t.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):t.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,l,c;let s=e,r=null;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)u.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,i="";for(;e;){o||(i=""),o=!1;let u;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(d=>(u=d.call({lexer:this},e,t))?(e=e.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);const d=t.at(-1);u.type==="text"&&(d==null?void 0:d.type)==="text"?(d.raw+=u.raw,d.text+=u.text):t.push(u);continue}if(u=this.tokenizer.emStrong(e,s,i)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.del(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),t.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),t.push(u);continue}let p=e;if((c=this.options.extensions)!=null&&c.startInline){let d=1/0;const g=e.slice(1);let b;this.options.extensions.startInline.forEach(w=>{b=w.call({lexer:this},g),typeof b=="number"&&b>=0&&(d=Math.min(d,b))}),d<1/0&&d>=0&&(p=e.substring(0,d+1))}if(u=this.tokenizer.inlineText(p)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(i=u.raw.slice(-1)),o=!0;const d=t.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=u.raw,d.text+=u.text):t.push(u);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}},as=class{constructor(n){cn(this,"options");cn(this,"parser");this.options=n||qe}space(n){return""}code({text:n,lang:e,escaped:t}){var o;const s=(o=(e||"").match(En.notSpaceStart))==null?void 0:o[0],r=n.replace(En.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ne(s)+'">'+(t?r:ne(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:ne(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){const e=n.ordered,t=n.start;let s="";for(let i=0;i<n.items.length;i++){const a=n.items[i];s+=this.listitem(a)}const r=e?"ol":"ul",o=e&&t!==1?' start="'+t+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(n){var t;let e="";if(n.task){const s=this.checkbox({checked:!!n.checked});n.loose?((t=n.tokens[0])==null?void 0:t.type)==="paragraph"?(n.tokens[0].text=s+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=s+" "+ne(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):e+=s+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<n.rows.length;r++){const o=n.rows[r];t="";for(let i=0;i<o.length;i++)t+=this.tablecell(o[i]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ne(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){const s=this.parser.parseInline(t),r=li(n);if(r===null)return s;n=r;let o='<a href="'+n+'"';return e&&(o+=' title="'+ne(e)+'"'),o+=">"+s+"</a>",o}image({href:n,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));const r=li(n);if(r===null)return ne(t);n=r;let o=`<img src="${n}" alt="${t}"`;return e&&(o+=` title="${ne(e)}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ne(n.text)}},Yr=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},ge=class fr{constructor(e){cn(this,"options");cn(this,"renderer");cn(this,"textRenderer");this.options=e||qe,this.options.renderer=this.options.renderer||new as,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Yr}static parse(e,t){return new fr(t).parse(e)}static parseInline(e,t){return new fr(t).parseInline(e)}parse(e,t=!0){var r,o;let s="";for(let i=0;i<e.length;i++){const a=e[i];if((o=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&o[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){s+=u||"";continue}}const l=a;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let c=l,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);t?s+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):s+=u;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}parseInline(e,t=this.renderer){var r,o;let s="";for(let i=0;i<e.length;i++){const a=e[i];if((o=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&o[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=c||"";continue}}const l=a;switch(l.type){case"escape":{s+=t.text(l);break}case"html":{s+=t.html(l);break}case"link":{s+=t.link(l);break}case"image":{s+=t.image(l);break}case"strong":{s+=t.strong(l);break}case"em":{s+=t.em(l);break}case"codespan":{s+=t.codespan(l);break}case"br":{s+=t.br(l);break}case"del":{s+=t.del(l);break}case"text":{s+=t.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}},qs,Yt=(qs=class{constructor(n){cn(this,"options");cn(this,"block");this.options=n||qe}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?he.lex:he.lexInline}provideParser(){return this.block?ge.parse:ge.parseInline}},cn(qs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),qs),ul=class{constructor(...n){cn(this,"defaults",Fr());cn(this,"options",this.setOptions);cn(this,"parse",this.parseMarkdown(!0));cn(this,"parseInline",this.parseMarkdown(!1));cn(this,"Parser",ge);cn(this,"Renderer",as);cn(this,"TextRenderer",Yr);cn(this,"Lexer",he);cn(this,"Tokenizer",is);cn(this,"Hooks",Yt);this.use(...n)}walkTokens(n,e){var s,r;let t=[];for(const o of n)switch(t=t.concat(e.call(this,o)),o.type){case"table":{const i=o;for(const a of i.header)t=t.concat(this.walkTokens(a.tokens,e));for(const a of i.rows)for(const l of a)t=t.concat(this.walkTokens(l.tokens,e));break}case"list":{const i=o;t=t.concat(this.walkTokens(i.items,e));break}default:{const i=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{const l=i[a].flat(1/0);t=t.concat(this.walkTokens(l,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=e.renderers[r.name];o?e.renderers[r.name]=function(...i){let a=r.renderer.apply(this,i);return a===!1&&(a=o.apply(this,i)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=e[r.level];o?o.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){const r=this.defaults.renderer||new as(this.defaults);for(const o in t.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const i=o,a=t.renderer[i],l=r[i];r[i]=(...c)=>{let u=a.apply(r,c);return u===!1&&(u=l.apply(r,c)),u||""}}s.renderer=r}if(t.tokenizer){const r=this.defaults.tokenizer||new is(this.defaults);for(const o in t.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const i=o,a=t.tokenizer[i],l=r[i];r[i]=(...c)=>{let u=a.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}s.tokenizer=r}if(t.hooks){const r=this.defaults.hooks||new Yt;for(const o in t.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const i=o,a=t.hooks[i],l=r[i];Yt.passThroughHooks.has(o)?r[i]=c=>{if(this.defaults.async)return Promise.resolve(a.call(r,c)).then(p=>l.call(r,p));const u=a.call(r,c);return l.call(r,u)}:r[i]=(...c)=>{let u=a.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}s.hooks=r}if(t.walkTokens){const r=this.defaults.walkTokens,o=t.walkTokens;s.walkTokens=function(i){let a=[];return a.push(o.call(this,i)),r&&(a=a.concat(r.call(this,i))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return he.lex(n,e??this.defaults)}parser(n,e){return ge.parse(n,e??this.defaults)}parseMarkdown(n){return(t,s)=>{const r={...s},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=n);const a=o.hooks?o.hooks.provideLexer():n?he.lex:he.lexInline,l=o.hooks?o.hooks.provideParser():n?ge.parse:ge.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(t):t).then(c=>a(c,o)).then(c=>o.hooks?o.hooks.processAllTokens(c):c).then(c=>o.walkTokens?Promise.all(this.walkTokens(c,o.walkTokens)).then(()=>c):c).then(c=>l(c,o)).then(c=>o.hooks?o.hooks.postprocess(c):c).catch(i);try{o.hooks&&(t=o.hooks.preprocess(t));let c=a(t,o);o.hooks&&(c=o.hooks.processAllTokens(c)),o.walkTokens&&this.walkTokens(c,o.walkTokens);let u=l(c,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(c){return i(c)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+ne(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},$e=new ul;function on(n,e){return $e.parse(n,e)}on.options=on.setOptions=function(n){return $e.setOptions(n),on.defaults=$e.defaults,Xa(on.defaults),on};on.getDefaults=Fr;on.defaults=qe;on.use=function(...n){return $e.use(...n),on.defaults=$e.defaults,Xa(on.defaults),on};on.walkTokens=function(n,e){return $e.walkTokens(n,e)};on.parseInline=$e.parseInline;on.Parser=ge;on.parser=ge.parse;on.Renderer=as;on.TextRenderer=Yr;on.Lexer=he;on.lexer=he.lex;on.Tokenizer=is;on.Hooks=Yt;on.parse=on;on.options;on.setOptions;on.use;on.walkTokens;on.parseInline;ge.parse;he.lex;const Bf=new ul,pi=Object.assign({"/src/articles/ASP.NET.md":gd,"/src/articles/JSadvanced.md":md,"/src/articles/Linux-1.md":bd,"/src/articles/Linux-2.md":vd,"/src/articles/Linux-3.md":xd,"/src/articles/Linux-4.md":yd,"/src/articles/Linux-5.md":wd,"/src/articles/axios.md":jd,"/src/articles/design.md":kd,"/src/articles/design/CSS动画与孟菲斯设计风格.md":_d,"/src/articles/echartsOptions.md":Rd,"/src/articles/es6.md":Sd,"/src/articles/express.md":Pd,"/src/articles/frontend/Three.js-3D粒子特效实战.md":Ad,"/src/articles/frontend/Vue3-Composition-API完全指南.md":Td,"/src/articles/git.md":Cd,"/src/articles/http.md":Id,"/src/articles/jsUtools.md":Ed,"/src/articles/markdwon.md":Bd,"/src/articles/network/详解HTTP协议.md":Nd,"/src/articles/nginx.md":Ld,"/src/articles/npm.md":Od,"/src/articles/react.md":Dd,"/src/articles/typescript-02.md":Md,"/src/articles/typescript-03.md":Vd,"/src/articles/typescript.md":Hd,"/src/articles/vite.md":Fd,"/src/articles/vue-2.md":$d,"/src/articles/vue-3.md":qd,"/src/articles/vue-4.md":zd,"/src/articles/vue.md":Ud,"/src/articles/vue3x01.md":Wd,"/src/articles/vue3x02.md":Gd,"/src/articles/vue3x03.md":Kd,"/src/articles/webpack.md":Yd,"/src/articles/yarn.md":Jd});function Nf(n){const e=n.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);if(!e)return{};const t=e[1].split(`
`),s={};let r=null,o=!1,i=!1,a="";for(const l of t){const c=l.trim();if(!c||c.startsWith("#")){i&&r&&(a+=(a?" ":"")+c);continue}const u=c.indexOf(":"),p=/^[a-zA-Z0-9_\-\u4e00-\u9fff]+\s*:/.test(c);if(u===-1||i&&r&&!p){r&&o&&Array.isArray(s[r])?s[r].push(c.replace(/^-\s*/,"").replace(/^`|`$/g,"").trim()):i&&r&&(a+=(a?" ":"")+c.replace(/^`|`$/g,"").trim());continue}const d=c.slice(0,u).trim();let g=c.slice(u+1).trim().replace(/^['"`]|['"`]$/g,"");if(g===">-"||g===">"||g==="|"){r=d,i=!0,o=!1,a="";continue}if(d!==r&&(i&&r&&a&&(s[r]=a.trim(),i=!1,a=""),o&&r&&(o=!1),r=d),g===""||g===">-"||g===">"||g==="|"){if(g===">-"||g===">"||g==="|"){i=!0,o=!1,a="";continue}s[d]=[],o=!0,i=!1;continue}s[d]=g}return i&&r&&a&&(s[r]=a.trim()),s.tags&&typeof s.tags=="string"&&(s.tags=s.tags.split(",").map(l=>l.trim()).filter(Boolean)),s}function Lf(n,e=120){const t=n.replace(/[#*`\[\]()!>|-]/g," ").replace(/\s+/g," ").trim();return t.length>e?t.slice(0,e)+"...":t}async function Of(){const n=[];console.log("[md-loader] Found articles:",Object.keys(pi).length);for(const[e,t]of Object.entries(pi))try{const s=Nf(t),r=t.replace(/^---[\s\S]*?---\s*\n/,""),o=Bf.parse(r),i=e.replace("/src/articles/","").replace(/\.md$/,"");console.log(`[md-loader] ✓ ${i}: ${s.title}`),n.push({slug:i,title:s.title||"Untitled",author:s.author||"FishBand",cover:typeof s.cover=="string"?s.cover.replace(/^`|`$/g,"").trim():"",tags:Array.isArray(s.tags)?s.tags:[],category:s.categories||s.category||"",date:s.date||new Date().toISOString(),abbrlink:s.abbrlink||"",duration:Df(r),description:Lf(r),content:o,rawBody:r})}catch(s){console.error(`[md-loader] ✗ ERROR parsing ${e}:`,s.message)}return console.log(`[md-loader] Total loaded: ${n.length}`),n.sort((e,t)=>new Date(t.date)-new Date(e.date))}function Df(n){const e=(n.match(/[\u4e00-\u9fa5]/g)||[]).length,t=n.replace(/[\u4e00-\u9fa5]/g,"").split(/\s+/).filter(Boolean).length,s=Math.ceil(e*.3+t/200);return s<1?"1 min":`${s} min`}const Jr=Wu(pd);Jr.use(Yu());Jr.use(Qa);Qa.isReady().then(async()=>{try{await Of(),await hd()}catch(n){console.warn("Init:",n.message)}Jr.mount("#app")});export{Zf as A,cd as B,Of as C,$f as D,ki as E,Ln as F,Al as G,Gs as H,Kl as I,Vf as J,ru as K,Gf as L,Hf as M,yu as T,Pt as a,Ca as b,qf as c,Dn as d,In as e,Ks as f,su as g,Ff as h,mr as i,Pr as j,zf as k,Tt as l,Cr as m,br as n,Tr as o,Wf as p,Lt as q,Sr as r,Yf as s,Sl as t,Uf as u,Pe as v,Xe as w,Sc as x,Kf as y,Jf as z};
