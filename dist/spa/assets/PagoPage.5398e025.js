import{Q as a}from"./QImg.107728b0.js";import{k as v,Q as C,l as y}from"./use-quasar.fae22810.js";import{Q as x}from"./QCardSection.4c4add34.js";import{_ as k,H as w,r as d,v as t,I as b,A as r,y as f,ao as o,aw as Q,x as i,D as s,aq as u,B as j}from"./index.2337cc2c.js";import{Q as P}from"./QCard.b5e17419.js";import{P as g}from"./LocalStorage.6cf804ea.js";import{a as q}from"./index.2cf0d985.js";import"./use-dark.f4f390be.js";var D="/assets/1.34157822.jpg",B="/assets/2.b801f4f0.jpg",I="/assets/3.b01f1e4a.jpg",V="/assets/4.4bd9fec2.jpg",$="/assets/5.8901411d.jpg";const S=w({setup(){const e=v(),n=Q(),m=d(g.getItem("cantidadDisponible")),p=d(g.getItem("emails")||[]),c=d(""),l=d(!1);return{cantidadDisponible:m,listaCorreos:p,codigo_trans:c,loading:l,pedido:async()=>{try{l.value=!0,(await q.post("https://tuenvio.followvip.tech/pedido/",{id_pago:c.value,lista_correos:p.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===201&&(g.clear(),e.notify({color:"green-4",textColor:"white",icon:"check",message:"Pedido realizado con exito"}),n.push("/pago_exitoso"))}catch(_){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(_.response.data.detail)})}l.value=!1}}}}),N={key:0,class:"q-pa-md fit row wrap justify-center items-start content-start"},T={class:"q-pa-md"},z={class:"text-positive"},A={class:"q-pa-md q-mx-auto",style:{"max-width":"330px"}},E={class:"q-pa-md text-center"};function H(e,n,m,p,c,l){return e.cantidadDisponible>0?(t(),b("div",N,[r(P,{class:"my-card text-center text-bold"},{default:f(()=>[r(x,null,{default:f(()=>[e.listaCorreos.length===1?(t(),i(a,{key:0,width:"300px",height:"300px",src:D})):o("",!0),e.listaCorreos.length===2?(t(),i(a,{key:1,width:"300px",height:"300px",src:B})):o("",!0),e.listaCorreos.length===3?(t(),i(a,{key:2,width:"300px",height:"300px",src:I})):o("",!0),e.listaCorreos.length===4?(t(),i(a,{key:3,width:"300px",height:"300px",src:V})):o("",!0),e.listaCorreos.length===5?(t(),i(a,{key:4,width:"300px",height:"300px",src:$})):o("",!0),s("div",T,[s("p",z,"Disponible: "+u(e.cantidadDisponible),1),s("p",null,"Cantidad de Cuentas: "+u(e.listaCorreos.length),1),r(C),s("h6",null,"Monto Total: $ "+u(e.listaCorreos.length*30),1)]),s("div",A,[r(y,{standout:"",modelValue:e.codigo_trans,"onUpdate:modelValue":n[0]||(n[0]=h=>e.codigo_trans=h),label:"Codigo de Transaccion"},null,8,["modelValue"])])]),_:1}),s("div",E,[r(j,{outline:"",loading:e.loading,style:{color:"goldenrod"},label:"Confirmar Pago",onClick:e.pedido},null,8,["loading","onClick"])])]),_:1})])):o("",!0)}var O=k(S,[["render",H],["__scopeId","data-v-fb446ebe"]]);export{O as default};
