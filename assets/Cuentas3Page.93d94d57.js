import{a as b,Q as B}from"./QBreadcrumbs.4144acfc.js";import{_ as U,d as F,g as u,o as q,aF as D,w as s,a as d,e as o,i as h,aI as I,f as i,j as v,ba as $,l as p,Q as V}from"./index.e60fa00d.js";import{h as w}from"./QSelect.70b07cba.js";import{Q as A}from"./QForm.b9c5a55d.js";import{Q as E,a as G}from"./QTable.bfefe082.js";import{Q as L}from"./QPage.b16c688f.js";import{Q as P}from"./QSpinnerBall.faefad3d.js";import{a as m,s as Q}from"./axios.a61b5a41.js";import"./selection.21886ae7.js";import"./QList.5561c62f.js";const T=F({setup(){const l=u([]),n=u([]),r=u([]),g=()=>{d.show({message:"Cargando cuentas nivel 1..."}),m.get("cuentasn1").then(a=>{l.value=a.data,d.hide()})},_=()=>{d.show({message:"Cargando cuentas nivel 2..."}),m.get("cuentasn2/"+e.value.id_nivel1).then(a=>{n.value=a.data,d.hide()})},c=()=>{d.show({message:"Cargando cuentas nivel 3..."}),m.get("cuentasn3").then(a=>{r.value=a.data,d.hide()})},e=u({id:null,nombre:"",id_nivel1:null,id_nivel2:null,correlativo:"",activo:!0}),f=u(""),N=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"id_nivel1",label:"ID Nivel 1",field:"id_nivel1",align:"left"},{name:"nombre_nivel1",label:"Nombre Nivel 1",field:"nombre_nivel1",align:"left"},{name:"id_nivel2",label:"ID Nivel 2",field:"id_nivel2",align:"left"},{name:"nombre_nivel2",label:"Nombre Nivel 2",field:"nombre_nivel2",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],y=async()=>{if(d.show({message:"Guardando cuenta...",spinner:P}),e.value.id===null||e.value.id===""){const a={_nombre:e.value.nombre,_id_nivel1:e.value.id_nivel1,_id_nivel2:e.value.id_nivel2,_us_crea:"usrtest",_id:e.value.id,_activo:e.value.activo};await m.post("cuentasn3",a).then(t=>{Q("Cuenta nivel 3 guardada correctamente.")})}else{const a={_nombre:e.value.nombre,_id_nivel1:e.value.id_nivel1,_id_nivel2:e.value.id_nivel2,_us_crea:"usrtest",_id:e.value.id,_activo:e.value.activo};await m.put("cuentasn3",a).then(t=>{Q("Cuenta nivel 3 guardada correctamente.")})}d.hide(),c(),C()},S=a=>{e.value={...a}},k=a=>{r.value=r.value.filter(t=>t.id!==a)},C=()=>{e.value={id:null,nombre:"",id_nivel1:null,id_nivel2:null,correlativo:"",activo:!0}};return{cuentasNivel1:l,cuentasNivel2:n,cuentas:r,form:e,filtro:f,columns:N,resetForm:C,getCuentasn1:g,getCuentasn2:_,getCuentasn3:c,guardarCuenta:y,editarCuenta:S,eliminarCuenta:k,filtrarCuentas:()=>{const a=f.value.toLowerCase();return r.value.filter(t=>t.id.toString().includes(a)||t.nombre.toLowerCase().includes(a)||t.id_nivel1.toString().includes(a)||t.correlativo.toString().includes(a)||(t.activo?"s\xED":"no").includes(a))}}},mounted(){this.getCuentasn1(),this.getCuentasn3()}}),j={class:"row q-col-gutter-sm"},M={class:"col-2"},z={class:"col-10"},H={class:"col-4"},J={class:"col-5"},K={class:"col-2"},O={class:"col-1"},R=i("div",{class:"col-12"},null,-1),W={class:"col-12 text-center q-gutter-sm"},X=i("div",{class:"text-h5"},"Cuentas nivel 3",-1);function Y(l,n,r,g,_,c){return q(),D(L,{padding:""},{default:s(()=>[o(B,null,{default:s(()=>[o(b,{label:"Sistema",icon:"home"}),o(b,{label:"Configuraci\xF3n",icon:"widgets"}),o(b,{label:"Gesti\xF3n de Cuentas Nivel 3",icon:"looks_3"})]),_:1}),o(V,{class:"q-mt-md"},{default:s(()=>[o(h,null,{default:s(()=>[o(A,{onSubmit:I(l.guardarCuenta,["prevent"])},{default:s(()=>[i("div",j,[i("div",M,[o(v,{modelValue:l.form.id,"onUpdate:modelValue":n[0]||(n[0]=e=>l.form.id=e),label:"Codigo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),i("div",z,[o(v,{modelValue:l.form.nombre,"onUpdate:modelValue":n[1]||(n[1]=e=>l.form.nombre=e),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),i("div",H,[o(w,{modelValue:l.form.id_nivel1,"onUpdate:modelValue":[n[2]||(n[2]=e=>l.form.id_nivel1=e),l.getCuentasn2],options:l.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options","onUpdate:modelValue"])]),i("div",J,[o(w,{modelValue:l.form.id_nivel2,"onUpdate:modelValue":n[3]||(n[3]=e=>l.form.id_nivel2=e),options:l.cuentasNivel2,label:"Cuenta Nivel 2",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",disable:!l.form.id_nivel1},null,8,["modelValue","options","disable"])]),i("div",K,[o(v,{modelValue:l.form.correlativo,"onUpdate:modelValue":n[4]||(n[4]=e=>l.form.correlativo=e),label:"Correlativo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),i("div",O,[o($,{modelValue:l.form.activo,"onUpdate:modelValue":n[5]||(n[5]=e=>l.form.activo=e),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),R,i("div",W,[o(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),o(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:l.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(V,{class:"q-my-md"},{default:s(()=>[o(h,null,{default:s(()=>[X,o(v,{modelValue:l.filtro,"onUpdate:modelValue":n[6]||(n[6]=e=>l.filtro=e),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o(E,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:l.filtrarCuentas(),columns:l.columns,"row-key":"id"},{"body-cell-acciones":s(e=>[o(G,{props:e},{default:s(()=>[o(p,{icon:"edit",color:"primary",dense:"",onClick:f=>l.editarCuenta(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var re=U(T,[["render",Y]]);export{re as default};