import{Q as n}from"./QImg.cc85f0cc.js";import{Q as g}from"./QSeparator.62cbf3d0.js";import{_ as v,H as C,r as d,o as y,v as r,I as b,A as c,y as u,al as i,x as l,D as s,an as p,B as k,K as w}from"./index.5ad4d2eb.js";import{Q as x}from"./QCardSection.149110bf.js";import{Q}from"./QCard.6d0c97e9.js";import{P as h}from"./LocalStorage.211ad498.js";import"./use-dark.492e9c71.js";function j(e){const t=document.createElement("textarea");t.value=e,t.contentEditable="true",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();const a=document.execCommand("copy");return t.remove(),a}function D(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((t,a)=>{const o=j(e);o?t(!0):a(o)})}var P="/assets/1.5bdd7761.jpg",q="/assets/2.7fc6e104.jpg",B="/assets/3.bab522e6.jpg",I="/assets/4.cd1331c3.jpg",$="/assets/5.41b53e86.jpg";const E=C({setup(){const e=d(""),t=d(h.getItem("cantidadDisponible")),a=d(h.getItem("emails")||[]),o=d(`#orden *********
Correos: `),m=()=>{a.value.forEach(f=>{o.value+=f+","}),o.value=o.value.slice(0,-1)};return y(()=>{m()}),{user:e,cantidadDisponible:t,listaCorreos:a,handleCopy:()=>{D(o.value).then(()=>{}).catch(()=>{})}}}}),N={key:0,class:"q-pa-md fit row wrap justify-center items-start content-start"},S={class:"q-pa-md"},T={class:"text-positive"},V={class:"q-pa-md fit row wrap justify-center items-start content-start"},A={class:"q-pa-md"},M={class:"q-pa-md"},z={href:"https://t.me/workshopofficialbot"};function H(e,t,a,o,m,_){return e.cantidadDisponible>0?(r(),b("div",N,[c(Q,{class:"my-card text-center text-bold"},{default:u(()=>[c(x,null,{default:u(()=>[e.listaCorreos.length===1?(r(),l(n,{key:0,width:"300px",height:"300px",src:P})):i("",!0),e.listaCorreos.length===2?(r(),l(n,{key:1,width:"300px",height:"300px",src:q})):i("",!0),e.listaCorreos.length===3?(r(),l(n,{key:2,width:"300px",height:"300px",src:B})):i("",!0),e.listaCorreos.length===4?(r(),l(n,{key:3,width:"300px",height:"300px",src:I})):i("",!0),e.listaCorreos.length===5?(r(),l(n,{key:4,width:"300px",height:"300px",src:$})):i("",!0),s("div",S,[s("p",T,"Disponible: "+p(e.cantidadDisponible),1),s("p",null,"Cantidad de Cuentas: "+p(e.listaCorreos.length),1),c(g),s("h6",null,"Monto Total: $ "+p(e.listaCorreos.length*180),1)]),s("div",V,[s("div",A,[c(k,{onClick:e.handleCopy,icon:"content_copy",label:"Copia Aqui",color:"primary"},null,8,["onClick"])])]),s("div",M,[s("a",z,[c(w,{size:"md",color:"negative",name:"smart_toy"})])])]),_:1})]),_:1})])):i("",!0)}var U=v(E,[["render",H],["__scopeId","data-v-7454fe0f"]]);export{U as default};