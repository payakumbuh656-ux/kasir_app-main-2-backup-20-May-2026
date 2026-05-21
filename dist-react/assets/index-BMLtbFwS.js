(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var Od={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function _S(){if($_)return El;$_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var J_;function vS(){return J_||(J_=1,Od.exports=_S()),Od.exports}var S=vS(),Md={exports:{}},Tt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function TS(){if(Z_)return Tt;Z_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),k=Symbol.iterator;function K(M){return M===null||typeof M!="object"?null:(M=k&&M[k]||M["@@iterator"],typeof M=="function"?M:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nt=Object.assign,it={};function gt(M,Y,rt){this.props=M,this.context=Y,this.refs=it,this.updater=rt||W}gt.prototype.isReactComponent={},gt.prototype.setState=function(M,Y){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Y,"setState")},gt.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _t(){}_t.prototype=gt.prototype;function bt(M,Y,rt){this.props=M,this.context=Y,this.refs=it,this.updater=rt||W}var Ut=bt.prototype=new _t;Ut.constructor=bt,nt(Ut,gt.prototype),Ut.isPureReactComponent=!0;var Ft=Array.isArray;function Pt(){}var x={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(M,Y,rt){var V=rt.ref;return{$$typeof:s,type:M,key:Y,ref:V!==void 0?V:null,props:rt}}function D(M,Y){return C(M.type,Y,M.props)}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function L(M){var Y={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(rt){return Y[rt]})}var R=/\/+/g;function ne(M,Y){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):Y.toString(36)}function fe(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(Pt,Pt):(M.status="pending",M.then(function(Y){M.status==="pending"&&(M.status="fulfilled",M.value=Y)},function(Y){M.status==="pending"&&(M.status="rejected",M.reason=Y)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function G(M,Y,rt,V,Z){var at=typeof M;(at==="undefined"||at==="boolean")&&(M=null);var et=!1;if(M===null)et=!0;else switch(at){case"bigint":case"string":case"number":et=!0;break;case"object":switch(M.$$typeof){case s:case t:et=!0;break;case E:return et=M._init,G(et(M._payload),Y,rt,V,Z)}}if(et)return Z=Z(M),et=V===""?"."+ne(M,0):V,Ft(Z)?(rt="",et!=null&&(rt=et.replace(R,"$&/")+"/"),G(Z,Y,rt,"",function(jn){return jn})):Z!=null&&(N(Z)&&(Z=D(Z,rt+(Z.key==null||M&&M.key===Z.key?"":(""+Z.key).replace(R,"$&/")+"/")+et)),Y.push(Z)),1;et=0;var Rt=V===""?".":V+":";if(Ft(M))for(var jt=0;jt<M.length;jt++)V=M[jt],at=Rt+ne(V,jt),et+=G(V,Y,rt,at,Z);else if(jt=K(M),typeof jt=="function")for(M=jt.call(M),jt=0;!(V=M.next()).done;)V=V.value,at=Rt+ne(V,jt++),et+=G(V,Y,rt,at,Z);else if(at==="object"){if(typeof M.then=="function")return G(fe(M),Y,rt,V,Z);throw Y=String(M),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return et}function st(M,Y,rt){if(M==null)return M;var V=[],Z=0;return G(M,V,"","",function(at){return Y.call(rt,at,Z++)}),V}function ht(M){if(M._status===-1){var Y=M._result;Y=Y(),Y.then(function(rt){(M._status===0||M._status===-1)&&(M._status=1,M._result=rt)},function(rt){(M._status===0||M._status===-1)&&(M._status=2,M._result=rt)}),M._status===-1&&(M._status=0,M._result=Y)}if(M._status===1)return M._result.default;throw M._result}var Dt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},zt={map:st,forEach:function(M,Y,rt){st(M,function(){Y.apply(this,arguments)},rt)},count:function(M){var Y=0;return st(M,function(){Y++}),Y},toArray:function(M){return st(M,function(Y){return Y})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Tt.Activity=A,Tt.Children=zt,Tt.Component=gt,Tt.Fragment=n,Tt.Profiler=l,Tt.PureComponent=bt,Tt.StrictMode=r,Tt.Suspense=y,Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,Tt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return x.H.useMemoCache(M)}},Tt.cache=function(M){return function(){return M.apply(null,arguments)}},Tt.cacheSignal=function(){return null},Tt.cloneElement=function(M,Y,rt){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var V=nt({},M.props),Z=M.key;if(Y!=null)for(at in Y.key!==void 0&&(Z=""+Y.key),Y)!w.call(Y,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Y.ref===void 0||(V[at]=Y[at]);var at=arguments.length-2;if(at===1)V.children=rt;else if(1<at){for(var et=Array(at),Rt=0;Rt<at;Rt++)et[Rt]=arguments[Rt+2];V.children=et}return C(M.type,Z,V)},Tt.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Tt.createElement=function(M,Y,rt){var V,Z={},at=null;if(Y!=null)for(V in Y.key!==void 0&&(at=""+Y.key),Y)w.call(Y,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(Z[V]=Y[V]);var et=arguments.length-2;if(et===1)Z.children=rt;else if(1<et){for(var Rt=Array(et),jt=0;jt<et;jt++)Rt[jt]=arguments[jt+2];Z.children=Rt}if(M&&M.defaultProps)for(V in et=M.defaultProps,et)Z[V]===void 0&&(Z[V]=et[V]);return C(M,at,Z)},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(M){return{$$typeof:p,render:M}},Tt.isValidElement=N,Tt.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:ht}},Tt.memo=function(M,Y){return{$$typeof:_,type:M,compare:Y===void 0?null:Y}},Tt.startTransition=function(M){var Y=x.T,rt={};x.T=rt;try{var V=M(),Z=x.S;Z!==null&&Z(rt,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Pt,Dt)}catch(at){Dt(at)}finally{Y!==null&&rt.types!==null&&(Y.types=rt.types),x.T=Y}},Tt.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},Tt.use=function(M){return x.H.use(M)},Tt.useActionState=function(M,Y,rt){return x.H.useActionState(M,Y,rt)},Tt.useCallback=function(M,Y){return x.H.useCallback(M,Y)},Tt.useContext=function(M){return x.H.useContext(M)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(M,Y){return x.H.useDeferredValue(M,Y)},Tt.useEffect=function(M,Y){return x.H.useEffect(M,Y)},Tt.useEffectEvent=function(M){return x.H.useEffectEvent(M)},Tt.useId=function(){return x.H.useId()},Tt.useImperativeHandle=function(M,Y,rt){return x.H.useImperativeHandle(M,Y,rt)},Tt.useInsertionEffect=function(M,Y){return x.H.useInsertionEffect(M,Y)},Tt.useLayoutEffect=function(M,Y){return x.H.useLayoutEffect(M,Y)},Tt.useMemo=function(M,Y){return x.H.useMemo(M,Y)},Tt.useOptimistic=function(M,Y){return x.H.useOptimistic(M,Y)},Tt.useReducer=function(M,Y,rt){return x.H.useReducer(M,Y,rt)},Tt.useRef=function(M){return x.H.useRef(M)},Tt.useState=function(M){return x.H.useState(M)},Tt.useSyncExternalStore=function(M,Y,rt){return x.H.useSyncExternalStore(M,Y,rt)},Tt.useTransition=function(){return x.H.useTransition()},Tt.version="19.2.6",Tt}var W_;function Om(){return W_||(W_=1,Md.exports=TS()),Md.exports}var ee=Om(),Vd={exports:{}},bl={},kd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function ES(){return tv||(tv=1,(function(s){function t(G,st){var ht=G.length;G.push(st);t:for(;0<ht;){var Dt=ht-1>>>1,zt=G[Dt];if(0<l(zt,st))G[Dt]=st,G[ht]=zt,ht=Dt;else break t}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var st=G[0],ht=G.pop();if(ht!==st){G[0]=ht;t:for(var Dt=0,zt=G.length,M=zt>>>1;Dt<M;){var Y=2*(Dt+1)-1,rt=G[Y],V=Y+1,Z=G[V];if(0>l(rt,ht))V<zt&&0>l(Z,rt)?(G[Dt]=Z,G[V]=ht,Dt=V):(G[Dt]=rt,G[Y]=ht,Dt=Y);else if(V<zt&&0>l(Z,ht))G[Dt]=Z,G[V]=ht,Dt=V;else break t}}return st}function l(G,st){var ht=G.sortIndex-st.sortIndex;return ht!==0?ht:G.id-st.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var y=[],_=[],E=1,A=null,k=3,K=!1,W=!1,nt=!1,it=!1,gt=typeof setTimeout=="function"?setTimeout:null,_t=typeof clearTimeout=="function"?clearTimeout:null,bt=typeof setImmediate<"u"?setImmediate:null;function Ut(G){for(var st=n(_);st!==null;){if(st.callback===null)r(_);else if(st.startTime<=G)r(_),st.sortIndex=st.expirationTime,t(y,st);else break;st=n(_)}}function Ft(G){if(nt=!1,Ut(G),!W)if(n(y)!==null)W=!0,Pt||(Pt=!0,L());else{var st=n(_);st!==null&&fe(Ft,st.startTime-G)}}var Pt=!1,x=-1,w=5,C=-1;function D(){return it?!0:!(s.unstable_now()-C<w)}function N(){if(it=!1,Pt){var G=s.unstable_now();C=G;var st=!0;try{t:{W=!1,nt&&(nt=!1,_t(x),x=-1),K=!0;var ht=k;try{e:{for(Ut(G),A=n(y);A!==null&&!(A.expirationTime>G&&D());){var Dt=A.callback;if(typeof Dt=="function"){A.callback=null,k=A.priorityLevel;var zt=Dt(A.expirationTime<=G);if(G=s.unstable_now(),typeof zt=="function"){A.callback=zt,Ut(G),st=!0;break e}A===n(y)&&r(y),Ut(G)}else r(y);A=n(y)}if(A!==null)st=!0;else{var M=n(_);M!==null&&fe(Ft,M.startTime-G),st=!1}}break t}finally{A=null,k=ht,K=!1}st=void 0}}finally{st?L():Pt=!1}}}var L;if(typeof bt=="function")L=function(){bt(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,ne=R.port2;R.port1.onmessage=N,L=function(){ne.postMessage(null)}}else L=function(){gt(N,0)};function fe(G,st){x=gt(function(){G(s.unstable_now())},st)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return k},s.unstable_next=function(G){switch(k){case 1:case 2:case 3:var st=3;break;default:st=k}var ht=k;k=st;try{return G()}finally{k=ht}},s.unstable_requestPaint=function(){it=!0},s.unstable_runWithPriority=function(G,st){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ht=k;k=G;try{return st()}finally{k=ht}},s.unstable_scheduleCallback=function(G,st,ht){var Dt=s.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?Dt+ht:Dt):ht=Dt,G){case 1:var zt=-1;break;case 2:zt=250;break;case 5:zt=1073741823;break;case 4:zt=1e4;break;default:zt=5e3}return zt=ht+zt,G={id:E++,callback:st,priorityLevel:G,startTime:ht,expirationTime:zt,sortIndex:-1},ht>Dt?(G.sortIndex=ht,t(_,G),n(y)===null&&G===n(_)&&(nt?(_t(x),x=-1):nt=!0,fe(Ft,ht-Dt))):(G.sortIndex=zt,t(y,G),W||K||(W=!0,Pt||(Pt=!0,L()))),G},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(G){var st=k;return function(){var ht=k;k=st;try{return G.apply(this,arguments)}finally{k=ht}}}})(Ld)),Ld}var ev;function bS(){return ev||(ev=1,kd.exports=ES()),kd.exports}var Ud={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function AS(){if(nv)return Ye;nv=1;var s=Om();function t(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(y,_,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:A==null?null:""+A,children:y,containerInfo:_,implementation:E}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ye.createPortal=function(y,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(y,_,null,E)},Ye.flushSync=function(y){var _=d.T,E=r.p;try{if(d.T=null,r.p=2,y)return y()}finally{d.T=_,r.p=E,r.d.f()}},Ye.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(y,_))},Ye.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},Ye.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var E=_.as,A=p(E,_.crossOrigin),k=typeof _.integrity=="string"?_.integrity:void 0,K=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?r.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:A,integrity:k,fetchPriority:K}):E==="script"&&r.d.X(y,{crossOrigin:A,integrity:k,fetchPriority:K,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ye.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=p(_.as,_.crossOrigin);r.d.M(y,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(y)},Ye.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,A=p(E,_.crossOrigin);r.d.L(y,E,{crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ye.preloadModule=function(y,_){if(typeof y=="string")if(_){var E=p(_.as,_.crossOrigin);r.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(y)},Ye.requestFormReset=function(y){r.d.r(y)},Ye.unstable_batchedUpdates=function(y,_){return y(_)},Ye.useFormState=function(y,_,E){return d.H.useFormState(y,_,E)},Ye.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ye.version="19.2.6",Ye}var iv;function SS(){if(iv)return Ud.exports;iv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ud.exports=AS(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function wS(){if(sv)return bl;sv=1;var s=bS(),t=Om(),n=SS();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function d(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function y(e){if(u(e)!==e)throw Error(r(188))}function _(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return y(h),e;if(f===o)return y(h),i;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=h,o=f;else{for(var g=!1,T=h.child;T;){if(T===a){g=!0,a=h,o=f;break}if(T===o){g=!0,o=h,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,o=h;break}if(T===o){g=!0,o=f,a=h;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function E(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=E(e),i!==null)return i;e=e.sibling}return null}var A=Object.assign,k=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),Ut=Symbol.for("react.forward_ref"),Ft=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case gt:return"Profiler";case it:return"StrictMode";case Ft:return"Suspense";case Pt:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case bt:return e.displayName||"Context";case _t:return(e._context.displayName||"Context")+".Consumer";case Ut:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return i=e.displayName||null,i!==null?i:ne(e.type)||"Memo";case w:i=e._payload,e=e._init;try{return ne(e(i))}catch{}}return null}var fe=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},Dt=[],zt=-1;function M(e){return{current:e}}function Y(e){0>zt||(e.current=Dt[zt],Dt[zt]=null,zt--)}function rt(e,i){zt++,Dt[zt]=e.current,e.current=i}var V=M(null),Z=M(null),at=M(null),et=M(null);function Rt(e,i){switch(rt(at,i),rt(Z,e),rt(V,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?v_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=v_(i),e=T_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(V),rt(V,e)}function jt(){Y(V),Y(Z),Y(at)}function jn(e){e.memoizedState!==null&&rt(et,e);var i=V.current,a=T_(i,e.type);i!==a&&(rt(Z,e),rt(V,a))}function hs(e){Z.current===e&&(Y(V),Y(Z)),et.current===e&&(Y(et),yl._currentValue=ht)}var ia,sa;function ai(e){if(ia===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ia=i&&i[1]||"",sa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+e+sa}var yo=!1;function or(e,i){if(!e||yo)return"";yo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(H){var B=H}Reflect.construct(e,[],X)}else{try{X.call()}catch(H){B=H}e.call(X.prototype)}}else{try{throw Error()}catch(H){B=H}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var I=g.split(`
`),z=T.split(`
`);for(h=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(o===I.length||h===z.length)for(o=I.length-1,h=z.length-1;1<=o&&0<=h&&I[o]!==z[h];)h--;for(;1<=o&&0<=h;o--,h--)if(I[o]!==z[h]){if(o!==1||h!==1)do if(o--,h--,0>h||I[o]!==z[h]){var F=`
`+I[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=h);break}}}finally{yo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ai(a):""}function _o(e,i){switch(e.tag){case 26:case 27:case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return e.child!==i&&i!==null?ai("Suspense Fallback"):ai("Suspense");case 19:return ai("SuspenseList");case 0:case 15:return or(e.type,!1);case 11:return or(e.type.render,!1);case 1:return or(e.type,!0);case 31:return ai("Activity");default:return""}}function vo(e){try{var i="",a=null;do i+=_o(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var _e=Object.prototype.hasOwnProperty,De=s.unstable_scheduleCallback,fs=s.unstable_cancelCallback,Mh=s.unstable_shouldYield,tu=s.unstable_requestPaint,tn=s.unstable_now,lr=s.unstable_getCurrentPriorityLevel,To=s.unstable_ImmediatePriority,Eo=s.unstable_UserBlockingPriority,ds=s.unstable_NormalPriority,Vh=s.unstable_LowPriority,eu=s.unstable_IdlePriority,nu=s.log,iu=s.unstable_setDisableYieldValue,zn=null,Pe=null;function An(e){if(typeof nu=="function"&&iu(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(zn,e)}catch{}}var de=Math.clz32?Math.clz32:ru,su=Math.log,ra=Math.LN2;function ru(e){return e>>>=0,e===0?32:31-(su(e)/ra|0)|0}var oi=256,ur=262144,ve=4194304;function li(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?h=li(o):(g&=T,g!==0?h=li(g):a||(a=T&~e,a!==0&&(h=li(a))))):(T=o&~f,T!==0?h=li(T):g!==0?h=li(g):a||(a=o&~e,a!==0&&(h=li(a)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:h}function Bn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function kh(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function au(){var e=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),e}function ci(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function cr(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lh(e,i,a,o,h,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,z=e.hiddenUpdates;for(a=g&~a;0<a;){var F=31-de(a),X=1<<F;T[F]=0,I[F]=-1;var B=z[F];if(B!==null)for(z[F]=null,F=0;F<B.length;F++){var H=B[F];H!==null&&(H.lane&=-536870913)}a&=~X}o!==0&&hr(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~i))}function hr(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-de(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function bo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-de(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function Ao(e,i){var a=i&-i;return a=(a&42)!==0?1:fr(a),(a&(e.suspendedLanes|i))!==0?0:a}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ou(){var e=st.p;return e!==0?e:(e=window.event,e===void 0?32:H_(e.type))}function qn(e,i){var a=st.p;try{return st.p=e,i()}finally{st.p=a}}var Hn=Math.random().toString(36).slice(2),Te="__reactFiber$"+Hn,Ve="__reactProps$"+Hn,hi="__reactContainer$"+Hn,aa="__reactEvents$"+Hn,Uh="__reactListeners$"+Hn,lu="__reactHandles$"+Hn,uu="__reactResources$"+Hn,fi="__reactMarker$"+Hn;function oa(e){delete e[Te],delete e[Ve],delete e[aa],delete e[Uh],delete e[lu]}function di(e){var i=e[Te];if(i)return i;for(var a=e.parentNode;a;){if(i=a[hi]||a[Te]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=I_(e);e!==null;){if(a=e[Te])return a;e=I_(e)}return i}e=a,a=e.parentNode}return null}function Sn(e){if(e=e[Te]||e[hi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function dn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function mi(e){var i=e[uu];return i||(i=e[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ee(e){e[fi]=!0}var So=new Set,wo={};function pi(e,i){gi(e,i),gi(e+"Capture",i)}function gi(e,i){for(wo[e]=i,e=0;e<i.length;e++)So.add(i[e])}var Ro=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Io={},Co={};function cu(e){return _e.call(Co,e)?!0:_e.call(Io,e)?!1:Ro.test(e)?Co[e]=!0:(Io[e]=!0,!1)}function la(e,i,a){if(cu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function mn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function be(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ms(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xo(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Qt(e){if(!e._valueTracker){var i=ms(e)?"checked":"value";e._valueTracker=xo(e,i,""+e[i])}}function dr(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=ms(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mr=/[\n"\\]/g;function rn(e){return e.replace(mr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ua(e,i,a,o,h,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),i!=null?g==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ke(i)):e.value!==""+ke(i)&&(e.value=""+ke(i)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),i!=null?No(e,g,ke(i)):a!=null?No(e,g,ke(a)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ke(T):e.removeAttribute("name")}function hu(e,i,a,o,h,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null)){Qt(e);return}a=a!=null?""+ke(a):"",i=i!=null?""+ke(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Qt(e)}function No(e,i,a){i==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ps(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ke(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function fu(e,i,a){if(i!=null&&(i=""+ke(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+ke(a):""}function gs(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=ke(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Qt(e)}function an(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var du=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Do(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||du.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Oo(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&Do(e,h,o)}else for(var f in i)i.hasOwnProperty(f)&&Do(e,f,i[f])}function ca(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ys=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ha(e){return ys.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gn(){}var Mo=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _s=null,_i=null;function pr(e){var i=Sn(e);if(i&&(e=i.stateNode)){var a=e[Ve]||null;t:switch(e=i.stateNode,i.type){case"input":if(ua(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[Ve]||null;if(!h)throw Error(r(90));ua(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&dr(o)}break t;case"textarea":fu(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&ps(e,!!a.multiple,i,!1)}}}var fa=!1;function vs(e,i,a){if(fa)return e(i,a);fa=!0;try{var o=e(i);return o}finally{if(fa=!1,(_s!==null||_i!==null)&&(oc(),_s&&(i=_s,e=_i,_i=_s=null,pr(i),e)))for(i=0;i<e.length;i++)pr(e[i])}}function Fn(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Ve]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gr=!1;if(Rn)try{var $t={};Object.defineProperty($t,"passive",{get:function(){gr=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch{gr=!1}var vi=null,Vo=null,yr=null;function ko(){if(yr)return yr;var e,i=Vo,a=i.length,o,h="value"in vi?vi.value:vi.textContent,f=h.length;for(e=0;e<a&&i[e]===h[e];e++);var g=a-e;for(o=1;o<=g&&i[a-o]===h[f-o];o++);return yr=h.slice(e,1<o?1-o:void 0)}function _r(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Kn(){return!1}function je(e){function i(a,o,h,f,g){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ji:Kn,this.isPropagationStopped=Kn,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),i}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=je(zi),Ts=A({},zi,{view:0,detail:0}),Lo=je(Ts),Es,da,Ei,ma=A({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Es=e.screenX-Ei.screenX,da=e.screenY-Ei.screenY):da=Es=0,Ei=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Uo=je(ma),vr=A({},ma,{dataTransfer:0}),pu=je(vr),gu=A({},Ts,{relatedTarget:0}),Tr=je(gu),Po=A({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),yu=je(Po),pa=A({},zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_u=je(pa),vu=A({},zi,{data:0}),bi=je(vu),Tu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Au(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=bu[e])?!!i[e]:!1}function bs(){return Au}var en=A({},Ts,{key:function(e){if(e.key){var i=Tu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Su=je(en),wu=A({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bi=je(wu),c=A({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),m=je(c),v=A({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),b=je(v),P=A({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q=je(P),tt=A({},zi,{newState:0,oldState:0}),At=je(tt),me=[9,13,27,32],Ht=Rn&&"CompositionEvent"in window,oe=null;Rn&&"documentMode"in document&&(oe=document.documentMode);var In=Rn&&"TextEvent"in window&&!oe,Ai=Rn&&(!Ht||oe&&8<oe&&11>=oe),Qn=" ",Yn=!1;function Er(e,i){switch(e){case"keyup":return me.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function qb(e,i){switch(e){case"compositionend":return ga(i);case"keypress":return i.which!==32?null:(Yn=!0,Qn);case"textInput":return e=i.data,e===Qn&&Yn?null:e;default:return null}}function Hb(e,i){if(ya)return e==="compositionend"||!Ht&&Er(e,i)?(e=ko(),yr=Vo=vi=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ai&&i.locale!=="ko"?null:i.data;default:return null}}var Gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Gb[e.type]:i==="textarea"}function Dp(e,i,a,o){_s?_i?_i.push(o):_i=[o]:_s=o,i=mc(i,"onChange"),0<i.length&&(a=new Ti("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var jo=null,zo=null;function Fb(e){d_(e,0)}function Ru(e){var i=dn(e);if(dr(i))return e}function Op(e,i){if(e==="change")return i}var Mp=!1;if(Rn){var Ph;if(Rn){var jh="oninput"in document;if(!jh){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),jh=typeof Vp.oninput=="function"}Ph=jh}else Ph=!1;Mp=Ph&&(!document.documentMode||9<document.documentMode)}function kp(){jo&&(jo.detachEvent("onpropertychange",Lp),zo=jo=null)}function Lp(e){if(e.propertyName==="value"&&Ru(zo)){var i=[];Dp(i,zo,e,wn(e)),vs(Fb,i)}}function Kb(e,i,a){e==="focusin"?(kp(),jo=i,zo=a,jo.attachEvent("onpropertychange",Lp)):e==="focusout"&&kp()}function Qb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ru(zo)}function Yb(e,i){if(e==="click")return Ru(i)}function Xb(e,i){if(e==="input"||e==="change")return Ru(i)}function $b(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var pn=typeof Object.is=="function"?Object.is:$b;function Bo(e,i){if(pn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!_e.call(i,h)||!pn(e[h],i[h]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pp(e,i){var a=Up(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function jp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?jp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=yi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=yi(e.document)}return i}function zh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Jb=Rn&&"documentMode"in document&&11>=document.documentMode,_a=null,Bh=null,qo=null,qh=!1;function Bp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qh||_a==null||_a!==yi(o)||(o=_a,"selectionStart"in o&&zh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qo&&Bo(qo,o)||(qo=o,o=mc(Bh,"onSelect"),0<o.length&&(i=new Ti("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=_a)))}function br(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var va={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},Hh={},qp={};Rn&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Ar(e){if(Hh[e])return Hh[e];if(!va[e])return e;var i=va[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in qp)return Hh[e]=i[a];return e}var Hp=Ar("animationend"),Gp=Ar("animationiteration"),Fp=Ar("animationstart"),Zb=Ar("transitionrun"),Wb=Ar("transitionstart"),tA=Ar("transitioncancel"),Kp=Ar("transitionend"),Qp=new Map,Gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gh.push("scrollEnd");function Xn(e,i){Qp.set(e,i),pi(i,[e])}var Iu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Cn=[],Ta=0,Fh=0;function Cu(){for(var e=Ta,i=Fh=Ta=0;i<e;){var a=Cn[i];Cn[i++]=null;var o=Cn[i];Cn[i++]=null;var h=Cn[i];Cn[i++]=null;var f=Cn[i];if(Cn[i++]=null,o!==null&&h!==null){var g=o.pending;g===null?h.next=h:(h.next=g.next,g.next=h),o.pending=h}f!==0&&Yp(a,h,f)}}function xu(e,i,a,o){Cn[Ta++]=e,Cn[Ta++]=i,Cn[Ta++]=a,Cn[Ta++]=o,Fh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Kh(e,i,a,o){return xu(e,i,a,o),Nu(e)}function Sr(e,i){return xu(e,null,null,i),Nu(e)}function Yp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&i!==null&&(h=31-de(a),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),f):null}function Nu(e){if(50<cl)throw cl=0,nd=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ea={};function eA(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,i,a,o){return new eA(e,i,a,o)}function Qh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var a=e.alternate;return a===null?(a=gn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Du(e,i,a,o,h,f){var g=0;if(o=e,typeof e=="function")Qh(e)&&(g=1);else if(typeof e=="string")g=aS(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=gn(31,a,i,h),e.elementType=C,e.lanes=f,e;case nt:return wr(a.children,h,f,i);case it:g=8,h|=24;break;case gt:return e=gn(12,a,i,h|2),e.elementType=gt,e.lanes=f,e;case Ft:return e=gn(13,a,i,h),e.elementType=Ft,e.lanes=f,e;case Pt:return e=gn(19,a,i,h),e.elementType=Pt,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bt:g=10;break t;case _t:g=9;break t;case Ut:g=11;break t;case x:g=14;break t;case w:g=16,o=null;break t}g=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=gn(g,a,i,h),i.elementType=e,i.type=o,i.lanes=f,i}function wr(e,i,a,o){return e=gn(7,e,o,i),e.lanes=a,e}function Yh(e,i,a){return e=gn(6,e,null,i),e.lanes=a,e}function $p(e){var i=gn(18,null,null,0);return i.stateNode=e,i}function Xh(e,i,a){return i=gn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Jp=new WeakMap;function xn(e,i){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:vo(i)},Jp.set(e,i),i)}return{value:e,source:i,stack:vo(i)}}var ba=[],Aa=0,Ou=null,Ho=0,Nn=[],Dn=0,As=null,Si=1,wi="";function Hi(e,i){ba[Aa++]=Ho,ba[Aa++]=Ou,Ou=e,Ho=i}function Zp(e,i,a){Nn[Dn++]=Si,Nn[Dn++]=wi,Nn[Dn++]=As,As=e;var o=Si;e=wi;var h=32-de(o)-1;o&=~(1<<h),a+=1;var f=32-de(i)+h;if(30<f){var g=h-h%5;f=(o&(1<<g)-1).toString(32),o>>=g,h-=g,Si=1<<32-de(i)+h|a<<h|o,wi=f+e}else Si=1<<f|a<<h|o,wi=e}function $h(e){e.return!==null&&(Hi(e,1),Zp(e,1,0))}function Jh(e){for(;e===Ou;)Ou=ba[--Aa],ba[Aa]=null,Ho=ba[--Aa],ba[Aa]=null;for(;e===As;)As=Nn[--Dn],Nn[Dn]=null,wi=Nn[--Dn],Nn[Dn]=null,Si=Nn[--Dn],Nn[Dn]=null}function Wp(e,i){Nn[Dn++]=Si,Nn[Dn++]=wi,Nn[Dn++]=As,Si=i.id,wi=i.overflow,As=e}var ze=null,se=null,kt=!1,Ss=null,On=!1,Zh=Error(r(519));function ws(e){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(xn(i,e)),Zh}function tg(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[Te]=e,i[Ve]=o,a){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(a=0;a<fl.length;a++)Ct(fl[a],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Ct("invalid",i),hu(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ct("invalid",i);break;case"textarea":Ct("invalid",i),gs(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||y_(i.textContent,a)?(o.popover!=null&&(Ct("beforetoggle",i),Ct("toggle",i)),o.onScroll!=null&&Ct("scroll",i),o.onScrollEnd!=null&&Ct("scrollend",i),o.onClick!=null&&(i.onclick=Gn),i=!0):i=!1,i||ws(e,!0)}function eg(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:On=!1;return;case 27:case 3:On=!0;return;default:ze=ze.return}}function Sa(e){if(e!==ze)return!1;if(!kt)return eg(e),kt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yd(e.type,e.memoizedProps)),a=!a),a&&se&&ws(e),eg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));se=R_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));se=R_(e)}else i===27?(i=se,js(e.type)?(e=bd,bd=null,se=e):se=i):se=ze?Vn(e.stateNode.nextSibling):null;return!0}function Rr(){se=ze=null,kt=!1}function Wh(){var e=Ss;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),Ss=null),e}function Go(e){Ss===null?Ss=[e]:Ss.push(e)}var tf=M(null),Ir=null,Gi=null;function Rs(e,i,a){rt(tf,i._currentValue),i._currentValue=a}function Fi(e){e._currentValue=tf.current,Y(tf)}function ef(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function nf(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var g=h.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=h;for(var I=0;I<i.length;I++)if(T.context===i[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),ef(f.return,a,e),o||(g=null);break t}f=T.next}}else if(h.tag===18){if(g=h.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ef(g,a,e),g=null}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===e){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}}function wa(e,i,a,o){e=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var g=h.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=h.type;pn(h.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(h===et.current){if(g=h.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}h=h.return}e!==null&&nf(i,e,a,o),i.flags|=262144}function Mu(e){for(e=e.firstContext;e!==null;){if(!pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cr(e){Ir=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return ng(Ir,e)}function Vu(e,i){return Ir===null&&Cr(e),ng(e,i)}function ng(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Gi=Gi.next=i;return a}var nA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},iA=s.unstable_scheduleCallback,sA=s.unstable_NormalPriority,Ae={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new nA,data:new Map,refCount:0}}function Fo(e){e.refCount--,e.refCount===0&&iA(sA,function(){e.controller.abort()})}var Ko=null,rf=0,Ra=0,Ia=null;function rA(e,i){if(Ko===null){var a=Ko=[];rf=0,Ra=ld(),Ia={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rf++,i.then(ig,ig),i}function ig(){if(--rf===0&&Ko!==null){Ia!==null&&(Ia.status="fulfilled");var e=Ko;Ko=null,Ra=0,Ia=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function aA(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var sg=G.S;G.S=function(e,i){By=tn(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&rA(e,i),sg!==null&&sg(e,i)};var xr=M(null);function af(){var e=xr.current;return e!==null?e:te.pooledCache}function ku(e,i){i===null?rt(xr,xr.current):rt(xr,i.pool)}function rg(){var e=af();return e===null?null:{parent:Ae._currentValue,pool:e}}var Ca=Error(r(460)),of=Error(r(474)),Lu=Error(r(542)),Uu={then:function(){}};function ag(e){return e=e.status,e==="fulfilled"||e==="rejected"}function og(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Gn,Gn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ug(e),e;default:if(typeof i.status=="string")i.then(Gn,Gn);else{if(e=te,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ug(e),e}throw Dr=i,Ca}}function Nr(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,Ca):a}}var Dr=null;function lg(){if(Dr===null)throw Error(r(459));var e=Dr;return Dr=null,e}function ug(e){if(e===Ca||e===Lu)throw Error(r(483))}var xa=null,Qo=0;function Pu(e){var i=Qo;return Qo+=1,xa===null&&(xa=[]),og(xa,e,i)}function Yo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ju(e,i){throw i.$$typeof===k?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function cg(e){function i(U,O){if(e){var j=U.deletions;j===null?(U.deletions=[O],U.flags|=16):j.push(O)}}function a(U,O){if(!e)return null;for(;O!==null;)i(U,O),O=O.sibling;return null}function o(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function h(U,O){return U=qi(U,O),U.index=0,U.sibling=null,U}function f(U,O,j){return U.index=j,e?(j=U.alternate,j!==null?(j=j.index,j<O?(U.flags|=67108866,O):j):(U.flags|=67108866,O)):(U.flags|=1048576,O)}function g(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function T(U,O,j,Q){return O===null||O.tag!==6?(O=Yh(j,U.mode,Q),O.return=U,O):(O=h(O,j),O.return=U,O)}function I(U,O,j,Q){var ft=j.type;return ft===nt?F(U,O,j.props.children,Q,j.key):O!==null&&(O.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===w&&Nr(ft)===O.type)?(O=h(O,j.props),Yo(O,j),O.return=U,O):(O=Du(j.type,j.key,j.props,null,U.mode,Q),Yo(O,j),O.return=U,O)}function z(U,O,j,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=Xh(j,U.mode,Q),O.return=U,O):(O=h(O,j.children||[]),O.return=U,O)}function F(U,O,j,Q,ft){return O===null||O.tag!==7?(O=wr(j,U.mode,Q,ft),O.return=U,O):(O=h(O,j),O.return=U,O)}function X(U,O,j){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Yh(""+O,U.mode,j),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case K:return j=Du(O.type,O.key,O.props,null,U.mode,j),Yo(j,O),j.return=U,j;case W:return O=Xh(O,U.mode,j),O.return=U,O;case w:return O=Nr(O),X(U,O,j)}if(fe(O)||L(O))return O=wr(O,U.mode,j,null),O.return=U,O;if(typeof O.then=="function")return X(U,Pu(O),j);if(O.$$typeof===bt)return X(U,Vu(U,O),j);ju(U,O)}return null}function B(U,O,j,Q){var ft=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ft!==null?null:T(U,O,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return j.key===ft?I(U,O,j,Q):null;case W:return j.key===ft?z(U,O,j,Q):null;case w:return j=Nr(j),B(U,O,j,Q)}if(fe(j)||L(j))return ft!==null?null:F(U,O,j,Q,null);if(typeof j.then=="function")return B(U,O,Pu(j),Q);if(j.$$typeof===bt)return B(U,O,Vu(U,j),Q);ju(U,j)}return null}function H(U,O,j,Q,ft){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return U=U.get(j)||null,T(O,U,""+Q,ft);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case K:return U=U.get(Q.key===null?j:Q.key)||null,I(O,U,Q,ft);case W:return U=U.get(Q.key===null?j:Q.key)||null,z(O,U,Q,ft);case w:return Q=Nr(Q),H(U,O,j,Q,ft)}if(fe(Q)||L(Q))return U=U.get(j)||null,F(O,U,Q,ft,null);if(typeof Q.then=="function")return H(U,O,j,Pu(Q),ft);if(Q.$$typeof===bt)return H(U,O,j,Vu(O,Q),ft);ju(O,Q)}return null}function ut(U,O,j,Q){for(var ft=null,Bt=null,ct=O,wt=O=0,Mt=null;ct!==null&&wt<j.length;wt++){ct.index>wt?(Mt=ct,ct=null):Mt=ct.sibling;var qt=B(U,ct,j[wt],Q);if(qt===null){ct===null&&(ct=Mt);break}e&&ct&&qt.alternate===null&&i(U,ct),O=f(qt,O,wt),Bt===null?ft=qt:Bt.sibling=qt,Bt=qt,ct=Mt}if(wt===j.length)return a(U,ct),kt&&Hi(U,wt),ft;if(ct===null){for(;wt<j.length;wt++)ct=X(U,j[wt],Q),ct!==null&&(O=f(ct,O,wt),Bt===null?ft=ct:Bt.sibling=ct,Bt=ct);return kt&&Hi(U,wt),ft}for(ct=o(ct);wt<j.length;wt++)Mt=H(ct,U,wt,j[wt],Q),Mt!==null&&(e&&Mt.alternate!==null&&ct.delete(Mt.key===null?wt:Mt.key),O=f(Mt,O,wt),Bt===null?ft=Mt:Bt.sibling=Mt,Bt=Mt);return e&&ct.forEach(function(Gs){return i(U,Gs)}),kt&&Hi(U,wt),ft}function mt(U,O,j,Q){if(j==null)throw Error(r(151));for(var ft=null,Bt=null,ct=O,wt=O=0,Mt=null,qt=j.next();ct!==null&&!qt.done;wt++,qt=j.next()){ct.index>wt?(Mt=ct,ct=null):Mt=ct.sibling;var Gs=B(U,ct,qt.value,Q);if(Gs===null){ct===null&&(ct=Mt);break}e&&ct&&Gs.alternate===null&&i(U,ct),O=f(Gs,O,wt),Bt===null?ft=Gs:Bt.sibling=Gs,Bt=Gs,ct=Mt}if(qt.done)return a(U,ct),kt&&Hi(U,wt),ft;if(ct===null){for(;!qt.done;wt++,qt=j.next())qt=X(U,qt.value,Q),qt!==null&&(O=f(qt,O,wt),Bt===null?ft=qt:Bt.sibling=qt,Bt=qt);return kt&&Hi(U,wt),ft}for(ct=o(ct);!qt.done;wt++,qt=j.next())qt=H(ct,U,wt,qt.value,Q),qt!==null&&(e&&qt.alternate!==null&&ct.delete(qt.key===null?wt:qt.key),O=f(qt,O,wt),Bt===null?ft=qt:Bt.sibling=qt,Bt=qt);return e&&ct.forEach(function(yS){return i(U,yS)}),kt&&Hi(U,wt),ft}function Wt(U,O,j,Q){if(typeof j=="object"&&j!==null&&j.type===nt&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case K:t:{for(var ft=j.key;O!==null;){if(O.key===ft){if(ft=j.type,ft===nt){if(O.tag===7){a(U,O.sibling),Q=h(O,j.props.children),Q.return=U,U=Q;break t}}else if(O.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===w&&Nr(ft)===O.type){a(U,O.sibling),Q=h(O,j.props),Yo(Q,j),Q.return=U,U=Q;break t}a(U,O);break}else i(U,O);O=O.sibling}j.type===nt?(Q=wr(j.props.children,U.mode,Q,j.key),Q.return=U,U=Q):(Q=Du(j.type,j.key,j.props,null,U.mode,Q),Yo(Q,j),Q.return=U,U=Q)}return g(U);case W:t:{for(ft=j.key;O!==null;){if(O.key===ft)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){a(U,O.sibling),Q=h(O,j.children||[]),Q.return=U,U=Q;break t}else{a(U,O);break}else i(U,O);O=O.sibling}Q=Xh(j,U.mode,Q),Q.return=U,U=Q}return g(U);case w:return j=Nr(j),Wt(U,O,j,Q)}if(fe(j))return ut(U,O,j,Q);if(L(j)){if(ft=L(j),typeof ft!="function")throw Error(r(150));return j=ft.call(j),mt(U,O,j,Q)}if(typeof j.then=="function")return Wt(U,O,Pu(j),Q);if(j.$$typeof===bt)return Wt(U,O,Vu(U,j),Q);ju(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,O!==null&&O.tag===6?(a(U,O.sibling),Q=h(O,j),Q.return=U,U=Q):(a(U,O),Q=Yh(j,U.mode,Q),Q.return=U,U=Q),g(U)):a(U,O)}return function(U,O,j,Q){try{Qo=0;var ft=Wt(U,O,j,Q);return xa=null,ft}catch(ct){if(ct===Ca||ct===Lu)throw ct;var Bt=gn(29,ct,null,U.mode);return Bt.lanes=Q,Bt.return=U,Bt}finally{}}}var Or=cg(!0),hg=cg(!1),Is=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xs(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Gt&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=Nu(e),Yp(e,null,a),i}return xu(e,o,i,a),Nu(e)}function Xo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,bo(e,a)}}function cf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?h=f=i:f=f.next=i}else h=f=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var hf=!1;function $o(){if(hf){var e=Ia;if(e!==null)throw e}}function Jo(e,i,a,o){hf=!1;var h=e.updateQueue;Is=!1;var f=h.firstBaseUpdate,g=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,z=I.next;I.next=null,g===null?f=z:g.next=z,g=I;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==g&&(T===null?F.firstBaseUpdate=z:T.next=z,F.lastBaseUpdate=I))}if(f!==null){var X=h.baseState;g=0,F=z=I=null,T=f;do{var B=T.lane&-536870913,H=B!==T.lane;if(H?(Ot&B)===B:(o&B)===B){B!==0&&B===Ra&&(hf=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ut=e,mt=T;B=i;var Wt=a;switch(mt.tag){case 1:if(ut=mt.payload,typeof ut=="function"){X=ut.call(Wt,X,B);break t}X=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=mt.payload,B=typeof ut=="function"?ut.call(Wt,X,B):ut,B==null)break t;X=A({},X,B);break t;case 2:Is=!0}}B=T.callback,B!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[B]:H.push(B))}else H={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(z=F=H,I=X):F=F.next=H,g|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);F===null&&(I=X),h.baseState=I,h.firstBaseUpdate=z,h.lastBaseUpdate=F,f===null&&(h.shared.lanes=0),Vs|=g,e.lanes=g,e.memoizedState=X}}function fg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function dg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fg(a[e],i)}var Na=M(null),zu=M(0);function mg(e,i){e=ts,rt(zu,e),rt(Na,i),ts=e|i.baseLanes}function ff(){rt(zu,ts),rt(Na,Na.current)}function df(){ts=zu.current,Y(Na),Y(zu)}var yn=M(null),Mn=null;function Ns(e){var i=e.alternate;rt(pe,pe.current&1),rt(yn,e),Mn===null&&(i===null||Na.current!==null||i.memoizedState!==null)&&(Mn=e)}function mf(e){rt(pe,pe.current),rt(yn,e),Mn===null&&(Mn=e)}function pg(e){e.tag===22?(rt(pe,pe.current),rt(yn,e),Mn===null&&(Mn=e)):Ds()}function Ds(){rt(pe,pe.current),rt(yn,yn.current)}function _n(e){Y(yn),Mn===e&&(Mn=null),Y(pe)}var pe=M(0);function Bu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Td(a)||Ed(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ki=0,St=null,Jt=null,Se=null,qu=!1,Da=!1,Mr=!1,Hu=0,Zo=0,Oa=null,oA=0;function ce(){throw Error(r(321))}function pf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!pn(e[a],i[a]))return!1;return!0}function gf(e,i,a,o,h,f){return Ki=f,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=e===null||e.memoizedState===null?Zg:Df,Mr=!1,f=a(o,h),Mr=!1,Da&&(f=yg(i,a,o,h)),gg(e),f}function gg(e){G.H=el;var i=Jt!==null&&Jt.next!==null;if(Ki=0,Se=Jt=St=null,qu=!1,Zo=0,Oa=null,i)throw Error(r(300));e===null||we||(e=e.dependencies,e!==null&&Mu(e)&&(we=!0))}function yg(e,i,a,o){St=e;var h=0;do{if(Da&&(Oa=null),Zo=0,Da=!1,25<=h)throw Error(r(301));if(h+=1,Se=Jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=Wg,f=i(a,o)}while(Da);return f}function lA(){var e=G.H,i=e.useState()[0];return i=typeof i.then=="function"?Wo(i):i,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(St.flags|=1024),i}function yf(){var e=Hu!==0;return Hu=0,e}function _f(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function vf(e){if(qu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}qu=!1}Ki=0,Se=Jt=St=null,Da=!1,Zo=Hu=0,Oa=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?St.memoizedState=Se=e:Se=Se.next=e,Se}function ge(){if(Jt===null){var e=St.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var i=Se===null?St.memoizedState:Se.next;if(i!==null)Se=i,Jt=e;else{if(e===null)throw St.alternate===null?Error(r(467)):Error(r(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Se===null?St.memoizedState=Se=e:Se=Se.next=e}return Se}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var i=Zo;return Zo+=1,Oa===null&&(Oa=[]),e=og(Oa,e,i),i=St,(Se===null?i.memoizedState:Se.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Zg:Df),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wo(e);if(e.$$typeof===bt)return Be(e)}throw Error(r(438,String(e)))}function Tf(e){var i=null,a=St.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Gu(),St.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=D;return i.index++,a}function Qi(e,i){return typeof i=="function"?i(e):i}function Ku(e){var i=ge();return Ef(i,Jt,e)}function Ef(e,i,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var g=h.next;h.next=f.next,f.next=g}i.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{i=h.next;var T=g=null,I=null,z=i,F=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(Ot&X)===X:(Ki&X)===X){var B=z.revertLane;if(B===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===Ra&&(F=!0);else if((Ki&B)===B){z=z.next,B===Ra&&(F=!0);continue}else X={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(T=I=X,g=f):I=I.next=X,St.lanes|=B,Vs|=B;X=z.action,Mr&&a(f,X),f=z.hasEagerState?z.eagerState:a(f,X)}else B={lane:X,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(T=I=B,g=f):I=I.next=B,St.lanes|=X,Vs|=X;z=z.next}while(z!==null&&z!==i);if(I===null?g=f:I.next=T,!pn(f,e.memoizedState)&&(we=!0,F&&(a=Ia,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bf(e){var i=ge(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,f=i.memoizedState;if(h!==null){a.pending=null;var g=h=h.next;do f=e(f,g.action),g=g.next;while(g!==h);pn(f,i.memoizedState)||(we=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function _g(e,i,a){var o=St,h=ge(),f=kt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=i();var g=!pn((Jt||h).memoizedState,a);if(g&&(h.memoizedState=a,we=!0),h=h.queue,wf(Eg.bind(null,o,h,e),[e]),h.getSnapshot!==i||g||Se!==null&&Se.memoizedState.tag&1){if(o.flags|=2048,Ma(9,{destroy:void 0},Tg.bind(null,o,h,a,i),null),te===null)throw Error(r(349));f||(Ki&127)!==0||vg(o,i,a)}return a}function vg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=St.updateQueue,i===null?(i=Gu(),St.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Tg(e,i,a,o){i.value=a,i.getSnapshot=o,bg(i)&&Ag(e)}function Eg(e,i,a){return a(function(){bg(i)&&Ag(e)})}function bg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!pn(e,a)}catch{return!0}}function Ag(e){var i=Sr(e,2);i!==null&&hn(i,e,2)}function Af(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),Mr){An(!0);try{a()}finally{An(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},i}function Sg(e,i,a,o){return e.baseState=a,Ef(e,Jt,typeof o=="function"?o:Qi)}function uA(e,i,a,o,h){if(Xu(e))throw Error(r(485));if(e=i.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};G.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,wg(i,f)):(f.next=a.next,i.pending=a.next=f)}}function wg(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var f=G.T,g={};G.T=g;try{var T=a(h,o),I=G.S;I!==null&&I(g,T),Rg(e,i,T)}catch(z){Sf(e,i,z)}finally{f!==null&&g.types!==null&&(f.types=g.types),G.T=f}}else try{f=a(h,o),Rg(e,i,f)}catch(z){Sf(e,i,z)}}function Rg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ig(e,i,o)},function(o){return Sf(e,i,o)}):Ig(e,i,a)}function Ig(e,i,a){i.status="fulfilled",i.value=a,Cg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,wg(e,a)))}function Sf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Cg(i),i=i.next;while(i!==o)}e.action=null}function Cg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function xg(e,i){return i}function Ng(e,i){if(kt){var a=te.formState;if(a!==null){t:{var o=St;if(kt){if(se){e:{for(var h=se,f=On;h.nodeType!==8;){if(!f){h=null;break e}if(h=Vn(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){se=Vn(h.nextSibling),o=h.data==="F!";break t}}ws(o)}o=!1}o&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},a.queue=o,a=Xg.bind(null,St,o),o.dispatch=a,o=Af(!1),f=Nf.bind(null,St,!1,o.queue),o=nn(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=uA.bind(null,St,h,f,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function Dg(e){var i=ge();return Og(i,Jt,e)}function Og(e,i,a){if(i=Ef(e,i,xg)[0],e=Ku(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Wo(i)}catch(g){throw g===Ca?Lu:g}else o=i;i=ge();var h=i.queue,f=h.dispatch;return a!==i.memoizedState&&(St.flags|=2048,Ma(9,{destroy:void 0},cA.bind(null,h,a),null)),[o,f,e]}function cA(e,i){e.action=i}function Mg(e){var i=ge(),a=Jt;if(a!==null)return Og(i,a,e);ge(),i=i.memoizedState,a=ge();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Ma(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=St.updateQueue,i===null&&(i=Gu(),St.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Vg(){return ge().memoizedState}function Qu(e,i,a,o){var h=nn();St.flags|=e,h.memoizedState=Ma(1|i,{destroy:void 0},a,o===void 0?null:o)}function Yu(e,i,a,o){var h=ge();o=o===void 0?null:o;var f=h.memoizedState.inst;Jt!==null&&o!==null&&pf(o,Jt.memoizedState.deps)?h.memoizedState=Ma(i,f,a,o):(St.flags|=e,h.memoizedState=Ma(1|i,f,a,o))}function kg(e,i){Qu(8390656,8,e,i)}function wf(e,i){Yu(2048,8,e,i)}function hA(e){St.flags|=4;var i=St.updateQueue;if(i===null)i=Gu(),St.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Lg(e){var i=ge().memoizedState;return hA({ref:i,nextImpl:e}),function(){if((Gt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Ug(e,i){return Yu(4,2,e,i)}function Pg(e,i){return Yu(4,4,e,i)}function jg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function zg(e,i,a){a=a!=null?a.concat([e]):null,Yu(4,4,jg.bind(null,i,e),a)}function Rf(){}function Bg(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&pf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function qg(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&pf(i,o[1]))return o[0];if(o=e(),Mr){An(!0);try{e()}finally{An(!1)}}return a.memoizedState=[o,i],o}function If(e,i,a){return a===void 0||(Ki&1073741824)!==0&&(Ot&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=Hy(),St.lanes|=e,Vs|=e,a)}function Hg(e,i,a,o){return pn(a,i)?a:Na.current!==null?(e=If(e,a,o),pn(e,i)||(we=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(Ot&261930)===0?(we=!0,e.memoizedState=a):(e=Hy(),St.lanes|=e,Vs|=e,i)}function Gg(e,i,a,o,h){var f=st.p;st.p=f!==0&&8>f?f:8;var g=G.T,T={};G.T=T,Nf(e,!1,i,a);try{var I=h(),z=G.S;if(z!==null&&z(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var F=aA(I,o);tl(e,i,F,En(e))}else tl(e,i,o,En(e))}catch(X){tl(e,i,{then:function(){},status:"rejected",reason:X},En())}finally{st.p=f,g!==null&&T.types!==null&&(g.types=T.types),G.T=g}}function fA(){}function Cf(e,i,a,o){if(e.tag!==5)throw Error(r(476));var h=Fg(e).queue;Gg(e,h,i,ht,a===null?fA:function(){return Kg(e),a(o)})}function Fg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:ht},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Kg(e){var i=Fg(e);i.next===null&&(i=e.alternate.memoizedState),tl(e,i.next.queue,{},En())}function xf(){return Be(yl)}function Qg(){return ge().memoizedState}function Yg(){return ge().memoizedState}function dA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=En();e=Cs(a);var o=xs(i,e,a);o!==null&&(hn(o,i,a),Xo(o,i,a)),i={cache:sf()},e.payload=i;return}i=i.return}}function mA(e,i,a){var o=En();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xu(e)?$g(i,a):(a=Kh(e,i,a,o),a!==null&&(hn(a,e,o),Jg(a,i,o)))}function Xg(e,i,a){var o=En();tl(e,i,a,o)}function tl(e,i,a,o){var h={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))$g(i,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,T=f(g,a);if(h.hasEagerState=!0,h.eagerState=T,pn(T,g))return xu(e,i,h,0),te===null&&Cu(),!1}catch{}finally{}if(a=Kh(e,i,h,o),a!==null)return hn(a,e,o),Jg(a,i,o),!0}return!1}function Nf(e,i,a,o){if(o={lane:2,revertLane:ld(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xu(e)){if(i)throw Error(r(479))}else i=Kh(e,a,o,2),i!==null&&hn(i,e,2)}function Xu(e){var i=e.alternate;return e===St||i!==null&&i===St}function $g(e,i){Da=qu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Jg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,bo(e,a)}}var el={readContext:Be,use:Fu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce};el.useEffectEvent=ce;var Zg={readContext:Be,use:Fu,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Be,useEffect:kg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Qu(4194308,4,jg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Qu(4194308,4,e,i)},useInsertionEffect:function(e,i){Qu(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var o=e();if(Mr){An(!0);try{e()}finally{An(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=nn();if(a!==void 0){var h=a(i);if(Mr){An(!0);try{a(i)}finally{An(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=mA.bind(null,St,e),[o.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Af(e);var i=e.queue,a=Xg.bind(null,St,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,i){var a=nn();return If(a,e,i)},useTransition:function(){var e=Af(!1);return e=Gg.bind(null,St,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=St,h=nn();if(kt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),te===null)throw Error(r(349));(Ot&127)!==0||vg(o,i,a)}h.memoizedState=a;var f={value:a,getSnapshot:i};return h.queue=f,kg(Eg.bind(null,o,f,e),[e]),o.flags|=2048,Ma(9,{destroy:void 0},Tg.bind(null,o,f,a,i),null),a},useId:function(){var e=nn(),i=te.identifierPrefix;if(kt){var a=wi,o=Si;a=(o&~(1<<32-de(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Hu++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=oA++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:xf,useFormState:Ng,useActionState:Ng,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Nf.bind(null,St,!0,a),a.dispatch=i,[e,i]},useMemoCache:Tf,useCacheRefresh:function(){return nn().memoizedState=dA.bind(null,St)},useEffectEvent:function(e){var i=nn(),a={impl:e};return i.memoizedState=a,function(){if((Gt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Df={readContext:Be,use:Fu,useCallback:Bg,useContext:Be,useEffect:wf,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Pg,useMemo:qg,useReducer:Ku,useRef:Vg,useState:function(){return Ku(Qi)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=ge();return Hg(a,Jt.memoizedState,e,i)},useTransition:function(){var e=Ku(Qi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Wo(e),i]},useSyncExternalStore:_g,useId:Qg,useHostTransitionStatus:xf,useFormState:Dg,useActionState:Dg,useOptimistic:function(e,i){var a=ge();return Sg(a,Jt,e,i)},useMemoCache:Tf,useCacheRefresh:Yg};Df.useEffectEvent=Lg;var Wg={readContext:Be,use:Fu,useCallback:Bg,useContext:Be,useEffect:wf,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Pg,useMemo:qg,useReducer:bf,useRef:Vg,useState:function(){return bf(Qi)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=ge();return Jt===null?If(a,e,i):Hg(a,Jt.memoizedState,e,i)},useTransition:function(){var e=bf(Qi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Wo(e),i]},useSyncExternalStore:_g,useId:Qg,useHostTransitionStatus:xf,useFormState:Mg,useActionState:Mg,useOptimistic:function(e,i){var a=ge();return Jt!==null?Sg(a,Jt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:Yg};Wg.useEffectEvent=Lg;function Of(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:A({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=En(),h=Cs(o);h.payload=i,a!=null&&(h.callback=a),i=xs(e,h,o),i!==null&&(hn(i,e,o),Xo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=En(),h=Cs(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=xs(e,h,o),i!==null&&(hn(i,e,o),Xo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=En(),o=Cs(a);o.tag=2,i!=null&&(o.callback=i),i=xs(e,o,a),i!==null&&(hn(i,e,a),Xo(i,e,a))}};function ty(e,i,a,o,h,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,g):i.prototype&&i.prototype.isPureReactComponent?!Bo(a,o)||!Bo(h,f):!0}function ey(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Mf.enqueueReplaceState(i,i.state,null)}function Vr(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=A({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}function ny(e){Iu(e)}function iy(e){console.error(e)}function sy(e){Iu(e)}function $u(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function ry(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Vf(e,i,a){return a=Cs(a),a.tag=3,a.payload={element:null},a.callback=function(){$u(e,i)},a}function ay(e){return e=Cs(e),e.tag=3,e}function oy(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){ry(i,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){ry(i,a,o),typeof h!="function"&&(ks===null?ks=new Set([this]):ks.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function pA(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&wa(i,a,h,!0),a=yn.current,a!==null){switch(a.tag){case 31:case 13:return Mn===null?lc():a.alternate===null&&he===0&&(he=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===Uu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),rd(e,o,h)),!1;case 22:return a.flags|=65536,o===Uu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),rd(e,o,h)),!1}throw Error(r(435,a.tag))}return rd(e,o,h),lc(),!1}if(kt)return i=yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Zh&&(e=Error(r(422),{cause:o}),Go(xn(e,a)))):(o!==Zh&&(i=Error(r(423),{cause:o}),Go(xn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=xn(o,a),h=Vf(e.stateNode,o,h),cf(e,h),he!==4&&(he=2)),!1;var f=Error(r(520),{cause:o});if(f=xn(f,a),ul===null?ul=[f]:ul.push(f),he!==4&&(he=2),i===null)return!0;o=xn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Vf(a.stateNode,o,e),cf(a,e),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ks===null||!ks.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ay(h),oy(h,e,a,o),cf(a,h),!1}a=a.return}while(a!==null);return!1}var kf=Error(r(461)),we=!1;function qe(e,i,a,o){i.child=e===null?hg(i,null,a,o):Or(i,e.child,a,o)}function ly(e,i,a,o,h){a=a.render;var f=i.ref;if("ref"in o){var g={};for(var T in o)T!=="ref"&&(g[T]=o[T])}else g=o;return Cr(i),o=gf(e,i,a,g,f,h),T=yf(),e!==null&&!we?(_f(e,i,h),Yi(e,i,h)):(kt&&T&&$h(i),i.flags|=1,qe(e,i,o,h),i.child)}function uy(e,i,a,o,h){if(e===null){var f=a.type;return typeof f=="function"&&!Qh(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,cy(e,i,f,o,h)):(e=Du(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!Hf(e,h)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(g,o)&&e.ref===i.ref)return Yi(e,i,h)}return i.flags|=1,e=qi(f,o),e.ref=i.ref,e.return=i,i.child=e}function cy(e,i,a,o,h){if(e!==null){var f=e.memoizedProps;if(Bo(f,o)&&e.ref===i.ref)if(we=!1,i.pendingProps=o=f,Hf(e,h))(e.flags&131072)!==0&&(we=!0);else return i.lanes=e.lanes,Yi(e,i,h)}return Lf(e,i,a,o,h)}function hy(e,i,a,o){var h=o.children,f=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=i.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,i.child=null;return fy(e,i,f,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ku(i,f!==null?f.cachePool:null),f!==null?mg(i,f):ff(),pg(i);else return o=i.lanes=536870912,fy(e,i,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(ku(i,f.cachePool),mg(i,f),Ds(),i.memoizedState=null):(e!==null&&ku(i,null),ff(),Ds());return qe(e,i,h,a),i.child}function nl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function fy(e,i,a,o,h){var f=af();return f=f===null?null:{parent:Ae._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},e!==null&&ku(i,null),ff(),pg(i),e!==null&&wa(e,i,o,!0),i.childLanes=h,null}function Ju(e,i){return i=Wu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function dy(e,i,a){return Or(i,e.child,null,a),e=Ju(i,i.pendingProps),e.flags|=2,_n(i),i.memoizedState=null,e}function gA(e,i,a){var o=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(kt){if(o.mode==="hidden")return e=Ju(i,o),i.lanes=536870912,nl(null,e);if(mf(i),(e=se)?(e=w_(e,On),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:As!==null?{id:Si,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=i,i.child=a,ze=i,se=null)):e=null,e===null)throw ws(i);return i.lanes=536870912,null}return Ju(i,o)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(mf(i),h)if(i.flags&256)i.flags&=-257,i=dy(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(r(558));else if(we||wa(e,i,a,!1),h=(a&e.childLanes)!==0,we||h){if(o=te,o!==null&&(g=Ao(o,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Sr(e,g),hn(o,e,g),kf;lc(),i=dy(e,i,a)}else e=f.treeContext,se=Vn(g.nextSibling),ze=i,kt=!0,Ss=null,On=!1,e!==null&&Wp(i,e),i=Ju(i,o),i.flags|=4096;return i}return e=qi(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Zu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Lf(e,i,a,o,h){return Cr(i),a=gf(e,i,a,o,void 0,h),o=yf(),e!==null&&!we?(_f(e,i,h),Yi(e,i,h)):(kt&&o&&$h(i),i.flags|=1,qe(e,i,a,h),i.child)}function my(e,i,a,o,h,f){return Cr(i),i.updateQueue=null,a=yg(i,o,a,h),gg(e),o=yf(),e!==null&&!we?(_f(e,i,f),Yi(e,i,f)):(kt&&o&&$h(i),i.flags|=1,qe(e,i,a,f),i.child)}function py(e,i,a,o,h){if(Cr(i),i.stateNode===null){var f=Ea,g=a.contextType;typeof g=="object"&&g!==null&&(f=Be(g)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},lf(i),g=a.contextType,f.context=typeof g=="object"&&g!==null?Be(g):Ea,f.state=i.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Of(i,a,g,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Mf.enqueueReplaceState(f,f.state,null),Jo(i,o,f,h),$o(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var T=i.memoizedProps,I=Vr(a,T);f.props=I;var z=f.context,F=a.contextType;g=Ea,typeof F=="object"&&F!==null&&(g=Be(F));var X=a.getDerivedStateFromProps;F=typeof X=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||z!==g)&&ey(i,f,o,g),Is=!1;var B=i.memoizedState;f.state=B,Jo(i,o,f,h),$o(),z=i.memoizedState,T||B!==z||Is?(typeof X=="function"&&(Of(i,a,X,o),z=i.memoizedState),(I=Is||ty(i,a,I,o,B,z,g))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=z),f.props=o,f.state=z,f.context=g,o=I):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,uf(e,i),g=i.memoizedProps,F=Vr(a,g),f.props=F,X=i.pendingProps,B=f.context,z=a.contextType,I=Ea,typeof z=="object"&&z!==null&&(I=Be(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==X||B!==I)&&ey(i,f,o,I),Is=!1,B=i.memoizedState,f.state=B,Jo(i,o,f,h),$o();var H=i.memoizedState;g!==X||B!==H||Is||e!==null&&e.dependencies!==null&&Mu(e.dependencies)?(typeof T=="function"&&(Of(i,a,T,o),H=i.memoizedState),(F=Is||ty(i,a,F,o,B,H,I)||e!==null&&e.dependencies!==null&&Mu(e.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,H,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,H,I)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=H),f.props=o,f.state=H,f.context=I,o=F):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,Zu(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=Or(i,e.child,null,h),i.child=Or(i,null,a,h)):qe(e,i,a,h),i.memoizedState=f.state,e=i.child):e=Yi(e,i,h),e}function gy(e,i,a,o){return Rr(),i.flags|=256,qe(e,i,a,o),i.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(e){return{baseLanes:e,cachePool:rg()}}function jf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Tn),e}function yy(e,i,a){var o=i.pendingProps,h=!1,f=(i.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),g&&(h=!0,i.flags&=-129),g=(i.flags&32)!==0,i.flags&=-33,e===null){if(kt){if(h?Ns(i):Ds(),(e=se)?(e=w_(e,On),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:As!==null?{id:Si,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=i,i.child=a,ze=i,se=null)):e=null,e===null)throw ws(i);return Ed(e)?i.lanes=32:i.lanes=536870912,null}var T=o.children;return o=o.fallback,h?(Ds(),h=i.mode,T=Wu({mode:"hidden",children:T},h),o=wr(o,h,a,null),T.return=i,o.return=i,T.sibling=o,i.child=T,o=i.child,o.memoizedState=Pf(a),o.childLanes=jf(e,g,a),i.memoizedState=Uf,nl(null,o)):(Ns(i),zf(i,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)i.flags&256?(Ns(i),i.flags&=-257,i=Bf(e,i,a)):i.memoizedState!==null?(Ds(),i.child=e.child,i.flags|=128,i=null):(Ds(),T=o.fallback,h=i.mode,o=Wu({mode:"visible",children:o.children},h),T=wr(T,h,a,null),T.flags|=2,o.return=i,T.return=i,o.sibling=T,i.child=o,Or(i,e.child,null,a),o=i.child,o.memoizedState=Pf(a),o.childLanes=jf(e,g,a),i.memoizedState=Uf,i=nl(null,o));else if(Ns(i),Ed(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var z=g.dgst;g=z,o=Error(r(419)),o.stack="",o.digest=g,Go({value:o,source:null,stack:null}),i=Bf(e,i,a)}else if(we||wa(e,i,a,!1),g=(a&e.childLanes)!==0,we||g){if(g=te,g!==null&&(o=Ao(g,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Sr(e,o),hn(g,e,o),kf;Td(T)||lc(),i=Bf(e,i,a)}else Td(T)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,se=Vn(T.nextSibling),ze=i,kt=!0,Ss=null,On=!1,e!==null&&Wp(i,e),i=zf(i,o.children),i.flags|=4096);return i}return h?(Ds(),T=o.fallback,h=i.mode,I=e.child,z=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,z!==null?T=qi(z,T):(T=wr(T,h,a,null),T.flags|=2),T.return=i,o.return=i,o.sibling=T,i.child=o,nl(null,o),o=i.child,T=e.child.memoizedState,T===null?T=Pf(a):(h=T.cachePool,h!==null?(I=Ae._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=rg(),T={baseLanes:T.baseLanes|a,cachePool:h}),o.memoizedState=T,o.childLanes=jf(e,g,a),i.memoizedState=Uf,nl(e.child,o)):(Ns(i),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(g=i.deletions,g===null?(i.deletions=[e],i.flags|=16):g.push(e)),i.child=a,i.memoizedState=null,a)}function zf(e,i){return i=Wu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Wu(e,i){return e=gn(22,e,null,i),e.lanes=0,e}function Bf(e,i,a){return Or(i,e.child,null,a),e=zf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function _y(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ef(e.return,i,a)}function qf(e,i,a,o,h,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h,treeForkCount:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=h,g.treeForkCount=f)}function vy(e,i,a){var o=i.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var g=pe.current,T=(g&2)!==0;if(T?(g=g&1|2,i.flags|=128):g&=1,rt(pe,g),qe(e,i,o,a),o=kt?Ho:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_y(e,a,i);else if(e.tag===19)_y(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Bu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),qf(i,!1,h,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Bu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}qf(i,!0,a,null,f,o);break;case"together":qf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Yi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Vs|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(wa(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=qi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Hf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Mu(e)))}function yA(e,i,a){switch(i.tag){case 3:Rt(i,i.stateNode.containerInfo),Rs(i,Ae,e.memoizedState.cache),Rr();break;case 27:case 5:jn(i);break;case 4:Rt(i,i.stateNode.containerInfo);break;case 10:Rs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ns(i),i.flags|=128,null):(a&i.child.childLanes)!==0?yy(e,i,a):(Ns(i),e=Yi(e,i,a),e!==null?e.sibling:null);Ns(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(wa(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return vy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),rt(pe,pe.current),o)break;return null;case 22:return i.lanes=0,hy(e,i,a,i.pendingProps);case 24:Rs(i,Ae,e.memoizedState.cache)}return Yi(e,i,a)}function Ty(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)we=!0;else{if(!Hf(e,a)&&(i.flags&128)===0)return we=!1,yA(e,i,a);we=(e.flags&131072)!==0}else we=!1,kt&&(i.flags&1048576)!==0&&Zp(i,Ho,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Nr(i.elementType),i.type=e,typeof e=="function")Qh(e)?(o=Vr(e,o),i.tag=1,i=py(null,i,e,o,a)):(i.tag=0,i=Lf(null,i,e,o,a));else{if(e!=null){var h=e.$$typeof;if(h===Ut){i.tag=11,i=ly(null,i,e,o,a);break t}else if(h===x){i.tag=14,i=uy(null,i,e,o,a);break t}}throw i=ne(e)||e,Error(r(306,i,""))}}return i;case 0:return Lf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=Vr(o,i.pendingProps),py(e,i,o,h,a);case 3:t:{if(Rt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));o=i.pendingProps;var f=i.memoizedState;h=f.element,uf(e,i),Jo(i,o,null,a);var g=i.memoizedState;if(o=g.cache,Rs(i,Ae,o),o!==f.cache&&nf(i,[Ae],a,!0),$o(),o=g.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:g.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=gy(e,i,o,a);break t}else if(o!==h){h=xn(Error(r(424)),i),Go(h),i=gy(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=Vn(e.firstChild),ze=i,kt=!0,Ss=null,On=!0,a=hg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Rr(),o===h){i=Yi(e,i,a);break t}qe(e,i,o,a)}i=i.child}return i;case 26:return Zu(e,i),e===null?(a=D_(i.type,null,i.pendingProps,null))?i.memoizedState=a:kt||(a=i.type,e=i.pendingProps,o=pc(at.current).createElement(a),o[Te]=i,o[Ve]=e,He(o,a,e),Ee(o),i.stateNode=o):i.memoizedState=D_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return jn(i),e===null&&kt&&(o=i.stateNode=C_(i.type,i.pendingProps,at.current),ze=i,On=!0,h=se,js(i.type)?(bd=h,se=Vn(o.firstChild)):se=h),qe(e,i,i.pendingProps.children,a),Zu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&kt&&((h=o=se)&&(o=QA(o,i.type,i.pendingProps,On),o!==null?(i.stateNode=o,ze=i,se=Vn(o.firstChild),On=!1,h=!0):h=!1),h||ws(i)),jn(i),h=i.type,f=i.pendingProps,g=e!==null?e.memoizedProps:null,o=f.children,yd(h,f)?o=null:g!==null&&yd(h,g)&&(i.flags|=32),i.memoizedState!==null&&(h=gf(e,i,lA,null,null,a),yl._currentValue=h),Zu(e,i),qe(e,i,o,a),i.child;case 6:return e===null&&kt&&((e=a=se)&&(a=YA(a,i.pendingProps,On),a!==null?(i.stateNode=a,ze=i,se=null,e=!0):e=!1),e||ws(i)),null;case 13:return yy(e,i,a);case 4:return Rt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Or(i,null,o,a):qe(e,i,o,a),i.child;case 11:return ly(e,i,i.type,i.pendingProps,a);case 7:return qe(e,i,i.pendingProps,a),i.child;case 8:return qe(e,i,i.pendingProps.children,a),i.child;case 12:return qe(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Rs(i,i.type,o.value),qe(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Cr(i),h=Be(h),o=o(h),i.flags|=1,qe(e,i,o,a),i.child;case 14:return uy(e,i,i.type,i.pendingProps,a);case 15:return cy(e,i,i.type,i.pendingProps,a);case 19:return vy(e,i,a);case 31:return gA(e,i,a);case 22:return hy(e,i,a,i.pendingProps);case 24:return Cr(i),o=Be(Ae),e===null?(h=af(),h===null&&(h=te,f=sf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),i.memoizedState={parent:o,cache:h},lf(i),Rs(i,Ae,h)):((e.lanes&a)!==0&&(uf(e,i),Jo(i,null,null,a),$o()),h=e.memoizedState,f=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Rs(i,Ae,o)):(o=f.cache,Rs(i,Ae,o),o!==h.cache&&nf(i,[Ae],a,!0))),qe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Xi(e){e.flags|=4}function Gf(e,i,a,o,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Qy())e.flags|=8192;else throw Dr=Uu,of}else e.flags&=-16777217}function Ey(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L_(i))if(Qy())e.flags|=8192;else throw Dr=Uu,of}function tc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?au():536870912,e.lanes|=i,Ua|=i)}function il(e,i){if(!kt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function _A(e,i,a){var o=i.pendingProps;switch(Jh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Fi(Ae),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Sa(i)?Xi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Wh())),re(i),null;case 26:var h=i.type,f=i.memoizedState;return e===null?(Xi(i),f!==null?(re(i),Ey(i,f)):(re(i),Gf(i,h,null,o,a))):f?f!==e.memoizedState?(Xi(i),re(i),Ey(i,f)):(re(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&Xi(i),re(i),Gf(i,h,e,o,a)),null;case 27:if(hs(i),a=at.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Xi(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return re(i),null}e=V.current,Sa(i)?tg(i):(e=C_(h,o,a),i.stateNode=e,Xi(i))}return re(i),null;case 5:if(hs(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Xi(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return re(i),null}if(f=V.current,Sa(i))tg(i);else{var g=pc(at.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?g.createElement(h,{is:o.is}):g.createElement(h)}}f[Te]=i,f[Ve]=o;t:for(g=i.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===i)break t;for(;g.sibling===null;){if(g.return===null||g.return===i)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}i.stateNode=f;t:switch(He(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Xi(i)}}return re(i),Gf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Xi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=at.current,Sa(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=ze,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Te]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y_(e.nodeValue,a)),e||ws(i,!0)}else e=pc(e).createTextNode(o),e[Te]=i,i.stateNode=e}return re(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=Sa(i),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Te]=i}else Rr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),e=!1}else a=Wh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(_n(i),i):(_n(i),null);if((i.flags&128)!==0)throw Error(r(558))}return re(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Sa(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Te]=i}else Rr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=Wh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(_n(i),i):(_n(i),null)}return _n(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),tc(i,i.updateQueue),re(i),null);case 4:return jt(),e===null&&fd(i.stateNode.containerInfo),re(i),null;case 10:return Fi(i.type),re(i),null;case 19:if(Y(pe),o=i.memoizedState,o===null)return re(i),null;if(h=(i.flags&128)!==0,f=o.rendering,f===null)if(h)il(o,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Bu(e),f!==null){for(i.flags|=128,il(o,!1),e=f.updateQueue,i.updateQueue=e,tc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Xp(a,e),a=a.sibling;return rt(pe,pe.current&1|2),kt&&Hi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&tn()>rc&&(i.flags|=128,h=!0,il(o,!1),i.lanes=4194304)}else{if(!h)if(e=Bu(f),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,tc(i,e),il(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!kt)return re(i),null}else 2*tn()-o.renderingStartTime>rc&&a!==536870912&&(i.flags|=128,h=!0,il(o,!1),i.lanes=4194304);o.isBackwards?(f.sibling=i.child,i.child=f):(e=o.last,e!==null?e.sibling=f:i.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=tn(),e.sibling=null,a=pe.current,rt(pe,h?a&1|2:a&1),kt&&Hi(i,o.treeForkCount),e):(re(i),null);case 22:case 23:return _n(i),df(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&tc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&Y(xr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Fi(Ae),re(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function vA(e,i){switch(Jh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Fi(Ae),jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return hs(i),null;case 31:if(i.memoizedState!==null){if(_n(i),i.alternate===null)throw Error(r(340));Rr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(_n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Rr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Y(pe),null;case 4:return jt(),null;case 10:return Fi(i.type),null;case 22:case 23:return _n(i),df(),e!==null&&Y(xr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Fi(Ae),null;case 25:return null;default:return null}}function by(e,i){switch(Jh(i),i.tag){case 3:Fi(Ae),jt();break;case 26:case 27:case 5:hs(i);break;case 4:jt();break;case 31:i.memoizedState!==null&&_n(i);break;case 13:_n(i);break;case 19:Y(pe);break;case 10:Fi(i.type);break;case 22:case 23:_n(i),df(),e!==null&&Y(xr);break;case 24:Fi(Ae)}}function sl(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var f=a.create,g=a.inst;o=f(),g.destroy=o}a=a.next}while(a!==h)}}catch(T){Xt(i,i.return,T)}}function Os(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var g=o.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,h=i;var I=a,z=T;try{z()}catch(F){Xt(h,I,F)}}}o=o.next}while(o!==f)}}catch(F){Xt(i,i.return,F)}}function Ay(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{dg(i,a)}catch(o){Xt(e,e.return,o)}}}function Sy(e,i,a){a.props=Vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(e,i,o)}}function rl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){Xt(e,i,h)}}function Ri(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function wy(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function Ff(e,i,a){try{var o=e.stateNode;BA(o,e.type,a,i),o[Ve]=i}catch(h){Xt(e,e.return,h)}}function Ry(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&js(e.type)||e.tag===4}function Kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ry(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&js(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Gn));else if(o!==4&&(o===27&&js(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Qf(e,i,a),e=e.sibling;e!==null;)Qf(e,i,a),e=e.sibling}function ec(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&js(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ec(e,i,a),e=e.sibling;e!==null;)ec(e,i,a),e=e.sibling}function Iy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);He(i,o,a),i[Te]=e,i[Ve]=a}catch(f){Xt(e,e.return,f)}}var $i=!1,Re=!1,Yf=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,Le=null;function TA(e,i){if(e=e.containerInfo,pd=bc,e=zp(e),zh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,I=-1,z=0,F=0,X=e,B=null;e:for(;;){for(var H;X!==a||h!==0&&X.nodeType!==3||(T=g+h),X!==f||o!==0&&X.nodeType!==3||(I=g+o),X.nodeType===3&&(g+=X.nodeValue.length),(H=X.firstChild)!==null;)B=X,X=H;for(;;){if(X===e)break e;if(B===a&&++z===h&&(T=g),B===f&&++F===o&&(I=g),(H=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:e,selectionRange:a},bc=!1,Le=i;Le!==null;)if(i=Le,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Le=e;else for(;Le!==null;){switch(i=Le,f=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)h=e[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=i,h=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ut=Vr(a.type,h);e=o.getSnapshotBeforeUpdate(ut,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(mt){Xt(a,a.return,mt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)vd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Le=e;break}Le=i.return}}function xy(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),o&4&&sl(5,a);break;case 1:if(Zi(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(g){Xt(a,a.return,g)}else{var h=Vr(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Xt(a,a.return,g)}}o&64&&Ay(a),o&512&&rl(a,a.return);break;case 3:if(Zi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{dg(e,i)}catch(g){Xt(a,a.return,g)}}break;case 27:i===null&&o&4&&Iy(a);case 26:case 5:Zi(e,a),i===null&&o&4&&wy(a),o&512&&rl(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),o&4&&Oy(e,a);break;case 13:Zi(e,a),o&4&&My(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xA.bind(null,a),XA(e,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){i=i!==null&&i.memoizedState!==null||Re,h=$i;var f=Re;$i=o,(Re=i)&&!f?Wi(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),$i=h,Re=f}break;case 30:break;default:Zi(e,a)}}function Ny(e){var i=e.alternate;i!==null&&(e.alternate=null,Ny(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&oa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var le=null,on=!1;function Ji(e,i,a){for(a=a.child;a!==null;)Dy(e,i,a),a=a.sibling}function Dy(e,i,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(zn,a)}catch{}switch(a.tag){case 26:Re||Ri(a,i),Ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Ri(a,i);var o=le,h=on;js(a.type)&&(le=a.stateNode,on=!1),Ji(e,i,a),ml(a.stateNode),le=o,on=h;break;case 5:Re||Ri(a,i);case 6:if(o=le,h=on,le=null,Ji(e,i,a),le=o,on=h,le!==null)if(on)try{(le.nodeType===9?le.body:le.nodeName==="HTML"?le.ownerDocument.body:le).removeChild(a.stateNode)}catch(f){Xt(a,i,f)}else try{le.removeChild(a.stateNode)}catch(f){Xt(a,i,f)}break;case 18:le!==null&&(on?(e=le,A_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Fa(e)):A_(le,a.stateNode));break;case 4:o=le,h=on,le=a.stateNode.containerInfo,on=!0,Ji(e,i,a),le=o,on=h;break;case 0:case 11:case 14:case 15:Os(2,a,i),Re||Os(4,a,i),Ji(e,i,a);break;case 1:Re||(Ri(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Sy(a,i,o)),Ji(e,i,a);break;case 21:Ji(e,i,a);break;case 22:Re=(o=Re)||a.memoizedState!==null,Ji(e,i,a),Re=o;break;default:Ji(e,i,a)}}function Oy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fa(e)}catch(a){Xt(i,i.return,a)}}}function My(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fa(e)}catch(a){Xt(i,i.return,a)}}function EA(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Cy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Cy),i;default:throw Error(r(435,e.tag))}}function nc(e,i){var a=EA(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var h=NA.bind(null,e,o);o.then(h,h)}})}function ln(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],f=e,g=i,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(js(T.type)){le=T.stateNode,on=!1;break t}break;case 5:le=T.stateNode,on=!1;break t;case 3:case 4:le=T.stateNode.containerInfo,on=!0;break t}T=T.return}if(le===null)throw Error(r(160));Dy(f,g,h),le=null,on=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Vy(i,e),i=i.sibling}var $n=null;function Vy(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ln(i,e),un(e),o&4&&(Os(3,e,e.return),sl(3,e),Os(5,e,e.return));break;case 1:ln(i,e),un(e),o&512&&(Re||a===null||Ri(a,a.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=$n;if(ln(i,e),un(e),o&512&&(Re||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[fi]||f[Te]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),He(f,o,a),f[Te]=e,Ee(f),o=f;break t;case"link":var g=V_("link","href",h).get(o+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=h.createElement(o),He(f,o,a),h.head.appendChild(f);break;case"meta":if(g=V_("meta","content",h).get(o+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=h.createElement(o),He(f,o,a),h.head.appendChild(f);break;default:throw Error(r(468,o))}f[Te]=e,Ee(f),o=f}e.stateNode=o}else k_(h,e.type,e.stateNode);else e.stateNode=M_(h,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?k_(h,e.type,e.stateNode):M_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:ln(i,e),un(e),o&512&&(Re||a===null||Ri(a,a.return)),a!==null&&o&4&&Ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ln(i,e),un(e),o&512&&(Re||a===null||Ri(a,a.return)),e.flags&32){h=e.stateNode;try{an(h,"")}catch(ut){Xt(e,e.return,ut)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,Ff(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Yf=!0);break;case 6:if(ln(i,e),un(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ut){Xt(e,e.return,ut)}}break;case 3:if(_c=null,h=$n,$n=gc(i.containerInfo),ln(i,e),$n=h,un(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Fa(i.containerInfo)}catch(ut){Xt(e,e.return,ut)}Yf&&(Yf=!1,ky(e));break;case 4:o=$n,$n=gc(e.stateNode.containerInfo),ln(i,e),un(e),$n=o;break;case 12:ln(i,e),un(e);break;case 31:ln(i,e),un(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 13:ln(i,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sc=tn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 22:h=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,z=$i,F=Re;if($i=z||h,Re=F||I,ln(i,e),Re=F,$i=z,un(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||$i||Re||kr(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(f=I.stateNode,h)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=I.stateNode;var X=I.memoizedProps.style,B=X!=null&&X.hasOwnProperty("display")?X.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ut){Xt(I,I.return,ut)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(ut){Xt(I,I.return,ut)}}}else if(i.tag===18){if(a===null){I=i;try{var H=I.stateNode;h?S_(H,!0):S_(I.stateNode,!1)}catch(ut){Xt(I,I.return,ut)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(e,a))));break;case 19:ln(i,e),un(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 30:break;case 21:break;default:ln(i,e),un(e)}}function un(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Ry(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,f=Kf(e);ec(e,f,h);break;case 5:var g=a.stateNode;a.flags&32&&(an(g,""),a.flags&=-33);var T=Kf(e);ec(e,T,g);break;case 3:case 4:var I=a.stateNode.containerInfo,z=Kf(e);Qf(e,z,I);break;default:throw Error(r(161))}}catch(F){Xt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ky(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;ky(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Zi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xy(e,i.alternate,i),i=i.sibling}function kr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Os(4,i,i.return),kr(i);break;case 1:Ri(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Sy(i,i.return,a),kr(i);break;case 27:ml(i.stateNode);case 26:case 5:Ri(i,i.return),kr(i);break;case 22:i.memoizedState===null&&kr(i);break;case 30:kr(i);break;default:kr(i)}e=e.sibling}}function Wi(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,f=i,g=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(h,f,a),sl(4,f);break;case 1:if(Wi(h,f,a),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Xt(o,o.return,z)}if(o=f,h=o.updateQueue,h!==null){var T=o.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)fg(I[h],T)}catch(z){Xt(o,o.return,z)}}a&&g&64&&Ay(f),rl(f,f.return);break;case 27:Iy(f);case 26:case 5:Wi(h,f,a),a&&o===null&&g&4&&wy(f),rl(f,f.return);break;case 12:Wi(h,f,a);break;case 31:Wi(h,f,a),a&&g&4&&Oy(h,f);break;case 13:Wi(h,f,a),a&&g&4&&My(h,f);break;case 22:f.memoizedState===null&&Wi(h,f,a),rl(f,f.return);break;case 30:break;default:Wi(h,f,a)}i=i.sibling}}function Xf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fo(a))}function $f(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Fo(e))}function Jn(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ly(e,i,a,o),i=i.sibling}function Ly(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Jn(e,i,a,o),h&2048&&sl(9,i);break;case 1:Jn(e,i,a,o);break;case 3:Jn(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Fo(e)));break;case 12:if(h&2048){Jn(e,i,a,o),e=i.stateNode;try{var f=i.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Xt(i,i.return,I)}}else Jn(e,i,a,o);break;case 31:Jn(e,i,a,o);break;case 13:Jn(e,i,a,o);break;case 23:break;case 22:f=i.stateNode,g=i.alternate,i.memoizedState!==null?f._visibility&2?Jn(e,i,a,o):al(e,i):f._visibility&2?Jn(e,i,a,o):(f._visibility|=2,Va(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Xf(g,i);break;case 24:Jn(e,i,a,o),h&2048&&$f(i.alternate,i);break;default:Jn(e,i,a,o)}}function Va(e,i,a,o,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var f=e,g=i,T=a,I=o,z=g.flags;switch(g.tag){case 0:case 11:case 15:Va(f,g,T,I,h),sl(8,g);break;case 23:break;case 22:var F=g.stateNode;g.memoizedState!==null?F._visibility&2?Va(f,g,T,I,h):al(f,g):(F._visibility|=2,Va(f,g,T,I,h)),h&&z&2048&&Xf(g.alternate,g);break;case 24:Va(f,g,T,I,h),h&&z&2048&&$f(g.alternate,g);break;default:Va(f,g,T,I,h)}i=i.sibling}}function al(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:al(a,o),h&2048&&Xf(o.alternate,o);break;case 24:al(a,o),h&2048&&$f(o.alternate,o);break;default:al(a,o)}i=i.sibling}}var ol=8192;function ka(e,i,a){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)Uy(e,i,a),e=e.sibling}function Uy(e,i,a){switch(e.tag){case 26:ka(e,i,a),e.flags&ol&&e.memoizedState!==null&&oS(a,$n,e.memoizedState,e.memoizedProps);break;case 5:ka(e,i,a);break;case 3:case 4:var o=$n;$n=gc(e.stateNode.containerInfo),ka(e,i,a),$n=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ol,ol=16777216,ka(e,i,a),ol=o):ka(e,i,a));break;default:ka(e,i,a)}}function Py(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ll(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Le=o,zy(o,e)}Py(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jy(e),e=e.sibling}function jy(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&Os(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ic(e)):ll(e);break;default:ll(e)}}function ic(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Le=o,zy(o,e)}Py(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Os(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ic(i));break;default:ic(i)}e=e.sibling}}function zy(e,i){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:Os(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Le=o;else t:for(a=e;Le!==null;){o=Le;var h=o.sibling,f=o.return;if(Ny(o),o===a){Le=null;break t}if(h!==null){h.return=f,Le=h;break t}Le=f}}}var bA={getCacheForType:function(e){var i=Be(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Be(Ae).controller.signal}},AA=typeof WeakMap=="function"?WeakMap:Map,Gt=0,te=null,It=null,Ot=0,Yt=0,vn=null,Ms=!1,La=!1,Jf=!1,ts=0,he=0,Vs=0,Lr=0,Zf=0,Tn=0,Ua=0,ul=null,cn=null,Wf=!1,sc=0,By=0,rc=1/0,ac=null,ks=null,Oe=0,Ls=null,Pa=null,es=0,td=0,ed=null,qy=null,cl=0,nd=null;function En(){return(Gt&2)!==0&&Ot!==0?Ot&-Ot:G.T!==null?ld():ou()}function Hy(){if(Tn===0)if((Ot&536870912)===0||kt){var e=ur;ur<<=1,(ur&3932160)===0&&(ur=262144),Tn=e}else Tn=536870912;return e=yn.current,e!==null&&(e.flags|=32),Tn}function hn(e,i,a){(e===te&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(ja(e,0),Us(e,Ot,Tn,!1)),cr(e,a),((Gt&2)===0||e!==te)&&(e===te&&((Gt&2)===0&&(Lr|=a),he===4&&Us(e,Ot,Tn,!1)),Ii(e))}function Gy(e,i,a){if((Gt&6)!==0)throw Error(r(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Bn(e,i),h=o?RA(e,i):sd(e,i,!0),f=o;do{if(h===0){La&&!o&&Us(e,i,0,!1);break}else{if(a=e.current.alternate,f&&!SA(a)){h=sd(e,i,!1),f=!1;continue}if(h===2){if(f=i,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){i=g;t:{var T=e;h=ul;var I=T.current.memoizedState.isDehydrated;if(I&&(ja(T,g).flags|=256),g=sd(T,g,!1),g!==2){if(Jf&&!I){T.errorRecoveryDisabledLanes|=f,Lr|=f,h=4;break t}f=cn,cn=h,f!==null&&(cn===null?cn=f:cn.push.apply(cn,f))}h=g}if(f=!1,h!==2)continue}}if(h===1){ja(e,0),Us(e,i,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Us(o,i,Tn,!Ms);break t;case 2:cn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=sc+300-tn(),10<h)){if(Us(o,i,Tn,!Ms),ui(o,0,!0)!==0)break t;es=i,o.timeoutHandle=E_(Fy.bind(null,o,a,cn,ac,Wf,i,Tn,Lr,Ua,Ms,f,"Throttled",-0,0),h);break t}Fy(o,a,cn,ac,Wf,i,Tn,Lr,Ua,Ms,f,null,-0,0)}}break}while(!0);Ii(e)}function Fy(e,i,a,o,h,f,g,T,I,z,F,X,B,H){if(e.timeoutHandle=-1,X=i.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gn},Uy(i,f,X);var ut=(f&62914560)===f?sc-tn():(f&4194048)===f?By-tn():0;if(ut=lS(X,ut),ut!==null){es=f,e.cancelPendingCommit=ut(Wy.bind(null,e,i,f,a,o,h,g,T,I,F,X,null,B,H)),Us(e,f,g,!z);return}}Wy(e,i,f,a,o,h,g,T,I)}function SA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],f=h.getSnapshot;h=h.value;try{if(!pn(f(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Us(e,i,a,o){i&=~Zf,i&=~Lr,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var f=31-de(h),g=1<<f;o[f]=-1,h&=~g}a!==0&&hr(e,a,i)}function oc(){return(Gt&6)===0?(hl(0),!1):!0}function id(){if(It!==null){if(Yt===0)var e=It.return;else e=It,Gi=Ir=null,vf(e),xa=null,Qo=0,e=It;for(;e!==null;)by(e.alternate,e),e=e.return;It=null}}function ja(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,GA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),es=0,id(),te=e,It=a=qi(e.current,null),Ot=i,Yt=0,vn=null,Ms=!1,La=Bn(e,i),Jf=!1,Ua=Tn=Zf=Lr=Vs=he=0,cn=ul=null,Wf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-de(o),f=1<<h;i|=e[h],o&=~f}return ts=i,Cu(),a}function Ky(e,i){St=null,G.H=el,i===Ca||i===Lu?(i=lg(),Yt=3):i===of?(i=lg(),Yt=4):Yt=i===kf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vn=i,It===null&&(he=1,$u(e,xn(i,e.current)))}function Qy(){var e=yn.current;return e===null?!0:(Ot&4194048)===Ot?Mn===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?e===Mn:!1}function Yy(){var e=G.H;return G.H=el,e===null?el:e}function Xy(){var e=G.A;return G.A=bA,e}function lc(){he=4,Ms||(Ot&4194048)!==Ot&&yn.current!==null||(La=!0),(Vs&134217727)===0&&(Lr&134217727)===0||te===null||Us(te,Ot,Tn,!1)}function sd(e,i,a){var o=Gt;Gt|=2;var h=Yy(),f=Xy();(te!==e||Ot!==i)&&(ac=null,ja(e,i)),i=!1;var g=he;t:do try{if(Yt!==0&&It!==null){var T=It,I=vn;switch(Yt){case 8:id(),g=6;break t;case 3:case 2:case 9:case 6:yn.current===null&&(i=!0);var z=Yt;if(Yt=0,vn=null,za(e,T,I,z),a&&La){g=0;break t}break;default:z=Yt,Yt=0,vn=null,za(e,T,I,z)}}wA(),g=he;break}catch(F){Ky(e,F)}while(!0);return i&&e.shellSuspendCounter++,Gi=Ir=null,Gt=o,G.H=h,G.A=f,It===null&&(te=null,Ot=0,Cu()),g}function wA(){for(;It!==null;)$y(It)}function RA(e,i){var a=Gt;Gt|=2;var o=Yy(),h=Xy();te!==e||Ot!==i?(ac=null,rc=tn()+500,ja(e,i)):La=Bn(e,i);t:do try{if(Yt!==0&&It!==null){i=It;var f=vn;e:switch(Yt){case 1:Yt=0,vn=null,za(e,i,f,1);break;case 2:case 9:if(ag(f)){Yt=0,vn=null,Jy(i);break}i=function(){Yt!==2&&Yt!==9||te!==e||(Yt=7),Ii(e)},f.then(i,i);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:ag(f)?(Yt=0,vn=null,Jy(i)):(Yt=0,vn=null,za(e,i,f,7));break;case 5:var g=null;switch(It.tag){case 26:g=It.memoizedState;case 5:case 27:var T=It;if(g?L_(g):T.stateNode.complete){Yt=0,vn=null;var I=T.sibling;if(I!==null)It=I;else{var z=T.return;z!==null?(It=z,uc(z)):It=null}break e}}Yt=0,vn=null,za(e,i,f,5);break;case 6:Yt=0,vn=null,za(e,i,f,6);break;case 8:id(),he=6;break t;default:throw Error(r(462))}}IA();break}catch(F){Ky(e,F)}while(!0);return Gi=Ir=null,G.H=o,G.A=h,Gt=a,It!==null?0:(te=null,Ot=0,Cu(),he)}function IA(){for(;It!==null&&!Mh();)$y(It)}function $y(e){var i=Ty(e.alternate,e,ts);e.memoizedProps=e.pendingProps,i===null?uc(e):It=i}function Jy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=my(a,i,i.pendingProps,i.type,void 0,Ot);break;case 11:i=my(a,i,i.pendingProps,i.type.render,i.ref,Ot);break;case 5:vf(i);default:by(a,i),i=It=Xp(i,ts),i=Ty(a,i,ts)}e.memoizedProps=e.pendingProps,i===null?uc(e):It=i}function za(e,i,a,o){Gi=Ir=null,vf(i),xa=null,Qo=0;var h=i.return;try{if(pA(e,h,i,a,Ot)){he=1,$u(e,xn(a,e.current)),It=null;return}}catch(f){if(h!==null)throw It=h,f;he=1,$u(e,xn(a,e.current)),It=null;return}i.flags&32768?(kt||o===1?e=!0:La||(Ot&536870912)!==0?e=!1:(Ms=e=!0,(o===2||o===9||o===3||o===6)&&(o=yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zy(i,e)):uc(i)}function uc(e){var i=e;do{if((i.flags&32768)!==0){Zy(i,Ms);return}e=i.return;var a=_A(i.alternate,i,ts);if(a!==null){It=a;return}if(i=i.sibling,i!==null){It=i;return}It=i=e}while(i!==null);he===0&&(he=5)}function Zy(e,i){do{var a=vA(e.alternate,e);if(a!==null){a.flags&=32767,It=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){It=e;return}It=e=a}while(e!==null);he=6,It=null}function Wy(e,i,a,o,h,f,g,T,I){e.cancelPendingCommit=null;do cc();while(Oe!==0);if((Gt&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(f=i.lanes|i.childLanes,f|=Fh,Lh(e,a,f,g,T,I),e===te&&(It=te=null,Ot=0),Pa=i,Ls=e,es=a,td=f,ed=h,qy=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,DA(ds,function(){return s_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,h=st.p,st.p=2,g=Gt,Gt|=4;try{TA(e,i,a)}finally{Gt=g,st.p=h,G.T=o}}Oe=1,t_(),e_(),n_()}}function t_(){if(Oe===1){Oe=0;var e=Ls,i=Pa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=st.p;st.p=2;var h=Gt;Gt|=4;try{Vy(i,e);var f=gd,g=zp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&jp(T.ownerDocument.documentElement,T)){if(I!==null&&zh(T)){var z=I.start,F=I.end;if(F===void 0&&(F=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(F,T.value.length);else{var X=T.ownerDocument||document,B=X&&X.defaultView||window;if(B.getSelection){var H=B.getSelection(),ut=T.textContent.length,mt=Math.min(I.start,ut),Wt=I.end===void 0?mt:Math.min(I.end,ut);!H.extend&&mt>Wt&&(g=Wt,Wt=mt,mt=g);var U=Pp(T,mt),O=Pp(T,Wt);if(U&&O&&(H.rangeCount!==1||H.anchorNode!==U.node||H.anchorOffset!==U.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var j=X.createRange();j.setStart(U.node,U.offset),H.removeAllRanges(),mt>Wt?(H.addRange(j),H.extend(O.node,O.offset)):(j.setEnd(O.node,O.offset),H.addRange(j))}}}}for(X=[],H=T;H=H.parentNode;)H.nodeType===1&&X.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<X.length;T++){var Q=X[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}bc=!!pd,gd=pd=null}finally{Gt=h,st.p=o,G.T=a}}e.current=i,Oe=2}}function e_(){if(Oe===2){Oe=0;var e=Ls,i=Pa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=st.p;st.p=2;var h=Gt;Gt|=4;try{xy(e,i.alternate,i)}finally{Gt=h,st.p=o,G.T=a}}Oe=3}}function n_(){if(Oe===4||Oe===3){Oe=0,tu();var e=Ls,i=Pa,a=es,o=qy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Oe=5:(Oe=0,Pa=Ls=null,i_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ks=null),Pi(a),i=i.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(zn,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=G.T,h=st.p,st.p=2,G.T=null;try{for(var f=e.onRecoverableError,g=0;g<o.length;g++){var T=o[g];f(T.value,{componentStack:T.stack})}}finally{G.T=i,st.p=h}}(es&3)!==0&&cc(),Ii(e),h=e.pendingLanes,(a&261930)!==0&&(h&42)!==0?e===nd?cl++:(cl=0,nd=e):cl=0,hl(0)}}function i_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Fo(i)))}function cc(){return t_(),e_(),n_(),s_()}function s_(){if(Oe!==5)return!1;var e=Ls,i=td;td=0;var a=Pi(es),o=G.T,h=st.p;try{st.p=32>a?32:a,G.T=null,a=ed,ed=null;var f=Ls,g=es;if(Oe=0,Pa=Ls=null,es=0,(Gt&6)!==0)throw Error(r(331));var T=Gt;if(Gt|=4,jy(f.current),Ly(f,f.current,g,a),Gt=T,hl(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(zn,f)}catch{}return!0}finally{st.p=h,G.T=o,i_(e,i)}}function r_(e,i,a){i=xn(a,i),i=Vf(e.stateNode,i,2),e=xs(e,i,2),e!==null&&(cr(e,2),Ii(e))}function Xt(e,i,a){if(e.tag===3)r_(e,e,a);else for(;i!==null;){if(i.tag===3){r_(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ks===null||!ks.has(o))){e=xn(a,e),a=ay(2),o=xs(i,a,2),o!==null&&(oy(a,o,i,e),cr(o,2),Ii(o));break}}i=i.return}}function rd(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new AA;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(Jf=!0,h.add(a),e=CA.bind(null,e,i,a),i.then(e,e))}function CA(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,te===e&&(Ot&a)===a&&(he===4||he===3&&(Ot&62914560)===Ot&&300>tn()-sc?(Gt&2)===0&&ja(e,0):Zf|=a,Ua===Ot&&(Ua=0)),Ii(e)}function a_(e,i){i===0&&(i=au()),e=Sr(e,i),e!==null&&(cr(e,i),Ii(e))}function xA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),a_(e,a)}function NA(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),a_(e,a)}function DA(e,i){return De(e,i)}var hc=null,Ba=null,ad=!1,fc=!1,od=!1,Ps=0;function Ii(e){e!==Ba&&e.next===null&&(Ba===null?hc=Ba=e:Ba=Ba.next=e),fc=!0,ad||(ad=!0,MA())}function hl(e,i){if(!od&&fc){od=!0;do for(var a=!1,o=hc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var g=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-de(42|e)+1)-1,f&=h&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,c_(o,f))}else f=Ot,f=ui(o,o===te?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bn(o,f)||(a=!0,c_(o,f));o=o.next}while(a);od=!1}}function OA(){o_()}function o_(){fc=ad=!1;var e=0;Ps!==0&&HA()&&(e=Ps);for(var i=tn(),a=null,o=hc;o!==null;){var h=o.next,f=l_(o,i);f===0?(o.next=null,a===null?hc=h:a.next=h,h===null&&(Ba=a)):(a=o,(e!==0||(f&3)!==0)&&(fc=!0)),o=h}Oe!==0&&Oe!==5||hl(e),Ps!==0&&(Ps=0)}function l_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-de(f),T=1<<g,I=h[g];I===-1?((T&a)===0||(T&o)!==0)&&(h[g]=kh(T,i)):I<=i&&(e.expiredLanes|=T),f&=~T}if(i=te,a=Ot,a=ui(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&fs(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bn(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&fs(o),Pi(a)){case 2:case 8:a=Eo;break;case 32:a=ds;break;case 268435456:a=eu;break;default:a=ds}return o=u_.bind(null,e),a=De(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&fs(o),e.callbackPriority=2,e.callbackNode=null,2}function u_(e,i){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cc()&&e.callbackNode!==a)return null;var o=Ot;return o=ui(e,e===te?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Gy(e,o,i),l_(e,tn()),e.callbackNode!=null&&e.callbackNode===a?u_.bind(null,e):null)}function c_(e,i){if(cc())return null;Gy(e,i,!0)}function MA(){FA(function(){(Gt&6)!==0?De(To,OA):o_()})}function ld(){if(Ps===0){var e=Ra;e===0&&(e=oi,oi<<=1,(oi&261888)===0&&(oi=256)),Ps=e}return Ps}function h_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ha(""+e)}function f_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function VA(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var f=h_((h[Ve]||null).action),g=o.submitter;g&&(i=(i=g[Ve]||null)?h_(i.formAction):g.getAttribute("formAction"),i!==null&&(f=i,g=null));var T=new Ti("action","action",null,o,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ps!==0){var I=g?f_(h,g):new FormData(h);Cf(a,{pending:!0,data:I,method:h.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=g?f_(h,g):new FormData(h),Cf(a,{pending:!0,data:I,method:h.method,action:f},f,I))},currentTarget:h}]})}}for(var ud=0;ud<Gh.length;ud++){var cd=Gh[ud],kA=cd.toLowerCase(),LA=cd[0].toUpperCase()+cd.slice(1);Xn(kA,"on"+LA)}Xn(Hp,"onAnimationEnd"),Xn(Gp,"onAnimationIteration"),Xn(Fp,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(Zb,"onTransitionRun"),Xn(Wb,"onTransitionStart"),Xn(tA,"onTransitionCancel"),Xn(Kp,"onTransitionEnd"),gi("onMouseEnter",["mouseout","mouseover"]),gi("onMouseLeave",["mouseout","mouseover"]),gi("onPointerEnter",["pointerout","pointerover"]),gi("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function d_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var g=o.length-1;0<=g;g--){var T=o[g],I=T.instance,z=T.currentTarget;if(T=T.listener,I!==f&&h.isPropagationStopped())break t;f=T,h.currentTarget=z;try{f(h)}catch(F){Iu(F)}h.currentTarget=null,f=I}else for(g=0;g<o.length;g++){if(T=o[g],I=T.instance,z=T.currentTarget,T=T.listener,I!==f&&h.isPropagationStopped())break t;f=T,h.currentTarget=z;try{f(h)}catch(F){Iu(F)}h.currentTarget=null,f=I}}}}function Ct(e,i){var a=i[aa];a===void 0&&(a=i[aa]=new Set);var o=e+"__bubble";a.has(o)||(m_(i,e,2,!1),a.add(o))}function hd(e,i,a){var o=0;i&&(o|=4),m_(a,e,o,i)}var dc="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[dc]){e[dc]=!0,So.forEach(function(a){a!=="selectionchange"&&(UA.has(a)||hd(a,!1,e),hd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[dc]||(i[dc]=!0,hd("selectionchange",!1,i))}}function m_(e,i,a,o){switch(H_(i)){case 2:var h=hS;break;case 8:h=fS;break;default:h=Id}a=h.bind(null,i,a,e),h=void 0,!gr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function dd(e,i,a,o,h){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var T=o.stateNode.containerInfo;if(T===h)break;if(g===4)for(g=o.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===h)return;g=g.return}for(;T!==null;){if(g=di(T),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){o=f=g;continue t}T=T.parentNode}}o=o.return}vs(function(){var z=f,F=wn(a),X=[];t:{var B=Qp.get(e);if(B!==void 0){var H=Ti,ut=e;switch(e){case"keypress":if(_r(a)===0)break t;case"keydown":case"keyup":H=Su;break;case"focusin":ut="focus",H=Tr;break;case"focusout":ut="blur",H=Tr;break;case"beforeblur":case"afterblur":H=Tr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=pu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=m;break;case Hp:case Gp:case Fp:H=yu;break;case Kp:H=b;break;case"scroll":case"scrollend":H=Lo;break;case"wheel":H=q;break;case"copy":case"cut":case"paste":H=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Bi;break;case"toggle":case"beforetoggle":H=At}var mt=(i&4)!==0,Wt=!mt&&(e==="scroll"||e==="scrollend"),U=mt?B!==null?B+"Capture":null:B;mt=[];for(var O=z,j;O!==null;){var Q=O;if(j=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||j===null||U===null||(Q=Fn(O,U),Q!=null&&mt.push(dl(O,Q,j))),Wt)break;O=O.return}0<mt.length&&(B=new H(B,ut,null,a,F),X.push({event:B,listeners:mt}))}}if((i&7)===0){t:{if(B=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",B&&a!==Mo&&(ut=a.relatedTarget||a.fromElement)&&(di(ut)||ut[hi]))break t;if((H||B)&&(B=F.window===F?F:(B=F.ownerDocument)?B.defaultView||B.parentWindow:window,H?(ut=a.relatedTarget||a.toElement,H=z,ut=ut?di(ut):null,ut!==null&&(Wt=u(ut),mt=ut.tag,ut!==Wt||mt!==5&&mt!==27&&mt!==6)&&(ut=null)):(H=null,ut=z),H!==ut)){if(mt=Uo,Q="onMouseLeave",U="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(mt=Bi,Q="onPointerLeave",U="onPointerEnter",O="pointer"),Wt=H==null?B:dn(H),j=ut==null?B:dn(ut),B=new mt(Q,O+"leave",H,a,F),B.target=Wt,B.relatedTarget=j,Q=null,di(F)===z&&(mt=new mt(U,O+"enter",ut,a,F),mt.target=j,mt.relatedTarget=Wt,Q=mt),Wt=Q,H&&ut)e:{for(mt=PA,U=H,O=ut,j=0,Q=U;Q;Q=mt(Q))j++;Q=0;for(var ft=O;ft;ft=mt(ft))Q++;for(;0<j-Q;)U=mt(U),j--;for(;0<Q-j;)O=mt(O),Q--;for(;j--;){if(U===O||O!==null&&U===O.alternate){mt=U;break e}U=mt(U),O=mt(O)}mt=null}else mt=null;H!==null&&p_(X,B,H,mt,!1),ut!==null&&Wt!==null&&p_(X,Wt,ut,mt,!0)}}t:{if(B=z?dn(z):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var Bt=Op;else if(Np(B))if(Mp)Bt=Xb;else{Bt=Qb;var ct=Kb}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&ca(z.elementType)&&(Bt=Op):Bt=Yb;if(Bt&&(Bt=Bt(e,z))){Dp(X,Bt,a,F);break t}ct&&ct(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&No(B,"number",B.value)}switch(ct=z?dn(z):window,e){case"focusin":(Np(ct)||ct.contentEditable==="true")&&(_a=ct,Bh=z,qo=null);break;case"focusout":qo=Bh=_a=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,Bp(X,a,F);break;case"selectionchange":if(Jb)break;case"keydown":case"keyup":Bp(X,a,F)}var wt;if(Ht)t:{switch(e){case"compositionstart":var Mt="onCompositionStart";break t;case"compositionend":Mt="onCompositionEnd";break t;case"compositionupdate":Mt="onCompositionUpdate";break t}Mt=void 0}else ya?Er(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Ai&&a.locale!=="ko"&&(ya||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&ya&&(wt=ko()):(vi=F,Vo="value"in vi?vi.value:vi.textContent,ya=!0)),ct=mc(z,Mt),0<ct.length&&(Mt=new bi(Mt,e,null,a,F),X.push({event:Mt,listeners:ct}),wt?Mt.data=wt:(wt=ga(a),wt!==null&&(Mt.data=wt)))),(wt=In?qb(e,a):Hb(e,a))&&(Mt=mc(z,"onBeforeInput"),0<Mt.length&&(ct=new bi("onBeforeInput","beforeinput",null,a,F),X.push({event:ct,listeners:Mt}),ct.data=wt)),VA(X,e,z,a,F)}d_(X,i)})}function dl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function mc(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Fn(e,a),h!=null&&o.unshift(dl(e,h,f)),h=Fn(e,i),h!=null&&o.push(dl(e,h,f))),e.tag===3)return o;e=e.return}return[]}function PA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p_(e,i,a,o,h){for(var f=i._reactName,g=[];a!==null&&a!==o;){var T=a,I=T.alternate,z=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||z===null||(I=z,h?(z=Fn(a,f),z!=null&&g.unshift(dl(a,z,I))):h||(z=Fn(a,f),z!=null&&g.push(dl(a,z,I)))),a=a.return}g.length!==0&&e.push({event:i,listeners:g})}var jA=/\r\n?/g,zA=/\u0000|\uFFFD/g;function g_(e){return(typeof e=="string"?e:""+e).replace(jA,`
`).replace(zA,"")}function y_(e,i){return i=g_(i),g_(e)===i}function Zt(e,i,a,o,h,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||an(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&an(e,""+o);break;case"className":mn(e,"class",o);break;case"tabIndex":mn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":mn(e,a,o);break;case"style":Oo(e,o,f);break;case"data":if(i!=="object"){mn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ha(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&Zt(e,i,"name",h.name,h,null),Zt(e,i,"formEncType",h.formEncType,h,null),Zt(e,i,"formMethod",h.formMethod,h,null),Zt(e,i,"formTarget",h.formTarget,h,null)):(Zt(e,i,"encType",h.encType,h,null),Zt(e,i,"method",h.method,h,null),Zt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ha(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gn);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ha(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),la(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":la(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mu.get(a)||a,la(e,a,o))}}function md(e,i,a,o,h,f){switch(a){case"style":Oo(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?an(e,o):(typeof o=="number"||typeof o=="bigint")&&an(e,""+o);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),f=e[Ve]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(i,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):la(e,a,o)}}}function He(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var o=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Zt(e,i,f,g,a,null)}}h&&Zt(e,i,"srcSet",a.srcSet,a,null),o&&Zt(e,i,"src",a.src,a,null);return;case"input":Ct("invalid",e);var T=f=g=h=null,I=null,z=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":h=F;break;case"type":g=F;break;case"checked":I=F;break;case"defaultChecked":z=F;break;case"value":f=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:Zt(e,i,o,F,a,null)}}hu(e,f,T,I,z,g,h,!1);return;case"select":Ct("invalid",e),o=g=f=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":o=T;default:Zt(e,i,h,T,a,null)}i=f,a=g,e.multiple=!!o,i!=null?ps(e,!!o,i,!1):a!=null&&ps(e,!!o,a,!0);return;case"textarea":Ct("invalid",e),f=h=o=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":o=T;break;case"defaultValue":h=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Zt(e,i,g,T,a,null)}gs(e,o,h,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(e,i,I,o,a,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(o=0;o<fl.length;o++)Ct(fl[o],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Zt(e,i,z,o,a,null)}return;default:if(ca(i)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&md(e,i,F,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Zt(e,i,T,o,a,null))}function BA(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,g=null,T=null,I=null,z=null,F=null;for(H in a){var X=a[H];if(a.hasOwnProperty(H)&&X!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=X;default:o.hasOwnProperty(H)||Zt(e,i,H,null,o,X)}}for(var B in o){var H=o[B];if(X=a[B],o.hasOwnProperty(B)&&(H!=null||X!=null))switch(B){case"type":f=H;break;case"name":h=H;break;case"checked":z=H;break;case"defaultChecked":F=H;break;case"value":g=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,i));break;default:H!==X&&Zt(e,i,B,H,o,X)}}ua(e,g,T,I,z,F,f,h);return;case"select":H=g=T=B=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":H=I;default:o.hasOwnProperty(f)||Zt(e,i,f,null,o,I)}for(h in o)if(f=o[h],I=a[h],o.hasOwnProperty(h)&&(f!=null||I!=null))switch(h){case"value":B=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==I&&Zt(e,i,h,f,o,I)}i=T,a=g,o=H,B!=null?ps(e,!!a,B,!1):!!o!=!!a&&(i!=null?ps(e,!!a,i,!0):ps(e,!!a,a?[]:"",!1));return;case"textarea":H=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Zt(e,i,T,null,o,h)}for(g in o)if(h=o[g],f=a[g],o.hasOwnProperty(g)&&(h!=null||f!=null))switch(g){case"value":B=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==f&&Zt(e,i,g,h,o,f)}fu(e,B,H);return;case"option":for(var ut in a)if(B=a[ut],a.hasOwnProperty(ut)&&B!=null&&!o.hasOwnProperty(ut))switch(ut){case"selected":e.selected=!1;break;default:Zt(e,i,ut,null,o,B)}for(I in o)if(B=o[I],H=a[I],o.hasOwnProperty(I)&&B!==H&&(B!=null||H!=null))switch(I){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Zt(e,i,I,B,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)B=a[mt],a.hasOwnProperty(mt)&&B!=null&&!o.hasOwnProperty(mt)&&Zt(e,i,mt,null,o,B);for(z in o)if(B=o[z],H=a[z],o.hasOwnProperty(z)&&B!==H&&(B!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,i));break;default:Zt(e,i,z,B,o,H)}return;default:if(ca(i)){for(var Wt in a)B=a[Wt],a.hasOwnProperty(Wt)&&B!==void 0&&!o.hasOwnProperty(Wt)&&md(e,i,Wt,void 0,o,B);for(F in o)B=o[F],H=a[F],!o.hasOwnProperty(F)||B===H||B===void 0&&H===void 0||md(e,i,F,B,o,H);return}}for(var U in a)B=a[U],a.hasOwnProperty(U)&&B!=null&&!o.hasOwnProperty(U)&&Zt(e,i,U,null,o,B);for(X in o)B=o[X],H=a[X],!o.hasOwnProperty(X)||B===H||B==null&&H==null||Zt(e,i,X,B,o,H)}function __(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var h=a[o],f=h.transferSize,g=h.initiatorType,T=h.duration;if(f&&T&&__(g)){for(g=0,T=h.responseEnd,o+=1;o<a.length;o++){var I=a[o],z=I.startTime;if(z>T)break;var F=I.transferSize,X=I.initiatorType;F&&__(X)&&(I=I.responseEnd,g+=F*(I<T?1:(T-z)/(I-z)))}if(--o,i+=8*(f+g)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pd=null,gd=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function v_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function yd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _d=null;function HA(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var E_=typeof setTimeout=="function"?setTimeout:void 0,GA=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,FA=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(e){return b_.resolve(null).then(e).catch(KA)}:E_;function KA(e){setTimeout(function(){throw e})}function js(e){return e==="head"}function A_(e,i){var a=i,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(h),Fa(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ml(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ml(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[fi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&ml(e.ownerDocument.body);a=h}while(a);Fa(i)}function S_(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function vd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vd(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function QA(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Vn(e.nextSibling),e===null)break}return null}function YA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vn(e.nextSibling),e===null))return null;return e}function w_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Vn(e.nextSibling),e===null))return null;return e}function Td(e){return e.data==="$?"||e.data==="$~"}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XA(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Vn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var bd=null;function R_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return Vn(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function I_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function C_(e,i,a){switch(i=pc(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ml(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);oa(e)}var kn=new Map,x_=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ns=st.d;st.d={f:$A,r:JA,D:ZA,C:WA,L:tS,m:eS,X:iS,S:nS,M:sS};function $A(){var e=ns.f(),i=oc();return e||i}function JA(e){var i=Sn(e);i!==null&&i.tag===5&&i.type==="form"?Kg(i):ns.r(e)}var qa=typeof document>"u"?null:document;function N_(e,i,a){var o=qa;if(o&&typeof i=="string"&&i){var h=rn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),x_.has(h)||(x_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),He(i,"link",e),Ee(i),o.head.appendChild(i)))}}function ZA(e){ns.D(e),N_("dns-prefetch",e,null)}function WA(e,i){ns.C(e,i),N_("preconnect",e,i)}function tS(e,i,a){ns.L(e,i,a);var o=qa;if(o&&e&&i){var h='link[rel="preload"][as="'+rn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+rn(a.imageSizes)+'"]')):h+='[href="'+rn(e)+'"]';var f=h;switch(i){case"style":f=Ha(e);break;case"script":f=Ga(e)}kn.has(f)||(e=A({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),kn.set(f,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(pl(f))||i==="script"&&o.querySelector(gl(f))||(i=o.createElement("link"),He(i,"link",e),Ee(i),o.head.appendChild(i)))}}function eS(e,i){ns.m(e,i);var a=qa;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+rn(o)+'"][href="'+rn(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ga(e)}if(!kn.has(f)&&(e=A({rel:"modulepreload",href:e},i),kn.set(f,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(f)))return}o=a.createElement("link"),He(o,"link",e),Ee(o),a.head.appendChild(o)}}}function nS(e,i,a){ns.S(e,i,a);var o=qa;if(o&&e){var h=mi(o).hoistableStyles,f=Ha(e);i=i||"default";var g=h.get(f);if(!g){var T={loading:0,preload:null};if(g=o.querySelector(pl(f)))T.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},a),(a=kn.get(f))&&Ad(e,a);var I=g=o.createElement("link");Ee(I),He(I,"link",e),I._p=new Promise(function(z,F){I.onload=z,I.onerror=F}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yc(g,i,o)}g={type:"stylesheet",instance:g,count:1,state:T},h.set(f,g)}}}function iS(e,i){ns.X(e,i);var a=qa;if(a&&e){var o=mi(a).hoistableScripts,h=Ga(e),f=o.get(h);f||(f=a.querySelector(gl(h)),f||(e=A({src:e,async:!0},i),(i=kn.get(h))&&Sd(e,i),f=a.createElement("script"),Ee(f),He(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function sS(e,i){ns.M(e,i);var a=qa;if(a&&e){var o=mi(a).hoistableScripts,h=Ga(e),f=o.get(h);f||(f=a.querySelector(gl(h)),f||(e=A({src:e,async:!0,type:"module"},i),(i=kn.get(h))&&Sd(e,i),f=a.createElement("script"),Ee(f),He(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function D_(e,i,a,o){var h=(h=at.current)?gc(h):null;if(!h)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ha(a.href),a=mi(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ha(a.href);var f=mi(h).hoistableStyles,g=f.get(e);if(g||(h=h.ownerDocument||h,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=h.querySelector(pl(e)))&&!f._p&&(g.instance=f,g.state.loading=5),kn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(e,a),f||rS(h,e,a,g.state))),i&&o===null)throw Error(r(528,""));return g}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ga(a),a=mi(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ha(e){return'href="'+rn(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function O_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function rS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),He(i,"link",a),Ee(i),e.head.appendChild(i))}function Ga(e){return'[src="'+rn(e)+'"]'}function gl(e){return"script[async]"+e}function M_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+rn(a.href)+'"]');if(o)return i.instance=o,Ee(o),o;var h=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ee(o),He(o,"style",h),yc(o,a.precedence,e),i.instance=o;case"stylesheet":h=Ha(a.href);var f=e.querySelector(pl(h));if(f)return i.state.loading|=4,i.instance=f,Ee(f),f;o=O_(a),(h=kn.get(h))&&Ad(o,h),f=(e.ownerDocument||e).createElement("link"),Ee(f);var g=f;return g._p=new Promise(function(T,I){g.onload=T,g.onerror=I}),He(f,"link",o),i.state.loading|=4,yc(f,a.precedence,e),i.instance=f;case"script":return f=Ga(a.src),(h=e.querySelector(gl(f)))?(i.instance=h,Ee(h),h):(o=a,(h=kn.get(f))&&(o=A({},a),Sd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Ee(h),He(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,yc(o,a.precedence,e));return i.instance}function yc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,g=0;g<o.length;g++){var T=o[g];if(T.dataset.precedence===i)f=T;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var _c=null;function V_(e,i,a){if(_c===null){var o=new Map,h=_c=new Map;h.set(a,o)}else h=_c,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var f=a[h];if(!(f[fi]||f[Te]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(i)||"";g=e+g;var T=o.get(g);T?T.push(f):o.set(g,[f])}}return o}function k_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function aS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function L_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oS(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ha(o.href),f=i.querySelector(pl(h));if(f){i=f._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=vc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=f,Ee(f);return}f=i.ownerDocument||i,o=O_(o),(h=kn.get(h))&&Ad(o,h),f=f.createElement("link"),Ee(f);var g=f;g._p=new Promise(function(T,I){g.onload=T,g.onerror=I}),He(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var wd=0;function lS(e,i){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+i);0<e.imgBytes&&wd===0&&(wd=62500*qA());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>wd?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tc=null;function Ec(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tc=new Map,i.forEach(uS,e),Tc=null,vc.call(e))}function uS(e,i){if(!(i.state.loading&4)){var a=Tc.get(e);if(a)var o=a.get(null);else{a=new Map,Tc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var g=h[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}h=i.instance,g=h.getAttribute("data-precedence"),f=a.get(g)||o,f===o&&a.set(null,h),a.set(g,h),this.count++,o=vc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var yl={$$typeof:bt,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function cS(e,i,a,o,h,f,g,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.hiddenUpdates=ci(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function U_(e,i,a,o,h,f,g,T,I,z,F,X){return e=new cS(e,i,a,g,I,z,F,X,T),i=1,f===!0&&(i|=24),f=gn(3,null,null,i),e.current=f,f.stateNode=e,i=sf(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},lf(f),e}function P_(e){return e?(e=Ea,e):Ea}function j_(e,i,a,o,h,f){h=P_(h),o.context===null?o.context=h:o.pendingContext=h,o=Cs(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xs(e,o,i),a!==null&&(hn(a,e,i),Xo(a,e,i))}function z_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Rd(e,i){z_(e,i),(e=e.alternate)&&z_(e,i)}function B_(e){if(e.tag===13||e.tag===31){var i=Sr(e,67108864);i!==null&&hn(i,e,67108864),Rd(e,67108864)}}function q_(e){if(e.tag===13||e.tag===31){var i=En();i=fr(i);var a=Sr(e,i);a!==null&&hn(a,e,i),Rd(e,i)}}var bc=!0;function hS(e,i,a,o){var h=G.T;G.T=null;var f=st.p;try{st.p=2,Id(e,i,a,o)}finally{st.p=f,G.T=h}}function fS(e,i,a,o){var h=G.T;G.T=null;var f=st.p;try{st.p=8,Id(e,i,a,o)}finally{st.p=f,G.T=h}}function Id(e,i,a,o){if(bc){var h=Cd(o);if(h===null)dd(e,i,o,Ac,a),G_(e,o);else if(mS(h,e,i,a,o))o.stopPropagation();else if(G_(e,o),i&4&&-1<dS.indexOf(e)){for(;h!==null;){var f=Sn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=li(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var I=1<<31-de(g);T.entanglements[1]|=I,g&=~I}Ii(f),(Gt&6)===0&&(rc=tn()+500,hl(0))}}break;case 31:case 13:T=Sr(f,2),T!==null&&hn(T,f,2),oc(),Rd(f,2)}if(f=Cd(o),f===null&&dd(e,i,o,Ac,a),f===h)break;h=f}h!==null&&o.stopPropagation()}else dd(e,i,o,null,a)}}function Cd(e){return e=wn(e),xd(e)}var Ac=null;function xd(e){if(Ac=null,e=di(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=d(i),e!==null)return e;e=null}else if(a===31){if(e=p(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ac=e,null}function H_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lr()){case To:return 2;case Eo:return 8;case ds:case Vh:return 32;case eu:return 268435456;default:return 32}default:return 32}}var Nd=!1,zs=null,Bs=null,qs=null,_l=new Map,vl=new Map,Hs=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(e,i){switch(e){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":qs=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(i.pointerId)}}function Tl(e,i,a,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Sn(i),i!==null&&B_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function mS(e,i,a,o,h){switch(i){case"focusin":return zs=Tl(zs,e,i,a,o,h),!0;case"dragenter":return Bs=Tl(Bs,e,i,a,o,h),!0;case"mouseover":return qs=Tl(qs,e,i,a,o,h),!0;case"pointerover":var f=h.pointerId;return _l.set(f,Tl(_l.get(f)||null,e,i,a,o,h)),!0;case"gotpointercapture":return f=h.pointerId,vl.set(f,Tl(vl.get(f)||null,e,i,a,o,h)),!0}return!1}function F_(e){var i=di(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=d(a),i!==null){e.blockedOn=i,qn(e.priority,function(){q_(a)});return}}else if(i===31){if(i=p(a),i!==null){e.blockedOn=i,qn(e.priority,function(){q_(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Mo=o,a.target.dispatchEvent(o),Mo=null}else return i=Sn(a),i!==null&&B_(i),e.blockedOn=a,!1;i.shift()}return!0}function K_(e,i,a){Sc(e)&&a.delete(i)}function pS(){Nd=!1,zs!==null&&Sc(zs)&&(zs=null),Bs!==null&&Sc(Bs)&&(Bs=null),qs!==null&&Sc(qs)&&(qs=null),_l.forEach(K_),vl.forEach(K_)}function wc(e,i){e.blockedOn===i&&(e.blockedOn=null,Nd||(Nd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,pS)))}var Rc=null;function Q_(e){Rc!==e&&(Rc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(xd(o||a)===null)continue;break}var f=Sn(a);f!==null&&(e.splice(i,3),i-=3,Cf(f,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function Fa(e){function i(I){return wc(I,e)}zs!==null&&wc(zs,e),Bs!==null&&wc(Bs,e),qs!==null&&wc(qs,e),_l.forEach(i),vl.forEach(i);for(var a=0;a<Hs.length;a++){var o=Hs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Hs.length&&(a=Hs[0],a.blockedOn===null);)F_(a),a.blockedOn===null&&Hs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],f=a[o+1],g=h[Ve]||null;if(typeof f=="function")g||Q_(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(h=f,g=f[Ve]||null)T=g.formAction;else if(xd(h)!==null)continue}else T=g.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Q_(a)}}}function Y_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return h=g})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Dd(e){this._internalRoot=e}Ic.prototype.render=Dd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,o=En();j_(a,o,e,i,null,null)},Ic.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;j_(e.current,2,null,e,null,null),oc(),i[hi]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var i=ou();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Hs.length&&i!==0&&i<Hs[a].priority;a++);Hs.splice(a,0,e),a===0&&F_(e)}};var X_=t.version;if(X_!=="19.2.6")throw Error(r(527,X_,"19.2.6"));st.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(i),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var gS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{zn=Cc.inject(gS),Pe=Cc}catch{}}return bl.createRoot=function(e,i){if(!l(e))throw Error(r(299));var a=!1,o="",h=ny,f=iy,g=sy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),i=U_(e,1,!1,null,null,a,o,null,h,f,g,Y_),e[hi]=i.current,fd(e),new Dd(i)},bl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(r(299));var o=!1,h="",f=ny,g=iy,T=sy,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=U_(e,1,!0,i,a??null,o,h,I,f,g,T,Y_),i.context=P_(null),a=i.current,o=En(),o=fr(o),h=Cs(o),h.callback=null,xs(a,h,o),a=o,i.current.lanes=a,cr(i,a),Ii(i),e[hi]=i.current,fd(e),new Ic(i)},bl.version="19.2.6",bl}var rv;function RS(){if(rv)return Vd.exports;rv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Vd.exports=wS(),Vd.exports}var IS=RS();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=(...s)=>s.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=s=>{const t=xS(s);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},DS=ee.createContext({}),OS=()=>ee.useContext(DS),MS=ee.forwardRef(({color:s,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...p},y)=>{const{size:_=24,strokeWidth:E=2,absoluteStrokeWidth:A=!1,color:k="currentColor",className:K=""}=OS()??{},W=r??A?Number(n??E)*24/Number(t??_):n??E;return ee.createElement("svg",{ref:y,...Pd,width:t??_??Pd.width,height:t??_??Pd.height,stroke:s??k,strokeWidth:W,className:$0("lucide",K,l),...!u&&!NS(p)&&{"aria-hidden":"true"},...p},[...d.map(([nt,it])=>ee.createElement(nt,it)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=(s,t)=>{const n=ee.forwardRef(({className:r,...l},u)=>ee.createElement(MS,{ref:u,iconNode:t,className:$0(`lucide-${CS(av(s))}`,`lucide-${s}`,r),...l}));return n.displayName=av(s),n};/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]],kS=We("barcode",VS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],US=We("chart-pie",LS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],jS=We("credit-card",PS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],BS=We("history",zS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],HS=We("layout-dashboard",qS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],FS=We("log-in",GS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],QS=We("log-out",KS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M5 12h14",key:"1ays0h"}]],XS=We("minus",YS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],JS=We("package",$S);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],ov=We("pen",ZS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],jd=We("plus",WS);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],lv=We("printer",tw);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],nw=We("save",ew);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],zd=We("shopping-cart",iw);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],uv=We("trash-2",sw);/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cv=We("x",rw),aw=()=>{};var hv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=function(s){const t=[];let n=0;for(let r=0;r<s.length;r++){let l=s.charCodeAt(r);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++r)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},ow=function(s){const t=[];let n=0,r=0;for(;n<s.length;){const l=s[n++];if(l<128)t[r++]=String.fromCharCode(l);else if(l>191&&l<224){const u=s[n++];t[r++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=s[n++],d=s[n++],p=s[n++],y=((l&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;t[r++]=String.fromCharCode(55296+(y>>10)),t[r++]=String.fromCharCode(56320+(y&1023))}else{const u=s[n++],d=s[n++];t[r++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return t.join("")},Z0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let l=0;l<s.length;l+=3){const u=s[l],d=l+1<s.length,p=d?s[l+1]:0,y=l+2<s.length,_=y?s[l+2]:0,E=u>>2,A=(u&3)<<4|p>>4;let k=(p&15)<<2|_>>6,K=_&63;y||(K=64,d||(k=64)),r.push(n[E],n[A],n[k],n[K])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(J0(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):ow(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let l=0;l<s.length;){const u=n[s.charAt(l++)],p=l<s.length?n[s.charAt(l)]:0;++l;const _=l<s.length?n[s.charAt(l)]:64;++l;const A=l<s.length?n[s.charAt(l)]:64;if(++l,u==null||p==null||_==null||A==null)throw new lw;const k=u<<2|p>>4;if(r.push(k),_!==64){const K=p<<4&240|_>>2;if(r.push(K),A!==64){const W=_<<6&192|A;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uw=function(s){const t=J0(s);return Z0.encodeByteArray(t,!0)},Kc=function(s){return uw(s).replace(/\./g,"")},W0=function(s){try{return Z0.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=()=>cw().__FIREBASE_DEFAULTS__,fw=()=>{if(typeof process>"u"||typeof hv>"u")return;const s=hv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},dw=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&W0(s[1]);return t&&JSON.parse(t)},dh=()=>{try{return aw()||hw()||fw()||dw()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},tT=s=>{var t,n;return(n=(t=dh())==null?void 0:t.emulatorHosts)==null?void 0:n[s]},mw=s=>{const t=tT(s);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},eT=()=>{var s;return(s=dh())==null?void 0:s.config},nT=s=>{var t;return(t=dh())==null?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",l=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${r}`,aud:r,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Kc(JSON.stringify(n)),Kc(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function _w(){var t;const s=(t=dh())==null?void 0:t.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ew(){const s=Ze();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function bw(){return!_w()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sT(){try{return typeof indexedDB=="object"}catch{return!1}}function rT(){return new Promise((s,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(r);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;t(((u=l.error)==null?void 0:u.message)||"")}}catch(n){t(n)}})}function Aw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="FirebaseError";class ri extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Sw,Object.setPrototypeOf(this,ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},l=`${this.service}/${t}`,u=this.errors[t],d=u?ww(u,r):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new ri(l,p,r)}}function ww(s,t){return s.replace(Rw,(n,r)=>{const l=t[r];return l!=null?String(l):`<${r}?>`})}const Rw=/\{\$([^}]+)}/g;function Iw(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Ws(s,t){if(s===t)return!0;const n=Object.keys(s),r=Object.keys(t);for(const l of n){if(!r.includes(l))return!1;const u=s[l],d=t[l];if(fv(u)&&fv(d)){if(!Ws(u,d))return!1}else if(u!==d)return!1}for(const l of r)if(!n.includes(l))return!1;return!0}function fv(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(s){const t=[];for(const[n,r]of Object.entries(s))Array.isArray(r)?r.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Cw(s,t){const n=new xw(s,t);return n.subscribe.bind(n)}class xw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let l;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nw(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:r},l.next===void 0&&(l.next=Bd),l.error===void 0&&(l.error=Bd),l.complete===void 0&&(l.complete=Bd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nw(s,t){if(typeof s!="object"||s===null)return!1;for(const n of t)if(n in s&&typeof s[n]=="function")return!0;return!1}function Bd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1e3,Ow=2,Mw=14400*1e3,Vw=.5;function dv(s,t=Dw,n=Ow){const r=t*Math.pow(n,s),l=Math.round(Vw*r*(Math.random()-.5)*2);return Math.min(Mw,r+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(s){return s&&s._delegate?s._delegate:s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aT(s){return(await fetch(s,{credentials:"include"})).ok}class ii{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&r.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(r)return null;throw l}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uw(t))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});r.resolve(u)}catch{}}}}clearInstance(t=Ur){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ur){return this.instances.has(t)}getOptions(t=Ur){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&d.resolve(l)}return l}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(r)??new Set;l.add(t),this.onInitCallbacks.set(r,l);const u=this.instances.get(r);return u&&t(u,r),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const l of r)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ur){return this.component?this.component.multipleInstances?t:Ur:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lw(s){return s===Ur?void 0:s}function Uw(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Vt||(Vt={}));const jw={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},zw=Vt.INFO,Bw={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},qw=(s,t,...n)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),l=Bw[t];if(l)console[l](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mh{constructor(t){this.name=t,this._logLevel=zw,this._logHandler=qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const Hw=(s,t)=>t.some(n=>s instanceof n);let mv,pv;function Gw(){return mv||(mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fw(){return pv||(pv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oT=new WeakMap,rm=new WeakMap,lT=new WeakMap,qd=new WeakMap,Mm=new WeakMap;function Kw(s){const t=new Promise((n,r)=>{const l=()=>{s.removeEventListener("success",u),s.removeEventListener("error",d)},u=()=>{n(Xs(s.result)),l()},d=()=>{r(s.error),l()};s.addEventListener("success",u),s.addEventListener("error",d)});return t.then(n=>{n instanceof IDBCursor&&oT.set(n,s)}).catch(()=>{}),Mm.set(t,s),t}function Qw(s){if(rm.has(s))return;const t=new Promise((n,r)=>{const l=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",d),s.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{r(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",u),s.addEventListener("error",d),s.addEventListener("abort",d)});rm.set(s,t)}let am={get(s,t,n){if(s instanceof IDBTransaction){if(t==="done")return rm.get(s);if(t==="objectStoreNames")return s.objectStoreNames||lT.get(s);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xs(s[t])},set(s,t,n){return s[t]=n,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function Yw(s){am=s(am)}function Xw(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=s.call(Hd(this),t,...n);return lT.set(r,t.sort?t.sort():[t]),Xs(r)}:Fw().includes(s)?function(...t){return s.apply(Hd(this),t),Xs(oT.get(this))}:function(...t){return Xs(s.apply(Hd(this),t))}}function $w(s){return typeof s=="function"?Xw(s):(s instanceof IDBTransaction&&Qw(s),Hw(s,Gw())?new Proxy(s,am):s)}function Xs(s){if(s instanceof IDBRequest)return Kw(s);if(qd.has(s))return qd.get(s);const t=$w(s);return t!==s&&(qd.set(s,t),Mm.set(t,s)),t}const Hd=s=>Mm.get(s);function uT(s,t,{blocked:n,upgrade:r,blocking:l,terminated:u}={}){const d=indexedDB.open(s,t),p=Xs(d);return r&&d.addEventListener("upgradeneeded",y=>{r(Xs(d.result),y.oldVersion,y.newVersion,Xs(d.transaction),y)}),n&&d.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),p.then(y=>{u&&y.addEventListener("close",()=>u()),l&&y.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const Jw=["get","getKey","getAll","getAllKeys","count"],Zw=["put","add","delete","clear"],Gd=new Map;function gv(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Gd.get(t))return Gd.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,l=Zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(l||Jw.includes(n)))return;const u=async function(d,...p){const y=this.transaction(d,l?"readwrite":"readonly");let _=y.store;return r&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),l&&y.done]))[0]};return Gd.set(t,u),u}Yw(s=>({...s,get:(t,n,r)=>gv(t,n)||s.get(t,n,r),has:(t,n)=>!!gv(t,n)||s.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function t1(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const om="@firebase/app",yv="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new mh("@firebase/app"),e1="@firebase/app-compat",n1="@firebase/analytics-compat",i1="@firebase/analytics",s1="@firebase/app-check-compat",r1="@firebase/app-check",a1="@firebase/auth",o1="@firebase/auth-compat",l1="@firebase/database",u1="@firebase/data-connect",c1="@firebase/database-compat",h1="@firebase/functions",f1="@firebase/functions-compat",d1="@firebase/installations",m1="@firebase/installations-compat",p1="@firebase/messaging",g1="@firebase/messaging-compat",y1="@firebase/performance",_1="@firebase/performance-compat",v1="@firebase/remote-config",T1="@firebase/remote-config-compat",E1="@firebase/storage",b1="@firebase/storage-compat",A1="@firebase/firestore",S1="@firebase/ai",w1="@firebase/firestore-compat",R1="firebase",I1="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="[DEFAULT]",C1={[om]:"fire-core",[e1]:"fire-core-compat",[i1]:"fire-analytics",[n1]:"fire-analytics-compat",[r1]:"fire-app-check",[s1]:"fire-app-check-compat",[a1]:"fire-auth",[o1]:"fire-auth-compat",[l1]:"fire-rtdb",[u1]:"fire-data-connect",[c1]:"fire-rtdb-compat",[h1]:"fire-fn",[f1]:"fire-fn-compat",[d1]:"fire-iid",[m1]:"fire-iid-compat",[p1]:"fire-fcm",[g1]:"fire-fcm-compat",[y1]:"fire-perf",[_1]:"fire-perf-compat",[v1]:"fire-rc",[T1]:"fire-rc-compat",[E1]:"fire-gcs",[b1]:"fire-gcs-compat",[A1]:"fire-fst",[w1]:"fire-fst-compat",[S1]:"fire-vertex","fire-js":"fire-js",[R1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,x1=new Map,um=new Map;function _v(s,t){try{s.container.addComponent(t)}catch(n){os.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,n)}}function Vi(s){const t=s.name;if(um.has(t))return os.debug(`There were multiple attempts to register component ${t}.`),!1;um.set(t,s);for(const n of Qc.values())_v(n,s);for(const n of x1.values())_v(n,s);return!0}function Jr(s,t){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(t)}function Zn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$s=new $r("app","Firebase",N1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $s.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=I1;function cT(s,t={}){let n=s;typeof t!="object"&&(t={name:t});const r={name:lm,automaticDataCollectionEnabled:!0,...t},l=r.name;if(typeof l!="string"||!l)throw $s.create("bad-app-name",{appName:String(l)});if(n||(n=eT()),!n)throw $s.create("no-options");const u=Qc.get(l);if(u){if(Ws(n,u.options)&&Ws(r,u.config))return u;throw $s.create("duplicate-app",{appName:l})}const d=new Pw(l);for(const y of um.values())d.addComponent(y);const p=new D1(n,r,d);return Qc.set(l,p),p}function Vm(s=lm){const t=Qc.get(s);if(!t&&s===lm&&eT())return cT();if(!t)throw $s.create("no-app",{appName:s});return t}function Pn(s,t,n){let r=C1[s]??s;n&&(r+=`-${n}`);const l=r.match(/\s|\//),u=t.match(/\s|\//);if(l||u){const d=[`Unable to register library "${r}" with version "${t}":`];l&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),os.warn(d.join(" "));return}Vi(new ii(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="firebase-heartbeat-database",M1=1,Ml="firebase-heartbeat-store";let Fd=null;function hT(){return Fd||(Fd=uT(O1,M1,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(Ml)}catch(n){console.warn(n)}}}}).catch(s=>{throw $s.create("idb-open",{originalErrorMessage:s.message})})),Fd}async function V1(s){try{const n=(await hT()).transaction(Ml),r=await n.objectStore(Ml).get(fT(s));return await n.done,r}catch(t){if(t instanceof ri)os.warn(t.message);else{const n=$s.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});os.warn(n.message)}}}async function vv(s,t){try{const r=(await hT()).transaction(Ml,"readwrite");await r.objectStore(Ml).put(t,fT(s)),await r.done}catch(n){if(n instanceof ri)os.warn(n.message);else{const r=$s.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(r.message)}}}function fT(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=1024,L1=30;class U1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Tv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>L1){const d=z1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){os.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tv(),{heartbeatsToSend:r,unsentEntries:l}=P1(this._heartbeatsCache.heartbeats),u=Kc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return os.warn(n),""}}}function Tv(){return new Date().toISOString().substring(0,10)}function P1(s,t=k1){const n=[];let r=s.slice();for(const l of s){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Ev(n)>t){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Ev(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sT()?rT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await V1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ev(s){return Kc(JSON.stringify({version:2,heartbeats:s})).length}function z1(s){if(s.length===0)return-1;let t=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(s){Vi(new ii("platform-logger",t=>new Ww(t),"PRIVATE")),Vi(new ii("heartbeat",t=>new U1(t),"PRIVATE")),Pn(om,yv,s),Pn(om,yv,"esm2020"),Pn("fire-js","")}B1("");var q1="firebase",H1="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(q1,H1,"app");function dT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=dT,mT=new $r("auth","Firebase",dT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new mh("@firebase/auth");function F1(s,...t){Yc.logLevel<=Vt.WARN&&Yc.warn(`Auth (${uo}): ${s}`,...t)}function Lc(s,...t){Yc.logLevel<=Vt.ERROR&&Yc.error(`Auth (${uo}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(s,...t){throw Lm(s,...t)}function ei(s,...t){return Lm(s,...t)}function km(s,t,n){const r={...G1(),[t]:n};return new $r("auth","Firebase",r).create(t,{appName:s.name})}function Br(s){return km(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K1(s,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ki(s,"argument-error"),km(s,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lm(s,...t){if(typeof s!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(n,...r)}return mT.create(s,...t)}function yt(s,t,...n){if(!s)throw Lm(t,...n)}function ss(s){const t="INTERNAL ASSERTION FAILED: "+s;throw Lc(t),new Error(t)}function ls(s,t){s||ss(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Q1(){return bv()==="http:"||bv()==="https:"}function bv(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q1()||iT()||"connection"in navigator)?navigator.onLine:!0}function X1(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n){this.shortDelay=t,this.longDelay=n,ls(n>t,"Short delay should be less than long delay!"),this.isMobile=yw()||Tw()}get(){return Y1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(s,t){ls(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Z1=new Fl(3e4,6e4);function Pm(s,t){return s.tenantId&&!t.tenantId?{...t,tenantId:s.tenantId}:t}async function co(s,t,n,r,l={}){return gT(s,l,async()=>{let u={},d={};r&&(t==="GET"?d=r:u={body:JSON.stringify(r)});const p=Hl({key:s.config.apiKey,...d}).slice(1),y=await s._getAdditionalHeaders();y["Content-Type"]="application/json",s.languageCode&&(y["X-Firebase-Locale"]=s.languageCode);const _={method:t,headers:y,...u};return vw()||(_.referrerPolicy="no-referrer"),s.emulatorConfig&&Gl(s.emulatorConfig.host)&&(_.credentials="include"),pT.fetch()(await yT(s,s.config.apiHost,n,p),_)})}async function gT(s,t,n){s._canInitEmulator=!1;const r={...$1,...t};try{const l=new tR(s),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw xc(s,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const p=u.ok?d.errorMessage:d.error.message,[y,_]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(s,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw xc(s,"email-already-in-use",d);if(y==="USER_DISABLED")throw xc(s,"user-disabled",d);const E=r[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw km(s,E,_);ki(s,E)}}catch(l){if(l instanceof ri)throw l;ki(s,"network-request-failed",{message:String(l)})}}async function W1(s,t,n,r,l={}){const u=await co(s,t,n,r,l);return"mfaPendingCredential"in u&&ki(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function yT(s,t,n,r){const l=`${t}${n}?${r}`,u=s,d=u.config.emulator?Um(s.config,l):`${s.config.apiScheme}://${l}`;return J1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class tR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ei(this.auth,"network-request-failed")),Z1.get())})}}function xc(s,t,n){const r={appName:s.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const l=ei(s,t,r);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(s,t){return co(s,"POST","/v1/accounts:delete",t)}async function Xc(s,t){return co(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nR(s,t=!1){const n=Ke(s),r=await n.getIdToken(t),l=jm(r);yt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:r,authTime:Cl(Kd(l.auth_time)),issuedAtTime:Cl(Kd(l.iat)),expirationTime:Cl(Kd(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Kd(s){return Number(s)*1e3}function jm(s){const[t,n,r]=s.split(".");if(t===void 0||n===void 0||r===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const l=W0(n);return l?JSON.parse(l):(Lc("Failed to decode base64 JWT payload"),null)}catch(l){return Lc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Av(s){const t=jm(s);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(s,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ri&&iR(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function iR({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(s){var A;const t=s.auth,n=await s.getIdToken(),r=await Vl(s,Xc(t,{idToken:n}));yt(r==null?void 0:r.users.length,t,"internal-error");const l=r.users[0];s._notifyReloadListener(l);const u=(A=l.providerUserInfo)!=null&&A.length?_T(l.providerUserInfo):[],d=aR(s.providerData,u),p=s.isAnonymous,y=!(s.email&&l.passwordHash)&&!(d!=null&&d.length),_=p?y:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new hm(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(s,E)}async function rR(s){const t=Ke(s);await $c(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function aR(s,t){return[...s.filter(r=>!t.some(l=>l.providerId===r.providerId)),...t]}function _T(s){return s.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(s,t){const n=await gT(s,{},async()=>{const r=Hl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:u}=s.config,d=await yT(s,l,"/v1/token",`key=${u}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:p,body:r};return s.emulatorConfig&&Gl(s.emulatorConfig.host)&&(y.credentials="include"),pT.fetch()(d,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lR(s,t){return co(s,"POST","/v2/accounts:revokeToken",Pm(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Av(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=Av(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:l,expiresIn:u}=await oR(t,n);this.updateTokensAndExpiration(r,l,Number(u))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:l,expirationTime:u}=n,d=new Ja;return r&&(yt(typeof r=="string","internal-error",{appName:t}),d.refreshToken=r),l&&(yt(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),u&&(yt(typeof u=="number","internal-error",{appName:t}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return ss("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(s,t){yt(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Wn{constructor({uid:t,auth:n,stsTokenManager:r,...l}){this.providerId="firebase",this.proactiveRefresh=new sR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new hm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const n=await Vl(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return nR(this,t)}reload(){return rR(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Wn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Br(this.auth));const t=await this.getIdToken();return await Vl(this,eR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,p=n.tenantId??void 0,y=n._redirectEventId??void 0,_=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:A,emailVerified:k,isAnonymous:K,providerData:W,stsTokenManager:nt}=n;yt(A&&nt,t,"internal-error");const it=Ja.fromJSON(this.name,nt);yt(typeof A=="string",t,"internal-error"),Fs(r,t.name),Fs(l,t.name),yt(typeof k=="boolean",t,"internal-error"),yt(typeof K=="boolean",t,"internal-error"),Fs(u,t.name),Fs(d,t.name),Fs(p,t.name),Fs(y,t.name),Fs(_,t.name),Fs(E,t.name);const gt=new Wn({uid:A,auth:t,email:l,emailVerified:k,displayName:r,isAnonymous:K,photoURL:d,phoneNumber:u,tenantId:p,stsTokenManager:it,createdAt:_,lastLoginAt:E});return W&&Array.isArray(W)&&(gt.providerData=W.map(_t=>({..._t}))),y&&(gt._redirectEventId=y),gt}static async _fromIdTokenResponse(t,n,r=!1){const l=new Ja;l.updateFromServerResponse(n);const u=new Wn({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:r});return await $c(u),u}static async _fromGetAccountInfoResponse(t,n,r){const l=n.users[0];yt(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?_T(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),p=new Ja;p.updateFromIdToken(r);const y=new Wn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new hm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;function rs(s){ls(s instanceof Function,"Expected a class definition");let t=Sv.get(s);return t?(ls(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,Sv.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}vT.type="NONE";const wv=vT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(s,t,n){return`firebase:${s}:${t}:${n}`}class Za{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:l,name:u}=this.auth;this.fullUserKey=Uc(this.userKey,l.apiKey,u),this.fullPersistenceKey=Uc("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Xc(this.auth,{idToken:t}).catch(()=>{});return n?Wn._fromGetAccountInfoResponse(this.auth,n,t):null}return Wn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Za(rs(wv),t,r);const l=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=l[0]||rs(wv);const d=Uc(r,t.config.apiKey,t.name);let p=null;for(const _ of n)try{const E=await _._get(d);if(E){let A;if(typeof E=="string"){const k=await Xc(t,{idToken:E}).catch(()=>{});if(!k)break;A=await Wn._fromGetAccountInfoResponse(t,k,E)}else A=Wn._fromJSON(t,E);_!==u&&(p=A),u=_;break}}catch{}const y=l.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Za(u,t,r):(u=y[0],p&&await u._set(d,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(d)}catch{}})),new Za(u,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(AT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(TT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wT(t))return"Blackberry";if(RT(t))return"Webos";if(ET(t))return"Safari";if((t.includes("chrome/")||bT(t))&&!t.includes("edge/"))return"Chrome";if(ST(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TT(s=Ze()){return/firefox\//i.test(s)}function ET(s=Ze()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bT(s=Ze()){return/crios\//i.test(s)}function AT(s=Ze()){return/iemobile/i.test(s)}function ST(s=Ze()){return/android/i.test(s)}function wT(s=Ze()){return/blackberry/i.test(s)}function RT(s=Ze()){return/webos/i.test(s)}function zm(s=Ze()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function uR(s=Ze()){var t;return zm(s)&&!!((t=window.navigator)!=null&&t.standalone)}function cR(){return Ew()&&document.documentMode===10}function IT(s=Ze()){return zm(s)||ST(s)||RT(s)||wT(s)||/windows phone/i.test(s)||AT(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(s,t=[]){let n;switch(s){case"Browser":n=Rv(Ze());break;case"Worker":n=`${Rv(Ze())}-${s}`;break;default:n=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${uo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=u=>new Promise((d,p)=>{try{const y=t(u);d(y)}catch(y){p(y)}});r.onAbort=n,this.queue.push(r);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(s,t={}){return co(s,"GET","/v2/passwordPolicy",Pm(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=6;class mR{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let l=0;l<t.length;l++)r=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,l,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(t,n,r,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iv(this),this.idTokenSubscription=new Iv(this),this.beforeStateQueue=new hR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rs(n)),this._initializationPromise=this.queue(async()=>{var r,l,u;if(!this._deleted&&(this.persistenceManager=await Za.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Xc(this,{idToken:t}),r=await Wn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(Zn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=r==null?void 0:r._redirectEventId,y=await this.tryRedirectSignIn(t);(!d||d===p)&&(y!=null&&y.user)&&(r=y.user,l=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(r)}catch(d){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $c(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=X1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Zn(this.app))return Promise.reject(Br(this));const n=t?Ke(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Zn(this.app)?Promise.reject(Br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rs(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await fR(this),n=new mR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new $r("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lR(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rs(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await Za.create(this,[rs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(p,this,"internal-error"),p.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,r,l);return()=>{d=!0,y()}}else{const y=t.addObserver(n);return()=>{d=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=CT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&F1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ph(s){return Ke(s)}class Iv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cw(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gR(s){Bm=s}function yR(s){return Bm.loadJS(s)}function _R(){return Bm.gapiScript}function vR(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(s,t){const n=Jr(s,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Ws(u,t??{}))return l;ki(l,"already-initialized")}return n.initialize({options:t})}function ER(s,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rs);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function bR(s,t,n){const r=ph(s);yt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const l=!1,u=xT(t),{host:d,port:p}=AR(t),y=p===null?"":`:${p}`,_={url:`${u}//${d}${y}/`},E=Object.freeze({host:d,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!r._canInitEmulator){yt(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),yt(Ws(_,r.config.emulator)&&Ws(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,Gl(d)?aT(`${u}//${d}${y}`):SR()}function xT(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function AR(s){const t=xT(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(r);if(l){const u=l[1];return{host:u,port:Cv(r.substr(u.length+1))}}else{const[u,d]=r.split(":");return{host:u,port:Cv(d)}}}function Cv(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function SR(){function s(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ss("not implemented")}_getIdTokenResponse(t){return ss("not implemented")}_linkToIdToken(t,n){return ss("not implemented")}_getReauthenticationResolver(t){return ss("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(s,t){return W1(s,"POST","/v1/accounts:signInWithIdp",Pm(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="http://localhost";class Fr extends NT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Fr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ki("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:l,...u}=n;if(!r||!l)return null;const d=new Fr(r,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(t){const n=this.buildRequest();return Wa(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Wa(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Wa(t,n)}buildRequest(){const t={requestUri:wR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends qm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Kl{constructor(){super("facebook.com")}static credential(t){return Fr._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ks.credentialFromTaggedObject(t)}static credentialFromError(t){return Ks.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ks.credential(t.oauthAccessToken)}catch{return null}}}Ks.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ks.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Fr._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return is.credential(n,r)}catch{return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com";is.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Kl{constructor(){super("github.com")}static credential(t){return Fr._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qs.credentialFromTaggedObject(t)}static credentialFromError(t){return Qs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qs.credential(t.oauthAccessToken)}catch{return null}}}Qs.GITHUB_SIGN_IN_METHOD="github.com";Qs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Kl{constructor(){super("twitter.com")}static credential(t,n){return Fr._fromParams({providerId:Ys.PROVIDER_ID,signInMethod:Ys.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ys.credentialFromTaggedObject(t)}static credentialFromError(t){return Ys.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ys.credential(n,r)}catch{return null}}}Ys.TWITTER_SIGN_IN_METHOD="twitter.com";Ys.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,l=!1){const u=await Wn._fromIdTokenResponse(t,r,l),d=xv(r);return new so({user:u,providerId:d,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const l=xv(r);return new so({user:t,providerId:l,_tokenResponse:r,operationType:n})}}function xv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends ri{constructor(t,n,r,l){super(n.code,n.message),this.operationType=r,this.user=l,Object.setPrototypeOf(this,Jc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,l){return new Jc(t,n,r,l)}}function DT(s,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Jc._fromErrorAndOperation(s,u,t,r):u})}async function RR(s,t,n=!1){const r=await Vl(s,t._linkToIdToken(s.auth,await s.getIdToken()),n);return so._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(s,t,n=!1){const{auth:r}=s;if(Zn(r.app))return Promise.reject(Br(r));const l="reauthenticate";try{const u=await Vl(s,DT(r,l,t,s),n);yt(u.idToken,r,"internal-error");const d=jm(u.idToken);yt(d,r,"internal-error");const{sub:p}=d;return yt(s.uid===p,r,"user-mismatch"),so._forOperation(s,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ki(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(s,t,n=!1){if(Zn(s.app))return Promise.reject(Br(s));const r="signIn",l=await DT(s,r,t),u=await so._fromIdTokenResponse(s,r,l);return n||await s._updateCurrentUser(u.user),u}function xR(s,t,n,r){return Ke(s).onIdTokenChanged(t,n,r)}function NR(s,t,n){return Ke(s).beforeAuthStateChanged(t,n)}function DR(s,t,n,r){return Ke(s).onAuthStateChanged(t,n,r)}const Zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zc,"1"),this.storage.removeItem(Zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=1e3,MR=10;class MT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),l=this.localCache[n];r!==l&&t(n,l,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((d,p,y)=>{this.notifyListeners(d,y)});return}const r=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(r);!n&&this.localCache[r]===d||this.notifyListeners(r,d)},u=this.storage.getItem(r);cR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,MR):l()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const l of Array.from(r))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}MT.type="LOCAL";const VR=MT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}VT.type="SESSION";const kT=VT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const r=new gh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:l});const p=Array.from(d).map(async _=>_(n.origin,u)),y=await kR(p);n.ports[0].postMessage({status:"done",eventId:r,eventType:l,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(s="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return s+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((p,y)=>{const _=Hm("",20);l.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},r);d={messageChannel:l,onMessage(A){const k=A;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(k.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){return window}function UR(s){xi().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(){return typeof xi().WorkerGlobalScope<"u"&&typeof xi().importScripts=="function"}async function PR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jR(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function zR(){return LT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebaseLocalStorageDb",BR=1,Wc="firebaseLocalStorage",PT="fbase_key";class Ql{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yh(s,t){return s.transaction([Wc],t?"readwrite":"readonly").objectStore(Wc)}function qR(){const s=indexedDB.deleteDatabase(UT);return new Ql(s).toPromise()}function fm(){const s=indexedDB.open(UT,BR);return new Promise((t,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Wc,{keyPath:PT})}catch(l){n(l)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Wc)?t(r):(r.close(),await qR(),t(await fm()))})})}async function Nv(s,t,n){const r=yh(s,!0).put({[PT]:t,value:n});return new Ql(r).toPromise()}async function HR(s,t){const n=yh(s,!1).get(t),r=await new Ql(n).toPromise();return r===void 0?null:r.value}function Dv(s,t){const n=yh(s,!0).delete(t);return new Ql(n).toPromise()}const GR=800,FR=3;class jT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>FR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(zR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PR(),!this.activeServiceWorker)return;this.sender=new LR(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||jR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fm();return await Nv(t,Zc,"1"),await Dv(t,Zc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nv(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>HR(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const u=yh(l,!1).getAll();return new Ql(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:l,value:u}of t)r.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!r.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const l of Array.from(r))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jT.type="LOCAL";const KR=jT;new Fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(s,t){return t?rs(t):(yt(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends NT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Wa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Wa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Wa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function QR(s){return CR(s.auth,new Gm(s),s.bypassAuthState)}function YR(s){const{auth:t,user:n}=s;return yt(n,t,"internal-error"),IR(n,new Gm(s),s.bypassAuthState)}async function XR(s){const{auth:t,user:n}=s;return yt(n,t,"internal-error"),RR(n,new Gm(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,n,r,l,u=!1){this.auth=t,this.resolver=r,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:l,tenantId:u,error:d,type:p}=t;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:n,sessionId:r,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return QR;case"linkViaPopup":case"linkViaRedirect":return XR;case"reauthViaPopup":case"reauthViaRedirect":return YR;default:ki(this.auth,"internal-error")}}resolve(t){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ls(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new Fl(2e3,1e4);async function JR(s,t,n){if(Zn(s.app))return Promise.reject(ei(s,"operation-not-supported-in-this-environment"));const r=ph(s);K1(s,t,qm);const l=zT(r,n);return new Pr(r,"signInViaPopup",t,l).executeNotNull()}class Pr extends BT{constructor(t,n,r,l,u){super(t,n,l,u),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){ls(this.filter.length===1,"Popup operations only handle one event");const t=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ei(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ei(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ei(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$R.get())};t()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="pendingRedirect",Pc=new Map;class WR extends BT{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Pc.get(this.auth._key());if(!t){try{const r=await tI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Pc.set(this.auth._key(),t)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tI(s,t){const n=iI(t),r=nI(s);if(!await r._isAvailable())return!1;const l=await r._get(n)==="true";return await r._remove(n),l}function eI(s,t){Pc.set(s._key(),t)}function nI(s){return rs(s._redirectPersistence)}function iI(s){return Uc(ZR,s.config.apiKey,s.name)}async function sI(s,t,n=!1){if(Zn(s.app))return Promise.reject(Br(s));const r=ph(s),l=zT(r,t),d=await new WR(r,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await r._persistUserIfCurrent(d.user),await r._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=600*1e3;class aI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!oI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!qT(t)){const l=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ei(this.auth,l))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=rI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ov(t))}saveEventToCache(t){this.cachedEventUids.add(Ov(t)),this.lastProcessedEventTime=Date.now()}}function Ov(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function qT({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function oI(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qT(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(s,t={}){return co(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cI=/^https?/;async function hI(s){if(s.config.emulator)return;const{authorizedDomains:t}=await lI(s);for(const n of t)try{if(fI(n))return}catch{}ki(s,"unauthorized-domain")}function fI(s){const t=cm(),{protocol:n,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&r===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===r}if(!cI.test(n))return!1;if(uI.test(s))return r===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new Fl(3e4,6e4);function Mv(){const s=xi().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function mI(s){return new Promise((t,n)=>{var l,u,d;function r(){Mv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mv(),n(ei(s,"network-request-failed"))},timeout:dI.get()})}if((u=(l=xi().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((d=xi().gapi)!=null&&d.load)r();else{const p=vR("iframefcb");return xi()[p]=()=>{gapi.load?r():n(ei(s,"network-request-failed"))},yR(`${_R()}?onload=${p}`).catch(y=>n(y))}}).catch(t=>{throw jc=null,t})}let jc=null;function pI(s){return jc=jc||mI(s),jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Fl(5e3,15e3),yI="__/auth/iframe",_I="emulator/auth/iframe",vI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EI(s){const t=s.config;yt(t.authDomain,s,"auth-domain-config-required");const n=t.emulator?Um(t,_I):`https://${s.config.authDomain}/${yI}`,r={apiKey:t.apiKey,appName:s.name,v:uo},l=TI.get(s.config.apiHost);l&&(r.eid=l);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${n}?${Hl(r).slice(1)}`}async function bI(s){const t=await pI(s),n=xi().gapi;return yt(n,s,"internal-error"),t.open({where:document.body,url:EI(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vI,dontclear:!0},r=>new Promise(async(l,u)=>{await r.restyle({setHideOnLeave:!1});const d=ei(s,"network-request-failed"),p=xi().setTimeout(()=>{u(d)},gI.get());function y(){xi().clearTimeout(p),l(r)}r.ping(y).then(y,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SI=500,wI=600,RI="_blank",II="http://localhost";class Vv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CI(s,t,n,r=SI,l=wI){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const y={...AI,width:r.toString(),height:l.toString(),top:u,left:d},_=Ze().toLowerCase();n&&(p=bT(_)?RI:n),TT(_)&&(t=t||II,y.scrollbars="yes");const E=Object.entries(y).reduce((k,[K,W])=>`${k}${K}=${W},`,"");if(uR(_)&&p!=="_self")return xI(t||"",p),new Vv(null);const A=window.open(t||"",p,E);yt(A,s,"popup-blocked");try{A.focus()}catch{}return new Vv(A)}function xI(s,t){const n=document.createElement("a");n.href=s,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="__/auth/handler",DI="emulator/auth/handler",OI=encodeURIComponent("fac");async function kv(s,t,n,r,l,u){yt(s.config.authDomain,s,"auth-domain-config-required"),yt(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:r,v:uo,eventId:l};if(t instanceof qm){t.setDefaultLanguage(s.languageCode),d.providerId=t.providerId||"",Iw(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,A]of Object.entries({}))d[E]=A}if(t instanceof Kl){const E=t.getScopes().filter(A=>A!=="");E.length>0&&(d.scopes=E.join(","))}s.tenantId&&(d.tid=s.tenantId);const p=d;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const y=await s._getAppCheckToken(),_=y?`#${OI}=${encodeURIComponent(y)}`:"";return`${MI(s)}?${Hl(p).slice(1)}${_}`}function MI({config:s}){return s.emulator?Um(s,DI):`https://${s.authDomain}/${NI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class VI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=sI,this._overrideRedirectResult=eI}async _openPopup(t,n,r,l){var d;ls((d=this.eventManagers[t._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await kv(t,n,r,cm(),l);return CI(t,u,Hm())}async _openRedirect(t,n,r,l){await this._originValidation(t);const u=await kv(t,n,r,cm(),l);return UR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(ls(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await bI(t),r=new aI(t);return n.register("authEvent",l=>(yt(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:r.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qd,{type:Qd},l=>{var d;const u=(d=l==null?void 0:l[0])==null?void 0:d[Qd];u!==void 0&&n(!!u),ki(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return IT()||ET()||zm()}}const kI=VI;var Lv="@firebase/auth",Uv="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PI(s){Vi(new ii("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=r.options;yt(d&&!d.includes(":"),"invalid-api-key",{appName:r.name});const y={apiKey:d,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CT(s)},_=new pR(r,l,u,y);return ER(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Vi(new ii("auth-internal",t=>{const n=ph(t.getProvider("auth").getImmediate());return(r=>new LI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(Lv,Uv,UI(s)),Pn(Lv,Uv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=300,zI=nT("authIdTokenMaxAge")||jI;let Pv=null;const BI=s=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zI)return;const l=n==null?void 0:n.token;Pv!==l&&(Pv=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function qI(s=Vm()){const t=Jr(s,"auth");if(t.isInitialized())return t.getImmediate();const n=TR(s,{popupRedirectResolver:kI,persistence:[KR,VR,kT]}),r=nT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const d=BI(u.toString());NR(n,d,()=>d(n.currentUser)),xR(n,p=>d(p))}}const l=tT("auth");return l&&bR(n,`http://${l}`),n}function HI(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}gR({loadJS(s){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=l=>{const u=ei("internal-error");u.customData=l,n(u)},r.type="text/javascript",r.charset="UTF-8",HI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PI("Browser");var jv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Js,HT;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,w){function C(){}C.prototype=w.prototype,x.F=w.prototype,x.prototype=new C,x.prototype.constructor=x,x.D=function(D,N,L){for(var R=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)R[ne-2]=arguments[ne];return w.prototype[N].apply(D,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(x,w,C){C||(C=0);const D=Array(16);if(typeof w=="string")for(var N=0;N<16;++N)D[N]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(N=0;N<16;++N)D[N]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=x.g[0],C=x.g[1],N=x.g[2];let L=x.g[3],R;R=w+(L^C&(N^L))+D[0]+3614090360&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(N^w&(C^N))+D[1]+3905402710&4294967295,L=w+(R<<12&4294967295|R>>>20),R=N+(C^L&(w^C))+D[2]+606105819&4294967295,N=L+(R<<17&4294967295|R>>>15),R=C+(w^N&(L^w))+D[3]+3250441966&4294967295,C=N+(R<<22&4294967295|R>>>10),R=w+(L^C&(N^L))+D[4]+4118548399&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(N^w&(C^N))+D[5]+1200080426&4294967295,L=w+(R<<12&4294967295|R>>>20),R=N+(C^L&(w^C))+D[6]+2821735955&4294967295,N=L+(R<<17&4294967295|R>>>15),R=C+(w^N&(L^w))+D[7]+4249261313&4294967295,C=N+(R<<22&4294967295|R>>>10),R=w+(L^C&(N^L))+D[8]+1770035416&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(N^w&(C^N))+D[9]+2336552879&4294967295,L=w+(R<<12&4294967295|R>>>20),R=N+(C^L&(w^C))+D[10]+4294925233&4294967295,N=L+(R<<17&4294967295|R>>>15),R=C+(w^N&(L^w))+D[11]+2304563134&4294967295,C=N+(R<<22&4294967295|R>>>10),R=w+(L^C&(N^L))+D[12]+1804603682&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(N^w&(C^N))+D[13]+4254626195&4294967295,L=w+(R<<12&4294967295|R>>>20),R=N+(C^L&(w^C))+D[14]+2792965006&4294967295,N=L+(R<<17&4294967295|R>>>15),R=C+(w^N&(L^w))+D[15]+1236535329&4294967295,C=N+(R<<22&4294967295|R>>>10),R=w+(N^L&(C^N))+D[1]+4129170786&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^N&(w^C))+D[6]+3225465664&4294967295,L=w+(R<<9&4294967295|R>>>23),R=N+(w^C&(L^w))+D[11]+643717713&4294967295,N=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(N^L))+D[0]+3921069994&4294967295,C=N+(R<<20&4294967295|R>>>12),R=w+(N^L&(C^N))+D[5]+3593408605&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^N&(w^C))+D[10]+38016083&4294967295,L=w+(R<<9&4294967295|R>>>23),R=N+(w^C&(L^w))+D[15]+3634488961&4294967295,N=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(N^L))+D[4]+3889429448&4294967295,C=N+(R<<20&4294967295|R>>>12),R=w+(N^L&(C^N))+D[9]+568446438&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^N&(w^C))+D[14]+3275163606&4294967295,L=w+(R<<9&4294967295|R>>>23),R=N+(w^C&(L^w))+D[3]+4107603335&4294967295,N=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(N^L))+D[8]+1163531501&4294967295,C=N+(R<<20&4294967295|R>>>12),R=w+(N^L&(C^N))+D[13]+2850285829&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^N&(w^C))+D[2]+4243563512&4294967295,L=w+(R<<9&4294967295|R>>>23),R=N+(w^C&(L^w))+D[7]+1735328473&4294967295,N=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(N^L))+D[12]+2368359562&4294967295,C=N+(R<<20&4294967295|R>>>12),R=w+(C^N^L)+D[5]+4294588738&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^N)+D[8]+2272392833&4294967295,L=w+(R<<11&4294967295|R>>>21),R=N+(L^w^C)+D[11]+1839030562&4294967295,N=L+(R<<16&4294967295|R>>>16),R=C+(N^L^w)+D[14]+4259657740&4294967295,C=N+(R<<23&4294967295|R>>>9),R=w+(C^N^L)+D[1]+2763975236&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^N)+D[4]+1272893353&4294967295,L=w+(R<<11&4294967295|R>>>21),R=N+(L^w^C)+D[7]+4139469664&4294967295,N=L+(R<<16&4294967295|R>>>16),R=C+(N^L^w)+D[10]+3200236656&4294967295,C=N+(R<<23&4294967295|R>>>9),R=w+(C^N^L)+D[13]+681279174&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^N)+D[0]+3936430074&4294967295,L=w+(R<<11&4294967295|R>>>21),R=N+(L^w^C)+D[3]+3572445317&4294967295,N=L+(R<<16&4294967295|R>>>16),R=C+(N^L^w)+D[6]+76029189&4294967295,C=N+(R<<23&4294967295|R>>>9),R=w+(C^N^L)+D[9]+3654602809&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^N)+D[12]+3873151461&4294967295,L=w+(R<<11&4294967295|R>>>21),R=N+(L^w^C)+D[15]+530742520&4294967295,N=L+(R<<16&4294967295|R>>>16),R=C+(N^L^w)+D[2]+3299628645&4294967295,C=N+(R<<23&4294967295|R>>>9),R=w+(N^(C|~L))+D[0]+4096336452&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~N))+D[7]+1126891415&4294967295,L=w+(R<<10&4294967295|R>>>22),R=N+(w^(L|~C))+D[14]+2878612391&4294967295,N=L+(R<<15&4294967295|R>>>17),R=C+(L^(N|~w))+D[5]+4237533241&4294967295,C=N+(R<<21&4294967295|R>>>11),R=w+(N^(C|~L))+D[12]+1700485571&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~N))+D[3]+2399980690&4294967295,L=w+(R<<10&4294967295|R>>>22),R=N+(w^(L|~C))+D[10]+4293915773&4294967295,N=L+(R<<15&4294967295|R>>>17),R=C+(L^(N|~w))+D[1]+2240044497&4294967295,C=N+(R<<21&4294967295|R>>>11),R=w+(N^(C|~L))+D[8]+1873313359&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~N))+D[15]+4264355552&4294967295,L=w+(R<<10&4294967295|R>>>22),R=N+(w^(L|~C))+D[6]+2734768916&4294967295,N=L+(R<<15&4294967295|R>>>17),R=C+(L^(N|~w))+D[13]+1309151649&4294967295,C=N+(R<<21&4294967295|R>>>11),R=w+(N^(C|~L))+D[4]+4149444226&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~N))+D[11]+3174756917&4294967295,L=w+(R<<10&4294967295|R>>>22),R=N+(w^(L|~C))+D[2]+718787259&4294967295,N=L+(R<<15&4294967295|R>>>17),R=C+(L^(N|~w))+D[9]+3951481745&4294967295,x.g[0]=x.g[0]+w&4294967295,x.g[1]=x.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+L&4294967295}r.prototype.v=function(x,w){w===void 0&&(w=x.length);const C=w-this.blockSize,D=this.C;let N=this.h,L=0;for(;L<w;){if(N==0)for(;L<=C;)l(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<w;)if(D[N++]=x.charCodeAt(L++),N==this.blockSize){l(this,D),N=0;break}}else for(;L<w;)if(D[N++]=x[L++],N==this.blockSize){l(this,D),N=0;break}}this.h=N,this.o+=w},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var w=1;w<x.length-8;++w)x[w]=0;w=this.o*8;for(var C=x.length-8;C<x.length;++C)x[C]=w&255,w/=256;for(this.v(x),x=Array(16),w=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)x[w++]=this.g[C]>>>D&255;return x};function u(x,w){var C=p;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=w(x)}function d(x,w){this.h=w;const C=[];let D=!0;for(let N=x.length-1;N>=0;N--){const L=x[N]|0;D&&L==w||(C[N]=L,D=!1)}this.g=C}var p={};function y(x){return-128<=x&&x<128?u(x,function(w){return new d([w|0],w<0?-1:0)}):new d([x|0],x<0?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return A;if(x<0)return it(_(-x));const w=[];let C=1;for(let D=0;x>=C;D++)w[D]=x/C|0,C*=4294967296;return new d(w,0)}function E(x,w){if(x.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(x.charAt(0)=="-")return it(E(x.substring(1),w));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(w,8));let D=A;for(let L=0;L<x.length;L+=8){var N=Math.min(8,x.length-L);const R=parseInt(x.substring(L,L+N),w);N<8?(N=_(Math.pow(w,N)),D=D.j(N).add(_(R))):(D=D.j(C),D=D.add(_(R)))}return D}var A=y(0),k=y(1),K=y(16777216);s=d.prototype,s.m=function(){if(nt(this))return-it(this).m();let x=0,w=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);x+=(D>=0?D:4294967296+D)*w,w*=4294967296}return x},s.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(W(this))return"0";if(nt(this))return"-"+it(this).toString(x);const w=_(Math.pow(x,6));var C=this;let D="";for(;;){const N=Ut(C,w).g;C=gt(C,N.j(w));let L=((C.g.length>0?C.g[0]:C.h)>>>0).toString(x);if(C=N,W(C))return L+D;for(;L.length<6;)L="0"+L;D=L+D}},s.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function W(x){if(x.h!=0)return!1;for(let w=0;w<x.g.length;w++)if(x.g[w]!=0)return!1;return!0}function nt(x){return x.h==-1}s.l=function(x){return x=gt(this,x),nt(x)?-1:W(x)?0:1};function it(x){const w=x.g.length,C=[];for(let D=0;D<w;D++)C[D]=~x.g[D];return new d(C,~x.h).add(k)}s.abs=function(){return nt(this)?it(this):this},s.add=function(x){const w=Math.max(this.g.length,x.g.length),C=[];let D=0;for(let N=0;N<=w;N++){let L=D+(this.i(N)&65535)+(x.i(N)&65535),R=(L>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);D=R>>>16,L&=65535,R&=65535,C[N]=R<<16|L}return new d(C,C[C.length-1]&-2147483648?-1:0)};function gt(x,w){return x.add(it(w))}s.j=function(x){if(W(this)||W(x))return A;if(nt(this))return nt(x)?it(this).j(it(x)):it(it(this).j(x));if(nt(x))return it(this.j(it(x)));if(this.l(K)<0&&x.l(K)<0)return _(this.m()*x.m());const w=this.g.length+x.g.length,C=[];for(var D=0;D<2*w;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<x.g.length;N++){const L=this.i(D)>>>16,R=this.i(D)&65535,ne=x.i(N)>>>16,fe=x.i(N)&65535;C[2*D+2*N]+=R*fe,_t(C,2*D+2*N),C[2*D+2*N+1]+=L*fe,_t(C,2*D+2*N+1),C[2*D+2*N+1]+=R*ne,_t(C,2*D+2*N+1),C[2*D+2*N+2]+=L*ne,_t(C,2*D+2*N+2)}for(x=0;x<w;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=w;x<2*w;x++)C[x]=0;return new d(C,0)};function _t(x,w){for(;(x[w]&65535)!=x[w];)x[w+1]+=x[w]>>>16,x[w]&=65535,w++}function bt(x,w){this.g=x,this.h=w}function Ut(x,w){if(W(w))throw Error("division by zero");if(W(x))return new bt(A,A);if(nt(x))return w=Ut(it(x),w),new bt(it(w.g),it(w.h));if(nt(w))return w=Ut(x,it(w)),new bt(it(w.g),w.h);if(x.g.length>30){if(nt(x)||nt(w))throw Error("slowDivide_ only works with positive integers.");for(var C=k,D=w;D.l(x)<=0;)C=Ft(C),D=Ft(D);var N=Pt(C,1),L=Pt(D,1);for(D=Pt(D,2),C=Pt(C,2);!W(D);){var R=L.add(D);R.l(x)<=0&&(N=N.add(C),L=R),D=Pt(D,1),C=Pt(C,1)}return w=gt(x,N.j(w)),new bt(N,w)}for(N=A;x.l(w)>=0;){for(C=Math.max(1,Math.floor(x.m()/w.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),L=_(C),R=L.j(w);nt(R)||R.l(x)>0;)C-=D,L=_(C),R=L.j(w);W(L)&&(L=k),N=N.add(L),x=gt(x,R)}return new bt(N,x)}s.B=function(x){return Ut(this,x).h},s.and=function(x){const w=Math.max(this.g.length,x.g.length),C=[];for(let D=0;D<w;D++)C[D]=this.i(D)&x.i(D);return new d(C,this.h&x.h)},s.or=function(x){const w=Math.max(this.g.length,x.g.length),C=[];for(let D=0;D<w;D++)C[D]=this.i(D)|x.i(D);return new d(C,this.h|x.h)},s.xor=function(x){const w=Math.max(this.g.length,x.g.length),C=[];for(let D=0;D<w;D++)C[D]=this.i(D)^x.i(D);return new d(C,this.h^x.h)};function Ft(x){const w=x.g.length+1,C=[];for(let D=0;D<w;D++)C[D]=x.i(D)<<1|x.i(D-1)>>>31;return new d(C,x.h)}function Pt(x,w){const C=w>>5;w%=32;const D=x.g.length-C,N=[];for(let L=0;L<D;L++)N[L]=w>0?x.i(L+C)>>>w|x.i(L+C+1)<<32-w:x.i(L+C);return new d(N,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,HT=r,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=E,Js=d}).apply(typeof jv<"u"?jv:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GT,Sl,FT,zc,dm,KT,QT,YT;(function(){var s,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function l(c,m){if(m)t:{var v=r;c=c.split(".");for(var b=0;b<c.length-1;b++){var P=c[b];if(!(P in v))break t;v=v[P]}c=c[c.length-1],b=v[c],m=m(b),m!=b&&m!=null&&t(v,c,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(c){return c||function(m){var v=[],b;for(b in m)Object.prototype.hasOwnProperty.call(m,b)&&v.push([b,m[b]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,v){return c.call.apply(c.bind,arguments)}function _(c,m,v){return _=y,_.apply(null,arguments)}function E(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function A(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(b,P,q){for(var tt=Array(arguments.length-2),At=2;At<arguments.length;At++)tt[At-2]=arguments[At];return m.prototype[P].apply(b,tt)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function K(c){const m=c.length;if(m>0){const v=Array(m);for(let b=0;b<m;b++)v[b]=c[b];return v}return[]}function W(c,m){for(let b=1;b<arguments.length;b++){const P=arguments[b];var v=typeof P;if(v=v!="object"?v:P?Array.isArray(P)?"array":v:"null",v=="array"||v=="object"&&typeof P.length=="number"){v=c.length||0;const q=P.length||0;c.length=v+q;for(let tt=0;tt<q;tt++)c[v+tt]=P[tt]}else c.push(P)}}class nt{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function it(c){d.setTimeout(()=>{throw c},0)}function gt(){var c=x;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class _t{constructor(){this.h=this.g=null}add(m,v){const b=bt.get();b.set(m,v),this.h?this.h.next=b:this.g=b,this.h=b}}var bt=new nt(()=>new Ut,c=>c.reset());class Ut{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ft,Pt=!1,x=new _t,w=()=>{const c=Promise.resolve(void 0);Ft=()=>{c.then(C)}};function C(){for(var c;c=gt();){try{c.h.call(c.g)}catch(v){it(v)}var m=bt;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}Pt=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return c})();function R(c){return/^[\s\xa0]*$/.test(c)}function ne(c,m){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}A(ne,N),ne.prototype.init=function(c,m){const v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),G=0;function st(c,m,v,b,P){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!b,this.ha=P,this.key=++G,this.da=this.fa=!1}function ht(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Dt(c,m,v){for(const b in c)m.call(v,c[b],b,c)}function zt(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function M(c){const m={};for(const v in c)m[v]=c[v];return m}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rt(c,m){let v,b;for(let P=1;P<arguments.length;P++){b=arguments[P];for(v in b)c[v]=b[v];for(let q=0;q<Y.length;q++)v=Y[q],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function V(c){this.src=c,this.g={},this.h=0}V.prototype.add=function(c,m,v,b,P){const q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);const tt=at(c,m,b,P);return tt>-1?(m=c[tt],v||(m.fa=!1)):(m=new st(m,this.src,q,!!b,P),m.fa=v,c.push(m)),m};function Z(c,m){const v=m.type;if(v in c.g){var b=c.g[v],P=Array.prototype.indexOf.call(b,m,void 0),q;(q=P>=0)&&Array.prototype.splice.call(b,P,1),q&&(ht(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function at(c,m,v,b){for(let P=0;P<c.length;++P){const q=c[P];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==b)return P}return-1}var et="closure_lm_"+(Math.random()*1e6|0),Rt={};function jt(c,m,v,b,P){if(Array.isArray(m)){for(let q=0;q<m.length;q++)jt(c,m[q],v,b,P);return null}return v=vo(v),c&&c[fe]?c.J(m,v,p(b)?!!b.capture:!1,P):jn(c,m,v,!1,b,P)}function jn(c,m,v,b,P,q){if(!m)throw Error("Invalid event type");const tt=p(P)?!!P.capture:!!P;let At=or(c);if(At||(c[et]=At=new V(c)),v=At.add(m,v,b,tt,q),v.proxy)return v;if(b=hs(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)L||(P=tt),P===void 0&&(P=!1),c.addEventListener(m.toString(),b,P);else if(c.attachEvent)c.attachEvent(ai(m.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function hs(){function c(v){return m.call(c.src,c.listener,v)}const m=yo;return c}function ia(c,m,v,b,P){if(Array.isArray(m))for(var q=0;q<m.length;q++)ia(c,m[q],v,b,P);else b=p(b)?!!b.capture:!!b,v=vo(v),c&&c[fe]?(c=c.i,q=String(m).toString(),q in c.g&&(m=c.g[q],v=at(m,v,b,P),v>-1&&(ht(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[q],c.h--)))):c&&(c=or(c))&&(m=c.g[m.toString()],c=-1,m&&(c=at(m,v,b,P)),(v=c>-1?m[c]:null)&&sa(v))}function sa(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[fe])Z(m.i,c);else{var v=c.type,b=c.proxy;m.removeEventListener?m.removeEventListener(v,b,c.capture):m.detachEvent?m.detachEvent(ai(v),b):m.addListener&&m.removeListener&&m.removeListener(b),(v=or(m))?(Z(v,c),v.h==0&&(v.src=null,m[et]=null)):ht(c)}}}function ai(c){return c in Rt?Rt[c]:Rt[c]="on"+c}function yo(c,m){if(c.da)c=!0;else{m=new ne(m,this);const v=c.listener,b=c.ha||c.src;c.fa&&sa(c),c=v.call(b,m)}return c}function or(c){return c=c[et],c instanceof V?c:null}var _o="__closure_events_fn_"+(Math.random()*1e9>>>0);function vo(c){return typeof c=="function"?c:(c[_o]||(c[_o]=function(m){return c.handleEvent(m)}),c[_o])}function _e(){D.call(this),this.i=new V(this),this.M=this,this.G=null}A(_e,D),_e.prototype[fe]=!0,_e.prototype.removeEventListener=function(c,m,v,b){ia(this,c,m,v,b)};function De(c,m){var v,b=c.G;if(b)for(v=[];b;b=b.G)v.push(b);if(c=c.M,b=m.type||m,typeof m=="string")m=new N(m,c);else if(m instanceof N)m.target=m.target||c;else{var P=m;m=new N(b,c),rt(m,P)}P=!0;let q,tt;if(v)for(tt=v.length-1;tt>=0;tt--)q=m.g=v[tt],P=fs(q,b,!0,m)&&P;if(q=m.g=c,P=fs(q,b,!0,m)&&P,P=fs(q,b,!1,m)&&P,v)for(tt=0;tt<v.length;tt++)q=m.g=v[tt],P=fs(q,b,!1,m)&&P}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let b=0;b<v.length;b++)ht(v[b]);delete c.g[m],c.h--}}this.G=null},_e.prototype.J=function(c,m,v,b){return this.i.add(String(c),m,!1,v,b)},_e.prototype.K=function(c,m,v,b){return this.i.add(String(c),m,!0,v,b)};function fs(c,m,v,b){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let q=0;q<m.length;++q){const tt=m[q];if(tt&&!tt.da&&tt.capture==v){const At=tt.listener,me=tt.ha||tt.src;tt.fa&&Z(c.i,tt),P=At.call(me,b)!==!1&&P}}return P&&!b.defaultPrevented}function Mh(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:d.setTimeout(c,m||0)}function tu(c){c.g=Mh(()=>{c.g=null,c.i&&(c.i=!1,tu(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class tn extends D{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:tu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(c){D.call(this),this.h=c,this.g={}}A(lr,D);var To=[];function Eo(c){Dt(c.g,function(m,v){this.g.hasOwnProperty(v)&&sa(m)},c),c.g={}}lr.prototype.N=function(){lr.Z.N.call(this),Eo(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=d.JSON.stringify,Vh=d.JSON.parse,eu=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function nu(){}function iu(){}var zn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pe(){N.call(this,"d")}A(Pe,N);function An(){N.call(this,"c")}A(An,N);var de={},su=null;function ra(){return su=su||new _e}de.Ia="serverreachability";function ru(c){N.call(this,de.Ia,c)}A(ru,N);function oi(c){const m=ra();De(m,new ru(m))}de.STAT_EVENT="statevent";function ur(c,m){N.call(this,de.STAT_EVENT,c),this.stat=m}A(ur,N);function ve(c){const m=ra();De(m,new ur(m,c))}de.Ja="timingevent";function li(c,m){N.call(this,de.Ja,c),this.size=m}A(li,N);function ui(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function Bn(){this.g=!0}Bn.prototype.ua=function(){this.g=!1};function kh(c,m,v,b,P,q){c.info(function(){if(c.g)if(q){var tt="",At=q.split("&");for(let Ht=0;Ht<At.length;Ht++){var me=At[Ht].split("=");if(me.length>1){const oe=me[0];me=me[1];const In=oe.split("_");tt=In.length>=2&&In[1]=="type"?tt+(oe+"="+me+"&"):tt+(oe+"=redacted&")}}}else tt=null;else tt=q;return"XMLHTTP REQ ("+b+") [attempt "+P+"]: "+m+`
`+v+`
`+tt})}function au(c,m,v,b,P,q,tt){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+P+"]: "+m+`
`+v+`
`+q+" "+tt})}function ci(c,m,v,b){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Lh(c,v)+(b?" "+b:"")})}function cr(c,m){c.info(function(){return"TIMEOUT: "+m})}Bn.prototype.info=function(){};function Lh(c,m){if(!c.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(c=0;c<q.length;c++)if(Array.isArray(q[c])){var v=q[c];if(!(v.length<2)){var b=v[1];if(Array.isArray(b)&&!(b.length<1)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(let tt=1;tt<b.length;tt++)b[tt]=""}}}}return ds(q)}catch{return m}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ao;function fr(){}A(fr,nu),fr.prototype.g=function(){return new XMLHttpRequest},Ao=new fr;function Pi(c){return encodeURIComponent(String(c))}function ou(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function qn(c,m,v,b){this.j=c,this.i=m,this.l=v,this.S=b||1,this.V=new lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hn}function Hn(){this.i=null,this.g="",this.h=!1}var Te={},Ve={};function hi(c,m,v){c.M=1,c.A=dr(be(m)),c.u=v,c.R=!0,aa(c,null)}function aa(c,m){c.F=Date.now(),fi(c),c.B=be(c.A);var v=c.B,b=c.S;Array.isArray(b)||(b=[String(b)]),ca(v.i,"t",b),c.C=0,v=c.j.L,c.h=new Hn,c.g=bu(c.j,v?m:null,!c.u),c.P>0&&(c.O=new tn(_(c.Y,c,c.g),c.P)),m=c.V,v=c.g,b=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(To[0]=P.toString()),P=To);for(let q=0;q<P.length;q++){const tt=jt(v,P[q],b||m.handleEvent,!1,m.h||m);if(!tt)break;m.g[tt.key]=tt}m=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),oi(),kh(c.i,c.v,c.B,c.l,c.S,c.u)}qn.prototype.ba=function(c){c=c.target;const m=this.O;m&&Kn(c)==3?m.j():this.Y(c)},qn.prototype.Y=function(c){try{if(c==this.g)t:{const At=Kn(this.g),me=this.g.ya(),Ht=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||je(this.g)))){this.K||At!=4||me==7||(me==8||Ht<=0?oi(3):oi(2)),di(this);var m=this.g.ca();this.X=m;var v=Uh(this);if(this.o=m==200,au(this.i,this.v,this.B,this.l,this.S,At,m),this.o){if(this.U&&!this.L){e:{if(this.g){var b,P=this.g;if((b=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(b)){var q=b;break e}}q=null}if(c=q)ci(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mi(this,c);else{this.o=!1,this.m=3,ve(12),dn(this),Sn(this);break t}}if(this.R){c=!0;let oe;for(;!this.K&&this.C<v.length;)if(oe=uu(this,v),oe==Ve){At==4&&(this.m=4,ve(14),c=!1),ci(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==Te){this.m=4,ve(15),ci(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else ci(this.i,this.l,oe,null),mi(this,oe);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||v.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)ci(this.i,this.l,v,"[Invalid Chunked Response]"),dn(this),Sn(this);else if(v.length>0&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.aa&&!tt.P&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Po(tt),tt.P=!0,ve(11))}}else ci(this.i,this.l,v,null),mi(this,v);At==4&&dn(this),this.o&&!this.K&&(At==4?_u(this.j,this):(this.o=!1,fi(this)))}else zi(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),dn(this),Sn(this)}}}catch{}finally{}};function Uh(c){if(!lu(c))return c.g.la();const m=je(c.g);if(m==="")return"";let v="";const b=m.length,P=Kn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return dn(c),Sn(c),"";c.h.i=new d.TextDecoder}for(let q=0;q<b;q++)c.h.h=!0,v+=c.h.i.decode(m[q],{stream:!(P&&q==b-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function lu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function uu(c,m){var v=c.C,b=m.indexOf(`
`,v);return b==-1?Ve:(v=Number(m.substring(v,b)),isNaN(v)?Te:(b+=1,b+v>m.length?Ve:(m=m.slice(b,b+v),c.C=b+v,m)))}qn.prototype.cancel=function(){this.K=!0,dn(this)};function fi(c){c.T=Date.now()+c.H,oa(c,c.H)}function oa(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ui(_(c.aa,c),m)}function di(c){c.D&&(d.clearTimeout(c.D),c.D=null)}qn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(cr(this.i,this.B),this.M!=2&&(oi(),ve(17)),dn(this),this.m=2,Sn(this)):oa(this,this.T-c)};function Sn(c){c.j.I==0||c.K||_u(c.j,c)}function dn(c){di(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Eo(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function mi(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||gi(v.h,c))){if(!c.L&&gi(v.h,c)&&v.I==3){try{var b=v.Ba.g.parse(m)}catch{b=null}if(Array.isArray(b)&&b.length==3){var P=b;if(P[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)pa(v),Es(v);else break t;Tr(v),ve(18)}}else v.xa=P[1],0<v.xa-v.K&&P[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=ui(_(v.Va,v),6e3));pi(v.h)<=1&&v.ta&&(v.ta=void 0)}else bi(v,11)}else if((c.L||v.g==c)&&pa(v),!R(m))for(P=v.Ba.g.parse(m),m=0;m<P.length;m++){let Ht=P[m];const oe=Ht[0];if(!(oe<=v.K))if(v.K=oe,Ht=Ht[1],v.I==2)if(Ht[0]=="c"){v.M=Ht[1],v.ba=Ht[2];const In=Ht[3];In!=null&&(v.ka=In,v.j.info("VER="+v.ka));const Ai=Ht[4];Ai!=null&&(v.za=Ai,v.j.info("SVER="+v.za));const Qn=Ht[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(b=1.5*Qn,v.O=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Yn=c.g;if(Yn){const Er=Yn.g?Yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Er){var q=b.h;q.g||Er.indexOf("spdy")==-1&&Er.indexOf("quic")==-1&&Er.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ro(q,q.h),q.h=null))}if(b.G){const ga=Yn.g?Yn.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(b.wa=ga,Qt(b.J,b.G,ga))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),b=v;var tt=c;if(b.na=Eu(b,b.L?b.ba:null,b.W),tt.L){Io(b.h,tt);var At=tt,me=b.O;me&&(At.H=me),At.D&&(di(At),fi(At)),b.g=tt}else gu(b);v.i.length>0&&Ei(v)}else Ht[0]!="stop"&&Ht[0]!="close"||bi(v,7);else v.I==3&&(Ht[0]=="stop"||Ht[0]=="close"?Ht[0]=="stop"?bi(v,7):Lo(v):Ht[0]!="noop"&&v.l&&v.l.qa(Ht),v.A=0)}}oi(4)}catch{}}var Ee=class{constructor(c,m){this.g=c,this.map=m}};function So(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function pi(c){return c.h?1:c.g?c.g.size:0}function gi(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ro(c,m){c.g?c.g.add(m):c.h=m}function Io(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}So.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Co(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return K(c.i)}var cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function la(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const b=c[v].indexOf("=");let P,q=null;b>=0?(P=c[v].substring(0,b),q=c[v].substring(b+1)):P=c[v],m(P,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function mn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof mn?(this.l=c.l,ke(this,c.j),this.o=c.o,this.g=c.g,ms(this,c.u),this.h=c.h,xo(this,mu(c.i)),this.m=c.m):c&&(m=String(c).match(cu))?(this.l=!1,ke(this,m[1]||"",!0),this.o=yi(m[2]||""),this.g=yi(m[3]||"",!0),ms(this,m[4]),this.h=yi(m[5]||"",!0),xo(this,m[6]||"",!0),this.m=yi(m[7]||"")):(this.l=!1,this.i=new gs(null,this.l))}mn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(mr(m,ua,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(mr(m,ua,!0),"@"),c.push(Pi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(mr(v,v.charAt(0)=="/"?No:hu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",mr(v,fu)),c.join("")},mn.prototype.resolve=function(c){const m=be(this);let v=!!c.j;v?ke(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var b=c.h;if(v)ms(m,c.u);else if(v=!!c.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var P=m.h.lastIndexOf("/");P!=-1&&(b=m.h.slice(0,P+1)+b)}if(P=b,P==".."||P==".")b="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){b=P.lastIndexOf("/",0)==0,P=P.split("/");const q=[];for(let tt=0;tt<P.length;){const At=P[tt++];At=="."?b&&tt==P.length&&q.push(""):At==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),b&&tt==P.length&&q.push("")):(q.push(At),b=!0)}b=q.join("/")}else b=P}return v?m.h=b:v=c.i.toString()!=="",v?xo(m,mu(c.i)):v=!!c.m,v&&(m.m=c.m),m};function be(c){return new mn(c)}function ke(c,m,v){c.j=v?yi(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function ms(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function xo(c,m,v){m instanceof gs?(c.i=m,ha(c.i,c.l)):(v||(m=mr(m,ps)),c.i=new gs(m,c.l))}function Qt(c,m,v){c.i.set(m,v)}function dr(c){return Qt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function yi(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function mr(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,rn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function rn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ua=/[#\/\?@]/g,hu=/[#\?:]/g,No=/[#\?]/g,ps=/[#\?@]/g,fu=/#/g;function gs(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function an(c){c.g||(c.g=new Map,c.h=0,c.i&&la(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}s=gs.prototype,s.add=function(c,m){an(this),this.i=null,c=ys(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function du(c,m){an(c),m=ys(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Do(c,m){return an(c),m=ys(c,m),c.g.has(m)}s.forEach=function(c,m){an(this),this.g.forEach(function(v,b){v.forEach(function(P){c.call(m,P,b,this)},this)},this)};function Oo(c,m){an(c);let v=[];if(typeof m=="string")Do(c,m)&&(v=v.concat(c.g.get(ys(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}s.set=function(c,m){return an(this),this.i=null,c=ys(this,c),Do(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},s.get=function(c,m){return c?(c=Oo(this,c),c.length>0?String(c[0]):m):m};function ca(c,m,v){du(c,m),v.length>0&&(c.i=null,c.g.set(ys(c,m),K(v)),c.h+=v.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let b=0;b<m.length;b++){var v=m[b];const P=Pi(v);v=Oo(this,v);for(let q=0;q<v.length;q++){let tt=P;v[q]!==""&&(tt+="="+Pi(v[q])),c.push(tt)}}return this.i=c.join("&")};function mu(c){const m=new gs;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function ys(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function ha(c,m){m&&!c.j&&(an(c),c.i=null,c.g.forEach(function(v,b){const P=b.toLowerCase();b!=P&&(du(this,b),ca(this,P,v))},c)),c.j=m}function Gn(c,m){const v=new Bn;if(d.Image){const b=new Image;b.onload=E(wn,v,"TestLoadImage: loaded",!0,m,b),b.onerror=E(wn,v,"TestLoadImage: error",!1,m,b),b.onabort=E(wn,v,"TestLoadImage: abort",!1,m,b),b.ontimeout=E(wn,v,"TestLoadImage: timeout",!1,m,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else m(!1)}function Mo(c,m){const v=new Bn,b=new AbortController,P=setTimeout(()=>{b.abort(),wn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:b.signal}).then(q=>{clearTimeout(P),q.ok?wn(v,"TestPingServer: ok",!0,m):wn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),wn(v,"TestPingServer: error",!1,m)})}function wn(c,m,v,b,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),b(v)}catch{}}function _s(){this.g=new eu}function _i(c){this.i=c.Sb||null,this.h=c.ab||!1}A(_i,nu),_i.prototype.g=function(){return new pr(this.i,this.h)};function pr(c,m){_e.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(pr,_e),s=pr.prototype,s.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Fn(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||d).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fa(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function fa(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?vs(this):Fn(this),this.readyState==3&&fa(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,vs(this))},s.Na=function(c){this.g&&(this.response=c,vs(this))},s.ga=function(){this.g&&vs(this)};function vs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Fn(c)}s.setRequestHeader=function(c,m){this.A.append(c,m)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Fn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Rn(c){let m="";return Dt(c,function(v,b){m+=b,m+=":",m+=v,m+=`\r
`}),m}function gr(c,m,v){t:{for(b in v){var b=!1;break t}b=!0}b||(v=Rn(v),typeof c=="string"?v!=null&&Pi(v):Qt(c,m,v))}function $t(c){_e.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A($t,_e);var vi=/^https?$/i,Vo=["POST","PUT"];s=$t.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,m,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ao.g(),this.g.onreadystatechange=k(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){yr(this,q);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var P in b)v.set(P,b[P]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const q of b.keys())v.set(q,b.get(q));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),P=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Vo,m,void 0)>=0)||b||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,tt]of v)this.g.setRequestHeader(q,tt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(q){yr(this,q)}};function yr(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,ko(c),ji(c)}function ko(c){c.A||(c.A=!0,De(c,"complete"),De(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,De(this,"complete"),De(this,"abort"),ji(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),$t.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?_r(this):this.Xa())},s.Xa=function(){_r(this)};function _r(c){if(c.h&&typeof u<"u"){if(c.v&&Kn(c)==4)setTimeout(c.Ca.bind(c),0);else if(De(c,"readystatechange"),Kn(c)==4){c.h=!1;try{const q=c.ca();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var b;if(b=q===0){let tt=String(c.D).match(cu)[1]||null;!tt&&d.self&&d.self.location&&(tt=d.self.location.protocol.slice(0,-1)),b=!vi.test(tt?tt.toLowerCase():"")}v=b}if(v)De(c,"complete"),De(c,"success");else{c.o=6;try{var P=Kn(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",ko(c)}}finally{ji(c)}}}}function ji(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||De(c,"ready");try{v.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Kn(c){return c.g?c.g.readyState:0}s.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Vh(m)}};function je(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function zi(c){const m={};c=(c.g&&Kn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(R(c[b]))continue;var v=ou(c[b]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[P]||[];m[P]=q,q.push(v)}zt(m,function(b){return b.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Ts(c){this.za=0,this.i=[],this.j=new Bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ti("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ti("baseRetryDelayMs",5e3,c),this.Za=Ti("retryDelaySeedMs",1e4,c),this.Ta=Ti("forwardChannelMaxRetries",2,c),this.va=Ti("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new So(c&&c.concurrentRequestLimit),this.Ba=new _s,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ts.prototype,s.ka=8,s.I=1,s.connect=function(c,m,v,b){ve(0),this.W=c,this.H=m||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.J=Eu(this,null,this.W),Ei(this)};function Lo(c){if(da(c),c.I==3){var m=c.V++,v=be(c.J);if(Qt(v,"SID",c.M),Qt(v,"RID",m),Qt(v,"TYPE","terminate"),vr(c,v),m=new qn(c,c.j,m),m.M=2,m.A=dr(be(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.A,v=!0),v||(m.g=bu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),fi(m)}Tu(c)}function Es(c){c.g&&(Po(c),c.g.cancel(),c.g=null)}function da(c){Es(c),c.v&&(d.clearTimeout(c.v),c.v=null),pa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ei(c){if(!wo(c.h)&&!c.m){c.m=!0;var m=c.Ea;Ft||w(),Pt||(Ft(),Pt=!0),x.add(m,c),c.D=0}}function ma(c,m){return pi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ui(_(c.Ea,c,m),vu(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new qn(this,this.j,c);let q=this.o;if(this.U&&(q?(q=M(q),rt(q,this.U)):q=this.U),this.u!==null||this.R||(P.J=q,q=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break e}b=void 0}if(b===void 0)break;if(m+=b,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=pu(this,P,m),v=be(this.J),Qt(v,"RID",c),Qt(v,"CVER",22),this.G&&Qt(v,"X-HTTP-Session-Id",this.G),vr(this,v),q&&(this.R?m="headers="+Pi(Rn(q))+"&"+m:this.u&&gr(v,this.u,q)),Ro(this.h,P),this.Ra&&Qt(v,"TYPE","init"),this.S?(Qt(v,"$req",m),Qt(v,"SID","null"),P.U=!0,hi(P,v,null)):hi(P,v,m),this.I=2}}else this.I==3&&(c?Uo(this,c):this.i.length==0||wo(this.h)||Uo(this))};function Uo(c,m){var v;m?v=m.l:v=c.V++;const b=be(c.J);Qt(b,"SID",c.M),Qt(b,"RID",v),Qt(b,"AID",c.K),vr(c,b),c.u&&c.o&&gr(b,c.u,c.o),v=new qn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=pu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ro(c.h,v),hi(v,b,m)}function vr(c,m){c.H&&Dt(c.H,function(v,b){Qt(m,b,v)}),c.l&&Dt({},function(v,b){Qt(m,b,v)})}function pu(c,m,v){v=Math.min(c.i.length,v);const b=c.l?_(c.l.Ka,c.l,c):null;t:{var P=c.i;let At=-1;for(;;){const me=["count="+v];At==-1?v>0?(At=P[0].g,me.push("ofs="+At)):At=0:me.push("ofs="+At);let Ht=!0;for(let oe=0;oe<v;oe++){var q=P[oe].g;const In=P[oe].map;if(q-=At,q<0)At=Math.max(0,P[oe].g-100),Ht=!1;else try{q="req"+q+"_"||"";try{var tt=In instanceof Map?In:Object.entries(In);for(const[Ai,Qn]of tt){let Yn=Qn;p(Qn)&&(Yn=ds(Qn)),me.push(q+Ai+"="+encodeURIComponent(Yn))}}catch(Ai){throw me.push(q+"type="+encodeURIComponent("_badmap")),Ai}}catch{b&&b(In)}}if(Ht){tt=me.join("&");break t}}tt=void 0}return c=c.i.splice(0,v),m.G=c,tt}function gu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;Ft||w(),Pt||(Ft(),Pt=!0),x.add(m,c),c.A=0}}function Tr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ui(_(c.Da,c),vu(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,yu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ui(_(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),Es(this),yu(this))};function Po(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function yu(c){c.g=new qn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=be(c.na);Qt(m,"RID","rpc"),Qt(m,"SID",c.M),Qt(m,"AID",c.K),Qt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Qt(m,"TO",c.ia),Qt(m,"TYPE","xmlhttp"),vr(c,m),c.u&&c.o&&gr(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=dr(be(m)),v.u=null,v.R=!0,aa(v,c)}s.Va=function(){this.C!=null&&(this.C=null,Es(this),Tr(this),ve(19))};function pa(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function _u(c,m){var v=null;if(c.g==m){pa(c),Po(c),c.g=null;var b=2}else if(gi(c.h,m))v=m.G,Io(c.h,m),b=1;else return;if(c.I!=0){if(m.o)if(b==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var P=c.D;b=ra(),De(b,new li(b,v)),Ei(c)}else gu(c);else if(P=m.m,P==3||P==0&&m.X>0||!(b==1&&ma(c,m)||b==2&&Tr(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),P){case 1:bi(c,5);break;case 4:bi(c,10);break;case 3:bi(c,6);break;default:bi(c,2)}}}function vu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function bi(c,m){if(c.j.info("Error code "+m),m==2){var v=_(c.bb,c),b=c.Ua;const P=!b;b=new mn(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ke(b,"https"),dr(b),P?Gn(b.toString(),v):Mo(b.toString(),v)}else ve(2);c.I=0,c.l&&c.l.pa(m),Tu(c),da(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Tu(c){if(c.I=0,c.ja=[],c.l){const m=Co(c.h);(m.length!=0||c.i.length!=0)&&(W(c.ja,m),W(c.ja,c.i),c.h.i.length=0,K(c.i),c.i.length=0),c.l.oa()}}function Eu(c,m,v){var b=v instanceof mn?be(v):new mn(v);if(b.g!="")m&&(b.g=m+"."+b.g),ms(b,b.u);else{var P=d.location;b=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const q=new mn(null);b&&ke(q,b),m&&(q.g=m),P&&ms(q,P),v&&(q.h=v),b=q}return v=c.G,m=c.wa,v&&m&&Qt(b,v,m),Qt(b,"VER",c.ka),vr(c,b),b}function bu(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new $t(new _i({ab:v})):new $t(c.ma),m.Fa(c.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}s=Au.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function bs(){}bs.prototype.g=function(c,m){return new en(c,m)};function en(c,m){_e.call(this),this.g=new Ts(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!R(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Bi(this)}A(en,_e),en.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Lo(this.g)},en.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=ds(c),c=v);m.i.push(new Ee(m.Ya++,c)),m.I==3&&Ei(m)},en.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,en.Z.N.call(this)};function Su(c){Pe.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const v in m){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}A(Su,Pe);function wu(){An.call(this),this.status=1}A(wu,An);function Bi(c){this.g=c}A(Bi,Au),Bi.prototype.ra=function(){De(this.g,"a")},Bi.prototype.qa=function(c){De(this.g,new Su(c))},Bi.prototype.pa=function(c){De(this.g,new wu)},Bi.prototype.oa=function(){De(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,YT=function(){return new bs},QT=function(){return ra()},KT=de,dm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,zc=hr,bo.COMPLETE="complete",FT=bo,iu.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",_e.prototype.listen=_e.prototype.J,Sl=iu,$t.prototype.listenOnce=$t.prototype.K,$t.prototype.getLastError=$t.prototype.Ha,$t.prototype.getLastErrorCode=$t.prototype.ya,$t.prototype.getStatus=$t.prototype.ca,$t.prototype.getResponseJson=$t.prototype.La,$t.prototype.getResponseText=$t.prototype.la,$t.prototype.send=$t.prototype.ea,$t.prototype.setWithCredentials=$t.prototype.Fa,GT=$t}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="12.13.0";function GI(s){ho=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new mh("@firebase/firestore");function Qa(){return Kr.logLevel}function ot(s,...t){if(Kr.logLevel<=Vt.DEBUG){const n=t.map(Fm);Kr.debug(`Firestore (${ho}): ${s}`,...n)}}function us(s,...t){if(Kr.logLevel<=Vt.ERROR){const n=t.map(Fm);Kr.error(`Firestore (${ho}): ${s}`,...n)}}function Qr(s,...t){if(Kr.logLevel<=Vt.WARN){const n=t.map(Fm);Kr.warn(`Firestore (${ho}): ${s}`,...n)}}function Fm(s){if(typeof s=="string")return s;try{return(function(n){return JSON.stringify(n)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(s,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,XT(s,r,n)}function XT(s,t,n){let r=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${t} (ID: ${s.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw us(r),new Error(r)}function Kt(s,t,n,r){let l="Unexpected state";typeof n=="string"?l=n:r=n,s||XT(t,l,r)}function Et(s,t){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends ri{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class FI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n($e.UNAUTHENTICATED)))}shutdown(){}}class KI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class QI{constructor(t){this.t=t,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Kt(this.o===void 0,42304);let r=this.i;const l=y=>this.i!==r?(r=this.i,n(y)):Promise.resolve();let u=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new qr,t.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await l(this.currentUser)}))},p=y=>{ot("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(ot("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new qr)}}),0),d()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(ot("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Kt(typeof r.accessToken=="string",31837,{l:r}),new $T(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Kt(t===null||typeof t=="string",2055,{h:t}),new $e(t)}}class YI{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class XI{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new YI(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n($e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $I{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Kt(this.o===void 0,3512);const r=u=>{u.error!=null&&ot("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,ot("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>r(u)))};const l=u=>{ot("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>l(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):ot("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Kt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<s;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const l=JI(40);for(let u=0;u<l.length;++u)r.length<20&&l[u]<n&&(r+=t.charAt(l[u]%62))}return r}}function xt(s,t){return s<t?-1:s>t?1:0}function mm(s,t){const n=Math.min(s.length,t.length);for(let r=0;r<n;r++){const l=s.charAt(r),u=t.charAt(r);if(l!==u)return Yd(l)===Yd(u)?xt(l,u):Yd(l)?1:-1}return xt(s.length,t.length)}const ZI=55296,WI=57343;function Yd(s){const t=s.charCodeAt(0);return t>=ZI&&t<=WI}function ro(s,t,n){return s.length===t.length&&s.every(((r,l)=>n(r,t[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="__name__";class Ci{constructor(t,n,r){n===void 0?n=0:n>t.length&&pt(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&pt(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ci?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let l=0;l<r;l++){const u=Ci.compareSegments(t.get(l),n.get(l));if(u!==0)return u}return xt(t.length,n.length)}static compareSegments(t,n){const r=Ci.isNumericId(t),l=Ci.isNumericId(n);return r&&!l?-1:!r&&l?1:r&&l?Ci.extractNumericId(t).compare(Ci.extractNumericId(n)):mm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Js.fromString(t.substring(4,t.length-2))}}class ie extends Ci{construct(t,n,r){return new ie(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new lt($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((l=>l.length>0)))}return new ie(n)}static emptyPath(){return new ie([])}}const t2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Ci{construct(t,n,r){return new Fe(t,n,r)}static isValidIdentifier(t){return t2.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bv}static keyField(){return new Fe([Bv])}static fromServerFormat(t){const n=[];let r="",l=0;const u=()=>{if(r.length===0)throw new lt($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new lt($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new lt($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=y,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(r+=p,l++):(u(),l++)}if(u(),d)throw new lt($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(ie.fromString(t))}static fromName(t){return new dt(ie.fromString(t).popFirst(5))}static empty(){return new dt(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new ie(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(s,t,n){if(!n)throw new lt($.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function e2(s,t,n,r){if(t===!0&&r===!0)throw new lt($.INVALID_ARGUMENT,`${s} and ${n} cannot be used together.`)}function qv(s){if(!dt.isDocumentKey(s))throw new lt($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Hv(s){if(dt.isDocumentKey(s))throw new lt($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function ZT(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function _h(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":pt(12329,{type:typeof s})}function Hr(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new lt($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_h(s);throw new lt($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(s,t){const n={typeString:s};return t&&(n.value=t),n}function Yl(s,t){if(!ZT(s))throw new lt($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const l=t[r].typeString,u="value"in t[r]?{value:t[r].value}:void 0;if(!(r in s)){n=`JSON missing required field: '${r}'`;break}const d=s[r];if(l&&typeof d!==l){n=`JSON field '${r}' must be a ${l}.`;break}if(u!==void 0&&d!==u.value){n=`Expected '${r}' field to equal '${u.value}'`;break}}if(n)throw new lt($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=-62135596800,Fv=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(t){return ae.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Fv);return new ae(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new lt($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new lt($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Gv)throw new lt($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new lt($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fv}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Yl(t,ae._jsonSchema))return new ae(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Gv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:xe("string",ae._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{static fromTimestamp(t){return new vt(t)}static min(){return new vt(new ae(0,0))}static max(){return new vt(new ae(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=-1;function n2(s,t){const n=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,l=vt.fromTimestamp(r===1e9?new ae(n+1,0):new ae(n,r));return new tr(l,dt.empty(),t)}function i2(s){return new tr(s.readTime,s.key,kl)}class tr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(vt.min(),dt.empty(),kl)}static max(){return new tr(vt.max(),dt.empty(),kl)}}function s2(s,t){let n=s.readTime.compareTo(t.readTime);return n!==0?n:(n=dt.comparator(s.documentKey,t.documentKey),n!==0?n:xt(s.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(s){if(s.code!==$.FAILED_PRECONDITION||s.message!==r2)throw s;ot("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&pt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new J(((r,l)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(r,l)},this.catchCallback=u=>{this.wrapFailure(n,u).next(r,l)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):J.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):J.reject(n)}static resolve(t){return new J(((n,r)=>{n(t)}))}static reject(t){return new J(((n,r)=>{r(t)}))}static waitFor(t){return new J(((n,r)=>{let l=0,u=0,d=!1;t.forEach((p=>{++l,p.next((()=>{++u,d&&u===l&&n()}),(y=>r(y)))})),d=!0,u===l&&n()}))}static or(t){let n=J.resolve(!1);for(const r of t)n=n.next((l=>l?J.resolve(l):r()));return n}static forEach(t,n){const r=[];return t.forEach(((l,u)=>{r.push(n.call(this,l,u))})),this.waitFor(r)}static mapArray(t,n){return new J(((r,l)=>{const u=t.length,d=new Array(u);let p=0;for(let y=0;y<u;y++){const _=y;n(t[_]).next((E=>{d[_]=E,++p,p===u&&r(d)}),(E=>l(E)))}}))}static doWhile(t,n){return new J(((r,l)=>{const u=()=>{t()===!0?n().next((()=>{u()}),l):r()};u()}))}}function o2(s){const t=s.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mo(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}vh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=-1;function Th(s){return s==null}function th(s){return s===0&&1/s==-1/0}function l2(s){return typeof s=="number"&&Number.isInteger(s)&&!th(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="";function u2(s){let t="";for(let n=0;n<s.length;n++)t.length>0&&(t=Kv(t)),t=c2(s.get(n),t);return Kv(t)}function c2(s,t){let n=t;const r=s.length;for(let l=0;l<r;l++){const u=s.charAt(l);switch(u){case"\0":n+="";break;case WT:n+="";break;default:n+=u}}return n}function Kv(s){return s+WT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(s){let t=0;for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t++;return t}function Zr(s,t){for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t(n,s[n])}function tE(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n){this.comparator=t,this.root=n||Ge.EMPTY}insert(t,n){return new ue(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const l=this.comparator(t,r.key);if(l===0)return n+r.left.size;l<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dc(this.root,t,this.comparator,!0)}}class Dc{constructor(t,n,r,l){this.isReverse=l,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?r(t.key,n):1,n&&l&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,n,r,l,u){this.key=t,this.value=n,this.color=r??Ge.RED,this.left=l??Ge.EMPTY,this.right=u??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,l,u){return new Ge(t??this.key,n??this.value,r??this.color,l??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let l=this;const u=r(t,l.key);return l=u<0?l.copy(null,null,null,l.left.insert(t,n,r),null):u===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,r)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return Ge.EMPTY;r=l.right.min(),l=l.copy(r.key,r.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw pt(27949);return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw pt(57766)}get value(){throw pt(16141)}get color(){throw pt(16727)}get left(){throw pt(29726)}get right(){throw pt(36894)}copy(t,n,r,l,u){return this}insert(t,n,r){return new Ge(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.comparator=t,this.data=new ue(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const l=r.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yv(this.data.getIterator())}getIteratorFrom(t){return new Yv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=r.getNext().key;if(this.comparator(l,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Me(this.comparator);return n.data=t,n}}class Yv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this.fields=t,t.sort(Fe.comparator)}static empty(){return new ti([])}unionWith(t){let n=new Me(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ti(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ro(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new eE("Invalid base64 string: "+u):u}})(t);return new Qe(n)}static fromUint8Array(t){const n=(function(l){let u="";for(let d=0;d<l.length;++d)u+=String.fromCharCode(l[d]);return u})(t);return new Qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let l=0;l<n.length;l++)r[l]=n.charCodeAt(l);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const h2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(s){if(Kt(!!s,39018),typeof s=="string"){let t=0;const n=h2.exec(s);if(Kt(!!n,46558,{timestamp:s}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ye(s.seconds),nanos:ye(s.nanos)}}function ye(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function nr(s){return typeof s=="string"?Qe.fromBase64String(s):Qe.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="server_timestamp",iE="__type__",sE="__previous_value__",rE="__local_write_time__";function Ym(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[iE])==null?void 0:r.stringValue)===nE}function Eh(s){const t=s.mapValue.fields[sE];return Ym(t)?Eh(t):t}function Ll(s){const t=er(s.mapValue.fields[rE].timestampValue);return new ae(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(t,n,r,l,u,d,p,y,_,E,A){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=l,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E,this.apiKey=A}}const eh="(default)";class Ul{constructor(t,n){this.projectId=t,this.database=n||eh}static empty(){return new Ul("","")}get isDefaultDatabase(){return this.database===eh}isEqual(t){return t instanceof Ul&&t.projectId===this.projectId&&t.database===this.database}}function d2(s,t){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new lt($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ul(s.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="__type__",m2="__max__",Oc={mapValue:{}},oE="__vector__",nh="value";function ir(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Ym(s)?4:g2(s)?9007199254740991:p2(s)?10:11:pt(28295,{value:s})}function Li(s,t){if(s===t)return!0;const n=ir(s);if(n!==ir(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return Ll(s).isEqual(Ll(t));case 3:return(function(l,u){if(typeof l.timestampValue=="string"&&typeof u.timestampValue=="string"&&l.timestampValue.length===u.timestampValue.length)return l.timestampValue===u.timestampValue;const d=er(l.timestampValue),p=er(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(s,t);case 5:return s.stringValue===t.stringValue;case 6:return(function(l,u){return nr(l.bytesValue).isEqual(nr(u.bytesValue))})(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return(function(l,u){return ye(l.geoPointValue.latitude)===ye(u.geoPointValue.latitude)&&ye(l.geoPointValue.longitude)===ye(u.geoPointValue.longitude)})(s,t);case 2:return(function(l,u){if("integerValue"in l&&"integerValue"in u)return ye(l.integerValue)===ye(u.integerValue);if("doubleValue"in l&&"doubleValue"in u){const d=ye(l.doubleValue),p=ye(u.doubleValue);return d===p?th(d)===th(p):isNaN(d)&&isNaN(p)}return!1})(s,t);case 9:return ro(s.arrayValue.values||[],t.arrayValue.values||[],Li);case 10:case 11:return(function(l,u){const d=l.mapValue.fields||{},p=u.mapValue.fields||{};if(Qv(d)!==Qv(p))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(p[y]===void 0||!Li(d[y],p[y])))return!1;return!0})(s,t);default:return pt(52216,{left:s})}}function Pl(s,t){return(s.values||[]).find((n=>Li(n,t)))!==void 0}function ao(s,t){if(s===t)return 0;const n=ir(s),r=ir(t);if(n!==r)return xt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xt(s.booleanValue,t.booleanValue);case 2:return(function(u,d){const p=ye(u.integerValue||u.doubleValue),y=ye(d.integerValue||d.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(s,t);case 3:return Xv(s.timestampValue,t.timestampValue);case 4:return Xv(Ll(s),Ll(t));case 5:return mm(s.stringValue,t.stringValue);case 6:return(function(u,d){const p=nr(u),y=nr(d);return p.compareTo(y)})(s.bytesValue,t.bytesValue);case 7:return(function(u,d){const p=u.split("/"),y=d.split("/");for(let _=0;_<p.length&&_<y.length;_++){const E=xt(p[_],y[_]);if(E!==0)return E}return xt(p.length,y.length)})(s.referenceValue,t.referenceValue);case 8:return(function(u,d){const p=xt(ye(u.latitude),ye(d.latitude));return p!==0?p:xt(ye(u.longitude),ye(d.longitude))})(s.geoPointValue,t.geoPointValue);case 9:return $v(s.arrayValue,t.arrayValue);case 10:return(function(u,d){var k,K,W,nt;const p=u.fields||{},y=d.fields||{},_=(k=p[nh])==null?void 0:k.arrayValue,E=(K=y[nh])==null?void 0:K.arrayValue,A=xt(((W=_==null?void 0:_.values)==null?void 0:W.length)||0,((nt=E==null?void 0:E.values)==null?void 0:nt.length)||0);return A!==0?A:$v(_,E)})(s.mapValue,t.mapValue);case 11:return(function(u,d){if(u===Oc.mapValue&&d===Oc.mapValue)return 0;if(u===Oc.mapValue)return 1;if(d===Oc.mapValue)return-1;const p=u.fields||{},y=Object.keys(p),_=d.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let A=0;A<y.length&&A<E.length;++A){const k=mm(y[A],E[A]);if(k!==0)return k;const K=ao(p[y[A]],_[E[A]]);if(K!==0)return K}return xt(y.length,E.length)})(s.mapValue,t.mapValue);default:throw pt(23264,{he:n})}}function Xv(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return xt(s,t);const n=er(s),r=er(t),l=xt(n.seconds,r.seconds);return l!==0?l:xt(n.nanos,r.nanos)}function $v(s,t){const n=s.values||[],r=t.values||[];for(let l=0;l<n.length&&l<r.length;++l){const u=ao(n[l],r[l]);if(u)return u}return xt(n.length,r.length)}function oo(s){return pm(s)}function pm(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(n){return nr(n).toBase64()})(s.bytesValue):"referenceValue"in s?(function(n){return dt.fromName(n).toString()})(s.referenceValue):"geoPointValue"in s?(function(n){return`geo(${n.latitude},${n.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(n){let r="[",l=!0;for(const u of n.values||[])l?l=!1:r+=",",r+=pm(u);return r+"]"})(s.arrayValue):"mapValue"in s?(function(n){const r=Object.keys(n.fields||{}).sort();let l="{",u=!0;for(const d of r)u?u=!1:l+=",",l+=`${d}:${pm(n.fields[d])}`;return l+"}"})(s.mapValue):pt(61005,{value:s})}function Bc(s){switch(ir(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Eh(s);return t?16+Bc(t):16;case 5:return 2*s.stringValue.length;case 6:return nr(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((l,u)=>l+Bc(u)),0)})(s.arrayValue);case 10:case 11:return(function(r){let l=0;return Zr(r.fields,((u,d)=>{l+=u.length+Bc(d)})),l})(s.mapValue);default:throw pt(13486,{value:s})}}function Jv(s,t){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${t.path.canonicalString()}`}}function gm(s){return!!s&&"integerValue"in s}function Xm(s){return!!s&&"arrayValue"in s}function Zv(s){return!!s&&"nullValue"in s}function Wv(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function qc(s){return!!s&&"mapValue"in s}function p2(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[aE])==null?void 0:r.stringValue)===oE}function xl(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const t={mapValue:{fields:{}}};return Zr(s.mapValue.fields,((n,r)=>t.mapValue.fields[n]=xl(r))),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(s.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xl(s.arrayValue.values[n]);return t}return{...s}}function g2(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===m2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t){this.value=t}static empty(){return new Ln({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!qc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xl(n)}setAll(t){let n=Fe.emptyPath(),r={},l=[];t.forEach(((d,p)=>{if(!n.isImmediateParentOf(p)){const y=this.getFieldsMap(n);this.applyChanges(y,r,l),r={},l=[],n=p.popLast()}d?r[p.lastSegment()]=xl(d):l.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,r,l)}delete(t){const n=this.field(t.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Li(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let l=n.mapValue.fields[t.get(r)];qc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,r){Zr(n,((l,u)=>t[l]=u));for(const l of r)delete t[l]}clone(){return new Ln(xl(this.value))}}function lE(s){const t=[];return Zr(s.fields,((n,r)=>{const l=new Fe([n]);if(qc(r)){const u=lE(r.mapValue).fields;if(u.length===0)t.push(l);else for(const d of u)t.push(l.child(d))}else t.push(l)})),new ti(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,n,r,l,u,d,p){this.key=t,this.documentType=n,this.version=r,this.readTime=l,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(t){return new Je(t,0,vt.min(),vt.min(),vt.min(),Ln.empty(),0)}static newFoundDocument(t,n,r,l){return new Je(t,1,n,vt.min(),r,l,0)}static newNoDocument(t,n){return new Je(t,2,n,vt.min(),vt.min(),Ln.empty(),0)}static newUnknownDocument(t,n){return new Je(t,3,n,vt.min(),vt.min(),Ln.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(vt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Je&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n){this.position=t,this.inclusive=n}}function t0(s,t,n){let r=0;for(let l=0;l<s.position.length;l++){const u=t[l],d=s.position[l];if(u.field.isKeyField()?r=dt.comparator(dt.fromName(d.referenceValue),n.key):r=ao(d,n.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function e0(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let n=0;n<s.position.length;n++)if(!Li(s.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n="asc"){this.field=t,this.dir=n}}function y2(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{}class Ce extends uE{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new v2(t,n,r):n==="array-contains"?new b2(t,r):n==="in"?new A2(t,r):n==="not-in"?new S2(t,r):n==="array-contains-any"?new w2(t,r):new Ce(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new T2(t,r):new E2(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ao(n,this.value)):n!==null&&ir(this.value)===ir(n)&&this.matchesComparison(ao(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return pt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class si extends uE{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new si(t,n)}matches(t){return cE(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cE(s){return s.op==="and"}function hE(s){return _2(s)&&cE(s)}function _2(s){for(const t of s.filters)if(t instanceof si)return!1;return!0}function ym(s){if(s instanceof Ce)return s.field.canonicalString()+s.op.toString()+oo(s.value);if(hE(s))return s.filters.map((t=>ym(t))).join(",");{const t=s.filters.map((n=>ym(n))).join(",");return`${s.op}(${t})`}}function fE(s,t){return s instanceof Ce?(function(r,l){return l instanceof Ce&&r.op===l.op&&r.field.isEqual(l.field)&&Li(r.value,l.value)})(s,t):s instanceof si?(function(r,l){return l instanceof si&&r.op===l.op&&r.filters.length===l.filters.length?r.filters.reduce(((u,d,p)=>u&&fE(d,l.filters[p])),!0):!1})(s,t):void pt(19439)}function dE(s){return s instanceof Ce?(function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`})(s):s instanceof si?(function(n){return n.op.toString()+" {"+n.getFilters().map(dE).join(" ,")+"}"})(s):"Filter"}class v2 extends Ce{constructor(t,n,r){super(t,n,r),this.key=dt.fromName(r.referenceValue)}matches(t){const n=dt.comparator(t.key,this.key);return this.matchesComparison(n)}}class T2 extends Ce{constructor(t,n){super(t,"in",n),this.keys=mE("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class E2 extends Ce{constructor(t,n){super(t,"not-in",n),this.keys=mE("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function mE(s,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map((r=>dt.fromName(r.referenceValue)))}class b2 extends Ce{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Xm(n)&&Pl(n.arrayValue,this.value)}}class A2 extends Ce{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Pl(this.value.arrayValue,n)}}class S2 extends Ce{constructor(t,n){super(t,"not-in",n)}matches(t){if(Pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Pl(this.value.arrayValue,n)}}class w2 extends Ce{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Pl(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(t,n=null,r=[],l=[],u=null,d=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=l,this.limit=u,this.startAt=d,this.endAt=p,this.Te=null}}function n0(s,t=null,n=[],r=[],l=null,u=null,d=null){return new R2(s,t,n,r,l,u,d)}function $m(s){const t=Et(s);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>ym(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(u){return u.field.canonicalString()+u.dir})(r))).join(","),Th(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>oo(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>oo(r))).join(",")),t.Te=n}return t.Te}function Jm(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<s.orderBy.length;n++)if(!y2(s.orderBy[n],t.orderBy[n]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let n=0;n<s.filters.length;n++)if(!fE(s.filters[n],t.filters[n]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!e0(s.startAt,t.startAt)&&e0(s.endAt,t.endAt)}function _m(s){return dt.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,n=null,r=[],l=[],u=null,d="F",p=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=l,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=y,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function I2(s,t,n,r,l,u,d,p){return new po(s,t,n,r,l,u,d,p)}function Zm(s){return new po(s)}function i0(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function C2(s){return dt.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function pE(s){return s.collectionGroup!==null}function Nl(s){const t=Et(s);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Me(Fe.comparator);return d.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new jl(u,r))})),n.has(Fe.keyField().canonicalString())||t.Ie.push(new jl(Fe.keyField(),r))}return t.Ie}function Ni(s){const t=Et(s);return t.Ee||(t.Ee=x2(t,Nl(s))),t.Ee}function x2(s,t){if(s.limitType==="F")return n0(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map((l=>{const u=l.dir==="desc"?"asc":"desc";return new jl(l.field,u)}));const n=s.endAt?new ih(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new ih(s.startAt.position,s.startAt.inclusive):null;return n0(s.path,s.collectionGroup,t,s.filters,s.limit,n,r)}}function vm(s,t){const n=s.filters.concat([t]);return new po(s.path,s.collectionGroup,s.explicitOrderBy.slice(),n,s.limit,s.limitType,s.startAt,s.endAt)}function N2(s,t){const n=s.explicitOrderBy.concat([t]);return new po(s.path,s.collectionGroup,n,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}function Tm(s,t,n){return new po(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,n,s.startAt,s.endAt)}function bh(s,t){return Jm(Ni(s),Ni(t))&&s.limitType===t.limitType}function gE(s){return`${$m(Ni(s))}|lt:${s.limitType}`}function Ya(s){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((l=>dE(l))).join(", ")}]`),Th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((l=>oo(l))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((l=>oo(l))).join(",")),`Target(${r})`})(Ni(s))}; limitType=${s.limitType})`}function Ah(s,t){return t.isFoundDocument()&&(function(r,l){const u=l.key.path;return r.collectionGroup!==null?l.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):dt.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)})(s,t)&&(function(r,l){for(const u of Nl(r))if(!u.field.isKeyField()&&l.data.field(u.field)===null)return!1;return!0})(s,t)&&(function(r,l){for(const u of r.filters)if(!u.matches(l))return!1;return!0})(s,t)&&(function(r,l){return!(r.startAt&&!(function(d,p,y){const _=t0(d,p,y);return d.inclusive?_<=0:_<0})(r.startAt,Nl(r),l)||r.endAt&&!(function(d,p,y){const _=t0(d,p,y);return d.inclusive?_>=0:_>0})(r.endAt,Nl(r),l))})(s,t)}function D2(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function yE(s){return(t,n)=>{let r=!1;for(const l of Nl(s)){const u=O2(l,t,n);if(u!==0)return u;r=r||l.field.isKeyField()}return 0}}function O2(s,t,n){const r=s.field.isKeyField()?dt.comparator(t.key,n.key):(function(u,d,p){const y=d.data.field(u),_=p.data.field(u);return y!==null&&_!==null?ao(y,_):pt(42886)})(s.field,t,n);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return pt(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[l,u]of r)if(this.equalsFn(l,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),l=this.inner[r];if(l===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let u=0;u<l.length;u++)if(this.equalsFn(l[u][0],t))return void(l[u]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let l=0;l<r.length;l++)if(this.equalsFn(r[l][0],t))return r.length===1?delete this.inner[n]:r.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Zr(this.inner,((n,r)=>{for(const[l,u]of r)t(l,u)}))}isEmpty(){return tE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new ue(dt.comparator);function cs(){return M2}const _E=new ue(dt.comparator);function wl(...s){let t=_E;for(const n of s)t=t.insert(n.key,n);return t}function vE(s){let t=_E;return s.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function jr(){return Dl()}function TE(){return Dl()}function Dl(){return new Wr((s=>s.toString()),((s,t)=>s.isEqual(t)))}const V2=new ue(dt.comparator),k2=new Me(dt.comparator);function Nt(...s){let t=k2;for(const n of s)t=t.add(n);return t}const L2=new Me(xt);function U2(){return L2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:th(t)?"-0":t}}function EE(s){return{integerValue:""+s}}function P2(s,t){return l2(t)?EE(t):Wm(s,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this._=void 0}}function j2(s,t,n){return s instanceof sh?(function(l,u){const d={fields:{[iE]:{stringValue:nE},[rE]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return u&&Ym(u)&&(u=Eh(u)),u&&(d.fields[sE]=u),{mapValue:d}})(n,t):s instanceof zl?AE(s,t):s instanceof Bl?SE(s,t):(function(l,u){const d=bE(l,u),p=s0(d)+s0(l.Ae);return gm(d)&&gm(l.Ae)?EE(p):Wm(l.serializer,p)})(s,t)}function z2(s,t,n){return s instanceof zl?AE(s,t):s instanceof Bl?SE(s,t):n}function bE(s,t){return s instanceof rh?(function(r){return gm(r)||(function(u){return!!u&&"doubleValue"in u})(r)})(t)?t:{integerValue:0}:null}class sh extends Sh{}class zl extends Sh{constructor(t){super(),this.elements=t}}function AE(s,t){const n=wE(t);for(const r of s.elements)n.some((l=>Li(l,r)))||n.push(r);return{arrayValue:{values:n}}}class Bl extends Sh{constructor(t){super(),this.elements=t}}function SE(s,t){let n=wE(t);for(const r of s.elements)n=n.filter((l=>!Li(l,r)));return{arrayValue:{values:n}}}class rh extends Sh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function s0(s){return ye(s.integerValue||s.doubleValue)}function wE(s){return Xm(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function B2(s,t){return s.field.isEqual(t.field)&&(function(r,l){return r instanceof zl&&l instanceof zl||r instanceof Bl&&l instanceof Bl?ro(r.elements,l.elements,Li):r instanceof rh&&l instanceof rh?Li(r.Ae,l.Ae):r instanceof sh&&l instanceof sh})(s.transform,t.transform)}class q2{constructor(t,n){this.version=t,this.transformResults=n}}class Di{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Di}static exists(t){return new Di(void 0,t)}static updateTime(t){return new Di(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hc(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class wh{}function RE(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new tp(s.key,Di.none()):new Xl(s.key,s.data,Di.none());{const n=s.data,r=Ln.empty();let l=new Me(Fe.comparator);for(let u of t.fields)if(!l.has(u)){let d=n.field(u);d===null&&u.length>1&&(u=u.popLast(),d=n.field(u)),d===null?r.delete(u):r.set(u,d),l=l.add(u)}return new ta(s.key,r,new ti(l.toArray()),Di.none())}}function H2(s,t,n){s instanceof Xl?(function(l,u,d){const p=l.value.clone(),y=a0(l.fieldTransforms,u,d.transformResults);p.setAll(y),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(s,t,n):s instanceof ta?(function(l,u,d){if(!Hc(l.precondition,u))return void u.convertToUnknownDocument(d.version);const p=a0(l.fieldTransforms,u,d.transformResults),y=u.data;y.setAll(IE(l)),y.setAll(p),u.convertToFoundDocument(d.version,y).setHasCommittedMutations()})(s,t,n):(function(l,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,t,n)}function Ol(s,t,n,r){return s instanceof Xl?(function(u,d,p,y){if(!Hc(u.precondition,d))return p;const _=u.value.clone(),E=o0(u.fieldTransforms,y,d);return _.setAll(E),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null})(s,t,n,r):s instanceof ta?(function(u,d,p,y){if(!Hc(u.precondition,d))return p;const _=o0(u.fieldTransforms,y,d),E=d.data;return E.setAll(IE(u)),E.setAll(_),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(s,t,n,r):(function(u,d,p){return Hc(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(s,t,n)}function G2(s,t){let n=null;for(const r of s.fieldTransforms){const l=t.data.field(r.field),u=bE(r.transform,l||null);u!=null&&(n===null&&(n=Ln.empty()),n.set(r.field,u))}return n||null}function r0(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!(function(r,l){return r===void 0&&l===void 0||!(!r||!l)&&ro(r,l,((u,d)=>B2(u,d)))})(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class Xl extends wh{constructor(t,n,r,l=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class ta extends wh{constructor(t,n,r,l,u=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=l,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function IE(s){const t=new Map;return s.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=s.data.field(n);t.set(n,r)}})),t}function a0(s,t,n){const r=new Map;Kt(s.length===n.length,32656,{Ve:n.length,de:s.length});for(let l=0;l<n.length;l++){const u=s[l],d=u.transform,p=t.data.field(u.field);r.set(u.field,z2(d,p,n[l]))}return r}function o0(s,t,n){const r=new Map;for(const l of s){const u=l.transform,d=n.data.field(l.field);r.set(l.field,j2(u,d,t))}return r}class tp extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F2 extends wh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(t,n,r,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=l}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const u=this.mutations[l];u.key.isEqual(t.key)&&H2(u,t,r[l])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ol(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ol(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=TE();return this.mutations.forEach((l=>{const u=t.get(l.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=n.has(l.key)?null:p;const y=RE(d,p);y!==null&&r.set(l.key,y),d.isValidDocument()||d.convertToNoDocument(vt.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Nt())}isEqual(t){return this.batchId===t.batchId&&ro(this.mutations,t.mutations,((n,r)=>r0(n,r)))&&ro(this.baseMutations,t.baseMutations,((n,r)=>r0(n,r)))}}class ep{constructor(t,n,r,l){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=l}static from(t,n,r){Kt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let l=(function(){return V2})();const u=t.mutations;for(let d=0;d<u.length;d++)l=l.insert(u[d].key,r[d].version);return new ep(t,n,r,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Lt;function X2(s){switch(s){case $.OK:return pt(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return pt(15467,{code:s})}}function CE(s){if(s===void 0)return us("GRPC error has no .code"),$.UNKNOWN;switch(s){case Ie.OK:return $.OK;case Ie.CANCELLED:return $.CANCELLED;case Ie.UNKNOWN:return $.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return $.INTERNAL;case Ie.UNAVAILABLE:return $.UNAVAILABLE;case Ie.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ie.NOT_FOUND:return $.NOT_FOUND;case Ie.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ie.ABORTED:return $.ABORTED;case Ie.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ie.DATA_LOSS:return $.DATA_LOSS;default:return pt(39323,{code:s})}}(Lt=Ie||(Ie={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new Js([4294967295,4294967295],0);function l0(s){const t=$2().encode(s),n=new HT;return n.update(t),new Uint8Array(n.digest())}function u0(s){const t=new DataView(s.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),l=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Js([n,r],0),new Js([l,u],0)]}class np{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(r<0)throw new Rl(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Js.fromNumber(this.ge)}ye(t,n,r){let l=t.add(n.multiply(Js.fromNumber(r)));return l.compare(J2)===1&&(l=new Js([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=l0(t),[r,l]=u0(n);for(let u=0;u<this.hashCount;u++){const d=this.ye(r,l,u);if(!this.we(d))return!1}return!0}static create(t,n,r){const l=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),d=new np(u,l,n);return r.forEach((p=>d.insert(p))),d}insert(t){if(this.ge===0)return;const n=l0(t),[r,l]=u0(n);for(let u=0;u<this.hashCount;u++){const d=this.ye(r,l,u);this.Se(d)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n,r,l,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=l,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const l=new Map;return l.set(t,Jl.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new $l(vt.min(),l,new ue(xt),cs(),Nt())}}class Jl{constructor(t,n,r,l,u){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=l,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Jl(r,n,Nt(),Nt(),Nt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n,r,l){this.be=t,this.removedTargetIds=n,this.key=r,this.De=l}}class xE{constructor(t,n){this.targetId=t,this.Ce=n}}class NE{constructor(t,n,r=Qe.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=l}}class c0{constructor(){this.ve=0,this.Fe=h0(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Nt(),n=Nt(),r=Nt();return this.Fe.forEach(((l,u)=>{switch(u){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:r=r.add(l);break;default:pt(38017,{changeType:u})}})),new Jl(this.Me,this.xe,t,n,r)}Ke(){this.Oe=!1,this.Fe=h0()}qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Kt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Z2{constructor(t){this.Ge=t,this.ze=new Map,this.je=cs(),this.Je=Mc(),this.He=Mc(),this.Ze=new ue(xt)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:pt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,l)=>{this.rt(l)&&n(l)}))}st(t){const n=t.targetId,r=t.Ce.count,l=this.ot(n);if(l){const u=l.target;if(_m(u))if(r===0){const d=new dt(u.path);this.et(n,d,Je.newNoDocument(d,vt.min()))}else Kt(r===1,20013,{expectedCount:r});else{const d=this._t(n);if(d!==r){const p=this.ut(t),y=p?this.ct(p,t,d):1;if(y!==0){this.it(n);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,_)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:l=0},hashCount:u=0}=n;let d,p;try{d=nr(r).toUint8Array()}catch(y){if(y instanceof eE)return Qr("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new np(d,l,u)}catch(y){return Qr(y instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let l=0;return r.forEach((u=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(n,u,null),l++)})),l}Tt(t){const n=new Map;this.ze.forEach(((u,d)=>{const p=this.ot(d);if(p){if(u.current&&_m(p.target)){const y=new dt(p.target.path);this.It(y).has(d)||this.Et(d,y)||this.et(d,y,Je.newNoDocument(y,t))}u.Be&&(n.set(d,u.ke()),u.Ke())}}));let r=Nt();this.He.forEach(((u,d)=>{let p=!0;d.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(t)));const l=new $l(t,n,this.Ze,this.je,r);return this.je=cs(),this.Je=Mc(),this.He=Mc(),this.Ze=new ue(xt),l}Ye(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,n)?l.qe(n,1):l.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new c0,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new Me(xt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Me(xt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||ot("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new c0),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Mc(){return new ue(dt.comparator)}function h0(){return new ue(dt.comparator)}const W2={asc:"ASCENDING",desc:"DESCENDING"},tC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eC={and:"AND",or:"OR"};class nC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Em(s,t){return s.useProto3Json||Th(t)?t:{value:t}}function ah(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function DE(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function iC(s,t){return ah(s,t.toTimestamp())}function Oi(s){return Kt(!!s,49232),vt.fromTimestamp((function(n){const r=er(n);return new ae(r.seconds,r.nanos)})(s))}function ip(s,t){return bm(s,t).canonicalString()}function bm(s,t){const n=(function(l){return new ie(["projects",l.projectId,"databases",l.database])})(s).child("documents");return t===void 0?n:n.child(t)}function OE(s){const t=ie.fromString(s);return Kt(UE(t),10190,{key:t.toString()}),t}function Am(s,t){return ip(s.databaseId,t.path)}function Xd(s,t){const n=OE(t);if(n.get(1)!==s.databaseId.projectId)throw new lt($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+s.databaseId.projectId);if(n.get(3)!==s.databaseId.database)throw new lt($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+s.databaseId.database);return new dt(VE(n))}function ME(s,t){return ip(s.databaseId,t)}function sC(s){const t=OE(s);return t.length===4?ie.emptyPath():VE(t)}function Sm(s){return new ie(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function VE(s){return Kt(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function f0(s,t,n){return{name:Am(s,t),fields:n.value.mapValue.fields}}function rC(s,t){let n;if("targetChange"in t){t.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:pt(39313,{state:_})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(Kt(E===void 0||typeof E=="string",58123),Qe.fromBase64String(E||"")):(Kt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Qe.fromUint8Array(E||new Uint8Array))})(s,t.targetChange.resumeToken),d=t.targetChange.cause,p=d&&(function(_){const E=_.code===void 0?$.UNKNOWN:CE(_.code);return new lt(E,_.message||"")})(d);n=new NE(r,l,u,p||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const l=Xd(s,r.document.name),u=Oi(r.document.updateTime),d=r.document.createTime?Oi(r.document.createTime):vt.min(),p=new Ln({mapValue:{fields:r.document.fields}}),y=Je.newFoundDocument(l,u,d,p),_=r.targetIds||[],E=r.removedTargetIds||[];n=new Gc(_,E,y.key,y)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const l=Xd(s,r.document),u=r.readTime?Oi(r.readTime):vt.min(),d=Je.newNoDocument(l,u),p=r.removedTargetIds||[];n=new Gc([],p,d.key,d)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const l=Xd(s,r.document),u=r.removedTargetIds||[];n=new Gc([],u,l,null)}else{if(!("filter"in t))return pt(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:l=0,unchangedNames:u}=r,d=new Y2(l,u),p=r.targetId;n=new xE(p,d)}}return n}function aC(s,t){let n;if(t instanceof Xl)n={update:f0(s,t.key,t.value)};else if(t instanceof tp)n={delete:Am(s,t.key)};else if(t instanceof ta)n={update:f0(s,t.key,t.data),updateMask:pC(t.fieldMask)};else{if(!(t instanceof F2))return pt(16599,{dt:t.type});n={verify:Am(s,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((r=>(function(u,d){const p=d.transform;if(p instanceof sh)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof zl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Bl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof rh)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw pt(20930,{transform:d.transform})})(0,r)))),t.precondition.isNone||(n.currentDocument=(function(l,u){return u.updateTime!==void 0?{updateTime:iC(l,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pt(27497)})(s,t.precondition)),n}function oC(s,t){return s&&s.length>0?(Kt(t!==void 0,14353),s.map((n=>(function(l,u){let d=l.updateTime?Oi(l.updateTime):Oi(u);return d.isEqual(vt.min())&&(d=Oi(u)),new q2(d,l.transformResults||[])})(n,t)))):[]}function lC(s,t){return{documents:[ME(s,t.path)]}}function uC(s,t){const n={structuredQuery:{}},r=t.path;let l;t.collectionGroup!==null?(l=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ME(s,l);const u=(function(_){if(_.length!==0)return LE(si.create(_,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const d=(function(_){if(_.length!==0)return _.map((E=>(function(k){return{field:Xa(k.field),direction:fC(k.dir)}})(E)))})(t.orderBy);d&&(n.structuredQuery.orderBy=d);const p=Em(s,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(t.endAt)),{ft:n,parent:l}}function cC(s){let t=sC(s.parent);const n=s.structuredQuery,r=n.from?n.from.length:0;let l=null;if(r>0){Kt(r===1,65062);const E=n.from[0];E.allDescendants?l=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(A){const k=kE(A);return k instanceof si&&hE(k)?k.getFilters():[k]})(n.where));let d=[];n.orderBy&&(d=(function(A){return A.map((k=>(function(W){return new jl($a(W.field),(function(it){switch(it){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(k)))})(n.orderBy));let p=null;n.limit&&(p=(function(A){let k;return k=typeof A=="object"?A.value:A,Th(k)?null:k})(n.limit));let y=null;n.startAt&&(y=(function(A){const k=!!A.before,K=A.values||[];return new ih(K,k)})(n.startAt));let _=null;return n.endAt&&(_=(function(A){const k=!A.before,K=A.values||[];return new ih(K,k)})(n.endAt)),I2(t,l,d,u,p,"F",y,_)}function hC(s,t){const n=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pt(28987,{purpose:l})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function kE(s){return s.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$a(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const l=$a(n.unaryFilter.field);return Ce.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=$a(n.unaryFilter.field);return Ce.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=$a(n.unaryFilter.field);return Ce.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pt(61313);default:return pt(60726)}})(s):s.fieldFilter!==void 0?(function(n){return Ce.create($a(n.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pt(58110);default:return pt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(n){return si.create(n.compositeFilter.filters.map((r=>kE(r))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return pt(1026)}})(n.compositeFilter.op))})(s):pt(30097,{filter:s})}function fC(s){return W2[s]}function dC(s){return tC[s]}function mC(s){return eC[s]}function Xa(s){return{fieldPath:s.canonicalString()}}function $a(s){return Fe.fromServerFormat(s.fieldPath)}function LE(s){return s instanceof Ce?(function(n){if(n.op==="=="){if(Wv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NAN"}};if(Zv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NOT_NAN"}};if(Zv(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xa(n.field),op:dC(n.op),value:n.value}}})(s):s instanceof si?(function(n){const r=n.getFilters().map((l=>LE(l)));return r.length===1?r[0]:{compositeFilter:{op:mC(n.op),filters:r}}})(s):pt(54877,{filter:s})}function pC(s){const t=[];return s.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function UE(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function PE(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t,n,r,l,u=vt.min(),d=vt.min(),p=Qe.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=l,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(t){return new as(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(t){this.yt=t}}function yC(s){const t=cC({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Tm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.bn=new vC}addToCollectionParentIndex(t,n){return this.bn.add(n),J.resolve()}getCollectionParents(t,n){return J.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return J.resolve()}deleteFieldIndex(t,n){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,n){return J.resolve()}getDocumentsMatchingTarget(t,n){return J.resolve(null)}getIndexType(t,n){return J.resolve(0)}getFieldIndexes(t,n){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,n){return J.resolve(tr.min())}getMinOffsetFromCollectionGroup(t,n){return J.resolve(tr.min())}updateCollectionGroup(t,n,r){return J.resolve()}updateIndexEntries(t,n){return J.resolve()}}class vC{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),l=this.index[n]||new Me(ie.comparator),u=!l.has(r);return this.index[n]=l.add(r),u}has(t){const n=t.lastSegment(),r=t.popLast(),l=this.index[n];return l&&l.has(r)}getEntries(t){return(this.index[t]||new Me(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jE=41943040;class fn{static withCacheSize(t){return new fn(t,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(jE,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new sr(0)}static ar(){return new sr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="LruGarbageCollector",TC=1048576;function p0([s,t],[n,r]){const l=xt(s,n);return l===0?xt(t,r):l}class EC{constructor(t){this.Pr=t,this.buffer=new Me(p0),this.Tr=0}Ir(){return++this.Tr}Er(t){const n=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();p0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bC{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){ot(m0,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mo(n)?ot(m0,"Ignoring IndexedDB error during garbage collection: ",n):await fo(n)}await this.Ar(3e5)}))}}class AC{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return J.resolve(vh.ce);const r=new EC(n);return this.Vr.forEachTarget(t,(l=>r.Er(l.sequenceNumber))).next((()=>this.Vr.mr(t,(l=>r.Er(l))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.Vr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ot("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(d0)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(ot("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),d0):this.gr(t,n)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let r,l,u,d,p,y,_;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ot("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),l=this.params.maximumSequenceNumbersToCollect):l=A,d=Date.now(),this.nthSequenceNumber(t,l)))).next((A=>(r=A,p=Date.now(),this.removeTargets(t,r,n)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(_=Date.now(),Qa()<=Vt.DEBUG&&ot("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-E}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${u} targets in `+(y-p)+`ms
	Removed ${A} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:u,documentsRemoved:A}))))}}function SC(s,t){return new AC(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.changes=new Wr((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Je.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?J.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(t,n,r,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=l}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((l=>(r=l,this.remoteDocumentCache.getEntry(t,n)))).next((l=>(r!==null&&Ol(r.mutation,l,ti.empty(),ae.now()),l)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,Nt()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=Nt()){const l=jr();return this.populateOverlays(t,l,n).next((()=>this.computeViews(t,n,l,r).next((u=>{let d=wl();return u.forEach(((p,y)=>{d=d.insert(p,y.overlayedDocument)})),d}))))}getOverlayedDocuments(t,n){const r=jr();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,Nt())))}populateOverlays(t,n,r){const l=[];return r.forEach((u=>{n.has(u)||l.push(u)})),this.documentOverlayCache.getOverlays(t,l).next((u=>{u.forEach(((d,p)=>{n.set(d,p)}))}))}computeViews(t,n,r,l){let u=cs();const d=Dl(),p=(function(){return Dl()})();return n.forEach(((y,_)=>{const E=r.get(_.key);l.has(_.key)&&(E===void 0||E.mutation instanceof ta)?u=u.insert(_.key,_):E!==void 0?(d.set(_.key,E.mutation.getFieldMask()),Ol(E.mutation,_,E.mutation.getFieldMask(),ae.now())):d.set(_.key,ti.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((_,E)=>d.set(_,E))),n.forEach(((_,E)=>p.set(_,new RC(E,d.get(_)??null)))),p)))}recalculateAndSaveOverlays(t,n){const r=Dl();let l=new ue(((d,p)=>d-p)),u=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((d=>{for(const p of d)p.keys().forEach((y=>{const _=n.get(y);if(_===null)return;let E=r.get(y)||ti.empty();E=p.applyToLocalView(_,E),r.set(y,E);const A=(l.get(p.batchId)||Nt()).add(y);l=l.insert(p.batchId,A)}))})).next((()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),_=y.key,E=y.value,A=TE();E.forEach((k=>{if(!u.has(k)){const K=RE(n.get(k),r.get(k));K!==null&&A.set(k,K),u=u.add(k)}})),d.push(this.documentOverlayCache.saveOverlays(t,_,A))}return J.waitFor(d)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,l){return C2(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):pE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,l):this.getDocumentsMatchingCollectionQuery(t,n,r,l)}getNextDocuments(t,n,r,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,l).next((u=>{const d=l-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,l-u.size):J.resolve(jr());let p=kl,y=u;return d.next((_=>J.forEach(_,((E,A)=>(p<A.largestBatchId&&(p=A.largestBatchId),u.get(E)?J.resolve():this.remoteDocumentCache.getEntry(t,E).next((k=>{y=y.insert(E,k)}))))).next((()=>this.populateOverlays(t,_,u))).next((()=>this.computeViews(t,y,_,Nt()))).next((E=>({batchId:p,changes:vE(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new dt(n)).next((r=>{let l=wl();return r.isFoundDocument()&&(l=l.insert(r.key,r)),l}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,l){const u=n.collectionGroup;let d=wl();return this.indexManager.getCollectionParents(t,u).next((p=>J.forEach(p,(y=>{const _=(function(A,k){return new po(k,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,r,l).next((E=>{E.forEach(((A,k)=>{d=d.insert(A,k)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(t,n,r,l){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,u,l)))).next((d=>{u.forEach(((y,_)=>{const E=_.getKey();d.get(E)===null&&(d=d.insert(E,Je.newInvalidDocument(E)))}));let p=wl();return d.forEach(((y,_)=>{const E=u.get(y);E!==void 0&&Ol(E.mutation,_,ti.empty(),ae.now()),Ah(n,_)&&(p=p.insert(y,_))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return J.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,(function(l){return{id:l.id,version:l.version,createTime:Oi(l.createTime)}})(n)),J.resolve()}getNamedQuery(t,n){return J.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,(function(l){return{name:l.name,query:yC(l.bundledQuery),readTime:Oi(l.readTime)}})(n)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.overlays=new ue(dt.comparator),this.Lr=new Map}getOverlay(t,n){return J.resolve(this.overlays.get(n))}getOverlays(t,n){const r=jr();return J.forEach(n,(l=>this.getOverlay(t,l).next((u=>{u!==null&&r.set(l,u)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((l,u)=>{this.St(t,n,u)})),J.resolve()}removeOverlaysForBatchId(t,n,r){const l=this.Lr.get(r);return l!==void 0&&(l.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(r)),J.resolve()}getOverlaysForCollection(t,n,r){const l=jr(),u=n.length+1,d=new dt(n.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const y=p.getNext().value,_=y.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>r&&l.set(y.getKey(),y)}return J.resolve(l)}getOverlaysForCollectionGroup(t,n,r,l){let u=new ue(((_,E)=>_-E));const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>r){let E=u.get(_.largestBatchId);E===null&&(E=jr(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const p=jr(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>p.set(_,E))),!(p.size()>=l)););return J.resolve(p)}St(t,n,r){const l=this.overlays.get(r.key);if(l!==null){const d=this.Lr.get(l.largestBatchId).delete(r.key);this.Lr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(r.key,new Q2(n,r));let u=this.Lr.get(n);u===void 0&&(u=Nt(),this.Lr.set(n,u)),this.Lr.set(n,u.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.kr=new Me(Ue.Kr),this.qr=new Me(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const r=new Ue(t,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Wr(new Ue(t,n))}Qr(t,n){t.forEach((r=>this.removeReference(r,n)))}Gr(t){const n=new dt(new ie([])),r=new Ue(n,t),l=new Ue(n,t+1),u=[];return this.qr.forEachInRange([r,l],(d=>{this.Wr(d),u.push(d.key)})),u}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const n=new dt(new ie([])),r=new Ue(n,t),l=new Ue(n,t+1);let u=Nt();return this.qr.forEachInRange([r,l],(d=>{u=u.add(d.key)})),u}containsKey(t){const n=new Ue(t,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ue{constructor(t,n){this.key=t,this.Jr=n}static Kr(t,n){return dt.comparator(t.key,n.key)||xt(t.Jr,n.Jr)}static Ur(t,n){return xt(t.Jr,n.Jr)||dt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(Ue.Kr)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,l){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new K2(u,n,r,l);this.mutationQueue.push(d);for(const p of l)this.Hr=this.Hr.add(new Ue(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return J.resolve(d)}lookupMutationBatch(t,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,l=this.Xr(r),u=l<0?0:l;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Qm:this.Yn-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ue(n,0),l=new Ue(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([r,l],(d=>{const p=this.Zr(d.Jr);u.push(p)})),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Me(xt);return n.forEach((l=>{const u=new Ue(l,0),d=new Ue(l,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,d],(p=>{r=r.add(p.Jr)}))})),J.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,l=r.length+1;let u=r;dt.isDocumentKey(u)||(u=u.child(""));const d=new Ue(new dt(u),0);let p=new Me(xt);return this.Hr.forEachWhile((y=>{const _=y.key.path;return!!r.isPrefixOf(_)&&(_.length===l&&(p=p.add(y.Jr)),!0)}),d),J.resolve(this.Yr(p))}Yr(t){const n=[];return t.forEach((r=>{const l=this.Zr(r);l!==null&&n.push(l)})),n}removeMutationBatch(t,n){Kt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return J.forEach(n.mutations,(l=>{const u=new Ue(l.key,n.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Hr=r}))}nr(t){}containsKey(t,n){const r=new Ue(n,0),l=this.Hr.firstAfterOrEqual(r);return J.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(t){this.ti=t,this.docs=(function(){return new ue(dt.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,l=this.docs.get(r),u=l?l.size:0,d=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return J.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(t,n){let r=cs();return n.forEach((l=>{const u=this.docs.get(l);r=r.insert(l,u?u.document.mutableCopy():Je.newInvalidDocument(l))})),J.resolve(r)}getDocumentsMatchingQuery(t,n,r,l){let u=cs();const d=n.path,p=new dt(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||s2(i2(E),r)<=0||(l.has(E.key)||Ah(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(t,n,r,l){pt(9500)}ni(t,n){return J.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new MC(this)}getSize(t){return J.resolve(this.size)}}class MC extends wC{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,l)=>{l.isValidDocument()?n.push(this.Mr.addEntry(t,l)):this.Mr.removeEntry(r)})),J.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(t){this.persistence=t,this.ri=new Wr((n=>$m(n)),Jm),this.lastRemoteSnapshotVersion=vt.min(),this.highestTargetId=0,this.ii=0,this.si=new sp,this.targetCount=0,this.oi=sr._r()}forEachTarget(t,n){return this.ri.forEach(((r,l)=>n(l))),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),J.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new sr(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,J.resolve()}updateTargetData(t,n){return this.lr(n),J.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,n,r){let l=0;const u=[];return this.ri.forEach(((d,p)=>{p.sequenceNumber<=n&&r.get(p.targetId)===null&&(this.ri.delete(d),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)})),J.waitFor(u).next((()=>l))}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,n){const r=this.ri.get(n)||null;return J.resolve(r)}addMatchingKeys(t,n,r){return this.si.$r(n,r),J.resolve()}removeMatchingKeys(t,n,r){this.si.Qr(n,r);const l=this.persistence.referenceDelegate,u=[];return l&&n.forEach((d=>{u.push(l.markPotentiallyOrphaned(t,d))})),J.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),J.resolve()}getMatchingKeysForTargetId(t,n){const r=this.si.jr(n);return J.resolve(r)}containsKey(t,n){return J.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t,n){this._i={},this.overlays={},this.ai=new vh(0),this.ui=!1,this.ui=!0,this.ci=new NC,this.referenceDelegate=t(this),this.li=new VC(this),this.indexManager=new _C,this.remoteDocumentCache=(function(l){return new OC(l)})((r=>this.referenceDelegate.hi(r))),this.serializer=new gC(n),this.Pi=new CC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new xC,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this._i[t.toKey()];return r||(r=new DC(n,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,r){ot("MemoryPersistence","Starting transaction:",t);const l=new kC(this.ai.next());return this.referenceDelegate.Ti(),r(l).next((u=>this.referenceDelegate.Ii(l).next((()=>u)))).toPromise().then((u=>(l.raiseOnCommittedEvent(),u)))}Ei(t,n){return J.or(Object.values(this._i).map((r=>()=>r.containsKey(t,n))))}}class kC extends a2{constructor(t){super(),this.currentSequenceNumber=t}}class rp{constructor(t){this.persistence=t,this.Ri=new sp,this.Ai=null}static Vi(t){return new rp(t)}get di(){if(this.Ai)return this.Ai;throw pt(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),J.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),J.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),J.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach((l=>this.di.add(l.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((l=>{l.forEach((u=>this.di.add(u.toString())))})).next((()=>r.removeTargetData(t,n)))}Ti(){this.Ai=new Set}Ii(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,(r=>{const l=dt.fromPath(r);return this.mi(t,l).next((u=>{u||n.removeEntry(l,vt.min())}))})).next((()=>(this.Ai=null,n.apply(t))))}updateLimboDocument(t,n){return this.mi(t,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(t){return 0}mi(t,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class oh{constructor(t,n){this.persistence=t,this.fi=new Wr((r=>u2(r.path)),((r,l)=>r.isEqual(l))),this.garbageCollector=SC(this,n)}static Vi(t,n){return new oh(t,n)}Ti(){}Ii(t){return J.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((l=>r+l))))}pr(t){let n=0;return this.mr(t,(r=>{n++})).next((()=>n))}mr(t,n){return J.forEach(this.fi,((r,l)=>this.wr(t,r,l).next((u=>u?J.resolve():n(l)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const l=this.persistence.getRemoteDocumentCache(),u=l.newChangeBuffer();return l.ni(t,(d=>this.wr(t,d,n).next((p=>{p||(r++,u.removeEntry(d,vt.min()))})))).next((()=>u.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),J.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),J.resolve()}removeReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),J.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Bc(t.data.value)),n}wr(t,n,r){return J.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.fi.get(n);return J.resolve(l!==void 0&&l>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,n,r,l){this.targetId=t,this.fromCache=n,this.Ts=r,this.Is=l}static Es(t,n){let r=Nt(),l=Nt();for(const u of n.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:l=l.add(u.doc.key)}return new ap(t,n.fromCache,r,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return bw()?8:o2(Ze())>0?6:4})()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,l){const u={result:null};return this.gs(t,n).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ps(t,n,l,r).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new LC;return this.ys(t,n,d).next((p=>{if(u.result=p,this.As)return this.ws(t,n,d,p.size)}))})).next((()=>u.result))}ws(t,n,r,l){return r.documentReadCount<this.Vs?(Qa()<=Vt.DEBUG&&ot("QueryEngine","SDK will not create cache indexes for query:",Ya(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(Qa()<=Vt.DEBUG&&ot("QueryEngine","Query:",Ya(n),"scans",r.documentReadCount,"local documents and returns",l,"documents as results."),r.documentReadCount>this.ds*l?(Qa()<=Vt.DEBUG&&ot("QueryEngine","The SDK decides to create cache indexes for query:",Ya(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ni(n))):J.resolve())}gs(t,n){if(i0(n))return J.resolve(null);let r=Ni(n);return this.indexManager.getIndexType(t,r).next((l=>l===0?null:(n.limit!==null&&l===1&&(n=Tm(n,null,"F"),r=Ni(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((u=>{const d=Nt(...u);return this.fs.getDocuments(t,d).next((p=>this.indexManager.getMinOffset(t,r).next((y=>{const _=this.Ss(n,p);return this.bs(n,_,d,y.readTime)?this.gs(t,Tm(n,null,"F")):this.Ds(t,_,n,y)}))))})))))}ps(t,n,r,l){return i0(n)||l.isEqual(vt.min())?J.resolve(null):this.fs.getDocuments(t,r).next((u=>{const d=this.Ss(n,u);return this.bs(n,d,r,l)?J.resolve(null):(Qa()<=Vt.DEBUG&&ot("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Ya(n)),this.Ds(t,d,n,n2(l,kl)).next((p=>p)))}))}Ss(t,n){let r=new Me(yE(t));return n.forEach(((l,u)=>{Ah(t,u)&&(r=r.add(u))})),r}bs(t,n,r,l){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(l)>0)}ys(t,n,r){return Qa()<=Vt.DEBUG&&ot("QueryEngine","Using full collection scan to execute query:",Ya(n)),this.fs.getDocumentsMatchingQuery(t,n,tr.min(),r)}Ds(t,n,r,l){return this.fs.getDocumentsMatchingQuery(t,r,l).next((u=>(n.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="LocalStore",PC=3e8;class jC{constructor(t,n,r,l){this.persistence=t,this.Cs=n,this.serializer=l,this.vs=new ue(xt),this.Fs=new Wr((u=>$m(u)),Jm),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new IC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.vs)))}}function zC(s,t,n,r){return new jC(s,t,n,r)}async function BE(s,t){const n=Et(s);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let l;return n.mutationQueue.getAllMutationBatches(r).next((u=>(l=u,n.Os(t),n.mutationQueue.getAllMutationBatches(r)))).next((u=>{const d=[],p=[];let y=Nt();for(const _ of l){d.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){p.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(r,y).next((_=>({Ns:_,removedBatchIds:d,addedBatchIds:p})))}))}))}function BC(s,t){const n=Et(s);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const l=t.batch.keys(),u=n.xs.newChangeBuffer({trackRemovals:!0});return(function(p,y,_,E){const A=_.batch,k=A.keys();let K=J.resolve();return k.forEach((W=>{K=K.next((()=>E.getEntry(y,W))).next((nt=>{const it=_.docVersions.get(W);Kt(it!==null,48541),nt.version.compareTo(it)<0&&(A.applyToRemoteDocument(nt,_),nt.isValidDocument()&&(nt.setReadTime(_.commitVersion),E.addEntry(nt)))}))})),K.next((()=>p.mutationQueue.removeMutationBatch(y,A)))})(n,r,t,u).next((()=>u.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,l,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let y=Nt();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(y=y.add(p.batch.mutations[_].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(r,l)))}))}function qE(s){const t=Et(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.li.getLastRemoteSnapshotVersion(n)))}function qC(s,t){const n=Et(s),r=t.snapshotVersion;let l=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=n.xs.newChangeBuffer({trackRemovals:!0});l=n.vs;const p=[];t.targetChanges.forEach(((E,A)=>{const k=l.get(A);if(!k)return;p.push(n.li.removeMatchingKeys(u,E.removedDocuments,A).next((()=>n.li.addMatchingKeys(u,E.addedDocuments,A))));let K=k.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(A)!==null?K=K.withResumeToken(Qe.EMPTY_BYTE_STRING,vt.min()).withLastLimboFreeSnapshotVersion(vt.min()):E.resumeToken.approximateByteSize()>0&&(K=K.withResumeToken(E.resumeToken,r)),l=l.insert(A,K),(function(nt,it,gt){return nt.resumeToken.approximateByteSize()===0||it.snapshotVersion.toMicroseconds()-nt.snapshotVersion.toMicroseconds()>=PC?!0:gt.addedDocuments.size+gt.modifiedDocuments.size+gt.removedDocuments.size>0})(k,K,E)&&p.push(n.li.updateTargetData(u,K))}));let y=cs(),_=Nt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),p.push(HC(u,d,t.documentUpdates).next((E=>{y=E.Bs,_=E.Ls}))),!r.isEqual(vt.min())){const E=n.li.getLastRemoteSnapshotVersion(u).next((A=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,r)));p.push(E)}return J.waitFor(p).next((()=>d.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(n.vs=l,u)))}function HC(s,t,n){let r=Nt(),l=Nt();return n.forEach((u=>r=r.add(u))),t.getEntries(s,r).next((u=>{let d=cs();return n.forEach(((p,y)=>{const _=u.get(p);y.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(p)),y.isNoDocument()&&y.version.isEqual(vt.min())?(t.removeEntry(p,y.readTime),d=d.insert(p,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(y),d=d.insert(p,y)):ot(op,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",y.version)})),{Bs:d,Ls:l}}))}function GC(s,t){const n=Et(s);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Qm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function FC(s,t){const n=Et(s);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let l;return n.li.getTargetData(r,t).next((u=>u?(l=u,J.resolve(l)):n.li.allocateTargetId(r).next((d=>(l=new as(t,d,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,l).next((()=>l)))))))})).then((r=>{const l=n.vs.get(r.targetId);return(l===null||r.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(t,r.targetId)),r}))}async function wm(s,t,n){const r=Et(s),l=r.vs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",u,(d=>r.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!mo(d))throw d;ot(op,`Failed to update sequence numbers for target ${t}: ${d}`)}r.vs=r.vs.remove(t),r.Fs.delete(l.target)}function g0(s,t,n){const r=Et(s);let l=vt.min(),u=Nt();return r.persistence.runTransaction("Execute query","readwrite",(d=>(function(y,_,E){const A=Et(y),k=A.Fs.get(E);return k!==void 0?J.resolve(A.vs.get(k)):A.li.getTargetData(_,E)})(r,d,Ni(t)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(d,p.targetId).next((y=>{u=y}))})).next((()=>r.Cs.getDocumentsMatchingQuery(d,t,n?l:vt.min(),n?u:Nt()))).next((p=>(KC(r,D2(t),p),{documents:p,ks:u})))))}function KC(s,t,n){let r=s.Ms.get(t)||vt.min();n.forEach(((l,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)})),s.Ms.set(t,r)}class y0{constructor(){this.activeTargetIds=U2()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class QC{constructor(){this.vo=new y0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,r){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new y0,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="ConnectivityMonitor";class v0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ot(_0,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){ot(_0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc=null;function Rm(){return Vc===null?Vc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vc++,"0x"+Vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="RestConnection",XC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $C{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+t.host,this.Uo=`projects/${r}/databases/${l}`,this.$o=this.databaseId.database===eh?`project_id=${r}`:`project_id=${r}&database_id=${l}`}Wo(t,n,r,l,u){const d=Rm(),p=this.Qo(t,n.toUriEncodedString());ot($d,`Sending RPC '${t}' ${d}:`,p,r);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,l,u);const{host:_}=new URL(p),E=Gl(_);return this.zo(t,p,y,r,E).then((A=>(ot($d,`Received RPC '${t}' ${d}: `,A),A)),(A=>{throw Qr($d,`RPC '${t}' ${d} failed with error: `,A,"url: ",p,"request:",r),A}))}jo(t,n,r,l,u,d){return this.Wo(t,n,r,l,u)}Go(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ho})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((l,u)=>t[u]=l)),r&&r.headers.forEach(((l,u)=>t[u]=l))}Qo(t,n){const r=XC[t];let l=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(l=`${l}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),l}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection",Al=(s,t,n)=>{s.listen(t,(r=>{try{n(r)}catch(l){setTimeout((()=>{throw l}),0)}}))};class to extends $C{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!to.c_){const t=QT();Al(t,KT.STAT_EVENT,(n=>{n.stat===dm.PROXY?ot(Xe,"STAT_EVENT: detected buffering proxy"):n.stat===dm.NOPROXY&&ot(Xe,"STAT_EVENT: detected no buffering proxy")})),to.c_=!0}}zo(t,n,r,l,u){const d=Rm();return new Promise(((p,y)=>{const _=new GT;_.setWithCredentials(!0),_.listenOnce(FT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case zc.NO_ERROR:const A=_.getResponseJson();ot(Xe,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(A)),p(A);break;case zc.TIMEOUT:ot(Xe,`RPC '${t}' ${d} timed out`),y(new lt($.DEADLINE_EXCEEDED,"Request time out"));break;case zc.HTTP_ERROR:const k=_.getStatus();if(ot(Xe,`RPC '${t}' ${d} failed with status:`,k,"response text:",_.getResponseText()),k>0){let K=_.getResponseJson();Array.isArray(K)&&(K=K[0]);const W=K==null?void 0:K.error;if(W&&W.status&&W.message){const nt=(function(gt){const _t=gt.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(_t)>=0?_t:$.UNKNOWN})(W.status);y(new lt(nt,W.message))}else y(new lt($.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new lt($.UNAVAILABLE,"Connection failed."));break;default:pt(9055,{l_:t,streamId:d,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ot(Xe,`RPC '${t}' ${d} completed.`)}}));const E=JSON.stringify(l);ot(Xe,`RPC '${t}' ${d} sending request:`,l),_.send(n,"POST",E,r,15)}))}T_(t,n,r){const l=Rm(),u=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,n,r),p.encodeInitMessageHeaders=!0;const _=u.join("");ot(Xe,`Creating RPC '${t}' stream ${l}: ${_}`,p);const E=d.createWebChannel(_,p);this.I_(E);let A=!1,k=!1;const K=new JC({Jo:W=>{k?ot(Xe,`Not sending because RPC '${t}' stream ${l} is closed:`,W):(A||(ot(Xe,`Opening RPC '${t}' stream ${l} transport.`),E.open(),A=!0),ot(Xe,`RPC '${t}' stream ${l} sending:`,W),E.send(W))},Ho:()=>E.close()});return Al(E,Sl.EventType.OPEN,(()=>{k||(ot(Xe,`RPC '${t}' stream ${l} transport opened.`),K.i_())})),Al(E,Sl.EventType.CLOSE,(()=>{k||(k=!0,ot(Xe,`RPC '${t}' stream ${l} transport closed`),K.o_(),this.E_(E))})),Al(E,Sl.EventType.ERROR,(W=>{k||(k=!0,Qr(Xe,`RPC '${t}' stream ${l} transport errored. Name:`,W.name,"Message:",W.message),K.o_(new lt($.UNAVAILABLE,"The operation could not be completed")))})),Al(E,Sl.EventType.MESSAGE,(W=>{var nt;if(!k){const it=W.data[0];Kt(!!it,16349);const gt=it,_t=(gt==null?void 0:gt.error)||((nt=gt[0])==null?void 0:nt.error);if(_t){ot(Xe,`RPC '${t}' stream ${l} received error:`,_t);const bt=_t.status;let Ut=(function(x){const w=Ie[x];if(w!==void 0)return CE(w)})(bt),Ft=_t.message;bt==="NOT_FOUND"&&Ft.includes("database")&&Ft.includes("does not exist")&&Ft.includes(this.databaseId.database)&&Qr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ut===void 0&&(Ut=$.INTERNAL,Ft="Unknown error status: "+bt+" with message "+_t.message),k=!0,K.o_(new lt(Ut,Ft)),E.close()}else ot(Xe,`RPC '${t}' stream ${l} received:`,it),K.__(it)}})),to.u_(),setTimeout((()=>{K.s_()}),0),K}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((n=>n===t))}Go(t,n,r){super.Go(t,n,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return YT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(s){return new to(s)}function Jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(s){return new nC(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */to.c_=!1;class HE{constructor(t,n,r=1e3,l=1.5,u=6e4){this.Ci=t,this.timerId=n,this.R_=r,this.A_=l,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-r);l>0&&ot("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="PersistentStream";class GE{constructor(t,n,r,l,u,d,p,y){this.Ci=t,this.S_=r,this.b_=l,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new HE(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(us(n.toString()),us("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,l])=>{this.D_===n&&this.G_(r,l)}),(r=>{t((()=>{const l=new lt($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(l)}))}))}G_(t,n){const r=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((l=>{r((()=>this.z_(l)))})),this.stream.onMessage((l=>{r((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return ot(T0,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget((()=>this.D_===t?n():(ot(T0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class WC extends GE{constructor(t,n,r,l,u,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,l,d),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=rC(this.serializer,t),r=(function(u){if(!("targetChange"in u))return vt.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?vt.min():d.readTime?Oi(d.readTime):vt.min()})(t);return this.listener.H_(n,r)}Z_(t){const n={};n.database=Sm(this.serializer),n.addTarget=(function(u,d){let p;const y=d.target;if(p=_m(y)?{documents:lC(u,y)}:{query:uC(u,y).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=DE(u,d.resumeToken);const _=Em(u,d.expectedCount);_!==null&&(p.expectedCount=_)}else if(d.snapshotVersion.compareTo(vt.min())>0){p.readTime=ah(u,d.snapshotVersion.toTimestamp());const _=Em(u,d.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,t);const r=hC(this.serializer,t);r&&(n.labels=r),this.K_(n)}X_(t){const n={};n.database=Sm(this.serializer),n.removeTarget=t,this.K_(n)}}class tx extends GE{constructor(t,n,r,l,u,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,l,d),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Kt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Kt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Kt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=oC(t.writeResults,t.commitTime),r=Oi(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Sm(this.serializer),this.K_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((r=>aC(this.serializer,r)))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{}class nx extends ex{constructor(t,n,r,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new lt($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,r,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Wo(t,bm(n,r),l,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new lt($.UNKNOWN,u.toString())}))}jo(t,n,r,l,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.jo(t,bm(n,r),l,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new lt($.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function ix(s,t,n,r){return new nx(s,t,n,r)}class sx{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(us(n),this.aa=!1):ot("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="RemoteStore";class rx{constructor(t,n,r,l,u){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new sr(1e3),this.Va=new sr(1001),this.da=new Set,this.ma=[],this.fa=u,this.fa.Mo((d=>{r.enqueueAndForget((async()=>{ea(this)&&(ot(Ui,"Restarting streams for network reachability change."),await(async function(y){const _=Et(y);_.da.add(4),await Zl(_),_.ga.set("Unknown"),_.da.delete(4),await Ih(_)})(this))}))})),this.ga=new sx(r,l)}}async function Ih(s){if(ea(s))for(const t of s.ma)await t(!0)}async function Zl(s){for(const t of s.ma)await t(!1)}function Im(s,t){return s.Ea.get(t)||void 0}function FE(s,t){const n=Et(s),r=Im(n,t.targetId);if(r!==void 0&&n.Ia.has(r))return;const l=(function(p,y){const _=Im(p,y);_!==void 0&&p.Ra.delete(_);const E=(function(k,K){return K%2!=0?k.Va.next():k.Aa.next()})(p,y);return p.Ea.set(y,E),p.Ra.set(E,y),E})(n,t.targetId);ot(Ui,"remoteStoreListen mapping SDK target ID to remote",t.targetId,l);const u=new as(t.target,l,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n.Ia.set(l,u),hp(n)?cp(n):go(n).O_()&&up(n,u)}function lp(s,t){const n=Et(s),r=go(n),l=Im(n,t);ot(Ui,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,l),n.Ia.delete(l),n.Ea.delete(t),n.Ra.delete(l),r.O_()&&KE(n,l),n.Ia.size===0&&(r.O_()?r.L_():ea(n)&&n.ga.set("Unknown"))}function up(s,t){if(s.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(vt.min())>0){const n=s.Ra.get(t.targetId);if(n===void 0)return void ot(Ui,"SDK target ID not found for remote ID: "+t.targetId);const r=s.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}go(s).Z_(t)}function KE(s,t){s.pa.$e(t),go(s).X_(t)}function cp(s){s.pa=new Z2({getRemoteKeysForTarget:t=>{const n=s.Ra.get(t);return n!==void 0?s.remoteSyncer.getRemoteKeysForTarget(n):Nt()},At:t=>s.Ia.get(t)||null,ht:()=>s.datastore.serializer.databaseId}),go(s).start(),s.ga.ua()}function hp(s){return ea(s)&&!go(s).x_()&&s.Ia.size>0}function ea(s){return Et(s).da.size===0}function QE(s){s.pa=void 0}async function ax(s){s.ga.set("Online")}async function ox(s){s.Ia.forEach(((t,n)=>{up(s,t)}))}async function lx(s,t){QE(s),hp(s)?(s.ga.ha(t),cp(s)):s.ga.set("Unknown")}async function ux(s,t,n){if(s.ga.set("Online"),t instanceof NE&&t.state===2&&t.cause)try{await(async function(l,u){const d=u.cause;for(const p of u.targetIds){if(l.Ia.has(p)){const y=l.Ra.get(p);y!==void 0&&(await l.remoteSyncer.rejectListen(y,d),l.Ea.delete(y),l.Ra.delete(p)),l.Ia.delete(p)}l.pa.removeTarget(p)}})(s,t)}catch(r){ot(Ui,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await lh(s,r)}else if(t instanceof Gc?s.pa.Xe(t):t instanceof xE?s.pa.st(t):s.pa.tt(t),!n.isEqual(vt.min()))try{const r=await qE(s.localStore);n.compareTo(r)>=0&&await(function(u,d){const p=u.pa.Tt(d);p.targetChanges.forEach(((_,E)=>{if(_.resumeToken.approximateByteSize()>0){const A=u.Ia.get(E);A&&u.Ia.set(E,A.withResumeToken(_.resumeToken,d))}})),p.targetMismatches.forEach(((_,E)=>{const A=u.Ia.get(_);if(!A)return;u.Ia.set(_,A.withResumeToken(Qe.EMPTY_BYTE_STRING,A.snapshotVersion)),KE(u,_);const k=new as(A.target,_,E,A.sequenceNumber);up(u,k)}));const y=(function(E,A){const k=new Map;A.targetChanges.forEach(((W,nt)=>{const it=E.Ra.get(nt);it!==void 0&&k.set(it,W)}));let K=new ue(xt);return A.targetMismatches.forEach(((W,nt)=>{const it=E.Ra.get(W);it!==void 0&&(K=K.insert(it,nt))})),new $l(A.snapshotVersion,k,K,A.documentUpdates,A.resolvedLimboDocuments)})(u,p);return u.remoteSyncer.applyRemoteEvent(y)})(s,n)}catch(r){ot(Ui,"Failed to raise snapshot:",r),await lh(s,r)}}async function lh(s,t,n){if(!mo(t))throw t;s.da.add(1),await Zl(s),s.ga.set("Offline"),n||(n=()=>qE(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{ot(Ui,"Retrying IndexedDB access"),await n(),s.da.delete(1),await Ih(s)}))}function YE(s,t){return t().catch((n=>lh(s,n,t)))}async function Ch(s){const t=Et(s),n=rr(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Qm;for(;cx(t);)try{const l=await GC(t.localStore,r);if(l===null){t.Ta.length===0&&n.L_();break}r=l.batchId,hx(t,l)}catch(l){await lh(t,l)}XE(t)&&$E(t)}function cx(s){return ea(s)&&s.Ta.length<10}function hx(s,t){s.Ta.push(t);const n=rr(s);n.O_()&&n.Y_&&n.ea(t.mutations)}function XE(s){return ea(s)&&!rr(s).x_()&&s.Ta.length>0}function $E(s){rr(s).start()}async function fx(s){rr(s).ra()}async function dx(s){const t=rr(s);for(const n of s.Ta)t.ea(n.mutations)}async function mx(s,t,n){const r=s.Ta.shift(),l=ep.from(r,t,n);await YE(s,(()=>s.remoteSyncer.applySuccessfulWrite(l))),await Ch(s)}async function px(s,t){t&&rr(s).Y_&&await(async function(r,l){if((function(d){return X2(d)&&d!==$.ABORTED})(l.code)){const u=r.Ta.shift();rr(r).B_(),await YE(r,(()=>r.remoteSyncer.rejectFailedWrite(u.batchId,l))),await Ch(r)}})(s,t),XE(s)&&$E(s)}async function E0(s,t){const n=Et(s);n.asyncQueue.verifyOperationInProgress(),ot(Ui,"RemoteStore received new credentials");const r=ea(n);n.da.add(3),await Zl(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await Ih(n)}async function gx(s,t){const n=Et(s);t?(n.da.delete(2),await Ih(n)):t||(n.da.add(2),await Zl(n),n.ga.set("Unknown"))}function go(s){return s.ya||(s.ya=(function(n,r,l){const u=Et(n);return u.sa(),new WC(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(s.datastore,s.asyncQueue,{Zo:ax.bind(null,s),Yo:ox.bind(null,s),t_:lx.bind(null,s),H_:ux.bind(null,s)}),s.ma.push((async t=>{t?(s.ya.B_(),hp(s)?cp(s):s.ga.set("Unknown")):(await s.ya.stop(),QE(s))}))),s.ya}function rr(s){return s.wa||(s.wa=(function(n,r,l){const u=Et(n);return u.sa(),new tx(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(s.datastore,s.asyncQueue,{Zo:()=>Promise.resolve(),Yo:fx.bind(null,s),t_:px.bind(null,s),ta:dx.bind(null,s),na:mx.bind(null,s)}),s.ma.push((async t=>{t?(s.wa.B_(),await Ch(s)):(await s.wa.stop(),s.Ta.length>0&&(ot(Ui,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,n,r,l,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=l,this.removalCallback=u,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,l,u){const d=Date.now()+r,p=new fp(t,n,d,l,u);return p.start(r),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(s,t){if(us("AsyncQueue",`${t}: ${s}`),mo(s))return new lt($.UNAVAILABLE,`${t}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{static emptySet(t){return new eo(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||dt.comparator(n.key,r.key):(n,r)=>dt.comparator(n.key,r.key),this.keyedMap=wl(),this.sortedSet=new ue(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof eo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=r.getNext().key;if(!l.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.Sa=new ue(dt.comparator)}track(t){const n=t.doc.key,r=this.Sa.get(n);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(n):t.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:t.doc}):pt(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(n,t)}Da(){const t=[];return this.Sa.inorderTraversal(((n,r)=>{t.push(r)})),t}}class lo{constructor(t,n,r,l,u,d,p,y,_){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=l,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(t,n,r,l,u){const d=[];return n.forEach((p=>{d.push({type:0,doc:p})})),new lo(t,n,eo.emptySet(n),d,r,l,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==r[l].type||!n[l].doc.isEqual(r[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((t=>t.Ma()))}}class _x{constructor(){this.queries=A0(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const l=Et(n),u=l.queries;l.queries=A0(),u.forEach(((d,p)=>{for(const y of p.va)y.onError(r)}))})(this,new lt($.ABORTED,"Firestore shutting down"))}}function A0(){return new Wr((s=>gE(s)),bh)}async function vx(s,t){const n=Et(s);let r=3;const l=t.query;let u=n.queries.get(l);u?!u.Fa()&&t.Ma()&&(r=2):(u=new yx,r=t.Ma()?0:1);try{switch(r){case 0:u.Ca=await n.onListen(l,!0);break;case 1:u.Ca=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(d){const p=dp(d,`Initialization of query '${Ya(t.query)}' failed`);return void t.onError(p)}n.queries.set(l,u),u.va.push(t),t.Oa(n.onlineState),u.Ca&&t.Na(u.Ca)&&mp(n)}async function Tx(s,t){const n=Et(s),r=t.query;let l=3;const u=n.queries.get(r);if(u){const d=u.va.indexOf(t);d>=0&&(u.va.splice(d,1),u.va.length===0?l=t.Ma()?0:1:!u.Fa()&&t.Ma()&&(l=2))}switch(l){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ex(s,t){const n=Et(s);let r=!1;for(const l of t){const u=l.query,d=n.queries.get(u);if(d){for(const p of d.va)p.Na(l)&&(r=!0);d.Ca=l}}r&&mp(n)}function bx(s,t,n){const r=Et(s),l=r.queries.get(t);if(l)for(const u of l.va)u.onError(n);r.queries.delete(t)}function mp(s){s.xa.forEach((t=>{t.next()}))}var Cm,S0;(S0=Cm||(Cm={})).Ba="default",S0.Cache="cache";class Ax{constructor(t,n,r){this.query=t,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const l of t.docChanges)l.type!==3&&r.push(l);t=new lo(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ka?this.qa(t)&&(this.La.next(t),n=!0):this.Ua(t,this.onlineState)&&(this.$a(t),n=!0),this.Ka=t,n}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),n=!0),n}Ua(t,n){if(!t.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(t){t=lo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==Cm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t){this.key=t}}class ZE{constructor(t){this.key=t}}class Sx{constructor(t,n){this.query=t,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Nt(),this.mutatedKeys=Nt(),this.iu=yE(t),this.su=new eo(this.iu)}get ou(){return this.tu}_u(t,n){const r=n?n.au:new b0,l=n?n.su:this.su;let u=n?n.mutatedKeys:this.mutatedKeys,d=l,p=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((E,A)=>{const k=l.get(E),K=Ah(this.query,A)?A:null,W=!!k&&this.mutatedKeys.has(k.key),nt=!!K&&(K.hasLocalMutations||this.mutatedKeys.has(K.key)&&K.hasCommittedMutations);let it=!1;k&&K?k.data.isEqual(K.data)?W!==nt&&(r.track({type:3,doc:K}),it=!0):this.uu(k,K)||(r.track({type:2,doc:K}),it=!0,(y&&this.iu(K,y)>0||_&&this.iu(K,_)<0)&&(p=!0)):!k&&K?(r.track({type:0,doc:K}),it=!0):k&&!K&&(r.track({type:1,doc:k}),it=!0,(y||_)&&(p=!0)),it&&(K?(d=d.add(K),u=nt?u.add(E):u.delete(E)):(d=d.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const E=this.query.limitType==="F"?d.last():d.first();d=d.delete(E.key),u=u.delete(E.key),r.track({type:1,doc:E})}return{su:d,au:r,bs:p,mutatedKeys:u}}uu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,l){const u=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const d=t.au.Da();d.sort(((E,A)=>(function(K,W){const nt=it=>{switch(it){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pt(20277,{Vt:it})}};return nt(K)-nt(W)})(E.type,A.type)||this.iu(E.doc,A.doc))),this.cu(r),l=l??!1;const p=n&&!l?this.lu():[],y=this.ru.size===0&&this.current&&!l?1:0,_=y!==this.nu;return this.nu=y,d.length!==0||_?{snapshot:new lo(this.query,t.su,u,d,t.mutatedKeys,y===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:p}:{hu:p}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new b0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach((n=>this.tu=this.tu.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.tu=this.tu.delete(n))),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=Nt(),this.su.forEach((r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))}));const n=[];return t.forEach((r=>{this.ru.has(r)||n.push(new ZE(r))})),this.ru.forEach((r=>{t.has(r)||n.push(new JE(r))})),n}Tu(t){this.tu=t.ks,this.ru=Nt();const n=this._u(t.documents);return this.applyChanges(n,!0)}Iu(){return lo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const pp="SyncEngine";class wx{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Rx{constructor(t){this.key=t,this.Eu=!1}}class Ix{constructor(t,n,r,l,u,d){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=l,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Ru={},this.Au=new Wr((p=>gE(p)),bh),this.Vu=new Map,this.du=new Set,this.mu=new ue(dt.comparator),this.fu=new Map,this.gu=new sp,this.pu={},this.yu=new Map,this.wu=sr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Cx(s,t,n=!0){const r=sb(s);let l;const u=r.Au.get(t);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),l=u.view.Iu()):l=await WE(r,t,n,!0),l}async function xx(s,t){const n=sb(s);await WE(n,t,!0,!1)}async function WE(s,t,n,r){const l=await FC(s.localStore,Ni(t)),u=l.targetId,d=s.sharedClientState.addLocalQueryTarget(u,n);let p;return r&&(p=await Nx(s,t,u,d==="current",l.resumeToken)),s.isPrimaryClient&&n&&FE(s.remoteStore,l),p}async function Nx(s,t,n,r,l){s.bu=(A,k,K)=>(async function(nt,it,gt,_t){let bt=it.view._u(gt);bt.bs&&(bt=await g0(nt.localStore,it.query,!1).then((({documents:x})=>it.view._u(x,bt))));const Ut=_t&&_t.targetChanges.get(it.targetId),Ft=_t&&_t.targetMismatches.get(it.targetId)!=null,Pt=it.view.applyChanges(bt,nt.isPrimaryClient,Ut,Ft);return R0(nt,it.targetId,Pt.hu),Pt.snapshot})(s,A,k,K);const u=await g0(s.localStore,t,!0),d=new Sx(t,u.ks),p=d._u(u.documents),y=Jl.createSynthesizedTargetChangeForCurrentChange(n,r&&s.onlineState!=="Offline",l),_=d.applyChanges(p,s.isPrimaryClient,y);R0(s,n,_.hu);const E=new wx(t,n,d);return s.Au.set(t,E),s.Vu.has(n)?s.Vu.get(n).push(t):s.Vu.set(n,[t]),_.snapshot}async function Dx(s,t,n){const r=Et(s),l=r.Au.get(t),u=r.Vu.get(l.targetId);if(u.length>1)return r.Vu.set(l.targetId,u.filter((d=>!bh(d,t)))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(l.targetId),r.sharedClientState.isActiveQueryTarget(l.targetId)||await wm(r.localStore,l.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(l.targetId),n&&lp(r.remoteStore,l.targetId),xm(r,l.targetId)})).catch(fo)):(xm(r,l.targetId),await wm(r.localStore,l.targetId,!0))}async function Ox(s,t){const n=Et(s),r=n.Au.get(t),l=n.Vu.get(r.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lp(n.remoteStore,r.targetId))}async function Mx(s,t,n){const r=zx(s);try{const l=await(function(d,p){const y=Et(d),_=ae.now(),E=p.reduce(((K,W)=>K.add(W.key)),Nt());let A,k;return y.persistence.runTransaction("Locally write mutations","readwrite",(K=>{let W=cs(),nt=Nt();return y.xs.getEntries(K,E).next((it=>{W=it,W.forEach(((gt,_t)=>{_t.isValidDocument()||(nt=nt.add(gt))}))})).next((()=>y.localDocuments.getOverlayedDocuments(K,W))).next((it=>{A=it;const gt=[];for(const _t of p){const bt=G2(_t,A.get(_t.key).overlayedDocument);bt!=null&&gt.push(new ta(_t.key,bt,lE(bt.value.mapValue),Di.exists(!0)))}return y.mutationQueue.addMutationBatch(K,_,gt,p)})).next((it=>{k=it;const gt=it.applyToLocalDocumentSet(A,nt);return y.documentOverlayCache.saveOverlays(K,it.batchId,gt)}))})).then((()=>({batchId:k.batchId,changes:vE(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(l.batchId),(function(d,p,y){let _=d.pu[d.currentUser.toKey()];_||(_=new ue(xt)),_=_.insert(p,y),d.pu[d.currentUser.toKey()]=_})(r,l.batchId,n),await Wl(r,l.changes),await Ch(r.remoteStore)}catch(l){const u=dp(l,"Failed to persist write");n.reject(u)}}async function tb(s,t){const n=Et(s);try{const r=await qC(n.localStore,t);t.targetChanges.forEach(((l,u)=>{const d=n.fu.get(u);d&&(Kt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.Eu=!0:l.modifiedDocuments.size>0?Kt(d.Eu,14607):l.removedDocuments.size>0&&(Kt(d.Eu,42227),d.Eu=!1))})),await Wl(n,r,t)}catch(r){await fo(r)}}function w0(s,t,n){const r=Et(s);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const l=[];r.Au.forEach(((u,d)=>{const p=d.view.Oa(t);p.snapshot&&l.push(p.snapshot)})),(function(d,p){const y=Et(d);y.onlineState=p;let _=!1;y.queries.forEach(((E,A)=>{for(const k of A.va)k.Oa(p)&&(_=!0)})),_&&mp(y)})(r.eventManager,t),l.length&&r.Ru.H_(l),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vx(s,t,n){const r=Et(s);r.sharedClientState.updateQueryState(t,"rejected",n);const l=r.fu.get(t),u=l&&l.key;if(u){let d=new ue(dt.comparator);d=d.insert(u,Je.newNoDocument(u,vt.min()));const p=Nt().add(u),y=new $l(vt.min(),new Map,new ue(xt),d,p);await tb(r,y),r.mu=r.mu.remove(u),r.fu.delete(t),gp(r)}else await wm(r.localStore,t,!1).then((()=>xm(r,t,n))).catch(fo)}async function kx(s,t){const n=Et(s),r=t.batch.batchId;try{const l=await BC(n.localStore,t);nb(n,r,null),eb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wl(n,l)}catch(l){await fo(l)}}async function Lx(s,t,n){const r=Et(s);try{const l=await(function(d,p){const y=Et(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,p).next((A=>(Kt(A!==null,37113),E=A.keys(),y.mutationQueue.removeMutationBatch(_,A)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(r.localStore,t);nb(r,t,n),eb(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Wl(r,l)}catch(l){await fo(l)}}function eb(s,t){(s.yu.get(t)||[]).forEach((n=>{n.resolve()})),s.yu.delete(t)}function nb(s,t,n){const r=Et(s);let l=r.pu[r.currentUser.toKey()];if(l){const u=l.get(t);u&&(n?u.reject(n):u.resolve(),l=l.remove(t)),r.pu[r.currentUser.toKey()]=l}}function xm(s,t,n=null){s.sharedClientState.removeLocalQueryTarget(t);for(const r of s.Vu.get(t))s.Au.delete(r),n&&s.Ru.Du(r,n);s.Vu.delete(t),s.isPrimaryClient&&s.gu.Gr(t).forEach((r=>{s.gu.containsKey(r)||ib(s,r)}))}function ib(s,t){s.du.delete(t.path.canonicalString());const n=s.mu.get(t);n!==null&&(lp(s.remoteStore,n),s.mu=s.mu.remove(t),s.fu.delete(n),gp(s))}function R0(s,t,n){for(const r of n)r instanceof JE?(s.gu.addReference(r.key,t),Ux(s,r)):r instanceof ZE?(ot(pp,"Document no longer in limbo: "+r.key),s.gu.removeReference(r.key,t),s.gu.containsKey(r.key)||ib(s,r.key)):pt(19791,{Cu:r})}function Ux(s,t){const n=t.key,r=n.path.canonicalString();s.mu.get(n)||s.du.has(r)||(ot(pp,"New document in limbo: "+n),s.du.add(r),gp(s))}function gp(s){for(;s.du.size>0&&s.mu.size<s.maxConcurrentLimboResolutions;){const t=s.du.values().next().value;s.du.delete(t);const n=new dt(ie.fromString(t)),r=s.wu.next();s.fu.set(r,new Rx(n)),s.mu=s.mu.insert(n,r),FE(s.remoteStore,new as(Ni(Zm(n.path)),r,"TargetPurposeLimboResolution",vh.ce))}}async function Wl(s,t,n){const r=Et(s),l=[],u=[],d=[];r.Au.isEmpty()||(r.Au.forEach(((p,y)=>{d.push(r.bu(y,t,n).then((_=>{var E;if((_||n)&&r.isPrimaryClient){const A=_?!_.fromCache:(E=n==null?void 0:n.targetChanges.get(y.targetId))==null?void 0:E.current;r.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(_){l.push(_);const A=ap.Es(y.targetId,_);u.push(A)}})))})),await Promise.all(d),r.Ru.H_(l),await(async function(y,_){const E=Et(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>J.forEach(_,(k=>J.forEach(k.Ts,(K=>E.persistence.referenceDelegate.addReference(A,k.targetId,K))).next((()=>J.forEach(k.Is,(K=>E.persistence.referenceDelegate.removeReference(A,k.targetId,K)))))))))}catch(A){if(!mo(A))throw A;ot(op,"Failed to update sequence numbers: "+A)}for(const A of _){const k=A.targetId;if(!A.fromCache){const K=E.vs.get(k),W=K.snapshotVersion,nt=K.withLastLimboFreeSnapshotVersion(W);E.vs=E.vs.insert(k,nt)}}})(r.localStore,u))}async function Px(s,t){const n=Et(s);if(!n.currentUser.isEqual(t)){ot(pp,"User change. New user:",t.toKey());const r=await BE(n.localStore,t);n.currentUser=t,(function(u,d){u.yu.forEach((p=>{p.forEach((y=>{y.reject(new lt($.CANCELLED,d))}))})),u.yu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Wl(n,r.Ns)}}function jx(s,t){const n=Et(s),r=n.fu.get(t);if(r&&r.Eu)return Nt().add(r.key);{let l=Nt();const u=n.Vu.get(t);if(!u)return l;for(const d of u){const p=n.Au.get(d);l=l.unionWith(p.view.ou)}return l}}function sb(s){const t=Et(s);return t.remoteStore.remoteSyncer.applyRemoteEvent=tb.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jx.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vx.bind(null,t),t.Ru.H_=Ex.bind(null,t.eventManager),t.Ru.Du=bx.bind(null,t.eventManager),t}function zx(s){const t=Et(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kx.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lx.bind(null,t),t}class uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Rh(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,n){return null}Bu(t,n){return null}Ou(t){return zC(this.persistence,new UC,t.initialUser,this.serializer)}xu(t){return new zE(rp.Vi,this.serializer)}Mu(t){return new QC}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uh.provider={build:()=>new uh};class Bx extends uh{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,n){Kt(this.persistence.referenceDelegate instanceof oh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bC(r,t.asyncQueue,n)}xu(t){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new zE((r=>oh.Vi(r,n)),this.serializer)}}class Nm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>w0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Px.bind(null,this.syncEngine),await gx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new _x})()}createDatastore(t){const n=Rh(t.databaseInfo.databaseId),r=ZC(t.databaseInfo);return ix(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,l,u,d,p){return new rx(r,l,u,d,p)})(this.localStore,this.datastore,t.asyncQueue,(n=>w0(this.syncEngine,n,0)),(function(){return v0.v()?new v0:new YC})())}createSyncEngine(t,n){return(function(l,u,d,p,y,_,E){const A=new Ix(l,u,d,p,y,_);return E&&(A.Su=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await(async function(l){const u=Et(l);ot(Ui,"RemoteStore shutting down."),u.da.add(5),await Zl(u),u.fa.shutdown(),u.ga.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Nm.provider={build:()=>new Nm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):us("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="FirestoreClient";class Hx{constructor(t,n,r,l,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=l,this.user=$e.UNAUTHENTICATED,this.clientId=Km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,(async d=>{ot(ar,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(r,(d=>(ot(ar,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=dp(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Zd(s,t){s.asyncQueue.verifyOperationInProgress(),ot(ar,"Initializing OfflineComponentProvider");const n=s.configuration;await t.initialize(n);let r=n.initialUser;s.setCredentialChangeListener((async l=>{r.isEqual(l)||(await BE(t.localStore,l),r=l)})),t.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=t}async function I0(s,t){s.asyncQueue.verifyOperationInProgress();const n=await Gx(s);ot(ar,"Initializing OnlineComponentProvider"),await t.initialize(n,s.configuration),s.setCredentialChangeListener((r=>E0(t.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,l)=>E0(t.remoteStore,l))),s._onlineComponents=t}async function Gx(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){ot(ar,"Using user provided OfflineComponentProvider");try{await Zd(s,s._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(l){return l.name==="FirebaseError"?l.code===$.FAILED_PRECONDITION||l.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await Zd(s,new uh)}}else ot(ar,"Using default OfflineComponentProvider"),await Zd(s,new Bx(void 0));return s._offlineComponents}async function rb(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(ot(ar,"Using user provided OnlineComponentProvider"),await I0(s,s._uninitializedComponentsProvider._online)):(ot(ar,"Using default OnlineComponentProvider"),await I0(s,new Nm))),s._onlineComponents}function Fx(s){return rb(s).then((t=>t.syncEngine))}async function C0(s){const t=await rb(s),n=t.eventManager;return n.onListen=Cx.bind(null,t.syncEngine),n.onUnlisten=Dx.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=xx.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Ox.bind(null,t.syncEngine),n}function Kx(s,t,n,r){const l=new qx(r),u=new Ax(t,l,n);return s.asyncQueue.enqueueAndForget((async()=>vx(await C0(s),u))),()=>{l.Ku(),s.asyncQueue.enqueueAndForget((async()=>Tx(await C0(s),u)))}}function Qx(s,t){const n=new qr;return s.asyncQueue.enqueueAndForget((async()=>Mx(await Fx(s),t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="ComponentProvider",x0=new Map;function Xx(s,t,n,r,l){return new f2(s,t,n,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ab(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firestore.googleapis.com",N0=!0;class D0{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new lt($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ob,this.ssl=N0}else this.host=t.host,this.ssl=t.ssl??N0;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=jE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<TC)throw new lt($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}e2("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ab(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new lt($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new lt($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new lt($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,l){return r.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xh{constructor(t,n,r,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lt($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new lt($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new FI;switch(r.type){case"firstParty":return new XI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new lt($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=x0.get(n);r&&(ot(Yx,"Removing Datastore"),x0.delete(n),r.terminate())})(this),Promise.resolve()}}function $x(s,t,n,r={}){var _;s=Hr(s,xh);const l=Gl(t),u=s._getSettings(),d={...u,emulatorOptions:s._getEmulatorOptions()},p=`${t}:${n}`;l&&aT(`https://${p}`),u.host!==ob&&u.host!==p&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:p,ssl:l,emulatorOptions:r};if(!Ws(y,d)&&(s._setSettings(y),r.mockUserToken)){let E,A;if(typeof r.mockUserToken=="string")E=r.mockUserToken,A=$e.MOCK_USER;else{E=gw(r.mockUserToken,(_=s._app)==null?void 0:_.options.projectId);const k=r.mockUserToken.sub||r.mockUserToken.user_id;if(!k)throw new lt($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new $e(k)}s._authCredentials=new KI(new $T(E,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new na(this.firestore,t,this._query)}}class Ne{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ne(this.firestore,t,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Yl(n,Ne._jsonSchema))return new Ne(t,r||null,new dt(ie.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:xe("string",Ne._jsonSchemaVersion),referencePath:xe("string")};class Zs extends na{constructor(t,n,r){super(t,n,Zm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ne(this.firestore,null,new dt(t))}withConverter(t){return new Zs(this.firestore,t,this._path)}}function O0(s,t,...n){if(s=Ke(s),JT("collection","path",t),s instanceof xh){const r=ie.fromString(t,...n);return Hv(r),new Zs(s,null,r)}{if(!(s instanceof Ne||s instanceof Zs))throw new lt($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(ie.fromString(t,...n));return Hv(r),new Zs(s.firestore,null,r)}}function kc(s,t,...n){if(s=Ke(s),arguments.length===1&&(t=Km.newId()),JT("doc","path",t),s instanceof xh){const r=ie.fromString(t,...n);return qv(r),new Ne(s,null,new dt(r))}{if(!(s instanceof Ne||s instanceof Zs))throw new lt($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(ie.fromString(t,...n));return qv(r),new Ne(s.firestore,s instanceof Zs?s.converter:null,new dt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="AsyncQueue";class V0{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new HE(this,"async_queue_retry"),this.lc=()=>{const r=Jd();r&&ot(M0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const n=Jd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const n=Jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise((()=>{}));const n=new qr;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.rc.push(t),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!mo(t))throw t;ot(M0,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(t){const n=this.hc.then((()=>(this.ac=!0,t().catch((r=>{throw this._c=r,this.ac=!1,us("INTERNAL UNHANDLED ERROR: ",k0(r)),r})).then((r=>(this.ac=!1,r))))));return this.hc=n,n}enqueueAfterDelay(t,n,r){this.Pc(),this.cc.indexOf(t)>-1&&(n=0);const l=fp.createAndSchedule(this,t,n,r,(u=>this.Ec(u)));return this.oc.push(l),l}Pc(){this._c&&pt(47125,{Rc:k0(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const n of this.oc)if(n.timerId===t)return!0;return!1}dc(t){return this.Ac().then((()=>{this.oc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.oc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ac()}))}mc(t){this.cc.push(t)}Ec(t){const n=this.oc.indexOf(t);this.oc.splice(n,1)}}function k0(s){let t=s.message||"";return s.stack&&(t=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),t}class ql extends xh{constructor(t,n,r,l){super(t,n,r,l),this.type="firestore",this._queue=new V0,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new V0(t),this._firestoreClient=void 0,await t}}}function Jx(s,t){const n=typeof s=="object"?s:Vm(),r=typeof s=="string"?s:eh,l=Jr(n,"firestore").getImmediate({identifier:r});if(!l._initialized){const u=mw("firestore");u&&$x(l,...u)}return l}function lb(s){if(s._terminated)throw new lt($.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Zx(s),s._firestoreClient}function Zx(s){var r,l,u,d;const t=s._freezeSettings(),n=Xx(s._databaseId,((r=s._app)==null?void 0:r.options.appId)||"",s._persistenceKey,(l=s._app)==null?void 0:l.options.apiKey,t);s._componentsProvider||(u=t.localCache)!=null&&u._offlineComponentProvider&&((d=t.localCache)!=null&&d._onlineComponentProvider)&&(s._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),s._firestoreClient=new Hx(s._authCredentials,s._appCheckCredentials,s._queue,n,s._componentsProvider&&(function(y){const _=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(_),_online:_}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Un(Qe.fromBase64String(t))}catch(n){throw new lt($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Un(Qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Yl(t,Un._jsonSchema))return Un.fromBase64String(t.bytes)}}Un._jsonSchemaVersion="firestore/bytes/1.0",Un._jsonSchema={type:xe("string",Un._jsonSchemaVersion),bytes:xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new lt($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new lt($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new lt($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mi._jsonSchemaVersion}}static fromJSON(t){if(Yl(t,Mi._jsonSchema))return new Mi(t.latitude,t.longitude)}}Mi._jsonSchemaVersion="firestore/geoPoint/1.0",Mi._jsonSchema={type:xe("string",Mi._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,l){if(r.length!==l.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==l[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Yl(t,ni._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new ni(t.vectorValues);throw new lt($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ni._jsonSchemaVersion="firestore/vectorValue/1.0",ni._jsonSchema={type:xe("string",ni._jsonSchemaVersion),vectorValues:xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=/^__.*__$/;class tN{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ta(t,this.data,this.fieldMask,n,this.fieldTransforms):new Xl(t,this.data,n,this.fieldTransforms)}}function hb(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pt(40011,{dataSource:s})}}class yp{constructor(t,n,r,l,u,d){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=l,u===void 0&&this.fc(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new yp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var l;const n=(l=this.path)==null?void 0:l.child(t),r=this.i({path:n,arrayElement:!1});return r.wc(t),r}Sc(t){var l;const n=(l=this.path)==null?void 0:l.child(t),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return ch(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(hb(this.dataSource)&&Wx.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class eN{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Rh(t)}V(t,n,r,l=!1){return new yp({dataSource:t,methodName:n,targetDoc:r,path:Fe.emptyPath(),arrayElement:!1,hasConverter:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fb(s){const t=s._freezeSettings(),n=Rh(s._databaseId);return new eN(s._databaseId,!!t.ignoreUndefinedProperties,n)}function nN(s,t,n,r,l,u={}){const d=s.V(u.merge||u.mergeFields?2:0,t,n,l);pb("Data must be an object, but it was:",d,r);const p=db(r,d);let y,_;if(u.merge)y=new ti(d.fieldMask),_=d.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const k=Nh(t,A,n);if(!d.contains(k))throw new lt($.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);aN(E,k)||E.push(k)}y=new ti(E),_=d.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,_=d.fieldTransforms;return new tN(new Ln(p),y,_)}function iN(s,t,n,r=!1){return _p(n,s.V(r?4:3,t))}function _p(s,t){if(mb(s=Ke(s)))return pb("Unsupported field value:",t,s),db(s,t);if(s instanceof cb)return(function(r,l){if(!hb(l.dataSource))throw l.Dc(`${r._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Dc(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(l);u&&l.fieldTransforms.push(u)})(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return(function(r,l){const u=[];let d=0;for(const p of r){let y=_p(p,l.bc(d));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),d++}return{arrayValue:{values:u}}})(s,t)}return(function(r,l){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P2(l.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=ae.fromDate(r);return{timestampValue:ah(l.serializer,u)}}if(r instanceof ae){const u=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ah(l.serializer,u)}}if(r instanceof Mi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:DE(l.serializer,r._byteString)};if(r instanceof Ne){const u=l.databaseId,d=r.firestore._databaseId;if(!d.isEqual(u))throw l.Dc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ip(r.firestore._databaseId||l.databaseId,r._key.path)}}if(r instanceof ni)return(function(d,p){const y=d instanceof ni?d.toArray():d;return{mapValue:{fields:{[aE]:{stringValue:oE},[nh]:{arrayValue:{values:y.map((E=>{if(typeof E!="number")throw p.Dc("VectorValues must only contain numeric values.");return Wm(p.serializer,E)}))}}}}}})(r,l);if(PE(r))return r._toProto(l.serializer);throw l.Dc(`Unsupported field value: ${_h(r)}`)})(s,t)}function db(s,t){const n={};return tE(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zr(s,((r,l)=>{const u=_p(l,t.yc(r));u!=null&&(n[r]=u)})),{mapValue:{fields:n}}}function mb(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ae||s instanceof Mi||s instanceof Un||s instanceof Ne||s instanceof cb||s instanceof ni||PE(s))}function pb(s,t,n){if(!mb(n)||!ZT(n)){const r=_h(n);throw r==="an object"?t.Dc(s+" a custom object"):t.Dc(s+" "+r)}}function Nh(s,t,n){if((t=Ke(t))instanceof ub)return t._internalPath;if(typeof t=="string")return rN(s,t);throw ch("Field path arguments must be of type string or ",s,!1,void 0,n)}const sN=new RegExp("[~\\*/\\[\\]]");function rN(s,t,n){if(t.search(sN)>=0)throw ch(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,n);try{return new ub(...t.split("."))._internalPath}catch{throw ch(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,n)}}function ch(s,t,n,r,l){const u=r&&!r.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(u||d)&&(y+=" (found",u&&(y+=` in field ${r}`),d&&(y+=` in document ${l}`),y+=")"),new lt($.INVALID_ARGUMENT,p+s+y)}function aN(s,t){return s.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{convertValue(t,n="none"){switch(ir(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ye(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(nr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw pt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Zr(t,((l,u)=>{r[l]=this.convertValue(u,n)})),r}convertVectorValue(t){var r,l,u;const n=(u=(l=(r=t.fields)==null?void 0:r[nh].arrayValue)==null?void 0:l.values)==null?void 0:u.map((d=>ye(d.doubleValue)));return new ni(n)}convertGeoPoint(t){return new Mi(ye(t.latitude),ye(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Eh(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ll(t));default:return null}}convertTimestamp(t){const n=er(t);return new ae(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ie.fromString(t);Kt(UE(r),9688,{name:t});const l=new Ul(r.get(1),r.get(3)),u=new dt(r.popFirst(5));return l.isEqual(n)||us(`Document ${u} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb extends oN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Un(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}const L0="@firebase/firestore",U0="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(s){return(function(n,r){if(typeof n!="object"||n===null)return!1;const l=n;for(const u of r)if(u in l&&typeof l[u]=="function")return!0;return!1})(s,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(t,n,r,l,u){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Nh("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lN extends yb{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new lt($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}class _b extends vp{}function cN(s,t,...n){let r=[];t instanceof vp&&r.push(t),r=r.concat(n),(function(u){const d=u.filter((y=>y instanceof Ep)).length,p=u.filter((y=>y instanceof Tp)).length;if(d>1||d>0&&p>0)throw new lt($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const l of r)s=l._apply(s);return s}class Tp extends _b{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Tp(t,n,r)}_apply(t){const n=this._parse(t);return vb(t._query,n),new na(t.firestore,t.converter,vm(t._query,n))}_parse(t){const n=fb(t.firestore);return(function(u,d,p,y,_,E,A){let k;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new lt($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){z0(A,E);const W=[];for(const nt of A)W.push(j0(y,u,nt));k={arrayValue:{values:W}}}else k=j0(y,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||z0(A,E),k=iN(p,d,A,E==="in"||E==="not-in");return Ce.create(_,E,k)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ep extends vp{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ep(t,n)}_parse(t){const n=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:si.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(l,u){let d=l;const p=u.getFlattenedFilters();for(const y of p)vb(d,y),d=vm(d,y)})(t._query,n),new na(t.firestore,t.converter,vm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bp extends _b{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new bp(t,n)}_apply(t){const n=(function(l,u,d){if(l.startAt!==null)throw new lt($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new lt($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jl(u,d)})(t._query,this._field,this._direction);return new na(t.firestore,t.converter,N2(t._query,n))}}function hN(s,t="asc"){const n=t,r=Nh("orderBy",s);return bp._create(r,n)}function j0(s,t,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new lt($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pE(t)&&n.indexOf("/")!==-1)throw new lt($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ie.fromString(n));if(!dt.isDocumentKey(r))throw new lt($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jv(s,new dt(r))}if(n instanceof Ne)return Jv(s,n._key);throw new lt($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_h(n)}.`)}function z0(s,t){if(!Array.isArray(s)||s.length===0)throw new lt($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vb(s,t){const n=(function(l,u){for(const d of l)for(const p of d.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(s.filters,(function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new lt($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new lt($.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function fN(s,t,n){let r;return r=s?s.toFirestore(t):t,r}class Il{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gr extends yb{constructor(t,n,r,l,u,d){super(t,n,r,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Nh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new lt($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:xe("string",Gr._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class Fc extends Gr{data(t={}){return super.data(t)}}class no{constructor(t,n,r,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new Il(l.hasPendingWrites,l.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new Fc(this._firestore,this._userDataWriter,r.key,r,new Il(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new lt($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(l,u){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((p=>{const y=new Fc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Il(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const y=new Fc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Il(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,E=-1;return p.type!==0&&(_=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),E=d.indexOf(p.doc.key)),{type:dN(p.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new lt($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=no._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],l=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),r.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function dN(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pt(61501,{type:s})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */no._jsonSchemaVersion="firestore/querySnapshot/1.0",no._jsonSchema={type:xe("string",no._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};function Wd(s,t,n){s=Hr(s,Ne);const r=Hr(s.firestore,ql),l=fN(s.converter,t),u=fb(r);return Tb(r,[nN(u,"setDoc",s._key,l,s.converter!==null,n).toMutation(s._key,Di.none())])}function mN(s){return Tb(Hr(s.firestore,ql),[new tp(s._key,Di.none())])}function B0(s,...t){var _,E,A;s=Ke(s);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||P0(t[r])||(n=t[r++]);const l={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(P0(t[r])){const k=t[r];t[r]=(_=k.next)==null?void 0:_.bind(k),t[r+1]=(E=k.error)==null?void 0:E.bind(k),t[r+2]=(A=k.complete)==null?void 0:A.bind(k)}let u,d,p;if(s instanceof Ne)d=Hr(s.firestore,ql),p=Zm(s._key.path),u={next:k=>{t[r]&&t[r](pN(d,s,k))},error:t[r+1],complete:t[r+2]};else{const k=Hr(s,na);d=Hr(k.firestore,ql),p=k._query;const K=new gb(d);u={next:W=>{t[r]&&t[r](new no(d,K,k,W))},error:t[r+1],complete:t[r+2]},uN(s._query)}const y=lb(d);return Kx(y,p,l,u)}function Tb(s,t){const n=lb(s);return Qx(n,t)}function pN(s,t,n){const r=n.docs.get(t._key),l=new gb(s);return new Gr(s,l,t._key,r,new Il(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){GI(uo),Vi(new ii("firestore",((r,{instanceIdentifier:l,options:u})=>{const d=r.getProvider("app").getImmediate(),p=new ql(new QI(r.getProvider("auth-internal")),new $I(d,r.getProvider("app-check-internal")),d2(d,l),d);return u={useFetchStreams:n,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),Pn(L0,U0,t),Pn(L0,U0,"esm2020")})();const Eb="@firebase/installations",Ap="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=1e4,Ab=`w:${Ap}`,Sb="FIS_v2",gN="https://firebaseinstallations.googleapis.com/v1",yN=3600*1e3,_N="installations",vN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new $r(_N,vN,TN);function wb(s){return s instanceof ri&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb({projectId:s}){return`${gN}/projects/${s}/installations`}function Ib(s){return{token:s.token,requestStatus:2,expiresIn:bN(s.expiresIn),creationTime:Date.now()}}async function Cb(s,t){const r=(await t.json()).error;return Yr.create("request-failed",{requestName:s,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xb({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function EN(s,{refreshToken:t}){const n=xb(s);return n.append("Authorization",AN(t)),n}async function Nb(s){const t=await s();return t.status>=500&&t.status<600?s():t}function bN(s){return Number(s.replace("s","000"))}function AN(s){return`${Sb} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN({appConfig:s,heartbeatServiceProvider:t},{fid:n}){const r=Rb(s),l=xb(s),u=t.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&l.append("x-firebase-client",_)}const d={fid:n,authVersion:Sb,appId:s.appId,sdkVersion:Ab},p={method:"POST",headers:l,body:JSON.stringify(d)},y=await Nb(()=>fetch(r,p));if(y.ok){const _=await y.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:Ib(_.authToken)}}else throw await Cb("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(s){return new Promise(t=>{setTimeout(t,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^[cdef][\w-]{21}$/,Dm="";function IN(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const n=CN(s);return RN.test(n)?n:Dm}catch{return Dm}}function CN(s){return wN(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new Map;function Mb(s,t){const n=Dh(s);Vb(n,t),xN(n,t)}function Vb(s,t){const n=Ob.get(s);if(n)for(const r of n)r(t)}function xN(s,t){const n=NN();n&&n.postMessage({key:s,fid:t}),DN()}let zr=null;function NN(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=s=>{Vb(s.data.key,s.data.fid)}),zr}function DN(){Ob.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="firebase-installations-database",MN=1,Xr="firebase-installations-store";let tm=null;function Sp(){return tm||(tm=uT(ON,MN,{upgrade:(s,t)=>{switch(t){case 0:s.createObjectStore(Xr)}}})),tm}async function hh(s,t){const n=Dh(s),l=(await Sp()).transaction(Xr,"readwrite"),u=l.objectStore(Xr),d=await u.get(n);return await u.put(t,n),await l.done,(!d||d.fid!==t.fid)&&Mb(s,t.fid),t}async function kb(s){const t=Dh(s),r=(await Sp()).transaction(Xr,"readwrite");await r.objectStore(Xr).delete(t),await r.done}async function Oh(s,t){const n=Dh(s),l=(await Sp()).transaction(Xr,"readwrite"),u=l.objectStore(Xr),d=await u.get(n),p=t(d);return p===void 0?await u.delete(n):await u.put(p,n),await l.done,p&&(!d||d.fid!==p.fid)&&Mb(s,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(s){let t;const n=await Oh(s.appConfig,r=>{const l=VN(r),u=kN(s,l);return t=u.registrationPromise,u.installationEntry});return n.fid===Dm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function VN(s){const t=s||{fid:IN(),registrationStatus:0};return Lb(t)}function kN(s,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Yr.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=LN(s,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:UN(s)}:{installationEntry:t}}async function LN(s,t){try{const n=await SN(s,t);return hh(s.appConfig,n)}catch(n){throw wb(n)&&n.customData.serverCode===409?await kb(s.appConfig):await hh(s.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function UN(s){let t=await q0(s.appConfig);for(;t.registrationStatus===1;)await Db(100),t=await q0(s.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await wp(s);return r||n}return t}function q0(s){return Oh(s,t=>{if(!t)throw Yr.create("installation-not-found");return Lb(t)})}function Lb(s){return PN(s)?{fid:s.fid,registrationStatus:0}:s}function PN(s){return s.registrationStatus===1&&s.registrationTime+bb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN({appConfig:s,heartbeatServiceProvider:t},n){const r=zN(s,n),l=EN(s,n),u=t.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&l.append("x-firebase-client",_)}const d={installation:{sdkVersion:Ab,appId:s.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},y=await Nb(()=>fetch(r,p));if(y.ok){const _=await y.json();return Ib(_)}else throw await Cb("Generate Auth Token",y)}function zN(s,{fid:t}){return`${Rb(s)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(s,t=!1){let n;const r=await Oh(s.appConfig,u=>{if(!Ub(u))throw Yr.create("not-registered");const d=u.authToken;if(!t&&HN(d))return u;if(d.requestStatus===1)return n=BN(s,t),u;{if(!navigator.onLine)throw Yr.create("app-offline");const p=FN(u);return n=qN(s,p),p}});return n?await n:r.authToken}async function BN(s,t){let n=await H0(s.appConfig);for(;n.authToken.requestStatus===1;)await Db(100),n=await H0(s.appConfig);const r=n.authToken;return r.requestStatus===0?Rp(s,t):r}function H0(s){return Oh(s,t=>{if(!Ub(t))throw Yr.create("not-registered");const n=t.authToken;return KN(n)?{...t,authToken:{requestStatus:0}}:t})}async function qN(s,t){try{const n=await jN(s,t),r={...t,authToken:n};return await hh(s.appConfig,r),n}catch(n){if(wb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kb(s.appConfig);else{const r={...t,authToken:{requestStatus:0}};await hh(s.appConfig,r)}throw n}}function Ub(s){return s!==void 0&&s.registrationStatus===2}function HN(s){return s.requestStatus===2&&!GN(s)}function GN(s){const t=Date.now();return t<s.creationTime||s.creationTime+s.expiresIn<t+yN}function FN(s){const t={requestStatus:1,requestTime:Date.now()};return{...s,authToken:t}}function KN(s){return s.requestStatus===1&&s.requestTime+bb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(s){const t=s,{installationEntry:n,registrationPromise:r}=await wp(t);return r?r.catch(console.error):Rp(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(s,t=!1){const n=s;return await XN(n),(await Rp(n,t)).token}async function XN(s){const{registrationPromise:t}=await wp(s);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(s){if(!s||!s.options)throw em("App Configuration");if(!s.name)throw em("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!s.options[n])throw em(n);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function em(s){return Yr.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="installations",JN="installations-internal",ZN=s=>{const t=s.getProvider("app").getImmediate(),n=$N(t),r=Jr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WN=s=>{const t=s.getProvider("app").getImmediate(),n=Jr(t,Pb).getImmediate();return{getId:()=>QN(n),getToken:l=>YN(n,l)}};function tD(){Vi(new ii(Pb,ZN,"PUBLIC")),Vi(new ii(JN,WN,"PRIVATE"))}tD();Pn(Eb,Ap);Pn(Eb,Ap,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="analytics",eD="firebase_id",nD="origin",iD=60*1e3,sD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ip="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new mh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new $r("analytics","Analytics",rD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(s){if(!s.startsWith(Ip)){const t=bn.create("invalid-gtag-resource",{gtagURL:s});return sn.warn(t.message),""}return s}function jb(s){return Promise.all(s.map(t=>t.catch(n=>n)))}function oD(s,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(s,t)),n}function lD(s,t){const n=oD("firebase-js-sdk-policy",{createScriptURL:aD}),r=document.createElement("script"),l=`${Ip}?l=${s}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(l):l,r.async=!0,document.head.appendChild(r)}function uD(s){let t=[];return Array.isArray(window[s])?t=window[s]:window[s]=t,t}async function cD(s,t,n,r,l,u){const d=r[l];try{if(d)await t[d];else{const y=(await jb(n)).find(_=>_.measurementId===l);y&&await t[y.appId]}}catch(p){sn.error(p)}s("config",l,u)}async function hD(s,t,n,r,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await jb(n);for(const y of d){const _=p.find(A=>A.measurementId===y),E=_&&t[_.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),s("event",r,l||{})}catch(u){sn.error(u)}}function fD(s,t,n,r){async function l(u,...d){try{if(u==="event"){const[p,y]=d;await hD(s,t,n,p,y)}else if(u==="config"){const[p,y]=d;await cD(s,t,n,r,p,y)}else if(u==="consent"){const[p,y]=d;s("consent",p,y)}else if(u==="get"){const[p,y,_]=d;s("get",p,y,_)}else if(u==="set"){const[p]=d;s("set",p)}else s(u,...d)}catch(p){sn.error(p)}}return l}function dD(s,t,n,r,l){let u=function(...d){window[r].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=fD(u,s,t,n),{gtagCore:u,wrappedGtag:window[l]}}function mD(s){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ip)&&n.src.includes(s))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=30,gD=1e3;class yD{constructor(t={},n=gD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zb=new yD;function _D(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function vD(s){var d;const{appId:t,apiKey:n}=s,r={method:"GET",headers:_D(n)},l=sD.replace("{app-id}",t),u=await fetch(l,r);if(u.status!==200&&u.status!==304){let p="";try{const y=await u.json();(d=y.error)!=null&&d.message&&(p=y.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:p})}return u.json()}async function TD(s,t=zb,n){const{appId:r,apiKey:l,measurementId:u}=s.options;if(!r)throw bn.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:r};throw bn.create("no-api-key")}const d=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new AD;return setTimeout(async()=>{p.abort()},iD),Bb({appId:r,apiKey:l,measurementId:u},d,p,t)}async function Bb(s,{throttleEndTimeMillis:t,backoffCount:n},r,l=zb){var p;const{appId:u,measurementId:d}=s;try{await ED(r,t)}catch(y){if(d)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:d};throw y}try{const y=await vD(s);return l.deleteThrottleMetadata(u),y}catch(y){const _=y;if(!bD(_)){if(l.deleteThrottleMetadata(u),d)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:u,measurementId:d};throw y}const E=Number((p=_==null?void 0:_.customData)==null?void 0:p.httpStatus)===503?dv(n,l.intervalMillis,pD):dv(n,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return l.setThrottleMetadata(u,A),sn.debug(`Calling attemptFetch again in ${E} millis`),Bb(s,A,r,l)}}function ED(s,t){return new Promise((n,r)=>{const l=Math.max(t-Date.now(),0),u=setTimeout(n,l);s.addEventListener(()=>{clearTimeout(u),r(bn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function bD(s){if(!(s instanceof ri)||!s.customData)return!1;const t=Number(s.customData.httpStatus);return t===429||t===500||t===503||t===504}class AD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function SD(s,t,n,r,l){if(l&&l.global){s("event",n,r);return}else{const u=await t,d={...r,send_to:u};s("event",n,d)}}async function wD(s,t,n,r){if(r&&r.global){const l={};for(const u of Object.keys(n))l[`user_properties.${u}`]=n[u];return s("set",l),Promise.resolve()}else{const l=await t;s("config",l,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(){if(sT())try{await rT()}catch(s){return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return sn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ID(s,t,n,r,l,u,d){const p=TD(s);p.then(k=>{n[k.measurementId]=k.appId,s.options.measurementId&&k.measurementId!==s.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>sn.error(k)),t.push(p);const y=RD().then(k=>{if(k)return r.getId()}),[_,E]=await Promise.all([p,y]);mD(u)||lD(u,_.measurementId),l("js",new Date);const A=(d==null?void 0:d.config)??{};return A[nD]="firebase",A.update=!0,E!=null&&(A[eD]=E),l("config",_.measurementId,A),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(t){this.app=t}_delete(){return delete io[this.app.options.appId],Promise.resolve()}}let io={},G0=[];const F0={};let nm="dataLayer",xD="gtag",K0,Cp,Q0=!1;function ND(){const s=[];if(iT()&&s.push("This is a browser extension environment."),Aw()||s.push("Cookies are not available."),s.length>0){const t=s.map((r,l)=>`(${l+1}) ${r}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:t});sn.warn(n.message)}}function DD(s,t,n){ND();const r=s.options.appId;if(!r)throw bn.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(io[r]!=null)throw bn.create("already-exists",{id:r});if(!Q0){uD(nm);const{wrappedGtag:u,gtagCore:d}=dD(io,G0,F0,nm,xD);Cp=u,K0=d,Q0=!0}return io[r]=ID(s,G0,F0,t,K0,nm,n),new CD(s)}function OD(s=Vm()){s=Ke(s);const t=Jr(s,fh);return t.isInitialized()?t.getImmediate():MD(s)}function MD(s,t={}){const n=Jr(s,fh);if(n.isInitialized()){const l=n.getImmediate();if(Ws(t,n.getOptions()))return l;throw bn.create("already-initialized")}return n.initialize({options:t})}function VD(s,t,n){s=Ke(s),wD(Cp,io[s.app.options.appId],t,n).catch(r=>sn.error(r))}function kD(s,t,n,r){s=Ke(s),SD(Cp,io[s.app.options.appId],t,n,r).catch(l=>sn.error(l))}const Y0="@firebase/analytics",X0="0.10.22";function LD(){Vi(new ii(fh,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return DD(r,l,n)},"PUBLIC")),Vi(new ii("analytics-internal",s,"PRIVATE")),Pn(Y0,X0),Pn(Y0,X0,"esm2020");function s(t){try{const n=t.getProvider(fh).getImmediate();return{logEvent:(r,l,u)=>kD(n,r,l,u),setUserProperties:(r,l)=>VD(n,r,l)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}LD();const UD={apiKey:"AIzaSyAW72J5WDKPrWZqzvprAC_VApcXCL67vno",authDomain:"indotechprogramming-id.firebaseapp.com",projectId:"indotechprogramming-id",storageBucket:"indotechprogramming-id.firebasestorage.app",messagingSenderId:"118173796227",appId:"1:118173796227:web:813589b025aca30c3598b6",measurementId:"G-RHC58BNQ8C"},xp=cT(UD),im=qI(xp),PD=new is,Ka=Jx(xp);OD(xp);const sm=s=>{console.error(s)};function jD(){const[s,t]=ee.useState(null),[n,r]=ee.useState(!1),[l,u]=ee.useState({username:"",password:""}),[d,p]=ee.useState("pos"),[y,_]=ee.useState([]),[E,A]=ee.useState([]),[k,K]=ee.useState([]);ee.useEffect(()=>{const V=DR(im,Z=>{t(Z),Z?r(!0):(r(!1),_([]),K([]))});return()=>V()},[]),ee.useEffect(()=>{if(!s)return;const V=B0(O0(Ka,"users",s.uid,"products"),at=>{const et=at.docs.map(Rt=>({id:Rt.id,...Rt.data()}));_(et)},at=>sm(at)),Z=B0(cN(O0(Ka,"users",s.uid,"transactions"),hN("date","desc")),at=>{const et=at.docs.map(Rt=>({id:Rt.id,...Rt.data()}));K(et)},at=>sm(at));return()=>{V(),Z()}},[s]);const[W,nt]=ee.useState(!1),[it,gt]=ee.useState(!1),[_t,bt]=ee.useState(0),[Ut,Ft]=ee.useState(null),[Pt,x]=ee.useState(!1),[w,C]=ee.useState(null),[D,N]=ee.useState({id:"",barcode:"",name:"",supplier:"",price:0,modal:0,stock:0,category:"Umum"}),[L,R]=ee.useState("");ee.useEffect(()=>{if(d==="pos"&&L.length>=8){const V=y.find(Z=>Z.barcode===L);V&&(st(V),R(""))}},[L,d,y]);const ne=async()=>{try{await JR(im,PD)}catch(V){if(console.error(V),V.code==="auth/popup-closed-by-user"||V.code==="auth/cancelled-popup-request")return;alert("Gagal login Google")}},fe=async()=>{await im.signOut(),r(!1)},G=V=>{V.preventDefault(),l.username==="admin"&&l.password==="admin123"?r(!0):alert("Username: admin, Password: admin123")},st=V=>{if(V.stock<=0){alert("Stok habis!");return}A(Z=>Z.find(et=>et.id===V.id)?Z.map(et=>et.id===V.id?{...et,quantity:et.quantity+1}:et):[...Z,{...V,quantity:1}])},ht=(V,Z)=>{A(at=>at.map(et=>{if(et.id===V){const Rt=y.find(jn=>jn.id===V),jt=Math.max(1,et.quantity+Z);return Rt&&jt>Rt.stock?(alert("Maksimal stok tercapai"),et):{...et,quantity:jt}}return et}))},[Dt,zt]=ee.useState(!1),M=async()=>{const V=E.reduce((et,Rt)=>et+Rt.price*Rt.quantity,0);if(_t<V){alert("Uang pelanggan kurang!");return}zt(!0);const Z=Date.now().toString(),at={id:Z,items:E.map(et=>({id:et.id,name:et.name,price:et.price,quantity:et.quantity})),total:V,paidAmount:_t,changeAmount:_t-V,date:Date.now()};try{await Wd(kc(Ka,"users",s.uid,"transactions",Z),at),await Promise.all(E.map(async et=>{const Rt=y.find(jt=>jt.id===et.id);Rt&&await Wd(kc(Ka,"users",s.uid,"products",Rt.id),{...Rt,stock:Rt.stock-et.quantity})})),Ft(at),A([]),nt(!1),gt(!0),bt(0)}catch(et){console.error(et),alert('Gagal memproses transaksi ke Cloud! Pastikan Anda sudah "Login dengan Google" dan terhubung internet.')}finally{zt(!1)}},Y=async()=>{if(!D.name){alert("Nama barang harus diisi!");return}if(!D.barcode){alert("Barcode harus diisi! Jika tidak ada barcode, silakan buat kode unik.");return}try{const V=w?w.id:Date.now().toString(),Z={...D,id:V};await Wd(kc(Ka,"users",s.uid,"products",V),Z),x(!1),C(null),N({id:"",barcode:"",name:"",supplier:"",price:0,modal:0,stock:0,category:"Umum"}),alert("Barang berhasil disimpan!")}catch(V){console.error(V),alert('Gagal menyimpan ke Cloud! Pastikan Anda sudah "Login dengan Google" untuk hak akses database.')}},rt=async V=>{if(confirm("Hapus produk ini?"))try{await mN(kc(Ka,"users",s.uid,"products",V))}catch(Z){sm(Z)}};return n?S.jsxs("div",{className:"flex h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans text-sm",children:[S.jsxs("aside",{className:"w-20 bg-white border-r border-slate-200 flex flex-col items-center py-8 space-y-8 flex-shrink-0",children:[S.jsx("div",{className:"w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200",children:S.jsx(zd,{size:24})}),S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsx("div",{className:`w-2 h-2 rounded-full ${s?"bg-green-500 animate-pulse":"bg-slate-300"}`}),S.jsx("span",{className:"text-[8px] font-bold text-slate-400 mt-1 uppercase leading-none",children:s?"Cloud":"Offline"})]}),S.jsxs("nav",{className:"flex flex-col space-y-6 flex-1",children:[S.jsx("button",{onClick:()=>p("pos"),className:`p-3 rounded-xl transition-all ${d==="pos"?"text-indigo-600 bg-indigo-50":"text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`,title:"Kasir",children:S.jsx(HS,{size:24})}),S.jsx("button",{onClick:()=>p("stock"),className:`p-3 rounded-xl transition-all ${d==="stock"?"text-indigo-600 bg-indigo-50":"text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`,title:"Stok Barang",children:S.jsx(JS,{size:24})}),S.jsx("button",{onClick:()=>p("history"),className:`p-3 rounded-xl transition-all ${d==="history"?"text-indigo-600 bg-indigo-50":"text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`,title:"Riwayat",children:S.jsx(BS,{size:24})}),S.jsx("button",{onClick:()=>p("reports"),className:`p-3 rounded-xl transition-all ${d==="reports"?"text-indigo-600 bg-indigo-50":"text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`,title:"Laporan",children:S.jsx(US,{size:24})})]}),S.jsx("button",{onClick:fe,className:"p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all",children:S.jsx(QS,{size:24})})]}),S.jsxs("main",{className:"flex-1 overflow-hidden flex flex-col",children:[d==="pos"&&S.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[S.jsxs("div",{className:"flex-1 p-8 overflow-y-auto",children:[S.jsxs("header",{className:"flex justify-between items-center mb-8",children:[S.jsxs("div",{children:[S.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"IndoTech POS"}),S.jsx("p",{className:"text-slate-500 text-sm",children:"Scan barcode atau ketik nama barang."})]}),S.jsxs("div",{className:"relative w-80",children:[S.jsx(kS,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",size:18}),S.jsx("input",{autoFocus:!0,type:"text",placeholder:"Scan Barcode / Cari Barang...",className:"w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",value:L,onChange:V=>R(V.target.value)})]})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:y.filter(V=>V.name.toLowerCase().includes(L.toLowerCase())||V.barcode.includes(L)).map(V=>S.jsxs("div",{onClick:()=>st(V),className:"bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer active:scale-95 group",children:[S.jsxs("div",{className:"flex justify-between items-start mb-2",children:[S.jsx("span",{className:"text-[10px] bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-400",children:V.barcode}),S.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-md font-bold ${V.stock<10?"bg-red-100 text-red-600":"bg-green-100 text-green-600"}`,children:["Stock: ",V.stock]})]}),S.jsx("h3",{className:"font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase",children:V.name}),S.jsxs("p",{className:"text-lg font-black text-slate-900 mt-2",children:["Rp ",V.price.toLocaleString("id-ID")]})]},V.id))})]}),S.jsxs("aside",{className:"w-96 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 animate-in slide-in-from-right duration-300",children:[S.jsx("div",{className:"p-6 border-b border-slate-100",children:S.jsxs("h2",{className:"text-xl font-bold flex items-center",children:["Keranjang ",S.jsx("span",{className:"ml-2 bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full",children:E.length})]})}),S.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:E.length===0?S.jsxs("div",{className:"h-full flex flex-col items-center justify-center opacity-30 text-center",children:[S.jsx(zd,{size:48,className:"mb-2"}),S.jsx("p",{className:"text-sm",children:"Siap melayani pembeli"})]}):E.map(V=>S.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100",children:[S.jsxs("div",{className:"flex-1 min-w-0",children:[S.jsx("h4",{className:"font-bold text-sm truncate uppercase",children:V.name}),S.jsxs("p",{className:"text-xs text-slate-400",children:["Rp ",V.price.toLocaleString("id-ID")]})]}),S.jsxs("div",{className:"flex items-center space-x-2",children:[S.jsx("button",{onClick:()=>ht(V.id,-1),className:"w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600",children:S.jsx(XS,{size:12})}),S.jsx("span",{className:"text-sm font-bold w-4 text-center",children:V.quantity}),S.jsx("button",{onClick:()=>ht(V.id,1),className:"w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600",children:S.jsx(jd,{size:12})})]}),S.jsx("button",{onClick:()=>A(Z=>Z.filter(at=>at.id!==V.id)),className:"text-slate-300 hover:text-red-500",children:S.jsx(uv,{size:16})})]},V.id))}),S.jsxs("div",{className:"p-6 bg-slate-900 text-white rounded-t-3xl",children:[S.jsxs("div",{className:"flex justify-between text-sm text-slate-400 mb-4 font-bold",children:[S.jsx("span",{children:"TOTAL HARGA"}),S.jsxs("span",{className:"text-white text-2xl font-black",children:["Rp ",E.reduce((V,Z)=>V+Z.price*Z.quantity,0).toLocaleString("id-ID")]})]}),S.jsxs("button",{disabled:E.length===0,onClick:()=>nt(!0),className:"w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:[S.jsx(jS,{size:20}),S.jsx("span",{children:"BAYAR / SELESAI"})]})]})]})]}),d==="stock"&&S.jsxs("div",{className:"p-8 overflow-y-auto flex-1 animate-in fade-in duration-300",children:[S.jsxs("header",{className:"flex justify-between items-center mb-8",children:[S.jsxs("div",{children:[S.jsx("h1",{className:"text-2xl font-bold text-slate-900 text-indigo-600",children:"Gudang & Stok Barang"}),S.jsx("p",{className:"text-slate-500 text-sm",children:"Kelola katalog produk minimarket Anda."})]}),S.jsxs("button",{onClick:()=>{C(null),N({id:"",barcode:"",name:"",supplier:"",price:0,modal:0,stock:0,category:"Umum"}),x(!0)},className:"flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all",children:[S.jsx(jd,{size:20}),S.jsx("span",{children:"Tambah Barang Baru"})]})]}),S.jsx("div",{className:"bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm",children:S.jsxs("table",{className:"w-full text-left",children:[S.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:S.jsxs("tr",{children:[S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase",children:"Barcode"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase",children:"Nama Barang"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase",children:"Supplier"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase",children:"Kategori"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right",children:"Modal"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right",children:"Harga Jual"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center",children:"Stok"}),S.jsx("th",{className:"px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center",children:"Aksi"})]})}),S.jsx("tbody",{className:"divide-y divide-slate-100 font-medium",children:y.map(V=>{var Z;return S.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[S.jsx("td",{className:"px-6 py-4 font-mono text-xs text-slate-500",children:V.barcode}),S.jsx("td",{className:"px-6 py-4 font-bold text-slate-900 uppercase",children:V.name}),S.jsx("td",{className:"px-6 py-4 text-xs text-slate-500 uppercase",children:V.supplier||"-"}),S.jsx("td",{className:"px-6 py-4",children:S.jsx("span",{className:"px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full",children:V.category})}),S.jsxs("td",{className:"px-6 py-4 text-right font-bold text-slate-400",children:["Rp ",(Z=V.modal)==null?void 0:Z.toLocaleString("id-ID")]}),S.jsxs("td",{className:"px-6 py-4 text-right font-black text-indigo-600",children:["Rp ",V.price.toLocaleString("id-ID")]}),S.jsx("td",{className:"px-6 py-4 text-center",children:S.jsxs("span",{className:`px-3 py-1 rounded-full text-xs font-bold ${V.stock<10?"bg-red-100 text-red-600":"bg-green-100 text-green-600"}`,children:[V.stock," pcs"]})}),S.jsx("td",{className:"px-6 py-4 text-center",children:S.jsxs("div",{className:"flex justify-center space-x-2",children:[S.jsx("button",{onClick:()=>{C(V),N(V),x(!0)},className:"p-2 text-slate-400 hover:text-indigo-600 transition-colors",children:S.jsx(ov,{size:18})}),S.jsx("button",{onClick:()=>rt(V.id),className:"p-2 text-slate-400 hover:text-red-500 transition-colors",children:S.jsx(uv,{size:18})})]})})]},V.id)})})]})}),Pt&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:S.jsxs("div",{className:"bg-white w-full max-w-lg rounded-3xl p-8 animate-in zoom-in-95 duration-200",children:[S.jsxs("header",{className:"flex justify-between items-center mb-6",children:[S.jsxs("h2",{className:"text-xl font-bold flex items-center",children:[w?S.jsx(ov,{size:20,className:"mr-2"}):S.jsx(jd,{size:20,className:"mr-2"}),w?"Edit Barang":"Input Barang Baru"]}),S.jsx("button",{onClick:()=>x(!1),className:"text-slate-400 hover:text-red-500",children:S.jsx(cv,{size:24})})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Kode Barcode"}),S.jsxs("div",{className:"flex space-x-2",children:[S.jsx("input",{type:"text",className:"flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Scan atau Ketik...",value:D.barcode,onChange:V=>N({...D,barcode:V.target.value})}),S.jsx("button",{type:"button",onClick:()=>N({...D,barcode:"IT"+Date.now().toString().slice(-10)}),className:"px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all text-xs font-bold shadow-sm",children:"Generate"})]})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Kategori"}),S.jsxs("select",{className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",value:D.category,onChange:V=>N({...D,category:V.target.value}),children:[S.jsx("option",{children:"Minuman"}),S.jsx("option",{children:"Makanan"}),S.jsx("option",{children:"Snack"}),S.jsx("option",{children:"Laptop/Elektronik"}),S.jsx("option",{children:"Alat Tulis"}),S.jsx("option",{children:"Lainnya"})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Nama Barang"}),S.jsx("input",{type:"text",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Contoh: Aqua 600ml",value:D.name,onChange:V=>N({...D,name:V.target.value})})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Supplier"}),S.jsx("input",{type:"text",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Contoh: PT Sumber Alfaria Trijaya",value:D.supplier,onChange:V=>N({...D,supplier:V.target.value})})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Harga Modal (Rp)"}),S.jsx("input",{type:"number",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-slate-500",value:D.modal,onChange:V=>N({...D,modal:parseInt(V.target.value)||0})})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Harga Jual (Rp)"}),S.jsx("input",{type:"number",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold",value:D.price,onChange:V=>N({...D,price:parseInt(V.target.value)||0})})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Jumlah Stok"}),S.jsx("input",{type:"number",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",value:D.stock,onChange:V=>N({...D,stock:parseInt(V.target.value)||0})})]}),S.jsxs("button",{onClick:Y,className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100 transition-all",children:[S.jsx(nw,{size:20}),S.jsx("span",{children:"Simpan Ke Database"})]})]})]})})]}),d==="history"&&S.jsxs("div",{className:"p-8 overflow-y-auto flex-1 animate-in slide-in-from-bottom duration-500",children:[S.jsxs("header",{className:"mb-8",children:[S.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"Riwayat Penjualan"}),S.jsx("p",{className:"text-slate-500 text-sm",children:"Semua transaksi yang sudah selesai."})]}),S.jsxs("div",{className:"space-y-4",children:[k.map(V=>{var Z,at;return S.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200 flex justify-between items-center group hover:border-indigo-500 transition-all shadow-sm",children:[S.jsxs("div",{className:"flex-1",children:[S.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[S.jsx("span",{className:"text-xs font-bold text-slate-400",children:V.date}),S.jsxs("span",{className:"text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold",children:["ID: ",V.id.slice(-6)]})]}),S.jsx("p",{className:"text-sm font-bold text-slate-900 uppercase",children:V.items.map(et=>`${et.name} (x${et.quantity})`).join(", ")}),S.jsxs("div",{className:"flex space-x-4 mt-2 text-[10px] font-bold uppercase text-slate-400",children:[S.jsxs("span",{children:["Tunai: Rp ",(Z=V.paidAmount)==null?void 0:Z.toLocaleString("id-ID")]}),S.jsxs("span",{children:["Kembali: Rp ",(at=V.changeAmount)==null?void 0:at.toLocaleString("id-ID")]})]})]}),S.jsxs("div",{className:"text-right",children:[S.jsxs("p",{className:"text-xl font-black text-indigo-600",children:["Rp ",V.total.toLocaleString("id-ID")]}),S.jsx("span",{className:"text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold",children:"LUNAS"}),S.jsx("button",{onClick:()=>{Ft(V),gt(!0)},className:"ml-4 p-2 text-slate-400 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100",title:"Cetak Ulang Struk",children:S.jsx(lv,{size:16})})]})]},V.id)}),k.length===0&&S.jsx("div",{className:"py-20 text-center text-slate-400",children:"Belum ada transaksi hari ini."})]})]}),d==="reports"&&S.jsxs("div",{className:"p-8 overflow-y-auto flex-1 animate-in fade-in duration-300",children:[S.jsxs("header",{className:"mb-8",children:[S.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"Laporan Keuangan"}),S.jsx("p",{className:"text-slate-500 text-sm",children:"Analisis penjualan dan performa toko."})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[S.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200 shadow-sm",children:[S.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase mb-2",children:"Total Pendapatan"}),S.jsxs("p",{className:"text-2xl font-black text-indigo-600",children:["Rp ",k.reduce((V,Z)=>V+Z.total,0).toLocaleString("id-ID")]})]}),S.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200 shadow-sm",children:[S.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase mb-2",children:"Total Keuntungan"}),S.jsxs("p",{className:"text-2xl font-black text-green-600",children:["Rp ",k.reduce((V,Z)=>{const at=Z.items.reduce((et,Rt)=>{const jt=y.find(hs=>hs.id===Rt.id),jn=(jt==null?void 0:jt.modal)||0;return et+(Rt.price-jn)*Rt.quantity},0);return V+at},0).toLocaleString("id-ID")]})]}),S.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200 shadow-sm",children:[S.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase mb-2",children:"Total Transaksi"}),S.jsx("p",{className:"text-2xl font-black text-slate-900",children:k.length})]}),S.jsxs("div",{className:"bg-white p-6 rounded-3xl border border-slate-200 shadow-sm",children:[S.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase mb-2",children:"Item Terjual"}),S.jsx("p",{className:"text-2xl font-black text-slate-900",children:k.reduce((V,Z)=>V+Z.items.reduce((at,et)=>at+et.quantity,0),0)})]})]}),S.jsxs("div",{className:"bg-white rounded-3xl border border-slate-200 p-8 shadow-sm",children:[S.jsx("h3",{className:"font-bold text-slate-900 mb-6",children:"Barang Paling Laris"}),S.jsx("div",{className:"space-y-4",children:(()=>{const V={};k.forEach(at=>{at.items.forEach(et=>{V[et.id]?V[et.id].count+=et.quantity:V[et.id]={name:et.name,count:et.quantity}})});const Z=Object.values(V).sort((at,et)=>et.count-at.count).slice(0,5);return Z.length>0?Z.map((at,et)=>S.jsxs("div",{className:"flex items-center justify-between p-4 bg-slate-50 rounded-2xl",children:[S.jsxs("div",{className:"flex items-center space-x-3",children:[S.jsx("span",{className:"w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xs",children:et+1}),S.jsx("span",{className:"font-bold text-slate-900 uppercase",children:at.name})]}),S.jsxs("span",{className:"font-bold text-slate-500",children:[at.count," terjual"]})]},et)):S.jsx("p",{className:"text-slate-400 italic",children:"Belum ada data penjualan."})})()})]})]})]}),W&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:S.jsxs("div",{className:"bg-white w-full max-w-md rounded-3xl p-8 animate-in zoom-in-95 duration-200",children:[S.jsxs("header",{className:"flex justify-between items-center mb-6",children:[S.jsx("h2",{className:"text-xl font-bold flex items-center",children:"Konfirmasi Pembayaran"}),S.jsx("button",{onClick:()=>nt(!1),className:"text-slate-400 hover:text-red-500",children:S.jsx(cv,{size:24})})]}),S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{className:"p-4 bg-slate-50 rounded-2xl",children:[S.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase mb-1",children:"Total Tagihan"}),S.jsxs("p",{className:"text-3xl font-black text-indigo-600",children:["Rp ",E.reduce((V,Z)=>V+Z.price*Z.quantity,0).toLocaleString("id-ID")]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-2",children:"Uang Pelanggan (Tunai)"}),S.jsxs("div",{className:"relative",children:[S.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400",children:"Rp"}),S.jsx("input",{autoFocus:!0,type:"number",className:"w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-xl font-bold outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"0",value:_t||"",onChange:V=>bt(parseInt(V.target.value)||0)})]})]}),_t>0&&S.jsxs("div",{className:"flex justify-between items-center p-4 rounded-2xl bg-green-50 border border-green-100",children:[S.jsx("span",{className:"font-bold text-green-700",children:"Kembalian:"}),S.jsxs("span",{className:"text-xl font-black text-green-700",children:["Rp ",Math.max(0,_t-E.reduce((V,Z)=>V+Z.price*Z.quantity,0)).toLocaleString("id-ID")]})]}),S.jsx("button",{onClick:M,disabled:Dt||_t<E.reduce((V,Z)=>V+Z.price*Z.quantity,0),className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100",children:S.jsx("span",{children:Dt?"MEMPROSES...":"PROSES TRANSAKSI"})})]})]})}),it&&Ut&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:S.jsxs("div",{className:"bg-white w-full max-w-sm rounded-lg p-8 animate-in zoom-in-95 duration-200 relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-indigo-600"}),S.jsxs("div",{className:"text-center mb-6",children:[S.jsx("h2",{className:"text-2xl font-black text-indigo-600",children:"IndoTech"}),S.jsx("p",{className:"text-xs text-slate-400",children:"Jl. Teknologi No. 45, Jakarta"}),S.jsx("p",{className:"text-[10px] text-slate-300",children:"021-555-1234"})]}),S.jsx("div",{className:"border-t border-dashed border-slate-200 py-4 space-y-2",children:S.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[S.jsx("span",{children:Ut.date}),S.jsxs("span",{children:["ID: ",Ut.id.slice(-6)]})]})}),S.jsx("div",{className:"border-t border-dashed border-slate-200 py-4 space-y-3",children:Ut.items.map(V=>S.jsxs("div",{className:"text-xs",children:[S.jsxs("div",{className:"flex justify-between font-bold",children:[S.jsx("span",{className:"uppercase",children:V.name}),S.jsx("span",{children:(V.price*V.quantity).toLocaleString("id-ID")})]}),S.jsxs("div",{className:"text-slate-400",children:[V.quantity," x ",V.price.toLocaleString("id-ID")]})]},V.id))}),S.jsxs("div",{className:"border-t border-dashed border-slate-200 py-4 space-y-1",children:[S.jsxs("div",{className:"flex justify-between text-sm font-black",children:[S.jsx("span",{children:"TOTAL"}),S.jsxs("span",{children:["Rp ",Ut.total.toLocaleString("id-ID")]})]}),S.jsxs("div",{className:"flex justify-between text-xs text-slate-500",children:[S.jsx("span",{children:"Tunai"}),S.jsx("span",{children:Ut.paidAmount.toLocaleString("id-ID")})]}),S.jsxs("div",{className:"flex justify-between text-xs text-slate-500",children:[S.jsx("span",{children:"Kembali"}),S.jsx("span",{children:Ut.changeAmount.toLocaleString("id-ID")})]})]}),S.jsx("div",{className:"text-center mt-6 pt-4 border-t border-dashed border-slate-200",children:S.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase",children:"Terima Kasih Atas Kunjungan Anda"})}),S.jsxs("div",{className:"flex space-x-2 mt-8",children:[S.jsx("button",{onClick:()=>gt(!1),className:"flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all",children:"Tutup"}),S.jsxs("button",{onClick:()=>window.print(),className:"flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-100",children:[S.jsx(lv,{size:16}),S.jsx("span",{children:"Cetak"})]})]})]})})]}):S.jsx("div",{className:"h-screen w-screen bg-slate-900 flex items-center justify-center p-4",children:S.jsxs("div",{className:"w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6",children:[S.jsxs("div",{className:"text-center space-y-2",children:[S.jsx("div",{className:"w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-4",children:S.jsx(zd,{size:32})}),S.jsx("h1",{className:"text-2xl font-bold text-slate-900",children:"IndoTech Minimarket"}),S.jsx("p",{className:"text-slate-500 text-sm",children:"Sistem Kasir Pintar & Terintegrasi"})]}),S.jsxs("button",{onClick:ne,className:"w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 shadow-sm",children:[S.jsx(FS,{size:20,className:"text-indigo-600"}),S.jsx("span",{children:"Masuk dengan Google"})]}),S.jsxs("div",{className:"relative py-2",children:[S.jsx("div",{className:"absolute inset-0 flex items-center",children:S.jsx("div",{className:"w-full border-t border-slate-100"})}),S.jsx("div",{className:"relative flex justify-center text-[10px] uppercase font-bold text-slate-400 bg-white inline-block mx-auto px-4",children:"Atau Gunakan Akun Demo"})]}),S.jsxs("form",{onSubmit:G,className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Username"}),S.jsx("input",{type:"text",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"admin",value:l.username,onChange:V=>u({...l,username:V.target.value})})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-xs font-bold text-slate-400 uppercase mb-1",children:"Password"}),S.jsx("input",{type:"password",className:"w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"••••••••",value:l.password,onChange:V=>u({...l,password:V.target.value})})]}),S.jsx("button",{className:"w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all",children:"Login Ke Sistem"})]}),S.jsx("p",{className:"text-center text-xs text-slate-400 font-medium",children:"Demo: admin / admin123"})]})})}IS.createRoot(document.getElementById("root")).render(S.jsx(ee.StrictMode,{children:S.jsx(jD,{})}));
