import{a as b,Q as S}from"./QBreadcrumbs.e7843302.js";import{_ as k,U as B,r as u,V as U,aB as q,a1 as s,a as d,Z as l,a4 as h,b5 as $,$ as r,a5 as c,b6 as F,a6 as p,a2 as w}from"./index.636087c0.js";import{d as A}from"./QList.e1b348f8.js";import{Q as D}from"./QForm.c34f8ae7.js";import{Q as E,a as G}from"./QTable.ba9f47a7.js";import{Q as I}from"./QPage.1f755c2f.js";import{Q as L}from"./QSpinnerBall.b1b774e0.js";import{a as v,s as V}from"./axios.502daeff.js";import"./selection.5fba8b9b.js";import"./axios.bf56c3c5.js";const P=B({setup(){const e=u([]),o=u([]),m=u(!1),g=()=>{d.show({message:"Cargando cuentas..."}),v.get("cuentasn1").then(a=>{e.value=a.data,d.hide()})},f=()=>{d.show({message:"Cargando cuentas nivel 2..."}),v.get("cuentasn2").then(a=>{o.value=a.data,d.hide()})},t=u({id:null,nombre:"",id_nivel1:null,correlativo:"",activo:!1}),n=u(""),C=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"id_nivel1",label:"ID Nivel 1",field:"id_nivel1",align:"left"},{name:"nombre_nivel1",label:"Nombre Nivel 1",field:"nombre_nivel1",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],Q=async()=>{if(d.show({message:"Guardando cuenta...",spinner:L}),t.value.id===null||t.value.id===""){const a={_nombre:t.value.nombre,_id_nivel1:t.value.id_nivel1,_us_crea:"usrtest",_id:0,_activo:!0};await v.post("cuentasn2",a).then(i=>{V("Cuenta nivel 2 guardada correctamente.")})}else{const a={_nombre:t.value.nombre,_id_nivel1:t.value.id_nivel1,_us_crea:"usrtest",_id:t.value.id,_activo:t.value.activo};await v.put("cuentasn2",a).then(i=>{V("Cuenta nivel 2 guardada correctamente.")})}d.hide(),f(),_()},N=a=>{t.value={...a},m.value=!0},y=a=>{o.value=o.value.filter(i=>i.id!==a)},_=()=>{t.value={id:null,nombre:"",id_nivel1:null,correlativo:"",activo:!1},m.value=!1};return{cuentasNivel1:e,cuentas:o,form:t,filtro:n,columns:C,resetForm:_,getCuentasn1:g,getCuentasn2:f,guardarCuenta:Q,editarCuenta:N,eliminarCuenta:y,filtrarCuentas:()=>{const a=n.value.toLowerCase();return o.value.filter(i=>i.id.toString().includes(a)||i.nombre.toLowerCase().includes(a)||i.id_nivel1.toString().includes(a)||i.correlativo.toString().includes(a)||(i.activo?"s\xED":"no").includes(a))},disableCuentasN1:m}},mounted(){this.getCuentasn1(),this.getCuentasn2()}}),T={class:"row q-col-gutter-sm"},M={class:"col-2"},Z={class:"col-10"},j={class:"col-6"},z={class:"col-4"},H={class:"col-1"},J=r("div",{class:"col-12"},null,-1),K={class:"col-12 text-center q-gutter-sm"},O=r("div",{class:"text-h5"},"Cuentas nivel 2",-1);function R(e,o,m,g,f,t){return U(),q(I,{padding:""},{default:s(()=>[l(S,null,{default:s(()=>[l(b,{label:"Sistema",icon:"home"}),l(b,{label:"Configuraci\xF3n",icon:"widgets"}),l(b,{label:"Gesti\xF3n de Cuentas Nivel 2",icon:"looks_two"})]),_:1}),l(w,{class:"q-mt-md"},{default:s(()=>[l(h,null,{default:s(()=>[l(D,{onSubmit:$(e.guardarCuenta,["prevent"])},{default:s(()=>[r("div",T,[r("div",M,[l(c,{modelValue:e.form.id,"onUpdate:modelValue":o[0]||(o[0]=n=>e.form.id=n),label:"Codigo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),r("div",Z,[l(c,{modelValue:e.form.nombre,"onUpdate:modelValue":o[1]||(o[1]=n=>e.form.nombre=n),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),r("div",j,[l(A,{modelValue:e.form.id_nivel1,"onUpdate:modelValue":o[2]||(o[2]=n=>e.form.id_nivel1=n),options:e.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",disable:e.disableCuentasN1},null,8,["modelValue","options","disable"])]),r("div",z,[l(c,{modelValue:e.form.correlativo,"onUpdate:modelValue":o[3]||(o[3]=n=>e.form.correlativo=n),label:"Correlativo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),r("div",H,[l(F,{modelValue:e.form.activo,"onUpdate:modelValue":o[4]||(o[4]=n=>e.form.activo=n),label:"Activo","left-label":"",class:"q-pl-md toggle-center-div-dense"},null,8,["modelValue"])]),J,r("div",K,[l(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),l(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),l(w,{class:"q-my-md"},{default:s(()=>[l(h,null,{default:s(()=>[O,l(c,{modelValue:e.filtro,"onUpdate:modelValue":o[5]||(o[5]=n=>e.filtro=n),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),l(E,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarCuentas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":s(n=>[l(G,{props:n},{default:s(()=>[l(p,{icon:"edit",color:"primary",dense:"",onClick:C=>e.editarCuenta(n.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var se=k(P,[["render",R]]);export{se as default};
