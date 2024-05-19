import{e as U,a as s,f as w,i as r,t,c as a,b as o}from"../chunks/disclose-version.CwIan75F.js";import{a as v}from"../chunks/actions.31B-wlSq.js";import{l as I,s as J}from"../chunks/props.BlHtXCBj.js";import{u as S,s as X}from"../chunks/store.DaFOg5Tg.js";import{M as Y}from"../chunks/mdsvex-components.Bcvyp1Dy.js";import{C as q,a as m,r as h,p as G}from"../chunks/ClassTable.BD66Esne.js";import"../chunks/entry.CgweNErY.js";import{T as C}from"../chunks/Translate.13zV-Jf5.js";var H=t('<div class="collapse bg-base-200"><input type="radio" name="my-accordion-1" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse bg-base-200"><input type="radio" name="my-accordion-1"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse bg-base-200"><input type="radio" name="my-accordion-1"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>',1),K=t('<pre slot="html"> </pre>'),N=t('<div class="collapse collapse-arrow bg-base-200"><input type="radio" name="my-accordion-2" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow bg-base-200"><input type="radio" name="my-accordion-2"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow bg-base-200"><input type="radio" name="my-accordion-2"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>',1),O=t('<pre slot="html"> </pre>'),Q=t('<div class="collapse collapse-plus bg-base-200"><input type="radio" name="my-accordion-3" checked="checked"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-plus bg-base-200"><input type="radio" name="my-accordion-3"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-plus bg-base-200"><input type="radio" name="my-accordion-3"> <div class="collapse-title text-xl font-medium">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div>',1),R=t('<pre slot="html"> </pre>'),W=t('<div class="join join-vertical w-full"><div class="collapse collapse-arrow join-item border border-base-300"><input type="radio" name="my-accordion-4" checked="checked"> <div class="collapse-title">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow join-item border border-base-300"><input type="radio" name="my-accordion-4"> <div class="collapse-title">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div> <div class="collapse collapse-arrow join-item border border-base-300"><input type="radio" name="my-accordion-4"> <div class="collapse-title">Click to open this one and close others</div> <div class="collapse-content"><p>hello</p></div></div></div>'),Z=t('<pre slot="html"> </pre>'),ee=t('<!> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><!></div></div> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><!></div></div> <!> <!> <!> <!>',1);const oe={title:"Accordion",desc:"Accordion is used for showing and hiding content but only one item can stay open at a time.",published:!0,layout:"components"};function re(j,A){const P=I(A,["children","$$slots","$$events"]),$={};S($);const p=()=>X(G,"$prefix",$);var u=U(),M=w(u);Y(M,J(()=>P,oe,{children:(T,le)=>{var b=ee(),f=w(b);q(f,{data:[{type:"component",class:"collapse",desc:"Container element"},{type:"component",class:"collapse-title",desc:"Title element"},{type:"component",class:"collapse-content",desc:"Container for content"},{type:"modifier",class:"collapse-arrow",desc:"Adds arrow icon"},{type:"modifier",class:"collapse-plus",desc:"Adds plus/minus icon"},{type:"modifier",class:"collapse-open",desc:"Force open"},{type:"modifier",class:"collapse-close",desc:"Force close"}]});var y=o(o(f,!0)),V=a(y),z=o(o(V,!0)),F=a(z);C(F,{text:"Accordion uses the same style as the <a href='/components/collapse/' class='link'>collapse component</a> but it works with radio inputs. You can control which item to be open by checking/unchecking the hidden radio input."});var x=o(o(y,!0)),B=a(x),D=o(o(B,!0)),E=a(D);C(E,{text:"All radio inputs with the same name work together and only one of them can be open at a time. If you have more than one set of accordion items on a page, use different names for the radio inputs on each set."});var k=o(o(x,!0));m(k,{title:"Accordion using radio inputs",children:(l,i)=>{var e=H();s(l,e)},$$slots:{default:!0,html:(l,i)=>{var e=K(),c=a(e);c.nodeValue=r(`<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`),v(e,(n,d)=>h(n,d),()=>({to:p()})),s(l,e)}}});var _=o(o(k,!0));m(_,{title:"Accordion with arrow icon",children:(l,i)=>{var e=N();s(l,e)},$$slots:{default:!0,html:(l,i)=>{var e=O(),c=a(e);c.nodeValue=r(`<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`),v(e,(n,d)=>h(n,d),()=>({to:p()})),s(l,e)}}});var g=o(o(_,!0));m(g,{title:"Accordion with plus/minus icon",children:(l,i)=>{var e=Q();s(l,e)},$$slots:{default:!0,html:(l,i)=>{var e=R(),c=a(e);c.nodeValue=r(`<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="$$collapse $$collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`),v(e,(n,d)=>h(n,d),()=>({to:p()})),s(l,e)}}});var L=o(o(g,!0));m(L,{title:"Using Accordion and Join together",desc:"to join the items together and handle border radius automatically",children:(l,i)=>{var e=W();s(l,e)},$$slots:{default:!0,html:(l,i)=>{var e=Z(),c=a(e);c.nodeValue=r(`<div class="$$join $$join-vertical w-full">
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div class="$$collapse $$collapse-arrow $$join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div class="$$collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="$$collapse-content"> 
      <p>hello</p>
    </div>
  </div>
</div>`),v(e,(n,d)=>h(n,d),()=>({to:p()})),s(l,e)}}}),s(T,b)},$$slots:{default:!0}})),s(j,u)}export{re as component};
