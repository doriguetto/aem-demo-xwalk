import{am as E,a8 as b,W as D,P as N,av as B,X as C,aw as M,V as W,ax as A,E as H,ay as P,a3 as Y,az as S,G as w,A as R,C as q,I as p,J as z,aA as $,aB as j,S as G,O as J,aC as X,z as L,B as x,M as F,p as K,aD as Q,e as U,c as Z}from"./chunk.html.CvX0OcDZ.js";const rr=["touchstart","touchmove"];function tr(r){return rr.includes(r)}function er(r){var t=D,a=N;E(null),b(null);try{return r()}finally{E(t),b(a)}}const ar=new Set,m=new Set;function nr(r,t,a,o){function i(e){if(o.capture||y.call(t,e),!e.cancelBubble)return er(()=>a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?C(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function ur(r,t,a,o,i){var e={capture:o,passive:i},u=nr(r,t,a,e);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(r,u,e)})}function y(r){var O;var t=this,a=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],e=i[0]||r.target,u=0,_=r.__root;if(_){var f=i.indexOf(_);if(f!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;f<=h&&(u=f)}if(e=i[u]||r.target,e!==t){M(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=D,c=N;E(null),b(null);try{for(var n,s=[];e!==null;){var l=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+o];if(d!==void 0&&!e.disabled)if(W(d)){var[V,...k]=d;V.apply(e,[r,...k])}else d.call(e,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||l===t||l===null)break;e=l}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,E(T),b(c)}}}function cr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function ir(r,t){return I(r,t)}function lr(r,t){A(),t.intro=t.intro??!1;const a=t.target,o=L,i=p;try{for(var e=H(a);e&&(e.nodeType!==8||e.data!==P);)e=Y(e);if(!e)throw S;w(!0),R(e),q();const u=I(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==z)throw $(),S;return w(!1),u}catch(u){if(u===S)return t.recover===!1&&j(),A(),G(a),w(!1),ir(r,t);throw u}finally{w(o),R(i)}}const v=new Map;function I(r,{target:t,anchor:a,props:o={},events:i,context:e,intro:u=!0}){A();var _=new Set,f=c=>{for(var n=0;n<c.length;n++){var s=c[n];if(!_.has(s)){_.add(s);var l=tr(s);t.addEventListener(s,y,{passive:l});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:l}),v.set(s,1)):v.set(s,d+1)}}};f(J(ar)),m.add(f);var h=void 0,T=X(()=>{var c=a??t.appendChild(x());return F(()=>{if(e){K({});var n=Z;n.c=e}i&&(o.$$events=i),L&&Q(c,null),h=r(c,o)||{},L&&(N.nodes_end=p),e&&U()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}m.delete(f),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return sr.set(h,T),h}let sr=new WeakMap;export{ur as e,lr as h,cr as s};
