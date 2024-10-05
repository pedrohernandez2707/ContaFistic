import{Q as h,a as m}from"./QBreadcrumbs.e7843302.js";import{_ as V,U as Q,r as f,V as y,W as k,Z as o,a1 as s,a2 as C,aj as B,a4 as _,b5 as q,$ as n,a5 as p,b6 as N,a6 as b}from"./index.636087c0.js";import{Q as S}from"./QForm.c34f8ae7.js";import{Q as $,a as F}from"./QTable.ba9f47a7.js";import{a as v,s as w}from"./axios.502daeff.js";import"./QList.e1b348f8.js";import"./selection.5fba8b9b.js";import"./axios.bf56c3c5.js";const U=Q({setup(){const e=[{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"registro",label:"Registro",field:"registro",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:r=>r?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width: 100px"}],a=f([]),l=f({idcontador:0,nombre:"",registro:"",activo:!0}),i=f(""),c=()=>{v.get("/contadores").then(r=>{a.value=r.data})},g=async()=>{if(l.value.idcontador===null){const r={_nombre:l.value.nombre,_registro:l.value.registro,_us_crea:"usrtest",_idContador:0,_activo:!0};await v.post("/contadores",r).then(d=>{w("Contador guardado correctamente.",{})})}else{const r={_nombre:l.value.nombre,_registro:l.value.registro,_us_crea:"usrtest",_idContador:l.value.idcontador,_activo:l.value.activo};await v.put("/contadores",r).then(d=>{w("Contador guardado correctamente.",{})})}u(),c()},t=r=>{l.value={...r}},u=()=>{l.value={idcontador:0,nombre:"",registro:"",activo:!0}};return{contadores:a,form:l,filtro:i,columns:e,guardarContador:g,editarContador:t,resetForm:u,filtrarContadores:()=>{const r=i.value.toLowerCase();return a.value.filter(d=>d.nombre.toLowerCase().includes(r)||d.registro.toLowerCase().includes(r))},getContadores:c}},mounted(){this.getContadores()}}),A={class:"q-pa-md"},L={class:"row q-col-gutter-sm"},E={class:"col-6"},T={class:"col-4"},G={class:"col-1"},R=n("div",{class:"col-12"},null,-1),j={class:"col-12 text-center q-pa-md q-gutter-md"},x=n("div",{class:"text-h5"},"Contadores",-1);function D(e,a,l,i,c,g){return y(),k("div",A,[o(h,null,{default:s(()=>[o(m,{label:"Sistema",icon:"home"}),o(m,{label:"Configuraci\xF3n",icon:"settings"}),o(m,{label:"Gesti\xF3n de Contadores",icon:"account_box"})]),_:1}),o(C,{class:"q-mt-md"},{default:s(()=>[o(_,null,{default:s(()=>[o(S,{onSubmit:q(e.guardarContador,["prevent"])},{default:s(()=>[n("div",L,[n("div",E,[o(p,{modelValue:e.form.nombre,"onUpdate:modelValue":a[0]||(a[0]=t=>e.form.nombre=t),label:"Nombre del contador",outlined:""},null,8,["modelValue"])]),n("div",T,[o(p,{modelValue:e.form.registro,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.registro=t),label:"No. Registro",outlined:""},null,8,["modelValue"])]),n("div",G,[o(N,{modelValue:e.form.activo,"onUpdate:modelValue":a[2]||(a[2]=t=>e.form.activo=t),label:"Activo","left-label":"",class:"toggle-center-div"},null,8,["modelValue"])]),R,n("div",j,[o(b,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),o(b,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(B,{spaced:"",dark:""}),o(C,{class:"my-card"},{default:s(()=>[o(_,null,{default:s(()=>[x,o(p,{modelValue:e.filtro,"onUpdate:modelValue":a[3]||(a[3]=t=>e.filtro=t),label:"Buscar Contador",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o($,{style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarContadores(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":s(t=>[o(F,{props:t},{default:s(()=>[o(b,{icon:"edit",color:"primary",dense:"",onClick:u=>e.editarContador(t.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])}var O=V(U,[["render",D]]);export{O as default};