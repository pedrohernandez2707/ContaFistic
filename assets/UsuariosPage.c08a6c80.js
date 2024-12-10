import{Q,a as p}from"./QBreadcrumbs.304da429.js";import{_ as C,d as h,g as t,av as k,o as B,c as S,e as a,w as n,Q as b,i as V,aI as q,f as r,j as d,ba as E,ap as g,C as F,l as U}from"./index.a62a34ef.js";import{h as I}from"./QSelect.7023c637.js";import{Q as P}from"./QForm.2f49d039.js";import{Q as $,a as N}from"./QTable.fcbcbb6b.js";import{u as T}from"./use-quasar.13985632.js";import{a as f}from"./axios.0012f664.js";import"./selection.1e56649a.js";import"./QList.2531dbd7.js";const A=h({setup(){const e=T(),s=t([{id:1,nombre:"Usuario 1",email:"usuario1@example.com",activo:!0},{id:2,nombre:"Usuario 2",email:"usuario2@example.com",activo:!1}]),o=t({codigo_usuario:null,usuario:"",tipo_usuario:"",estado_usuario:!0,nombres_usuario:"",contrasena:"",direccion_usuario:"",telefono_usuario:"",correo_usuario:""}),m=t(""),v=[{name:"nombre",label:"Nombre",field:"nombre",align:"left"},{name:"email",label:"Email",field:"email",align:"left"},{name:"activo",label:"Activo",field:"activo",align:"left",format:i=>i?"S\xED":"No"},{name:"acciones",label:"Acciones",field:"",align:"center",style:"width:100px"}],_=()=>{if(o.value.codigo_usuario){const i={p_id_usuario:parseInt(o.value.codigo_usuario),p_nombre_usuario:o.value.nombres_usuario,p_usuario:o.value.usuario,p_contrasena:o.value.contrasena,p_direccion:o.value.direccion_usuario===void 0?"":o.value.direccion_usuario,p_telefono:o.value.telefono_usuario===void 0?"":o.value.telefono_usuario,p_correo:o.value.correo_usuario===void 0?"":o.value.correo_usuario,p_estado:o.value.estado_usuario?"A":"I"};f.put("/users",i).then(u=>{e.notify({message:"Usuario actualizado correctamente",color:"primary",position:"center",icon:"info",actions:[{label:"Ok",color:"white",handler:()=>{}}]})})}else{const i={p_nombre_usuario:o.value.nombres_usuario,p_usuario:o.value.usuario,p_contrasena:o.value.contrasena,p_direccion:o.value.direccion_usuario,p_telefono:o.value.telefono_usuario,p_correo:o.value.correo_usuario,p_id_rol:parseInt(o.value.tipo_usuario.toString())};f.post("/users",i).then(u=>{e.notify({message:"Usuario creado correctamente",color:"primary",position:"center",icon:"info",actions:[{label:"Ok",color:"white",handler:()=>{}}]})})}c()},l=k(async()=>{o.value.codigo_usuario?await f.get("/users/"+o.value.codigo_usuario).then(i=>{let u=i.data;o.value.nombres_usuario=u.nombre_usuario,o.value.usuario=u.usuario,o.value.direccion_usuario=u.direccion,o.value.telefono_usuario=u.telefono_,o.value.correo_usuario=u.correo,o.value.estado_usuario=u.estado==="A"}):c()},1e3),c=()=>{o.value.codigo_usuario=null,o.value.nombres_usuario="",o.value.contrasena="",o.value.usuario="",o.value.direccion_usuario="",o.value.telefono_usuario="",o.value.correo_usuario=""},w=i=>{o.value={...i}},y=()=>{const i=m.value.toLowerCase();return s.value.filter(u=>u.nombre.toLowerCase().includes(i)||u.email.toLowerCase().includes(i)||(u.activo?"s\xED":"no").includes(i))};return{isPwd:t(!0),usuarios:s,form:o,columns:v,filtro:m,guardarUsuario:_,editarUsuario:w,debouncedBuscarUsuario:l,filtrarUsuarios:y}}}),D={class:"q-pa-sm"},L={class:"row"},M={class:"col-xs-12 col-sm-2"},j={class:"col-xs-12 col-sm-8"},z={class:"col col-xs-12 col-sm-2"},G={class:"row"},O={class:"col-xs-12 col-sm-4"},H={class:"col-xs-12 col-sm-4"},J={class:"col-xs-12 col-sm-4"},K={class:"row"},R={class:"col-xs-12 col-sm-8"},W={class:"col-xs-12 col-sm-4"},X={class:"row"},Y={class:"col-xs-12 col-sm-5 col-md-5"},Z={class:"row justify-center q-ma-md"},x={class:"col-2"},oo=r("div",{class:"text-h5"},"Usuarios",-1),eo={style:{height:"400px","overflow-y":"auto"}};function ao(e,s,o,m,v,_){return B(),S("div",D,[a(Q,null,{default:n(()=>[a(p,{label:"Home",icon:"home"}),a(p,{label:"Configuraci\xF3n",icon:"settings"}),a(p,{label:"Gesti\xF3n de Usuarios",icon:"add_reaction"})]),_:1}),a(b,null,{default:n(()=>[a(V,null,{default:n(()=>[a(P,{onSubmit:q(e.guardarUsuario,["prevent"])},{default:n(()=>[r("div",L,[r("div",M,[a(d,{modelValue:e.form.codigo_usuario,"onUpdate:modelValue":[s[0]||(s[0]=l=>e.form.codigo_usuario=l),e.debouncedBuscarUsuario],label:"C\xF3digo Usuario",outlined:"",dense:"",disable:""},null,8,["modelValue","onUpdate:modelValue"])]),r("div",j,[a(d,{modelValue:e.form.nombres_usuario,"onUpdate:modelValue":s[1]||(s[1]=l=>e.form.nombres_usuario=l),label:"Nombre del usuario",outlined:"",dense:""},null,8,["modelValue"])]),r("div",z,[a(E,{label:"Estado",modelValue:e.form.estado_usuario,"onUpdate:modelValue":s[2]||(s[2]=l=>e.form.estado_usuario=l),color:"green",class:"q-ma-sm",dense:"",disable:!e.form.codigo_usuario,"left-label":""},null,8,["modelValue","disable"])])]),a(g,{spaced:"",inset:""}),r("div",G,[r("div",O,[a(d,{modelValue:e.form.usuario,"onUpdate:modelValue":s[3]||(s[3]=l=>e.form.usuario=l),label:"Usuario para el sistema",outlined:"",dense:""},null,8,["modelValue"])]),r("div",H,[a(d,{modelValue:e.form.contrasena,"onUpdate:modelValue":s[5]||(s[5]=l=>e.form.contrasena=l),label:"Contrase\xF1a para el sistema",outlined:"",dense:"",type:e.isPwd?"password":"text"},{append:n(()=>[a(F,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[4]||(s[4]=l=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])]),r("div",J,[a(I,{modelValue:e.form.tipo_usuario,"onUpdate:modelValue":s[6]||(s[6]=l=>e.form.tipo_usuario=l),options:e.roles,label:"Tipo de Usuario",dense:"",outlined:"","emit-value":"","map-options":"","option-label":"nombre_rol","option-value":"id_rol",disable:!!e.form.codigo_usuario},null,8,["modelValue","options","disable"])])]),a(g,{spaced:""}),r("div",K,[r("div",R,[a(d,{modelValue:e.form.direccion_usuario,"onUpdate:modelValue":s[7]||(s[7]=l=>e.form.direccion_usuario=l),label:"Direcci\xF3n",outlined:"",dense:""},null,8,["modelValue"])]),r("div",W,[a(d,{modelValue:e.form.telefono_usuario,"onUpdate:modelValue":s[8]||(s[8]=l=>e.form.telefono_usuario=l),label:"Telefono",outlined:"",dense:""},null,8,["modelValue"])])]),r("div",X,[r("div",Y,[a(d,{modelValue:e.form.correo_usuario,"onUpdate:modelValue":s[9]||(s[9]=l=>e.form.correo_usuario=l),label:"Correo",outlined:"",dense:""},null,8,["modelValue"])])]),r("div",Z,[r("div",x,[a(U,{type:"submit",label:e.form.codigo_usuario?"Guardar Usuario":"Crear Usuario",color:"primary",size:"md",outline:"",rounded:""},null,8,["label"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1}),a(b,{class:"q-my-md"},{default:n(()=>[a(V,null,{default:n(()=>[oo,a(d,{modelValue:e.filtro,"onUpdate:modelValue":s[10]||(s[10]=l=>e.filtro=l),label:"Buscar usuarios",outlined:"",dense:"",class:"q-my-md"},null,8,["modelValue"]),r("div",eo,[a($,{style:{height:"400px"},flat:"","virtual-scroll":"",separator:"cell",bordered:"","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.filtrarUsuarios(),columns:e.columns,"row-key":"id"},{"body-cell-acciones":n(l=>[a(N,{props:l},{default:n(()=>[a(U,{icon:"edit",color:"primary",dense:"",onClick:c=>e.editarUsuario(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])]),_:1})]),_:1})])}var po=C(A,[["render",ao]]);export{po as default};
