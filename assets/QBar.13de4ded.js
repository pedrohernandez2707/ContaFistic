import{x as e,H as s,a4 as c,a5 as p,p as u,S as l,E as d}from"./index.0eec7d61.js";const m=e("div",{class:"q-space"});var v=s({name:"QSpace",setup(){return()=>m}}),q=s({name:"QBar",props:{...c,dense:Boolean},setup(a,{slots:r}){const{proxy:{$q:t}}=d(),n=p(a,t),o=u(()=>`q-bar row no-wrap items-center q-bar--${a.dense===!0?"dense":"standard"}  q-bar--${n.value===!0?"dark":"light"}`);return()=>e("div",{class:o.value,role:"toolbar"},l(r.default))}});export{q as Q,v as a};