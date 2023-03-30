import{Q as w}from"./QSeparator.635d9b4b.js";import{k as b,l as u,Q as _}from"./use-quasar.1530708f.js";import{_ as x,H as P,r as i,v as g,I as Q,A as t,y as r,D as s,K as S,B as p,x as k,al as q,au as I,av as A}from"./index.da265ca8.js";import{Q as V}from"./QCard.a4953396.js";import{a as h}from"./index.2cf0d985.js";import"./use-dark.d44e090b.js";const F=P({setup(){const e=b(),o=i(""),d=i(""),y=i(!0),c=i(!1),C=async()=>{if(o.value!==""&&d.value!==""){c.value=!0;try{(await h.post("https://workt.workshopsofficial.com/user/",{email:o.value,password:d.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===201&&(e.notify({message:"Cuenta Registrada",color:"positive",position:"top"}),o.value="",d.value="")}catch(l){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(l.response.data.detail)})}finally{c.value=!1}}else e.notify({message:"Campos Vacios",color:"negative",position:"top"})},a=i(""),m=i(""),f=i(!1),v=i(!1);return{email:o,password:d,isPwd:y,email_verificacion:a,password_change:m,verificada:f,noverficada:v,validarCuenta:async()=>{try{if(a.value!==""){const l=await h.get(`https://workt.workshopsofficial.com/user/${a.value}`,{headers:{accept:"application/json"}});l.status===200&&(l.data.is_premium===!0?(f.value=!0,v.value=!1):(v.value=!0,f.value=!1))}else e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(l){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(l.response.data.detail)})}},actualizarContrase\u00F1a:async()=>{try{a.value!==""&&m.value!==""?(await h.put("https://workt.workshopsofficial.com/user/",{email:a.value,password:m.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&e.notify({message:"Contrase\xF1a Actualizada",color:"positive",position:"top"}):e.notify({message:"Campos Vacios",color:"negative",position:"top"})}catch(l){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(l.response.data.detail)})}},registrar:C,loading:c}}}),n=e=>(I("data-v-1ab22128"),e=e(),A(),e),N={class:"q-pa-md fit row wrap justify-center items-start content-start"},R=n(()=>s("div",{class:"q-pa-md text-center"},[s("h5",null,"Registro de Cuentas")],-1)),U=n(()=>s("div",{class:"q-pa-md text-center text-green"},[s("h6",null,"Suerte en su compra de combos")],-1)),$={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},j={class:"text-center q-pa-md"},B=n(()=>s("div",null,null,-1)),z=n(()=>s("div",{class:"q-pa-md text-center"},[s("h5",null,"Verificar Cuenta")],-1)),E=n(()=>s("div",{class:"q-pa-md text-center text-blue"},[s("h6",null," Si tiene algun problema con su cuenta verifique su cuenta o cambie su contrase\xF1a ")],-1)),T={class:"q-mx-auto q-pa-md q-gutter-y-md column",style:{"max-width":"300px"}},M=n(()=>s("h6",null,"CUENTA PREMIUM",-1)),D=n(()=>s("h6",null,"CUENTA SIN PAGAR",-1));function G(e,o,d,y,c,C){return g(),Q("div",N,[t(V,{class:"q-ma-sm my-card"},{default:r(()=>[R,t(w),U,s("div",$,[t(u,{filled:"",label:"Correo",modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.email=a),type:"email",rules:[a=>a&&a.length>0||"Campo obligatorio"]},null,8,["modelValue","rules"]),t(u,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=a=>e.password=a),label:"Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{append:r(()=>[t(S,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=a=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"])]),s("div",j,[t(p,{class:"q-ma-md",color:"negative",label:"Atras",to:"/"}),t(p,{class:"q-ma-md",color:"primary",label:"Registrar",loading:e.loading,onClick:e.registrar},null,8,["loading","onClick"])]),B]),_:1}),t(V,{class:"q-ma-sm my-card"},{default:r(()=>[z,t(w),E,s("div",T,[t(u,{filled:"",label:"Correo a Verificar",modelValue:e.email_verificacion,"onUpdate:modelValue":o[3]||(o[3]=a=>e.email_verificacion=a),type:"email",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{after:r(()=>[t(p,{round:"",dense:"",flat:"",icon:"search",onClick:e.validarCuenta},null,8,["onClick"])]),_:1},8,["modelValue","rules"]),e.verificada?(g(),k(_,{key:0,class:"q-pa-lg glossy",square:"",color:"positive","text-color":"white",icon:"verified"},{default:r(()=>[M]),_:1})):q("",!0),e.noverficada?(g(),k(_,{key:1,class:"q-pa-lg glossy",square:"",color:"negative","text-color":"white",icon:"highlight_off"},{default:r(()=>[D]),_:1})):q("",!0),t(u,{modelValue:e.password_change,"onUpdate:modelValue":o[4]||(o[4]=a=>e.password_change=a),label:"Nueva Contrase\xF1a",filled:"",type:e.isPwd?"password":"text",rules:[a=>a&&a.length>0||"Campo obligatorio"]},{after:r(()=>[t(p,{round:"",dense:"",flat:"",icon:"send",onClick:e.actualizarContrase\u00F1a},null,8,["onClick"])]),_:1},8,["modelValue","type","rules"])])]),_:1})])}var Z=x(F,[["render",G],["__scopeId","data-v-1ab22128"]]);export{Z as default};