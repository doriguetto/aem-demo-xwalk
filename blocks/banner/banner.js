import{c as R,l as Y,u as Z,a as $,p as Q,s as ee,b as W,f as T,d as _,e as V,g as ie,h as k,i,t as A,j as f,r as a,k as z,m as ae,n as F}from"../chunks/html.CvX0OcDZ.js";import{s as re,h as te}from"../chunks/render.BNIA9sCb.js";import{p as D,i as O}from"../chunks/if.D0Gwi6K8.js";import{s as d,h as de}from"../chunks/attributes.0EZ6CMs_.js";import{p as j,e as J,i as K,s as se}from"../chunks/props.CuqLsYR2.js";function ne(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function oe(t){R===null&&ne(),Y&&R.l!==null?ve(R).m.push(t):Z(()=>{const e=$(t);if(typeof e=="function")return e})}function ve(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}var le=z('<link rel="preload" as="image">'),ce=z('<source height="auto">'),me=z("<!> <picture><!> <img></picture>",1);function ue(t,e){Q(e,!0);const I=j(e,"breakpoints",19,()=>[]),h=j(e,"lazy",3,!1),H=j(e,"preload",3,!1),G=j(e,"ext",3,"webp");let b=ee(D([])),w="",x="0",C="0",y="";if(e.pictureEl){const r=e.pictureEl.querySelector("img"),l=r==null?void 0:r.getAttribute("src");if(l){w=(r==null?void 0:r.getAttribute("alt"))||"",x=(r==null?void 0:r.getAttribute("width"))||"0",C=(r==null?void 0:r.getAttribute("height"))||"0";const g=new URL(l,window.location.href),{pathname:p}=g,c=p.substring(0,p.lastIndexOf("."));y=`${c}.${G()}?width=2048&format=webply&optimize=medium`,oe(()=>{ie(b,D(I().map(m=>({type:"image/webp",srcSet:`${c}.${G()}?width=${m.width}&format=webply&optimize=medium`,media:m.media}))))})}}var E=W(),S=T(E);{var M=r=>{var l=me(),g=T(l);{var p=o=>{var v=W(),u=T(v);J(u,17,()=>f(b),K,(q,N)=>{var n=le();A(()=>{d(n,"media",f(N).media),d(n,"href",f(N).srcSet)}),_(q,n)}),_(o,v)};O(g,o=>{H()&&o(p)})}var c=k(g,2),m=i(c);J(m,17,()=>f(b),K,(o,v)=>{var u=ce();A(()=>{d(u,"media",f(v).media),d(u,"type",f(v).type),d(u,"srcset",f(v).srcSet)}),_(o,u)});var s=k(m,2);d(s,"alt",w),d(s,"width",x),d(s,"height",C),d(s,"src",y),a(c),A(()=>d(s,"loading",h()?"lazy":"eager")),de(s),_(r,l)};O(S,r=>{e.pictureEl&&r(M)})}_(t,E),V()}var ge=z('<div class="nab-call-to-action"><div class="nab-call-to-action__buttons"><div class="button nab-button--large nab-button--primary"><a aria-label="Find out more about the Home Guarantee Scheme" class="nab-button"> </a></div> <div class="button1 button nab-button-link--red"></div></div></div>'),pe=z('<div class="banner-entry container responsivegrid aem-GridColumn aem-GridColumn--default--12 at-element-marker">THIS IS A MAIN BANNER <div class="container"><div class="root responsivegrid responsivegrid--gutters-col"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "><div class="responsivegrid aem-GridColumn aem-GridColumn--default--12"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "><div class="banner-entry container responsivegrid aem-GridColumn aem-GridColumn--default--12"><div id="banner-b7303cc3e2" class="cmp-container"><div class="nab-banner nab-banner--image" data-analytics-internal-promo="MH24040-P"><div class="nab-banner--background-image"><div class="image"><!></div></div> <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters"><div class="grid--12 grid"><div class="gridColumn--default--5 gridColumn--sm--6 gridColumn--xs--12 gridColumn"><div class="responsivegrid nab-banner__primary-content"><div class="tile tile--white-card"><div class="nab-tile nab-tile--banner cmp-title--h1-appearance"><div class="nab-tile__content"><div class="cmp-title__heading"><!></div></div> <!></div></div></div></div> <div class="gridColumn--default--6 gridColumn--xs--12 gridColumn"></div></div></div></div></div></div></div></div> <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div></div> <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div></div> <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div></div> <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div></div> <div class="responsivegrid responsivegrid--fixed responsivegrid--gutters-col responsivegrid--gutters-row aem-GridColumn aem-GridColumn--default--12"><div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div></div></div></div></div></div>');function fe(t,e){Q(e,!0);let I;e.pictureEl&&(I={pictureEl:e.pictureEl,preload:!0,ext:"jpeg",breakpoints:[{media:"(max-width: 768px)",width:"960"},{media:"(max-width: 960px)",width:"1536"}]});var h=pe(),H=k(i(h)),G=i(H),b=i(G),w=i(b),x=i(w),C=i(x),y=i(C),E=i(y),S=i(E),M=i(S),r=i(M);ue(r,se(I)),a(M),a(S);var l=k(S,2),g=i(l),p=i(g),c=i(p),m=i(c),s=i(m),o=i(s),v=i(o),u=i(v);ae(u,()=>{var n;return(n=e.content)==null?void 0:n.outerHTML}),a(v),a(o);var q=k(o,2);{var N=n=>{var B=ge(),P=i(B),U=i(P),L=i(U);A(()=>d(L,"href",e.button.getAttribute("href")||"#"));var X=i(L,!0);a(L),a(U),F(2),a(P),a(B),A(()=>re(X,e.button.textContent)),_(n,B)};O(q,n=>{e.button&&n(N)})}a(s),a(m),a(c),a(p),F(2),a(g),a(l),a(E),a(y),a(C),a(x),a(w),F(10),a(b),a(G),a(H),a(h),_(t,h),V()}async function xe(t){const e={pictureEl:t.children[0].querySelector("picture"),content:t.children[1].children[0],button:t.children[2].children[0]};te(fe,{target:t,props:e})}export{xe as default};
//# sourceMappingURL=banner.js.map
