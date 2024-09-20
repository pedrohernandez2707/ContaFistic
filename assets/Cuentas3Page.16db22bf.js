import{a as b,Q as B}from"./QBreadcrumbs.31360e88.js";import{_ as U,U as $,r as u,V as q,aB as D,a1 as s,a as d,Z as o,a4 as V,b5 as F,$ as i,a5 as v,b6 as A,a6 as p,a2 as h}from"./index.2a212af4.js";import{d as w}from"./QList.2d7172c3.js";import{Q as I}from"./QForm.fb281c9a.js";import{Q as E,a as G}from"./QTable.9a8fd894.js";import{Q as L}from"./QPage.21e0a9f6.js";import{Q as P}from"./QSpinnerBall.d26f6390.js";import{a as m,s as N}from"./axios.1e7a8ac5.js";import"./selection.ddfe4220.js";import"./axios.bf56c3c5.js";const T=$({setup(){const l=u([]),n=u([]),r=u([]),g=()=>{d.show({message:"Cargando cuentas nivel 1..."}),m.get("cuentasn1").then(a=>{l.value=a.data,d.hide()})},_=()=>{d.show({message:"Cargando cuentas nivel 2..."}),m.get("cuentasn2/"+e.value.id_nivel1).then(a=>{n.value=a.data,d.hide()})},c=()=>{d.show({message:"Cargando cuentas nivel 3..."}),m.get("cuentasn3").then(a=>{r.value=a.data,d.hide()})},e=u({id:null,nombre:"",id_nivel1:null,id_nivel2:null,correlativo:"",activo:!0}),f=u(""),Q=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"id_nivel1",label:"ID Nivel 1",field:"id_nivel1",align:"left"},{name:"nombre_nivel1",label:"Nombre Nivel 1",field:"nombre_nivel1",align:"left"},{name:"id_nivel2",label:"ID Nivel 2",field:"id_nivel2",align:"left"},{name:"nombre_nivel2",label:"Nombre Nivel 2",field:"nombre_nivel2",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],y=async()=>{if(d.show({message:"Guardando cuenta...",spinner:P}),e.value.id===null||e.value.id===""){const a={_nombre:e.value.nombre,_id_nivel1:e.value.id_nivel1,_id_nivel2:e.value.id_nivel2,_us_crea:"usrtest",_id:e.value.id,_activo:e.value.activo};await m.post("cuentasn3",a).then(t=>{N("Cuenta nivel 3 guardada correctamente.")})}else{const a={_nombre:e.value.nombre,_id_nivel1:e.value.id_nivel1,_id_nivel2:e.value.id_nivel2,_us_crea:"usrtest",_id:e.value.id,_activo:e.value.activo};await m.put("cuentasn3",a).then(t=>{N("Cuenta nivel 3 guardada correctamente.")})}d.hide(),c(),C()},S=a=>{e.value={...a}},k=a=>{r.value=r.value.filter(t=>t.id!==a)},C=()=>{e.value={id:null,nombre:"",id_nivel1:null,id_nivel2:null,correlativo:"",activo:!0}};return{cuentasNivel1:l,cuentasNivel2:n,cuentas:r,form:e,filtro:f,columns:Q,resetForm:C,getCuentasn1:g,getCuentasn2:_,getCuentasn3:c,guardarCuenta:y,editarCuenta:S,eliminarCuenta:k,filtrarCuentas:()=>{const a=f.value.toLowerCase();return r.value.filter(t=>t.id.toString().includes(a)||t.nombre.toLowerCase().includes(a)||t.id_nivel1.toString().includes(a)||t.correlativo.toString().includes(a)||(t.activo?"s\xED":"no").includes(a))}}},mounted(){this.getCuentasn1(),this.getCuentasn3()}}),M={class:"row q-col-gutter-sm"},Z={class:"col-2"},j={class:"col-10"},z={class:"col-4"},H={class:"col-5"},J={class:"col-2"},K={class:"col-1"},O=i("div",{class:"col-12"},null,-1),R={class:"col-12 text-center q-gutter-sm"},W=i("div",{class:"text-h5"},"Cuentas nivel 3",-1);function X(l,n,r,g,_,c){return q(),D(L,{padding:""},{default:s(()=>[o(B,null,{default:s(()=>[o(b,{label:"Sistema",icon:"home"}),o(b,{label:"Configuraci\xF3n",icon:"widgets"}),o(b,{label:"Gesti\xF3n de Cuentas Nivel 3",icon:"looks_3"})]),_:1}),o(h,{class:"q-mt-md"},{default:s(()=>[o(V,null,{default:s(()=>[o(I,{onSubmit:F(l.guardarCuenta,["prevent"])},{default:s(()=>[i("div",M,[i("div",Z,[o(v,{modelValue:l.form.id,"onUpdate:modelValue":n[0]||(n[0]=e=>l.form.id=e),label:"Codigo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),i("div",j,[o(v,{modelValue:l.form.nombre,"onUpdate:modelValue":n[1]||(n[1]=e=>l.form.nombre=e),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),i("div",z,[o(w,{modelValue:l.form.id_nivel1,"onUpdate:modelValue":[n[2]||(n[2]=e=>l.form.id_nivel1=e),l.getCuentasn2],options:l.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options","onUpdate:modelValue"])]),i("div",H,[o(w,{modelValue:l.form.id_nivel2,"onUpdate:modelValue":n[3]||(n[3]=e=>l.form.id_nivel2=e),options:l.cuentasNivel2,label:"Cuenta Nivel 2",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",disable:!l.form.id_nivel1},null,8,["modelValue","options","disable"])]),i("div",J,[o(v,{modelValue:l.form.correlativo,"onUpdate:modelValue":n[4]||(n[4]=e=>l.form.correlativo=e),label:"Correlativo",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),i("div",K,[o(A,{modelValue:l.form.activo,"onUpdate:modelValue":n[5]||(n[5]=e=>l.form.activo=e),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),O,i("div",R,[o(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),o(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:l.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(h,{class:"q-my-md"},{default:s(()=>[o(V,null,{default:s(()=>[W,o(v,{modelValue:l.filtro,"onUpdate:modelValue":n[6]||(n[6]=e=>l.filtro=e),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o(E,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:l.filtrarCuentas(),columns:l.columns,"row-key":"id"},{"body-cell-acciones":s(e=>[o(G,{props:e},{default:s(()=>[o(p,{icon:"edit",color:"primary",dense:"",onClick:f=>l.editarCuenta(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var re=U(T,[["render",X]]);export{re as default};
