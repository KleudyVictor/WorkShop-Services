import{e as R,k,Q as A,l as I}from"./use-quasar.fae22810.js";import{c as $,r as b,N as E,O as j,o as N,h as O,d as D,g as K,W as Q,n as T,p as U,ar as H,_ as M,H as W,v as z,I as G,A as i,y as h,D as c,K as J,B,au as L,av as X}from"./index.2337cc2c.js";import{Q as Y}from"./QCard.b5e17419.js";import{a as Z}from"./index.2cf0d985.js";import"./use-dark.f4f390be.js";var ee=$({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:a,emit:l}){const m=K(),f=b(null);let r=0;const o=[];function C(t){const n=[],g=typeof t=="boolean"?t:e.noErrorFocus!==!0,V=++r,y=(u,s)=>{l("validation-"+(u===!0?"success":"error"),s)};for(let u=0;u<o.length;u++){const s=o[u],p=s.validate();if(typeof p.then=="function")n.push(p.then(d=>({valid:d,comp:s}),d=>({valid:!1,comp:s,err:d})));else if(p!==!0){if(e.greedy===!1)return y(!1,s),g===!0&&typeof s.focus=="function"&&s.focus(),Promise.resolve(!1);n.push({valid:!1,comp:s})}}return n.length===0?(y(!0),Promise.resolve(!0)):Promise.all(n).then(u=>{const s=u.filter(F=>F.valid!==!0);if(s.length===0)return V===r&&y(!0),!0;const{valid:p,comp:d,err:P}=s[0];return V===r&&(P!==void 0&&console.error(P),y(!1,d),g===!0&&p!==!0&&typeof d.focus=="function"&&d.focus()),!1})}function w(){r++,o.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function S(t){t!==void 0&&Q(t);const n=r+1;C().then(g=>{n===r&&g===!0&&(e.onSubmit!==void 0?l("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function x(t){t!==void 0&&Q(t),l("reset"),T(()=>{w(),e.autofocus===!0&&e.noResetFocus!==!0&&v()})}function v(){R(()=>{if(f.value===null)return;const t=f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),n=>n.tabIndex>-1);t!=null&&t.focus({preventScroll:!0})})}U(H,{bindComponent(t){o.push(t)},unbindComponent(t){const n=o.indexOf(t);n>-1&&o.splice(n,1)}});let q=!1;return E(()=>{q=!0}),j(()=>{q===!0&&e.autofocus===!0&&v()}),N(()=>{e.autofocus===!0&&v()}),Object.assign(m.proxy,{validate:C,resetValidation:w,submit:S,reset:x,focus:v,getValidationComponents:()=>o}),()=>O("form",{class:"q-form",ref:f,onSubmit:S,onReset:x},D(a.default))}});const te=W({setup(){const e=k(),a=b(""),l=b(""),m=b(!0);return{email:a,password:l,isPwd:m,registrar:async()=>{try{(await Z.post("https://tuenvio.followvip.tech/user/",{email:a.value,password:l.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Cuenta Registrada",color:"positive",position:"top"})}catch(r){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(r.response.data.detail)})}}}}}),_=e=>(L("data-v-1aa381bb"),e=e(),X(),e),oe={class:"q-pa-md fit row wrap justify-center items-start content-start"},se=_(()=>c("div",{class:"q-pa-md text-center"},[c("h5",null,"Registro de Cuentas")],-1)),ae=_(()=>c("div",{class:"q-pa-md text-center text-green"},[c("p",null,"Suerte en su compra de combos")],-1)),ne={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},re={class:"text-center q-pa-md"},ie=_(()=>c("div",null,null,-1));function le(e,a,l,m,f,r){return z(),G("div",oe,[i(Y,{class:"my-card"},{default:h(()=>[se,i(A),ae,i(ee,{onSubmit:e.onSubmit},{default:h(()=>[c("div",ne,[i(I,{filled:"",label:"Correo",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=o=>e.email=o),type:"email",rules:[o=>o&&o.length>0||"Campo obligatorio"]},null,8,["modelValue","rules"]),i(I,{modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=o=>e.password=o),label:"Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[o=>o&&o.length>0||"Campo obligatorio"]},{append:h(()=>[i(J,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[1]||(a[1]=o=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])]),c("div",re,[i(B,{class:"q-ma-md",color:"negative",type:"submit",label:"Atras",to:"/"}),i(B,{class:"q-ma-md",color:"primary",type:"submit",label:"Registrar",onClick:e.registrar},null,8,["onClick"])])]),_:1},8,["onSubmit"]),ie]),_:1})])}var me=M(te,[["render",le],["__scopeId","data-v-1aa381bb"]]);export{me as default};
