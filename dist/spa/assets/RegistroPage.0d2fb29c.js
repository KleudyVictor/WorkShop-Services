import{k as b,Q as C,l as p}from"./use-quasar.a30797ae.js";import{_ as k,H as x,r as l,v,I as P,A as s,y as r,D as t,K as Q,B as u,x as w,al as _,au as S,av as I}from"./index.31c9a17e.js";import{Q as q}from"./QCard.7b8c7c7a.js";import{Q as V}from"./QChip.f776057c.js";import{a as g}from"./index.2cf0d985.js";import"./use-dark.a99ae6d5.js";const $=x({setup(){const e=b(),o=l(""),c=l(""),h=l(!0),y=async()=>{try{o.value!==""&&c.value!==""?(await g.post("https://tuenvio.followvip.tech/user/",{email:o.value,password:c.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Cuenta Registrada",color:"positive",position:"top"}):e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(i){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(i.response.data.detail)})}},d=l(""),a=l(""),m=l(!1),f=l(!1);return{email:o,password:c,isPwd:h,email_verificacion:d,password_change:a,verificada:m,noverficada:f,validarCuenta:async()=>{try{if(d.value!==""){const i=await g.get(`https://tuenvio.followvip.tech/user/${d.value}`,{headers:{accept:"application/json"}});i.status===200&&(i.data.is_premium===!0?(m.value=!0,f.value=!1):(f.value=!0,m.value=!1))}else e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(i){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(i.response.data.detail)})}},actualizarContrase\u00F1a:async()=>{try{d.value!==""&&a.value!==""?(await g.put("https://tuenvio.followvip.tech/user/",{email:d.value,password:a.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Contrase\xF1a Actualizada",color:"positive",position:"top"}):e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(i){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(i.response.data.detail)})}},registrar:y}}}),n=e=>(S("data-v-5ebf5214"),e=e(),I(),e),A={class:"q-pa-md fit row wrap justify-center items-start content-start"},F=n(()=>t("div",{class:"q-pa-md text-center"},[t("h5",null,"Registro de Cuentas")],-1)),N=n(()=>t("div",{class:"q-pa-md text-center text-green"},[t("h6",null,"Suerte en su compra de combos")],-1)),R={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},U={class:"text-center q-pa-md"},j=n(()=>t("div",null,null,-1)),B=n(()=>t("div",{class:"q-pa-md text-center"},[t("h5",null,"Verificar Cuenta")],-1)),z=n(()=>t("div",{class:"q-pa-md text-center text-blue"},[t("h6",null," Si tiene algun problema con su cuenta verifique su cuenta o cambie su contrase\xF1a ")],-1)),E={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},T=n(()=>t("h6",null,"CUENTA PREMIUM",-1)),M=n(()=>t("h6",null,"CUENTA SIN PAGAR",-1));function D(e,o,c,h,y,d){return v(),P("div",A,[s(q,{class:"q-ma-sm my-card"},{default:r(()=>[F,s(C),N,t("div",R,[s(p,{filled:"",label:"Correo",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.email=a),type:"email",rules:[a=>a&&a.length>0||"Campo obligatorio"]},null,8,["modelValue","rules"]),s(p,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=a=>e.password=a),label:"Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{append:r(()=>[s(Q,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=a=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])]),t("div",U,[s(u,{class:"q-ma-md",color:"negative",label:"Atras",to:"/"}),s(u,{class:"q-ma-md",color:"primary",label:"Registrar",onClick:e.registrar},null,8,["onClick"])]),j]),_:1}),s(q,{class:"q-ma-sm my-card"},{default:r(()=>[B,s(C),z,t("div",E,[s(p,{filled:"",label:"Correo a Verificar",modelValue:e.email_verificacion,"onUpdate:modelValue":o[3]||(o[3]=a=>e.email_verificacion=a),type:"email",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{after:r(()=>[s(u,{round:"",dense:"",flat:"",icon:"search",onClick:e.validarCuenta},null,8,["onClick"])]),_:1},8,["modelValue","rules"]),e.verificada?(v(),w(V,{key:0,class:"q-pa-lg glossy",square:"",color:"positive","text-color":"white",icon:"verified"},{default:r(()=>[T]),_:1})):_("",!0),e.noverficada?(v(),w(V,{key:1,class:"q-pa-lg glossy",square:"",color:"negative","text-color":"white",icon:"highlight_off"},{default:r(()=>[M]),_:1})):_("",!0),s(p,{modelValue:e.password_change,"onUpdate:modelValue":o[5]||(o[5]=a=>e.password_change=a),label:"Nueva Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{after:r(()=>[s(u,{round:"",dense:"",flat:"",icon:"send",onClick:o[4]||(o[4]=a=>{e.actualizarContrase\u00F1a})})]),_:1},8,["modelValue","type","rules"])])]),_:1})])}var Y=k($,[["render",D],["__scopeId","data-v-5ebf5214"]]);export{Y as default};
