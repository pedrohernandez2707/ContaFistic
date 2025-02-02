import{_ as k,d as q,g as n,o as B,c as D,e as t,w as s,Q as E,a as m,i as w,aA as F,f as i,j as b,az as A,b8 as f,l as g}from"./index.762d07e4.js";import{h as _}from"./QSelect.fdb0a187.js";import{Q as L}from"./QForm.97d69fac.js";import{Q as T,a as $}from"./QTable.af352f9e.js";import{Q as G}from"./QSpinnerBall.99026ed7.js";import{a as u,s as C}from"./axios.3e09c041.js";import"./selection.a5915eb9.js";import"./QList.144654f9.js";const P=q({setup(o,{emit:l}){const d=n([]),p=n([]),v=n([{id:1,tipo_empresa:"Contibuyente Normal"},{id:2,tipo_empresa:"Peque\xF1o Contribuyente"}]),y=n([{id:1,tipo:"Bienes"},{id:2,tipo:"Servicios"}]),e=n({id:null,nombre:"",contribuyente:"",tipoempresa:"",flag_gasolinera:!1,flag_hotel:!1,activo:!0,distribucionVentas:"",codigo_establecimiento:null}),c=n(""),Q=[{name:"nombre",label:"Nombre",field:"nombre_empresa",align:"left"},{name:"contribuyente",label:"Contribuyente",field:"nombre_contribuyente",align:"left"},{name:"tipoempresa",label:"Tipo de Empresa",field:"idtipoempresa",align:"left"},{name:"flag_gasolinera",label:"Es Gasolinera",field:"flag_gasolinera",align:"left",format:a=>a?"S\xED":"No"},{name:"flag_hotel",label:"Es Hotel",field:"flag_hotel",align:"left",format:a=>a?"S\xED":"No"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"distribucion",label:"Distribucion Ventas",field:"distribucion",align:"left"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width:100px"}],S=()=>{u.get("/contribuyentes").then(a=>{p.value=a.data})},V=()=>{m.show({message:"Cargando empresas"}),u.get("/empresas").then(a=>{d.value=a.data,m.hide()})},N=async()=>{if(m.show({message:"Guardando...",spinner:G}),e.value.id===null){const a={_nombre_empresa:e.value.nombre,_idcontribuyente:e.value.contribuyente,_idtipoempresa:e.value.tipoempresa,_flag_gasolinera:e.value.flag_gasolinera,_flag_hotel:e.value.flag_hotel,_us_crea:"usrtest",_flag_activo:!0,_idEmpresa:0,_distribucion:e.value.distribucionVentas,_codigo_establecimiento:Number(e.value.codigo_establecimiento)};await u.post("empresas",a).then(r=>{C("Empresa guardada correctamente!")})}else{const a={_nombre_empresa:e.value.nombre,_idcontribuyente:e.value.contribuyente,_idtipoempresa:e.value.tipoempresa,_flag_gasolinera:e.value.flag_gasolinera,_flag_hotel:e.value.flag_hotel,_us_crea:"usrtest",_flag_activo:e.value.activo,_idEmpresa:e.value.id,_distribucion:e.value.distribucionVentas,_codigo_establecimiento:Number(e.value.codigo_establecimiento)};await u.put("empresas",a).then(r=>{C("Empresa guardada correctamente!")}),l("empresa-agregada",a)}m.hide(),V(),h()},U=a=>{e.value={id:a.id,nombre:a.nombre_empresa,contribuyente:a.idcontribuyente,tipoempresa:a.idtipoempresa,flag_gasolinera:a.flag_gasolinera,flag_hotel:a.flag_hotel,activo:a.activo,distribucionVentas:a.distribucion,codigo_establecimiento:a.codigo_establecimiento}},h=()=>{e.value={id:null,nombre:"",contribuyente:"",tipoempresa:"",flag_gasolinera:!1,flag_hotel:!1,activo:!0,distribucionVentas:"",codigo_establecimiento:null}};return{empresas:d,contribuyentes:p,tiposEmpresa:v,form:e,filtro:c,columns:Q,distribuciones:y,getContribuyentes:S,getEmpresas:V,resetForm:h,guardarEmpresa:N,editarEmpresa:U,filtrarEmpresas:()=>{const a=c.value.toLowerCase();return d.value.filter(r=>r.nombre_empresa.toLowerCase().includes(a)||r.idcontribuyente.toString().toLowerCase().includes(a)||r.idtipoempresa.toString().toLowerCase().includes(a))}}},mounted(){this.getEmpresas(),this.getContribuyentes()}}),H={class:"q-pa-sm"},j={class:"row q-col-gutter-sm"},z={class:"col-10"},I={class:"text-subtitle2"},M={class:"col-2"},J={class:"col-6"},K={class:"col-3"},O={class:"col-3"},R={class:"col-2"},W={class:"col-4"},X={class:"col-2"},Y=i("div",{class:"col-12"},null,-1),Z={class:"col-12 text-center q-gutter-md"},x=i("div",{class:"text-h5"},"Empresas",-1);function ee(o,l,d,p,v,y){return B(),D("div",H,[t(E,{class:"q-mt-md"},{default:s(()=>[t(w,null,{default:s(()=>[t(L,{onSubmit:F(o.guardarEmpresa,["prevent"])},{default:s(()=>[i("div",j,[i("div",z,[t(b,{modelValue:o.form.nombre,"onUpdate:modelValue":l[0]||(l[0]=e=>o.form.nombre=e),label:"Nombre de la empresa",outlined:"",dense:""},{prepend:s(()=>[i("div",I,A(o.form.id),1)]),_:1},8,["modelValue"])]),i("div",M,[t(b,{modelValue:o.form.codigo_establecimiento,"onUpdate:modelValue":l[1]||(l[1]=e=>o.form.codigo_establecimiento=e),type:"number",label:"C\xF3digo Establecimiento",outlined:"",dense:""},null,8,["modelValue"])]),i("div",J,[t(_,{modelValue:o.form.contribuyente,"onUpdate:modelValue":l[2]||(l[2]=e=>o.form.contribuyente=e),options:o.contribuyentes,label:"Contribuyente",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre_contribuyente"},null,8,["modelValue","options"])]),i("div",K,[t(_,{modelValue:o.form.tipoempresa,"onUpdate:modelValue":l[3]||(l[3]=e=>o.form.tipoempresa=e),options:o.tiposEmpresa,label:"Tipo de Empresa",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"tipo_empresa"},null,8,["modelValue","options"])]),i("div",O,[t(_,{modelValue:o.form.distribucionVentas,"onUpdate:modelValue":l[4]||(l[4]=e=>o.form.distribucionVentas=e),options:o.distribuciones,label:"Distribuci\xF3n de ventas",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"tipo","option-label":"tipo"},null,8,["modelValue","options"])]),i("div",R,[t(f,{modelValue:o.form.flag_gasolinera,"onUpdate:modelValue":l[5]||(l[5]=e=>o.form.flag_gasolinera=e),label:"Es Gasolinera"},null,8,["modelValue"])]),i("div",W,[t(f,{modelValue:o.form.flag_hotel,"onUpdate:modelValue":l[6]||(l[6]=e=>o.form.flag_hotel=e),label:"Es Hotel"},null,8,["modelValue"])]),i("div",X,[t(f,{modelValue:o.form.activo,"onUpdate:modelValue":l[7]||(l[7]=e=>o.form.activo=e),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),Y,i("div",Z,[t(g,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),t(g,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:o.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),t(E,{class:"q-my-md"},{default:s(()=>[t(w,null,{default:s(()=>[x,t(b,{modelValue:o.filtro,"onUpdate:modelValue":l[8]||(l[8]=e=>o.filtro=e),label:"Buscar empresas",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),t(T,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:o.filtrarEmpresas(),columns:o.columns,"row-key":"id"},{"body-cell-acciones":s(e=>[t($,{props:e},{default:s(()=>[t(g,{icon:"edit",color:"primary",dense:"",onClick:c=>o.editarEmpresa(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])}var me=k(P,[["render",ee]]);export{me as default};
