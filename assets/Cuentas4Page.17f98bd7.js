import{a as V,Q as F}from"./QBreadcrumbs.9dce50f8.js";import{_ as I,d as A,g as m,P as f,o as P,aF as G,w as u,a as d,e as n,i as U,aI as J,f as t,j as v,bl as O,ba as L,l as b,Q as k}from"./index.b7a0f49f.js";import{h}from"./QSelect.af203fe3.js";import{Q as T}from"./QForm.b62cf44e.js";import{Q as M,a as z}from"./QTable.ecc9fb65.js";import{Q as H}from"./QPage.276c235c.js";import{Q as j}from"./QSpinnerBall.5106a101.js";import{a as p,s as E}from"./axios.fc123eb4.js";import"./selection.826139a0.js";import"./QList.ded89f79.js";const K=A({setup(){const e=m([]),a=m([]),_=m([]),c=m([]),r=m(0),w=()=>{const o=f.getItem("empresa");if(o){const s=JSON.parse(o.toString());r.value=s.id}else{alert("Debe seleccionar una empresa");return}d.show({message:"Cargando cuentas nivel 1..."}),p.get("cuentasn1",{params:{id_empresa:r.value}}).then(s=>{e.value=s.data,d.hide()})},l=()=>{d.show({message:"Cargando cuentas nivel 2..."}),p.get("cuentasn2/"+i.value.id_nivel1).then(o=>{a.value=o.data,d.hide()})},g=()=>{d.show({message:"Cargando cuentas nivel 3..."}),p.get("cuentasn3/"+i.value.id_nivel2).then(o=>{_.value=o.data,d.hide()})},S=()=>{const o=f.getItem("empresa");if(o){const s=JSON.parse(o.toString());r.value=s.id}else{alert("Debe seleccionar una empresa");return}d.show({message:"Cargando cuentas nivel 4..."}),p.get("cuentasn4",{params:{id_empresa:r.value}}).then(s=>{c.value=s.data}).finally(()=>{d.hide()})},i=m({id_cuenta:null,nombre:"",id_nivel1:null,id_nivel2:null,id_nivel3:null,correlativo:"",activo:!0,saldo:0,modifica:!1,actividades_flujo:""}),N=m(""),$=[{name:"id",label:"ID",field:"id",align:"left"},{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"nombre_nivel1",label:"Cta. Nivel 1",field:"nombre_nivel1",align:"left"},{name:"nombre_nivel2",label:"Cta. Nivel 2",field:"nombre_nivel2",align:"left"},{name:"nombre_nivel3",label:"Cta. Nivel 3",field:"nombre_nivel3",align:"left"},{name:"correlativo",label:"Correlativo",field:"correlativo",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"center",format:o=>o?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center"}],q=async()=>{if(i.value.id_cuenta===null||i.value.id_cuenta===""){const o=f.getItem("empresa");let s="";if(o){const C=JSON.parse(o.toString());r.value=C.id,s=C.nombre_empresa}else{alert("Debe seleccionar una empresa");return}if(!r.value){alert("Debe seleccionar una empresa");return}d.show({message:"Guardando cuenta...",spinner:j});const y={_nombre:i.value.nombre,_id_nivel1:i.value.id_nivel1,_id_nivel2:i.value.id_nivel2,_id_nivel3:i.value.id_nivel3,_saldo:i.value.saldo,_flag_modifica:i.value.modifica,_actividades_flujo:i.value.actividades_flujo,_us_crea:"usrtest",_id:i.value.id_cuenta,_activo:i.value.activo,_id_empresa:r.value};console.log(y),await p.post("cuentasn4",y).then(C=>{E(`Cuenta nivel 4 guardada correctamente en la empresa ${s}`)})}else{d.show({message:"Guardando cuenta...",spinner:j});const o={_nombre:i.value.nombre,_id_nivel1:i.value.id_nivel1,_id_nivel2:i.value.id_nivel2,_id_nivel3:i.value.id_nivel3,_saldo:i.value.saldo,_flag_modifica:i.value.modifica,_actividades_flujo:i.value.actividades_flujo,_us_crea:"usrtest",_id:i.value.id_cuenta,_activo:i.value.activo,_id_empresa:r.value};await p.put("cuentasn4",o).then(s=>{E("Cuenta nivel 4 guardada correctamente.")})}d.hide(),S(),Q()},B=o=>{i.value={...o}},D=o=>{c.value=c.value.filter(s=>s.id!==o)},Q=()=>{i.value={id_cuenta:null,nombre:"",id_nivel1:null,id_nivel2:null,id_nivel3:null,correlativo:"",activo:!1,saldo:0,modifica:!1,actividades_flujo:""}};return{cuentasNivel1:e,cuentasNivel2:a,cuentasNivel3:_,cuentas:c,form:i,filtro:N,columns:$,resetForm:Q,getCuentasn1:w,getCuentasn2:l,getCuentasn3:g,getCuentasn4:S,guardarCuenta:q,editarCuenta:B,eliminarCuenta:D,filtrarCuentas:()=>{const o=N.value.toLowerCase();return c.value.filter(s=>s.id.toString().includes(o)||s.nombre.toLowerCase().includes(o)||s.id_nivel1.toString().includes(o)||s.correlativo.toString().includes(o)||(s.activo?"s\xED":"no").includes(o))},idEmpresa:r}},mounted(){const e=f.getItem("empresa");if(!e)alert("Debe seleccionar una empresa antes de acceder a esta p\xE1gina."),this.$router.push("/");else{const a=JSON.parse(e.toString());this.idEmpresa=a.id,this.getCuentasn1(),this.getCuentasn4()}}}),R={class:"row q-col-gutter-sm"},W={class:"col-2"},X={class:"col-10"},Y={class:"col-4"},Z={class:"col-4"},x={class:"col-4"},ee={class:"col-2"},le={class:"col-4"},ae={class:"col-6"},oe={class:"col-2"},ne={class:"col-2"},ie=t("div",{class:"col-12"},null,-1),se={class:"col-12 text-center q-gutter-sm"},te=t("div",{class:"text-h5"},"Cuentas nivel 4",-1);function de(e,a,_,c,r,w){return P(),G(H,{padding:""},{default:u(()=>[n(F,null,{default:u(()=>[n(V,{label:"Sistema",icon:"home"}),n(V,{label:"Configuraci\xF3n",icon:"widgets"}),n(V,{label:"Gesti\xF3n de Cuentas Nivel 4",icon:"looks_4"})]),_:1}),n(k,{class:"q-mt-md"},{default:u(()=>[n(U,null,{default:u(()=>[n(T,{onSubmit:J(e.guardarCuenta,["prevent"])},{default:u(()=>[t("div",R,[t("div",W,[n(v,{modelValue:e.form.id_cuenta,"onUpdate:modelValue":a[0]||(a[0]=l=>e.form.id_cuenta=l),label:"Codigo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",X,[n(v,{modelValue:e.form.nombre,"onUpdate:modelValue":a[1]||(a[1]=l=>e.form.nombre=l),label:"Nombre",outlined:"",dense:""},null,8,["modelValue"])]),t("div",Y,[n(h,{modelValue:e.form.id_nivel1,"onUpdate:modelValue":[a[2]||(a[2]=l=>e.form.id_nivel1=l),e.getCuentasn2],options:e.cuentasNivel1,label:"Cuenta Nivel 1",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",rules:[l=>!!l||"Este campo es requerido"]},null,8,["modelValue","options","onUpdate:modelValue","rules"])]),t("div",Z,[n(h,{modelValue:e.form.id_nivel2,"onUpdate:modelValue":[a[3]||(a[3]=l=>e.form.id_nivel2=l),e.getCuentasn3],options:e.cuentasNivel2,label:"Cuenta Nivel 2",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",rules:[l=>!!l||"Este campo es requerido"]},null,8,["modelValue","options","onUpdate:modelValue","rules"])]),t("div",x,[n(h,{modelValue:e.form.id_nivel3,"onUpdate:modelValue":a[4]||(a[4]=l=>e.form.id_nivel3=l),options:e.cuentasNivel3,label:"Cuenta Nivel 3",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"nombre",rules:[l=>!!l||"Este campo es requerido"]},null,8,["modelValue","options","rules"])]),t("div",ee,[n(v,{modelValue:e.form.correlativo,"onUpdate:modelValue":a[5]||(a[5]=l=>e.form.correlativo=l),label:"Correlativo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",le,[n(v,{modelValue:e.form.saldo,"onUpdate:modelValue":a[6]||(a[6]=l=>e.form.saldo=l),label:"Saldo",outlined:"",dense:"",type:"number"},null,8,["modelValue"])]),t("div",ae,[n(v,{modelValue:e.form.actividades_flujo,"onUpdate:modelValue":a[7]||(a[7]=l=>e.form.actividades_flujo=l),label:"Actividades Flujo",outlined:"",dense:""},null,8,["modelValue"])]),t("div",oe,[n(O,{"left-label":"",modelValue:e.form.modifica,"onUpdate:modelValue":a[8]||(a[8]=l=>e.form.modifica=l),label:"Modifica"},null,8,["modelValue"])]),t("div",ne,[n(L,{modelValue:e.form.activo,"onUpdate:modelValue":a[9]||(a[9]=l=>e.form.activo=l),label:"Activo","left-label":"",class:"toggle-center-div-dense"},null,8,["modelValue"])]),ie,t("div",se,[n(b,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"}),n(b,{label:"Cancelar",color:"primary",flat:"",class:"btn-fixed-width",onClick:e.resetForm},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),n(k,{class:"q-my-md"},{default:u(()=>[n(U,null,{default:u(()=>[te,n(v,{modelValue:e.filtro,"onUpdate:modelValue":a[10]||(a[10]=l=>e.filtro=l),label:"Buscar",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),n(M,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarCuentas(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":u(l=>[n(z,{props:l},{default:u(()=>[n(b,{icon:"edit",color:"primary",dense:"",onClick:g=>e.editarCuenta(l.row)},null,8,["onClick"]),n(b,{icon:"delete",color:"negative",dense:"",onClick:g=>e.eliminarCuenta(l.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1})]),_:1})}var Ve=I(K,[["render",de]]);export{Ve as default};
