import{aa as P,aq as j,ar as F,$ as c,as as M,g as o,a4 as R,al as u,j as w,P as k,at as q,au as C,V as H,z as T,C as K,D as Y,ap as z,H as B,F as G,A as U,G as E,L as D,M as O,N as S,I as V}from"./html.CvX0OcDZ.js";function g(s,b=null,x){if(typeof s!="object"||s===null||P in s)return s;const v=C(s);if(v!==j&&v!==F)return s;var n=new Map,l=H(s),_=c(0);l&&n.set("length",c(s.length));var y;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&M();var r=n.get(e);return r===void 0?(r=c(t.value),n.set(e,r)):o(r,g(t.value,y)),!0},deleteProperty(f,e){var t=n.get(e);if(t===void 0)e in f&&n.set(e,c(u));else{if(l&&typeof e=="string"){var r=n.get("length"),a=Number(e);Number.isInteger(a)&&a<r.v&&o(r,a)}o(t,u),L(_)}return!0},get(f,e,t){var d;if(e===P)return s;var r=n.get(e),a=e in f;if(r===void 0&&(!a||(d=R(f,e))!=null&&d.writable)&&(r=c(g(a?f[e]:u,y)),n.set(e,r)),r!==void 0){var i=w(r);return i===u?void 0:i}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var r=n.get(e);r&&(t.value=w(r))}else if(t===void 0){var a=n.get(e),i=a==null?void 0:a.v;if(a!==void 0&&i!==u)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return t},has(f,e){var i;if(e===P)return!0;var t=n.get(e),r=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||k!==null&&(!r||(i=R(f,e))!=null&&i.writable)){t===void 0&&(t=c(r?g(f[e],y):u),n.set(e,t));var a=w(t);if(a===u)return!1}return r},set(f,e,t,r){var A;var a=n.get(e),i=e in f;if(l&&e==="length")for(var d=t;d<a.v;d+=1){var h=n.get(d+"");h!==void 0?o(h,u):d in f&&(h=c(u),n.set(d+"",h))}a===void 0?(!i||(A=R(f,e))!=null&&A.writable)&&(a=c(void 0),o(a,g(t,y)),n.set(e,a)):(i=a.v!==u,o(a,g(t,y)));var m=Reflect.getOwnPropertyDescriptor(f,e);if(m!=null&&m.set&&m.set.call(r,t),!i){if(l&&typeof e=="string"){var I=n.get("length"),N=Number(e);Number.isInteger(N)&&N>=I.v&&o(I,N+1)}L(_)}return!0},ownKeys(f){w(_);var e=Reflect.ownKeys(f).filter(a=>{var i=n.get(a);return i===void 0||i.v!==u});for(var[t,r]of n)r.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){q()}})}function L(s,b=1){o(s,s.v+b)}function $(s,b,x=!1){T&&K();var v=s,n=null,l=null,_=u,y=x?z:0,f=!1;const e=(r,a=!0)=>{f=!0,t(a,r)},t=(r,a)=>{if(_===(_=r))return;let i=!1;if(T){const d=v.data===B;!!_===d&&(v=G(),U(v),E(!1),i=!0)}_?(n?D(n):a&&(n=O(()=>a(v))),l&&S(l,()=>{l=null})):(l?D(l):a&&(l=O(()=>a(v))),n&&S(n,()=>{n=null})),i&&E(!0)};Y(()=>{f=!1,b(e),f||t(null,null)},y),T&&(v=V)}export{$ as i,g as p};
//# sourceMappingURL=if.D0Gwi6K8.js.map
