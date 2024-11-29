import{a as g,Q as T}from"./QBreadcrumbs.0c9f2397.js";import{h as m}from"./QSelect.0bc76de2.js";import{_ as q,d as J,g as d,o as L,aF as O,w as n,a as F,e as a,i as k,f as s,j as U,bl as z,Q as P,ap as H,bx as t,l as p}from"./index.8c6caead.js";import{Q as K,a as M,b as W,c as R}from"./QTabPanels.d9ff370d.js";import{Q as X}from"./QPage.e6c796e3.js";import{a as b,s as A}from"./axios.2465e07b.js";import"./selection.bfe3aa9e.js";import"./touch.975bfff4.js";import"./use-render-cache.3aae9b27.js";const Y=J({setup(){const e=d("periodo"),l=d("diario"),Q=d("diario"),v=d([]),V=d([]),f=d([]),o=d(""),E=d(1),B=d(),r=d({contribuyente:null,empresa:null,periodo:null,hastaCuenta:"",desdeCuenta:""}),D=()=>{r.value.contribuyente=null,r.value.empresa=null,r.value.periodo=null,r.value.hastaCuenta="",r.value.desdeCuenta=""},G=()=>{D(),b.get("/contribuyentes").then(u=>{v.value=u.data})},I=()=>{r.value.empresa=null,r.value.periodo=null,r.value.hastaCuenta="",r.value.desdeCuenta="",F.show({message:"Cargando empresas"}),b.get("/empresas/contribuyente",{params:{id_contribuyente:r.value.contribuyente.id}}).then(u=>{V.value=u.data,F.hide()})},S=()=>{r.value.empresa&&(r.value.periodo=null,b.get("/periodos/abiertos/"+r.value.empresa.id).then(u=>{f.value=u.data}))};return{generarReporte:async()=>{const{contribuyente:u,empresa:$,periodo:w,hastaCuenta:ve,desdeCuenta:Ve}=r.value;if(!u||!$||!w){A("Contribuyente, Empresa y Periodo son obligatorios.",{tipo:"negative"});return}let y=l.value,C="";e.value=="periodo"?C="xperiodo_report":e.value=="mes"&&(C="xmes_report"),console.log(`/reportes/${y}`),await b.get(`/reportes/${y}`,{params:{contribuyente:u.id,empresa:$.id,periodo:w.periodo}}).then(i=>{console.log(i.data),B.value=i.data}).catch(i=>{A(i)});let j={reporte:`${y}${C}`,data:B.value};b.post("http://localhost:3010/report",j,{responseType:"blob"}).then(async i=>{const N=URL.createObjectURL(i.data);o.value=N})},scrReport:o,periodos:f,selectEmpresa:()=>{S(),E.value=r.value.empresa.correlativo_folio===null?1:r.value.empresa.correlativo_folio},getEmpresas:I,getContribuyentes:G,contribuyentes:v,empresas:V,form:r,folio:E,periodo:2023,mesInicial:d(null),mesFinal:d(null),mes:"",cuenta:"",proveedor:"",monto:null,sinMovimiento:!1,tab:e,reportePeriodo:l,reporteMes:Q,meses:[{label:"Enero",value:1},{label:"Febrero",value:2},{label:"Marzo",value:3},{label:"Abril",value:4},{label:"Mayo",value:5},{label:"Junio",value:6},{label:"Julio",value:7},{label:"Agosto",value:8},{label:"Septiembre",value:9},{label:"Octubre",value:10},{label:"Noviembre",value:11},{label:"Diciembre",value:12}]}},mounted(){this.getContribuyentes()}}),Z={class:""},h={class:"row q-col-gutter-sm"},c={class:"col-xs-4"},x={class:"col-xs-6"},_={class:"col-xs-2"},ee={class:"col-xs-2"},le={class:"col-xs-2"},oe={class:"col-xs-2"},ae={class:"col-xs-2"},re={class:"col-xs-3"},se=s("div",{class:"row q-col-gutter-sm"},null,-1),ne=s("br",null,null,-1),te=s("br",null,null,-1),de={class:"row justify-end q-gutter-sm"},ue=s("br",null,null,-1),ie=["src"];function me(e,l,Q,v,V,f){return L(),O(X,{padding:""},{default:n(()=>[a(T,null,{default:n(()=>[a(g,{label:"Sistema",icon:"home"}),a(g,{label:"Reportes",icon:"settings"}),a(g,{label:"Reportes",icon:"local_gas_station"})]),_:1}),a(P,{class:"q-mt-md"},{default:n(()=>[a(k,null,{default:n(()=>[s("div",Z,[s("div",h,[s("div",c,[a(m,{label:"Contribuyente",modelValue:e.form.contribuyente,"onUpdate:modelValue":[l[0]||(l[0]=o=>e.form.contribuyente=o),e.getEmpresas],outlined:"",dense:"",options:e.contribuyentes,"option-value":"id","option-label":"nombre_contribuyente"},null,8,["modelValue","options","onUpdate:modelValue"])]),s("div",x,[a(m,{label:"Empresa",modelValue:e.form.empresa,"onUpdate:modelValue":[l[1]||(l[1]=o=>e.form.empresa=o),e.selectEmpresa],outlined:"",dense:"",options:e.empresas,"option-value":"id","option-label":"nombre_empresa"},null,8,["modelValue","options","onUpdate:modelValue"])]),s("div",_,[a(m,{label:"Per\xEDodo",modelValue:e.form.periodo,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.periodo=o),options:e.periodos,outlined:"",dense:"","option-label":"periodo","option-value":"periodo"},null,8,["modelValue","options"])]),s("div",ee,[a(U,{label:"Desde Cta.",modelValue:e.form.desdeCuenta,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.desdeCuenta=o),type:"text",outlined:"",dense:""},null,8,["modelValue"])]),s("div",le,[a(U,{label:"Hasta Cta.",modelValue:e.form.hastaCuenta,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.hastaCuenta=o),type:"text",outlined:"",dense:""},null,8,["modelValue"])]),s("div",oe,[a(m,{label:"Mes Inicial",modelValue:e.mesInicial,"onUpdate:modelValue":l[5]||(l[5]=o=>e.mesInicial=o),options:e.meses,"option-label":"label","option-value":"value",outlined:"",dense:""},null,8,["modelValue","options"])]),s("div",ae,[a(m,{label:"Mes Final",modelValue:e.mesFinal,"onUpdate:modelValue":l[6]||(l[6]=o=>e.mesFinal=o),options:e.meses,"option-label":"label","option-value":"value",outlined:"",dense:""},null,8,["modelValue","options"])]),s("div",re,[a(z,{modelValue:e.sinMovimiento,"onUpdate:modelValue":l[7]||(l[7]=o=>e.sinMovimiento=o),label:"Sin Movimiento"},null,8,["modelValue"])])]),se]),ne,a(P,null,{default:n(()=>[a(K,{modelValue:e.tab,"onUpdate:modelValue":l[8]||(l[8]=o=>e.tab=o),class:"text-bold"},{default:n(()=>[a(M,{name:"periodo",label:"Reportes x Periodo"}),a(M,{name:"mes",label:"Reportes al Mes"}),a(M,{name:"compras",label:"Reportes de Compras y Ventas"})]),_:1},8,["modelValue"]),a(H),a(W,{modelValue:e.tab,"onUpdate:modelValue":l[23]||(l[23]=o=>e.tab=o),animated:""},{default:n(()=>[a(R,{name:"periodo"},{default:n(()=>[a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[9]||(l[9]=o=>e.reportePeriodo=o),val:"diario",label:"Diario"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[10]||(l[10]=o=>e.reportePeriodo=o),val:"mayor",label:"Mayor"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[11]||(l[11]=o=>e.reportePeriodo=o),val:"balance",label:"Balance"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[12]||(l[12]=o=>e.reportePeriodo=o),val:"ERC",label:"ER Consolidado"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[13]||(l[13]=o=>e.reportePeriodo=o),val:"ERA",label:"ER Anal\xEDtio"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[14]||(l[14]=o=>e.reportePeriodo=o),val:"BGC",label:"BG Consolidado"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[15]||(l[15]=o=>e.reportePeriodo=o),val:"BGA",label:"BG Anal\xEDtico"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[16]||(l[16]=o=>e.reportePeriodo=o),val:"flujo",label:"Flujo de Efectivo"},null,8,["modelValue"])]),_:1}),a(R,{name:"mes"},{default:n(()=>[a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[17]||(l[17]=o=>e.reporteMes=o),val:"diario",label:"Diario"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[18]||(l[18]=o=>e.reporteMes=o),val:"mayor",label:"Mayor"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[19]||(l[19]=o=>e.reporteMes=o),val:"balance",label:"Balance"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[20]||(l[20]=o=>e.reporteMes=o),val:"resultados",label:"Est. Resultados"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[21]||(l[21]=o=>e.reporteMes=o),val:"bgeneral",label:"Balance General"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[22]||(l[22]=o=>e.reporteMes=o),val:"inventarios",label:"Inventarios"},null,8,["modelValue"])]),_:1}),a(R,{name:"compras"},{default:n(()=>[a(p,{label:"Compras",color:"primary"}),a(p,{label:"Ventas",color:"primary"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),te,s("div",de,[a(U,{modelValue:e.folio,"onUpdate:modelValue":l[26]||(l[26]=o=>e.folio=o),type:"number",label:"No. Folio",outlined:"",dense:"","hide-bottom-space":"",readonly:"",class:"col-2",rules:[o=>o>0||"No puede ser un folio negativo"]},{before:n(()=>[a(p,{round:"",dense:"",flat:"",icon:"remove",onClick:l[24]||(l[24]=o=>e.folio<=1?1:e.folio--),color:"red"})]),after:n(()=>[a(p,{round:"",dense:"",flat:"",icon:"add",onClick:l[25]||(l[25]=o=>e.folio++),color:"blue"})]),_:1},8,["modelValue","rules"]),a(p,{label:"Generar Reporte",color:"primary",onClick:e.generarReporte},null,8,["onClick"])])]),_:1})]),_:1}),ue,a(P,null,{default:n(()=>[a(k,null,{default:n(()=>[s("iframe",{src:e.scrReport,width:"100%",style:{height:"90vh"}},null,8,ie)]),_:1})]),_:1})]),_:1})}var Ee=q(Y,[["render",me]]);export{Ee as default};