import{a as S,c as V,r as l,w as E,e as M,h as r,a6 as F,d as H,ar as L,_ as O,al as U,v as d,am as A,A as p,y as B,an as g,x as _,D as m,ap as b,B as W}from"./index.bb25ae3e.js";import{P as w,k as G,Q as J,l as K}from"./use-quasar.d7097567.js";import{Q as X,a as Y}from"./QCard.19df005e.js";import{a as Z}from"./index.2cf0d985.js";import"./use-dark.01727365.js";const ee={ratio:[String,Number]};function te(e,i){return S(()=>{const o=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const ae=16/9;var y=V({name:"QImg",props:{...ee,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ae},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:o}){const u=l(e.initialRatio),s=te(e,u);let n;const a=[l(null),l(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],f=l(0),h=l(!1),v=l(!1),T=S(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),Q=S(()=>({width:e.width,height:e.height})),N=S(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),$=S(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));E(()=>k(),q);function k(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function q(t){if(clearTimeout(n),v.value=!1,t===null){h.value=!1,a[0].value=null,a[1].value=null;return}h.value=!0,a[f.value].value=t}function z({target:t}){n!==null&&(clearTimeout(n),u.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,x(t,1))}function x(t,c){n===null||c===1e3||(t.complete===!0?P(t):n=setTimeout(()=>{x(t,c+1)},50))}function P(t){n!==null&&(f.value=f.value===1?0:1,a[f.value].value=null,h.value=!1,v.value=!1,o("load",t.currentSrc||t.src))}function I(t){clearTimeout(n),h.value=!1,v.value=!0,a[0].value=null,a[1].value=null,o("error",t)}function D(t,c){return r("div",{class:"q-img__container absolute-full",key:t},c)}function j(t){const c=a[t].value,C={key:"img_"+t,class:N.value,style:$.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...c};return f.value===t?(C.class+=" q-img__image--waiting",Object.assign(C,{onLoad:z,onError:I})):C.class+=" q-img__image--loaded",D("img"+t,r("img",C))}function R(){return h.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},H(i[v.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[r(L,{color:e.spinnerColor,size:e.spinnerSize})])}return q(k()),M(()=>{clearTimeout(n),n=null}),()=>{const t=[];return s.value!==null&&t.push(r("div",{key:"filler",style:s.value})),v.value!==!0&&(a[0].value!==null&&t.push(j(0)),a[1].value!==null&&t.push(j(1))),t.push(r(F,{name:"q-transition--fade"},R)),r("div",{class:T.value,style:Q.value,role:"img","aria-label":e.alt},t)}}}),ie="/assets/1.211a9113.jpg",ne="/assets/2.0b7a5269.jpg",oe="/assets/3.347d10dc.jpg",le="/assets/4.b02f6e83.jpg",re="/assets/5.121e05ca.jpg";const se=U({setup(){const e=G(),i=l(w.getItem("cantidadDisponible")),o=l(w.getItem("emails")||[]),u=l(""),s=l(!1);return{cantidadDisponible:i,listaCorreos:o,codigo_trans:u,loading:s,pedido:async()=>{try{s.value=!0,(await Z.post("https://tuenvio.followvip.tech/pedido/",{id_pago:u.value,lista_correos:o.value},{headers:{accept:"application/json","Content-Type":"application/json"}})).status===200&&(w.clear(),e.notify({color:"green-4",textColor:"white",icon:"check",message:"Pedido realizado con exito"}))}catch(a){e.notify({color:"red-4",textColor:"white",icon:"check",message:String(a.response.data.detail)})}s.value=!1}}}}),ue={key:0,class:"q-pa-md fit row wrap justify-center items-start content-start"},ce={class:"q-pa-md"},de={class:"text-positive"},ge={class:"q-pa-md q-mx-auto",style:{"max-width":"330px"}},me={class:"q-pa-md text-center"};function fe(e,i,o,u,s,n){return e.cantidadDisponible>0?(d(),A("div",ue,[p(X,{class:"my-card text-center text-bold"},{default:B(()=>[p(Y,null,{default:B(()=>[e.listaCorreos.length===1?(d(),_(y,{key:0,width:"300px",height:"300px",src:ie})):g("",!0),e.listaCorreos.length===2?(d(),_(y,{key:1,width:"300px",height:"300px",src:ne})):g("",!0),e.listaCorreos.length===3?(d(),_(y,{key:2,width:"300px",height:"300px",src:oe})):g("",!0),e.listaCorreos.length===4?(d(),_(y,{key:3,width:"300px",height:"300px",src:le})):g("",!0),e.listaCorreos.length===5?(d(),_(y,{key:4,width:"300px",height:"300px",src:re})):g("",!0),m("div",ce,[m("p",de,"Disponible: "+b(e.cantidadDisponible),1),m("p",null,"Cantidad de Cuentas: "+b(e.listaCorreos.length),1),p(J),m("h6",null,"Monto Total: $ "+b(e.listaCorreos.length*15),1)]),m("div",ge,[p(K,{standout:"",modelValue:e.codigo_trans,"onUpdate:modelValue":i[0]||(i[0]=a=>e.codigo_trans=a),label:"Codigo de Transaccion"},null,8,["modelValue"])])]),_:1}),m("div",me,[p(W,{outline:"",loading:e.loading,style:{color:"goldenrod"},label:"Confirmar Pago",onClick:e.pedido},null,8,["loading","onClick"])])]),_:1})])):g("",!0)}var Se=O(se,[["render",fe],["__scopeId","data-v-64d0ed23"]]);export{Se as default};
