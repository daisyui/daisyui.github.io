import{e as M,a as o,f as C,i as u,t as s,b as i,c as r}from"../chunks/disclose-version.ctAPnXXB.js";import{a as m}from"../chunks/actions.D_WyPHWg.js";import{l as N,s as z}from"../chunks/props.BH0qENYe.js";import{u as D,s as L}from"../chunks/store.DhJ2LkXK.js";import{M as S}from"../chunks/mdsvex-components.CISdKOSk.js";import{C as T,a as c,r as d,p as U}from"../chunks/ClassTable.D_femxPu.js";import"../chunks/entry.DpYwZM8Q.js";var A=s('<div class="join"><button class="join-item btn">1</button> <button class="join-item btn btn-active">2</button> <button class="join-item btn">3</button> <button class="join-item btn">4</button></div>'),F=s('<pre slot="html"> </pre>'),G=s('<div class="flex flex-col gap-2 items-center"><div class="join"><button class="join-item btn btn-xs">1</button> <button class="join-item btn btn-xs btn-active">2</button> <button class="join-item btn btn-xs">3</button> <button class="join-item btn btn-xs">4</button></div> <div class="join"><button class="join-item btn btn-sm">1</button> <button class="join-item btn btn-sm btn-active">2</button> <button class="join-item btn btn-sm">3</button> <button class="join-item btn btn-sm">4</button></div> <div class="join"><button class="join-item btn btn-md">1</button> <button class="join-item btn btn-md btn-active">2</button> <button class="join-item btn btn-md">3</button> <button class="join-item btn btn-md">4</button></div> <div class="join"><button class="join-item btn btn-lg">1</button> <button class="join-item btn btn-lg btn-active">2</button> <button class="join-item btn btn-lg">3</button> <button class="join-item btn btn-lg">4</button></div></div>'),W=s('<pre slot="html"> </pre>'),X=s('<div class="join"><button class="join-item btn">1</button> <button class="join-item btn">2</button> <button class="join-item btn btn-disabled">...</button> <button class="join-item btn">99</button> <button class="join-item btn">100</button></div>'),B=s('<pre slot="html"> </pre>'),H=s('<div class="join"><button class="join-item btn">«</button> <button class="join-item btn">Page 22</button> <button class="join-item btn">»</button></div>'),I=s('<pre slot="html"> </pre>'),J=s('<div class="join grid grid-cols-2"><button class="join-item btn btn-outline">Previous page</button> <button class="join-item btn btn-outline">Next</button></div>'),K=s('<pre slot="html"> </pre>'),O=s('<div class="join"><input class="join-item btn btn-square" type="radio" name="options" aria-label="1" checked="checked"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="2"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="3"> <input class="join-item btn btn-square" type="radio" name="options" aria-label="4"></div>'),Q=s('<pre slot="html"> </pre>'),R=s("<!> <!> <!> <!> <!> <!> <!>",1);const Y={title:"Pagination",desc:"Pagination is a group of buttons that allow the user to navigate between a set of related content.",published:!0,layout:"components"};function at(y,q){const V=N(q,["children","$$slots","$$events"]),p={};D(p);const l=()=>L(U,"$prefix",p);var v=M(),w=C(v);S(w,z(()=>V,Y,{children:(k,Z)=>{var j=R(),_=C(j);T(_,{data:[{type:"component",class:"join",desc:"Groups buttons together"}]});var h=i(i(_,!0));c(h,{title:"Pagination with an active button",children:(n,e)=>{var t=A();o(n,t)},$$slots:{html:(n,e)=>{var t=F(),b=r(t);b.nodeValue=u(`<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn $$btn-active">2</button>
  <button class="$$join-item $$btn">3</button>
  <button class="$$join-item $$btn">4</button>
</div>`),m(t,(a,$)=>d(a,$),()=>({to:l()})),o(n,t)}}});var g=i(i(h,!0));c(g,{title:"Sizes",children:(n,e)=>{var t=G();o(n,t)},$$slots:{html:(n,e)=>{var t=W(),b=r(t);b.nodeValue=u(`<div class="$$join">
  <button class="$$join-item $$btn $$btn-xs">1</button>
  <button class="$$join-item $$btn $$btn-xs $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-xs">3</button>
  <button class="$$join-item $$btn $$btn-xs">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-sm">1</button>
  <button class="$$join-item $$btn $$btn-sm $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-sm">3</button>
  <button class="$$join-item $$btn $$btn-sm">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-md">1</button>
  <button class="$$join-item $$btn $$btn-md $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-md">3</button>
  <button class="$$join-item $$btn $$btn-md">4</button>
</div>
<div class="$$join">
  <button class="$$join-item $$btn $$btn-lg">1</button>
  <button class="$$join-item $$btn $$btn-lg $$btn-active">2</button>
  <button class="$$join-item $$btn $$btn-lg">3</button>
  <button class="$$join-item $$btn $$btn-lg">4</button>
</div>`),m(t,(a,$)=>d(a,$),()=>({to:l()})),o(n,t)}}});var f=i(i(g,!0));c(f,{title:"With a disabled button",children:(n,e)=>{var t=X();o(n,t)},$$slots:{html:(n,e)=>{var t=B(),b=r(t);b.nodeValue=u(`<div class="$$join">
  <button class="$$join-item $$btn">1</button>
  <button class="$$join-item $$btn">2</button>
  <button class="$$join-item $$btn $$btn-disabled">...</button>
  <button class="$$join-item $$btn">99</button>
  <button class="$$join-item $$btn">100</button>
</div>`),m(t,(a,$)=>d(a,$),()=>({to:l()})),o(n,t)}}});var x=i(i(f,!0));c(x,{title:"Extra small buttons",children:(n,e)=>{var t=H();o(n,t)},$$slots:{html:(n,e)=>{var t=I(),b=r(t);b.nodeValue=u(`<div class="$$join">
  <button class="$$join-item $$btn">«</button>
  <button class="$$join-item $$btn">Page 22</button>
  <button class="$$join-item $$btn">»</button>
</div>`),m(t,(a,$)=>d(a,$),()=>({to:l()})),o(n,t)}}});var P=i(i(x,!0));c(P,{title:"Nex/Prev outline buttons with equal width",children:(n,e)=>{var t=J();o(n,t)},$$slots:{html:(n,e)=>{var t=K(),b=r(t);b.nodeValue=u(`<div class="$$join grid grid-cols-2">
  <button class="$$join-item $$btn $$btn-outline">Previous page</button>
  <button class="$$join-item $$btn $$btn-outline">Next</button>
</div>`),m(t,(a,$)=>d(a,$),()=>({to:l()})),o(n,t)}}});var E=i(i(P,!0));c(E,{title:"Using radio inputs",children:(n,e)=>{var t=O();o(n,t)},$$slots:{html:(n,e)=>{var t=Q(),b=r(t);b.nodeValue=u(`<div class="$$join">
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="1" checked="checked" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="2" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="3" />
  <input class="$$join-item $$btn $$btn-square" type="radio" name="options" aria-label="4" />
</div>`),m(t,(a,$)=>d(a,$),()=>({to:l()})),o(n,t)}}}),o(k,j)}})),o(y,v)}export{at as component};
