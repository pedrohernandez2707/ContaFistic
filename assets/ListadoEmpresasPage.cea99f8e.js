import{_ as d,d as l,g as o,o as i,ax as u,w as n,e as m,f,Q as h}from"./index.de91045c.js";import{Q as _}from"./QPage.c00b98e2.js";import{a as p,s as g}from"./axios.23fd2c5d.js";const R=l({setup(){const r=o(),t=o("");return{scrReport:t,generarReporte:async()=>{await p.get("/reportes/empresas",{}).then(e=>{r.value=e.data}).catch(e=>{g(e)});let a={reporte:"empresas_report",data:r.value};p.post("https://server-reportesconta-3nk7.onrender.com/report",a,{responseType:"blob"}).then(async e=>{const s=URL.createObjectURL(e.data);t.value=s})}}},mounted(){this.generarReporte()}}),v=["src"];function w(r,t,c,a,e,s){return i(),u(_,null,{default:n(()=>[m(h,{class:"q-pa-sm"},{default:n(()=>[f("iframe",{src:r.scrReport,width:"100%",style:{height:"90vh"}},null,8,v)]),_:1})]),_:1})}var $=d(R,[["render",w]]);export{$ as default};
