import{a as m,Q as f}from"./QBreadcrumbs.304da429.js";import{_ as b,d as g,g as p,o as v,aF as F,w as a,a as i,e as o,i as h,aI as y,j as d,f as l,l as Q,Q as I}from"./index.a62a34ef.js";import{Q as q}from"./QForm.2f49d039.js";import{Q as w}from"./QPage.3c34c3f3.js";import{Q as V}from"./QSpinnerBall.5b5a93ce.js";import{a as c,s as B}from"./axios.0012f664.js";const C=g({setup(){const e=p({id:0,impuesto_iva:0,impuesto_peque\u00F1o_contribuyente:0}),t=p([]),n=()=>{i.show({message:"Cargando configuraci\xF3n"}),c.get("/impuestos").then(u=>{if(t.value=u.data,t.value.length>0){const s=t.value[0];e.value={id:s.id,impuesto_iva:parseFloat(s.impuesto_iva),impuesto_peque\u00F1o_contribuyente:parseFloat(s.impuesto_pequeno_contribuyente)}}else e.value={id:0,impuesto_iva:0,impuesto_peque\u00F1o_contribuyente:0};i.hide()})};return{form:e,guardarImpuesto:async()=>{i.show({message:"Guardando...",spinner:V});const u={_id:null,_impuesto_iva:e.value.impuesto_iva,_impuesto_peque\u00F1o_contribuyente:e.value.impuesto_peque\u00F1o_contribuyente,_us_crea:"usrtest"};await c.post("/impuestos",u).then(s=>{B("Registro guardado correctamente.",{})}),i.hide(),n()},getImpuestos:n}},mounted(){this.getImpuestos()}}),x={class:"row"},S=l("div",{class:"col-12"},null,-1),P={class:"col-12 text-center"};function $(e,t,n,_,u,s){return v(),F(w,{padding:""},{default:a(()=>[o(f,null,{default:a(()=>[o(m,{label:"Sistema",icon:"home"}),o(m,{label:"Configuraci\xF3n",icon:"settings"}),o(m,{label:"Gesti\xF3n de Impuestos",icon:"info"})]),_:1}),o(I,{class:"q-mt-md"},{default:a(()=>[o(h,null,{default:a(()=>[o(q,{onSubmit:y(e.guardarImpuesto,["prevent"]),class:"q-gutter-md"},{default:a(()=>[o(d,{modelValue:e.form.impuesto_iva,"onUpdate:modelValue":t[0]||(t[0]=r=>e.form.impuesto_iva=r),modelModifiers:{number:!0},label:"Impuesto IVA (%)",type:"number",outlined:"",dense:""},null,8,["modelValue"]),o(d,{modelValue:e.form.impuesto_peque\u00F1o_contribuyente,"onUpdate:modelValue":t[1]||(t[1]=r=>e.form.impuesto_peque\u00F1o_contribuyente=r),modelModifiers:{number:!0},label:"Impuesto Peque\xF1o Contribuyente (%)",type:"number",outlined:"",dense:""},null,8,["modelValue"]),l("div",x,[S,l("div",P,[o(Q,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var j=b(C,[["render",$]]);export{j as default};
