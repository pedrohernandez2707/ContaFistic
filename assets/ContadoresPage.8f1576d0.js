import{Q as h,a as m}from"./QBreadcrumbs.304da429.js";import{_ as Q,d as V,g as f,o as y,c as k,e as o,w as s,Q as C,ap as B,i as _,aI as q,f as n,j as p,ba as N,l as b}from"./index.a62a34ef.js";import{Q as S}from"./QForm.2f49d039.js";import{Q as F,a as $}from"./QTable.fcbcbb6b.js";import{a as g,s as w}from"./axios.0012f664.js";import"./QList.2531dbd7.js";import"./QSelect.7023c637.js";import"./selection.1e56649a.js";const A=V({setup(){const e=[{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"registro",label:"Registro",field:"registro",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:r=>r?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width: 100px"}],a=f([]),l=f({idcontador:0,nombre:"",registro:"",activo:!0}),i=f(""),c=()=>{g.get("/contadores").then(r=>{a.value=r.data})},v=async()=>{if(l.value.idcontador===null){const r={_nombre:l.value.nombre,_registro:l.value.registro,_us_crea:"usrtest",_idContador:0,_activo:!0};await g.post("/contadores",r).then(d=>{w("Contador guardado correctamente.",{})})}else{const r={_nombre:l.value.nombre,_registro:l.value.registro,_us_crea:"usrtest",_idContador:l.value.idcontador,_activo:l.value.activo};await g.put("/contadores",r).then(d=>{w("Contador guardado correctamente.",{})})}u(),c()},t=r=>{l.value={...r}},u=()=>{l.value={idcontador:0,nombre:"",registro:"",activo:!0}};return{contadores:a,form:l,filtro:i,columns:e,guardarContador:v,editarContador:t,resetForm:u,filtrarContadores:()=>{const r=i.value.toLowerCase();return a.value.filter(d=>d.nombre.toLowerCase().includes(r)||d.registro.toLowerCase().includes(r))},getContadores:c}},mounted(){this.getContadores()}}),L={class:"q-pa-md"},U={class:"row q-col-gutter-sm"},E={class:"col-6"},T={class:"col-4"},G={class:"col-1"},I=n("div",{class:"col-12"},null,-1),R={class:"col-12 text-center q-pa-md q-gutter-md"},j=n("div",{class:"text-h5"},"Contadores",-1);function x(e,a,l,i,c,v){return y(),k("div",L,[o(h,null,{default:s(()=>[o(m,{label:"Sistema",icon:"home"}),o(m,{label:"Configuraci\xF3n",icon:"settings"}),o(m,{label:"Gesti\xF3n de Contadores",icon:"account_box"})]),_:1}),o(C,{class:"q-mt-md"},{default:s(()=>[o(_,null,{default:s(()=>[o(S,{onSubmit:q(e.guardarContador,["prevent"])},{default:s(()=>[n("div",U,[n("div",E,[o(p,{modelValue:e.form.nombre,"onUpdate:modelValue":a[0]||(a[0]=t=>e.form.nombre=t),label:"Nombre del contador",outlined:""},null,8,["modelValue"])]),n("div",T,[o(p,{modelValue:e.form.registro,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.registro=t),label:"No. Registro",outlined:""},null,8,["modelValue"])]),n("div",G,[o(N,{modelValue:e.form.activo,"onUpdate:modelValue":a[2]||(a[2]=t=>e.form.activo=t),label:"Activo","left-label":"",class:"toggle-center-div"},null,8,["modelValue"])]),I,n("div",R,[o(b,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),o(b,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(B,{spaced:"",dark:""}),o(C,{class:"my-card"},{default:s(()=>[o(_,null,{default:s(()=>[j,o(p,{modelValue:e.filtro,"onUpdate:modelValue":a[3]||(a[3]=t=>e.filtro=t),label:"Buscar Contador",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o(F,{style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarContadores(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":s(t=>[o($,{props:t},{default:s(()=>[o(b,{icon:"edit",color:"primary",dense:"",onClick:u=>e.editarContador(t.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])}var X=Q(A,[["render",x]]);export{X as default};
