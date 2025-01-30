import{a as p,Q as U}from"./QBreadcrumbs.0a672f0a.js";import{_ as D,d as F,g as u,o as I,aF as $,w as s,P as q,a as r,e as o,i as V,aI as P,f as t,j as v,ba as A,l as b,Q as w}from"./index.cfa62c89.js";import{h as N}from"./QSelect.094e4cd6.js";import{Q as E}from"./QForm.984041a7.js";import{Q as G,a as L}from"./QTable.a99d1b42.js";import{Q as T}from"./QPage.1777d14d.js";import{Q as j}from"./QSpinnerBall.ef96c00c.js";import{a as m,s as Q}from"./axios.55b105d8.js";import"./selection.fe56f4bf.js";import"./QList.0f7219f7.js";const J=F({setup(){const l=u([]),n=u([]),d=u([]),g=()=>{const a=q.getItem("empresa");let i;if(a)i=JSON.parse(a.toString()).id;else{alert("Debe seleccionar una empresa");return}r.show({message:"Cargando cuentas nivel 1..."}),m.get("cuentasn1",{params:{id_empresa:i}}).then(h=>{l.value=h.data,r.hide()})},_=()=>{r.show({message:"Cargando cuentas nivel 2..."}),m.get("cuentasn2/"+e.value.id_nivel1).then(a=>{n.value=a.data,r.hide()})},c=()=>{r.show({message:"Cargando cuentas nivel 3..."}),m.get("cuentasn3").then(a=>{d.value=a.data,r.hide()})},e=u({id:null,nombre:"",id_nivel1:null,id_nivel2:null,correlativo:"",activo:!0}),f=u(""),S=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"id_nivel1",label:"ID Nivel 1",field:"id_nivel1",align:"left"},{name:"nombre_nivel1",label:"Nombre Nivel 1",field:"nombre_nivel1",align:"left"},{name:"id_nivel2",label:"ID Nivel 2",field:"id_nivel2",align:"left"},{name:"nombre_nivel2",label:"Nombre Nivel 2",field:"nombre_nivel2",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],y=async()=>{if(r.show({message:"Guardando cuenta...",spinner:j}),e.value.id===null||e.value.id===""){const a={_nombre:e.value.nombre,_id_nivel1:e.value.id_nivel1,_id_nivel2:e.value.id_nivel2,_us_crea:"usrtest",_id:e.value.id,_activo:e.value.activo};await m.post("cuentasn3",a).then(i=>{Q("Cuenta nivel 3 guardada correctamente.")})}else{const a={_nombre:e.value.nombre,_id_nivel1:e.value.id_nivel1,_id_nivel2:e.value.id_nivel2,_us_crea:"usrtest",_id:e.value.id,_activo:e.value.activo};await m.put("cuentasn3",a).then(i=>{Q("Cuenta nivel 3 guardada correctamente.")})}r.hide(),c(),C()},k=a=>{e.value={...a}},B=a=>{d.value=d.value.filter(i=>i.id!==a)},C=()=>{e.value={id:null,nombre:"",id_nivel1:null,id_nivel2:null,correlativo:"",activo:!0}};return{cuentasNivel1:l,cuentasNivel2:n,cuentas:d,form:e,filtro:f,columns:S,resetForm:C,getCuentasn1:g,getCuentasn2:_,getCuentasn3:c,guardarCuenta:y,editarCuenta:k,eliminarCuenta:B,filtrarCuentas:()=>{const a=f.value.toLowerCase();return d.value.filter(i=>i.id.toString().includes(a)||i.nombre.toLowerCase().includes(a)||i.id_nivel1.toString().includes(a)||i.correlativo.toString().includes(a)||(i.activo?"s\xED":"no").includes(a))}}},mounted(){this.getCuentasn1(),this.getCuentasn3()}}),M={class:"row q-col-gutter-sm"},O={class:"col-2"},z={class:"col-10"},H={class:"col-4"},K={class:"col-5"},R={class:"col-2"},W={class:"col-1"},X=t("div",{class:"col-12"},null,-1),Y={class:"col-12 text-center q-gutter-sm"},Z=t("div",{class:"text-h5"},"Cuentas nivel 3",-1);function x(l,n,d,g,_,c){return I(),$(T,{padding:""},{default:s(()=>[o(U,null,{default:s(()=>[o(p,{label:"Sistema",icon:"home"}),o(p,{label:"Configuraci\xF3n",icon:"widgets"}),o(p,{label:"Gesti\xF3n de Cuentas Nivel 3",icon:"looks_3"})]),_:1}),o(w,{class:"q-mt-md"},{default:s(()=>[o(V,null,{default:s(()=>[o(E,{onSubmit:P(l.guardarCuenta,["prevent"])},{default:s(()=>[t("div",M,[t("div",O,[o(v,{modelValue:l.form.id,"onUpdate:modelValue":n[0]||(n[0]=e=>l.form.id=e),label:"Codigo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),t("div",z,[o(v,{modelValue:l.form.nombre,"onUpdate:modelValue":n[1]||(n[1]=e=>l.form.nombre=e),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),t("div",H,[o(N,{modelValue:l.form.id_nivel1,"onUpdate:modelValue":[n[2]||(n[2]=e=>l.form.id_nivel1=e),l.getCuentasn2],options:l.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options","onUpdate:modelValue"])]),t("div",K,[o(N,{modelValue:l.form.id_nivel2,"onUpdate:modelValue":n[3]||(n[3]=e=>l.form.id_nivel2=e),options:l.cuentasNivel2,label:"Cuenta Nivel 2",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",disable:!l.form.id_nivel1},null,8,["modelValue","options","disable"])]),t("div",R,[o(v,{modelValue:l.form.correlativo,"onUpdate:modelValue":n[4]||(n[4]=e=>l.form.correlativo=e),label:"Correlativo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),t("div",W,[o(A,{modelValue:l.form.activo,"onUpdate:modelValue":n[5]||(n[5]=e=>l.form.activo=e),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),X,t("div",Y,[o(b,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width",disable:!0}),o(b,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:l.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(w,{class:"q-my-md"},{default:s(()=>[o(V,null,{default:s(()=>[Z,o(v,{modelValue:l.filtro,"onUpdate:modelValue":n[6]||(n[6]=e=>l.filtro=e),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o(G,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:l.filtrarCuentas(),columns:l.columns,"row-key":"id"},{"body-cell-acciones":s(e=>[o(L,{props:e},{default:s(()=>[o(b,{icon:"edit",color:"primary",dense:"",onClick:f=>l.editarCuenta(e.row),disable:!0},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var me=D(J,[["render",x]]);export{me as default};
