import{a as j,Q as Fe}from"./QBreadcrumbs.9d3bd4a9.js";import{d as de,g as d,_ as ue,o as y,aE as ce,w as r,e as a,k as S,i as L,j as D,B as G,aF as W,aG as O,Q as q,aL as Qe,bo as ke,bp as Be,f as i,p as X,r as Ee,P as Te,a as ee,bk as Pe,b9 as Me,v as B,ap as ae,c as E,aI as oe,aJ as te}from"./index.b32bed5e.js";import{h as Y}from"./QSelect.a5d84a49.js";import{r as $e,u as Ue,Q as le,a as ne,b as ze}from"./xlsx.0041e740.js";import{Q as se,C as re}from"./ClosePopup.6a236885.js";import{Q as me,a as H}from"./QTable.3d55a0b4.js";import{Q as Ae}from"./QPage.fc1edd5b.js";import{a as T,c as ie,s as C,b as Je}from"./axios.b40a6d52.js";import{Q as je,a as Ye}from"./QBar.34d8f6c2.js";import"./selection.2848012d.js";import"./use-render-cache.3aae9b27.js";import"./QList.dfd7cb04.js";const Le=de({name:"BuscadorVentas",emits:["venta-seleccionada"],setup(e,{emit:n}){const h=d(null),v=d(!1),g=d(""),w=[{name:"empresa",label:"Empresa",align:"left",field:"nombre_empresa",sortable:!0},{name:"venta",label:"Venta",align:"left",field:"id_venta",sortable:!0},{name:"poliza",label:"Poliza",align:"left",field:"id_poliza",sortable:!0},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion",sortable:!0}],u=d([]),o=d([...u.value]),V=()=>{g.value===null?o.value=u.value:o.value=u.value.filter(p=>p.id_compra.toLowerCase().includes(g.value)||p.descripcion||p.nombre_empresa||p.id_poliza.toLowerCase().includes(g.value.toLowerCase()))},P=(p,_)=>{v.value=!1,n("venta-seleccionada",_.id_venta)},N=()=>{v.value=!1},F=async()=>{var p;v.value=!0,await new Promise(_=>setTimeout(_,250)),(p=h.value)==null||p.focus(),M()},M=()=>{T.get("ventas",{params:{id_empresa:3,id_periodo:1}}).then(p=>{u.value=p.data,o.value=p.data})};return{refInputBuscar:h,dialogVisible:v,searchQuery:g,columns:w,ventas:u,filteredVentas:o,filtrarVentas:V,seleccionarVenta:P,cerrarDialogo:N,abrirDialogo:F}}}),Ge=e=>(ke("data-v-473e3052"),e=e(),Be(),e),Oe=Ge(()=>i("div",{class:"text-h6"},"Buscador",-1));function qe(e,n,h,v,g,w){return y(),ce(Qe,{modelValue:e.dialogVisible,"onUpdate:modelValue":n[1]||(n[1]=u=>e.dialogVisible=u),persistent:""},{default:r(()=>[a(q,{style:{"min-width":"650px"}},{default:r(()=>[a(je,null,{default:r(()=>[Oe,a(Ye),a(S,{dense:"",flat:"",icon:"close",onClick:e.cerrarDialogo},null,8,["onClick"])]),_:1}),a(L,null,{default:r(()=>[a(D,{modelValue:e.searchQuery,"onUpdate:modelValue":[n[0]||(n[0]=u=>e.searchQuery=u),e.filtrarVentas],ref:"refInputBuscar",label:"Buscar Libro Ventas",dense:"",outlined:"",clearable:"",debounce:"350"},{append:r(()=>[a(G,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),a(me,{rows:e.filteredVentas,columns:e.columns,"row-key":"correlativo",style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",onRowDblclick:e.seleccionarVenta,dense:""},{"body-cell-correlativo":r(u=>[a(H,{props:u},{default:r(()=>[W(O(u.row.correlativo),1)]),_:2},1032,["props"])]),"body-cell-nombre":r(u=>[a(H,{props:u},{default:r(()=>[W(O(u.row.nombre),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowDblclick"])]),_:1})]),_:1},8,["modelValue"])}var He=ue(Le,[["render",qe],["__scopeId","data-v-473e3052"]]);const I=new Date;I.getDate();I.getMonth()+1;I.getFullYear();I.setHours(0,-I.getTimezoneOffset(),0,0);let R=I.toJSON().slice(0,10).replaceAll("-","/");console.log(R);const Re=de({components:{BuscadorVentas:He},setup(){const e=d(null),n=()=>{var l;(l=e.value)==null||l.abrirDialogo()},h=d([]),v=d(null),g=d(""),w=d(!1),u=d(""),o=d(""),V=()=>{T.get("/cuentasn4/QTable").then(l=>{h.value=l.data})},P=d(null),N=d(null),F=d(!1),M=d([{id:1,nombre:"2024"}]),p=d([{id:1,nombre:"Enero"},{id:2,nombre:"Febrero"},{id:3,nombre:"Marzo"},{id:4,nombre:"Abril"},{id:5,nombre:"Mayo"},{id:6,nombre:"Junio"},{id:7,nombre:"Julio"},{id:8,nombre:"Agosto"},{id:9,nombre:"Septiembre"},{id:10,nombre:"Octubre"},{id:11,nombre:"Noviembre"},{id:12,nombre:"Diciembre"}]),_=d(null),pe=d([]),be=d(!1),$=d(R),U=d(R),b=d([{}]),ve=[{name:"Doc",label:"Doc. No",field:"documento",align:"left"},{name:"Serie",label:"Serie",field:"serie",align:"left"},{name:"Fecha",label:"Fecha",field:"fecha",align:"left"},{name:"Tipo",label:"Tipo",field:"tipo",align:"left",style:"max-width:120px;width:100px;"},{name:"NIT",label:"NIT",field:"nit",align:"left"},{name:"Comprador",label:"Comprador",field:"comprador",align:"left"},{name:"Cta",label:"Cta",field:"Cta",align:"left",style:"max-width:150px;width:150px"},{name:"Exportaciones",label:"Exportaciones",field:"exportaciones",align:"left"},{name:"Bienes",label:"Bienes",field:"bienes",align:"left"},{name:"Servicios",label:"Servicios",field:"servicios",align:"left"},{name:"Exentos",label:"Exentos",field:"Exentos",align:"left"},{name:"Total",label:"Total",field:"total",align:"left"},{name:"Iva",label:"Iva",field:"iva",align:"left"}],fe=l=>{b.value=b.value.filter(t=>t.documento!==l)},ge=()=>{b.value.push({documento:b.value.length+1})};function he(l){const t=new Date(l),f=t.getFullYear(),m=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),A=String(t.getMinutes()).padStart(2,"0"),k=String(t.getSeconds()).padStart(2,"0");return`${f}-${m}-${s} ${c}:${A}:${k}`}const Ve=async()=>{if(_.value){const l=await _.value.arrayBuffer(),t=$e(l),f=t.Sheets[t.SheetNames[0]],s=Ue.sheet_to_json(f).map(c=>({documento:c["N\xFAmero del DTE"],serie:c.Serie,fecha:he(c["Fecha de emisi\xF3n"]),tipo:c["Tipo de DTE (nombre)"],nit:c["ID del receptor"],comprador:c["Nombre completo del receptor"],total:c["Monto (Gran Total)"],iva:c["IVA (monto de este impuesto)"],Cta:null}));b.value=s}return 0},z=d("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZ2VuY2lhVmlydHVhbERURSIsImlzcyI6IlNBVCIsIm5pdCI6IjEwNDkwOTUwMSIsImV4cCI6MTcyNDc3MjU3NiwiaWF0IjoxNzI0NzI5Mzc2fQ.1h1lDjyLsrL7ZH9inMvVZ9PHV-xtBsN6qVdPK0uHB54"),_e=()=>{const l=ie.create();z.value===""&&l.get("http://localhost:5000/get-token").then(t=>{console.log(t.data),z.value=t.data}).catch(t=>console.error("Error:",t))},Q=l=>{const[t,f,m]=l.split("/").map(Number),s=m.toString().padStart(2,"0"),c=f.toString().padStart(2,"0");return`${s}-${c}-${t}`},Ce=()=>{const l=ie.create();console.log(Q($.value),Q(U.value)),l.get("http://localhost:5000/get-fact",{headers:{Authorization:z.value},params:{nit:"104909501",fechai:Q($.value),fechaf:Q(U.value),tipo:"R"}}).then(t=>{const m=t.data.data.map(s=>({documento:s.numeroDocumento,serie:s.serie,fecha:s.fechaEmision,tipo:s.tipo,proveedor:s.nombreEmisor,nit:s.nitEmisor,total:s.granTotal,iva:s.totalIva}));console.log(m),b.value=m}).catch(t=>console.error("Error:",t))},we=l=>l.every(t=>t.Cta!==null),ye=async()=>{let l=!1;const t=sessionStorage.getItem("empresa");let f=0;if(t)f=JSON.parse(t).id;else{C("Debe Seleccionar Empresa",{tipo:"negative"}),l=!0;return}const m=N.value;if(!m){C("Debe Seleccionar el Mes",{tipo:"negative"}),l=!0;return}const s=v.value;if(!s){C("Debe Seleccionar la Cuenta Contable Para el Encabezado",{tipo:"negative"}),l=!0;return}if(b.value.length==0){C("Debe Ingresar al Menos un Detalle",{tipo:"negative"}),l=!0;return}if(!we(b.value)){C("Debe Indicar la cuenta contable para cada uno de los Detalles, verificar",{tipo:"negative"}),l=!0;return}let c=Te.getItem("periodo");if(!c){C("Debe Seleccionar el Periodo para la Empresa Correspondiente",{tipo:"negative"}),l=!0;return}if(!l){if(!await Je("Confirmaci\xF3n","Esta seguro de Ingresar la Compra?",{}))return;const k={_encabezado:[{_id_Empresa:f,_mes:(m==null?void 0:m.id)||0,_periodo:c,_id_poliza:0,_id_cuenta_contable:s.id,_usuario_ingresa:"usrtest",_estado:"A"}],_detalle:b.value};console.log(k),ee.show(),await T.post("/ventas",k).then(x=>{console.log(x.data);const Ie=x.data.fn_insertar_ventas_json,[K,J]=Ie.replace(/[()]/g,"").split(","),Ne=parseInt(K);J.replace(/"/g,""),C(`Venta guardada correctamente No.${K} Partida Generada ${J}`,{}),o.value=Ne.toString(),u.value=J.toString(),w.value=!0,F.value=!0}).finally(()=>{ee.hide()})}},Se=X(()=>b.value.reduce((l,t)=>l+parseFloat(t.total||0),0).toFixed(2)),De=X(()=>b.value.reduce((l,t)=>l+parseFloat(t.iva||0),0).toFixed(2));function Z(l){const t=l.replace(/[\$,]/g,"");return parseFloat(t)}return{file:_,parsedCSV:pe,visibleDate:be,fechai:$,fechaf:U,convert:Ve,columns:ve,ventas:b,getdata:_e,getFacturas:Ce,eliminarFila:fe,agregarFila:ge,calculoTotal:Se,calculoIva:De,selectedCuentaEnc:v,cuentasn4:h,getCuentasN4:V,cantFacturas:g,txtNoPartida:u,checkPartidaGenerada:w,txtNoVenta:o,mesesDelA\u00F1o:p,periodoModel:P,mesesModel:N,periodos:M,disableBTN:F,onClick:ye,onBuscarVenta:l=>{T.get("ventas/idVenta",{params:{id_venta:l}}).then(t=>{o.value=l,N.value=t.data.enc.id_periodo,v.value=t.data.enc.id_cuenta_contable,u.value=t.data.enc.id_poliza;let m=t.data.det.map(s=>({id:1,Cta:{id:s.id_cuenta,nombre:s.nombre},documento:s.doc_no,serie:s.serie,fecha:s.fecha,tipo:s.tipo_documento,proveedor:s.proveedor,nit:s.nit_cedula,checked:!1,Importacion:s.importaciones,Servicios:s.servicios,Exentos:s.exentos,Valor:s.valor,total:Z(s.total),iva:Z(s.iva)}));b.value=m})},refBuscadorVentas:e,showBuscarVentas:n}},mounted(){this.getCuentasN4(),this.getdata()}}),Ze={class:"row q-col-gutter-sm"},xe={class:"col-4"},Ke={class:"col-4"},We={class:"col-1"},Xe={class:"col-4"},ea={class:"col-2"},aa={class:"col-3 text-right"},oa={class:"col-3"},ta={class:"col-12"},la={class:"col-12"},na={class:"row q-col-gutter-sm"},sa={class:"col-5"},ra={class:"row items-center justify-end"},ia={class:"col-5"},da={class:"row items-center justify-end"},ua={class:"col-2"},ca={class:"col-12"},ma={class:"row q-ma-sm"},pa=i("div",{class:"col-9"},[i("div",{class:"text-h6"},"Detalle de Ventas")],-1),ba=i("div",{class:"col-1"},null,-1),va={class:"col"},fa={class:"table table-bordered",id:"preview-table"};function ga(e,n,h,v,g,w){const u=Ee("buscador-ventas");return y(),ce(Ae,{padding:""},{default:r(()=>[a(Fe,null,{default:r(()=>[a(j,{label:"Registros Contables",icon:"home"}),a(j,{label:"Ingreso",icon:"widgets"}),a(j,{label:"Libro Ventas",icon:"navigation"})]),_:1}),a(q,{class:"q-mt-md"},{default:r(()=>[a(L,null,{default:r(()=>[i("div",Ze,[i("div",xe,[a(D,{modelValue:e.txtNoVenta,"onUpdate:modelValue":n[0]||(n[0]=o=>e.txtNoVenta=o),type:"text",label:"No. Interno",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",Ke,[a(Y,{modelValue:e.mesesModel,"onUpdate:modelValue":n[1]||(n[1]=o=>e.mesesModel=o),options:e.mesesDelA\u00F1o,label:"Mes",outlined:"",dense:"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options"])]),i("div",We,[a(S,{color:"primary",outline:"",icon:"search",onClick:e.showBuscarVentas},null,8,["onClick"])]),i("div",Xe,[a(Y,{modelValue:e.selectedCuentaEnc,"onUpdate:modelValue":n[2]||(n[2]=o=>e.selectedCuentaEnc=o),options:e.cuentasn4,label:"Cuenta Debe",outlined:"",dense:"","option-value":"id","option-label":"nombre"},null,8,["modelValue","options"])]),i("div",ea,[a(D,{modelValue:e.cantFacturas,"onUpdate:modelValue":n[3]||(n[3]=o=>e.cantFacturas=o),type:"text",label:"Cant. Facturas",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",aa,[a(Pe,{"left-label":"",modelValue:e.checkPartidaGenerada,"onUpdate:modelValue":n[4]||(n[4]=o=>e.checkPartidaGenerada=o),label:"Partida generada",disable:!0},null,8,["modelValue"])]),i("div",oa,[a(D,{modelValue:e.txtNoPartida,"onUpdate:modelValue":n[5]||(n[5]=o=>e.txtNoPartida=o),type:"text",label:"No.Partida",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",ta,[a(Me,{modelValue:e.visibleDate,"onUpdate:modelValue":n[6]||(n[6]=o=>e.visibleDate=o),label:"Consultar SAT"},null,8,["modelValue"])]),i("div",la,[a(se,null,{default:r(()=>[B(i("div",na,[i("div",sa,[a(D,{dense:"",outlined:"",modelValue:e.fechai,"onUpdate:modelValue":n[8]||(n[8]=o=>e.fechai=o),mask:"date",rules:["date"],label:"Fecha Inicial","hide-bottom-space":"",placeholder:"YYYY/MM/DD",clearable:""},{append:r(()=>[a(G,{name:"event",class:"cursor-pointer"},{default:r(()=>[a(le,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[a(ne,{modelValue:e.fechai,"onUpdate:modelValue":n[7]||(n[7]=o=>e.fechai=o)},{default:r(()=>[i("div",ra,[B(a(S,{label:"Cerrar",color:"primary",flat:""},null,512),[[re]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),i("div",ia,[a(D,{dense:"",outlined:"",modelValue:e.fechaf,"onUpdate:modelValue":n[10]||(n[10]=o=>e.fechaf=o),mask:"date",rules:["date"],"hide-bottom-space":"",label:"Fecha Final",placeholder:"YYYY/MM/DD",clearable:""},{append:r(()=>[a(G,{name:"event",class:"cursor-pointer"},{default:r(()=>[a(le,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[a(ne,{modelValue:e.fechaf,"onUpdate:modelValue":n[9]||(n[9]=o=>e.fechaf=o)},{default:r(()=>[i("div",da,[B(a(S,{label:"Cerrar",color:"primary",flat:""},null,512),[[re]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),i("div",ua,[a(S,{color:"primary",label:"Consultar",onClick:e.getFacturas},null,8,["onClick"])])],512),[[ae,e.visibleDate]])]),_:1})]),i("div",ca,[a(se,null,{default:r(()=>[B(a(ze,{modelValue:e.file,"onUpdate:modelValue":[n[11]||(n[11]=o=>e.file=o),e.convert],label:"Seleccione o arraste un archivo para importar(.xls)",outlined:"",accept:".xls",clearable:""},null,8,["modelValue","onUpdate:modelValue"]),[[ae,!e.visibleDate]])]),_:1})])])]),_:1})]),_:1}),a(q,{class:"q-mt-sm"},{default:r(()=>[a(L,null,{default:r(()=>[i("div",ma,[pa,ba,i("div",va,[a(S,{color:"primary",icon:"check",label:e.txtNoVenta?"Actualizar Partida":"Generar Partida",onClick:e.onClick,disable:e.disableBTN},null,8,["label","onClick","disable"])])]),a(me,{style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.ventas,columns:e.columns,"row-key":"id",dense:""},{"body-cell-Cta":r(o=>[a(H,{props:o},{default:r(()=>[a(Y,{modelValue:o.row.Cta,"onUpdate:modelValue":V=>o.row.Cta=V,options:e.cuentasn4,borderless:"",dense:"","options-dense":"","use-input":"","input-debounce":"0",class:"custom-select","option-value":"id","option-label":"nombre",style:{width:"100%"}},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),i("table",fa,[i("tbody",null,[(y(!0),E(te,null,oe(e.parsedCSV,o=>(y(),E("tr",null,[(y(!0),E(te,null,oe(o,V=>(y(),E("td",null,O(V),1))),256))]))),256))])])]),_:1})]),_:1}),a(u,{ref:"refBuscadorVentas",onVentaSeleccionada:e.onBuscarVenta},null,8,["onVentaSeleccionada"])]),_:1})}var Ba=ue(Re,[["render",ga]]);export{Ba as default};