var Le=Object.defineProperty;var Ee=(e,t,o)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var d=(e,t,o)=>(Ee(e,typeof t!="symbol"?t+"":t,o),o);import{R as xe,W as je,X as Re,Y as Ve,Z as Ae,$ as Ne,a0 as He,F as I,a1 as ze,a2 as qe,a3 as Fe,a4 as Ue,a5 as We,a6 as Je,a7 as Ke,T as Ge,M as le,a8 as Xe,a9 as Qe,aa as Ye,ab as Ze,ac as et,ad as tt,ae as st,af as ot,ag as nt,ah as ce,ai as rt,q as _,n as f,c,a as l,aj as it,ak as at,al as lt,am as ct,an as dt,ao as ut,ap as pt,f as B,aq as ht,ar as mt,as as de,at as ft,au as _t,av as gt,aw as vt,ax as wt,ay as bt,az as $t,aA as yt,aB as Ct,aC as It,aD as St,aE as Bt,aF as Pt,aG as Mt,aH as Ot,aI as Dt,aJ as Tt,aK as kt,aL as Lt,aM as Et,aN as xt,aO as jt,aP as Rt,aQ as Vt,aR as At,aS as Nt,aT as Ht,aU as zt,aV as qt,aW as Ft,aX as Ut,aY as Wt,aZ as Jt,a_ as Kt,a$ as Gt,N as U,b0 as Xt,b1 as W,b2 as Qt,b3 as Yt,b4 as Zt,b5 as es,b6 as ts,b7 as ss,b8 as os,b9 as ns,ba as rs,bb as is,bc as as,bd as ls,be as cs,o as a,Q as ue,bf as ds,bg as us,P as pe,bh as ps,bi as hs,bj as ms,bk as fs,bl as _s,bm as gs,L as S,bn as ee,e as E,bo as vs,bp as ws,bq as bs,br as $s,bs as ys,bt as Cs,bu as Is,bv as Ss,bw as Bs,bx as Ps,by as Ms,bz as Os,bA as Ds,b as m,bB as Ts,bC as ks,bD as Ls,bE as Es,bF as xs,bG as js,bH as Rs,bI as Vs,bJ as As,bK as Ns,bL as Hs,bM as zs,bN as qs,bO as Fs,bP as Us,bQ as Ws,bR as Js,bS as Ks,bT as Gs,bU as Xs,v as he,p as Qs,bV as Ys,bW as Zs,bX as eo,bY as to,bZ as so,b_ as oo,b$ as no,w as te,c0 as ro,m as me,c1 as io,c2 as ao,O as lo,c3 as co,C as w,V as b,c4 as j,c5 as D,c6 as G,_ as $,d as g,c7 as uo,I as fe,c8 as po,t as h,c9 as ne,u as O,h as L,k as X,i as _e,B as ho,ca as mo,S as C,r as fo,H as ge,cb as R,j as _o,l as go,D as vo,cc as wo,g as re,cd as ie}from"./index-BQIHshrf.js";import{i as bo,h as $o,b as yo,E as Co,_ as ve,a as Io,c as So}from"./paper-plane-DYMf5phz.js";import{_ as se}from"./style-r151fL-B.js";import{$ as Bo,a as ae,J as Po}from"./index-ab8010ff-BnhhBYmy.js";import{p as Mo}from"./data-Csml3z32.js";import{_ as we}from"./SubmitPrompt-U0OvF-tG.js";/**
* vue v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Oo=()=>{},Do=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:xe,BaseTransitionPropsValidators:je,Comment:Re,DeprecationTypes:Ve,EffectScope:Ae,ErrorCodes:Ne,ErrorTypeStrings:He,Fragment:I,KeepAlive:ze,ReactiveEffect:qe,Static:Fe,Suspense:Ue,Teleport:We,Text:Je,TrackOpTypes:Ke,Transition:Ge,TransitionGroup:le,TriggerOpTypes:Xe,VueElement:Qe,assertNumber:Ye,callWithAsyncErrorHandling:Ze,callWithErrorHandling:et,camelize:tt,capitalize:st,cloneVNode:ot,compatUtils:nt,compile:Oo,computed:ce,createApp:rt,createBlock:_,createCommentVNode:f,createElementBlock:c,createElementVNode:l,createHydrationRenderer:it,createPropsRestProxy:at,createRenderer:lt,createSSRApp:ct,createSlots:dt,createStaticVNode:ut,createTextVNode:pt,createVNode:B,customRef:ht,defineAsyncComponent:mt,defineComponent:de,defineCustomElement:ft,defineEmits:_t,defineExpose:gt,defineModel:vt,defineOptions:wt,defineProps:bt,defineSSRCustomElement:$t,defineSlots:yt,devtools:Ct,effect:It,effectScope:St,getCurrentInstance:Bt,getCurrentScope:Pt,getTransitionRawChildren:Mt,guardReactiveProps:Ot,h:Dt,handleError:Tt,hasInjectionContext:kt,hydrate:Lt,initCustomFormatter:Et,initDirectivesForSSR:xt,inject:jt,isMemoSame:Rt,isProxy:Vt,isReactive:At,isReadonly:Nt,isRef:Ht,isRuntimeOnly:zt,isShallow:qt,isVNode:Ft,markRaw:Ut,mergeDefaults:Wt,mergeModels:Jt,mergeProps:Kt,nextTick:Gt,normalizeClass:U,normalizeProps:Xt,normalizeStyle:W,onActivated:Qt,onBeforeMount:Yt,onBeforeUnmount:Zt,onBeforeUpdate:es,onDeactivated:ts,onErrorCaptured:ss,onMounted:os,onRenderTracked:ns,onRenderTriggered:rs,onScopeDispose:is,onServerPrefetch:as,onUnmounted:ls,onUpdated:cs,openBlock:a,popScopeId:ue,provide:ds,proxyRefs:us,pushScopeId:pe,queuePostFlushCb:ps,reactive:hs,readonly:ms,ref:fs,registerRuntimeCompiler:_s,render:gs,renderList:S,renderSlot:ee,resolveComponent:E,resolveDirective:vs,resolveDynamicComponent:ws,resolveFilter:bs,resolveTransitionHooks:$s,setBlockTracking:ys,setDevtoolsHook:Cs,setTransitionHooks:Is,shallowReactive:Ss,shallowReadonly:Bs,shallowRef:Ps,ssrContextKey:Ms,ssrUtils:Os,stop:Ds,toDisplayString:m,toHandlerKey:Ts,toHandlers:ks,toRaw:Ls,toRef:Es,toRefs:xs,toValue:js,transformVNodeArgs:Rs,triggerRef:Vs,unref:As,useAttrs:Ns,useCssModule:Hs,useCssVars:zs,useModel:qs,useSSRContext:Fs,useSlots:Us,useTransitionState:Ws,vModelCheckbox:Js,vModelDynamic:Ks,vModelRadio:Gs,vModelSelect:Xs,vModelText:he,vShow:Qs,version:Ys,warn:Zs,watch:eo,watchEffect:to,watchPostEffect:so,watchSyncEffect:oo,withAsyncContext:no,withCtx:te,withDefaults:ro,withDirectives:me,withKeys:io,withMemo:ao,withModifiers:lo,withScopeId:co},Symbol.toStringTag,{value:"Module"}));var To=(e,t,o,n)=>{for(var s=t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=i(s)||s);return s};let Q=class extends b{constructor(){super(...arguments);d(this,"db","balloon-qwq");d(this,"sourceImg","https://one-among.us/favicon-large.png");d(this,"styles","")}created(){this.db="balloon-"+j(0,2147483648).toString(),this.sourceImg=bo()&&Math.random()<.65?"/img/balloons/balloon-p.png":`/img/balloons/balloon-${j(0,6)}.png`}mounted(){let t=Math.random()*(window.innerWidth-100);window.innerWidth>D.width&&(t=Math.random()*(D.width-100)+(window.innerWidth-D.width)/2),document.getElementById(this.db).style.left=t.toString()+"px",document.getElementById(this.db).style.bottom=j(D.min,D.max).toString()+"px",G(1e4,()=>{var o;(o=document.getElementById(this.db))==null||o.remove()})}mouseover(){document.getElementById(this.db).remove()}};Q=To([w({components:{}})],Q);const ko=["id"],Lo=["src"];function Eo(e,t,o,n,s,r){return a(),c("div",{class:"balloon fly-to-top",id:e.db,onMouseover:t[0]||(t[0]=i=>e.mouseover())},[l("img",{src:e.sourceImg,class:"balloonImg",style:W(e.styles)},null,12,Lo)],40,ko)}const be=$(Q,[["render",Eo]]);var xo=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,$e=(e,t,o,n)=>{for(var s=n>1?void 0:n?jo(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&xo(t,o,s),s};let V=class extends b{constructor(){super(...arguments);d(this,"data")}};$e([g({required:!0})],V.prototype,"data",2);V=$e([w({})],V);const Ro={class:"banner"},Vo={class:"img-container"},Ao=["src"],No={class:"content"},Ho=["textContent"],zo=["textContent"];function qo(e,t,o,n,s,r){return a(),c("div",Ro,[l("div",Vo,[l("img",{src:e.data.icon},null,8,Ao)]),l("div",No,[l("h3",{textContent:m(e.data.title)},null,8,Ho),l("p",{textContent:m(e.data.text)},null,8,zo)])])}const Fo=$(V,[["render",qo]]);var Uo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,ye=(e,t,o,n)=>{for(var s=n>1?void 0:n?Wo(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Uo(t,o,s),s};let A=class extends b{constructor(){super(...arguments);d(this,"platforms")}};ye([g({required:!0})],A.prototype,"platforms",2);A=ye([w({components:{ChannelBackupButton:se}})],A);const Jo={id:"BackupButtons"};function Ko(e,t,o,n,s,r){const i=se;return a(),c("div",Jo,[(a(!0),c(I,null,S(e.platforms,u=>(a(),_(i,{key:u,platform:u},null,8,["platform"]))),128))])}const Go=$(A,[["render",Ko],["__scopeId","data-v-a89a7b6f"]]);var Xo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Ce=(e,t,o,n)=>{for(var s=n>1?void 0:n?Qo(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Xo(t,o,s),s};let N=class extends b{constructor(){super(...arguments);d(this,"messages")}};Ce([g({required:!0})],N.prototype,"messages",2);N=Ce([w({})],N);const Yo={class:"cd"},Zo=["innerHTML"];function en(e,t,o,n,s,r){return a(),c("div",Yo,[(a(!0),c(I,null,S(e.messages,i=>(a(),c("p",{key:i[0]},[(a(!0),c(I,null,S(i,u=>(a(),c("span",{key:u,innerHTML:u},null,8,Zo))),128))]))),128))])}const tn=$(N,[["render",en]]);var sn=(e,t,o,n)=>{for(var s=t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=i(s)||s);return s};let Y=class extends b{};Y=sn([w({})],Y);const on={class:"column-view"};function nn(e,t,o,n,s,r){return a(),c("div",on,[ee(e.$slots,"default")])}const rn=$(Y,[["render",nn]]),an={viewBox:"0 0 640 512",width:"1.2em",height:"1.2em"},ln=l("path",{fill:"currentColor",d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l112.2-112.3c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0z"},null,-1),cn=[ln];function dn(e,t){return a(),c("svg",an,[...cn])}const un={name:"fa6-solid-link",render:dn};var pn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,Ie=(e,t,o,n)=>{for(var s=n>1?void 0:n?hn(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&pn(t,o,s),s};let H=class extends b{constructor(){super(...arguments);d(this,"icon")}getIcon(t){if(t=t.toLowerCase(),uo.includes(t))return`fab fa-${t}`;if(t.startsWith("custom-icon:"))return t.replace("custom-icon:","")}getIconifyIcon(t){if(t.startsWith("iconify:"))return t.replace("iconify:","")}};Ie([g()],H.prototype,"icon",2);H=Ie([w({components:{Icon:fe}})],H);function mn(e,t,o,n,s,r){const i=E("Icon"),u=un;return e.getIcon(e.icon)?(a(),c("i",{key:0,class:U(e.getIcon(e.icon))},null,2)):e.getIconifyIcon(e.icon)?(a(),_(i,{key:1,icon:e.getIconifyIcon(e.icon)},null,8,["icon"])):(a(),_(u,{key:2}))}const Se=$(H,[["render",mn]]);var fn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,Be=(e,t,o,n)=>{for(var s=n>1?void 0:n?_n(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&fn(t,o,s),s};let z=class extends b{constructor(){super(...arguments);d(this,"hover");d(this,"blur","");d(this,"isblur",!1)}mounted(){this.blur="filter: blur(5px);",this.isblur=!0}click(){this.hover||(this.isblur?this.blur="filter: none;":this.blur="filter: blur(5px);",this.isblur=!this.isblur)}hovering(){this.hover&&this.isblur&&(this.isblur=!this.isblur,this.blur="filter: none;")}leave(){this.hover&&(this.isblur||(this.isblur=!this.isblur,this.blur="filter: blur(5px);"))}};Be([g({required:!1})],z.prototype,"hover",2);z=Be([w({})],z);function gn(e,t,o,n,s,r){return a(),c("div",{class:"blur",style:W(e.blur),onClick:t[0]||(t[0]=i=>e.click()),onMouseover:t[1]||(t[1]=i=>e.hovering()),onMouseleave:t[2]||(t[2]=i=>e.leave())},[ee(e.$slots,"default")],36)}const vn=$(z,[["render",gn]]);var wn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,Pe=(e,t,o,n)=>{for(var s=n>1?void 0:n?bn(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&wn(t,o,s),s};let q=class extends b{constructor(){super(...arguments);d(this,"viewerIndex",null);d(this,"photos");d(this,"photoList");d(this,"rotations",[])}created(){this.photoList=(typeof this.photos=="string"?JSON.parse(this.photos):this.photos).map(o=>({url:o})),this.rotations=this.photoList.map(()=>po(-15,15))}};Pe([g()],q.prototype,"photos",2);q=Pe([w({components:{ImageViewer:Bo}})],q);const $n={class:"ps-wrapper"},yn={id:"PhotoScroll"},Cn=["src"];function In(e,t,o,n,s,r){const i=E("ImageViewer");return a(),c("div",$n,[l("div",yn,[(a(!0),c(I,null,S(e.photoList,(u,y)=>(a(),c("img",{key:y,src:u.url,alt:"",class:"stacked photo-frame-5",draggable:"false",style:W({transform:`translate(-50%, -50%) translateX(80px) rotate(${e.rotations[y]}deg)`,"z-index":e.photoList.length-y+1,"min-width":"150px","object-fit":"cover"}),onClick:t[0]||(t[0]=()=>e.viewerIndex=0)},null,12,Cn))),128)),B(i,{index:e.viewerIndex,"onUpdate:index":t[1]||(t[1]=u=>e.viewerIndex=u),imgs:e.photoList},null,8,["index","imgs"])])])}const Sn=$(q,[["render",In]]),Me=de({name:"MDX",props:{code:{type:String,required:!0},margins:{type:Boolean,required:!1}},setup(e){const t=ce(()=>{if(!e.code)return null;const o=new Function("exports","Vue",e.code),n={};return o(n,Do),n.default});return()=>{var o;return B("div",{class:"markdown-content",style:e.margins?{margin:"10px min(4vw, 40px)"}:{}},[(o=t.value)==null?void 0:o.call(t,{components:{PhotoScroll:Sn,ChannelBackupButton:se,CapDownQuote:tn,ColumnView:rn,BackupButtons:Go,DynamicIcon:Se,Banner:Fo,BlurBlock:vn}})])}}});var Bn=(e,t,o,n)=>{for(var s=t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=i(s)||s);return s};let Z=class extends b{};Z=Bn([w({components:{}})],Z);const Pn={xmlns:"http://www.w3.org/2000/svg",class:"switching",viewBox:"0 0 24 24"},Mn=l("g",{fill:"none",stroke:"rgba(166, 134, 89, 0.84)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[l("path",{d:"m18 2l3 3l-3 3M6 22l-3-3l3-3"}),l("path",{d:"M21 5H10a7 7 0 0 0-7 7m0 7h11a7 7 0 0 0 7-7"})],-1),On=[Mn];function Dn(e,t,o,n,s,r){return a(),c("svg",Pn,On)}const Tn=$(Z,[["render",Dn]]),kn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Ln=l("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"},null,-1),En=l("path",{fill:"currentColor",d:"m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"},null,-1),xn=[Ln,En];function jn(e,t){return a(),c("svg",kn,[...xn])}const Rn={name:"ep-edit",render:jn},Vn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},An=l("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"},null,-1),Nn=[An];function Hn(e,t){return a(),c("svg",Vn,[...Nn])}const zn={name:"ep-loading",render:Hn},qn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Fn=l("path",{fill:"currentColor",d:"M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696m105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744m-54.464-36.032a322 322 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"},null,-1),Un=[Fn];function Wn(e,t){return a(),c("svg",qn,[...Un])}const Jn={name:"ep-lollipop",render:Wn},Kn={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Gn=l("path",{fill:"currentColor",d:"M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"},null,-1),Xn=[Gn];function Qn(e,t){return a(),c("svg",Kn,[...Xn])}const Yn={name:"ep-check",render:Qn};var Zn=Object.defineProperty,er=Object.getOwnPropertyDescriptor,J=(e,t,o,n)=>{for(var s=n>1?void 0:n?er(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Zn(t,o,s),s};let T=class extends b{constructor(){super(...arguments);d(this,"userid");d(this,"p");d(this,"screenshotMode");d(this,"flowers",0);d(this,"flowersGiven",!1);d(this,"isBirthday",!1);d(this,"canSwitch",!1);d(this,"target",".");d(this,"sourceTarget",".");d(this,"inWarning",!1);d(this,"loading",new Set);d(this,"t",h)}created(){this.flowersGiven=localStorage.getItem(`last_flower_given@${this.userid}`)===ne(),fetch(O(L,"birthday-list.json")).then(t=>t.json()).then(t=>{t=t;for(const o of t)if(o[0]==this.userid){const n=new Date(o[1]),s=new Date;s.getDate()==n.getDate()&&s.getMonth()==n.getMonth()&&(this.isBirthday=!0)}}),fetch(X+`/flowers/get?id=${this.userid}`).then(t=>t.text()).then(t=>{_e(`Flowers: ${t}`),this.flowers=parseInt(t)}),fetch(O(L,"switch-pair.json")).then(t=>t.json()).then(t=>{const o=t;for(const n of o)if(n[0]==this.userid){this.canSwitch=!0,this.target=`/profile/${n[1]}`,this.sourceTarget=this.target;const s=ho(O(L,"trigger-list.json"));JSON.parse(s).includes(n[1])&&(this.target=null,this.inWarning=!0)}})}flower(){this.flowersGiven||this.loading.has("flower")||(this.loading.add("flower"),fetch(X+`/flowers/give?id=${this.userid}`).then(()=>{this.flowers+=1,this.flowersGiven=!0,localStorage.setItem(`last_flower_given@${this.userid}`,ne())}).finally(()=>this.loading.delete("flower")),$o(this.p.name),this.isBirthday&&yo(this.p.name))}get flowerText(){return mo(this.flowers)}switchWarn(){this.inWarning&&C.fire({title:this.t.switch_warning.title,text:this.t.switch_warning.text,icon:"warning",showCancelButton:!1,showCloseButton:!1,showConfirmButton:!0,allowOutsideClick(){return!1},timer:3e5,timerProgressBar:!0,iconColor:"#d20f39",allowEscapeKey(){return!1},allowEnterKey(){return!1},customClass:"view-limit-alert"}).then(t=>{t.isConfirmed&&(this.target=this.sourceTarget,this.inWarning=!1)})}edit(){C.fire({title:h.nav_what_to_edit,icon:"question",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:h.nav_profile_card,cancelButtonText:h.nav_introduction}).then(t=>{t.isConfirmed?fo.push(`/edit-info/${this.p.id}`):t.dismiss===C.DismissReason.cancel&&open(`https://github.com/one-among-us/data/tree/main/people/${this.userid}/page.md`)})}get profileUrl(){return ge(this.p.profileUrl,this.userid)}};J([g({required:!0})],T.prototype,"userid",2);J([g({required:!0})],T.prototype,"p",2);J([g({default:!1})],T.prototype,"screenshotMode",2);T=J([w({components:{Icon:fe}})],T);const tr="/favicon-large.png",x=e=>(pe("data-v-971291ac"),e=e(),ue(),e),sr={key:0,id:"info",class:"font-custom fbox-h"},or={id:"left",class:"fbox-v"},nr=["src"],rr=x(()=>l("div",{class:"spacer"},null,-1)),ir={key:0,id:"buttons"},ar={class:"button-container"},lr={class:"text-under-button"},cr={class:"button-container edit"},dr=x(()=>l("div",{class:"text-under-button"},"Edit",-1)),ur=x(()=>l("div",{class:"spacer-bottom f-grow1"},null,-1)),pr={id:"right"},hr={id:"name-box"},mr={id:"name-text"},fr={id:"id"},_r=x(()=>l("div",{id:"hr"},null,-1)),gr={id:"fields",class:"f-grow1"},vr={class:"key"},wr={class:"value"},br={key:0,id:"websites"},$r={id:"websites-text"},yr={id:"websites-container"},Cr=["href"],Ir=["href"],Sr=x(()=>l("img",{class:"watermark",draggable:"false",src:tr,alt:""},null,-1));function Br(e,t,o,n,s,r){var oe;const i=Yn,u=E("Icon"),y=Jn,p=zn,P=Co,M=Rn,Te=Se,ke=Tn;return e.p?(a(),c("div",sr,[l("div",or,[l("img",{src:e.profileUrl,draggable:"false",alt:"profile"},null,8,nr),rr,e.screenshotMode?f("",!0):(a(),c("div",ir,[l("div",ar,[B(P,{content:"献花","show-after":1e3,disabled:e.flowersGiven||e.loading.has("flower")},{default:te(()=>[l("div",{class:U(["button anim fbox-vcenter",e.flowersGiven||e.loading.has("flower")?"disabled":""]),onClick:t[0]||(t[0]=(...v)=>e.flower&&e.flower(...v))},[e.flowersGiven?(a(),_(i,{key:0})):e.isBirthday&&!e.loading.has("flower")?(a(),_(u,{key:1,class:"iconR",icon:"line-md:cake"})):e.loading.has("flower")?(a(),_(p,{key:3})):(a(),_(y,{key:2}))],2)]),_:1},8,["disabled"]),l("div",lr,m(e.flowerText),1)]),l("div",cr,[l("div",{class:"button anim fbox-vcenter",onClick:t[1]||(t[1]=(...v)=>e.edit&&e.edit(...v))},[B(M)]),dr])])),ur]),l("div",pr,[l("div",hr,[l("span",mr,m(e.p.name),1),l("span",fr,"@"+m(e.p.id),1)]),_r,l("ul",gr,[(a(!0),c(I,null,S(e.p.info,v=>(a(),c("li",{key:v[0]},[l("span",vr,m(v[0])+"：",1),l("span",wr,m(v[1]),1)]))),128))]),(oe=e.p.websites)!=null&&oe.length?(a(),c("div",br,[l("span",$r,m(e.t.nav_website),1),l("span",yr,[(a(!0),c(I,null,S(e.p.websites,v=>(a(),c("a",{key:v[0],href:v[1],target:"_blank"},[B(Te,{icon:v[0]},null,8,["icon"])],8,Cr))),128))])])):f("",!0)]),e.canSwitch?(a(),c("a",{key:0,class:"switchButton",href:e.target,onClick:t[2]||(t[2]=v=>e.switchWarn()),draggable:"false"},[B(ke)],8,Ir)):f("",!0),Sr])):f("",!0)}const Oe=$(T,[["render",Br],["__scopeId","data-v-971291ac"]]);var Pr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,De=(e,t,o,n)=>{for(var s=n>1?void 0:n?Mr(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Pr(t,o,s),s};let F=class extends b{constructor(){super(...arguments);d(this,"p");d(this,"textInputCache","");d(this,"textInputKey");d(this,"showCaptchaPrompt",!1);d(this,"comments",[]);d(this,"t",h);d(this,"trim",R)}getComments(){const o=this.p.comments.map(s=>({...s,anonymous:s.submitter==="Anonymous",content:ae(s.content.replaceAll(`
`,"<br />")),replies:s.replies?s.replies.map(r=>({...r,content:ae(r.content.replaceAll(`
`,"<br />"))})):[]})),n=JSON.parse(localStorage.getItem("myComments"));if(!n)return o;if(this.p.id in n&&n[this.p.id]!=null)for(const s of n[this.p.id]){let r=!0;for(const i of o)if(s.content.replaceAll("||","").replaceAll(`
`,"").replaceAll("<br />","").replaceAll(" ","")==i.content.replaceAll('<span class="spoiler"><span>',"").replaceAll("</span></span>","").replaceAll("<br />","").replaceAll(" ","")){r=!1;break}r&&o.push(s)}return o}btnSend(){this.showCaptchaPrompt=!0}submitRequest(o){this.showCaptchaPrompt=!1;const n={id:this.p.id,content:this.textInput,...o};_e(n),C.fire({title:h.nav_comment_submit,showConfirmButton:!1,icon:null,didOpen:()=>{C.showLoading(null),_o(X+"/comment/add",{method:"POST",params:n}).then(()=>{C.fire({title:h.nav_success,text:h.nav_success_text_reply,icon:"success",timer:5e3,timerProgressBar:!0,showConfirmButton:!0,confirmButtonText:h.nav_ok_1,showCloseButton:!0}),this.comments.push({content:this.textInput.replaceAll(`
`,"<br />"),replies:[],submitter:"You",id:0});let s=JSON.parse(localStorage.getItem("myComments"));s||(s={}),!(this.p.id in s)||s[this.p.id]==null?s[this.p.id]=[{content:this.textInput.replaceAll(`
`,"<br />"),replies:[],submitter:"You",id:0}]:s[this.p.id].push({content:this.textInput.replaceAll(`
`,"<br />"),replies:[],submitter:"You",id:0}),localStorage.setItem("myComments",JSON.stringify(s)),this.textInput="",this.resizeInput()}).catch(s=>{go(s),C.fire({title:h.nav_failed,text:h.nav_fail_reason+s.message,icon:"error",timer:5e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1}),this.resizeInput()})}})}created(){this.textInputKey=`draft-${this.p.id}`,this.textInputCache=localStorage.getItem(this.textInputKey)??"",this.comments=this.getComments(),localStorage.getItem("myComments")||localStorage.setItem("myComments","{}")}get textInput(){return R(this.textInputCache.trim(),`
`)}set textInput(o){this.textInputCache=o,localStorage.setItem(this.textInputKey,o)}mounted(){this.resizeInput(),Po()}resizeInput(){const o=this.$refs.input;o&&(o.style.height="auto",o.style.height=`${o.scrollHeight+18}px`)}};De([g()],F.prototype,"p",2);F=De([w({components:{MarkdownTooltip:ve,SubmitPrompt:we}})],F);const Or={id:"ProfileComments",class:"markdown-content"},Dr=["innerHTML"],Tr={key:0,class:"from anonymous"},kr={key:1,class:"from"},Lr={key:2,class:"replies"},Er={class:"reply-title"},xr=["innerHTML"],jr={class:"from"},Rr={key:1,id:"add-comment"},Vr=["placeholder"],Ar={key:0,id:"send-comment-btn"},Nr={class:"char-count unselectable"};function Hr(e,t,o,n,s,r){const i=Io,u=ve,y=we;return a(),c("div",Or,[l("h1",null,m(e.p.id=="tdor"?"For Being Out And Proud——2024年跨性别现身日晚会 来信集合":e.t.nav_comments),1),e.p.comments.length>0?(a(),_(le,{key:0,tag:"div",name:"comment-list",id:"comments"},{default:te(()=>[(a(!0),c(I,null,S(e.comments,p=>(a(),c("div",{class:"comment",key:p.id},[l("span",{class:"content",innerHTML:p.content},null,8,Dr),p.anonymous?(a(),c("span",Tr,m(e.t.nav_anonymous),1)):(a(),c("span",kr,"——"+m(p.submitter),1)),p.replies.length?(a(),c("div",Lr,[l("div",Er,m(e.t.nav_comment_in_reply_to)+" @"+m(p.submitter),1),(a(!0),c(I,null,S(p.replies,(P,M)=>(a(),c("div",{class:"reply",key:M},[l("span",{class:"content",innerHTML:P.content},null,8,xr),l("span",jr,"——"+m(P.submitter),1)]))),128))])):f("",!0)]))),128))]),_:1})):f("",!0),e.p.id!="tdor"?(a(),c("div",Rr,[me(l("textarea",{id:"comment-textarea","onUpdate:modelValue":t[0]||(t[0]=p=>e.textInput=p),placeholder:e.t.nav_comment_placeholder,onInput:t[1]||(t[1]=(...p)=>e.resizeInput&&e.resizeInput(...p)),ref:"input"},null,40,Vr),[[he,e.textInput]]),e.textInput.trim().length>0?(a(),c("div",Ar,[l("span",Nr,m(e.trim(e.textInput.trim(),`
`).length)+" "+m(e.t.nav_comment_status),1),B(i,{class:"icon",onClick:e.btnSend},null,8,["onClick"])])):f("",!0),B(u,{"text-area-id":"comment-textarea"})])):f("",!0),e.showCaptchaPrompt?(a(),_(y,{key:2,onSubmit:e.submitRequest,onClose:t[2]||(t[2]=p=>e.showCaptchaPrompt=!1)},null,8,["onSubmit"])):f("",!0)])}const zr=$(F,[["render",Hr]]);var qr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,K=(e,t,o,n)=>{for(var s=n>1?void 0:n?Fr(t,o):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&qr(t,o,s),s};let k=class extends b{constructor(){super(...arguments);d(this,"userid");d(this,"screenshotMode");d(this,"lang");d(this,"p",null);d(this,"compiledMdxCode","");d(this,"isBirthday",[])}get pid(){return this.userid=="tdov"?"tdor":this.userid}created(){const o=vo(this.pid);localStorage.setItem("showBtn","1"),this.lang&&(wo(this.lang),localStorage.setItem("showBtn","")),re(O(o,"info.json")).then(n=>n.text()).then(n=>{this.p=Mo(n),this.pid=="tdor"&&(this.p.id="tdor")}),fetch(O(L,"birthday-list.json")).then(n=>n.json()).then(n=>{n=n;for(const s of n)if(s[0]==this.userid){const r=new Date(s[1]),i=new Date;if(i.getDate()==r.getDate()&&i.getMonth()==r.getMonth())for(let u=0;u<D.count;++u)this.isBirthday.push(j(0,2147483648))}}),this.pid!="tdor"&&(this.screenshotMode||re(O(o,"page.json")).then(n=>n.json()).then(n=>this.compiledMdxCode=ge(n,this.pid)),this.checkViewLimit())}checkViewLimit(){if(this.screenshotMode)return;const o=ie,n=new Date,[s,r]=[localStorage.getItem("view_limit_time"),localStorage.getItem("view_limit_entries")],[i,u]=[new Date(s),JSON.parse(r??"[]")],y=(n.getTime()-i.getTime())/6e4;if(!s||!r||y>o.cooldown){localStorage.setItem("view_limit_time",new Date().toUTCString()),localStorage.setItem("view_limit_entries",JSON.stringify([this.userid]));return}if(u.includes(this.userid)||(u.push(this.userid),localStorage.setItem("view_limit_entries",JSON.stringify(u)),u.length==o.errorLimit&&localStorage.setItem("view_limit_time",new Date().toUTCString())),u.length>=o.warningLimit&&(console.log(`View limit reached ${o.warningLimit}`),C.fire({title:h.view_limit.title,text:h.view_limit.warning,icon:"warning",timer:3e4,timerProgressBar:!0})),u.length>=o.errorLimit){console.log(`View limit reached ${o.errorLimit}`),C.fire({title:h.view_limit.title,text:h.view_limit.error,icon:"error",showConfirmButton:!1,allowOutsideClick(){return!1},customClass:"view-limit-alert",allowEscapeKey(){return!1},allowEnterKey(){return!1}});const p=new MutationObserver(P=>{P.forEach(M=>{M.removedNodes.length!=0&&M.removedNodes[0].classList&&M.removedNodes[0].classList.contains("swal2-container")&&(p.disconnect(),setTimeout(()=>{C.fire({title:h.view_limit.dom_removed_title,text:h.view_limit.dom_removed,icon:"info"}),localStorage.removeItem("view_limit_time")},100))})});return p.observe(document.body,{childList:!0,subtree:!0}),!0}}updated(){G(250,()=>{So(this.userid)}),G(1e3,()=>{fetch(O(L,"trigger-list.json")).then(o=>o.json()).then(o=>{if(o.includes(R(window.location.pathname.replace("/profile",""),"/"))){localStorage.getItem("view_limit_entries")||localStorage.setItem("view_limit_entries","[]");const n=JSON.parse(localStorage.getItem("view_limit_entries"));for(n.length<20&&C.fire({title:h.view_limit.title,text:h.view_limit.warning,icon:"warning",timer:3e4,timerProgressBar:!0});n.length<ie.errorLimit;)n.push(R(window.location.pathname.replace("/profile",""),"/"));localStorage.setItem("view_limit_entries",JSON.stringify(n))}})})}};K([g({required:!0})],k.prototype,"userid",2);K([g({default:!1})],k.prototype,"screenshotMode",2);K([g({default:""})],k.prototype,"lang",2);k=K([w({components:{ProfileCard:Oe,ProfileComments:zr,MDX:Me,Balloon:be}})],k);function Ur(e,t,o,n,s,r){const i=Oe,u=Me,y=be,p=E("ProfileComments");return a(),c("div",null,[e.p?(a(),c("div",{key:0,class:U(["profile-page",{screenshot:e.screenshotMode}])},[e.pid!="tdor"?(a(),_(i,{key:0,class:"profile-card",userid:e.pid,p:e.p,"screenshot-mode":e.screenshotMode},null,8,["userid","p","screenshot-mode"])):f("",!0),e.pid!="tdor"?(a(),_(u,{key:1,class:"content",code:e.compiledMdxCode},null,8,["code"])):f("",!0),(a(!0),c(I,null,S(e.isBirthday,P=>(a(),_(y,{key:P}))),128)),e.p.comments&&!e.screenshotMode?(a(),_(p,{key:2,class:"comments",p:e.p},null,8,["p"])):f("",!0)],2)):f("",!0)])}const ai=$(k,[["render",Ur],["__scopeId","data-v-fe0c1e81"]]);export{ai as default};
