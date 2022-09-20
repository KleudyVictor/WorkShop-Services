import{e as I,k as R,Q as k,l as Q}from"./use-quasar.2bce0da6.js";import{c as A,r as h,K as $,L as E,o as j,h as D,d as K,g as N,S as B,n as O,p as T,aq as U,_ as H,al as L,v as M,am as z,A as d,y as b,D as c,H as G,B as J,au as W,av as X}from"./index.942e800a.js";import{Q as Y}from"./QCard.6da241ea.js";import{a as Z}from"./index.2cf0d985.js";import"./use-dark.cb5528ec.js";var ee=A({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:a,emit:i}){const m=N(),f=h(null);let r=0;const o=[];function _(t){const n=[],g=typeof t=="boolean"?t:e.noErrorFocus!==!0,V=++r,y=(l,s)=>{i("validation-"+(l===!0?"success":"error"),s)};for(let l=0;l<o.length;l++){const s=o[l],p=s.validate();if(typeof p.then=="function")n.push(p.then(u=>({valid:u,comp:s}),u=>({valid:!1,comp:s,err:u})));else if(p!==!0){if(e.greedy===!1)return y(!1,s),g===!0&&typeof s.focus=="function"&&s.focus(),Promise.resolve(!1);n.push({valid:!1,comp:s})}}return n.length===0?(y(!0),Promise.resolve(!0)):Promise.all(n).then(l=>{const s=l.filter(F=>F.valid!==!0);if(s.length===0)return V===r&&y(!0),!0;const{valid:p,comp:u,err:P}=s[0];return V===r&&(P!==void 0&&console.error(P),y(!1,u),g===!0&&p!==!0&&typeof u.focus=="function"&&u.focus()),!1})}function w(){r++,o.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function S(t){t!==void 0&&B(t);const n=r+1;_().then(g=>{n===r&&g===!0&&(e.onSubmit!==void 0?i("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function x(t){t!==void 0&&B(t),i("reset"),O(()=>{w(),e.autofocus===!0&&e.noResetFocus!==!0&&v()})}function v(){I(()=>{if(f.value===null)return;const t=f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),n=>n.tabIndex>-1);t!=null&&t.focus({preventScroll:!0})})}T(U,{bindComponent(t){o.push(t)},unbindComponent(t){const n=o.indexOf(t);n>-1&&o.splice(n,1)}});let q=!1;return $(()=>{q=!0}),E(()=>{q===!0&&e.autofocus===!0&&v()}),j(()=>{e.autofocus===!0&&v()}),Object.assign(m.proxy,{validate:_,resetValidation:w,submit:S,reset:x,focus:v,getValidationComponents:()=>o}),()=>D("form",{class:"q-form",ref:f,onSubmit:S,onReset:x},K(a.default))}});const te=L({setup(){const e=R(),a=h(""),i=h(""),m=h(!0);return{email:a,password:i,isPwd:m,registrar:async()=>{try{(await Z.post("https://tuenvio.followvip.tech/user/",{email:a.value,password:i.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Cuenta Registrada",color:"positive",position:"top"})}catch(r){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(r.response.data.detail)})}}}}}),C=e=>(W("data-v-29dcc5af"),e=e(),X(),e),oe={class:"q-pa-md fit row wrap justify-center items-start content-start"},se=C(()=>c("div",{class:"q-pa-md text-center"},[c("h5",null,"Registro de Cuentas")],-1)),ae=C(()=>c("div",{class:"q-pa-md text-center text-green"},[c("p",null,"Suerte en su compra de combos")],-1)),ne={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},re={class:"text-center q-pa-md"},ie=C(()=>c("div",null,null,-1));function le(e,a,i,m,f,r){return M(),z("div",oe,[d(Y,{class:"my-card"},{default:b(()=>[se,d(k),ae,d(ee,{onSubmit:e.onSubmit},{default:b(()=>[c("div",ne,[d(Q,{filled:"",label:"Correo",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=o=>e.email=o),type:"email",rules:[o=>o&&o.length>0||"Campo obligatorio"]},null,8,["modelValue","rules"]),d(Q,{modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=o=>e.password=o),label:"Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[o=>o&&o.length>0||"Campo obligatorio"]},{append:b(()=>[d(G,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[1]||(a[1]=o=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])]),c("div",re,[d(J,{color:"primary",type:"submit",label:"Registrar Cuenta",onClick:e.registrar},null,8,["onClick"])])]),_:1},8,["onSubmit"]),ie]),_:1})])}var me=H(te,[["render",le],["__scopeId","data-v-29dcc5af"]]);export{me as default};
