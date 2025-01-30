import{a as m,Q as y}from"./QBreadcrumbs.0a672f0a.js";import{_ as S,d as k,g as c,o as B,aF as F,w as n,P as N,a as i,e as l,i as h,aI as $,f as r,j as f,ba as q,l as p,Q}from"./index.cfa62c89.js";import{Q as P}from"./QForm.984041a7.js";import{Q as A,a as D}from"./QTable.a99d1b42.js";import{Q as E}from"./QPage.1777d14d.js";import{Q as I}from"./QSpinnerBall.ef96c00c.js";import{a as b,s as V}from"./axios.55b105d8.js";import"./QList.0f7219f7.js";import"./QSelect.094e4cd6.js";import"./selection.fe56f4bf.js";const U=k({setup(){const e=c([]),a=c({id:0,nombre:"",activo:!1}),d=c(""),v=[{name:"id",label:"ID",field:"id_generico",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:o=>o?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],u=()=>{const o=N.getItem("empresa");let s;if(o)s=JSON.parse(o.toString()).id;else{alert("Debe seleccionar una empresa");return}i.show({message:"Cargando cuentas..."}),b.get("cuentasn1",{params:{id_empresa:s}}).then(w=>{e.value=w.data,i.hide()})},g=async()=>{if(i.show({message:"Guardando cuenta...",spinner:I}),a.value.id===null||a.value.id===0){const o={_nombre:a.value.nombre,_us_crea:"usrtest",_id:0,_activo:!0};await b.post("cuentasn1",o).then(s=>{V("Cuenta nivel 1 guardada correctamente.")})}else{const o={_nombre:a.value.nombre,_us_crea:"usrtest",_id:a.value.id,_activo:a.value.activo};await b.put("cuentasn1",o).then(s=>{V("Cuenta nivel 1 guardada correctamente.")})}i.hide(),u(),_()},t=o=>{a.value={...o}},C=o=>{e.value=e.value.filter(s=>s.id!==o)},_=()=>{a.value={id:0,nombre:"",activo:!1}};return{cuentas:e,form:a,filtro:d,columns:v,resetForm:_,getCuentas:u,guardarCuenta:g,editarCuenta:t,eliminarCuenta:C,filtrarCuentas:()=>{const o=d.value.toLowerCase();return e.value.filter(s=>s.id.toString().includes(o)||s.nombre.toLowerCase().includes(o)||(s.activo?"s\xED":"no").includes(o))}}},mounted(){this.getCuentas()}}),G={class:"row q-col-gutter-sm"},L={class:"col-2"},T={class:"col-9"},j={class:"col-1"},x=r("div",{class:"col-12"},null,-1),J={class:"col-12 text-center q-gutter-sm"},M=r("div",{class:"text-h5"},"Cuentas nivel 1",-1);function O(e,a,d,v,u,g){return B(),F(E,{padding:""},{default:n(()=>[l(y,null,{default:n(()=>[l(m,{label:"Sistema",icon:"home"}),l(m,{label:"Configuraci\xF3n",icon:"widgets"}),l(m,{label:"Gesti\xF3n de Cuentas Nivel 1",icon:"looks_one"})]),_:1}),l(Q,{class:"q-mt-md"},{default:n(()=>[l(h,null,{default:n(()=>[l(P,{onSubmit:$(e.guardarCuenta,["prevent"])},{default:n(()=>[r("div",G,[r("div",L,[l(f,{modelValue:e.form.id,"onUpdate:modelValue":a[0]||(a[0]=t=>e.form.id=t),label:"C\xF3digo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),r("div",T,[l(f,{modelValue:e.form.nombre,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.nombre=t),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),r("div",j,[l(q,{modelValue:e.form.activo,"onUpdate:modelValue":a[2]||(a[2]=t=>e.form.activo=t),label:"Activo","left-label":""},null,8,["modelValue"])]),x,r("div",J,[l(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width",disable:!0}),l(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),l(Q,{class:"q-my-md"},{default:n(()=>[l(h,null,{default:n(()=>[M,l(f,{modelValue:e.filtro,"onUpdate:modelValue":a[3]||(a[3]=t=>e.filtro=t),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),l(A,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarCuentas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":n(t=>[l(D,{props:t},{default:n(()=>[l(p,{icon:"edit",color:"primary",dense:"",onClick:C=>e.editarCuenta(t.row),disable:!0},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var oe=S(U,[["render",O]]);export{oe as default};
