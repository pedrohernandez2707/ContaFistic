import{Q as k,a as c}from"./QBreadcrumbs.9bfe4400.js";import{_ as B,U as N,r as m,V as U,W as q,Z as o,a1 as n,a2 as h,a as d,a4 as E,b5 as F,$ as r,a5 as V,b6 as b,a6 as g}from"./index.8a1bf270.js";import{d as w}from"./QList.30e78d99.js";import{Q as $}from"./QForm.4e813ace.js";import{Q as G,a as L}from"./QTable.4cac302a.js";import{Q as T}from"./QSpinnerBall.cacf6e14.js";import{a as u,s as C}from"./axios.d4a7e69c.js";import"./selection.775008b3.js";import"./axios.bf56c3c5.js";const A=N({setup(){const e=m([]),t=m([]),_=m([{id:1,tipo_empresa:"Contibuyente Normal"},{id:2,tipo_empresa:"Peque\xF1o Contribuyente"}]),s=m({id:null,nombre:"",contribuyente:"",tipoempresa:"",flag_gasolinera:!1,flag_hotel:!1,activo:!0}),p=m(""),v=[{name:"nombre",label:"Nombre",field:"nombre_empresa",align:"left"},{name:"contribuyente",label:"Contribuyente",field:"nombre_contribuyente",align:"left"},{name:"tipoempresa",label:"Tipo de Empresa",field:"idtipoempresa",align:"left"},{name:"flag_gasolinera",label:"Es Gasolinera",field:"flag_gasolinera",align:"left",format:a=>a?"S\xED":"No"},{name:"flag_hotel",label:"Es Hotel",field:"flag_hotel",align:"left",format:a=>a?"S\xED":"No"},{name:"activo",label:"Activo",field:"activo",align:"left",format:a=>a?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width:100px"}],l=()=>{u.get("/contribuyentes").then(a=>{t.value=a.data})},f=()=>{d.show({message:"Cargando empresas"}),u.get("/empresas").then(a=>{e.value=a.data,d.hide()})},Q=async()=>{if(d.show({message:"Guardando...",spinner:T}),s.value.id===null){const a={_nombre_empresa:s.value.nombre,_idcontribuyente:s.value.contribuyente,_idtipoempresa:s.value.tipoempresa,_flag_gasolinera:s.value.flag_gasolinera,_flag_hotel:s.value.flag_hotel,_us_crea:"usrtest",_flag_activo:!0,_idEmpresa:0};await u.post("empresas",a).then(i=>{C("Empresa guardada correctamente!")})}else{const a={_nombre_empresa:s.value.nombre,_idcontribuyente:s.value.contribuyente,_idtipoempresa:s.value.tipoempresa,_flag_gasolinera:s.value.flag_gasolinera,_flag_hotel:s.value.flag_hotel,_us_crea:"usrtest",_flag_activo:s.value.activo,_idEmpresa:s.value.id};await u.put("empresas",a).then(i=>{C("Empresa guardada correctamente!")})}d.hide(),f(),y()},S=a=>{s.value={id:a.id,nombre:a.nombre_empresa,contribuyente:a.idcontribuyente,tipoempresa:a.idtipoempresa,flag_gasolinera:a.flag_gasolinera,flag_hotel:a.flag_hotel,activo:a.activo}},y=()=>{s.value={id:null,nombre:"",contribuyente:"",tipoempresa:"",flag_gasolinera:!1,flag_hotel:!1,activo:!0}};return{empresas:e,contribuyentes:t,tiposEmpresa:_,form:s,filtro:p,columns:v,getContribuyentes:l,getEmpresas:f,resetForm:y,guardarEmpresa:Q,editarEmpresa:S,filtrarEmpresas:()=>{const a=p.value.toLowerCase();return e.value.filter(i=>i.nombre_empresa.toLowerCase().includes(a)||i.idcontribuyente.toString().toLowerCase().includes(a)||i.idtipoempresa.toString().toLowerCase().includes(a))}}},mounted(){this.getEmpresas(),this.getContribuyentes()}}),D={class:"q-pa-sm"},H={class:"row q-col-gutter-sm"},P={class:"col-12"},I={class:"col-6"},M={class:"col-6"},W={class:"col-2"},Z={class:"col-4"},j={class:"col-2"},z=r("div",{class:"col-12"},null,-1),J={class:"col-12 text-center q-gutter-md"},K=r("div",{class:"text-h5"},"Empresas",-1);function O(e,t,_,s,p,v){return U(),q("div",D,[o(k,null,{default:n(()=>[o(c,{label:"Home",icon:"home"}),o(c,{label:"Configuraci\xF3n",icon:"settings"}),o(c,{label:"Gesti\xF3n de Empresas",icon:"apartment"})]),_:1}),o(h,{class:"q-mt-md"},{default:n(()=>[o(E,null,{default:n(()=>[o($,{onSubmit:F(e.guardarEmpresa,["prevent"])},{default:n(()=>[r("div",H,[r("div",P,[o(V,{modelValue:e.form.nombre,"onUpdate:modelValue":t[0]||(t[0]=l=>e.form.nombre=l),label:"Nombre de la empresa",outlined:"",dense:""},null,8,["modelValue"])]),r("div",I,[o(w,{modelValue:e.form.contribuyente,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.contribuyente=l),options:e.contribuyentes,label:"Contribuyente",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre_contribuyente"},null,8,["modelValue","options"])]),r("div",M,[o(w,{modelValue:e.form.tipoempresa,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.tipoempresa=l),options:e.tiposEmpresa,label:"Tipo de Empresa",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"tipo_empresa"},null,8,["modelValue","options"])]),r("div",W,[o(b,{modelValue:e.form.flag_gasolinera,"onUpdate:modelValue":t[3]||(t[3]=l=>e.form.flag_gasolinera=l),label:"Es Gasolinera"},null,8,["modelValue"])]),r("div",Z,[o(b,{modelValue:e.form.flag_hotel,"onUpdate:modelValue":t[4]||(t[4]=l=>e.form.flag_hotel=l),label:"Es Hotel"},null,8,["modelValue"])]),r("div",j,[o(b,{modelValue:e.form.activo,"onUpdate:modelValue":t[5]||(t[5]=l=>e.form.activo=l),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),z,r("div",J,[o(g,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),o(g,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(h,{class:"q-my-md"},{default:n(()=>[o(E,null,{default:n(()=>[K,o(V,{modelValue:e.filtro,"onUpdate:modelValue":t[6]||(t[6]=l=>e.filtro=l),label:"Buscar empresas",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o(G,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarEmpresas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":n(l=>[o(L,{props:l},{default:n(()=>[o(g,{icon:"edit",color:"primary",dense:"",onClick:f=>e.editarEmpresa(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})])}var re=B(A,[["render",O]]);export{re as default};
