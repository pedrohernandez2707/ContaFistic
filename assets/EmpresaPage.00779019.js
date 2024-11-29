import{Q as k,a as c}from"./QBreadcrumbs.0c9f2397.js";import{_ as N,d as U,g as r,o as q,c as F,e as a,w as n,Q as E,a as m,i as w,aI as D,f as i,j as C,ba as f,l as b}from"./index.8c6caead.js";import{h as g}from"./QSelect.0bc76de2.js";import{Q as G}from"./QForm.c4059c75.js";import{Q as L,a as T}from"./QTable.1bd6d9d4.js";import{Q as $}from"./QSpinnerBall.20a93ea4.js";import{a as u,s as Q}from"./axios.2465e07b.js";import"./selection.bfe3aa9e.js";import"./QList.6d40fe08.js";const A=U({setup(){const e=r([]),t=r([]),v=r([{id:1,tipo_empresa:"Contibuyente Normal"},{id:2,tipo_empresa:"Peque\xF1o Contribuyente"}]),_=r([{id:1,tipo:"Bienes"},{id:2,tipo:"Servicios"}]),s=r({id:null,nombre:"",contribuyente:"",tipoempresa:"",flag_gasolinera:!1,flag_hotel:!1,activo:!0,distribucionVentas:""}),p=r(""),l=[{name:"nombre",label:"Nombre",field:"nombre_empresa",align:"left"},{name:"contribuyente",label:"Contribuyente",field:"nombre_contribuyente",align:"left"},{name:"tipoempresa",label:"Tipo de Empresa",field:"idtipoempresa",align:"left"},{name:"flag_gasolinera",label:"Es Gasolinera",field:"flag_gasolinera",align:"left",format:o=>o?"S\xED":"No"},{name:"flag_hotel",label:"Es Hotel",field:"flag_hotel",align:"left",format:o=>o?"S\xED":"No"},{name:"activo",label:"Activo",field:"activo",align:"left",format:o=>o?"S\xED":"No"},{name:"distribucion",label:"Distribucion Ventas",field:"distribucion",align:"left"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width:100px"}],y=()=>{u.get("/contribuyentes").then(o=>{t.value=o.data})},V=()=>{m.show({message:"Cargando empresas"}),u.get("/empresas").then(o=>{e.value=o.data,m.hide()})},S=async()=>{if(m.show({message:"Guardando...",spinner:$}),s.value.id===null){const o={_nombre_empresa:s.value.nombre,_idcontribuyente:s.value.contribuyente,_idtipoempresa:s.value.tipoempresa,_flag_gasolinera:s.value.flag_gasolinera,_flag_hotel:s.value.flag_hotel,_us_crea:"usrtest",_flag_activo:!0,_idEmpresa:0,_distribucion:s.value.distribucionVentas};await u.post("empresas",o).then(d=>{Q("Empresa guardada correctamente!")})}else{const o={_nombre_empresa:s.value.nombre,_idcontribuyente:s.value.contribuyente,_idtipoempresa:s.value.tipoempresa,_flag_gasolinera:s.value.flag_gasolinera,_flag_hotel:s.value.flag_hotel,_us_crea:"usrtest",_flag_activo:s.value.activo,_idEmpresa:s.value.id,_distribucion:s.value.distribucionVentas};await u.put("empresas",o).then(d=>{Q("Empresa guardada correctamente!")})}m.hide(),V(),h()},B=o=>{s.value={id:o.id,nombre:o.nombre_empresa,contribuyente:o.idcontribuyente,tipoempresa:o.idtipoempresa,flag_gasolinera:o.flag_gasolinera,flag_hotel:o.flag_hotel,activo:o.activo,distribucionVentas:o.distribucion}},h=()=>{s.value={id:null,nombre:"",contribuyente:"",tipoempresa:"",flag_gasolinera:!1,flag_hotel:!1,activo:!0,distribucionVentas:""}};return{empresas:e,contribuyentes:t,tiposEmpresa:v,form:s,filtro:p,columns:l,distribuciones:_,getContribuyentes:y,getEmpresas:V,resetForm:h,guardarEmpresa:S,editarEmpresa:B,filtrarEmpresas:()=>{const o=p.value.toLowerCase();return e.value.filter(d=>d.nombre_empresa.toLowerCase().includes(o)||d.idcontribuyente.toString().toLowerCase().includes(o)||d.idtipoempresa.toString().toLowerCase().includes(o))}}},mounted(){this.getEmpresas(),this.getContribuyentes()}}),H={class:"q-pa-sm"},P={class:"row q-col-gutter-sm"},I={class:"col-12"},j={class:"col-6"},M={class:"col-3"},z={class:"col-3"},J={class:"col-2"},K={class:"col-4"},O={class:"col-2"},R=i("div",{class:"col-12"},null,-1),W={class:"col-12 text-center q-gutter-md"},X=i("div",{class:"text-h5"},"Empresas",-1);function Y(e,t,v,_,s,p){return q(),F("div",H,[a(k,null,{default:n(()=>[a(c,{label:"Home",icon:"home"}),a(c,{label:"Configuraci\xF3n",icon:"settings"}),a(c,{label:"Gesti\xF3n de Empresas",icon:"apartment"})]),_:1}),a(E,{class:"q-mt-md"},{default:n(()=>[a(w,null,{default:n(()=>[a(G,{onSubmit:D(e.guardarEmpresa,["prevent"])},{default:n(()=>[i("div",P,[i("div",I,[a(C,{modelValue:e.form.nombre,"onUpdate:modelValue":t[0]||(t[0]=l=>e.form.nombre=l),label:"Nombre de la empresa",outlined:"",dense:""},null,8,["modelValue"])]),i("div",j,[a(g,{modelValue:e.form.contribuyente,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.contribuyente=l),options:e.contribuyentes,label:"Contribuyente",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre_contribuyente"},null,8,["modelValue","options"])]),i("div",M,[a(g,{modelValue:e.form.tipoempresa,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.tipoempresa=l),options:e.tiposEmpresa,label:"Tipo de Empresa",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"tipo_empresa"},null,8,["modelValue","options"])]),i("div",z,[a(g,{modelValue:e.form.distribucionVentas,"onUpdate:modelValue":t[3]||(t[3]=l=>e.form.distribucionVentas=l),options:e.distribuciones,label:"Distribuci\xF3n de ventas",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"tipo","option-label":"tipo"},null,8,["modelValue","options"])]),i("div",J,[a(f,{modelValue:e.form.flag_gasolinera,"onUpdate:modelValue":t[4]||(t[4]=l=>e.form.flag_gasolinera=l),label:"Es Gasolinera"},null,8,["modelValue"])]),i("div",K,[a(f,{modelValue:e.form.flag_hotel,"onUpdate:modelValue":t[5]||(t[5]=l=>e.form.flag_hotel=l),label:"Es Hotel"},null,8,["modelValue"])]),i("div",O,[a(f,{modelValue:e.form.activo,"onUpdate:modelValue":t[6]||(t[6]=l=>e.form.activo=l),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),R,i("div",W,[a(b,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),a(b,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),a(E,{class:"q-my-md"},{default:n(()=>[a(w,null,{default:n(()=>[X,a(C,{modelValue:e.filtro,"onUpdate:modelValue":t[7]||(t[7]=l=>e.filtro=l),label:"Buscar empresas",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),a(L,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarEmpresas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":n(l=>[a(T,{props:l},{default:n(()=>[a(b,{icon:"edit",color:"primary",dense:"",onClick:y=>e.editarEmpresa(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])}var re=N(A,[["render",Y]]);export{re as default};
