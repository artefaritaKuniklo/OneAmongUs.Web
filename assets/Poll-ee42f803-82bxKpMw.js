import{k as v,W as f,Q as m,y}from"./index-ab8010ff-BbIPwi60.js";import{o as u,c as p,a as o,b as l,F as _,K as b,W as g,X as h,ak as x,al as k}from"./index-Chz_9_Kd.js";var F=Object.defineProperty,P=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,R=(e,t,a)=>(P(e,t+"",a),a),j=Object.defineProperty,q=Object.getOwnPropertyDescriptor,d=(e,t,a,n)=>{for(var s=n>1?void 0:n?q(t,a):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(s=(n?r(t,a,s):r(s))||s);return n&&s&&j(t,a,s),s};let c=class extends f{constructor(){super(...arguments),R(this,"f")}get max(){return Math.max(...this.f.options.map(e=>e.voter_count))}percent(e){return this.f.total_voter_count==0?"0%":(e.voter_count/this.f.total_voter_count*100).toFixed(0)+"%"}get subtitle(){let e=this.f.type=="REGULAR"?"Poll":"Quiz";return this.f.is_anonymous&&(e="Anonymous "+e),e}};d([m({required:!0})],c.prototype,"f",2);c=d([y({components:{}})],c);const w=e=>(x("data-v-c8a557d5"),e=e(),k(),e),z={id:"Poll"},I={class:"question"},O={class:"subtitle"},S={class:"text"},A=w(()=>o("span",{class:"f-grow1"},null,-1)),B={class:"percentage"},D={class:"tail"};function E(e,t,a,n,s,i){return u(),p("div",z,[o("div",I,l(e.f.question),1),o("div",O,l(e.subtitle),1),(u(!0),p(_,null,b(e.f.options,r=>(u(),p("div",{class:g(["options",{dominant:r.voter_count===e.max&&e.max!==0}])},[o("span",S,l(r.text),1),A,o("span",B,l(e.percent(r)),1),o("div",{class:"bar",style:h({width:e.percent(r)})},null,4)],2))),256)),o("div",D,"Final Results - "+l(e.f.total_voter_count)+" Responses",1)])}const L=v(c,[["render",E],["__scopeId","data-v-c8a557d5"]]);export{L as default};
