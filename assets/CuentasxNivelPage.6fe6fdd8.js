import{_ as l,d as u,g as n,o as i,aF as f,w as a,e as c,i as _,f as h,Q as m}from"./index.a62a34ef.js";import{Q as g}from"./QPage.3c34c3f3.js";import{a as p,s as R}from"./axios.0012f664.js";const v=u({setup(){const t=n(),r=n("");return{scrReport:r,generarReporte:async()=>{await p.get("/reportes/cuentas",{}).then(e=>{t.value=e.data}).catch(e=>{R(e)});let s={reporte:"cuentas_report",data:t.value};p.post("https://server-reportesconta-3nk7.onrender.com/report",s,{responseType:"blob"}).then(async e=>{const o=URL.createObjectURL(e.data);r.value=o})},dataReport:t}},mounted(){this.generarReporte()}}),w=["src"];function C(t,r,d,s,e,o){return i(),f(g,{padding:""},{default:a(()=>[c(m,null,{default:a(()=>[c(_,null,{default:a(()=>[h("iframe",{src:t.scrReport,width:"100%",style:{height:"90vh"}},null,8,w)]),_:1})]),_:1})]),_:1})}var $=l(v,[["render",C]]);export{$ as default};
