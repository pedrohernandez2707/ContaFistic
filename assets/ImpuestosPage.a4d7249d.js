import{a as m,Q as f}from"./QBreadcrumbs.9bfe4400.js";import{_ as b,U as g,r as p,V as v,aB as h,a1 as a,a as i,Z as o,a4 as y,b5 as F,a5 as d,$ as l,a6 as Q,a2 as q}from"./index.8a1bf270.js";import{Q as I}from"./QForm.4e813ace.js";import{Q as V}from"./QPage.ed8450f6.js";import{Q as w}from"./QSpinnerBall.cacf6e14.js";import{a as c,s as B}from"./axios.d4a7e69c.js";import"./axios.bf56c3c5.js";const C=g({setup(){const e=p({id:0,impuesto_iva:0,impuesto_peque\u00F1o_contribuyente:0}),t=p([]),r=()=>{i.show({message:"Cargando configuraci\xF3n"}),c.get("/impuestos").then(u=>{if(t.value=u.data,t.value.length>0){const s=t.value[0];e.value={id:s.id,impuesto_iva:parseFloat(s.impuesto_iva),impuesto_peque\u00F1o_contribuyente:parseFloat(s.impuesto_pequeno_contribuyente)}}else e.value={id:0,impuesto_iva:0,impuesto_peque\u00F1o_contribuyente:0};i.hide()})};return{form:e,guardarImpuesto:async()=>{i.show({message:"Guardando...",spinner:w});const u={_id:null,_impuesto_iva:e.value.impuesto_iva,_impuesto_peque\u00F1o_contribuyente:e.value.impuesto_peque\u00F1o_contribuyente,_us_crea:"usrtest"};await c.post("/impuestos",u).then(s=>{B("Registro guardado correctamente.",{})}),i.hide(),r()},getImpuestos:r}},mounted(){this.getImpuestos()}}),x={class:"row"},S=l("div",{class:"col-12"},null,-1),$={class:"col-12 text-center"};function P(e,t,r,_,u,s){return v(),h(V,{padding:""},{default:a(()=>[o(f,null,{default:a(()=>[o(m,{label:"Sistema",icon:"home"}),o(m,{label:"Configuraci\xF3n",icon:"settings"}),o(m,{label:"Gesti\xF3n de Impuestos",icon:"info"})]),_:1}),o(q,{class:"q-mt-md"},{default:a(()=>[o(y,null,{default:a(()=>[o(I,{onSubmit:F(e.guardarImpuesto,["prevent"]),class:"q-gutter-md"},{default:a(()=>[o(d,{modelValue:e.form.impuesto_iva,"onUpdate:modelValue":t[0]||(t[0]=n=>e.form.impuesto_iva=n),modelModifiers:{number:!0},label:"Impuesto IVA (%)",type:"number",outlined:"",dense:""},null,8,["modelValue"]),o(d,{modelValue:e.form.impuesto_peque\u00F1o_contribuyente,"onUpdate:modelValue":t[1]||(t[1]=n=>e.form.impuesto_peque\u00F1o_contribuyente=n),modelModifiers:{number:!0},label:"Impuesto Peque\xF1o Contribuyente (%)",type:"number",outlined:"",dense:""},null,8,["modelValue"]),l("div",x,[S,l("div",$,[o(Q,{type:"submit",label:"Guardar",color:"primary",push:"",class:"btn-fixed-width"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var R=b(C,[["render",P]]);export{R as default};
