import{a as R,Q as K}from"./QBreadcrumbs.05c474b1.js";import{h as f}from"./QSelect.050ad78f.js";import{y as t,I as A,bn as T,bo as G,_ as W,d as X,g as d,o as Z,aF as x,w as s,a as b,e as a,i as z,f as n,j as E,bl as _,Q as S,ap as ee,bx as i,l as V}from"./index.9bc9c606.js";import{Q as le,a as F,b as oe,c as N}from"./QTabPanels.4c664ca5.js";import{Q as ae}from"./QPage.aeec985c.js";import{a as c,s as g,d as re}from"./axios.815799b5.js";import"./selection.fe184fa4.js";import"./touch.1256e658.js";import"./use-render-cache.3aae9b27.js";const te=[t("circle",{cx:"15",cy:"15",r:"15"},[t("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),t("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[t("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),t("circle",{cx:"105",cy:"15",r:"15"},[t("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),t("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var ne=A({name:"QSpinnerDots",props:T,setup(e){const{cSize:l,classes:m}=G(e);return()=>t("svg",{class:m.value,fill:"currentColor",width:l.value,height:l.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},te)}});const se=[t("g",{transform:"translate(-20,-20)"},[t("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[t("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),t("g",{transform:"translate(20,20) rotate(15 50 50)"},[t("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[t("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];var ie=A({name:"QSpinnerGears",props:T,setup(e){const{cSize:l,classes:m}=G(e);return()=>t("svg",{class:m.value,width:l.value,height:l.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},se)}});const de=X({setup(){const e=d("periodo"),l=d("diario"),m=d("diario"),M=d([]),U=d([]),P=d([]),o=d(""),B=d(null),L=d(null),I=d(1),$=d(),r=d({contribuyente:null,empresa:null,periodo:null,hastaCuenta:"",desdeCuenta:""}),h=()=>{r.value.contribuyente=null,r.value.empresa=null,r.value.periodo=null,r.value.hastaCuenta="",r.value.desdeCuenta=""},j=()=>{h(),c.get("/contribuyentes").then(u=>{M.value=u.data})},q=()=>{r.value.empresa=null,r.value.periodo=null,r.value.hastaCuenta="",r.value.desdeCuenta="",b.show({message:"Cargando empresas"}),c.get("/empresas/contribuyente",{params:{id_contribuyente:r.value.contribuyente.id}}).then(u=>{U.value=u.data,b.hide()})},O=()=>{r.value.empresa&&(r.value.periodo=null,c.get("/periodos/abiertos/"+r.value.empresa.id).then(u=>{P.value=u.data}))};return{mesInicial:B,mesFinal:L,generarReporte:async()=>{const{contribuyente:u,empresa:D,periodo:k,hastaCuenta:Fe,desdeCuenta:Ne}=r.value,C=B.value.value,y=L.value.value;if(!u||!D||!k){g("Contribuyente, Empresa y Periodo son obligatorios.",{tipo:"negative"});return}if(e.value=="mes"&&(!C||!y)){g("Mes Inicial y Mes Final son obligatorios.",{tipo:"negative"});return}if(C&&y&&C>y){g("Mes Inicial no puede ser mayor que Mes Final.",{tipo:"negative"});return}let v="",w="",Q=!1;if(e.value=="periodo"?(v=l.value,w="xperiodo_report"):e.value=="mes"&&(w="xmes_report",v=m.value),console.log(`/reportes/${v}`),b.show({message:"Obteniendo informaci\xF3n",spinner:ne}),await c.get(`/reportes/${v}`,{params:{contribuyente:u.id,empresa:D.id,periodo:k.periodo,mesInicio:C,mesFin:y}}).then(p=>{if(console.log("\u{1F680} ~ .then reportes ~ resp.data:",p.data),!p.data.periodo){g("No se encontraron datos para el reporte",{tipo:"negative"}),b.hide(),Q=!0;return}$.value=p.data}).catch(p=>{g(p),b.hide(),Q=!0}),Q)return;let J={reporte:`${v}${w}`,data:$.value},H="";b.show({message:"Construyendo reporte ",spinner:ie}),await c.post(re+H,J,{responseType:"blob"}).then(async p=>{const Y=URL.createObjectURL(p.data);o.value=Y}).finally(()=>{b.hide()})},scrReport:o,periodos:P,selectEmpresa:()=>{O(),I.value=r.value.empresa.correlativo_folio===null?1:r.value.empresa.correlativo_folio},getEmpresas:q,getContribuyentes:j,contribuyentes:M,empresas:U,form:r,folio:I,periodo:2023,mes:"",cuenta:"",proveedor:"",monto:null,sinMovimiento:!1,tab:e,reportePeriodo:l,reporteMes:m,meses:[{label:"Enero",value:1},{label:"Febrero",value:2},{label:"Marzo",value:3},{label:"Abril",value:4},{label:"Mayo",value:5},{label:"Junio",value:6},{label:"Julio",value:7},{label:"Agosto",value:8},{label:"Septiembre",value:9},{label:"Octubre",value:10},{label:"Noviembre",value:11},{label:"Diciembre",value:12}]}},mounted(){this.getContribuyentes()}}),ue={class:""},me={class:"row q-col-gutter-sm"},pe={class:"col-xs-4"},be={class:"col-xs-6"},ve={class:"col-xs-2"},fe={class:"col-xs-2"},Ve={class:"col-xs-2"},ce={class:"col-xs-2"},ge={class:"col-xs-2"},Ce={class:"col-xs-3"},ye=n("div",{class:"row q-col-gutter-sm"},null,-1),Me=n("br",null,null,-1),Ue=n("br",null,null,-1),Pe={class:"row justify-end q-gutter-sm"},we=n("br",null,null,-1),Qe=["src"];function Re(e,l,m,M,U,P){return Z(),x(ae,{padding:""},{default:s(()=>[a(K,null,{default:s(()=>[a(R,{label:"Sistema",icon:"home"}),a(R,{label:"Reportes",icon:"settings"}),a(R,{label:"Reportes",icon:"local_gas_station"})]),_:1}),a(S,{class:"q-mt-md"},{default:s(()=>[a(z,null,{default:s(()=>[n("div",ue,[n("div",me,[n("div",pe,[a(f,{label:"Contribuyente",modelValue:e.form.contribuyente,"onUpdate:modelValue":[l[0]||(l[0]=o=>e.form.contribuyente=o),e.getEmpresas],outlined:"",dense:"",options:e.contribuyentes,"option-value":"id","option-label":"nombre_contribuyente"},null,8,["modelValue","options","onUpdate:modelValue"])]),n("div",be,[a(f,{label:"Empresa",modelValue:e.form.empresa,"onUpdate:modelValue":[l[1]||(l[1]=o=>e.form.empresa=o),e.selectEmpresa],outlined:"",dense:"",options:e.empresas,"option-value":"id","option-label":"nombre_empresa"},null,8,["modelValue","options","onUpdate:modelValue"])]),n("div",ve,[a(f,{label:"Per\xEDodo",modelValue:e.form.periodo,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.periodo=o),options:e.periodos,outlined:"",dense:"","option-label":"periodo","option-value":"periodo"},null,8,["modelValue","options"])]),n("div",fe,[a(E,{label:"Desde Cta.",modelValue:e.form.desdeCuenta,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.desdeCuenta=o),type:"text",outlined:"",dense:""},null,8,["modelValue"])]),n("div",Ve,[a(E,{label:"Hasta Cta.",modelValue:e.form.hastaCuenta,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.hastaCuenta=o),type:"text",outlined:"",dense:""},null,8,["modelValue"])]),n("div",ce,[a(f,{label:"Mes Inicial",modelValue:e.mesInicial,"onUpdate:modelValue":l[5]||(l[5]=o=>e.mesInicial=o),options:e.meses,"option-label":"label","option-value":"value",outlined:"",dense:""},null,8,["modelValue","options"])]),n("div",ge,[a(f,{label:"Mes Final",modelValue:e.mesFinal,"onUpdate:modelValue":l[6]||(l[6]=o=>e.mesFinal=o),options:e.meses,"option-label":"label","option-value":"value",outlined:"",dense:""},null,8,["modelValue","options"])]),n("div",Ce,[a(_,{modelValue:e.sinMovimiento,"onUpdate:modelValue":l[7]||(l[7]=o=>e.sinMovimiento=o),label:"Sin Movimiento"},null,8,["modelValue"])])]),ye]),Me,a(S,null,{default:s(()=>[a(le,{modelValue:e.tab,"onUpdate:modelValue":l[8]||(l[8]=o=>e.tab=o),class:"text-bold"},{default:s(()=>[a(F,{name:"periodo",label:"Reportes x Periodo"}),a(F,{name:"mes",label:"Reportes al Mes"}),a(F,{name:"compras",label:"Reportes de Compras y Ventas"})]),_:1},8,["modelValue"]),a(ee),a(oe,{modelValue:e.tab,"onUpdate:modelValue":l[23]||(l[23]=o=>e.tab=o),animated:""},{default:s(()=>[a(N,{name:"periodo"},{default:s(()=>[a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[9]||(l[9]=o=>e.reportePeriodo=o),val:"diario",label:"Diario"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[10]||(l[10]=o=>e.reportePeriodo=o),val:"mayor",label:"Mayor"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[11]||(l[11]=o=>e.reportePeriodo=o),val:"balance",label:"Balance"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[12]||(l[12]=o=>e.reportePeriodo=o),val:"er_consolidado",label:"ER Consolidado"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[13]||(l[13]=o=>e.reportePeriodo=o),val:"er_analitico",label:"ER Anal\xEDtio"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[14]||(l[14]=o=>e.reportePeriodo=o),val:"balance_generalC",label:"BG Consolidado"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[15]||(l[15]=o=>e.reportePeriodo=o),val:"balance_generalA",label:"BG Anal\xEDtico"},null,8,["modelValue"]),a(i,{modelValue:e.reportePeriodo,"onUpdate:modelValue":l[16]||(l[16]=o=>e.reportePeriodo=o),val:"flujo_efectivo",label:"Flujo de Efectivo"},null,8,["modelValue"])]),_:1}),a(N,{name:"mes"},{default:s(()=>[a(i,{modelValue:e.reporteMes,"onUpdate:modelValue":l[17]||(l[17]=o=>e.reporteMes=o),val:"diario",label:"Diario"},null,8,["modelValue"]),a(i,{modelValue:e.reporteMes,"onUpdate:modelValue":l[18]||(l[18]=o=>e.reporteMes=o),val:"mayor",label:"Mayor"},null,8,["modelValue"]),a(i,{modelValue:e.reporteMes,"onUpdate:modelValue":l[19]||(l[19]=o=>e.reporteMes=o),val:"balance",label:"Balance"},null,8,["modelValue"]),a(i,{modelValue:e.reporteMes,"onUpdate:modelValue":l[20]||(l[20]=o=>e.reporteMes=o),val:"estadoresultados",label:"Est. Resultados"},null,8,["modelValue"]),a(i,{modelValue:e.reporteMes,"onUpdate:modelValue":l[21]||(l[21]=o=>e.reporteMes=o),val:"balance_general",label:"Balance General"},null,8,["modelValue"]),a(i,{modelValue:e.reporteMes,"onUpdate:modelValue":l[22]||(l[22]=o=>e.reporteMes=o),val:"inventarios",label:"Inventarios"},null,8,["modelValue"])]),_:1}),a(N,{name:"compras"},{default:s(()=>[a(V,{label:"Compras",color:"primary"}),a(V,{label:"Ventas",color:"primary"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),Ue,n("div",Pe,[a(E,{modelValue:e.folio,"onUpdate:modelValue":l[26]||(l[26]=o=>e.folio=o),type:"number",label:"No. Folio",outlined:"",dense:"","hide-bottom-space":"",readonly:"",class:"col-2",rules:[o=>o>0||"No puede ser un folio negativo"]},{before:s(()=>[a(V,{round:"",dense:"",flat:"",icon:"remove",onClick:l[24]||(l[24]=o=>e.folio<=1?1:e.folio--),color:"red"})]),after:s(()=>[a(V,{round:"",dense:"",flat:"",icon:"add",onClick:l[25]||(l[25]=o=>e.folio++),color:"blue"})]),_:1},8,["modelValue","rules"]),a(V,{label:"Generar Reporte",color:"primary",onClick:e.generarReporte},null,8,["onClick"])])]),_:1})]),_:1}),we,a(S,null,{default:s(()=>[a(z,null,{default:s(()=>[n("iframe",{src:e.scrReport,width:"100%",style:{height:"90vh"}},null,8,Qe)]),_:1})]),_:1})]),_:1})}var Ge=W(de,[["render",Re]]);export{Ge as default};
