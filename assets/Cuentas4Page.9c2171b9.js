import{a as C,Q as q}from"./QBreadcrumbs.146d315b.js";import{_ as B,d as $,g as u,P as _,o as F,aF as D,w as r,a as d,e as o,i as S,aI as I,f as t,j as c,bl as A,ba as P,l as p,Q as y}from"./index.91e6d4f7.js";import{h as V}from"./QSelect.2fe94988.js";import{Q as G}from"./QForm.b991f9b4.js";import{Q as J,a as L}from"./QTable.9a8dde66.js";import{Q as O}from"./QPage.3d26b64d.js";import{Q as T}from"./QSpinnerBall.d12ddbce.js";import{a as f,s as M}from"./axios.1d8a1e65.js";import"./selection.f59d8827.js";import"./QList.0fd3cdb9.js";const z=$({setup(){const e=u([]),a=u([]),b=u([]),m=u([]),v=u(0),h=()=>{const n=_.getItem("empresa");if(n){const s=JSON.parse(n.toString());v.value=s.id}else{alert("Debe seleccionar una empresa");return}d.show({message:"Cargando cuentas nivel 1..."}),f.get("cuentasn1",{params:{id_empresa:v.value}}).then(s=>{e.value=s.data,d.hide()})},l=()=>{d.show({message:"Cargando cuentas nivel 2..."}),f.get("cuentasn2/"+i.value.id_nivel1).then(n=>{a.value=n.data,d.hide()})},g=()=>{d.show({message:"Cargando cuentas nivel 3..."}),f.get("cuentasn3/"+i.value.id_nivel2).then(n=>{b.value=n.data,d.hide()})},w=()=>{const n=_.getItem("empresa");if(n){const s=JSON.parse(n.toString());v.value=s.id}else{alert("Debe seleccionar una empresa");return}d.show({message:"Cargando cuentas nivel 4..."}),f.get("cuentasn4",{params:{id_empresa:v.value}}).then(s=>{m.value=s.data,d.hide()})},i=u({id:null,nombre:"",id_nivel1:null,id_nivel2:null,id_nivel3:null,correlativo:"",activo:!1,saldo:0,modifica:!1,actividades_flujo:""}),N=u(""),U=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"nombre_nivel1",label:"Cta. Nivel 1",field:"nombre_nivel1",align:"left"},{name:"nombre_nivel2",label:"Cta. Nivel 2",field:"nombre_nivel2",align:"left"},{name:"nombre_nivel3",label:"Cta. Nivel 3",field:"nombre_nivel3",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"center",format:n=>n?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],k=async()=>{if(!(i.value.id===null||i.value.id==="")){{d.show({message:"Guardando cuenta...",spinner:T});const n={_nombre:i.value.nombre,_id_nivel1:i.value.id_nivel1,_id_nivel2:i.value.id_nivel2,_id_nivel3:i.value.id_nivel3,_saldo:i.value.saldo,_flag_modifica:i.value.modifica,_actividades_flujo:i.value.actividades_flujo,_us_crea:"usrtest",_id:i.value.id,_activo:i.value.activo};await f.put("cuentasn4",n).then(s=>{M("Cuenta nivel 4 guardada correctamente.")})}d.hide(),w(),Q()}},E=n=>{i.value={...n}},j=n=>{m.value=m.value.filter(s=>s.id!==n)},Q=()=>{i.value={id:null,nombre:"",id_nivel1:null,id_nivel2:null,id_nivel3:null,correlativo:"",activo:!1,saldo:0,modifica:!1,actividades_flujo:""}};return{cuentasNivel1:e,cuentasNivel2:a,cuentasNivel3:b,cuentas:m,form:i,filtro:N,columns:U,resetForm:Q,getCuentasn1:h,getCuentasn2:l,getCuentasn3:g,getCuentasn4:w,guardarCuenta:k,editarCuenta:E,eliminarCuenta:j,filtrarCuentas:()=>{const n=N.value.toLowerCase();return m.value.filter(s=>s.id.toString().includes(n)||s.nombre.toLowerCase().includes(n)||s.id_nivel1.toString().includes(n)||s.correlativo.toString().includes(n)||(s.activo?"s\xED":"no").includes(n))},idEmpresa:v}},mounted(){const e=_.getItem("empresa");if(!e)alert("Debe seleccionar una empresa antes de acceder a esta p\xE1gina."),this.$router.push("/");else{const a=JSON.parse(e.toString());this.idEmpresa=a.id,this.getCuentasn1(),this.getCuentasn4()}}}),H={class:"row q-col-gutter-sm"},K={class:"col-2"},R={class:"col-10"},W={class:"col-4"},X={class:"col-4"},Y={class:"col-4"},Z={class:"col-2"},x={class:"col-4"},ee={class:"col-6"},le={class:"col-2"},ae={class:"col-2"},oe=t("div",{class:"col-12"},null,-1),ne={class:"col-12 text-center q-gutter-sm"},ie=t("div",{class:"text-h5"},"Cuentas nivel 4",-1);function se(e,a,b,m,v,h){return F(),D(O,{padding:""},{default:r(()=>[o(q,null,{default:r(()=>[o(C,{label:"Sistema",icon:"home"}),o(C,{label:"Configuraci\xF3n",icon:"widgets"}),o(C,{label:"Gesti\xF3n de Cuentas Nivel 4",icon:"looks_4"})]),_:1}),o(y,{class:"q-mt-md"},{default:r(()=>[o(S,null,{default:r(()=>[o(G,{onSubmit:I(e.guardarCuenta,["prevent"])},{default:r(()=>[t("div",H,[t("div",K,[o(c,{modelValue:e.form.id,"onUpdate:modelValue":a[0]||(a[0]=l=>e.form.id=l),label:"Codigo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",R,[o(c,{modelValue:e.form.nombre,"onUpdate:modelValue":a[1]||(a[1]=l=>e.form.nombre=l),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),t("div",W,[o(V,{modelValue:e.form.id_nivel1,"onUpdate:modelValue":[a[2]||(a[2]=l=>e.form.id_nivel1=l),e.getCuentasn2],options:e.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",rules:[l=>!!l||"Este campo es requerido"]},null,8,["modelValue","options","onUpdate:modelValue","rules"])]),t("div",X,[o(V,{modelValue:e.form.id_nivel2,"onUpdate:modelValue":[a[3]||(a[3]=l=>e.form.id_nivel2=l),e.getCuentasn3],options:e.cuentasNivel2,label:"Cuenta Nivel 2",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",rules:[l=>!!l||"Este campo es requerido"]},null,8,["modelValue","options","onUpdate:modelValue","rules"])]),t("div",Y,[o(V,{modelValue:e.form.id_nivel3,"onUpdate:modelValue":a[4]||(a[4]=l=>e.form.id_nivel3=l),options:e.cuentasNivel3,label:"Cuenta Nivel 3",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",rules:[l=>!!l||"Este campo es requerido"]},null,8,["modelValue","options","rules"])]),t("div",Z,[o(c,{modelValue:e.form.correlativo,"onUpdate:modelValue":a[5]||(a[5]=l=>e.form.correlativo=l),label:"Correlativo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",x,[o(c,{modelValue:e.form.saldo,"onUpdate:modelValue":a[6]||(a[6]=l=>e.form.saldo=l),label:"Saldo",outlined:"",dense:"",type:"number"},null,8,["modelValue"])]),t("div",ee,[o(c,{modelValue:e.form.actividades_flujo,"onUpdate:modelValue":a[7]||(a[7]=l=>e.form.actividades_flujo=l),label:"Actividades Flujo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",le,[o(A,{"left-label":"",modelValue:e.form.modifica,"onUpdate:modelValue":a[8]||(a[8]=l=>e.form.modifica=l),label:"Modifica"},null,8,["modelValue"])]),t("div",ae,[o(P,{modelValue:e.form.activo,"onUpdate:modelValue":a[9]||(a[9]=l=>e.form.activo=l),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),oe,t("div",ne,[o(p,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width",disable:!0}),o(p,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),o(y,{class:"q-my-md"},{default:r(()=>[o(S,null,{default:r(()=>[ie,o(c,{modelValue:e.filtro,"onUpdate:modelValue":a[10]||(a[10]=l=>e.filtro=l),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),o(J,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarCuentas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":r(l=>[o(L,{props:l},{default:r(()=>[o(p,{icon:"edit",color:"primary",dense:"",onClick:g=>e.editarCuenta(l.row)},null,8,["onClick"]),o(p,{icon:"delete",color:"negative",dense:"",onClick:g=>e.eliminarCuenta(l.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var Ce=B(z,[["render",se]]);export{Ce as default};
