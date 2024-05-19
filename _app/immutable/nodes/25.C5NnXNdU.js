import{e as E,a as o,f as T,i as p,t as l,c as d,b as s}from"../chunks/disclose-version.CwIan75F.js";import{a as v}from"../chunks/actions.31B-wlSq.js";import{l as L,s as X}from"../chunks/props.BlHtXCBj.js";import{u as Y,s as q}from"../chunks/store.DaFOg5Tg.js";import{M as G}from"../chunks/mdsvex-components.Bcvyp1Dy.js";import{C as H,a as m,r as u,p as J}from"../chunks/ClassTable.BD66Esne.js";import"../chunks/entry.CgweNErY.js";import{T as K}from"../chunks/Translate.13zV-Jf5.js";var N=l('<div tabindex="0" class="collapse bg-base-200"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),O=l('<pre slot="html"> </pre>'),Q=l('<div class="collapse bg-base-200"><input type="checkbox"> <div class="collapse-title text-xl font-medium">Click me to show/hide content</div> <div class="collapse-content"><p>hello</p></div></div>'),R=l('<pre slot="html"> </pre>'),Z=l('<details class="collapse bg-base-200"><summary class="collapse-title text-xl font-medium">Click to open/close</summary> <div class="collapse-content"><p>content</p></div></details>'),ee=l('<pre slot="html"> </pre>'),te=l('<div tabindex="0" class="collapse border border-base-300 bg-base-200"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),se=l('<pre slot="html"> </pre>'),oe=l('<div tabindex="0" class="collapse border border-base-300 bg-base-200 collapse-arrow"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),le=l('<pre slot="html"> </pre>'),ae=l('<div tabindex="0" class="collapse border border-base-300 bg-base-200 collapse-plus"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),ce=l('<pre slot="html"> </pre>'),ie=l('<div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-200"><div class="collapse-title text-xl font-medium">I have collapse-open class</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),re=l('<pre slot="html"> </pre>'),de=l('<div tabindex="0" class="collapse collapse-close border border-base-300 bg-base-200"><div class="collapse-title text-xl font-medium">I have collapse-close class</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),ne=l('<pre slot="html"> </pre>'),pe=l('<div tabindex="0" class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"><div class="collapse-title">Focus me to see content</div> <div class="collapse-content"><p>tabindex="0" attribute is necessary to make the div focusable</p></div></div>'),ve=l('<pre slot="html"> </pre>'),me=l('<div class="collapse bg-base-200"><input type="checkbox" class="peer"> <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">Click me to show/hide content</div> <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"><p>hello</p></div></div>'),ue=l('<pre slot="html"> </pre>'),be=l(`<!> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><!></div></div> <!> <!> <!> <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>Using <code>&lt;details&gt;</code> tag, we can't have animations because <code>&lt;details&gt;</code> tag doesn't allow CSS transitions.</div></div> <!> <!> <!> <!> <!> <!> <!>`,1);const $e={title:"Collapse",desc:"Collapse is used for showing and hiding content.",published:!0,layout:"components"};function Pe(M,S){const I=L(S,["children","$$slots","$$events"]),b={};Y(b);const n=()=>q(J,"$prefix",b);var $=E(),A=T($);G(A,X(()=>I,$e,{children:(U,he)=>{var h=be(),x=T(h);H(x,{data:[{type:"component",class:"collapse",desc:"Container element"},{type:"component",class:"collapse-title",desc:"Title element"},{type:"component",class:"collapse-content",desc:"Container for content"},{type:"modifier",class:"collapse-arrow",desc:"Adds arrow icon"},{type:"modifier",class:"collapse-plus",desc:"Adds plus/minus icon"},{type:"modifier",class:"collapse-open",desc:"Force open"},{type:"modifier",class:"collapse-close",desc:"Force close"}]});var _=s(s(x,!0)),W=d(_),z=s(s(W,!0)),j=d(z);K(j,{text:"Also see <a href='/components/accordion/' class='link'>accordion</a> examples"});var f=s(s(_,!0));m(f,{title:"Collapse with focus",desc:"This collapse works with focus. When div loses focus, it gets closed",children:(t,a)=>{var e=N();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=O(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="$$collapse bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var g=s(s(f,!0));m(g,{title:"Collapse with checkbox",desc:"This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.",children:(t,a)=>{var e=Q();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=R(),c=d(e);c.nodeValue=p(`<div class="$$collapse bg-base-200">
  <input type="checkbox" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var y=s(s(g,!0));m(y,{title:"Collapse using <details> and <summary> tag",desc:"`collapse-open` and `collapse-close` doesn't work with this method. You can add/remove `open` attribute to the <details> instead",children:(t,a)=>{var e=Z();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=ee(),c=d(e);c.nodeValue=p(`<details class="$$collapse bg-base-200">
  <summary class="$$collapse-title text-xl font-medium">Click to open/close</summary>
  <div class="$$collapse-content"> 
    <p>content</p>
  </div>
</details>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var B=s(s(y,!0)),k=s(s(B,!0));m(k,{title:"With border and background color",children:(t,a)=>{var e=te();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=se(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="$$collapse border border-base-300 bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var w=s(s(k,!0));m(w,{title:"With arrow icon",children:(t,a)=>{var e=oe();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=le(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="$$collapse $$collapse-arrow border border-base-300 bg-base-200">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var C=s(s(w,!0));m(C,{title:"With arrow plus/minus icon",children:(t,a)=>{var e=ae();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=ce(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="$$collapse $$collapse-plus border border-base-300 bg-base-200">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var P=s(s(C,!0));m(P,{title:"Force open",children:(t,a)=>{var e=ie();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=re(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="$$collapse $$collapse-open border border-base-300 bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var F=s(s(P,!0));m(F,{title:"Force close",children:(t,a)=>{var e=de();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=ne(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="$$collapse $$collapse-close border border-base-300 bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var V=s(s(F,!0));m(V,{title:"Custom colors for collapse that works with focus",desc:"Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused",children:(t,a)=>{var e=pe();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=ve(),c=d(e);c.nodeValue=p(`<div tabindex="0" class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
  <div class="$$collapse-title">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}});var D=s(s(V,!0));m(D,{title:"Custom colors for collapse that works with checkbox",desc:"Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked",children:(t,a)=>{var e=me();o(t,e)},$$slots:{default:!0,html:(t,a)=>{var e=ue(),c=d(e);c.nodeValue=p(`<div class="collapse bg-base-200">
  <input type="checkbox" class="peer" /> 
  <div class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>`),v(e,(i,r)=>u(i,r),()=>({to:n()})),o(t,e)}}}),o(U,h)},$$slots:{default:!0}})),o(M,$)}export{Pe as component};
