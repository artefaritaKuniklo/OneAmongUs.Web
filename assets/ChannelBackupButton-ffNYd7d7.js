var f=Object.defineProperty;var m=(t,e,o)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var n=(t,e,o)=>(m(t,typeof e!="symbol"?e+"":e,o),o);import{bU as c,C as _,V as h,u as d,_ as b,o as v,c as $,a as u,y as g,b as x}from"./index-BgZxvYO3.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,p=(t,e,o,a)=>{for(var r=a>1?void 0:a?w(e,o):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(r=(a?i(e,o,r):i(r))||r);return a&&r&&y(e,o,r),r};const B={telegram:"电报",twitter:"推特"};let s=class extends h{constructor(){super(...arguments);n(this,"platform");n(this,"icon");n(this,"url");n(this,"text")}get computedUrl(){return this.url?this.url:d(window.location.href,`backup/${this.platform}`)}get computedText(){return this.text?this.text:"查看"+(B[this.platform]??` ${this.platform} `)+"备份"}};p([c({default:"telegram"})],s.prototype,"platform",2);p([c()],s.prototype,"icon",2);p([c()],s.prototype,"url",2);p([c()],s.prototype,"text",2);s=p([_({components:{}})],s);const C=["href"],O={class:"text"};function P(t,e,o,a,r,l){return v(),$("a",{class:"backup button anim",href:t.computedUrl},[u("i",{class:g(["icon",t.icon?t.icon:`fab fa-${t.platform}`])},null,2),u("span",O,x(t.computedText),1)],8,C)}const V=b(s,[["render",P],["__scopeId","data-v-7447510c"]]);export{V as _};
