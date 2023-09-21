import{k as c,s as M,h as r,u as T,g as j,X as ae,Y as qe,r as q,i as Ie,x as he,Z as Te,b as ie,t as fe,$ as Be,w as W,a0 as Pe,a1 as Le,a2 as se,a3 as Fe,_ as oe,M as re,N as I,O as H,R as x,U as m,Q as P,S as v,a4 as ne,a5 as z,V as ve,W as pe,a6 as Ye,a7 as N,a8 as ge,a9 as Ae}from"./index.2f3d6ffe.js";import{u as De,a as ze,b as je}from"./use-model-toggle.d5344502.js";import{Q as Ue}from"./QToolbar.2f7f988e.js";const U={dark:{type:Boolean,default:null}};function O(e,n){return c(()=>e.dark===null?n.dark.isActive:e.dark)}var Oe=M({name:"QBanner",props:{...U,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=j(),i=O(e,a),u=c(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),t=c(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const o=[r("div",{class:"q-banner__avatar col-auto row items-center self-start"},T(n.avatar)),r("div",{class:"q-banner__content col text-body2"},T(n.default))],d=T(n.action);return d!==void 0&&o.push(r("div",{class:t.value},d)),r("div",{class:u.value+(e.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},o)}}}),be=M({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const a=c(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:a.value},T(n.default))}}),ye=M({name:"QCard",props:{...U,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=j(),i=O(e,a),u=c(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:u.value},T(n.default))}}),Re=M({name:"QItem",props:{...U,...ae,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=j(),u=O(e,i),{hasLink:t,linkAttrs:o,linkClass:d,linkTag:h,navigateOnClick:w}=qe(),g=q(null),b=q(null),_=c(()=>e.clickable===!0||t.value===!0||e.tag==="label"),k=c(()=>e.disable!==!0&&_.value===!0),L=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(t.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(k.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),s=c(()=>{if(e.insetLevel===void 0)return null;const p=i.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function y(p){k.value===!0&&(b.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===g.value?b.value.focus():document.activeElement===b.value&&g.value.focus()),w(p))}function S(p){if(k.value===!0&&Ie(p,13)===!0){he(p),p.qKeyEvent=!0;const Y=new MouseEvent("click",p);Y.qKeyEvent=!0,g.value.dispatchEvent(Y)}a("keyup",p)}function E(){const p=Te(n.default,[]);return k.value===!0&&p.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:b})),p}return()=>{const p={ref:g,class:L.value,style:s.value,role:"listitem",onClick:y,onKeyup:S};return k.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,o.value)):_.value===!0&&(p["aria-disabled"]="true"),r(h.value,p,E())}}}),X=M({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:a.value},T(n.default))}}),ce=M({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=c(()=>parseInt(e.lines,10)),i=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),u=c(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>r("div",{style:u.value,class:i.value},T(n.default))}}),$e=M({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:a}){let i=!1,u,t,o=null,d=null,h,w;function g(){u&&u(),u=null,i=!1,o!==null&&(clearTimeout(o),o=null),d!==null&&(clearTimeout(d),d=null),t!==void 0&&t.removeEventListener("transitionend",h),h=null}function b(s,y,S){s.style.overflowY="hidden",y!==void 0&&(s.style.height=`${y}px`),s.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,u=S}function _(s,y){s.style.overflowY=null,s.style.height=null,s.style.transition=null,g(),y!==w&&a(y)}function k(s,y){let S=0;t=s,i===!0?(g(),S=s.offsetHeight===s.scrollHeight?0:void 0):w="hide",b(s,S,y),o=setTimeout(()=>{o=null,s.style.height=`${s.scrollHeight}px`,h=E=>{d=null,(Object(E)!==E||E.target===s)&&_(s,"show")},s.addEventListener("transitionend",h),d=setTimeout(h,e.duration*1.1)},100)}function L(s,y){let S;t=s,i===!0?g():(w="show",S=s.scrollHeight),b(s,S,y),o=setTimeout(()=>{o=null,s.style.height=0,h=E=>{d=null,(Object(E)!==E||E.target===s)&&_(s,"hide")},s.addEventListener("transitionend",h),d=setTimeout(h,e.duration*1.1)},100)}return ie(()=>{i===!0&&g()}),()=>r(fe,{css:!1,appear:e.appear,onEnter:k,onLeave:L},n.default)}});const Qe={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Z={xs:2,sm:4,md:8,lg:16,xl:24};var ue=M({name:"QSeparator",props:{...U,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=j(),a=O(e,n.proxy.$q),i=c(()=>e.vertical===!0?"vertical":"horizontal"),u=c(()=>` q-separator--${i.value}`),t=c(()=>e.inset!==!1?`${u.value}-${Qe[e.inset]}`:""),o=c(()=>`q-separator${u.value}${t.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),d=c(()=>{const h={};if(e.size!==void 0&&(h[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const w=e.spaced===!0?`${Z.md}px`:e.spaced in Z?`${Z[e.spaced]}px`:e.spaced,g=e.vertical===!0?["Left","Right"]:["Top","Bottom"];h[`margin${g[0]}`]=h[`margin${g[1]}`]=w}return h});return()=>r("hr",{class:o.value,style:d.value,"aria-orientation":i.value})}});let J,V=0;const C=new Array(256);for(let e=0;e<256;e++)C[e]=(e+256).toString(16).substring(1);const Ge=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const a=new Uint8Array(n);return e.getRandomValues(a),a}}return n=>{const a=[];for(let i=n;i>0;i--)a.push(Math.floor(Math.random()*256));return a}})(),de=4096;function me(){(J===void 0||V+16>de)&&(V=0,J=Ge(de));const e=Array.prototype.slice.call(J,V,V+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,C[e[0]]+C[e[1]]+C[e[2]]+C[e[3]]+"-"+C[e[4]]+C[e[5]]+"-"+C[e[6]]+C[e[7]]+"-"+C[e[8]]+C[e[9]]+"-"+C[e[10]]+C[e[11]]+C[e[12]]+C[e[13]]+C[e[14]]+C[e[15]]}const F=Be({}),Ve=Object.keys(ae);var te=M({name:"QExpansionItem",props:{...ae,...De,...U,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ze,"click","afterShow","afterHide"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=j(),u=O(e,i),t=q(e.modelValue!==null?e.modelValue:e.defaultOpened),o=q(null),d=me(),{show:h,hide:w,toggle:g}=je({showing:t});let b,_;const k=c(()=>`q-expansion-item q-item-type q-expansion-item--${t.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),L=c(()=>{if(e.contentInsetLevel===void 0)return null;const l=i.lang.rtl===!0?"Right":"Left";return{["padding"+l]:e.contentInsetLevel*56+"px"}}),s=c(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),y=c(()=>{const l={};return Ve.forEach(B=>{l[B]=e[B]}),l}),S=c(()=>s.value===!0||e.expandIconToggle!==!0),E=c(()=>e.expandedIcon!==void 0&&t.value===!0?e.expandedIcon:e.expandIcon||i.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),p=c(()=>e.disable!==!0&&(s.value===!0||e.expandIconToggle===!0)),Y=c(()=>({expanded:t.value===!0,detailsId:e.targetUid,toggle:g,show:h,hide:w})),$=c(()=>{const l=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:i.lang.label[t.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":t.value===!0?"true":"false","aria-controls":d,"aria-label":l}});W(()=>e.group,l=>{_!==void 0&&_(),l!==void 0&&le()});function Q(l){s.value!==!0&&g(l),a("click",l)}function K(l){l.keyCode===13&&f(l,!0)}function f(l,B){B!==!0&&o.value!==null&&o.value.focus(),g(l),he(l)}function A(){a("afterShow")}function D(){a("afterHide")}function le(){b===void 0&&(b=me()),t.value===!0&&(F[e.group]=b);const l=W(t,G=>{G===!0?F[e.group]=b:F[e.group]===b&&delete F[e.group]}),B=W(()=>F[e.group],(G,ke)=>{ke===b&&G!==void 0&&G!==b&&w()});_=()=>{l(),B(),F[e.group]===b&&delete F[e.group],_=void 0}}function _e(){const l={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},B=[r(se,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&t.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:E.value})];return p.value===!0&&(Object.assign(l,{tabindex:0,...$.value,onClick:f,onKeyup:K}),B.unshift(r("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),r(X,l,()=>B)}function Se(){let l;return n.header!==void 0?l=[].concat(n.header(Y.value)):(l=[r(X,()=>[r(ce,{lines:e.labelLines},()=>e.label||""),e.caption?r(ce,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&l[e.switchToggleSide===!0?"push":"unshift"](r(X,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>r(se,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&l[e.switchToggleSide===!0?"unshift":"push"](_e()),l}function Ee(){const l={ref:"item",style:e.headerStyle,class:e.headerClass,dark:u.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return S.value===!0&&(l.clickable=!0,l.onClick=Q,Object.assign(l,s.value===!0?y.value:$.value)),r(Re,l,Se)}function xe(){return Pe(r("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:L.value,id:d},T(n.default)),[[Le,t.value]])}function Me(){const l=[Ee(),r($e,{duration:e.duration,onShow:A,onHide:D},xe)];return e.expandSeparator===!0&&l.push(r(ue,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:u.value}),r(ue,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:u.value})),l}return e.group!==void 0&&le(),ie(()=>{_!==void 0&&_()}),()=>r("div",{class:k.value},[r("div",{class:"q-expansion-item__container relative-position"},Me())])}});const Ce={ratio:[String,Number]};function we(e,n){return c(()=>{const a=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}var ee=M({name:"QVideo",props:{...Ce,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const n=we(e),a=c(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>r("div",{class:a.value,style:n.value},[r("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});const We={batch12:{title:"Advanced animations 1",price:40,videoPreview:"urlLink",info:`
    ::: info
    All files needed to render the animations are included.
    :::    `,videos:{v76:{name:"Char-Creature",price:20,promotion:20,url:"pcez91ytjF0",renders:"ManimCE",info:`
        - **Mini library**:
        Docs here: [CharCreature](https://zavden.github.io/char-creature-docs/html/index.html)
        `},v77:{name:"Mass-Spring-Damper System",price:15,promotion:15,url:"twpOj1RiZv4",renders:"ManimCE"},v78:{name:"Merge Sort Algorithm",price:15,promotion:15,url:"AMarFYtDymk",renders:"ManimCE"},v79:{name:"lissajous pattern",price:10,promotion:10,url:"eQPWX_LjmQs",renders:"ManimCE"},v80:{name:"Social Networks Scene Version 2",price:5,promotion:5,url:"Z9R8YfWNjcg",renders:"ManimCE"}}},batch01:{title:"Fourier circles",price:40,videoPreview:"urlLink",info:`
    ::: danger
    The code is not the same as 3b1b's, it is an original code that uses FFT, so it is faster than 3b1b's version and cleaner.
    :::
    `,videos:{v1:{name:"Single path Fourier drawing",price:20,promotion:30,renders:"ManimCE",url:"ytsR1TRrLFU",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the color, the style of circles, whether the curve fades or not and the number of vectors.
        `},v2:{name:"Single path with zoom Fourier drawing",price:20,promotion:30,url:"IbTnnRwXUqc",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""},v3:{name:"Multi path Fourier drawing",price:25,promotion:30,url:"Mjxqgki0UwU",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""},v4:{name:"Multi path Fourier drawing with zoom",price:25,promotion:30,url:"PYyrVrHSsqc",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""},v5:{name:"Custom Fourier drawing",price:25,promotion:30,url:"V_9Mw9Ow454",renders:"ManimCE",info:`
        - **Configurable animation**:
        This is a more complex example of how to use the functions provided by the code.
        `,code:""},v6:{name:"Single path Fourier drawing with zoomed camera",price:25,promotion:30,url:"W0MrUZ3DmnU",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""}}},batch15:{title:"Visual proofs 1",price:60,videoPreview:"urlLink",info:`
    :::info
    The animations here were based on **Mates Mike** and **Mathematical Visual Proofs** YouTube channels, but my codes are originals made in **ManimCE**.
    :::
    `,videos:{v7:{name:"Circle Area",price:10,promotion:10,url:"a9H6q-4HhXY",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the amount of radius.
        `},v8:{name:"Sum squares 3D",price:40,promotion:40,url:"mwJDA3fGcxM",renders:"ManimCE",info:`
        Static animation
        `},v9:{name:"Sum odds",price:10,promotion:10,url:"HsLPXrCt58c",renders:"ManimCE",info:`
        Static animation
        `},v10:{name:"Sum halfs",price:10,promotion:10,url:"TW31YZsWaU0",renders:"ManimCE",info:`
        Static animation
        `},v11:{name:"Sum quarters",price:10,promotion:10,url:"8iYv-qYTXwM",renders:"ManimCE",info:`
        Static animation
        `},v12:{name:"Sum power series general case",price:15,promotion:15,url:"4JldZzpQDbY",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the **number** of sides.
        `},v13:{name:"Geometric series r=1",price:15,promotion:15,url:"jI56wLcmDMw",renders:"ManimCE",info:`
        Static animation
        `},v14:{name:"Trapezoid area",price:5,promotion:5,url:"hhWtj1th008",renders:"ManimCE",info:`
        Static animation
        `}}},batch02:{title:"Fractals 1",price:40,videoPreview:"urlLink",videos:{v7:{name:"Apollon fractal",price:13,promotion:20,url:"5elYwjToCi8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the size (radius) of the circles.
        `},v8:{name:"Barnsley fractal",price:13,promotion:20,url:"2DarNKfbXYc",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the amount of stitch and colors.
        `},v9:{name:"Tree fractal",price:13,promotion:20,url:"xOaXMG-tDG4",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and angle of the branches.
        `},v10:{name:"Dragon fractal",price:13,promotion:20,url:"etnXp4qB-P4",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors.
        `},v11:{name:"Hilbert fractal",price:13,promotion:20,url:"AJACyuNhEiM",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors.
        - **Recommended rendering**: OpenGL (ManimCE)
        It is faster to render the video using OpenGL
        `},v12:{name:"Koch fractal",price:13,promotion:20,url:"uavoIqKATqI",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions.
        - **Recommended rendering**: OpenGL (ManimCE)
        It is faster to render the video using OpenGL
        `},v13:{name:"Sierpinski fractal",price:13,promotion:20,url:"-C55KilKE20",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors and colors.
        `},v14:{name:"Pythagoras fractal",price:15,promotion:30,url:"m-muuDoD8DE",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions, the colors and the angle between the squares.
        - **Recommended rendering**: OpenGL (ManimCE)
        It is faster to render the video using OpenGL
        `}}},batch03:{title:"Geometry 1",price:30,videoPreview:"urlLink",info:"\n    All the animations here are static, but this bundle provides a mini-library with the following utilities:\n    - `Ruler`: You can indicate the size, and provide the animations to move it using two points and an angle as a reference.\n    - `Custom arc`: It is an Arc with arrows.\n    ",videos:{v15:{name:"ASA",price:15,promotion:10,url:"PFs9Wesy_j8",renders:"ManimCE"},v16:{name:"SAS",price:15,promotion:10,url:"XWkKiffJXpI",renders:"ManimCE"},v17:{name:"SSS",price:15,promotion:10,url:"D8o-bp0x-gs",renders:"ManimCE"},v18:{name:"Sum of the external angles of a triangle",price:15,promotion:10,url:"CH-4yNBJm8w",renders:"ManimCE"},v19:{name:"Sum of the interior angles of a triangle",price:15,promotion:10,url:"8oo_Hg_BZMU",renders:"ManimCE"}}},batch04:{title:"Geometry 2",price:30,videoPreview:"urlLink",videos:{v20:{name:"Simple polar transform",price:5,promotion:3,url:"cCRyn3Dg_KM",renders:"ManimCE",info:`
        - **Static animation**
        `},v21:{name:"Regular polygon to circle",price:5,promotion:3,url:"8gz9D_ZzrOI",renders:"ManimCE",info:`
        - **Static animation**
        `},v22:{name:"Incenter & circumcenter (static)",price:10,promotion:8,url:"aCjVeL6W_B4",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the positions of the vertices.
        ::: danger
        This animation is also available as an interactive animation.
        `},v23:{name:"Touching circles",price:15,promotion:10,url:"e0SAWhwOYIg",renders:"ManimCE",info:`
        - **Static animation**
        `},v24:{name:"Viviani theorem (proof)",price:15,promotion:10,url:"yh5I1X-3BoE",renders:"ManimCE",info:`
        - **Static animation**
        `},v25:{name:"Fibonacci Sequence",price:15,promotion:10,url:"YDa88QNcVH8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of iterations.
        `}}},batch05:{title:"Plots 1",price:40,videoPreview:"urlLink",videos:{v26:{name:"Square mapping",price:5,promotion:3,url:"-JoC0pFnd7k",renders:"ManimCE",info:`
        - **Static animation**
        `},v27:{name:"Square Fourier Signal",price:10,promotion:8,url:"8ZsMtoPYWHA",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of circles.
        `},v28:{name:"Fourier square wave approximation",price:10,promotion:8,url:"ArPLIA0cKJ4",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of iterations.
        `},v29:{name:"From table to plot",price:10,promotion:8,url:"Ma67xrj_vD4",renders:"ManimCE",info:`
        - **Static animation**
        `},v30:{name:"f(x) mod n",price:10,promotion:8,url:"kAYPKmKTHAE",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change number of lines, colors and the function \`f(x)\`.
        `},v31:{name:"Euler formula in 3D",price:15,promotion:10,url:"vjUpFWhelXg",renders:"ManimCE",info:`
        - **Static animation**
        `},v32:{name:"m mod n epicycloid",price:15,promotion:10,url:"LVjUi57F9V0",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of lines and the module.
        `},v33:{name:"Lissajous curve",price:15,promotion:10,url:"5SSC2nbdrLk",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the fraction, ie. the curve.
        `},v34:{name:"Beauty parametric function family",price:15,promotion:10,url:"x1XdGCZt12E",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the \`a,b,c\` parameters.
        `}}},batch06:{title:"Miscellaneous 1",price:25,videoPreview:"urlLink",videos:{v35:{name:"Path to bezier curves",price:10,promotion:5,url:"STXFTu5sfpM",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path.
        `},v36:{name:"Bezier N grade (static)",price:13,promotion:8,url:"BQmESvtNsyE",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the control points and the grade of the curve.
        ::: danger
        This animation is also available as an interactive animation.
        `},v37:{name:"Social networks endscreen",price:13,promotion:8,url:"zJMA4or_BZ8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the logos and texts.
        `},v38:{name:"Game of life (static)",price:13,promotion:8,url:"7t9PX8Ppuzo",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can set the initial state.
        ::: danger
        This animation is also available as an interactive animation.
        `},v39:{name:"Hanoi towers",price:13,promotion:8,url:"NMTD8zx-Sa8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number blocks and the auxiliar tower.
        `},v40:{name:"Bubble sort",price:15,promotion:10,url:"3eIFE7b0OJI",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the array.
        `}}},batch07:{title:"Miscellaneous 2",price:35,videoPreview:"urlLink",videos:{v41:{name:"Keyboard animation",price:15,promotion:10,url:"HWPtYD8K160",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the text and the sounds.
            :::
            Sounds **are** included
        `},v42:{name:"Metaballs",price:15,promotion:10,url:"qswoMX_DSzs",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number, positions and colors of the balls.
            ::: danger
            The code is not mine, I took it from [this video](https://www.youtube.com/watch?v=6oMZb3yP_H8&t=86s), I gave myself the task of updating it, solving some errors and organizing the code.
        `},v43:{name:"Network screensaver",price:15,promotion:10,url:"WgCpE0pfcUg",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of points, the minimum distance for the lines to begin to appear and the speed of the dots.
        - **Recommended rendering**: OpenGL (ManimCE)
        It is faster to render the video using OpenGL
        `},v44:{name:"Polyrhythm",price:20,promotion:15,url:"cnItcdwpwFQ",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change rhythms, colors, sounds and polygons.
            :::
            Sounds **are** included
        `},v45:{name:"Whatsapp animation",price:20,promotion:15,url:"np7_ZKtTmQo",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the text on each side, colors, sounds and the font.
            :::
            Sounds and SVG **are** included
        `}}},batch08:{title:"Miscellaneous 3",price:20,videoPreview:"urlLink",videos:{v46:{name:"How Manim works",price:13,promotion:8,url:"xbhxS5xKy3g",renders:"ManimCE",info:`
        - **Static animation**
        `},v47:{name:"Matplotlib example",price:13,promotion:8,url:"_chsKOXyeSU",renders:"ManimCE",info:`
        - **Static animation**
            :::
            This code provides the functionality to highlight the lines of a code more easily.
        `},v48:{name:"Pixel animation",price:13,promotion:8,url:"EF-eIyoGJ28",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the red, green, blue and alfa parameters.
        `}}},batch14:{title:"Miscellaneous 4",price:40,videoPreview:"urlLink",videos:{v7:{name:"BuildSubPaths Animation",price:15,promotion:15,url:"d8t_eZUtLXc",renders:"ManimCE",info:"\n        - **Custom animation**:\n        This is a custom animation that can be used as `Write`, `FadeIn`, etc.\n        "},v8:{name:"Formulas 3D effect",price:10,promotion:10,url:"ZVyvQ9_BZqY",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can add change the formulas, the speed at which they move, etc.
        `},v9:{name:"Hypercube",price:10,promotion:10,url:"Pkuy71a9kLc",renders:"ManimCE",info:`
        - **Configurable animation**:
        Static animation
        `},v10:{name:"Maurer Roses",price:5,promotion:5,url:"jWipG9VHngM",renders:"ManimCE",info:`
        - **Configurable animation**:
        Static animation
        `},v11:{name:"Pi digits in colors",price:15,promotion:15,url:"nbt13pZl7yA",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of digits of Pi to 5k.
        `},v12:{name:"Radians visualized",price:5,promotion:5,url:"d_25czsk9Tg",renders:"ManimCE",info:`
        - **Configurable animation**:
        Static animation
        `},v13:{name:"Rotation polygons",price:5,promotion:5,url:"GUZqB1IjjJg",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors and colors.
        `},v14:{name:"Voronoi diagrams",price:20,promotion:20,url:"7wJMT7WtN7U",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the speed at which the circles grow and the coordinate of the points, by default they are positioned randomly.
        `}}},batch09:{title:"Interactive 1",price:30,videoPreview:"urlLink",videos:{v49:{name:"Incenter & circumcenter",price:20,promotion:18,url:"pBfE0JGnIW8",renders:"ManimCE",info:`
        - This is an **interactive** animation, so it is necessary to render it with OpenGL.
        - You can change the position of the vertices by clicking on them.
            ::: danger
            Mac M1/M2 computers may not read mouse position correctly, be aware of that.
        `},v50:{name:"Bezier N grade",price:25,promotion:20,url:"_1OwYgERRGU",renders:"ManimCE",info:`
        - This is an **interactive** animation, so it is necessary to render it with OpenGL.
        - You can change the control position, add or remove control points, and run the animation that shows the associated Bezier curve.
            ::: danger
            Mac M1/M2 computers may not read mouse position correctly, be aware of that.
        `},v51:{name:"Game of life",price:25,promotion:20,url:"hCpNfGyShDE",renders:"ManimCE",info:`
        - This is an **interactive** animation, so it is necessary to render it with OpenGL.
        - You can run and stop the simulation, clicking on one of the squares will change the state to "alive" or "dead".
            ::: danger
            Mac M1/M2 computers may not read mouse position correctly, be aware of that.
        `}}},batch13:{title:"Long animations 1",price:30,videoPreview:"urlLink",info:`
    ::: info
    These are updated animations from ManimCairo to ManimCE
    :::    `,videos:{v81:{name:"Inscribed angles",price:20,promotion:20,url:"smMbzNTLwao",renders:"ManimCE"},v82:{name:"Sine and Cosine laws (proofs)",price:20,promotion:20,url:"AlvA_pSlxDQ",renders:"ManimCE"}}},batch10:{title:"Olds 1",price:30,videoPreview:"urlLink",info:`
    ::: info
    These animations are available for free in my repositories, but they only work in ManimCairo, all these animations have been updated to the latest version of ManimCE, that's why they are so cheap.
    `,videos:{v52:{name:"Doppler effect",price:5,promotion:3,url:"-CulAYKLaM8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the velocity of the Circles, and the position of the dot.
        `},v53:{name:"Clock",price:5,promotion:3,url:"JM5pW6DVOzY",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the hour.
        `},v54:{name:"Epicycles",price:5,promotion:3,url:"gEBK2wWoJu8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the proportion between the circles.
        `},v55:{name:"Ellipse",price:5,promotion:3,url:"ruA-K3nqqnI",renders:"ManimCE",info:`
        - **Static animation**
        `},v56:{name:"Oscillator",price:5,promotion:3,url:"RfVb3HSC7SE",renders:"ManimCE",info:`
        - **Static animation**
        `},v57:{name:"Slope",price:5,promotion:3,url:"A8H9mKSsshQ",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the graph and the x coordinate of the slope.
        `},v58:{name:"Derivative definition",price:5,promotion:3,url:"plvSuSf6Yqo",renders:"ManimCE",info:`
        - **Static animation**
        `},v59:{name:"Sine and cosine",price:5,promotion:3,url:"Oiy6CiB0WkA",renders:"ManimCE",info:`
        - **Static animation**
        `},v60:{name:"Parabola definition",price:5,promotion:3,url:"POjb2bTqhfg",renders:"ManimCE",info:`
        - **Static animation**
        `},v61:{name:"Changing area under curve",price:5,promotion:3,url:"RXLkvah4f1w",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the graph and the max value.
        `},v62:{name:"Riemman rectangles",price:5,promotion:3,url:"6RsSAS8xHzw",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the graph and the iterations.
        `},v63:{name:"Shifting graphs",price:5,promotion:3,url:"OtGVdOFDOFs",renders:"ManimCE",info:`
        - **Static animation**
        `},v64:{name:"Sum external angles",price:5,promotion:3,url:"sKE5qARy1xo",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can select the sides of the polygons.
        `},v65:{name:"Parabola construction with lines",price:5,promotion:3,url:"qg1zPGvrD3k",renders:"ManimCE",info:`
        - **Static animation**
        `},v66:{name:"Infinite symbol",price:10,promotion:5,url:"htyx28Ei73c",renders:"ManimCE",info:`
        - **Static animation**
        `},v67:{name:"Take on me with Manim",price:15,promotion:10,url:"J5yctY9Y1ec",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the notes using strings, see the **Example code** below.
            :::
            Sounds **are** included
        `,code:`
        melody = [
          *"F2s,F2s,D2,B1,P,B1,P,E2,P,E2,P,E2,G2s,G2s,A2,B2,A2,A2,A2,E2,P,D2,P,F2s,P".split(","),
          *"F2s,P,F2s,E2,E2,F2s,E2,F2s,F2s,D2,B1,P,B1,P,E2,P,E2,P,E2,G2s,G2s,A2,B2,A2,A2".split(","),
          *"A2,E2,P,D2,P,F2s,P,F2s,P,F2s,E2,E2,F2s,E2,F2s,F2s,D2,B1,P,B1,P,E2,P,E2,P,E2".split(","),
          *"G2s,G2s,A2,B2,A2,A2,A2,F2s,P,D2,P,F2s,P,F2s,P,F2s,E2,E2,E2,P,D2,P,P".split(","),
        ]
        for note in melody:
          if note != "P":
            self.add_sound(f"./assets/notes/{note}")
            key_note = list(filter(lambda x: (x.note==note),piano))[0]
            key_note.clear_updaters()
            self.play(
              FadeToColor(key_note,RED,run_time=PAUSE),
              rate_func=there_and_back
            )
          else:
            self.wait(PAUSE)
        `},v68:{name:"Tree to stars",price:20,promotion:15,url:"1_4Uu3BlCBo",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the number of branches and iterations.
        `}}},batch11:{title:"Texts 1",price:15,videoPreview:"urlLink",info:`
    ::: info
    All these animations work for texts (but can be used for other objects), see **Example code** below.
    :::
    **Example code**:
    \`\`\`
    def construct(self):
      t = JustifyText(LOREM, tex_width=8.8)
      self.play(
        # FadeInFromBlackRectangle(t),
        # ShowFromPolygon(t),
        # FadeInWithRotation(t),
        # FadeInWithScale(t),
        # PopUp(t),
        # ShowWithBounce(t),
        # FallFromPoint(t, point=Dot().next_to(config.frame_height*UP, UP).get_center()),
      )
    \`\`\`
    `,videos:{v69:{name:"Fade In From Black Rectangle",price:5,promotion:3,url:"iB49C3f8qto",renders:"ManimCE"},v70:{name:"Fade In With Scale",price:5,promotion:3,url:"UXqZwd1hMko",renders:"ManimCE"},v71:{name:"Fade In With Rotation",price:5,promotion:3,url:"hDxRMRUWFA8",renders:"ManimCE"},v72:{name:"Fall From Point",price:5,promotion:3,url:"-dA_fLlf4jw",renders:"ManimCE"},v73:{name:"PopUp",price:5,promotion:3,url:"reviOcbtFSA",renders:"ManimCE"},v74:{name:"Show From Polygon",price:5,promotion:3,url:"AizAojV-430",renders:"ManimCE"},v75:{name:"Show With Bounce",price:5,promotion:3,url:"VQq4al0Fgko",renders:"ManimCE"}}}};var He=M({name:"QList",props:{...U,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const a=j(),i=O(e,a.proxy.$q),u=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>r(e.tag,{class:u.value},T(n.default))}});const Ne=r("div",{class:"q-space"});var Ke=M({name:"QSpace",setup(){return()=>Ne}});const Xe=16/9;var Ze=M({name:"QImg",props:{...Ce,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Xe},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:a}){const i=q(e.initialRatio),u=we(e,i);let t=null,o=!1;const d=[q(null),q(y())],h=q(0),w=q(!1),g=q(!1),b=c(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=c(()=>({width:e.width,height:e.height})),k=c(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),L=c(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));W(()=>s(),S);function s(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function y(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function S(f){t!==null&&(clearTimeout(t),t=null),g.value=!1,f===null?(w.value=!1,d[h.value^1].value=y()):w.value=!0,d[h.value].value=f}function E({target:f}){o!==!0&&(t!==null&&(clearTimeout(t),t=null),i.value=f.naturalHeight===0?.5:f.naturalWidth/f.naturalHeight,p(f,1))}function p(f,A){o===!0||A===1e3||(f.complete===!0?Y(f):t=setTimeout(()=>{t=null,p(f,A+1)},50))}function Y(f){o!==!0&&(h.value=h.value^1,d[h.value].value=null,w.value=!1,g.value=!1,a("load",f.currentSrc||f.src))}function $(f){t!==null&&(clearTimeout(t),t=null),w.value=!1,g.value=!0,d[h.value].value=null,d[h.value^1].value=y(),a("error",f)}function Q(f){const A=d[f].value,D={key:"img_"+f,class:k.value,style:L.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...A};return h.value===f?(D.class+=" q-img__image--waiting",Object.assign(D,{onLoad:E,onError:$})):D.class+=" q-img__image--loaded",r("div",{class:"q-img__container absolute-full",key:"img"+f},r("img",D))}function K(){return w.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},T(n[g.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[r(Fe,{color:e.spinnerColor,size:e.spinnerSize})])}return S(s()),ie(()=>{o=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const f=[];return u.value!==null&&f.push(r("div",{key:"filler",style:u.value})),g.value!==!0&&(d[0].value!==null&&f.push(Q(0)),d[1].value!==null&&f.push(Q(1))),f.push(r(fe,{name:"q-transition--fade"},K)),r("div",{class:b.value,style:_.value,role:"img","aria-label":e.alt},f)}}});const Je=e=>(ve("data-v-a770cf1e"),e=e(),pe(),e),en=["href"],nn=Je(()=>v("div",{class:"absolute-full text-subtitle2 flex flex-center click-button"}," Click to open ",-1)),tn={key:1},an={class:"flex justify-end"},on={__name:"VideoLink",props:["video"],setup(e){const n=e,a=(i,u=8,t=!0)=>{const o=i.split(/\r?\n/);return o.forEach((d,h)=>{o[h]=d.slice(u)}),o.shift(),o.pop(),t?["```",...o,"```"].join(`
`):o.join(`
`)};return(i,u)=>{const t=re("q-markdown");return I(),H(te,{"switch-toggle-side":"","expand-separator":""},{header:x(()=>[m(Ue,{class:"q-pl-none"},{default:x(()=>[m(P,{stretch:"",flat:"",label:n.video.name,class:""},null,8,["label"]),m(Ke),m(P,{class:"bg-purple",stretch:"",flat:"",label:`${n.video.promotion} USD`},null,8,["label"])]),_:1})]),default:x(()=>[m(ye,null,{default:x(()=>[m(be,null,{default:x(()=>[v("a",{href:`https://www.youtube.com/watch?v=${n.video.url}`,target:"_blank"},[m(Ze,{src:`https://img.youtube.com/vi/${n.video.url}/sddefault.jpg`,ratio:16/9},{default:x(()=>[nn]),_:1},8,["src"])],8,en),n.video.info?(I(),H(t,{key:0,src:`
:::info
${a(n.video.info,8,!1)}
:::
          `},null,8,["src"])):ne("",!0),n.video.code?(I(),z("div",tn,[m(te,{label:"Example code",class:"bg-brown"},{default:x(()=>[m(t,{src:a(n.video.code),"no-line-numbers":""},null,8,["src"])]),_:1})])):ne("",!0),v("div",an,[m(P,{outline:"",class:"text-h5",style:{color:"goldenrod","font-size":"1.3em",margin:"0"},label:"BUY",onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"})])]),_:1})]),_:1})]),_:1})}}};var rn=oe(on,[["__scopeId","data-v-a770cf1e"]]);const ln={class:"title divider line double-razor text-h4"},sn={class:"flex justify-end price-button q-mt-md"},cn={__name:"BatchView",props:["batch"],setup(e){const n=e,a=(i,u=4,t=!1)=>{const o=i.split(/\r?\n/);return o.forEach((d,h)=>{o[h]=d.slice(u)}),o.shift(),o.pop(),t?["```",...o,"```"].join(`
`):o.join(`
`)};return(i,u)=>{const t=re("q-markdown");return I(),z(N,null,[v("div",ln,Ye(n.batch.title),1),n.batch.info?(I(),H(t,{key:0,src:a(n.batch.info)},null,8,["src"])):ne("",!0),m(He,null,{default:x(()=>[(I(!0),z(N,null,ge(n.batch.videos,o=>(I(),H(rn,{key:o.name,video:o},null,8,["video"]))),128))]),_:1}),v("div",sn,[m(P,{padding:"5px 30px 5px 30px",class:"text-h5 q-mb-0",color:"red","no-caps":"",label:`All batch for: ${n.batch.price} USD`,onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"},null,8,["label"])])],64)}}};var un=oe(cn,[["__scopeId","data-v-c79e7b3e"]]);const R=e=>(ve("data-v-2f1a94cc"),e=e(),pe(),e),dn={target:"_blank"},mn=R(()=>v("div",{class:"flex flex-center text-h3 promotion"},"Special promotion",-1)),hn=R(()=>v("div",{class:"flex flex-center text-h4 faq"},"FAQ",-1)),fn=R(()=>v("header",null,[v("h3",null,[v("b",null,"Easy formula transform")])],-1)),vn={class:"q-pa-md"},pn={class:"flex justify-end price-button q-mt-md"},gn=R(()=>v("header",null,[v("h3",null,[v("b",null,"Char-Creature")])],-1)),bn={class:"q-pa-md"},yn={class:"flex justify-end price-button q-mt-md"},Cn=R(()=>v("header",null,[v("h3",null,[v("b",null,"ManiMusic")])],-1)),wn={class:"q-pa-md"},_n={class:"flex justify-end price-button q-mt-md"},Sn=R(()=>v("header",null,[v("h3",null,[v("b",null,"Animations")])],-1)),En={class:"flex justify-end price-button q-mt-md"},xn={__name:"IndexPage",setup(e){return(n,a)=>{const i=re("q-markdown");return I(),z(N,null,[v("p",dn,[m(Oe,{"inline-actions":"",rounded:"",class:"text-white bg-red promotion-banner"},{default:x(()=>[mn,m(i,{class:"flex flex-center text-h4 promo-price",src:`**100 USD** until the end of October 2023 you will get:
<div style=''>

* 100 **amazing** animations for **ManimCE v0.17.3** for **50 USD**.

* 4 **amazing** libraries for **50 USD**:
  * [Easy Formula Transformation](https://www.youtube.com/watch?v=VaWVMSruKfU) tool.

  * [Manimusic](https://zavden.github.io/manimusic-docs/html/index.html) library to make Harmony and Counterpoint animations.

  * [CharCreature](https://zavden.github.io/char-creature-docs/html/index.html) mini-library to make 3b1b-like characters, blink animation and bubbles.

  * [Manim Presenter](https://manim-presenter.netlify.app/) library to make presentations simple and fast.

*If you can't buy both, you can buy either the animations or the libraries (50 USD each), and then buy the other one.*
*The 50 USD promotion continues even after October, as long as you have purchased one of the two before.*

*If you already bought one or two of my libraries you can buy the rest for 70 USD.*
</div>
        `})]),_:1})]),m(te,{"switch-toggle-side":"","expand-separator":"",class:"bg-primary"},{header:x(()=>[hn]),default:x(()=>[m(ye,null,{default:x(()=>[m(be,null,{default:x(()=>[m(i,{class:"faq-questions",src:`
**1. How do I pay?**
For now only via [PayPal](https://paypal.me/zavdn).

**2. Which is the correct price?**
The price that is furthest to the right (purple) is the price with promotion, it is applied for each animation separately. The price on the left is the regular price. The promotion will only be temporarily available.

**3. Does the price include support?**
No, the price is only the code.
The code is well formatted and organized, but if you need any support you will have to pay for it separately, you have two options:

1. Hire me as a private tutor, more information [here](https://zavden.github.io/freelance-job/#/tutoring).
2. Pay for support only for that code.
If the price of the code is **less** than \`40 USD\`, then the support will cost twice as much. Otherwise, the support price is the same as the code.
For example, if you want to buy a code that costs 10 USD, and you also want support, then you would have to pay 10 (code) + 20 (support) = 30 USD in total.
If the code costs 45 USD then you will have to pay 45 + 45 = 90 USD.


Support includes a full explanation (via chat) of how the code is built.

::: danger
Several of the animations are quite advanced, if you don't have enough knowledge of Python you won't understand my explanation.
:::

**4. What version of Manim is needed?**
They all need **ManimCE v0.17.3**, most use Cairo but some need OpenGL, especially the interactive animations.

**5. What does it mean for an animation to be configurable?**
It means that by changing just a few parameter values you can get a new animation. These are usually more expensive since they are animation generators, instead of being a static animation.

**6. What is the code license?**
The license is MIT, you are free to resell it or publish it on the internet, but please don't do it, and if you do at least give me the credit.

**7. How can I contact the author?**
You can contact me with Email, Telegram and Discord, just remember that my time zone is [CST](https://www.timeanddate.com/time/zones/cst), so it can take me up to 24 hours to respond.
- Email: **theoremofbeethoven@gmail.com**
- Telegram: **@TheoremOfBeethoven**
- Discord: **theoremofbeethoven#2781**
        `})]),_:1})]),_:1})]),_:1}),fn,m(i,{class:"flex flex-center",src:`
::: info
This tool works on both **ManimCE** 0.17.3 and **ManimGL** 1.6 (or higher), and it does not give problems with retina displays.
:::
        `}),v("div",vn,[m(ee,{ratio:16/9,src:"https://www.youtube.com/embed/VaWVMSruKfU?rel=0"})]),v("div",pn,[m(P,{padding:"5px 30px 5px 30px",class:"text-h4 q-mb-0",color:"red","no-caps":"",label:"40 USD",onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"})]),gn,m(i,{class:"flex flex-center",src:`
::: info
Make tool to create 3b1b style figures, can move view, blink and write dialogs with ManimCE, [here](https://zavden.github.io/char-creature-docs/html/index.html) is the docs.
:::
        `}),v("div",bn,[m(ee,{ratio:16/9,src:"https://www.youtube.com/embed/48urQv_UD-8?rel=0"})]),v("div",yn,[m(P,{padding:"5px 30px 5px 30px",class:"text-h4 q-mb-0",color:"red","no-caps":"",label:"20 USD",onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"})]),Cn,m(i,{class:"flex flex-center",src:`
::: info
Library to make Harmony and Counterpoint animations with ManimCE, [here](https://zavden.github.io/manimusic-docs/html/index.html) is the documentation.
:::
        `}),v("div",wn,[m(ee,{ratio:16/9,src:"https://www.youtube.com/embed/gpOAmFDwYEo?rel=0"})]),v("div",_n,[m(P,{padding:"5px 30px 5px 30px",class:"text-h4 q-mb-0",color:"red","no-caps":"",label:"40 USD",onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"})]),Sn,m(i,{class:"flex flex-start",src:`
::: info
There are currently 100 animations posted, but I will add more eventually. They all work with ManimCE 0.17.3.

Below are all the animations separated by batches.
:::
        `}),v("div",En,[m(P,{padding:"5px 30px 5px 30px",class:"text-h4 q-mb-0",color:"red","no-caps":"",label:"50 USD (until October 2023)",onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"},null,8,["label"])]),m(i,{class:"flex justify-end",src:`
\\* For the 100 animations
        `}),(I(!0),z(N,null,ge(Ae(We),u=>(I(),z("div",{key:u.title},[m(un,{batch:u},null,8,["batch"])]))),128))],64)}}};var In=oe(xn,[["__scopeId","data-v-2f1a94cc"]]);export{In as default};
