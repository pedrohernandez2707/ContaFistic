import{a as Y,Q as Te}from"./QBreadcrumbs.0c9f2397.js";import{d as me,g as d,_ as pe,o as D,aF as ve,w as i,e as t,l as I,i as H,j as F,C as R,aG as ae,aH as K,Q as Z,aM as Me,bp as Pe,bq as $e,f as r,q as te,r as ze,P as q,a as E,bl as Ue,ba as Ae,x as T,aq as oe,c as M,aJ as le,aK as ne}from"./index.8c6caead.js";import{h as G}from"./QSelect.0bc76de2.js";import{r as Je,u as Le,Q as se,a as ie,b as Oe}from"./xlsx.9f368137.js";import{Q as re,C as de}from"./ClosePopup.d7478c33.js";import{Q as be,a as W}from"./QTable.1bd6d9d4.js";import{Q as je}from"./QPage.e6c796e3.js";import{a as Q,s as C,c as ue,b as xe}from"./axios.2465e07b.js";import{Q as Ye,a as qe}from"./QBar.14a3bb99.js";import"./selection.bfe3aa9e.js";import"./use-render-cache.3aae9b27.js";import"./QList.6d40fe08.js";const Ge=me({name:"BuscadorVentas",emits:["venta-seleccionada"],setup(e,{emit:s}){const h=d(null),g=d(!1),V=d(""),B=[{name:"empresa",label:"Empresa",align:"left",field:"nombre_empresa",sortable:!0},{name:"venta",label:"Venta",align:"left",field:"id_venta",sortable:!0},{name:"poliza",label:"Poliza",align:"left",field:"id_poliza",sortable:!0},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion",sortable:!0}],u=d([]),l=d([...u.value]),f=()=>{V.value===null?l.value=u.value:l.value=u.value.filter(v=>v.id_compra.toLowerCase().includes(V.value)||v.descripcion||v.nombre_empresa||v.id_poliza.toLowerCase().includes(V.value.toLowerCase()))},P=(v,S)=>{g.value=!1,s("venta-seleccionada",S.id_venta)},$=()=>{g.value=!1},z=async()=>{var v;g.value=!0,await new Promise(S=>setTimeout(S,250)),(v=h.value)==null||v.focus(),U()},U=()=>{Q.get("ventas",{params:{id_empresa:3,id_periodo:1}}).then(v=>{u.value=v.data,l.value=v.data})};return{refInputBuscar:h,dialogVisible:g,searchQuery:V,columns:B,ventas:u,filteredVentas:l,filtrarVentas:f,seleccionarVenta:P,cerrarDialogo:$,abrirDialogo:z}}}),He=e=>(Pe("data-v-473e3052"),e=e(),$e(),e),Re=He(()=>r("div",{class:"text-h6"},"Buscador",-1));function Ke(e,s,h,g,V,B){return D(),ve(Me,{modelValue:e.dialogVisible,"onUpdate:modelValue":s[1]||(s[1]=u=>e.dialogVisible=u),persistent:""},{default:i(()=>[t(Z,{style:{"min-width":"650px"}},{default:i(()=>[t(Ye,null,{default:i(()=>[Re,t(qe),t(I,{dense:"",flat:"",icon:"close",onClick:e.cerrarDialogo},null,8,["onClick"])]),_:1}),t(H,null,{default:i(()=>[t(F,{modelValue:e.searchQuery,"onUpdate:modelValue":[s[0]||(s[0]=u=>e.searchQuery=u),e.filtrarVentas],ref:"refInputBuscar",label:"Buscar Libro Ventas",dense:"",outlined:"",clearable:"",debounce:"350"},{append:i(()=>[t(R,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),t(be,{rows:e.filteredVentas,columns:e.columns,"row-key":"correlativo",style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",onRowDblclick:e.seleccionarVenta,dense:""},{"body-cell-correlativo":i(u=>[t(W,{props:u},{default:i(()=>[ae(K(u.row.correlativo),1)]),_:2},1032,["props"])]),"body-cell-nombre":i(u=>[t(W,{props:u},{default:i(()=>[ae(K(u.row.nombre),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowDblclick"])]),_:1})]),_:1},8,["modelValue"])}var Ze=pe(Ge,[["render",Ke],["__scopeId","data-v-473e3052"]]);const N=new Date;N.getDate();N.getMonth()+1;N.getFullYear();N.setHours(0,-N.getTimezoneOffset(),0,0);let ce=N.toJSON().slice(0,10).replaceAll("-","/");const We=me({components:{BuscadorVentas:Ze},setup(){const e=d(null),s=()=>{var o;(o=e.value)==null||o.abrirDialogo()},h=d([]),g=d([]),V=d(null),B=d(""),u=d(!1),l=d(""),f=d(null),P=()=>{f.value=null,Q.get("/cuentasn4/combo").then(o=>{h.value=o.data})},$=(o,a)=>{if(o===""){a(()=>{g.value=[...h.value]});return}const p=o.toLowerCase();a(()=>{g.value=h.value.filter(c=>c.descripcion.toLowerCase().includes(p))})},z=(o,a)=>{if(o===""){a(()=>{g.value=h.value});return}a(()=>{const p=o.toLowerCase();g.value=h.value.filter(c=>c.descripcion.toLowerCase().indexOf(p)>-1)},p=>{o!==""&&p.options.length>0&&(p.setOptionIndex(-1),p.moveOptionSelection(1,!0))})},U=d(null),v=d(null),S=d(!1),fe=d([{id:1,nombre:"2024"}]),ge=d([{id:1,nombre:"Enero"},{id:2,nombre:"Febrero"},{id:3,nombre:"Marzo"},{id:4,nombre:"Abril"},{id:5,nombre:"Mayo"},{id:6,nombre:"Junio"},{id:7,nombre:"Julio"},{id:8,nombre:"Agosto"},{id:9,nombre:"Septiembre"},{id:10,nombre:"Octubre"},{id:11,nombre:"Noviembre"},{id:12,nombre:"Diciembre"}]),A=d(null),he=d([]),Ve=d(!1),J=d(ce),L=d(ce),b=d([{}]),_e=[{name:"Doc",label:"Doc. No",field:"documento",align:"left"},{name:"Serie",label:"Serie",field:"serie",align:"left"},{name:"Fecha",label:"Fecha",field:"fecha",align:"left",sortable:!0},{name:"Tipo",label:"Tipo",field:"tipo",align:"left",style:"max-width:120px;width:100px;"},{name:"NIT",label:"NIT",field:"nit",align:"left",style:"min-width:100px;width:100px"},{name:"Comprador",label:"Comprador",field:"comprador",align:"left",style:"max-width:290px;width:290px;text-wrap:balance"},{name:"Cta",label:"Cta",field:"Cta",align:"left",style:"max-width:150px;width:150px"},{name:"Exportaciones",label:"Exportaciones",field:"exportaciones",align:"left"},{name:"Bienes",label:"Bienes",field:"bienes",align:"left"},{name:"Servicios",label:"Servicios",field:"servicios",align:"left"},{name:"Exentos",label:"Exentos",field:"Exentos",align:"left"},{name:"SubTotal",label:"SubTotal",field:"subtotal",align:"left"},{name:"Iva",label:"Iva",field:"iva",align:"left"}],we=o=>{b.value=b.value.filter(a=>a.documento!==o)},Ce=()=>{b.value.push({documento:b.value.length+1})};function Se(o){const a=new Date(o),p=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0"),_=String(a.getHours()).padStart(2,"0"),w=String(a.getMinutes()).padStart(2,"0"),j=String(a.getSeconds()).padStart(2,"0");return`${p}-${c}-${n} ${_}:${w}:${j}`}const ye=async()=>{if(A.value){const o=await A.value.arrayBuffer(),a=Je(o),p=a.Sheets[a.SheetNames[0]],c=Le.sheet_to_json(p);let n=JSON.parse(q.getItem("empresa").toString()),_="",w="";n!==null&&(_=n.nit,w=n.distVentas);const y=c.filter(m=>{if(_!==m["ID del receptor"])return m;C("Existen documentos con el mismo nit de la empresa seleccionada, verifique si no esta intentando cargar un archivo de compras!",{tipo:"negative",timeout:8500,progress:!0})}).map(m=>({documento:m["N\xFAmero del DTE"],serie:m.Serie,fecha:Se(m["Fecha de emisi\xF3n"]),tipo:m["Tipo de DTE (nombre)"],nit:m["ID del receptor"],comprador:m["Nombre completo del receptor"],bienes:w==="Bienes"?m["Monto (Gran Total)"]:"",servicios:w==="Servicios"?m["Monto (Gran Total)"]:"",subtotal:(m["Monto (Gran Total)"]-m["IVA (monto de este impuesto)"]).toFixed(2),iva:m["IVA (monto de este impuesto)"],Cta:null}));b.value=y}return 0},O=d("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZ2VuY2lhVmlydHVhbERURSIsImlzcyI6IlNBVCIsIm5pdCI6IjEwNDkwOTUwMSIsImV4cCI6MTcyNDc3MjU3NiwiaWF0IjoxNzI0NzI5Mzc2fQ.1h1lDjyLsrL7ZH9inMvVZ9PHV-xtBsN6qVdPK0uHB54"),De=()=>{const o=ue.create();O.value===""&&o.get("http://localhost:5000/get-token").then(a=>{console.log(a.data),O.value=a.data}).catch(a=>console.error("Error:",a))},k=o=>{const[a,p,c]=o.split("/").map(Number),n=c.toString().padStart(2,"0"),_=p.toString().padStart(2,"0");return`${n}-${_}-${a}`},Ie=()=>{const o=ue.create();console.log(k(J.value),k(L.value)),o.get("http://localhost:5000/get-fact",{headers:{Authorization:O.value},params:{nit:"104909501",fechai:k(J.value),fechaf:k(L.value),tipo:"R"}}).then(a=>{const c=a.data.data.map(n=>({documento:n.numeroDocumento,serie:n.serie,fecha:n.fechaEmision,tipo:n.tipo,proveedor:n.nombreEmisor,nit:n.nitEmisor,total:n.granTotal,iva:n.totalIva}));console.log(c),b.value=c}).catch(a=>console.error("Error:",a))},Fe=o=>o.every(a=>a.Cta!==null),Ne=async()=>{let o=!1;const a=JSON.parse(q.getItem("empresa").toString());let p=0;if(a)p=a.id;else{C("Debe Seleccionar Empresa",{tipo:"negative"}),o=!0;return}const c=v.value;if(!c){C("Debe Seleccionar el Mes",{tipo:"negative"}),o=!0;return}let n=V.value;if(!n){C("Debe Seleccionar la Cuenta Contable Para el Encabezado",{tipo:"negative"}),o=!0;return}if(b.value.length==0){C("Debe Ingresar al Menos un Detalle",{tipo:"negative"}),o=!0;return}if(!Fe(b.value)){C("Debe Indicar la cuenta contable para cada uno de los Detalles, verificar",{tipo:"negative"}),o=!0;return}let _=q.getItem("periodo");if(!_){C("Debe Seleccionar el Periodo para la Empresa Correspondiente",{tipo:"negative"}),o=!0;return}if(!o){let w=f.value;if(!await xe("Confirmaci\xF3n","Esta seguro de "+(w!==null&&w!==""?"Actualizar libro de Ventas: "+w:"Insertar al libro de Ventas?"),{}))return;if(f.value!=null){const y={_encabezado:[{_id_venta:f.value,_p_id_poliza:l.value,_id_cuenta_contable:n&&n.id?n.id:n,_usuario_ingresa:"usrtest",_estado:"A",_mes:v.value}],_detalle:b.value};console.log(y),E.show(),await Q.put("/ventas",y).then(m=>{console.log(m.data),C("Venta actualizada correctamente, Partida Actualizada",{}),S.value=!0}).finally(()=>{E.hide()})}else{const y={_encabezado:[{_id_Empresa:p,_mes:(c==null?void 0:c.id)||0,_periodo:_,_id_poliza:0,_id_cuenta_contable:n.id,_usuario_ingresa:"usrtest",_estado:"A"}],_detalle:b.value};console.log(y),E.show(),await Q.post("/ventas",y).then(m=>{console.log(m.data);const ke=m.data.fn_insertar_ventas_json,[ee,x]=ke.replace(/[()]/g,"").split(","),Ee=parseInt(ee);x.replace(/"/g,""),C(`Venta guardada correctamente No.${ee} Partida Generada ${x}`,{}),f.value=Ee.toString(),l.value=x.toString(),u.value=!0,S.value=!0}).finally(()=>{E.hide()})}}},Be=te(()=>b.value.reduce((o,a)=>o+parseFloat(a.total||0),0).toFixed(2)),Qe=te(()=>b.value.reduce((o,a)=>o+parseFloat(a.iva||0),0).toFixed(2));function X(o){const a=o.replace(/[\$,]/g,"");return parseFloat(a)}return{filterCuentas:$,file:A,parsedCSV:he,visibleDate:Ve,fechai:J,fechaf:L,convert:ye,columns:_e,ventas:b,getdata:De,getFacturas:Ie,eliminarFila:we,agregarFila:Ce,calculoTotal:Be,calculoIva:Qe,selectedCuentaEnc:V,cuentasn4:h,cuentasFilter:g,filterCuenta:z,getCuentasN4:P,cantFacturas:B,txtNoPartida:l,checkPartidaGenerada:u,txtNoVenta:f,mesesDelA\u00F1o:ge,periodoModel:U,mesesModel:v,periodos:fe,disableBTN:S,onClick:Ne,onBuscarVenta:o=>{Q.get("ventas/idVenta",{params:{id_venta:o}}).then(a=>{console.log(a.data),f.value=o,v.value=a.data.enc.mes,V.value=a.data.enc.id_cuenta_contable,l.value=a.data.enc.id_poliza;let c=a.data.det.map(n=>({id:1,Cta:{id:n.id_cuenta,correlativo:n.correlativo,nombre:n.nombre},documento:n.doc_no,serie:n.serie,fecha:n.fecha,tipo:n.tipo_documento,proveedor:n.proveedor,nit:n.nit_cedula,checked:!1,Importacion:n.importaciones,Servicios:n.servicios,Exentos:n.exentos,Valor:n.valor,total:X(n.total),iva:X(n.iva)}));b.value=c})},refBuscadorVentas:e,showBuscarVentas:s}},mounted(){this.getCuentasN4(),this.getdata()}}),Xe={class:"row q-col-gutter-sm"},ea={class:"col-4"},aa={class:"col-4"},ta={class:"col-1"},oa={class:"col-4"},la={class:"col-2"},na={class:"col-3 text-right"},sa={class:"col-3"},ia={class:"col-12"},ra={class:"col-12"},da={class:"row q-col-gutter-sm"},ua={class:"col-5"},ca={class:"row items-center justify-end"},ma={class:"col-5"},pa={class:"row items-center justify-end"},va={class:"col-2"},ba={class:"col-12"},fa={class:"row q-ma-sm"},ga=r("div",{class:"col-9"},[r("div",{class:"text-h6"},"Detalle de Ventas")],-1),ha=r("div",{class:"col-1"},null,-1),Va={class:"col"},_a={class:"table table-bordered",id:"preview-table"};function wa(e,s,h,g,V,B){const u=ze("buscador-ventas");return D(),ve(je,{padding:""},{default:i(()=>[t(Te,null,{default:i(()=>[t(Y,{label:"Registros Contables",icon:"home"}),t(Y,{label:"Ingreso",icon:"widgets"}),t(Y,{label:"Libro Ventas",icon:"navigation"})]),_:1}),t(Z,{class:"q-mt-md"},{default:i(()=>[t(H,null,{default:i(()=>[r("div",Xe,[r("div",ea,[t(F,{modelValue:e.txtNoVenta,"onUpdate:modelValue":s[0]||(s[0]=l=>e.txtNoVenta=l),type:"text",label:"No. Interno",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),r("div",aa,[t(G,{modelValue:e.mesesModel,"onUpdate:modelValue":s[1]||(s[1]=l=>e.mesesModel=l),options:e.mesesDelA\u00F1o,label:"Mes",outlined:"",dense:"","option-value":"id","option-label":"nombre",disable:e.txtNoVenta!=null},null,8,["modelValue","options","disable"])]),r("div",ta,[t(I,{color:"primary",outline:"",icon:"search",onClick:e.showBuscarVentas},null,8,["onClick"])]),r("div",oa,[t(G,{modelValue:e.selectedCuentaEnc,"onUpdate:modelValue":s[2]||(s[2]=l=>e.selectedCuentaEnc=l),options:e.cuentasFilter,label:"Cuenta Debe",outlined:"",dense:"","option-value":"id","option-label":"descripcion","use-input":"","input-debounce":"300",onFilter:e.filterCuentas},null,8,["modelValue","options","onFilter"])]),r("div",la,[t(F,{modelValue:e.cantFacturas,"onUpdate:modelValue":s[3]||(s[3]=l=>e.cantFacturas=l),type:"text",label:"Cant. Facturas",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),r("div",na,[t(Ue,{"left-label":"",modelValue:e.checkPartidaGenerada,"onUpdate:modelValue":s[4]||(s[4]=l=>e.checkPartidaGenerada=l),label:"Partida generada",disable:!0},null,8,["modelValue"])]),r("div",sa,[t(F,{modelValue:e.txtNoPartida,"onUpdate:modelValue":s[5]||(s[5]=l=>e.txtNoPartida=l),type:"text",label:"No.Partida",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),r("div",ia,[t(Ae,{modelValue:e.visibleDate,"onUpdate:modelValue":s[6]||(s[6]=l=>e.visibleDate=l),label:"Consultar SAT"},null,8,["modelValue"])]),r("div",ra,[t(re,null,{default:i(()=>[T(r("div",da,[r("div",ua,[t(F,{dense:"",outlined:"",modelValue:e.fechai,"onUpdate:modelValue":s[8]||(s[8]=l=>e.fechai=l),mask:"date",rules:["date"],label:"Fecha Inicial","hide-bottom-space":"",placeholder:"YYYY/MM/DD",clearable:""},{append:i(()=>[t(R,{name:"event",class:"cursor-pointer"},{default:i(()=>[t(se,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[t(ie,{modelValue:e.fechai,"onUpdate:modelValue":s[7]||(s[7]=l=>e.fechai=l)},{default:i(()=>[r("div",ca,[T(t(I,{label:"Cerrar",color:"primary",flat:""},null,512),[[de]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),r("div",ma,[t(F,{dense:"",outlined:"",modelValue:e.fechaf,"onUpdate:modelValue":s[10]||(s[10]=l=>e.fechaf=l),mask:"date",rules:["date"],"hide-bottom-space":"",label:"Fecha Final",placeholder:"YYYY/MM/DD",clearable:""},{append:i(()=>[t(R,{name:"event",class:"cursor-pointer"},{default:i(()=>[t(se,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[t(ie,{modelValue:e.fechaf,"onUpdate:modelValue":s[9]||(s[9]=l=>e.fechaf=l)},{default:i(()=>[r("div",pa,[T(t(I,{label:"Cerrar",color:"primary",flat:""},null,512),[[de]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),r("div",va,[t(I,{color:"primary",label:"Consultar",onClick:e.getFacturas},null,8,["onClick"])])],512),[[oe,e.visibleDate]])]),_:1})]),r("div",ba,[t(re,null,{default:i(()=>[T(t(Oe,{modelValue:e.file,"onUpdate:modelValue":[s[11]||(s[11]=l=>e.file=l),e.convert],label:"Seleccione o arraste un archivo para importar(.xls)",outlined:"",accept:".xls",clearable:""},null,8,["modelValue","onUpdate:modelValue"]),[[oe,!e.visibleDate]])]),_:1})])])]),_:1})]),_:1}),t(Z,{class:"q-mt-sm"},{default:i(()=>[t(H,null,{default:i(()=>[r("div",fa,[ga,ha,r("div",Va,[t(I,{color:"primary",icon:"check",label:e.txtNoVenta?"Actualizar Partida":"Generar Partida",onClick:e.onClick,disable:e.disableBTN},null,8,["label","onClick","disable"])])]),t(be,{style:{height:"500px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.ventas,columns:e.columns,"row-key":"id",dense:""},{"body-cell-Cta":i(l=>[t(W,{props:l},{default:i(()=>[t(G,{modelValue:l.row.Cta,"onUpdate:modelValue":f=>l.row.Cta=f,options:e.cuentasFilter,"option-label":"descripcion","option-value":"id",dense:"",borderless:"","map-options":"","hide-selected":"","hide-bottom-space":"","use-input":"","fill-input":"",clearable:"",onFilter:e.filterCuenta,onFilterAbort:()=>{}},null,8,["modelValue","onUpdate:modelValue","options","onFilter"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),r("table",_a,[r("tbody",null,[(D(!0),M(ne,null,le(e.parsedCSV,l=>(D(),M("tr",null,[(D(!0),M(ne,null,le(l,f=>(D(),M("td",null,K(f),1))),256))]))),256))])])]),_:1})]),_:1}),t(u,{ref:"refBuscadorVentas",onVentaSeleccionada:e.onBuscarVenta},null,8,["onVentaSeleccionada"])]),_:1})}var Pa=pe(We,[["render",wa]]);export{Pa as default};