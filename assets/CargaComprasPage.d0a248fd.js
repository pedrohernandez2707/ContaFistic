import{a as L,Q as Be}from"./QBreadcrumbs.0c9f2397.js";import{d as me,g as d,_ as pe,o as fe,aF as be,w as l,e as a,l as y,i as H,j as F,C as W,aG as oe,aH as I,Q as K,aM as Me,bp as ve,bq as ge,f as i,q as le,r as $e,P as G,a as U,bl as te,ba as ze,x as E,aq as se}from"./index.8c6caead.js";import{h as A}from"./QSelect.0bc76de2.js";import{r as xe,u as Je,Q as ne,a as re,b as Oe}from"./xlsx.9f368137.js";import{Q as ie,C as de}from"./ClosePopup.d7478c33.js";import{Q as he,a as b}from"./QTable.1bd6d9d4.js";import{Q as R}from"./QTr.cdf5437c.js";import{Q as Ye}from"./QPage.e6c796e3.js";import{a as D,s as V,b as je,c as ue}from"./axios.2465e07b.js";import{Q as qe,a as Le}from"./QBar.14a3bb99.js";import"./selection.bfe3aa9e.js";import"./use-render-cache.3aae9b27.js";import"./QList.6d40fe08.js";const Ge=me({name:"BuscadorCompras",emits:["compra-seleccionada"],setup(e,{emit:r}){const C=d(null),h=d(!1),_=d(""),N=[{name:"empresa",label:"Empresa",align:"left",field:"nombre_empresa",sortable:!0},{name:"compra",label:"Compra",align:"left",field:"id_compra",sortable:!0},{name:"poliza",label:"Poliza",align:"left",field:"id_poliza",sortable:!0},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion",sortable:!0}],u=d([]),o=d([...u.value]),c=()=>{_.value===null?o.value=u.value:o.value=u.value.filter(g=>g.id_compra.toLowerCase().includes(_.value)||g.descripcion||g.nombre_empresa||g.id_poliza.toLowerCase().includes(_.value.toLowerCase()))},B=(g,S)=>{h.value=!1,r("compra-seleccionada",S.id_compra)},M=()=>{h.value=!1},$=async()=>{var g;h.value=!0,await new Promise(S=>setTimeout(S,250)),(g=C.value)==null||g.focus(),z()},z=()=>{D.get("compras",{params:{id_empresa:3,id_periodo:1}}).then(g=>{u.value=g.data,o.value=g.data})};return{refInputBuscar:C,dialogVisible:h,searchQuery:_,columns:N,compras:u,filteredCompras:o,filtrarCompras:c,seleccionarCompra:B,cerrarDialogo:M,abrirDialogo:$}}}),Re=e=>(ve("data-v-3d0f112b"),e=e(),ge(),e),He=Re(()=>i("div",{class:"text-h6"},"Buscador",-1));function We(e,r,C,h,_,N){return fe(),be(Me,{modelValue:e.dialogVisible,"onUpdate:modelValue":r[1]||(r[1]=u=>e.dialogVisible=u),persistent:""},{default:l(()=>[a(K,{style:{"min-width":"650px"}},{default:l(()=>[a(qe,null,{default:l(()=>[He,a(Le),a(y,{dense:"",flat:"",icon:"close",onClick:e.cerrarDialogo},null,8,["onClick"])]),_:1}),a(H,null,{default:l(()=>[a(F,{modelValue:e.searchQuery,"onUpdate:modelValue":[r[0]||(r[0]=u=>e.searchQuery=u),e.filtrarCompras],ref:"refInputBuscar",label:"Buscar Libro Compras",dense:"",outlined:"",clearable:"",debounce:"350"},{append:l(()=>[a(W,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),a(he,{rows:e.filteredCompras,columns:e.columns,"row-key":"correlativo",style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",onRowDblclick:e.seleccionarCompra,dense:""},{"body-cell-correlativo":l(u=>[a(b,{props:u},{default:l(()=>[oe(I(u.row.correlativo),1)]),_:2},1032,["props"])]),"body-cell-nombre":l(u=>[a(b,{props:u},{default:l(()=>[oe(I(u.row.nombre),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowDblclick"])]),_:1})]),_:1},8,["modelValue"])}var Ke=pe(Ge,[["render",We],["__scopeId","data-v-3d0f112b"]]);const X=new Date;X.setHours(0,-X.getTimezoneOffset(),0,0);let ce=X.toJSON().slice(0,10).replaceAll("-","/");const Xe=me({components:{BuscadorCompras:Ke},setup(){const e=d(null),r=()=>{var s;(s=e.value)==null||s.abrirDialogo()},C=d([]),h=d([]),_=d(null),N=d(""),u=d(!1),o=d(""),c=d(null),B=d(null),M=()=>{c.value=null,D.get("/cuentasn4/combo").then(s=>{C.value=s.data})},$=(s,t)=>{if(s===""){t(()=>{h.value=[...C.value]});return}const m=s.toLowerCase();t(()=>{h.value=C.value.filter(p=>p.descripcion.toLowerCase().includes(m))})},z=(s,t)=>{if(s===""){t(()=>{h.value=C.value});return}t(()=>{const m=s.toLowerCase();h.value=C.value.filter(p=>p.descripcion.toLowerCase().indexOf(m)>-1)},m=>{s!==""&&m.options.length>0&&(m.setOptionIndex(-1),m.moveOptionSelection(1,!0))})},g=d(null),S=d(null),x=d(!1),Ce=d([{id:1,nombre:"2024"}]),_e=d([{id:1,nombre:"Enero"},{id:2,nombre:"Febrero"},{id:3,nombre:"Marzo"},{id:4,nombre:"Abril"},{id:5,nombre:"Mayo"},{id:6,nombre:"Junio"},{id:7,nombre:"Julio"},{id:8,nombre:"Agosto"},{id:9,nombre:"Septiembre"},{id:10,nombre:"Octubre"},{id:11,nombre:"Noviembre"},{id:12,nombre:"Diciembre"}]),J=d(null),we=d([]),Ve=d(!1),O=d(ce),Y=d(ce),v=d([{}]),ye=[{name:"Doc",label:"Doc. No",field:"documento",align:"left"},{name:"Serie",label:"Serie",field:"serie",align:"left"},{name:"Fecha",label:"Fecha",field:"fecha",align:"left",sortable:!0,style:"min-width:120px;width:120px"},{name:"Tipo",label:"Tipo",field:"tipo",align:"left",style:"min-width:120px;max-width:120px;width:120px;"},{name:"Proveedor",label:"Proveedor",field:"proveedor",align:"left",style:"width: auto;min-width:125px;"},{name:"NIT",label:"NIT",field:"nit",align:"left",style:"min-width:100px;width:100px"},{name:"Cta",label:"Cta",field:"Cta",align:"left",style:"max-width:150px;width:150px"},{name:"check",label:"Factura Pagada",field:"checked",align:"center",style:"width: 60px;max-width:60px;"},{name:"Compras",label:"Compras",field:"compras",align:"left"},{name:"Servicios",label:"Servicios",field:"servicios",align:"left"},{name:"Exentos",label:"Exentos",field:"exentos",align:"left"},{name:"SubTotal",label:"SubTotal",field:"subtotal",align:"left"},{name:"Iva",label:"Iva",field:"iva",align:"left"},{name:"acciones",label:"",field:"",align:"right",style:"width: 40px; padding:5px"}],Se=s=>s.every(t=>t.Cta!==null),Fe=async()=>{let s=!1;const t=JSON.parse(G.getItem("empresa").toString());let m=0;if(t)m=t.id;else{V("Debe Seleccionar Empresa",{tipo:"negative"}),s=!0;return}const p=S.value;if(!p){V("Debe Seleccionar el Mes",{tipo:"negative"}),s=!0;return}const n=_.value;if(!n){V("Debe Seleccionar la Cuenta Contable Para el Encabezado",{tipo:"negative"}),s=!0;return}if(v.value.length==0){V("Debe Ingresar al Menos un Detalle",{tipo:"negative"}),s=!0;return}if(!Se(v.value)){V("Debe Indicar la cuenta contable para cada uno de los Detalles, verificar",{tipo:"negative"}),s=!0;return}let w=G.getItem("periodo");if(!w){V("Debe Seleccionar el Periodo para la Empresa Correspondiente",{tipo:"negative"}),s=!0;return}if(!s){let k=c.value;if(!await je("Confirmaci\xF3n","Esta seguro de "+(k!==null?"Actualizar la Compra: "+k:"Ingresar la Compra?"),{}))return;if(c.value!=null){const f={_encabezado:[{_id_compra:c.value,_id_cuenta_contable:n&&n.id?n.id:n,_usuario_ingresa:"usrtest",_estado:"A",_p_id_poliza:o.value,_mes:S.value}],_detalle:v.value};U.show(),await D.put("/compras",f).then(P=>{console.log(P.data),P.data.fn_insertar_compras_json,V("Compra actualizada correctamente, Partida Actualizada",{}),x.value=!0}).finally(()=>{U.hide()})}else{const f={_encabezado:[{_id_Empresa:m,_mes:(p==null?void 0:p.id)||0,_periodo:w,_id_poliza:0,_id_cuenta_contable:n.id,_usuario_ingresa:"usrtest",_estado:"A"}],_detalle:v.value};U.show(),await D.post("/compras",f).then(P=>{const Ee=P.data.fn_insertar_compras_json,[ae,q]=Ee.replace(/[()]/g,"").split(","),Ae=parseInt(ae);q.replace(/"/g,""),V(`Compra guardada correctamente No.${ae} Partida Generada ${q}`,{}),c.value=Ae.toString(),o.value=q.toString(),u.value=!0,x.value=!0}).finally(()=>{U.hide()})}}},Ie=async()=>{if(J.value){const s=await J.value.arrayBuffer(),t=xe(s),m=t.Sheets[t.SheetNames[0]],p=Je.sheet_to_json(m);let n=JSON.parse(G.getItem("empresa").toString()),w="";n!==null&&(w=n.nit);const Q=p.filter(f=>{if(w!==f["NIT del emisor"])return f;V("Existen documentos con el mismo nit de la empresa seleccionada, verifique si no esta intentando cargar un archivo de ventas!",{tipo:"negative",timeout:8500,progress:!0})}).map(f=>{if(w!==f["NIT del emisor"])return{documento:f["N\xFAmero del DTE"],serie:f.Serie,fecha:ke(f["Fecha de emisi\xF3n"]),tipo:f["Tipo de DTE (nombre)"],proveedor:f["Nombre completo del emisor"],nit:f["NIT del emisor"],compras:f["Monto (Gran Total)"],subtotal:(f["Monto (Gran Total)"]-f["IVA (monto de este impuesto)"]).toFixed(2),iva:f["IVA (monto de este impuesto)"],Cta:null,checked:!1}});v.value=Q}return 0},j=d("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZ2VuY2lhVmlydHVhbERURSIsImlzcyI6IlNBVCIsIm5pdCI6IjEwNDkwOTUwMSIsImV4cCI6MTcyNTY0MTk1MywiaWF0IjoxNzI1NTk4NzUzfQ.2KE72Se31MWfXb3hVNJhluyAh2Fn6Vw-puz7UwbPoTk"),Ne=()=>{const s=ue.create();j.value===""&&(console.log("Hacer login sat"),s.get("http://localhost:5000/get-token").then(t=>{console.log(t.data),j.value=t.data}).catch(t=>console.error("Error:",t)))};function ke(s){const t=new Date(s),m=t.getFullYear(),p=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),w=String(t.getHours()).padStart(2,"0"),k=String(t.getMinutes()).padStart(2,"0"),Q=String(t.getSeconds()).padStart(2,"0");return`${m}-${p}-${n} ${w}:${k}:${Q}`}const T=s=>{const[t,m,p]=s.split("/").map(Number),n=p.toString().padStart(2,"0"),w=m.toString().padStart(2,"0");return`${n}-${w}-${t}`},De=()=>{const s=ue.create();console.log(T(O.value),T(Y.value)),s.get("http://localhost:5000/get-fact",{headers:{Authorization:j.value},params:{nit:"104909501",fechai:T(O.value),fechaf:T(Y.value),tipo:"R"}}).then(t=>{const p=t.data.data.map(n=>({documento:n.numeroDocumento,serie:n.serie,fecha:n.fechaEmision,tipo:n.tipo,proveedor:n.nombreEmisor,nit:n.nitEmisor,total:n.granTotal,iva:n.totalIva}));v.value=p}).catch(t=>console.error("Error:",t))},Te=s=>{v.value=v.value.filter(t=>t.documento!==s)},Qe=()=>{v.value.push({documento:v.value.length+1})},Pe=le(()=>v.value.reduce((s,t)=>s+parseFloat(t.total||0),0).toFixed(2)),Ue=le(()=>v.value.reduce((s,t)=>s+parseFloat(t.iva||0),0).toFixed(2));function ee(s){const t=s.replace(/[\$,]/g,"");return parseFloat(t)}return{cuentasFilter:h,onBuscarCompra:s=>{D.get("compras/idCompra",{params:{id_compra:s}}).then(t=>{console.log(t.data),c.value=s,S.value=t.data.enc.mes,B.value=t.data.enc.id_periodo,_.value=t.data.enc.id_cuenta_contable,o.value=t.data.enc.id_poliza,u.value=!0;let p=t.data.det.map(n=>({id:1,Cta:{id:n.id_cuenta,nombre:n.nombre,correlativo:n.correlativo},documento:n.doc_no,serie:n.serie,fecha:n.fecha,tipo:n.tipo_documento,proveedor:n.proveedor,nit:n.nit_cedula,checked:!1,Importacion:n.importaciones,Servicios:n.servicios,Exentos:n.exentos,Valor:n.valor,total:ee(n.total),iva:ee(n.iva)}));v.value=p})},file:J,parsedCSV:we,visibleDate:Ve,fechai:O,fechaf:Y,convert:Ie,columns:ye,compras:v,getdata:Ne,getFacturas:De,eliminarFila:Te,agregarFila:Qe,calculoTotal:Pe,calculoIva:Ue,onClick:Fe,selectedCuentaEnc:_,cuentasn4:C,filterCuenta:z,getCuentasN4:M,cantFacturas:N,txtNoPartida:o,checkPartidaGenerada:u,txtNoCompra:c,mesesDelA\u00F1o:_e,periodoModel:g,mesesModel:S,periodos:Ce,disableBTN:x,showBuscarCompra:r,refBuscadorCompra:e,filterCuentas:$}},mounted(){this.getdata(),this.getCuentasN4()}}),Z=e=>(ve("data-v-1cd1a584"),e=e(),ge(),e),Ze={class:"row q-col-gutter-sm"},ea={class:"col-4"},aa={class:"col-4"},oa={class:"col-1"},la={class:"col-4"},ta={class:"col-2"},sa={class:"col-2 text-center"},na={class:"col-3"},ra={class:"col-12"},ia={class:"col-12"},da={class:"row q-col-gutter-sm"},ua={class:"col-5"},ca={class:"row items-center justify-end"},ma={class:"col-5"},pa={class:"row items-center justify-end"},fa={class:"col-2"},ba={class:"col-12"},va={class:"row q-ma-sm"},ga=Z(()=>i("div",{class:"col-9"},[i("div",{class:"text-h6"},"Detalle de Compras")],-1)),ha=Z(()=>i("div",{class:"col-1"},null,-1)),Ca={class:"col"},_a=Z(()=>i("strong",null,"Totales:",-1));function wa(e,r,C,h,_,N){const u=$e("buscador-compras");return fe(),be(Ye,{padding:""},{default:l(()=>[a(Be,null,{default:l(()=>[a(L,{label:"Registros Contables",icon:"paid"}),a(L,{label:"Ingreso",icon:"input"}),a(L,{label:"Libro Compras",icon:"shopping_bag"})]),_:1}),a(K,{class:"q-mt-md"},{default:l(()=>[a(H,null,{default:l(()=>[i("div",Ze,[i("div",ea,[a(F,{modelValue:e.txtNoCompra,"onUpdate:modelValue":r[0]||(r[0]=o=>e.txtNoCompra=o),type:"text",label:"No. Interno",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",aa,[a(A,{modelValue:e.mesesModel,"onUpdate:modelValue":r[1]||(r[1]=o=>e.mesesModel=o),options:e.mesesDelA\u00F1o,label:"Mes",outlined:"",dense:"","option-value":"id","option-label":"nombre",disable:e.txtNoCompra!=null},null,8,["modelValue","options","disable"])]),i("div",oa,[a(y,{color:"primary",outline:"",icon:"search",onClick:e.showBuscarCompra},null,8,["onClick"])]),i("div",la,[a(A,{modelValue:e.selectedCuentaEnc,"onUpdate:modelValue":r[2]||(r[2]=o=>e.selectedCuentaEnc=o),options:e.cuentasFilter,label:"Cuenta Haber",outlined:"",dense:"","option-value":"id","option-label":"descripcion","use-input":"","input-debounce":"0",onFilter:e.filterCuentas,clearable:""},null,8,["modelValue","options","onFilter"])]),i("div",ta,[a(F,{modelValue:e.cantFacturas,"onUpdate:modelValue":r[3]||(r[3]=o=>e.cantFacturas=o),type:"text",label:"Cant. Facturas",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",sa,[a(te,{"left-label":"",modelValue:e.checkPartidaGenerada,"onUpdate:modelValue":r[4]||(r[4]=o=>e.checkPartidaGenerada=o),label:"Partida generada",disable:!0},null,8,["modelValue"])]),i("div",na,[a(F,{modelValue:e.txtNoPartida,"onUpdate:modelValue":r[5]||(r[5]=o=>e.txtNoPartida=o),type:"text",label:"No.Partida",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",ra,[a(ze,{modelValue:e.visibleDate,"onUpdate:modelValue":r[6]||(r[6]=o=>e.visibleDate=o),label:"Consultar SAT"},null,8,["modelValue"])]),i("div",ia,[a(ie,null,{default:l(()=>[E(i("div",da,[i("div",ua,[a(F,{dense:"",outlined:"",modelValue:e.fechai,"onUpdate:modelValue":r[8]||(r[8]=o=>e.fechai=o),mask:"date",rules:["date"],label:"Fecha Inicial","hide-bottom-space":"",placeholder:"YYYY/MM/DD",clearable:""},{append:l(()=>[a(W,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(ne,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a(re,{modelValue:e.fechai,"onUpdate:modelValue":r[7]||(r[7]=o=>e.fechai=o)},{default:l(()=>[i("div",ca,[E(a(y,{label:"Cerrar",color:"primary",flat:""},null,512),[[de]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),i("div",ma,[a(F,{dense:"",outlined:"",modelValue:e.fechaf,"onUpdate:modelValue":r[10]||(r[10]=o=>e.fechaf=o),mask:"date",rules:["date"],"hide-bottom-space":"",label:"Fecha Final",placeholder:"YYYY/MM/DD",clearable:""},{append:l(()=>[a(W,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(ne,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a(re,{modelValue:e.fechaf,"onUpdate:modelValue":r[9]||(r[9]=o=>e.fechaf=o)},{default:l(()=>[i("div",pa,[E(a(y,{label:"Cerrar",color:"primary",flat:""},null,512),[[de]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),i("div",fa,[a(y,{color:"primary",label:"Consultar",onClick:e.getFacturas},null,8,["onClick"])])],512),[[se,e.visibleDate]])]),_:1})]),i("div",ba,[a(ie,null,{default:l(()=>[E(a(Oe,{modelValue:e.file,"onUpdate:modelValue":[r[11]||(r[11]=o=>e.file=o),e.convert],label:"Seleccione o arraste un archivo para importar(.xls)",outlined:"",accept:".xls",clearable:""},null,8,["modelValue","onUpdate:modelValue"]),[[se,!e.visibleDate]])]),_:1})])])]),_:1})]),_:1}),a(K,{class:"q-mt-sm"},{default:l(()=>[a(H,{class:"q-pt-none"},{default:l(()=>[i("div",va,[ga,ha,i("div",Ca,[a(y,{color:"primary",icon:"check",label:e.txtNoCompra?"Actualizar Partida":"Generar Partida",onClick:e.onClick,disable:e.disableBTN},null,8,["label","onClick","disable"])])]),a(he,{style:{height:"500px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.compras,columns:e.columns,"row-key":"id",dense:""},{"body-cell-Tipo":l(o=>[a(b,{props:o},{default:l(()=>[a(A,{modelValue:o.row.tipo,"onUpdate:modelValue":c=>o.row.tipo=c,options:[{label:"Factura",value:"FACT"},{label:"Cambiaria",value:"FCAM"},{label:"NC",value:"NCRE"}],borderless:"",dense:"","options-dense":"","map-options":"",class:"full-width"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell":l(o=>[a(b,{props:o},{default:l(()=>[a(F,{modelValue:o.row[o.col.field],"onUpdate:modelValue":c=>o.row[o.col.field]=c,"input-class":"text-right",dense:"",borderless:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-Cta":l(o=>[a(b,{props:o},{default:l(()=>[a(A,{modelValue:o.row.Cta,"onUpdate:modelValue":c=>o.row.Cta=c,options:e.cuentasFilter,"option-label":"descripcion","option-value":"id",dense:"",borderless:"","map-options":"","hide-selected":"","hide-bottom-space":"","use-input":"","fill-input":"",clearable:"",onFilter:e.filterCuenta,onFilterAbort:()=>{}},null,8,["modelValue","onUpdate:modelValue","options","onFilter"])]),_:2},1032,["props"])]),"body-cell-check":l(o=>[a(b,{props:o,align:"center"},{default:l(()=>[a(te,{modelValue:o.row.checked,"onUpdate:modelValue":c=>o.row.checked=c,color:"primary",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":l(o=>[a(b,{props:o},{default:l(()=>[a(y,{flat:"",round:"",icon:"delete",color:"negative",onClick:c=>e.eliminarFila(o.row.documento)},null,8,["onClick"])]),_:2},1032,["props"])]),"bottom-row":l(()=>[a(R,null,{default:l(()=>[a(b,{colspan:"7",class:"text-right"}),a(b,{class:"text-right"},{default:l(()=>[_a]),_:1}),a(b,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(b,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(b,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(b,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(b,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoIva),1)]),_:1})]),_:1})]),bottom:l(o=>[a(R,{props:o},{default:l(()=>[a(b,{colspan:"100%"},{default:l(()=>[a(y,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),_:1})]),_:2},1032,["props"])]),"no-data":l(o=>[a(R,{props:o},{default:l(()=>[a(b,{colspan:"100%"},{default:l(()=>[a(y,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),_:1})]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1}),a(u,{ref:"refBuscadorCompra",onCompraSeleccionada:e.onBuscarCompra},null,8,["onCompraSeleccionada"])]),_:1})}var Ba=pe(Xe,[["render",wa],["__scopeId","data-v-1cd1a584"]]);export{Ba as default};
