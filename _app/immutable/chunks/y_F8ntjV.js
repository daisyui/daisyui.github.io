import{m as g,o as N,H,q as I,v as p,w as c,x as b,y as O,z as _,A as C,B as Y,C as M,D as S,E as V,F as $,G as j,I as k,J as w,p as q,K as z,L as B,b as F}from"./d8H3Uvz2.js";import{a as G,r as A,h,i as J}from"./R-qbc8OJ.js";import{r as K}from"./DGOKzfRk.js";import{e as P}from"./DCK6Bke5.js";let E=!0;function x(t){E=t}function ee(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function W(t,e){return D(t,e)}function te(t,e){g(),e.intro=e.intro??!1;const r=e.target,u=w,l=_;try{for(var a=N(r);a&&(a.nodeType!==8||a.data!==H);)a=I(a);if(!a)throw p;c(!0),b(a),O();const i=D(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==C)throw Y(),p;return c(!1),i}catch(i){if(i===p)return e.recover===!1&&M(),g(),S(r),c(!1),W(t,e);throw i}finally{c(u),b(l),K()}}const d=new Map;function D(t,{target:e,anchor:r,props:u={},events:l,context:a,intro:i=!0}){g();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=J(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};y(V(G)),A.add(y);var m=void 0,L=$(()=>{var o=r??e.appendChild(j());return k(()=>{if(a){q({});var s=z;s.c=a}l&&(u.$$events=l),w&&P(o,null),E=i,m=t(o,u)||{},E=!0,w&&(B.nodes_end=_),a&&F()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}A.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(m,L),m}let R=new WeakMap;function re(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{E as a,x as b,te as h,W as m,ee as s,re as u};
