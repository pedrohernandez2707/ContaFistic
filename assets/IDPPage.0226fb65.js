import{a as m,Q as f}from"./QBreadcrumbs.4144acfc.js";import{_ as b,d as _,g as p,o as v,aF as I,w as u,a as i,e as s,i as h,aI as Q,f as r,j as d,ap as V,l as w,Q as k}from"./index.e60fa00d.js";import{Q as y}from"./QForm.b9c5a55d.js";import{Q as P}from"./QPage.b16c688f.js";import{Q as B}from"./QSpinnerBall.faefad3d.js";import{a as c,s as S}from"./axios.a61b5a41.js";const C=_({setup(){const e=p({id:0,super:0,regular:0,diesel:0,inguat:0}),o=p([]);function t(l){return l?parseFloat(l.replace(/[^0-9.-]+/g,"")):0}const n=()=>{i.show({message:"Cargando configuraci\xF3n"}),c.get("/impuestos/gas").then(l=>{if(console.log(l.data),o.value=l.data,o.value.length>0){const a=o.value[0];e.value={id:a.id,super:t(a.super),regular:t(a.regular),diesel:t(a.diesel),inguat:t(a.inguat)}}else e.value={id:0,super:0,regular:0,diesel:0,inguat:0};i.hide()})};return{form:e,guardarImpuestoIDP:async()=>{i.show({message:"Guardando...",spinner:B});const l={_super:e.value.super,_regular:e.value.regular,_diesel:e.value.diesel,_inguat:e.value.inguat,_us_crea:"usrtest"};await c.post("/impuestos/Gas",l).then(a=>{S("Registro guardado correctamente.",{})}),i.hide(),n()},getImpuestos:n}},mounted(){this.getImpuestos()}}),D={class:"row q-gutter-sm"},F={class:"col-4"},M={class:"col-4"},G={class:"col-3"},U={class:"col-12"},$={class:"col-12"},q=r("div",{class:"col-12"},null,-1),N={class:"col-12 text-center"};function A(e,o,t,n,g,l){return v(),I(P,{padding:""},{default:u(()=>[s(f,null,{default:u(()=>[s(m,{label:"Sistema",icon:"home"}),s(m,{label:"Configuraci\xF3n",icon:"settings"}),s(m,{label:"Gesti\xF3n de IDP/INGUAT",icon:"local_gas_station"})]),_:1}),s(k,{class:"q-mt-md"},{default:u(()=>[s(h,null,{default:u(()=>[s(y,{onSubmit:Q(e.guardarImpuestoIDP,["prevent"]),class:"q-gutter-md"},{default:u(()=>[r("div",D,[r("div",F,[s(d,{modelValue:e.form.super,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.super=a),modelModifiers:{number:!0},label:"Impuesto Super(%)",type:"number",outlined:"","bg-color":"red","label-color":"black",dark:!1},null,8,["modelValue"])]),r("div",M,[s(d,{modelValue:e.form.regular,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.regular=a),modelModifiers:{number:!0},label:"Impuesto Regular(%)",type:"number",outlined:"","bg-color":"yellow","label-color":"black",dark:!1},null,8,["modelValue"])]),r("div",G,[s(d,{modelValue:e.form.diesel,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.diesel=a),modelModifiers:{number:!0},label:"Impuesto Diesel(%)",type:"number",outlined:"","bg-color":"green","label-color":"black",dark:!1},null,8,["modelValue"])]),r("div",U,[s(V,{inset:"",dark:""})]),r("div",$,[s(d,{modelValue:e.form.inguat,"onUpdate:modelValue":o[3]||(o[3]=a=>e.form.inguat=a),modelModifiers:{number:!0},label:"Impuesto Inguat",type:"number",outlined:""},null,8,["modelValue"])]),q,r("div",N,[s(w,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var H=b(C,[["render",A]]);export{H as default};
