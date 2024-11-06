import{a as _,Q as B}from"./QBreadcrumbs.303160ea.js";import{_ as F,d as $,g as m,o as q,aF as A,w as u,a as s,e as a,i as Q,aI as D,f as t,j as v,bl as E,ba as G,l as p,Q as N}from"./index.bb4f25cd.js";import{h as g}from"./QSelect.88e97e4b.js";import{Q as I}from"./QForm.85efcecc.js";import{Q as L,a as P}from"./QTable.5706489b.js";import{Q as T}from"./QPage.4580f26c.js";import{Q as M}from"./QSpinnerBall.2b73fa74.js";import{a as c,s as y}from"./axios.56cd7776.js";import"./selection.32bb6442.js";import"./QList.821f935d.js";const z=$({setup(){const e=m([]),o=m([]),b=m([]),r=m([]),C=()=>{s.show({message:"Cargando cuentas nivel 1..."}),c.get("cuentasn1").then(i=>{e.value=i.data,s.hide()})},V=()=>{s.show({message:"Cargando cuentas nivel 2..."}),c.get("cuentasn2/"+n.value.id_nivel1).then(i=>{o.value=i.data,s.hide()})},l=()=>{s.show({message:"Cargando cuentas nivel 3..."}),c.get("cuentasn3/"+n.value.id_nivel2).then(i=>{b.value=i.data,s.hide()})},f=()=>{s.show({message:"Cargando cuentas nivel 4..."}),c.get("cuentasn4").then(i=>{r.value=i.data,s.hide()})},n=m({id:null,nombre:"",id_nivel1:null,id_nivel2:null,id_nivel3:null,correlativo:"",activo:!1,saldo:0,modifica:!1,actividades_flujo:""}),h=m(""),U=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"nombre_nivel1",label:"Cta. Nivel 1",field:"nombre_nivel1",align:"left"},{name:"nombre_nivel2",label:"Cta. Nivel 2",field:"nombre_nivel2",align:"left"},{name:"nombre_nivel3",label:"Cta. Nivel 3",field:"nombre_nivel3",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"center",format:i=>i?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],k=async()=>{if(s.show({message:"Guardando cuenta...",spinner:M}),n.value.id===null||n.value.id===""){const i={_nombre:n.value.nombre,_id_nivel1:n.value.id_nivel1,_id_nivel2:n.value.id_nivel2,_id_nivel3:n.value.id_nivel3,_saldo:n.value.saldo,_flag_modifica:n.value.modifica,_actividades_flujo:n.value.actividades_flujo,_us_crea:"usrtest",_id:n.value.id,_activo:n.value.activo};await c.post("cuentasn4",i).then(d=>{y("Cuenta nivel 4 guardada correctamente.")})}else{const i={_nombre:n.value.nombre,_id_nivel1:n.value.id_nivel1,_id_nivel2:n.value.id_nivel2,_id_nivel3:n.value.id_nivel3,_saldo:n.value.saldo,_flag_modifica:n.value.modifica,_actividades_flujo:n.value.actividades_flujo,_us_crea:"usrtest",_id:n.value.id,_activo:n.value.activo};await c.put("cuentasn4",i).then(d=>{y("Cuenta nivel 4 guardada correctamente.")})}s.hide(),f(),w()},S=i=>{n.value={...i}},j=i=>{r.value=r.value.filter(d=>d.id!==i)},w=()=>{n.value={id:null,nombre:"",id_nivel1:null,id_nivel2:null,id_nivel3:null,correlativo:"",activo:!1,saldo:0,modifica:!1,actividades_flujo:""}};return{cuentasNivel1:e,cuentasNivel2:o,cuentasNivel3:b,cuentas:r,form:n,filtro:h,columns:U,resetForm:w,getCuentasn1:C,getCuentasn2:V,getCuentasn3:l,getCuentasn4:f,guardarCuenta:k,editarCuenta:S,eliminarCuenta:j,filtrarCuentas:()=>{const i=h.value.toLowerCase();return r.value.filter(d=>d.id.toString().includes(i)||d.nombre.toLowerCase().includes(i)||d.id_nivel1.toString().includes(i)||d.correlativo.toString().includes(i)||(d.activo?"s\xED":"no").includes(i))}}},mounted(){this.getCuentasn1(),this.getCuentasn4()}}),H={class:"row q-col-gutter-sm"},J={class:"col-2"},K={class:"col-10"},O={class:"col-4"},R={class:"col-4"},W={class:"col-4"},X={class:"col-2"},Y={class:"col-4"},Z={class:"col-6"},x={class:"col-2"},ee={class:"col-2"},le=t("div",{class:"col-12"},null,-1),ae={class:"col-12 text-center q-gutter-sm"},oe=t("div",{class:"text-h5"},"Cuentas nivel 4",-1);function ne(e,o,b,r,C,V){return q(),A(T,{padding:""},{default:u(()=>[a(B,null,{default:u(()=>[a(_,{label:"Sistema",icon:"home"}),a(_,{label:"Configuraci\xF3n",icon:"widgets"}),a(_,{label:"Gesti\xF3n de Cuentas Nivel 4",icon:"looks_4"})]),_:1}),a(N,{class:"q-mt-md"},{default:u(()=>[a(Q,null,{default:u(()=>[a(I,{onSubmit:D(e.guardarCuenta,["prevent"])},{default:u(()=>[t("div",H,[t("div",J,[a(v,{modelValue:e.form.id,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.id=l),label:"Codigo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",K,[a(v,{modelValue:e.form.nombre,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.nombre=l),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),t("div",O,[a(g,{modelValue:e.form.id_nivel1,"onUpdate:modelValue":[o[2]||(o[2]=l=>e.form.id_nivel1=l),e.getCuentasn2],options:e.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options","onUpdate:modelValue"])]),t("div",R,[a(g,{modelValue:e.form.id_nivel2,"onUpdate:modelValue":[o[3]||(o[3]=l=>e.form.id_nivel2=l),e.getCuentasn3],options:e.cuentasNivel2,label:"Cuenta Nivel 2",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options","onUpdate:modelValue"])]),t("div",W,[a(g,{modelValue:e.form.id_nivel3,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.id_nivel3=l),options:e.cuentasNivel3,label:"Cuenta Nivel 3",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options"])]),t("div",X,[a(v,{modelValue:e.form.correlativo,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.correlativo=l),label:"Correlativo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",Y,[a(v,{modelValue:e.form.saldo,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.saldo=l),label:"Saldo",outlined:"",dense:"",type:"number"},null,8,["modelValue"])]),t("div",Z,[a(v,{modelValue:e.form.actividades_flujo,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.actividades_flujo=l),label:"Actividades Flujo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",x,[a(E,{"left-label":"",modelValue:e.form.modifica,"onUpdate:modelValue":o[8]||(o[8]=l=>e.form.modifica=l),label:"Modifica"},null,8,["modelValue"])]),t("div",ee,[a(G,{modelValue:e.form.activo,"onUpdate:modelValue":o[9]||(o[9]=l=>e.form.activo=l),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),le,t("div",ae,[a(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),a(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),a(N,{class:"q-my-md"},{default:u(()=>[a(Q,null,{default:u(()=>[oe,a(v,{modelValue:e.filtro,"onUpdate:modelValue":o[10]||(o[10]=l=>e.filtro=l),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),a(L,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarCuentas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":u(l=>[a(P,{props:l},{default:u(()=>[a(p,{icon:"edit",color:"primary",dense:"",onClick:f=>e.editarCuenta(l.row)},null,8,["onClick"]),a(p,{icon:"delete",color:"negative",dense:"",onClick:f=>e.eliminarCuenta(l.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var be=F(z,[["render",ne]]);export{be as default};
