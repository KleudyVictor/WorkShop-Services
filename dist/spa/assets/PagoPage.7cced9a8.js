import{Q as r}from"./QImg.ff199678.js";import{Q as f}from"./QSeparator.c1df4572.js";import{_ as v,H as C,r as h,o as y,v as t,I as k,A as l,y as g,al as s,x as o,D as p,an as d,B as w,K as x}from"./index.4830b328.js";import{Q as b}from"./QCardSection.fd7367be.js";import{Q as j}from"./QCard.535716ca.js";import{P as m}from"./LocalStorage.8a747b86.js";import"./use-dark.6d41a5b7.js";function Q(e){const a=document.createElement("textarea");a.value=e,a.contentEditable="true",a.style.position="fixed",document.body.appendChild(a),a.focus(),a.select();const n=document.execCommand("copy");return a.remove(),n}function D(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((a,n)=>{const i=Q(e);i?a(!0):n(i)})}var P="/assets/1.3fdc92ef.jpg",q="/assets/2.b8dfbf4c.jpg",B="/assets/3.8f5e4121.jpg",I="/assets/4.45f5360d.jpg",$="/assets/5.e4e92ade.jpg",E="/assets/6.54c6b7c6.jpg",N="/assets/7.de1677e9.jpg",S="/assets/8.72fcf6cc.jpg",T="/assets/9.83d1e2c6.jpg",V="/assets/10.e446be0b.jpg",A="/assets/11.d27e477b.jpg",M="/assets/12.5d558518.jpg",z="/assets/13.6e5648e1.jpg",H="/assets/14.31dd872f.jpg",K="/assets/15.6854525e.jpg",F="/assets/16.33db5b80.jpg",G="/assets/17.d7f84c6f.jpg",J="/assets/18.d3675384.jpg",L="/assets/19.c1abbff2.jpg",O="/assets/20.dce08570.jpg";const R=C({setup(){const e=h(""),a=h(m.getItem("cantidadDisponible")),n=h(m.getItem("emails")||[]),i=h(`#orden *********
Correos: `),c=()=>{n.value.forEach(_=>{i.value+=_+","}),i.value=i.value.slice(0,-1)};return y(()=>{c()}),{user:e,cantidadDisponible:a,listaCorreos:n,handleCopy:()=>{D(i.value).then(()=>{}).catch(()=>{})}}}}),U={key:0,class:"q-pa-md fit row wrap justify-center items-start content-start"},W={class:"q-pa-md"},X={class:"text-positive"},Y={class:"q-pa-md fit row wrap justify-center items-start content-start"},Z={class:"q-pa-md"},ee={class:"q-pa-md"},te={href:"https://t.me/workshopofficialbot"};function se(e,a,n,i,c,u){return e.cantidadDisponible>0?(t(),k("div",U,[l(j,{class:"my-card text-center text-bold"},{default:g(()=>[l(b,null,{default:g(()=>[e.listaCorreos.length===1?(t(),o(r,{key:0,width:"300px",height:"300px",src:P})):s("",!0),e.listaCorreos.length===2?(t(),o(r,{key:1,width:"300px",height:"300px",src:q})):s("",!0),e.listaCorreos.length===3?(t(),o(r,{key:2,width:"300px",height:"300px",src:B})):s("",!0),e.listaCorreos.length===4?(t(),o(r,{key:3,width:"300px",height:"300px",src:I})):s("",!0),e.listaCorreos.length===5?(t(),o(r,{key:4,width:"300px",height:"300px",src:$})):s("",!0),e.listaCorreos.length===6?(t(),o(r,{key:5,width:"300px",height:"300px",src:E})):s("",!0),e.listaCorreos.length===7?(t(),o(r,{key:6,width:"300px",height:"300px",src:N})):s("",!0),e.listaCorreos.length===8?(t(),o(r,{key:7,width:"300px",height:"300px",src:S})):s("",!0),e.listaCorreos.length===9?(t(),o(r,{key:8,width:"300px",height:"300px",src:T})):s("",!0),e.listaCorreos.length===10?(t(),o(r,{key:9,width:"300px",height:"300px",src:V})):s("",!0),e.listaCorreos.length===11?(t(),o(r,{key:10,width:"300px",height:"300px",src:A})):s("",!0),e.listaCorreos.length===12?(t(),o(r,{key:11,width:"300px",height:"300px",src:M})):s("",!0),e.listaCorreos.length===13?(t(),o(r,{key:12,width:"300px",height:"300px",src:z})):s("",!0),e.listaCorreos.length===14?(t(),o(r,{key:13,width:"300px",height:"300px",src:H})):s("",!0),e.listaCorreos.length===15?(t(),o(r,{key:14,width:"300px",height:"300px",src:K})):s("",!0),e.listaCorreos.length===16?(t(),o(r,{key:15,width:"300px",height:"300px",src:F})):s("",!0),e.listaCorreos.length===17?(t(),o(r,{key:16,width:"300px",height:"300px",src:G})):s("",!0),e.listaCorreos.length===18?(t(),o(r,{key:17,width:"300px",height:"300px",src:J})):s("",!0),e.listaCorreos.length===19?(t(),o(r,{key:18,width:"300px",height:"300px",src:L})):s("",!0),e.listaCorreos.length===20?(t(),o(r,{key:19,width:"300px",height:"300px",src:O})):s("",!0),p("div",W,[p("p",X,"Disponible: "+d(e.cantidadDisponible),1),p("p",null,"Cantidad de Cuentas: "+d(e.listaCorreos.length),1),l(f),p("h6",null,"Monto Total: $ "+d(e.listaCorreos.length*100),1)]),p("div",Y,[p("div",Z,[l(w,{onClick:e.handleCopy,icon:"content_copy",label:"Copia Aqui",color:"primary"},null,8,["onClick"])])]),p("div",ee,[p("a",te,[l(x,{size:"md",color:"negative",name:"smart_toy"})])])]),_:1})]),_:1})])):s("",!0)}var he=v(R,[["render",se],["__scopeId","data-v-1fff23b4"]]);export{he as default};
