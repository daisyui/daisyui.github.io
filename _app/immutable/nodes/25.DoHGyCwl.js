import{c as nt,a as w,t as j,n as Jt,d as Xt}from"../chunks/DCK6Bke5.js";import{L as Ft,N as te,aO as ee,aP as ae,e as re,S as se,aQ as ne,a9 as oe,T as ie,a as Q,ay as It,ax as Dt,aL as de,p as Ot,l as U,a7 as ce,f as tt,g as o,b as Tt,i as ft,j as le,ag as ve,u as Lt,s as g,c as v,t as H,r as c,n as J}from"../chunks/d8H3Uvz2.js";import{a as ue,s as X}from"../chunks/y_F8ntjV.js";import{P as Pt,a as fe}from"../chunks/DiQY_aZr.js";import{i as T}from"../chunks/DKkulU6_.js";import{e as pt,i as mt}from"../chunks/63GWOsR9.js";import{s as bt,a as at}from"../chunks/DUHXq39O.js";import{s as jt}from"../chunks/DVYxOimY.js";import{w as pe,d as me}from"../chunks/R-qbc8OJ.js";import{o as Ut}from"../chunks/DTQXBa4c.js";import{S as be}from"../chunks/Cx5Y0oJ0.js";import{S as _e}from"../chunks/0XOd-iqD.js";import"../chunks/DtHB-fH7.js";import{d as L,a as xe,u as he,t as ge,c as we,s as ye}from"../chunks/YthEDZT5.js";import{i as ke}from"../chunks/BvgLVSem.js";import{p as _t}from"../chunks/CkAaGQqU.js";const Se=()=>performance.now(),P={tick:a=>requestAnimationFrame(a),now:()=>Se(),tasks:new Set};function zt(){const a=P.now();P.tasks.forEach(t=>{t.c(a)||(P.tasks.delete(t),t.f())}),P.tasks.size!==0&&P.tick(zt)}function Ce(a){let t;return P.tasks.size===0&&P.tick(zt),{promise:new Promise(s=>{P.tasks.add(t={c:a,f:s})}),abort(){P.tasks.delete(t)}}}function rt(a,t){pe(()=>{a.dispatchEvent(new CustomEvent(t))})}function Fe(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function Mt(a){const t={},s=a.split(";");for(const i of s){const[m,l]=i.split(":");if(!m||l===void 0)break;const f=Fe(m.trim());t[f]=l.trim()}return t}const Ie=a=>a;function st(a,t,s,i){var m=(a&ne)!==0,l="both",f,p=t.inert,C=t.style.overflow,r,d;function F(){var x=de,b=Ft;It(null),Dt(null);try{return f??(f=s()(t,(i==null?void 0:i())??{},{direction:l}))}finally{It(x),Dt(b)}}var I={is_global:m,in(){t.inert=p,rt(t,"introstart"),r=xt(t,F(),d,1,()=>{rt(t,"introend"),r==null||r.abort(),r=f=void 0,t.style.overflow=C})},out(x){t.inert=!0,rt(t,"outrostart"),d=xt(t,F(),r,0,()=>{rt(t,"outroend"),x==null||x()})},stop:()=>{r==null||r.abort(),d==null||d.abort()}},y=Ft;if((y.transitions??(y.transitions=[])).push(I),ue){var S=m;if(!S){for(var u=y.parent;u&&(u.f&te)!==0;)for(;(u=u.parent)&&(u.f&ee)===0;);S=!u||(u.f&ae)!==0}S&&re(()=>{se(()=>I.in())})}}function xt(a,t,s,i,m){var l=i===1;if(oe(t)){var f,p=!1;return ie(()=>{if(!p){var x=t({direction:l?"in":"out"});f=xt(a,x,s,i,m)}}),{abort:()=>{p=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(s==null||s.deactivate(),!(t!=null&&t.duration))return m(),{abort:Q,deactivate:Q,reset:Q,t:()=>i};const{delay:C=0,css:r,tick:d,easing:F=Ie}=t;var I=[];if(l&&s===void 0&&(d&&d(0,1),r)){var y=Mt(r(0,1));I.push(y,y)}var S=()=>1-i,u=a.animate(I,{duration:C});return u.onfinish=()=>{var x=(s==null?void 0:s.t())??1-i;s==null||s.abort();var b=i-x,A=t.duration*Math.abs(b),V=[];if(A>0){var z=!1;if(r)for(var G=Math.ceil(A/16.666666666666668),n=0;n<=G;n+=1){var e=x+b*F(n/G),_=Mt(r(e,1-e));V.push(_),z||(z=_.overflow==="hidden")}z&&(a.style.overflow="hidden"),S=()=>{var h=u.currentTime;return x+b*F(h/A)},d&&Ce(()=>{if(u.playState!=="running")return!1;var h=S();return d(h,1-h),!0})}u=a.animate(V,{duration:A,fill:"forwards"}),u.onfinish=()=>{S=()=>i,d==null||d(i,1-i),m()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=Q)},deactivate:()=>{m=Q},reset:()=>{i===0&&(d==null||d(1,0))},t:()=>S()}}function De(a,t){Ot(t,!1),L.extend(xe),L.extend(he),L.extend(ge),L.extend(we);let s=_t(t,"from",8),i=_t(t,"dateFormat",12),m=_t(t,"zone",8),l=ce({years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,done:!0}),f=0,p,C,r,d;Ut(()=>{i()||i("YYYY-MM-DD H:m:s");try{C=m()?L(s(),i(),m()):L(s(),i())}catch(y){y.message.indexOf("Invalid time zone")>-1?(C=L(s(),i()),console.warn("[svelte-countdown] Countdown might not be precice as a proper timezone was not defined.")):console.warn('[svelte-countdown] Could not calculate date, make sure your "from" and "dateFormat" inputs are correct.')}L.isDayjs(C)&&(r=L(),f=C.valueOf()-r.valueOf()),d=setInterval(function(){f>0?(p=L.duration(f),U(l,{years:p.years(),months:p.months(),weeks:p.weeks(),days:p.days(),hours:p.hours(),minutes:p.minutes(),seconds:p.seconds(),done:!1}),f-=1e3):(U(l,{years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,done:!0}),clearInterval(d))},1e3)}),ke();var F=nt(),I=tt(F);ye(I,t,"default",{get remaining(){return o(l)}},null),w(a,F),Tt()}const Le=a=>a;function Pe(a){const t=a-1;return t*t*t+1}function At(a,{delay:t=0,duration:s=400,easing:i=Le}={}){const m=+getComputedStyle(a).opacity;return{delay:t,duration:s,easing:i,css:l=>`opacity: ${l*m}`}}function Et(a,{delay:t=0,duration:s=400,easing:i=Pe,axis:m="y"}={}){const l=getComputedStyle(a),f=+l.opacity,p=m==="y"?"height":"width",C=parseFloat(l[p]),r=m==="y"?["top","bottom"]:["left","right"],d=r.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),F=parseFloat(l[`padding${d[0]}`]),I=parseFloat(l[`padding${d[1]}`]),y=parseFloat(l[`margin${d[0]}`]),S=parseFloat(l[`margin${d[1]}`]),u=parseFloat(l[`border${d[0]}Width`]),x=parseFloat(l[`border${d[1]}Width`]);return{delay:t,duration:s,easing:i,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*f};${p}: ${b*C}px;padding-${r[0]}: ${b*F}px;padding-${r[1]}: ${b*I}px;margin-${r[0]}: ${b*y}px;margin-${r[1]}: ${b*S}px;border-${r[0]}-width: ${b*u}px;border-${r[1]}-width: ${b*x}px;min-${p}: 0`}}var je=(a,t,s)=>t(o(s)),Me=Jt('<svg aria-label="Clear filters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>'),Ae=j("<button><!></button>"),Ee=(a,t,s)=>t(o(s).data.attributes.code),Oe=j('<div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">day</span></div>'),Te=j('<div class="tooltip shrink-0 after:hidden" data-tip="Remaining time"><date><!> <div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">hour</span></div> <div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">min</span></div> <div class="border-neutral-content/40 rounded-field border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">sec</span></div></date></div>'),Ue=j('<div class="text-neutral-content/20 rounded-field shrink-0 border border-dashed p-2">Ended</div>'),ze=j('<div class="mb-12"><div class="alert bg-neutral text-neutral-content min-h-24 border-transparent"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-4 size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg> <div class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row"><div class="flex flex-col gap-1"><h2 class="text-lg font-bold"> </h2> <div class="text-neutral-content/70 text-sm [text-wrap:balance]">Use <span class="tooltip tooltip-info"><button class="badge badge-info cursor-copy px-2 font-mono tracking-wide"> </button></span> </div></div> <!></div></div></div>'),Re=j('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20 py-32">Coming soon…</div>'),Ye=j('<div class="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]"><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="40" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path></svg> <div> </div></div>'),Be=j('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">Coming soon…</div>'),Ne=j(`<!> <div class="mx-4 flex flex-col justify-between gap-6 lg:flex-row"><div class="flex flex-col gap-2"><h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">daisyUI store</h1> <p class="text-base-content/60 text-sm">Official templates made by daisyUI</p></div> <div class="flex flex-col gap-3"><div class="text-base-content/50 text-end text-xs">Filter by</div> <div class="flex items-center gap-2"></div></div></div> <hr class="border-base-content/10 mx-4 mt-10 mb-16"> <div><!> <div class="*:border-base-content/10 mx-auto grid *:border-t *:border-dashed *:px-4 *:py-16 *:nth-[1]:border-t-0 md:*:px-16 lg:grid-cols-2 lg:px-4 lg:*:border-e lg:*:even:border-e-0 lg:*:nth-[2]:border-t-0"></div> <div class="divider text-base-content/30 my-20">In development</div> <div class="grid gap-12 lg:grid-cols-3"></div> <div class="divider text-base-content/30 my-20"></div> <div id="mc_embed_shell" class="card bg-base-200 mt-10"><div class="card-body flex flex-col gap-4"><h2 class="text-xl font-black lg:text-4xl">Get notified about upcoming products and discounts!</h2> <div><p class="font-bold">Subscribe to daisyUI store newsletter to get updates about new products and discounts
          codes.</p> <p class="text-base-content/60 text-xs">You will only receive a single email when a new product is added or when a new discount
          code is available. No spam. No ads.</p></div> <div id="mc_embed_signup"><form action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate=""><input type="checkbox" name="group[347002][8]" value="1" class="hidden" checked="checked"> <input type="checkbox" name="group[347002][1]" value="1" class="hidden" checked="checked"> <div class="flex w-full max-w-sm flex-col gap-2"><label for="mce-EMAIL">Email Address</label> <div class="join"><input type="email" name="EMAIL" class="join-item input input-bordered w-full max-w-sm" id="mce-EMAIL" placeholder="mail@site.com" required> <button name="subscribe" class="join-item btn btn-success">Subscribe</button></div></div> <div aria-hidden="true" class="hidden"><input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value=""></div></form></div></div></div></div>`,1);function oa(a,t){Ot(t,!0);let s=ft(le(new Date().toISOString()));ve(()=>{const n=setInterval(()=>{U(s,new Date().toISOString(),!0)},1e3);return()=>clearInterval(n)});const i=n=>{var e;if((e=n.data)!=null&&e.attributes.expires_at){const _=new Date(n.data.attributes.expires_at).toISOString(),h=new Date().toISOString();return _>h}return!1},m=(async()=>{const[n,e]=await Promise.all([fetch(`${Pt}/api/discount_shorttime.json`),fetch(`${Pt}/api/discount_special.json`)]),_=await n.json(),h=await e.json();return i(h)?h:i(_)?_:null})();function l(n){const e=(n/100).toFixed(2);return`$${e.endsWith(".00")?e.slice(0,-3):e}`}const f={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};let p=ft(!1);const C=n=>{navigator.clipboard.writeText(n),U(p,!0),setTimeout(()=>{U(p,!1)},2e3)};let r=ft("");Ut(()=>{const e=new URLSearchParams(window.location.search).get("filter")||"";U(r,e,!0)});function d(n,e){const _=new URL(window.location);_.searchParams.set(n,e),window.history.pushState({},"",_)}function F(n){U(r,n==="all"?"":n,!0),d("filter",o(r))}let I=Lt(()=>t.data.products.filter(n=>{var e;return o(r)===""||((e=n.tech)==null?void 0:e.includes(o(r)))}).sort((n,e)=>0));var y=Ne(),S=tt(y);be(S,{title:"Official daisyUI Store",desc:"daisyUI Store - Professional templates made by daisyUI"});var u=g(S,2),x=g(v(u),2),b=g(v(x),2);pt(b,21,()=>t.data.techFilters,mt,(n,e)=>{var _=nt(),h=tt(_);{var W=E=>{var k=Ae();k.__click=[je,F,e];var M=v(k);{var q=D=>{var R=Me();w(D,R)},Z=D=>{var R=Xt();H(()=>X(R,t.data.tech[o(e)])),w(D,R)};T(M,D=>{o(e)==="all"?D(q):D(Z,!1)})}c(k),H(()=>{jt(k,1,`btn btn-sm rounded-full ${o(e)==="all"?"btn-circle":""} ${o(r)===o(e)?"btn-neutral":""}`),bt(k,"aria-label",o(e)==="all"?"×":t.data.tech[o(e)])}),st(3,k,()=>Et,()=>({duration:50,axis:"x"})),w(E,k)};T(h,E=>{(o(r)===""&&o(e)!=="all"||o(r)==="all"||o(r)!==""&&(o(e)===o(r)||o(e)==="all"))&&E(W)})}w(n,_)}),c(b),c(x),c(u);var A=g(u,4),V=v(A);fe(V,()=>m,null,(n,e)=>{var _=nt(),h=tt(_);{var W=E=>{var k=ze(),M=v(k),q=g(v(M),2),Z=v(q),D=v(Z),R=v(D,!0);c(D);var ht=g(D,2),et=g(v(ht)),ot=v(et);ot.__click=[Ee,C,e];var Rt=v(ot,!0);c(ot),c(et);var Yt=g(et);c(ht),c(Z);var Bt=g(Z,2);{var Nt=it=>{const $t=Lt(()=>new Date(o(e).data.attributes.expires_at).toLocaleString("en-GB",f));De(it,{get from(){return o($t)},dateFormat:"DD/MM/YYYY, HH:mm:ss",children:(Ht,dt)=>{let O=()=>dt==null?void 0:dt().remaining;var gt=nt(),Vt=tt(gt);{var Gt=Y=>{var B=Te(),N=v(B),$=v(N);{var ct=K=>{var ut=Oe(),Ct=v(ut),Qt=v(Ct);c(Ct),J(2),c(ut),H(()=>at(Qt,`--value:${O().days};`)),w(K,ut)};T($,K=>{O().days>0&&K(ct)})}var lt=g($,2),wt=v(lt),qt=v(wt);c(wt),J(2),c(lt);var vt=g(lt,2),yt=v(vt),Zt=v(yt);c(yt),J(2),c(vt);var kt=g(vt,2),St=v(kt),Kt=v(St);c(St),J(2),c(kt),c(N),c(B),H(K=>{bt(N,"datetime",K),jt(N,1,`grid ${O().days>0?"grid-cols-4":"grid-cols-3"} gap-2 text-center font-mono text-xs`),at(qt,`--value:${O().hours};`),at(Zt,`--value:${O().minutes};`),at(Kt,`--value:${O().seconds};`)},[()=>new Date(o(e).data.attributes.expires_at).toLocaleString("en-GB",f)]),st(3,B,()=>At,()=>({duration:400})),w(Y,B)},Wt=(Y,B)=>{{var N=$=>{var ct=Ue();w($,ct)};T(Y,$=>{t.data||$(N)},B)}};T(Vt,Y=>{O().done===!1?Y(Gt):Y(Wt,!1)})}w(Ht,gt)},$$slots:{default:!0}})};T(Bt,it=>{o(e).data.attributes.expires_at&&it(Nt)})}c(q),c(M),c(k),H(()=>{X(R,o(e).data.attributes.name),bt(et,"data-tip",o(p)?"copied":"copy"),X(Rt,o(e).data.attributes.code),X(Yt,` code at checkout to get ${o(e).data.attributes.amount??""}% discount on all products.`)}),st(3,q,()=>At,()=>({duration:400})),st(3,M,()=>Et,()=>({duration:400})),w(E,k)};T(h,E=>{var k,M;(k=o(e))!=null&&k.data.attributes.expires_at&&new Date((M=o(e))==null?void 0:M.data.attributes.expires_at).toISOString()>o(s)&&E(W)})}w(n,_)});var z=g(V,2);pt(z,21,()=>o(I),mt,(n,e)=>{_e(n,{get product(){return o(e)},convertCurrency:l})},n=>{var e=Re();w(n,e)}),c(z);var G=g(z,4);pt(G,21,()=>t.data.futureProducts,mt,(n,e)=>{var _=Ye(),h=g(v(_),2),W=v(h,!0);c(h),c(_),H(()=>X(W,o(e))),w(n,_)},n=>{var e=Be();w(n,e)}),c(G),J(4),c(A),w(a,y),Tt()}me(["click"]);export{oa as component};
