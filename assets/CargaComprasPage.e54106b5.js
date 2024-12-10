import{a as G,Q as Me}from"./QBreadcrumbs.60ddcb96.js";import{d as pe,g as d,_ as fe,o as be,aF as ve,w as l,e as a,l as S,i as W,j as N,C as K,aG as le,aH as I,Q as X,aM as $e,bp as ge,bq as he,f as i,q as te,r as ze,P as R,a as E,bl as se,ba as xe,x as A,aq as ne}from"./index.14025cc8.js";import{h as B}from"./QSelect.b340c281.js";import{r as Je,u as Le,Q as re,a as ie,b as Oe}from"./xlsx.b9c8e621.js";import{Q as de,C as ue}from"./ClosePopup.9cb0d324.js";import{Q as Ce,a as v}from"./QTable.152353bf.js";import{Q as H}from"./QTr.7d73f901.js";import{Q as Ye}from"./QPage.163258aa.js";import{a as T,s as y,b as je,c as ce}from"./axios.b6f67141.js";import{Q as qe,a as Ge}from"./QBar.22f90c92.js";import"./selection.a921a89a.js";import"./use-render-cache.3aae9b27.js";import"./QList.adafd1f5.js";const Re=pe({name:"BuscadorCompras",emits:["compra-seleccionada"],setup(e,{emit:r}){const _=d(null),C=d(!1),w=d(""),k=[{name:"empresa",label:"Empresa",align:"left",field:"nombre_empresa",sortable:!0},{name:"compra",label:"Compra",align:"left",field:"id_compra",sortable:!0},{name:"poliza",label:"Poliza",align:"left",field:"id_poliza",sortable:!0},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion",sortable:!0}],u=d([]),o=d([...u.value]),f=()=>{w.value===null?o.value=u.value:o.value=u.value.filter(g=>g.id_compra.toLowerCase().includes(w.value)||g.descripcion||g.nombre_empresa||g.id_poliza.toLowerCase().includes(w.value.toLowerCase()))},M=(g,F)=>{C.value=!1,r("compra-seleccionada",F.id_compra)},$=()=>{C.value=!1},z=async()=>{var g;C.value=!0,await new Promise(F=>setTimeout(F,250)),(g=_.value)==null||g.focus(),x()},x=()=>{T.get("compras",{params:{id_empresa:3,id_periodo:1}}).then(g=>{u.value=g.data,o.value=g.data})};return{refInputBuscar:_,dialogVisible:C,searchQuery:w,columns:k,compras:u,filteredCompras:o,filtrarCompras:f,seleccionarCompra:M,cerrarDialogo:$,abrirDialogo:z}}}),He=e=>(ge("data-v-3d0f112b"),e=e(),he(),e),We=He(()=>i("div",{class:"text-h6"},"Buscador",-1));function Ke(e,r,_,C,w,k){return be(),ve($e,{modelValue:e.dialogVisible,"onUpdate:modelValue":r[1]||(r[1]=u=>e.dialogVisible=u),persistent:""},{default:l(()=>[a(X,{style:{"min-width":"650px"}},{default:l(()=>[a(qe,null,{default:l(()=>[We,a(Ge),a(S,{dense:"",flat:"",icon:"close",onClick:e.cerrarDialogo},null,8,["onClick"])]),_:1}),a(W,null,{default:l(()=>[a(N,{modelValue:e.searchQuery,"onUpdate:modelValue":[r[0]||(r[0]=u=>e.searchQuery=u),e.filtrarCompras],ref:"refInputBuscar",label:"Buscar Libro Compras",dense:"",outlined:"",clearable:"",debounce:"350"},{append:l(()=>[a(K,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),a(Ce,{rows:e.filteredCompras,columns:e.columns,"row-key":"correlativo",style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",onRowDblclick:e.seleccionarCompra,dense:""},{"body-cell-correlativo":l(u=>[a(v,{props:u},{default:l(()=>[le(I(u.row.correlativo),1)]),_:2},1032,["props"])]),"body-cell-nombre":l(u=>[a(v,{props:u},{default:l(()=>[le(I(u.row.nombre),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowDblclick"])]),_:1})]),_:1},8,["modelValue"])}var Xe=fe(Re,[["render",Ke],["__scopeId","data-v-3d0f112b"]]);const Z=new Date;Z.setHours(0,-Z.getTimezoneOffset(),0,0);let me=Z.toJSON().slice(0,10).replaceAll("-","/");const Ze=pe({components:{BuscadorCompras:Xe},setup(){const e=d(null),r=()=>{var s;(s=e.value)==null||s.abrirDialogo()},_=d([]),C=d([]),w=d(null),k=d(""),u=d(!1),o=d(""),f=d(null),M=d(null),$=()=>{f.value=null,T.get("/cuentasn4/combo").then(s=>{_.value=s.data})},z=(s,t)=>{if(s===""){t(()=>{C.value=[..._.value]});return}const c=s.toLowerCase();t(()=>{C.value=_.value.filter(p=>p.descripcion.toLowerCase().includes(c))})},x=(s,t)=>{if(s===""){t(()=>{C.value=_.value});return}t(()=>{const c=s.toLowerCase();C.value=_.value.filter(p=>isNaN(c)?p.descripcion.toLowerCase().includes(c.toLowerCase()):p.descripcion.toLowerCase().startsWith(c.toString()))},c=>{s!==""&&c.options.length>0&&(c.setOptionIndex(-1),c.moveOptionSelection(1,!0))})},g=d(null),F=d(null),J=d(!1),_e=d([{id:1,nombre:"2024"}]),we=d([{id:1,nombre:"Enero"},{id:2,nombre:"Febrero"},{id:3,nombre:"Marzo"},{id:4,nombre:"Abril"},{id:5,nombre:"Mayo"},{id:6,nombre:"Junio"},{id:7,nombre:"Julio"},{id:8,nombre:"Agosto"},{id:9,nombre:"Septiembre"},{id:10,nombre:"Octubre"},{id:11,nombre:"Noviembre"},{id:12,nombre:"Diciembre"}]),L=d(null),Ve=d([]),ye=d(!1),O=d(me),Y=d(me),h=d([{}]),Se=[{name:"Doc",label:"Doc. No",field:"documento",align:"left"},{name:"Serie",label:"Serie",field:"serie",align:"left"},{name:"Fecha",label:"Fecha",field:"fecha",align:"left",sortable:!0,style:"min-width:120px;width:120px"},{name:"Tipo",label:"Tipo",field:"tipo",align:"left",style:"min-width:120px;max-width:120px;width:120px;"},{name:"Proveedor",label:"Proveedor",field:"proveedor",align:"left",style:"width: auto;min-width:125px;"},{name:"NIT",label:"NIT",field:"nit",align:"left",style:"min-width:100px;width:100px"},{name:"Cta",label:"Cta",field:"Cta",align:"left",style:"max-width:150px;width:150px"},{name:"check",label:"Factura Pagada",field:"checked",align:"center",style:"width: 60px;max-width:60px;"},{name:"Compras",label:"Compras",field:"compras",align:"left"},{name:"Servicios",label:"Servicios",field:"servicios",align:"left"},{name:"Exentos",label:"Exentos",field:"exentos",align:"left"},{name:"SubTotal",label:"SubTotal",field:"subtotal",align:"left"},{name:"Iva",label:"Iva",field:"iva",align:"left"},{name:"acciones",label:"",field:"",align:"right",style:"width: 40px; padding:5px"}],Fe=s=>s.every(t=>t.Cta!==null),Ne=async()=>{let s=!1;const t=JSON.parse(R.getItem("empresa").toString());let c=0;if(t)c=t.id;else{y("Debe Seleccionar Empresa",{tipo:"negative"}),s=!0;return}const p=F.value;if(!p){y("Debe Seleccionar el Mes",{tipo:"negative"}),s=!0;return}const n=w.value;if(!n){y("Debe Seleccionar la Cuenta Contable Para el Encabezado",{tipo:"negative"}),s=!0;return}if(h.value.length==0){y("Debe Ingresar al Menos un Detalle",{tipo:"negative"}),s=!0;return}if(!Fe(h.value)){y("Debe Indicar la cuenta contable para cada uno de los Detalles, verificar",{tipo:"negative"}),s=!0;return}let V=R.getItem("periodo");if(!V){y("Debe Seleccionar el Periodo para la Empresa Correspondiente",{tipo:"negative"}),s=!0;return}if(!s){let D=f.value;if(!await je("Confirmaci\xF3n","Esta seguro de "+(D!==null?"Actualizar la Compra: "+D:"Ingresar la Compra?"),{}))return;const b=h.value.map(m=>({Cta:m.Cta,documento:m.documento,serie:m.serie,fecha:m.fecha,tipo:m.tipo,proveedor:m.proveedor,nit:m.nit,compras:m.compras,servicios:m.servicios,exentos:m.exentos,valor:m.valor,iva:m.iva,total:(isNaN(parseFloat(m.servicios))?0:parseFloat(m.servicios))+(isNaN(parseFloat(m.compras))?0:parseFloat(m.compras))}));if(console.log("\u{1F680} ~ comprasdet ~ comprasdet:",b),f.value!=null){const m={_encabezado:[{_id_compra:f.value,_id_cuenta_contable:n&&n.id?n.id:n,_usuario_ingresa:"usrtest",_estado:"A",_p_id_poliza:o.value,_mes:F.value}],_detalle:b};E.show(),await T.put("/compras",m).then(U=>{console.log(U.data),U.data.fn_insertar_compras_json,y("Compra actualizada correctamente, Partida Actualizada",{}),J.value=!0}).finally(()=>{E.hide()})}else{const m={_encabezado:[{_id_Empresa:c,_mes:(p==null?void 0:p.id)||0,_periodo:V,_id_poliza:0,_id_cuenta_contable:n.id,_usuario_ingresa:"usrtest",_estado:"A"}],_detalle:b};E.show(),await T.post("/compras",m).then(U=>{const Ae=U.data.fn_insertar_compras_json,[oe,q]=Ae.replace(/[()]/g,"").split(","),Be=parseInt(oe);q.replace(/"/g,""),y(`Compra guardada correctamente No.${oe} Partida Generada ${q}`,{}),f.value=Be.toString(),o.value=q.toString(),u.value=!0,J.value=!0}).finally(()=>{E.hide()})}}},Ie=async()=>{if(L.value){const s=await L.value.arrayBuffer(),t=Je(s),c=t.Sheets[t.SheetNames[0]],p=Le.sheet_to_json(c);let n=JSON.parse(R.getItem("empresa").toString()),V="";n!==null&&(V=n.nit);const P=p.filter(b=>{if(V!==b["NIT del emisor"])return b;y("Existen documentos con el mismo nit de la empresa seleccionada, verifique si no esta intentando cargar un archivo de ventas!",{tipo:"negative",timeout:8500,progress:!0})}).map(b=>{if(V!==b["NIT del emisor"])return{documento:b["N\xFAmero del DTE"],serie:b.Serie,fecha:De(b["Fecha de emisi\xF3n"]),tipo:b["Tipo de DTE (nombre)"],proveedor:b["Nombre completo del emisor"],nit:b["NIT del emisor"],compras:b["Monto (Gran Total)"],subtotal:(b["Monto (Gran Total)"]-b["IVA (monto de este impuesto)"]).toFixed(2),iva:b["IVA (monto de este impuesto)"],Cta:null,checked:!1}});h.value=P}return 0},j=d("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZ2VuY2lhVmlydHVhbERURSIsImlzcyI6IlNBVCIsIm5pdCI6IjEwNDkwOTUwMSIsImV4cCI6MTcyNTY0MTk1MywiaWF0IjoxNzI1NTk4NzUzfQ.2KE72Se31MWfXb3hVNJhluyAh2Fn6Vw-puz7UwbPoTk"),ke=()=>{const s=ce.create();j.value===""&&(console.log("Hacer login sat"),s.get("http://localhost:5000/get-token").then(t=>{console.log(t.data),j.value=t.data}).catch(t=>console.error("Error:",t)))};function De(s){const t=new Date(s),c=t.getFullYear(),p=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),V=String(t.getHours()).padStart(2,"0"),D=String(t.getMinutes()).padStart(2,"0"),P=String(t.getSeconds()).padStart(2,"0");return`${c}-${p}-${n} ${V}:${D}:${P}`}const Q=s=>{const[t,c,p]=s.split("/").map(Number),n=p.toString().padStart(2,"0"),V=c.toString().padStart(2,"0");return`${n}-${V}-${t}`},Te=()=>{const s=ce.create();console.log(Q(O.value),Q(Y.value)),s.get("http://localhost:5000/get-fact",{headers:{Authorization:j.value},params:{nit:"104909501",fechai:Q(O.value),fechaf:Q(Y.value),tipo:"R"}}).then(t=>{const p=t.data.data.map(n=>({documento:n.numeroDocumento,serie:n.serie,fecha:n.fechaEmision,tipo:n.tipo,proveedor:n.nombreEmisor,nit:n.nitEmisor,total:n.granTotal,iva:n.totalIva}));h.value=p}).catch(t=>console.error("Error:",t))},Qe=s=>{h.value=h.value.filter(t=>t.documento!==s)},Pe=()=>{h.value.push({documento:h.value.length+1})},Ue=te(()=>h.value.reduce((s,t)=>s+parseFloat(t.total||0),0).toFixed(2)),Ee=te(()=>h.value.reduce((s,t)=>s+parseFloat(t.iva||0),0).toFixed(2));function ae(s){const t=s.replace(/[\$,]/g,"");return parseFloat(t)}return{cuentasFilter:C,onBuscarCompra:s=>{T.get("compras/idCompra",{params:{id_compra:s}}).then(t=>{console.log(t.data),f.value=s,F.value=t.data.enc.mes,M.value=t.data.enc.id_periodo,w.value=t.data.enc.id_cuenta_contable,o.value=t.data.enc.id_poliza,u.value=!0;let p=t.data.det.map(n=>({id:1,Cta:{id:n.id_cuenta,nombre:n.nombre,correlativo:n.correlativo},documento:n.doc_no,serie:n.serie,fecha:n.fecha,tipo:n.tipo_documento,proveedor:n.proveedor,nit:n.nit_cedula,checked:!1,Importacion:n.importaciones,Servicios:n.servicios,Exentos:n.exentos,Valor:n.valor,total:ae(n.total),iva:ae(n.iva)}));h.value=p})},file:L,parsedCSV:Ve,visibleDate:ye,fechai:O,fechaf:Y,convert:Ie,columns:Se,compras:h,getdata:ke,getFacturas:Te,eliminarFila:Qe,agregarFila:Pe,calculoTotal:Ue,calculoIva:Ee,onClick:Ne,selectedCuentaEnc:w,cuentasn4:_,filterCuenta:x,getCuentasN4:$,cantFacturas:k,txtNoPartida:o,checkPartidaGenerada:u,txtNoCompra:f,mesesDelA\u00F1o:we,periodoModel:g,mesesModel:F,periodos:_e,disableBTN:J,showBuscarCompra:r,refBuscadorCompra:e,filterCuentas:z}},mounted(){this.getdata(),this.getCuentasN4()}}),ee=e=>(ge("data-v-41468480"),e=e(),he(),e),ea={class:"row q-col-gutter-sm"},aa={class:"col-4"},oa={class:"col-4"},la={class:"col-1"},ta={class:"col-4"},sa={class:"col-2"},na={class:"col-2 text-center"},ra={class:"col-3"},ia={class:"col-12"},da={class:"col-12"},ua={class:"row q-col-gutter-sm"},ca={class:"col-5"},ma={class:"row items-center justify-end"},pa={class:"col-5"},fa={class:"row items-center justify-end"},ba={class:"col-2"},va={class:"col-12"},ga={class:"row q-ma-sm"},ha=ee(()=>i("div",{class:"col-9"},[i("div",{class:"text-h6"},"Detalle de Compras")],-1)),Ca=ee(()=>i("div",{class:"col-1"},null,-1)),_a={class:"col"},wa=ee(()=>i("strong",null,"Totales:",-1));function Va(e,r,_,C,w,k){const u=ze("buscador-compras");return be(),ve(Ye,{padding:""},{default:l(()=>[a(Me,null,{default:l(()=>[a(G,{label:"Registros Contables",icon:"paid"}),a(G,{label:"Ingreso",icon:"input"}),a(G,{label:"Libro Compras",icon:"shopping_bag"})]),_:1}),a(X,{class:"q-mt-md"},{default:l(()=>[a(W,null,{default:l(()=>[i("div",ea,[i("div",aa,[a(N,{modelValue:e.txtNoCompra,"onUpdate:modelValue":r[0]||(r[0]=o=>e.txtNoCompra=o),type:"text",label:"No. Interno",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",oa,[a(B,{modelValue:e.mesesModel,"onUpdate:modelValue":r[1]||(r[1]=o=>e.mesesModel=o),options:e.mesesDelA\u00F1o,label:"Mes",outlined:"",dense:"","option-value":"id","option-label":"nombre",disable:e.txtNoCompra!=null},null,8,["modelValue","options","disable"])]),i("div",la,[a(S,{color:"primary",outline:"",icon:"search",onClick:e.showBuscarCompra},null,8,["onClick"])]),i("div",ta,[a(B,{modelValue:e.selectedCuentaEnc,"onUpdate:modelValue":r[2]||(r[2]=o=>e.selectedCuentaEnc=o),options:e.cuentasFilter,label:"Cuenta Haber",outlined:"",dense:"","option-value":"id","option-label":"descripcion","use-input":"","input-debounce":"0",onFilter:e.filterCuentas,clearable:""},null,8,["modelValue","options","onFilter"])]),i("div",sa,[a(N,{modelValue:e.cantFacturas,"onUpdate:modelValue":r[3]||(r[3]=o=>e.cantFacturas=o),type:"text",label:"Cant. Facturas",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",na,[a(se,{"left-label":"",modelValue:e.checkPartidaGenerada,"onUpdate:modelValue":r[4]||(r[4]=o=>e.checkPartidaGenerada=o),label:"Partida generada",disable:!0},null,8,["modelValue"])]),i("div",ra,[a(N,{modelValue:e.txtNoPartida,"onUpdate:modelValue":r[5]||(r[5]=o=>e.txtNoPartida=o),type:"text",label:"No.Partida",outlined:"",dense:"",disable:!0},null,8,["modelValue"])]),i("div",ia,[a(xe,{modelValue:e.visibleDate,"onUpdate:modelValue":r[6]||(r[6]=o=>e.visibleDate=o),label:"Consultar SAT"},null,8,["modelValue"])]),i("div",da,[a(de,null,{default:l(()=>[A(i("div",ua,[i("div",ca,[a(N,{dense:"",outlined:"",modelValue:e.fechai,"onUpdate:modelValue":r[8]||(r[8]=o=>e.fechai=o),mask:"date",rules:["date"],label:"Fecha Inicial","hide-bottom-space":"",placeholder:"YYYY/MM/DD",clearable:""},{append:l(()=>[a(K,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(re,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a(ie,{modelValue:e.fechai,"onUpdate:modelValue":r[7]||(r[7]=o=>e.fechai=o)},{default:l(()=>[i("div",ma,[A(a(S,{label:"Cerrar",color:"primary",flat:""},null,512),[[ue]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),i("div",pa,[a(N,{dense:"",outlined:"",modelValue:e.fechaf,"onUpdate:modelValue":r[10]||(r[10]=o=>e.fechaf=o),mask:"date",rules:["date"],"hide-bottom-space":"",label:"Fecha Final",placeholder:"YYYY/MM/DD",clearable:""},{append:l(()=>[a(K,{name:"event",class:"cursor-pointer"},{default:l(()=>[a(re,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[a(ie,{modelValue:e.fechaf,"onUpdate:modelValue":r[9]||(r[9]=o=>e.fechaf=o)},{default:l(()=>[i("div",fa,[A(a(S,{label:"Cerrar",color:"primary",flat:""},null,512),[[ue]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),i("div",ba,[a(S,{color:"primary",label:"Consultar",onClick:e.getFacturas},null,8,["onClick"])])],512),[[ne,e.visibleDate]])]),_:1})]),i("div",va,[a(de,null,{default:l(()=>[A(a(Oe,{modelValue:e.file,"onUpdate:modelValue":[r[11]||(r[11]=o=>e.file=o),e.convert],label:"Seleccione o arraste un archivo para importar(.xls)",outlined:"",accept:".xls",clearable:""},null,8,["modelValue","onUpdate:modelValue"]),[[ne,!e.visibleDate]])]),_:1})])])]),_:1})]),_:1}),a(X,{class:"q-mt-sm"},{default:l(()=>[a(W,{class:"q-pt-none"},{default:l(()=>[i("div",ga,[ha,Ca,i("div",_a,[a(S,{color:"primary",icon:"check",label:e.txtNoCompra?"Actualizar Partida":"Generar Partida",onClick:e.onClick,disable:e.disableBTN},null,8,["label","onClick","disable"])])]),a(Ce,{style:{height:"500px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.compras,columns:e.columns,"row-key":"id",dense:""},{"body-cell-Tipo":l(o=>[a(v,{props:o},{default:l(()=>[a(B,{modelValue:o.row.tipo,"onUpdate:modelValue":f=>o.row.tipo=f,options:[{label:"Factura",value:"FACT"},{label:"Cambiaria",value:"FCAM"},{label:"NC",value:"NCRE"}],borderless:"",dense:"","options-dense":"","map-options":"",class:"full-width"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell":l(o=>[a(v,{props:o},{default:l(()=>[a(N,{modelValue:o.row[o.col.field],"onUpdate:modelValue":f=>o.row[o.col.field]=f,"input-class":"text-right",dense:"",borderless:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-Cta":l(o=>[a(v,{props:o},{default:l(()=>[a(B,{modelValue:o.row.Cta,"onUpdate:modelValue":f=>o.row.Cta=f,options:e.cuentasFilter,"option-label":"descripcion","option-value":"id",dense:"",borderless:"","map-options":"","hide-selected":"","hide-bottom-space":"","use-input":"","fill-input":"",clearable:"",onFilter:e.filterCuenta,onFilterAbort:()=>{}},null,8,["modelValue","onUpdate:modelValue","options","onFilter"])]),_:2},1032,["props"])]),"body-cell-check":l(o=>[a(v,{props:o,align:"center"},{default:l(()=>[a(se,{modelValue:o.row.checked,"onUpdate:modelValue":f=>o.row.checked=f,color:"primary",dense:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":l(o=>[a(v,{props:o},{default:l(()=>[a(S,{flat:"",round:"",icon:"delete",color:"negative",onClick:f=>e.eliminarFila(o.row.documento)},null,8,["onClick"])]),_:2},1032,["props"])]),"bottom-row":l(()=>[a(H,null,{default:l(()=>[a(v,{colspan:"7",class:"text-right"}),a(v,{class:"text-right"},{default:l(()=>[wa]),_:1}),a(v,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(v,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(v,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(v,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoTotal),1)]),_:1}),a(v,{class:"text-right"},{default:l(()=>[i("strong",null,I(e.calculoIva),1)]),_:1})]),_:1})]),bottom:l(o=>[a(H,{props:o},{default:l(()=>[a(v,{colspan:"100%"},{default:l(()=>[a(S,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),_:1})]),_:2},1032,["props"])]),"no-data":l(o=>[a(H,{props:o},{default:l(()=>[a(v,{colspan:"100%"},{default:l(()=>[a(S,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),_:1})]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1}),a(u,{ref:"refBuscadorCompra",onCompraSeleccionada:e.onBuscarCompra},null,8,["onCompraSeleccionada"])]),_:1})}var Ma=fe(Ze,[["render",Va],["__scopeId","data-v-41468480"]]);export{Ma as default};
