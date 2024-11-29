import{h as z}from"./QSelect.e09ded23.js";import{d as N,g as v,_ as M,o as q,aF as H,w as t,e as a,l as _,i as B,j as h,C as R,aG as A,aH as C,Q as L,aM as j,bp as K,bq as W,f as s,P as S,q as O,r as X,aI as Z}from"./index.64b8d3ad.js";import{Q as x}from"./QForm.8eb22274.js";import{Q as Y,a as c}from"./QTable.50902a32.js";import{Q as I}from"./QTr.13295898.js";import{Q as ee}from"./QPage.a1b7a453.js";import{a as y}from"./axios.a4c8dbe5.js";import{Q as ae,a as le}from"./QBar.d2c07ca1.js";import"./selection.51153791.js";import"./QList.2de29e49.js";const oe=N({name:"BuscadorPartida",emits:["partida-seleccionada"],setup(e,{emit:i}){const w=v(null),n=v(!1),m=v(""),P=[{name:"poliza",label:"Poliza",align:"left",field:"id_poliza",sortable:!0},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion",sortable:!0}],o=v([]),l=v([...o.value]),p=()=>{m.value===null?l.value=o.value:l.value=o.value.filter(f=>f.id_poliza.toLowerCase().includes(m.value)||f.descripcion.toLowerCase().includes(m.value.toLowerCase()))},D=(f,V)=>{n.value=!1,i("partida-seleccionada",V.id_poliza)},F=()=>{n.value=!1},Q=async()=>{var f;n.value=!0,await new Promise(V=>setTimeout(V,250)),(f=w.value)==null||f.focus(),k()},k=()=>{y.get("partidamanual",{params:{id_empresa:3,id_periodo:1}}).then(f=>{o.value=f.data,l.value=f.data})};return{refInputBuscar:w,dialogVisible:n,searchQuery:m,columns:P,partidas:o,filteredPartidas:l,filtrarPartidas:p,seleccionarPartida:D,cerrarDialogo:F,abrirDialogo:Q}}}),te=e=>(K("data-v-d00a8288"),e=e(),W(),e),ie=te(()=>s("div",{class:"text-h6"},"Buscador",-1));function re(e,i,w,n,m,P){return q(),H(j,{modelValue:e.dialogVisible,"onUpdate:modelValue":i[1]||(i[1]=o=>e.dialogVisible=o),persistent:""},{default:t(()=>[a(L,{style:{"min-width":"600px"}},{default:t(()=>[a(ae,null,{default:t(()=>[ie,a(le),a(_,{dense:"",flat:"",icon:"close",onClick:e.cerrarDialogo},null,8,["onClick"])]),_:1}),a(B,null,{default:t(()=>[a(h,{modelValue:e.searchQuery,"onUpdate:modelValue":[i[0]||(i[0]=o=>e.searchQuery=o),e.filtrarPartidas],ref:"refInputBuscar",label:"Buscar partida",dense:"",outlined:"",clearable:"",debounce:"350"},{append:t(()=>[a(R,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),a(Y,{rows:e.filteredPartidas,columns:e.columns,"row-key":"correlativo",style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",onRowDblclick:e.seleccionarPartida,dense:""},{"body-cell-correlativo":t(o=>[a(c,{props:o},{default:t(()=>[A(C(o.row.correlativo),1)]),_:2},1032,["props"])]),"body-cell-nombre":t(o=>[a(c,{props:o},{default:t(()=>[A(C(o.row.nombre),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowDblclick"])]),_:1})]),_:1},8,["modelValue"])}var de=M(oe,[["render",re],["__scopeId","data-v-d00a8288"]]);const U=new Date;U.setHours(0,-U.getTimezoneOffset(),0,0);let T=U.toJSON().slice(0,10);const ne=N({components:{BuscadorPartidas:de},setup(){var $;const e=v(null),i=($=S.getItem("user"))==null?void 0:$.toString(),w=[{name:"cuenta",label:"Cuenta",align:"left",field:"cuenta",sortable:!0,style:"width: 250px"},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion"},{name:"debe",label:"Debe",align:"right",field:"debe",style:"width: 150px"},{name:"haber",label:"Haber",align:"right",field:"haber",style:"width: 150px;"},{name:"acciones",label:"",field:"",align:"right",style:"width: 40px; padding:5px"}],n=v([{id:1,cuenta:"",descripcion:"",debe:0,haber:0}]),m=v([]),P=v([]),o=v({tipoPartida:"",idPartida:null,fecha:T,descripcion:"",operador:i}),l=v([{label:"Diario",value:"DR"},{label:"Ingreso",value:"ING"},{label:"Egreso",value:"EG"},{label:"Apertura",value:"APE"},{label:"Ajuste",value:"AJU"},{label:"Cierre",value:"cierre"}]),p=O(()=>n.value.reduce((r,d)=>r+(d.debe||0),0).toFixed(2)),D=O(()=>n.value.reduce((r,d)=>r+(d.haber||0),0).toFixed(2)),F=()=>{const d={id:(n.value.length===0?0:n.value.reduce((u,b)=>b.id>u?b.id:u,n.value[0].id))+1,cuenta:"",descripcion:"",debe:0,haber:0};n.value.push(d)},Q=r=>{n.value=n.value.filter(d=>d.id!==r)},k=(r=!1)=>{o.value={tipoPartida:r===!0?o.value.tipoPartida:"",idPartida:null,fecha:T,descripcion:"",operador:o.value.operador},n.value=[{id:1,cuenta:"",descripcion:"",debe:0,haber:0}]},f=()=>{let r=JSON.parse(S.getItem("empresa").toString()),d=S.getItem("periodo").toString();const u={_id_empresa:r.id,_tipo_poliza:o.value.tipoPartida,_fecha:o.value.fecha,_descripcion:o.value.descripcion,_usuario_opero:o.value.operador,_idperiodo:d,_usuario:i,_estado:"A",_detalles:n.value,_id_poliza:""};o.value.idPartida!==null&&o.value.idPartida!==""?(u._id_poliza=o.value.idPartida,y.put("partidamanual",u).then(b=>{alert("Partida actualizada correctamente")})):y.post("partidamanual",u).then(b=>{o.value.idPartida=b.data,alert("Partida generada correctamente")})},V=()=>{y.get("cuentasn4/combo").then(r=>{m.value=r.data})},G=()=>{var r;(r=e.value)==null||r.abrirDialogo()},E=r=>{y.get("partidamanual/poliza",{params:{id_poliza:r}}).then(d=>{o.value.idPartida=r,o.value.tipoPartida=d.data.enc.tipo_poliza,o.value.operador=d.data.enc.usuario,o.value.descripcion=d.data.enc.descripcion,o.value.fecha=J(d.data.enc.fecha);let b=d.data.det.map(g=>({id:1,cuenta:{id:g.id_cuenta,nombre:g.descripcion,correlativo:g.correlativo_cuenta,descripcion:g.cuenta},descripcion:g.descripcion,debe:g.debe,haber:g.haber}));n.value=b})};function J(r){const d=new Date(r),u=d.getFullYear(),b=String(d.getMonth()+1).padStart(2,"0"),g=String(d.getDate()).padStart(2,"0");return`${u}-${b}-${g}`}return{refBuscadorPartida:e,columns:w,detallePartida:n,cuentasDisponibles:m,cuentasFilter:P,form:o,tiposPartida:l,totalDebe:p,totalHaber:D,agregarFila:F,eliminarFila:Q,nuevaPartida:k,guardarPartida:f,getCuentasn4:V,showBuscarPartida:G,onBuscarPartida:E,getDatosPartida:()=>{console.log("buscar")},filterCuenta(r,d){if(r===""){d(()=>{P.value=m.value});return}d(()=>{const u=r.toLowerCase();P.value=m.value.filter(b=>b.descripcion.toLowerCase().indexOf(u)>-1)},u=>{r!==""&&u.options.length>0&&(u.setOptionIndex(-1),u.moveOptionSelection(1,!0))})}}},mounted(){this.getCuentasn4()}}),se={class:"row q-col-gutter-sm"},ue={class:"col-6"},ce={class:"col-5"},pe={class:"col-1"},me={class:"col-6"},fe={class:"col-6"},be={class:"col-12"},ve=s("div",{class:"col-12"},null,-1),ge={class:"col-12 text-center q-pa-md q-gutter-md"},he=s("strong",null,"Total:",-1),Pe={class:"row"},_e={class:"col"},we={class:"col text-right"},Ve={class:"text-subtitle1"};function ye(e,i,w,n,m,P){const o=X("buscador-partidas");return q(),H(ee,{padding:""},{default:t(()=>[a(L,null,{default:t(()=>[a(B,null,{default:t(()=>[a(x,{onSubmit:Z(e.guardarPartida,["prevent"])},{default:t(()=>[s("div",se,[s("div",ue,[a(z,{modelValue:e.form.tipoPartida,"onUpdate:modelValue":[i[0]||(i[0]=l=>e.form.tipoPartida=l),i[1]||(i[1]=l=>e.nuevaPartida(!0))],options:e.tiposPartida,label:"Tipo de Partida",outlined:"",dense:"","emit-value":"","map-options":""},null,8,["modelValue","options"])]),s("div",ce,[a(h,{modelValue:e.form.idPartida,"onUpdate:modelValue":i[2]||(i[2]=l=>e.form.idPartida=l),label:"Id Partida",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),s("div",pe,[a(_,{color:"primary",outline:"",icon:"search",onClick:e.showBuscarPartida},null,8,["onClick"])]),s("div",me,[a(h,{modelValue:e.form.operador,"onUpdate:modelValue":i[3]||(i[3]=l=>e.form.operador=l),disable:"",label:"Oper\xF3",outlined:"",dense:""},null,8,["modelValue"])]),s("div",fe,[a(h,{modelValue:e.form.fecha,"onUpdate:modelValue":i[4]||(i[4]=l=>e.form.fecha=l),outlined:"",dense:"",type:"date",style:{"color-scheme":"dark"},clearable:""},null,8,["modelValue"])]),s("div",be,[a(h,{modelValue:e.form.descripcion,"onUpdate:modelValue":i[5]||(i[5]=l=>e.form.descripcion=l),label:"Descripci\xF3n",outlined:"",dense:""},null,8,["modelValue"])]),ve,s("div",ge,[a(_,{label:"Guardar",color:"primary",push:"",class:"btn-fixed-width",onClick:e.guardarPartida},null,8,["onClick"]),a(_,{label:"Nueva Partida",color:"primary",flat:"",class:"btn-fixed-width2",onClick:i[6]||(i[6]=l=>e.nuevaPartida())})])])]),_:1},8,["onSubmit"])]),_:1}),a(B,null,{default:t(()=>[a(Y,{style:{height:"400px"},bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.detallePartida,columns:e.columns,"row-key":"id",flat:"",dense:""},{"body-cell-cuenta":t(l=>[a(c,{props:l},{default:t(()=>[a(z,{modelValue:l.row.cuenta,"onUpdate:modelValue":p=>l.row.cuenta=p,options:e.cuentasFilter,"option-label":"descripcion","option-value":"correlativo",dense:"",outlined:"","map-options":"","hide-selected":"","hide-bottom-space":"","use-input":"","fill-input":"",clearable:"",onFilter:e.filterCuenta,onFilterAbort:()=>{}},null,8,["modelValue","onUpdate:modelValue","options","onFilter"])]),_:2},1032,["props"])]),"body-cell-descripcion":t(l=>[a(c,{props:l},{default:t(()=>[a(h,{modelValue:l.row.cuenta.nombre,"onUpdate:modelValue":p=>l.row.cuenta.nombre=p,dense:"",outlined:"","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-debe":t(l=>[a(c,{props:l},{default:t(()=>[a(h,{modelValue:l.row.debe,"onUpdate:modelValue":p=>l.row.debe=p,type:"number",dense:"",outlined:"","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-haber":t(l=>[a(c,{props:l},{default:t(()=>[a(h,{modelValue:l.row.haber,"onUpdate:modelValue":p=>l.row.haber=p,type:"number",dense:"",outlined:"","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":t(l=>[a(c,{props:l},{default:t(()=>[a(_,{flat:"",round:"",icon:"delete",color:"negative",onClick:p=>e.eliminarFila(l.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),"bottom-row":t(()=>[a(I,null,{default:t(()=>[a(c),a(c,{class:"text-right"},{default:t(()=>[he]),_:1}),a(c,{class:"text-right"},{default:t(()=>[s("strong",null,C(e.totalDebe),1)]),_:1}),a(c,{class:"text-right"},{default:t(()=>[s("strong",null,C(e.totalHaber),1)]),_:1}),a(c)]),_:1})]),bottom:t(l=>[a(I,{props:l,style:{width:"100%"}},{default:t(()=>[s("div",Pe,[s("div",_e,[a(_,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),s("div",we,[s("div",Ve," Filas: "+C(e.detallePartida.length),1)])])]),_:2},1032,["props"])]),"no-data":t(l=>[a(I,{props:l},{default:t(()=>[a(c,{colspan:"100%"},{default:t(()=>[a(_,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),_:1})]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1}),a(o,{ref:"refBuscadorPartida",onPartidaSeleccionada:e.onBuscarPartida},null,8,["onPartidaSeleccionada"])]),_:1})}var Ae=M(ne,[["render",ye]]);export{Ae as default};
