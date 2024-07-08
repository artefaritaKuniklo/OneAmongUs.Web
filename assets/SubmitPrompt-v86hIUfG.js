var T=Object.defineProperty;var B=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var h=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);import{aq as q,bi as F,b6 as L,o as f,c as g,cg as R,_ as C,a as s,aY as z,b as p,M as D,C as E,V as P,t as A,an as k,f as _}from"./index-CgKJcygS.js";const I=q({__name:"RecaptchaV2",props:{size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"light"},hl:{type:String,required:!1},loadingTimeout:{type:Number,required:!1,default:0}},emits:{verify:e=>e!=null&&e!="",error:e=>e,expire:null,fail:null},setup(e,{expose:t,emit:n}){const c=F(null);let a=null;const o=e,i=n;t({execute:function(){window.grecaptcha.execute(a)},reset:function(){window.grecaptcha.reset(a)}});function u(){a=window.grecaptcha.render(c.value,{sitekey:R,theme:o.theme,size:o.size,callback:r=>{window.grecaptcha.reset(a),i("verify",r)},"expired-callback":()=>{window.grecaptcha.reset(a),i("expire")},"error-callback":()=>{window.grecaptcha.reset(a),i("fail")}})}return L(()=>{window.grecaptcha==null?new Promise((r,l)=>{let v,m=!1;window.recaptchaReady=function(){m||(m=!0,clearTimeout(v),r())};const b="recaptcha-script",w=x=>()=>{var $;m||(m=!0,clearTimeout(v),($=document.getElementById(b))==null||$.remove(),l(x))};o.loadingTimeout>0&&(v=setTimeout(w("timeout"),o.loadingTimeout));const V=window.document,d=V.createElement("script");d.id=b,d.onerror=w("error"),d.onabort=w("aborted"),d.setAttribute("src",`https://www.recaptcha.net/recaptcha/api.js?onload=recaptchaReady&render=explicit&hl=${o.hl}&_=${+new Date}`),V.head.appendChild(d)}).then(()=>{u()}).catch(r=>{i("error",r.toString())}):u()}),(r,l)=>(f(),g("div",{ref_key:"recaptchaDiv",ref:c},null,512))}}),H={name:"HyInput",props:{modelValue:String,placeholder:String},emits:["update:modelValue","input"],methods:{passInput(e){this.$emit("update:modelValue",e),this.$emit("input",e)}}},N=["value"],M={class:"hy-input-placeholder"},U={for:"hy-input-inner"};function j(e,t,n,c,a,o){return f(),g("div",{class:D(["hy-input",n.modelValue?"has-text":""])},[s("input",z({id:"hy-input-inner",class:"hy-input-inner",value:n.modelValue},e.$attrs,{autocomplete:"off",onInput:t[0]||(t[0]=i=>o.passInput(i.target.value))}),null,16,N),s("div",M,[s("label",U,p(n.placeholder),1)])],2)}const S=C(H,[["render",j],["__scopeId","data-v-1b87ac40"]]),K={viewBox:"0 0 384 512",width:"1.2em",height:"1.2em"},X=s("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"},null,-1),Y=[X];function G(e,t){return f(),g("svg",K,[...Y])}const J={name:"fa6-solid-xmark",render:G};var O=(e,t,n,c)=>{for(var a=t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=i(a)||a);return a};let y=class extends P{constructor(){super(...arguments);h(this,"name","");h(this,"email","");h(this,"t",A)}submit(t){this.$emit("submit",{captcha:t,name:this.name,email:this.email}),this.$emit("close")}};y=O([E({components:{RecaptchaV2:I,HyInput:S}})],y);const Q={id:"SubmitPrompt",class:"fbox-vcenter"},W={id:"prompt"},Z={id:"header"},ee={class:"text"},te={class:"sub"};function ne(e,t,n,c,a,o){const i=J,u=S,r=I;return f(),g("div",Q,[s("div",W,[s("div",Z,[k(p(e.t.nav_will_submit)+" ",1),_(i,{class:"clickable",onClick:t[0]||(t[0]=()=>e.$emit("close"))})]),s("div",ee,[k(p(e.t.nav_req_name)+" ",1),s("div",te,p(e.t.nav_req_anonymous),1)]),_(u,{class:"input first",placeholder:"名字",modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.name=l)},null,8,["modelValue"]),_(u,{class:"input",placeholder:"邮箱（可选）",modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=l=>e.email=l)},null,8,["modelValue"]),s("div",null,p(e.t.nav_reCAPTCHA),1),_(r,{onVerify:e.submit},null,8,["onVerify"])])])}const ie=C(y,[["render",ne],["__scopeId","data-v-e0e5277d"]]);export{ie as _};
