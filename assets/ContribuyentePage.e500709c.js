import{Q as k,a as f}from"./QBreadcrumbs.4f31f107.js";import{_ as B,d as S,g as d,o as N,c as q,e as t,w as r,Q as _,ap as F,a as u,i as h,aI as T,f as s,j as p,ba as U,l as v}from"./index.1643a210.js";import{h as $}from"./QSelect.287ca2e2.js";import{Q as A}from"./QForm.3bb554ea.js";import{Q as E,a as I}from"./QTable.40703dfb.js";import{Q as L}from"./QSpinnerBall.59d5a861.js";import{a as c,s as w}from"./axios.a9e65fbb.js";import"./selection.b6c65fd5.js";import"./QList.a8f4d7bf.js";const G=S({setup(){const e=d([]),a=d([]),m=d(""),l=d({id:null,nombre:"",nit:"",contador:"",activo:!0}),y=[{name:"nombre",label:"Nombre",field:"nombre_contribuyente",align:"left"},{name:"nit",label:"NIT",field:"nit",align:"left"},{name:"contador",label:"Contador",field:"contador",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:o=>o?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width:100px"}],b=()=>{u.show({message:"Cargando contribuyentes"}),c.get("/contribuyentes").then(o=>{e.value=o.data,u.hide()})},n=()=>{c.get("/contadores").then(o=>{a.value=o.data})},C=async()=>{if(u.show({message:"Guardando...",spinner:L}),l.value.id===null){const o={_nombre_contribuyente:l.value.nombre,_nit:l.value.nit,_idcontador:l.value.contador,_us_crea:"usrtest",_id:0,_activo:!0};await c.post("/contribuyentes",o).then(i=>{w("Contribuyente guardado correctamente.",{})})}else{const o={_id:l.value.id,_nombre_contribuyente:l.value.nombre,_nit:l.value.nit,_idcontador:l.value.contador,_activo:l.value.activo,_us_crea:"usrtest"};await c.put("/contribuyentes",o).then(i=>{w("Contribuyente actualizado correctamente.",{})})}u.hide(),b(),g()},Q=o=>{l.value={id:o.id,nombre:o.nombre_contribuyente,nit:o.nit,contador:o.idcontador,activo:o.activo}},V=o=>{e.value=e.value.filter(i=>i.id!==o)},g=()=>{l.value={id:null,nombre:"",nit:"",contador:"",activo:!0}};return{contribuyentes:e,contadores:a,form:l,filtro:m,columns:y,resetForm:g,getContribuyentes:b,getContadores:n,guardarContribuyente:C,editarContribuyente:Q,eliminarContribuyente:V,filtrarContribuyentes:()=>{const o=m.value.toLowerCase();return e.value.filter(i=>i.nombre_contribuyente.toLowerCase().includes(o)||i.nit.toLowerCase().includes(o)||(i.activo?"s\xED":"no").includes(o))}}},mounted(){this.getContadores(),this.getContribuyentes()}}),D={class:"q-pa-md"},P={class:"row q-gutter-sm"},j={class:"col-6"},z={class:"col-5"},M={class:"col-9"},H={class:"col-2"},J=s("div",{class:"col-12"},null,-1),K={class:"col-12 text-center q-pa-md q-gutter-md"},O=s("div",{class:"text-h5"},"Contribuyentes",-1);function R(e,a,m,l,y,b){return N(),q("div",D,[t(k,null,{default:r(()=>[t(f,{label:"Sistema",icon:"home"}),t(f,{label:"Configuraci\xF3n",icon:"settings"}),t(f,{label:"Gesti\xF3n de Contribuyentes",icon:"diversity_3"})]),_:1}),t(_,{class:"q-mt-md"},{default:r(()=>[t(h,null,{default:r(()=>[t(A,{onSubmit:T(e.guardarContribuyente,["prevent"])},{default:r(()=>[s("div",P,[s("div",j,[t(p,{modelValue:e.form.nombre,"onUpdate:modelValue":a[0]||(a[0]=n=>e.form.nombre=n),label:"Nombre del contribuyente",outlined:"",dense:""},null,8,["modelValue"])]),s("div",z,[t(p,{modelValue:e.form.nit,"onUpdate:modelValue":a[1]||(a[1]=n=>e.form.nit=n),label:"NIT",outlined:"",dense:""},null,8,["modelValue"])]),s("div",M,[t($,{modelValue:e.form.contador,"onUpdate:modelValue":a[2]||(a[2]=n=>e.form.contador=n),options:e.contadores,label:"Contador",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"idcontador","option-label":"nombre"},null,8,["modelValue","options"])]),s("div",H,[t(U,{modelValue:e.form.activo,"onUpdate:modelValue":a[3]||(a[3]=n=>e.form.activo=n),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),J,s("div",K,[t(v,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),t(v,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),t(F,{spaced:"",dark:""}),t(_,{class:"my-card"},{default:r(()=>[t(h,null,{default:r(()=>[O,t(p,{modelValue:e.filtro,"onUpdate:modelValue":a[4]||(a[4]=n=>e.filtro=n),label:"Buscar Contribuyente",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),t(E,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarContribuyentes(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":r(n=>[t(I,{props:n},{default:r(()=>[t(v,{icon:"edit",color:"primary",dense:"",onClick:C=>e.editarContribuyente(n.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])}var le=B(G,[["render",R]]);export{le as default};
