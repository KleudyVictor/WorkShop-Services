import{k as b,Q as y,l as p}from"./use-quasar.5ebfd4c8.js";import{_ as k,H as x,r as l,v,I as P,A as t,y as r,D as s,K as Q,B as u,x as w,al as _,au as S,av as I}from"./index.73c2b6dc.js";import{Q as q}from"./QCard.4c5fc445.js";import{Q as V}from"./QChip.6094bc69.js";import{a as g}from"./index.2cf0d985.js";import"./use-dark.1f355b76.js";const A=x({setup(){const e=b(),o=l(""),d=l(""),h=l(!0),C=async()=>{try{o.value!==""&&d.value!==""?(await g.post("https://tuenvio.followvip.tech/user/",{email:o.value,password:d.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Cuenta Registrada",color:"positive",position:"top"}):e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(i){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(i.response.data.detail)})}},c=l(""),a=l(""),m=l(!1),f=l(!1);return{email:o,password:d,isPwd:h,email_verificacion:c,password_change:a,verificada:m,noverficada:f,validarCuenta:async()=>{try{if(c.value!==""){const i=await g.get(`https://tuenvio.followvip.tech/user/${c.value}`,{headers:{accept:"application/json"}});i.status===200&&(i.data.is_premium===!0?(m.value=!0,f.value=!1):(f.value=!0,m.value=!1))}else e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(i){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(i.response.data.detail)})}},actualizarContrase\u00F1a:async()=>{try{c.value!==""&&a.value!==""?(await g.put("https://tuenvio.followvip.tech/user/",{email:c.value,password:a.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Contrase\xF1a Actualizada",color:"positive",position:"top"}):e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(i){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(i.response.data.detail)})}},registrar:C}}}),n=e=>(S("data-v-16058282"),e=e(),I(),e),F={class:"q-pa-md fit row wrap justify-center items-start content-start"},N=n(()=>s("div",{class:"q-pa-md text-center"},[s("h5",null,"Registro de Cuentas")],-1)),R=n(()=>s("div",{class:"q-pa-md text-center text-green"},[s("h6",null,"Suerte en su compra de combos")],-1)),U={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},$={class:"text-center q-pa-md"},j=n(()=>s("div",null,null,-1)),B=n(()=>s("div",{class:"q-pa-md text-center"},[s("h5",null,"Verificar Cuenta")],-1)),z=n(()=>s("div",{class:"q-pa-md text-center text-blue"},[s("h6",null," Si tiene algun problema con su cuenta verifique su cuenta o cambie su contrase\xF1a ")],-1)),E={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},T=n(()=>s("h6",null,"CUENTA PREMIUM",-1)),M=n(()=>s("h6",null,"CUENTA SIN PAGAR",-1));function D(e,o,d,h,C,c){return v(),P("div",F,[t(q,{class:"q-ma-sm my-card"},{default:r(()=>[N,t(y),R,s("div",U,[t(p,{filled:"",label:"Correo",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.email=a),type:"email",rules:[a=>a&&a.length>0||"Campo obligatorio"]},null,8,["modelValue","rules"]),t(p,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=a=>e.password=a),label:"Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{append:r(()=>[t(Q,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=a=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])]),s("div",$,[t(u,{class:"q-ma-md",color:"negative",label:"Atras",to:"/"}),t(u,{class:"q-ma-md",color:"primary",label:"Registrar",onClick:e.registrar},null,8,["onClick"])]),j]),_:1}),t(q,{class:"q-ma-sm my-card"},{default:r(()=>[B,t(y),z,s("div",E,[t(p,{filled:"",label:"Correo a Verificar",modelValue:e.email_verificacion,"onUpdate:modelValue":o[3]||(o[3]=a=>e.email_verificacion=a),type:"email",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{after:r(()=>[t(u,{round:"",dense:"",flat:"",icon:"search",onClick:e.validarCuenta},null,8,["onClick"])]),_:1},8,["modelValue","rules"]),e.verificada?(v(),w(V,{key:0,class:"q-pa-lg glossy",square:"",color:"positive","text-color":"white",icon:"verified"},{default:r(()=>[T]),_:1})):_("",!0),e.noverficada?(v(),w(V,{key:1,class:"q-pa-lg glossy",square:"",color:"negative","text-color":"white",icon:"highlight_off"},{default:r(()=>[M]),_:1})):_("",!0),t(p,{modelValue:e.password_change,"onUpdate:modelValue":o[4]||(o[4]=a=>e.password_change=a),label:"Nueva Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{after:r(()=>[t(u,{round:"",dense:"",flat:"",icon:"send",onClick:e.actualizarContrase\u00F1a},null,8,["onClick"])]),_:1},8,["modelValue","type","rules"])])]),_:1})])}var Y=k(A,[["render",D],["__scopeId","data-v-16058282"]]);export{Y as default};
