import{e as q,a as r,f as A,t as d,b as t,i as f,s as i,c as l}from"../chunks/disclose-version.CwIan75F.js";import{p as B,a as G,t as u,g as v,b as H,s as K,m as N}from"../chunks/runtime.Bwmma5tW.js";import{a as $}from"../chunks/actions.31B-wlSq.js";import{s as _}from"../chunks/i18n.ZXp79xoT.js";import{u as O,i as Q,s as R}from"../chunks/store.DaFOg5Tg.js";import{l as W,s as Y}from"../chunks/props.BlHtXCBj.js";import{M as Z}from"../chunks/mdsvex-components.Bcvyp1Dy.js";import{C as ss,a as y,r as m,p as ts}from"../chunks/ClassTable.BD66Esne.js";import{o as ns}from"../chunks/index-client.CGRUxIS9.js";import"../chunks/entry.CgweNErY.js";import{T as as}from"../chunks/Translate.13zV-Jf5.js";var es=d('<span class="countdown"><span></span></span>'),os=d('<pre slot="html"> </pre>'),ls=d('<pre slot="jsx"> </pre>'),ps=d('<span class="countdown font-mono text-6xl"><span></span></span>'),rs=d('<pre slot="html"> </pre>'),vs=d('<pre slot="jsx"> </pre>'),ds=d('<span class="font-mono text-2xl countdown"><span style="--value:10;"></span>h <span style="--value:24;"></span>m <span></span>s</span>'),us=d('<pre slot="html"> </pre>'),cs=d('<pre slot="jsx"> </pre>'),xs=d('<span class="font-mono text-2xl countdown"><span style="--value:10;"></span>: <span style="--value:24;"></span>: <span></span></span>'),is=d('<pre slot="html"> </pre>'),$s=d('<pre slot="jsx"> </pre>'),ms=d('<div class="flex gap-5"><div><span class="font-mono text-4xl countdown"><span style="--value:15;"></span></span> days</div> <div><span class="font-mono text-4xl countdown"><span style="--value:10;"></span></span> hours</div> <div><span class="font-mono text-4xl countdown"><span style="--value:24;"></span></span> minutes</div> <div><span class="font-mono text-4xl countdown"><span></span></span> sec</div></div>'),fs=d('<pre slot="html"> </pre>'),_s=d('<pre slot="jsx"> </pre>'),ys=d('<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="--value:15;"></span></span> days</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="--value:10;"></span></span> hours</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span style="--value:24;"></span></span> min</div> <div class="flex flex-col"><span class="font-mono text-5xl countdown"><span></span></span> sec</div></div>'),ws=d('<pre slot="html"> </pre>'),hs=d('<pre slot="jsx"> </pre>'),gs=d('<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="--value:15;"></span></span> days</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="--value:10;"></span></span> hours</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span style="--value:24;"></span></span> min</div> <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"><span class="font-mono text-5xl countdown"><span></span></span> sec</div></div>'),bs=d('<pre slot="html"> </pre>'),Cs=d('<pre slot="jsx"> </pre>'),Ps=d("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);const js={title:"Countdown",desc:"Countdown gives you a transition effect of changing numbers.",published:!0,layout:"components"};function Js(F,C){const I=W(C,["children","$$slots","$$events"]);B(C,!1);const P={};O(P);const x=()=>R(ts,"$prefix",P);let p=N(59);function b(){v(p)>0?(H(p,-1),setTimeout(b,1e3)):(K(p,59),setTimeout(b,1e3))}ns(()=>{b()}),Q();var j=q(),J=A(j);Z(J,Y(()=>I,js,{children:(U,Ts)=>{var T=Ps(),L=A(T);as(L,{text:"you need to change the `--value` CSS variable using JS. Value must be a number between 0 and 99."});var M=t(t(L,!0));ss(M,{data:[{type:"component",class:"countdown",desc:"Container element"}]});var S=t(t(M,!0));y(S,{title:"Countdown",children:(n,c)=>{var s=es(),a=l(s);u(()=>_(a,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=os(),a=l(s);u(()=>i(a,`<span class="$$countdown">
  <span style="--value:${v(p)};"></span>
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=ls(),a=l(s);u(()=>i(a,`<span class="$$countdown">
  <span style={{"--value":${v(p)}}}></span>
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}});var k=t(t(S,!0));y(k,{title:"Large text",children:(n,c)=>{var s=ps(),a=l(s);u(()=>_(a,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=rs(),a=l(s);u(()=>i(a,`<span class="$$countdown font-mono text-6xl">
  <span style="--value:${v(p)};"></span>
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=vs(),a=l(s);u(()=>i(a,`<span class="$$countdown font-mono text-6xl">
  <span style={{"--value":${v(p)}}}></span>
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}});var D=t(t(k,!0));y(D,{title:"Clock countdown",children:(n,c)=>{var s=ds(),a=l(s),e=t(t(a,!0)),o=t(t(e,!0));u(()=>_(o,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=us(),a=l(s);u(()=>i(a,`<span class="$$countdown font-mono text-2xl">
  <span style="--value:10;"></span>h
  <span style="--value:24;"></span>m
  <span style="--value:${v(p)};"></span>s
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=cs(),a=l(s);u(()=>i(a,`<span class="$$countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>h
  <span style={{"--value":24}}></span>m
  <span style={{"--value":${v(p)}}}></span>s
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}});var E=t(t(D,!0));y(E,{title:"Clock countdown with colons",children:(n,c)=>{var s=xs(),a=l(s),e=t(t(a,!0)),o=t(t(e,!0));u(()=>_(o,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=is(),a=l(s);u(()=>i(a,`<span class="$$countdown font-mono text-2xl">
  <span style="--value:10;"></span>:
  <span style="--value:24;"></span>:
  <span style="--value:${v(p)};"></span>
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=$s(),a=l(s);u(()=>i(a,`<span class="$$countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>:
  <span style={{"--value":24}}></span>:
  <span style={{"--value":${v(p)}}}></span>
</span>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}});var V=t(t(E,!0));y(V,{title:"Large text with labels",children:(n,c)=>{var s=ms(),a=l(s),e=t(t(a,!0)),o=t(t(e,!0)),w=t(t(o,!0)),h=l(w),g=l(h);u(()=>_(g,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=fs(),a=l(s);u(()=>i(a,`<div class="flex gap-5">
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
</div>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=_s(),a=l(s);u(()=>i(a,`<div class="flex gap-5">
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
</div>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}});var z=t(t(V,!0));y(z,{title:"Large text with labels under",children:(n,c)=>{var s=ys(),a=l(s),e=t(t(a,!0)),o=t(t(e,!0)),w=t(t(o,!0)),h=l(w),g=l(h);u(()=>_(g,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=ws(),a=l(s);u(()=>i(a,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=hs(),a=l(s);u(()=>i(a,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}});var X=t(t(z,!0));y(X,{title:"In boxes",children:(n,c)=>{var s=gs(),a=l(s),e=t(t(a,!0)),o=t(t(e,!0)),w=t(t(o,!0)),h=l(w),g=l(h);u(()=>_(g,"style",`--value:${f(v(p))};`)),r(n,s)},$$slots:{default:!0,html:(n,c)=>{var s=bs(),a=l(s);u(()=>i(a,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)},jsx:(n,c)=>{var s=Cs(),a=l(s);u(()=>i(a,`<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`)),$(s,(e,o)=>m(e,o),()=>({to:x()})),r(n,s)}}}),r(U,T)},$$slots:{default:!0}})),r(F,j),G()}export{Js as component};
