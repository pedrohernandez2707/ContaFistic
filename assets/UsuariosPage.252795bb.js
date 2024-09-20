import{Q as h,a as u}from"./QBreadcrumbs.e7843302.js";import{_ as w,U as V,r as m,V as _,W as y,Z as l,a1 as t,a2 as U,a4 as g,b5 as Q,$ as r,a5 as c,b6 as C,a6 as f}from"./index.636087c0.js";import{Q as k}from"./QForm.c34f8ae7.js";import{Q as B,a as E}from"./QTable.ba9f47a7.js";import"./QList.e1b348f8.js";import"./selection.5fba8b9b.js";const $=V({setup(){const e=m([{id:1,nombre:"Usuario 1",email:"usuario1@example.com",activo:!0},{id:2,nombre:"Usuario 2",email:"usuario2@example.com",activo:!1}]),o=m({id:null,nombre:"",email:"",activo:!1}),n=m(""),v=[{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"email",label:"Email",field:"email",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width:100px"}],p=()=>{if(o.value.id===null){const a=e.value.length?Math.max(...e.value.map(i=>i.id))+1:1;e.value.push({...o.value,id:a})}else{const a=e.value.findIndex(i=>i.id===o.value.id);a!==-1&&(e.value[a]={...o.value})}d()},b=a=>{o.value={...a}},s=a=>{e.value=e.value.filter(i=>i.id!==a)},d=()=>{o.value={id:null,nombre:"",email:"",activo:!1}};return{usuarios:e,form:o,columns:v,filtro:n,guardarUsuario:p,editarUsuario:b,eliminarUsuario:s,filtrarUsuarios:()=>{const a=n.value.toLowerCase();return e.value.filter(i=>i.nombre.toLowerCase().includes(a)||i.email.toLowerCase().includes(a)||(i.activo?"s\xED":"no").includes(a))}}}}),x={class:"q-pa-sm"},N={class:"row q-gutter-sm"},q={class:"col-12"},F={class:"col-10"},L={class:"col-1"},S=r("div",{class:"col-12"},null,-1),I={class:"col-12 text-center"},T=r("div",{class:"text-h5"},"Usuarios",-1),A={style:{height:"400px","overflow-y":"auto"}};function D(e,o,n,v,p,b){return _(),y("div",x,[l(h,null,{default:t(()=>[l(u,{label:"Home",icon:"home"}),l(u,{label:"Configuraci\xF3n",icon:"settings"}),l(u,{label:"Gesti\xF3n de Usuarios",icon:"add_reaction"})]),_:1}),l(U,null,{default:t(()=>[l(g,null,{default:t(()=>[l(k,{onSubmit:Q(e.guardarUsuario,["prevent"])},{default:t(()=>[r("div",N,[r("div",q,[l(c,{modelValue:e.form.nombre,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.nombre=s),label:"Nombre de usuario",outlined:"",dense:""},null,8,["modelValue"])]),r("div",F,[l(c,{modelValue:e.form.email,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.email=s),label:"Email",outlined:"",dense:"",type:"email"},null,8,["modelValue"])]),r("div",L,[l(C,{modelValue:e.form.activo,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.activo=s),label:"Estado"},null,8,["modelValue"])]),S,r("div",I,[l(f,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),l(U,{class:"q-my-md"},{default:t(()=>[l(g,null,{default:t(()=>[T,l(c,{modelValue:e.filtro,"onUpdate:modelValue":o[3]||(o[3]=s=>e.filtro=s),label:"Buscar usuarios",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),r("div",A,[l(B,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarUsuarios(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":t(s=>[l(E,{props:s},{default:t(()=>[l(f,{icon:"edit",color:"primary",dense:"",onClick:d=>e.editarUsuario(s.row)},null,8,["onClick"]),l(f,{icon:"delete",color:"negative",dense:"",onClick:d=>e.eliminarUsuario(s.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])]),_:1})]),_:1})])}var z=w($,[["render",D]]);export{z as default};
