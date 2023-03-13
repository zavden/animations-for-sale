import{k as u,s as x,h as r,u as B,g as z,X as ne,Y as xe,r as k,i as Me,x as de,Z as ke,b as te,t as me,$ as qe,w as N,a0 as Be,a1 as Ie,a2 as re,a3 as Pe,_ as ae,M as ie,N as q,O as W,R as E,U as g,Q as R,S as P,a4 as Z,a5 as D,V as he,W as fe,a6 as Te,a7 as H,a8 as ve,a9 as Fe}from"./index.19ea85df.js";import{u as Le,a as Ae,b as Ye}from"./use-model-toggle.8344542c.js";import{Q as De}from"./QToolbar.81cd4abd.js";const O={dark:{type:Boolean,default:null}};function $(e,n){return u(()=>e.dark===null?n.dark.isActive:e.dark)}var ze=x({name:"QBanner",props:{...O,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=z(),o=$(e,a),c=u(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(o.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),t=u(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const i=[r("div",{class:"q-banner__avatar col-auto row items-center self-start"},B(n.avatar)),r("div",{class:"q-banner__content col text-body2"},B(n.default))],d=B(n.action);return d!==void 0&&i.push(r("div",{class:t.value},d)),r("div",{class:c.value+(e.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}}),ge=x({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const a=u(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>r(e.tag,{class:a.value},B(n.default))}}),pe=x({name:"QCard",props:{...O,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=z(),o=$(e,a),c=u(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>r(e.tag,{class:c.value},B(n.default))}}),Oe=x({name:"QItem",props:{...O,...ne,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:o}}=z(),c=$(e,o),{hasLink:t,linkAttrs:i,linkClass:d,linkTag:m,navigateOnClick:C}=xe(),v=k(null),p=k(null),_=u(()=>e.clickable===!0||t.value===!0||e.tag==="label"),M=u(()=>e.disable!==!0&&_.value===!0),T=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(t.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(M.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),s=u(()=>{if(e.insetLevel===void 0)return null;const f=o.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function b(f){M.value===!0&&(p.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===v.value?p.value.focus():document.activeElement===p.value&&v.value.focus()),C(f))}function w(f){if(M.value===!0&&Me(f,13)===!0){de(f),f.qKeyEvent=!0;const L=new MouseEvent("click",f);L.qKeyEvent=!0,v.value.dispatchEvent(L)}a("keyup",f)}function S(){const f=ke(n.default,[]);return M.value===!0&&f.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:p})),f}return()=>{const f={ref:v,class:T.value,style:s.value,role:"listitem",onClick:b,onKeyup:w};return M.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,i.value)):_.value===!0&&(f["aria-disabled"]="true"),r(m.value,f,S())}}}),V=x({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:a.value},B(n.default))}}),le=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=u(()=>parseInt(e.lines,10)),o=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),c=u(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>r("div",{style:c.value,class:o.value},B(n.default))}}),$e=x({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:a}){let o=!1,c,t,i=null,d=null,m,C;function v(){c&&c(),c=null,o=!1,i!==null&&(clearTimeout(i),i=null),d!==null&&(clearTimeout(d),d=null),t!==void 0&&t.removeEventListener("transitionend",m),m=null}function p(s,b,w){s.style.overflowY="hidden",b!==void 0&&(s.style.height=`${b}px`),s.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,o=!0,c=w}function _(s,b){s.style.overflowY=null,s.style.height=null,s.style.transition=null,v(),b!==C&&a(b)}function M(s,b){let w=0;t=s,o===!0?(v(),w=s.offsetHeight===s.scrollHeight?0:void 0):C="hide",p(s,w,b),i=setTimeout(()=>{i=null,s.style.height=`${s.scrollHeight}px`,m=S=>{d=null,(Object(S)!==S||S.target===s)&&_(s,"show")},s.addEventListener("transitionend",m),d=setTimeout(m,e.duration*1.1)},100)}function T(s,b){let w;t=s,o===!0?v():(C="show",w=s.scrollHeight),p(s,w,b),i=setTimeout(()=>{i=null,s.style.height=0,m=S=>{d=null,(Object(S)!==S||S.target===s)&&_(s,"hide")},s.addEventListener("transitionend",m),d=setTimeout(m,e.duration*1.1)},100)}return te(()=>{o===!0&&v()}),()=>r(me,{css:!1,appear:e.appear,onEnter:M,onLeave:T},n.default)}});const Re={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},X={xs:2,sm:4,md:8,lg:16,xl:24};var se=x({name:"QSeparator",props:{...O,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=z(),a=$(e,n.proxy.$q),o=u(()=>e.vertical===!0?"vertical":"horizontal"),c=u(()=>` q-separator--${o.value}`),t=u(()=>e.inset!==!1?`${c.value}-${Re[e.inset]}`:""),i=u(()=>`q-separator${c.value}${t.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),d=u(()=>{const m={};if(e.size!==void 0&&(m[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const C=e.spaced===!0?`${X.md}px`:e.spaced in X?`${X[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];m[`margin${v[0]}`]=m[`margin${v[1]}`]=C}return m});return()=>r("hr",{class:i.value,style:d.value,"aria-orientation":o.value})}});let J,G=0;const y=new Array(256);for(let e=0;e<256;e++)y[e]=(e+256).toString(16).substring(1);const je=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const a=new Uint8Array(n);return e.getRandomValues(a),a}}return n=>{const a=[];for(let o=n;o>0;o--)a.push(Math.floor(Math.random()*256));return a}})(),ce=4096;function ue(){(J===void 0||G+16>ce)&&(G=0,J=je(ce));const e=Array.prototype.slice.call(J,G,G+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,y[e[0]]+y[e[1]]+y[e[2]]+y[e[3]]+"-"+y[e[4]]+y[e[5]]+"-"+y[e[6]]+y[e[7]]+"-"+y[e[8]]+y[e[9]]+"-"+y[e[10]]+y[e[11]]+y[e[12]]+y[e[13]]+y[e[14]]+y[e[15]]}const F=qe({}),Ue=Object.keys(ne);var ee=x({name:"QExpansionItem",props:{...ne,...Le,...O,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ae,"click","afterShow","afterHide"],setup(e,{slots:n,emit:a}){const{proxy:{$q:o}}=z(),c=$(e,o),t=k(e.modelValue!==null?e.modelValue:e.defaultOpened),i=k(null),d=ue(),{show:m,hide:C,toggle:v}=Ye({showing:t});let p,_;const M=u(()=>`q-expansion-item q-item-type q-expansion-item--${t.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),T=u(()=>{if(e.contentInsetLevel===void 0)return null;const l=o.lang.rtl===!0?"Right":"Left";return{["padding"+l]:e.contentInsetLevel*56+"px"}}),s=u(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),b=u(()=>{const l={};return Ue.forEach(I=>{l[I]=e[I]}),l}),w=u(()=>s.value===!0||e.expandIconToggle!==!0),S=u(()=>e.expandedIcon!==void 0&&t.value===!0?e.expandedIcon:e.expandIcon||o.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),f=u(()=>e.disable!==!0&&(s.value===!0||e.expandIconToggle===!0)),L=u(()=>({expanded:t.value===!0,detailsId:e.targetUid,toggle:v,show:m,hide:C})),j=u(()=>{const l=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:o.lang.label[t.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":t.value===!0?"true":"false","aria-controls":d,"aria-label":l}});N(()=>e.group,l=>{_!==void 0&&_(),l!==void 0&&oe()});function U(l){s.value!==!0&&v(l),a("click",l)}function K(l){l.keyCode===13&&h(l,!0)}function h(l,I){I!==!0&&i.value!==null&&i.value.focus(),v(l),de(l)}function A(){a("afterShow")}function Y(){a("afterHide")}function oe(){p===void 0&&(p=ue()),t.value===!0&&(F[e.group]=p);const l=N(t,Q=>{Q===!0?F[e.group]=p:F[e.group]===p&&delete F[e.group]}),I=N(()=>F[e.group],(Q,Ee)=>{Ee===p&&Q!==void 0&&Q!==p&&C()});_=()=>{l(),I(),F[e.group]===p&&delete F[e.group],_=void 0}}function ye(){const l={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},I=[r(re,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&t.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:S.value})];return f.value===!0&&(Object.assign(l,{tabindex:0,...j.value,onClick:h,onKeyup:K}),I.unshift(r("div",{ref:i,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),r(V,l,()=>I)}function Ce(){let l;return n.header!==void 0?l=[].concat(n.header(L.value)):(l=[r(V,()=>[r(le,{lines:e.labelLines},()=>e.label||""),e.caption?r(le,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&l[e.switchToggleSide===!0?"push":"unshift"](r(V,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>r(re,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&l[e.switchToggleSide===!0?"unshift":"push"](ye()),l}function _e(){const l={ref:"item",style:e.headerStyle,class:e.headerClass,dark:c.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return w.value===!0&&(l.clickable=!0,l.onClick=U,Object.assign(l,s.value===!0?b.value:j.value)),r(Oe,l,Ce)}function we(){return Be(r("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:T.value,id:d},B(n.default)),[[Ie,t.value]])}function Se(){const l=[_e(),r($e,{duration:e.duration,onShow:A,onHide:Y},we)];return e.expandSeparator===!0&&l.push(r(se,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:c.value}),r(se,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:c.value})),l}return e.group!==void 0&&oe(),te(()=>{_!==void 0&&_()}),()=>r("div",{class:M.value},[r("div",{class:"q-expansion-item__container relative-position"},Se())])}});const Qe={batch01:{title:"Fourier circles",price:50,videoPreview:"urlLink",info:`
    ::: danger
    The code is not the same as 3b1b's, it is an original code that uses FFT, so it is faster than 3b1b's version and cleaner.
    :::
    `,videos:{v1:{name:"Single path Fourier drawing",price:20,promotion:15,renders:"ManimCE",url:"ytsR1TRrLFU",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the color, the style of circles, whether the curve fades or not and the number of vectors.
        `},v2:{name:"Single path with zoom Fourier drawing",price:20,promotion:15,url:"IbTnnRwXUqc",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""},v3:{name:"Multi path Fourier drawing",price:25,promotion:15,url:"Mjxqgki0UwU",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""},v4:{name:"Multi path Fourier drawing with zoom",price:25,promotion:15,url:"PYyrVrHSsqc",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""},v5:{name:"Custom Fourier drawing",price:25,promotion:15,url:"V_9Mw9Ow454",renders:"ManimCE",info:`
        - **Configurable animation**:
        This is a more complex example of how to use the functions provided by the code.
        `,code:""},v6:{name:"Single path Fourier drawing with zoomed camera",price:25,promotion:15,url:"W0MrUZ3DmnU",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the path (it must be a closed path), the zoom, the color, the style of circles, whether the curve fades or not and the number of vectors.
        `,code:""}}},batch02:{title:"Fractals 1",price:40,videoPreview:"urlLink",videos:{v7:{name:"Apollon fractal",price:13,promotion:8,url:"5elYwjToCi8",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the size (radius) of the circles.
        `},v8:{name:"Barnsley fractal",price:13,promotion:8,url:"2DarNKfbXYc",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the amount of stitch and colors.
        `},v9:{name:"Tree fractal",price:13,promotion:8,url:"xOaXMG-tDG4",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and angle of the branches.
        `},v10:{name:"Dragon fractal",price:13,promotion:8,url:"etnXp4qB-P4",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors.
        `},v11:{name:"Hilbert fractal",price:13,promotion:8,url:"AJACyuNhEiM",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors.
        - **Recommended rendering**: OpenGL (ManimCE)
        It is faster to render the video using OpenGL
        `},v12:{name:"Koch fractal",price:13,promotion:8,url:"uavoIqKATqI",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions.
        - **Recommended rendering**: OpenGL (ManimCE)
        It is faster to render the video using OpenGL
        `},v13:{name:"Sierpinski fractal",price:13,promotion:8,url:"-C55KilKE20",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can control the amount of interactions and the colors and colors.
        `},v14:{name:"Pythagoras fractal",price:15,promotion:10,url:"m-muuDoD8DE",renders:"ManimCE",info:`
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
        `}}},batch08:{title:"Miscellaneous 3",price:35,videoPreview:"urlLink",videos:{v46:{name:"How Manim works",price:13,promotion:8,url:"xbhxS5xKy3g",renders:"ManimCE",info:`
        - **Static animation**
        `},v47:{name:"Matplotlib example",price:13,promotion:8,url:"_chsKOXyeSU",renders:"ManimCE",info:`
        - **Static animation**
            :::
            This code provides the functionality to highlight the lines of a code more easily.
        `},v48:{name:"Pixel animation",price:13,promotion:8,url:"EF-eIyoGJ28",renders:"ManimCE",info:`
        - **Configurable animation**:
        You can change the red, green, blue and alfa parameters.
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
        `}}},batch10:{title:"Olds 1",price:30,videoPreview:"urlLink",info:`
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
    `,videos:{v69:{name:"Fade In From Black Rectangle",price:5,promotion:3,url:"iB49C3f8qto",renders:"ManimCE"},v70:{name:"Fade In With Scale",price:5,promotion:3,url:"UXqZwd1hMko",renders:"ManimCE"},v71:{name:"Fade In With Rotation",price:5,promotion:3,url:"hDxRMRUWFA8",renders:"ManimCE"},v72:{name:"Fall From Point",price:5,promotion:3,url:"-dA_fLlf4jw",renders:"ManimCE"},v73:{name:"PopUp",price:5,promotion:3,url:"reviOcbtFSA",renders:"ManimCE"},v74:{name:"Show From Polygon",price:5,promotion:3,url:"AizAojV-430",renders:"ManimCE"},v75:{name:"Show With Bounce",price:5,promotion:3,url:"VQq4al0Fgko",renders:"ManimCE"}}}};var Ge=x({name:"QList",props:{...O,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const a=z(),o=$(e,a.proxy.$q),c=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>r(e.tag,{class:c.value},B(n.default))}});const Ne=r("div",{class:"q-space"});var We=x({name:"QSpace",setup(){return()=>Ne}});const He={ratio:[String,Number]};function Ke(e,n){return u(()=>{const a=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const Ve=16/9;var Xe=x({name:"QImg",props:{...He,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ve},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:a}){const o=k(e.initialRatio),c=Ke(e,o);let t=null,i=!1;const d=[k(null),k(b())],m=k(0),C=k(!1),v=k(!1),p=u(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=u(()=>({width:e.width,height:e.height})),M=u(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=u(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));N(()=>s(),w);function s(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function b(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function w(h){t!==null&&(clearTimeout(t),t=null),v.value=!1,h===null?(C.value=!1,d[m.value^1].value=b()):C.value=!0,d[m.value].value=h}function S({target:h}){i!==!0&&(t!==null&&(clearTimeout(t),t=null),o.value=h.naturalHeight===0?.5:h.naturalWidth/h.naturalHeight,f(h,1))}function f(h,A){i===!0||A===1e3||(h.complete===!0?L(h):t=setTimeout(()=>{t=null,f(h,A+1)},50))}function L(h){i!==!0&&(m.value=m.value^1,d[m.value].value=null,C.value=!1,v.value=!1,a("load",h.currentSrc||h.src))}function j(h){t!==null&&(clearTimeout(t),t=null),C.value=!1,v.value=!0,d[m.value].value=null,d[m.value^1].value=b(),a("error",h)}function U(h){const A=d[h].value,Y={key:"img_"+h,class:M.value,style:T.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...A};return m.value===h?(Y.class+=" q-img__image--waiting",Object.assign(Y,{onLoad:S,onError:j})):Y.class+=" q-img__image--loaded",r("div",{class:"q-img__container absolute-full",key:"img"+h},r("img",Y))}function K(){return C.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},B(n[v.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[r(Pe,{color:e.spinnerColor,size:e.spinnerSize})])}return w(s()),te(()=>{i=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const h=[];return c.value!==null&&h.push(r("div",{key:"filler",style:c.value})),v.value!==!0&&(d[0].value!==null&&h.push(U(0)),d[1].value!==null&&h.push(U(1))),h.push(r(me,{name:"q-transition--fade"},K)),r("div",{class:p.value,style:_.value,role:"img","aria-label":e.alt},h)}}});const Je=e=>(he("data-v-4990f080"),e=e(),fe(),e),Ze=["href"],en=Je(()=>P("div",{class:"absolute-full text-subtitle2 flex flex-center click-button"}," Click to open ",-1)),nn={key:1},tn={class:"flex justify-end"},an={__name:"VideoLink",props:["video"],setup(e){const n=e,a=(o,c=8,t=!0)=>{const i=o.split(/\r?\n/);return i.forEach((d,m)=>{i[m]=d.slice(c)}),i.shift(),i.pop(),t?["```",...i,"```"].join(`
`):i.join(`
`)};return(o,c)=>{const t=ie("q-markdown");return q(),W(ee,{"switch-toggle-side":"","expand-separator":""},{header:E(()=>[g(De,{class:"q-pl-none"},{default:E(()=>[g(R,{stretch:"",flat:"",label:n.video.name,class:""},null,8,["label"]),g(We),g(R,{stretch:"",flat:"",label:`${n.video.price} USD`},null,8,["label"]),g(R,{class:"bg-purple",stretch:"",flat:"",label:`${n.video.promotion} USD`},null,8,["label"])]),_:1})]),default:E(()=>[g(pe,null,{default:E(()=>[g(ge,null,{default:E(()=>[P("a",{href:`https://www.youtube.com/watch?v=${n.video.url}`,target:"_blank"},[g(Xe,{src:`https://img.youtube.com/vi/${n.video.url}/sddefault.jpg`,ratio:16/9},{default:E(()=>[en]),_:1},8,["src"])],8,Ze),n.video.info?(q(),W(t,{key:0,src:`
:::info
${a(n.video.info,8,!1)}
:::
          `},null,8,["src"])):Z("",!0),n.video.code?(q(),D("div",nn,[g(ee,{label:"Example code",class:"bg-brown"},{default:E(()=>[g(t,{src:a(n.video.code),"no-line-numbers":""},null,8,["src"])]),_:1})])):Z("",!0),P("div",tn,[g(R,{outline:"",class:"text-h5",style:{color:"goldenrod","font-size":"1.3em",margin:"0"},label:"BUY",onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"})])]),_:1})]),_:1})]),_:1})}}};var on=ae(an,[["__scopeId","data-v-4990f080"]]);const rn={class:"title divider line double-razor text-h4"},ln={class:"flex justify-end price-button q-mt-md"},sn={__name:"BatchView",props:["batch"],setup(e){const n=e,a=(o,c=4,t=!1)=>{const i=o.split(/\r?\n/);return i.forEach((d,m)=>{i[m]=d.slice(c)}),i.shift(),i.pop(),t?["```",...i,"```"].join(`
`):i.join(`
`)};return(o,c)=>{const t=ie("q-markdown");return q(),D(H,null,[P("div",rn,Te(n.batch.title),1),n.batch.info?(q(),W(t,{key:0,src:a(n.batch.info)},null,8,["src"])):Z("",!0),g(Ge,null,{default:E(()=>[(q(!0),D(H,null,ve(n.batch.videos,i=>(q(),W(on,{key:i.name,video:i},null,8,["video"]))),128))]),_:1}),P("div",ln,[g(R,{padding:"5px 30px 5px 30px",class:"text-h5 q-mb-0",color:"red","no-caps":"",label:`All batch for: ${n.batch.price} USD`,onclick:"window.open(`https://paypal.me/zavdn`,'_blank')"},null,8,["label"])])],64)}}};var cn=ae(sn,[["__scopeId","data-v-c79e7b3e"]]);const be=e=>(he("data-v-25413e55"),e=e(),fe(),e),un={href:"https://paypal.me/zavdn",target:"_blank"},dn=be(()=>P("div",{class:"flex flex-center text-h3 promotion"},"Special promotion",-1)),mn=be(()=>P("div",{class:"flex flex-center text-h4 faq"},"FAQ",-1)),hn={__name:"IndexPage",setup(e){return(n,a)=>{const o=ie("q-markdown");return q(),D(H,null,[P("a",un,[g(ze,{"inline-actions":"",rounded:"",class:"text-white bg-red promotion-banner"},{default:E(()=>[dn,g(o,{class:"flex flex-center text-h4 promo-price",src:`**200 USD** you will get:
<div style=''>

* 75 **amazing** animations for **ManimCE v0.17.2**.

* **Easy Formula Transformation** tool.

* Library for **Easy Score Writing** (to be released in April)

* Library to make presentations easier (to be released in April)
</div>
        `})]),_:1})]),g(ee,{"switch-toggle-side":"","expand-separator":"",class:"bg-primary"},{header:E(()=>[mn]),default:E(()=>[g(pe,null,{default:E(()=>[g(ge,null,{default:E(()=>[g(o,{class:"faq-questions",src:`
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
They all need **ManimCE v0.17.2**, most use Cairo but some need OpenGL, especially the interactive animations.

**5. What does it mean for an animation to be configurable?**
It means that by changing just a few parameter values you can get a new animation. These are usually more expensive since they are animation generators, instead of being a static animation.

**6. What is the code license?**
The license is MIT, you are free to resell it or publish it on the internet, but please don't do it, and if you do at least give me the credit.

**7. How can I contact the author?**
You can contact me with Email, Telegram and Discord, just remember that my time zone is [CST](https://www.timeanddate.com/time/zones/cst), so it can take me up to 24 hours to respond.
- Email: **theoremofbeethoven@gmail.com**
- Telegram: **@TheoremOfBeethoven**
- Discord: **theoremofbeethoven#2781**
        `})]),_:1})]),_:1})]),_:1}),(q(!0),D(H,null,ve(Fe(Qe),c=>(q(),D("div",{key:c.title},[g(cn,{batch:c},null,8,["batch"])]))),128))],64)}}};var pn=ae(hn,[["__scopeId","data-v-25413e55"]]);export{pn as default};
