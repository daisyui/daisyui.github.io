import{t as I,a as T}from"../chunks/LFhyL0Oe.js";import"../chunks/gclTb0SW.js";import{f as N,s as a,c as s,r as t}from"../chunks/C4PvZKYF.js";import{h as o}from"../chunks/wz55X6qA.js";import{l as j,s as U}from"../chunks/D6tDoBIA.js";import{L as Z}from"../chunks/CMB0Avay.js";import{T as n}from"../chunks/BMNrV7vn.js";const k={title:"Install daisyUI for Nuxt",desc:"How to install Tailwind CSS and daisyUI in a Nuxt project"},{title:O,desc:Q}=k;var z=I('<h3 id="1-create-a-new-nuxt-project"><a href="#1-create-a-new-nuxt-project" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="1. Create a new Nuxt project"><!></span></h3> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <h3 id="2-install-tailwind-css-and-daisyui"><a href="#2-install-tailwind-css-and-daisyui" class="no-underline"><span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group"><svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg></span></a><span data-heading-text="2. Install Tailwind CSS and daisyUI"><!></span></h3> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">Terminal</div><!></div> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">nuxt.config.ts</div><!></div> <p><!></p> <div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]"><div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">assets/app.css</div><!></div> <p><!></p>',1);function R(b,x){const w=j(x,["children","$$slots","$$events","$$legacy"]);Z(b,U(()=>w,k,{children:(f,L)=>{var u=z(),e=N(u),y=a(s(e)),_=s(y);n(_,{text:"1. Create a new Nuxt project"}),t(y),t(e);var i=a(e,2),F=s(i);n(F,{text:"Create a new Nuxt project in the current directory"}),t(i);var r=a(i,2),C=a(s(r));o(C,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npx</span><span style="color:var(--shiki-attr-value)"> nuxi@latest</span><span style="color:var(--shiki-attr-value)"> init</span></span></code></pre>'),t(r);var l=a(r,2),m=a(s(l)),A=s(m);n(A,{text:"2. Install Tailwind CSS and daisyUI"}),t(m),t(l);var p=a(l,2),D=a(s(p));o(D,()=>'<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#C0CAF5">npm</span><span style="color:var(--shiki-attr-value)"> install</span><span style="color:var(--shiki-attr-value)"> tailwindcss@latest</span><span style="color:var(--shiki-attr-value)"> @tailwindcss/vite@latest</span><span style="color:var(--shiki-attr-value)"> daisyui@latest</span></span></code></pre>'),t(p);var c=a(p,2),V=s(c);n(V,{text:"Add Tailwind CSS to Vite config"}),t(c);var d=a(c,2),H=a(s(d));o(H,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:#7DCFFF">import</span><span style="color:#0DB9D7"> tailwindcss</span><span style="color:#7DCFFF"> from</span><span style="color:var(--shiki-punctuation)"> "</span><span style="color:var(--shiki-attr-value)">@tailwindcss/vite</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:#7DCFFF">export</span><span style="color:#7DCFFF"> default</span><span style="color:#7AA2F7"> defineNuxtConfig</span><span style="color:#9ABDF5">(&#123;</span></span>
<span class="line"><span style="color:#73DACA">  vite</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">&#123;</span></span>
<span class="line"><span style="color:#73DACA">    plugins</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">[</span><span style="color:#7AA2F7">tailwindcss</span><span style="color:#9ABDF5">()]</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">  &#125;</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#73DACA">  css</span><span style="color:var(--shiki-punctuation)">: </span><span style="color:#9ABDF5">[</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">~/assets/app.css</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:#9ABDF5">]</span><span style="color:var(--shiki-punctuation)">,</span></span>
<span class="line"><span style="color:#9ABDF5">&#125;)</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(d);var v=a(d,2),S=s(v);n(S,{text:"Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)"}),t(v);var h=a(v,2),$=a(s(h));o($,()=>`<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-attr-name)">@import </span><span style="color:var(--shiki-attr-value)">"tailwindcss"</span><span style="color:var(--shiki-punctuation)">;</span></span>
<span class="line"><span style="color:var(--shiki-attr-name)">@plugin </span><span style="color:var(--shiki-attr-value)">"daisyui"</span><span style="color:var(--shiki-punctuation)">;</span></span></code></pre>`),t(h);var g=a(h,2),B=s(g);n(B,{text:"Now you can use daisyUI class names!"}),t(g),T(f,u)},$$slots:{default:!0}}))}export{R as component};
