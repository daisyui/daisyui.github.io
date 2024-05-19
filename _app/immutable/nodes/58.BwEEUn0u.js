import{e as k,a as t,f as x,i as $,t as l,b as a,c as n}from"../chunks/disclose-version.CwIan75F.js";import{a as u}from"../chunks/actions.31B-wlSq.js";import{l as F,s as M}from"../chunks/props.BlHtXCBj.js";import{u as D,s as E}from"../chunks/store.DaFOg5Tg.js";import{M as G}from"../chunks/mdsvex-components.Bcvyp1Dy.js";import{C as L,a as d,r as m,p as T}from"../chunks/ClassTable.BD66Esne.js";import"../chunks/entry.CgweNErY.js";var W=l('<ul class="steps"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul>'),H=l('<pre slot="html"> </pre>'),U=l('<ul class="steps steps-vertical"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul>'),X=l('<pre slot="html"> </pre>'),j=l('<ul class="steps steps-vertical lg:steps-horizontal"><li class="step step-primary">Register</li> <li class="step step-primary">Choose plan</li> <li class="step">Purchase</li> <li class="step">Receive Product</li></ul>'),q=l('<pre slot="html"> </pre>'),B=l('<ul class="steps"><li data-content="?" class="step step-neutral">Step 1</li> <li data-content="!" class="step step-neutral">Step 2</li> <li data-content="✓" class="step step-neutral">Step 3</li> <li data-content="✕" class="step step-neutral">Step 4</li> <li data-content="★" class="step step-neutral">Step 5</li> <li data-content="" class="step step-neutral">Step 6</li> <li data-content="●" class="step step-neutral">Step 7</li></ul>'),I=l('<pre slot="html"> </pre>'),J=l('<ul class="steps"><li class="step step-info">Fly to moon</li> <li class="step step-info">Shrink the moon</li> <li class="step step-info">Grab the moon</li> <li data-content="?" class="step step-error">Sit on toilet</li></ul>'),K=l('<pre slot="html"> </pre>'),N=l('<div class="overflow-x-auto"><ul class="steps"><li class="step">start</li> <li class="step step-secondary">2</li> <li class="step step-secondary">3</li> <li class="step step-secondary">4</li> <li class="step">5</li> <li class="step step-accent">6</li> <li class="step step-accent">7</li> <li class="step">8</li> <li class="step step-error">9</li> <li class="step step-error">10</li> <li class="step">11</li> <li class="step">12</li> <li class="step step-warning">13</li> <li class="step step-warning">14</li> <li class="step">15</li> <li class="step step-neutral">16</li> <li class="step step-neutral">17</li> <li class="step step-neutral">18</li> <li class="step step-neutral">19</li> <li class="step step-neutral">20</li> <li class="step step-neutral">21</li> <li class="step step-neutral">22</li> <li class="step step-neutral">23</li> <li class="step step-neutral">end</li></ul></div>'),O=l('<pre slot="html"> </pre>'),Q=l("<!> <!> <!> <!> <!> <!> <!>",1);const Y={title:"Steps",desc:"Steps can be used to show a list of steps in a process.",published:!0,layout:"components"};function rs(R,b){const w=F(b,["children","$$slots","$$events"]),v={};D(v);const c=()=>E(T,"$prefix",v);var _=k(),A=x(_);G(A,M(()=>w,Y,{children:(V,Z)=>{var h=Q(),f=x(h);L(f,{data:[{type:"component",class:"steps",desc:"Container of step items"},{type:"component",class:"step",desc:"A step item"},{type:"modifier",class:"step-primary",desc:"Adds `primary` color to step"},{type:"modifier",class:"step-secondary",desc:"Adds `secondary` color to step"},{type:"modifier",class:"step-accent",desc:"Adds `accent` color to step"},{type:"modifier",class:"step-info",desc:"Adds `info` color to step"},{type:"modifier",class:"step-success",desc:"Adds `success` color to step"},{type:"modifier",class:"step-warning",desc:"Adds `warning` color to step"},{type:"modifier",class:"step-error",desc:"Adds `error` color to step"},{type:"responsive",class:"steps-vertical",desc:"makes `steps` vertical"},{type:"responsive",class:"steps-horizontal",desc:"makes `steps` horizontal"}]});var y=a(a(f,!0));d(y,{title:"Horizontal",children:(e,p)=>{var s=W();t(e,s)},$$slots:{default:!0,html:(e,p)=>{var s=H(),i=n(s);i.nodeValue=$(`<ul class="$$steps">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>`),u(s,(r,o)=>m(r,o),()=>({to:c()})),t(e,s)}}});var P=a(a(y,!0));d(P,{title:"Vertical",children:(e,p)=>{var s=U();t(e,s)},$$slots:{default:!0,html:(e,p)=>{var s=X(),i=n(s);i.nodeValue=$(`<ul class="$$steps $$steps-vertical">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>`),u(s,(r,o)=>m(r,o),()=>({to:c()})),t(e,s)}}});var C=a(a(P,!0));d(C,{title:"responsive (vertical on small screen, horizontal on large screen)",children:(e,p)=>{var s=j();t(e,s)},$$slots:{default:!0,html:(e,p)=>{var s=q(),i=n(s);i.nodeValue=$(`<ul class="$$steps $$steps-vertical lg:$$steps-horizontal">
  <li class="$$step $$step-primary">Register</li>
  <li class="$$step $$step-primary">Choose plan</li>
  <li class="$$step">Purchase</li>
  <li class="$$step">Receive Product</li>
</ul>`),u(s,(r,o)=>m(r,o),()=>({to:c()})),t(e,s)}}});var g=a(a(C,!0));d(g,{title:"With data-content",children:(e,p)=>{var s=B();t(e,s)},$$slots:{default:!0,html:(e,p)=>{var s=I(),i=n(s);i.nodeValue=$(`<ul class="$$steps">
  <li data-content="?" class="$$step $$step-neutral">Step 1</li>
  <li data-content="!" class="$$step $$step-neutral">Step 2</li>
  <li data-content="✓" class="$$step $$step-neutral">Step 3</li>
  <li data-content="✕" class="$$step $$step-neutral">Step 4</li>
  <li data-content="★" class="$$step $$step-neutral">Step 5</li>
  <li data-content="" class="$$step $$step-neutral">Step 6</li>
  <li data-content="●" class="$$step $$step-neutral">Step 7</li>
</ul>`),u(s,(r,o)=>m(r,o),()=>({to:c()})),t(e,s)}}});var S=a(a(g,!0));d(S,{title:"Custom colors",children:(e,p)=>{var s=J();t(e,s)},$$slots:{default:!0,html:(e,p)=>{var s=K(),i=n(s);i.nodeValue=$(`<ul class="$$steps">
  <li class="$$step $$step-info">Fly to moon</li>
  <li class="$$step $$step-info">Shrink the moon</li>
  <li class="$$step $$step-info">Grab the moon</li>
  <li class="$$step $$step-error" data-content="?">Sit on toilet</li>
</ul>`),u(s,(r,o)=>m(r,o),()=>({to:c()})),t(e,s)}}});var z=a(a(S,!0));d(z,{title:"With scrollable wrapper",children:(e,p)=>{var s=N();t(e,s)},$$slots:{default:!0,html:(e,p)=>{var s=O(),i=n(s);i.nodeValue=$(`<div class="overflow-x-auto">
  <ul class="$$steps">
    <li class="$$step">start</li>
    <li class="$$step $$step-secondary">2</li>
    <li class="$$step $$step-secondary">3</li>
    <li class="$$step $$step-secondary">4</li>
    <li class="$$step">5</li>
    <li class="$$step $$step-accent">6</li>
    <li class="$$step $$step-accent">7</li>
    <li class="$$step">8</li>
    <li class="$$step $$step-error">9</li>
    <li class="$$step $$step-error">10</li>
    <li class="$$step">11</li>
    <li class="$$step">12</li>
    <li class="$$step $$step-warning">13</li>
    <li class="$$step $$step-warning">14</li>
    <li class="$$step">15</li>
    <li class="$$step $$step-neutral">16</li>
    <li class="$$step $$step-neutral">17</li>
    <li class="$$step $$step-neutral">18</li>
    <li class="$$step $$step-neutral">19</li>
    <li class="$$step $$step-neutral">20</li>
    <li class="$$step $$step-neutral">21</li>
    <li class="$$step $$step-neutral">22</li>
    <li class="$$step $$step-neutral">23</li>
    <li class="$$step $$step-neutral">end</li>
  </ul>
</div>`),u(s,(r,o)=>m(r,o),()=>({to:c()})),t(e,s)}}}),t(V,h)},$$slots:{default:!0}})),t(R,_)}export{rs as component};
