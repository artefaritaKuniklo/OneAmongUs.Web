var f=Object.defineProperty;var m=(t,e,r)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(m(t,typeof e!="symbol"?e+"":e,r),r);import{d as c,C as _,V as h,p as d,u as g,t as v,_ as b,o as w,c as $,a as u,z as x,b as y}from"./index-Wa24LLa0.js";var B=Object.defineProperty,C=Object.getOwnPropertyDescriptor,p=(t,e,r,n)=>{for(var o=n>1?void 0:n?C(e,r):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&B(e,r,o),o};const k={zh_hans:{telegram:"电报",twitter:"推特"},zh_hant:{telegram:"電報",twitter:"推特"},en:{telegram:"telegram",twitter:"twitter"}};let a=class extends h{constructor(){super(...arguments);s(this,"platform");s(this,"icon");s(this,"url");s(this,"text");s(this,"kvs",k[d()])}get computedUrl(){return this.url?this.url:g(window.location.href,`backup/${this.platform}`)}get computedText(){return this.text?this.text:v.backup.view.replace("{0}",this.kvs[this.platform]??` ${this.platform} `)}};p([c({default:"telegram"})],a.prototype,"platform",2);p([c()],a.prototype,"icon",2);p([c()],a.prototype,"url",2);p([c()],a.prototype,"text",2);a=p([_({components:{}})],a);const z=["href"],O={class:"text"};function P(t,e,r,n,o,l){return w(),$("a",{class:"backup button anim",href:t.computedUrl},[u("i",{class:x(["icon",t.icon?t.icon:`fab fa-${t.platform}`])},null,2),u("span",O,y(t.computedText),1)],8,z)}const j=b(a,[["render",P],["__scopeId","data-v-7a0091b1"]]);export{j as _};