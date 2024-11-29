import{a as P,Q as T}from"./QBreadcrumbs.1419f504.js";import{h as m}from"./QSelect.e09ded23.js";import{_ as q,d as J,g as d,o as L,aF as O,w as s,a as p,e as a,i as A,f as n,j as M,bl as z,Q as R,ap as H,bx as t,l as b}from"./index.64b8d3ad.js";import{Q as K,a as Q,b as W,c as E}from"./QTabPanels.b68409ee.js";import{Q as X}from"./QPage.a1b7a453.js";import{a as v,s as D}from"./axios.a4c8dbe5.js";import"./selection.51153791.js";import"./touch.d7f4b935.js";import"./use-render-cache.3aae9b27.js";const Y=J({setup(){const e=d("periodo"),l=d("diario"),f=d("diario"),y=d([]),C=d([]),g=d([]),o=d(""),B=d(1),w=d(),r=d({contribuyente:null,empresa:null,periodo:null,hastaCuenta:"",desdeCuenta:""}),G=()=>{r.value.contribuyente=null,r.value.empresa=null,r.value.periodo=null,r.value.hastaCuenta="",r.value.desdeCuenta=""},I=()=>{G(),v.get("/contribuyentes").then(u=>{y.value=u.data})},S=()=>{r.value.empresa=null,r.value.periodo=null,r.value.hastaCuenta="",r.value.desdeCuenta="",p.show({message:"Cargando empresas"}),v.get("/empresas/contribuyente",{params:{id_contribuyente:r.value.contribuyente.id}}).then(u=>{C.value=u.data,p.hide()})},j=()=>{r.value.empresa&&(r.value.periodo=null,v.get("/periodos/abiertos/"+r.value.empresa.id).then(u=>{g.value=u.data}))};return{generarReporte:async()=>{const{contribuyente:u,empresa:$,periodo:F,hastaCuenta:ve,desdeCuenta:Ve}=r.value;if(!u||!$||!F){D("Contribuyente, Empresa y Periodo son obligatorios.",{tipo:"negative"});return}p.show();let V=l.value,U="";e.value=="periodo"?U="xperiodo_report":e.value=="mes"&&(U="xmes_report",V=f.value),console.log(`/reportes/${V}`),await v.get(`/reportes/${V}`,{params:{contribuyente:u.id,empresa:$.id,periodo:F.periodo}}).then(i=>{console.log(i.data),w.value=i.data}).catch(i=>{D(i),p.hide()});let k={reporte:`${V}${U}`,data:w.value};console.log(k),v.post("https://server-reportesconta-3nk7.onrender.com/report",k,{responseType:"blob"}).then(async i=>{const N=URL.createObjectURL(i.data);o.value=N}).finally(()=>{p.hide()})},scrReport:o,periodos:g,selectEmpresa:()=>{j(),B.value=r.value.empresa.correlativo_folio===null?1:r.value.empresa.correlativo_folio},getEmpresas:S,getContribuyentes:I,contribuyentes:y,empresas:C,form:r,folio:B,periodo:2023,mesInicial:d(null),mesFinal:d(null),mes:"",cuenta:"",proveedor:"",monto:null,sinMovimiento:!1,tab:e,reportePeriodo:l,reporteMes:f,meses:[{label:"Enero",value:1},{label:"Febrero",value:2},{label:"Marzo",value:3},{label:"Abril",value:4},{label:"Mayo",value:5},{label:"Junio",value:6},{label:"Julio",value:7},{label:"Agosto",value:8},{label:"Septiembre",value:9},{label:"Octubre",value:10},{label:"Noviembre",value:11},{label:"Diciembre",value:12}]}},mounted(){this.getContribuyentes()}}),Z={class:""},h={class:"row q-col-gutter-sm"},c={class:"col-xs-4"},x={class:"col-xs-6"},_={class:"col-xs-2"},ee={class:"col-xs-2"},le={class:"col-xs-2"},oe={class:"col-xs-2"},ae={class:"col-xs-2"},re={class:"col-xs-3"},ne=n("div",{class:"row q-col-gutter-sm"},null,-1),se=n("br",null,null,-1),te=n("br",null,null,-1),de={class:"row justify-end q-gutter-sm"},ue=n("br",null,null,-1),ie=["src"];function me(e,l,f,y,C,g){return L(),O(X,{padding:""},{default:s(()=>[a(T,null,{default:s(()=>[a(P,{label:"Sistema",icon:"home"}),a(P,{label:"Reportes",icon:"settings"}),a(P,{label:"Reportes",icon:"local_gas_station"})]),_:1}),a(R,{class:"q-mt-md"},{default:s(()=>[a(A,null,{default:s(()=>[n("div",Z,[n("div",h,[n("div",c,[a(m,{label:"Contribuyente",modelValue:e.form.contribuyente,"onUpdate:modelValue":[l[0]||(l[0]=o=>e.form.contribuyente=o),e.getEmpresas],outlined:"",dense:"",options:e.contribuyentes,"option-value":"id","option-label":"nombre_contribuyente"},null,8,["modelValue","options","onUpdate:modelValue"])]),n("div",x,[a(m,{label:"Empresa",modelValue:e.form.empresa,"onUpdate:modelValue":[l[1]||(l[1]=o=>e.form.empresa=o),e.selectEmpresa],outlined:"",dense:"",options:e.empresas,"option-value":"id","option-label":"nombre_empresa"},null,8,["modelValue","options","onUpdate:modelValue"])]),n("div",_,[a(m,{label:"Per\xEDodo",modelValue:e.form.periodo,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.periodo=o),options:e.periodos,outlined:"",dense:"","option-label":"periodo","option-value":"periodo"},null,8,["modelValue","options"])]),n("div",ee,[a(M,{label:"Desde Cta.",modelValue:e.form.desdeCuenta,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.desdeCuenta=o),type:"text",outlined:"",dense:""},null,8,["modelValue"])]),n("div",le,[a(M,{label:"Hasta Cta.",modelValue:e.form.hastaCuenta,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.hastaCuenta=o),type:"text",outlined:"",dense:""},null,8,["modelValue"])]),n("div",oe,[a(m,{label:"Mes Inicial",modelValue:e.mesInicial,"onUpdate:modelValue":l[5]||(l[5]=o=>e.mesInicial=o),options:e.meses,"option-label":"label","option-value":"value",outlined:"",dense:""},null,8,["modelValue","options"])]),n("div",ae,[a(m,{label:"Mes Final",modelValue:e.mesFinal,"onUpdate:modelValue":l[6]||(l[6]=o=>e.mesFinal=o),options:e.meses,"option-label":"label","option-value":"value",outlined:"",dense:""},null,8,["modelValue","options"])]),n("div",re,[a(z,{modelValue:e.sinMovimiento,"onUpdate:modelValue":l[7]||(l[7]=o=>e.sinMovimiento=o),label:"Sin Movimiento"},null,8,["modelValue"])])]),ne]),se,a(R,null,{default:s(()=>[a(K,{modelValue:e.tab,"onUpdate:modelValue":l[8]||(l[8]=o=>e.tab=o),class:"text-bold"},{default:s(()=>[a(Q,{name:"periodo",label:"Reportes x Periodo"}),a(Q,{name:"mes",label:"Reportes al Mes"}),a(Q,{name:"compras",label:"Reportes de Compras y Ventas"})]),_:1},8,["modelValue"]),a(H),a(W,{modelValue:e.tab,"onUpdate:modelValue":l[23]||(l[23]=o=>e.tab=o),animated:""},{default:s(()=>[a(E,{name:"periodo"},{default:s(()=>[a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[9]||(l[9]=o=>e.reportePeriodo=o),val:"diario",label:"Diario"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[10]||(l[10]=o=>e.reportePeriodo=o),val:"mayor",label:"Mayor"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[11]||(l[11]=o=>e.reportePeriodo=o),val:"balance",label:"Balance"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[12]||(l[12]=o=>e.reportePeriodo=o),val:"ERC",label:"ER Consolidado"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[13]||(l[13]=o=>e.reportePeriodo=o),val:"ERA",label:"ER Anal\xEDtio"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[14]||(l[14]=o=>e.reportePeriodo=o),val:"BGC",label:"BG Consolidado"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[15]||(l[15]=o=>e.reportePeriodo=o),val:"BGA",label:"BG Anal\xEDtico"},null,8,["modelValue"]),a(t,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[16]||(l[16]=o=>e.reportePeriodo=o),val:"flujo",label:"Flujo de Efectivo"},null,8,["modelValue"])]),_:1}),a(E,{name:"mes"},{default:s(()=>[a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[17]||(l[17]=o=>e.reporteMes=o),val:"diario",label:"Diario"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[18]||(l[18]=o=>e.reporteMes=o),val:"mayor",label:"Mayor"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[19]||(l[19]=o=>e.reporteMes=o),val:"balance",label:"Balance"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[20]||(l[20]=o=>e.reporteMes=o),val:"resultados",label:"Est. Resultados"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[21]||(l[21]=o=>e.reporteMes=o),val:"bgeneral",label:"Balance General"},null,8,["modelValue"]),a(t,{modelValue:e.reporteMes,"onUpdate:modelValue":l[22]||(l[22]=o=>e.reporteMes=o),val:"inventarios",label:"Inventarios"},null,8,["modelValue"])]),_:1}),a(E,{name:"compras"},{default:s(()=>[a(b,{label:"Compras",color:"primary"}),a(b,{label:"Ventas",color:"primary"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),te,n("div",de,[a(M,{modelValue:e.folio,"onUpdate:modelValue":l[26]||(l[26]=o=>e.folio=o),type:"number",label:"No. Folio",outlined:"",dense:"","hide-bottom-space":"",readonly:"",class:"col-2",rules:[o=>o>0||"No puede ser un folio negativo"]},{before:s(()=>[a(b,{round:"",dense:"",flat:"",icon:"remove",onClick:l[24]||(l[24]=o=>e.folio<=1?1:e.folio--),color:"red"})]),after:s(()=>[a(b,{round:"",dense:"",flat:"",icon:"add",onClick:l[25]||(l[25]=o=>e.folio++),color:"blue"})]),_:1},8,["modelValue","rules"]),a(b,{label:"Generar Reporte",color:"primary",onClick:e.generarReporte},null,8,["onClick"])])]),_:1})]),_:1}),ue,a(R,null,{default:s(()=>[a(A,null,{default:s(()=>[n("iframe",{src:e.scrReport,width:"100%",style:{height:"90vh"}},null,8,ie)]),_:1})]),_:1})]),_:1})}var Ee=q(Y,[["render",me]]);export{Ee as default};
