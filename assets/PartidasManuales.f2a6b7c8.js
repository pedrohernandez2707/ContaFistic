import{d as I}from"./QList.e1b348f8.js";import{h as q,m as A,M as G,O as R,c as S,z as J,k as j,U as O,r as v,_ as T,V as M,aB as N,a1 as o,Z as a,a6 as P,a4 as $,a5 as _,Q as Z,aC as z,aD as C,a2 as Y,b4 as K,bl as W,bm as X,$ as u,Y as x,b5 as ee}from"./index.636087c0.js";import{Q as ae}from"./QForm.c34f8ae7.js";import{Q as L,a as p}from"./QTable.ba9f47a7.js";import{Q as B}from"./QTr.56d0e9e6.js";import{Q as le}from"./QPage.1f755c2f.js";import{a as y}from"./axios.502daeff.js";import"./selection.5fba8b9b.js";import"./axios.bf56c3c5.js";const oe=q("div",{class:"q-space"});var te=A({name:"QSpace",setup(){return()=>oe}}),re=A({name:"QBar",props:{...G,dense:Boolean},setup(e,{slots:r}){const{proxy:{$q:n}}=j(),c=R(e,n),m=S(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${c.value===!0?"dark":"light"}`);return()=>q("div",{class:m.value,role:"toolbar"},J(r.default))}});const ie=O({name:"BuscadorPartida",emits:["partida-seleccionada"],setup(e,{emit:r}){const n=v(null),c=v(!1),m=v(""),d=[{name:"poliza",label:"Poliza",align:"left",field:"id_poliza",sortable:!0},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion",sortable:!0}],s=v([]),l=v([...s.value]),b=()=>{m.value===null?l.value=s.value:l.value=s.value.filter(f=>f.id_poliza.toLowerCase().includes(m.value)||f.descripcion.toLowerCase().includes(m.value.toLowerCase()))},D=(f,w)=>{c.value=!1,r("partida-seleccionada",w.id_poliza)},k=()=>{c.value=!1},F=async()=>{var f;c.value=!0,await new Promise(w=>setTimeout(w,250)),(f=n.value)==null||f.focus(),Q()},Q=()=>{y.get("partidamanual",{params:{id_empresa:3,id_periodo:1}}).then(f=>{s.value=f.data,l.value=f.data})};return{refInputBuscar:n,dialogVisible:c,searchQuery:m,columns:d,partidas:s,filteredPartidas:l,filtrarPartidas:b,seleccionarPartida:D,cerrarDialogo:k,abrirDialogo:F}}}),de=e=>(W("data-v-d00a8288"),e=e(),X(),e),se=de(()=>u("div",{class:"text-h6"},"Buscador",-1));function ne(e,r,n,c,m,d){return M(),N(K,{modelValue:e.dialogVisible,"onUpdate:modelValue":r[1]||(r[1]=s=>e.dialogVisible=s),persistent:""},{default:o(()=>[a(Y,{style:{"min-width":"600px"}},{default:o(()=>[a(re,null,{default:o(()=>[se,a(te),a(P,{dense:"",flat:"",icon:"close",onClick:e.cerrarDialogo},null,8,["onClick"])]),_:1}),a($,null,{default:o(()=>[a(_,{modelValue:e.searchQuery,"onUpdate:modelValue":[r[0]||(r[0]=s=>e.searchQuery=s),e.filtrarPartidas],ref:"refInputBuscar",label:"Buscar partida",dense:"",outlined:"",clearable:"",debounce:"350"},{append:o(()=>[a(Z,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),a(L,{rows:e.filteredPartidas,columns:e.columns,"row-key":"correlativo",style:{height:"400px"},flat:"",bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",onRowDblclick:e.seleccionarPartida,dense:""},{"body-cell-correlativo":o(s=>[a(p,{props:s},{default:o(()=>[z(C(s.row.correlativo),1)]),_:2},1032,["props"])]),"body-cell-nombre":o(s=>[a(p,{props:s},{default:o(()=>[z(C(s.row.nombre),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","onRowDblclick"])]),_:1})]),_:1},8,["modelValue"])}var ue=T(ie,[["render",ne],["__scopeId","data-v-d00a8288"]]);const U=new Date;U.setHours(0,-U.getTimezoneOffset(),0,0);let ce=U.toJSON().slice(0,10);const pe=O({components:{BuscadorPartidas:ue},setup(){const e=v(null),r=[{name:"cuenta",label:"Cuenta",align:"left",field:"cuenta",sortable:!0,style:"width: 250px"},{name:"descripcion",label:"Descripci\xF3n",align:"left",field:"descripcion"},{name:"debe",label:"Debe",align:"right",field:"debe",style:"width: 150px"},{name:"haber",label:"Haber",align:"right",field:"haber",style:"width: 150px;"},{name:"acciones",label:"",field:"",align:"right",style:"width: 40px; padding:5px"}],n=v([{id:1,cuenta:"",descripcion:"",debe:0,haber:0}]),c=v([]),m=v([]),d=v({tipoPartida:"",idPartida:"",fecha:ce,descripcion:"",operador:"usrtest"}),s=v([{label:"Diario",value:"DR"},{label:"Ingreso",value:"ING"},{label:"Egreso",value:"EG"},{label:"Apertura",value:"APE"},{label:"Ajuste",value:"AJU"},{label:"Cierre",value:"cierre"}]),l=S(()=>n.value.reduce((t,i)=>t+parseFloat(i.debe||0),0).toFixed(2)),b=S(()=>n.value.reduce((t,i)=>t+parseFloat(i.haber||0),0).toFixed(2)),D=()=>{const t={id:n.value.length+1,cuenta:"",descripcion:"",debe:0,haber:0};n.value.push(t)},k=t=>{n.value=n.value.filter(i=>i.id!==t)},F=()=>{d.value={tipoPartida:"",idPartida:"",fecha:"",descripcion:"",operador:""},n.value=[{id:1,cuenta:"",descripcion:"",debe:0,haber:0}]},Q=()=>{const t={_id_empresa:3,_tipo_poliza:d.value.tipoPartida,_fecha:d.value.fecha,_descripcion:d.value.descripcion,_usuario_opero:d.value.operador,_idperiodo:1,_usuario:"usrtest",_estado:"A",_detalles:n.value,_id_poliza:""};d.value.idPartida!==null||d.value.idPartida!==""?(t._id_poliza=d.value.idPartida,y.put("partidamanual",t).then(i=>{alert("guardado")})):y.post("partidamanual",t).then(i=>{d.value.idPartida=i.data})},f=()=>{y.get("cuentasn4/combo").then(t=>{c.value=t.data})},w=()=>{var t;(t=e.value)==null||t.abrirDialogo()},H=t=>{y.get("partidamanual/poliza",{params:{id_poliza:t}}).then(i=>{d.value.idPartida=t,d.value.tipoPartida=i.data.enc.tipo_poliza,d.value.operador=i.data.enc.usuario,d.value.descripcion=i.data.enc.descripcion,d.value.fecha=E(i.data.enc.fecha);let V=i.data.det.map(h=>({id:1,cuenta:{id:h.id_cuenta,nombre:h.descripcion,correlativo:h.correlativo_cuenta,descripcion:h.cuenta},descripcion:h.descripcion,debe:h.debe,haber:h.haber}));n.value=V})};function E(t){const i=new Date(t),g=i.getFullYear(),V=String(i.getMonth()+1).padStart(2,"0"),h=String(i.getDate()).padStart(2,"0");return`${g}-${V}-${h}`}return{refBuscadorPartida:e,columns:r,detallePartida:n,cuentasDisponibles:c,cuentasFilter:m,form:d,tiposPartida:s,totalDebe:l,totalHaber:b,agregarFila:D,eliminarFila:k,nuevaPartida:F,guardarPartida:Q,getCuentasn4:f,showBuscarPartida:w,onBuscarPartida:H,getDatosPartida:()=>{console.log("buscar")},filterCuenta(t,i){if(t===""){i(()=>{m.value=c.value});return}i(()=>{const g=t.toLowerCase();m.value=c.value.filter(V=>V.descripcion.toLowerCase().indexOf(g)>-1)},g=>{t!==""&&g.options.length>0&&(g.setOptionIndex(-1),g.moveOptionSelection(1,!0))})}}},mounted(){this.getCuentasn4()}}),me={class:"row q-col-gutter-sm"},be={class:"col-6"},fe={class:"col-5"},ve={class:"col-1"},he={class:"col-6"},ge={class:"col-6"},_e={class:"col-12"},Pe=u("div",{class:"col-12"},null,-1),we={class:"col-12 text-center q-pa-md q-gutter-md"},Ve=u("strong",null,"Total:",-1),ye={class:"row"},Ce={class:"col"},De={class:"col text-right"},ke={class:"text-subtitle1"};function Fe(e,r,n,c,m,d){const s=x("buscador-partidas");return M(),N(le,{padding:""},{default:o(()=>[a(Y,null,{default:o(()=>[a($,null,{default:o(()=>[a(ae,{onSubmit:ee(e.guardarPartida,["prevent"])},{default:o(()=>[u("div",me,[u("div",be,[a(I,{modelValue:e.form.tipoPartida,"onUpdate:modelValue":r[0]||(r[0]=l=>e.form.tipoPartida=l),options:e.tiposPartida,label:"Tipo de Partida",outlined:"",dense:"","emit-value":"","map-options":""},null,8,["modelValue","options"])]),u("div",fe,[a(_,{modelValue:e.form.idPartida,"onUpdate:modelValue":r[1]||(r[1]=l=>e.form.idPartida=l),label:"Id Partida",outlined:"",dense:"",disable:""},null,8,["modelValue"])]),u("div",ve,[a(P,{color:"primary",outline:"",icon:"search",onClick:e.showBuscarPartida},null,8,["onClick"])]),u("div",he,[a(_,{modelValue:e.form.operador,"onUpdate:modelValue":r[2]||(r[2]=l=>e.form.operador=l),disable:"",label:"Oper\xF3",outlined:"",dense:""},null,8,["modelValue"])]),u("div",ge,[a(_,{modelValue:e.form.fecha,"onUpdate:modelValue":r[3]||(r[3]=l=>e.form.fecha=l),outlined:"",dense:"",type:"date",style:{"color-scheme":"dark"},clearable:""},null,8,["modelValue"])]),u("div",_e,[a(_,{modelValue:e.form.descripcion,"onUpdate:modelValue":r[4]||(r[4]=l=>e.form.descripcion=l),label:"Descripci\xF3n",outlined:"",dense:""},null,8,["modelValue"])]),Pe,u("div",we,[a(P,{label:"Guardar",color:"primary",push:"",class:"btn-fixed-width",onClick:e.guardarPartida},null,8,["onClick"]),a(P,{label:"Nueva Partida",color:"primary",flat:"",class:"btn-fixed-width2",onClick:e.nuevaPartida},null,8,["onClick"])])])]),_:1},8,["onSubmit"])]),_:1}),a($,null,{default:o(()=>[a(L,{style:{height:"400px"},bordered:"","virtual-scroll":"",separator:"cell","rows-per-page-options":[0],class:"my-sticky-header-table",rows:e.detallePartida,columns:e.columns,"row-key":"id",flat:"",dense:""},{"body-cell-cuenta":o(l=>[a(p,{props:l},{default:o(()=>[a(I,{modelValue:l.row.cuenta,"onUpdate:modelValue":b=>l.row.cuenta=b,options:e.cuentasFilter,"option-label":"descripcion","option-value":"correlativo",dense:"",outlined:"","map-options":"","hide-selected":"","hide-bottom-space":"","use-input":"","fill-input":"",clearable:"",onFilter:e.filterCuenta,onFilterAbort:()=>{}},null,8,["modelValue","onUpdate:modelValue","options","onFilter"])]),_:2},1032,["props"])]),"body-cell-descripcion":o(l=>[a(p,{props:l},{default:o(()=>[a(_,{modelValue:l.row.cuenta.nombre,"onUpdate:modelValue":b=>l.row.cuenta.nombre=b,dense:"",outlined:"","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-debe":o(l=>[a(p,{props:l},{default:o(()=>[a(_,{modelValue:l.row.debe,"onUpdate:modelValue":b=>l.row.debe=b,type:"number",dense:"",outlined:"","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-haber":o(l=>[a(p,{props:l},{default:o(()=>[a(_,{modelValue:l.row.haber,"onUpdate:modelValue":b=>l.row.haber=b,type:"number",dense:"",outlined:"","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-acciones":o(l=>[a(p,{props:l},{default:o(()=>[a(P,{flat:"",round:"",icon:"delete",color:"negative",onClick:b=>e.eliminarFila(l.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),"bottom-row":o(()=>[a(B,null,{default:o(()=>[a(p),a(p,{class:"text-right"},{default:o(()=>[Ve]),_:1}),a(p,{class:"text-right"},{default:o(()=>[u("strong",null,C(e.totalDebe),1)]),_:1}),a(p,{class:"text-right"},{default:o(()=>[u("strong",null,C(e.totalHaber),1)]),_:1}),a(p)]),_:1})]),bottom:o(l=>[a(B,{props:l,style:{width:"100%"}},{default:o(()=>[u("div",ye,[u("div",Ce,[a(P,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),u("div",De,[u("div",ke," Filas: "+C(e.detallePartida.length),1)])])]),_:2},1032,["props"])]),"no-data":o(l=>[a(B,{props:l},{default:o(()=>[a(p,{colspan:"100%"},{default:o(()=>[a(P,{flat:"",icon:"add",label:"Agregar Fila",onClick:e.agregarFila},null,8,["onClick"])]),_:1})]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1}),a(s,{ref:"refBuscadorPartida",onPartidaSeleccionada:e.onBuscarPartida},null,8,["onPartidaSeleccionada"])]),_:1})}var Te=T(pe,[["render",Fe]]);export{Te as default};
