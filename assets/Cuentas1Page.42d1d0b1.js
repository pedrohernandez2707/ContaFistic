import{a as m,Q as V}from"./QBreadcrumbs.4144acfc.js";import{_ as y,d as k,g as c,o as B,aF as F,w as s,a as i,e as l,i as w,aI as S,f as r,j as f,ba as N,l as p,Q as h}from"./index.e60fa00d.js";import{Q as q}from"./QForm.b9c5a55d.js";import{Q as $,a as A}from"./QTable.bfefe082.js";import{Q as U}from"./QPage.b16c688f.js";import{Q as D}from"./QSpinnerBall.faefad3d.js";import{a as b,s as Q}from"./axios.a61b5a41.js";import"./QList.5561c62f.js";import"./QSelect.70b07cba.js";import"./selection.21886ae7.js";const E=k({setup(){const e=c([]),a=c({id:0,nombre:"",activo:!1}),d=c(""),v=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:o=>o?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],u=()=>{i.show({message:"Cargando cuentas..."}),b.get("cuentasn1").then(o=>{e.value=o.data,i.hide()})},g=async()=>{if(i.show({message:"Guardando cuenta...",spinner:D}),a.value.id===null||a.value.id===0){const o={_nombre:a.value.nombre,_us_crea:"usrtest",_id:0,_activo:!0};await b.post("cuentasn1",o).then(n=>{Q("Cuenta nivel 1 guardada correctamente.")})}else{const o={_nombre:a.value.nombre,_us_crea:"usrtest",_id:a.value.id,_activo:a.value.activo};await b.put("cuentasn1",o).then(n=>{Q("Cuenta nivel 1 guardada correctamente.")})}i.hide(),u(),_()},t=o=>{a.value={...o}},C=o=>{e.value=e.value.filter(n=>n.id!==o)},_=()=>{a.value={id:0,nombre:"",activo:!1}};return{cuentas:e,form:a,filtro:d,columns:v,resetForm:_,getCuentas:u,guardarCuenta:g,editarCuenta:t,eliminarCuenta:C,filtrarCuentas:()=>{const o=d.value.toLowerCase();return e.value.filter(n=>n.id.toString().includes(o)||n.nombre.toLowerCase().includes(o)||(n.activo?"s\xED":"no").includes(o))}}},mounted(){this.getCuentas()}}),G={class:"row q-col-gutter-sm"},I={class:"col-2"},L={class:"col-9"},P={class:"col-1"},T=r("div",{class:"col-12"},null,-1),j={class:"col-12 text-center q-gutter-sm"},x=r("div",{class:"text-h5"},"Cuentas nivel 1",-1);function M(e,a,d,v,u,g){return B(),F(U,{padding:""},{default:s(()=>[l(V,null,{default:s(()=>[l(m,{label:"Sistema",icon:"home"}),l(m,{label:"Configuraci\xF3n",icon:"widgets"}),l(m,{label:"Gesti\xF3n de Cuentas Nivel 1",icon:"looks_one"})]),_:1}),l(h,{class:"q-mt-md"},{default:s(()=>[l(w,null,{default:s(()=>[l(q,{onSubmit:S(e.guardarCuenta,["prevent"])},{default:s(()=>[r("div",G,[r("div",I,[l(f,{modelValue:e.form.id,"onUpdate:modelValue":a[0]||(a[0]=t=>e.form.id=t),label:"C\xF3digo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),r("div",L,[l(f,{modelValue:e.form.nombre,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.nombre=t),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),r("div",P,[l(N,{modelValue:e.form.activo,"onUpdate:modelValue":a[2]||(a[2]=t=>e.form.activo=t),label:"Activo","left-label":""},null,8,["modelValue"])]),T,r("div",j,[l(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),l(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),l(h,{class:"q-my-md"},{default:s(()=>[l(w,null,{default:s(()=>[x,l(f,{modelValue:e.filtro,"onUpdate:modelValue":a[3]||(a[3]=t=>e.filtro=t),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),l($,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarCuentas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":s(t=>[l(A,{props:t},{default:s(()=>[l(p,{icon:"edit",color:"primary",dense:"",onClick:C=>e.editarCuenta(t.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var ae=y(E,[["render",M]]);export{ae as default};
