import{e as V,a as n,f as C,i as p,t as i,b as e,c as $}from"../chunks/disclose-version.ctAPnXXB.js";import{a as c}from"../chunks/actions.D_WyPHWg.js";import{l as J,s as E}from"../chunks/props.BH0qENYe.js";import{u as D,s as A}from"../chunks/store.DhJ2LkXK.js";import{M as F}from"../chunks/mdsvex-components._lUcLF4M.js";import{C as M,a as u,r as m,p as L}from"../chunks/ClassTable.D_femxPu.js";import"../chunks/entry.x4RCuSaZ.js";var T=i('<div class="join"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),G=i('<pre slot="html"> </pre>'),I=i('<div class="join join-vertical"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),U=i('<pre slot="html"> </pre>'),W=i('<div class="join join-vertical lg:join-horizontal"><button class="btn join-item">Button</button> <button class="btn join-item">Button</button> <button class="btn join-item">Button</button></div>'),X=i('<pre slot="html"> </pre>'),k=i('<div class="join"><div><div><input class="input input-bordered join-item w-[5.3rem] md:w-52" placeholder="Search"></div></div> <select class="select select-bordered join-item w-[5.8rem] md:w-auto"><option disabled selected>Filter</option><option>Sci-fi</option><option>Drama</option><option>Action</option></select> <div class="indicator"><span class="indicator-item badge badge-secondary">new</span> <button class="btn join-item">Search</button></div></div>'),q=i('<pre slot="html"> </pre>'),H=i('<div class="join"><input class="input input-bordered join-item w-36 lg:w-52" placeholder="Email"> <button class="btn join-item rounded-r-full">Subscribe</button></div>'),K=i('<pre slot="html"> </pre>'),N=i('<div class="join"><input class="join-item btn" type="radio" name="options" aria-label="Radio 1"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 2"> <input class="join-item btn" type="radio" name="options" aria-label="Radio 3"></div>'),O=i('<pre slot="html"> </pre>'),Q=i("<!> <!> <!> <!> <!> <!> <!>",1);const Y={title:"Join",desc:"Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.",published:!0,layout:"components"};function lt(P,x){const w=J(x,["children","$$slots","$$events"]),b={};D(b);const d=()=>A(L,"$prefix",b);var v=V(),S=C(v);F(S,E(()=>w,Y,{children:(z,Z)=>{var _=Q(),j=C(_);M(j,{data:[{type:"component",class:"join",desc:"Container for grouping multiple items"},{type:"component",class:"join-item",desc:"Item inside join. Can be a button, input, etc."},{type:"responsive",class:"join-vertical",desc:"Show items vertically"},{type:"responsive",class:"join-horizontal",desc:"Show items horizontally"}]});var h=e(e(j,!0));u(h,{title:"Join",children:(o,s)=>{var t=T();n(o,t)},$$slots:{html:(o,s)=>{var t=G(),a=$(t);a.nodeValue=p(`<div class="$$join">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`),c(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var f=e(e(h,!0));u(f,{title:"Group items vertically",children:(o,s)=>{var t=I();n(o,t)},$$slots:{html:(o,s)=>{var t=U(),a=$(t);a.nodeValue=p(`<div class="$$join $$join-vertical">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`),c(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var g=e(e(f,!0));u(g,{title:"Responsive: it's vertical on small screen and horizontal on large screen",children:(o,s)=>{var t=W();n(o,t)},$$slots:{html:(o,s)=>{var t=X(),a=$(t);a.nodeValue=p(`<div class="$$join $$join-vertical lg:$$join-horizontal">
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
  <button class="$$btn $$join-item">Button</button>
</div>`),c(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var y=e(e(g,!0));u(y,{title:"With extra elements in the group",desc:"Even if join-item is not a direct child of the group, it still gets the style",children:(o,s)=>{var t=k();n(o,t)},$$slots:{html:(o,s)=>{var t=q(),a=$(t);a.nodeValue=p(`<div class="$$join">
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
</div>`),c(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var B=e(e(y,!0));u(B,{title:"Custom border radius",children:(o,s)=>{var t=H();n(o,t)},$$slots:{html:(o,s)=>{var t=K(),a=$(t);a.nodeValue=p(`<div class="$$join">
  <input class="$$input $$input-bordered $$join-item" placeholder="Email"/>
  <button class="$$btn $$join-item rounded-r-full">Subscribe</button>
</div>`),c(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}});var R=e(e(B,!0));u(R,{title:"Join radio inputs with btn style",children:(o,s)=>{var t=N();n(o,t)},$$slots:{html:(o,s)=>{var t=O(),a=$(t);a.nodeValue=p(`<div class="$$join">
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="$$join-item $$btn" type="radio" name="options" aria-label="Radio 3" />
</div>`),c(t,(l,r)=>m(l,r),()=>({to:d()})),n(o,t)}}}),n(z,_)}})),n(P,v)}export{lt as component};
