(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Xx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Nh={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function Qy(){if(gv)return jo;gv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:h,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var vv;function $y(){return vv||(vv=1,Nh.exports=Qy()),Nh.exports}var ge=$y(),Uh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function eM(){if(_v)return dt;_v=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function S(U,W,ue){this.props=U,this.context=W,this.refs=M,this.updater=ue||T}S.prototype.isReactComponent={},S.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=S.prototype;function O(U,W,ue){this.props=U,this.context=W,this.refs=M,this.updater=ue||T}var N=O.prototype=new I;N.constructor=O,b(N,S.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(U,W,ue){var _e=ue.ref;return{$$typeof:a,type:U,key:W,ref:_e!==void 0?_e:null,props:ue}}function w(U,W){return C(U.type,W,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function se(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ue){return W[ue]})}var $=/\/+/g;function ce(U,W){return typeof U=="object"&&U!==null&&U.key!=null?se(""+U.key):W.toString(36)}function me(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,W,ue,_e,Re){var Z=typeof U;(Z==="undefined"||Z==="boolean")&&(U=null);var re=!1;if(U===null)re=!0;else switch(Z){case"bigint":case"string":case"number":re=!0;break;case"object":switch(U.$$typeof){case a:case e:re=!0;break;case g:return re=U._init,L(re(U._payload),W,ue,_e,Re)}}if(re)return Re=Re(U),re=_e===""?"."+ce(U,0):_e,z(Re)?(ue="",re!=null&&(ue=re.replace($,"$&/")+"/"),L(Re,W,ue,"",function(Se){return Se})):Re!=null&&(X(Re)&&(Re=w(Re,ue+(Re.key==null||U&&U.key===Re.key?"":(""+Re.key).replace($,"$&/")+"/")+re)),W.push(Re)),1;re=0;var Q=_e===""?".":_e+":";if(z(U))for(var be=0;be<U.length;be++)_e=U[be],Z=Q+ce(_e,be),re+=L(_e,W,ue,Z,Re);else if(be=y(U),typeof be=="function")for(U=be.call(U),be=0;!(_e=U.next()).done;)_e=_e.value,Z=Q+ce(_e,be++),re+=L(_e,W,ue,Z,Re);else if(Z==="object"){if(typeof U.then=="function")return L(me(U),W,ue,_e,Re);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return re}function G(U,W,ue){if(U==null)return U;var _e=[],Re=0;return L(U,_e,"","",function(Z){return W.call(ue,Z,Re++)}),_e}function te(U){if(U._status===-1){var W=U._result;W=W(),W.then(function(ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=ue)},function(ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=ue)}),U._status===-1&&(U._status=0,U._result=W)}if(U._status===1)return U._result.default;throw U._result}var Te=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Me={map:G,forEach:function(U,W,ue){G(U,function(){W.apply(this,arguments)},ue)},count:function(U){var W=0;return G(U,function(){W++}),W},toArray:function(U){return G(U,function(W){return W})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return dt.Activity=_,dt.Children=Me,dt.Component=S,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=O,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,dt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},dt.cache=function(U){return function(){return U.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(U,W,ue){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var _e=b({},U.props),Re=U.key;if(W!=null)for(Z in W.key!==void 0&&(Re=""+W.key),W)!K.call(W,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&W.ref===void 0||(_e[Z]=W[Z]);var Z=arguments.length-2;if(Z===1)_e.children=ue;else if(1<Z){for(var re=Array(Z),Q=0;Q<Z;Q++)re[Q]=arguments[Q+2];_e.children=re}return C(U.type,Re,_e)},dt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},dt.createElement=function(U,W,ue){var _e,Re={},Z=null;if(W!=null)for(_e in W.key!==void 0&&(Z=""+W.key),W)K.call(W,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Re[_e]=W[_e]);var re=arguments.length-2;if(re===1)Re.children=ue;else if(1<re){for(var Q=Array(re),be=0;be<re;be++)Q[be]=arguments[be+2];Re.children=Q}if(U&&U.defaultProps)for(_e in re=U.defaultProps,re)Re[_e]===void 0&&(Re[_e]=re[_e]);return C(U,Z,Re)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:d,render:U}},dt.isValidElement=X,dt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:te}},dt.memo=function(U,W){return{$$typeof:p,type:U,compare:W===void 0?null:W}},dt.startTransition=function(U){var W=P.T,ue={};P.T=ue;try{var _e=U(),Re=P.S;Re!==null&&Re(ue,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(B,Te)}catch(Z){Te(Z)}finally{W!==null&&ue.types!==null&&(W.types=ue.types),P.T=W}},dt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},dt.use=function(U){return P.H.use(U)},dt.useActionState=function(U,W,ue){return P.H.useActionState(U,W,ue)},dt.useCallback=function(U,W){return P.H.useCallback(U,W)},dt.useContext=function(U){return P.H.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U,W){return P.H.useDeferredValue(U,W)},dt.useEffect=function(U,W){return P.H.useEffect(U,W)},dt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},dt.useId=function(){return P.H.useId()},dt.useImperativeHandle=function(U,W,ue){return P.H.useImperativeHandle(U,W,ue)},dt.useInsertionEffect=function(U,W){return P.H.useInsertionEffect(U,W)},dt.useLayoutEffect=function(U,W){return P.H.useLayoutEffect(U,W)},dt.useMemo=function(U,W){return P.H.useMemo(U,W)},dt.useOptimistic=function(U,W){return P.H.useOptimistic(U,W)},dt.useReducer=function(U,W,ue){return P.H.useReducer(U,W,ue)},dt.useRef=function(U){return P.H.useRef(U)},dt.useState=function(U){return P.H.useState(U)},dt.useSyncExternalStore=function(U,W,ue){return P.H.useSyncExternalStore(U,W,ue)},dt.useTransition=function(){return P.H.useTransition()},dt.version="19.2.3",dt}var xv;function Sp(){return xv||(xv=1,Uh.exports=eM()),Uh.exports}var et=Sp();const tM=Xx(et);var Lh={exports:{}},qo={},Oh={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function nM(){return Sv||(Sv=1,(function(a){function e(L,G){var te=L.length;L.push(G);e:for(;0<te;){var Te=te-1>>>1,Me=L[Te];if(0<l(Me,G))L[Te]=G,L[te]=Me,te=Te;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var G=L[0],te=L.pop();if(te!==G){L[0]=te;e:for(var Te=0,Me=L.length,U=Me>>>1;Te<U;){var W=2*(Te+1)-1,ue=L[W],_e=W+1,Re=L[_e];if(0>l(ue,te))_e<Me&&0>l(Re,ue)?(L[Te]=Re,L[_e]=te,Te=_e):(L[Te]=ue,L[W]=te,Te=W);else if(_e<Me&&0>l(Re,te))L[Te]=Re,L[_e]=te,Te=_e;else break e}}return G}function l(L,G){var te=L.sortIndex-G.sortIndex;return te!==0?te:L.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();a.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,T=!1,b=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=L)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function z(L){if(b=!1,N(L),!T)if(i(m)!==null)T=!0,B||(B=!0,se());else{var G=i(p);G!==null&&me(z,G.startTime-L)}}var B=!1,P=-1,K=5,C=-1;function w(){return M?!0:!(a.unstable_now()-C<K)}function X(){if(M=!1,B){var L=a.unstable_now();C=L;var G=!0;try{e:{T=!1,b&&(b=!1,I(P),P=-1),y=!0;var te=x;try{t:{for(N(L),_=i(m);_!==null&&!(_.expirationTime>L&&w());){var Te=_.callback;if(typeof Te=="function"){_.callback=null,x=_.priorityLevel;var Me=Te(_.expirationTime<=L);if(L=a.unstable_now(),typeof Me=="function"){_.callback=Me,N(L),G=!0;break t}_===i(m)&&s(m),N(L)}else s(m);_=i(m)}if(_!==null)G=!0;else{var U=i(p);U!==null&&me(z,U.startTime-L),G=!1}}break e}finally{_=null,x=te,y=!1}G=void 0}}finally{G?se():B=!1}}}var se;if(typeof O=="function")se=function(){O(X)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ce=$.port2;$.port1.onmessage=X,se=function(){ce.postMessage(null)}}else se=function(){S(X,0)};function me(L,G){P=S(function(){L(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(L){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var te=x;x=G;try{return L()}finally{x=te}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var te=x;x=L;try{return G()}finally{x=te}},a.unstable_scheduleCallback=function(L,G,te){var Te=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Te+te:Te):te=Te,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=te+Me,L={id:g++,callback:G,priorityLevel:L,startTime:te,expirationTime:Me,sortIndex:-1},te>Te?(L.sortIndex=te,e(p,L),i(m)===null&&L===i(p)&&(b?(I(P),P=-1):b=!0,me(z,te-Te))):(L.sortIndex=Me,e(m,L),T||y||(T=!0,B||(B=!0,se()))),L},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(L){var G=x;return function(){var te=x;x=G;try{return L.apply(this,arguments)}finally{x=te}}}})(Ih)),Ih}var Ev;function iM(){return Ev||(Ev=1,Oh.exports=nM()),Oh.exports}var Ph={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function aM(){if(yv)return In;yv=1;var a=Sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},In.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},In.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},In.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},In.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},In.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},In.requestFormReset=function(m){s.d.r(m)},In.unstable_batchedUpdates=function(m,p){return m(p)},In.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},In.useFormStatus=function(){return h.H.useHostTransitionStatus()},In.version="19.2.3",In}var Mv;function rM(){if(Mv)return Ph.exports;Mv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ph.exports=aM(),Ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function sM(){if(Tv)return qo;Tv=1;var a=iM(),e=Sp(),i=rM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=f;else{for(var E=!1,A=u.child;A;){if(A===r){E=!0,r=u,o=f;break}if(A===o){E=!0,o=u,r=f;break}A=A.sibling}if(!E){for(A=f.child;A;){if(A===r){E=!0,r=f,o=u;break}if(A===o){E=!0,o=f,r=u;break}A=A.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var $=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case O:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var me=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},Te=[],Me=-1;function U(t){return{current:t}}function W(t){0>Me||(t.current=Te[Me],Te[Me]=null,Me--)}function ue(t,n){Me++,Te[Me]=t.current,t.current=n}var _e=U(null),Re=U(null),Z=U(null),re=U(null);function Q(t,n){switch(ue(Z,n),ue(Re,t),ue(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?z0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=z0(n),t=H0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(_e),ue(_e,t)}function be(){W(_e),W(Re),W(Z)}function Se(t){t.memoizedState!==null&&ue(re,t);var n=_e.current,r=H0(n,t.type);n!==r&&(ue(Re,t),ue(_e,r))}function Le(t){Re.current===t&&(W(_e),W(Re)),re.current===t&&(W(re),Xo._currentValue=te)}var nt,qe;function Ze(t){if(nt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);nt=n&&n[1]||"",qe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+t+qe}var lt=!1;function $e(t,n){if(!t||lt)return"";lt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(de){var le=de}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(de){le=de}t.call(Ee.prototype)}}else{try{throw Error()}catch(de){le=de}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),E=f[0],A=f[1];if(E&&A){var H=E.split(`
`),ie=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var ve=`
`+H[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{lt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ze(r):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return t.child!==n&&n!==null?Ze("Suspense Fallback"):Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return $e(t.type,!1);case 11:return $e(t.type.render,!1);case 1:return $e(t.type,!0);case 31:return Ze("Activity");default:return""}}function V(t){try{var n="",r=null;do n+=Wt(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,mt=a.unstable_scheduleCallback,yt=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,D=a.unstable_requestPaint,v=a.unstable_now,F=a.unstable_getCurrentPriorityLevel,J=a.unstable_ImmediatePriority,pe=a.unstable_UserBlockingPriority,fe=a.unstable_NormalPriority,Ve=a.unstable_LowPriority,Ne=a.unstable_IdlePriority,ke=a.log,at=a.unstable_setDisableYieldValue,Ce=null,we=null;function Ge(t){if(typeof ke=="function"&&at(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Ce,t)}catch{}}var ze=Math.clz32?Math.clz32:Y,Oe=Math.log,gt=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Oe(t)/gt|0)|0}var Pe=256,De=262144,He=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ae(o):(E&=A,E!==0?u=Ae(E):r||(r=A&~t,r!==0&&(u=Ae(r))))):(A=o&~f,A!==0?u=Ae(A):E!==0?u=Ae(E):r||(r=o&~t,r!==0&&(u=Ae(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ft(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var t=He;return He<<=1,(He&62914560)===0&&(He=4194304),t}function wt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function On(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ai(t,n,r,o,u,f){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(r=E&~r;0<r;){var ve=31-ze(r),Ee=1<<ve;A[ve]=0,H[ve]=-1;var le=ie[ve];if(le!==null)for(ie[ve]=null,ve=0;ve<le.length;ve++){var de=le[ve];de!==null&&(de.lane&=-536870913)}r&=~Ee}o!==0&&xl(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(E&~n))}function xl(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function eo(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-ze(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function Hr(t,n){var r=n&-n;return r=(r&42)!==0?1:to(r),(r&(t.suspendedLanes|n))!==0?0:r}function to(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function no(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:cv(t.type))}function Hi(t,n){var r=G.p;try{return G.p=t,n()}finally{G.p=r}}var di=Math.random().toString(36).slice(2),ln="__reactFiber$"+di,yn="__reactProps$"+di,Ri="__reactContainer$"+di,Vr="__reactEvents$"+di,Xr="__reactListeners$"+di,Sl="__reactHandles$"+di,io="__reactResources$"+di,or="__reactMarker$"+di;function ao(t){delete t[ln],delete t[yn],delete t[Vr],delete t[Xr],delete t[Sl]}function Aa(t){var n=t[ln];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Ri]||r[ln]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=j0(t);t!==null;){if(r=t[ln])return r;t=j0(t)}return n}t=r,r=t.parentNode}return null}function Ra(t){if(t=t[ln]||t[Ri]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function lr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ca(t){var n=t[io];return n||(n=t[io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[or]=!0}var j=new Set,he={};function oe(t,n){ee(t,n),ee(t+"Capture",n)}function ee(t,n){for(he[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Fe={};function We(t){return Ct.call(Fe,t)?!0:Ct.call(Xe,t)?!1:Ie.test(t)?Fe[t]=!0:(Xe[t]=!0,!1)}function Ke(t,n,r){if(We(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function rt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Je(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){r=""+E,f.call(this,E)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zt(t){if(!t._valueTracker){var n=Ot(t)?"checked":"value";t._valueTracker=$t(t,n,""+t[n])}}function Ft(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Ot(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function ht(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,r,o,u,f,E,A){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,E,st(n)):r!=null?Tn(t,E,st(r)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+st(A):t.removeAttribute("name")}function Qi(t,n,r,o,u,f,E,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Zt(t);return}r=r!=null?""+st(r):"",n=n!=null?""+st(n):r,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Zt(t)}function Tn(t,n,r){n==="number"&&tt(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function pi(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+st(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function zt(t,n,r){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+st(r):""}function bn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=st(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Zt(t)}function mn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||An.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function kr(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Rn(t,f,n[f])}function Ci(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return ZS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var Ru=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,Wr=null;function Bp(t){var n=Ra(t);if(n&&(t=n.stateNode)){var r=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Mn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ht(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[yn]||null;if(!u)throw Error(s(90));Mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Ft(o)}break e;case"textarea":zt(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&pi(t,!!r.multiple,n,!1)}}}var wu=!1;function zp(t,n,r){if(wu)return t(n,r);wu=!0;try{var o=t(n);return o}finally{if(wu=!1,(Yr!==null||Wr!==null)&&(lc(),Yr&&(n=Yr,t=Wr,Wr=Yr=null,Bp(n),t)))for(n=0;n<t.length;n++)Bp(t[n])}}function ro(t,n){var r=t.stateNode;if(r===null)return null;var o=r[yn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(ea)try{var so={};Object.defineProperty(so,"passive",{get:function(){Du=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Du=!1}var wa=null,Nu=null,yl=null;function Hp(){if(yl)return yl;var t,n=Nu,r=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<r&&n[t]===u[t];t++);var E=r-t;for(o=1;o<=E&&n[r-o]===u[f-o];o++);return yl=u.slice(t,1<o?1-o:void 0)}function Ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Gp(){return!1}function kn(t){function n(r,o,u,f,E){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Tl:Gp,this.isPropagationStopped=Gp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=kn(cr),oo=_({},cr,{view:0,detail:0}),KS=kn(oo),Uu,Lu,lo,Al=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Uu=t.screenX-lo.screenX,Lu=t.screenY-lo.screenY):Lu=Uu=0,lo=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Vp=kn(Al),JS=_({},Al,{dataTransfer:0}),QS=kn(JS),$S=_({},oo,{relatedTarget:0}),Ou=kn($S),eE=_({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),tE=kn(eE),nE=_({},cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iE=kn(nE),aE=_({},cr,{data:0}),Xp=kn(aE),rE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lE(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=oE[t])?!!n[t]:!1}function Iu(){return lE}var cE=_({},oo,{key:function(t){if(t.key){var n=rE[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uE=kn(cE),fE=_({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=kn(fE),hE=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),dE=kn(hE),pE=_({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=kn(pE),gE=_({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=kn(gE),_E=_({},cr,{newState:0,oldState:0}),xE=kn(_E),SE=[9,13,27,32],Pu=ea&&"CompositionEvent"in window,co=null;ea&&"documentMode"in document&&(co=document.documentMode);var EE=ea&&"TextEvent"in window&&!co,Yp=ea&&(!Pu||co&&8<co&&11>=co),Wp=" ",jp=!1;function qp(t,n){switch(t){case"keyup":return SE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function yE(t,n){switch(t){case"compositionend":return Zp(n);case"keypress":return n.which!==32?null:(jp=!0,Wp);case"textInput":return t=n.data,t===Wp&&jp?null:t;default:return null}}function ME(t,n){if(jr)return t==="compositionend"||!Pu&&qp(t,n)?(t=Hp(),yl=Nu=wa=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yp&&n.locale!=="ko"?null:n.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!TE[t.type]:n==="textarea"}function Jp(t,n,r,o){Yr?Wr?Wr.push(o):Wr=[o]:Yr=o,n=mc(n,"onChange"),0<n.length&&(r=new bl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var uo=null,fo=null;function bE(t){L0(t,0)}function Rl(t){var n=lr(t);if(Ft(n))return t}function Qp(t,n){if(t==="change")return n}var $p=!1;if(ea){var Fu;if(ea){var Bu="oninput"in document;if(!Bu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Bu=typeof em.oninput=="function"}Fu=Bu}else Fu=!1;$p=Fu&&(!document.documentMode||9<document.documentMode)}function tm(){uo&&(uo.detachEvent("onpropertychange",nm),fo=uo=null)}function nm(t){if(t.propertyName==="value"&&Rl(fo)){var n=[];Jp(n,fo,t,Cu(t)),zp(bE,n)}}function AE(t,n,r){t==="focusin"?(tm(),uo=n,fo=r,uo.attachEvent("onpropertychange",nm)):t==="focusout"&&tm()}function RE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(fo)}function CE(t,n){if(t==="click")return Rl(n)}function wE(t,n){if(t==="input"||t==="change")return Rl(n)}function DE(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:DE;function ho(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Ct.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,n){var r=im(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=im(r)}}function rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=tt(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=tt(t.document)}return n}function zu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var NE=ea&&"documentMode"in document&&11>=document.documentMode,qr=null,Hu=null,po=null,Gu=!1;function om(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Gu||qr==null||qr!==tt(o)||(o=qr,"selectionStart"in o&&zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=mc(Hu,"onSelect"),0<o.length&&(n=new bl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=qr)))}function ur(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Zr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Vu={},lm={};ea&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function fr(t){if(Vu[t])return Vu[t];if(!Zr[t])return t;var n=Zr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in lm)return Vu[t]=n[r];return t}var cm=fr("animationend"),um=fr("animationiteration"),fm=fr("animationstart"),UE=fr("transitionrun"),LE=fr("transitionstart"),OE=fr("transitioncancel"),hm=fr("transitionend"),dm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function wi(t,n){dm.set(t,n),oe(n,[t])}var Cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],Kr=0,ku=0;function wl(){for(var t=Kr,n=ku=Kr=0;n<t;){var r=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var f=mi[n];if(mi[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}f!==0&&pm(r,u,f)}}function Dl(t,n,r,o){mi[Kr++]=t,mi[Kr++]=n,mi[Kr++]=r,mi[Kr++]=o,ku|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Yu(t,n,r,o){return Dl(t,n,r,o),Nl(t)}function hr(t,n){return Dl(t,null,null,n),Nl(t)}function pm(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,f=t.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(r),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),f):null}function Nl(t){if(50<Po)throw Po=0,th=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Jr={};function IE(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,r,o){return new IE(t,n,r,o)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var r=t.alternate;return r===null?(r=ei(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function mm(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ul(t,n,r,o,u,f){var E=0;if(o=t,typeof t=="function")Wu(t)&&(E=1);else if(typeof t=="string")E=Hy(t,r,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=ei(31,r,n,u),t.elementType=C,t.lanes=f,t;case b:return dr(r.children,u,f,n);case M:E=8,u|=24;break;case S:return t=ei(12,r,n,u|2),t.elementType=S,t.lanes=f,t;case z:return t=ei(13,r,n,u),t.elementType=z,t.lanes=f,t;case B:return t=ei(19,r,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:E=10;break e;case I:E=9;break e;case N:E=11;break e;case P:E=14;break e;case K:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ei(E,r,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function dr(t,n,r,o){return t=ei(7,t,o,n),t.lanes=r,t}function ju(t,n,r){return t=ei(6,t,null,n),t.lanes=r,t}function gm(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function qu(t,n,r){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var r=vm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:V(n)},vm.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Qr=[],$r=0,Ll=null,mo=0,vi=[],_i=0,Da=null,Gi=1,Vi="";function na(t,n){Qr[$r++]=mo,Qr[$r++]=Ll,Ll=t,mo=n}function _m(t,n,r){vi[_i++]=Gi,vi[_i++]=Vi,vi[_i++]=Da,Da=t;var o=Gi;t=Vi;var u=32-ze(o)-1;o&=~(1<<u),r+=1;var f=32-ze(n)+u;if(30<f){var E=u-u%5;f=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Gi=1<<32-ze(n)+u|r<<u|o,Vi=f+t}else Gi=1<<f|r<<u|o,Vi=t}function Zu(t){t.return!==null&&(na(t,1),_m(t,1,0))}function Ku(t){for(;t===Ll;)Ll=Qr[--$r],Qr[$r]=null,mo=Qr[--$r],Qr[$r]=null;for(;t===Da;)Da=vi[--_i],vi[_i]=null,Vi=vi[--_i],vi[_i]=null,Gi=vi[--_i],vi[_i]=null}function xm(t,n){vi[_i++]=Gi,vi[_i++]=Vi,vi[_i++]=Da,Gi=n.id,Vi=n.overflow,Da=t}var Cn=null,Kt=null,Rt=!1,Na=null,xi=!1,Ju=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(gi(n,t)),Ju}function Sm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[ln]=t,n[yn]=o,r){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(r=0;r<Bo.length;r++)Et(Bo[r],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),bn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||F0(n.textContent,r)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Ua(t,!0)}function Em(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Cn=Cn.return}}function es(t){if(t!==Cn)return!1;if(!Rt)return Em(t),Rt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||gh(t.type,t.memoizedProps)),r=!r),r&&Kt&&Ua(t),Em(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=W0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=W0(t)}else n===27?(n=Kt,Wa(t.type)?(t=Eh,Eh=null,Kt=t):Kt=n):Kt=Cn?Ei(t.stateNode.nextSibling):null;return!0}function pr(){Kt=Cn=null,Rt=!1}function Qu(){var t=Na;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Na=null),t}function go(t){Na===null?Na=[t]:Na.push(t)}var $u=U(null),mr=null,ia=null;function La(t,n,r){ue($u,n._currentValue),n._currentValue=r}function aa(t){t._currentValue=$u.current,W($u)}function ef(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function tf(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var E=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=r,A=f.alternate,A!==null&&(A.lanes|=r),ef(f.return,r,t),o||(E=null);break e}f=A.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=r,f=E.alternate,f!==null&&(f.lanes|=r),ef(E,r,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function ts(t,n,r,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=u.type;$n(u.pendingProps.value,E.value)||(t!==null?t.push(A):t=[A])}}else if(u===re.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}u=u.return}t!==null&&tf(n,t,r,o),n.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){mr=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return ym(mr,t)}function Il(t,n){return mr===null&&gr(t),ym(t,n)}function ym(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return r}var PE=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},FE=a.unstable_scheduleCallback,BE=a.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new PE,data:new Map,refCount:0}}function vo(t){t.refCount--,t.refCount===0&&FE(BE,function(){t.controller.abort()})}var _o=null,af=0,ns=0,is=null;function zE(t,n){if(_o===null){var r=_o=[];af=0,ns=oh(),is={status:"pending",value:void 0,then:function(o){r.push(o)}}}return af++,n.then(Mm,Mm),n}function Mm(){if(--af===0&&_o!==null){is!==null&&(is.status="fulfilled");var t=_o;_o=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function HE(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Tm=L.S;L.S=function(t,n){o0=v(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zE(t,n),Tm!==null&&Tm(t,n)};var vr=U(null);function rf(){var t=vr.current;return t!==null?t:jt.pooledCache}function Pl(t,n){n===null?ue(vr,vr.current):ue(vr,n.pool)}function bm(){var t=rf();return t===null?null:{parent:cn._currentValue,pool:t}}var as=Error(s(460)),sf=Error(s(474)),Fl=Error(s(542)),Bl={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then($i,$i),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t}throw xr=n,as}}function _r(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(xr=r,as):r}}var xr=null;function Cm(){if(xr===null)throw Error(s(459));var t=xr;return xr=null,t}function wm(t){if(t===as||t===Fl)throw Error(s(483))}var rs=null,xo=0;function zl(t){var n=xo;return xo+=1,rs===null&&(rs=[]),Rm(rs,t,n)}function So(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Hl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dm(t){function n(q,k){if(t){var ne=q.deletions;ne===null?(q.deletions=[k],q.flags|=16):ne.push(k)}}function r(q,k){if(!t)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=ta(q,k),q.index=0,q.sibling=null,q}function f(q,k,ne){return q.index=ne,t?(ne=q.alternate,ne!==null?(ne=ne.index,ne<k?(q.flags|=67108866,k):ne):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function E(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,k,ne,xe){return k===null||k.tag!==6?(k=ju(ne,q.mode,xe),k.return=q,k):(k=u(k,ne),k.return=q,k)}function H(q,k,ne,xe){var it=ne.type;return it===b?ve(q,k,ne.props.children,xe,ne.key):k!==null&&(k.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===K&&_r(it)===k.type)?(k=u(k,ne.props),So(k,ne),k.return=q,k):(k=Ul(ne.type,ne.key,ne.props,null,q.mode,xe),So(k,ne),k.return=q,k)}function ie(q,k,ne,xe){return k===null||k.tag!==4||k.stateNode.containerInfo!==ne.containerInfo||k.stateNode.implementation!==ne.implementation?(k=qu(ne,q.mode,xe),k.return=q,k):(k=u(k,ne.children||[]),k.return=q,k)}function ve(q,k,ne,xe,it){return k===null||k.tag!==7?(k=dr(ne,q.mode,xe,it),k.return=q,k):(k=u(k,ne),k.return=q,k)}function Ee(q,k,ne){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ju(""+k,q.mode,ne),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return ne=Ul(k.type,k.key,k.props,null,q.mode,ne),So(ne,k),ne.return=q,ne;case T:return k=qu(k,q.mode,ne),k.return=q,k;case K:return k=_r(k),Ee(q,k,ne)}if(me(k)||se(k))return k=dr(k,q.mode,ne,null),k.return=q,k;if(typeof k.then=="function")return Ee(q,zl(k),ne);if(k.$$typeof===O)return Ee(q,Il(q,k),ne);Hl(q,k)}return null}function le(q,k,ne,xe){var it=k!==null?k.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return it!==null?null:A(q,k,""+ne,xe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===it?H(q,k,ne,xe):null;case T:return ne.key===it?ie(q,k,ne,xe):null;case K:return ne=_r(ne),le(q,k,ne,xe)}if(me(ne)||se(ne))return it!==null?null:ve(q,k,ne,xe,null);if(typeof ne.then=="function")return le(q,k,zl(ne),xe);if(ne.$$typeof===O)return le(q,k,Il(q,ne),xe);Hl(q,ne)}return null}function de(q,k,ne,xe,it){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return q=q.get(ne)||null,A(k,q,""+xe,it);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case y:return q=q.get(xe.key===null?ne:xe.key)||null,H(k,q,xe,it);case T:return q=q.get(xe.key===null?ne:xe.key)||null,ie(k,q,xe,it);case K:return xe=_r(xe),de(q,k,ne,xe,it)}if(me(xe)||se(xe))return q=q.get(ne)||null,ve(k,q,xe,it,null);if(typeof xe.then=="function")return de(q,k,ne,zl(xe),it);if(xe.$$typeof===O)return de(q,k,ne,Il(k,xe),it);Hl(k,xe)}return null}function je(q,k,ne,xe){for(var it=null,Ut=null,Qe=k,vt=k=0,Tt=null;Qe!==null&&vt<ne.length;vt++){Qe.index>vt?(Tt=Qe,Qe=null):Tt=Qe.sibling;var Lt=le(q,Qe,ne[vt],xe);if(Lt===null){Qe===null&&(Qe=Tt);break}t&&Qe&&Lt.alternate===null&&n(q,Qe),k=f(Lt,k,vt),Ut===null?it=Lt:Ut.sibling=Lt,Ut=Lt,Qe=Tt}if(vt===ne.length)return r(q,Qe),Rt&&na(q,vt),it;if(Qe===null){for(;vt<ne.length;vt++)Qe=Ee(q,ne[vt],xe),Qe!==null&&(k=f(Qe,k,vt),Ut===null?it=Qe:Ut.sibling=Qe,Ut=Qe);return Rt&&na(q,vt),it}for(Qe=o(Qe);vt<ne.length;vt++)Tt=de(Qe,q,vt,ne[vt],xe),Tt!==null&&(t&&Tt.alternate!==null&&Qe.delete(Tt.key===null?vt:Tt.key),k=f(Tt,k,vt),Ut===null?it=Tt:Ut.sibling=Tt,Ut=Tt);return t&&Qe.forEach(function(Ja){return n(q,Ja)}),Rt&&na(q,vt),it}function ot(q,k,ne,xe){if(ne==null)throw Error(s(151));for(var it=null,Ut=null,Qe=k,vt=k=0,Tt=null,Lt=ne.next();Qe!==null&&!Lt.done;vt++,Lt=ne.next()){Qe.index>vt?(Tt=Qe,Qe=null):Tt=Qe.sibling;var Ja=le(q,Qe,Lt.value,xe);if(Ja===null){Qe===null&&(Qe=Tt);break}t&&Qe&&Ja.alternate===null&&n(q,Qe),k=f(Ja,k,vt),Ut===null?it=Ja:Ut.sibling=Ja,Ut=Ja,Qe=Tt}if(Lt.done)return r(q,Qe),Rt&&na(q,vt),it;if(Qe===null){for(;!Lt.done;vt++,Lt=ne.next())Lt=Ee(q,Lt.value,xe),Lt!==null&&(k=f(Lt,k,vt),Ut===null?it=Lt:Ut.sibling=Lt,Ut=Lt);return Rt&&na(q,vt),it}for(Qe=o(Qe);!Lt.done;vt++,Lt=ne.next())Lt=de(Qe,q,vt,Lt.value,xe),Lt!==null&&(t&&Lt.alternate!==null&&Qe.delete(Lt.key===null?vt:Lt.key),k=f(Lt,k,vt),Ut===null?it=Lt:Ut.sibling=Lt,Ut=Lt);return t&&Qe.forEach(function(Jy){return n(q,Jy)}),Rt&&na(q,vt),it}function Yt(q,k,ne,xe){if(typeof ne=="object"&&ne!==null&&ne.type===b&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var it=ne.key;k!==null;){if(k.key===it){if(it=ne.type,it===b){if(k.tag===7){r(q,k.sibling),xe=u(k,ne.props.children),xe.return=q,q=xe;break e}}else if(k.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===K&&_r(it)===k.type){r(q,k.sibling),xe=u(k,ne.props),So(xe,ne),xe.return=q,q=xe;break e}r(q,k);break}else n(q,k);k=k.sibling}ne.type===b?(xe=dr(ne.props.children,q.mode,xe,ne.key),xe.return=q,q=xe):(xe=Ul(ne.type,ne.key,ne.props,null,q.mode,xe),So(xe,ne),xe.return=q,q=xe)}return E(q);case T:e:{for(it=ne.key;k!==null;){if(k.key===it)if(k.tag===4&&k.stateNode.containerInfo===ne.containerInfo&&k.stateNode.implementation===ne.implementation){r(q,k.sibling),xe=u(k,ne.children||[]),xe.return=q,q=xe;break e}else{r(q,k);break}else n(q,k);k=k.sibling}xe=qu(ne,q.mode,xe),xe.return=q,q=xe}return E(q);case K:return ne=_r(ne),Yt(q,k,ne,xe)}if(me(ne))return je(q,k,ne,xe);if(se(ne)){if(it=se(ne),typeof it!="function")throw Error(s(150));return ne=it.call(ne),ot(q,k,ne,xe)}if(typeof ne.then=="function")return Yt(q,k,zl(ne),xe);if(ne.$$typeof===O)return Yt(q,k,Il(q,ne),xe);Hl(q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,k!==null&&k.tag===6?(r(q,k.sibling),xe=u(k,ne),xe.return=q,q=xe):(r(q,k),xe=ju(ne,q.mode,xe),xe.return=q,q=xe),E(q)):r(q,k)}return function(q,k,ne,xe){try{xo=0;var it=Yt(q,k,ne,xe);return rs=null,it}catch(Qe){if(Qe===as||Qe===Fl)throw Qe;var Ut=ei(29,Qe,null,q.mode);return Ut.lanes=xe,Ut.return=q,Ut}finally{}}}var Sr=Dm(!0),Nm=Dm(!1),Oa=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Nl(t),pm(t,null,r),n}return Dl(t,o,n,r),Nl(t)}function Eo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,eo(t,r)}}function cf(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=E:f=f.next=E,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var uf=!1;function yo(){if(uf){var t=is;if(t!==null)throw t}}function Mo(t,n,r,o){uf=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,E=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,ie=H.next;H.next=null,E===null?f=ie:E.next=ie,E=H;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,A=ve.lastBaseUpdate,A!==E&&(A===null?ve.firstBaseUpdate=ie:A.next=ie,ve.lastBaseUpdate=H))}if(f!==null){var Ee=u.baseState;E=0,ve=ie=H=null,A=f;do{var le=A.lane&-536870913,de=le!==A.lane;if(de?(Mt&le)===le:(o&le)===le){le!==0&&le===ns&&(uf=!0),ve!==null&&(ve=ve.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var je=t,ot=A;le=n;var Yt=r;switch(ot.tag){case 1:if(je=ot.payload,typeof je=="function"){Ee=je.call(Yt,Ee,le);break e}Ee=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ot.payload,le=typeof je=="function"?je.call(Yt,Ee,le):je,le==null)break e;Ee=_({},Ee,le);break e;case 2:Oa=!0}}le=A.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[le]:de.push(le))}else de={lane:le,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ve===null?(ie=ve=de,H=Ee):ve=ve.next=de,E|=le;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;de=A,A=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);ve===null&&(H=Ee),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Ga|=E,t.lanes=E,t.memoizedState=Ee}}function Um(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Lm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Um(r[t],n)}var ss=U(null),Gl=U(0);function Om(t,n){t=da,ue(Gl,t),ue(ss,n),da=t|n.baseLanes}function ff(){ue(Gl,da),ue(ss,ss.current)}function hf(){da=Gl.current,W(ss),W(Gl)}var ti=U(null),Si=null;function Fa(t){var n=t.alternate;ue(sn,sn.current&1),ue(ti,t),Si===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(Si=t)}function df(t){ue(sn,sn.current),ue(ti,t),Si===null&&(Si=t)}function Im(t){t.tag===22?(ue(sn,sn.current),ue(ti,t),Si===null&&(Si=t)):Ba()}function Ba(){ue(sn,sn.current),ue(ti,ti.current)}function ni(t){W(ti),Si===t&&(Si=null),W(sn)}var sn=U(0);function Vl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||xh(r)||Sh(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,pt=null,Xt=null,un=null,Xl=!1,os=!1,Er=!1,kl=0,To=0,ls=null,GE=0;function an(){throw Error(s(321))}function pf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!$n(t[r],n[r]))return!1;return!0}function mf(t,n,r,o,u,f){return ra=f,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?_g:Df,Er=!1,f=r(o,u),Er=!1,os&&(f=Fm(n,r,o,u)),Pm(t),f}function Pm(t){L.H=Ro;var n=Xt!==null&&Xt.next!==null;if(ra=0,un=Xt=pt=null,Xl=!1,To=0,ls=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Ol(t)&&(fn=!0))}function Fm(t,n,r,o){pt=t;var u=0;do{if(os&&(ls=null),To=0,os=!1,25<=u)throw Error(s(301));if(u+=1,un=Xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=xg,f=n(r,o)}while(os);return f}function VE(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?bo(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(pt.flags|=1024),n}function gf(){var t=kl!==0;return kl=0,t}function vf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function _f(t){if(Xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Xl=!1}ra=0,un=Xt=pt=null,os=!1,To=kl=0,ls=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pt.memoizedState=un=t:un=un.next=t,un}function on(){if(Xt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=un===null?pt.memoizedState:un.next;if(n!==null)un=n,Xt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},un===null?pt.memoizedState=un=t:un=un.next=t}return un}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(t){var n=To;return To+=1,ls===null&&(ls=[]),t=Rm(ls,t,n),n=pt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?_g:Df),t}function Wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bo(t);if(t.$$typeof===O)return wn(t)}throw Error(s(438,String(t)))}function xf(t){var n=null,r=pt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Yl(),pt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=w;return n.index++,r}function sa(t,n){return typeof n=="function"?n(t):n}function jl(t){var n=on();return Sf(n,Xt,t)}function Sf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var E=u.next;u.next=f.next,f.next=E}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=E=null,H=null,ie=n,ve=!1;do{var Ee=ie.lane&-536870913;if(Ee!==ie.lane?(Mt&Ee)===Ee:(ra&Ee)===Ee){var le=ie.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Ee===ns&&(ve=!0);else if((ra&le)===le){ie=ie.next,le===ns&&(ve=!0);continue}else Ee={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(A=H=Ee,E=f):H=H.next=Ee,pt.lanes|=le,Ga|=le;Ee=ie.action,Er&&r(f,Ee),f=ie.hasEagerState?ie.eagerState:r(f,Ee)}else le={lane:Ee,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(A=H=le,E=f):H=H.next=le,pt.lanes|=Ee,Ga|=Ee;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?E=f:H.next=A,!$n(f,t.memoizedState)&&(fn=!0,ve&&(r=is,r!==null)))throw r;t.memoizedState=f,t.baseState=E,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ef(t){var n=on(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var E=u=u.next;do f=t(f,E.action),E=E.next;while(E!==u);$n(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Bm(t,n,r){var o=pt,u=on(),f=Rt;if(f){if(r===void 0)throw Error(s(407));r=r()}else r=n();var E=!$n((Xt||u).memoizedState,r);if(E&&(u.memoizedState=r,fn=!0),u=u.queue,Tf(Gm.bind(null,o,u,t),[t]),u.getSnapshot!==n||E||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},Hm.bind(null,o,u,r,n),null),jt===null)throw Error(s(349));f||(ra&127)!==0||zm(o,n,r)}return r}function zm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=pt.updateQueue,n===null?(n=Yl(),pt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Hm(t,n,r,o){n.value=r,n.getSnapshot=o,Vm(n)&&Xm(t)}function Gm(t,n,r){return r(function(){Vm(n)&&Xm(t)})}function Vm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!$n(t,r)}catch{return!0}}function Xm(t){var n=hr(t,2);n!==null&&Zn(n,t,2)}function yf(t){var n=zn();if(typeof t=="function"){var r=t;if(t=r(),Er){Ge(!0);try{r()}finally{Ge(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function km(t,n,r,o){return t.baseState=r,Sf(t,Xt,typeof o=="function"?o:sa)}function XE(t,n,r,o,u){if(Kl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};L.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,Ym(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Ym(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=L.T,E={};L.T=E;try{var A=r(u,o),H=L.S;H!==null&&H(E,A),Wm(t,n,A)}catch(ie){Mf(t,n,ie)}finally{f!==null&&E.types!==null&&(f.types=E.types),L.T=f}}else try{f=r(u,o),Wm(t,n,f)}catch(ie){Mf(t,n,ie)}}function Wm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){jm(t,n,o)},function(o){return Mf(t,n,o)}):jm(t,n,r)}function jm(t,n,r){n.status="fulfilled",n.value=r,qm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Ym(t,r)))}function Mf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,qm(n),n=n.next;while(n!==o)}t.action=null}function qm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zm(t,n){return n}function Km(t,n){if(Rt){var r=jt.formState;if(r!==null){e:{var o=pt;if(Rt){if(Kt){t:{for(var u=Kt,f=xi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=Ei(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=r[0])}}return r=zn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:n},r.queue=o,r=mg.bind(null,pt,o),o.dispatch=r,o=yf(!1),f=wf.bind(null,pt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=XE.bind(null,pt,u,f,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Jm(t){var n=on();return Qm(n,Xt,t)}function Qm(t,n,r){if(n=Sf(t,n,Zm)[0],t=jl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(E){throw E===as?Fl:E}else o=n;n=on();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(pt.flags|=2048,cs(9,{destroy:void 0},kE.bind(null,u,r),null)),[o,f,t]}function kE(t,n){t.action=n}function $m(t){var n=on(),r=Xt;if(r!==null)return Qm(n,r,t);on(),n=n.memoizedState,r=on();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function cs(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Yl(),pt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function eg(){return on().memoizedState}function ql(t,n,r,o){var u=zn();pt.flags|=t,u.memoizedState=cs(1|n,{destroy:void 0},r,o===void 0?null:o)}function Zl(t,n,r,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Xt!==null&&o!==null&&pf(o,Xt.memoizedState.deps)?u.memoizedState=cs(n,f,r,o):(pt.flags|=t,u.memoizedState=cs(1|n,f,r,o))}function tg(t,n){ql(8390656,8,t,n)}function Tf(t,n){Zl(2048,8,t,n)}function YE(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Yl(),pt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function ng(t){var n=on().memoizedState;return YE({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ig(t,n){return Zl(4,2,t,n)}function ag(t,n){return Zl(4,4,t,n)}function rg(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sg(t,n,r){r=r!=null?r.concat([t]):null,Zl(4,4,rg.bind(null,n,t),r)}function bf(){}function og(t,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&pf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function lg(t,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&pf(n,o[1]))return o[0];if(o=t(),Er){Ge(!0);try{t()}finally{Ge(!1)}}return r.memoizedState=[o,n],o}function Af(t,n,r){return r===void 0||(ra&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=c0(),pt.lanes|=t,Ga|=t,r)}function cg(t,n,r,o){return $n(r,n)?r:ss.current!==null?(t=Af(t,r,o),$n(t,n)||(fn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(Mt&261930)===0?(fn=!0,t.memoizedState=r):(t=c0(),pt.lanes|=t,Ga|=t,n)}function ug(t,n,r,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var E=L.T,A={};L.T=A,wf(t,!1,n,r);try{var H=u(),ie=L.S;if(ie!==null&&ie(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ve=HE(H,o);Ao(t,n,ve,ri(t))}else Ao(t,n,o,ri(t))}catch(Ee){Ao(t,n,{then:function(){},status:"rejected",reason:Ee},ri())}finally{G.p=f,E!==null&&A.types!==null&&(E.types=A.types),L.T=E}}function WE(){}function Rf(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=fg(t).queue;ug(t,u,n,te,r===null?WE:function(){return hg(t),r(o)})}function fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:te},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hg(t){var n=fg(t);n.next===null&&(n=t.alternate.memoizedState),Ao(t,n.next.queue,{},ri())}function Cf(){return wn(Xo)}function dg(){return on().memoizedState}function pg(){return on().memoizedState}function jE(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ri();t=Ia(r);var o=Pa(n,t,r);o!==null&&(Zn(o,n,r),Eo(o,n,r)),n={cache:nf()},t.payload=n;return}n=n.return}}function qE(t,n,r){var o=ri();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Kl(t)?gg(n,r):(r=Yu(t,n,r,o),r!==null&&(Zn(r,t,o),vg(r,n,o)))}function mg(t,n,r){var o=ri();Ao(t,n,r,o)}function Ao(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Kl(t))gg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var E=n.lastRenderedState,A=f(E,r);if(u.hasEagerState=!0,u.eagerState=A,$n(A,E))return Dl(t,n,u,0),jt===null&&wl(),!1}catch{}finally{}if(r=Yu(t,n,u,o),r!==null)return Zn(r,t,o),vg(r,n,o),!0}return!1}function wf(t,n,r,o){if(o={lane:2,revertLane:oh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Kl(t)){if(n)throw Error(s(479))}else n=Yu(t,r,o,2),n!==null&&Zn(n,t,2)}function Kl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function gg(t,n){os=Xl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function vg(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,eo(t,r)}}var Ro={readContext:wn,use:Wl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ro.useEffectEvent=an;var _g={readContext:wn,use:Wl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:tg,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,ql(4194308,4,rg.bind(null,n,t),r)},useLayoutEffect:function(t,n){return ql(4194308,4,t,n)},useInsertionEffect:function(t,n){ql(4,2,t,n)},useMemo:function(t,n){var r=zn();n=n===void 0?null:n;var o=t();if(Er){Ge(!0);try{t()}finally{Ge(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=zn();if(r!==void 0){var u=r(n);if(Er){Ge(!0);try{r(n)}finally{Ge(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=qE.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=yf(t);var n=t.queue,r=mg.bind(null,pt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:bf,useDeferredValue:function(t,n){var r=zn();return Af(r,t,n)},useTransition:function(){var t=yf(!1);return t=ug.bind(null,pt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=pt,u=zn();if(Rt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),jt===null)throw Error(s(349));(Mt&127)!==0||zm(o,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,tg(Gm.bind(null,o,f,t),[t]),o.flags|=2048,cs(9,{destroy:void 0},Hm.bind(null,o,f,r,n),null),r},useId:function(){var t=zn(),n=jt.identifierPrefix;if(Rt){var r=Vi,o=Gi;r=(o&~(1<<32-ze(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=kl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=GE++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Cf,useFormState:Km,useActionState:Km,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=wf.bind(null,pt,!0,r),r.dispatch=n,[t,n]},useMemoCache:xf,useCacheRefresh:function(){return zn().memoizedState=jE.bind(null,pt)},useEffectEvent:function(t){var n=zn(),r={impl:t};return n.memoizedState=r,function(){if((Pt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Df={readContext:wn,use:Wl,useCallback:og,useContext:wn,useEffect:Tf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:jl,useRef:eg,useState:function(){return jl(sa)},useDebugValue:bf,useDeferredValue:function(t,n){var r=on();return cg(r,Xt.memoizedState,t,n)},useTransition:function(){var t=jl(sa)[0],n=on().memoizedState;return[typeof t=="boolean"?t:bo(t),n]},useSyncExternalStore:Bm,useId:dg,useHostTransitionStatus:Cf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var r=on();return km(r,Xt,t,n)},useMemoCache:xf,useCacheRefresh:pg};Df.useEffectEvent=ng;var xg={readContext:wn,use:Wl,useCallback:og,useContext:wn,useEffect:Tf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:Ef,useRef:eg,useState:function(){return Ef(sa)},useDebugValue:bf,useDeferredValue:function(t,n){var r=on();return Xt===null?Af(r,t,n):cg(r,Xt.memoizedState,t,n)},useTransition:function(){var t=Ef(sa)[0],n=on().memoizedState;return[typeof t=="boolean"?t:bo(t),n]},useSyncExternalStore:Bm,useId:dg,useHostTransitionStatus:Cf,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var r=on();return Xt!==null?km(r,Xt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:xf,useCacheRefresh:pg};xg.useEffectEvent=ng;function Nf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:_({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Uf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ri(),u=Ia(o);u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(Zn(n,t,o),Eo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ri(),u=Ia(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(Zn(n,t,o),Eo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ri(),o=Ia(r);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,r),n!==null&&(Zn(n,t,r),Eo(n,t,r))}};function Sg(t,n,r,o,u,f,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,E):n.prototype&&n.prototype.isPureReactComponent?!ho(r,o)||!ho(u,f):!0}function Eg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Uf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=_({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function yg(t){Cl(t)}function Mg(t){console.error(t)}function Tg(t){Cl(t)}function Jl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function bg(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Lf(t,n,r){return r=Ia(r),r.tag=3,r.payload={element:null},r.callback=function(){Jl(t,n)},r}function Ag(t){return t=Ia(t),t.tag=3,t}function Rg(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){bg(n,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){bg(n,r,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ZE(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&ts(n,r,u,!0),r=ti.current,r!==null){switch(r.tag){case 31:case 13:return Si===null?cc():r.alternate===null&&rn===0&&(rn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Bl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),ah(t,o,u)),!1;case 22:return r.flags|=65536,o===Bl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),ah(t,o,u)),!1}throw Error(s(435,r.tag))}return ah(t,o,u),cc(),!1}if(Rt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ju&&(t=Error(s(422),{cause:o}),go(gi(t,r)))):(o!==Ju&&(n=Error(s(423),{cause:o}),go(gi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,r),u=Lf(t.stateNode,o,u),cf(t,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:o});if(f=gi(f,r),Io===null?Io=[f]:Io.push(f),rn!==4&&(rn=2),n===null)return!0;o=gi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Lf(r.stateNode,o,t),cf(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Ag(u),Rg(u,t,r,o),cf(r,u),!1}r=r.return}while(r!==null);return!1}var Of=Error(s(461)),fn=!1;function Dn(t,n,r,o){n.child=t===null?Nm(n,null,r,o):Sr(n,t.child,r,o)}function Cg(t,n,r,o,u){r=r.render;var f=n.ref;if("ref"in o){var E={};for(var A in o)A!=="ref"&&(E[A]=o[A])}else E=o;return gr(n),o=mf(t,n,r,E,f,u),A=gf(),t!==null&&!fn?(vf(t,n,u),oa(t,n,u)):(Rt&&A&&Zu(n),n.flags|=1,Dn(t,n,o,u),n.child)}function wg(t,n,r,o,u){if(t===null){var f=r.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Dg(t,n,f,o,u)):(t=Ul(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Vf(t,u)){var E=f.memoizedProps;if(r=r.compare,r=r!==null?r:ho,r(E,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(f,o),t.ref=n.ref,t.return=n,n.child=t}function Dg(t,n,r,o,u){if(t!==null){var f=t.memoizedProps;if(ho(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Vf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return If(t,n,r,o,u)}function Ng(t,n,r,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Ug(t,n,f,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(n,f!==null?f.cachePool:null),f!==null?Om(n,f):ff(),Im(n);else return o=n.lanes=536870912,Ug(t,n,f!==null?f.baseLanes|r:r,r,o)}else f!==null?(Pl(n,f.cachePool),Om(n,f),Ba(),n.memoizedState=null):(t!==null&&Pl(n,null),ff(),Ba());return Dn(t,n,u,r),n.child}function Co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ug(t,n,r,o,u){var f=rf();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:r,cachePool:f},t!==null&&Pl(n,null),ff(),Im(n),t!==null&&ts(t,n,o,!0),n.childLanes=u,null}function Ql(t,n){return n=ec({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lg(t,n,r){return Sr(n,t.child,null,r),t=Ql(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function KE(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(o.mode==="hidden")return t=Ql(n,o),n.lanes=536870912,Co(null,t);if(df(n),(t=Kt)?(t=Y0(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},r=gm(t),r.return=n,n.child=r,Cn=n,Kt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Ql(n,o)}var f=t.memoizedState;if(f!==null){var E=f.dehydrated;if(df(n),u)if(n.flags&256)n.flags&=-257,n=Lg(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||ts(t,n,r,!1),u=(r&t.childLanes)!==0,fn||u){if(o=jt,o!==null&&(E=Hr(o,r),E!==0&&E!==f.retryLane))throw f.retryLane=E,hr(t,E),Zn(o,t,E),Of;cc(),n=Lg(t,n,r)}else t=f.treeContext,Kt=Ei(E.nextSibling),Cn=n,Rt=!0,Na=null,xi=!1,t!==null&&xm(n,t),n=Ql(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function $l(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function If(t,n,r,o,u){return gr(n),r=mf(t,n,r,o,void 0,u),o=gf(),t!==null&&!fn?(vf(t,n,u),oa(t,n,u)):(Rt&&o&&Zu(n),n.flags|=1,Dn(t,n,r,u),n.child)}function Og(t,n,r,o,u,f){return gr(n),n.updateQueue=null,r=Fm(n,o,r,u),Pm(t),o=gf(),t!==null&&!fn?(vf(t,n,f),oa(t,n,f)):(Rt&&o&&Zu(n),n.flags|=1,Dn(t,n,r,f),n.child)}function Ig(t,n,r,o,u){if(gr(n),n.stateNode===null){var f=Jr,E=r.contextType;typeof E=="object"&&E!==null&&(f=wn(E)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},of(n),E=r.contextType,f.context=typeof E=="object"&&E!==null?wn(E):Jr,f.state=n.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Nf(n,r,E,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&Uf.enqueueReplaceState(f,f.state,null),Mo(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=yr(r,A);f.props=H;var ie=f.context,ve=r.contextType;E=Jr,typeof ve=="object"&&ve!==null&&(E=wn(ve));var Ee=r.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ie!==E)&&Eg(n,f,o,E),Oa=!1;var le=n.memoizedState;f.state=le,Mo(n,o,f,u),yo(),ie=n.memoizedState,A||le!==ie||Oa?(typeof Ee=="function"&&(Nf(n,r,Ee,o),ie=n.memoizedState),(H=Oa||Sg(n,r,H,o,le,ie,E))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=E,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,lf(t,n),E=n.memoizedProps,ve=yr(r,E),f.props=ve,Ee=n.pendingProps,le=f.context,ie=r.contextType,H=Jr,typeof ie=="object"&&ie!==null&&(H=wn(ie)),A=r.getDerivedStateFromProps,(ie=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==Ee||le!==H)&&Eg(n,f,o,H),Oa=!1,le=n.memoizedState,f.state=le,Mo(n,o,f,u),yo();var de=n.memoizedState;E!==Ee||le!==de||Oa||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof A=="function"&&(Nf(n,r,A,o),de=n.memoizedState),(ve=Oa||Sg(n,r,ve,o,le,de,H)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,de,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,de,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),f.props=o,f.state=de,f.context=H,o=ve):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,$l(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Sr(n,t.child,null,u),n.child=Sr(n,null,r,u)):Dn(t,n,r,u),n.memoizedState=f.state,t=n.child):t=oa(t,n,u),t}function Pg(t,n,r,o){return pr(),n.flags|=256,Dn(t,n,r,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(t){return{baseLanes:t,cachePool:bm()}}function Bf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ai),t}function Fg(t,n,r){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,E;if((E=f)||(E=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?Fa(n):Ba(),(t=Kt)?(t=Y0(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},r=gm(t),r.return=n,n.child=r,Cn=n,Kt=null)):t=null,t===null)throw Ua(n);return Sh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ba(),u=n.mode,A=ec({mode:"hidden",children:A},u),o=dr(o,u,r,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Ff(r),o.childLanes=Bf(t,E,r),n.memoizedState=Pf,Co(null,o)):(Fa(n),zf(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=Hf(t,n,r)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),A=o.fallback,u=n.mode,o=ec({mode:"visible",children:o.children},u),A=dr(A,u,r,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Sr(n,t.child,null,r),o=n.child,o.memoizedState=Ff(r),o.childLanes=Bf(t,E,r),n.memoizedState=Pf,n=Co(null,o));else if(Fa(n),Sh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var ie=E.dgst;E=ie,o=Error(s(419)),o.stack="",o.digest=E,go({value:o,source:null,stack:null}),n=Hf(t,n,r)}else if(fn||ts(t,n,r,!1),E=(r&t.childLanes)!==0,fn||E){if(E=jt,E!==null&&(o=Hr(E,r),o!==0&&o!==H.retryLane))throw H.retryLane=o,hr(t,o),Zn(E,t,o),Of;xh(A)||cc(),n=Hf(t,n,r)}else xh(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Kt=Ei(A.nextSibling),Cn=n,Rt=!0,Na=null,xi=!1,t!==null&&xm(n,t),n=zf(n,o.children),n.flags|=4096);return n}return u?(Ba(),A=o.fallback,u=n.mode,H=t.child,ie=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?A=ta(ie,A):(A=dr(A,u,r,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Co(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Ff(r):(u=A.cachePool,u!==null?(H=cn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=bm(),A={baseLanes:A.baseLanes|r,cachePool:u}),o.memoizedState=A,o.childLanes=Bf(t,E,r),n.memoizedState=Pf,Co(t.child,o)):(Fa(n),r=t.child,t=r.sibling,r=ta(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=r,n.memoizedState=null,r)}function zf(t,n){return n=ec({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ec(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function Hf(t,n,r){return Sr(n,t.child,null,r),t=zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ef(t.return,n,r)}function Gf(t,n,r,o,u,f){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:f}:(E.isBackwards=n,E.rendering=null,E.renderingStartTime=0,E.last=o,E.tail=r,E.tailMode=u,E.treeForkCount=f)}function zg(t,n,r){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var E=sn.current,A=(E&2)!==0;if(A?(E=E&1|2,n.flags|=128):E&=1,ue(sn,E),Dn(t,n,o,r),o=Rt?mo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,r,n);else if(t.tag===19)Bg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Vl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Gf(n,!1,u,r,f,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Vl(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Gf(n,!0,r,null,f,o);break;case"together":Gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(ts(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=ta(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=ta(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function JE(t,n,r){switch(n.tag){case 3:Q(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),pr();break;case 27:case 5:Se(n);break;case 4:Q(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,df(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Fg(t,n,r):(Fa(n),t=oa(t,n,r),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(ts(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return zg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ue(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Ng(t,n,r,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return oa(t,n,r)}function Hg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Vf(t,r)&&(n.flags&128)===0)return fn=!1,JE(t,n,r);fn=(t.flags&131072)!==0}else fn=!1,Rt&&(n.flags&1048576)!==0&&_m(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")Wu(t)?(o=yr(t,o),n.tag=1,n=Ig(null,n,t,o,r)):(n.tag=0,n=If(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Cg(null,n,t,o,r);break e}else if(u===P){n.tag=14,n=wg(null,n,t,o,r);break e}}throw n=ce(t)||t,Error(s(306,n,""))}}return n;case 0:return If(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=yr(o,n.pendingProps),Ig(t,n,o,u,r);case 3:e:{if(Q(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,lf(t,n),Mo(n,o,null,r);var E=n.memoizedState;if(o=E.cache,La(n,cn,o),o!==f.cache&&tf(n,[cn],r,!0),yo(),o=E.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pg(t,n,o,r);break e}else if(o!==u){u=gi(Error(s(424)),n),go(u),n=Pg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Ei(t.firstChild),Cn=n,Rt=!0,Na=null,xi=!0,r=Nm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(pr(),o===u){n=oa(t,n,r);break e}Dn(t,n,o,r)}n=n.child}return n;case 26:return $l(t,n),t===null?(r=J0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Rt||(r=n.type,t=n.pendingProps,o=gc(Z.current).createElement(r),o[ln]=n,o[yn]=t,Nn(o,r,t),R(o),n.stateNode=o):n.memoizedState=J0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Se(n),t===null&&Rt&&(o=n.stateNode=q0(n.type,n.pendingProps,Z.current),Cn=n,xi=!0,u=Kt,Wa(n.type)?(Eh=u,Kt=Ei(o.firstChild)):Kt=u),Dn(t,n,n.pendingProps.children,r),$l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=o=Kt)&&(o=Ry(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Cn=n,Kt=Ei(o.firstChild),xi=!1,u=!0):u=!1),u||Ua(n)),Se(n),u=n.type,f=n.pendingProps,E=t!==null?t.memoizedProps:null,o=f.children,gh(u,f)?o=null:E!==null&&gh(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=mf(t,n,VE,null,null,r),Xo._currentValue=u),$l(t,n),Dn(t,n,o,r),n.child;case 6:return t===null&&Rt&&((t=r=Kt)&&(r=Cy(r,n.pendingProps,xi),r!==null?(n.stateNode=r,Cn=n,Kt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Fg(t,n,r);case 4:return Q(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Sr(n,null,o,r):Dn(t,n,o,r),n.child;case 11:return Cg(t,n,n.type,n.pendingProps,r);case 7:return Dn(t,n,n.pendingProps,r),n.child;case 8:return Dn(t,n,n.pendingProps.children,r),n.child;case 12:return Dn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Dn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=wn(u),o=o(u),n.flags|=1,Dn(t,n,o,r),n.child;case 14:return wg(t,n,n.type,n.pendingProps,r);case 15:return Dg(t,n,n.type,n.pendingProps,r);case 19:return zg(t,n,r);case 31:return KE(t,n,r);case 22:return Ng(t,n,r,n.pendingProps);case 24:return gr(n),o=wn(cn),t===null?(u=rf(),u===null&&(u=jt,f=nf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:o,cache:u},of(n),La(n,cn,u)):((t.lanes&r)!==0&&(lf(t,n),Mo(n,null,null,r),yo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=f.cache,La(n,cn,o),o!==u.cache&&tf(n,[cn],r,!0))),Dn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function Xf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(d0())t.flags|=8192;else throw xr=Bl,sf}else t.flags&=-16777217}function Gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nv(n))if(d0())t.flags|=8192;else throw xr=Bl,sf}function tc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bt():536870912,t.lanes|=n,ds|=n)}function wo(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function QE(t,n,r){var o=n.pendingProps;switch(Ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(cn),be(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(es(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),Jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(la(n),f!==null?(Jt(n),Gg(n,f)):(Jt(n),Xf(n,u,null,o,r))):f?f!==t.memoizedState?(la(n),Jt(n),Gg(n,f)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),Jt(n),Xf(n,u,t,o,r)),null;case 27:if(Le(n),r=Z.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}t=_e.current,es(n)?Sm(n):(t=q0(u,o,r),n.stateNode=t,la(n))}return Jt(n),null;case 5:if(Le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Jt(n),null}if(f=_e.current,es(n))Sm(n);else{var E=gc(Z.current);switch(f){case 1:f=E.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=E.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=E.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=E.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=E.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?E.createElement("select",{is:o.is}):E.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?E.createElement(u,{is:o.is}):E.createElement(u)}}f[ln]=n,f[yn]=o;e:for(E=n.child;E!==null;){if(E.tag===5||E.tag===6)f.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===n)break e;for(;E.sibling===null;){if(E.return===null||E.return===n)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}n.stateNode=f;e:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return Jt(n),Xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Z.current,es(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||F0(t.nodeValue,r)),t||Ua(n,!0)}else t=gc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Jt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else r=Qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),tc(n,n.updateQueue),Jt(n),null);case 4:return be(),t===null&&fh(n.stateNode.containerInfo),Jt(n),null;case 10:return aa(n.type),Jt(n),null;case 19:if(W(sn),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)wo(o,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Vl(t),f!==null){for(n.flags|=128,wo(o,!1),t=f.updateQueue,n.updateQueue=t,tc(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)mm(r,t),r=r.sibling;return ue(sn,sn.current&1|2),Rt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&v()>sc&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Vl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,tc(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Rt)return Jt(n),null}else 2*v()-o.renderingStartTime>sc&&r!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=v(),t.sibling=null,r=sn.current,ue(sn,u?r&1|2:r&1),Rt&&na(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ni(n),hf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),r=n.updateQueue,r!==null&&tc(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&W(vr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),aa(cn),Jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $E(t,n){switch(Ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(cn),be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(sn),null;case 4:return be(),null;case 10:return aa(n.type),null;case 22:case 23:return ni(n),hf(),t!==null&&W(vr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(cn),null;case 25:return null;default:return null}}function Vg(t,n){switch(Ku(n),n.tag){case 3:aa(cn),be();break;case 26:case 27:case 5:Le(n);break;case 4:be();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:W(sn);break;case 10:aa(n.type);break;case 22:case 23:ni(n),hf(),t!==null&&W(vr);break;case 24:aa(cn)}}function Do(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var f=r.create,E=r.inst;o=f(),E.destroy=o}r=r.next}while(r!==u)}}catch(A){Gt(n,n.return,A)}}function za(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var E=o.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,u=n;var H=r,ie=A;try{ie()}catch(ve){Gt(u,H,ve)}}}o=o.next}while(o!==f)}}catch(ve){Gt(n,n.return,ve)}}function Xg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Lm(n,r)}catch(o){Gt(t,t.return,o)}}}function kg(t,n,r){r.props=yr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Gt(t,n,o)}}function No(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Gt(t,n,u)}}function Xi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Gt(t,n,u)}else r.current=null}function Yg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Gt(t,t.return,u)}}function kf(t,n,r){try{var o=t.stateNode;Ey(o,t.type,r,n),o[yn]=n}catch(u){Gt(t,t.return,u)}}function Wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Wa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Wf(t,n,r),t=t.sibling;t!==null;)Wf(t,n,r),t=t.sibling}function nc(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(nc(t,n,r),t=t.sibling;t!==null;)nc(t,n,r),t=t.sibling}function jg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,r),n[ln]=t,n[yn]=r}catch(f){Gt(t,t.return,f)}}var ca=!1,hn=!1,jf=!1,qg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function ey(t,n){if(t=t.containerInfo,ph=Mc,t=sm(t),zu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var E=0,A=-1,H=-1,ie=0,ve=0,Ee=t,le=null;t:for(;;){for(var de;Ee!==r||u!==0&&Ee.nodeType!==3||(A=E+u),Ee!==f||o!==0&&Ee.nodeType!==3||(H=E+o),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(de=Ee.firstChild)!==null;)le=Ee,Ee=de;for(;;){if(Ee===t)break t;if(le===r&&++ie===u&&(A=E),le===f&&++ve===o&&(H=E),(de=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=de}r=A===-1||H===-1?null:{start:A,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(mh={focusedElem:t,selectionRange:r},Mc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var je=yr(r.type,u);t=o.getSnapshotBeforeUpdate(je,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Gt(r,r.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)_h(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_h(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function Zg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:fa(t,r),o&4&&Do(5,r);break;case 1:if(fa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(E){Gt(r,r.return,E)}else{var u=yr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Gt(r,r.return,E)}}o&64&&Xg(r),o&512&&No(r,r.return);break;case 3:if(fa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Lm(t,n)}catch(E){Gt(r,r.return,E)}}break;case 27:n===null&&o&4&&jg(r);case 26:case 5:fa(t,r),n===null&&o&4&&Yg(r),o&512&&No(r,r.return);break;case 12:fa(t,r);break;case 31:fa(t,r),o&4&&Qg(t,r);break;case 13:fa(t,r),o&4&&$g(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=cy.bind(null,r),wy(t,r))));break;case 22:if(o=r.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||hn,u=ca;var f=hn;ca=o,(hn=n)&&!f?ha(t,r,(r.subtreeFlags&8772)!==0):fa(t,r),ca=u,hn=f}break;case 30:break;default:fa(t,r)}}function Kg(t){var n=t.alternate;n!==null&&(t.alternate=null,Kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ao(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Yn=!1;function ua(t,n,r){for(r=r.child;r!==null;)Jg(t,n,r),r=r.sibling}function Jg(t,n,r){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ce,r)}catch{}switch(r.tag){case 26:hn||Xi(r,n),ua(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||Xi(r,n);var o=en,u=Yn;Wa(r.type)&&(en=r.stateNode,Yn=!1),ua(t,n,r),Ho(r.stateNode),en=o,Yn=u;break;case 5:hn||Xi(r,n);case 6:if(o=en,u=Yn,en=null,ua(t,n,r),en=o,Yn=u,en!==null)if(Yn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(f){Gt(r,n,f)}else try{en.removeChild(r.stateNode)}catch(f){Gt(r,n,f)}break;case 18:en!==null&&(Yn?(t=en,X0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Es(t)):X0(en,r.stateNode));break;case 4:o=en,u=Yn,en=r.stateNode.containerInfo,Yn=!0,ua(t,n,r),en=o,Yn=u;break;case 0:case 11:case 14:case 15:za(2,r,n),hn||za(4,r,n),ua(t,n,r);break;case 1:hn||(Xi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&kg(r,n,o)),ua(t,n,r);break;case 21:ua(t,n,r);break;case 22:hn=(o=hn)||r.memoizedState!==null,ua(t,n,r),hn=o;break;default:ua(t,n,r)}}function Qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(r){Gt(n,n.return,r)}}}function $g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(r){Gt(n,n.return,r)}}function ty(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new qg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new qg),n;default:throw Error(s(435,t.tag))}}function ic(t,n){var r=ty(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=uy.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],f=t,E=n,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){en=A.stateNode,Yn=!1;break e}break;case 5:en=A.stateNode,Yn=!1;break e;case 3:case 4:en=A.stateNode.containerInfo,Yn=!0;break e}A=A.return}if(en===null)throw Error(s(160));Jg(f,E,u),en=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e0(n,t),n=n.sibling}var Di=null;function e0(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),jn(t),o&4&&(za(3,t,t.return),Do(3,t),za(5,t,t.return));break;case 1:Wn(n,t),jn(t),o&512&&(hn||r===null||Xi(r,r.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Di;if(Wn(n,t),jn(t),o&512&&(hn||r===null||Xi(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[or]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,r),f[ln]=t,R(f),o=f;break e;case"link":var E=ev("link","href",u).get(o+(r.href||""));if(E){for(var A=0;A<E.length;A++)if(f=E[A],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(A,1);break t}}f=u.createElement(o),Nn(f,o,r),u.head.appendChild(f);break;case"meta":if(E=ev("meta","content",u).get(o+(r.content||""))){for(A=0;A<E.length;A++)if(f=E[A],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(A,1);break t}}f=u.createElement(o),Nn(f,o,r),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=t,R(f),o=f}t.stateNode=o}else tv(u,t.type,t.stateNode);else t.stateNode=$0(u,o,t.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?tv(u,t.type,t.stateNode):$0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&kf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Wn(n,t),jn(t),o&512&&(hn||r===null||Xi(r,r.return)),r!==null&&o&4&&kf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Wn(n,t),jn(t),o&512&&(hn||r===null||Xi(r,r.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(je){Gt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,kf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(jf=!0);break;case 6:if(Wn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(je){Gt(t,t.return,je)}}break;case 3:if(xc=null,u=Di,Di=vc(n.containerInfo),Wn(n,t),Di=u,jn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(je){Gt(t,t.return,je)}jf&&(jf=!1,t0(t));break;case 4:o=Di,Di=vc(t.stateNode.containerInfo),Wn(n,t),jn(t),Di=o;break;case 12:Wn(n,t),jn(t);break;case 31:Wn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 13:Wn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(rc=v()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 22:u=t.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,ie=ca,ve=hn;if(ca=ie||u,hn=ve||H,Wn(n,t),hn=ve,ca=ie,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||H||ca||hn||Mr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){H=r=n;try{if(f=H.stateNode,u)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=H.stateNode;var Ee=H.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;A.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(je){Gt(H,H.return,je)}}}else if(n.tag===6){if(r===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){Gt(H,H.return,je)}}}else if(n.tag===18){if(r===null){H=n;try{var de=H.stateNode;u?k0(de,!0):k0(H.stateNode,!1)}catch(je){Gt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,ic(t,r))));break;case 19:Wn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Wg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,f=Yf(t);nc(t,f,u);break;case 5:var E=r.stateNode;r.flags&32&&(mn(E,""),r.flags&=-33);var A=Yf(t);nc(t,A,E);break;case 3:case 4:var H=r.stateNode.containerInfo,ie=Yf(t);Wf(t,ie,H);break;default:throw Error(s(161))}}catch(ve){Gt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zg(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Mr(n);break;case 1:Xi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&kg(n,n.return,r),Mr(n);break;case 27:Ho(n.stateNode);case 26:case 5:Xi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function ha(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,E=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,r),Do(4,f);break;case 1:if(ha(u,f,r),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Gt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Um(H[u],A)}catch(ie){Gt(o,o.return,ie)}}r&&E&64&&Xg(f),No(f,f.return);break;case 27:jg(f);case 26:case 5:ha(u,f,r),r&&o===null&&E&4&&Yg(f),No(f,f.return);break;case 12:ha(u,f,r);break;case 31:ha(u,f,r),r&&E&4&&Qg(u,f);break;case 13:ha(u,f,r),r&&E&4&&$g(u,f);break;case 22:f.memoizedState===null&&ha(u,f,r),No(f,f.return);break;case 30:break;default:ha(u,f,r)}n=n.sibling}}function qf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&vo(r))}function Zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t))}function Ni(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n0(t,n,r,o),n=n.sibling}function n0(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,r,o),u&2048&&Do(9,n);break;case 1:Ni(t,n,r,o);break;case 3:Ni(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t)));break;case 12:if(u&2048){Ni(t,n,r,o),t=n.stateNode;try{var f=n.memoizedProps,E=f.id,A=f.onPostCommit;typeof A=="function"&&A(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Gt(n,n.return,H)}}else Ni(t,n,r,o);break;case 31:Ni(t,n,r,o);break;case 13:Ni(t,n,r,o);break;case 23:break;case 22:f=n.stateNode,E=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,r,o):Uo(t,n):f._visibility&2?Ni(t,n,r,o):(f._visibility|=2,us(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&qf(E,n);break;case 24:Ni(t,n,r,o),u&2048&&Zf(n.alternate,n);break;default:Ni(t,n,r,o)}}function us(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,E=n,A=r,H=o,ie=E.flags;switch(E.tag){case 0:case 11:case 15:us(f,E,A,H,u),Do(8,E);break;case 23:break;case 22:var ve=E.stateNode;E.memoizedState!==null?ve._visibility&2?us(f,E,A,H,u):Uo(f,E):(ve._visibility|=2,us(f,E,A,H,u)),u&&ie&2048&&qf(E.alternate,E);break;case 24:us(f,E,A,H,u),u&&ie&2048&&Zf(E.alternate,E);break;default:us(f,E,A,H,u)}n=n.sibling}}function Uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Uo(r,o),u&2048&&qf(o.alternate,o);break;case 24:Uo(r,o),u&2048&&Zf(o.alternate,o);break;default:Uo(r,o)}n=n.sibling}}var Lo=8192;function fs(t,n,r){if(t.subtreeFlags&Lo)for(t=t.child;t!==null;)i0(t,n,r),t=t.sibling}function i0(t,n,r){switch(t.tag){case 26:fs(t,n,r),t.flags&Lo&&t.memoizedState!==null&&Gy(r,Di,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,r);break;case 3:case 4:var o=Di;Di=vc(t.stateNode.containerInfo),fs(t,n,r),Di=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,fs(t,n,r),Lo=o):fs(t,n,r));break;default:fs(t,n,r)}}function a0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];xn=o,s0(o,t)}a0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r0(t),t=t.sibling}function r0(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&za(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ac(t)):Oo(t);break;default:Oo(t)}}function ac(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];xn=o,s0(o,t)}a0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),ac(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,ac(n));break;default:ac(n)}t=t.sibling}}function s0(t,n){for(;xn!==null;){var r=xn;switch(r.tag){case 0:case 11:case 15:za(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,xn=o;else e:for(r=t;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(Kg(o),o===r){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var ny={getCacheForType:function(t){var n=wn(cn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return wn(cn).controller.signal}},iy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,jt=null,St=null,Mt=0,Ht=0,ii=null,Ha=!1,hs=!1,Kf=!1,da=0,rn=0,Ga=0,Tr=0,Jf=0,ai=0,ds=0,Io=null,qn=null,Qf=!1,rc=0,o0=0,sc=1/0,oc=null,Va=null,gn=0,Xa=null,ps=null,pa=0,$f=0,eh=null,l0=null,Po=0,th=null;function ri(){return(Pt&2)!==0&&Mt!==0?Mt&-Mt:L.T!==null?oh():no()}function c0(){if(ai===0)if((Mt&536870912)===0||Rt){var t=De;De<<=1,(De&3932160)===0&&(De=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function Zn(t,n,r){(t===jt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(ms(t,0),ka(t,Mt,ai,!1)),On(t,r),((Pt&2)===0||t!==jt)&&(t===jt&&((Pt&2)===0&&(Tr|=r),rn===4&&ka(t,Mt,ai,!1)),ki(t))}function u0(t,n,r){if((Pt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?sy(t,n):ih(t,n,!0),f=o;do{if(u===0){hs&&!o&&ka(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!ay(r)){u=ih(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var A=t;u=Io;var H=A.current.memoizedState.isDehydrated;if(H&&(ms(A,E).flags|=256),E=ih(A,E,!1),E!==2){if(Kf&&!H){A.errorRecoveryDisabledLanes|=f,Tr|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=E}if(f=!1,u!==2)continue}}if(u===1){ms(t,0),ka(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ai,!Ha);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=rc+300-v(),10<u)){if(ka(o,n,ai,!Ha),ye(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=G0(f0.bind(null,o,r,qn,oc,Qf,n,ai,Tr,ds,Ha,f,"Throttled",-0,0),u);break e}f0(o,r,qn,oc,Qf,n,ai,Tr,ds,Ha,f,null,-0,0)}}break}while(!0);ki(t)}function f0(t,n,r,o,u,f,E,A,H,ie,ve,Ee,le,de){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},i0(n,f,Ee);var je=(f&62914560)===f?rc-v():(f&4194048)===f?o0-v():0;if(je=Vy(Ee,je),je!==null){pa=f,t.cancelPendingCommit=je(x0.bind(null,t,n,f,r,o,u,E,A,H,ve,Ee,null,le,de)),ka(t,f,E,!ie);return}}x0(t,n,f,r,o,u,E,A,H)}function ay(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,r,o){n&=~Jf,n&=~Tr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),E=1<<f;o[f]=-1,u&=~E}r!==0&&xl(t,r,n)}function lc(){return(Pt&6)===0?(Fo(0),!1):!0}function nh(){if(St!==null){if(Ht===0)var t=St.return;else t=St,ia=mr=null,_f(t),rs=null,xo=0,t=St;for(;t!==null;)Vg(t.alternate,t),t=t.return;St=null}}function ms(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Ty(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),pa=0,nh(),jt=t,St=r=ta(t.current,null),Mt=n,Ht=0,ii=null,Ha=!1,hs=Ue(t,n),Kf=!1,ds=ai=Jf=Tr=Ga=rn=0,qn=Io=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return da=n,wl(),r}function h0(t,n){pt=null,L.H=Ro,n===as||n===Fl?(n=Cm(),Ht=3):n===sf?(n=Cm(),Ht=4):Ht=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,St===null&&(rn=1,Jl(t,gi(n,t.current)))}function d0(){var t=ti.current;return t===null?!0:(Mt&4194048)===Mt?Si===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===Si:!1}function p0(){var t=L.H;return L.H=Ro,t===null?Ro:t}function m0(){var t=L.A;return L.A=ny,t}function cc(){rn=4,Ha||(Mt&4194048)!==Mt&&ti.current!==null||(hs=!0),(Ga&134217727)===0&&(Tr&134217727)===0||jt===null||ka(jt,Mt,ai,!1)}function ih(t,n,r){var o=Pt;Pt|=2;var u=p0(),f=m0();(jt!==t||Mt!==n)&&(oc=null,ms(t,n)),n=!1;var E=rn;e:do try{if(Ht!==0&&St!==null){var A=St,H=ii;switch(Ht){case 8:nh(),E=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ie=Ht;if(Ht=0,ii=null,gs(t,A,H,ie),r&&hs){E=0;break e}break;default:ie=Ht,Ht=0,ii=null,gs(t,A,H,ie)}}ry(),E=rn;break}catch(ve){h0(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ia=mr=null,Pt=o,L.H=u,L.A=f,St===null&&(jt=null,Mt=0,wl()),E}function ry(){for(;St!==null;)g0(St)}function sy(t,n){var r=Pt;Pt|=2;var o=p0(),u=m0();jt!==t||Mt!==n?(oc=null,sc=v()+500,ms(t,n)):hs=Ue(t,n);e:do try{if(Ht!==0&&St!==null){n=St;var f=ii;t:switch(Ht){case 1:Ht=0,ii=null,gs(t,n,f,1);break;case 2:case 9:if(Am(f)){Ht=0,ii=null,v0(n);break}n=function(){Ht!==2&&Ht!==9||jt!==t||(Ht=7),ki(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Am(f)?(Ht=0,ii=null,v0(n)):(Ht=0,ii=null,gs(t,n,f,7));break;case 5:var E=null;switch(St.tag){case 26:E=St.memoizedState;case 5:case 27:var A=St;if(E?nv(E):A.stateNode.complete){Ht=0,ii=null;var H=A.sibling;if(H!==null)St=H;else{var ie=A.return;ie!==null?(St=ie,uc(ie)):St=null}break t}}Ht=0,ii=null,gs(t,n,f,5);break;case 6:Ht=0,ii=null,gs(t,n,f,6);break;case 8:nh(),rn=6;break e;default:throw Error(s(462))}}oy();break}catch(ve){h0(t,ve)}while(!0);return ia=mr=null,L.H=o,L.A=u,Pt=r,St!==null?0:(jt=null,Mt=0,wl(),rn)}function oy(){for(;St!==null&&!Ye();)g0(St)}function g0(t){var n=Hg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?uc(t):St=n}function v0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Og(r,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Og(r,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:_f(n);default:Vg(r,n),n=St=mm(n,da),n=Hg(r,n,da)}t.memoizedProps=t.pendingProps,n===null?uc(t):St=n}function gs(t,n,r,o){ia=mr=null,_f(n),rs=null,xo=0;var u=n.return;try{if(ZE(t,u,n,r,Mt)){rn=1,Jl(t,gi(r,t.current)),St=null;return}}catch(f){if(u!==null)throw St=u,f;rn=1,Jl(t,gi(r,t.current)),St=null;return}n.flags&32768?(Rt||o===1?t=!0:hs||(Mt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),_0(n,t)):uc(n)}function uc(t){var n=t;do{if((n.flags&32768)!==0){_0(n,Ha);return}t=n.return;var r=QE(n.alternate,n,da);if(r!==null){St=r;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);rn===0&&(rn=5)}function _0(t,n){do{var r=$E(t.alternate,t);if(r!==null){r.flags&=32767,St=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=r}while(t!==null);rn=6,St=null}function x0(t,n,r,o,u,f,E,A,H){t.cancelPendingCommit=null;do fc();while(gn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ku,Ai(t,r,f,E,A,H),t===jt&&(St=jt=null,Mt=0),ps=n,Xa=t,pa=r,$f=f,eh=u,l0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fy(fe,function(){return T0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=G.p,G.p=2,E=Pt,Pt|=4;try{ey(t,n,r)}finally{Pt=E,G.p=u,L.T=o}}gn=1,S0(),E0(),y0()}}function S0(){if(gn===1){gn=0;var t=Xa,n=ps,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{e0(n,t);var f=mh,E=sm(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(E!==A&&A&&A.ownerDocument&&rm(A.ownerDocument.documentElement,A)){if(H!==null&&zu(A)){var ie=H.start,ve=H.end;if(ve===void 0&&(ve=ie),"selectionStart"in A)A.selectionStart=ie,A.selectionEnd=Math.min(ve,A.value.length);else{var Ee=A.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var de=le.getSelection(),je=A.textContent.length,ot=Math.min(H.start,je),Yt=H.end===void 0?ot:Math.min(H.end,je);!de.extend&&ot>Yt&&(E=Yt,Yt=ot,ot=E);var q=am(A,ot),k=am(A,Yt);if(q&&k&&(de.rangeCount!==1||de.anchorNode!==q.node||de.anchorOffset!==q.offset||de.focusNode!==k.node||de.focusOffset!==k.offset)){var ne=Ee.createRange();ne.setStart(q.node,q.offset),de.removeAllRanges(),ot>Yt?(de.addRange(ne),de.extend(k.node,k.offset)):(ne.setEnd(k.node,k.offset),de.addRange(ne))}}}}for(Ee=[],de=A;de=de.parentNode;)de.nodeType===1&&Ee.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Ee.length;A++){var xe=Ee[A];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Mc=!!ph,mh=ph=null}finally{Pt=u,G.p=o,L.T=r}}t.current=n,gn=2}}function E0(){if(gn===2){gn=0;var t=Xa,n=ps,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=L.T,L.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{Zg(t,n.alternate,n)}finally{Pt=u,G.p=o,L.T=r}}gn=3}}function y0(){if(gn===4||gn===3){gn=0,D();var t=Xa,n=ps,r=pa,o=l0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,ps=Xa=null,M0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Gr(r),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=G.p,G.p=2,L.T=null;try{for(var f=t.onRecoverableError,E=0;E<o.length;E++){var A=o[E];f(A.value,{componentStack:A.stack})}}finally{L.T=n,G.p=u}}(pa&3)!==0&&fc(),ki(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===th?Po++:(Po=0,th=t):Po=0,Fo(0)}}function M0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,vo(n)))}function fc(){return S0(),E0(),y0(),T0()}function T0(){if(gn!==5)return!1;var t=Xa,n=$f;$f=0;var r=Gr(pa),o=L.T,u=G.p;try{G.p=32>r?32:r,L.T=null,r=eh,eh=null;var f=Xa,E=pa;if(gn=0,ps=Xa=null,pa=0,(Pt&6)!==0)throw Error(s(331));var A=Pt;if(Pt|=4,r0(f.current),n0(f,f.current,E,r),Pt=A,Fo(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ce,f)}catch{}return!0}finally{G.p=u,L.T=o,M0(t,n)}}function b0(t,n,r){n=gi(r,n),n=Lf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(On(t,2),ki(t))}function Gt(t,n,r){if(t.tag===3)b0(t,t,r);else for(;n!==null;){if(n.tag===3){b0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=gi(r,t),r=Ag(2),o=Pa(n,r,2),o!==null&&(Rg(r,o,n,t),On(o,2),ki(o));break}}n=n.return}}function ah(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new iy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Kf=!0,u.add(r),t=ly.bind(null,t,n,r),n.then(t,t))}function ly(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,jt===t&&(Mt&r)===r&&(rn===4||rn===3&&(Mt&62914560)===Mt&&300>v()-rc?(Pt&2)===0&&ms(t,0):Jf|=r,ds===Mt&&(ds=0)),ki(t)}function A0(t,n){n===0&&(n=Bt()),t=hr(t,n),t!==null&&(On(t,n),ki(t))}function cy(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),A0(t,r)}function uy(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),A0(t,r)}function fy(t,n){return mt(t,n)}var hc=null,vs=null,rh=!1,dc=!1,sh=!1,Ya=0;function ki(t){t!==vs&&t.next===null&&(vs===null?hc=vs=t:vs=vs.next=t),dc=!0,rh||(rh=!0,dy())}function Fo(t,n){if(!sh&&dc){sh=!0;do for(var r=!1,o=hc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var E=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(E&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,D0(o,f))}else f=Mt,f=ye(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(r=!0,D0(o,f));o=o.next}while(r);sh=!1}}function hy(){R0()}function R0(){dc=rh=!1;var t=0;Ya!==0&&My()&&(t=Ya);for(var n=v(),r=null,o=hc;o!==null;){var u=o.next,f=C0(o,n);f===0?(o.next=null,r===null?hc=u:r.next=u,u===null&&(vs=r)):(r=o,(t!==0||(f&3)!==0)&&(dc=!0)),o=u}gn!==0&&gn!==5||Fo(t),Ya!==0&&(Ya=0)}function C0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var E=31-ze(f),A=1<<E,H=u[E];H===-1?((A&r)===0||(A&o)!==0)&&(u[E]=ft(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=jt,r=Mt,r=ye(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&yt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ue(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&yt(o),Gr(r)){case 2:case 8:r=pe;break;case 32:r=fe;break;case 268435456:r=Ne;break;default:r=fe}return o=w0.bind(null,t),r=mt(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&yt(o),t.callbackPriority=2,t.callbackNode=null,2}function w0(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(fc()&&t.callbackNode!==r)return null;var o=Mt;return o=ye(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(u0(t,o,n),C0(t,v()),t.callbackNode!=null&&t.callbackNode===r?w0.bind(null,t):null)}function D0(t,n){if(fc())return null;u0(t,n,!0)}function dy(){by(function(){(Pt&6)!==0?mt(J,hy):R0()})}function oh(){if(Ya===0){var t=ns;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),Ya=t}return Ya}function N0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(""+t)}function U0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function py(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var f=N0((u[yn]||null).action),E=o.submitter;E&&(n=(n=E[yn]||null)?N0(n.formAction):E.getAttribute("formAction"),n!==null&&(f=n,E=null));var A=new bl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var H=E?U0(u,E):new FormData(u);Rf(r,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=E?U0(u,E):new FormData(u),Rf(r,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var lh=0;lh<Xu.length;lh++){var ch=Xu[lh],my=ch.toLowerCase(),gy=ch[0].toUpperCase()+ch.slice(1);wi(my,"on"+gy)}wi(cm,"onAnimationEnd"),wi(um,"onAnimationIteration"),wi(fm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(UE,"onTransitionRun"),wi(LE,"onTransitionStart"),wi(OE,"onTransitionCancel"),wi(hm,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function L0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var E=o.length-1;0<=E;E--){var A=o[E],H=A.instance,ie=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ie;try{f(u)}catch(ve){Cl(ve)}u.currentTarget=null,f=H}else for(E=0;E<o.length;E++){if(A=o[E],H=A.instance,ie=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ie;try{f(u)}catch(ve){Cl(ve)}u.currentTarget=null,f=H}}}}function Et(t,n){var r=n[Vr];r===void 0&&(r=n[Vr]=new Set);var o=t+"__bubble";r.has(o)||(O0(n,t,2,!1),r.add(o))}function uh(t,n,r){var o=0;n&&(o|=4),O0(r,t,o,n)}var pc="_reactListening"+Math.random().toString(36).slice(2);function fh(t){if(!t[pc]){t[pc]=!0,j.forEach(function(r){r!=="selectionchange"&&(vy.has(r)||uh(r,!1,t),uh(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[pc]||(n[pc]=!0,uh("selectionchange",!1,n))}}function O0(t,n,r,o){switch(cv(n)){case 2:var u=Yy;break;case 8:u=Wy;break;default:u=Ah}r=u.bind(null,n,r,t),u=void 0,!Du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function hh(t,n,r,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var A=o.stateNode.containerInfo;if(A===u)break;if(E===4)for(E=o.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;A!==null;){if(E=Aa(A),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){o=f=E;continue e}A=A.parentNode}}o=o.return}zp(function(){var ie=f,ve=Cu(r),Ee=[];e:{var le=dm.get(t);if(le!==void 0){var de=bl,je=t;switch(t){case"keypress":if(Ml(r)===0)break e;case"keydown":case"keyup":de=uE;break;case"focusin":je="focus",de=Ou;break;case"focusout":je="blur",de=Ou;break;case"beforeblur":case"afterblur":de=Ou;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=QS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=dE;break;case cm:case um:case fm:de=tE;break;case hm:de=mE;break;case"scroll":case"scrollend":de=KS;break;case"wheel":de=vE;break;case"copy":case"cut":case"paste":de=iE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=kp;break;case"toggle":case"beforetoggle":de=xE}var ot=(n&4)!==0,Yt=!ot&&(t==="scroll"||t==="scrollend"),q=ot?le!==null?le+"Capture":null:le;ot=[];for(var k=ie,ne;k!==null;){var xe=k;if(ne=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ne===null||q===null||(xe=ro(k,q),xe!=null&&ot.push(zo(k,xe,ne))),Yt)break;k=k.return}0<ot.length&&(le=new de(le,je,null,r,ve),Ee.push({event:le,listeners:ot}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&r!==Ru&&(je=r.relatedTarget||r.fromElement)&&(Aa(je)||je[Ri]))break e;if((de||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,de?(je=r.relatedTarget||r.toElement,de=ie,je=je?Aa(je):null,je!==null&&(Yt=c(je),ot=je.tag,je!==Yt||ot!==5&&ot!==27&&ot!==6)&&(je=null)):(de=null,je=ie),de!==je)){if(ot=Vp,xe="onMouseLeave",q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(ot=kp,xe="onPointerLeave",q="onPointerEnter",k="pointer"),Yt=de==null?le:lr(de),ne=je==null?le:lr(je),le=new ot(xe,k+"leave",de,r,ve),le.target=Yt,le.relatedTarget=ne,xe=null,Aa(ve)===ie&&(ot=new ot(q,k+"enter",je,r,ve),ot.target=ne,ot.relatedTarget=Yt,xe=ot),Yt=xe,de&&je)t:{for(ot=_y,q=de,k=je,ne=0,xe=q;xe;xe=ot(xe))ne++;xe=0;for(var it=k;it;it=ot(it))xe++;for(;0<ne-xe;)q=ot(q),ne--;for(;0<xe-ne;)k=ot(k),xe--;for(;ne--;){if(q===k||k!==null&&q===k.alternate){ot=q;break t}q=ot(q),k=ot(k)}ot=null}else ot=null;de!==null&&I0(Ee,le,de,ot,!1),je!==null&&Yt!==null&&I0(Ee,Yt,je,ot,!0)}}e:{if(le=ie?lr(ie):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var Ut=Qp;else if(Kp(le))if($p)Ut=wE;else{Ut=RE;var Qe=AE}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&Ci(ie.elementType)&&(Ut=Qp):Ut=CE;if(Ut&&(Ut=Ut(t,ie))){Jp(Ee,Ut,r,ve);break e}Qe&&Qe(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&Tn(le,"number",le.value)}switch(Qe=ie?lr(ie):window,t){case"focusin":(Kp(Qe)||Qe.contentEditable==="true")&&(qr=Qe,Hu=ie,po=null);break;case"focusout":po=Hu=qr=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,om(Ee,r,ve);break;case"selectionchange":if(NE)break;case"keydown":case"keyup":om(Ee,r,ve)}var vt;if(Pu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else jr?qp(t,r)&&(Tt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Tt="onCompositionStart");Tt&&(Yp&&r.locale!=="ko"&&(jr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&jr&&(vt=Hp()):(wa=ve,Nu="value"in wa?wa.value:wa.textContent,jr=!0)),Qe=mc(ie,Tt),0<Qe.length&&(Tt=new Xp(Tt,t,null,r,ve),Ee.push({event:Tt,listeners:Qe}),vt?Tt.data=vt:(vt=Zp(r),vt!==null&&(Tt.data=vt)))),(vt=EE?yE(t,r):ME(t,r))&&(Tt=mc(ie,"onBeforeInput"),0<Tt.length&&(Qe=new Xp("onBeforeInput","beforeinput",null,r,ve),Ee.push({event:Qe,listeners:Tt}),Qe.data=vt)),py(Ee,t,ie,r,ve)}L0(Ee,n)})}function zo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function mc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ro(t,r),u!=null&&o.unshift(zo(t,u,f)),u=ro(t,n),u!=null&&o.push(zo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function _y(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I0(t,n,r,o,u){for(var f=n._reactName,E=[];r!==null&&r!==o;){var A=r,H=A.alternate,ie=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||ie===null||(H=ie,u?(ie=ro(r,f),ie!=null&&E.unshift(zo(r,ie,H))):u||(ie=ro(r,f),ie!=null&&E.push(zo(r,ie,H)))),r=r.return}E.length!==0&&t.push({event:n,listeners:E})}var xy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function P0(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(Sy,"")}function F0(t,n){return n=P0(n),P0(t)===n}function kt(t,n,r,o,u,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(t,""+o);break;case"className":rt(t,"class",o);break;case"tabIndex":rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(t,r,o);break;case"style":kr(t,o,f);break;case"data":if(n!=="object"){rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=El(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=El(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=El(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ke(t,"popover",o);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=qS.get(r)||r,Ke(t,r,o))}}function dh(t,n,r,o,u,f){switch(r){case"style":kr(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?mn(t,o):(typeof o=="number"||typeof o=="bigint")&&mn(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!he.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=t[yn]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Ke(t,r,o)}}}function Nn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var E=r[f];if(E!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,f,E,r,null)}}u&&kt(t,n,"srcSet",r.srcSet,r,null),o&&kt(t,n,"src",r.src,r,null);return;case"input":Et("invalid",t);var A=f=E=u=null,H=null,ie=null;for(o in r)if(r.hasOwnProperty(o)){var ve=r[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":E=ve;break;case"checked":H=ve;break;case"defaultChecked":ie=ve;break;case"value":f=ve;break;case"defaultValue":A=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:kt(t,n,o,ve,r,null)}}Qi(t,f,A,H,ie,E,u,!1);return;case"select":Et("invalid",t),o=E=f=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":E=A;break;case"multiple":o=A;default:kt(t,n,u,A,r,null)}n=f,r=E,t.multiple=!!o,n!=null?pi(t,!!o,n,!1):r!=null&&pi(t,!!o,r,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(E in r)if(r.hasOwnProperty(E)&&(A=r[E],A!=null))switch(E){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:kt(t,n,E,A,r,null)}bn(t,o,u,f);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(o=r[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,H,o,r,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Bo.length;o++)Et(Bo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in r)if(r.hasOwnProperty(ie)&&(o=r[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,ie,o,r,null)}return;default:if(Ci(n)){for(ve in r)r.hasOwnProperty(ve)&&(o=r[ve],o!==void 0&&dh(t,n,ve,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&kt(t,n,A,o,r,null))}function Ey(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,E=null,A=null,H=null,ie=null,ve=null;for(de in r){var Ee=r[de];if(r.hasOwnProperty(de)&&Ee!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":H=Ee;default:o.hasOwnProperty(de)||kt(t,n,de,null,o,Ee)}}for(var le in o){var de=o[le];if(Ee=r[le],o.hasOwnProperty(le)&&(de!=null||Ee!=null))switch(le){case"type":f=de;break;case"name":u=de;break;case"checked":ie=de;break;case"defaultChecked":ve=de;break;case"value":E=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:de!==Ee&&kt(t,n,le,de,o,Ee)}}Mn(t,E,A,H,ie,ve,f,u);return;case"select":de=E=A=le=null;for(f in r)if(H=r[f],r.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":de=H;default:o.hasOwnProperty(f)||kt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=r[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":le=f;break;case"defaultValue":A=f;break;case"multiple":E=f;default:f!==H&&kt(t,n,u,f,o,H)}n=A,r=E,o=de,le!=null?pi(t,!!r,le,!1):!!o!=!!r&&(n!=null?pi(t,!!r,n,!0):pi(t,!!r,r?[]:"",!1));return;case"textarea":de=le=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:kt(t,n,A,null,o,u)}for(E in o)if(u=o[E],f=r[E],o.hasOwnProperty(E)&&(u!=null||f!=null))switch(E){case"value":le=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&kt(t,n,E,u,o,f)}zt(t,le,de);return;case"option":for(var je in r)if(le=r[je],r.hasOwnProperty(je)&&le!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:kt(t,n,je,null,o,le)}for(H in o)if(le=o[H],de=r[H],o.hasOwnProperty(H)&&le!==de&&(le!=null||de!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:kt(t,n,H,le,o,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in r)le=r[ot],r.hasOwnProperty(ot)&&le!=null&&!o.hasOwnProperty(ot)&&kt(t,n,ot,null,o,le);for(ie in o)if(le=o[ie],de=r[ie],o.hasOwnProperty(ie)&&le!==de&&(le!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:kt(t,n,ie,le,o,de)}return;default:if(Ci(n)){for(var Yt in r)le=r[Yt],r.hasOwnProperty(Yt)&&le!==void 0&&!o.hasOwnProperty(Yt)&&dh(t,n,Yt,void 0,o,le);for(ve in o)le=o[ve],de=r[ve],!o.hasOwnProperty(ve)||le===de||le===void 0&&de===void 0||dh(t,n,ve,le,o,de);return}}for(var q in r)le=r[q],r.hasOwnProperty(q)&&le!=null&&!o.hasOwnProperty(q)&&kt(t,n,q,null,o,le);for(Ee in o)le=o[Ee],de=r[Ee],!o.hasOwnProperty(Ee)||le===de||le==null&&de==null||kt(t,n,Ee,le,o,de)}function B0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],f=u.transferSize,E=u.initiatorType,A=u.duration;if(f&&A&&B0(E)){for(E=0,A=u.responseEnd,o+=1;o<r.length;o++){var H=r[o],ie=H.startTime;if(ie>A)break;var ve=H.transferSize,Ee=H.initiatorType;ve&&B0(Ee)&&(H=H.responseEnd,E+=ve*(H<A?1:(A-ie)/(H-ie)))}if(--o,n+=8*(f+E)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ph=null,mh=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function gh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vh=null;function My(){var t=window.event;return t&&t.type==="popstate"?t===vh?!1:(vh=t,!0):(vh=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(Ay)}:G0;function Ay(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function X0(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),Es(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Ho(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ho(r);for(var f=r.firstChild;f;){var E=f.nextSibling,A=f.nodeName;f[or]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=E}}else r==="body"&&Ho(t.ownerDocument.body);r=u}while(r);Es(n)}function k0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function _h(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":_h(r),ao(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Ry(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[or])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function Cy(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ei(t.nextSibling),t===null))return null;return t}function Y0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function xh(t){return t.data==="$?"||t.data==="$~"}function Sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wy(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Eh=null;function W0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Ei(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function j0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function q0(t,n,r){switch(n=gc(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ao(t)}var yi=new Map,Z0=new Set;function vc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=G.d;G.d={f:Dy,r:Ny,D:Uy,C:Ly,L:Oy,m:Iy,X:Fy,S:Py,M:By};function Dy(){var t=ma.f(),n=lc();return t||n}function Ny(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?hg(n):ma.r(t)}var _s=typeof document>"u"?null:document;function K0(t,n,r){var o=_s;if(o&&typeof n=="string"&&n){var u=ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Z0.has(u)||(Z0.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",t),R(n),o.head.appendChild(n)))}}function Uy(t){ma.D(t),K0("dns-prefetch",t,null)}function Ly(t,n){ma.C(t,n),K0("preconnect",t,n)}function Oy(t,n,r){ma.L(t,n,r);var o=_s;if(o&&t&&n){var u='link[rel="preload"][as="'+ht(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+ht(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+ht(r.imageSizes)+'"]')):u+='[href="'+ht(t)+'"]';var f=u;switch(n){case"style":f=xs(t);break;case"script":f=Ss(t)}yi.has(f)||(t=_({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),yi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(f))||n==="script"&&o.querySelector(Vo(f))||(n=o.createElement("link"),Nn(n,"link",t),R(n),o.head.appendChild(n)))}}function Iy(t,n){ma.m(t,n);var r=_s;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ht(o)+'"][href="'+ht(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ss(t)}if(!yi.has(f)&&(t=_({rel:"modulepreload",href:t},n),yi.set(f,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Vo(f)))return}o=r.createElement("link"),Nn(o,"link",t),R(o),r.head.appendChild(o)}}}function Py(t,n,r){ma.S(t,n,r);var o=_s;if(o&&t){var u=Ca(o).hoistableStyles,f=xs(t);n=n||"default";var E=u.get(f);if(!E){var A={loading:0,preload:null};if(E=o.querySelector(Go(f)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},r),(r=yi.get(f))&&yh(t,r);var H=E=o.createElement("link");R(H),Nn(H,"link",t),H._p=new Promise(function(ie,ve){H.onload=ie,H.onerror=ve}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_c(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:A},u.set(f,E)}}}function Fy(t,n){ma.X(t,n);var r=_s;if(r&&t){var o=Ca(r).hoistableScripts,u=Ss(t),f=o.get(u);f||(f=r.querySelector(Vo(u)),f||(t=_({src:t,async:!0},n),(n=yi.get(u))&&Mh(t,n),f=r.createElement("script"),R(f),Nn(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function By(t,n){ma.M(t,n);var r=_s;if(r&&t){var o=Ca(r).hoistableScripts,u=Ss(t),f=o.get(u);f||(f=r.querySelector(Vo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&Mh(t,n),f=r.createElement("script"),R(f),Nn(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function J0(t,n,r,o){var u=(u=Z.current)?vc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=xs(r.href),r=Ca(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=xs(r.href);var f=Ca(u).hoistableStyles,E=f.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,E),(f=u.querySelector(Go(t)))&&!f._p&&(E.instance=f,E.state.loading=5),yi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},yi.set(t,r),f||zy(u,t,r,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(r),r=Ca(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xs(t){return'href="'+ht(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function zy(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",r),R(n),t.head.appendChild(n))}function Ss(t){return'[src="'+ht(t)+'"]'}function Vo(t){return"script[async]"+t}function $0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ht(r.href)+'"]');if(o)return n.instance=o,R(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Nn(o,"style",u),_c(o,r.precedence,t),n.instance=o;case"stylesheet":u=xs(r.href);var f=t.querySelector(Go(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=Q0(r),(u=yi.get(u))&&yh(o,u),f=(t.ownerDocument||t).createElement("link"),R(f);var E=f;return E._p=new Promise(function(A,H){E.onload=A,E.onerror=H}),Nn(f,"link",o),n.state.loading|=4,_c(f,r.precedence,t),n.instance=f;case"script":return f=Ss(r.src),(u=t.querySelector(Vo(f)))?(n.instance=u,R(u),u):(o=r,(u=yi.get(f))&&(o=_({},r),Mh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),R(u),Nn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_c(o,r.precedence,t));return n.instance}function _c(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,E=0;E<o.length;E++){var A=o[E];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var xc=null;function ev(t,n,r){if(xc===null){var o=new Map,u=xc=new Map;u.set(r,o)}else u=xc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var f=r[u];if(!(f[or]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(n)||"";E=t+E;var A=o.get(E);A?A.push(f):o.set(E,[f])}}return o}function tv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Hy(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Gy(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=xs(o.href),f=n.querySelector(Go(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Sc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=f,R(f);return}f=n.ownerDocument||n,o=Q0(o),(u=yi.get(u))&&yh(o,u),f=f.createElement("link"),R(f);var E=f;E._p=new Promise(function(A,H){E.onload=A,E.onerror=H}),Nn(f,"link",o),r.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Sc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Th=0;function Vy(t,n){return t.stylesheets&&t.count===0&&yc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Th===0&&(Th=62500*yy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Th?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ec=null;function yc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ec=new Map,n.forEach(Xy,t),Ec=null,Sc.call(t))}function Xy(t,n){if(!(n.state.loading&4)){var r=Ec.get(t);if(r)var o=r.get(null);else{r=new Map,Ec.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var E=u[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),f=r.get(E)||o,f===o&&r.set(null,u),r.set(E,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Xo={$$typeof:O,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ky(t,n,r,o,u,f,E,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function iv(t,n,r,o,u,f,E,A,H,ie,ve,Ee){return t=new ky(t,n,r,E,H,ie,ve,Ee,A),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=nf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},of(f),t}function av(t){return t?(t=Jr,t):Jr}function rv(t,n,r,o,u,f){u=av(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Pa(t,o,n),r!==null&&(Zn(r,t,n),Eo(r,t,n))}function sv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function bh(t,n){sv(t,n),(t=t.alternate)&&sv(t,n)}function ov(t){if(t.tag===13||t.tag===31){var n=hr(t,67108864);n!==null&&Zn(n,t,67108864),bh(t,67108864)}}function lv(t){if(t.tag===13||t.tag===31){var n=ri();n=to(n);var r=hr(t,n);r!==null&&Zn(r,t,n),bh(t,n)}}var Mc=!0;function Yy(t,n,r,o){var u=L.T;L.T=null;var f=G.p;try{G.p=2,Ah(t,n,r,o)}finally{G.p=f,L.T=u}}function Wy(t,n,r,o){var u=L.T;L.T=null;var f=G.p;try{G.p=8,Ah(t,n,r,o)}finally{G.p=f,L.T=u}}function Ah(t,n,r,o){if(Mc){var u=Rh(o);if(u===null)hh(t,n,o,Tc,r),uv(t,o);else if(qy(u,t,n,r,o))o.stopPropagation();else if(uv(t,o),n&4&&-1<jy.indexOf(t)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=Ae(f.pendingLanes);if(E!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var H=1<<31-ze(E);A.entanglements[1]|=H,E&=~H}ki(f),(Pt&6)===0&&(sc=v()+500,Fo(0))}}break;case 31:case 13:A=hr(f,2),A!==null&&Zn(A,f,2),lc(),bh(f,2)}if(f=Rh(o),f===null&&hh(t,n,o,Tc,r),f===u)break;u=f}u!==null&&o.stopPropagation()}else hh(t,n,o,null,r)}}function Rh(t){return t=Cu(t),Ch(t)}var Tc=null;function Ch(t){if(Tc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=h(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Tc=t,null}function cv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F()){case J:return 2;case pe:return 8;case fe:case Ve:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var wh=!1,ja=null,qa=null,Za=null,ko=new Map,Yo=new Map,Ka=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function Wo(t,n,r,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&ov(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qy(t,n,r,o,u){switch(n){case"focusin":return ja=Wo(ja,t,n,r,o,u),!0;case"dragenter":return qa=Wo(qa,t,n,r,o,u),!0;case"mouseover":return Za=Wo(Za,t,n,r,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,t,n,r,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Yo.set(f,Wo(Yo.get(f)||null,t,n,r,o,u)),!0}return!1}function fv(t){var n=Aa(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){t.blockedOn=n,Hi(t.priority,function(){lv(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,Hi(t.priority,function(){lv(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Rh(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);Ru=o,r.target.dispatchEvent(o),Ru=null}else return n=Ra(r),n!==null&&ov(n),t.blockedOn=r,!1;n.shift()}return!0}function hv(t,n,r){bc(t)&&r.delete(n)}function Zy(){wh=!1,ja!==null&&bc(ja)&&(ja=null),qa!==null&&bc(qa)&&(qa=null),Za!==null&&bc(Za)&&(Za=null),ko.forEach(hv),Yo.forEach(hv)}function Ac(t,n){t.blockedOn===n&&(t.blockedOn=null,wh||(wh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Zy)))}var Rc=null;function dv(t){Rc!==t&&(Rc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Rc===t&&(Rc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ch(o||r)===null)continue;break}var f=Ra(r);f!==null&&(t.splice(n,3),n-=3,Rf(f,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function Es(t){function n(H){return Ac(H,t)}ja!==null&&Ac(ja,t),qa!==null&&Ac(qa,t),Za!==null&&Ac(Za,t),ko.forEach(n),Yo.forEach(n);for(var r=0;r<Ka.length;r++){var o=Ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(r=Ka[0],r.blockedOn===null);)fv(r),r.blockedOn===null&&Ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],f=r[o+1],E=u[yn]||null;if(typeof f=="function")E||dv(r);else if(E){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,E=f[yn]||null)A=E.formAction;else if(Ch(u)!==null)continue}else A=E.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),dv(r)}}}function pv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(E){return u=E})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Dh(t){this._internalRoot=t}Cc.prototype.render=Dh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ri();rv(r,o,t,n,null,null)},Cc.prototype.unmount=Dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;rv(t.current,2,null,t,null,null),lc(),n[Ri]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=no();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Ka.length&&n!==0&&n<Ka[r].priority;r++);Ka.splice(r,0,t),r===0&&fv(t)}};var mv=e.version;if(mv!=="19.2.3")throw Error(s(527,mv,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Ky={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{Ce=wc.inject(Ky),we=wc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=yg,f=Mg,E=Tg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError)),n=iv(t,1,!1,null,null,r,o,null,u,f,E,pv),t[Ri]=n.current,fh(t),new Dh(n)},qo.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",f=yg,E=Mg,A=Tg,H=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),n=iv(t,1,!0,n,r??null,o,u,H,f,E,A,pv),n.context=av(null),r=n.current,o=ri(),o=to(o),u=Ia(o),u.callback=null,Pa(r,u,o),r=o,n.current.lanes=r,On(n,r),ki(n),t[Ri]=n.current,fh(t),new Cc(n)},qo.version="19.2.3",qo}var bv;function oM(){if(bv)return Lh.exports;bv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Lh.exports=sM(),Lh.exports}var lM=oM();const cM=Xx(lM);var uM={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Av;(function(a){a.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",a.OUTCOME_OK="OUTCOME_OK",a.OUTCOME_FAILED="OUTCOME_FAILED",a.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Av||(Av={}));var Rv;(function(a){a.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",a.PYTHON="PYTHON"})(Rv||(Rv={}));var Cv;(function(a){a.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",a.SILENT="SILENT",a.WHEN_IDLE="WHEN_IDLE",a.INTERRUPT="INTERRUPT"})(Cv||(Cv={}));var wv;(function(a){a.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",a.STRING="STRING",a.NUMBER="NUMBER",a.INTEGER="INTEGER",a.BOOLEAN="BOOLEAN",a.ARRAY="ARRAY",a.OBJECT="OBJECT",a.NULL="NULL"})(wv||(wv={}));var Dv;(function(a){a.MODE_UNSPECIFIED="MODE_UNSPECIFIED",a.MODE_DYNAMIC="MODE_DYNAMIC"})(Dv||(Dv={}));var Nv;(function(a){a.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",a.SIMPLE_SEARCH="SIMPLE_SEARCH",a.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Nv||(Nv={}));var Uv;(function(a){a.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",a.NO_AUTH="NO_AUTH",a.API_KEY_AUTH="API_KEY_AUTH",a.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",a.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",a.OAUTH="OAUTH",a.OIDC_AUTH="OIDC_AUTH"})(Uv||(Uv={}));var Lv;(function(a){a.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",a.HTTP_IN_QUERY="HTTP_IN_QUERY",a.HTTP_IN_HEADER="HTTP_IN_HEADER",a.HTTP_IN_PATH="HTTP_IN_PATH",a.HTTP_IN_BODY="HTTP_IN_BODY",a.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(Lv||(Lv={}));var Ov;(function(a){a.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",a.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",a.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",a.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(Ov||(Ov={}));var Iv;(function(a){a.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH",a.MINIMAL="MINIMAL"})(Iv||(Iv={}));var Pv;(function(a){a.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",a.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",a.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",a.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",a.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",a.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",a.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",a.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",a.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",a.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",a.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(Pv||(Pv={}));var Fv;(function(a){a.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",a.SEVERITY="SEVERITY",a.PROBABILITY="PROBABILITY"})(Fv||(Fv={}));var Bv;(function(a){a.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",a.BLOCK_NONE="BLOCK_NONE",a.OFF="OFF"})(Bv||(Bv={}));var zv;(function(a){a.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",a.STOP="STOP",a.MAX_TOKENS="MAX_TOKENS",a.SAFETY="SAFETY",a.RECITATION="RECITATION",a.LANGUAGE="LANGUAGE",a.OTHER="OTHER",a.BLOCKLIST="BLOCKLIST",a.PROHIBITED_CONTENT="PROHIBITED_CONTENT",a.SPII="SPII",a.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",a.IMAGE_SAFETY="IMAGE_SAFETY",a.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",a.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",a.NO_IMAGE="NO_IMAGE",a.IMAGE_RECITATION="IMAGE_RECITATION",a.IMAGE_OTHER="IMAGE_OTHER"})(zv||(zv={}));var Hv;(function(a){a.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",a.NEGLIGIBLE="NEGLIGIBLE",a.LOW="LOW",a.MEDIUM="MEDIUM",a.HIGH="HIGH"})(Hv||(Hv={}));var Gv;(function(a){a.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",a.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",a.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",a.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",a.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Gv||(Gv={}));var Vv;(function(a){a.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",a.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",a.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",a.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",a.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(Vv||(Vv={}));var Xv;(function(a){a.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",a.BLOCKLIST="BLOCKLIST",a.PROHIBITED_CONTENT="PROHIBITED_CONTENT",a.IMAGE_SAFETY="IMAGE_SAFETY",a.MODEL_ARMOR="MODEL_ARMOR",a.JAILBREAK="JAILBREAK"})(Xv||(Xv={}));var kv;(function(a){a.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",a.ON_DEMAND="ON_DEMAND",a.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(kv||(kv={}));var Yv;(function(a){a.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",a.TEXT="TEXT",a.IMAGE="IMAGE",a.AUDIO="AUDIO"})(Yv||(Yv={}));var Wv;(function(a){a.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",a.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",a.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",a.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(Wv||(Wv={}));var jv;(function(a){a.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",a.TUNING_MODE_FULL="TUNING_MODE_FULL",a.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(jv||(jv={}));var qv;(function(a){a.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",a.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",a.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",a.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",a.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",a.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",a.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(qv||(qv={}));var Zv;(function(a){a.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",a.JOB_STATE_QUEUED="JOB_STATE_QUEUED",a.JOB_STATE_PENDING="JOB_STATE_PENDING",a.JOB_STATE_RUNNING="JOB_STATE_RUNNING",a.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",a.JOB_STATE_FAILED="JOB_STATE_FAILED",a.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",a.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",a.JOB_STATE_PAUSED="JOB_STATE_PAUSED",a.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",a.JOB_STATE_UPDATING="JOB_STATE_UPDATING",a.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Zv||(Zv={}));var Kv;(function(a){a.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",a.TUNING_TASK_I2V="TUNING_TASK_I2V",a.TUNING_TASK_T2V="TUNING_TASK_T2V",a.TUNING_TASK_R2V="TUNING_TASK_R2V"})(Kv||(Kv={}));var Jv;(function(a){a.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",a.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",a.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",a.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",a.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Jv||(Jv={}));var Qv;(function(a){a.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",a.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",a.BALANCED="BALANCED",a.PRIORITIZE_COST="PRIORITIZE_COST"})(Qv||(Qv={}));var $v;(function(a){a.UNSPECIFIED="UNSPECIFIED",a.BLOCKING="BLOCKING",a.NON_BLOCKING="NON_BLOCKING"})($v||($v={}));var e_;(function(a){a.MODE_UNSPECIFIED="MODE_UNSPECIFIED",a.MODE_DYNAMIC="MODE_DYNAMIC"})(e_||(e_={}));var t_;(function(a){a.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",a.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(t_||(t_={}));var n_;(function(a){a.MODE_UNSPECIFIED="MODE_UNSPECIFIED",a.AUTO="AUTO",a.ANY="ANY",a.NONE="NONE",a.VALIDATED="VALIDATED"})(n_||(n_={}));var i_;(function(a){a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",a.BLOCK_NONE="BLOCK_NONE"})(i_||(i_={}));var a_;(function(a){a.DONT_ALLOW="DONT_ALLOW",a.ALLOW_ADULT="ALLOW_ADULT",a.ALLOW_ALL="ALLOW_ALL"})(a_||(a_={}));var r_;(function(a){a.auto="auto",a.en="en",a.ja="ja",a.ko="ko",a.hi="hi",a.zh="zh",a.pt="pt",a.es="es"})(r_||(r_={}));var s_;(function(a){a.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",a.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",a.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",a.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",a.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(s_||(s_={}));var o_;(function(a){a.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",a.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",a.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",a.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(o_||(o_={}));var l_;(function(a){a.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",a.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",a.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",a.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(l_||(l_={}));var c_;(function(a){a.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",a.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",a.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",a.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",a.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",a.EDIT_MODE_STYLE="EDIT_MODE_STYLE",a.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",a.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(c_||(c_={}));var u_;(function(a){a.FOREGROUND="FOREGROUND",a.BACKGROUND="BACKGROUND",a.PROMPT="PROMPT",a.SEMANTIC="SEMANTIC",a.INTERACTIVE="INTERACTIVE"})(u_||(u_={}));var f_;(function(a){a.ASSET="ASSET",a.STYLE="STYLE"})(f_||(f_={}));var h_;(function(a){a.INSERT="INSERT",a.REMOVE="REMOVE",a.REMOVE_STATIC="REMOVE_STATIC",a.OUTPAINT="OUTPAINT"})(h_||(h_={}));var d_;(function(a){a.OPTIMIZED="OPTIMIZED",a.LOSSLESS="LOSSLESS"})(d_||(d_={}));var p_;(function(a){a.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",a.PREFERENCE_TUNING="PREFERENCE_TUNING"})(p_||(p_={}));var m_;(function(a){a.STATE_UNSPECIFIED="STATE_UNSPECIFIED",a.STATE_PENDING="STATE_PENDING",a.STATE_ACTIVE="STATE_ACTIVE",a.STATE_FAILED="STATE_FAILED"})(m_||(m_={}));var g_;(function(a){a.STATE_UNSPECIFIED="STATE_UNSPECIFIED",a.PROCESSING="PROCESSING",a.ACTIVE="ACTIVE",a.FAILED="FAILED"})(g_||(g_={}));var v_;(function(a){a.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",a.UPLOADED="UPLOADED",a.GENERATED="GENERATED"})(v_||(v_={}));var __;(function(a){a.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",a.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",a.RESPONSE_REJECTED="RESPONSE_REJECTED",a.NEED_MORE_INPUT="NEED_MORE_INPUT"})(__||(__={}));var x_;(function(a){a.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",a.TEXT="TEXT",a.IMAGE="IMAGE",a.VIDEO="VIDEO",a.AUDIO="AUDIO",a.DOCUMENT="DOCUMENT"})(x_||(x_={}));var S_;(function(a){a.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",a.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",a.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(S_||(S_={}));var E_;(function(a){a.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",a.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",a.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(E_||(E_={}));var y_;(function(a){a.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",a.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",a.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(y_||(y_={}));var M_;(function(a){a.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",a.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",a.NO_INTERRUPTION="NO_INTERRUPTION"})(M_||(M_={}));var T_;(function(a){a.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",a.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",a.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(T_||(T_={}));var b_;(function(a){a.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",a.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",a.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",a.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",a.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",a.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",a.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",a.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",a.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",a.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",a.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",a.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",a.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(b_||(b_={}));var A_;(function(a){a.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",a.QUALITY="QUALITY",a.DIVERSITY="DIVERSITY",a.VOCALIZATION="VOCALIZATION"})(A_||(A_={}));var R_;(function(a){a.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",a.PLAY="PLAY",a.PAUSE="PAUSE",a.STOP="STOP",a.RESET_CONTEXT="RESET_CONTEXT"})(R_||(R_={}));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var C_;(function(a){a.PAGED_ITEM_BATCH_JOBS="batchJobs",a.PAGED_ITEM_MODELS="models",a.PAGED_ITEM_TUNING_JOBS="tuningJobs",a.PAGED_ITEM_FILES="files",a.PAGED_ITEM_CACHED_CONTENTS="cachedContents",a.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",a.PAGED_ITEM_DOCUMENTS="documents"})(C_||(C_={}));function hu(a,e){var i={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&e.indexOf(s)<0&&(i[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(i[s[l]]=a[s[l]]);return i}function w_(a){var e=typeof Symbol=="function"&&Symbol.iterator,i=e&&a[e],s=0;if(i)return i.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&s>=a.length&&(a=void 0),{value:a&&a[s++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function tn(a){return this instanceof tn?(this.v=a,this):new tn(a)}function ll(a,e,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=i.apply(a,e||[]),l,c=[];return l=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),d("next"),d("throw"),d("return",h),l[Symbol.asyncIterator]=function(){return this},l;function h(y){return function(T){return Promise.resolve(T).then(y,_)}}function d(y,T){s[y]&&(l[y]=function(b){return new Promise(function(M,S){c.push([y,b,M,S])>1||m(y,b)})},T&&(l[y]=T(l[y])))}function m(y,T){try{p(s[y](T))}catch(b){x(c[0][3],b)}}function p(y){y.value instanceof tn?Promise.resolve(y.value.v).then(g,_):x(c[0][2],y)}function g(y){m("next",y)}function _(y){m("throw",y)}function x(y,T){y(T),c.shift(),c.length&&m(c[0][0],c[0][1])}}function Gs(a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=a[Symbol.asyncIterator],i;return e?e.call(a):(a=typeof w_=="function"?w_(a):a[Symbol.iterator](),i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i);function s(c){i[c]=a[c]&&function(h){return new Promise(function(d,m){h=a[c](h),l(d,m,h.done,h.value)})}}function l(c,h,d,m){Promise.resolve(m).then(function(p){c({value:p,done:d})},h)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let kx=function(){const{crypto:a}=globalThis;if(a!=null&&a.randomUUID)return kx=a.randomUUID.bind(a),a.randomUUID();const e=new Uint8Array(1),i=a?()=>a.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,s=>(+s^i()&15>>+s/4).toString(16))};const fM=()=>kx();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function xd(a){return typeof a=="object"&&a!==null&&("name"in a&&a.name==="AbortError"||"message"in a&&String(a.message).includes("FetchRequestCanceledException"))}const Sd=a=>{if(a instanceof Error)return a;if(typeof a=="object"&&a!==null){try{if(Object.prototype.toString.call(a)==="[object Error]"){const e=new Error(a.message,a.cause?{cause:a.cause}:{});return a.stack&&(e.stack=a.stack),a.cause&&!e.cause&&(e.cause=a.cause),a.name&&(e.name=a.name),e}}catch{}try{return new Error(JSON.stringify(a))}catch{}}return new Error(a)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bi extends Error{}class Xn extends bi{constructor(e,i,s,l){super(`${Xn.makeMessage(e,i,s)}`),this.status=e,this.headers=l,this.error=i}static makeMessage(e,i,s){const l=i!=null&&i.message?typeof i.message=="string"?i.message:JSON.stringify(i.message):i?JSON.stringify(i):s;return e&&l?`${e} ${l}`:e?`${e} status code (no body)`:l||"(no status code or body)"}static generate(e,i,s,l){if(!e||!l)return new Su({message:s,cause:Sd(i)});const c=i;return e===400?new Wx(e,c,s,l):e===401?new jx(e,c,s,l):e===403?new qx(e,c,s,l):e===404?new Zx(e,c,s,l):e===409?new Kx(e,c,s,l):e===422?new Jx(e,c,s,l):e===429?new Qx(e,c,s,l):e>=500?new $x(e,c,s,l):new Xn(e,c,s,l)}}class Ed extends Xn{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}}class Su extends Xn{constructor({message:e,cause:i}){super(void 0,void 0,e||"Connection error.",void 0),i&&(this.cause=i)}}class Yx extends Su{constructor({message:e}={}){super({message:e??"Request timed out."})}}class Wx extends Xn{}class jx extends Xn{}class qx extends Xn{}class Zx extends Xn{}class Kx extends Xn{}class Jx extends Xn{}class Qx extends Xn{}class $x extends Xn{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const hM=/^[a-z][a-z0-9+.-]*:/i,dM=a=>hM.test(a);let yd=a=>(yd=Array.isArray,yd(a));const pM=yd;let mM=pM;const D_=mM;function gM(a){if(!a)return!0;for(const e in a)return!1;return!0}function vM(a,e){return Object.prototype.hasOwnProperty.call(a,e)}const _M=(a,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new bi(`${a} must be an integer`);if(e<0)throw new bi(`${a} must be a positive integer`);return e},xM=a=>{try{return JSON.parse(a)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const SM=a=>new Promise(e=>setTimeout(e,a));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fs="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function EM(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const yM=()=>{var a,e,i,s,l;const c=EM();if(c==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Fs,"X-Stainless-OS":U_(Deno.build.os),"X-Stainless-Arch":N_(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:(e=(a=Deno.version)===null||a===void 0?void 0:a.deno)!==null&&e!==void 0?e:"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Fs,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(c==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Fs,"X-Stainless-OS":U_((i=globalThis.process.platform)!==null&&i!==void 0?i:"unknown"),"X-Stainless-Arch":N_((s=globalThis.process.arch)!==null&&s!==void 0?s:"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":(l=globalThis.process.version)!==null&&l!==void 0?l:"unknown"};const h=MM();return h?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Fs,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${h.browser}`,"X-Stainless-Runtime-Version":h.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Fs,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function MM(){if(typeof navigator>"u"||!navigator)return null;const a=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:e,pattern:i}of a){const s=i.exec(navigator.userAgent);if(s){const l=s[1]||0,c=s[2]||0,h=s[3]||0;return{browser:e,version:`${l}.${c}.${h}`}}}return null}const N_=a=>a==="x32"?"x32":a==="x86_64"||a==="x64"?"x64":a==="arm"?"arm":a==="aarch64"||a==="arm64"?"arm64":a?`other:${a}`:"unknown",U_=a=>(a=a.toLowerCase(),a.includes("ios")?"iOS":a==="android"?"Android":a==="darwin"?"MacOS":a==="win32"?"Windows":a==="freebsd"?"FreeBSD":a==="openbsd"?"OpenBSD":a==="linux"?"Linux":a?`Other:${a}`:"Unknown");let Dc;const TM=()=>Dc??(Dc=yM());/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bM(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function eS(...a){const e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...a)}function AM(a){let e=Symbol.asyncIterator in a?a[Symbol.asyncIterator]():a[Symbol.iterator]();return eS({start(){},async pull(i){const{done:s,value:l}=await e.next();s?i.close():i.enqueue(l)},async cancel(){var i;await((i=e.return)===null||i===void 0?void 0:i.call(e))}})}function tS(a){if(a[Symbol.asyncIterator])return a;const e=a.getReader();return{async next(){try{const i=await e.read();return i!=null&&i.done&&e.releaseLock(),i}catch(i){throw e.releaseLock(),i}},async return(){const i=e.cancel();return e.releaseLock(),await i,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function RM(a){var e,i;if(a===null||typeof a!="object")return;if(a[Symbol.asyncIterator]){await((i=(e=a[Symbol.asyncIterator]()).return)===null||i===void 0?void 0:i.call(e));return}const s=a.getReader(),l=s.cancel();s.releaseLock(),await l}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const CM=({headers:a,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nS=()=>{var a;if(typeof File>"u"){const{process:e}=globalThis,i=typeof((a=e==null?void 0:e.versions)===null||a===void 0?void 0:a.node)=="string"&&parseInt(e.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(i?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Fh(a,e,i){return nS(),new File(a,e??"unknown_file",i)}function wM(a){return(typeof a=="object"&&a!==null&&("name"in a&&a.name&&String(a.name)||"url"in a&&a.url&&String(a.url)||"filename"in a&&a.filename&&String(a.filename)||"path"in a&&a.path&&String(a.path))||"").split(/[\\/]/).pop()||void 0}const DM=a=>a!=null&&typeof a=="object"&&typeof a[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const iS=a=>a!=null&&typeof a=="object"&&typeof a.size=="number"&&typeof a.type=="string"&&typeof a.text=="function"&&typeof a.slice=="function"&&typeof a.arrayBuffer=="function",NM=a=>a!=null&&typeof a=="object"&&typeof a.name=="string"&&typeof a.lastModified=="number"&&iS(a),UM=a=>a!=null&&typeof a=="object"&&typeof a.url=="string"&&typeof a.blob=="function";async function LM(a,e,i){if(nS(),a=await a,NM(a))return a instanceof File?a:Fh([await a.arrayBuffer()],a.name);if(UM(a)){const l=await a.blob();return e||(e=new URL(a.url).pathname.split(/[\\/]/).pop()),Fh(await Md(l),e,i)}const s=await Md(a);if(e||(e=wM(a)),!(i!=null&&i.type)){const l=s.find(c=>typeof c=="object"&&"type"in c&&c.type);typeof l=="string"&&(i=Object.assign(Object.assign({},i),{type:l}))}return Fh(s,e,i)}async function Md(a){var e,i,s,l,c;let h=[];if(typeof a=="string"||ArrayBuffer.isView(a)||a instanceof ArrayBuffer)h.push(a);else if(iS(a))h.push(a instanceof Blob?a:await a.arrayBuffer());else if(DM(a))try{for(var d=!0,m=Gs(a),p;p=await m.next(),e=p.done,!e;d=!0){l=p.value,d=!1;const g=l;h.push(...await Md(g))}}catch(g){i={error:g}}finally{try{!d&&!e&&(s=m.return)&&await s.call(m)}finally{if(i)throw i.error}}else{const g=(c=a==null?void 0:a.constructor)===null||c===void 0?void 0:c.name;throw new Error(`Unexpected data type: ${typeof a}${g?`; constructor: ${g}`:""}${OM(a)}`)}return h}function OM(a){return typeof a!="object"||a===null?"":`; props: [${Object.getOwnPropertyNames(a).map(i=>`"${i}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class aS{constructor(e){this._client=e}}aS._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function rS(a){return a.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const L_=Object.freeze(Object.create(null)),IM=(a=rS)=>(function(i,...s){if(i.length===1)return i[0];let l=!1;const c=[],h=i.reduce((g,_,x)=>{var y,T,b;/[?#]/.test(_)&&(l=!0);const M=s[x];let S=(l?encodeURIComponent:a)(""+M);return x!==s.length&&(M==null||typeof M=="object"&&M.toString===((b=Object.getPrototypeOf((T=Object.getPrototypeOf((y=M.hasOwnProperty)!==null&&y!==void 0?y:L_))!==null&&T!==void 0?T:L_))===null||b===void 0?void 0:b.toString))&&(S=M+"",c.push({start:g.length+_.length,length:S.length,error:`Value of type ${Object.prototype.toString.call(M).slice(8,-1)} is not a valid path parameter`})),g+_+(x===s.length?"":S)},""),d=h.split(/[?#]/,1)[0],m=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let p;for(;(p=m.exec(d))!==null;)c.push({start:p.index,length:p[0].length,error:`Value "${p[0]}" can't be safely passed as a path parameter`});if(c.sort((g,_)=>g.start-_.start),c.length>0){let g=0;const _=c.reduce((x,y)=>{const T=" ".repeat(y.start-g),b="^".repeat(y.length);return g=y.start+y.length,x+T+b},"");throw new bi(`Path parameters result in path with invalid segments:
${c.map(x=>x.error).join(`
`)}
${h}
${_}`)}return h}),Nc=IM(rS);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class sS extends aS{create(e,i){var s;const{api_version:l=this._client.apiVersion}=e,c=hu(e,["api_version"]);if("model"in c&&"agent_config"in c)throw new bi("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in c&&"generation_config"in c)throw new bi("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Nc`/${l}/interactions`,Object.assign(Object.assign({body:c},i),{stream:(s=e.stream)!==null&&s!==void 0?s:!1}))}delete(e,i={},s){const{api_version:l=this._client.apiVersion}=i??{};return this._client.delete(Nc`/${l}/interactions/${e}`,s)}cancel(e,i={},s){const{api_version:l=this._client.apiVersion}=i??{};return this._client.post(Nc`/${l}/interactions/${e}/cancel`,s)}get(e,i={},s){var l;const c=i??{},{api_version:h=this._client.apiVersion}=c,d=hu(c,["api_version"]);return this._client.get(Nc`/${h}/interactions/${e}`,Object.assign(Object.assign({query:d},s),{stream:(l=i==null?void 0:i.stream)!==null&&l!==void 0?l:!1}))}}sS._key=Object.freeze(["interactions"]);class oS extends sS{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function PM(a){let e=0;for(const l of a)e+=l.length;const i=new Uint8Array(e);let s=0;for(const l of a)i.set(l,s),s+=l.length;return i}let Uc;function Ep(a){let e;return(Uc??(e=new globalThis.TextEncoder,Uc=e.encode.bind(e)))(a)}let Lc;function O_(a){let e;return(Lc??(e=new globalThis.TextDecoder,Lc=e.decode.bind(e)))(a)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Eu{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null}decode(e){if(e==null)return[];const i=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?Ep(e):e;this.buffer=PM([this.buffer,i]);const s=[];let l;for(;(l=FM(this.buffer,this.carriageReturnIndex))!=null;){if(l.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=l.index;continue}if(this.carriageReturnIndex!=null&&(l.index!==this.carriageReturnIndex+1||l.carriage)){s.push(O_(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null;continue}const c=this.carriageReturnIndex!==null?l.preceding-1:l.preceding,h=O_(this.buffer.subarray(0,c));s.push(h),this.buffer=this.buffer.subarray(l.index),this.carriageReturnIndex=null}return s}flush(){return this.buffer.length?this.decode(`
`):[]}}Eu.NEWLINE_CHARS=new Set([`
`,"\r"]);Eu.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function FM(a,e){for(let l=e??0;l<a.length;l++){if(a[l]===10)return{preceding:l,index:l+1,carriage:!1};if(a[l]===13)return{preceding:l,index:l+1,carriage:!0}}return null}function BM(a){for(let s=0;s<a.length-1;s++){if(a[s]===10&&a[s+1]===10||a[s]===13&&a[s+1]===13)return s+2;if(a[s]===13&&a[s+1]===10&&s+3<a.length&&a[s+2]===13&&a[s+3]===10)return s+4}return-1}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const du={off:0,error:200,warn:300,info:400,debug:500},I_=(a,e,i)=>{if(a){if(vM(du,a))return a;Vn(i).warn(`${e} was set to ${JSON.stringify(a)}, expected one of ${JSON.stringify(Object.keys(du))}`)}};function il(){}function Oc(a,e,i){return!e||du[a]>du[i]?il:e[a].bind(e)}const zM={error:il,warn:il,info:il,debug:il};let P_=new WeakMap;function Vn(a){var e;const i=a.logger,s=(e=a.logLevel)!==null&&e!==void 0?e:"off";if(!i)return zM;const l=P_.get(i);if(l&&l[0]===s)return l[1];const c={error:Oc("error",i,s),warn:Oc("warn",i,s),info:Oc("info",i,s),debug:Oc("debug",i,s)};return P_.set(i,[s,c]),c}const Nr=a=>(a.options&&(a.options=Object.assign({},a.options),delete a.options.headers),a.headers&&(a.headers=Object.fromEntries((a.headers instanceof Headers?[...a.headers]:Object.entries(a.headers)).map(([e,i])=>[e,e.toLowerCase()==="x-goog-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":i]))),"retryOfRequestLogID"in a&&(a.retryOfRequestLogID&&(a.retryOf=a.retryOfRequestLogID),delete a.retryOfRequestLogID),a);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class zs{constructor(e,i,s){this.iterator=e,this.controller=i,this.client=s}static fromSSEResponse(e,i,s){let l=!1;const c=s?Vn(s):console;function h(){return ll(this,arguments,function*(){var m,p,g,_;if(l)throw new bi("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");l=!0;let x=!1;try{try{for(var y=!0,T=Gs(HM(e,i)),b;b=yield tn(T.next()),m=b.done,!m;y=!0){_=b.value,y=!1;const M=_;if(!x)if(M.data.startsWith("[DONE]")){x=!0;continue}else try{yield yield tn(JSON.parse(M.data))}catch(S){throw c.error("Could not parse message into JSON:",M.data),c.error("From chunk:",M.raw),S}}}catch(M){p={error:M}}finally{try{!y&&!m&&(g=T.return)&&(yield tn(g.call(T)))}finally{if(p)throw p.error}}x=!0}catch(M){if(xd(M))return yield tn(void 0);throw M}finally{x||i.abort()}})}return new zs(h,i,s)}static fromReadableStream(e,i,s){let l=!1;function c(){return ll(this,arguments,function*(){var m,p,g,_;const x=new Eu,y=tS(e);try{for(var T=!0,b=Gs(y),M;M=yield tn(b.next()),m=M.done,!m;T=!0){_=M.value,T=!1;const S=_;for(const I of x.decode(S))yield yield tn(I)}}catch(S){p={error:S}}finally{try{!T&&!m&&(g=b.return)&&(yield tn(g.call(b)))}finally{if(p)throw p.error}}for(const S of x.flush())yield yield tn(S)})}function h(){return ll(this,arguments,function*(){var m,p,g,_;if(l)throw new bi("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");l=!0;let x=!1;try{try{for(var y=!0,T=Gs(c()),b;b=yield tn(T.next()),m=b.done,!m;y=!0){_=b.value,y=!1;const M=_;x||M&&(yield yield tn(JSON.parse(M)))}}catch(M){p={error:M}}finally{try{!y&&!m&&(g=T.return)&&(yield tn(g.call(T)))}finally{if(p)throw p.error}}x=!0}catch(M){if(xd(M))return yield tn(void 0);throw M}finally{x||i.abort()}})}return new zs(h,i,s)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],i=[],s=this.iterator(),l=c=>({next:()=>{if(c.length===0){const h=s.next();e.push(h),i.push(h)}return c.shift()}});return[new zs(()=>l(e),this.controller,this.client),new zs(()=>l(i),this.controller,this.client)]}toReadableStream(){const e=this;let i;return eS({async start(){i=e[Symbol.asyncIterator]()},async pull(s){try{const{value:l,done:c}=await i.next();if(c)return s.close();const h=Ep(JSON.stringify(l)+`
`);s.enqueue(h)}catch(l){s.error(l)}},async cancel(){var s;await((s=i.return)===null||s===void 0?void 0:s.call(i))}})}}function HM(a,e){return ll(this,arguments,function*(){var s,l,c,h;if(!a.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new bi("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new bi("Attempted to iterate over a response with no body");const d=new VM,m=new Eu,p=tS(a.body);try{for(var g=!0,_=Gs(GM(p)),x;x=yield tn(_.next()),s=x.done,!s;g=!0){h=x.value,g=!1;const y=h;for(const T of m.decode(y)){const b=d.decode(T);b&&(yield yield tn(b))}}}catch(y){l={error:y}}finally{try{!g&&!s&&(c=_.return)&&(yield tn(c.call(_)))}finally{if(l)throw l.error}}for(const y of m.flush()){const T=d.decode(y);T&&(yield yield tn(T))}})}function GM(a){return ll(this,arguments,function*(){var i,s,l,c;let h=new Uint8Array;try{for(var d=!0,m=Gs(a),p;p=yield tn(m.next()),i=p.done,!i;d=!0){c=p.value,d=!1;const g=c;if(g==null)continue;const _=g instanceof ArrayBuffer?new Uint8Array(g):typeof g=="string"?Ep(g):g;let x=new Uint8Array(h.length+_.length);x.set(h),x.set(_,h.length),h=x;let y;for(;(y=BM(h))!==-1;)yield yield tn(h.slice(0,y)),h=h.slice(y)}}catch(g){s={error:g}}finally{try{!d&&!i&&(l=m.return)&&(yield tn(l.call(m)))}finally{if(s)throw s.error}}h.length>0&&(yield yield tn(h))})}class VM{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const c={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],c}if(this.chunks.push(e),e.startsWith(":"))return null;let[i,s,l]=XM(e,":");return l.startsWith(" ")&&(l=l.substring(1)),i==="event"?this.event=l:i==="data"&&this.data.push(l),null}}function XM(a,e){const i=a.indexOf(e);return i!==-1?[a.substring(0,i),e,a.substring(i+e.length)]:[a,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function kM(a,e){const{response:i,requestLogID:s,retryOfRequestLogID:l,startTime:c}=e,h=await(async()=>{var d;if(e.options.stream)return Vn(a).debug("response",i.status,i.url,i.headers,i.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(i,e.controller,a):zs.fromSSEResponse(i,e.controller,a);if(i.status===204)return null;if(e.options.__binaryResponse)return i;const m=i.headers.get("content-type"),p=(d=m==null?void 0:m.split(";")[0])===null||d===void 0?void 0:d.trim();return(p==null?void 0:p.includes("application/json"))||(p==null?void 0:p.endsWith("+json"))?await i.json():await i.text()})();return Vn(a).debug(`[${s}] response parsed`,Nr({retryOfRequestLogID:l,url:i.url,status:i.status,body:h,durationMs:Date.now()-c})),h}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yp extends Promise{constructor(e,i,s=kM){super(l=>{l(null)}),this.responsePromise=i,this.parseResponse=s,this.client=e}_thenUnwrap(e){return new yp(this.client,this.responsePromise,async(i,s)=>e(await this.parseResponse(i,s),s))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,i]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:i}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(this.client,e))),this.parsedPromise}then(e,i){return this.parse().then(e,i)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lS=Symbol("brand.privateNullableHeaders");function*YM(a){if(!a)return;if(lS in a){const{values:s,nulls:l}=a;yield*s.entries();for(const c of l)yield[c,null];return}let e=!1,i;a instanceof Headers?i=a.entries():D_(a)?i=a:(e=!0,i=Object.entries(a??{}));for(let s of i){const l=s[0];if(typeof l!="string")throw new TypeError("expected header name to be a string");const c=D_(s[1])?s[1]:[s[1]];let h=!1;for(const d of c)d!==void 0&&(e&&!h&&(h=!0,yield[l,null]),yield[l,d])}}const Zo=a=>{const e=new Headers,i=new Set;for(const s of a){const l=new Set;for(const[c,h]of YM(s)){const d=c.toLowerCase();l.has(d)||(e.delete(c),l.add(d)),h===null?(e.delete(c),i.add(d)):(e.append(c,h),i.delete(d))}}return{[lS]:!0,values:e,nulls:i}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Bh=a=>{var e,i,s,l,c,h;if(typeof globalThis.process<"u")return(s=(i=(e=uM)===null||e===void 0?void 0:e[a])===null||i===void 0?void 0:i.trim())!==null&&s!==void 0?s:void 0;if(typeof globalThis.Deno<"u")return(h=(c=(l=globalThis.Deno.env)===null||l===void 0?void 0:l.get)===null||c===void 0?void 0:c.call(l,a))===null||h===void 0?void 0:h.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var cS;class yu{constructor(e){var i,s,l,c,h,d,m,{baseURL:p=Bh("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:g=(i=Bh("GEMINI_API_KEY"))!==null&&i!==void 0?i:null,apiVersion:_="v1beta"}=e,x=hu(e,["baseURL","apiKey","apiVersion"]);const y=Object.assign(Object.assign({apiKey:g,apiVersion:_},x),{baseURL:p||"https://generativelanguage.googleapis.com"});this.baseURL=y.baseURL,this.timeout=(s=y.timeout)!==null&&s!==void 0?s:yu.DEFAULT_TIMEOUT,this.logger=(l=y.logger)!==null&&l!==void 0?l:console;const T="warn";this.logLevel=T,this.logLevel=(h=(c=I_(y.logLevel,"ClientOptions.logLevel",this))!==null&&c!==void 0?c:I_(Bh("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&h!==void 0?h:T,this.fetchOptions=y.fetchOptions,this.maxRetries=(d=y.maxRetries)!==null&&d!==void 0?d:2,this.fetch=(m=y.fetch)!==null&&m!==void 0?m:bM(),this.encoder=CM,this._options=y,this.apiKey=g,this.apiVersion=_,this.clientAdapter=y.clientAdapter}withOptions(e){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),e))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:i}){if(!(e.has("authorization")||e.has("x-goog-api-key"))&&!(this.apiKey&&e.get("x-goog-api-key"))&&!i.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(e){const i=Zo([e.headers]);if(!(i.values.has("authorization")||i.values.has("x-goog-api-key"))){if(this.apiKey)return Zo([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return Zo([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(e){return Object.entries(e).filter(([i,s])=>typeof s<"u").map(([i,s])=>{if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")return`${encodeURIComponent(i)}=${encodeURIComponent(s)}`;if(s===null)return`${encodeURIComponent(i)}=`;throw new bi(`Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${Fs}`}defaultIdempotencyKey(){return`stainless-node-retry-${fM()}`}makeStatusError(e,i,s,l){return Xn.generate(e,i,s,l)}buildURL(e,i,s){const l=!this.baseURLOverridden()&&s||this.baseURL,c=dM(e)?new URL(e):new URL(l+(l.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),h=this.defaultQuery();return gM(h)||(i=Object.assign(Object.assign({},h),i)),typeof i=="object"&&i&&!Array.isArray(i)&&(c.search=this.stringifyQuery(i)),c.toString()}async prepareOptions(e){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!e.path.startsWith(`/${this.apiVersion}/projects/`)){const i=e.path.slice(this.apiVersion.length+1);e.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${i}`}}async prepareRequest(e,{url:i,options:s}){}get(e,i){return this.methodRequest("get",e,i)}post(e,i){return this.methodRequest("post",e,i)}patch(e,i){return this.methodRequest("patch",e,i)}put(e,i){return this.methodRequest("put",e,i)}delete(e,i){return this.methodRequest("delete",e,i)}methodRequest(e,i,s){return this.request(Promise.resolve(s).then(l=>Object.assign({method:e,path:i},l)))}request(e,i=null){return new yp(this,this.makeRequest(e,i,void 0))}async makeRequest(e,i,s){var l,c,h;const d=await e,m=(l=d.maxRetries)!==null&&l!==void 0?l:this.maxRetries;i==null&&(i=m),await this.prepareOptions(d);const{req:p,url:g,timeout:_}=await this.buildRequest(d,{retryCount:m-i});await this.prepareRequest(p,{url:g,options:d});const x="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),y=s===void 0?"":`, retryOf: ${s}`,T=Date.now();if(Vn(this).debug(`[${x}] sending request`,Nr({retryOfRequestLogID:s,method:d.method,url:g,options:d,headers:p.headers})),!((c=d.signal)===null||c===void 0)&&c.aborted)throw new Ed;const b=new AbortController,M=await this.fetchWithTimeout(g,p,_,b).catch(Sd),S=Date.now();if(M instanceof globalThis.Error){const O=`retrying, ${i} attempts remaining`;if(!((h=d.signal)===null||h===void 0)&&h.aborted)throw new Ed;const N=xd(M)||/timed? ?out/i.test(String(M)+("cause"in M?String(M.cause):""));if(i)return Vn(this).info(`[${x}] connection ${N?"timed out":"failed"} - ${O}`),Vn(this).debug(`[${x}] connection ${N?"timed out":"failed"} (${O})`,Nr({retryOfRequestLogID:s,url:g,durationMs:S-T,message:M.message})),this.retryRequest(d,i,s??x);throw Vn(this).info(`[${x}] connection ${N?"timed out":"failed"} - error; no more retries left`),Vn(this).debug(`[${x}] connection ${N?"timed out":"failed"} (error; no more retries left)`,Nr({retryOfRequestLogID:s,url:g,durationMs:S-T,message:M.message})),N?new Yx:new Su({cause:M})}const I=`[${x}${y}] ${p.method} ${g} ${M.ok?"succeeded":"failed"} with status ${M.status} in ${S-T}ms`;if(!M.ok){const O=await this.shouldRetry(M);if(i&&O){const C=`retrying, ${i} attempts remaining`;return await RM(M.body),Vn(this).info(`${I} - ${C}`),Vn(this).debug(`[${x}] response error (${C})`,Nr({retryOfRequestLogID:s,url:M.url,status:M.status,headers:M.headers,durationMs:S-T})),this.retryRequest(d,i,s??x,M.headers)}const N=O?"error; no more retries left":"error; not retryable";Vn(this).info(`${I} - ${N}`);const z=await M.text().catch(C=>Sd(C).message),B=xM(z),P=B?void 0:z;throw Vn(this).debug(`[${x}] response error (${N})`,Nr({retryOfRequestLogID:s,url:M.url,status:M.status,headers:M.headers,message:P,durationMs:Date.now()-T})),this.makeStatusError(M.status,B,P,M.headers)}return Vn(this).info(I),Vn(this).debug(`[${x}] response start`,Nr({retryOfRequestLogID:s,url:M.url,status:M.status,headers:M.headers,durationMs:S-T})),{response:M,options:d,controller:b,requestLogID:x,retryOfRequestLogID:s,startTime:T}}async fetchWithTimeout(e,i,s,l){const c=i||{},{signal:h,method:d}=c,m=hu(c,["signal","method"]);h&&h.addEventListener("abort",()=>l.abort());const p=setTimeout(()=>l.abort(),s),g=globalThis.ReadableStream&&m.body instanceof globalThis.ReadableStream||typeof m.body=="object"&&m.body!==null&&Symbol.asyncIterator in m.body,_=Object.assign(Object.assign(Object.assign({signal:l.signal},g?{duplex:"half"}:{}),{method:"GET"}),m);d&&(_.method=d.toUpperCase());try{return await this.fetch.call(void 0,e,_)}finally{clearTimeout(p)}}async shouldRetry(e){const i=e.headers.get("x-should-retry");return i==="true"?!0:i==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,i,s,l){var c;let h;const d=l==null?void 0:l.get("retry-after-ms");if(d){const p=parseFloat(d);Number.isNaN(p)||(h=p)}const m=l==null?void 0:l.get("retry-after");if(m&&!h){const p=parseFloat(m);Number.isNaN(p)?h=Date.parse(m)-Date.now():h=p*1e3}if(!(h&&0<=h&&h<60*1e3)){const p=(c=e.maxRetries)!==null&&c!==void 0?c:this.maxRetries;h=this.calculateDefaultRetryTimeoutMillis(i,p)}return await SM(h),this.makeRequest(e,i-1,s)}calculateDefaultRetryTimeoutMillis(e,i){const c=i-e,h=Math.min(.5*Math.pow(2,c),8),d=1-Math.random()*.25;return h*d*1e3}async buildRequest(e,{retryCount:i=0}={}){var s,l,c;const h=Object.assign({},e),{method:d,path:m,query:p,defaultBaseURL:g}=h,_=this.buildURL(m,p,g);"timeout"in h&&_M("timeout",h.timeout),h.timeout=(s=h.timeout)!==null&&s!==void 0?s:this.timeout;const{bodyHeaders:x,body:y}=this.buildBody({options:h}),T=await this.buildHeaders({options:e,method:d,bodyHeaders:x,retryCount:i});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:d,headers:T},h.signal&&{signal:h.signal}),globalThis.ReadableStream&&y instanceof globalThis.ReadableStream&&{duplex:"half"}),y&&{body:y}),(l=this.fetchOptions)!==null&&l!==void 0?l:{}),(c=h.fetchOptions)!==null&&c!==void 0?c:{}),url:_,timeout:h.timeout}}async buildHeaders({options:e,method:i,bodyHeaders:s,retryCount:l}){let c={};this.idempotencyHeader&&i!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),c[this.idempotencyHeader]=e.idempotencyKey);const h=await this.authHeaders(e);let d=Zo([c,Object.assign(Object.assign({Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(l)},e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{}),TM()),this._options.defaultHeaders,s,e.headers,h]);return this.validateHeaders(d),d.values}buildBody({options:{body:e,headers:i}}){if(!e)return{bodyHeaders:void 0,body:void 0};const s=Zo([i]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&s.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:AM(e)}:this.encoder({body:e,headers:s})}}yu.DEFAULT_TIMEOUT=6e4;class Ln extends yu{constructor(){super(...arguments),this.interactions=new oS(this)}}cS=Ln;Ln.GeminiNextGenAPIClient=cS;Ln.GeminiNextGenAPIClientError=bi;Ln.APIError=Xn;Ln.APIConnectionError=Su;Ln.APIConnectionTimeoutError=Yx;Ln.APIUserAbortError=Ed;Ln.NotFoundError=Zx;Ln.ConflictError=Kx;Ln.RateLimitError=Qx;Ln.BadRequestError=Wx;Ln.AuthenticationError=jx;Ln.InternalServerError=$x;Ln.PermissionDeniedError=qx;Ln.UnprocessableEntityError=Jx;Ln.toFile=LM;Ln.Interactions=oS;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="182",WM=0,F_=1,jM=2,ru=1,qM=2,al=3,sr=0,Qn=1,ya=2,Ma=0,Vs=1,pu=2,B_=3,z_=4,ZM=5,Lr=100,KM=101,JM=102,QM=103,$M=104,eT=200,tT=201,nT=202,iT=203,Td=204,bd=205,aT=206,rT=207,sT=208,oT=209,lT=210,cT=211,uT=212,fT=213,hT=214,Ad=0,Rd=1,Cd=2,ks=3,wd=4,Dd=5,Nd=6,Ud=7,uS=0,dT=1,pT=2,qi=0,fS=1,hS=2,dS=3,pS=4,mS=5,gS=6,vS=7,_S=300,Br=301,Ys=302,Ld=303,Od=304,Mu=306,Id=1e3,ci=1001,Pd=1002,Un=1003,mT=1004,Ic=1005,pn=1006,zh=1007,Ir=1008,li=1009,xS=1010,SS=1011,fl=1012,Tp=1013,Zi=1014,Pi=1015,Ki=1016,bp=1017,Ap=1018,hl=1020,ES=35902,yS=35899,MS=1021,TS=1022,Ti=1023,ba=1026,Pr=1027,bS=1028,Rp=1029,Ws=1030,Cp=1031,wp=1033,su=33776,ou=33777,lu=33778,cu=33779,Fd=35840,Bd=35841,zd=35842,Hd=35843,Gd=36196,Vd=37492,Xd=37496,kd=37488,Yd=37489,Wd=37490,jd=37491,qd=37808,Zd=37809,Kd=37810,Jd=37811,Qd=37812,$d=37813,ep=37814,tp=37815,np=37816,ip=37817,ap=37818,rp=37819,sp=37820,op=37821,lp=36492,cp=36494,up=36495,fp=36283,hp=36284,dp=36285,pp=36286,gT=3200,AS=0,vT=1,ar="",Kn="srgb",js="srgb-linear",mu="linear",Vt="srgb",ys=7680,H_=519,_T=512,xT=513,ST=514,Dp=515,ET=516,yT=517,Np=518,MT=519,G_=35044,V_="300 es",ji=2e3,gu=2001;function RS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function dl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function TT(){const a=dl("canvas");return a.style.display="block",a}const X_={};function k_(...a){const e="THREE."+a.shift();console.log(e,...a)}function ut(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Dt(...a){const e="THREE."+a.shift();console.error(e,...a)}function pl(...a){const e=a.join(" ");e in X_||(X_[e]=!0,ut(...a))}function bT(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y_=1234567;const cl=Math.PI/180,qs=180/Math.PI;function Js(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function bt(a,e,i){return Math.max(e,Math.min(i,a))}function Up(a,e){return(a%e+e)%e}function AT(a,e,i,s,l){return s+(a-e)*(l-s)/(i-e)}function RT(a,e,i){return a!==e?(i-a)/(e-a):0}function ul(a,e,i){return(1-i)*a+i*e}function CT(a,e,i,s){return ul(a,e,1-Math.exp(-i*s))}function wT(a,e=1){return e-Math.abs(Up(a,e*2)-e)}function DT(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function NT(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function UT(a,e){return a+Math.floor(Math.random()*(e-a+1))}function LT(a,e){return a+Math.random()*(e-a)}function OT(a){return a*(.5-Math.random())}function IT(a){a!==void 0&&(Y_=a);let e=Y_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PT(a){return a*cl}function FT(a){return a*qs}function BT(a){return(a&a-1)===0&&a!==0}function zT(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function HT(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function GT(a,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((e+s)/2),g=h((e+s)/2),_=c((e-s)/2),x=h((e-s)/2),y=c((s-e)/2),T=h((s-e)/2);switch(l){case"XYX":a.set(d*g,m*_,m*x,d*p);break;case"YZY":a.set(m*x,d*g,m*_,d*p);break;case"ZXZ":a.set(m*_,m*x,d*g,d*p);break;case"XZX":a.set(d*g,m*T,m*y,d*p);break;case"YXY":a.set(m*y,d*g,m*T,d*p);break;case"ZYZ":a.set(m*T,m*y,d*g,d*p);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Bs(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Hn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ga={DEG2RAD:cl,RAD2DEG:qs,generateUUID:Js,clamp:bt,euclideanModulo:Up,mapLinear:AT,inverseLerp:RT,lerp:ul,damp:CT,pingpong:wT,smoothstep:DT,smootherstep:NT,randInt:UT,randFloat:LT,randFloatSpread:OT,seededRandom:IT,degToRad:PT,radToDeg:FT,isPowerOfTwo:BT,ceilPowerOfTwo:zT,floorPowerOfTwo:HT,setQuaternionFromProperEuler:GT,normalize:Hn,denormalize:Bs};class ct{constructor(e=0,i=0){ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[h+0],y=c[h+1],T=c[h+2],b=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d>=1){e[i+0]=x,e[i+1]=y,e[i+2]=T,e[i+3]=b;return}if(_!==b||m!==x||p!==y||g!==T){let M=m*x+p*y+g*T+_*b;M<0&&(x=-x,y=-y,T=-T,b=-b,M=-M);let S=1-d;if(M<.9995){const I=Math.acos(M),O=Math.sin(I);S=Math.sin(S*I)/O,d=Math.sin(d*I)/O,m=m*S+x*d,p=p*S+y*d,g=g*S+T*d,_=_*S+b*d}else{m=m*S+x*d,p=p*S+y*d,g=g*S+T*d,_=_*S+b*d;const I=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=I,p*=I,g*=I,_*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],x=c[h+1],y=c[h+2],T=c[h+3];return e[i]=d*T+g*_+m*y-p*x,e[i+1]=m*T+g*x+p*_-d*y,e[i+2]=p*T+g*y+d*x-m*_,e[i+3]=g*T-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_-x*y*T;break;case"YXZ":this._x=x*g*_+p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_+x*y*T;break;case"ZXY":this._x=x*g*_-p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_-x*y*T;break;case"ZYX":this._x=x*g*_-p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_+x*y*T;break;case"YZX":this._x=x*g*_+p*y*T,this._y=p*y*_+x*g*T,this._z=p*g*T-x*y*_,this._w=p*g*_-x*y*T;break;case"XZY":this._x=x*g*_-p*y*T,this._y=p*y*_-x*g*T,this._z=p*g*T+x*y*_,this._w=p*g*_+x*y*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,i=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(W_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(W_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new ae,W_=new gl;class _t{constructor(e,i,s,l,c,h,d,m,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],T=s[8],b=l[0],M=l[3],S=l[6],I=l[1],O=l[4],N=l[7],z=l[2],B=l[5],P=l[8];return c[0]=h*b+d*I+m*z,c[3]=h*M+d*O+m*B,c[6]=h*S+d*N+m*P,c[1]=p*b+g*I+_*z,c[4]=p*M+g*O+_*B,c[7]=p*S+g*N+_*P,c[2]=x*b+y*I+T*z,c[5]=x*M+y*O+T*B,c[8]=x*S+y*N+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*h-d*p,x=d*m-g*c,y=p*c-h*m,T=i*_+s*x+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=_*b,e[1]=(l*p-g*s)*b,e[2]=(d*s-l*h)*b,e[3]=x*b,e[4]=(g*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=y*b,e[7]=(s*m-p*i)*b,e[8]=(h*i-s*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Gh.makeScale(e,i)),this}rotate(e){return this.premultiply(Gh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gh=new _t,j_=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VT(){const a={enabled:!0,workingColorSpace:js,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Vt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Vt&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return pl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return pl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[js]:{primaries:e,whitePoint:s,transfer:mu,toXYZ:j_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:j_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),a}const Nt=VT();function Ta(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Xs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ms;class XT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ms===void 0&&(Ms=dl("canvas")),Ms.width=e.width,Ms.height=e.height;const l=Ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ms}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=dl("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ta(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kT=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Vh(l[h].image)):c.push(Vh(l[h]))}else c=Vh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Vh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?XT.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let YT=0;const Xh=new ae;class Bn extends Ks{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=ci,l=ci,c=pn,h=Ir,d=Ti,m=li,p=Bn.DEFAULT_ANISOTROPY,g=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=Js(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_S)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=_S;Bn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],T=m[9],b=m[2],M=m[6],S=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(y+1)/2,z=(S+1)/2,B=(g+x)/4,P=(_+b)/4,K=(T+M)/4;return O>N&&O>z?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=B/s,c=P/s):N>z?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=K/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=P/c,l=K/c),this.set(s,l,c,i),this}let I=Math.sqrt((M-T)*(M-T)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(M-T)/I,this.y=(_-b)/I,this.z=(x-g)/I,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WT extends Ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Bn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends WT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class CS extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jT extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(c,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pc.copy(s.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Fc.subVectors(this.max,Ko),Ts.subVectors(e.a,Ko),bs.subVectors(e.b,Ko),As.subVectors(e.c,Ko),Qa.subVectors(bs,Ts),$a.subVectors(As,bs),br.subVectors(Ts,As);let i=[0,-Qa.z,Qa.y,0,-$a.z,$a.y,0,-br.z,br.y,Qa.z,0,-Qa.x,$a.z,0,-$a.x,br.z,0,-br.x,-Qa.y,Qa.x,0,-$a.y,$a.x,0,-br.y,br.x,0];return!kh(i,Ts,bs,As,Fc)||(i=[1,0,0,0,1,0,0,0,1],!kh(i,Ts,bs,As,Fc))?!1:(Bc.crossVectors(Qa,$a),i=[Bc.x,Bc.y,Bc.z],kh(i,Ts,bs,As,Fc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ui=new ae,Pc=new vl,Ts=new ae,bs=new ae,As=new ae,Qa=new ae,$a=new ae,br=new ae,Ko=new ae,Fc=new ae,Bc=new ae,Ar=new ae;function kh(a,e,i,s,l){for(let c=0,h=a.length-3;c<=h;c+=3){Ar.fromArray(a,c);const d=l.x*Math.abs(Ar.x)+l.y*Math.abs(Ar.y)+l.z*Math.abs(Ar.z),m=e.dot(Ar),p=i.dot(Ar),g=s.dot(Ar);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const qT=new vl,Jo=new ae,Yh=new ae;class _l{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):qT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Yh)),this.expandByPoint(Jo.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _a=new ae,Wh=new ae,zc=new ae,er=new ae,jh=new ae,Hc=new ae,qh=new ae;class Tu{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Wh.copy(e).add(i).multiplyScalar(.5),zc.copy(i).sub(e).normalize(),er.copy(this.origin).sub(Wh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(zc),d=er.dot(this.direction),m=-er.dot(zc),p=er.lengthSq(),g=Math.abs(1-h*h);let _,x,y,T;if(g>0)if(_=h*m-d,x=h*d-m,T=c*g,_>=0)if(x>=-T)if(x<=T){const b=1/g;_*=b,x*=b,y=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Wh).addScaledVector(zc,x),y}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,c){jh.subVectors(i,e),Hc.subVectors(s,e),qh.crossVectors(jh,Hc);let h=this.direction.dot(qh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,e);const m=d*this.direction.dot(Hc.crossVectors(er,Hc));if(m<0)return null;const p=d*this.direction.dot(jh.cross(er));if(p<0||m+p>h)return null;const g=-d*er.dot(qh);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,i,s,l,c,h,d,m,p,g,_,x,y,T,b,M){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,g,_,x,y,T,b,M)}set(e,i,s,l,c,h,d,m,p,g,_,x,y,T,b,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=x,S[3]=y,S[7]=T,S[11]=b,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),h=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=h*g,y=h*_,T=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+T*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=T+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,T=p*g,b=p*_;i[0]=x+b*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-T,i[6]=b+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,T=p*g,b=p*_;i[0]=x-b*d,i[4]=-h*_,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*g,i[9]=b-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*_,T=d*g,b=d*_;i[0]=m*g,i[4]=T*p-y,i[8]=x*p+b,i[1]=m*_,i[5]=b*p+x,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,T=d*m,b=d*p;i[0]=m*g,i[4]=b-x*_,i[8]=T*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+T,i[10]=x-b*_}else if(e.order==="XZY"){const x=h*m,y=h*p,T=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+b,i[5]=h*g,i[9]=y*_-T,i[2]=T*_-y,i[6]=d*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZT,e,KT)}lookAt(e,i,s){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),tr.crossVectors(s,si),tr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),tr.crossVectors(s,si)),tr.normalize(),Gc.crossVectors(si,tr),l[0]=tr.x,l[4]=Gc.x,l[8]=si.x,l[1]=tr.y,l[5]=Gc.y,l[9]=si.y,l[2]=tr.z,l[6]=Gc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],T=s[2],b=s[6],M=s[10],S=s[14],I=s[3],O=s[7],N=s[11],z=s[15],B=l[0],P=l[4],K=l[8],C=l[12],w=l[1],X=l[5],se=l[9],$=l[13],ce=l[2],me=l[6],L=l[10],G=l[14],te=l[3],Te=l[7],Me=l[11],U=l[15];return c[0]=h*B+d*w+m*ce+p*te,c[4]=h*P+d*X+m*me+p*Te,c[8]=h*K+d*se+m*L+p*Me,c[12]=h*C+d*$+m*G+p*U,c[1]=g*B+_*w+x*ce+y*te,c[5]=g*P+_*X+x*me+y*Te,c[9]=g*K+_*se+x*L+y*Me,c[13]=g*C+_*$+x*G+y*U,c[2]=T*B+b*w+M*ce+S*te,c[6]=T*P+b*X+M*me+S*Te,c[10]=T*K+b*se+M*L+S*Me,c[14]=T*C+b*$+M*G+S*U,c[3]=I*B+O*w+N*ce+z*te,c[7]=I*P+O*X+N*me+z*Te,c[11]=I*K+O*se+N*L+z*Me,c[15]=I*C+O*$+N*G+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],T=e[3],b=e[7],M=e[11],S=e[15],I=m*y-p*x,O=d*y-p*_,N=d*x-m*_,z=h*y-p*g,B=h*x-m*g,P=h*_-d*g;return i*(b*I-M*O+S*N)-s*(T*I-M*z+S*B)+l*(T*O-b*z+S*P)-c*(T*N-b*B+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],T=e[12],b=e[13],M=e[14],S=e[15],I=_*M*p-b*x*p+b*m*y-d*M*y-_*m*S+d*x*S,O=T*x*p-g*M*p-T*m*y+h*M*y+g*m*S-h*x*S,N=g*b*p-T*_*p+T*d*y-h*b*y-g*d*S+h*_*S,z=T*_*m-g*b*m-T*d*x+h*b*x+g*d*M-h*_*M,B=i*I+s*O+l*N+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return e[0]=I*P,e[1]=(b*x*c-_*M*c-b*l*y+s*M*y+_*l*S-s*x*S)*P,e[2]=(d*M*c-b*m*c+b*l*p-s*M*p-d*l*S+s*m*S)*P,e[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*y-s*m*y)*P,e[4]=O*P,e[5]=(g*M*c-T*x*c+T*l*y-i*M*y-g*l*S+i*x*S)*P,e[6]=(T*m*c-h*M*c-T*l*p+i*M*p+h*l*S-i*m*S)*P,e[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*y+i*m*y)*P,e[8]=N*P,e[9]=(T*_*c-g*b*c-T*s*y+i*b*y+g*s*S-i*_*S)*P,e[10]=(h*b*c-T*d*c+T*s*p-i*b*p-h*s*S+i*d*S)*P,e[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*y-i*d*y)*P,e[12]=z*P,e[13]=(g*b*l-T*_*l+T*s*x-i*b*x-g*s*M+i*_*M)*P,e[14]=(T*d*l-h*b*l-T*s*m+i*b*m+h*s*M-i*d*M)*P,e[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,y=c*g,T=c*_,b=h*g,M=h*_,S=d*_,I=m*p,O=m*g,N=m*_,z=s.x,B=s.y,P=s.z;return l[0]=(1-(b+S))*z,l[1]=(y+N)*z,l[2]=(T-O)*z,l[3]=0,l[4]=(y-N)*B,l[5]=(1-(x+S))*B,l[6]=(M+I)*B,l[7]=0,l[8]=(T+O)*P,l[9]=(M-I)*P,l[10]=(1-(x+b))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rs.set(l[0],l[1],l[2]).length();const h=Rs.set(l[4],l[5],l[6]).length(),d=Rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Li.copy(this);const p=1/c,g=1/h,_=1/d;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ji,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let T,b;if(m)T=c/(h-c),b=h*c/(h-c);else if(d===ji)T=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===gu)T=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ji,m=!1){const p=this.elements,g=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),y=-(s+l)/(s-l);let T,b;if(m)T=1/(h-c),b=h/(h-c);else if(d===ji)T=-2/(h-c),b=-(h+c)/(h-c);else if(d===gu)T=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Rs=new ae,Li=new Qt,ZT=new ae(0,0,0),KT=new ae(1,1,1),tr=new ae,Gc=new ae,si=new ae,Z_=new Qt,K_=new gl;class zi{constructor(e=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return K_.setFromEuler(this),this.setFromQuaternion(K_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JT=0;const J_=new ae,Cs=new gl,xa=new Qt,Vc=new ae,Qo=new ae,QT=new ae,$T=new gl,Q_=new ae(1,0,0),$_=new ae(0,1,0),ex=new ae(0,0,1),tx={type:"added"},eb={type:"removed"},ws={type:"childadded",child:null},Zh={type:"childremoved",child:null};class En extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new ae,i=new zi,s=new gl,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qt},normalMatrix:{value:new _t}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Q_,e)}rotateY(e){return this.rotateOnAxis($_,e)}rotateZ(e){return this.rotateOnAxis(ex,e)}translateOnAxis(e,i){return J_.copy(e).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Q_,e)}translateY(e){return this.translateOnAxis($_,e)}translateZ(e){return this.translateOnAxis(ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Vc.copy(e):Vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(Qo,Vc,this.up):xa.lookAt(Vc,Qo,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Cs.setFromRotationMatrix(xa),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tx),ws.child=e,this.dispatchEvent(ws),ws.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eb),Zh.child=e,this.dispatchEvent(Zh),Zh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tx),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,QT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,$T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),_=h(e.shapes),x=h(e.skeletons),y=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new ae(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new ae,Sa=new ae,Kh=new ae,Ea=new ae,Ds=new ae,Ns=new ae,nx=new ae,Jh=new ae,Qh=new ae,$h=new ae,ed=new nn,td=new nn,nd=new nn;class Ii{constructor(e=new ae,i=new ae,s=new ae){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Oi.subVectors(e,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Oi.subVectors(l,i),Sa.subVectors(s,i),Kh.subVectors(e,i);const h=Oi.dot(Oi),d=Oi.dot(Sa),m=Oi.dot(Kh),p=Sa.dot(Sa),g=Sa.dot(Kh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,T=(h*g-d*m)*x;return c.set(1-y-T,T,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(h,Ea.y),m.addScaledVector(d,Ea.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,s),nd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ed,c.x),h.addScaledVector(td,c.y),h.addScaledVector(nd,c.z),h}static isFrontFacing(e,i,s,l){return Oi.subVectors(s,i),Sa.subVectors(e,i),Oi.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Oi.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Ds.subVectors(l,s),Ns.subVectors(c,s),Jh.subVectors(e,s);const m=Ds.dot(Jh),p=Ns.dot(Jh);if(m<=0&&p<=0)return i.copy(s);Qh.subVectors(e,l);const g=Ds.dot(Qh),_=Ns.dot(Qh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Ds,h);$h.subVectors(e,c);const y=Ds.dot($h),T=Ns.dot($h);if(T>=0&&y<=T)return i.copy(c);const b=y*p-m*T;if(b<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Ns,d);const M=g*T-y*_;if(M<=0&&_-g>=0&&y-T>=0)return nx.subVectors(c,l),d=(_-g)/(_-g+(y-T)),i.copy(l).addScaledVector(nx,d);const S=1/(M+b+x);return h=b*S,d=x*S,i.copy(s).addScaledVector(Ds,h).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function id(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class At{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Nt.workingColorSpace){if(e=Up(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=id(h,c,e+1/3),this.g=id(h,c,e),this.b=id(h,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=Kn){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const s=wS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Nt.workingToColorSpace(Fn.copy(this),e),Math.round(bt(Fn.r*255,0,255))*65536+Math.round(bt(Fn.g*255,0,255))*256+Math.round(bt(Fn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Kn){Nt.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(Xc);const s=ul(nr.h,Xc.h,i),l=ul(nr.s,Xc.s,i),c=ul(nr.l,Xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new At;At.NAMES=wS;let tb=0;class zr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Vs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=bd,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Td&&(s.blendSrc=this.blendSrc),this.blendDst!==bd&&(s.blendDst=this.blendDst),this.blendEquation!==Lr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class DS extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=uS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new ae,kc=new ct;let nb=0;class ui{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=G_,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)kc.fromBufferAttribute(this,i),kc.applyMatrix3(e),this.setXY(i,kc.x,kc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Bs(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G_&&(e.usage=this.usage),e}}class NS extends ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class US extends ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Bi extends ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}let ib=0;const Mi=new Qt,ad=new En,Us=new ae,oi=new vl,$o=new vl,Sn=new ae;class hi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RS(e)?US:NS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _t().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Bi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];$o.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(oi.min,$o.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,$o.max),oi.expandByPoint(Sn)):(oi.expandByPoint($o.min),oi.expandByPoint($o.max))}oi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(Us.fromBufferAttribute(e,p),Sn.add(Us)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new ae,m[K]=new ae;const p=new ae,g=new ae,_=new ae,x=new ct,y=new ct,T=new ct,b=new ae,M=new ae;function S(K,C,w){p.fromBufferAttribute(s,K),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),T.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(x),T.sub(x);const X=1/(y.x*T.y-T.x*y.y);isFinite(X)&&(b.copy(g).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(X),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-T.x).multiplyScalar(X),d[K].add(b),d[C].add(b),d[w].add(b),m[K].add(M),m[C].add(M),m[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,C=I.length;K<C;++K){const w=I[K],X=w.start,se=w.count;for(let $=X,ce=X+se;$<ce;$+=3)S(e.getX($+0),e.getX($+1),e.getX($+2))}const O=new ae,N=new ae,z=new ae,B=new ae;function P(K){z.fromBufferAttribute(l,K),B.copy(z);const C=d[K];O.copy(C),O.sub(z.multiplyScalar(z.dot(C))).normalize(),N.crossVectors(B,C);const X=N.dot(m[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,X)}for(let K=0,C=I.length;K<C;++K){const w=I[K],X=w.start,se=w.count;for(let $=X,ce=X+se;$<ce;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new ae,c=new ae,h=new ae,d=new ae,m=new ae,p=new ae,g=new ae,_=new ae;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),b=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,T=0;for(let b=0,M=m.length;b<M;b++){d.isInterleavedBufferAttribute?y=m[b]*d.data.stride+d.offset:y=m[b]*g;for(let S=0;S<g;S++)x[T++]=p[y++]}return new ui(x,g,_)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new hi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ix=new Qt,Rr=new Tu,Yc=new _l,ax=new ae,Wc=new ae,jc=new ae,qc=new ae,rd=new ae,Zc=new ae,rx=new ae,Kc=new ae;class fi extends En{constructor(e=new hi,i=new DS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(rd.fromBufferAttribute(_,e),h?Zc.addScaledVector(rd,g):Zc.addScaledVector(rd.sub(i),g))}i.add(Zc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(c),Rr.copy(e.ray).recast(e.near),!(Yc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Yc,ax)===null||Rr.origin.distanceToSquared(ax)>(e.far-e.near)**2))&&(ix.copy(c).invert(),Rr.copy(e.ray).applyMatrix4(ix),!(s.boundingBox!==null&&Rr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,b=x.length;T<b;T++){const M=x[T],S=h[M.materialIndex],I=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let N=I,z=O;N<z;N+=3){const B=d.getX(N),P=d.getX(N+1),K=d.getX(N+2);l=Jc(this,S,e,s,p,g,_,B,P,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let M=T,S=b;M<S;M+=3){const I=d.getX(M),O=d.getX(M+1),N=d.getX(M+2);l=Jc(this,h,e,s,p,g,_,I,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,b=x.length;T<b;T++){const M=x[T],S=h[M.materialIndex],I=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=I,z=O;N<z;N+=3){const B=N,P=N+1,K=N+2;l=Jc(this,S,e,s,p,g,_,B,P,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let M=T,S=b;M<S;M+=3){const I=M,O=M+1,N=M+2;l=Jc(this,h,e,s,p,g,_,I,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ab(a,e,i,s,l,c,h,d){let m;if(e.side===Qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===sr,d),m===null)return null;Kc.copy(d),Kc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Kc);return p<i.near||p>i.far?null:{distance:p,point:Kc.clone(),object:a}}function Jc(a,e,i,s,l,c,h,d,m,p){a.getVertexPosition(d,Wc),a.getVertexPosition(m,jc),a.getVertexPosition(p,qc);const g=ab(a,e,i,s,Wc,jc,qc,rx);if(g){const _=new ae;Ii.getBarycoord(rx,Wc,jc,qc,_),l&&(g.uv=Ii.getInterpolatedAttribute(l,d,m,p,_,new ct)),c&&(g.uv1=Ii.getInterpolatedAttribute(c,d,m,p,_,new ct)),h&&(g.normal=Ii.getInterpolatedAttribute(h,d,m,p,_,new ae),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ae,materialIndex:0};Ii.getNormal(Wc,jc,qc,x.normal),g.face=x,g.barycoord=_}return g}class Qs extends hi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,y=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Bi(p,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(_,2));function T(b,M,S,I,O,N,z,B,P,K,C){const w=N/P,X=z/K,se=N/2,$=z/2,ce=B/2,me=P+1,L=K+1;let G=0,te=0;const Te=new ae;for(let Me=0;Me<L;Me++){const U=Me*X-$;for(let W=0;W<me;W++){const ue=W*w-se;Te[b]=ue*I,Te[M]=U*O,Te[S]=ce,p.push(Te.x,Te.y,Te.z),Te[b]=0,Te[M]=0,Te[S]=B>0?1:-1,g.push(Te.x,Te.y,Te.z),_.push(W/P),_.push(1-Me/K),G+=1}}for(let Me=0;Me<K;Me++)for(let U=0;U<P;U++){const W=x+U+me*Me,ue=x+U+me*(Me+1),_e=x+(U+1)+me*(Me+1),Re=x+(U+1)+me*Me;m.push(W,ue,Re),m.push(ue,_e,Re),te+=6}d.addGroup(y,te,C),y+=te,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(a){const e={};for(let i=0;i<a.length;i++){const s=Zs(a[i]);for(const l in s)e[l]=s[l]}return e}function rb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function LS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const sb={clone:Zs,merge:Gn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=rb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class vu extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new ae,sx=new ct,ox=new ct;class Jn extends vu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,sx,ox),i.subVectors(ox,sx)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(cl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ls=-90,Os=1;class cb extends En{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(Ls,Os,e,i);l.layers=this.layers,this.add(l);const c=new Jn(Ls,Os,e,i);c.layers=this.layers,this.add(c);const h=new Jn(Ls,Os,e,i);h.layers=this.layers,this.add(h);const d=new Jn(Ls,Os,e,i);d.layers=this.layers,this.add(d);const m=new Jn(Ls,Os,e,i);m.layers=this.layers,this.add(m);const p=new Jn(Ls,Os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===gu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,x,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class OS extends Bn{constructor(e=[],i=Br,s,l,c,h,d,m,p,g){super(e,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IS extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new OS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Qs(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Zs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new fi(l,c),d=i.minFilter;return i.minFilter===Ir&&(i.minFilter=pn),new cb(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class rl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ub={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const M=i.getJointPose(b,s),S=this._getHandJoint(p,b);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,T=.005;p.inputState.pinching&&x>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new rl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class mp extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class PS extends Bn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Un,g=Un,_,x){super(null,h,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const od=new ae,fb=new ae,hb=new _t;class Ur{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=od.subVectors(s,i).cross(fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(od),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||hb.getNormalMatrix(e),l=this.coplanarPoint(od).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new _l,db=new ct(.5,.5),Qc=new ae;class Ip{constructor(e=new Ur,i=new Ur,s=new Ur,l=new Ur,c=new Ur,h=new Ur){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],T=c[8],b=c[9],M=c[10],S=c[11],I=c[12],O=c[13],N=c[14],z=c[15];if(l[0].setComponents(p-h,y-g,S-T,z-I).normalize(),l[1].setComponents(p+h,y+g,S+T,z+I).normalize(),l[2].setComponents(p+d,y+_,S+b,z+O).normalize(),l[3].setComponents(p-d,y-_,S-b,z-O).normalize(),s)l[4].setComponents(m,x,M,N).normalize(),l[5].setComponents(p-m,y-x,S-M,z-N).normalize();else if(l[4].setComponents(p-m,y-x,S-M,z-N).normalize(),i===ji)l[5].setComponents(p+m,y+x,S+M,z+N).normalize();else if(i===gu)l[5].setComponents(m,x,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const i=db.distanceTo(e.center);return Cr.radius=.7071067811865476+i,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Qc.x=l.normal.x>0?e.max.x:e.min.x,Qc.y=l.normal.y>0?e.max.y:e.min.y,Qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pb extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _u=new ae,xu=new ae,lx=new Qt,el=new Tu,$c=new _l,ld=new ae,cx=new ae;class mb extends En{constructor(e=new hi,i=new pb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)_u.fromBufferAttribute(i,l-1),xu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=_u.distanceTo(xu);e.setAttribute("lineDistance",new Bi(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,e.ray.intersectsSphere($c)===!1)return;lx.copy(l).invert(),el.copy(e.ray).applyMatrix4(lx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let b=y,M=T-1;b<M;b+=p){const S=g.getX(b),I=g.getX(b+1),O=eu(this,e,el,m,S,I,b);O&&i.push(O)}if(this.isLineLoop){const b=g.getX(T-1),M=g.getX(y),S=eu(this,e,el,m,b,M,T-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let b=y,M=T-1;b<M;b+=p){const S=eu(this,e,el,m,b,b+1,b);S&&i.push(S)}if(this.isLineLoop){const b=eu(this,e,el,m,T-1,y,T-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function eu(a,e,i,s,l,c,h){const d=a.geometry.attributes.position;if(_u.fromBufferAttribute(d,l),xu.fromBufferAttribute(d,c),i.distanceSqToSegment(_u,xu,ld,cx)>s)return;ld.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(ld);if(!(p<e.near||p>e.far))return{distance:p,point:cx.clone().applyMatrix4(a.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:a}}const ux=new ae,fx=new ae;class gb extends mb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)ux.fromBufferAttribute(i,l),fx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ux.distanceTo(fx);e.setAttribute("lineDistance",new Bi(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FS extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hx=new Qt,gp=new Tu,tu=new _l,nu=new ae;class vb extends En{constructor(e=new hi,i=new FS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(l),tu.radius+=c,e.ray.intersectsSphere(tu)===!1)return;hx.copy(l).invert(),gp.copy(e.ray).applyMatrix4(hx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let T=x,b=y;T<b;T++){const M=p.getX(T);nu.fromBufferAttribute(_,M),dx(nu,M,m,l,e,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(_.count,h.start+h.count);for(let T=x,b=y;T<b;T++)nu.fromBufferAttribute(_,T),dx(nu,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function dx(a,e,i,s,l,c,h){const d=gp.distanceSqToPoint(a);if(d<i){const m=new ae;gp.closestPointToPoint(a,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class ml extends Bn{constructor(e,i,s=Zi,l,c,h,d=Un,m=Un,p,g=ba,_=1){if(g!==ba&&g!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _b extends ml{constructor(e,i=Zi,s=Br,l,c,h=Un,d=Un,m,p=ba){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class BS extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends hi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=e/d,x=i/m,y=[],T=[],b=[],M=[];for(let S=0;S<g;S++){const I=S*x-h;for(let O=0;O<p;O++){const N=O*_-c;T.push(N,-I,0),b.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let I=0;I<d;I++){const O=I+p*S,N=I+p*(S+1),z=I+1+p*(S+1),B=I+1+p*S;y.push(O,N,B),y.push(N,z,B)}this.setIndex(y),this.setAttribute("position",new Bi(T,3)),this.setAttribute("normal",new Bi(b,3)),this.setAttribute("uv",new Bi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class sl extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cd extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=AS,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xb extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ud={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Eb{constructor(e,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],T=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yb=new Eb;class Pp{constructor(e){this.manager=e!==void 0?e:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class Mb extends Pp{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=ud.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let _=Is.get(h);_===void 0&&(_=[],Is.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=dl("img");function m(){g(),i&&i(this);const _=Is.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onLoad&&y.onLoad(this)}Is.delete(this),c.manager.itemEnd(e)}function p(_){g(),l&&l(_),ud.remove(`image:${e}`);const x=Is.get(this)||[];for(let y=0;y<x.length;y++){const T=x[y];T.onError&&T.onError(_)}Is.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),ud.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class Tb extends Pp{constructor(e){super(e)}load(e,i,s,l){const c=new Bn,h=new Mb(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Fp extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const fd=new Qt,px=new ae,mx=new ae;class zS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;px.setFromMatrixPosition(e.matrixWorld),i.position.copy(px),mx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(mx),i.updateMatrixWorld(),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bb extends zS{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,s=qs*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ab extends Fp{constructor(e,i,s=0,l=Math.PI/3,c=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new bb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class Rb extends zS{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class Cb extends Fp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Rb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class HS extends vu{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wb extends Fp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const gx=new Qt;class Ub{constructor(e,i,s=0,l=1/0){this.ray=new Tu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Dt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return gx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gx),this}intersectObject(e,i=!0,s=[]){return vp(e,this,s,i),s.sort(vx),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)vp(e[l],this,s,i);return s.sort(vx),s}}function vx(a,e){return a.distance-e.distance}function vp(a,e,i,s){let l=!0;if(a.layers.test(e.layers)&&a.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=a.children;for(let h=0,d=c.length;h<d;h++)vp(c[h],e,i,!0)}}function _x(a,e,i,s){const l=Lb(s);switch(i){case MS:return a*e;case bS:return a*e/l.components*l.byteLength;case Rp:return a*e/l.components*l.byteLength;case Ws:return a*e*2/l.components*l.byteLength;case Cp:return a*e*2/l.components*l.byteLength;case TS:return a*e*3/l.components*l.byteLength;case Ti:return a*e*4/l.components*l.byteLength;case wp:return a*e*4/l.components*l.byteLength;case su:case ou:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case lu:case cu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(a,16)*Math.max(e,8)/4;case Fd:case zd:return Math.max(a,8)*Math.max(e,8)/2;case Gd:case Vd:case kd:case Yd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Wd:case jd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ep:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case tp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case np:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ip:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case ap:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case rp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case sp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case op:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case lp:case cp:case up:return Math.ceil(a/4)*Math.ceil(e/4)*16;case fp:case hp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case dp:case pp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Lb(a){switch(a){case li:case xS:return{byteLength:1,components:1};case fl:case SS:case Ki:return{byteLength:2,components:1};case bp:case Ap:return{byteLength:2,components:4};case Zi:case Tp:case Pi:return{byteLength:4,components:1};case ES:case yS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function GS(){let a=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Ob(a){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(a.bindBuffer(p,d),_.length===0)a.bufferSubData(p,0,g);else{_.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<_.length;y++){const T=_[x],b=_[y];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++x,_[x]=b)}_.length=x+1;for(let y=0,T=_.length;y<T;y++){const b=_[y];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fA="gl_FragColor = linearToOutputTexel( gl_FragColor );",hA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_A=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Ib,alphahash_pars_fragment:Pb,alphamap_fragment:Fb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:Hb,aomap_fragment:Gb,aomap_pars_fragment:Vb,batching_pars_vertex:Xb,batching_vertex:kb,begin_vertex:Yb,beginnormal_vertex:Wb,bsdfs:jb,iridescence_fragment:qb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:$b,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:nA,color_vertex:iA,common:aA,cube_uv_reflection_fragment:rA,defaultnormal_vertex:sA,displacementmap_pars_vertex:oA,displacementmap_vertex:lA,emissivemap_fragment:cA,emissivemap_pars_fragment:uA,colorspace_fragment:fA,colorspace_pars_fragment:hA,envmap_fragment:dA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:gA,envmap_physical_pars_fragment:RA,envmap_vertex:vA,fog_vertex:_A,fog_pars_vertex:xA,fog_fragment:SA,fog_pars_fragment:EA,gradientmap_pars_fragment:yA,lightmap_pars_fragment:MA,lights_lambert_fragment:TA,lights_lambert_pars_fragment:bA,lights_pars_begin:AA,lights_toon_fragment:CA,lights_toon_pars_fragment:wA,lights_phong_fragment:DA,lights_phong_pars_fragment:NA,lights_physical_fragment:UA,lights_physical_pars_fragment:LA,lights_fragment_begin:OA,lights_fragment_maps:IA,lights_fragment_end:PA,logdepthbuf_fragment:FA,logdepthbuf_pars_fragment:BA,logdepthbuf_pars_vertex:zA,logdepthbuf_vertex:HA,map_fragment:GA,map_pars_fragment:VA,map_particle_fragment:XA,map_particle_pars_fragment:kA,metalnessmap_fragment:YA,metalnessmap_pars_fragment:WA,morphinstance_vertex:jA,morphcolor_vertex:qA,morphnormal_vertex:ZA,morphtarget_pars_vertex:KA,morphtarget_vertex:JA,normal_fragment_begin:QA,normal_fragment_maps:$A,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:o1,opaque_fragment:l1,packing:c1,premultiplied_alpha_fragment:u1,project_vertex:f1,dithering_fragment:h1,dithering_pars_fragment:d1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:v1,shadowmap_vertex:_1,shadowmask_pars_fragment:x1,skinbase_vertex:S1,skinning_pars_vertex:E1,skinning_vertex:y1,skinnormal_vertex:M1,specularmap_fragment:T1,specularmap_pars_fragment:b1,tonemapping_fragment:A1,tonemapping_pars_fragment:R1,transmission_fragment:C1,transmission_pars_fragment:w1,uv_pars_fragment:D1,uv_pars_vertex:N1,uv_vertex:U1,worldpos_vertex:L1,background_vert:O1,background_frag:I1,backgroundCube_vert:P1,backgroundCube_frag:F1,cube_vert:B1,cube_frag:z1,depth_vert:H1,depth_frag:G1,distance_vert:V1,distance_frag:X1,equirect_vert:k1,equirect_frag:Y1,linedashed_vert:W1,linedashed_frag:j1,meshbasic_vert:q1,meshbasic_frag:Z1,meshlambert_vert:K1,meshlambert_frag:J1,meshmatcap_vert:Q1,meshmatcap_frag:$1,meshnormal_vert:eR,meshnormal_frag:tR,meshphong_vert:nR,meshphong_frag:iR,meshphysical_vert:aR,meshphysical_frag:rR,meshtoon_vert:sR,meshtoon_frag:oR,points_vert:lR,points_frag:cR,shadow_vert:uR,shadow_frag:fR,sprite_vert:hR,sprite_frag:dR},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Wi={basic:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Gn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Gn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Gn([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Gn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Gn([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Gn([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Gn([Be.common,Be.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Gn([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Wi.physical={uniforms:Gn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const iu={r:0,b:0,g:0},wr=new zi,pR=new Qt;function mR(a,e,i,s,l,c,h){const d=new At(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function T(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:e).get(N)),N}function b(O){let N=!1;const z=T(O);z===null?S(d,m):z&&z.isColor&&(S(z,1),N=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(a.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(O,N){const z=T(N);z&&(z.isCubeTexture||z.mapping===Mu)?(g===void 0&&(g=new fi(new Qs(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Zs(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),wr.copy(N.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pR.makeRotationFromEuler(wr)),g.material.toneMapped=Nt.getTransfer(z.colorSpace)!==Vt,(_!==z||x!==z.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,y=a.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new fi(new Fr(2,2),new Ji({name:"BackgroundMaterial",uniforms:Zs(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(z.colorSpace)!==Vt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,y=a.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function S(O,N){O.getRGB(iu,LS(a)),s.buffers.color.setClear(iu.r,iu.g,iu.b,N,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,N=1){d.set(O),m=N,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,S(d,m)},render:b,addToRenderList:M,dispose:I}}function gR(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(w,X,se,$,ce){let me=!1;const L=_($,se,X);c!==L&&(c=L,p(c.object)),me=y(w,$,se,ce),me&&T(w,$,se,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(me||h)&&(h=!1,N(w,X,se,$),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function m(){return a.createVertexArray()}function p(w){return a.bindVertexArray(w)}function g(w){return a.deleteVertexArray(w)}function _(w,X,se){const $=se.wireframe===!0;let ce=s[w.id];ce===void 0&&(ce={},s[w.id]=ce);let me=ce[X.id];me===void 0&&(me={},ce[X.id]=me);let L=me[$];return L===void 0&&(L=x(m()),me[$]=L),L}function x(w){const X=[],se=[],$=[];for(let ce=0;ce<i;ce++)X[ce]=0,se[ce]=0,$[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:se,attributeDivisors:$,object:w,attributes:{},index:null}}function y(w,X,se,$){const ce=c.attributes,me=X.attributes;let L=0;const G=se.getAttributes();for(const te in G)if(G[te].location>=0){const Me=ce[te];let U=me[te];if(U===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),Me===void 0||Me.attribute!==U||U&&Me.data!==U.data)return!0;L++}return c.attributesNum!==L||c.index!==$}function T(w,X,se,$){const ce={},me=X.attributes;let L=0;const G=se.getAttributes();for(const te in G)if(G[te].location>=0){let Me=me[te];Me===void 0&&(te==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),te==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor));const U={};U.attribute=Me,Me&&Me.data&&(U.data=Me.data),ce[te]=U,L++}c.attributes=ce,c.attributesNum=L,c.index=$}function b(){const w=c.newAttributes;for(let X=0,se=w.length;X<se;X++)w[X]=0}function M(w){S(w,0)}function S(w,X){const se=c.newAttributes,$=c.enabledAttributes,ce=c.attributeDivisors;se[w]=1,$[w]===0&&(a.enableVertexAttribArray(w),$[w]=1),ce[w]!==X&&(a.vertexAttribDivisor(w,X),ce[w]=X)}function I(){const w=c.newAttributes,X=c.enabledAttributes;for(let se=0,$=X.length;se<$;se++)X[se]!==w[se]&&(a.disableVertexAttribArray(se),X[se]=0)}function O(w,X,se,$,ce,me,L){L===!0?a.vertexAttribIPointer(w,X,se,ce,me):a.vertexAttribPointer(w,X,se,$,ce,me)}function N(w,X,se,$){b();const ce=$.attributes,me=se.getAttributes(),L=X.defaultAttributeValues;for(const G in me){const te=me[G];if(te.location>=0){let Te=ce[G];if(Te===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Te=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Te=w.instanceColor)),Te!==void 0){const Me=Te.normalized,U=Te.itemSize,W=e.get(Te);if(W===void 0)continue;const ue=W.buffer,_e=W.type,Re=W.bytesPerElement,Z=_e===a.INT||_e===a.UNSIGNED_INT||Te.gpuType===Tp;if(Te.isInterleavedBufferAttribute){const re=Te.data,Q=re.stride,be=Te.offset;if(re.isInstancedInterleavedBuffer){for(let Se=0;Se<te.locationSize;Se++)S(te.location+Se,re.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Se=0;Se<te.locationSize;Se++)M(te.location+Se);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let Se=0;Se<te.locationSize;Se++)O(te.location+Se,U/te.locationSize,_e,Me,Q*Re,(be+U/te.locationSize*Se)*Re,Z)}else{if(Te.isInstancedBufferAttribute){for(let re=0;re<te.locationSize;re++)S(te.location+re,Te.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let re=0;re<te.locationSize;re++)M(te.location+re);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let re=0;re<te.locationSize;re++)O(te.location+re,U/te.locationSize,_e,Me,U*Re,U/te.locationSize*re*Re,Z)}}else if(L!==void 0){const Me=L[G];if(Me!==void 0)switch(Me.length){case 2:a.vertexAttrib2fv(te.location,Me);break;case 3:a.vertexAttrib3fv(te.location,Me);break;case 4:a.vertexAttrib4fv(te.location,Me);break;default:a.vertexAttrib1fv(te.location,Me)}}}}I()}function z(){K();for(const w in s){const X=s[w];for(const se in X){const $=X[se];for(const ce in $)g($[ce].object),delete $[ce];delete X[se]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const X=s[w.id];for(const se in X){const $=X[se];for(const ce in $)g($[ce].object),delete $[ce];delete X[se]}delete s[w.id]}function P(w){for(const X in s){const se=s[X];if(se[w.id]===void 0)continue;const $=se[w.id];for(const ce in $)g($[ce].object),delete $[ce];delete se[w.id]}}function K(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:I}}function vR(a,e,i){let s;function l(p){s=p}function c(p,g){a.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(a.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let T=0;T<_;T++)y+=g[T];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],g[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let T=0;for(let b=0;b<_;b++)T+=g[b]*x[b];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _R(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ti&&s.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const K=P===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==li&&s.convert(P)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pi&&!K)}function m(P){if(P==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ut("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),O=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=a.getParameter(a.MAX_SAMPLES),B=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:N,maxSamples:z,samples:B}}function xR(a){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Ur,d=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const T=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,S=a.get(_);if(!l||T===null||T.length===0||c&&!M)c?g(null):p();else{const I=c?0:s,O=I*4;let N=S.clippingState||null;m.value=N,N=g(T,x,O,y);for(let z=0;z!==O;++z)N[z]=i[z];S.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,y,T){const b=_!==null?_.length:0;let M=null;if(b!==0){if(M=m.value,T!==!0||M===null){const S=y+b*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,N=y;O!==b;++O,N+=4)h.copy(_[O]).applyMatrix4(I,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function SR(a){let e=new WeakMap;function i(h,d){return d===Ld?h.mapping=Br:d===Od&&(h.mapping=Ys),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ld||d===Od)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new IS(m.height);return p.fromEquirectangularTexture(a,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const rr=4,xx=[.125,.215,.35,.446,.526,.582],Or=20,ER=256,tl=new HS,Sx=new At;let hd=null,dd=0,pd=0,md=!1;const yR=new ae;class Ex{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=yR}=c;hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,dd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Br||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Ki,format:Ti,colorSpace:js,depthBuffer:!1},l=yx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MR(c)),this._blurMaterial=bR(c,e,i),this._ggxMaterial=TR(c,e,i)}return l}_compileMaterial(e){const i=new fi(new hi,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,s,l,c){const m=new Jn(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Sx),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Qs,new DS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let S=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,S=!0):(M.color.copy(Sx),S=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const z=this._cubeSize;Ps(l,N*z,O>2?z:0,z,z),_.setRenderTarget(l),S&&_.render(b,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Br||e.mapping===Ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,y=_*x,{_lodMax:T}=this,b=this._sizeLods[s],M=3*b*(s>T-rr?s-T+rr:0),S=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,Ps(c,M,S,3*b,2*b),l.setRenderTarget(c),l.render(d,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Ps(e,M,S,3*b,2*b),l.setRenderTarget(e),l.render(d,tl)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Or-1),b=c/T,M=isFinite(c)?1+Math.floor(g*b):Or;M>Or&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Or}`);const S=[];let I=0;for(let P=0;P<Or;++P){const K=P/b,C=Math.exp(-K*K/2);S.push(C),P===0?I+=C:P<M&&(I+=2*C)}for(let P=0;P<S.length;P++)S[P]=S[P]/I;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-s;const N=this._sizeLods[l],z=3*N*(l>O-rr?l-O+rr:0),B=4*(this._cubeSize-N);Ps(i,z,B,3*N,2*N),m.setRenderTarget(i),m.render(_,tl)}}function MR(a){const e=[],i=[],s=[];let l=a;const c=a-rr+1+xx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>a-rr?m=xx[h-a+rr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,T=6,b=3,M=2,S=1,I=new Float32Array(b*T*y),O=new Float32Array(M*T*y),N=new Float32Array(S*T*y);for(let B=0;B<y;B++){const P=B%3*2/3-1,K=B>2?0:-1,C=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];I.set(C,b*T*B),O.set(x,M*T*B);const w=[B,B,B,B,B,B];N.set(w,S*T*B)}const z=new hi;z.setAttribute("position",new ui(I,b)),z.setAttribute("uv",new ui(O,M)),z.setAttribute("faceIndex",new ui(N,S)),s.push(new fi(z,null)),l>rr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function yx(a,e,i){const s=new Fi(a,e,i);return s.texture.mapping=Mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ps(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function TR(a,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ER,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function bR(a,e,i){const s=new Float32Array(Or),l=new ae(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Mx(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Tx(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AR(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ld||m===Od,g=m===Br||m===Ys;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Ex(a)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Ex(a)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function RR(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&pl("WebGLRenderer: "+s+" extension not supported."),l}}}function CR(a,e,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,T=_.attributes.position;let b=0;if(y!==null){const I=y.array;b=y.version;for(let O=0,N=I.length;O<N;O+=3){const z=I[O+0],B=I[O+1],P=I[O+2];x.push(z,B,B,P,P,z)}}else if(T!==void 0){const I=T.array;b=T.version;for(let O=0,N=I.length/3-1;O<N;O+=3){const z=O+0,B=O+1,P=O+2;x.push(z,B,B,P,P,z)}}else return;const M=new(RS(x)?US:NS)(x,1);M.version=b;const S=c.get(_);S&&e.remove(S),c.set(_,M)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function wR(a,e,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){a.drawElements(s,y,c,x*h),i.update(y,s,1)}function p(x,y,T){T!==0&&(a.drawElementsInstanced(s,y,c,x*h,T),i.update(y,s,T))}function g(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,T);let M=0;for(let S=0;S<T;S++)M+=y[S];i.update(M,s,1)}function _(x,y,T,b){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)p(x[S]/h,y[S],b[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,b,0,T);let S=0;for(let I=0;I<T;I++)S+=y[I]*b[I];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function DR(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Dt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function NR(a,e,i){const s=new WeakMap,l=new nn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let w=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;T===!0&&(N=1),b===!0&&(N=2),M===!0&&(N=3);let z=d.attributes.position.count*N,B=1;z>e.maxTextureSize&&(B=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*B*4*_),K=new CS(P,z,B,_);K.type=Pi,K.needsUpdate=!0;const C=N*4;for(let X=0;X<_;X++){const se=S[X],$=I[X],ce=O[X],me=z*B*4*X;for(let L=0;L<se.count;L++){const G=L*C;T===!0&&(l.fromBufferAttribute(se,L),P[me+G+0]=l.x,P[me+G+1]=l.y,P[me+G+2]=l.z,P[me+G+3]=0),b===!0&&(l.fromBufferAttribute($,L),P[me+G+4]=l.x,P[me+G+5]=l.y,P[me+G+6]=l.z,P[me+G+7]=0),M===!0&&(l.fromBufferAttribute(ce,L),P[me+G+8]=l.x,P[me+G+9]=l.y,P[me+G+10]=l.z,P[me+G+11]=ce.itemSize===4?l.w:1)}}x={count:_,texture:K,size:new ct(z,B)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const b=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function UR(a,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const LR={[fS]:"LINEAR_TONE_MAPPING",[hS]:"REINHARD_TONE_MAPPING",[dS]:"CINEON_TONE_MAPPING",[pS]:"ACES_FILMIC_TONE_MAPPING",[gS]:"AGX_TONE_MAPPING",[vS]:"NEUTRAL_TONE_MAPPING",[mS]:"CUSTOM_TONE_MAPPING"};function OR(a,e,i,s,l){const c=new Fi(e,i,{type:a,depthBuffer:s,stencilBuffer:l}),h=new Fi(e,i,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new hi;d.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const m=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new fi(d,m),g=new HS(-1,1,1,-1,0,1);let _=null,x=null,y=!1,T,b=null,M=[],S=!1;this.setSize=function(I,O){c.setSize(I,O),h.setSize(I,O);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(I,O)}},this.setEffects=function(I){M=I,S=M.length>0&&M[0].isRenderPass===!0;const O=c.width,N=c.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(O,N)}},this.begin=function(I,O){if(y||I.toneMapping===qi&&M.length===0)return!1;if(b=O,O!==null){const N=O.width,z=O.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return S===!1&&I.setRenderTarget(c),T=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return S},this.end=function(I,O){I.toneMapping=T,y=!0;let N=c,z=h;for(let B=0;B<M.length;B++){const P=M[B];if(P.enabled!==!1&&(P.render(I,z,N,O),P.needsSwap!==!1)){const K=N;N=z,z=K}}if(_!==I.outputColorSpace||x!==I.toneMapping){_=I.outputColorSpace,x=I.toneMapping,m.defines={},Nt.getTransfer(_)===Vt&&(m.defines.SRGB_TRANSFER="");const B=LR[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,I.setRenderTarget(b),I.render(p,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const VS=new Bn,_p=new ml(1,1),XS=new CS,kS=new jT,YS=new OS,bx=[],Ax=[],Rx=new Float32Array(16),Cx=new Float32Array(9),wx=new Float32Array(4);function $s(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=bx[l];if(c===void 0&&(c=new Float32Array(l),bx[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,a[h].toArray(c,d)}return c}function vn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function _n(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Au(a,e){let i=Ax[e];i===void 0&&(i=new Int32Array(e),Ax[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function IR(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function PR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2fv(this.addr,e),_n(i,e)}}function FR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;a.uniform3fv(this.addr,e),_n(i,e)}}function BR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4fv(this.addr,e),_n(i,e)}}function zR(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;wx.set(s),a.uniformMatrix2fv(this.addr,!1,wx),_n(i,s)}}function HR(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;Cx.set(s),a.uniformMatrix3fv(this.addr,!1,Cx),_n(i,s)}}function GR(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;Rx.set(s),a.uniformMatrix4fv(this.addr,!1,Rx),_n(i,s)}}function VR(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function XR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2iv(this.addr,e),_n(i,e)}}function kR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3iv(this.addr,e),_n(i,e)}}function YR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4iv(this.addr,e),_n(i,e)}}function WR(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function jR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2uiv(this.addr,e),_n(i,e)}}function qR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3uiv(this.addr,e),_n(i,e)}}function ZR(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4uiv(this.addr,e),_n(i,e)}}function KR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(_p.compareFunction=i.isReversedDepthBuffer()?Np:Dp,c=_p):c=VS,i.setTexture2D(e||c,l)}function JR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||kS,l)}function QR(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||YS,l)}function $R(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||XS,l)}function eC(a){switch(a){case 5126:return IR;case 35664:return PR;case 35665:return FR;case 35666:return BR;case 35674:return zR;case 35675:return HR;case 35676:return GR;case 5124:case 35670:return VR;case 35667:case 35671:return XR;case 35668:case 35672:return kR;case 35669:case 35673:return YR;case 5125:return WR;case 36294:return jR;case 36295:return qR;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return $R}}function tC(a,e){a.uniform1fv(this.addr,e)}function nC(a,e){const i=$s(e,this.size,2);a.uniform2fv(this.addr,i)}function iC(a,e){const i=$s(e,this.size,3);a.uniform3fv(this.addr,i)}function aC(a,e){const i=$s(e,this.size,4);a.uniform4fv(this.addr,i)}function rC(a,e){const i=$s(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function sC(a,e){const i=$s(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function oC(a,e){const i=$s(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function lC(a,e){a.uniform1iv(this.addr,e)}function cC(a,e){a.uniform2iv(this.addr,e)}function uC(a,e){a.uniform3iv(this.addr,e)}function fC(a,e){a.uniform4iv(this.addr,e)}function hC(a,e){a.uniform1uiv(this.addr,e)}function dC(a,e){a.uniform2uiv(this.addr,e)}function pC(a,e){a.uniform3uiv(this.addr,e)}function mC(a,e){a.uniform4uiv(this.addr,e)}function gC(a,e,i){const s=this.cache,l=e.length,c=Au(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));let h;this.type===a.SAMPLER_2D_SHADOW?h=_p:h=VS;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function vC(a,e,i){const s=this.cache,l=e.length,c=Au(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||kS,c[h])}function _C(a,e,i){const s=this.cache,l=e.length,c=Au(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||YS,c[h])}function xC(a,e,i){const s=this.cache,l=e.length,c=Au(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||XS,c[h])}function SC(a){switch(a){case 5126:return tC;case 35664:return nC;case 35665:return iC;case 35666:return aC;case 35674:return rC;case 35675:return sC;case 35676:return oC;case 5124:case 35670:return lC;case 35667:case 35671:return cC;case 35668:case 35672:return uC;case 35669:case 35673:return fC;case 5125:return hC;case 36294:return dC;case 36295:return pC;case 36296:return mC;case 35678:case 36198:case 36298:case 36306:case 35682:return gC;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return _C;case 36289:case 36303:case 36311:case 36292:return xC}}class EC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=eC(i.type)}}class yC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=SC(i.type)}}class MC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Dx(a,e){a.seq.push(e),a.map[e.id]=e}function TC(a,e,i){const s=a.name,l=s.length;for(gd.lastIndex=0;;){const c=gd.exec(s),h=gd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Dx(i,p===void 0?new EC(d,a,e):new yC(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new MC(d),Dx(i,_)),i=_}}}class uu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);TC(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Nx(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const bC=37297;let AC=0;function RC(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Ux=new _t;function CC(a){Nt._getMatrix(Ux,Nt.workingColorSpace,a);const e=`mat3( ${Ux.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(a)){case mu:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Lx(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+RC(a.getShaderSource(e),d)}else return c}function wC(a,e){const i=CC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const DC={[fS]:"Linear",[hS]:"Reinhard",[dS]:"Cineon",[pS]:"ACESFilmic",[gS]:"AgX",[vS]:"Neutral",[mS]:"Custom"};function NC(a,e){const i=DC[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new ae;function UC(){Nt.getLuminanceCoefficients(au);const a=au.x.toFixed(4),e=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function OC(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function IC(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),h=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:a.getAttribLocation(e,h),locationSize:d}}return i}function ol(a){return a!==""}function Ox(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ix(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PC=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(a){return a.replace(PC,BC)}const FC=new Map;function BC(a,e){let i=xt[e];if(i===void 0){const s=FC.get(e);if(s!==void 0)i=xt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return xp(i)}const zC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Px(a){return a.replace(zC,HC)}function HC(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Fx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const GC={[ru]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function VC(a){return GC[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XC={[Br]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function kC(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":XC[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const YC={[Ys]:"ENVMAP_MODE_REFRACTION"};function WC(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":YC[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jC={[uS]:"ENVMAP_BLENDING_MULTIPLY",[dT]:"ENVMAP_BLENDING_MIX",[pT]:"ENVMAP_BLENDING_ADD"};function qC(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":jC[a.combine]||"ENVMAP_BLENDING_NONE"}function ZC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function KC(a,e,i,s){const l=a.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=VC(i),p=kC(i),g=WC(i),_=qC(i),x=ZC(i),y=LC(i),T=OC(c),b=l.createProgram();let M,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ol).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ol).join(`
`),S.length>0&&(S+=`
`)):(M=[Fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),S=[Fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?xt.tonemapping_pars_fragment:"",i.toneMapping!==qi?NC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,wC("linearToOutputTexel",i.outputColorSpace),UC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),h=xp(h),h=Ox(h,i),h=Ix(h,i),d=xp(d),d=Ox(d,i),d=Ix(d,i),h=Px(h),d=Px(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===V_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=I+M+h,N=I+S+d,z=Nx(l,l.VERTEX_SHADER,O),B=Nx(l,l.FRAGMENT_SHADER,N);l.attachShader(b,z),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(X){if(a.debug.checkShaderErrors){const se=l.getProgramInfoLog(b)||"",$=l.getShaderInfoLog(z)||"",ce=l.getShaderInfoLog(B)||"",me=se.trim(),L=$.trim(),G=ce.trim();let te=!0,Te=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,z,B);else{const Me=Lx(l,z,"vertex"),U=Lx(l,B,"fragment");Dt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+me+`
`+Me+`
`+U)}else me!==""?ut("WebGLProgram: Program Info Log:",me):(L===""||G==="")&&(Te=!1);Te&&(X.diagnostics={runnable:te,programLog:me,vertexShader:{log:L,prefix:M},fragmentShader:{log:G,prefix:S}})}l.deleteShader(z),l.deleteShader(B),K=new uu(l,b),C=IC(l,b)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,bC)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=B,this}let JC=0;class QC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new $C(e),i.set(e,s)),s}}class $C{constructor(e){this.id=JC++,this.code=e,this.usedTimes=0}}function ew(a,e,i,s,l,c,h){const d=new Op,m=new QC,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,X,se,$){const ce=se.fog,me=$.geometry,L=C.isMeshStandardMaterial?se.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||L),te=G&&G.mapping===Mu?G.image.height:null,Te=T[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&ut("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Me=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,U=Me!==void 0?Me.length:0;let W=0;me.morphAttributes.position!==void 0&&(W=1),me.morphAttributes.normal!==void 0&&(W=2),me.morphAttributes.color!==void 0&&(W=3);let ue,_e,Re,Z;if(Te){const wt=Wi[Te];ue=wt.vertexShader,_e=wt.fragmentShader}else ue=C.vertexShader,_e=C.fragmentShader,m.update(C),Re=m.getVertexShaderID(C),Z=m.getFragmentShaderID(C);const re=a.getRenderTarget(),Q=a.state.buffers.depth.getReversed(),be=$.isInstancedMesh===!0,Se=$.isBatchedMesh===!0,Le=!!C.map,nt=!!C.matcap,qe=!!G,Ze=!!C.aoMap,lt=!!C.lightMap,$e=!!C.bumpMap,Wt=!!C.normalMap,V=!!C.displacementMap,Ct=!!C.emissiveMap,mt=!!C.metalnessMap,yt=!!C.roughnessMap,Ye=C.anisotropy>0,D=C.clearcoat>0,v=C.dispersion>0,F=C.iridescence>0,J=C.sheen>0,pe=C.transmission>0,fe=Ye&&!!C.anisotropyMap,Ve=D&&!!C.clearcoatMap,Ne=D&&!!C.clearcoatNormalMap,ke=D&&!!C.clearcoatRoughnessMap,at=F&&!!C.iridescenceMap,Ce=F&&!!C.iridescenceThicknessMap,we=J&&!!C.sheenColorMap,Ge=J&&!!C.sheenRoughnessMap,ze=!!C.specularMap,Oe=!!C.specularColorMap,gt=!!C.specularIntensityMap,Y=pe&&!!C.transmissionMap,Pe=pe&&!!C.thicknessMap,De=!!C.gradientMap,He=!!C.alphaMap,Ae=C.alphaTest>0,ye=!!C.alphaHash,Ue=!!C.extensions;let ft=qi;C.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=a.toneMapping);const Bt={shaderID:Te,shaderType:C.type,shaderName:C.name,vertexShader:ue,fragmentShader:_e,defines:C.defines,customVertexShaderID:Re,customFragmentShaderID:Z,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Se,batchingColor:Se&&$._colorsTexture!==null,instancing:be,instancingColor:be&&$.instanceColor!==null,instancingMorph:be&&$.morphTexture!==null,outputColorSpace:re===null?a.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:js,alphaToCoverage:!!C.alphaToCoverage,map:Le,matcap:nt,envMap:qe,envMapMode:qe&&G.mapping,envMapCubeUVHeight:te,aoMap:Ze,lightMap:lt,bumpMap:$e,normalMap:Wt,displacementMap:V,emissiveMap:Ct,normalMapObjectSpace:Wt&&C.normalMapType===vT,normalMapTangentSpace:Wt&&C.normalMapType===AS,metalnessMap:mt,roughnessMap:yt,anisotropy:Ye,anisotropyMap:fe,clearcoat:D,clearcoatMap:Ve,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ke,dispersion:v,iridescence:F,iridescenceMap:at,iridescenceThicknessMap:Ce,sheen:J,sheenColorMap:we,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Oe,specularIntensityMap:gt,transmission:pe,transmissionMap:Y,thicknessMap:Pe,gradientMap:De,opaque:C.transparent===!1&&C.blending===Vs&&C.alphaToCoverage===!1,alphaMap:He,alphaTest:Ae,alphaHash:ye,combine:C.combine,mapUv:Le&&b(C.map.channel),aoMapUv:Ze&&b(C.aoMap.channel),lightMapUv:lt&&b(C.lightMap.channel),bumpMapUv:$e&&b(C.bumpMap.channel),normalMapUv:Wt&&b(C.normalMap.channel),displacementMapUv:V&&b(C.displacementMap.channel),emissiveMapUv:Ct&&b(C.emissiveMap.channel),metalnessMapUv:mt&&b(C.metalnessMap.channel),roughnessMapUv:yt&&b(C.roughnessMap.channel),anisotropyMapUv:fe&&b(C.anisotropyMap.channel),clearcoatMapUv:Ve&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(C.sheenRoughnessMap.channel),specularMapUv:ze&&b(C.specularMap.channel),specularColorMapUv:Oe&&b(C.specularColorMap.channel),specularIntensityMapUv:gt&&b(C.specularIntensityMap.channel),transmissionMapUv:Y&&b(C.transmissionMap.channel),thicknessMapUv:Pe&&b(C.thicknessMap.channel),alphaMapUv:He&&b(C.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(Wt||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!me.attributes.uv&&(Le||He),fog:!!ce,useFog:C.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Q,skinning:$.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:ft,decodeVideoTexture:Le&&C.map.isVideoTexture===!0&&Nt.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ct&&C.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ya,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ue&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&C.extensions.multiDraw===!0||Se)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function S(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)w.push(X),w.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(I(w,C),O(w,C),w.push(a.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function I(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function N(C){const w=T[C.type];let X;if(w){const se=Wi[w];X=sb.clone(se.uniforms)}else X=C.uniforms;return X}function z(C,w){let X=_.get(w);return X!==void 0?++X.usedTimes:(X=new KC(a,w,C,c),g.push(X),_.set(w,X)),X}function B(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function P(C){m.remove(C)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:N,acquireProgram:z,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:K}}function tw(){let a=new WeakMap;function e(h){return a.has(h)}function i(h){let d=a.get(h);return d===void 0&&(d={},a.set(h,d)),d}function s(h){a.delete(h)}function l(h,d,m){a.get(h)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function nw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Bx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function zx(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(_,x,y,T,b,M){let S=a[e];return S===void 0?(S={id:_.id,object:_,geometry:x,material:y,groupOrder:T,renderOrder:_.renderOrder,z:b,group:M},a[e]=S):(S.id=_.id,S.object=_,S.geometry=x,S.material=y,S.groupOrder=T,S.renderOrder=_.renderOrder,S.z=b,S.group=M),e++,S}function d(_,x,y,T,b,M){const S=h(_,x,y,T,b,M);y.transmission>0?s.push(S):y.transparent===!0?l.push(S):i.push(S)}function m(_,x,y,T,b,M){const S=h(_,x,y,T,b,M);y.transmission>0?s.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,x){i.length>1&&i.sort(_||nw),s.length>1&&s.sort(x||Bx),l.length>1&&l.sort(x||Bx)}function g(){for(let _=e,x=a.length;_<x;_++){const y=a[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function iw(){let a=new WeakMap;function e(s,l){const c=a.get(s);let h;return c===void 0?(h=new zx,a.set(s,[h])):l>=c.length?(h=new zx,c.push(h)):h=c[l],h}function i(){a=new WeakMap}return{get:e,dispose:i}}function aw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new At};break;case"SpotLight":i={position:new ae,direction:new ae,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return a[e.id]=i,i}}}function rw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let sw=0;function ow(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function lw(a){const e=new aw,i=rw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const l=new ae,c=new Qt,h=new Qt;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,T=0,b=0,M=0,S=0,I=0,O=0,N=0,z=0,B=0,P=0;p.sort(ow);for(let C=0,w=p.length;C<w;C++){const X=p[C],se=X.color,$=X.intensity,ce=X.distance;let me=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ws?me=X.shadow.map.texture:me=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=se.r*$,_+=se.g*$,x+=se.b*$;else if(X.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(X.sh.coefficients[L],$);P++}else if(X.isDirectionalLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,te=i.get(X);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.directionalShadow[y]=te,s.directionalShadowMap[y]=me,s.directionalShadowMatrix[y]=X.shadow.matrix,I++}s.directional[y]=L,y++}else if(X.isSpotLight){const L=e.get(X);L.position.setFromMatrixPosition(X.matrixWorld),L.color.copy(se).multiplyScalar($),L.distance=ce,L.coneCos=Math.cos(X.angle),L.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),L.decay=X.decay,s.spot[b]=L;const G=X.shadow;if(X.map&&(s.spotLightMap[z]=X.map,z++,G.updateMatrices(X),X.castShadow&&B++),s.spotLightMatrix[b]=G.matrix,X.castShadow){const te=i.get(X);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,s.spotShadow[b]=te,s.spotShadowMap[b]=me,N++}b++}else if(X.isRectAreaLight){const L=e.get(X);L.color.copy(se).multiplyScalar($),L.halfWidth.set(X.width*.5,0,0),L.halfHeight.set(0,X.height*.5,0),s.rectArea[M]=L,M++}else if(X.isPointLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),L.distance=X.distance,L.decay=X.decay,X.castShadow){const G=X.shadow,te=i.get(X);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,s.pointShadow[T]=te,s.pointShadowMap[T]=me,s.pointShadowMatrix[T]=X.shadow.matrix,O++}s.point[T]=L,T++}else if(X.isHemisphereLight){const L=e.get(X);L.skyColor.copy(X.color).multiplyScalar($),L.groundColor.copy(X.groundColor).multiplyScalar($),s.hemi[S]=L,S++}}M>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const K=s.hash;(K.directionalLength!==y||K.pointLength!==T||K.spotLength!==b||K.rectAreaLength!==M||K.hemiLength!==S||K.numDirectionalShadows!==I||K.numPointShadows!==O||K.numSpotShadows!==N||K.numSpotMaps!==z||K.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+z-B,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,K.directionalLength=y,K.pointLength=T,K.spotLength=b,K.rectAreaLength=M,K.hemiLength=S,K.numDirectionalShadows=I,K.numPointShadows=O,K.numSpotShadows=N,K.numSpotMaps=z,K.numLightProbes=P,s.version=sw++)}function m(p,g){let _=0,x=0,y=0,T=0,b=0;const M=g.matrixWorldInverse;for(let S=0,I=p.length;S<I;S++){const O=p[S];if(O.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),_++}else if(O.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),x++}else if(O.isHemisphereLight){const N=s.hemi[b];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(M),b++}}}return{setup:d,setupView:m,state:s}}function Hx(a){const e=new lw(a),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function cw(a){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Hx(a),e.set(l,[d])):c>=h.length?(d=new Hx(a),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hw=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],dw=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Gx=new Qt,nl=new ae,vd=new ae;function pw(a,e,i){let s=new Ip;const l=new ct,c=new ct,h=new nn,d=new xb,m=new Sb,p={},g=i.maxTextureSize,_={[sr]:Qn,[Qn]:sr,[ya]:ya},x=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:uw,fragmentShader:fw}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new hi;T.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new fi(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let S=this.type;this.render=function(B,P,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===qM&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=ru);const C=a.getRenderTarget(),w=a.getActiveCubeFace(),X=a.getActiveMipmapLevel(),se=a.state;se.setBlending(Ma),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const $=S!==this.type;$&&P.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(me=>me.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,me=B.length;ce<me;ce++){const L=B[ce],G=L.shadow;if(G===void 0){ut("WebGLShadowMap:",L,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();if(l.multiply(te),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/te.y),l.y=c.y*te.y,G.mapSize.y=c.y)),G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===al){if(L.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Fi(l.x,l.y,{format:Ws,type:Ki,minFilter:pn,magFilter:pn,generateMipmaps:!1}),G.map.texture.name=L.name+".shadowMap",G.map.depthTexture=new ml(l.x,l.y,Pi),G.map.depthTexture.name=L.name+".shadowMapDepth",G.map.depthTexture.format=ba,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un}else{L.isPointLight?(G.map=new IS(l.x),G.map.depthTexture=new _b(l.x,Zi)):(G.map=new Fi(l.x,l.y),G.map.depthTexture=new ml(l.x,l.y,Zi)),G.map.depthTexture.name=L.name+".shadowMap",G.map.depthTexture.format=ba;const Me=a.state.buffers.depth.getReversed();this.type===ru?(G.map.depthTexture.compareFunction=Me?Np:Dp,G.map.depthTexture.minFilter=pn,G.map.depthTexture.magFilter=pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un)}G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Te;Me++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,Me),a.clear();else{Me===0&&(a.setRenderTarget(G.map),a.clear());const U=G.getViewport(Me);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),se.viewport(h)}if(L.isPointLight){const U=G.camera,W=G.matrix,ue=L.distance||U.far;ue!==U.far&&(U.far=ue,U.updateProjectionMatrix()),nl.setFromMatrixPosition(L.matrixWorld),U.position.copy(nl),vd.copy(U.position),vd.add(hw[Me]),U.up.copy(dw[Me]),U.lookAt(vd),U.updateMatrixWorld(),W.makeTranslation(-nl.x,-nl.y,-nl.z),Gx.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Gx,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(L);s=G.getFrustum(),N(P,K,G.camera,L,this.type)}G.isPointLightShadow!==!0&&this.type===al&&I(G,K),G.needsUpdate=!1}S=this.type,M.needsUpdate=!1,a.setRenderTarget(C,w,X)};function I(B,P){const K=e.update(b);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fi(l.x,l.y,{format:Ws,type:Ki})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(P,null,K,x,b,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(P,null,K,y,b,null)}function O(B,P,K,C){let w=null;const X=K.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(X!==void 0)w=X;else if(w=K.isPointLight===!0?m:d,a.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const se=w.uuid,$=P.uuid;let ce=p[se];ce===void 0&&(ce={},p[se]=ce);let me=ce[$];me===void 0&&(me=w.clone(),ce[$]=me,P.addEventListener("dispose",z)),w=me}if(w.visible=P.visible,w.wireframe=P.wireframe,C===al?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=a.properties.get(w);se.light=K}return w}function N(B,P,K,C,w){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===al)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,B.matrixWorld);const $=e.update(B),ce=B.material;if(Array.isArray(ce)){const me=$.groups;for(let L=0,G=me.length;L<G;L++){const te=me[L],Te=ce[te.materialIndex];if(Te&&Te.visible){const Me=O(B,Te,C,w);B.onBeforeShadow(a,B,P,K,$,Me,te),a.renderBufferDirect(K,null,$,Me,B,te),B.onAfterShadow(a,B,P,K,$,Me,te)}}}else if(ce.visible){const me=O(B,ce,C,w);B.onBeforeShadow(a,B,P,K,$,me,null),a.renderBufferDirect(K,null,$,me,B,null),B.onAfterShadow(a,B,P,K,$,me,null)}}const se=B.children;for(let $=0,ce=se.length;$<ce;$++)N(se[$],P,K,C,w)}function z(B){B.target.removeEventListener("dispose",z);for(const K in p){const C=p[K],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const mw={[Ad]:Rd,[Cd]:Nd,[wd]:Ud,[ks]:Dd,[Rd]:Ad,[Nd]:Cd,[Ud]:wd,[Dd]:ks};function gw(a,e){function i(){let Y=!1;const Pe=new nn;let De=null;const He=new nn(0,0,0,0);return{setMask:function(Ae){De!==Ae&&!Y&&(a.colorMask(Ae,Ae,Ae,Ae),De=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,ye,Ue,ft,Bt){Bt===!0&&(Ae*=ft,ye*=ft,Ue*=ft),Pe.set(Ae,ye,Ue,ft),He.equals(Pe)===!1&&(a.clearColor(Ae,ye,Ue,ft),He.copy(Pe))},reset:function(){Y=!1,De=null,He.set(-1,0,0,0)}}}function s(){let Y=!1,Pe=!1,De=null,He=null,Ae=null;return{setReversed:function(ye){if(Pe!==ye){const Ue=e.get("EXT_clip_control");ye?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Pe=ye;const ft=Ae;Ae=null,this.setClear(ft)}},getReversed:function(){return Pe},setTest:function(ye){ye?re(a.DEPTH_TEST):Q(a.DEPTH_TEST)},setMask:function(ye){De!==ye&&!Y&&(a.depthMask(ye),De=ye)},setFunc:function(ye){if(Pe&&(ye=mw[ye]),He!==ye){switch(ye){case Ad:a.depthFunc(a.NEVER);break;case Rd:a.depthFunc(a.ALWAYS);break;case Cd:a.depthFunc(a.LESS);break;case ks:a.depthFunc(a.LEQUAL);break;case wd:a.depthFunc(a.EQUAL);break;case Dd:a.depthFunc(a.GEQUAL);break;case Nd:a.depthFunc(a.GREATER);break;case Ud:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}He=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Ae!==ye&&(Pe&&(ye=1-ye),a.clearDepth(ye),Ae=ye)},reset:function(){Y=!1,De=null,He=null,Ae=null,Pe=!1}}}function l(){let Y=!1,Pe=null,De=null,He=null,Ae=null,ye=null,Ue=null,ft=null,Bt=null;return{setTest:function(wt){Y||(wt?re(a.STENCIL_TEST):Q(a.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!Y&&(a.stencilMask(wt),Pe=wt)},setFunc:function(wt,On,Ai){(De!==wt||He!==On||Ae!==Ai)&&(a.stencilFunc(wt,On,Ai),De=wt,He=On,Ae=Ai)},setOp:function(wt,On,Ai){(ye!==wt||Ue!==On||ft!==Ai)&&(a.stencilOp(wt,On,Ai),ye=wt,Ue=On,ft=Ai)},setLocked:function(wt){Y=wt},setClear:function(wt){Bt!==wt&&(a.clearStencil(wt),Bt=wt)},reset:function(){Y=!1,Pe=null,De=null,He=null,Ae=null,ye=null,Ue=null,ft=null,Bt=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],T=null,b=!1,M=null,S=null,I=null,O=null,N=null,z=null,B=null,P=new At(0,0,0),K=0,C=!1,w=null,X=null,se=null,$=null,ce=null;const me=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const te=a.getParameter(a.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),L=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),L=G>=2);let Te=null,Me={};const U=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),ue=new nn().fromArray(U),_e=new nn().fromArray(W);function Re(Y,Pe,De,He){const Ae=new Uint8Array(4),ye=a.createTexture();a.bindTexture(Y,ye),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ue=0;Ue<De;Ue++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,He,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Pe+Ue,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return ye}const Z={};Z[a.TEXTURE_2D]=Re(a.TEXTURE_2D,a.TEXTURE_2D,1),Z[a.TEXTURE_CUBE_MAP]=Re(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[a.TEXTURE_2D_ARRAY]=Re(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Z[a.TEXTURE_3D]=Re(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),re(a.DEPTH_TEST),h.setFunc(ks),$e(!1),Wt(F_),re(a.CULL_FACE),Ze(Ma);function re(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function Q(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function be(Y,Pe){return _[Y]!==Pe?(a.bindFramebuffer(Y,Pe),_[Y]=Pe,Y===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Pe),Y===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Se(Y,Pe){let De=y,He=!1;if(Y){De=x.get(Pe),De===void 0&&(De=[],x.set(Pe,De));const Ae=Y.textures;if(De.length!==Ae.length||De[0]!==a.COLOR_ATTACHMENT0){for(let ye=0,Ue=Ae.length;ye<Ue;ye++)De[ye]=a.COLOR_ATTACHMENT0+ye;De.length=Ae.length,He=!0}}else De[0]!==a.BACK&&(De[0]=a.BACK,He=!0);He&&a.drawBuffers(De)}function Le(Y){return T!==Y?(a.useProgram(Y),T=Y,!0):!1}const nt={[Lr]:a.FUNC_ADD,[KM]:a.FUNC_SUBTRACT,[JM]:a.FUNC_REVERSE_SUBTRACT};nt[QM]=a.MIN,nt[$M]=a.MAX;const qe={[eT]:a.ZERO,[tT]:a.ONE,[nT]:a.SRC_COLOR,[Td]:a.SRC_ALPHA,[lT]:a.SRC_ALPHA_SATURATE,[sT]:a.DST_COLOR,[aT]:a.DST_ALPHA,[iT]:a.ONE_MINUS_SRC_COLOR,[bd]:a.ONE_MINUS_SRC_ALPHA,[oT]:a.ONE_MINUS_DST_COLOR,[rT]:a.ONE_MINUS_DST_ALPHA,[cT]:a.CONSTANT_COLOR,[uT]:a.ONE_MINUS_CONSTANT_COLOR,[fT]:a.CONSTANT_ALPHA,[hT]:a.ONE_MINUS_CONSTANT_ALPHA};function Ze(Y,Pe,De,He,Ae,ye,Ue,ft,Bt,wt){if(Y===Ma){b===!0&&(Q(a.BLEND),b=!1);return}if(b===!1&&(re(a.BLEND),b=!0),Y!==ZM){if(Y!==M||wt!==C){if((S!==Lr||N!==Lr)&&(a.blendEquation(a.FUNC_ADD),S=Lr,N=Lr),wt)switch(Y){case Vs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case pu:a.blendFunc(a.ONE,a.ONE);break;case B_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case z_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case pu:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case B_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",Y);break}I=null,O=null,z=null,B=null,P.set(0,0,0),K=0,M=Y,C=wt}return}Ae=Ae||Pe,ye=ye||De,Ue=Ue||He,(Pe!==S||Ae!==N)&&(a.blendEquationSeparate(nt[Pe],nt[Ae]),S=Pe,N=Ae),(De!==I||He!==O||ye!==z||Ue!==B)&&(a.blendFuncSeparate(qe[De],qe[He],qe[ye],qe[Ue]),I=De,O=He,z=ye,B=Ue),(ft.equals(P)===!1||Bt!==K)&&(a.blendColor(ft.r,ft.g,ft.b,Bt),P.copy(ft),K=Bt),M=Y,C=!1}function lt(Y,Pe){Y.side===ya?Q(a.CULL_FACE):re(a.CULL_FACE);let De=Y.side===Qn;Pe&&(De=!De),$e(De),Y.blending===Vs&&Y.transparent===!1?Ze(Ma):Ze(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const He=Y.stencilWrite;d.setTest(He),He&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ct(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):Q(a.SAMPLE_ALPHA_TO_COVERAGE)}function $e(Y){w!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),w=Y)}function Wt(Y){Y!==WM?(re(a.CULL_FACE),Y!==X&&(Y===F_?a.cullFace(a.BACK):Y===jM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Q(a.CULL_FACE),X=Y}function V(Y){Y!==se&&(L&&a.lineWidth(Y),se=Y)}function Ct(Y,Pe,De){Y?(re(a.POLYGON_OFFSET_FILL),($!==Pe||ce!==De)&&(a.polygonOffset(Pe,De),$=Pe,ce=De)):Q(a.POLYGON_OFFSET_FILL)}function mt(Y){Y?re(a.SCISSOR_TEST):Q(a.SCISSOR_TEST)}function yt(Y){Y===void 0&&(Y=a.TEXTURE0+me-1),Te!==Y&&(a.activeTexture(Y),Te=Y)}function Ye(Y,Pe,De){De===void 0&&(Te===null?De=a.TEXTURE0+me-1:De=Te);let He=Me[De];He===void 0&&(He={type:void 0,texture:void 0},Me[De]=He),(He.type!==Y||He.texture!==Pe)&&(Te!==De&&(a.activeTexture(De),Te=De),a.bindTexture(Y,Pe||Z[Y]),He.type=Y,He.texture=Pe)}function D(){const Y=Me[Te];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function v(){try{a.compressedTexImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function F(){try{a.compressedTexImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function J(){try{a.texSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function pe(){try{a.texSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function fe(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ve(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ne(){try{a.texStorage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function ke(){try{a.texStorage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function at(){try{a.texImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ce(){try{a.texImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function we(Y){ue.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),ue.copy(Y))}function Ge(Y){_e.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function ze(Y,Pe){let De=p.get(Pe);De===void 0&&(De=new WeakMap,p.set(Pe,De));let He=De.get(Y);He===void 0&&(He=a.getUniformBlockIndex(Pe,Y.name),De.set(Y,He))}function Oe(Y,Pe){const He=p.get(Pe).get(Y);m.get(Pe)!==He&&(a.uniformBlockBinding(Pe,He,Y.__bindingPointIndex),m.set(Pe,He))}function gt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),h.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Te=null,Me={},_={},x=new WeakMap,y=[],T=null,b=!1,M=null,S=null,I=null,O=null,N=null,z=null,B=null,P=new At(0,0,0),K=0,C=!1,w=null,X=null,se=null,$=null,ce=null,ue.set(0,0,a.canvas.width,a.canvas.height),_e.set(0,0,a.canvas.width,a.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:re,disable:Q,bindFramebuffer:be,drawBuffers:Se,useProgram:Le,setBlending:Ze,setMaterial:lt,setFlipSided:$e,setCullFace:Wt,setLineWidth:V,setPolygonOffset:Ct,setScissorTest:mt,activeTexture:yt,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:at,texImage3D:Ce,updateUBOMapping:ze,uniformBlockBinding:Oe,texStorage2D:Ne,texStorage3D:ke,texSubImage2D:J,texSubImage3D:pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ve,scissor:we,viewport:Ge,reset:gt}}function vw(a,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,v){return y?new OffscreenCanvas(D,v):dl("canvas")}function b(D,v,F){let J=1;const pe=Ye(D);if((pe.width>F||pe.height>F)&&(J=F/Math.max(pe.width,pe.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(J*pe.width),Ve=Math.floor(J*pe.height);_===void 0&&(_=T(fe,Ve));const Ne=v?T(fe,Ve):_;return Ne.width=fe,Ne.height=Ve,Ne.getContext("2d").drawImage(D,0,0,fe,Ve),ut("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+fe+"x"+Ve+")."),Ne}else return"data"in D&&ut("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function M(D){return D.generateMipmaps}function S(D){a.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function O(D,v,F,J,pe=!1){if(D!==null){if(a[D]!==void 0)return a[D];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=v;if(v===a.RED&&(F===a.FLOAT&&(fe=a.R32F),F===a.HALF_FLOAT&&(fe=a.R16F),F===a.UNSIGNED_BYTE&&(fe=a.R8)),v===a.RED_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.R8UI),F===a.UNSIGNED_SHORT&&(fe=a.R16UI),F===a.UNSIGNED_INT&&(fe=a.R32UI),F===a.BYTE&&(fe=a.R8I),F===a.SHORT&&(fe=a.R16I),F===a.INT&&(fe=a.R32I)),v===a.RG&&(F===a.FLOAT&&(fe=a.RG32F),F===a.HALF_FLOAT&&(fe=a.RG16F),F===a.UNSIGNED_BYTE&&(fe=a.RG8)),v===a.RG_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.RG8UI),F===a.UNSIGNED_SHORT&&(fe=a.RG16UI),F===a.UNSIGNED_INT&&(fe=a.RG32UI),F===a.BYTE&&(fe=a.RG8I),F===a.SHORT&&(fe=a.RG16I),F===a.INT&&(fe=a.RG32I)),v===a.RGB_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),F===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),F===a.UNSIGNED_INT&&(fe=a.RGB32UI),F===a.BYTE&&(fe=a.RGB8I),F===a.SHORT&&(fe=a.RGB16I),F===a.INT&&(fe=a.RGB32I)),v===a.RGBA_INTEGER&&(F===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),F===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),F===a.UNSIGNED_INT&&(fe=a.RGBA32UI),F===a.BYTE&&(fe=a.RGBA8I),F===a.SHORT&&(fe=a.RGBA16I),F===a.INT&&(fe=a.RGBA32I)),v===a.RGB&&(F===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),F===a.UNSIGNED_INT_10F_11F_11F_REV&&(fe=a.R11F_G11F_B10F)),v===a.RGBA){const Ve=pe?mu:Nt.getTransfer(J);F===a.FLOAT&&(fe=a.RGBA32F),F===a.HALF_FLOAT&&(fe=a.RGBA16F),F===a.UNSIGNED_BYTE&&(fe=Ve===Vt?a.SRGB8_ALPHA8:a.RGBA8),F===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),F===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function N(D,v){let F;return D?v===null||v===Zi||v===hl?F=a.DEPTH24_STENCIL8:v===Pi?F=a.DEPTH32F_STENCIL8:v===fl&&(F=a.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zi||v===hl?F=a.DEPTH_COMPONENT24:v===Pi?F=a.DEPTH_COMPONENT32F:v===fl&&(F=a.DEPTH_COMPONENT16),F}function z(D,v){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?v.mipmaps.length:1}function B(D){const v=D.target;v.removeEventListener("dispose",B),K(v),v.isVideoTexture&&g.delete(v)}function P(D){const v=D.target;v.removeEventListener("dispose",P),w(v)}function K(D){const v=s.get(D);if(v.__webglInit===void 0)return;const F=D.source,J=x.get(F);if(J){const pe=J[v.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(D),Object.keys(J).length===0&&x.delete(F)}s.remove(D)}function C(D){const v=s.get(D);a.deleteTexture(v.__webglTexture);const F=D.source,J=x.get(F);delete J[v.__cacheKey],h.memory.textures--}function w(D){const v=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let pe=0;pe<v.__webglFramebuffer[J].length;pe++)a.deleteFramebuffer(v.__webglFramebuffer[J][pe]);else a.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)a.deleteFramebuffer(v.__webglFramebuffer[J]);else a.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&a.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&a.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&a.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=D.textures;for(let J=0,pe=F.length;J<pe;J++){const fe=s.get(F[J]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),h.memory.textures--),s.remove(F[J])}s.remove(D)}let X=0;function se(){X=0}function $(){const D=X;return D>=l.maxTextures&&ut("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function ce(D){const v=[];return v.push(D.wrapS),v.push(D.wrapT),v.push(D.wrapR||0),v.push(D.magFilter),v.push(D.minFilter),v.push(D.anisotropy),v.push(D.internalFormat),v.push(D.format),v.push(D.type),v.push(D.generateMipmaps),v.push(D.premultiplyAlpha),v.push(D.flipY),v.push(D.unpackAlignment),v.push(D.colorSpace),v.join()}function me(D,v){const F=s.get(D);if(D.isVideoTexture&&mt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&F.__version!==D.version){const J=D.image;if(J===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,D,v);return}}else D.isExternalTexture&&(F.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,F.__webglTexture,a.TEXTURE0+v)}function L(D,v){const F=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){Z(F,D,v);return}else D.isExternalTexture&&(F.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,F.__webglTexture,a.TEXTURE0+v)}function G(D,v){const F=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&F.__version!==D.version){Z(F,D,v);return}i.bindTexture(a.TEXTURE_3D,F.__webglTexture,a.TEXTURE0+v)}function te(D,v){const F=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&F.__version!==D.version){re(F,D,v);return}i.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+v)}const Te={[Id]:a.REPEAT,[ci]:a.CLAMP_TO_EDGE,[Pd]:a.MIRRORED_REPEAT},Me={[Un]:a.NEAREST,[mT]:a.NEAREST_MIPMAP_NEAREST,[Ic]:a.NEAREST_MIPMAP_LINEAR,[pn]:a.LINEAR,[zh]:a.LINEAR_MIPMAP_NEAREST,[Ir]:a.LINEAR_MIPMAP_LINEAR},U={[_T]:a.NEVER,[MT]:a.ALWAYS,[xT]:a.LESS,[Dp]:a.LEQUAL,[ST]:a.EQUAL,[Np]:a.GEQUAL,[ET]:a.GREATER,[yT]:a.NOTEQUAL};function W(D,v){if(v.type===Pi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===zh||v.magFilter===Ic||v.magFilter===Ir||v.minFilter===pn||v.minFilter===zh||v.minFilter===Ic||v.minFilter===Ir)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,Te[v.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,Te[v.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,Te[v.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,Me[v.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,U[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Un||v.minFilter!==Ic&&v.minFilter!==Ir||v.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||s.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,l.getMaxAnisotropy())),s.get(v).__currentAnisotropy=v.anisotropy}}}function ue(D,v){let F=!1;D.__webglInit===void 0&&(D.__webglInit=!0,v.addEventListener("dispose",B));const J=v.source;let pe=x.get(J);pe===void 0&&(pe={},x.set(J,pe));const fe=ce(v);if(fe!==D.__cacheKey){pe[fe]===void 0&&(pe[fe]={texture:a.createTexture(),usedTimes:0},h.memory.textures++,F=!0),pe[fe].usedTimes++;const Ve=pe[D.__cacheKey];Ve!==void 0&&(pe[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(v)),D.__cacheKey=fe,D.__webglTexture=pe[fe].texture}return F}function _e(D,v,F){return Math.floor(Math.floor(D/F)/v)}function Re(D,v,F,J){const fe=D.updateRanges;if(fe.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,v.width,v.height,F,J,v.data);else{fe.sort((Ce,we)=>Ce.start-we.start);let Ve=0;for(let Ce=1;Ce<fe.length;Ce++){const we=fe[Ve],Ge=fe[Ce],ze=we.start+we.count,Oe=_e(Ge.start,v.width,4),gt=_e(we.start,v.width,4);Ge.start<=ze+1&&Oe===gt&&_e(Ge.start+Ge.count-1,v.width,4)===Oe?we.count=Math.max(we.count,Ge.start+Ge.count-we.start):(++Ve,fe[Ve]=Ge)}fe.length=Ve+1;const Ne=a.getParameter(a.UNPACK_ROW_LENGTH),ke=a.getParameter(a.UNPACK_SKIP_PIXELS),at=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,v.width);for(let Ce=0,we=fe.length;Ce<we;Ce++){const Ge=fe[Ce],ze=Math.floor(Ge.start/4),Oe=Math.ceil(Ge.count/4),gt=ze%v.width,Y=Math.floor(ze/v.width),Pe=Oe,De=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,gt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(a.TEXTURE_2D,0,gt,Y,Pe,De,F,J,v.data)}D.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ne),a.pixelStorei(a.UNPACK_SKIP_PIXELS,ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,at)}}function Z(D,v,F){let J=a.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=a.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=a.TEXTURE_3D);const pe=ue(D,v),fe=v.source;i.bindTexture(J,D.__webglTexture,a.TEXTURE0+F);const Ve=s.get(fe);if(fe.version!==Ve.__version||pe===!0){i.activeTexture(a.TEXTURE0+F);const Ne=Nt.getPrimaries(Nt.workingColorSpace),ke=v.colorSpace===ar?null:Nt.getPrimaries(v.colorSpace),at=v.colorSpace===ar||Ne===ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Ce=b(v.image,!1,l.maxTextureSize);Ce=yt(v,Ce);const we=c.convert(v.format,v.colorSpace),Ge=c.convert(v.type);let ze=O(v.internalFormat,we,Ge,v.colorSpace,v.isVideoTexture);W(J,v);let Oe;const gt=v.mipmaps,Y=v.isVideoTexture!==!0,Pe=Ve.__version===void 0||pe===!0,De=fe.dataReady,He=z(v,Ce);if(v.isDepthTexture)ze=N(v.format===Pr,v.type),Pe&&(Y?i.texStorage2D(a.TEXTURE_2D,1,ze,Ce.width,Ce.height):i.texImage2D(a.TEXTURE_2D,0,ze,Ce.width,Ce.height,0,we,Ge,null));else if(v.isDataTexture)if(gt.length>0){Y&&Pe&&i.texStorage2D(a.TEXTURE_2D,He,ze,gt[0].width,gt[0].height);for(let Ae=0,ye=gt.length;Ae<ye;Ae++)Oe=gt[Ae],Y?De&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Oe.width,Oe.height,we,Ge,Oe.data):i.texImage2D(a.TEXTURE_2D,Ae,ze,Oe.width,Oe.height,0,we,Ge,Oe.data);v.generateMipmaps=!1}else Y?(Pe&&i.texStorage2D(a.TEXTURE_2D,He,ze,Ce.width,Ce.height),De&&Re(v,Ce,we,Ge)):i.texImage2D(a.TEXTURE_2D,0,ze,Ce.width,Ce.height,0,we,Ge,Ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Y&&Pe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,He,ze,gt[0].width,gt[0].height,Ce.depth);for(let Ae=0,ye=gt.length;Ae<ye;Ae++)if(Oe=gt[Ae],v.format!==Ti)if(we!==null)if(Y){if(De)if(v.layerUpdates.size>0){const Ue=_x(Oe.width,Oe.height,v.format,v.type);for(const ft of v.layerUpdates){const Bt=Oe.data.subarray(ft*Ue/Oe.data.BYTES_PER_ELEMENT,(ft+1)*Ue/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,ft,Oe.width,Oe.height,1,we,Bt)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Oe.width,Oe.height,Ce.depth,we,Oe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,ze,Oe.width,Oe.height,Ce.depth,0,Oe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?De&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Oe.width,Oe.height,Ce.depth,we,Ge,Oe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Ae,ze,Oe.width,Oe.height,Ce.depth,0,we,Ge,Oe.data)}else{Y&&Pe&&i.texStorage2D(a.TEXTURE_2D,He,ze,gt[0].width,gt[0].height);for(let Ae=0,ye=gt.length;Ae<ye;Ae++)Oe=gt[Ae],v.format!==Ti?we!==null?Y?De&&i.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Oe.width,Oe.height,we,Oe.data):i.compressedTexImage2D(a.TEXTURE_2D,Ae,ze,Oe.width,Oe.height,0,Oe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?De&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Oe.width,Oe.height,we,Ge,Oe.data):i.texImage2D(a.TEXTURE_2D,Ae,ze,Oe.width,Oe.height,0,we,Ge,Oe.data)}else if(v.isDataArrayTexture)if(Y){if(Pe&&i.texStorage3D(a.TEXTURE_2D_ARRAY,He,ze,Ce.width,Ce.height,Ce.depth),De)if(v.layerUpdates.size>0){const Ae=_x(Ce.width,Ce.height,v.format,v.type);for(const ye of v.layerUpdates){const Ue=Ce.data.subarray(ye*Ae/Ce.data.BYTES_PER_ELEMENT,(ye+1)*Ae/Ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ye,Ce.width,Ce.height,1,we,Ge,Ue)}v.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,we,Ge,Ce.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,ze,Ce.width,Ce.height,Ce.depth,0,we,Ge,Ce.data);else if(v.isData3DTexture)Y?(Pe&&i.texStorage3D(a.TEXTURE_3D,He,ze,Ce.width,Ce.height,Ce.depth),De&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,we,Ge,Ce.data)):i.texImage3D(a.TEXTURE_3D,0,ze,Ce.width,Ce.height,Ce.depth,0,we,Ge,Ce.data);else if(v.isFramebufferTexture){if(Pe)if(Y)i.texStorage2D(a.TEXTURE_2D,He,ze,Ce.width,Ce.height);else{let Ae=Ce.width,ye=Ce.height;for(let Ue=0;Ue<He;Ue++)i.texImage2D(a.TEXTURE_2D,Ue,ze,Ae,ye,0,we,Ge,null),Ae>>=1,ye>>=1}}else if(gt.length>0){if(Y&&Pe){const Ae=Ye(gt[0]);i.texStorage2D(a.TEXTURE_2D,He,ze,Ae.width,Ae.height)}for(let Ae=0,ye=gt.length;Ae<ye;Ae++)Oe=gt[Ae],Y?De&&i.texSubImage2D(a.TEXTURE_2D,Ae,0,0,we,Ge,Oe):i.texImage2D(a.TEXTURE_2D,Ae,ze,we,Ge,Oe);v.generateMipmaps=!1}else if(Y){if(Pe){const Ae=Ye(Ce);i.texStorage2D(a.TEXTURE_2D,He,ze,Ae.width,Ae.height)}De&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Ge,Ce)}else i.texImage2D(a.TEXTURE_2D,0,ze,we,Ge,Ce);M(v)&&S(J),Ve.__version=fe.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function re(D,v,F){if(v.image.length!==6)return;const J=ue(D,v),pe=v.source;i.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+F);const fe=s.get(pe);if(pe.version!==fe.__version||J===!0){i.activeTexture(a.TEXTURE0+F);const Ve=Nt.getPrimaries(Nt.workingColorSpace),Ne=v.colorSpace===ar?null:Nt.getPrimaries(v.colorSpace),ke=v.colorSpace===ar||Ve===Ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const at=v.isCompressedTexture||v.image[0].isCompressedTexture,Ce=v.image[0]&&v.image[0].isDataTexture,we=[];for(let ye=0;ye<6;ye++)!at&&!Ce?we[ye]=b(v.image[ye],!0,l.maxCubemapSize):we[ye]=Ce?v.image[ye].image:v.image[ye],we[ye]=yt(v,we[ye]);const Ge=we[0],ze=c.convert(v.format,v.colorSpace),Oe=c.convert(v.type),gt=O(v.internalFormat,ze,Oe,v.colorSpace),Y=v.isVideoTexture!==!0,Pe=fe.__version===void 0||J===!0,De=pe.dataReady;let He=z(v,Ge);W(a.TEXTURE_CUBE_MAP,v);let Ae;if(at){Y&&Pe&&i.texStorage2D(a.TEXTURE_CUBE_MAP,He,gt,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Ae=we[ye].mipmaps;for(let Ue=0;Ue<Ae.length;Ue++){const ft=Ae[Ue];v.format!==Ti?ze!==null?Y?De&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,ft.width,ft.height,ze,ft.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,gt,ft.width,ft.height,0,ft.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?De&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,ft.width,ft.height,ze,Oe,ft.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,gt,ft.width,ft.height,0,ze,Oe,ft.data)}}}else{if(Ae=v.mipmaps,Y&&Pe){Ae.length>0&&He++;const ye=Ye(we[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,He,gt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ce){Y?De&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,we[ye].width,we[ye].height,ze,Oe,we[ye].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,gt,we[ye].width,we[ye].height,0,ze,Oe,we[ye].data);for(let Ue=0;Ue<Ae.length;Ue++){const Bt=Ae[Ue].image[ye].image;Y?De&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,Bt.width,Bt.height,ze,Oe,Bt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,gt,Bt.width,Bt.height,0,ze,Oe,Bt.data)}}else{Y?De&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ze,Oe,we[ye]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,gt,ze,Oe,we[ye]);for(let Ue=0;Ue<Ae.length;Ue++){const ft=Ae[Ue];Y?De&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,ze,Oe,ft.image[ye]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,gt,ze,Oe,ft.image[ye])}}}M(v)&&S(a.TEXTURE_CUBE_MAP),fe.__version=pe.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function Q(D,v,F,J,pe,fe){const Ve=c.convert(F.format,F.colorSpace),Ne=c.convert(F.type),ke=O(F.internalFormat,Ve,Ne,F.colorSpace),at=s.get(v),Ce=s.get(F);if(Ce.__renderTarget=v,!at.__hasExternalTextures){const we=Math.max(1,v.width>>fe),Ge=Math.max(1,v.height>>fe);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?i.texImage3D(pe,fe,ke,we,Ge,v.depth,0,Ve,Ne,null):i.texImage2D(pe,fe,ke,we,Ge,0,Ve,Ne,null)}i.bindFramebuffer(a.FRAMEBUFFER,D),Ct(v)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,pe,Ce.__webglTexture,0,V(v)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,J,pe,Ce.__webglTexture,fe),i.bindFramebuffer(a.FRAMEBUFFER,null)}function be(D,v,F){if(a.bindRenderbuffer(a.RENDERBUFFER,D),v.depthBuffer){const J=v.depthTexture,pe=J&&J.isDepthTexture?J.type:null,fe=N(v.stencilBuffer,pe),Ve=v.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Ct(v)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,V(v),fe,v.width,v.height):F?a.renderbufferStorageMultisample(a.RENDERBUFFER,V(v),fe,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,fe,v.width,v.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ve,a.RENDERBUFFER,D)}else{const J=v.textures;for(let pe=0;pe<J.length;pe++){const fe=J[pe],Ve=c.convert(fe.format,fe.colorSpace),Ne=c.convert(fe.type),ke=O(fe.internalFormat,Ve,Ne,fe.colorSpace);Ct(v)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,V(v),ke,v.width,v.height):F?a.renderbufferStorageMultisample(a.RENDERBUFFER,V(v),ke,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,ke,v.width,v.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Se(D,v,F){const J=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,D),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(v.depthTexture);if(pe.__renderTarget=v,(!pe.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,v.depthTexture.addEventListener("dispose",B)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),W(a.TEXTURE_CUBE_MAP,v.depthTexture);const at=c.convert(v.depthTexture.format),Ce=c.convert(v.depthTexture.type);let we;v.depthTexture.format===ba?we=a.DEPTH_COMPONENT24:v.depthTexture.format===Pr&&(we=a.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,we,v.width,v.height,0,at,Ce,null)}}else me(v.depthTexture,0);const fe=pe.__webglTexture,Ve=V(v),Ne=J?a.TEXTURE_CUBE_MAP_POSITIVE_X+F:a.TEXTURE_2D,ke=v.depthTexture.format===Pr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(v.depthTexture.format===ba)Ct(v)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,Ne,fe,0,Ve):a.framebufferTexture2D(a.FRAMEBUFFER,ke,Ne,fe,0);else if(v.depthTexture.format===Pr)Ct(v)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,Ne,fe,0,Ve):a.framebufferTexture2D(a.FRAMEBUFFER,ke,Ne,fe,0);else throw new Error("Unknown depthTexture format")}function Le(D){const v=s.get(D),F=D.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const pe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",pe)};J.addEventListener("dispose",pe),v.__depthDisposeCallback=pe}v.__boundDepthTexture=J}if(D.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)Se(v.__webglFramebuffer[J],D,J);else{const J=D.texture.mipmaps;J&&J.length>0?Se(v.__webglFramebuffer[0],D,0):Se(v.__webglFramebuffer,D,0)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=a.createRenderbuffer(),be(v.__webglDepthbuffer[J],D,!1);else{const pe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer[J];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,fe)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=a.createRenderbuffer(),be(v.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,fe)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function nt(D,v,F){const J=s.get(D);v!==void 0&&Q(J.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),F!==void 0&&Le(D)}function qe(D){const v=D.texture,F=s.get(D),J=s.get(v);D.addEventListener("dispose",P);const pe=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Ve=pe.length>1;if(Ve||(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=v.version,h.memory.textures++),fe){F.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Ne]=[];for(let ke=0;ke<v.mipmaps.length;ke++)F.__webglFramebuffer[Ne][ke]=a.createFramebuffer()}else F.__webglFramebuffer[Ne]=a.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ne=0;Ne<v.mipmaps.length;Ne++)F.__webglFramebuffer[Ne]=a.createFramebuffer()}else F.__webglFramebuffer=a.createFramebuffer();if(Ve)for(let Ne=0,ke=pe.length;Ne<ke;Ne++){const at=s.get(pe[Ne]);at.__webglTexture===void 0&&(at.__webglTexture=a.createTexture(),h.memory.textures++)}if(D.samples>0&&Ct(D)===!1){F.__webglMultisampledFramebuffer=a.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ne=0;Ne<pe.length;Ne++){const ke=pe[Ne];F.__webglColorRenderbuffer[Ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,F.__webglColorRenderbuffer[Ne]);const at=c.convert(ke.format,ke.colorSpace),Ce=c.convert(ke.type),we=O(ke.internalFormat,at,Ce,ke.colorSpace,D.isXRRenderTarget===!0),Ge=V(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ge,we,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ne,a.RENDERBUFFER,F.__webglColorRenderbuffer[Ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(F.__webglDepthRenderbuffer=a.createRenderbuffer(),be(F.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){i.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture),W(a.TEXTURE_CUBE_MAP,v);for(let Ne=0;Ne<6;Ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let ke=0;ke<v.mipmaps.length;ke++)Q(F.__webglFramebuffer[Ne][ke],D,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ke);else Q(F.__webglFramebuffer[Ne],D,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(v)&&S(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ve){for(let Ne=0,ke=pe.length;Ne<ke;Ne++){const at=pe[Ne],Ce=s.get(at);let we=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(we,Ce.__webglTexture),W(we,at),Q(F.__webglFramebuffer,D,at,a.COLOR_ATTACHMENT0+Ne,we,0),M(at)&&S(we)}i.unbindTexture()}else{let Ne=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ne,J.__webglTexture),W(Ne,v),v.mipmaps&&v.mipmaps.length>0)for(let ke=0;ke<v.mipmaps.length;ke++)Q(F.__webglFramebuffer[ke],D,v,a.COLOR_ATTACHMENT0,Ne,ke);else Q(F.__webglFramebuffer,D,v,a.COLOR_ATTACHMENT0,Ne,0);M(v)&&S(Ne),i.unbindTexture()}D.depthBuffer&&Le(D)}function Ze(D){const v=D.textures;for(let F=0,J=v.length;F<J;F++){const pe=v[F];if(M(pe)){const fe=I(D),Ve=s.get(pe).__webglTexture;i.bindTexture(fe,Ve),S(fe),i.unbindTexture()}}}const lt=[],$e=[];function Wt(D){if(D.samples>0){if(Ct(D)===!1){const v=D.textures,F=D.width,J=D.height;let pe=a.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ve=s.get(D),Ne=v.length>1;if(Ne)for(let at=0;at<v.length;at++)i.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+at,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+at,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const ke=D.texture.mipmaps;ke&&ke.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let at=0;at<v.length;at++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),Ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ve.__webglColorRenderbuffer[at]);const Ce=s.get(v[at]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ce,0)}a.blitFramebuffer(0,0,F,J,0,0,F,J,pe,a.NEAREST),m===!0&&(lt.length=0,$e.length=0,lt.push(a.COLOR_ATTACHMENT0+at),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(fe),$e.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$e)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,lt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ne)for(let at=0;at<v.length;at++){i.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+at,a.RENDERBUFFER,Ve.__webglColorRenderbuffer[at]);const Ce=s.get(v[at]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ve.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+at,a.TEXTURE_2D,Ce,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const v=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[v])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function Ct(D){const v=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(D){const v=h.render.frame;g.get(D)!==v&&(g.set(D,v),D.update())}function yt(D,v){const F=D.colorSpace,J=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||F!==js&&F!==ar&&(Nt.getTransfer(F)===Vt?(J!==Ti||pe!==li)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",F)),v}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=se,this.setTexture2D=me,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=nt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function _w(a,e){function i(s,l=ar){let c;const h=Nt.getTransfer(l);if(s===li)return a.UNSIGNED_BYTE;if(s===bp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Ap)return a.UNSIGNED_SHORT_5_5_5_1;if(s===ES)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===yS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===xS)return a.BYTE;if(s===SS)return a.SHORT;if(s===fl)return a.UNSIGNED_SHORT;if(s===Tp)return a.INT;if(s===Zi)return a.UNSIGNED_INT;if(s===Pi)return a.FLOAT;if(s===Ki)return a.HALF_FLOAT;if(s===MS)return a.ALPHA;if(s===TS)return a.RGB;if(s===Ti)return a.RGBA;if(s===ba)return a.DEPTH_COMPONENT;if(s===Pr)return a.DEPTH_STENCIL;if(s===bS)return a.RED;if(s===Rp)return a.RED_INTEGER;if(s===Ws)return a.RG;if(s===Cp)return a.RG_INTEGER;if(s===wp)return a.RGBA_INTEGER;if(s===su||s===ou||s===lu||s===cu)if(h===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fd||s===Bd||s===zd||s===Hd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gd||s===Vd||s===Xd||s===kd||s===Yd||s===Wd||s===jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Gd||s===Vd)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kd)return c.COMPRESSED_R11_EAC;if(s===Yd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wd)return c.COMPRESSED_RG11_EAC;if(s===jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qd||s===Zd||s===Kd||s===Jd||s===Qd||s===$d||s===ep||s===tp||s===np||s===ip||s===ap||s===rp||s===sp||s===op)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ep)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tp)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===np)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ip)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rp)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===op)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lp||s===cp||s===up)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===lp)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fp||s===hp||s===dp||s===pp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===fp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new BS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ji({vertexShader:xw,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fi(new Fr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends Ks{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,T=null;const b=typeof XRWebGLBinding<"u",M=new Ew,S={},I=i.getContextAttributes();let O=null,N=null;const z=[],B=[],P=new ct;let K=null;const C=new Jn;C.viewport=new nn;const w=new Jn;w.viewport=new nn;const X=[C,w],se=new Db;let $=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=z[Z];return re===void 0&&(re=new sd,z[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=z[Z];return re===void 0&&(re=new sd,z[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=z[Z];return re===void 0&&(re=new sd,z[Z]=re),re.getHandSpace()};function me(Z){const re=B.indexOf(Z.inputSource);if(re===-1)return;const Q=z[re];Q!==void 0&&(Q.update(Z.inputSource,Z.frame,p||h),Q.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){l.removeEventListener("select",me),l.removeEventListener("selectstart",me),l.removeEventListener("selectend",me),l.removeEventListener("squeeze",me),l.removeEventListener("squeezestart",me),l.removeEventListener("squeezeend",me),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",G);for(let Z=0;Z<z.length;Z++){const re=B[Z];re!==null&&(B[Z]=null,z[Z].disconnect(re))}$=null,ce=null,M.reset();for(const Z in S)delete S[Z];e.setRenderTarget(O),y=null,x=null,_=null,l=null,N=null,Re.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",me),l.addEventListener("selectstart",me),l.addEventListener("selectend",me),l.addEventListener("squeeze",me),l.addEventListener("squeezestart",me),l.addEventListener("squeezeend",me),l.addEventListener("end",L),l.addEventListener("inputsourceschange",G),I.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,be=null,Se=null;I.depth&&(Se=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Q=I.stencil?Pr:ba,be=I.stencil?hl:Zi);const Le={colorFormat:i.RGBA8,depthFormat:Se,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Le),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Fi(x.textureWidth,x.textureHeight,{format:Ti,type:li,depthTexture:new ml(x.textureWidth,x.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Q={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Q),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Fi(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:li,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Re.setContext(l),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(Z){for(let re=0;re<Z.removed.length;re++){const Q=Z.removed[re],be=B.indexOf(Q);be>=0&&(B[be]=null,z[be].disconnect(Q))}for(let re=0;re<Z.added.length;re++){const Q=Z.added[re];let be=B.indexOf(Q);if(be===-1){for(let Le=0;Le<z.length;Le++)if(Le>=B.length){B.push(Q),be=Le;break}else if(B[Le]===null){B[Le]=Q,be=Le;break}if(be===-1)break}const Se=z[be];Se&&Se.connect(Q)}}const te=new ae,Te=new ae;function Me(Z,re,Q){te.setFromMatrixPosition(re.matrixWorld),Te.setFromMatrixPosition(Q.matrixWorld);const be=te.distanceTo(Te),Se=re.projectionMatrix.elements,Le=Q.projectionMatrix.elements,nt=Se[14]/(Se[10]-1),qe=Se[14]/(Se[10]+1),Ze=(Se[9]+1)/Se[5],lt=(Se[9]-1)/Se[5],$e=(Se[8]-1)/Se[0],Wt=(Le[8]+1)/Le[0],V=nt*$e,Ct=nt*Wt,mt=be/(-$e+Wt),yt=mt*-$e;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ye=nt+mt,D=qe+mt,v=V-yt,F=Ct+(be-yt),J=Ze*qe/D*Ye,pe=lt*qe/D*Ye;Z.projectionMatrix.makePerspective(v,F,J,pe,Ye,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function U(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let re=Z.near,Q=Z.far;M.texture!==null&&(M.depthNear>0&&(re=M.depthNear),M.depthFar>0&&(Q=M.depthFar)),se.near=w.near=C.near=re,se.far=w.far=C.far=Q,($!==se.near||ce!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),$=se.near,ce=se.far),se.layers.mask=Z.layers.mask|6,C.layers.mask=se.layers.mask&3,w.layers.mask=se.layers.mask&5;const be=Z.parent,Se=se.cameras;U(se,be);for(let Le=0;Le<Se.length;Le++)U(Se[Le],be);Se.length===2?Me(se,C,w):se.projectionMatrix.copy(C.projectionMatrix),W(Z,se,be)};function W(Z,re,Q){Q===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(Q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(Z){m=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(se)},this.getCameraTexture=function(Z){return S[Z]};let ue=null;function _e(Z,re){if(g=re.getViewerPose(p||h),T=re,g!==null){const Q=g.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let be=!1;Q.length!==se.cameras.length&&(se.cameras.length=0,be=!0);for(let qe=0;qe<Q.length;qe++){const Ze=Q[qe];let lt=null;if(y!==null)lt=y.getViewport(Ze);else{const Wt=_.getViewSubImage(x,Ze);lt=Wt.viewport,qe===0&&(e.setRenderTargetTextures(N,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(N))}let $e=X[qe];$e===void 0&&($e=new Jn,$e.layers.enable(qe),$e.viewport=new nn,X[qe]=$e),$e.matrix.fromArray(Ze.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ze.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(lt.x,lt.y,lt.width,lt.height),qe===0&&(se.matrix.copy($e.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),be===!0&&se.cameras.push($e)}const Se=l.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const qe=_.getDepthInformation(Q[0]);qe&&qe.isValid&&qe.texture&&M.init(qe,l.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),_=s.getBinding();for(let qe=0;qe<Q.length;qe++){const Ze=Q[qe].camera;if(Ze){let lt=S[Ze];lt||(lt=new BS,S[Ze]=lt);const $e=_.getCameraImage(Ze);lt.sourceTexture=$e}}}}for(let Q=0;Q<z.length;Q++){const be=B[Q],Se=z[Q];be!==null&&Se!==void 0&&Se.update(be,re,p||h)}ue&&ue(Z,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),T=null}const Re=new GS;Re.setAnimationLoop(_e),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}}const Dr=new zi,Mw=new Qt;function Tw(a,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,LS(a)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,I,O,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),_(M,S)):S.isMeshPhongMaterial?(c(M,S),g(M,S)):S.isMeshStandardMaterial?(c(M,S),x(M,S),S.isMeshPhysicalMaterial&&y(M,S,N)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),b(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,I,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const I=e.get(S),O=I.envMap,N=I.envMapRotation;O&&(M.envMap.value=O,Dr.copy(N),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),M.envMapRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(Dr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,I,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*I,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,I){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function b(M,S){const I=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function bw(a,e,i,s){let l={},c={},h=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const N=O.program;s.uniformBlockBinding(I,N)}function p(I,O){let N=l[I.id];N===void 0&&(T(I),N=g(I),l[I.id]=N,I.addEventListener("dispose",M));const z=O.program;s.updateUBOMapping(I,z);const B=e.render.frame;c[I.id]!==B&&(x(I),c[I.id]=B)}function g(I){const O=_();I.__bindingPointIndex=O;const N=a.createBuffer(),z=I.__size,B=I.usage;return a.bindBuffer(a.UNIFORM_BUFFER,N),a.bufferData(a.UNIFORM_BUFFER,z,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,N),N}function _(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const O=l[I.id],N=I.uniforms,z=I.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let B=0,P=N.length;B<P;B++){const K=Array.isArray(N[B])?N[B]:[N[B]];for(let C=0,w=K.length;C<w;C++){const X=K[C];if(y(X,B,C,z)===!0){const se=X.__offset,$=Array.isArray(X.value)?X.value:[X.value];let ce=0;for(let me=0;me<$.length;me++){const L=$[me],G=b(L);typeof L=="number"||typeof L=="boolean"?(X.__data[0]=L,a.bufferSubData(a.UNIFORM_BUFFER,se+ce,X.__data)):L.isMatrix3?(X.__data[0]=L.elements[0],X.__data[1]=L.elements[1],X.__data[2]=L.elements[2],X.__data[3]=0,X.__data[4]=L.elements[3],X.__data[5]=L.elements[4],X.__data[6]=L.elements[5],X.__data[7]=0,X.__data[8]=L.elements[6],X.__data[9]=L.elements[7],X.__data[10]=L.elements[8],X.__data[11]=0):(L.toArray(X.__data,ce),ce+=G.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,se,X.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(I,O,N,z){const B=I.value,P=O+"_"+N;if(z[P]===void 0)return typeof B=="number"||typeof B=="boolean"?z[P]=B:z[P]=B.clone(),!0;{const K=z[P];if(typeof B=="number"||typeof B=="boolean"){if(K!==B)return z[P]=B,!0}else if(K.equals(B)===!1)return K.copy(B),!0}return!1}function T(I){const O=I.uniforms;let N=0;const z=16;for(let P=0,K=O.length;P<K;P++){const C=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,X=C.length;w<X;w++){const se=C[w],$=Array.isArray(se.value)?se.value:[se.value];for(let ce=0,me=$.length;ce<me;ce++){const L=$[ce],G=b(L),te=N%z,Te=te%G.boundary,Me=te+Te;N+=Te,Me!==0&&z-Me<G.storage&&(N+=z-Me),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=N,N+=G.storage}}}const B=N%z;return B>0&&(N+=z-B),I.__size=N,I.__cache={},this}function b(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",I),O}function M(I){const O=I.target;O.removeEventListener("dispose",M);const N=h.indexOf(O.__bindingPointIndex);h.splice(N,1),a.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const I in l)a.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const Aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function Rw(){return Yi===null&&(Yi=new PS(Aw,16,16,Ws,Ki),Yi.name="DFG_LUT",Yi.minFilter=pn,Yi.magFilter=pn,Yi.wrapS=ci,Yi.wrapT=ci,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class WS{constructor(e={}){const{canvas:i=TT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=li}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const b=y,M=new Set([wp,Cp,Rp]),S=new Set([li,Zi,fl,hl,bp,Ap]),I=new Uint32Array(4),O=new Int32Array(4);let N=null,z=null;const B=[],P=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=Kn;let X=0,se=0,$=null,ce=-1,me=null;const L=new nn,G=new nn;let te=null;const Te=new At(0);let Me=0,U=i.width,W=i.height,ue=1,_e=null,Re=null;const Z=new nn(0,0,U,W),re=new nn(0,0,U,W);let Q=!1;const be=new Ip;let Se=!1,Le=!1;const nt=new Qt,qe=new ae,Ze=new nn,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Wt(){return $===null?ue:1}let V=s;function Ct(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Mp}`),i.addEventListener("webglcontextlost",ft,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),V===null){const j="webgl2";if(V=Ct(j,R),V===null)throw Ct(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let mt,yt,Ye,D,v,F,J,pe,fe,Ve,Ne,ke,at,Ce,we,Ge,ze,Oe,gt,Y,Pe,De,He,Ae;function ye(){mt=new RR(V),mt.init(),De=new _w(V,mt),yt=new _R(V,mt,e,De),Ye=new gw(V,mt),yt.reversedDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),D=new DR(V),v=new tw,F=new vw(V,mt,Ye,v,yt,De,D),J=new SR(C),pe=new AR(C),fe=new Ob(V),He=new gR(V,fe),Ve=new CR(V,fe,D,He),Ne=new UR(V,Ve,fe,D),gt=new NR(V,yt,F),Ge=new xR(v),ke=new ew(C,J,pe,mt,yt,He,Ge),at=new Tw(C,v),Ce=new iw,we=new cw(mt),Oe=new mR(C,J,pe,Ye,Ne,T,m),ze=new pw(C,Ne,yt),Ae=new bw(V,D,yt,Ye),Y=new vR(V,mt,D),Pe=new wR(V,mt,D),D.programs=ke.programs,C.capabilities=yt,C.extensions=mt,C.properties=v,C.renderLists=Ce,C.shadowMap=ze,C.state=Ye,C.info=D}ye(),b!==li&&(K=new OR(b,i.width,i.height,l,c));const Ue=new yw(C,V);this.xr=Ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(R){R!==void 0&&(ue=R,this.setSize(U,W,!1))},this.getSize=function(R){return R.set(U,W)},this.setSize=function(R,j,he=!0){if(Ue.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,W=j,i.width=Math.floor(R*ue),i.height=Math.floor(j*ue),he===!0&&(i.style.width=R+"px",i.style.height=j+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(U*ue,W*ue).floor()},this.setDrawingBufferSize=function(R,j,he){U=R,W=j,ue=he,i.width=Math.floor(R*he),i.height=Math.floor(j*he),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(b===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,j,he,oe){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,j,he,oe),Ye.viewport(L.copy(Z).multiplyScalar(ue).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,j,he,oe){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,j,he,oe),Ye.scissor(G.copy(re).multiplyScalar(ue).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){Ye.setScissorTest(Q=R)},this.setOpaqueSort=function(R){_e=R},this.setTransparentSort=function(R){Re=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,he=!0){let oe=0;if(R){let ee=!1;if($!==null){const Ie=$.texture.format;ee=M.has(Ie)}if(ee){const Ie=$.texture.type,Xe=S.has(Ie),Fe=Oe.getClearColor(),We=Oe.getClearAlpha(),Ke=Fe.r,rt=Fe.g,Je=Fe.b;Xe?(I[0]=Ke,I[1]=rt,I[2]=Je,I[3]=We,V.clearBufferuiv(V.COLOR,0,I)):(O[0]=Ke,O[1]=rt,O[2]=Je,O[3]=We,V.clearBufferiv(V.COLOR,0,O))}else oe|=V.COLOR_BUFFER_BIT}j&&(oe|=V.DEPTH_BUFFER_BIT),he&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ft,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Oe.dispose(),Ce.dispose(),we.dispose(),v.dispose(),J.dispose(),pe.dispose(),Ne.dispose(),He.dispose(),Ae.dispose(),ke.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Gr),Ue.removeEventListener("sessionend",no),Hi.stop()};function ft(R){R.preventDefault(),k_("WebGLRenderer: Context Lost."),w=!0}function Bt(){k_("WebGLRenderer: Context Restored."),w=!1;const R=D.autoReset,j=ze.enabled,he=ze.autoUpdate,oe=ze.needsUpdate,ee=ze.type;ye(),D.autoReset=R,ze.enabled=j,ze.autoUpdate=he,ze.needsUpdate=oe,ze.type=ee}function wt(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function On(R){const j=R.target;j.removeEventListener("dispose",On),Ai(j)}function Ai(R){xl(R),v.remove(R)}function xl(R){const j=v.get(R).programs;j!==void 0&&(j.forEach(function(he){ke.releaseProgram(he)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,he,oe,ee,Ie){j===null&&(j=lt);const Xe=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=or(R,j,he,oe,ee);Ye.setMaterial(oe,Xe);let We=he.index,Ke=1;if(oe.wireframe===!0){if(We=Ve.getWireframeAttribute(he),We===void 0)return;Ke=2}const rt=he.drawRange,Je=he.attributes.position;let st=rt.start*Ke,Ot=(rt.start+rt.count)*Ke;Ie!==null&&(st=Math.max(st,Ie.start*Ke),Ot=Math.min(Ot,(Ie.start+Ie.count)*Ke)),We!==null?(st=Math.max(st,0),Ot=Math.min(Ot,We.count)):Je!=null&&(st=Math.max(st,0),Ot=Math.min(Ot,Je.count));const $t=Ot-st;if($t<0||$t===1/0)return;He.setup(ee,oe,Fe,he,We);let Zt,Ft=Y;if(We!==null&&(Zt=fe.get(We),Ft=Pe,Ft.setIndex(Zt)),ee.isMesh)oe.wireframe===!0?(Ye.setLineWidth(oe.wireframeLinewidth*Wt()),Ft.setMode(V.LINES)):Ft.setMode(V.TRIANGLES);else if(ee.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),Ye.setLineWidth(tt*Wt()),ee.isLineSegments?Ft.setMode(V.LINES):ee.isLineLoop?Ft.setMode(V.LINE_LOOP):Ft.setMode(V.LINE_STRIP)}else ee.isPoints?Ft.setMode(V.POINTS):ee.isSprite&&Ft.setMode(V.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)pl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const tt=ee._multiDrawStarts,It=ee._multiDrawCounts,ht=ee._multiDrawCount,Mn=We?fe.get(We).bytesPerElement:1,Qi=v.get(oe).currentProgram.getUniforms();for(let Tn=0;Tn<ht;Tn++)Qi.setValue(V,"_gl_DrawID",Tn),Ft.render(tt[Tn]/Mn,It[Tn])}else if(ee.isInstancedMesh)Ft.renderInstances(st,$t,ee.count);else if(he.isInstancedBufferGeometry){const tt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,It=Math.min(he.instanceCount,tt);Ft.renderInstances(st,$t,It)}else Ft.render(st,$t)};function eo(R,j,he){R.transparent===!0&&R.side===ya&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,Xr(R,j,he),R.side=sr,R.needsUpdate=!0,Xr(R,j,he),R.side=ya):Xr(R,j,he)}this.compile=function(R,j,he=null){he===null&&(he=R),z=we.get(he),z.init(j),P.push(z),he.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(z.pushLight(ee),ee.castShadow&&z.pushShadow(ee))}),R!==he&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(z.pushLight(ee),ee.castShadow&&z.pushShadow(ee))}),z.setupLights();const oe=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Xe=0;Xe<Ie.length;Xe++){const Fe=Ie[Xe];eo(Fe,he,ee),oe.add(Fe)}else eo(Ie,he,ee),oe.add(Ie)}),z=P.pop(),oe},this.compileAsync=function(R,j,he=null){const oe=this.compile(R,j,he);return new Promise(ee=>{function Ie(){if(oe.forEach(function(Xe){v.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){ee(R);return}setTimeout(Ie,10)}mt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Hr=null;function to(R){Hr&&Hr(R)}function Gr(){Hi.stop()}function no(){Hi.start()}const Hi=new GS;Hi.setAnimationLoop(to),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(R){Hr=R,Ue.setAnimationLoop(R),R===null?Hi.stop():Hi.start()},Ue.addEventListener("sessionstart",Gr),Ue.addEventListener("sessionend",no),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const he=Ue.enabled===!0&&Ue.isPresenting===!0,oe=K!==null&&($===null||he)&&K.begin(C,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(j),j=Ue.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,$),z=we.get(R,P.length),z.init(j),P.push(z),nt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),be.setFromProjectionMatrix(nt,ji,j.reversedDepth),Le=this.localClippingEnabled,Se=Ge.init(this.clippingPlanes,Le),N=Ce.get(R,B.length),N.init(),B.push(N),Ue.enabled===!0&&Ue.isPresenting===!0){const Xe=C.xr.getDepthSensingMesh();Xe!==null&&di(Xe,j,-1/0,C.sortObjects)}di(R,j,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(_e,Re),$e=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,$e&&Oe.addToRenderList(N,R),this.info.render.frame++,Se===!0&&Ge.beginShadows();const ee=z.state.shadowsArray;if(ze.render(ee,R,j),Se===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&K.hasRenderPass())===!1){const Xe=N.opaque,Fe=N.transmissive;if(z.setupLights(),j.isArrayCamera){const We=j.cameras;if(Fe.length>0)for(let Ke=0,rt=We.length;Ke<rt;Ke++){const Je=We[Ke];yn(Xe,Fe,R,Je)}$e&&Oe.render(R);for(let Ke=0,rt=We.length;Ke<rt;Ke++){const Je=We[Ke];ln(N,R,Je,Je.viewport)}}else Fe.length>0&&yn(Xe,Fe,R,j),$e&&Oe.render(R),ln(N,R,j)}$!==null&&se===0&&(F.updateMultisampleRenderTarget($),F.updateRenderTargetMipmap($)),oe&&K.end(C),R.isScene===!0&&R.onAfterRender(C,R,j),He.resetDefaultState(),ce=-1,me=null,P.pop(),P.length>0?(z=P[P.length-1],Se===!0&&Ge.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function di(R,j,he,oe){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)he=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)z.pushLight(R),R.castShadow&&z.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||be.intersectsSprite(R)){oe&&Ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nt);const Xe=Ne.update(R),Fe=R.material;Fe.visible&&N.push(R,Xe,Fe,he,Ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||be.intersectsObject(R))){const Xe=Ne.update(R),Fe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ze.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ze.copy(Xe.boundingSphere.center)),Ze.applyMatrix4(R.matrixWorld).applyMatrix4(nt)),Array.isArray(Fe)){const We=Xe.groups;for(let Ke=0,rt=We.length;Ke<rt;Ke++){const Je=We[Ke],st=Fe[Je.materialIndex];st&&st.visible&&N.push(R,Xe,st,he,Ze.z,Je)}}else Fe.visible&&N.push(R,Xe,Fe,he,Ze.z,null)}}const Ie=R.children;for(let Xe=0,Fe=Ie.length;Xe<Fe;Xe++)di(Ie[Xe],j,he,oe)}function ln(R,j,he,oe){const{opaque:ee,transmissive:Ie,transparent:Xe}=R;z.setupLightsView(he),Se===!0&&Ge.setGlobalState(C.clippingPlanes,he),oe&&Ye.viewport(L.copy(oe)),ee.length>0&&Ri(ee,j,he),Ie.length>0&&Ri(Ie,j,he),Xe.length>0&&Ri(Xe,j,he),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yn(R,j,he,oe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[oe.id]===void 0){const st=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[oe.id]=new Fi(1,1,{generateMipmaps:!0,type:st?Ki:li,minFilter:Ir,samples:yt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Ie=z.state.transmissionRenderTarget[oe.id],Xe=oe.viewport||L;Ie.setSize(Xe.z*C.transmissionResolutionScale,Xe.w*C.transmissionResolutionScale);const Fe=C.getRenderTarget(),We=C.getActiveCubeFace(),Ke=C.getActiveMipmapLevel();C.setRenderTarget(Ie),C.getClearColor(Te),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),$e&&Oe.render(he);const rt=C.toneMapping;C.toneMapping=qi;const Je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),z.setupLightsView(oe),Se===!0&&Ge.setGlobalState(C.clippingPlanes,oe),Ri(R,he,oe),F.updateMultisampleRenderTarget(Ie),F.updateRenderTargetMipmap(Ie),mt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ot=0,$t=j.length;Ot<$t;Ot++){const Zt=j[Ot],{object:Ft,geometry:tt,material:It,group:ht}=Zt;if(It.side===ya&&Ft.layers.test(oe.layers)){const Mn=It.side;It.side=Qn,It.needsUpdate=!0,Vr(Ft,he,oe,tt,It,ht),It.side=Mn,It.needsUpdate=!0,st=!0}}st===!0&&(F.updateMultisampleRenderTarget(Ie),F.updateRenderTargetMipmap(Ie))}C.setRenderTarget(Fe,We,Ke),C.setClearColor(Te,Me),Je!==void 0&&(oe.viewport=Je),C.toneMapping=rt}function Ri(R,j,he){const oe=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Ie=R.length;ee<Ie;ee++){const Xe=R[ee],{object:Fe,geometry:We,group:Ke}=Xe;let rt=Xe.material;rt.allowOverride===!0&&oe!==null&&(rt=oe),Fe.layers.test(he.layers)&&Vr(Fe,j,he,We,rt,Ke)}}function Vr(R,j,he,oe,ee,Ie){R.onBeforeRender(C,j,he,oe,ee,Ie),R.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(C,j,he,oe,R,Ie),ee.transparent===!0&&ee.side===ya&&ee.forceSinglePass===!1?(ee.side=Qn,ee.needsUpdate=!0,C.renderBufferDirect(he,j,oe,ee,R,Ie),ee.side=sr,ee.needsUpdate=!0,C.renderBufferDirect(he,j,oe,ee,R,Ie),ee.side=ya):C.renderBufferDirect(he,j,oe,ee,R,Ie),R.onAfterRender(C,j,he,oe,ee,Ie)}function Xr(R,j,he){j.isScene!==!0&&(j=lt);const oe=v.get(R),ee=z.state.lights,Ie=z.state.shadowsArray,Xe=ee.state.version,Fe=ke.getParameters(R,ee.state,Ie,j,he),We=ke.getProgramCacheKey(Fe);let Ke=oe.programs;oe.environment=R.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(R.isMeshStandardMaterial?pe:J).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",On),Ke=new Map,oe.programs=Ke);let rt=Ke.get(We);if(rt!==void 0){if(oe.currentProgram===rt&&oe.lightsStateVersion===Xe)return io(R,Fe),rt}else Fe.uniforms=ke.getUniforms(R),R.onBeforeCompile(Fe,C),rt=ke.acquireProgram(Fe,We),Ke.set(We,rt),oe.uniforms=Fe.uniforms;const Je=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=Ge.uniform),io(R,Fe),oe.needsLights=Aa(R),oe.lightsStateVersion=Xe,oe.needsLights&&(Je.ambientLightColor.value=ee.state.ambient,Je.lightProbe.value=ee.state.probe,Je.directionalLights.value=ee.state.directional,Je.directionalLightShadows.value=ee.state.directionalShadow,Je.spotLights.value=ee.state.spot,Je.spotLightShadows.value=ee.state.spotShadow,Je.rectAreaLights.value=ee.state.rectArea,Je.ltc_1.value=ee.state.rectAreaLTC1,Je.ltc_2.value=ee.state.rectAreaLTC2,Je.pointLights.value=ee.state.point,Je.pointLightShadows.value=ee.state.pointShadow,Je.hemisphereLights.value=ee.state.hemi,Je.directionalShadowMap.value=ee.state.directionalShadowMap,Je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Je.spotShadowMap.value=ee.state.spotShadowMap,Je.spotLightMatrix.value=ee.state.spotLightMatrix,Je.spotLightMap.value=ee.state.spotLightMap,Je.pointShadowMap.value=ee.state.pointShadowMap,Je.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=rt,oe.uniformsList=null,rt}function Sl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=uu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function io(R,j){const he=v.get(R);he.outputColorSpace=j.outputColorSpace,he.batching=j.batching,he.batchingColor=j.batchingColor,he.instancing=j.instancing,he.instancingColor=j.instancingColor,he.instancingMorph=j.instancingMorph,he.skinning=j.skinning,he.morphTargets=j.morphTargets,he.morphNormals=j.morphNormals,he.morphColors=j.morphColors,he.morphTargetsCount=j.morphTargetsCount,he.numClippingPlanes=j.numClippingPlanes,he.numIntersection=j.numClipIntersection,he.vertexAlphas=j.vertexAlphas,he.vertexTangents=j.vertexTangents,he.toneMapping=j.toneMapping}function or(R,j,he,oe,ee){j.isScene!==!0&&(j=lt),F.resetTextureUnits();const Ie=j.fog,Xe=oe.isMeshStandardMaterial?j.environment:null,Fe=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:js,We=(oe.isMeshStandardMaterial?pe:J).get(oe.envMap||Xe),Ke=oe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,rt=!!he.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Je=!!he.morphAttributes.position,st=!!he.morphAttributes.normal,Ot=!!he.morphAttributes.color;let $t=qi;oe.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($t=C.toneMapping);const Zt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ft=Zt!==void 0?Zt.length:0,tt=v.get(oe),It=z.state.lights;if(Se===!0&&(Le===!0||R!==me)){const An=R===me&&oe.id===ce;Ge.setState(oe,R,An)}let ht=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==It.state.version||tt.outputColorSpace!==Fe||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==We||oe.fog===!0&&tt.fog!==Ie||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ge.numPlanes||tt.numIntersection!==Ge.numIntersection)||tt.vertexAlphas!==Ke||tt.vertexTangents!==rt||tt.morphTargets!==Je||tt.morphNormals!==st||tt.morphColors!==Ot||tt.toneMapping!==$t||tt.morphTargetsCount!==Ft)&&(ht=!0):(ht=!0,tt.__version=oe.version);let Mn=tt.currentProgram;ht===!0&&(Mn=Xr(oe,j,ee));let Qi=!1,Tn=!1,pi=!1;const zt=Mn.getUniforms(),bn=tt.uniforms;if(Ye.useProgram(Mn.program)&&(Qi=!0,Tn=!0,pi=!0),oe.id!==ce&&(ce=oe.id,Tn=!0),Qi||me!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(V,"projectionMatrix",R.projectionMatrix),zt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Rn=zt.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,qe.setFromMatrixPosition(R.matrixWorld)),yt.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),me!==R&&(me=R,Tn=!0,pi=!0)}if(tt.needsLights&&(It.state.directionalShadowMap.length>0&&zt.setValue(V,"directionalShadowMap",It.state.directionalShadowMap,F),It.state.spotShadowMap.length>0&&zt.setValue(V,"spotShadowMap",It.state.spotShadowMap,F),It.state.pointShadowMap.length>0&&zt.setValue(V,"pointShadowMap",It.state.pointShadowMap,F)),ee.isSkinnedMesh){zt.setOptional(V,ee,"bindMatrix"),zt.setOptional(V,ee,"bindMatrixInverse");const An=ee.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),zt.setValue(V,"boneTexture",An.boneTexture,F))}ee.isBatchedMesh&&(zt.setOptional(V,ee,"batchingTexture"),zt.setValue(V,"batchingTexture",ee._matricesTexture,F),zt.setOptional(V,ee,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",ee._indirectTexture,F),zt.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",ee._colorsTexture,F));const mn=he.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&gt.update(ee,he,Mn),(Tn||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,zt.setValue(V,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(bn.envMap.value=We,bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Rw()),Tn&&(zt.setValue(V,"toneMappingExposure",C.toneMappingExposure),tt.needsLights&&ao(bn,pi),Ie&&oe.fog===!0&&at.refreshFogUniforms(bn,Ie),at.refreshMaterialUniforms(bn,oe,ue,W,z.state.transmissionRenderTarget[R.id]),uu.upload(V,Sl(tt),bn,F)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(uu.upload(V,Sl(tt),bn,F),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(V,"center",ee.center),zt.setValue(V,"modelViewMatrix",ee.modelViewMatrix),zt.setValue(V,"normalMatrix",ee.normalMatrix),zt.setValue(V,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const An=oe.uniformsGroups;for(let Rn=0,kr=An.length;Rn<kr;Rn++){const Ci=An[Rn];Ae.update(Ci,Mn),Ae.bind(Ci,Mn)}}return Mn}function ao(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,j,he){const oe=v.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),v.get(R.texture).__webglTexture=j,v.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:he,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const he=v.get(R);he.__webglFramebuffer=j,he.__useDefaultFramebuffer=j===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(R,j=0,he=0){$=R,X=j,se=he;let oe=null,ee=!1,Ie=!1;if(R){const Fe=v.get(R);if(Fe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),L.copy(R.viewport),G.copy(R.scissor),te=R.scissorTest,Ye.viewport(L),Ye.scissor(G),Ye.setScissorTest(te),ce=-1;return}else if(Fe.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(Fe.__hasExternalTextures)F.rebindTextures(R,v.get(R.texture).__webglTexture,v.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(Fe.__boundDepthTexture!==rt){if(rt!==null&&v.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ke=v.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[j])?oe=Ke[j][he]:oe=Ke[j],ee=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?oe=v.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?oe=Ke[he]:oe=Ke,L.copy(R.viewport),G.copy(R.scissor),te=R.scissorTest}else L.copy(Z).multiplyScalar(ue).floor(),G.copy(re).multiplyScalar(ue).floor(),te=Q;if(he!==0&&(oe=Ra),Ye.bindFramebuffer(V.FRAMEBUFFER,oe)&&Ye.drawBuffers(R,oe),Ye.viewport(L),Ye.scissor(G),Ye.setScissorTest(te),ee){const Fe=v.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,he)}else if(Ie){const Fe=j;for(let We=0;We<R.textures.length;We++){const Ke=v.get(R.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,Ke.__webglTexture,he,Fe)}}else if(R!==null&&he!==0){const Fe=v.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,he)}ce=-1},this.readRenderTargetPixels=function(R,j,he,oe,ee,Ie,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=v.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We){Ye.bindFramebuffer(V.FRAMEBUFFER,We);try{const Ke=R.textures[Fe],rt=Ke.format,Je=Ke.type;if(!yt.textureFormatReadable(rt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Je)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-oe&&he>=0&&he<=R.height-ee&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(j,he,oe,ee,De.convert(rt),De.convert(Je),Ie))}finally{const Ke=$!==null?v.get($).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,j,he,oe,ee,Ie,Xe,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=v.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(We=We[Xe]),We)if(j>=0&&j<=R.width-oe&&he>=0&&he<=R.height-ee){Ye.bindFramebuffer(V.FRAMEBUFFER,We);const Ke=R.textures[Fe],rt=Ke.format,Je=Ke.type;if(!yt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,st),V.bufferData(V.PIXEL_PACK_BUFFER,Ie.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(j,he,oe,ee,De.convert(rt),De.convert(Je),0);const Ot=$!==null?v.get($).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Ot);const $t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await bT(V,$t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,st),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ie),V.deleteBuffer(st),V.deleteSync($t),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,he=0){const oe=Math.pow(2,-he),ee=Math.floor(R.image.width*oe),Ie=Math.floor(R.image.height*oe),Xe=j!==null?j.x:0,Fe=j!==null?j.y:0;F.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,he,0,0,Xe,Fe,ee,Ie),Ye.unbindTexture()};const lr=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(R,j,he=null,oe=null,ee=0,Ie=null){Ie===null&&(ee!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=ee,ee=0):Ie=0);let Xe,Fe,We,Ke,rt,Je,st,Ot,$t;const Zt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(he!==null)Xe=he.max.x-he.min.x,Fe=he.max.y-he.min.y,We=he.isBox3?he.max.z-he.min.z:1,Ke=he.min.x,rt=he.min.y,Je=he.isBox3?he.min.z:0;else{const mn=Math.pow(2,-ee);Xe=Math.floor(Zt.width*mn),Fe=Math.floor(Zt.height*mn),R.isDataArrayTexture?We=Zt.depth:R.isData3DTexture?We=Math.floor(Zt.depth*mn):We=1,Ke=0,rt=0,Je=0}oe!==null?(st=oe.x,Ot=oe.y,$t=oe.z):(st=0,Ot=0,$t=0);const Ft=De.convert(j.format),tt=De.convert(j.type);let It;j.isData3DTexture?(F.setTexture3D(j,0),It=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(F.setTexture2DArray(j,0),It=V.TEXTURE_2D_ARRAY):(F.setTexture2D(j,0),It=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const ht=V.getParameter(V.UNPACK_ROW_LENGTH),Mn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Qi=V.getParameter(V.UNPACK_SKIP_PIXELS),Tn=V.getParameter(V.UNPACK_SKIP_ROWS),pi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Zt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je);const zt=R.isDataArrayTexture||R.isData3DTexture,bn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const mn=v.get(R),An=v.get(j),Rn=v.get(mn.__renderTarget),kr=v.get(An.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let Ci=0;Ci<We;Ci++)zt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,v.get(R).__webglTexture,ee,Je+Ci),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,v.get(j).__webglTexture,Ie,$t+Ci)),V.blitFramebuffer(Ke,rt,Xe,Fe,st,Ot,Xe,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||v.has(R)){const mn=v.get(R),An=v.get(j);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,lr),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let Rn=0;Rn<We;Rn++)zt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,ee,Je+Rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,ee),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Ie,$t+Rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Ie),ee!==0?V.blitFramebuffer(Ke,rt,Xe,Fe,st,Ot,Xe,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(It,Ie,st,Ot,$t+Rn,Ke,rt,Xe,Fe):V.copyTexSubImage2D(It,Ie,st,Ot,Ke,rt,Xe,Fe);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(It,Ie,st,Ot,$t,Xe,Fe,We,Ft,tt,Zt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(It,Ie,st,Ot,$t,Xe,Fe,We,Ft,Zt.data):V.texSubImage3D(It,Ie,st,Ot,$t,Xe,Fe,We,Ft,tt,Zt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ie,st,Ot,Xe,Fe,Ft,tt,Zt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ie,st,Ot,Zt.width,Zt.height,Ft,Zt.data):V.texSubImage2D(V.TEXTURE_2D,Ie,st,Ot,Xe,Fe,Ft,tt,Zt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ht),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pi),Ie===0&&j.generateMipmaps&&V.generateMipmap(It),Ye.unbindTexture()},this.initRenderTarget=function(R){v.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){X=0,se=0,$=null,Ye.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}var fu=(a=>(a.Upright="UPRIGHT",a.Reversed="REVERSED",a))(fu||{}),Hs=(a=>(a.Major="MAJOR",a.Wands="WANDS",a.Cups="CUPS",a.Swords="SWORDS",a.Pentacles="PENTACLES",a))(Hs||{}),qt=(a=>(a.NONE="NONE",a.OPEN_PALM="OPEN_PALM",a.POINTING="POINTING",a.FLIP="FLIP",a.CLOSED="CLOSED",a))(qt||{});const Cw="data:image/png;base64,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",ww=[{id:"DAILY",name:"单牌每日抽 (Daily Draw)",description:"最基础的方法，每天抽出一张牌，作为今日行动的灵感或提醒。",positions:[{name:"今日指引",description:"今日的核心能量与建议"}]},{id:"TRIANGLE",name:"圣三角牌阵 (Saint Triangle)",description:"分析事态演变规律，适合查看过去、现在与未来的线性发展。",positions:[{name:"过去 (Past)",description:"导致目前状况的成因"},{name:"现在 (Present)",description:"当下的核心状况"},{name:"未来 (Future)",description:"未来的发展趋势"}]},{id:"CHOICE",name:"二选一牌阵 (Two-Choice)",description:"面对两个纠结的选项时，对比两个方向各自的利弊。",positions:[{name:"现状",description:"目前的选择困境"},{name:"选项 A",description:"选择路径 A 的结果"},{name:"选项 B",description:"选择路径 B 的结果"},{name:"建议",description:"综合建议"}]},{id:"CELTIC",name:"凯尔特十字 (Celtic Cross)",description:"全方位深度洞察，涵盖外部环境、心理阻碍、潜在结果等十个维度。",positions:[{name:"核心",description:"问题的核心"},{name:"阻碍",description:"此时的阻碍或助力"},{name:"潜意识",description:"基底的基础与潜意识"},{name:"过去",description:"刚刚过去的影响"},{name:"意识",description:"你所知道的目标"},{name:"未来",description:"即将发生的事情"},{name:"态度",description:"你的自我认知"},{name:"环境",description:"周围环境与他人看法"},{name:"希望/恐惧",description:"内心的期待与担忧"},{name:"结果",description:"最终的综合结果"}]}],Dw=[{id:0,name:"0 愚者 (The Fool)",url:"https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",meaningUpright:"新的开始，天真，自发性，自由的精神。",meaningReversed:"鲁莽，冒险，错误的决定，不负责任。"},{id:1,name:"I 魔术师 (The Magician)",url:"https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",meaningUpright:"创造力，足智多谋，意志力，显化。",meaningReversed:"欺骗，计划不周，怀才不遇，滥用力量。"},{id:2,name:"II 女祭司 (High Priestess)",url:"https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",meaningUpright:"直觉，神圣知识，潜意识，阴性能量。",meaningReversed:"秘密，与直觉断联，孤僻，表面化。"},{id:3,name:"III 皇后 (The Empress)",url:"https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",meaningUpright:"丰饶，母性，自然，美，滋养。",meaningReversed:"创造力受阻，过度依赖，缺乏关怀。"},{id:4,name:"IV 皇帝 (The Emperor)",url:"https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",meaningUpright:"权威，架构，稳固，父亲形象。",meaningReversed:"专制，过度控制，缺乏纪律，僵化。"},{id:5,name:"V 教皇 (The Hierophant)",url:"https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",meaningUpright:"精神智慧，宗教信仰，传统，从众。",meaningReversed:"挑战现状，个人信仰，反叛，自由。"},{id:6,name:"VI 恋人 (The Lovers)",url:"https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg",meaningUpright:"爱，和谐，人际关系，价值观一致。",meaningReversed:"不和谐，自我中心，失衡，价值观冲突。"},{id:7,name:"VII 战车 (The Chariot)",url:"https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",meaningUpright:"控制，意志力，胜利，决心。",meaningReversed:"失控，缺乏方向，侵略性。"},{id:8,name:"VIII 力量 (Strength)",url:"https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",meaningUpright:"力量，勇气，耐心，控制，同情。",meaningReversed:"软弱，自我怀疑，缺乏自律。"},{id:9,name:"IX 隐士 (The Hermit)",url:"https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",meaningUpright:"内省，寻求真理，独处，指引。",meaningReversed:"孤立，寂寞，退缩，拒绝建议。"},{id:10,name:"X 命运之轮 (Wheel of Fortune)",url:"https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",meaningUpright:"好运，业力，生命周期，命运的转折。",meaningReversed:"厄运，抗拒改变，打破循环，失控。"},{id:11,name:"XI 正义 (Justice)",url:"https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",meaningUpright:"正义，公平，真理，因果。",meaningReversed:"不公，不诚实，逃避责任。"},{id:12,name:"XII 倒吊人 (The Hanged Man)",url:"https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",meaningUpright:"暂停，投降，新视角，牺牲。",meaningReversed:"拖延，抵抗，停滞，无谓的牺牲。"},{id:13,name:"XIII 死神 (Death)",url:"https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",meaningUpright:"结束，改变，转变，过渡。",meaningReversed:"抗拒改变，停滞不前，无法释怀。"},{id:14,name:"XIV 节制 (Temperance)",url:"https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",meaningUpright:"平衡，适度，耐心，目标。",meaningReversed:"失衡，过度，缺乏远见。"},{id:15,name:"XV 恶魔 (The Devil)",url:"https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",meaningUpright:"束缚，成瘾，唯物主义，性。",meaningReversed:"挣脱束缚，重获力量，打破枷锁。"},{id:16,name:"XVI 高塔 (The Tower)",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",meaningUpright:"灾难，剧变，突然的启示，骄傲的崩塌。",meaningReversed:"避免灾难，恐惧改变，延迟的破坏。"},{id:17,name:"XVII 星星 (The Star)",url:"https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",meaningUpright:"希望，信仰，目的，更新，灵性。",meaningReversed:"绝望，缺乏信心，沮丧。"},{id:18,name:"XVIII 月亮 (The Moon)",url:"https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",meaningUpright:"幻觉，恐惧，焦虑，潜意识。",meaningReversed:"释放恐惧，压抑的情感，混乱。"},{id:19,name:"XIX 太阳 (The Sun)",url:"https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",meaningUpright:"积极，温暖，成功，活力。",meaningReversed:"暂时消沉，缺乏成功，虚假的快乐。"},{id:20,name:"XX 审判 (Judgement)",url:"https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",meaningUpright:"审判，重生，内心召唤，宽恕。",meaningReversed:"自我怀疑，拒绝召唤，无法前进。"},{id:21,name:"XXI 世界 (The World)",url:"https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",meaningUpright:"完成，整合，成就，旅行。",meaningReversed:"未完成，缺乏封闭，停滞。"}],Nw=()=>{const a=[{type:Hs.Wands,name:"权杖",en:"Wands",element:"火",urlCode:"wands"},{type:Hs.Cups,name:"圣杯",en:"Cups",element:"水",urlCode:"cups"},{type:Hs.Swords,name:"宝剑",en:"Swords",element:"风",urlCode:"swords"},{type:Hs.Pentacles,name:"星币",en:"Pentacles",element:"土",urlCode:"pentacles"}],e=[{id:1,name:"Ace",zh:"首牌"},{id:2,name:"Two",zh:"2"},{id:3,name:"Three",zh:"3"},{id:4,name:"Four",zh:"4"},{id:5,name:"Five",zh:"5"},{id:6,name:"Six",zh:"6"},{id:7,name:"Seven",zh:"7"},{id:8,name:"Eight",zh:"8"},{id:9,name:"Nine",zh:"9"},{id:10,name:"Ten",zh:"10"},{id:11,name:"Page",zh:"侍从"},{id:12,name:"Knight",zh:"骑士"},{id:13,name:"Queen",zh:"王后"},{id:14,name:"King",zh:"国王"}],i=[];let s=22;return a.forEach(l=>{e.forEach(c=>{const h=`${l.urlCode}${c.id.toString().padStart(2,"0")}.jpg`;i.push({id:s++,suit:l.type,name:`${l.name}${c.zh} (${c.name} of ${l.en})`,url:`https://raw.githubusercontent.com/iamfiscus/tarot-api/master/static/cards/${h}`,meaningUpright:`${l.element}元素的体现。${c.name} 代表的能量处于顺流状态。`,meaningReversed:`${l.element}元素的体现。${c.name} 代表的能量处于受阻或过度状态。`})})}),i},Uw=[...Dw.map(a=>({...a,suit:Hs.Major})),...Nw()],Lw=()=>Uw,Ow=({onCardSelected:a,onSequenceComplete:e,onGestureChange:i,mode:s,setMode:l,currentSpread:c,currentStep:h,customBackUrl:d,particleColor:m,particleCount:p,particleSize:g,cardSpeed:_,cardScale:x})=>{const y=et.useRef(null),T=et.useRef(null),b=et.useRef(null),M=et.useRef(null),S=et.useRef(null),I=et.useRef(null),O=et.useRef(null),N=et.useRef(null),z=et.useRef([]),B=et.useRef(null),P=et.useRef(null),K=et.useRef("SCROLL"),C=et.useRef(!1),w=.08*_,X=et.useRef(w),se=et.useRef(0),$=et.useRef({gesture:qt.NONE,x:.5,y:.5,isPresent:!1}),ce=et.useRef({x:.5,y:.5});et.useRef(new ct);const me=et.useRef(new Ub),L=et.useRef(new Tb),G=et.useRef(null),te=()=>new Qs(3,5,.05),Te=(W,ue)=>{const _e=te(),Re=new cd({color:1118481,roughness:.5}),Z={roughness:.3,metalness:.1,color:16777215};W?Z.map=W:Z.color=7020968;const re=new cd(Z),Q=new cd({color:12623936}),be=[Q,Q,Q,Q,Re,re],Se=new fi(_e,be);return Se.userData={id:ue,isCard:!0},Se.rotation.set(0,Math.PI,0),Se},Me=W=>{const ue=p,_e=new hi,Re=new Float32Array(ue*3),Z=new Float32Array(ue*3),re=new Float32Array(ue*3),Q=new At(m);for(let Le=0;Le<ue;Le++){const nt=Math.random()*Math.PI*2,qe=Math.acos(2*Math.random()-1),Ze=.1+Math.random()*2;Re[Le*3]=W.x+Ze*Math.sin(qe)*Math.cos(nt),Re[Le*3+1]=W.y+Ze*Math.sin(qe)*Math.sin(nt),Re[Le*3+2]=W.z+Ze*Math.cos(qe);const lt=.05+Math.random()*.1;Z[Le*3]=(Re[Le*3]-W.x)*lt,Z[Le*3+1]=(Re[Le*3+1]-W.y)*lt,Z[Le*3+2]=(Re[Le*3+2]-W.z)*lt,re[Le*3]=Q.r,re[Le*3+1]=Q.g,re[Le*3+2]=Q.b}_e.setAttribute("position",new ui(Re,3)),_e.setAttribute("color",new ui(re,3));const be=new FS({size:g*.05,vertexColors:!0,transparent:!0,opacity:1,blending:pu,depthWrite:!1}),Se=new vb(_e,be);return Se.userData={velocities:Z},Se},U=W=>{if(!W||W.length<21)return qt.NONE;const ue=W[0],_e=W[8],Re=W[5],Z=W[12],re=W[16],Q=W[20],be=(lt,$e)=>Math.sqrt(Math.pow(lt.x-$e.x,2)+Math.pow(lt.y-$e.y,2)+Math.pow(lt.z-$e.z,2)),Se=(lt,$e)=>be(lt,ue)>be($e,ue)*1.1,Le=Se(_e,Re),nt=Se(Z,W[9]),qe=Se(re,W[13]),Ze=Se(Q,W[17]);if(Le&&nt&&qe&&Ze)return qt.OPEN_PALM;if(Le&&!nt&&!qe&&!Ze){const lt=_e.x-ue.x,$e=_e.z-ue.z;return Math.abs(lt)>.15||Math.abs($e)>.1?qt.FLIP:qt.POINTING}return qt.NONE};return et.useEffect(()=>{if(!y.current)return;z.current=[];const W=new mp;M.current=W;const ue=new Jn(60,window.innerWidth/window.innerHeight,.1,100);ue.position.set(0,0,14),S.current=ue;const _e=new WS({antialias:!0,alpha:!0});_e.setSize(window.innerWidth,window.innerHeight),_e.setPixelRatio(window.devicePixelRatio),y.current.appendChild(_e.domElement),I.current=_e;const Re=new wb(16777215,.6);W.add(Re);const Z=new Ab(16755200,30);Z.position.set(5,10,10),Z.add(new Cb(16755200,10)),W.add(Z);const re=new rl;O.current=re,W.add(re);const Q=Se=>{Se&&(Se.colorSpace=Kn);const Le=24,nt=3.5;for(;re.children.length>0;)re.remove(re.children[0]);z.current=[];for(let qe=0;qe<Le;qe++){const Ze=Te(Se,qe);Ze.position.set((qe-Le/2)*nt,0,0),re.add(Ze),z.current.push(Ze)}};L.current.load(d||Cw,Se=>{G.current=Se,Q(Se)},void 0,()=>Q(null));const be=()=>{ue.aspect=window.innerWidth/window.innerHeight,ue.updateProjectionMatrix(),_e.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",be),()=>{var Se;window.removeEventListener("resize",be),(Se=y.current)==null||Se.removeChild(_e.domElement),_e.dispose(),z.current=[]}},[d]),et.useEffect(()=>{let W;const ue=()=>{var Z,re;if(W=requestAnimationFrame(ue),!M.current||!S.current||!I.current)return;if(ce.current.x=ga.lerp(ce.current.x,$.current.x,.15),ce.current.y=ga.lerp(ce.current.y,$.current.y,.15),b.current){b.current.style.left=`${ce.current.x*100}%`,b.current.style.top=`${ce.current.y*100}%`,b.current.style.opacity=$.current.isPresent?"1":"0";const Q=$.current.gesture===qt.FLIP;b.current.style.borderColor=Q?"#fbbf24":"#a855f7",b.current.style.backgroundColor=Q?"#fbbf24":"transparent",b.current.style.transform=`translate(-50%, -50%) scale(${$.current.gesture===qt.OPEN_PALM?2:1})`}const _e=$.current.gesture,Re=K.current==="SCROLL";if(Re&&O.current){const Q=3.5*x,Se=z.current.length*Q;let Le=null;if(s==="MOUSE"||_e===qt.POINTING||_e===qt.FLIP){const Ze=new ct(ce.current.x*2-1,-(ce.current.y*2-1));me.current.setFromCamera(Ze,S.current);const lt=me.current.intersectObjects(z.current);lt.length>0&&(Le=lt[0].object)}B.current=Le;let qe=w;s==="MOUSE"?Le||_e===qt.FLIP?qe=0:qe=w:_e===qt.OPEN_PALM?qe=w*.05:(_e===qt.POINTING||_e===qt.FLIP)&&(qe=0),X.current=ga.lerp(X.current,qe,.1),se.current-=X.current,z.current.forEach((Ze,lt)=>{let $e=(lt*Q+se.current)%Se;$e<-Se/2&&($e+=Se),$e>Se/2&&($e-=Se);let Wt=new ae($e,0,0),V=new ae(x,x,x),Ct=new zi(0,Math.PI,0);if(Ze===Le){Wt.z=3.5,V.multiplyScalar(1.3);const yt=ce.current.x*2-1,Ye=-(ce.current.y*2-1);Ct.x=Ye*.4,Ct.y=Math.PI+yt*.4,Ct.z=-yt*.2}const mt=.3;Ze.position.lerp(Wt,mt),Ze.scale.lerp(V,mt),Ze.rotation.x=ga.lerp(Ze.rotation.x,Ct.x,mt),Ze.rotation.y=ga.lerp(Ze.rotation.y,Ct.y,mt),Ze.rotation.z=ga.lerp(Ze.rotation.z,Ct.z,mt)})}if(Re&&_e===qt.FLIP&&B.current&&!C.current){C.current=!0,K.current="REVEAL",P.current=B.current;const Q=Lw(),be=Q[Math.floor(Math.random()*Q.length)],Se=Math.random()>.5?fu.Upright:fu.Reversed,Le={...be,orientation:Se,timestamp:Date.now()};P.current.userData.drawnData=Le,P.current.userData.revealStartTime=Date.now(),L.current.load(be.url,nt=>{nt.colorSpace=Kn;const qe=P.current.material[4];qe.map=nt,qe.color.setHex(16777215),qe.needsUpdate=!0}),a(Le)}if(K.current==="REVEAL"&&P.current){const Q=P.current,be=Q.userData.drawnData,Se=new ae(0,0,5);Q.position.lerp(Se,.1);const Le=(Date.now()-Q.userData.revealStartTime)/1e3;if(Le<.8){const nt=Math.min(Le/.6,1),qe=1-Math.pow(1-nt,4);Q.rotation.y=ga.lerp(Math.PI,0,qe),Q.rotation.z=ga.lerp(0,be.orientation===fu.Reversed?Math.PI:0,qe),Q.rotation.x=ga.lerp(Q.rotation.x,0,.1),Q.scale.lerp(new ae(x*1.8,x*1.8,x*1.8),.1)}else if(Le>2.2){K.current="DISSOLVING",Q.visible=!1;const nt=Me(Q.position);N.current=nt,(Z=M.current)==null||Z.add(nt)}}if(K.current==="DISSOLVING"&&N.current){const Q=N.current,be=Q.geometry.attributes.position.array,Se=Q.userData.velocities,Le=Q.material;for(let nt=0;nt<be.length;nt+=3)be[nt]+=Se[nt],be[nt+1]+=Se[nt+1],be[nt+2]+=Se[nt+2],Se[nt]*=.98,Se[nt+1]*=.98,Se[nt+2]*=.98;if(Q.geometry.attributes.position.needsUpdate=!0,Le.opacity-=.02,Le.opacity<=0){if((re=M.current)==null||re.remove(Q),N.current=null,P.current){e(P.current.userData.drawnData),P.current.visible=!0;const nt=P.current.material[4];nt.color.setHex(1118481),nt.map=null,P.current=null}K.current="SCROLL",C.current=!1}}I.current.render(M.current,S.current)};return ue(),()=>cancelAnimationFrame(W)},[w,x,a,e,m,p,g]),et.useEffect(()=>{if(s==="MOUSE")return;let W=null,ue=null;const _e=Re=>{if(!Re.multiHandLandmarks||Re.multiHandLandmarks.length===0){$.current={gesture:qt.NONE,x:.5,y:.5,isPresent:!1},i(qt.NONE);return}const Z=Re.multiHandLandmarks[0],re=U(Z),Q=Z[8];$.current={gesture:re,x:1-Q.x,y:Q.y,isPresent:!0},i(re)};return T.current&&(ue=new window.Hands({locateFile:Re=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${Re}`}),ue.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.6,minTrackingConfidence:.6}),ue.onResults(_e),W=new window.Camera(T.current,{onFrame:async()=>{ue&&T.current&&await ue.send({image:T.current})},width:640,height:480}),W.start()),()=>{ue&&ue.close()}},[s,i]),et.useEffect(()=>{if(s!=="MOUSE")return;const W=Re=>{$.current.x=Re.clientX/window.innerWidth,$.current.y=Re.clientY/window.innerHeight,$.current.isPresent=!0,$.current.gesture=qt.NONE,i(qt.NONE)},ue=()=>{$.current.gesture=qt.FLIP,i(qt.FLIP)},_e=()=>{$.current.gesture=qt.NONE,i(qt.NONE)};return window.addEventListener("mousemove",W),window.addEventListener("mousedown",ue),window.addEventListener("mouseup",_e),()=>{window.removeEventListener("mousemove",W),window.removeEventListener("mousedown",ue),window.removeEventListener("mouseup",_e)}},[s,i]),ge.jsxs("div",{className:"relative w-full h-full overflow-hidden",children:[ge.jsx("div",{ref:y,className:"absolute inset-0 z-10"}),ge.jsx("video",{ref:T,className:"hidden",playsInline:!0}),ge.jsx("div",{ref:b,className:"fixed w-6 h-6 rounded-full border-2 border-white pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 will-change-transform",style:{transition:"none"}})]})},_d=(a,e=20,i=0,s=!0)=>{const[l,c]=et.useState(""),[h,d]=et.useState(!1);return et.useEffect(()=>{if(!s)return;c(""),d(!1);let m;const p=setTimeout(()=>{let g=0;m=setInterval(()=>{g<a.length?(c(_=>_+a.charAt(g)),g++):(clearInterval(m),d(!0))},e)},i);return()=>{clearTimeout(p),m&&clearInterval(m)}},[a,e,i,s]),{displayedText:l,isComplete:h}},Iw=({card:a,onClose:e,aiAnalysis:i,isLoading:s,loadingMessage:l="正在读取星辰的旨意...",error:c})=>{const h=a.orientation==="UPRIGHT"?"正位":"逆位",d=!s&&!!i,m=_d((i==null?void 0:i.visual)||"",15,0,d),p=_d((i==null?void 0:i.interpretation)||"",15,0,d&&m.isComplete),g=_d((i==null?void 0:i.advice)||"",15,0,d&&p.isComplete),[_,x]=et.useState({x:0,y:0}),y=T=>{const{clientX:b,clientY:M}=T,{innerWidth:S,innerHeight:I}=window,O=(b-S/2)/(S/2),N=(M-I/2)/(I/2);x({x:O*20,y:-N*20})};return ge.jsx("div",{className:"fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#050208]/80 backdrop-blur-xl animate-in fade-in duration-700",onClick:e,onMouseMove:y,children:ge.jsxs("div",{className:"relative flex flex-col items-center w-full max-w-2xl px-6 py-20",onClick:T=>T.stopPropagation(),style:{perspective:"1000px"},children:[ge.jsxs("div",{className:"relative mb-12 transition-transform duration-200 ease-out",style:{transform:`rotateY(${_.x}deg) rotateX(${_.y}deg)`,transformStyle:"preserve-3d"},children:[ge.jsx("div",{className:"absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full opacity-50"}),ge.jsxs("div",{className:`relative w-64 md:w-80 aspect-[3/5] rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.3)] ${s?"blur-md opacity-40":""}`,children:[ge.jsx("img",{src:a.url,alt:a.name,className:`w-full h-full object-cover rounded-2xl border border-white/10 ${a.orientation==="REVERSED"?"rotate-180":""}`}),ge.jsx("div",{className:"absolute inset-0 rounded-2xl pointer-events-none",style:{background:`radial-gradient(circle at ${50+_.x}% ${50+_.y}%, rgba(255,255,255,0.1) 0%, transparent 80%)`}})]}),s&&ge.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[ge.jsx("div",{className:"text-5xl animate-bounce mb-4",children:"🔮"}),ge.jsx("div",{className:"text-purple-300 tracking-[0.3em] text-xs animate-pulse uppercase",children:l})]})]}),ge.jsxs("div",{className:"w-full text-center space-y-8",children:[ge.jsxs("div",{className:"space-y-2",children:[ge.jsxs("p",{className:"text-purple-400/60 text-[10px] tracking-[0.4em] uppercase font-bold",children:[a.spreadName," · ",a.spreadPosition]}),ge.jsx("h2",{className:"text-4xl md:text-5xl font-serif text-white",children:a.name}),ge.jsx("p",{className:`text-xs tracking-[0.5em] font-bold uppercase ${a.orientation==="UPRIGHT"?"text-emerald-400":"text-rose-400"}`,children:h})]}),ge.jsxs("div",{className:"space-y-10 text-gray-300 font-light leading-relaxed text-base md:text-lg",children:[d&&ge.jsx("p",{className:"italic text-purple-100/70 text-sm",children:m.displayedText}),m.isComplete&&ge.jsx("p",{className:"text-white/90",children:p.displayedText}),p.isComplete&&ge.jsx("div",{className:"bg-white/5 py-8 px-6 rounded-2xl border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-1000",children:ge.jsx("p",{className:"text-yellow-100/90 font-serif italic text-xl",children:g.displayedText})})]}),ge.jsx("div",{className:"pt-12 pb-20 opacity-20",children:ge.jsx("p",{className:"text-[10px] tracking-[0.3em] text-white uppercase animate-pulse",children:"—— 点击空白处返回 ——"})})]})]})})},Vx=({mouseForce:a=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:g=["#5227FF","#FF9FFC","#B19EEF"],style:_={},className:x="",autoDemo:y=!0,autoSpeed:T=.5,autoIntensity:b=2.2,takeoverDuration:M=.25,autoResumeDelay:S=1e3,autoRampDuration:I=.6})=>{const O=et.useRef(null),N=et.useRef(null),z=et.useRef(null),B=et.useRef(null),P=et.useRef(null),K=et.useRef(!0),C=et.useRef(null);return et.useEffect(()=>{if(!O.current)return;function w(D){let v;Array.isArray(D)&&D.length>0?D.length===1?v=[D[0],D[0]]:v=D:v=["#ffffff","#ffffff"];const F=v.length,J=new Uint8Array(F*4);for(let fe=0;fe<F;fe++){const Ve=new At(v[fe]);J[fe*4+0]=Math.round(Ve.r*255),J[fe*4+1]=Math.round(Ve.g*255),J[fe*4+2]=Math.round(Ve.b*255),J[fe*4+3]=255}const pe=new PS(J,F,1,Ti);return pe.magFilter=pn,pe.minFilter=pn,pe.wrapS=ci,pe.wrapT=ci,pe.generateMipmaps=!1,pe.needsUpdate=!0,pe}const X=w(g),se=new nn(0,0,0,0);class ${constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(v){this.container=v,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new WS({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new At(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Nb,this.clock.start()}resize(){if(!this.container)return;const v=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(v.width)),this.height=Math.max(1,Math.floor(v.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const ce=new $;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(v){this.container=v,this.docTarget=v.ownerDocument||null;const F=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);F&&(this.listenerTarget=F,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(v,F){if(!this.container)return!1;const J=this.container.getBoundingClientRect();return J.width===0||J.height===0?!1:v>=J.left&&v<=J.right&&F>=J.top&&F<=J.bottom}updateHoverState(v,F){return this.isHoverInside=this.isPointInside(v,F),this.isHoverInside}setCoords(v,F){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const J=this.container.getBoundingClientRect();if(J.width===0||J.height===0)return;const pe=(v-J.left)/J.width,fe=(F-J.top)/J.height;this.coords.set(pe*2-1,-(fe*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(v,F){this.coords.set(v,F),this.mouseMoved=!0}onDocumentMouseMove(v){if(this.updateHoverState(v.clientX,v.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const J=(v.clientX-F.left)/F.width,pe=(v.clientY-F.top)/F.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(pe*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(v.clientX,v.clientY),this.hasUserControl=!0}}onDocumentTouchStart(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY),this.hasUserControl=!0)}onDocumentTouchMove(v){if(v.touches.length!==1)return;const F=v.touches[0];this.updateHoverState(F.clientX,F.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(F.clientX,F.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const v=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(v>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const F=v*v*(3-2*v);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,F)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const L=new me;class G{constructor(v,F,J){this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.mouse=v,this.manager=F,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const v=Math.random;this.target.set((v()*2-1)*(1-this.margin),(v()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const v=performance.now();if(v-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=v,this.activationTime=v),!this.active)return;this.mouse.isAutoActive=!0;let J=(v-this.lastTime)/1e3;this.lastTime=v,J>.2&&(J=.016);const pe=this._tmpDir.subVectors(this.target,this.current),fe=pe.length();if(fe<.01){this.pickNewTarget();return}pe.normalize();let Ve=1;if(this.rampDurationMs>0){const at=Math.min(1,(v-this.activationTime)/this.rampDurationMs);Ve=at*at*(3-2*at)}const Ne=this.speed*J*Ve,ke=Math.min(Ne,fe);this.current.addScaledVector(pe,ke),this.mouse.setNormalized(this.current.x,this.current.y)}}const te=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,Te=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Me=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,U=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,W=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,ue=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,_e=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Re=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Z=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,re=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Q{constructor(v){var F;this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null,this.props=v||{},this.uniforms=(F=this.props.material)==null?void 0:F.uniforms}init(){this.scene=new mp,this.camera=new vu,this.uniforms&&(this.material=new sl(this.props.material),this.geometry=new Fr(2,2),this.plane=new fi(this.geometry,this.material),this.scene.add(this.plane))}update(){!ce.renderer||!this.scene||!this.camera||(ce.renderer.setRenderTarget(this.props.output||null),ce.renderer.render(this.scene,this.camera),ce.renderer.setRenderTarget(null))}}class be extends Q{constructor(v){super({material:{vertexShader:te,fragmentShader:U,uniforms:{boundarySpace:{value:v.cellScale},px:{value:v.cellScale},fboSize:{value:v.fboSize},velocity:{value:v.src.texture},dt:{value:v.dt},isBFECC:{value:!0}}},output:v.dst}),this.line=null,this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){if(!this.scene)return;const v=new hi,F=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);v.setAttribute("position",new ui(F,3));const J=new sl({vertexShader:Te,fragmentShader:U,uniforms:this.uniforms});this.line=new gb(v,J),this.scene.add(this.line)}update(v={}){this.line&&(this.uniforms.dt.value=v.dt,this.line.visible=v.isBounce,this.uniforms.isBFECC.value=v.BFECC,super.update())}}class Se extends Q{constructor(v){super({output:v.dst}),this.mouse=null,this.init(v)}init(v){if(super.init(),!this.scene)return;const F=new Fr(1,1),J=new sl({vertexShader:Me,fragmentShader:_e,blending:pu,depthWrite:!1,uniforms:{px:{value:v.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(v.cursor_size,v.cursor_size)}}});this.mouse=new fi(F,J),this.scene.add(this.mouse)}update(v){if(!this.mouse)return;const F=L.diff.x/2*v.mouse_force,J=L.diff.y/2*v.mouse_force,pe=v.cursor_size*v.cellScale.x,fe=v.cursor_size*v.cellScale.y,Ve=Math.min(Math.max(L.coords.x,-1+pe+v.cellScale.x*2),1-pe-v.cellScale.x*2),Ne=Math.min(Math.max(L.coords.y,-1+fe+v.cellScale.y*2),1-fe-v.cellScale.y*2),ke=this.mouse.material.uniforms;ke.force.value.set(F,J),ke.center.value.set(Ve,Ne),ke.scale.value.set(v.cursor_size,v.cursor_size),super.update()}}class Le extends Q{constructor(v){super({material:{vertexShader:te,fragmentShader:re,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},velocity_new:{value:v.dst_.texture},v:{value:v.viscous},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update(v={}){let F,J;this.uniforms.v.value=v.viscous;for(let pe=0;pe<v.iterations;pe++)pe%2===0?(F=this.props.output0,J=this.props.output1):(F=this.props.output1,J=this.props.output0),this.uniforms.velocity_new.value=F.texture,this.props.output=J,this.uniforms.dt.value=v.dt,super.update();return J}}class nt extends Q{constructor(v){super({material:{vertexShader:te,fragmentShader:ue,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update(v={}){this.uniforms.velocity.value=v.vel.texture,super.update()}}class qe extends Q{constructor(v){super({material:{vertexShader:te,fragmentShader:Re,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.dst_.texture},divergence:{value:v.src.texture},px:{value:v.cellScale}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update(v={}){let F,J;for(let pe=0;pe<v.iterations;pe++)pe%2===0?(F=this.props.output0,J=this.props.output1):(F=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=F.texture,this.props.output=J,super.update();return J}}class Ze extends Q{constructor(v){super({material:{vertexShader:te,fragmentShader:Z,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.src_p.texture},velocity:{value:v.src_v.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update(v={}){this.uniforms.velocity.value=v.vel.texture,this.uniforms.pressure.value=v.pressure.texture,super.update()}}class lt{constructor(v){this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.advection=null,this.externalForce=null,this.viscous=null,this.divergence=null,this.poisson=null,this.pressure=null,this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...v},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ki:Pi}createAllFBO(){const F={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:pn,magFilter:pn,wrapS:ci,wrapT:ci};for(let J in this.fbos)this.fbos[J]=new Fi(this.fboSize.x,this.fboSize.y,F)}createShaderPass(){this.advection=new be({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Se({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Le({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new qe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ze({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const v=Math.max(1,Math.round(this.options.resolution*ce.width)),F=Math.max(1,Math.round(this.options.resolution*ce.height)),J=1/v,pe=1/F;this.cellScale.set(J,pe),this.fboSize.set(v,F)}resize(){this.calcSize();for(let v in this.fbos)this.fbos[v].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection&&this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce&&this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let v=this.fbos.vel_1;this.options.isViscous&&this.viscous&&(v=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence&&this.divergence.update({vel:v});let F;this.poisson&&(F=this.poisson.update({iterations:this.options.iterations_poisson})),this.pressure&&this.pressure.update({vel:v,pressure:F})}}class $e{constructor(){this.scene=null,this.camera=null,this.output=null,this.simulation=new lt({}),this.init()}init(){this.scene=new mp,this.camera=new vu,this.output=new fi(new Fr(2,2),new sl({vertexShader:te,fragmentShader:W,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:X},bgColor:{value:se}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){!ce.renderer||!this.scene||!this.camera||(ce.renderer.setRenderTarget(null),ce.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class Wt{constructor(v){this.output=null,this.autoDriver=null,this.lastUserInteraction=0,this.running=!1,this.props=v,ce.init(v.$wrapper),L.init(v.$wrapper),L.autoIntensity=v.autoIntensity,L.takeoverDuration=v.takeoverDuration,this.lastUserInteraction=performance.now(),L.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new G(L,this,{enabled:v.autoDemo,speed:v.autoSpeed,resumeDelay:v.autoResumeDelay,rampDuration:v.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():K.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){ce.renderer&&this.props.$wrapper.prepend(ce.renderer.domElement),this.output=new $e}resize(){ce.resize(),this.output&&this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),L.update(),ce.update(),this.output&&this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),L.dispose(),ce.renderer){const v=ce.renderer.domElement;v&&v.parentNode&&v.parentNode.removeChild(v),ce.renderer.dispose()}}catch{}}}const V=O.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const Ct=new Wt({$wrapper:V,autoDemo:y,autoSpeed:T,autoIntensity:b,takeoverDuration:M,autoResumeDelay:S,autoRampDuration:I});N.current=Ct,(()=>{var F;if(!N.current)return;const D=(F=N.current.output)==null?void 0:F.simulation;if(!D)return;const v=D.options.resolution;Object.assign(D.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==v&&D.resize()})(),Ct.start();const yt=new IntersectionObserver(D=>{const v=D[0],F=v.isIntersecting&&v.intersectionRatio>0;K.current=F,N.current&&(F&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});yt.observe(V),P.current=yt;const Ye=new ResizeObserver(()=>{N.current&&(C.current&&cancelAnimationFrame(C.current),C.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return Ye.observe(V),z.current=Ye,()=>{if(B.current&&cancelAnimationFrame(B.current),z.current)try{z.current.disconnect()}catch{}if(P.current)try{P.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[d,e,h,p,i,c,l,a,m,s,g,y,T,b,M,S,I]),et.useEffect(()=>{var $;const w=N.current;if(!w)return;const X=($=w.output)==null?void 0:$.simulation;if(!X)return;const se=X.options.resolution;Object.assign(X.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:h,BFECC:d,resolution:m,isBounce:p}),w.autoDriver&&(w.autoDriver.enabled=y,w.autoDriver.speed=T,w.autoDriver.resumeDelay=S,w.autoDriver.rampDurationMs=I*1e3,w.autoDriver.mouse&&(w.autoDriver.mouse.autoIntensity=b,w.autoDriver.mouse.takeoverDuration=M)),m!==se&&X.resize()},[a,e,i,s,l,c,h,d,m,p,y,T,b,M,S,I]),ge.jsxs(ge.Fragment,{children:[ge.jsx("style",{children:`
          .liquid-ether-container {
            width: 100%;
            height: 100%;
            display: block;
          }
       `}),ge.jsx("div",{ref:O,className:`liquid-ether-container ${x||""}`,style:_})]})},Pw=()=>{const[a,e]=et.useState([]),[i,s]=et.useState("CAMERA"),[l,c]=et.useState(!1),[h,d]=et.useState(!1),[m,p]=et.useState(null),[g,_]=et.useState("#a855f7"),[x,y]=et.useState(1500),[T,b]=et.useState(2),[M,S]=et.useState(1),[I,O]=et.useState(1),[N,z]=et.useState("#13002b"),[B,P]=et.useState(null),[K,C]=et.useState(0),[w,X]=et.useState(qt.NONE),[se,$]=et.useState(null),[ce,me]=et.useState(null),[L,G]=et.useState(!1),[te,Te]=et.useState("连接宇宙..."),[Me,U]=et.useState(null),W=async Q=>{{console.warn("API_KEY not found"),U("未检测到 API Key，请检查配置。");return}},ue=Q=>{var Se,Le;const be={...Q,spreadName:B==null?void 0:B.name,spreadPosition:(Se=B==null?void 0:B.positions[K])==null?void 0:Se.name,spreadContext:(Le=B==null?void 0:B.positions[K])==null?void 0:Le.description};return W(),be},_e=Q=>{e(be=>[Q,...be]),$(Q)},Re=()=>{$(null),me(null),U(null),B&&(K<B.positions.length-1?C(Q=>Q+1):C(0))},Z=Q=>{P(Q),C(0),e([]),c(!1)},re=Q=>{var Se;const be=(Se=Q.target.files)==null?void 0:Se[0];if(be){const Le=URL.createObjectURL(be);p(Le)}};return B?ge.jsxs("div",{className:"w-full h-screen relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white transition-colors duration-1000",style:{background:N},children:[ge.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none opacity-60",children:ge.jsx(Vx,{colors:["#240046","#3c096c","#5a189a"]})}),ge.jsx("div",{className:"absolute inset-0 z-10",children:ge.jsx(Ow,{onCardSelected:ue,onSequenceComplete:_e,onGestureChange:X,mode:i,setMode:s,currentSpread:B,currentStep:K,customBackUrl:m,particleColor:g,particleCount:x,particleSize:T,cardSpeed:M,cardScale:I,backgroundColor:N})}),se&&ge.jsx(Iw,{card:se,aiAnalysis:ce,isLoading:L,loadingMessage:te,error:Me,onClose:Re}),ge.jsxs("div",{className:"absolute top-0 left-0 w-full z-20 flex flex-col items-center pt-6 pointer-events-none",children:[ge.jsx("button",{onClick:()=>P(null),className:"pointer-events-auto text-white/40 hover:text-white text-xs uppercase tracking-widest mb-2 transition-colors",children:"← Back to Spreads"}),ge.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white drop-shadow-lg",children:B.name}),ge.jsx("div",{className:"flex items-center gap-2 mt-2",children:B.positions.map((Q,be)=>ge.jsx("div",{className:`h-1 rounded-full transition-all duration-500 ${be===K?"w-8 bg-purple-400":be<K?"w-2 bg-green-400":"w-2 bg-white/20"}`},be))})]}),ge.jsxs("div",{className:"absolute top-6 right-6 z-30 flex gap-4",children:[ge.jsx("button",{onClick:()=>d(!h),className:"w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg",children:ge.jsx("span",{className:"text-base",children:"⚙️"})}),ge.jsx("button",{onClick:()=>c(!l),className:"w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg",children:ge.jsx("span",{className:"text-base",children:l?"✕":"📚"})})]}),ge.jsx("div",{className:`absolute top-20 right-6 z-40 transition-all duration-300 transform origin-top-right ${h?"scale-100 opacity-100":"scale-95 opacity-0 pointer-events-none"}`,children:ge.jsxs("div",{className:"bg-[#1a0b2e]/90 backdrop-blur-xl border border-purple-500/30 p-6 rounded-2xl w-80 shadow-2xl overflow-y-auto max-h-[80vh] custom-scrollbar",children:[ge.jsxs("div",{className:"flex justify-between items-center mb-4",children:[ge.jsx("h3",{className:"text-purple-200 font-bold",children:"配置 (Configuration)"}),ge.jsx("button",{onClick:()=>d(!1),className:"text-white/40 hover:text-white",children:"✕"})]}),ge.jsxs("div",{className:"space-y-6",children:[ge.jsxs("div",{children:[ge.jsx("label",{className:"block text-xs text-white/60 mb-3 uppercase tracking-wide font-bold",children:"场景设置 (Scene)"}),ge.jsxs("div",{className:"mb-3",children:[ge.jsx("div",{className:"flex justify-between text-xs text-white/70 mb-1",children:ge.jsx("span",{children:"背景颜色 (Background)"})}),ge.jsx("input",{type:"color",value:N,onChange:Q=>z(Q.target.value),className:"w-full h-8 rounded cursor-pointer bg-white/10 border border-white/20"})]})]}),ge.jsxs("div",{className:"pt-4 border-t border-white/10",children:[ge.jsx("label",{className:"block text-xs text-white/60 mb-3 uppercase tracking-wide font-bold",children:"卡牌设置 (Cards)"}),ge.jsxs("div",{className:"mb-3",children:[ge.jsxs("div",{className:"flex justify-between text-xs text-white/70 mb-1",children:[ge.jsx("span",{children:"移动速度 (Speed)"}),ge.jsxs("span",{children:[M.toFixed(1),"x"]})]}),ge.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.1",value:M,onChange:Q=>S(parseFloat(Q.target.value)),className:"w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"})]}),ge.jsxs("div",{className:"mb-3",children:[ge.jsxs("div",{className:"flex justify-between text-xs text-white/70 mb-1",children:[ge.jsx("span",{children:"卡牌大小 (Scale)"}),ge.jsxs("span",{children:[I.toFixed(1),"x"]})]}),ge.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.1",value:I,onChange:Q=>O(parseFloat(Q.target.value)),className:"w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"})]})]}),ge.jsxs("div",{className:"pt-4 border-t border-white/10",children:[ge.jsx("label",{className:"block text-xs text-white/60 mb-3 uppercase tracking-wide font-bold",children:"粒子效果 (Effects)"}),ge.jsxs("div",{className:"mb-3",children:[ge.jsx("div",{className:"flex justify-between text-xs text-white/70 mb-1",children:ge.jsx("span",{children:"颜色 (Color)"})}),ge.jsx("input",{type:"color",value:g,onChange:Q=>_(Q.target.value),className:"w-full h-8 rounded cursor-pointer bg-white/10 border border-white/20"})]}),ge.jsxs("div",{className:"mb-3",children:[ge.jsxs("div",{className:"flex justify-between text-xs text-white/70 mb-1",children:[ge.jsx("span",{children:"数量 (Count)"}),ge.jsx("span",{children:x})]}),ge.jsx("input",{type:"range",min:"500",max:"10000",step:"500",value:x,onChange:Q=>y(parseInt(Q.target.value)),className:"w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"})]}),ge.jsxs("div",{className:"mb-3",children:[ge.jsxs("div",{className:"flex justify-between text-xs text-white/70 mb-1",children:[ge.jsx("span",{children:"大小 (Size)"}),ge.jsx("span",{children:T.toFixed(1)})]}),ge.jsx("input",{type:"range",min:"0.5",max:"10.0",step:"0.5",value:T,onChange:Q=>b(parseFloat(Q.target.value)),className:"w-full accent-purple-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"})]})]}),ge.jsxs("div",{className:"pt-4 border-t border-white/10",children:[ge.jsx("label",{className:"block text-xs text-white/60 mb-2 uppercase tracking-wide font-bold",children:"自定义牌背"}),ge.jsx("div",{className:"relative group cursor-pointer",children:ge.jsxs("div",{className:"border-2 border-dashed border-white/20 rounded-lg p-3 text-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all",children:[ge.jsx("span",{className:"text-xs text-purple-300",children:"点击上传图片"}),ge.jsx("input",{type:"file",accept:"image/*",onChange:re,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"})]})})]})]})]})}),ge.jsxs("div",{className:"absolute bottom-12 w-full flex flex-col items-center justify-center z-20 pointer-events-none",children:[i==="CAMERA"&&ge.jsxs("div",{className:"mb-6 text-purple-300/70 text-sm animate-bounce flex items-center gap-2 bg-[#240046]/80 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10",children:[ge.jsx("span",{children:"👋"})," 张开手快速滑动，食指悬停减速，食指翻转抓取"]}),ge.jsxs("div",{className:"relative pointer-events-auto",children:[ge.jsx("div",{className:`absolute -inset-2 rounded-full border-2 border-purple-500 opacity-0 transition-all duration-200 ${w!==qt.NONE&&i==="CAMERA"?"animate-ping opacity-100":""}`}),ge.jsx("div",{className:`absolute -inset-1 rounded-full bg-purple-500/20 transition-all duration-200 ${w!==qt.NONE&&i==="CAMERA"?"opacity-100 scale-110":"opacity-0 scale-100"}`}),ge.jsx("button",{onClick:()=>s(i==="CAMERA"?"MOUSE":"CAMERA"),className:"relative px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold tracking-wide backdrop-blur-md border border-white/10 transition-all text-sm z-10 shadow-lg",children:i==="CAMERA"?"切换至鼠标🖱":"切换至摄像头📹"})]})]}),ge.jsxs("div",{className:`absolute top-0 right-0 h-full w-80 md:w-96 bg-[#1a0b2e]/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-out z-20 flex flex-col shadow-2xl ${l?"translate-x-0":"translate-x-full"}`,children:[ge.jsx("div",{className:"p-6 border-b border-white/10 mt-16",children:ge.jsx("h2",{className:"text-xl text-purple-200 font-bold",children:"解读记录"})}),ge.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar",children:a.length===0?ge.jsx("div",{className:"h-full flex flex-col items-center justify-center text-white/20 text-center",children:ge.jsx("p",{children:"暂无抽牌记录"})}):a.map((Q,be)=>{var Se;return ge.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5 relative overflow-hidden group",children:[ge.jsx("div",{className:"absolute top-0 right-0 p-2 opacity-10 text-6xl font-serif pointer-events-none",children:Q.suit==="MAJOR"?"M":(Se=Q.suit)==null?void 0:Se[0]}),ge.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[ge.jsx("span",{className:"text-[10px] uppercase tracking-wider text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded",children:Q.spreadName||"抽牌"}),ge.jsx("span",{className:"text-[10px] uppercase tracking-wider text-purple-300 bg-purple-900/30 px-2 py-0.5 rounded",children:Q.spreadPosition||`#${a.length-be}`})]}),ge.jsx("h3",{className:"text-purple-100 font-bold text-sm mb-1",children:Q.name}),ge.jsx("div",{className:`text-xs mb-3 ${Q.orientation==="UPRIGHT"?"text-green-400":"text-red-400"}`,children:Q.orientation==="UPRIGHT"?"正位 (Upright)":"逆位 (Reversed)"}),ge.jsx("div",{className:"w-full h-24 overflow-hidden rounded mb-3 bg-black/50",children:ge.jsx("img",{src:Q.url,alt:Q.name,className:`w-full h-full object-contain ${Q.orientation==="REVERSED"?"rotate-180":""}`})})]},Q.timestamp+be)})})]})]}):ge.jsxs("div",{className:"w-full h-screen relative overflow-hidden font-sans text-white bg-[#13002b] flex flex-col items-center justify-center p-6",children:[ge.jsx("div",{className:"absolute inset-0 z-0",children:ge.jsx(Vx,{colors:["#240046","#3c096c","#5a189a"]})}),ge.jsxs("div",{className:"max-w-4xl w-full z-10 text-center relative",children:[ge.jsx("div",{className:"text-white/60 font-serif tracking-[0.3em] text-sm md:text-base mb-4 uppercase",children:"The Mystic Journey"}),ge.jsx("h1",{className:"text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] mb-8",children:"神秘塔罗牌"}),ge.jsxs("p",{className:"text-purple-100/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 text-left bg-[#1a0b2e]/60 p-6 rounded-xl backdrop-blur-md border border-purple-500/20 shadow-xl",children:["塔罗牌 (Tarot) 是一套包含78张卡片的图像符号系统。",ge.jsx("br",{}),ge.jsx("br",{}),"请选择一种牌阵开始您的探索："]}),ge.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-left",children:ww.map(Q=>ge.jsxs("button",{onClick:()=>Z(Q),className:"group relative p-6 rounded-xl border border-purple-500/20 bg-[#240046]/40 hover:bg-[#3c096c]/60 hover:border-purple-400/50 transition-all duration-300 flex flex-col gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",children:[ge.jsx("h3",{className:"text-xl font-bold text-purple-200 group-hover:text-white",children:Q.name}),ge.jsx("p",{className:"text-xs text-white/50 group-hover:text-white/80",children:Q.description}),ge.jsx("div",{className:"mt-2 flex gap-1",children:Q.positions.map((be,Se)=>ge.jsx("div",{className:"w-2 h-3 bg-white/20 rounded-sm"},Se))})]},Q.id))})]})]})},jS=document.getElementById("root");if(!jS)throw new Error("Could not find root element to mount to");const Fw=cM.createRoot(jS);Fw.render(ge.jsx(tM.StrictMode,{children:ge.jsx(Pw,{})}));
