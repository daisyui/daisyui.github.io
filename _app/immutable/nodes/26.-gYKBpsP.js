import{e as q,a as r,f as A,t as d,b as n,i as f,s as i,c as l}from"../chunks/disclose-version.ctAPnXXB.js";import{p as B,a as G,r as c,g as v,b as H,s as K,m as N}from"../chunks/runtime.DncqhcmG.js";import{a as $}from"../chunks/actions.D_WyPHWg.js";import{s as _}from"../chunks/attributes.cwV9cgRd.js";import{u as O,i as Q,s as R}from"../chunks/store.DhJ2LkXK.js";import{l as W,s as Y}from"../chunks/props.BH0qENYe.js";import{M as Z}from"../chunks/mdsvex-components.CISdKOSk.js";import{C as ss,a as y,r as m,p as ns}from"../chunks/ClassTable.D_femxPu.js";import{o as as}from"../chunks/index-client.B4lWTp-O.js";import"../chunks/entry.DpYwZM8Q.js";import{T as ts}from"../chunks/Translate.BgWHrm2j.js";var os=d('<span class="countdown"><span></span></span>'),es=d('<pre slot="html"> </pre>'),ls=d('<pre slot="jsx"> </pre>'),ps=d('<span class="countdown font-mono text-6xl"><span></span></span>'),rs=d('<pre slot="html"> </pre>'),vs=d('<pre slot="jsx"> </pre>'),ds=d('<span class="font-mono text-2xl countdown"><span style="--value:10;"></span>h <span style="--value:24;"></span>m <span></span>s</span>'),cs=d('<pre slot="html"> </pre>'),us=d('<pre slot="jsx"> </pre>'),xs=d('<span class="font-mono text-2xl countdown"><span style="--value:10;"></span>: <span style="--value:24;"></span>: <span></span></span>'),is=d('<pre slot="html"> </pre>'),$s=d('<pre slot="jsx"> </pre>'),ms=d('<div class="flex gap-5"><div><span class="font-mono text-4xl countdown"><span style="--value:15;"></span></span> days</div> <div><span class="font-mono text-4xl countdown"><span style="--value:10;"></span></span> hours</div> <div><span class="font-mono text-4xl countdown"><span style="--value:24;"></span></span> minutes</div> <div><span class="font-mono text-4xl countdown"><span></span></span> sec</div></div>'),fs=d('<pre slot="html"> </pre>'),_s=d('<pre slot="jsx"> </pre>'),ys=d('<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="--value:15;"></span></span> days</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="--value:10;"></span></span> hours</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="--value:24;"></span></span> min</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span></span></span> sec</div></div>'),ws=d('<pre slot="html"> </pre>'),hs=d('<pre slot="jsx"> </pre>'),gs=d('<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="--value:15;"></span></span> days</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="--value:10;"></span></span> hours</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="--value:24;"></span></span> min</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span></span></span> sec</div></div>'),bs=d('<pre slot="html"> </pre>'),Cs=d('<pre slot="jsx"> </pre>'),Ps=d("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);const js={title:"Countdown",desc:"Countdown gives you a transition effect of changing numbers.",published:!0,layout:"components"};function Js(F,C){const I=W(C,["children","$$slots","$$events"]);B(C,!1);const P={};O(P);const x=()=>R(ns,"$prefix",P);let p=N(59);function b(){v(p)>0?(H(p,-1),setTimeout(b,1e3)):(K(p,59),setTimeout(b,1e3))}as(()=>{b()}),Q();var j=q(),J=A(j);Z(J,Y(()=>I,js,{children:(U,Ts)=>{var T=Ps(),L=A(T);ts(L,{text:"you need to change the `--value` CSS variable using JS. Value must be a number between 0 and 99."});var M=n(n(L,!0));ss(M,{data:[{type:"component",class:"countdown",desc:"Container element"}]});var S=n(n(M,!0));y(S,{title:"Countdown",children:(a,u)=>{var s=os(),t=l(s);c(()=>_(t,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=es(),t=l(s);c(()=>i(t,`<span class="$$countdown">
  <span style="--value:${v(p)};"></span>
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=ls(),t=l(s);c(()=>i(t,`<span class="$$countdown">
  <span style={{"--value":${v(p)}}}></span>
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}});var k=n(n(S,!0));y(k,{title:"Large text",children:(a,u)=>{var s=ps(),t=l(s);c(()=>_(t,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=rs(),t=l(s);c(()=>i(t,`<span class="$$countdown font-mono text-6xl">
  <span style="--value:${v(p)};"></span>
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=vs(),t=l(s);c(()=>i(t,`<span class="$$countdown font-mono text-6xl">
  <span style={{"--value":${v(p)}}}></span>
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}});var D=n(n(k,!0));y(D,{title:"Clock countdown",children:(a,u)=>{var s=ds(),t=l(s),o=n(n(t,!0)),e=n(n(o,!0));c(()=>_(e,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=cs(),t=l(s);c(()=>i(t,`<span class="$$countdown font-mono text-2xl">
  <span style="--value:10;"></span>h
  <span style="--value:24;"></span>m
  <span style="--value:${v(p)};"></span>s
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=us(),t=l(s);c(()=>i(t,`<span class="$$countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>h
  <span style={{"--value":24}}></span>m
  <span style={{"--value":${v(p)}}}></span>s
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}});var E=n(n(D,!0));y(E,{title:"Clock countdown with colons",children:(a,u)=>{var s=xs(),t=l(s),o=n(n(t,!0)),e=n(n(o,!0));c(()=>_(e,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=is(),t=l(s);c(()=>i(t,`<span class="$$countdown font-mono text-2xl">
  <span style="--value:10;"></span>:
  <span style="--value:24;"></span>:
  <span style="--value:${v(p)};"></span>
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=$s(),t=l(s);c(()=>i(t,`<span class="$$countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>:
  <span style={{"--value":24}}></span>:
  <span style={{"--value":${v(p)}}}></span>
</span>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}});var V=n(n(E,!0));y(V,{title:"Large text with labels",children:(a,u)=>{var s=ms(),t=l(s),o=n(n(t,!0)),e=n(n(o,!0)),w=n(n(e,!0)),h=l(w),g=l(h);c(()=>_(g,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=fs(),t=l(s);c(()=>i(t,`<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style="--value:${v(p)};"></span>
    </span>
    sec
  </div>
</div>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=_s(),t=l(s);c(()=>i(t,`<div class="flex gap-5">
  <div>
    <span class="$$countdown font-mono text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span class="$$countdown font-mono text-4xl">
      <span style={{"--value":${v(p)}}}></span>
    </span>
    sec
  </div>
</div>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}});var z=n(n(V,!0));y(z,{title:"Large text with labels under",children:(a,u)=>{var s=ys(),t=l(s),o=n(n(t,!0)),e=n(n(o,!0)),w=n(n(e,!0)),h=l(w),g=l(h);c(()=>_(g,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=ws(),t=l(s);c(()=>i(t,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:${v(p)};"></span>
    </span>
    sec
  </div>
</div>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=hs(),t=l(s);c(()=>i(t,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":${v(p)}}}></span>
    </span>
    sec
  </div>
</div>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}});var X=n(n(z,!0));y(X,{title:"In boxes",children:(a,u)=>{var s=gs(),t=l(s),o=n(n(t,!0)),e=n(n(o,!0)),w=n(n(e,!0)),h=l(w),g=l(h);c(()=>_(g,"style",`--value:${f(v(p))};`)),r(a,s)},$$slots:{html:(a,u)=>{var s=bs(),t=l(s);c(()=>i(t,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:15;"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:10;"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:24;"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style="--value:${v(p)};"></span>
    </span>
    sec
  </div>
</div>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)},jsx:(a,u)=>{var s=Cs(),t=l(s);c(()=>i(t,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="$$countdown font-mono text-5xl">
      <span style={{"--value":${v(p)}}}></span>
    </span>
    sec
  </div>
</div>`)),$(s,(o,e)=>m(o,e),()=>({to:x()})),r(a,s)}}}),r(U,T)}})),r(F,j),G()}export{Js as component};
