import{e as S,a as t,f as P,i as $,t as e,b as r,c as p}from"../chunks/disclose-version.CwIan75F.js";import{a as l}from"../chunks/actions.31B-wlSq.js";import{l as T,s as z}from"../chunks/props.BlHtXCBj.js";import{u as D,s as U}from"../chunks/store.DaFOg5Tg.js";import{M as A}from"../chunks/mdsvex-components.Bcvyp1Dy.js";import{C as F,a as d,r as k,p as W}from"../chunks/ClassTable.BD66Esne.js";import"../chunks/entry.CgweNErY.js";var X=e('<div class="rating"><input type="radio" name="rating-1" class="mask mask-star"> <input type="radio" name="rating-1" class="mask mask-star" checked="checked"> <input type="radio" name="rating-1" class="mask mask-star"> <input type="radio" name="rating-1" class="mask mask-star"> <input type="radio" name="rating-1" class="mask mask-star"></div>'),j=e('<pre slot="html"> </pre>'),q=e('<div class="rating"><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"></div>'),B=e('<pre slot="html"> </pre>'),G=e('<div class="gap-1 rating"><input type="radio" name="rating-3" class="mask mask-heart bg-red-400"> <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked="checked"> <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400"> <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400"> <input type="radio" name="rating-3" class="mask mask-heart bg-green-400"></div>'),H=e('<pre slot="html"> </pre>'),I=e('<div class="rating"><input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2" checked="checked"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"> <input type="radio" name="rating-4" class="bg-green-500 mask mask-star-2"></div>'),J=e('<pre slot="html"> </pre>'),K=e('<div class="flex flex-col gap-2 items-center"><div class="rating rating-xs"><input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked="checked"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"></div> <div class="rating rating-sm"><input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked="checked"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"></div> <div class="rating rating-md"><input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked="checked"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"></div> <div class="rating rating-lg"><input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" checked="checked"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"> <input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400"></div></div>'),N=e('<pre slot="html"> </pre>'),O=e('<div class="rating rating-lg"><input type="radio" name="rating-9" class="rating-hidden"> <input type="radio" name="rating-9" class="mask mask-star-2"> <input type="radio" name="rating-9" class="mask mask-star-2" checked="checked"> <input type="radio" name="rating-9" class="mask mask-star-2"> <input type="radio" name="rating-9" class="mask mask-star-2"> <input type="radio" name="rating-9" class="mask mask-star-2"></div>'),Q=e('<pre slot="html"> </pre>'),Y=e('<div class="rating rating-lg rating-half"><input type="radio" name="rating-10" class="rating-hidden"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked="checked"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1"> <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2"></div>'),Z=e('<pre slot="html"> </pre>'),aa=e("<!> <!> <!> <!> <!> <!> <!> <!>",1);const sa={title:"Rating",desc:"Rating is a set of radio buttons that allow the user to rate something.",published:!0,layout:"components"};function $a(w,V){const M=T(V,["children","$$slots","$$events"]),c={};D(c);const o=()=>U(W,"$prefix",c);var u=S(),E=P(u);A(E,z(()=>M,sa,{children:(L,ta)=>{var h=aa(),y=P(h);F(y,{data:[{type:"component",class:"rating",desc:"Wrapper component for radio buttons"},{type:"modifier",class:"rating-half",desc:"To shows half of the shape"},{type:"modifier",class:"rating-hidden",desc:"hides the input. Useful to clear the the rating"},{type:"responsive",class:"rating-lg",desc:"Large rating"},{type:"responsive",class:"rating-md",desc:"Medium rating (default)"},{type:"responsive",class:"rating-sm",desc:"Small rating"},{type:"responsive",class:"rating-xs",desc:"Extra small rating"}]});var v=r(r(y,!0));d(v,{title:"Rating",children:(s,n)=>{var a=X();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=j(),i=p(a);i.nodeValue=$(`<div class="$$rating">
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" checked="checked" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
  <input type="radio" name="rating-1" class="$$mask $$mask-star" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}});var b=r(r(v,!0));d(b,{title:"mask-star-2 with warning color",children:(s,n)=>{var a=q();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=B(),i=p(a);i.nodeValue=$(`<div class="$$rating">
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="$$mask $$mask-star-2 bg-orange-400" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}});var _=r(r(b,!0));d(_,{title:"mask-heart with multiple colors",children:(s,n)=>{var a=G();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=H(),i=p(a);i.nodeValue=$(`<div class="$$rating gap-1">
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-red-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-orange-400" checked="checked" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" class="$$mask $$mask-heart bg-green-400" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}});var f=r(r(_,!0));d(f,{title:"mask-star-2 with green-500 color",children:(s,n)=>{var a=I();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=J(),i=p(a);i.nodeValue=$(`<div class="$$rating">
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" checked="checked" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" class="$$mask $$mask-star-2 bg-green-500" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}});var x=r(r(f,!0));d(x,{title:"Sizes",children:(s,n)=>{var a=K();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=N(),i=p(a);i.nodeValue=$(`<!-- xs -->
<div class="$$rating $$rating-xs">
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- sm -->
<div class="$$rating $$rating-sm">
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- md -->
<div class="$$rating $$rating-md">
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" class="$$mask $$mask-star-2 bg-orange-400" />
</div>
<!-- lg -->
<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" checked="checked" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" class="$$mask $$mask-star-2 bg-orange-400" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}});var C=r(r(x,!0));d(C,{title:"with `rating-hidden`",desc:"`rating-hidden` is a hidden radio at the start to allow uses remove their rating.",children:(s,n)=>{var a=O();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=Q(),i=p(a);i.nodeValue=$(`<div class="$$rating $$rating-lg">
  <input type="radio" name="rating-9" class="$$rating-hidden" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" checked="checked" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
  <input type="radio" name="rating-9" class="$$mask $$mask-star-2" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}});var R=r(r(C,!0));d(R,{title:"half stars",children:(s,n)=>{var a=Y();t(s,a)},$$slots:{default:!0,html:(s,n)=>{var a=Z(),i=p(a);i.nodeValue=$(`<div class="$$rating $$rating-lg $$rating-half">
  <input type="radio" name="rating-10" class="rating-hidden" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" checked="checked" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-1" />
  <input type="radio" name="rating-10" class="bg-green-500 $$mask $$mask-star-2 $$mask-half-2" />
</div>`),l(a,(m,g)=>k(m,g),()=>({to:o()})),t(s,a)}}}),t(L,h)},$$slots:{default:!0}})),t(w,u)}export{$a as component};
