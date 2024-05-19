import{e as V,a as n,f as C,i as $,t as e,b as i,c as p}from"../chunks/disclose-version.CwIan75F.js";import{a as u}from"../chunks/actions.31B-wlSq.js";import{l as J,s as E}from"../chunks/props.BlHtXCBj.js";import{u as D,s as A}from"../chunks/store.DaFOg5Tg.js";import{M as F}from"../chunks/mdsvex-components.Bcvyp1Dy.js";import{C as M,a as c,r as m,p as L}from"../chunks/ClassTable.BD66Esne.js";import"../chunks/entry.CgweNErY.js";var T=e('<div class="join"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),G=e('<pre slot="html"> </pre>'),I=e('<div class="join join-vertical"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),U=e('<pre slot="html"> </pre>'),W=e('<div class="join join-vertical lg:join-horizontal"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),X=e('<pre slot="html"> </pre>'),k=e('<div class="join"><div><div><input class="input input-bordered join-item w-[5.3rem] md:w-52" placeholder="Search"></div></div> <select class="select select-bordered join-item w-[5.8rem] md:w-auto"><option disabled selected>Filter</option><option>Sci-fi</option><option>Drama</option><option>Action</option></select> <div class="indicator"><span class="indicator-item badge badge-secondary">new</span> <button class="btn join-item">Search</button></div></div>'),q=e('<pre slot="html"> </pre>'),H=e('<div class="join"><input class="input input-bordered join-item w-36 lg:w-52" placeholder="Email"> <button class="btn join-item rounded-r-full">Subscribe</button></div>'),K=e('<pre slot="html"> </pre>'),N=e('<div class="join"><input class="join-item btn" type="radio" name="options" aria-label="Radio 1"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 2"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 3"></div>'),O=e('<pre slot="html"> </pre>'),Q=e("<!> <!> <!> <!> <!> <!> <!>",1);const Y={title:"Join",desc:"Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.",published:!0,layout:"components"};function lt(P,x){const w=J(x,["children","$$slots","$$events"]),b={};D(b);const d=()=>A(L,"$prefix",b);var v=V(),S=C(v);F(S,E(()=>w,Y,{children:(z,Z)=>{var _=Q(),j=C(_);M(j,{data:[{type:"component",class:"join",desc:"Container for grouping multiple items"},{type:"component",class:"join-item",desc:"Item inside join. Can be a button, input, etc."},{type:"responsive",class:"join-vertical",desc:"Show items vertically"},{type:"responsive",class:"join-horizontal",desc:"Show items horizontally"}]});var h=i(i(j,!0));c(h,{title:"Join",children:(o,s)=>{var t=T();n(o,t)},$$slots:{default:!0,html:(o,s)=>{var t=G(),a=p(t);a.nodeValue=$(`<div class="$$join">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`),u(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var f=i(i(h,!0));c(f,{title:"Group items vertically",children:(o,s)=>{var t=I();n(o,t)},$$slots:{default:!0,html:(o,s)=>{var t=U(),a=p(t);a.nodeValue=$(`<div class="$$join $$join-vertical">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`),u(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var g=i(i(f,!0));c(g,{title:"Responsive: it's vertical on small screen and horizontal on large screen",children:(o,s)=>{var t=W();n(o,t)},$$slots:{default:!0,html:(o,s)=>{var t=X(),a=p(t);a.nodeValue=$(`<div class="$$join $$join-vertical lg:$$join-horizontal">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`),u(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var y=i(i(g,!0));c(y,{title:"With extra elements in the group",desc:"Even if join-item is not a direct child of the group, it still gets the style",children:(o,s)=>{var t=k();n(o,t)},$$slots:{default:!0,html:(o,s)=>{var t=q(),a=p(t);a.nodeValue=$(`<div class="$$join">
  <div>
    <div>
      <input class="$$input $$input-bordered $$join-item" placeholder="Search"/>
    </div>
  </div>
  <select class="$$select $$select-bordered $$join-item">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="$$indicator">
    <span class="$$indicator-item $$badge $$badge-secondary">new</span> 
    <button class="$$btn $$join-item">Search</button>
  </div>
</div>`),u(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var B=i(i(y,!0));c(B,{title:"Custom border radius",children:(o,s)=>{var t=H();n(o,t)},$$slots:{default:!0,html:(o,s)=>{var t=K(),a=p(t);a.nodeValue=$(`<div class="$$join">
  <input class="$$input $$input-bordered $$join-item" placeholder="Email"/>
  <button class="$$btn $$join-item rounded-r-full">Subscribe</button>
</div>`),u(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var R=i(i(B,!0));c(R,{title:"Join radio inputs with btn style",children:(o,s)=>{var t=N();n(o,t)},$$slots:{default:!0,html:(o,s)=>{var t=O(),a=p(t);a.nodeValue=$(`<div class="$$join">
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 3" />
</div>`),u(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}}),n(z,_)},$$slots:{default:!0}})),n(P,v)}export{lt as component};
